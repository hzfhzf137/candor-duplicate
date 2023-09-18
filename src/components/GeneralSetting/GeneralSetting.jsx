import React, {useState} from "react";
import {Logos} from "../../assets";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import InputComp from "../../components/InputComp/InputComp";
import CheckboxComp from "../../components/CheckboxComp/CheckboxComp";
import SettingPopupPipe from "../../components/SetttingPopupPipe/SettingPopupPipe";
import SettingPopupSendEmail from "../../components/SettingPopupSendEmail/SettingPopupSendEmail";
import ToolTip from "../ToolTip/ToolTip";
import ToggleButton from "../ToggleButton/ToggleButton";
import DynamicDropdown from "../DynamicDropdown/DynamicDropdown";
import AddALogo from "../PopUp/AddALogo";
import DomainPopup from "../PopUp/DomainPopup";
import CustomLanguage from "../PopUp/CustomLanguage";
import Button from "../Buttons/Buttons";

const GeneralSetting = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);
    const [showDropdown4, setShowDropdown4] = useState(false);
    const [searchTextValue, setSearchTextValue] = useState("");
    const [checked, setChecked] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const [isPopup1, setIsPopup1] = useState(false);
    const [isPopup2, setIsPopup2] = useState(false);
    const [isPopup3, setIsPopup3] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [button, setButton] = useState("general");
    const [button1, setButton1] = useState("desk");
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/video");
    }

    const Popup = () => {
        setIsPopup(!isPopup);
    };
    const Popup1 = () => {
        setIsPopup1(!isPopup1);
    };
    const Popup2 = () => {
        setIsPopup2(!isPopup2);
    };
    const Popup3 = () => {
        setIsPopup3(!isPopup3);
    };

    function emailHandler() {
        navigate("/email-preview");
    }

    function toggleHandler(a) {
        setToggle(a);
    }

    function btnHandler(a) {
        setButton(a);
    }

    function btnHandler1(a) {
        setButton1(a);
    }

    const dropDown1 = () => {
        setShowDropdown1(!showDropdown1);
        setShowDropdown2(false);
        setShowDropdown3(false);
        setShowDropdown4(false);
    };

    const dropDown2 = () => {
        setShowDropdown2(!showDropdown2);
        setShowDropdown1(false);
        setShowDropdown3(false);
        setShowDropdown4(false);
    };

    const dropDown3 = () => {
        setShowDropdown3(!showDropdown3);
        setShowDropdown1(false);
        setShowDropdown2(false);
        setShowDropdown4(false);
    };

    const dropDown4 = () => {
        setShowDropdown4(!showDropdown4);
        setShowDropdown1(false);
        setShowDropdown3(false);
        setShowDropdown2(false);
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const togglePopup1 = () => {
        setIsOpen1(!isOpen1);
    };

    const popupData = [
        {
            heading: "Send Test Email",
            btn: "Send",
        },
    ];

    const popupData2 = [
        {
            heading: "Pipe A Variable",
            btn: "Insert",
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-between pb-2 w-full">
                <div className="flex items-center justify-start gap-3">
                    <img
                        src={Logos.VectorLeft}
                        alt="Vector Left"
                        className="cursor-pointer w-[7px] xxxxl:w-[10px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />
                    <h1 className="font-medium title-size text-[#262626]">
                        General Setting
                    </h1>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-[#94A2F2] cursor-pointer py-2 px-3 flex justify-center items-center rounded-none rounded-l-md"
                        style={{
                            backgroundColor: button1 == "desk" ? "#94A2F2" : "#E7EEF9",
                            color: button1 == "desk" ? "white" : "#A0A0A0",
                        }}
                        onClick={() => {
                            btnHandler1("desk");
                        }}
                    >
                        {button1 == "desk" ? (
                            <img src={Logos.MonitorImg} alt="Monitor Img" className="desktop-icon"/>
                        ) : (
                            <img
                                src={Logos.MoniterImg1}
                                alt="Monitor Img dull"
                                className="desktop-icon"
                            />
                        )}
                    </button>
                    <button
                        className="bg-[#E7EEF9] py-2 cursor-pointer lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-r-md"
                        style={{
                            backgroundColor: button1 == "mbl" ? "#94A2F2" : "#E7EEF9",
                            color: button1 == "mbl" ? "white" : "#A0A0A0",
                        }}
                        onClick={() => {
                            btnHandler1("mbl");
                        }}
                    >
                        {button1 == "mbl" ? (
                            <img src={Logos.SmartPhone1} alt="Smart Phone Img " className="mobile-icon "/>
                        ) : (
                            <img src={Logos.SmartPhoneImg} alt="Smart Phone Img dull" className="mobile-icon "/>
                        )}
                    </button>
                </div>
            </div>
            <div
                style={{height: "calc(100vh - 125px)"}}
                className="flex lg:flex-nowrap  xxxs:flex-wrap"
            >
                <div
                    className="lg:w-1/3 xxxxl:w-1/4  xxxs:w-[100%] overflow-x-hidden overflow-y-scroll border-[1px] shadow-md rounded-md">
                    <div className="border-b-[1px] p-5 flex flex-col gap-3">
                        <h1 className="title-size  text-[#262626] font-medium">
                            Setting
                        </h1>
                        <hr/>
                        <div className="h-[35px]  rounded-[8px] w-full grid grid-cols-4">
                            <button
                                className=" text-[#A0A0A0] p-2 rounded-l-md"
                                style={{
                                    fontSize: "calc(0.5rem + 0.2vw)",
                                    backgroundColor: button == "general" ? "#94A2F2" : "#F5F5F5",
                                    color: button == "general" ? "white" : "#A0A0A0",
                                }}
                                onClick={() => {
                                    btnHandler("general");
                                }}
                            >
                                General
                            </button>
                            <button
                                className=" text-[#A0A0A0]"
                                style={{
                                    fontSize: "calc(0.5rem + 0.2vw)",
                                    backgroundColor: button == "contact" ? "#94A2F2" : "#F5F5F5",
                                    color: button == "contact" ? "white" : "#A0A0A0",
                                }}
                                onClick={() => {
                                    btnHandler("contact");
                                }}
                            >
                                Contact
                            </button>
                            <button
                                className=" text-[#A0A0A0] p-2"
                                style={{
                                    fontSize: "calc(0.5rem + 0.2vw)",
                                    backgroundColor: button == "email" ? "#94A2F2" : "#F5F5F5",
                                    color: button == "email" ? "white" : "#A0A0A0",
                                }}
                                onClick={() => {
                                    btnHandler("email");
                                }}
                            >
                                Emails
                            </button>
                            <button
                                className="p-2 text-[#A0A0A0] rounded-r-md"
                                style={{
                                    fontSize: "calc(0.5rem + 0.2vw)",
                                    backgroundColor: button == "advanced" ? "#94A2F2" : "#F5F5F5",
                                    color: button == "advanced" ? "white" : "#A0A0A0",
                                }}
                                onClick={() => {
                                    btnHandler("advanced");
                                }}
                            >
                                Advanced
                            </button>
                        </div>
                    </div>
                    {button === "general" && (
                        <div className="flex flex-col w-full gap-2 p-2">
                            <p className="subtitle-size">
                                Name your candor video
                            </p>
                            <div
                                className="flex items-center px-2 p-1 my-1 subtitle-size shadow-sm h-[30px] rounded-md">
                                Text reform
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Display logo
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    <p className="subtitle-size">
                                        Logo
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <DynamicDropdown
                                            text="[13px]"
                                            mainTitle={"Candour"}
                                            option1={"Candour"}
                                            option2={"noption"}
                                            width="[110px]"
                                        />
                                    </div>
                                    <img
                                        src={Logos.OrgEdit}
                                        alt="edit icon"
                                        className="w-[36px]"
                                    />
                                    <img
                                        src={Logos.OrgAdd}
                                        alt="add icon"
                                        className="w-[36px] cursor-pointer"
                                        onClick={Popup}
                                    />
                                    {isPopup && (
                                        <AddALogo
                                            handleClose={Popup}
                                            title={"Add a Logo"}
                                            btnTitle={"Save logo"}
                                        />
                                    )}
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Favicon
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <DynamicDropdown
                                            text="[13px]"
                                            mainTitle={"Candour"}
                                            option1={"Candour"}
                                            option2={"noption"}
                                            width="[110px]"
                                        />
                                    </div>
                                    <img
                                        src={Logos.OrgAdd}
                                        alt="add icon"
                                        className="w-[36px] cursor-pointer"
                                        onClick={Popup1}
                                    />
                                    {isPopup1 && (
                                        <AddALogo
                                            handleClose={Popup1}
                                            title={"Add a Favicon"}
                                            btnTitle={"Save favicon"}
                                            class={"hidden"}
                                        />
                                    )}
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center lg:flex-nowrap xxxs:flex-wrap gap-1">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Domain
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <DynamicDropdown
                                            mainTitle={"meet.example.com"}
                                            text="[12px]"
                                            option1={"meet.example.com"}
                                            option2={"meet.example.com"}
                                            width="[160px]"
                                        />
                                    </div>
                                    <img
                                        src={Logos.OrgAdd}
                                        alt="add icon"
                                        className="w-[36px] cursor-pointer"
                                        onClick={Popup2}
                                    />
                                    {isPopup2 && (
                                        <DomainPopup
                                            handleClose={Popup2}
                                            title={"Add a Domain"}
                                            btnTitle={"Save Domain"}
                                        />
                                    )}
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Language
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <DynamicDropdown
                                            mainTitle={"English"}
                                            text="[12px]"
                                            option1={"British"}
                                            option2={"English"}
                                            width="[90px]"
                                        />
                                    </div>
                                    <img
                                        src={Logos.OrgAdd}
                                        alt="add icon"
                                        className="w-[36px] cursor-pointer"
                                        onClick={Popup3}
                                    />
                                    {isPopup3 && (
                                        <CustomLanguage
                                            setShowSecondContent={props.setShowSecondContent}
                                            showSecondContent={props.showSecondContent}
                                            handleClose={Popup3}
                                            title={"Add a Favicon"}
                                        />
                                    )}
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center gap-2">
                                <h1 className="flex items-center gap-1 subtitle-size text-[#262626]">
                                    Color
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </h1>
                                <div className="flex gap-2">
                                    <div className="bg-[#94A2F2] h-[25px] w-[25px] rounded-md shadow-md"></div>
                                    <div className="bg-[#3A37A6] h-[25px] w-[25px] rounded-md shadow-md"></div>
                                    <div
                                        className="bg-[#FFFFFF] h-[25px] w-[25px] rounded-md shadow-md border-[1px]"></div>
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Font
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <DynamicDropdown
                                        mainTitle={"lexend"}
                                        text="[12px]"
                                        option1={"lexend"}
                                        option2={"N-option"}
                                        width="[140px]"
                                    />
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Show caption by default
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Make all interaction shareable
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Include replies
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <p className="subtitle-size">
                                        Time Zone
                                    </p>
                                    <ToolTip/>
                                </div>
                                <div className="flex gap-2">
                                    <DynamicDropdown
                                        mainTitle={"EST"}
                                        text="[13px]"
                                        option1={"EST"}
                                        option2={"N-option"}
                                        width="[80px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Schedule a close date
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <p className="subtitle-size">
                                Date
                            </p>
                            <div className="flex items-center lg:flex-nowrap xxxs:flex-wrap gap-2">
                                <button
                                    type="button"
                                    className="inline-flex gap-1 w-[90px] inner-size justify-between items-center  rounded-md px-2 py-2 bg-[#F5F5F5] text-black lg:text-[12px] xxxs:text-[11px] "
                                >
                                    06/28/2022
                                </button>
                                <DynamicDropdown
                                    mainTitle={"11:00 AM"}
                                    text="[13px]"
                                    option1={"11:00 AM"}
                                    option2={"N-option"}
                                    width="[120px]"
                                />
                                <DynamicDropdown
                                    mainTitle={"EST"}
                                    text="[13px]"
                                    option1={"EST"}
                                    option2={"N-option"}
                                    width="[80px]"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Custom message
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                            </div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="We're sorry but candor video is no longer available."
                                className="bg-[#F5F5F5] placeholder-input-modal resize-none xxxxl:text-[20px] outline-none h-[100px] border-none rounded-md p-3 text-[#A0A0A0] lg:text-[11px] xxxs:text-[10px]
                "
                            ></textarea>
                            <button
                                className="bg-[#AEBFF2] my-1 outline-none text-white flex justify-center items-center gap-3 p-3 rounded-md lg:h-[35px] xxxs:h-[30px] lg:text-[16px] xxxs:text-[14px]">
                                Done
                            </button>
                        </div>
                    )}
                    {button === "contact" && (
                        <div className="flex flex-col gap-1 p-2">
                            <div className="flex justify-between py-1 items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Request contact information at start
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <p className="subtitle-size">
                                Attempting collection after steps...
                            </p>
                            <div className="flex items-center gap-1 border-b-[1px] ">
                                <img
                                    src={Logos.PathImg1}
                                    alt=""
                                    className="lg:w-[40px] xxxs:w-[30px]"
                                />
                                <img
                                    src={Logos.SettingText}
                                    alt=""
                                    className="lg:w-[60px] xxxs:w-[50px]"
                                />
                                <img
                                    src={Logos.SettingAudio}
                                    alt=""
                                    className="lg:w-[60px] xxxs:w-[50px]"
                                />
                                <img
                                    src={Logos.SettingGirl}
                                    alt=""
                                    className="lg:w-[40px] xxxs:w-[30px]"
                                />
                                <img
                                    src={Logos.ThreeDots1}
                                    alt=""
                                    className="w-[14px] lg:mx-3 xxxs:mx-1"
                                />
                                <div className="relative">
                                    <img
                                        src={Logos.Arrowdown}
                                        alt="Dropdown Arrow"
                                        className="cursor-pointer w-[15px]"
                                        onClick={() => {
                                            setShowDropdown(!showDropdown);
                                        }}
                                    />
                                    <div
                                        className={
                                            !showDropdown
                                                ? "hidden"
                                                : "flex flex-col absolute right-0 z-10 top-4"
                                        }
                                    >
                                        <div
                                            className="bg-[#FFFFFF] lg:w-[250px] xxxs:w-[210px] shadow-sm p-3 rounded-md cursor-auto">
                                            <div className="flex flex-col lg:ext-[12px] xxxs:text-[11px]">
                                                <div className="flex justify-between items-center gap-2">
                                                    <div
                                                        className="flex gap-4 xxxxl:text-[18px] items-center cursor-pointer">
                                                        <img
                                                            src={Logos.PathImg1}
                                                            alt=""
                                                            className="w-[40px]"
                                                        />
                                                        Introduction
                                                    </div>
                                                    <div>
                                                        <CheckboxComp id="introduction"/>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center gap-2">
                                                    <div
                                                        className="flex gap-2 items-center xxxxl:text-[18px] cursor-pointer">
                                                        <img
                                                            src={Logos.SettingText}
                                                            alt=""
                                                            className="w-[50px]"
                                                        />
                                                        Policies
                                                    </div>
                                                    <div>
                                                        <CheckboxComp id="policies"/>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center gap-2">
                                                    <div
                                                        className="flex gap-2 items-center xxxxl:text-[18px] cursor-pointer">
                                                        <img
                                                            src={Logos.SettingAudio}
                                                            alt=""
                                                            className="w-[50px]"
                                                        />
                                                        Donate
                                                    </div>
                                                    <div>
                                                        <CheckboxComp id="donate"/>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center gap-2">
                                                    <div
                                                        className="flex gap-4 items-center xxxxl:text-[18px] cursor-pointer">
                                                        <img
                                                            src={Logos.SettingGirl}
                                                            alt=""
                                                            className="w-[40px]"
                                                        />
                                                        Thanks
                                                    </div>
                                                    <div>
                                                        <CheckboxComp id="thanks"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex py-1 gap-1 items-center">
                                <p className="subtitle-size">
                                    Information collection
                                </p>
                                <div className="">
                                    <ToolTip/>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <p className="subtitle-size">First name</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <p className="flex text-[20px] pl-1">*</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <p className="subtitle-size ">Last name</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <p className="flex text-[20px] pl-1">*</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mr-3">
                                <div className="flex items-center">
                                    <p className="subtitle-size">Organization</p>
                                </div>
                                <div className="flex items-center ">
                                    <ToggleButton
                                        isActive={false}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <p className="subtitle-size">Email</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={false}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <p className="flex text-[20px] pl-1">*</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <p className="subtitle-size">Phone</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <p className="flex text-[20px] pl-1 text-[#A0A0A0]">*</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <p className="subtitle-size">Address</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <p className="flex text-[20px] pl-1 text-[#A0A0A0]">*</p>
                                </div>
                            </div>
                            <p className="subtitle-size ">Address format</p>
                            <div>
                                <DynamicDropdown
                                    text="[12px]"
                                    mainTitle={"United state"}
                                    option1={"United state"}
                                    option2={"United Kindom"}
                                    width="[100%]"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <p className="subtitle-size">
                                        Street address
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <p className="flex text-[20px] pl-1 text-[#A0A0A0]">*</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <p className="subtitle-size">City</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <p className="flex text-[20px] pl-1">*</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <p className="subtitle-size ">State</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <p className="flex text-[20px] pl-1">*</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <p className="subtitle-size">Zip code</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <p className="flex text-[20px] pl-1">*</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <p className="subtitle-size">Employment</p>
                                    <ToolTip/>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <p className="flex text-[20px] pl-1">*</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <p className="subtitle-size">
                                        Contact from consent
                                    </p>
                                    <ToolTip/>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <p className="flex text-[20px] pl-1 text-[#A0A0A0]">*</p>
                                </div>
                            </div>
                            {/* <div className="min-h-[100px] p-3 rounded shadow-md">
                <p className="lg:text-[11px] xxxs:text[10px] text-[#A0A0A0]">
                .
                </p>
              </div> */}
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Please subscribe me to your mailing list and send periodic updates and offers"
                                className="bg-[#F5F5F5] placeholder-input-modal resize-none xxxxl:text-[20px] outline-none h-[100px] border-none rounded-md p-3 text-[#A0A0A0] lg:text-[11px] xxxs:text-[10px]
                "
                            ></textarea>
                            <button
                                className="bg-[#AEBFF2] my-1 text-white xxxxl:text-[20px] flex justify-center items-center gap-3 p-3 rounded-md lg:h-[35px] xxxs:h-[30px] lg:text-[16px] xxxs:text-[14px]">
                                Done
                            </button>
                        </div>
                    )}
                    {button === "email" && (
                        <div className="flex flex-col gap-2 p-2">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Completion email
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex xxxs:gap-1 lg:gap-2">
                                    <img
                                        src={Logos.EyeBtn}
                                        alt=""
                                        className="w-[24px] cursor-pointer xxxxl:w-[35px]"
                                        onClick={() => {
                                            emailHandler();
                                        }}
                                    />
                                    <img
                                        src={Logos.ArrowBtn}
                                        alt=""
                                        className="w-[24px] cursor-pointer  xxxxl:w-[35px]"
                                        onClick={togglePopup1}
                                    />
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            {popupData.map((item) => {
                                return (
                                    isOpen1 && (
                                        <SettingPopupSendEmail
                                            title={item.heading}
                                            btnname={item.btn}
                                            handleClose1={togglePopup1}
                                        />
                                    )
                                );
                            })}
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Custom heading text
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <img
                                    src={Logos.CurlyBraces}
                                    alt="edit icon"
                                    className="w-[24px] cursor-pointer  xxxxl:w-[35px]"
                                    onClick={togglePopup}
                                />
                            </div>
                            {popupData2.map((item) => {
                                return (
                                    isOpen && (
                                        <SettingPopupPipe
                                            title={item.heading}
                                            btnname={item.btn}
                                            handleClose={togglePopup}
                                        />
                                    )
                                );
                            })}
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Thanks for responding !"
                                className="bg-[#F5F5F5] placeholder-input-modal resize-none h-[100px] xxxxl:text-[20px] border-none outline-none rounded-md p-3 text-[#A0A0A0] lg:text-[11px] xxxs:text-[10px]
                "
                            ></textarea>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Custom Body text
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <img
                                    src={Logos.CurlyBraces}
                                    alt="edit icon"
                                    className="w-[24px]  xxxxl:w-[35px]"
                                />
                            </div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="We appreciate your response to our “gun control interview” candor video."
                                className="bg-[#F5F5F5] placeholder-input-modal resize-none h-[100px]  xxxxl:text-[20px] outline-none border-none rounded-md p-3 text-[#A0A0A0] lg:text-[11px] xxxs:text-[10px]
                "
                            ></textarea>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Display logo
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px] ">
                                        Logo
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <DynamicDropdown
                                            text="[13px]"
                                            mainTitle={"Candour"}
                                            option1={"Candour"}
                                            option2={"noption"}
                                            width="[110px]"
                                        />
                                    </div>
                                    <img
                                        src={Logos.OrgEdit}
                                        alt="edit icon"
                                        className="w-[36px]"
                                    />
                                    <img src={Logos.OrgAdd} alt="add icon" className="w-[36px]"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1 ">
                                    <p className="subtitle-size">
                                        Reply email
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex xxxs:gap-1 lg:gap-2">
                                    <img
                                        src={Logos.EyeBtn}
                                        alt=""
                                        className="w-[24px]  xxxxl:w-[35px]"
                                    />
                                    <img
                                        src={Logos.ArrowBtn}
                                        alt=""
                                        className="w-[24px]  xxxxl:w-[35px]"
                                    />
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Custom heading text
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <img
                                    src={Logos.CurlyBraces}
                                    alt="edit icon"
                                    className="w-[24px]  xxxxl:w-[35px]"
                                />
                            </div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Thanks for responding !"
                                className="bg-[#F5F5F5] placeholder-input-modal resize-none h-[100px] xxxxl:text-[20px] border-none outline-none rounded-md p-3 text-[#A0A0A0] lg:text-[11px] xxxs:text-[10px]
                "
                            ></textarea>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Custom Body text
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <img
                                    src={Logos.CurlyBraces}
                                    alt="edit icon"
                                    className="w-[24px]  xxxxl:w-[35px]"
                                />
                            </div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="We appreciate your response to our “gun control interview” candor video."
                                className="bg-[#F5F5F5] placeholder-input-modal resize-none h-[100px] xxxxl:text-[20px] border-none outline-none rounded-md p-3 text-[#A0A0A0] lg:text-[11px] xxxs:text-[10px]
                "
                            ></textarea>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1 ">
                                    <p className="subtitle-size">
                                        Custom Button text
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <img
                                    src={Logos.CurlyBraces}
                                    alt="edit icon"
                                    className="w-[24px]  xxxxl:w-[35px]"
                                />
                            </div>
                            <InputComp
                                type="text"
                                size="medium"
                                placeholder="View conversation"
                                className=" input-eye bg-[#F5F5F5] placeholder-input-modal border-none  xxxxl:text-[20px] h-[35px] p-3 lg:text-[12px] xxxs:text-[11px] text-[#A0A0A0] font-medium"
                                value={searchTextValue}
                                onChange={(e) => {
                                    setSearchTextValue(e.target.value);
                                }}
                            />
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Display logo
                                    </p>
                                    <div className="">
                                        <div className="pt-1">
                                            <ToolTip/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px]">
                                        Logo
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <DynamicDropdown
                                            text="[13px]"
                                            mainTitle={"Candour"}
                                            option1={"Candour"}
                                            option2={"noption"}
                                            width="[110px]"
                                        />
                                    </div>
                                    <img
                                        src={Logos.OrgEdit}
                                        alt="edit icon"
                                        className="w-[36px]"
                                    />
                                    <img src={Logos.OrgAdd} alt="add icon" className="w-[36px]"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Donation receipt email
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex xxxs:gap-1 lg:gap-2">
                                    <img
                                        src={Logos.EyeBtn}
                                        alt=""
                                        className="w-[24px]  xxxxl:w-[35px]"
                                    />
                                    <img
                                        src={Logos.ArrowBtn}
                                        alt=""
                                        className="w-[24px]  xxxxl:w-[35px]"
                                    />
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Override completeion email
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">

                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Custom heading text
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <img
                                    src={Logos.CurlyBraces}
                                    alt="edit icon"
                                    className="w-[24px]  xxxxl:w-[35px]"
                                />
                            </div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Thanks for responding !"
                                className="bg-[#F5F5F5] placeholder-input-modal resize-none h-[100px] xxxxl:text-[20px] border-none outline-none rounded-md p-3 text-[#A0A0A0] lg:text-[11px] xxxs:text-[10px]
                "
                            ></textarea>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Custom Body text
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <img
                                    src={Logos.CurlyBraces}
                                    alt="edit icon"
                                    className="w-[24px]  xxxxl:w-[35px]"
                                />
                            </div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="We appreciate your response to our “gun control interview” candor video."
                                className="bg-[#F5F5F5] placeholder-input-modal resize-none h-[100px] border-none xxxxl:text-[20px] outline-none rounded-md p-3 text-[#A0A0A0] lg:text-[11px] xxxs:text-[10px]
                "
                            ></textarea>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Display logo
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    <p className="subtitle-size">
                                        Logo
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <DynamicDropdown
                                            text="[13px]"
                                            mainTitle={"Candour"}
                                            option1={"Candour"}
                                            option2={"noption"}
                                            width="[110px]"
                                        />
                                    </div>
                                    <img
                                        src={Logos.OrgEdit}
                                        alt="edit icon"
                                        className="w-[36px]"
                                    />
                                    <img src={Logos.OrgAdd} alt="add icon" className="w-[36px]"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Payment receipt email
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex xxxs:gap-1 lg:gap-2">
                                    <img
                                        src={Logos.EyeBtn}
                                        alt=""
                                        className="w-[24px]  xxxxl:w-[35px]"
                                    />
                                    <img
                                        src={Logos.ArrowBtn}
                                        alt=""
                                        className="w-[24px]  xxxxl:w-[35px]"
                                    />
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Override completeion email
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Custom heading text
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <img
                                    src={Logos.CurlyBraces}
                                    alt="edit icon"
                                    className="w-[24px]  xxxxl:w-[35px]"
                                />
                            </div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Thanks for responding !"
                                className="bg-[#F5F5F5] placeholder-input-modal resize-none h-[100px] border-none xxxxl:text-[20px] outline-none rounded-md p-3 text-[#A0A0A0] lg:text-[11px] xxxs:text-[10px]
                "
                            ></textarea>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Custom Body text
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <img
                                    src={Logos.CurlyBraces}
                                    alt="edit icon"
                                    className="w-[24px]  xxxxl:w-[35px]"
                                />
                            </div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="We appreciate your response to our “gun control interview” candor video."
                                className="bg-[#F5F5F5] placeholder-input-modal resize-none h-[100px] border-none xxxxl:text-[20px] outline-none rounded-md p-3 text-[#A0A0A0] lg:text-[11px] xxxs:text-[10px]
                "
                            ></textarea>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="subtitle-size">
                                        Display logo
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    <p className="subtitle-size">
                                        Logo
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <DynamicDropdown
                                            text="[13px]"
                                            mainTitle={"Candour"}
                                            option1={"Candour"}
                                            option2={"noption"}
                                            width="[110px]"
                                        />
                                    </div>
                                    <img
                                        src={Logos.OrgEdit}
                                        alt="edit icon"
                                        className="w-[36px]"
                                    />
                                    <img src={Logos.OrgAdd} alt="add icon" className="w-[36px]"/>
                                </div>
                            </div>
                            <hr/>
                            <button
                                className="bg-[#AEBFF2] my-1 xxxxl:text-[20px] text-white flex justify-center items-center gap-3 p-3 rounded-md lg:h-[35px] xxxs:h-[30px] lg:text-[16px] xxxs:text-[14px]">
                                Done
                            </button>
                        </div>
                    )}
                    {button === "advanced" && (
                        <div className="flex flex-col gap-3 p-2">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px]">
                                        Show video controls
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px]">
                                        Auto-play first video
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px]">
                                        Emphasize video option
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px]">
                                        Display title
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px]">
                                        Button border radius
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="8"
                                        className="bg-[#F5F5F5] text-[#A0A0A0] text-center outline-none px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px] text-[13px]"
                                        name=""
                                        id=""
                                    />
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px]">
                                        Respondent notifications
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px]">
                                    Transcript language
                                </p>
                                <div className="">
                                    <ToolTip/>
                                </div>
                            </div>
                            <DynamicDropdown
                                text="[12px]"
                                mainTitle={"English (United state)"}
                                option1={"English(United state)"}
                                option2={"English(United kindom)"}
                                width="[100%]"
                            />
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px]">
                                        Profanity filter
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center gap-2">
                                <h1 className="flex items-center gap-1 subtitle-size text-[#262626]">
                                    Overlay text colors
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </h1>
                                <div className="flex gap-2">
                                    <div className="bg-[#94A2F2] h-[25px] w-[25px] rounded-md shadow-md"></div>
                                    <div
                                        className="bg-[#FFFFFF] h-[25px] w-[25px] rounded-md shadow-md border-[1px]"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px]">
                                        Show overlay close text-button
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div
                                    className="w-[38px] h-[22px] rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                    style={{
                                        backgroundColor: checked ? "#E7EEF9" : "#F5F5F5",
                                    }}
                                    onClick={() => {
                                        setChecked(!checked);
                                        toggleHandler(!toggle);
                                    }}
                                >
                                    <div
                                        className="w-[14px] h-[14px] bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                        style={{
                                            backgroundColor: checked ? "#3A37A6" : "#A0A0A0",
                                            marginLeft: checked ? "16px" : "0px",
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <p className="lg:text-[13px] xxxs:text-[12px] xxxxl:text-[20px]">
                                        Allow upload only
                                    </p>
                                    <div className="pt-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div
                                className="min-h-[95px] text-[10px] p-3 xxxxl:text-[18px] bg-[#E7EEF9] rounded shadow-md">
                                <p className="">
                                    The following selected thumbnail image will display on social
                                    media and in emails when sharing.
                                </p>
                                <p className="text-[#A0A0A0]">
                                    The number of options will depend on the length of your first
                                    video
                                </p>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <div
                                    className="flex items-center justify-center rounded-[4px] lg:w-[130px] xxxs:w-[100px] lg:h-[130px] xxxs:h-[100px] border-[#AEBFF2] border-[1px]">
                                    <div
                                        className="flex flex-col gap-1 items-center justify-center p-2 rounded-[4px] w-[100px] h-[100px] border-[#AEBFF2] border-dashed border-[1px]">
                                        <img
                                            src={Logos.CloudPlusPurple}
                                            alt=""
                                            className="w-[30px] xxxxl:w-[40px]"
                                        />
                                        <p className="flex text-center text-[#94A2F2] xxxxl:text-[16px] text-[11px]">
                                            Upload Thumbnail
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-[4px] lg:w-[130px] xxxs:w-[100px] lg:h-[130px] xxxs:h-[100px] relative">
                                    <img src={Logos.SettingImg} alt=""/>
                                    <img
                                        src={Logos.SettingMoreIcon}
                                        alt=""
                                        className="absolute w-[16px]  xxxxl:w-[25px] right-2 top-2 cursor-pointer"
                                        onClick={() => {
                                            dropDown1();
                                        }}
                                    />
                                    <div
                                        className={
                                            !showDropdown1
                                                ? "hidden"
                                                : "flex flex-col absolute z-10 right-2 top-2 mt-4"
                                        }
                                    >
                                        <div
                                            className="bg-[#FFFFFF] lg:w-[110px] xxxxl:w-[150px] xxxs:w-[90px] shadow-md border-t-[1px] lg:p-3 xxxs:p-2 rounded-[4px] cursor-auto">
                                            <div
                                                className="flex flex-col lg:gap-[7px] xxxs:gap-[6px] lg:text-[12px] xxxs:text-[11px]">
                                                <div
                                                    className="flex gap-3 xxxxl:text-[20px] items-center cursor-pointer">
                                                    <img
                                                        src={Logos.Replace}
                                                        alt=""
                                                        className="w-[15px] xxxxl:w-[25px]"
                                                    />
                                                    Replace
                                                </div>
                                                <hr/>
                                                <div
                                                    className="flex gap-3 items-center xxxxl:text-[20px] cursor-pointer">
                                                    <img
                                                        src={Logos.TrashIcon}
                                                        alt=""
                                                        className="w-[16px] xxxxl:w-[25px]"
                                                    />
                                                    Delete
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-[4px] lg:w-[130px] xxxs:w-[100px] lg:h-[130px] xxxs:h-[100px] relative">
                                    <img src={Logos.SettingImg1} alt=""/>
                                    <img
                                        src={Logos.SettingMoreIcon}
                                        alt=""
                                        className="absolute w-[16px] right-2 top-2 cursor-pointer"
                                        onClick={() => {
                                            dropDown2();
                                        }}
                                    />
                                    <div
                                        className={
                                            !showDropdown2
                                                ? "hidden"
                                                : "flex flex-col absolute z-10 right-2 top-2 mt-4"
                                        }
                                    >
                                        <div
                                            className="bg-[#FFFFFF] lg:w-[110px]  xxxxl:w-[150px] xxxs:w-[90px] shadow-md border-t-[1px] lg:p-3 xxxs:p-2 rounded-[4px] cursor-auto">
                                            <div
                                                className="flex flex-col lg:gap-[7px] xxxs:gap-[6px] lg:text-[12px] xxxs:text-[11px]">
                                                <div
                                                    className="flex gap-3 items-center  xxxxl:text-[20px] cursor-pointer">
                                                    <img
                                                        src={Logos.Replace}
                                                        alt=""
                                                        className="w-[15px] xxxxl:w-[25px]"
                                                    />
                                                    Replace
                                                </div>
                                                <hr/>
                                                <div
                                                    className="flex gap-3 items-center xxxxl:text-[20px] cursor-pointer">
                                                    <img
                                                        src={Logos.TrashIcon}
                                                        alt=""
                                                        className="w-[16px] xxxxl:w-[25px]"
                                                    />
                                                    Delete
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-[4px] lg:w-[130px] xxxs:w-[100px] lg:h-[130px] xxxs:h-[100px] relative">
                                    <img src={Logos.SettingImg2} alt=""/>
                                    <img
                                        src={Logos.SettingMoreIcon2}
                                        alt=""
                                        className="absolute w-[16px] right-2 top-2 cursor-pointer"
                                        onClick={() => {
                                            dropDown3();
                                        }}
                                    />
                                    <div
                                        className={
                                            !showDropdown3
                                                ? "hidden"
                                                : "flex flex-col absolute z-10 right-2 top-2 mt-4"
                                        }
                                    >
                                        <div
                                            className="bg-[#FFFFFF] lg:w-[110px]  xxxxl:w-[130px] xxxs:w-[90px] shadow-md border-t-[1px] lg:p-3 xxxs:p-2 rounded-[4px] cursor-auto">
                                            <div
                                                className="flex flex-col lg:gap-[7px] xxxs:gap-[6px] lg:text-[12px] xxxs:text-[11px]">
                                                <div
                                                    className="flex gap-3 items-center  xxxxl:text-[20px] cursor-pointer">
                                                    <img
                                                        src={Logos.Replace}
                                                        alt=""
                                                        className="w-[15px] xxxxl:w-[25px]"
                                                    />
                                                    Replace
                                                </div>
                                                <hr/>
                                                <div
                                                    className="flex gap-3 items-center  xxxxl:text-[20px] cursor-pointer">
                                                    <img
                                                        src={Logos.TrashIcon}
                                                        alt=""
                                                        className="w-[16px] xxxxl:w-[25px]"
                                                    />
                                                    Delete
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-[4px] lg:w-[130px] xxxs:w-[100px] lg:h-[130px] xxxs:h-[100px] relative">
                                    <img src={Logos.SettingImg3} alt=""/>
                                    <img
                                        src={Logos.SettingMoreIcon3}
                                        alt=""
                                        className="absolute w-[16px] right-2 top-2 cursor-pointer"
                                        onClick={() => {
                                            dropDown4();
                                        }}
                                    />
                                    <div
                                        className={
                                            !showDropdown4
                                                ? "hidden"
                                                : "flex flex-col absolute z-10 right-2 top-2 mt-4"
                                        }
                                    >
                                        <div
                                            className="bg-[#FFFFFF] lg:w-[110px]  xxxxl:w-[130px] xxxs:w-[90px] shadow-md border-t-[1px] lg:p-3 xxxs:p-2 rounded-[4px] cursor-auto">
                                            <div
                                                className="flex flex-col lg:gap-[7px] xxxs:gap-[6px] lg:text-[12px] xxxs:text-[11px]">
                                                <div
                                                    className="flex gap-3 items-center  xxxxl:text-[20px] cursor-pointer">
                                                    <img
                                                        src={Logos.Replace}
                                                        alt=""
                                                        className="w-[15px] xxxxl:w-[25px]"
                                                    />
                                                    Replace
                                                </div>
                                                <hr/>
                                                <div
                                                    className="flex gap-3 items-center  xxxxl:text-[20px] cursor-pointer">
                                                    <img
                                                        src={Logos.TrashIcon}
                                                        alt=""
                                                        className="w-[16px] xxxxl:w-[25px]"
                                                    />
                                                    Delete
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="bg-[#AEBFF2] my-1 xxxxl:text-[20px] text-white flex justify-center items-center gap-3 p-3 rounded-md lg:h-[35px] xxxs:h-[30px] lg:text-[16px] xxxs:text-[14px]">
                                Done
                            </button>
                        </div>
                    )}
                </div>
                {button1 === "desk" && (
                    <div className="w-full border-[1px]  px-4  shadow-md rounded-r-md">
                        <div class="border-b-[1px] border-[#EBEBEB] border-solid pt-1 pb-1 lg:px-5 xxxs:px-2">
                            <h1 class="inner-size  font-medium  text-[#262626] ">
                                Replying to...
                            </h1>
                            <h1 class=" text-[13px] flex items-center gap-1  text-[#262626] ">
                                <p className="font-medium title-size">Ryan Jones</p>

                                <span class="text-[9px] subtitle-size">
                  (Ryanjones@example.com)
                </span>
                            </h1>
                        </div>
                        <div className=" w-[100%] border-[1px]  shadow-md rounded-md  flex-auto px-4">
                            <div className="flex w-[100%] lg:flex-nowrap xxxs:flex-wrap justify-between gap-1">
                                <div className="flex w-[50%] flex-auto">
                                    <img
                                        src={Logos.GirlImg}
                                        alt="Girl Img"
                                        className=" px-5"
                                        style={{height: "calc(100vh - 180px)"}}
                                    />
                                </div>
                                <div className="flex justify-center w-[50%] flex-auto  py-1">
                                    <div
                                        className="   flex flex-col w-full justify-center gap-4 border-[1px] px-4  border-[#EBEBEB] border-solid rounded-md shadow-md">
                                        <>
                                            {" "}
                                            <p className=" text-[18px] font-[400]   leading-[28px] text-[#262626] text-center">
                                                How would you like to respond?
                                            </p>
                                            <div className="flex justify-center flex-wrap">
                                                <Link to="/reply-video-preview">
                                                    <Button
                                                        title="video"
                                                        img={Logos.Video}
                                                        class="max-xs:w-[40px] w-[60px]"
                                                        iconWidth="max-xs:w-[20px] w-[40px]"
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
                                            <p className=" text-[14px] font-[400] leading-[22px] text-[#A0A0A0] text-center">
                                                You can practice and review before sending
                                            </p>
                                        </>
                                        {" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {button1 === "mbl" && (
                    <div className="w-full border-[1px] shadow-md rounded-md">
                        <div className="flex justify-center items-center relative">
                            <img
                                src={Logos.MblGirl}
                                alt="Mbl Girl"
                                className="w-[283px]  xxxxl:w-[500px] xxxxl:pt-16 p-8"
                            />
                            {toggle === true && (
                                <img
                                    src={Logos.SettingOverlayGirlImg}
                                    alt="Black Video Girl"
                                    className="absolute w-[170px] top-12"
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GeneralSetting;
