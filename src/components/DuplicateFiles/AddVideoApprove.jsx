import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Logos} from "../../assets";
import VideoModal from "../Modals/VideoPreviewModals/VideoModal";
import {useNavigate} from "react-router";

const AddVideoApprove = (param) => {
    const [openMicModal, setOpenMicModal] = useState(false);
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/AddLibrary");
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

            <div className="flex justify-between items-center lg:px-2 py-2 xxxs:px-0">
                <div className="flex items-center gap-2">
                    <img
                        src={Logos.ArrowLeft}
                        alt=""
                        className="cursor-pointer w-[20px] xxxl:w-[24px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />

                    <h1 className=" text-[18px] xxxl:text-[22px] font-[500] leading-[30px] text-[#262626]">
                        Approve Library
                    </h1>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Link to="#">
                        <img src={Logos.Upload} alt="" className="w-[26px] xxxl:w-[36px]"/>
                    </Link>
                    <Link to="#">
                        <img
                            src={Logos.SaveIconVideoPreview}
                            alt=""
                            className="w-[28px] xxxl:w-[36px]"
                            onClick={() => {
                                setOpenMicModal(true);
                            }}
                        />
                    </Link>
                </div>
            </div>
            <div
                style={{height: "calc(100vh - 136px)"}}
                className={`bgImgPlay bg-contain w-full mt-2 rounded-lg pb-6 flex flex-col`}
            >
                <div
                    style={{height: "calc(100vh - 160px)"}}
                    className="flex flex-col justify-end items-center  gap-3 "
                >
                    <div className="flex items-center justify-center">
                        <h1 className="text-white xxxl:text-[20px]">Like it?</h1>
                    </div>
                    <div className="flex justify-center items-end ">
                        <div className="flex items-center gap-4 cursor-pointer">
                            <Link to="/introduction">
                                <img
                                    src={Logos.ApproveYes}
                                    alt=""
                                    className="w-[50px] xxxl:w-[60px]"
                                />
                            </Link>
                            <Link to="/AddLibrary">
                                <img
                                    src={Logos.ApproveNo}
                                    alt=""
                                    className="w-[50px] xxxl:w-[60px]"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVideoApprove;
