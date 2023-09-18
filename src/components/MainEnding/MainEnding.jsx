import React, {useState} from "react";
import {Logos} from "../../assets";
import LibraryDeletePopup from "../../components/LibraryDeletePopup/LibraryDeletePopup";
import InteractionDropdown from "../InteractionDropdown/InteractionDropdown";
import ToggleButton from "../ToggleButton/ToggleButton";
import {useNavigate} from "react-router";
import ToolTip from "../ToolTip/ToolTip";

const MainEnding = () => {
    const [card, setCard] = useState("desktopImg");
    const [isOpen1, setIsOpen1] = useState(false);
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/video");
    }

    const togglePopup1 = () => {
        setIsOpen1(!isOpen1);
    };

    function cardHandler(a) {
        setCard(a);
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
                        Add new step
                    </h1>
                </div>
                <div className="flex w-full justify-end ">
                    <button
                        onClick={() => {
                            cardHandler("desktopImg");
                        }}
                        className="   cursor-pointer lg:py-3 xxxs:py-2  lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-l-md"
                        style={{
                            background: card == "desktopImg" ? " #94A2F2" : "#E7EEF9",
                        }}
                    >
                        <img
                            src={card == "desktopImg" ? Logos.MonitorImg : Logos.MonitorGrey}
                            alt="Monitor Img"
                            className="desktop-icon cursor-pointer"
                        />
                    </button>
                    <button
                        onClick={() => {
                            cardHandler("mobileImg");
                        }}
                        style={{background: card == "mobileImg" ? " #94A2F2" : "#E7EEF9"}}
                        className="bg-[#E7EEF9] lg:py-3 cursor-pointer xxxs:py-2 lg:px-5 xxxs:px-4 flex justify-center items-center rounded-none rounded-r-md"
                    >
                        <img
                            src={
                                card == "mobileImg" ? Logos.MobileWhite : Logos.SmartPhoneImg
                            }
                            alt="Smart Phone Img"
                            className="mobile-icon"
                        />
                    </button>
                </div>
            </div>
            <div
                style={{height: "calc(100vh - 130px)"}}
                className="flex lg:flex-nowrap xxxs:flex-wrap justify-between gap-1 w-full"
            >
                <div
                    className="overflow-y-auto overflow-x-hidden lg:w-1/3 xxxxl:w-1/4  flex-auto border-[1px] shadow-md rounded-md">
                    <div className="flex justify-between bg-white items-center border-b-[1px] p-2 sticky top-0">
                        <div className="flex items-center gap-3 ">
                            <div
                                className="h-5 w-5 bg-[#3A37A6] text-white rounded-full flex justify-center items-center text-[10px]">
                                05
                            </div>
                            <h1 className="title-size text-[#3A37A6]">Main Ending</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src={Logos.EditIcon2}
                                alt="Copy Icon"
                                className="w-[18px]  xxxl:w-[27px]"
                            />

                            <img
                                src={Logos.CopyBtn}
                                alt="Copy Icon"
                                className="w-[18px] cursor-pointer  xxxl:w-[27px]"
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
                    <h1 className="font-medium  subtitle-size text-[#262626] my-1 p-2">
                        Interaction Type
                    </h1>

                    <InteractionDropdown
                        selectedValue={"Ending screen"}
                        Img={Logos.MonitorIcon}
                    />
                    <div className="flex flex-col h-full justify-between">
                        <div className="flex flex-col p-2 px-4 gap-2">
                            <div className="flex justify-between items-center gap-2 pb-2 border-b-[1px]">
                                <h1 className="flex items-center   gap-2 subtitle-size font-medium text-[#262626]">
                                    Add Video
                                    <ToolTip/>
                                </h1>
                                <ToggleButton isActive={true} width="[40px]" height="[22px]"/>
                            </div>
                            <div className="flex flex-col my-3  gap-4">
                                <label
                                    htmlFor="overlay"
                                    className=" font-[500]  subtitle-size leading-[22px] text-[#262626]"
                                >
                                    Add a screen title
                                </label>
                                <textarea
                                    name="overlay"
                                    id="overlay"
                                    cols="20"
                                    rows="6"
                                    className="shadow-md placeholder-input-modal  resize-none p-3 text-[14px] outline-none rounded-md"
                                    placeholder="Thank you!"
                                ></textarea>
                            </div>
                            <div className="flex flex-col my-3  gap-4">
                                <label
                                    htmlFor="overlay"
                                    className=" font-[500] subtitle-size leading-[22px] text-[#262626] rounded-md"
                                >
                                    Add a screen text
                                </label>
                                <textarea
                                    name="overlay"
                                    id="overlay"
                                    cols="20"
                                    rows="6"
                                    className="shadow-md resize-none placeholder-input-modal   xxxxl:text-[20px] p-3 text-[14px] outline-none"
                                    placeholder="Your help is greatly Appreciated"
                                ></textarea>
                            </div>

                            <div className="flex justify-between gap-2 pb-2 border-b-[1px]">
                                <h1 className="flex font-medium subtitle-size items-center gap-2  text-[#262626]">
                                    Background color
                                    <ToolTip/>
                                </h1>
                                {/* <button className="bg-[#3A37A6] shadow-md w-[40px] flex justify-center items-center gap-3 rounded-lg h-[40px] text-[13px]"></button> */}

                            </div>

                            <div className="flex justify-between gap-2 pb-2 border-b-[1px]">
                                <h1 className="flex font-medium  subtitle-size items-center gap-2  text-[#262626]">
                                    Text color
                                    <ToolTip/>
                                </h1>
                                <button
                                    className="bg-[#ffffff] w-[40px] flex justify-center items-center gap-3 rounded-lg h-[40px] text-[13px] shadow-md"></button>
                            </div>

                            <div className="flex justify-between items-center gap-2 pb-2 border-b-[1px]">
                                <h1 className="flex items-center  subtitle-size gap-2  font-medium text-[#262626]">
                                    Logo
                                    <ToolTip/>
                                </h1>
                                <ToggleButton isActive={true} width="[40px]" height="[22px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center px-3 py-3 ">
                        <button
                            className="bg-[#AEBFF2]   xxxxl:text-[24px] w-full text-white   shadow-md flex justify-center items-center gap-3 p-3 rounded-md lg:h-[45px] xxxs:h-[38px] lg:text-[18px] xxxs:text-[16px]">
                            Save
                        </button>
                    </div>
                </div>
                {card === "desktopImg" && (
                    <div
                        className="flex flex-col p-2  gap-2 justify-center items-end w-[100vw] border-[1px]  shadow-md rounded-md  bg-[#3A37A6] flex-auto">
                        <div className="flex flex-col  gap-2 justify-center items-center w-full h-full">
                            <h1 className="text-[40px] text-[#ffffff] "> Thank you!</h1>
                            <p className="text-[18px] text-[#ffffff] ">
                                {" "}
                                Your help is greatly Appreciated
                            </p>
                        </div>
                        <img
                            className="mb-5 mr-5 max-sm:w-[100px] max-sm:mb-1 max-sm:mr-2 max-md:w-[120px] max-md:mb-2 max-md:mr-3 w-[200px]"
                            src={Logos.Candor}
                            alt=""
                        />
                    </div>
                )}
                {card === "mobileImg" && (
                    <div
                        className=" border-[1px] shadow-md rounded-md flex-auto"
                        style={{width: "75vw"}}
                    >
                        <div className="flex justify-center items-center">
                            <img
                                src={Logos.MblBlue}
                                alt="Mbl Girl Img"
                                className="w-[306px] xxxxl:w-[470px] xxxxl:pt-16 p-9"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainEnding;
