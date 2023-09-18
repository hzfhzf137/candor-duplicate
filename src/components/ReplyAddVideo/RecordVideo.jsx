import React, {useState} from "react";
import {Logos} from "../../assets";
import {Link} from "react-router-dom";
import "./ReplyVideoPreview.css";
import VideoModal from "../Modals/VideoPreviewModals/VideoModal";
import QuickReply from "../Modals/VideoPreviewModals/QuickReply";
import {useNavigate} from "react-router";

const RecordVideo = () => {
    const [open, setOpen] = useState(false);
    const [openMicModal, setOpenMicModal] = useState(false);
    const [openQuickReply, setOpenQuickReply] = useState(false);
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/AddVideo");
    }

    return (
        <div>
            <VideoModal
                open={open}
                setOpen={setOpen}
                width={500}
                title="Camera selection"
                label="video"
            />
            <VideoModal
                open={openMicModal}
                setOpen={setOpenMicModal}
                width={800}
                title="Microphone selection"
                label="audio"
            />
            <QuickReply
                open={openQuickReply}
                setOpen={setOpenQuickReply}
                width={700}
                title="Add  a quick reply"
                label="Quick reply"
            />
            <div className="flex justify-between items-center p-2">
                <div className="flex items-center gap-2">
                    <img
                        src={Logos.ArrowLeft}
                        alt=""
                        className="cursor-pointer w-[20px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />
                    <h1 className=" title-size font-[500] leading-[30px] text-[#262626]">
                        Record Video
                    </h1>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Link to="#">
                        <img
                            src={Logos.RecordVideoPreview}
                            alt=""
                            className="icon-size"
                            onClick={() => {
                                setOpen(true);
                            }}
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
                    </Link>
                </div>
            </div>
            <div
                className={`bgImg bg-contain w-full border-[1px] border-[#EBEBEB] border-solid mt-2 p-5 shadow-md flex justify-end flex-col`}
                style={{height: "calc(60rem + 1vw)"}}
            >
                <div className="flex flex-col justify-end items-center gap-3 h-[60vh]">
                    <div className="flex items-center justify-center">
                        <h1 className="text-white">Hit the record button to start</h1>
                    </div>
                    <div className="flex justify-center items-end ">
                        <div className="flex items-center gap-4 cursor-pointer">
                            <Link to="#">
                                <img src={Logos.EditVideoPreview} alt="" className="w-[50px]"/>
                            </Link>
                            <Link to="/AddVideoRecording">
                                <img src={Logos.VideoPLayBtn} className="w-[70px]" alt=""/>
                            </Link>
                            <Link to="/AddVideo">
                                <img src={Logos.CancelButton} className="w-[30px]" alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecordVideo;
