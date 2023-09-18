import React, {useEffect, useState} from "react";
import {Logos} from "../../assets";
import {useNavigate} from "react-router";
import {useGlobalInfo} from "../../contexts/GlobalContext";

function AddCaption() {
    const navigate = useNavigate();
    const {setModule} = useGlobalInfo()

    function VideoHandler() {
        navigate("/trim-video");
    }

    const [divs, setDivs] = useState([]);
    useEffect(() => {
        setModule("Video Trim Caption")
    }, [])

    function addDiv() {

        const newDiv = (
            <div className="h-[100px] my-2 rounded shadow  py-2">
                <p className="px-3 text-start  lg:text-[14px] xxxl:text-[20px] pb-[30px]">
                    I would like to talk to you
                </p>
                <hr/>
                <div className="flex justify-around pt-2">
                    <div className="flex gap-2">
                        <img src={Logos.TimerPause} alt="" className="w-4"/>
                        <p className="text-[#A0A0A0] text-[14px] xxxxl:text-[20px]">
                            00:00:50
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <img src={Logos.TimerStart} alt="" className="w-4"/>
                        <p className="text-[#A0A0A0]  text-[14px] xxxxl:text-[20px]">
                            00:01:20
                        </p>
                    </div>
                    <p className="text-[#A0A0A0]">|</p>
                    <img src={Logos.Trash2} alt="" className="w-4"/>
                </div>
            </div>
        );
        setDivs([...divs, newDiv]);
    }

    return (
        <div className="">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <img
                        src={Logos.BreadcrumbBack}
                        alt="icon"
                        className="cursor-pointer ml-2 w-[8px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />
                    <p className="ml-4 text-[18px]">Add Caption</p>
                </div>
            </div>
            <div
                style={{height: "calc(100vh - 125px)"}}
                className="flex  lg:flex-nowrap xxxs:flex-wrap"
            >
                <div
                    className="lg:w-[35%] flex justify-between flex-col   overflow-y-scroll xxxs:w-[100%]  mt-3 px-2 py-2 rounded border-[1px] shadow-md border-[#EBEBEB] pt-1">
                    <div>
                        <div className="h-[100px] my-2 rounded shadow mb-4  py-2">
                            <p className="px-3 text-start lg:text-[14px] xxxl:text-[20px] pb-[30px]">
                                I would like to talk to you
                            </p>
                            <hr/>
                            <div className="flex justify-around pt-2">
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
                        <div className="h-[100px] my-2 rounded shadow mb-4  py-2">
                            <p className="px-3 text-start  lg:text-[14px] xxxl:text-[20px] pb-[30px]">
                                I would like to talk to you
                            </p>
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
                        {divs.map((div, index) => {
                            return <div key={index}>{div}</div>;
                        })}
                    </div>

                    <div className="flex justify-center gap-2">
                        <button
                            onClick={() => {
                                addDiv();
                            }}
                            className="h-[40px]  px-2 border-[1px] rounded w-[150px] lg:text-[14px] xxxs:text-[11px] border-[#94A2F2] text-[#94A2F2]"
                        >
                            Add Caption
                        </button>
                        <button
                            className="h-[40px]  px-2 border-[1px] lg:text-[14px] xxxs:text-[11px] rounded w-[150px] bg-[#94A2F2] text-white">
                            Save changes
                        </button>
                    </div>
                </div>
                <div className="w-[100%]">
                    <div className="">
                        <img
                            src={Logos.AddCaption}
                            alt=""
                            className=""
                            style={{height: "calc(100vh - 125px)"}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCaption;
