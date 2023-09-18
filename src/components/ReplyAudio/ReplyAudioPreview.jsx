import React, {useContext, useEffect, useRef, useState} from "react";
import {Logos} from "../../assets";
import {Link} from "react-router-dom";
import QuickReply from "../Modal/AudioPreview/QuickReply";
import VideoModal from "../Modals/VideoPreviewModals/VideoModal";
import {useNavigate} from "react-router";
import {useUploadConversationFiles} from "../../hooks/useConversation";
import {Toast} from "primereact/toast";
import {useStoreConversation} from "../../store/conversation";
import {useGlobalInfo} from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
import {AudioStreamContext} from './AudioStreamContext';


const data2 = [
    {
        title: "Education follow-up",
    },
    {
        title: "Donation thank you",
    },
    {
        title: "Immigration response",
    },
    {
        title: "Crime",
    },
    {
        title: "Tax policy reply",
    },
    {
        title: "Why I’m running",
    },
    {
        title: "Qualifications",
    },
];
const ReplyAudioPreview = () => {
    const [openMicModal, setOpenMicModal] = useState(false);
    const [openQuickReply2, setOpenQuickReply2] = useState(false);
    const [streamClosing, setStreamClosing] = useState(null); // State to store the stream
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [audio, setAudio] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const {setMediaStream} = useContext(AudioStreamContext);


    useEffect(() => {
        const getMicrophonePermission = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setMediaStream(mediaStream)
                setStreamClosing(mediaStream)
                setPermission(true);
            } catch (err) {
                console.log(err.message);
            }
        };

        getMicrophonePermission();
    }, [])

    const navigate = useNavigate();

    function VideoHandler() {
        if (streamClosing) {
            streamClosing.getTracks().forEach((track) => track.stop()); // Stop the video stream
        }
        navigate("/reply");
    }

    const [isOn, setIsOn] = useState(false);

    const Switch = () => {
        setIsOn(!isOn);
    };
    const {loading, setLoading} = useGlobalInfo()
    // USAMA Code start --- Uploading vido and audio from system/device
    const setFileData = useStoreConversation((state) => state.setFileData);
    const getFileData = useStoreConversation((state) => state.fileData);
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

        formData.append("type", "conversation");

        fileData.current = formData;
        handleUpload();
    };
    const handleUpload = async () => {
        setLoading(true)
        if (fileData.current) {
            mutate(fileData.current, {
                onSuccess: (data) => {
                    setFileData(data.data);
                    navigate("/audio-approve");
                    setLoading(false)
                },
                onError: (error) => {
                    showError();
                    setLoading(false)
                },
            });
        }
    };
    // USAMA Code ends Here --- Uploading audio from system/device

    // Arslan's code start for timer
    // const { start, stop } = useTimerStore();

    const handleImageClick = () => {
        // const isRunning = useTimerStore.getState().isRunning;
        // if (isRunning) {
        //   stop();
        // } else {
        //   start();
        // }
    };

    return (
        <>
            {loading ? <GlobalLoaderCopy/> : <>
                <QuickReply
                    open={openQuickReply2}
                    data={data2}
                    setOpen={setOpenQuickReply2}
                    img={Logos.RoundAudio}
                    width={800}
                    title="Add  a quick reply"
                    label="Quick reply"
                />
                <VideoModal
                    open={openMicModal}
                    setOpen={setOpenMicModal}
                    width={800}
                    title="Microphone selection"
                    label="audio"
                />
                <div className="relative">
                    {/* <div>
          <AnimatedLoader content={"hidden"} />
        </div> */}
                    <div className="flex justify-between items-center p-2">
                        <div className="flex items-center gap-2">
                            <img
                                src={Logos.ArrowLeft}
                                alt=""
                                className="cursor-pointer w-[18px] xxxxl:w-[30px]"
                                onClick={() => {
                                    VideoHandler();
                                }}
                            />
                            <h1 className=" font-[500] leading-[30px] text-[#262626] title-size">
                                Start Recording
                            </h1>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            {/* <Link to="#">
              <img
                src={Logos.MicroPhone}
                alt=""
                className="icon-size"
                onClick={() => {
                  setOpenMicModal(true);
                }}
              />
            </Link> */}
                            <Link to="#">
                                <img
                                    src={Logos.AddFolder}
                                    alt=""
                                    onClick={() => {
                                        setOpenQuickReply2(true);
                                    }}
                                    className="icon-size cursor-pointer"
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
                        </div>
                    </div>
                    <div
                        className={`bg-contain w-full  relative border-[1px] border-[#EBEBEB] border-solid mt-2 shadow-md rounded-md flex flex-col`}
                        style={{height: "calc(100vh - 150px)"}}
                    >
                        {isOn && (
                            <div
                                className="bg-[#94A2F2] opacity-[75%] absolute rounded  w-[90%] xxl:w-[100%]"
                                style={{height: "calc(100vh - 150px)"}}
                            >
                                <p className="flex text-[17px] font-[500] justify-center p-8 xxxxl:text-[30px]">
                                    Add Some talking points to help you along....
                                </p>
                            </div>
                        )}
                        <div
                            className="flex justify-center items-end "
                            style={{height: "calc(100vh - 150px)"}}
                        >
                            <img
                                src={Logos.ReplyAudioPreview}
                                alt=""
                                className="xxxxl:w-[40%]"
                            />
                        </div>
                        <div
                            className="flex flex-col justify-end items-center gap-3"
                            style={{height: "calc(100vh - 150px)"}}
                        >
                            <div className="flex items-center justify-center">
                                <h1 className="text-[#A0A0A0] xxxxl:text-[26px]">
                                    Hit the record button to start
                                </h1>
                            </div>
                            <div className="flex justify-center items-end ">
                                <div className="flex items-center gap-4 z-10 pb-7 cursor-pointer">
                                    <Link to="/audio-play">
                                        <img
                                            src={Logos.VideoPLayBtn}
                                            alt=""
                                            className="w-[80px] xxxxl:w-[170px]"
                                            onClick={handleImageClick}
                                        />
                                    </Link>

                                    <Link to="/reply">
                                        <img
                                            src={Logos.CancelButton}
                                            alt=""
                                            className="w-[30px] xxxxl:w-[60px]"
                                            onClick={() => {
                                                streamClosing.getTracks().forEach((track) => track.stop()); // Stop the
                                                                                                            // video
                                                                                                            // stream
                                            }
                                            }
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Toast ref={toast}/>
                </div>
            </>}
        </>
    );
};

export default ReplyAudioPreview;
