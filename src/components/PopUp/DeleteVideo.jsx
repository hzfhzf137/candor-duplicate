import React from "react";
import {Logos} from "../../assets";

const DeleteVideo = (props) => {


    return (
        <>
            <div
                className="popup-box fixed backdrop-opacity-20 bg-black/30 flex justify-center items-center left-0 top-0 w-full h-full z-50"
                onClick={props.handleCloseM}
            >
                <div
                    className="box relative rounded-md lg:w-[500px] xxxs:w-[350px] bg-white lg:min-h-[230px] mx-auto "
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="flex justify-between px-6 pt-4">
                        <div className="lg:text-[18px] leading-[30px] xxxs:text-[14px] xxxl:text-[20px] w-72 overflow-hidden overflow-ellipsis">
                            {props.title}
                        </div>
                        <button
                            className="btn-close "
                            onClick={props.handleCloseM}
                        >
                            <img
                                src={Logos.CloseIcon}
                                alt="Close Button"
                                className="lg:w-[20px] xxxs:w-[15px]"
                            />
                        </button>
                    </div>
                    <hr className=" border-1 border-[#E7EEF9] mt-4"/>
                    <div className="w-full flex flex-col justify-center items-center px-6">
                        <h1 className="text-[#A0A0A0] lg:text[13px] leading-[20px] xxxl:text-[14px] xxxs:text-[12px] pt-4">
                            {props.paragraph}
                        </h1>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-5 p-5">
                        <div className="flex gap-4 ">
                            <button
                                onClick={props.handleCloseM}
                                className="text-[#94A2F2] flex items-center xxxl:text-[20px] border-[#AEBFF2] border-[1px] h-[40px] px-8 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    props.deleteFolderHandler(props.id);
                                    props.handleCloseM();
                                }}
                                className="text-white flex items-center xxxl:text-[20px] bg-[#AEBFF2] h-[40px] px-8 rounded-md shadow-md"
                            >
                                {props.btnname}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteVideo;
