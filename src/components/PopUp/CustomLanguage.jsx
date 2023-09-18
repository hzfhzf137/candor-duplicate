import React from "react";
import {Logos} from "../../assets";
import ToolTip from "../ToolTip/ToolTip";
import {useNavigate} from "react-router-dom";
import {useGlobalInfo} from "../../contexts/GlobalContext";

const CustomLanguage = (props) => {

    const navigate = useNavigate()
    const {setNavigateTabs, setShowSecondContent} = useGlobalInfo();
    return (
        <div
            className="popup-box fixed backdrop-opacity-20 flex justify-center items-center bg-black/30 left-0 top-0 w-full h-full z-50"
            onClick={props.handleClose}
        >
            <div
                className="box  relative rounded-md  lg:w-[370px] xxxl:w-[400px] xxxs:w-[300px] bg-white min-h-[290px] mx-auto "
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between px-5 py-3 xxxl:py-5 pt-5">
                    <div className="title-size ">
                        Create a custom language
                    </div>
                    <button className="btn-close " onClick={props.handleClose}>
                        <img
                            src={Logos.ClosePopup}
                            alt="Close Button"
                            className="lg:w-[20px] xxxs:w-[15px]"
                        />
                    </button>
                </div>
                <hr className=" border-1 border-[#CEDEF2] "/>

                <div className="px-6 py-2">
                    <p className=" py-3 inner-size">
                        Language name
                    </p>
                    <input
                        type="text"
                        placeholder="talk.example.com"
                        className="w-full h-[40px] placeholder-input-modal bg-[#F5F5F5] px-2 text-[#E7EEF9] text-[13px] outline-none rounded"
                    />
                    <div className="flex justify-between pt-2 py-3">
                        <div className="flex pt-1 py-2">
                            <p className="inner-size">
                                Select a base language
                            </p>
                            <div className="p-1">
                                <ToolTip/>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="inline-flex lg:w-[90px] xxxs:w-[70px] justify-between w-full rounded-md  lg:px-3 xxxs:px-2 py-2 bg-[#F5F5F5] text-black lg:text-[13px] xxxl:text-[15px] xxxs:text-[11px]"
                        >
                            English
                            <img
                                src={Logos.Arrowdown}
                                alt="Dropdown Arrow"
                                className="cursor-pointer lg:w-[17px] xxxs:w-[15px]"
                            />
                        </button>
                    </div>
                    <div className="flex justify-center pt-6 gap-3 xxxl:pb-3">
                        <button
                            onClick={() => {

                                navigate("/martin-us-senate")
                                setNavigateTabs("Branding")
                                setShowSecondContent(true);
                            }}
                            className="lg:text-[14px]  xxxs:text-[12px] xxxl:text-[20px] rounded shadow-md text-white bg-[#94A2F2] w-[140px] py-3 px-1"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomLanguage;
