import React, {useState} from "react";
import {Logos} from "../../assets";
import ToggleButton from "../ToggleButton/ToggleButton";

const VideoSetPermission = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isOpen, setIsOpen] = useState(Logos.DropdownIcon);
    const handleClick = () => {
        setIsOpen(Logos.DropdownIcon);
    };

    return (
        <div
            className="popup-box fixed backdrop-opacity-20  bg-black/30 left-0 top-0 flex justify-center items-center w-full h-full z-50"
            onClick={props.handleCloseO}
        >
            <div
                className="box  relative rounded-md  lg:w-[450px] xxxs:w-[350px] bg-white lg:min-h-[460px] xxxs:min-h-[435px] mx-auto "
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between py-3 px-5 pt-6">
                    <div className="lg:text-[18px] leading-[30px] xxxs:text-[15px] xxxl:text-[22px]">
                        Set Permission for "education"
                    </div>
                    <button className="btn-close " onClick={props.handleCloseO}>
                        <img
                            src={Logos.ClosePopup}
                            alt="Close Button"
                            className="lg:w-[20px] xxxs:w-[15px]"
                        />
                    </button>
                </div>
                <hr/>

                <div className="flex  p-5">
                    <div>
                        <img src={Logos.VideoBoyAvatar} alt="boy dp" className="w-12"/>
                    </div>
                    <div className="w-full ">
                        <div className="flex justify-between">
                            <p className="text-[16px] xxxs:text-[13px] leading-[27px] xxxl:text-[18px] ml-2 font-bold">
                                Bills Jones
                            </p>
                            <p className="mt-1 leading-[22px] xxxl:text-[15px] xxxs:text-[13px] float-right">
                                Organization owner
                            </p>
                        </div>
                        <p className="text-[#A0A0A0] xxxl:text-[15px] leading-[25px] xxxs:text-[12px] text-[14px] ml-2">
                            billyjones1997@domain.com
                        </p>
                    </div>
                </div>
                <div className="flex  p-5">
                    <div>
                        <img src={Logos.VedioGirlAvatar} alt="boy dp" className="w-12"/>
                    </div>
                    <div className="w-full ">
                        <div className="flex justify-between">
                            <p className="text-[16px] xxxs:text-[13px] xxxl:text-[18px] leading-[27px] ml-2 font-bold">
                                Ryan Smith
                            </p>

                            <div className="mt-1 flex float-right">
                                <div
                                    className="max-lg:w-[75px] xxxl:w-[90px] mr-3 h-[28px]  bg-[#F5F5F5] rounded p-1  ">
                                    <div
                                        className="flex"
                                        onClick={() => {
                                            setShowDropdown(!showDropdown), handleClick();
                                        }}
                                    >
                                        <p className="text-[11px] leading-[17px] ml-1 xxxl:text-[14px]">
                                            Reader
                                        </p>
                                        <img
                                            src={isOpen}
                                            alt="icon"
                                            className="relative w-[9px]  ml-2"
                                        />
                                    </div>
                                    <div
                                        className={
                                            !showDropdown ? "hidden" : "  absolute right-16 z-10"
                                        }
                                    >
                                        <div
                                            className="bg-[#FFFFFF] lg:w-[315px] xxxs:w-[240px] md:w-[210px] xxxs:h-[160px] h-[180px] border-1 mt-2 shadow-md rounded-md cursor-auto">
                                            <div className="px-3 py-1">
                                                <div className=" ">
                                                    <p className="text-[13px] leading-[25px] xxxs:text-[11px] font-bold">
                                                        Reader
                                                    </p>
                                                    <p className="text-[11px] xxxs:text-[10px] xxxs:leading-[12px] leading-[20px] text-[#A0A0A0]">
                                                        Can only view candor video and interactions
                                                    </p>
                                                </div>
                                                <div className=" ">
                                                    <p className="text-[13px] leading-[25px] xxxs:text-[11px] font-bold">
                                                        Writer
                                                    </p>
                                                    <p className="text-[11px] xxxs:text-[10px] xxxs:leading-[12px] leading-[20px] text-[#A0A0A0]">
                                                        Can only view candor video and interactions and send
                                                        replies
                                                    </p>
                                                </div>
                                                <div className=" ">
                                                    <p className="text-[13px] leading-[25px] xxxs:text-[11px] font-bold">
                                                        Creator
                                                    </p>
                                                    <p className="text-[11px] xxxs:text-[10px] xxxs:leading-[12px] leading-[20px] text-[#A0A0A0]">
                                                        {" "}
                                                        Can only view candor video and interactions and send
                                                        replies, and make changes to the candor video
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ToggleButton width="[40px]" height="[22px]" isActive={true}/>
                            </div>
                        </div>
                        <p className="text-[#A0A0A0] xxxs:text-[12px] text-[14px] xxxl:text-[15px] leading-[25px] ml-2">
                            ryansmith1990@domain.com
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-[140px] xxxs:mt-[125px] gap-4">
                    <button
                        onClick={props.handleCloseO}
                        className="text-[#94A2F2] border-[#AEBFF2] xxxl:text-[20px] border-[1px] flex items-center h-[40px]  px-9 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={props.handleCloseO}
                        className="text-white bg-[#AEBFF2] xxxl:text-[20px] flex items-center h-[40px] px-10 rounded-md shadow-md"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoSetPermission;
