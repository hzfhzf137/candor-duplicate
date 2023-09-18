import React, {useState} from "react";
import {Logos} from "../../assets";
import {useNavigate} from "react-router";
import LibraryDeletePopup from "../../components/LibraryDeletePopup/LibraryDeletePopup";
import InteractionDropdown from "../InteractionDropdown/InteractionDropdown";
import ImageButtons from "../ImageButtons/ImageButtons";
import ToggleButton from "../ToggleButton/ToggleButton";
import ToolTip from "../ToolTip/ToolTip";

function JoinComp() {
    const [displayText, setDisplayText] = useState(false);
    const [activeScreen, setActiveScreen] = useState("desktop");
    const [button, setButton] = useState("link");
    const [button1, setButton1] = useState("desk");
    const [isOpen1, setIsOpen1] = useState(false);
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/video");
    }

    const togglePopup1 = () => {
        setIsOpen1(!isOpen1);
    };

    function btnHandler(a) {
        setButton(a);
    }

    function btnHandler1(a) {
        setButton1(a);
    }

    const handleClick = () => {
        setDisplayText(!displayText);
    };

    const toggleScreen = (content) => {
        setActiveScreen(activeScreen === content ? "desktop" : content);
    };
    const popupData = [
        {
            heading: "Are you sure you want to delete this step?",
        },
    ];

    return (
        <div className="">
            <div className="flex  justify-between items-center">
                <div className="flex">
                    <img
                        src={Logos.BreadcrumbBack}
                        alt="icon"
                        className="cursor-pointer ml-2 w-[8px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />
                    <p className="ml-3  title-size">
                        Join
                    </p>
                </div>
                <div>
                    {button === "link" && (
                        <div className="rounded-[8px] grid grid-cols-2">
                            <button
                                className="cursor-pointer lg:py-3 text-[#A0A0A0] xxxs:py-2 lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-l-md"
                                style={{
                                    backgroundColor: button1 == "desk" ? "#94A2F2" : "#E7EEF9",
                                    color: button1 == "desk" ? "white" : "#A0A0A0",
                                }}
                                onClick={() => {
                                    btnHandler1("desk"), toggleScreen("desktop");
                                }}
                            >
                                {button1 == "desk" ? (
                                    <img src={Logos.MonitorImg} alt="Monitor Img" className="desktop-icon"/>
                                ) : (
                                    <img src={Logos.MoniterImg1} alt="Monitor Img dull" className="desktop-icon"/>
                                )}
                            </button>
                            <button
                                className="cursor-pointer lg:py-3 text-[#A0A0A0]  xxxs:py-2  lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-r-md"
                                style={{
                                    backgroundColor: button1 == "mbl" ? "#94A2F2" : "#E7EEF9",
                                    color: button1 == "mbl" ? "white" : "#A0A0A0",
                                }}
                                onClick={() => {
                                    btnHandler1("mbl"), toggleScreen("mobile");
                                }}
                            >
                                {button1 == "mbl" ? (
                                    <img src={Logos.SmartPhone1} alt="Smart Phone Img " className="mobile-icon"/>
                                ) : (
                                    <img src={Logos.SmartPhoneImg} alt="Smart Phone Img dull" className="mobile-icon"/>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div
                style={{height: "calc(100vh - 130px)"}}
                className="flex flex-wrap  xxxs:flex-wrap lg:flex-nowrap  mt-[6px]"
            >
                <div
                    className="lg:w-1/3 xxxxl:w-1/4  xxxs:w-[100%] overflow-scroll rounded border-[1px] shadow-md border-[#EBEBEB] pt-1 ">
                    <div className="flex justify-between px-3 pt-3 ">
                        <div className="flex items-center">
                            <div
                                className="h-5 w-5 bg-[#3A37A6] xxxxl:text-[12px] text-white rounded-full flex justify-center items-center text-[10px]">
                                04
                            </div>
                            <p className="title-size ml-3 text-[#3A37A6] ">
                                Thanks
                            </p>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={Logos.EditIcon2}
                                alt="icon"
                                className=" mr-2  xxxl:w-[27px]"
                            />
                            <img
                                src={Logos.DonationCopyIcon}
                                alt="icon"
                                className=" mr-2   xxxl:w-[27px]"
                            />
                            <img
                                src={Logos.BlueTrash}
                                alt="icon"
                                className="  xxxl:w-[27px]  "
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
                    <hr/>
                    <p className="p-4 subtitle-size">
                        Interaction Type
                    </p>
                    <div className="flex flex-col h-full justify-between px-2">
                        <div className="flex flex-col  justify-center">
                            <InteractionDropdown
                                selectedValue={"Button"}
                                Img={Logos.ButtonIcon}

                            />
                            <ImageButtons/>
                            <div className="px-3">
                                <div className="flex justify-between pt-3 pb-2">
                                    <div className="flex pt-1">
                                        <p className="subtitle-size ">
                                            Capture contact details
                                        </p>
                                        <div className="pt-1 px-1 xxxxl:pt-2">
                                            <ToolTip/>
                                        </div>
                                    </div>
                                    <div>
                                        <ToggleButton
                                            isActive={true}
                                            width="[40px]"
                                            height="[22px]"
                                        />
                                    </div>
                                </div>
                                <hr/>

                                <div className="flex justify-between py-2 ">
                                    <div className="flex pt-1">
                                        <p className="subtitle-size ">
                                            Delay Interaction
                                        </p>
                                        <div className="pt-1 px-1 xxxxl:pt-2">
                                            <ToolTip/>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="2"
                                        className="bg-[#F5F5F5] placeholder:text-black text-center outline-none px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px] text-[13px]"
                                        name=""
                                        id=""
                                    />
                                </div>
                                <hr/>
                                <div className="flex justify-between pt-3 pb-2">
                                    <div className="flex pt-1">
                                        <p className="subtitle-size  ">
                                            Capture contact details
                                        </p>
                                        <div className="pt-1 px-1 xxxxl:pt-2">
                                            <ToolTip/>
                                        </div>
                                    </div>
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>

                                <p className="subtitle-size py-3">
                                    Overlay texts
                                </p>
                                <textarea
                                    className=" outline-none placeholder-input-modal placeholder:leading-5 resize-none w-full  xxxxl:text-[18px] min-h-[80px]  text-[#A0A0A0] text-[11px] p-2 leading-3  rounded   border-[1px] border-[#EBEBEB]"
                                    onClick={handleClick}
                                    placeholder=" Lorem is the dummy text of the printing and type setting industry. Lorem ipsum is the industry standard dummy text ever since 1500s."
                                ></textarea>
                                <h1 className="xxxs:text-[10px]  xxxxl:text-[16px] lg:text-[11px] flex pb-2 border-b-[1px] items-end text-[#94A2F2]">
                                    Learn how to pipe in variables (e.g. name) into your overlay
                                    text.
                                    <img src={Logos.Export} alt="Export" className="subicon-size"/>
                                </h1>
                                <div className="py-2">
                                    <p className="subtitle-size">
                                        Button Text
                                    </p>
                                    <div className="rounded shadow-md h-[35px]"></div>
                                </div>
                                <div
                                    className="flex justify-between py-2 mt-2 px-2 border-l-[13px] rounded border-[#AEBFF2] shadow-md">
                                    <p className="subtitle-size">
                                        Destination
                                    </p>
                                    <img
                                        src={Logos.DestinationIcon}
                                        alt="icon"
                                        className="w-[40px] "
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-2">
                            <button
                                className="text-white text-center  w-full flex justify-center py-2  xxxxl:text-[19px] lg:text-[15px] rounded bg-[#94A2F2] border-none h-[40px] ">
                                Save
                            </button>
                        </div>
                    </div>
                </div>

                {/* right-side */}
                {activeScreen === "desktop" && (
                    <div className="w-full border-[1px] px-4 shadow-md rounded-md">
                        <h1 className="flex justify-center items-center  xxxxl:text-[17px] xxxs:text-[12px] text-[#A0A0A0] p-2">
                            This is a preview. No data will be recorded.
                        </h1>
                        <div className="flex  lg:flex-nowrap w-full xxxs:flex-wrap justify-between gap-1">
                            <div className="flex w-[50%]  flex-auto">
                                <img
                                    src={Logos.GirlImg}
                                    alt="Girl Img"
                                    className="px-5"
                                    style={{height: "calc(100vh - 170px)"}}
                                />
                            </div>
                            <div
                                className="w-[50%] rounded flex py-4 flex-auto justify-center  items-center border-[1px]  shadow-md border-[#EBEBEB] mb-4 mt-1">
                                <button
                                    className=" bg-[#AEBFF2] text-white xxxxl:text-[24px]  rounded w-[140px] text-[23px] h-[45px] shadow-md cursor-pointer">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {activeScreen === "mobile" && (
                    <div
                        className=" border-[1px] shadow-md rounded-md flex-auto"
                        style={{width: "100vw"}}
                    >
                        <div className="flex justify-center items-center">
                            <img
                                src={Logos.JoinMobile}
                                alt="Mbl Girl Img"
                                className="w-[306px] xxxxl:w-[470px] xxxxl:pt-16 p-9"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default JoinComp;
