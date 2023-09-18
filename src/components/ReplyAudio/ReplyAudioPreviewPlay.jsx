import React, {useContext, useEffect, useRef, useState} from "react";
import {Logos} from "../../assets";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import "./ReplyAudio.css";
import {sendFileMessage, useUploadConversationFiles,} from "../../hooks/useConversation";
import {useStoreConversation} from "../../store/conversation";
import {useGlobalInfo} from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
import {AudioStreamContext} from "./AudioStreamContext";
import VideoModal from "../Modals/VideoPreviewModals/VideoModal";

const mimeType = "audio/webm";

const ReplyAudioPreviewPlay = () => {
    const navigate = useNavigate();
    const [openMicModal, setOpenMicModal] =
        useState(false);
    const {time, setTime} = useGlobalInfo();
    const [isRunning, setIsRunning] = useState(true)
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [audio, setAudio] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [isRecording, setIsRecording] = useState(true);
    const {mutate, isLoading, isError} = useUploadConversationFiles();
    const setFileData = useStoreConversation((state) => state.setFileData);
    const getFileData = useStoreConversation((state) => state.fileData);
    const {loading, setLoading} = useGlobalInfo()
    const fileData = useRef(null);
    const {mediaStream, setMediaStream} = useContext(AudioStreamContext);


    useEffect(() => {
        const startRecording = (mediaStream) => {
            setRecordingStatus("recording");
            const media = new MediaRecorder(mediaStream, {type: mimeType});

            mediaRecorder.current = media;

            mediaRecorder.current.start();

            let localAudioChunks = [];

            mediaRecorder.current.ondataavailable = (event) => {
                if (typeof event.data === "undefined") return;
                if (event.data.size === 0) return;
                localAudioChunks.push(event.data);
            };

            setAudioChunks(localAudioChunks);
            setIsRecording(true);
        };

        startRecording(mediaStream);

    }, []);// An empty dependency array makes this useEffect run once on mount.

    const pauseRecording = async () => {
        // console.log(mediaRecorder.current.state);
        if (mediaRecorder && mediaRecorder.current.state === "recording") {
            if (isRunning) {
                setIsRunning(false);
            }
            mediaRecorder.current.pause();
        }
    };

    const resumeRecording = async () => {
        if (mediaRecorder && mediaRecorder.current.state === "paused") {
            if (!isRunning && time > 0) {
                setIsRunning(true);
            }
            mediaRecorder.current.resume();
        }
    };

    const [isFirstFunction, setIsFirstFunction] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const getPlayPauseIcon = () => {
        return isPlaying ? Logos.VideoPLayBtn : Logos.VideoPreviewPlay;
    };


    const handleClick = () => {
        setIsPlaying((prevState) => !prevState);
        if (isFirstFunction) {
            // Call the first function
            pauseRecording();
        } else {
            // Call the second function
            resumeRecording();
        }
        // Toggle the state variable for the next click
        setIsFirstFunction(!isFirstFunction);
    };

    const stopRecording = () => {
        setIsRecording(false);
        setRecordingStatus("inactive");
        mediaRecorder.current.stop();
        // Stop the media tracks and release the resources
        const stream = mediaRecorder.current.stream;
        stream.getTracks().forEach((track) => track.stop());
        stream.getTracks().forEach((track) => stream.removeTrack(track));
        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, {type: mimeType});
            const audioUrl = URL.createObjectURL(audioBlob);

            setAudio(audioUrl);
            setAudioChunks([]);


            // usama code start
            const formData = new FormData();
            formData.append("file", audioBlob, "recorded_audio.weba");
            formData.append("type", "conversation");
            fileData.current = formData;
            setIsRunning(false)
            setTime(0)
            if (fileData.current) {
                setLoading(true)
                mutate(fileData.current, {
                    onSuccess: async (data) => {
                        setLoading(false)
                        await setFileData(data.data);
                        // console.log(getFileData);
                        // sendMessage();

                        // navigate("/audio-approve");
                    },
                    onError: (error) => {
                        showError();
                        setLoading(false)
                    },
                });
            }
            // usama code ends
        };
        setIsRecording(false); // Update isRecording state when recording stops
    };

    const uploadFile = () => {
        sendMessage();
    };

    const sendMessage = () => {
        // console.log("Sending Message");
        // console.log(getFileData);
        const payload = getFileData;
        const data = sendFileMessage(payload);
        if (data) {
            navigate("/conversation");
        }
    };

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, time, setTime]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    const VideoHandler = () => {
        navigate("/reply-audio-preview");
    };
    // Arslan's code for start
    // const time = useTimerStore((state) => state.time);

    // const formatTime = (timeInSeconds) => {
    //   const minutes = Math.floor((timeInSeconds / 1000 / 60) % 60);
    //   const seconds = Math.floor((timeInSeconds / 1000) % 60) % 60;
    //   return `${minutes.toString().padStart(2, "0")}:${seconds
    //     .toString()
    //     .padStart(2, "0")}`;
    // };

    // useEffect(() => {
    //   const isRunning = useTimerStore.getState().isRunning;
    //   if (!isRunning) {
    //     useTimerStore.setState({ time: 0 });
    //   }
    // }, []);
    // Arslan's code for timer end


    return (
        <>
            {loading ? <GlobalLoaderCopy/> : <div>
                {/* <h2 className="rec">Audio Recorder</h2> */}
                <VideoModal
                    open={openMicModal}
                    setOpen={setOpenMicModal}
                    width={600}
                    title="Save to library"
                    label="save"
                />
                <main>
                    {/* <div className="audio-controls">
          {recordingStatus === "recording" ? (
            <button onClick={stopRecording} type="button">
              Stop Recording
            </button>
          ) : null}
        </div>
            <a download href={audio}>
              Download Recording
            </a>
        {isRecording && <p>Recording...</p>} */}
                    {/* {audio && (
          <div className="audio-player">
            <audio src={audio} controls></audio>
          </div>
        )} */}
                </main>
                <div className="flex justify-between items-center p-2">
                    <div className="flex items-center gap-2 py-2">
                        <img
                            src={Logos.ArrowLeft}
                            alt=""
                            className="cursor-pointer w-[20px] xxxxl:w-[30px]"
                            onClick={() => {
                                VideoHandler();
                            }}
                        />
                        <h1 className=" title-size font-[500] leading-[30px] text-[#262626] ">
                            Audio Preview
                        </h1>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        {!isRecording && (
                            <Link to="#">
                                <img
                                    src={
                                        Logos.SaveIconVideoPreview
                                    }
                                    alt=""
                                    className="icon-size"
                                    onClick={() => {
                                        setOpenMicModal(true);
                                    }}
                                />
                            </Link>
                        )}
                    </div>
                </div>
                <div
                    className={`bg-contain w-full  border-[1px] border-[#EBEBEB] border-solid mt-2 p-5 shadow-md flex flex-col`}
                    style={{height: "calc(100vh - 150px)"}}
                >
                    <div
                        className="flex justify-center items-end "
                        style={{height: "calc(100vh - 150px)"}}
                    >
                        <img src={Logos.ReplyAudioPreview} alt="" className="xxxxl:w-[40%]"/>
                    </div>
                    <div
                        className="flex flex-col justify-end items-center gap-3 "
                        style={{height: "calc(100vh - 150px)"}}
                    >
                        {audio && (
                            <div className="audio-player">
                                <audio
                                    style={{width: "80vw"}}
                                    className="w-[80vw]"
                                    src={audio}
                                    controls
                                ></audio>
                            </div>
                        )}
                        {isRecording && (
                            <div className="flex flex-col	 justify-center items-center gap-4 ">
                                <div className="text-[#94A2F2]">{formatTime(time)}</div>
                                <div className="flex items-center gap-4 cursor-pointer">
                                    <Link>
                                        <img
                                            src={getPlayPauseIcon()}
                                            alt="image"
                                            className=" xxxxl:w-[150px] mb-5"
                                            onClick={handleClick}
                                        />
                                    </Link>
                                    <div className="flex items-center gap-4 mb-5 cursor-pointer">
                                        <Link to={"#"}>
                                            <img
                                                src={Logos.TickIcon}
                                                alt=""
                                                className=" xxxxl:w-[150px] mb-2 ml-2"
                                                onClick={stopRecording}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* yes no button  */}

                        {!isRecording && (
                            <div className="flex justify-center items-end">
                                <div className="flex items-center gap-5 cursor-pointer">
                                    {/* <Link to="/conversation"> */}
                                    <img
                                        src={Logos.ApproveYes}
                                        alt=""
                                        className=""
                                        style={{width: "calc(2.5rem + 1vw)"}}
                                        onClick={() => uploadFile()}
                                    />
                                    {/* </Link> */}
                                    <Link to="/reply-audio-preview">
                                        <img
                                            src={Logos.ApproveNo}
                                            alt=""
                                            className=""
                                            style={{width: "calc(2.5rem + 1vw)"}}
                                        />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>}
        </>

    );
};

export default ReplyAudioPreviewPlay;
