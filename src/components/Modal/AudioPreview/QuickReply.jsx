import React from "react";
import {Modal} from "antd";
import {Logos} from "../../../assets";
import ToolTip from "../../ToolTip/ToolTip";

const QuickReply = (props) => {
    return (
        <>
            <Modal
                title={props.title}
                centered
                width={props.width ?? "auto"}
                open={props.open}
                onOk={() => props.setOpen(false)}
                onCancel={() => props.setOpen(false)}
                footer={null}
            >
                <div className="border-t-[1px] border-[#CEDEF2] mt-4">
                    <div className="mt-5">
                        <div className="flex justify-between  items-center ">
                            <input
                                type="text"
                                placeholder="Search"
                                className="relative lg:text-[18px] outline-none  rounded-md bg-[#F5F5F5] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full  placeholder:text-[14px] placeholder:font-[200]"
                                style={{paddingLeft: "47px"}}
                            />
                            <img
                                src={Logos.Search}
                                className="absolute lg:w-[18px] xxxs:w-[15px] ml-[16px]"
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4">
                        {props.data.map((item) => {
                            return (
                                <div
                                    className={
                                        props.text
                                            ?
                                            `border-[1px] border-[#EBEBEB] flex flex-col gap-[2px]  items-start w-[30%]`
                                            : `flex flex-col gap-[2px]  items-start w-[30%]`
                                    }
                                >
                                    <div
                                        className="flex items-center justify-start w-full border-b-[1px] border-[#EBEBEB] ">
                                        <h1
                                            className={
                                                props.text
                                                    ? `text-[14px] text-[#262626]  p-2 font-[500]`
                                                    : ` text-[14px] text-[#262626] p-2 font-[500]`
                                            }
                                        >
                                            {item.title}
                                        </h1>
                                        <div className="p-1">
                                            <ToolTip/>
                                        </div>
                                    </div>
                                    <img src={props.img} alt="" className="mt-2"/>

                                    {props.text && (
                                        <div className=" px-2 pb-1 rounded-md ">
                                            <p className=" text-[12px] text-[#A0A0A0] font-[400] ">
                                                {props.text}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default QuickReply;
