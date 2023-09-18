import React, {useContext, useEffect, useRef, useState} from "react";
import {Logos} from "../../assets";
import {Link} from "react-router-dom";
import "./ReplyVideoPreview.css";
import QuickReply from "../Modals/VideoPreviewModals/QuickReply";
import {useNavigate} from "react-router";
import {useUploadConversationFiles} from "../../hooks/useConversation";
import {useStoreConversation} from "../../store/conversation";
import {useGlobalInfo} from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
import {MediaStreamContext} from './MediaStreamContext';


const mimeType = 'video/webm; codecs="opus,vp8"';

const ReplyVideoPreviewComp = () => {
    let stream;
    const [streamClosing, setStreamClosing] = useState(null); // State to store the stream
    const liveVideoFeed = useRef(null);
    const {loading, setLoading, videoType} = useGlobalInfo()
    const [open, setOpen] = useState(false);
    const [openMicModal, setOpenMicModal] = useState(false);
    const [openQuickReply, setOpenQuickReply] = useState(false);
    const navigate = useNavigate();
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const {setMediaStream, setVideoStream} = useContext(MediaStreamContext);


    function VideoHandler() {
        if (streamClosing) {
            streamClosing.getTracks().forEach((track) => track.stop()); // Stop the video stream
        }
        navigate(videoType == 'video' ? "/AddVideo" : '/reply');
    }

    // USAMA Code start --- Uploading vido and audio from system/device
    const setFileData = useStoreConversation((state) => state.setFileData);
    const uploadData = useRef(null);
    const fileData = useRef(null);
    const toast = useRef("");
    const {mutate, isLoading, isError} = useUploadConversationFiles();
    const showError = () => {
        toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Unable to Upload file",
            life: 3000,
        });
    };

    const handleFileUpload = (event) => {
        if (streamClosing) {
            streamClosing.getTracks().forEach((track) => track.stop()); // Stop the video stream
        }
        setLoading(true)
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        // if (file.type.startsWith("video/")) {
        //   formData.append("type", "video");
        // } else if (file.type.startsWith("audio/")) {
        formData.append("type", "conversation");
        // }

        fileData.current = formData;
        handleUpload();
    };
    const handleUpload = async () => {
        setLoading(true);
        if (fileData.current) {
            mutate(fileData.current, {
                onSuccess: (data) => {
                    setFileData(data.data);
                    navigate(`/approve/conversation`);
                    setLoading(false);
                },
                onError: (error) => {
                    showError();
                    setLoading(false);
                },
            });
        }

        // setLoading(false);
    };
    // USAMA Code ends Here --- Uploading vido  from system/device
    const [isOn, setIsOn] = useState("");
    const [position, setPosition] = useState(isOn ? "right" : "left");
    const toggleSwitch = () => {
        setIsOn(!isOn);
        setPosition(position === "left" ? "right" : "left");
    };


    useEffect(() => {
        const getMedia = async () => {
            try {
                const videoConstraints = {
                    audio: false,
                    video: true,
                };
                const audioConstraints = {audio: true};

                const audioStream = await navigator.mediaDevices.getUserMedia(
                    audioConstraints
                );
                const videoStream = await navigator.mediaDevices.getUserMedia(
                    videoConstraints
                );

                stream = new MediaStream([
                    ...videoStream.getVideoTracks(),
                    ...audioStream.getAudioTracks(),
                ]);


                if (liveVideoFeed.current) {
                    liveVideoFeed.current.srcObject = stream;
                    setMediaStream(stream); // Set the stream in the context
                    setVideoStream(videoStream);
                    setStreamClosing(stream);
                    return stream;
                } else {
                    throw new Error;
                }
            } catch (err) {
                console.log(err);
            }
        };

        getMedia();

        // getCameras();
    }, []);

    return (
        <>
            {loading ? <GlobalLoaderCopy/> :
                <div className="relative ">
                    <QuickReply
                        open={openQuickReply}
                        setOpen={setOpenQuickReply}
                        width={1000}
                        title="Add  a quick reply"
                        label="Quick reply"
                    />
                    <div className="flex justify-between items-center p-2">
                        <div className="flex items-center gap-2">
                            <img
                                src={Logos.ArrowLeft}
                                alt=""
                                className="cursor-pointer w-[20px] xxxxl:w-[30px]"
                                onClick={() => {
                                    VideoHandler();
                                }}
                            />
                            <h1 className=" text-[18px] font-[500] leading-[30px] text-[#262626] xxxxl:text-[30px] xxxxl:leading-[28px]">
                                Video Preview
                            </h1>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            {/* <Link to="#">
              <img
                src={Logos.RecordVideoPreview}
                alt=""
                className="icon-size"
                onClick={() => setOpen(true)}
              />
            </Link>
            <Link to="#">
              <img
                src={Logos.MicroPhone}
                alt=""
                className="icon-size"
                onClick={() => {
                  setOpenMicModal(true);
                }}
              />
            </Link> */}
                            {videoType == 'conversation' &&
                                <>
                                    <Link to="#">
                                        <img
                                            src={Logos.AddFolder}
                                            alt=""
                                            className="icon-size"
                                            onClick={() => {
                                                setOpenQuickReply(true);
                                            }}
                                        />
                                    </Link>
                                    <Link to="#">
                                        <img
                                            src={Logos.Upload}
                                            alt=""
                                            className="icon-size"
                                            onClick={() => uploadData.current.click()}
                                        />
                                    </Link>
                                    <input
                                        type="file"
                                        accept="audio/*, video/*"
                                        ref={uploadData}
                                        style={{display: "none"}}
                                        onChange={handleFileUpload}
                                    />
                                </>
                            }
                        </div>
                    </div>
                    <div
                        className="w-full video_div"
                        style={{height: "calc(100vh - 155px)"}}
                    >
                        <div className="content3">
                            <video
                                // style={{ transform: "scaleX(-1)" }}
                                ref={liveVideoFeed}
                                autoPlay
                                muted
                                className="live-player content"
                            ></video>
                            <div
                                className={`mt-2 flex flex-col rounded-2xl`}
                                style={{height: "calc(100vh - 175px)"}}
                            >
                                {isOn && (
                                    <div
                                        className="bg-[#94A2F2] opacity-[75%] rounded absolute  w-[100%] xxl:w-[100%]"
                                        style={{height: "calc(100vh - 155px)"}}
                                    >
                                        <p className=" text-white   flex justify-center p-8 xxxxl:text-[30px] ">
                                            Add Some talking points to help you along....
                                        </p>
                                    </div>
                                )}
                                <div className="pl-10 pt-2">
                                    <h1 className=" text-[16px] font-[400] leading-[22px] text-white py-2  xxxxl:text-[28px] xxxxl:leading-[38px]">
                                        Replying to...
                                    </h1>
                                    <h1 className=" text-[20px] font-[500] leading-[28px] text-white py-1 xxxxl:text-[32px] xxxxl:leading-[38px]">
                                        Ryan Jones
                                    </h1>
                                    <p className=" sm:text-[16px] font-[400] leading-[22px] text-white text-[14px] xxxxl:text-[26px] xxxxl:leading-[28px]">
                                        ryanjones@example.com
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col justify-end items-center gap-3 pb-6 "
                                    style={{height: "calc(100vh - 150px)"}}
                                >
                                    <div className="flex items-center justify-center">
                                        <h1 className="text-white xxxxl:text-[28px] xxxxl:leading-[28px]">
                                            Hit the record button to start
                                        </h1>
                                    </div>
                                    <div className="flex relative  justify-center items-end ">
                                        <div className="flex items-center gap-4  cursor-pointer">
                                            {/* <Link to="#"></Link> */}
                                            <Link to={`/demaon/${videoType}`}>
                                                <img
                                                    src={Logos.VideoPLayBtn}
                                                    alt=""
                                                    className="xxxxl:w-[170px]"
                                                    // onClick={startRecording}
                                                    // onClick={startRecording} disabled={isRecording}
                                                />
                                            </Link>
                                            <Link to={videoType == 'video' ? "/AddVideo" : '/reply'}>
                                                <img
                                                    src={Logos.CancelButton}
                                                    alt=""
                                                    className="xxxxl:w-[60px]"
                                                    onClick={
                                                        () => {
                                                            streamClosing.getTracks().forEach((track) => track.stop()); // Stop the video stream
                                                        }
                                                    }
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

        </>
    );
};

export default ReplyVideoPreviewComp;
