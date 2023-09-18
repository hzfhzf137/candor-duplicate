import React, {useState} from "react";
import {Logos} from "../../assets";
import LibraryDeletePopup from "../../components/LibraryDeletePopup/LibraryDeletePopup";
import InteractionDropdown from "../InteractionDropdown/InteractionDropdown";
import ImageButtons from "../ImageButtons/ImageButtons";
import {useNavigate} from "react-router";
import Path from "../VideoSteps/AllSubComp/Path";
import VideoLeftComp from "../VideoSteps/AllSubComp/VideoLeftComp";

const BuildTaxReform = () => {
    const [card, setCard] = useState("desktopImg");
    const [displayText, setDisplayText] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
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
            heading: "Are you sure you want to delete this step?",
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
                            backgroundColor: button1 == "desk" ? "#94A2F2" : "#E7EEF9",
                            color: button1 == "desk" ? "white" : "#A0A0A0",
                        }}
                        onClick={() => {
                            btnHandler1("desk"), cardHandler("desktopImg");
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
                            backgroundColor: button1 == "mbl" ? "#94A2F2" : "#E7EEF9",
                            color: button1 == "mbl" ? "white" : "#A0A0A0",
                        }}
                        onClick={() => {
                            btnHandler1("mbl"), cardHandler("mobileImg");
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
                            <h1 className="title-size text-[#3A37A6]">Introduction</h1>
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
                    <InteractionDropdown selectedValue={"Path"} Img={Logos.PathIcon}/>
                    <div>
                        <ImageButtons/>
                    </div>

                    <VideoLeftComp/>
                </div>
                {card === "desktopImg" && (
                    <div className="w-full border-[1px] px-4 shadow-md rounded-md">
                        <h1 className="flex justify-center items-center xxxxl:text-[18px] xxxs:text-[12px] text-[#A0A0A0] p-2">
                            This is a preview. No data will be recorded.
                        </h1>
                        <div className="flex  lg:flex-nowrap w-full xxxs:flex-wrap justify-between gap-1">
                            <div className="flex w-[50%]  flex-auto">
                                <img
                                    src={Logos.GirlImg}
                                    alt="Girl Img"
                                    className=" px-5 mx-auto"
                                    style={{height: "calc(100vh - 170px)"}}
                                />
                            </div>
                            <div className="flex justify-center  w-[50%]  flex-auto  my-2">
                                <div
                                    className="flex flex-col gap-3 justify-center overflow-x-hidden min-h-[300px]  w-full lg:px-20 xxxs:px-4 shadow-md border-[1px] rounded-md">
                                    <div className="flex justify-center items-center">
                                        <h1 className="flex justify-start xxxs:text-[12px]   xxxxl:text-[17px] items-center  xxxs:border-none  w-full h-[45px] shadow-md rounded-l-md text-[#A0A0A0] px-4">
                                            Tell me more about yourself
                                        </h1>
                                        <div className="w-[18px] h-[45px] bg-[#AEBFF2] shadow-md rounded-r-md"></div>
                                    </div>
                                    <div className="flex justify-center items-center ">
                                        <h1 className="flex justify-start xxxs:text-[12px]  xxxxl:text-[17px] w-full items-center h-[45px] shadow-md rounded-l-md text-[#A0A0A0] px-4">
                                            Let’s talk about the issues
                                        </h1>
                                        <div className="w-[18px] h-[45px] bg-[#AEBFF2] shadow-md rounded-r-md"></div>
                                    </div>
                                    <div className="flex justify-center items-center ">
                                        <h1 className="flex justify-start xxxs:text-[12px]  xxxxl:text-[17px] items-center w-full h-[45px] shadow-md rounded-l-md text-[#A0A0A0] px-4">
                                            You’re got my vote!
                                        </h1>
                                        <div className="w-[18px] h-[45px] bg-[#AEBFF2] shadow-md rounded-r-md"></div>
                                    </div>
                                    <div className="flex justify-center items-center ">
                                        <div
                                            className="flex justify-start xxxs:text-[12px]  xxxxl:text-[18px] text-[14px] w-full items-center xxxxl:h-[55px] h-[45px] shadow-md rounded-l-md text-[#A0A0A0] px-4">
                                            What is your position on <br/> immigration reform?
                                        </div>
                                        <div className="w-[18px] h-[45px] bg-[#AEBFF2] shadow-md rounded-r-md"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {card === "mobileImg" && (
                    <div
                        className=" border-[1px] shadow-md rounded-md flex-auto"
                        style={{width: "100vw"}}
                    >
                        <div className="flex justify-center items-center">
                            <img
                                src={Logos.MblGirlImg}
                                alt="Mbl Girl Img"
                                className="w-[306px] xxxxl:w-[470px] p-9 xxxxl:pt-16"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BuildTaxReform;
