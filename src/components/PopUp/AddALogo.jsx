import React from "react";
import {Logos} from "../../assets";
import ToolTip from "../ToolTip/ToolTip";

const AddALogo = (props) => {
    return (
        <div
            className="popup-box fixed backdrop-opacity-20 flex justify-center items-center bg-black/30 left-0 top-0 w-full h-full z-50"
            onClick={props.handleClose}
        >
            <div
                className="box  relative rounded-md lg:w-[370px] xxxs:w-[300px] bg-white min-h-[360px] mx-auto"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between px-5 py-4 ">
                    <div className="title-size">
                        {props.title}
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
                <div className="flex text-center justify-center py-6 px-8">
                    <div
                        className="w-[290px] h-[160px] rounded  text-center bg-[#E7EEF9] border-dashed border-[1px] border-[#AEBFF2]">
                        <p className="text-[#3A37A6]  pt-4 pb-2 inner-size">
                            Drag and drop your file here
                        </p>
                        <div className="flex justify-center ">
                            <hr className="border-[1px] my-2 text-center w-[40px] border-[#94A2F2]"/>
                            <p className="text-[#94A2F2] px-1 xxxl:text-[15px]">OR</p>
                            <hr className="border-[1px] my-2 text-center w-[40px] border-[#94A2F2]"/>
                        </div>
                        <button
                            className="w-[120px] lg:py-2 xxxs:py-1 lg:px-2 xxxs:px-1 rounded mt-1 text-[#3A37A6] bg-[#AEBFF2] lg:text-[14px] xxxs:text-[11px] xxxl:text-[16px]">
                            Browse files
                        </button>
                        <p className="text-[#A0A0A0] lg:text-[13px] text-[12px] xxxl:text-[15px] py-2">
                            Works with png, jpeg,and gif formats
                        </p>
                    </div>
                </div>
                <div className="px-10">
                    <div className="flex  ">
                        <p
                            className={` mb-1 subtitle-size class={"hidden"} ${props.class} `}
                        >
                            Logo redirect URL
                        </p>
                        <div className={` p-1 ${props.class}`}>
                            <ToolTip/>
                        </div>
                    </div>
                    <input
                        type="text"
                        className={` ${props.class} w-full h-[40px] bg-[#F5F5F5] px-2 text-[13px] outline-none rounded`}
                    />
                    <div className="flex justify-center py-6 gap-3">
                        <button
                            onClick={props.handleClose}
                            className="lg:text-[14px] border-[1px] rounded shadow xxxl:text-[20px] border-[#94A2F2] text-[#94A2F2] xxxs:text-[12px] w-[150px] py-2 px-1"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={props.handleClose}
                            className="lg:text-[14px] xxxs:text-[12px] xxxl:text-[20px] rounded shadow text-white bg-[#94A2F2] w-[180px] py-2 px-2"
                        >
                            {props.btnTitle}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddALogo;
