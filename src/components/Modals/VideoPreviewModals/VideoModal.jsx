import {Modal} from "antd";

import CheckboxComp from "../../CheckboxComp/CheckboxComp";
import ButtonComp from "../../ButtonComp/ButtonComp";
import {useState} from "react";
import ToggleButton from "../../ToggleButton/ToggleButton";

const data = [
    {
        id: 1,
        text: "UVC camera (12d1:4321)",
        color: "black",
    },
    {
        id: 2,
        text: "UVC camera (12d1:4321)",
        color: "gray",
    },
    {
        id: 3,
        text: "UVC camera (12d1:4321)",
        color: "gray",
    },
    {
        id: 4,
        text: "UVC camera (12d1:4321)",
        color: "gray",
    },
];
const microPhone = [
    {
        text: "Default-capture input terminal (AC interface) (12d1:4321)",
        color: "black",
        id: 1,
    },
    {
        text: "Communications-capture input terminal (AC interface) (12d1:4321)",
        color: "gray",
        id: 2,
    },
    {
        id: 3,

        text: "Capture input terminal (AC interface) (12d1:4321)",
        color: "gray",
    },
    {
        id: 4,
        text: "Stereo Mix (Realtek high definition audio)",
        color: "gray",
    },
];
const VideoModal = (props) => {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <Modal
                title={props.title}
                centered
                width={props.width ?? "calc(25rem + 1vw)"}
                open={props.open}
                onOk={() => props.setOpen(false)}
                onCancel={() => props.setOpen(false)}
                footer={null}
            >
                <div className="flex flex-col gap-1 border-t-[1px] border-[#CEDEF2] mt-3 ">
                    <div className="mt-5 flex flex-col gap-3">
                        {props.label === "video" &&
                            props.data?.map((camera, index) => {
                                return (
                                    <div className="flex items-center gap-3 ">
                                        <CheckboxComp className="cursor-pointer" key={index}/>
                                        <p style={{fontSize: "calc(1rem + 0.2vw)"}}>Camera {index +
                                            1} {camera.label} </p>
                                    </div>
                                );
                            })}
                        {props.label === "audio" &&
                            props.data2?.map((audio, index) => {
                                return (
                                    <div className="flex items-center gap-3">
                                        <CheckboxComp className="cursor-pointer" id={index}/>
                                        <p style={{fontSize: "calc(1rem + 0.2vw)"}}>MicroPhone {index +
                                            1} {audio.label}</p>
                                    </div>
                                );
                            })}

                        {props.label === "save" && (
                            <div>
                                <h1 className="text-[gray]" style={{fontSize: "calc(0.8rem + 0.2vw)"}}>
                                    Like it? Save it and use it as a quick reply to oyher
                                    conversations in the future.
                                </h1>
                                <input
                                    type="text"
                                    className="placeholder-input-modal bg-[#F5F5F5] w-[100%] mt-5 p-3 text-[13px] rounded-[5px] outline-none"
                                    placeholder="Title your response..."
                                />
                                <div className="flex justify-between items-center mt-5">
                                    <h1 className="font-normal " style={{fontSize: "calc(1rem + 0.2vw)"}}>
                                        Save as a quick reply
                                    </h1>
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                        )}

                        {(props.label === "audio" || props.label === "save") && (
                            <div className="flex items-center justify-center gap-5 mt-4">
                                <ButtonComp
                                    className="text-[18px] text-[#94A2F2] border-[#94A2F2] border-[1px] rounded-[5px]  py-[10px] w-[180px]"
                                    name="Cancel"
                                    onClick={() => {
                                        props.setOpen(false);
                                    }}
                                />

                                <ButtonComp
                                    className="text-[18px] text-[white] bg-gradient-to-b rounded-[5px] from-[#AEBFF2] to-[#94A2F2]  py-[10px] w-[180px]"
                                    name="Save"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default VideoModal;
