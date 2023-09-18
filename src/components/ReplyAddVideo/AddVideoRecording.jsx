import React from "react";
import {Link} from "react-router-dom";
import {Logos} from "../../assets";
import {useNavigate} from "react-router";

const AddVideoRecording = () => {
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/RecordVideo");
    }

    return (
        <div>
            <div className="flex items-center p-2">
                <div className="flex items-center gap-2">
                    <img
                        src={Logos.ArrowLeft}
                        alt=""
                        className="cursor-pointer w-[20px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />

                    <h1 className="  0 font-[500] leading-[30px] text-[#262626]">
                        Record Video
                    </h1>
                </div>
            </div>
            <div
                className={`bgImg bg-contain w-full h-[78vh] border-[1px] border-[#EBEBEB] border-solid mt-2 p-5 shadow-md flex flex-col`}
            >
                <div className="flex flex-col justify-end items-center gap-3 h-full">
                    <div className="flex justify-end items-end  ">
                        <div className="flex items-end gap-4 cursor-pointer">
                            <Link to="/AddVideoApprove">
                                <img src={Logos.VideoPreviewPlay} className="w-[70px]" alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVideoRecording;
