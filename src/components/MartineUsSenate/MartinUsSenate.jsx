import React, {useState} from "react";
import {Logos} from "../../assets";
import ToggleButton from "../ToggleButton/ToggleButton";
import InputComp from "../../components/InputComp/InputComp";
import Branding from "../../components/Branding/orgBranding";
import AuthApp from "../AuthApp/AuthApp";
import ManageTeam from "../ManageTeam/ManageTeam";
import PlanAndBiling from "../PlanAndBilling/PlanAndBilling";
import ToolTip from "../ToolTip/ToolTip";
import DynamicDropdown from "../DynamicDropdown/DynamicDropdown";
import {useNavigate} from "react-router";
import {useGlobalInfo} from "../../contexts/GlobalContext";

function MartinUsSenate() {
    const {navigateTabs, setNavigateTabs} = useGlobalInfo();
    const [button, setButton] = useState(false);
    const [isClicked1, setIsClicked1] = useState("general");
    const [activeTab, setActiveTab] = useState("Tabcontent1");
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [button4, setButton4] = useState(false);
    const {showSecondContent, setShowSecondContent} = useGlobalInfo();
    const [searchPass, setSearchPass] = useState("");
    const [isBoxToggle, setIsBoxToggle] = useState("Note");
    const [isBoxToggle1, setIsBoxToggle1] = useState("Note");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/conversation");
    }

    function boxToggle(param) {
        setIsBoxToggle(param);
    }

    function boxToggle1(param) {
        setIsBoxToggle1(param);
    }

    function handleButtonClick() {
        setIsOpen(!isOpen);
    }

    function handleOptionClick(optionValue) {
        setSelectedValue(optionValue);
        setIsOpen(false);
    }

    const TabClick = (a) => {
        setIsClicked1(a);
    };

    const options = ["Specific Email", "Sender"];
    //
    const toggleTab = (content) => {
        setActiveTab(content);
    };

    function btnHandler(a) {
        setButton(a);
        setButton1(false);
        setButton2(false);
        setButton3(false);
        setButton4(false);
    }

    function btnHandler1(a) {
        setButton1(a);
        setButton(false);
        setButton2(false);
        setButton3(false);
        setButton4(false);
    }

    function btnHandler2(a) {
        setButton2(a);
        setButton1(false);
        setButton(false);
        setButton3(false);
        setButton4(false);
    }

    function btnHandler3(a) {
        setButton3(a);
        setButton1(false);
        setButton2(false);
        setButton(false);
        setButton4(false);
    }

    function btnHandler4(a) {
        setButton4(a);
        setButton1(false);
        setButton2(false);
        setButton3(false);
        setButton(false);
    }

    return (
        <div>
            <div className="flex pb-3">
                <img
                    src={Logos.BreadcrumbBack}
                    alt="icon"
                    className="cursor-pointer ml-2 w-[8px]"
                    onClick={() => {
                        VideoHandler();
                    }}
                />
                <p className=" ml-4 title-size">{navigateTabs}</p>
            </div>
            <div
                className="flex xxxs:flex-wrap lg:flex-nowrap min-h-[70vh] rounded-lg w-full border-[1px] shadow-sm border-[#EBEBEB] ">
                <div className=" w-[1300px] lg:min-h-[540px] lg:border-r-2 xxxs-border-none border-[#EBEBEB] pt-1 ">
                    <div>
                        <p className="py-3 px-4 title-size">Martine For U.S Senate</p>
                        <hr/>
                    </div>
                    <div className="px-2 py-3">
                        <div
                            className={`flex justify-between px-3 mb-3 border-[1px] gap-2 items-center h-[50px] rounded-md cursor-pointer ${
                                navigateTabs === "Plan & Billing"
                                    ? "bg-[#94A2F2] , text-white"
                                    : "bg-white , text-black"
                            }`}
                            onClick={() => {
                                setNavigateTabs("Plan & Billing");
                            }}
                        >
                            <p className="subtitle-size">Plan & Billing</p>
                        </div>
                        <div
                            className={`flex justify-between px-3 mb-3 border-[1px] gap-2 items-center h-[50px] rounded-md cursor-pointer ${
                                navigateTabs === "Branding"
                                    ? "bg-[#94A2F2] , text-white"
                                    : "bg-white , text-black"
                            }`}
                            onClick={() => {
                                setNavigateTabs("Branding");
                            }}
                        >
                            <p className="subtitle-size">Branding</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[3900px] xxxs:w-full h-[82vh] overflow-y-auto">
                    {navigateTabs === "Organization Settings" && (
                        <div className="px-3 py-4">
                            <div className="border-[1px] rounded-md ">
                                <div
                                    className={`flex cursor-pointer justify-between px-3  h-[55px]  ${
                                        button === true ? "text-[#3A37A6]" : "text-black"
                                    }`}
                                    onClick={() => {
                                        btnHandler(!button);
                                    }}
                                >
                                    <p className="subtitle-size xxxs:mt-1 py-3">
                                        Organization Setting
                                    </p>
                                    <img
                                        src={Logos.Arrowdown}
                                        alt="Dropdown Arrow"
                                        style={{
                                            transform: button ? "rotate(180deg)" : "rotate(0deg)",
                                        }}
                                        className=" w-[20px]"
                                    />
                                </div>
                                {button === true && (
                                    <div className=" border-t-[1px] ">
                                        <div className="flex flex-wrap px-3 py-2">
                                            <div className="lg:w-[50%]  xxxs:w-full px-2">
                                                <div
                                                    className="flex justify-between lg:flex-nowrap xxxs:flex-wrap md:flex-nowrap">
                                                    <p className="lg:py-3 inner-size">
                                                        Organization settings
                                                    </p>
                                                    <input
                                                        placeholder="Martin For U.S Senate"
                                                        type="text"
                                                        className="lg:w-[170px] placeholder-input-modal mt-1 lg:ml-2  xxxs:w-full  px-2 rounded-md h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                    />
                                                </div>
                                                <div
                                                    className="flex  justify-between  xxxs:py-2 lg:py-0   lg:flex-nowrap xxxs:flex-wrap">
                                                    <div className="flex items-center lg:py-3 xxxs:py-1 ">
                                                        <p className="inner-size ">Default Time Zone</p>
                                                        <div class="p-1">
                                                            <ToolTip/>
                                                        </div>
                                                    </div>
                                                    <DynamicDropdown
                                                        mainTitle={"EST"}
                                                        text="[13px]"
                                                        option1={"EST"}
                                                        option2={"N-option"}
                                                        width="[80px]"
                                                    />
                                                </div>
                                            </div>
                                            <div className="lg:w-[50%] xxxs:w-full px-2 py-2">
                                                <div
                                                    className="flex justify-between lg:flex-nowrap xxxs:flex-wrap md:flex-nowrap">
                                                    <div className="flex items-center xxxs:py-1  ">
                                                        <p className="inner-size ">Reply-To-Email</p>
                                                        <div className="p-1">
                                                            <ToolTip/>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <div>
                                                            <button
                                                                type="button"
                                                                className="inline-flex lg:w-[130px] lg:mt-0 mb-1 justify-between w-full rounded-md  px-4 py-2 bg-[#F5F5F5] text-black text-[11px] "
                                                                onClick={handleButtonClick}
                                                                aria-haspopup="true"
                                                                aria-expanded={isOpen}
                                                            >
                                                                {selectedValue
                                                                    ? selectedValue
                                                                    : "Specific Email"}
                                                                <img
                                                                    src={Logos.Arrowdown}
                                                                    alt="Dropdown Arrow"
                                                                    onClick={() => {
                                                                        handleButtonClick(!isOpen);
                                                                    }}
                                                                    style={{
                                                                        transform: isOpen
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                    }}
                                                                    className="cursor-pointer w-[17px]"
                                                                />
                                                            </button>
                                                        </div>
                                                        {isOpen && (
                                                            <div
                                                                className="origin-top-right absolute right-0  w-[130px] shadow-md rounded bg-white">
                                                                <div
                                                                    className="py-1"
                                                                    role="menu"
                                                                    aria-orientation="vertical"
                                                                    aria-labelledby="options-menu"
                                                                >
                                                                    {options.map((option, line) => (
                                                                        <button
                                                                            key={option}
                                                                            className={` px-4 py-2 w-full flex text-[11px] text-gray   ${
                                                                                line !== options.length - 1
                                                                                    ? "border-b"
                                                                                    : ""
                                                                            }`}
                                                                            onClick={() => handleOptionClick(option)}
                                                                            role="menuitem"
                                                                        >
                                                                            {option}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex  justify-between lg:flex-nowrap xxxs:flex-wrap md:flex-nowrap">
                                                    <p className="lg:py-3 xxxs:py-1 inner-size mr-1">
                                                        Reply To Address
                                                    </p>
                                                    <input
                                                        placeholder="Enter an email Address"
                                                        type="text"
                                                        className="lg:w-[172px] mt-1 xxxs:w-full placeholder-input-modal p-2 rounded-md h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center gap-3 px-2 py-4">
                                            <button
                                                className="text-[#94A2F2] lg:text-[16px] xxxs:text-[11px] border-[#94A2F2] shadow-md border-[1px] rounded text-center lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                Cancel
                                            </button>
                                            <button
                                                className="lg:text-[16px] xxxs:text-[11px] text-white bg-[#94A2F2] shadow-md text-center rounded lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={` border-[1px] my-4 rounded-md `}>
                                <div
                                    className={`flex cursor-pointer justify-between px-3  h-[55px]  ${
                                        button1 === true ? "text-[#3A37A6]" : "text-black"
                                    }`}
                                    onClick={() => {
                                        btnHandler1(!button1);
                                    }}
                                >
                                    <p className="subtitle-size py-3">
                                        Candor Video Default Setting
                                    </p>
                                    <img
                                        src={Logos.Arrowdown}
                                        alt="Dropdown Arrow"
                                        style={{
                                            transform: button1 ? "rotate(180deg)" : "rotate(0deg)",
                                        }}
                                        className="w-[20px]"
                                    />
                                </div>
                                {button1 === true && (
                                    <div className=" border-t-[1px] ">
                                        <div className="flex py-4">
                                            <div className="flex w-[100%]  flex-wrap">
                                                <div className="w-[25%]">
                                                    <p
                                                        className={`text-center subtitle-size cursor-pointer text-${
                                                            isClicked1 == "general"
                                                                ? "[#3A37A6]"
                                                                : "[#A0A0A0]"
                                                        } lg:text-[15px] xxxs:text-[11px]`}
                                                        onClick={() => {
                                                            TabClick("general"), toggleTab("Tabcontent1");
                                                        }}
                                                    >
                                                        General
                                                    </p>
                                                    <hr
                                                        className={`border-${
                                                            isClicked1 == "general"
                                                                ? "[#3A37A6]"
                                                                : "[#CEDEF2]"
                                                        } border-[1px]  mt-1`}
                                                    />
                                                </div>
                                                <div className="w-[25%]">
                                                    <p
                                                        className={`text-center subtitle-size cursor-pointer text-${
                                                            isClicked1 ? "[#A0A0A0]" : "[#3A37A6]"
                                                        }  lg:text-[15px] xxxs:text-[11px]`}
                                                        onClick={() => {
                                                            TabClick(), toggleTab("Tabcontent2");
                                                        }}
                                                    >
                                                        Contact
                                                    </p>
                                                    <hr
                                                        className={`border-${
                                                            isClicked1 ? "[#CEDEF2]" : "[#3A37A6]"
                                                        } border-[1px]   mt-1`}
                                                    />
                                                </div>
                                                <div className="w-[25%]">
                                                    <p
                                                        className={`text-center subtitle-size cursor-pointer text-${
                                                            isClicked1 == "email" ? "[#3A37A6]" : "[#A0A0A0]"
                                                        }  lg:text-[15px] xxxs:text-[11px]`}
                                                        onClick={() => {
                                                            TabClick("email"), toggleTab("Tabcontent3");
                                                        }}
                                                    >
                                                        Email
                                                    </p>
                                                    <hr
                                                        className={`border-${
                                                            isClicked1 == "email" ? "[#3A37A6]" : "[#CEDEF2]"
                                                        } border-[1px]     mt-1`}
                                                    />
                                                </div>
                                                <div className="w-[25%]">
                                                    <p
                                                        className={`text-center subtitle-size cursor-pointer text-${
                                                            isClicked1 == "advance"
                                                                ? "[#3A37A6]"
                                                                : "[#A0A0A0]"
                                                        }  lg:text-[15px] xxxs:text-[11px]`}
                                                        onClick={() => {
                                                            TabClick("advance"), toggleTab("Tabcontent4");
                                                        }}
                                                    >
                                                        Advance
                                                    </p>
                                                    <hr
                                                        className={`border-${
                                                            isClicked1 == "advance"
                                                                ? "[#3A37A6]"
                                                                : "[#CEDEF2]"
                                                        } border-[1px]    mt-1`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {activeTab === "Tabcontent1" && (
                                            <div>
                                                <div
                                                    className="flex justify-between  lg:flex-nowrap xxxs:flex-wrap md:flex-nowrap px-3 ">
                                                    <div
                                                        className="lg:w-[50%]  xxxs:w-full lg:px-3 xxxs:px-1 lg:border-r-[1px]">
                                                        <div className="flex justify-between pt-2 ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Display Logo</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                    isActive={true}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="flex lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  justify-between">
                                                            <div className="flex lg:py-3 xxxs:py-1 ">
                                                                <p className="inner-size ">Logos</p>
                                                            </div>
                                                            <div className="flex  lg:gap-3 xxxs:gap-1 pb-1">
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
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                                <img
                                                                    src={Logos.OrgAdd}
                                                                    alt="add icon"
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <div
                                                            className="flex  lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  justify-between py-1 ">
                                                            <div className="flex lg:py-3  xxxs:py-1 ">
                                                                <p className="inner-size">Favicon</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex lg:gap-3  xxxs:gap-1">
                                                                <div className="pt-1">
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
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <div
                                                            className="flex   justify-between  lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap py-1 ">
                                                            <div className="flex lg:py-3 ">
                                                                <p className="inner-size">Domain</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex lg:gap-3  xxxs:gap-1">
                                                                <div className="pt-2">
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
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <div
                                                            className="flex   justify-between  py-1 lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap    ">
                                                            <div className="flex lg:py-3 ">
                                                                <p className="inner-size ">Language</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div className="pt-1">
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
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="lg:w-[50%]  xxxs:w-full lg:px-3  xxxs:px-1">
                                                        <div
                                                            className="flex  lg:py-2 xxxs:py-1 justify-between align-center gap-2">
                                                            <h1 className="flex items-center inner-size text-[#262626]">
                                                                Color
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <div className="flex gap-2">
                                                                <div
                                                                    className="bg-[#94A2F2] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md"></div>
                                                                <div
                                                                    className="bg-[#3A37A6] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md"></div>
                                                                <div
                                                                    className="bg-[#FFFFFF] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md border-[1px]"></div>
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between  py-2  ">
                                                            <div className="flex py-3 ">
                                                                <p className="inner-size ">Font</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div className="pt-1">
                                                                    <DynamicDropdown
                                                                        mainTitle={"lexend"}
                                                                        text="[12px]"
                                                                        option1={"lexend"}
                                                                        option2={"N-option"}
                                                                        width="[140px]"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between lg:pt-2 xxxs:pt-1 ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">
                                                                    Show caption by default
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
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
                                                        <div className="flex justify-between pt-2 ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">
                                                                    Make all interaction shareable
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
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
                                                        <div className="flex justify-between">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Include replies</p>
                                                                <div className="p-1">
                                                                    {" "}
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
                                                        <div className="flex   justify-between py-2 ">
                                                            <div className="flex lg:py-3 ">
                                                                <p className="inner-size ">Time Zone</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <DynamicDropdown
                                                                mainTitle={"EST"}
                                                                text="[13px]"
                                                                option1={"Est"}
                                                                option2={"N-option"}
                                                                width="[80px]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center gap-3 px-2 py-4">
                                                    <button
                                                        className="text-[#94A2F2] lg:text-[16px] xxxs:text-[11px] border-[#94A2F2] shadow-md border-[1px] rounded text-center lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="lg:text-[16px] xxxs:text-[11px] text-white bg-[#94A2F2] shadow-md text-center rounded lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                        {activeTab === "Tabcontent2" && (
                                            <div>
                                                <div
                                                    className="flex justify-between lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  w-[100%] px-3 ">
                                                    <div className="lg:w-[50%] xxxs:w-full lg:px-3  lg:border-r-[1px]">
                                                        <div className="flex justify-between  items-center">
                                                            <div className="flex">
                                                                <p className="inner-size ">
                                                                    Request contact information at start
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between pb-3">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">
                                                                    Information collection
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between ">
                                                            <div className="flex">
                                                                <p className="inner-size ">First Name</p>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                                <div className="text-[24px] ml-1">*</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Last Name</p>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                                <div className="text-[24px] ml-1">*</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between items-center pb-3">
                                                            <div className="flex ">
                                                                <p className="inner-size">organization</p>
                                                            </div>
                                                            <div className="mr-3">
                                                                <ToggleButton
                                                                    isActive={false}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Email</p>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                                <div className="text-[24px] ml-1">*</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Phone</p>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                                <div className="text-[24px] ml-1 text-[#A0A0A0]">
                                                                    *
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Address</p>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                                <div className="text-[24px] ml-1 text-[#A0A0A0]">
                                                                    *
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-1">
                                                            <p className=" inner-size mb-2">Address format</p>
                                                            <DynamicDropdown
                                                                text="[12px]"
                                                                mainTitle={"United state"}
                                                                option1={"United state"}
                                                                option2={"United Kindom"}
                                                                width="[100%]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="lg:w-[50%] xxxs:w-full xxxs:pt-2 lg:px-3 ">
                                                        <div className="flex justify-between ">
                                                            <div className="flex ">
                                                                <p className="inner-size ">Street address</p>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                                <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">
                                                                    *
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between  ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">City</p>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                                <div className="text-[24px] mt-1 ml-1">*</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">State</p>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                                <div className="text-[24px] mt-1 ml-1 ">*</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between  ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Zip code</p>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                                <div className="text-[24px] mt-1 ml-1 ">*</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Employment</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                                <div className="text-[24px] mt-1 ml-1 ">*</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">
                                                                    Contact from consent
                                                                </p>
                                                            </div>
                                                            <div className="flex">
                                                                <ToggleButton
                                                                    isActive={true}
                                                                    width="[40px]"
                                                                    height="[22px]"
                                                                />
                                                                <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">
                                                                    *
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" h-[90px] p-3 bg-[#F5F5F5]   rounded shadow-md">
                                                            <p className="inner-size text-[#A0A0A0]">
                                                                Please subscribe me to your mailing list and
                                                                send periodic updates and offers.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center gap-3 py-4">
                                                    <button
                                                        className="text-[#94A2F2] text-[16px] border-[#94A2F2] shadow-md border-[1px] rounded text-center w-[190px] h-[42px]">
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="text-[16px] text-white bg-[#94A2F2] shadow-md text-center rounded w-[190px] h-[42px]">
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                        {activeTab === "Tabcontent3" && (
                                            <div>
                                                <div
                                                    className="flex justify-between w-[100%]  lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap lg:px-3 ">
                                                    <div
                                                        className="lg:w-[50%] xxxs:w-full lg:px-3  xxxs:px-1 lg:border-r-[1px]">
                                                        <div className="flex justify-between  items-center">
                                                            <div className="flex">
                                                                <p className="inner-size ">Complition email</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <img
                                                                    src={Logos.EyeBtn}
                                                                    alt="icon"
                                                                    className="lg:w-[25px] xxxs:w-[20px] lg:ml-2 md:ml-2 mb-4"
                                                                />
                                                                <img
                                                                    src={Logos.REc}
                                                                    alt="icon"
                                                                    className="lg:w-[25px] xxxs:w-[20px] lg:ml-2 md:ml-2 mb-4"
                                                                />
                                                                <div className="lg:ml-3 md:ml-3">
                                                                    <ToggleButton
                                                                        isActive={true}
                                                                        width="[40px]"
                                                                        height="[22px]"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between  items-center">
                                                            <div className="flex">
                                                                <p className="inner-size ">
                                                                    Custom heading text
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex ">
                                                                <img
                                                                    src={Logos.OrgCurlyBracket}
                                                                    alt="icon"
                                                                    className="w-[25px] ml-2 mb-4"
                                                                />
                                                            </div>
                                                        </div>
                                                        <textarea
                                                            name=""
                                                            id=""
                                                            cols="30"
                                                            rows="10"
                                                            placeholder="Thanks for responding!"
                                                            className="h-[90px] placeholder-input-modal resize-none p-3 bg-[#F5F5F5] text-[11px] outline-none border-none w-full  rounded shadow-md text-[#A0A0A0]"
                                                        ></textarea>
                                                        <div
                                                            className="flex justify-between  lg:pt-3 xxxs:pt-1 items-center">
                                                            <div className="flex">
                                                                <p className="inner-size ">Custom body text</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <img
                                                                    src={Logos.OrgCurlyBracket}
                                                                    alt="icon"
                                                                    className="w-[25px] ml-2 mb-4"
                                                                />
                                                            </div>
                                                        </div>
                                                        <textarea
                                                            name=""
                                                            id=""
                                                            cols="30"
                                                            rows="10"
                                                            placeholder="We appreciate your response to our “gun control interview” candor video."
                                                            className="h-[90px] placeholder-input-modal resize-none p-3 bg-[#F5F5F5] text-[11px] outline-none border-none w-full  rounded shadow-md text-[#A0A0A0]"
                                                        ></textarea>
                                                        <div className="flex justify-between lg:pt-2 xxxs:pt-1 ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Display Logo</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div
                                                            className="flex lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  justify-between">
                                                            <div className="flex lg:py-3 xxxs:py-1 ">
                                                                <p className="inner-size ">Logos</p>
                                                            </div>
                                                            <div className="flex  lg:gap-3 xxxs:gap-1 pb-1">
                                                                <div className="py-3">
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
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                                <img
                                                                    src={Logos.OrgAdd}
                                                                    alt="add icon"
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between xxxs:py-2 items-center">
                                                            <div className="flex">
                                                                <p className="inner-size ">Complition email</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <img
                                                                    src={Logos.EyeBtn}
                                                                    alt="icon"
                                                                    className="lg:w-[25px] xxxs:w-[20px] lg:ml-2 md:ml-2 mb-4"
                                                                />
                                                                <img
                                                                    src={Logos.REc}
                                                                    alt="icon"
                                                                    className="lg:w-[25px] xxxs:w-[20px] lg:ml-2 md:ml-2 mb-4"
                                                                />
                                                                <div className="lg:ml-3 md:ml-3">
                                                                    <ToggleButton
                                                                        isActive={true}
                                                                        width="[40px]"
                                                                        height="[22px]"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between  items-center">
                                                            <div className="flex">
                                                                <p className="inner-size">
                                                                    Custom heading text
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <img
                                                                    src={Logos.OrgCurlyBracket}
                                                                    alt="icon"
                                                                    className="w-[25px] ml-2 mb-4"
                                                                />
                                                            </div>
                                                        </div>
                                                        <textarea
                                                            name=""
                                                            id=""
                                                            cols="30"
                                                            rows="10"
                                                            placeholder="You have a new reply!"
                                                            className="h-[90px] placeholder-input-modal resize-none p-3 bg-[#F5F5F5] text-[11px] outline-none border-none w-full  rounded shadow-md text-[#A0A0A0]"
                                                        ></textarea>
                                                        <div className="flex justify-between  pt-3 items-center">
                                                            <div className="flex">
                                                                <p className="inner-size">Custom body text</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <img
                                                                    src={Logos.OrgCurlyBracket}
                                                                    alt="icon"
                                                                    className="w-[25px] ml-2 mb-4"
                                                                />
                                                            </div>
                                                        </div>
                                                        <textarea
                                                            name=""
                                                            id=""
                                                            cols="30"
                                                            rows="10"
                                                            placeholder="Check out your latest reply from the “Gun Control Interview” Cando video."
                                                            className="h-[90px] placeholder-input-modal resize-none p-3 bg-[#F5F5F5] text-[11px] outline-none border-none w-full  rounded shadow-md text-[#A0A0A0]"
                                                        ></textarea>
                                                        <div className="flex justify-between  items-center">
                                                            <div className="flex">
                                                                <p className="inner-size">Custom button text</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <img
                                                                    src={Logos.OrgCurlyBracket}
                                                                    alt="icon"
                                                                    className="w-[25px] ml-2 mb-4"
                                                                />
                                                            </div>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            placeholder="View conversation"
                                                            className="w-full placeholder-input-modal h-[40px] bg-[#F5F5F5] px-2  text-[13px] outline-none rounded"
                                                        />
                                                        <div className="flex justify-between pt-2 ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Display Logo</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div
                                                            className="flex lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  justify-between">
                                                            <div className="flex lg:py-3 xxxs:py-1 ">
                                                                <p className="inner-size ">Logos</p>
                                                            </div>
                                                            <div className="flex  lg:gap-3 xxxs:gap-1 pb-1">
                                                                <div className="py-3">
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
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                                <img
                                                                    src={Logos.OrgAdd}
                                                                    alt="add icon"
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="lg:w-[50%]  xxxs:w-full lg:px-3 xxxs:px-1">
                                                        <div className="flex justify-between  items-center">
                                                            <div className="flex">
                                                                <p className="inner-size ">Complition email</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <img
                                                                    src={Logos.EyeBtn}
                                                                    alt="icon"
                                                                    className="lg:w-[25px] xxxs:w-[20px] lg:ml-2 md:ml-2 mb-4"
                                                                />
                                                                <img
                                                                    src={Logos.REc}
                                                                    alt="icon"
                                                                    className="lg:w-[25px] xxxs:w-[20px] lg:ml-2 md:ml-2 mb-4"
                                                                />
                                                                <div className="lg:ml-3 md:ml-3">
                                                                    <ToggleButton
                                                                        isActive={true}
                                                                        width="[40px]"
                                                                        height="[22px]"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">
                                                                    Override complition email
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div className="flex justify-between  items-center">
                                                            <div className="flex">
                                                                <p className="inner-size">
                                                                    Custom heading text
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex ">
                                                                <img
                                                                    src={Logos.OrgCurlyBracket}
                                                                    alt="icon"
                                                                    className="w-[25px] ml-2 mb-4"
                                                                />
                                                            </div>
                                                        </div>
                                                        <textarea
                                                            name=""
                                                            id=""
                                                            cols="30"
                                                            rows="10"
                                                            placeholder="Thanks for your donation!"
                                                            className="h-[90px] placeholder-input-modal resize-none p-3 bg-[#F5F5F5] text-[11px] outline-none border-none w-full  rounded shadow-md text-[#A0A0A0]"
                                                        ></textarea>
                                                        <div className="flex justify-between  pt-3 items-center">
                                                            <div className="flex">
                                                                <p className="inner-size">Custom Body text</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <img
                                                                    src={Logos.OrgCurlyBracket}
                                                                    alt="icon"
                                                                    className="w-[25px] ml-2 mb-4"
                                                                />
                                                            </div>
                                                        </div>
                                                        <textarea
                                                            name=""
                                                            id=""
                                                            cols="30"
                                                            rows="10"
                                                            placeholder="We’re so grateful for your support. here is a receipt for your records."
                                                            className="h-[90px] placeholder-input-modal p-3 resize-none bg-[#F5F5F5] text-[11px] outline-none border-none w-full  rounded shadow-md text-[#A0A0A0]"
                                                        ></textarea>
                                                        <div className="flex justify-between pt-2 ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Display Logo</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div
                                                            className="flex lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  justify-between">
                                                            <div className="flex lg:py-3 xxxs:py-1 ">
                                                                <p className="inner-size ">Logos</p>
                                                            </div>
                                                            <div className="flex  lg:gap-3 xxxs:gap-1 pb-1">
                                                                <div className="py-3">
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
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                                <img
                                                                    src={Logos.OrgAdd}
                                                                    alt="add icon"
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between pt-2  items-center">
                                                            <div className="flex">
                                                                <p className="inner-size ">
                                                                    Payment receipt email
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <img
                                                                    src={Logos.EyeBtn}
                                                                    alt="icon"
                                                                    className="lg:w-[25px] xxxs:w-[20px] lg:ml-2  md:ml-2 mb-4"
                                                                />
                                                                <img
                                                                    src={Logos.REc}
                                                                    alt="icon"
                                                                    className="lg:w-[25px] xxxs:w-[20px] lg:ml-2 md:ml-2 mb-4"
                                                                />
                                                                <div className="lg:ml-3  md:ml-3">
                                                                    <ToggleButton
                                                                        isActive={true}
                                                                        width="[40px]"
                                                                        height="[22px]"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size">
                                                                    Override complition email
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div className="flex justify-between  items-center">
                                                            <div className="flex">
                                                                <p className="inner-size ">
                                                                    Custom heading text
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <img
                                                                    src={Logos.OrgCurlyBracket}
                                                                    alt="icon"
                                                                    className="w-[25px] ml-2 mb-4"
                                                                />
                                                            </div>
                                                        </div>
                                                        <textarea
                                                            name=""
                                                            id=""
                                                            cols="30"
                                                            rows="10"
                                                            placeholder="Thank you for your donations!"
                                                            className="h-[90px] p-3 placeholder-input-modal resize-none bg-[#F5F5F5] text-[11px] outline-none border-none w-full  rounded shadow-md text-[#A0A0A0]"
                                                        ></textarea>
                                                        <div className="flex justify-between  pt-3 items-center">
                                                            <div className="flex">
                                                                <p className="inner-size ">Custom body text</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <img
                                                                    src={Logos.OrgCurlyBracket}
                                                                    alt="icon"
                                                                    className="w-[25px] ml-2 mb-4"
                                                                />
                                                            </div>
                                                        </div>
                                                        <textarea
                                                            name=""
                                                            id=""
                                                            cols="30"
                                                            rows="10"
                                                            placeholder="We’re so grateful for your support. here is a receipt for your records."
                                                            className="h-[90px] placeholder-input-modal resize-none p-3 bg-[#F5F5F5] text-[11px] outline-none border-none w-full  rounded shadow-md text-[#A0A0A0]"
                                                        ></textarea>
                                                        <div className="flex justify-between pt-2 ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size">Display Logo</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div
                                                            className="flex lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  justify-between">
                                                            <div className="flex lg:py-3 xxxs:py-1 ">
                                                                <p className="xxxs:py-2 inner-size ">Logos</p>
                                                            </div>
                                                            <div className="flex  lg:gap-3 xxxs:gap-1 pb-1">
                                                                <div className="py-3">
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
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                                <img
                                                                    src={Logos.OrgAdd}
                                                                    alt="add icon"
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center gap-3 px-2 py-4">
                                                    <button
                                                        className="text-[#94A2F2] lg:text-[16px] xxxs:text-[11px] border-[#94A2F2] shadow-md border-[1px] rounded text-center lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="lg:text-[16px] xxxs:text-[11px] text-white bg-[#94A2F2] shadow-md text-center rounded lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                        {activeTab === "Tabcontent4" && (
                                            <div>
                                                <div
                                                    className="flex justify-between lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap w-[100%] px-3 ">
                                                    <div
                                                        className="lg:w-[50%]  xxxs:w-full lg:border-r-[1px] md:border-r-[1px] lg:px-3">
                                                        <div className="flex justify-between py-2 ">
                                                            <div className="flex mt-1">
                                                                <p className="inner-size">
                                                                    Show video controls
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between py-2 ">
                                                            <div className="flex mt-1">
                                                                <p className="inner-size">
                                                                    Auto-play first video
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between py-2 ">
                                                            <div className="flex mt-1">
                                                                <p className="inner-size">
                                                                    Emphasize video options
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between py-2 ">
                                                            <div className="flex mt-1">
                                                                <p className="inner-size">Display title</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between py-2 ">
                                                            <div className="flex mt-1">
                                                                <p className="inner-size">
                                                                    Button border radius
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <input
                                                                type="text"
                                                                placeholder="8"
                                                                className="bg-[#F5F5F5] placeholder-input-modal text-[#A0A0A0] text-center outline-none px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px] text-[13px]"
                                                                name=""
                                                                id=""
                                                            />
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between py-2 ">
                                                            <div className="flex mt-1">
                                                                <p className="inner-size">
                                                                    Respodant notifications
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="lg:w-[50%]  xxxs:w-full lg:px-3">
                                                        <div className="py-1">
                                                            <p className=" inner-size mb-1">
                                                                Transcript Language
                                                            </p>
                                                            <DynamicDropdown
                                                                text="[12px]"
                                                                mainTitle={"English (United state)"}
                                                                option1={"English(United state)"}
                                                                option2={"English(United kindom)"}
                                                                width="[100%]"
                                                            />
                                                        </div>
                                                        <div className="flex justify-between py-2 ">
                                                            <div className="flex mt-1">
                                                                <p className="inner-size">Profanity filter</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <hr/>
                                                        <div className="flex  py-2 justify-between align-center gap-2">
                                                            <h1 className="flex items-center gap-2 inner-size text-[#262626]">
                                                                Overlay text color
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <div className="flex gap-2">
                                                                <div
                                                                    className="bg-[#94A2F2] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md"></div>
                                                                <div
                                                                    className="bg-[#FFFFFF] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md border-[1px]"></div>
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between py-2 ">
                                                            <div className="flex mt-1">
                                                                <p className="inner-size">
                                                                    Show overlay close text-button
                                                                </p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between py-2 ">
                                                            <div className="flex mt-1">
                                                                <p className="inner-size">Allow upload only</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center gap-3 px-2 py-4">
                                                    <button
                                                        className="text-[#94A2F2] lg:text-[16px] xxxs:text-[11px] border-[#94A2F2] shadow-md border-[1px] rounded text-center lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="lg:text-[16px] xxxs:text-[11px] text-white bg-[#94A2F2] shadow-md text-center rounded lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className={` border-[1px] my-4 rounded-md `}>
                                <div
                                    className={`flex cursor-pointer justify-between px-3  h-[55px]  ${
                                        button2 === true ? "text-[#3A37A6]" : "text-black"
                                    }`}
                                    onClick={() => {
                                        btnHandler2(!button2);
                                    }}
                                >
                                    <p className="subtitle-size py-3">
                                        Default Candour Video Share Setting
                                    </p>
                                    <img
                                        src={Logos.Arrowdown}
                                        alt="Dropdown Arrow"
                                        style={{
                                            transform: button2 ? "rotate(180deg)" : "rotate(0deg)",
                                        }}
                                        className="w-[20px]"
                                    />
                                </div>
                                {button2 === true && (
                                    <div className=" border-t-[1px] ">
                                        <div>
                                            <div
                                                className="flex justify-between  lg:flex-nowrap xxxs:flex-wrap md:flex-nowrap px-3 ">
                                                <div
                                                    className="lg:w-[50%]  xxxs:w-full lg:px-3 xxxs:px-1 lg:border-r-[1px]">
                                                    <div className="flex justify-between lg:py-3 xxxs:pt-2 ">
                                                        <div className="flex items-center pt-1">
                                                            <p className="inner-size">
                                                                Make Candor Videos Private
                                                            </p>
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </div>
                                                        <div className="flex">
                                                            <ToggleButton
                                                                width="[40px]"
                                                                height="[22px]"
                                                                isActive={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div>
                                                        <p className=" lg:py-2 xxxs:py-1 inner-size">
                                                            Only people with the password can view. The widget
                                                            option has been disabled.
                                                        </p>
                                                        <h1 className=" py-1 inner-size text-[#262626]">
                                                            Password
                                                        </h1>
                                                        <div className="flex">
                                                            <InputComp
                                                                type="password"
                                                                size="medium"
                                                                placeholder="Password"
                                                                isButton={true}
                                                                className="input-eye text-black rounded-none rounded-l-md h-[35px] p-2 lg:text-[13px] xxxs:text-[11px]"
                                                                value={searchPass}
                                                                onChange={(e) => {
                                                                    setSearchPass(e.target.value);
                                                                }}
                                                            />
                                                            <button
                                                                className="bg-[#94A2F2] w-[75px] rounded-r-md h-[35px] text-white text-[13px]">
                                                                Save
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="flex  lg:py-3 xxxs:py-1 justify-between align-center gap-2">
                                                            <h1 className="flex items-center gap-2 inner-size text-[#262626]">
                                                                Color option
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <div className="flex gap-2">
                                                                <div
                                                                    className="bg-[#94A2F2] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md"></div>
                                                                <div
                                                                    className="bg-[#FFFFFF] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md border-[1px]"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lg:w-[50%]  xxxs:w-full lg:px-3  xxxs:px-1">
                                                    <div className="flex justify-between lg:pt-3 xxxs:pt-1 ">
                                                        <div className="flex pt-1">
                                                            <p className="inner-size ">Custom message</p>
                                                            <div className="p-1">
                                                                {" "}
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
                                                    <input
                                                        type="text"
                                                        placeholder="Enter the password to view"
                                                        className="w-full h-[40px] placeholder-input-modal bg-[#F5F5F5] px-2 text-[13px] outline-none rounded"
                                                    />
                                                    <div className="flex justify-between pt-2 ">
                                                        <div className="flex pt-1">
                                                            <p className="inner-size ">Display Logo</p>
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </div>
                                                        <ToggleButton
                                                            isActive={true}
                                                            width="[40px]"
                                                            height="[22px]"
                                                        />
                                                    </div>
                                                    <div
                                                        className="flex lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  justify-between">
                                                        <div className="flex lg:py-3 xxxs:py-1 ">
                                                            <p className="inner-size ">Logos</p>
                                                        </div>
                                                        <div className="flex  lg:gap-3 xxxs:gap-1 pb-1">
                                                            <div className="py-3">
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
                                                                className="lg:w-[38px] xxxs:w-[30px]"
                                                            />
                                                            <img
                                                                src={Logos.OrgAdd}
                                                                alt="add icon"
                                                                className="lg:w-[38px] xxxs:w-[30px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h1 className="inner-size flex items-center gap-3 text-[#94A2F2]">
                                                        Preview password page
                                                        <img
                                                            src={Logos.Export}
                                                            alt="Export"
                                                            className="w-[12px]"
                                                        />
                                                    </h1>
                                                    <hr/>
                                                    <div
                                                        className="flex  lg:py-2 xxxs:py-1 justify-between align-center gap-2">
                                                        <h1 className="flex items-center gap-2 inner-size text-[#262626]">
                                                            Default Color
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="flex gap-2">
                                                            <div
                                                                className="bg-[#94A2F2] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-center gap-3 px-2 py-4">
                                                <button
                                                    className="lg:text-[16px] xxxs:text-[11px] text-white bg-[#94A2F2] shadow-md text-center rounded lg:w-[200px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={` border-[1px] my-4 rounded-md `}>
                                <div
                                    className={`flex cursor-pointer justify-between px-3  min-h-[55px]  ${
                                        button3 === true ? "text-[#3A37A6]" : "text-black"
                                    }`}
                                    onClick={() => {
                                        btnHandler3(!button3);
                                    }}
                                >
                                    <p className="subtitle-size py-3">
                                        Default Share Settings Individual Conversations
                                    </p>
                                    <img
                                        src={Logos.Arrowdown}
                                        alt="Dropdown Arrow"
                                        style={{
                                            transform: button3 ? "rotate(180deg)" : "rotate(0deg)",
                                        }}
                                        className="w-[20px]"
                                    />
                                </div>
                                {button3 === true && (
                                    <div className=" border-t-[1px] ">
                                        <div>
                                            <div
                                                className="flex justify-between  lg:flex-nowrap xxxs:flex-wrap md:flex-nowrap px-3 ">
                                                <div
                                                    className="lg:w-[50%]  xxxs:w-full lg:px-3 xxxs:px-1 lg:border-r-[1px]">
                                                    <div className="flex justify-between lg:py-4 xxxs:pt-2 ">
                                                        <div className="flex pt-1">
                                                            <p className="inner-size ">
                                                                Share entire response
                                                            </p>
                                                        </div>
                                                        <div className="flex">
                                                            <ToggleButton
                                                                width="[40px]"
                                                                height="[22px]"
                                                                isActive={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h1 className="inner-size pb-1 text-[#94A2F2]">
                                                        https://coustomer.candor.video/aef...
                                                    </h1>
                                                    <div className="flex justify-start lg:gap-4 xxxs:gap-2 py-2">
                                                        <button
                                                            className="bg-[#F5F5F5] w-[95px] px-1 rounded-md h-[35px] text-[13px]">
                                                            Copy
                                                        </button>
                                                        <button
                                                            className="bg-[#F5F5F5] w-[95px] px-1 rounded-md h-[35px] text-[13px]">
                                                            Embed
                                                        </button>
                                                    </div>
                                                    <div className="flex justify-between gap-2 lg:py-2 xxxs:py-1">
                                                        <h1 className="flex items-center gap-2 inner-size text-[#262626]">
                                                            Require a password
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <ToggleButton
                                                            isActive={true}
                                                            width="[40px]"
                                                            height="[22px]"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h1 className=" lg:py-2 xxxs:py-2 inner-size text-[#262626]">
                                                            Password
                                                        </h1>
                                                        <div className="flex">
                                                            <InputComp
                                                                type="password"
                                                                size="medium"
                                                                placeholder="Password"
                                                                isButton={true}
                                                                className="rounded-none placeholder-input-modal  input-eye text-black rounded-l-md h-[35px] p-2 lg:text-[13px] xxxs:text-[11px]"
                                                                value={searchPass}
                                                                onChange={(e) => {
                                                                    setSearchPass(e.target.value);
                                                                }}
                                                            />
                                                            <button
                                                                className="bg-[#94A2F2] w-[75px] rounded-r-md h-[35px] text-white text-[13px]">
                                                                Save
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="flex  lg:py-2 xxxs:py-1 justify-between align-center gap-2">
                                                            <h1 className="flex items-center gap-2 inner-size text-[#262626]">
                                                                Color option
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <div className="flex gap-2">
                                                                <div
                                                                    className="bg-[#94A2F2] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md"></div>
                                                                <div
                                                                    className="bg-[#FFFFFF] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md border-[1px]"></div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between lg:pt-2 xxxs:pt-1 ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Custom message</p>
                                                                <div className="p-1">
                                                                    {" "}
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
                                                        <input
                                                            type="text"
                                                            placeholder="Enter the password to view"
                                                            className="w-full h-[40px] placeholder-input-modal bg-[#F5F5F5] px-2  text-[13px] outline-none rounded"
                                                        />
                                                        <div className="flex justify-between lg:py-2 xxxs:py-1 ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Display Logo</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div
                                                            className="flex lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  justify-between">
                                                            <div className="flex lg:py-3 xxxs:py-1 ">
                                                                <p className="inner-size ">Logos</p>
                                                            </div>
                                                            <div className="flex  lg:gap-3 xxxs:gap-1 pb-1">
                                                                <div className="py-3">
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
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                                <img
                                                                    src={Logos.OrgAdd}
                                                                    alt="add icon"
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <h1 className="inner-size lg:py-2 xxxs:py-1 flex items-center gap-3 text-[#94A2F2]">
                                                            Preview password page
                                                            <img
                                                                src={Logos.Export}
                                                                alt="Export"
                                                                className="w-[12px]"
                                                            />
                                                        </h1>
                                                        <hr/>
                                                        <h1 className="flex  gap-2 inner-size text-[#262626] lg:py-3 xxxs:py-2">
                                                            Include
                                                        </h1>
                                                        <div
                                                            className="flex  justify-start lg:gap-16  xxxs:gap-2 md:gap-4 pb-1">
                                                            <div className="flex items-center lg:gap-3 xxxs:gap-1">
                                                                <input
                                                                    type="checkbox"
                                                                    className="accent-[#3A37A6] h-4 w-4"
                                                                />
                                                                <h1 className="inner-size text-[#262626]">
                                                                    Text
                                                                </h1>
                                                            </div>
                                                            <div className="flex items-center lg:gap-3 xxxs:gap-1">
                                                                <input
                                                                    type="checkbox"
                                                                    className="accent-[#3A37A6] h-4 w-4"
                                                                />
                                                                <h1 className="inner-size text-[#262626]">
                                                                    Audio
                                                                </h1>
                                                            </div>
                                                            <div className="flex items-center lg:gap-3 xxxs:gap-1">
                                                                <input
                                                                    type="checkbox"
                                                                    className="accent-[#3A37A6] h-4 w-4"
                                                                />
                                                                <div className="inner-size text-[#262626]">
                                                                    Video
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between  lg:py-2 xxxs:py-1 gap-2">
                                                            <h1 className="flex items-center gap-2 inner-size text-[#262626]">
                                                                Include replies
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div
                                                            className="flex justify-between lg:py-2 xxxs:py-1 gap-2 pb-1">
                                                            <h1 className="flex items-center gap-2 inner-size text-[#262626]">
                                                                Publish new replies
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div className="flex justify-between lg:py-2 xxxs:py-1 gap-2">
                                                            <h1 className="flex items-center gap-2 inner-size text-[#262626]">
                                                                Include non-respondent steps
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lg:w-[50%]  xxxs:w-full lg:px-3  xxxs:px-1">
                                                    <div
                                                        className="flex justify-between lg:flex-nowrap md:flex-nowrap  xxxs:flex-wrap  lg:py-2 xxxs:py-1">
                                                        <div className="flex w justify-between gap-2 py-1">
                                                            <h1 className="flex items-center  gap-2 inner-size text-[#262626]">
                                                                Non-respondent display
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                        </div>
                                                        <div className="flex">
                                                            <button
                                                                className={`inner-size w-[90px] rounded-l-md h-[35px] text-[13px] ${
                                                                    isBoxToggle1 == "inline"
                                                                        ? "bg-[#94A2F2] , text-white"
                                                                        : "bg-[#F5F5F5] , text-black"
                                                                }`}
                                                                onClick={() => {
                                                                    boxToggle1("inline");
                                                                }}
                                                            >
                                                                In-line
                                                            </button>
                                                            <button
                                                                className={`inner-size w-[90px] rounded-r-md h-[35px] text-[13px] ${
                                                                    isBoxToggle1 == "Note"
                                                                        ? "bg-[#94A2F2] , text-white"
                                                                        : "bg-[#F5F5F5] , text-black"
                                                                }`}
                                                                onClick={() => {
                                                                    boxToggle1("Note");
                                                                }}
                                                            >
                                                                Note
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between lg:py-2  xxxs:py-1 gap-2">
                                                        <h1 className="flex items-center inner-size gap-2 inner-size text-[#262626]">
                                                            Display step title
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <ToggleButton
                                                            isActive={true}
                                                            width="[40px]"
                                                            height="[22px]"
                                                        />
                                                    </div>
                                                    <div className="flex justify-between lg:py-2  xxxs:py-1 gap-2">
                                                        <h1 className="flex items-center inner-size gap-2 inner-size text-[#262626]">
                                                            Show step selection
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <ToggleButton
                                                            isActive={true}
                                                            width="[40px]"
                                                            height="[22px]"
                                                        />
                                                    </div>
                                                    <div className="flex justify-between items-center gap-2">
                                                        <h1 className="flex items-center inner-size lg:py-2  xxxs:py-1 gap-2 inner-size text-[#262626]">
                                                            Overlay step titel on tiles
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <ToggleButton
                                                            isActive={false}
                                                            width="[40px]"
                                                            height="[22px]"
                                                        />
                                                    </div>
                                                    <div className="flex justify-between gap-2 pb-1 border-b-[1px]">
                                                        <h1 className="flex items-center inner-size lg:py-2  xxxs:py-1 gap-2 inner-size text-[#262626]">
                                                            Auto-playthrough
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <ToggleButton
                                                            isActive={true}
                                                            width="[40px]"
                                                            height="[22px]"
                                                        />
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <h1 className="flex items-center inner-size lg:py-2  xxxs:py-1 gap-2  inner-size text-[#262626]">
                                                            Display respondent name
                                                            <img
                                                                src={Logos.InfoBtn}
                                                                alt="Info Btn"
                                                                className="w-[12px]"
                                                            />
                                                        </h1>
                                                        <div className="py-1">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1 gap-2 inner-size text-[#262626]">
                                                            Respondent name
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <input
                                                            type="text"
                                                            placeholder="Ryan J."
                                                            className="bg-[#F5F5F5] placeholder-input-modal text-[#A0A0A0] placeholder:text-black text-center outline-none px-2 w-[65px] py-1 items-center rounded h-[30px] text-[13px]"
                                                            name=""
                                                            id=""
                                                        />
                                                    </div>
                                                    <div className="flex justify-between gap-2 border-b-[1px]">
                                                        <h1 className="flex items-center inner-size lg:py-2  xxxs:py-1 gap-2 inner-size text-[#262626]">
                                                            Show submission dates
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="py-1">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <h1 className="flex items-center inner-size  lg:py-2  xxxs:py-1 gap-2 inner-size text-[#262626]">
                                                            Use step titel as overlay text
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="py-1">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex justify-between align-center items-center gap-2">
                                                        <h1 className="flex items-center inner-size lg:py-2  xxxs:py-1 gap-2 inner-size text-[#262626]">
                                                            Overlay text colors
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="flex gap-2">
                                                            <div
                                                                className="bg-[#94A2F2] h-[30px] w-[30px] rounded-md shadow-md"></div>
                                                            <div
                                                                className="bg-[#FFFFFF] h-[30px] w-[30px] rounded-md shadow-md border-[1px]"></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <h1 className="flex items-center inner-size lg:py-2  xxxs:py-1 gap-2 inner-size text-[#262626]">
                                                            Show Overlay colors text button
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="py-1">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center gap-2">
                                                        <h1 className="flex items-center inner-size lg:py-2  xxxs:py-1 gap-2 inner-size text-[#262626]">
                                                            Overlay text size
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="">
                                                            <DynamicDropdown
                                                                text="[13px]"
                                                                mainTitle={"Medium"}
                                                                option1={"Medium"}
                                                                option2={"Small"}
                                                                width="[110px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <h1 className="flex items-center inner-size lg:py-2  xxxs:py-1 gap-2 inner-size text-[#262626]">
                                                            Fade in delay
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <input
                                                            type="text"
                                                            placeholder="10"
                                                            className="bg-[#F5F5F5] placeholder-input-modal w-[50px] mt-1  xxxs:mb-1 text-center placeholder:text-black p-3 rounded-sm h-[30px] lg:text-[13px] xxxs:text-[12px] outline-none"
                                                            name=""
                                                            id=""
                                                        />
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <h1 className="flex items-center  lg:py-2  inner-size xxxs:py-1 gap-2 inner-size text-[#262626]">
                                                            Fade out offset
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <input
                                                            type="text"
                                                            placeholder="2"
                                                            className="bg-[#F5F5F5] placeholder-input-modal w-[50px] mt-1  xxxs:mb-1 text-center placeholder:text-black p-3 rounded-sm h-[30px] lg:text-[13px] xxxs:text-[12px] outline-none"
                                                            name=""
                                                            id=""
                                                        />
                                                    </div>

                                                    <div className="flex justify-between pt-2 ">
                                                        <div className="flex pt-1">
                                                            <p className="inner-size ">Display Logo</p>
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </div>
                                                        <ToggleButton
                                                            isActive={true}
                                                            width="[40px]"
                                                            height="[22px]"
                                                        />
                                                    </div>
                                                    <div
                                                        className="flex lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  justify-between">
                                                        <div className="flex lg:py-3 xxxs:py-1 ">
                                                            <p className="inner-size ">Logos</p>
                                                        </div>
                                                        <div className="flex  lg:gap-3 xxxs:gap-1 pb-1">
                                                            <div className="pt-1">
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
                                                                className="lg:w-[38px] xxxs:w-[30px]"
                                                            />
                                                            <img
                                                                src={Logos.OrgAdd}
                                                                alt="add icon"
                                                                className="lg:w-[38px] xxxs:w-[30px]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-center gap-3 px-2 py-4">
                                                <button
                                                    className="text-[#94A2F2] lg:text-[16px] xxxs:text-[11px] border-[#94A2F2] shadow-md border-[1px] rounded text-center lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                    Cancel
                                                </button>
                                                <button
                                                    className="lg:text-[16px] xxxs:text-[11px] text-white bg-[#94A2F2] shadow-md text-center rounded lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={` border-[1px] my-4 rounded-md `}>
                                <div
                                    className={`flex cursor-pointer justify-between px-3  min-h-[55px]  ${
                                        button4 === true ? "text-[#3A37A6]" : "text-black"
                                    }`}
                                    onClick={() => {
                                        btnHandler4(!button4);
                                    }}
                                >
                                    <p className="subtitle-size py-3">
                                        Default Share Settings When sharing All candor Video
                                        Responses
                                    </p>
                                    <img
                                        src={Logos.Arrowdown}
                                        alt="Dropdown Arrow"
                                        style={{
                                            transform: button4 ? "rotate(180deg)" : "rotate(0deg)",
                                        }}
                                        className="w-[20px]"
                                    />
                                </div>
                                {button4 === true && (
                                    <div className=" border-t-[1px] ">
                                        <div>
                                            <div
                                                className="flex justify-between  lg:flex-nowrap xxxs:flex-wrap md:flex-nowrap px-3 ">
                                                <div
                                                    className="lg:w-[50%]  xxxs:w-full lg:px-3 xxxs:px-1 lg:border-r-[1px]">
                                                    <div className="flex justify-between gap-2 lg:py-2 xxxs:py-1">
                                                        <h1 className="flex items-center inner-size text-[#262626]">
                                                            Require a password
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <ToggleButton
                                                            isActive={true}
                                                            width="[40px]"
                                                            height="[22px]"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h1 className=" inner-size lg:py-2 xxxs:py-2  text-[#262626]">
                                                            Password
                                                        </h1>
                                                        <div className="flex">
                                                            <InputComp
                                                                type="password"
                                                                size="medium"
                                                                placeholder="Password"
                                                                isButton={true}
                                                                className="rounded-none placeholder-input-modal input-eye rounded-l-md h-[35px] p-2 lg:text-[13px] xxxs:text-[11px]"
                                                                value={searchPass}
                                                                onChange={(e) => {
                                                                    setSearchPass(e.target.value);
                                                                }}
                                                            />
                                                            <button
                                                                className="bg-[#94A2F2] w-[75px] rounded-r-md h-[35px] text-white text-[13px]">
                                                                Save
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="flex  lg:py-2 xxxs:py-1 justify-between align-center gap-2">
                                                            <h1 className="flex items-center  inner-size text-[#262626]">
                                                                Color option
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <div className="flex gap-2">
                                                                <div
                                                                    className="bg-[#94A2F2] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md"></div>
                                                                <div
                                                                    className="bg-[#FFFFFF] lg:h-[30px] xxxs:h-[25px] lg:w-[30px] xxxs:w-[25px] rounded-md shadow-md border-[1px]"></div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between lg:pt-2 xxxs:pt-1 ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size ">Custom message</p>
                                                                <div className="p-1">
                                                                    {" "}
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
                                                        <input
                                                            type="text"
                                                            placeholder="Enter the password to view"
                                                            className="w-full h-[40px] placeholder-input-modal bg-[#F5F5F5] px-2  text-[13px] outline-none rounded"
                                                        />
                                                        <div className="flex justify-between lg:py-2 xxxs:py-1 ">
                                                            <div className="flex pt-1">
                                                                <p className="inner-size">Display Logo</p>
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </div>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div
                                                            className="flex lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  justify-between">
                                                            <div className="flex lg:py-3 xxxs:py-1 ">
                                                                <p className="inner-size">Logos</p>
                                                            </div>
                                                            <div className="flex  lg:gap-3 xxxs:gap-1 pb-1">
                                                                <div className="py-3">
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
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                                <img
                                                                    src={Logos.OrgAdd}
                                                                    alt="add icon"
                                                                    className="lg:w-[38px] xxxs:w-[30px]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <h1 className="inner-size lg:py-2 xxxs:py-1 flex items-center gap-3 text-[#94A2F2]">
                                                            Preview password page
                                                            <img
                                                                src={Logos.Export}
                                                                alt="Export"
                                                                className="w-[12px]"
                                                            />
                                                        </h1>
                                                        <h1 className="flex  gap-2 inner-size text-[#262626] lg:py-2 xxxs:py-2">
                                                            Include
                                                        </h1>
                                                        <div
                                                            className="flex  justify-start lg:gap-16  xxxs:gap-2 md:gap-4 pb-1">
                                                            <div className="flex items-center lg:gap-3 xxxs:gap-1">
                                                                <input
                                                                    type="checkbox"
                                                                    className="accent-[#3A37A6] h-4 w-4"
                                                                    checked
                                                                />
                                                                <h1 className="inner-size text-[#262626]">
                                                                    Text
                                                                </h1>
                                                            </div>
                                                            <div className="flex items-center lg:gap-3 xxxs:gap-1">
                                                                <input
                                                                    type="checkbox"
                                                                    className="accent-[#3A37A6] h-4 w-4"
                                                                    checked
                                                                />
                                                                <h1 className="inner-size text-[#262626]">
                                                                    Audio
                                                                </h1>
                                                            </div>
                                                            <div className="flex items-center lg:gap-3 xxxs:gap-1">
                                                                <input
                                                                    type="checkbox"
                                                                    className="accent-[#3A37A6] h-4 w-4"
                                                                    checked
                                                                />
                                                                <div className="inner-size text-[#262626]">
                                                                    Video
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr/>

                                                        <div className="flex justify-between  lg:py-2 xxxs:py-1 gap-2">
                                                            <h1 className="flex items-center inner-size text-[#262626]">
                                                                Include replies
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div className="flex justify-between py-1 gap-2 pb-1">
                                                            <h1 className="flex items-center inner-size text-[#262626]">
                                                                Publish new replies
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <hr/>
                                                        <div className="flex justify-between lg:py-2 xxxs:py-1 gap-2">
                                                            <h1 className="flex items-center inner-size text-[#262626]">
                                                                Include non-respondent steps
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div
                                                            className="flex justify-between lg:flex-nowrap md:flex-nowrap  xxxs:flex-wrap ">
                                                            <div className="flex justify-between  gap-2 py-1">
                                                                <h1 className="flex items-center py-1 inner-size text-[#262626]">
                                                                    Non-respondent display
                                                                    <div className="p-1">
                                                                        {" "}
                                                                        <ToolTip/>
                                                                    </div>
                                                                </h1>
                                                            </div>
                                                            <div className="flex">
                                                                <button
                                                                    className={` w-[90px] rounded-l-md h-[35px] text-[13px] ${
                                                                        isBoxToggle == "inline"
                                                                            ? "bg-[#94A2F2] , text-white"
                                                                            : "bg-[#F5F5F5] , text-black"
                                                                    }`}
                                                                    onClick={() => {
                                                                        boxToggle("inline");
                                                                    }}
                                                                >
                                                                    In-line
                                                                </button>
                                                                <button
                                                                    className={` w-[90px] rounded-r-md h-[35px] text-[13px] ${
                                                                        isBoxToggle == "Note"
                                                                            ? "bg-[#94A2F2] , text-white"
                                                                            : "bg-[#F5F5F5] , text-black"
                                                                    }`}
                                                                    onClick={() => {
                                                                        boxToggle("Note");
                                                                    }}
                                                                >
                                                                    Note
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between lg:py-2  xxxs:py-1 gap-2">
                                                            <h1 className="flex items-center inner-size text-[#262626]">
                                                                Display step title
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div className="flex justify-between lg:py-2  xxxs:py-1 gap-2">
                                                            <h1 className="flex items-center inner-size text-[#262626]">
                                                                Show step selection
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div className="flex justify-between items-center gap-2">
                                                            <h1 className="flex items-center lg:py-2  xxxs:py-1 inner-size text-[#262626]">
                                                                Overlay step titel on tiles
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <ToggleButton
                                                                isActive={false}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                        <div className="flex justify-between gap-2 pb-1 border-b-[1px]">
                                                            <h1 className="flex items-center lg:py-2  xxxs:py-1 inner-size text-[#262626]">
                                                                Auto-playthrough
                                                                <div className="p-1">
                                                                    {" "}
                                                                    <ToolTip/>
                                                                </div>
                                                            </h1>
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lg:w-[50%]  xxxs:w-full lg:px-3  xxxs:px-1">
                                                    <div className="flex justify-between gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1   inner-size text-[#262626]">
                                                            Display respondent name
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="py-1">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between flex-wrap items-center gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1  inner-size text-[#262626]">
                                                            Display name
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="py-3">
                                                            <DynamicDropdown
                                                                text="[13px]"
                                                                mainTitle={"First name only"}
                                                                option1={"First name only"}
                                                                option2={"Last name only"}
                                                                width="[170px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1  inner-size text-[#262626]">
                                                            Fallback
                                                            <div className="p-1">
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <input
                                                            type="text"
                                                            placeholder="Unknown"
                                                            className="bg-[#F5F5F5] placeholder-input-modal w-[90px]  xxxs:mb-1 text-center placeholder:text-black p-3 rounded-sm h-[32px] lg:text-[13px] xxxs:text-[12px] outline-none"
                                                            name=""
                                                            id=""
                                                        />
                                                    </div>
                                                    <div className="flex justify-between gap-2 border-b-[1px]">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1  inner-size text-[#262626]">
                                                            Show submission dates
                                                            <div className="p-1">
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="py-1">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1  inner-size text-[#262626]">
                                                            Use step titel as overlay text
                                                            <div className="p-1">
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="py-1">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex justify-between align-center items-center gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1 inner-size text-[#262626]">
                                                            Overlay text colors
                                                            <div className="p-1">
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="flex gap-2">
                                                            <div
                                                                className="bg-[#94A2F2] h-[30px] w-[30px] rounded-md shadow-md"></div>
                                                            <div
                                                                className="bg-[#FFFFFF] h-[30px] w-[30px] rounded-md shadow-md border-[1px]"></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1 inner-size text-[#262626]">
                                                            Show Overlay colors text button
                                                            <div className="p-1">
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="py-1">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1 inner-size text-[#262626]">
                                                            Overlay text size
                                                            <div className="p-1">
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="">
                                                            <DynamicDropdown
                                                                text="[13px]"
                                                                mainTitle={"Medium"}
                                                                option1={"Small"}
                                                                option2={"Medium"}
                                                                width="[110px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1 inner-size text-[#262626]">
                                                            Fade in delay
                                                            <div className="p-1">
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <input
                                                            type="text"
                                                            placeholder="10"
                                                            className="bg-[#F5F5F5] placeholder-input-modal w-[50px] mt-1  xxxs:mb-1 text-center placeholder:text-black p-3 rounded-sm h-[30px] lg:text-[13px] xxxs:text-[12px] outline-none"
                                                            name=""
                                                            id=""
                                                        />
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1 inner-size text-[#262626]">
                                                            Fade out offset
                                                            <div className="p-1">
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <input
                                                            type="text"
                                                            placeholder="2"
                                                            className="bg-[#F5F5F5] placeholder-input-modal w-[50px] mt-1  xxxs:mb-1 text-center placeholder:text-black p-3 rounded-sm h-[30px] lg:text-[13px] xxxs:text-[12px] outline-none"
                                                            name=""
                                                            id=""
                                                        />
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1 inner-size text-[#262626]">
                                                            Darken video for readability
                                                            <div className="p-1">
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="py-1">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div
                                                        className="flex justify-between flex-wrap lg:py-2 xxxs:py-1 items-center gap-2">
                                                        <h1 className="flex items-center  lg:py-2  xxxs:py-1 inner-size text-[#262626]">
                                                            Sort responses
                                                            <div className="p-1">
                                                                <ToolTip/>
                                                            </div>
                                                        </h1>
                                                        <div className="py-3">
                                                            <DynamicDropdown
                                                                text="[13px]"
                                                                mainTitle={"Most recent first"}
                                                                option1={"Most recent first"}
                                                                option2={"Previous one first"}
                                                                width="[170px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className="flex justify-between pt-2 ">
                                                        <div className="flex pt-1">
                                                            <p className="inner-size ">
                                                                Invite others to respond
                                                            </p>
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </div>
                                                        <ToggleButton
                                                            isActive={true}
                                                            width="[40px]"
                                                            height="[22px]"
                                                        />
                                                    </div>
                                                    <div className="flex justify-between lg:pt-2 xxxs:pt-1 ">
                                                        <div className="flex pt-1">
                                                            <p className="inner-size ">Custom link text</p>
                                                            <div className="p-1">
                                                                {" "}
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
                                                    <input
                                                        type="text"
                                                        placeholder="Submit your own response!"
                                                        className="w-full h-[40px] placeholder-input-modal bg-[#F5F5F5] text-black px-2 my-2 text-[13px] outline-none rounded"
                                                    />
                                                    <hr/>

                                                    <div className="flex justify-between pt-2 ">
                                                        <div className="flex pt-1">
                                                            <p className="inner-size ">Display Logo</p>
                                                            <div className="p-1">
                                                                {" "}
                                                                <ToolTip/>
                                                            </div>
                                                        </div>
                                                        <ToggleButton
                                                            isActive={true}
                                                            width="[40px]"
                                                            height="[22px]"
                                                        />
                                                    </div>
                                                    <div
                                                        className="flex lg:flex-nowrap md-flex-nowrap xxxs:flex-wrap  justify-between">
                                                        <div className="flex lg:py-3 xxxs:py-1 ">
                                                            <p className="inner-size ">Logos</p>
                                                        </div>
                                                        <div className="flex  lg:gap-3 xxxs:gap-1 pb-1">
                                                            <div className="py-1">
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
                                                                className="lg:w-[38px] xxxs:w-[30px]"
                                                            />
                                                            <img
                                                                src={Logos.OrgAdd}
                                                                alt="add icon"
                                                                className="lg:w-[38px] xxxs:w-[30px]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-center gap-3 px-2 py-4">
                                                <button
                                                    className="text-[#94A2F2] lg:text-[16px] xxxs:text-[11px] border-[#94A2F2] shadow-md border-[1px] rounded text-center lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                    Cancel
                                                </button>
                                                <button
                                                    className="lg:text-[16px] xxxs:text-[11px] text-white bg-[#94A2F2] shadow-md text-center rounded lg:w-[190px] xxxs:w-[150px] lg:h-[42px] xxxs:h-[35px]">
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {navigateTabs === "Plan & Billing" && <PlanAndBiling/>}
                    {navigateTabs === "Branding" && (
                        <div>
                            <Branding
                                showSecondContent={showSecondContent}
                                setShowSecondContent={setShowSecondContent}
                            />
                        </div>
                    )}
                    {navigateTabs === "Authorized Apps" && <AuthApp/>}
                    {navigateTabs === "Manage Team" && <ManageTeam/>}
                </div>
            </div>
        </div>
    );
}

export default MartinUsSenate;
