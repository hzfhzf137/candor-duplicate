import React, {useEffect, useState} from "react";
import {Logos} from "../../assets";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Button from "../Buttons/Buttons";
import {useGlobalInfo} from "../../contexts/GlobalContext";

const ReplyComp = () => {
    const {videoType, setVideoType} = useGlobalInfo();
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/conversation");
    }

    const [recordedVideo, setRecordedVideo] = useState(null);
    useEffect(() => {
        setVideoType('conversation')
    }, [])
    // const getCameraPermission = async () => {
    //   localStorage.setItem("isVideo", true);
    //   setRecordedVideo(null);
    //   if ("MediaRecorder" in window) {
    //     try {
    //       const videoConstraints = {
    //         audio: true,
    //         video: true,
    //       };

    //       const stream = await navigator.mediaDevices.getUserMedia(
    //         videoConstraints
    //       );

    //       setPermission(true);
    //       setStream(stream);

    //       liveVideoFeed.current.srcObject = stream;
    //     } catch (err) {
    //       // alert(err.message);
    //     }
    //   } else {
    //     // alert("The MediaRecorder API is not supported in your browser.");
    //   }
    // };

    const recipentData = JSON.parse(localStorage.getItem('receiverId'));
    return (
        <>
            <div className="flex justify-between  items-center p-2">
                <div className="flex items-center gap-1">
                    <img
                        src={Logos.ArrowLeft}
                        alt=""
                        className="cursor-pointer w-[18px] xxxxl:w-[30px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />

                    <h1 className="  font-[500] leading-[30px] text-[#262626] title-size">
                        {recipentData?.firstName ? "Reply " : "Starting Conversation"}
                    </h1>
                </div>
                <Link to="/conversation">
                    <img
                        src={Logos.Rectangule}
                        alt=""
                        className="w-[26px] xxxxl:w-[50px]"
                    />
                </Link>
            </div>
            <div
                className="w-full  rounded-md border-[1px] border-[#EBEBEB] border-solid mt-2 p-5 shadow-md flex flex-col"
                style={{height: "calc(100vh - 150px)"}}
            >
                <h1 className="  font-[400] inner-size text-[#262626] py-2 ">
                    {recipentData?.firstName ? "Replying to..." : "Sending a new message"}
                </h1>
                <h1 className="  font-[500]  text-[#262626] py-1 title-size">
                    {recipentData?.firstName ? (recipentData?.firstName + " " + recipentData?.lastName) : ""}
                </h1>
                <p className="  font-[400]  text-[#A0A0A0]  subtitle-size">
                    {recipentData?.email}
                </p>
                <div className="  w-full m-auto flex flex-col justify-center gap-2  xxxxl:gap-8">
                    <p className="  font-[400]  text-[#262626] text-center title-size">
                        How would you like to respond?
                    </p>
                    <div className="flex justify-center gap-3 flex-wrap xxxxl:gap-3">
                        <Link to={`/reply-video-preview/${videoType}`}>
                            {/* <img src={Logos.Video} className=" cursor-pointer w-[80px] max-sm:w-[50px]" alt="" /> */}
                            <Button
                                title="video"
                                img={Logos.Video}
                                class="max-xs:w-[40px] w-[60px] xxxxl:w-[120px]  "
                                iconWidth="max-xs:w-[20px] w-[40px] xxxxl:w-[80px]"
                                // onClick={getCameraPermission}
                                onClick={() => {

                                    localStorage.setItem("isVideo", true);
                                }}
                            ></Button>
                        </Link>

                        <Link to="/reply-audio-preview">
                            {/* <img src={Logos.ReplyAudio} className=" cursor-pointer w-[80px] max-sm:w-[50px]" alt="" /> */}
                            <Button
                                title="Audio"
                                img={Logos.MicroPhoneWhite}
                                class="w-[60px] xxxxl:w-[120px]"
                                iconWidth="w-[40px] xxxxl:w-[80px]"
                                onClick={() => {
                                    localStorage.setItem("isVideo", false);
                                }}
                            ></Button>
                        </Link>
                        <Link to="/reply-text-preview">
                            {/* <img src={Logos.Text} className=" cursor-pointer w-[80px] max-sm:w-[50px]" alt="" /> */}
                            <Button
                                title="Text"
                                img={Logos.WhiteEdit}
                                class="w-[60px] xxxxl:w-[120px]"
                                iconWidth="w-[40px] xxxxl:w-[80px]"
                            ></Button>
                        </Link>
                    </div>
                    <p className=" font-[400] title-size text-[#262626] text-center">
                        You can practice and review before sending
                    </p>
                </div>
            </div>
        </>
    );
};

export default ReplyComp;
