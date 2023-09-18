import { useState, useRef, useEffect, useContext } from "react";
import { Logos } from "../../assets";
import "./ReplyVideoPreview.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { postVideo } from "../../hooks/useVideo";
// import { sendFileMessage } from "../../hooks/useConversation";
import {
  useUploadConversationFiles,
  sendFileMessage,
} from "../../hooks/useConversation";

const mimeType = 'video/webm; codecs="opus,vp8"';
import { useStoreConversation } from "../../store/conversation";
import { useGlobalInfo } from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
import { MediaStreamContext } from "./MediaStreamContext";
import VideoModal from "../Modals/VideoPreviewModals/VideoModal";
import { updateStep } from "../../hooks/useVideo";
import { useMutation } from "react-query";

const VideoRecorder = () => {
  let localVideoChunks = [];
  const mediaRecorder = useRef(null);
  const liveVideoFeed = useRef(null);

  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [videoChunks, setVideoChunks] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordingStop, setIsRecordingStop] = useState(false);
  const { loading, setLoading, videoType, stepId } = useGlobalInfo();
  const [openMicModal, setOpenMicModal] = useState(false);
  const [sendChat, setSendChat] = useState();
  const navigate = useNavigate();
  const { mutate, isLoading, isError } = useUploadConversationFiles();
  const setFileData = useStoreConversation((state) => state.setFileData);
  const getFileData = useStoreConversation((state) => state.fileData);
  const fileData = useRef(null);
  const { mediaStream, setMediaStream } = useContext(MediaStreamContext);
  let { videoStream, setVideoStream } = useContext(MediaStreamContext);
  const { time, setTime } = useGlobalInfo();
  const [isRunning, setIsRunning] = useState(true);

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
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    const startRecording = async (stream) => {
      setTime(0);
      setRecordingStatus("recording");

      const media = new MediaRecorder(stream, {
        mimeType,
      });

      mediaRecorder.current = media;

      mediaRecorder.current.start();

      // let localVideoChunks = [];

      mediaRecorder.current.ondataavailable = (event) => {
        if (typeof event.data === "undefined") return;
        if (event.data.size === 0) return;
        localVideoChunks.push(event.data);
      };

      setVideoChunks(localVideoChunks);
      setIsRecording(true);
    };

    const initializeRecording = async () => {
      // const stream = await getCameraPermission();
      liveVideoFeed.current.srcObject = videoStream;
      const stream = mediaStream;
      await startRecording(stream);
    };

    initializeRecording();
  }, []);

  // const closeCamera = async () => {
  //   const videoStream = liveVideoFeed.current.srcObject;
  //   // Stop the camera stream
  //   if (videoStream) {
  //     videoStream.getTracks().forEach((track) => track.stop());
  //   }
  //   // Reset the recorded video and video chunks
  //   // setRecordedVideo(null);
  //   setVideoChunks([]);
  //   // Perform any additional cleanup tasks
  //   // ...
  //   // Optionally, you can update the recording status and other related states
  //   setRecordingStatus("inactive");
  //   setIsRecording(false);
  // };

  const stopRecording = () => {
    setLoading(true);
    setIsRunning(false);
    setTime(0);
    setRecordingStatus("inactive");

    mediaRecorder.current.stop();

    const stream = mediaRecorder.current.stream;

    stream.getTracks().forEach((track) => track.stop());

    mediaRecorder.current.onstop = async () => {
      const videoBlob = new Blob(videoChunks, {
        type: mimeType,
      });
      const videoUrl = URL.createObjectURL(videoBlob);

      setRecordedVideo(videoUrl);

      setVideoChunks([]);
      setIsRecording(false);

      // Call the external stopRecordingCallback if it's provided
      if (typeof stopRecordingCallback === "function") {
        stopRecordingCallback();
      }

      const formData = new FormData();
      formData.append("file", videoBlob, "video.mp4");
      formData.append("type", "conversation");
      const videoResponse = await postVideo(formData);
      fileData.current = formData;
      if (fileData.current) {
        setLoading(true);
        mutate(fileData.current, {
          onSuccess: async (data) => {
            await setFileData(data.data);
            setLoading(false);
          },
          onError: (error) => {
            showError();
            setLoading(false);
          },
        });
      }
      setSendChat(videoResponse);
      // sendMessage(videoResponse);
    };
    setIsRecordingStop(true);
  };

  const uploadFile = () => {
    if (videoType != "video") {
      sendMessage();
    } else {
      addVideo();
    }
  };
  const addvideo = useMutation(updateStep, {
    onSuccess: () => {
      navigate(`/AddNewStep/${stepId}`);
    },
  });
  const addVideo = async () => {
    setLoading(true);
    const payload = { content: getFileData?.fullPathUrl ,lowPreviewThumbnail:getFileData?.thumbnailUrl1, highPreviewThumbnail:getFileData?.thumbnailUrl2};
    addvideo.mutate(
      { payload: payload, id: stepId }
    );
    setLoading(false);
  };
  const sendMessage = async () => {
    setLoading(true);

    // const data = await sendFileMessage(videoResponse);
    // data.messageHistoryPreviewThumbnail = "test";
    // data.messagePreviewThumbnail = "test";

    // if (data) {
    //   navigate("/conversation");
    // }

    const payload = getFileData;
    const data = sendFileMessage(payload);
    if (data) {
      navigate("/conversation");
      setLoading(false);
    }
    // setLoading(false)
  };

  function VideoHandler() {
    navigate(`/reply-video-preview/${videoType}`);
  }

  return (
    <>
      {loading ? (
        <GlobalLoaderCopy />
      ) : (
        <div>
          <div className="flex items-center p-2 justify-between">
            <VideoModal
              open={openMicModal}
              setOpen={setOpenMicModal}
              width={600}
              title="Save to library"
              label="save"
            />
            <div className="flex items-center gap-2">
              <img
                src={Logos.ArrowLeft}
                alt=""
                className="cursor-pointer w-[20px] xxxxl:w-[30px]"
                onClick={() => {
                  VideoHandler();
                }}
              />
              <h1 className=" text-[18px] font-[500] leading-[30px] text-[#262626] xxxxl:text-[30px]">
                Video Preview
              </h1>
            </div>
            <div className="flex gap-2 items-center">
              {isRecordingStop && (
                <Link to="#">
                  <img
                    src={Logos.SaveIconVideoPreview}
                    alt=""
                    className="icon-size"
                    onClick={() => {
                      setOpenMicModal(true);
                    }}
                  />
                </Link>
              )}
              <Link to={`/reply-video-preview/${videoType}`}>
                <img src={Logos.Rectangule} alt="" className="icon-size" />
              </Link>
            </div>
          </div>
          <div
            className="w-full video_div"
            style={{
              height: "calc(100vh - 155px)",
            }}
          >
            <div
              className={`border-[1px] border-[#EBEBEB] border-solid mt-2 shadow-md flex flex-col videoRec_div`}
              style={{
                height: "calc(100vh - 150px)",
              }}
            >
              <div className="video2">
                {!recordedVideo ? (
                  <video
                    // style={{ transform: "scaleX(-1)" }}

                    ref={liveVideoFeed}
                    autoPlay
                    className="live-player"
                  ></video>
                ) : (
                  <div className="recorded-player">
                    <video
                      // style={{ transform: "scaleX(-1)" }}

                      className="recorded"
                      src={recordedVideo}
                      controls
                    ></video>
                    {/* <a download href={recordedVideo}>
                    Download Recording
                  </a> */}
                  </div>
                )}
              </div>
              <div className="pl-8">
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
                className="flex flex-col justify-end items-center gap-3 "
                style={{ height: "calc(100vh - 150px)" }}
              >
                <div
                  className="flex justify-center items-end "
                  style={{ zIndex: 111 }}
                >
                  {/* {!isRecordingStop && (
                  <div className="flex items-center gap-4 mb-4 cursor-pointer">
                    <Link>
                      <img
                        src={Logos.VideoPreviewPlay}
                        alt=""
                        className=" xxxxl:w-[150px] mb-4"
                        onClick={stopRecording}
                      />
                    </Link>
                  </div>
                )} */}

                  {!isRecordingStop && (
                    <div className="flex flex-col justify-center items-center gap-4">
                      <div className="text-[#94A2F2]">{formatTime(time)}</div>
                      <div className="flex justify-center items-center cursor-pointer">
                        <Link>
                          <img
                            src={getPlayPauseIcon()}
                            alt="image"
                            className=" xxxxl:w-[150px] mb-5"
                            onClick={handleClick}
                            // onClick={stopRecording}
                          />
                        </Link>
                        {time > 5 &&
                        <div className="flex items-center gap-4 mb-5 cursor-pointer">
                          <Link to={"#"}>
                            <img
                              src={Logos.TickIcon}
                              alt=""
                              className=" xxxxl:w-[150px] mb-2 ml-2"
                              onClick={stopRecording}
                            />
                          </Link>
                        </div>}
                      </div>
                    </div>
                  )}

                  {isRecordingStop && (
                    <div
                      className="flex justify-center items-end "
                      style={{
                        marginBottom: "50px",
                      }}
                    >
                      <div className="flex items-center gap-5 cursor-pointer ">
                        <img
                          src={Logos.ApproveYes}
                          alt=""
                          className=""
                          style={{
                            width: "calc(2.5rem + 1vw)",
                          }}
                          onClick={() => uploadFile()}
                        />
                        {/* </Link> */}
                        <Link to={`/reply-video-preview/${videoType}`}>
                          <img
                            src={Logos.ApproveNo}
                            alt=""
                            className=""
                            style={{
                              width: "calc(2.5rem + 1vw)",
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                  )}
                  {/* my work Ends from here  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <h2 className="rec">Video Recorder</h2>
      <main>
        <div className="video-controls">
          {recordingStatus === "recording" ? (
            <button onClick={stopRecording} type="button">
              stooop
            </button>
          ) : null}
        </div>
        {isRecording && <p>Recording...</p>}
      </main> */}
    </>
  );
};

export default VideoRecorder;

// import { useState, useRef, useEffect } from "react";
// import { Logos } from "../../assets";
// import "./ReplyVideoPreview.css";
// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router";
// import { postVideo } from "../../hooks/useVideo";
// // import { sendFileMessage } from "../../hooks/useConversation";
// import {
//   useUploadConversationFiles,
//   sendFileMessage,
// } from "../../hooks/useConversation";
// const mimeType = 'video/webm; codecs="opus,vp8"';
// import { useStoreConversation } from "../../store/conversation";
// import { useGlobalInfo } from "../../contexts/GlobalContext";
// import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";

// const VideoRecorder = () => {
//   const mediaRecorder = useRef(null);
//   const liveVideoFeed = useRef(null);
//   const {time,setTime} = useGlobalInfo();
//   const [isRunning,setIsRunning] = useState(true)

//   const [recordingStatus, setRecordingStatus] = useState("inactive");
//   const [recordedVideo, setRecordedVideo] = useState(null);
//   const [videoChunks, setVideoChunks] = useState([]);
//   const [isRecording, setIsRecording] = useState(false);
//   const [isRecordingStop, setIsRecordingStop] = useState(false);
//   const {loading,setLoading} = useGlobalInfo();
//   const [sendChat, setSendChat] = useState();
//   const navigate = useNavigate();
//   const { mutate, isLoading, isError } = useUploadConversationFiles();
//   const setFileData = useStoreConversation((state) => state.setFileData);
//   const getFileData = useStoreConversation((state) => state.fileData);
//   const fileData = useRef(null);

//   useEffect(() => {
//     const getCameraPermission = async () => {
//       let stream;
//       if ("MediaRecorder" in window) {
//         try {
//           const videoConstraints = {
//             audio: false,
//             video: true,
//           };
//           const audioConstraints = { audio: true };

//           const audioStream = await navigator.mediaDevices.getUserMedia(
//             audioConstraints
//           );
//           const videoStream = await navigator.mediaDevices.getUserMedia(
//             videoConstraints
//           );

//           stream = new MediaStream([
//             ...videoStream.getVideoTracks(),
//             ...audioStream.getAudioTracks(),
//           ]);

//           liveVideoFeed.current.srcObject = videoStream;
//         } catch (err) {
//           // alert(err.message);
//         }
//       } else {
//         // alert("The MediaRecorder API is not supported in your browser.");
//       }

//       return stream;
//     };

//     const startRecording = async (stream) => {
//       setTime(0)
//       setRecordingStatus("recording");

//       const media = new MediaRecorder(stream, { mimeType });

//       mediaRecorder.current = media;

//       mediaRecorder.current.start();

//       let localVideoChunks = [];

//       mediaRecorder.current.ondataavailable = (event) => {
//         if (typeof event.data === "undefined") return;
//         if (event.data.size === 0) return;
//         localVideoChunks.push(event.data);
//       };

//       setVideoChunks(localVideoChunks);
//       setIsRecording(true);
//     };

//     const initializeRecording = async () => {
//       const stream = await getCameraPermission();
//       await startRecording(stream);
//     };

//     initializeRecording();
//   }, []);

//   const closeCamera = () => {
//     const videoStream = liveVideoFeed.current.srcObject;

//     // Stop the camera stream
//     if (videoStream) {
//       videoStream.getTracks().forEach((track) => track.stop());
//     }

//     // Reset the recorded video and video chunks
//     // setRecordedVideo(null);
//     setVideoChunks([]);

//     // Perform any additional cleanup tasks
//     // ...

//     // Optionally, you can update the recording status and other related states
//     setRecordingStatus("inactive");
//     setIsRecording(false);
//   };

//   const stopRecording = () => {
//     setLoading(true)
//     setIsRunning(false)
//     setTime(0)
//     setRecordingStatus("inactive");
//     mediaRecorder.current.stop();

//     const stream = mediaRecorder.current.stream;

//     stream.getTracks().forEach((track) => track.stop());

//     mediaRecorder.current.onstop = async () => {
//       const videoBlob = new Blob(videoChunks, { type: mimeType });
//       const videoUrl = URL.createObjectURL(videoBlob);

//       setRecordedVideo(videoUrl);

//       setVideoChunks([]);
//       setIsRecording(false);

//       // Call the external stopRecordingCallback if it's provided
//       if (typeof stopRecordingCallback === "function") {
//         stopRecordingCallback();
//       }

//       const formData = new FormData();
//       formData.append("file", videoBlob, "video.mp4");
//       formData.append("type", "conversation");
//       const videoResponse = await postVideo(formData);
//       fileData.current = formData;
//       if (fileData.current) {
//         setLoading(true)
//         mutate(fileData.current, {
//           onSuccess: async (data) => {
//             await setFileData(data.data);
//             setLoading(false)
//           },
//           onError: (error) => {
//             showError();
//             setLoading(false)
//           },
//         });
//       }
//       setSendChat(videoResponse);
//       // sendMessage(videoResponse);

//       closeCamera();
//     };

//     setIsRecordingStop(true);
//   };
//   const uploadFile = () => {
//     setLoading(true)
//     sendMessage();
//   };
//   const sendMessage = async () => {
//     setLoading(true)

//     // const data = await sendFileMessage(videoResponse);
//     // data.messageHistoryPreviewThumbnail = "test";
//     // data.messagePreviewThumbnail = "test";

//     // if (data) {
//     //   navigate("/conversation");
//     // }

//     const payload = getFileData;
//     const data = sendFileMessage(payload);
//     if (data) {
//       navigate("/conversation");
//       setLoading(false)
//     }
//     // setLoading(false)
//   };
// useEffect(() => {
//   let interval;
//   if(isRunning){
//     interval = setInterval(() => {
//      setTime((prevTime) => prevTime + 1);
//    }, 1000);
//   }
//     return () => clearInterval(interval);
// }, [isRunning,time,setTime]);

// const formatTime = (time) => {
//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;
//   return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// };
// function VideoHandler() {
//   navigate("/reply-video-preview");
// }

//   return (
//     <>
//     {loading ? <GlobalLoaderCopy/> : <div>
//         <div className="flex items-center p-2 justify-between">
//           <div className="flex items-center gap-2">
//             <img
//               src={Logos.ArrowLeft}
//               alt=""
//               className="cursor-pointer w-[20px] xxxxl:w-[30px]"
//               onClick={() => {
//                 VideoHandler();
//               }}
//             />
//             <h1 className=" text-[18px] font-[500] leading-[30px] text-[#262626] xxxxl:text-[30px]">
//               Video Preview
//             </h1>
//           </div>
//           <Link to="/reply-video-preview">
//             <img src={Logos.Rectangule} alt="" className="icon-size" />
//           </Link>
//         </div>
//         <div
//           className="w-full video_div"
//           style={{ height: "calc(100vh - 155px)" }}
//         >
//           <div
//             className={`border-[1px] border-[#EBEBEB] border-solid mt-2 shadow-md flex flex-col videoRec_div`}
//             style={{ height: "calc(100vh - 150px)" }}
//           >
//             <div className="video2">
//               {!recordedVideo ? (
//                 <video
//                   // style={{ transform: "scaleX(-1)" }}

//                   ref={liveVideoFeed}
//                   autoPlay
//                   className="live-player"
//                 ></video>
//               ) : (
//                 <div className="recorded-player">
//                   <video
//                     // style={{ transform: "scaleX(-1)" }}

//                     className="recorded"
//                     src={recordedVideo}
//                     controls
//                   ></video>
//                   {/* <a download href={recordedVideo}>
//                     Download Recording
//                   </a> */}
//                 </div>
//               )}
//             </div>
//             <div className="pl-8">
//               <h1 className=" text-[16px] font-[400] leading-[22px] text-white py-2  xxxxl:text-[28px]
// xxxxl:leading-[38px]"> Replying to... </h1> <h1 className=" text-[20px] font-[500] leading-[28px] text-white py-1
// xxxxl:text-[32px] xxxxl:leading-[38px]"> Ryan Jones </h1> <p className=" sm:text-[16px] font-[400] leading-[22px]
// text-white text-[14px] xxxxl:text-[26px] xxxxl:leading-[28px]"> ryanjones@example.com </p> </div> <div
// className="flex flex-col justify-end items-center gap-3 " style={{ height: "calc(100vh - 150px)" }} > <div
// className="flex justify-center items-end " style={{ zIndex: 111 }} > {!isRecordingStop && ( <div className="flex
// items-center gap-4 mb-4 cursor-pointer flex-col"> <div className="text-[#94A2F2]">{formatTime(time)}</div> <Link>
// <img src={Logos.VideoPreviewPlay} alt="" className=" xxxxl:w-[150px] mb-4" onClick={stopRecording} /> </Link> </div>
// )} {isRecordingStop && ( <div className="flex justify-center items-end " style={{ marginBottom: "50px" }} > <div
// className="flex items-center gap-5 cursor-pointer "> <img src={Logos.ApproveYes} alt="" className="" style={{ width:
// "calc(2.5rem + 1vw)" }} onClick={() => uploadFile()} /> {/* </Link> */} <Link to="/reply-video-preview"> <img src={Logos.ApproveNo} alt="" className="" style={{ width: "calc(2.5rem + 1vw)" }} /> </Link> </div> </div> )} {/* my work Ends from here  */} </div> </div> </div> </div> </div>} {/* <h2 className="rec">Video Recorder</h2> <main> <div className="video-controls"> {recordingStatus === "recording" ? ( <button onClick={stopRecording} type="button"> stooop </button> ) : null} </div> {isRecording && <p>Recording...</p>} </main> */}

//     </>
//   );
// };

// export default VideoRecorder;
