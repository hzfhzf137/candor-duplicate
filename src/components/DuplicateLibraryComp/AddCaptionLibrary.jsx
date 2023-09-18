import React, {useEffect, useState} from "react";
import {Logos} from "../../assets";
import {useNavigate} from "react-router";
import {useGlobalInfo} from "../../contexts/GlobalContext";

function AddCaptionLibrary() {
    const [text, setText] = useState("");
    const [textList, setTextList] = useState([]);
    const [showTextarea, setShowTextarea] = useState(false);

    function Textarea() {
        setShowTextarea(!showTextarea);
    }

    function handleAddItem(e) {
        if (text === "") {
            e.StopPropagation();
        } else {
            setTextList([...textList, text]);
            setShowTextarea(!showTextarea);
        }
        setText("");
    }

    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/trim-video-library");
    }

    const {setModule} = useGlobalInfo();
    useEffect(() => {
        setModule("Video Trim Caption");
    }, []);

    return (
        <div style={{height: "calc(100vh - 85px)"}}>
            <div className="flex w-full justify-between items-center">
                <div className="flex">
                    <img
                        src={Logos.BreadcrumbBack}
                        alt="icon"
                        className="cursor-pointer ml-2 w-[8px] xxxl:w-[10px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />
                    <p className="ml-4 text-[18px] xxxl:text-[22px]">Add Caption</p>
                </div>
            </div>
            <div className="flex  lg:flex-nowrap xxxs:flex-wrap">
                <div
                    style={{height: "calc(100vh - 123px)"}}
                    className="lg:w-[35%] flex justify-between flex-col overflow-y-scroll xxxs:w-[100%]  mt-3 px-2 py-2 rounded border-[1px] shadow-md border-[#EBEBEB] pt-1"
                >
                    <div>
                        <div className="h-[100px] my-2 rounded shadow mb-4  py-2">
                            <p className="px-3 text-start pb-[30px] xxxl:text-[20px]">
                                I would like to talk to you
                            </p>
                            <hr/>
                            <div className="flex justify-around pt-2 xxxl:py-1 xxxl:text-[16px]">
                                <div className="flex gap-2  ">
                                    <img src={Logos.TimerPause} alt="" className="w-4"/>
                                    <p className="text-[#A0A0A0]">00:00:10</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src={Logos.TimerStart} alt="" className="w-4"/>
                                    <p className="text-[#A0A0A0]">00:00:10</p>
                                </div>
                                <p className="text-[#A0A0A0]">|</p>
                                <img src={Logos.Trash2} alt="" className="w-4"/>
                            </div>
                        </div>
                        <div className="h-[100px] my-2 rounded shadow mb-4  py-2">
                            <p className="px-3 text-start pb-[30px] xxxl:text-[20px]">
                                I would like to talk to you
                            </p>
                            <hr/>
                            <div className="flex justify-around pt-2 xxxl:py-1 xxxl:text-[16px]">
                                <div className="flex gap-2">
                                    <img src={Logos.TimerPause} alt="" className="w-4"/>
                                    <p className="text-[#A0A0A0]">00:00:10</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src={Logos.TimerStart} alt="" className="w-4"/>
                                    <p className="text-[#A0A0A0]">00:00:10</p>
                                </div>
                                <p className="text-[#A0A0A0]">|</p>
                                <img src={Logos.Trash2} alt="" className="w-4"/>
                            </div>
                        </div>

                        {textList.map((text, index) => (
                            <div
                                key={index}
                                className=" inset-0 flex justify-center items-center"
                            >
                                <div className=" w-full h-[100px] my-2 rounded shadow  py-2">
                                    <p className="px-3 text-start pb-[30px]">{text}</p>
                                    <hr/>
                                    <div className="flex justify-around pt-2">
                                        <div className="flex gap-2">
                                            <img src={Logos.TimerPause} alt="" className="w-4"/>
                                            <p className="text-[#A0A0A0]">00:00:50</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src={Logos.TimerStart} alt="" className="w-4"/>
                                            <p className="text-[#A0A0A0]">00:01:20</p>
                                        </div>
                                        <p className="text-[#A0A0A0]">|</p>
                                        <img src={Logos.Trash2} alt="" className="w-4"/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2">
                        <button
                            onClick={() => {
                                {
                                    Textarea();
                                }
                            }}
                            className="h-[40px]  px-2 border-[1px] rounded w-[150px] lg:text-[14px] xxxl:text-[18px] xxxs:text-[11px] border-[#94A2F2] text-[#94A2F2]"
                        >
                            Add Caption
                        </button>
                        <button
                            onClick={handleAddItem}
                            className="h-[40px]  px-2 border-[1px] lg:text-[14px] xxxs:text-[11px] xxxl:text-[18px] rounded w-[150px] bg-[#94A2F2] text-white"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
                <div className="w-[100%]">
                    <div className="relative">
                        <img
                            src={Logos.AddCaption}
                            alt=""
                            className="p-2 w-full"
                            style={{height: "calc(100vh - 112px)"}}
                        />
                        {showTextarea && (
                            <div className="absolute top-[150px]  left-48 ">
                                <div className="relative w-[340px] h-[70px]">
                  <textarea
                      className="w-full h-full rounded-none border-[1px] placeholder:text-white outline-none text-center text-white bg-transparent text-[40px] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg  px-2 py-1"
                      placeholder="Enter text here!"
                      // value={text}
                      onChange={(e) => setText(e.target.value)}
                  ></textarea>
                                    <div
                                        className="absolute left-[-5px] top-[-5px] w-4 h-4 bg-gray-300 rounded-full"></div>
                                    <div
                                        className="absolute top-[-5px] right-[-5px] w-4 h-4 bg-gray-300 rounded-full text-center text-[10px]"
                                        onClick={() => {
                                            {
                                            Textarea();
                                            }
                                        }}
                                    >
                                        X
                                    </div>
                                    <div
                                        className="absolute bottom-[-5px] left-[-5px] w-4 h-4 bg-gray-300 rounded-full"></div>
                                    <div
                                        className="absolute bottom-[-5px] right-[-5px] w-4 h-4 bg-gray-300 rounded-full"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCaptionLibrary;
