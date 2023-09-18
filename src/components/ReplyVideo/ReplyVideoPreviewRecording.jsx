import "./ReplyVideoPreview.css";
import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Logos} from "../../assets";
import {useNavigate} from "react-router";

const mimeType = 'video/webm; codecs="opus,vp8"';

const ReplyVideoPreviewRecording = () => {
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/reply-video-preview");
    }

    const liveVideoFeed = useRef(null);

    useEffect(() => {
        const getMedia = async () => {
            try {
                const constraints = {
                    video: true,
                    audio: true,
                };

                const stream = await navigator.mediaDevices.getUserMedia(constraints);

                if (liveVideoFeed.current) {
                    liveVideoFeed.current.srcObject = stream;
                }
            } catch (err) {
                console.error("Error accessing media devices.", err);
            }
        };

        getMedia();
    }, []);

    // record video
    const mediaRecorder = useRef(null);
    const [stream, setStream] = useState(null);
    const [recordedVideo, setRecordedVideo] = useState(null);
    const [videoChunks, setVideoChunks] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingStatus, setRecordingStatus] = useState("inactive");

    const [recording, setRecording] = useState(true);

    const stopRecording = () => {
        setRecording(false);
    };

    return (
        <div>
            <div className="flex items-center p-2 justify-between">
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
                <Link to="/reply-video-preview">
                    <img src={Logos.Rectangule} alt="" className="icon-size"/>
                </Link>
            </div>
            <div className="w-full " style={{height: "calc(100vh - 155px)"}}>
                <div
                    className={`border-[1px] border-[#EBEBEB] border-solid mt-2 p-5 shadow-md flex flex-col`}
                    style={{height: "calc(100vh - 150px)"}}
                >
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
                        style={{height: "calc(100vh - 150px)"}}
                    >
                        <div
                            className="flex justify-center items-end"
                            style={{zIndex: 111}}
                        >
                            <div className="flex items-center gap-4 cursor-pointer">
                                <Link>
                                    <img
                                        src={Logos.VideoPreviewPlay}
                                        alt=""
                                        className=" xxxxl:w-[150px] "
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReplyVideoPreviewRecording;
