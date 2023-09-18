import React, {useState} from "react";
import {Logos} from "../../assets";
import LibraryDeletePopup from "../../components/LibraryDeletePopup/LibraryDeletePopup";
import InteractionDropdown from "../InteractionDropdown/InteractionDropdown";
import {useNavigate} from "react-router";
import VideoLeftComp from "./AllSubComp/VideoLeftComp";
import VideoRightComp from "./AllSubComp/VideoRightComp";


const VideoSteps = () => {
    const [card, setCard] = useState("desktopImg");
    const [isOpen1, setIsOpen1] = useState(false);
    const [button1, setButton1] = useState("desk");

    const togglePopup1 = () => {
        setIsOpen1(!isOpen1);
    };

    function cardHandler(a) {
        setCard(a);
    }

    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/video");
    }

    function btnHandler1(a) {
        setButton1(a);
    }

    const popupData = [
        {
            heading:
                "Are you sure you want to delete this step?",
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-between pb-2">
                <div className="flex items-center justify-start gap-3 w-full">
                    <img
                        src={Logos.VectorLeft}
                        alt="Vector Left"
                        className="cursor-pointer w-[7px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />
                    <h1 className="font-medium title-size text-[#262626]">
                        Introduction
                    </h1>
                </div>
                <div className="rounded-[8px] grid grid-cols-2">
                    <button
                        className="cursor-pointer lg:py-3 text-[#A0A0A0] xxxs:py-2 lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-l-md"
                        style={{
                            backgroundColor:
                                button1 == "desk"
                                    ? "#94A2F2"
                                    : "#E7EEF9",
                            color:
                                button1 == "desk"
                                    ? "white"
                                    : "#A0A0A0",
                        }}
                        onClick={() => {
                            btnHandler1("desk"),
                                cardHandler("desktopImg");
                        }}
                    >
                        {button1 == "desk" ? (
                            <img
                                src={Logos.MonitorImg}
                                alt="Monitor Img"
                                className="desktop-icon"
                            />
                        ) : (
                            <img
                                src={Logos.MoniterImg1}
                                alt="Monitor Img dull"
                                className="desktop-icon"
                            />
                        )}
                    </button>
                    <button
                        className="cursor-pointer lg:py-2 text-[#A0A0A0] lg:px-3 flex justify-center items-center rounded-none rounded-r-md"
                        style={{
                            backgroundColor:
                                button1 == "mbl"
                                    ? "#94A2F2"
                                    : "#E7EEF9",
                            color:
                                button1 == "mbl"
                                    ? "white"
                                    : "#A0A0A0",
                        }}
                        onClick={() => {
                            btnHandler1("mbl"),
                                cardHandler("mobileImg");
                        }}
                    >
                        {button1 == "mbl" ? (
                            <img
                                src={Logos.SmartPhone1}
                                alt="Smart Phone Img "
                                className="mobile-icon"
                            />
                        ) : (
                            <img
                                src={Logos.SmartPhoneImg}
                                alt="Smart Phone Img dull"
                                className="mobile-icon"
                            />
                        )}
                    </button>
                </div>
            </div>
            <div
                style={{height: "calc(100vh - 125px)"}}
                className="flex lg:flex-nowrap  xxxs:flex-wrap justify-between gap-1 w-[100%]"
            >
                <div
                    className="overflow-y-auto overflow-x-hidden   xxxs:w-full lg:w-1/3 xxxxl:w-1/4 border-[1px] shadow-md rounded-md">
                    <div className="flex justify-between items-center  border-b-[1px] p-2">
                        <div className="flex items-center gap-3">
                            <div
                                className="h-5 w-5 bg-[#3A37A6] text-white rounded-full flex justify-center items-center text-[10px]">
                                01
                            </div>
                            <h1 className="title-size text-[#3A37A6]">
                                Introduction
                            </h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src={Logos.EditIcon2}
                                alt="Copy Icon"
                                className="w-[18px]  xxxl:w-[27px]"
                            />

                            <img
                                src={Logos.CopySquare}
                                alt="Copy Icon"
                                className="w-[18px]  xxxl:w-[27px]"
                            />
                            <img
                                src={Logos.TrashIcon1}
                                alt="Trash Icon"
                                className="w-[18px] cursor-pointer  xxxl:w-[27px]"
                                onClick={togglePopup1}
                            />

                            {popupData.map((item) => {
                                return (
                                    isOpen1 && (
                                        <LibraryDeletePopup
                                            title={item.heading}
                                            handleClose1={togglePopup1}
                                        />
                                    )
                                );
                            })}
                        </div>
                    </div>
                    <h1 className="font-medium subtitle-size text-[#262626] mt-1 p-2">
                        Interaction Type
                    </h1>
                    <InteractionDropdown
                        selectedValue={"Path"}
                    />
                    <VideoLeftComp/>
                </div>
                <VideoRightComp card={card}/>
            </div>
        </div>
    );
};

export default VideoSteps;
