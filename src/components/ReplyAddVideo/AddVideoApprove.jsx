import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Logos} from "../../assets";
import VideoModal from "../Modals/VideoPreviewModals/VideoModal";
import {useNavigate} from "react-router";

const AddVideoApprove = (param) => {
    const [openMicModal, setOpenMicModal] = useState(false);
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/AddVideoRecording");
    }

    return (
        <div>
            <VideoModal
                open={openMicModal}
                setOpen={setOpenMicModal}
                width={500}
                title="Save to library"
                label="save"
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

                    <h1 className=" text-[18px] font-[500] leading-[30px] text-[#262626]">
                        Approve {param.value}
                    </h1>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Link to="#">
                        <img src={Logos.Upload} alt="" className="w-[26px]"/>
                    </Link>
                    <Link to="#">
                        <img
                            src={Logos.SaveIconVideoPreview}
                            alt=""
                            className="w-[28px]"
                            onClick={() => {
                                setOpenMicModal(true);
                            }}
                        />
                    </Link>
                </div>
            </div>
            <div
                className={`bgImgPlay bg-contain w-full h-[78vh] border-[1px] border-[#EBEBEB] border-solid mt-2 p-5 shadow-md flex flex-col`}
            >
                <div className="flex flex-col justify-end items-center gap-3 h-full">
                    <div className="flex items-center justify-center">
                        <h1 className="text-white">Looks good ?</h1>
                    </div>
                    <div className="flex justify-center items-end ">
                        <div className="flex items-center gap-4 cursor-pointer">
                            <Link to="/introduction">
                                <img src={Logos.ApproveYes} alt="" className="w-[50px]"/>
                            </Link>
                            <Link to="/AddVideo">
                                <img src={Logos.ApproveNo} alt="" className="w-[50px]"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVideoApprove;
