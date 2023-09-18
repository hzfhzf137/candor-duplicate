import React from "react";
import {Modal} from "antd";
import InputComp from "../../InputComp/InputComp";
import {SearchOutlined} from "@ant-design/icons";
import {Logos} from "../../../assets";
import ToolTip from "../../ToolTip/ToolTip";

const data = [
    {
        title: "Education follow-up",
        img: Logos.ReplyVideoPreviewQuickReply1,
    },
    {
        title: "Donation thank you",
        img: Logos.ReplyVideoPreviewQuickReply2,
    },
    {
        title: "Immigration response",
        img: Logos.ReplyVideoPreviewQuickReply3,
    },
    {
        title: "Crime",
        img: Logos.ReplyVideoPreviewQuickReply4,
    },
    {
        title: "Tax policy reply",
        img: Logos.ReplyVideoPreviewQuickReply5,
    },
];
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
                <div className="border-t-2">
                    <div className="mt-5">
                        <InputComp
                            type="email"
                            size="large"
                            placeholder="Search"
                            className="bg-[white] "
                            icon={<SearchOutlined/>}
                        />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-5">
                        {data.map((item) => {
                            return (
                                <div className="flex flex-col border-[1px] border-[#EBEBEB] items-start w-[30%]">
                                    <div className="flex w-full  items-center border-[1px]  border-[#EBEBEB]">
                                        <h1 className="p-2 " style={{fontSize: "calc(1rem + 0.2vw)"}}>{item.title}</h1>
                                        <div className="p-1">
                                            <ToolTip/>
                                        </div>
                                    </div>
                                    <img src={item.img} alt="" className="p-2" style={{width: "calc(8rem + 8vw)"}}/>
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
