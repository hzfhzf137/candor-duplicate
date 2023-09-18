import React from "react";

import {Logos} from "../../assets";

const DomainPopup = (props) => {
    return (
        <div
            className="popup-box fixed backdrop-opacity-20 flex justify-center items-center bg-black/30 left-0 top-0 w-full h-full z-50"
            onClick={props.handleClose}
        >
            <div
                className="box  relative rounded-md  lg:w-[370px] xxxl:w-[400px] xxxs:w-[300px] bg-white xxxs:min-h-[280px] lg:min-h-[330px] xxxl:min-h-[370px] mx-auto "
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between px-5 h-fit xxxl:py-6 py-3 pt-5">
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
                <div className="px-6">
                    <p className="subtitle-size lg:py-3 xxxs:py-1">
                        Add a custom domain
                    </p>
                    <p className="text-[#A0A0A0] inner-size">
                        In your domain host provider, add a subdomain (e.g.
                        talk.example.com) and point it to alias.candor.video.
                    </p>
                    <p className=" py-2 inner-size text-[#3A37A6]">
                        See detailed instructions
                    </p>
                </div>

                <div className="px-6">
                    <input
                        type="text"
                        placeholder="talk.example.com"
                        className={` ${props.class} placeholder-input-modal w-full h-[40px] bg-[#F5F5F5] px-2 text-[13px] outline-none rounded`}
                    />
                    <div className="flex justify-center py-6  gap-3">
                        <button
                            className="lg:text-[14px] border-[1px] xxxl:text-[20px] rounded shadow border-[#94A2F2] text-[#94A2F2] xxxs:text-[12px] w-[150px] py-2 px-1">
                            Cancel
                        </button>
                        <button
                            className="lg:text-[14px]  xxxs:text-[12px] xxxl:text-[20px] rounded shadow text-white bg-[#94A2F2] w-[150px] py-2 px-1">
                            {props.btnTitle}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DomainPopup;
