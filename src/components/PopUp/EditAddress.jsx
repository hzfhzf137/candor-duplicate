import React from "react";

import {Logos} from "../../assets";
import ToolTip from "../ToolTip/ToolTip";
import DynamicDropdown from "../DynamicDropdown/DynamicDropdown";

const EditAddress = (props) => {
    return (
        <div
            className="popup-box fixed backdrop-opacity-20 flex justify-center items-center bg-black/30 left-0 top-0 w-full h-full z-50"
            onClick={props.handleClose}
        >
            <div
                className={`box  relative rounded-md xxxl:w-[400px] lg:w-[370px] xxxs:w-[300px] bg-white  mt-${props.margin}  mx-auto h-${props.height} pb-${props.paddingBottom} `}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between px-5 xxxl:pt-6 pb-3 pt-5">
                    <div className=" title-size ">
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

                <div className="px-6 ">
                    <p
                        className={`subtitle-size py-2 ${props.class} `}
                    >
                        Country
                    </p>
                    <div className={` ${props.class}`}>
                        <DynamicDropdown
                            mainTitle={"United Kindom"}
                            option1={"United Kindom"}
                            option2={"United States"}
                            width="[100%]"
                        />
                    </div>
                    <p className="subtitle-size py-3">
                        {props.input1}
                    </p>
                    <input
                        type="text"
                        placeholder="United Kindom"
                        className="w-full h-[40px] placeholder-input-modal bg-[#F5F5F5] px-2 text-[#A0A0A0] text-[13px] outline-none rounded"
                    />
                    <p className="subtitle-size py-3">
                        {props.input2}
                    </p>
                    <input
                        type="text"
                        placeholder="Your Address"
                        className="w-full h-[40px] placeholder-input-modal bg-[#F5F5F5] px-2 text-[#A0A0A0] text-[13px] outline-none rounded"
                    />
                    <div className="flex gap-2">
                        <div>
                            <p className="subtitle-size py-2">
                                {props.input3}
                            </p>
                            <input
                                type="text"
                                placeholder={props.placeholder1}
                                className="w-full h-[40px] bg-[#F5F5F5] placeholder-input-modal px-2 text-[#A0A0A0] text-[13px] outline-none rounded"
                            />
                        </div>
                        <div>
                            <p className="subtitle-size py-2">
                                {props.input4}
                            </p>
                            <input
                                type="text"
                                placeholder={props.placeholder2}
                                className="w-full h-[40px] bg-[#F5F5F5] px-2 text-[#A0A0A0] placeholder-input-modal text-[13px] outline-none rounded"
                            />
                        </div>
                    </div>
                    <div className={`flex  py-3  ${props.class}`}>
                        <p className="subtitle-size">
                            Zip code
                        </p>
                        <div className="p-1">
                            {" "}
                            <ToolTip/>
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="Your address"
                        className={`w-full h-[40px] bg-[#F5F5F5] px-2 text-[#E7EEF9] text-[13px] outline-none placeholder-input-modal rounded  ${props.class}`}
                    />

                    <div className="flex justify-center pt-6 gap-3">
                        <button
                            className="lg:text-[14px] border-[1px] xxxl:text-[20px] rounded shadow border-[#94A2F2] text-[#94A2F2] xxxs:text-[12px] w-[150px] xxxl:w-[170px] py-2 px-1">
                            Cancel
                        </button>
                        <button
                            className="lg:text-[14px]  xxxs:text-[12px] xxxl:text-[20px] rounded shadow text-white bg-[#94A2F2] w-[150px] xxxl:w-[170px] py-2 px-1">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditAddress;
