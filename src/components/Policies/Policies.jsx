import React, {useState} from "react";
import {Logos} from "../../assets";
import LibraryDeletePopup from "../../components/LibraryDeletePopup/LibraryDeletePopup";

import {Link} from "react-router-dom";
import InteractionDropdown from "../InteractionDropdown/InteractionDropdown";
import ImageButtons from "../ImageButtons/ImageButtons";
import ToolTip from "../ToolTip/ToolTip";
import ToggleButton from "../ToggleButton/ToggleButton";
import {useNavigate} from "react-router";
import Button from "../Buttons/Buttons";

const Policies = () => {
    const [card, setCard] = useState("desktopImg");
    const [displayText, setDisplayText] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/video");
    }

    const togglePopup1 = () => {
        setIsOpen1(!isOpen1);
    };

    const handleClick = () => {
        setDisplayText(!displayText);
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
        <div className="">
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
                    <h1 className="font-medium title-size text-[#262626]">Policies</h1>
                </div>
                <div className="flex w-full justify-end ">
                    <button
                        onClick={() => {
                            cardHandler("desktopImg");
                        }}
                        style={{
                            backgroundColor: card == "desktopImg" ? "#94A2F2" : "#E7EEF9",
                            color: card == "desktopImg" ? "white" : "#A0A0A0",
                        }}
                        className="bg-[#94A2F2] cursor-pointer py-2 px-3 flex justify-center items-center rounded-none rounded-l-md"
                    >
                        {card == "desktopImg" ? (
                            <img
                                src={Logos.MonitorImg}
                                alt="Monitor Img"
                                className="desktop-icon cursor-pointer"
                            />
                        ) : (
                            <img
                                src={Logos.MoniterImg1}
                                alt="Monitor Img dull"
                                className="desktop-icon cursor-pointer"
                            />
                        )}
                    </button>
                    <button
                        onClick={() => {
                            cardHandler("mobileImg");
                        }}
                        style={{
                            backgroundColor: card == "mobileImg" ? "#94A2F2" : "#E7EEF9",
                            color: card == "mobileImg" ? "white" : "#A0A0A0",
                        }}
                        className="bg-[#E7EEF9] py-2 cursor-pointer lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-r-md"
                    >
                        {card == "mobileImg" ? (
                            <img
                                src={Logos.SmartPhone1}
                                alt="Smart Phone Img "
                                className="mobile-icon"
                            />
                        ) : (
                            <img
                                src={Logos.SmartPhoneImg}
                                alt="Smart Phone Img"
                                className="mobile-icon"
                            />
                        )}
                    </button>
                </div>
            </div>
            <div
                style={{height: "calc(100vh - 125px)"}}
                className="flex lg:flex-nowrap xxxs:flex-wrap  justify-between gap-5 w-full"
            >
                <div className=" overflow-x-hidden lg:w-1/3 xxxxl:w-1/4    flex-auto border-[1px] shadow-md rounded-md">
                    <div className="flex justify-between items-center border-b-[1px] p-2">
                        <div className="flex items-center gap-3">
                            <div
                                className="h-5 w-5 bg-[#3A37A6] text-white rounded-full flex justify-center items-center text-[10px]">
                                02
                            </div>
                            <h1 className="title-size text-[#3A37A6]">Policies</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Logos.EditIcon2} alt="Copy Icon" className="w-[18px]"/>

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
                    <h1 className="font-medium subtitle-size text-[#262626] my-1 p-2">
                        Interaction Type
                    </h1>
                    <InteractionDropdown selectedValue={"Reply"} Img={Logos.ReplyIcon}/>
                    <div className="py-2">
                        <ImageButtons/>
                    </div>
                    <div className="flex flex-col p-2 gap-2">
                        <div className="flex justify-between gap-2 pb-2 border-b-[1px]">
                            <h1 className="flex items-center font-medium   gap-2 subtitle-size text-[#262626]">
                                Fit video
                                <ToolTip/>
                            </h1>
                            <ToggleButton isActive={true} width="[40px]" height="[22px]"/>
                        </div>
                        <div className="flex justify-between gap-2 pb-2 border-b-[1px]">
                            <h1 className="flex font-medium items-center  gap-2 subtitle-size text-[#262626]">
                                Delay Interaction
                                <ToolTip/>
                            </h1>
                            <input
                                type="text"
                                placeholder="2"
                                className="bg-[#F5F5F5] placeholder:text-black placeholder-input-modal text-center outline-none px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px] text-[13px]"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="flex justify-between items-center gap-2 pb-2 border-b-[1px]">
                            <h1 className="flex items-center gap-2 subtitle-size font-medium text-[#262626]">
                                Capture contact details
                            </h1>
                            <ToggleButton isActive={false} width="[40px]" height="[22px]"/>
                        </div>
                        <div
                            onClick={handleClick}
                            className="cursor-pointer flex flex-col gap-2"
                        >
                            <h1 className="font-medium subtitle-size text-[#262626]">
                                Overlay texts
                            </h1>
                            <textarea
                                className=" outline-none w-full  min-h-[80px] resize-none text-[#A0A0A0]  p-2 placeholder:leading-6-3  rounded   border-[1px] border-[#EBEBEB] placeholder-input-modal"
                                onClick={handleClick}
                                placeholder=" Lorem is the dummy text of the printing and type setting industry. Lorem ipsum is the industry standard dummy text ever since 1500s."
                            ></textarea>
                        </div>
                        <h1 className="xxxs:text-[10px] relative xxxxl:text-[16px] lg:text-[11px] flex pb-2 border-b-[1px] items-end text-[#94A2F2]">
                            Learn how to pipe in variables (e.g. name) into your overlay text.
                            <img
                                src={Logos.Export}
                                alt="Export"
                                className="w-[12px] absolute left-[70px] bottom-[10px] xxxxl:left-9"
                            />
                        </h1>

                        <h1 className="subtitle-size font-[400]   p-2 leading-[22px] text-[#262626]">
                            Reply Options
                        </h1>
                        <div className="  rounded-[8px] shadow-md">
                            <div className="p-4 flex justify-between">
                                <h1 className="subtitle-size font-[400] leading-[22px] text-[#262626]">
                                    Video
                                </h1>
                                <ToggleButton isActive={true} width="[40px]" height="[22px]"/>
                            </div>
                            <div className="p-4 flex justify-between">
                                <h1 className=" font-[400] subtitle-size leading-[22px] text-[#262626]">
                                    Audio
                                </h1>
                                <ToggleButton isActive={true} width="[40px]" height="[22px]"/>
                            </div>
                            <div className="p-4 flex justify-between">
                                <h1 className=" font-[400]  subtitle-size leading-[22px] text-[#262626]">
                                    Text
                                </h1>
                                <ToggleButton isActive={true} width="[40px]" height="[22px]"/>
                            </div>
                        </div>
                        <div className="flex justify-between gap-2 pb-2 border-b-[1px]">
                            <h1 className="flex font-medium subtitle-size items-center gap-2 xxxs:text-[12px] lg:text-[14px] text-[#262626]">
                                Video/audio time limit
                                <ToolTip/>
                            </h1>
                            <input
                                type="text"
                                placeholder="120"
                                className="bg-[#F5F5F5] placeholder:text-black placeholder-input-modal text-center outline-none px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px] text-[13px]"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="flex justify-between gap-2 pb-2 border-b-[1px]">
                            <h1 className="flex font-medium subtitle-size items-center gap-2 xxxs:text-[12px] lg:text-[14px] text-[#262626]">
                                Character limit
                                <ToolTip/>
                            </h1>
                            <input
                                type="text"
                                placeholder="250"
                                className="bg-[#F5F5F5] placeholder:text-black placeholder-input-modal text-center outline-none px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px] text-[13px]"
                                name=""
                                id=""
                            />
                        </div>

                        <div className="flex justify-center gap-2 items-center">
                            <div className="flex w-full">
                                <div className="w-[15px] h-[45px] bg-[#AEBFF2] shadow-md rounded-l-md"></div>
                                <h1 className="flex justify-between w-full subtitle-size gap-1 xxxs:text-[12px] items-center h-[45px] shadow-md rounded-r-md pl-2">
                                    Destination
                                    <div className="pl-3">
                                        <img
                                            src={Logos.PathImg4}
                                            alt="Path Img1"
                                            className="w-[55px]"
                                        />
                                    </div>
                                </h1>
                            </div>
                        </div>
                        <div className="flex justify-center py-3">
                            <button
                                className="bg-[#AEBFF2] w-full xxxxl:text-[24px] text-white   shadow-md flex justify-center items-center gap-3 p-3 rounded-md lg:h-[45px] xxxs:h-[38px] lg:text-[18px] xxxs:text-[16px]">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                {card === "desktopImg" && (
                    <div className=" w-[100%] border-[1px] py-2 shadow-md rounded-md  flex-auto px-4">
                        <h1 className="flex justify-center xxxxl:text-[16px] items-center xxxs:text-[12px] text-[#A0A0A0] p-2">
                            This is a preview. No data will be recorded.
                        </h1>
                        <div className="flex w-[100%] lg:flex-nowrap xxxs:flex-wrap justify-between gap-1">
                            <div className="flex w-[50%] flex-auto">
                                <img
                                    src={Logos.GirlImg}
                                    alt="Girl Img"
                                    className=" px-5 flex justify-center flex-auto"
                                    style={{height: "calc(100vh - 170px)"}}
                                />
                            </div>
                            <div className="flex justify-center w-[50%] flex-auto  py-2">
                                <div
                                    className="   flex flex-col w-full justify-center gap-4 border-[1px] px-4  border-[#EBEBEB] border-solid rounded-md shadow-md">
                                    <>
                                        <p className=" lg:text-[18px] xxxxl:text-[24px] font-[400]   leading-[28px] text-[#262626] text-center">
                                            How would you like to respond?
                                        </p>
                                        <div className="flex justify-center flex-wrap">
                                            <Link to="/reply-video-preview">
                                                <Button
                                                    title="video"
                                                    img={Logos.Video}
                                                    class="max-xs:w-[50px] w-[60px]"
                                                    iconWidth=" w-[40px]"
                                                ></Button>
                                            </Link>
                                            <Link to="/reply-audio-preview">
                                                <Button
                                                    title="Audio"
                                                    img={Logos.MicroPhoneWhite}
                                                    class="w-[60px]"
                                                    iconWidth="w-[40px]"
                                                ></Button>
                                            </Link>

                                            <Link to="/reply-text-preview">
                                                <Button
                                                    title="Text"
                                                    img={Logos.WhiteEdit}
                                                    class="w-[60px]"
                                                    iconWidth="w-[40px]"
                                                ></Button>
                                            </Link>
                                        </div>
                                        <p className=" text-[14px] font-[400] xxxxl:text-[18px] leading-[22px] text-[#A0A0A0] text-center">
                                            You can practice and review before sending
                                        </p>
                                    </>
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
                                className="w-[306px] xxxxl:w-[470px] xxxxl:pt-16 p-9"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Policies;
