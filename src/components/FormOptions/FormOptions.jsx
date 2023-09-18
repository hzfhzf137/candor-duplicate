import React, {useState} from "react";
import {Logos} from "../../assets";

import InteractionDropdown from "../InteractionDropdown/InteractionDropdown";
import ImageButtons from "../ImageButtons/ImageButtons";
import ToggleButton from "../ToggleButton/ToggleButton";
import ToolTip from "../ToolTip/ToolTip";
import {Tooltip} from "antd";
import {useNavigate} from "react-router";

const FormOptions = () => {
    const [button1, setButton1] = useState("desk");

    const [showDropdown1, setShowDropdown1] =
        useState(false);
    const [showDropdown2, setShowDropdown2] =
        useState(false);
    const [showDropdown3, setShowDropdown3] =
        useState(false);
    const [showDropdown4, setShowDropdown4] =
        useState(false);
    const [showDropdown5, setShowDropdown5] =
        useState(false);

    const [checked4, setChecked4] = useState(true);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [toggle1, setToggle1] = useState(true);
    const [question, setQuestion] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [option, setOption] = useState(false);
    const [displayText, setDisplayText] =
        useState(false);
    const [description, setDescription] =
        useState(false);
    const [response, setResponse] = useState(false);
    const [dropdown, setDropdown] = useState("");

    const [opendropdown, setopendropdown] =
        useState(false);
    const [opendropdown2, setopendropdown2] =
        useState(false);
    const [dropdown2, setdropdown2] = useState("");
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/video");
    }

    function openDropdownHanddler2() {
        setopendropdown2(!opendropdown2);
        setopendropdown(false);
    }

    function dropdownHanddler2(a) {
        setdropdown2(a);
        setopendropdown2(false);
    }

    function btnHandler1(a) {
        setButton1(a);
    }

    const dropDown1 = () => {
        setShowDropdown1(!showDropdown1);
        setShowDropdown2(false);
        setShowDropdown3(false);
        setShowDropdown4(false);
        setShowDropdown5(false);
    };


    const dropDown3 = () => {
        setShowDropdown3(!showDropdown3);
        setShowDropdown1(false);
        setShowDropdown2(false);
        setShowDropdown4(false);
        setShowDropdown5(false);
    };
    const dropDown4 = () => {
        setShowDropdown4(!showDropdown4);
        setShowDropdown1(false);
        setShowDropdown3(false);
        setShowDropdown2(false);
        setShowDropdown5(false);
    };
    const dropDown5 = () => {
        setShowDropdown5(!showDropdown5);
        setShowDropdown1(false);
        setShowDropdown3(false);
        setShowDropdown4(false);
        setShowDropdown2(false);
    };

    function dropdownHandler(a) {
        setDropdown(a);
    }

    function descriptionHandler(a) {
        setDescription(a);
    }

    function responseHandler(a) {
        setResponse(a);
    }


    function toggleHandler1(a) {
        setToggle1(a);
    }

    function questionHandler(a) {
        setQuestion(a);
    }

    function shuffleHandler(a) {
        setShuffle(a);
    }

    function optionHandler(a) {
        setOption(a);
    }

    const handleClick = () => {
        setDisplayText(!displayText);
    };

    return (
        <div>
            <div className="flex items-center justify-between pb-2 w-full">
                <div className="flex items-center justify-start gap-3">
                    <img
                        src={Logos.VectorLeft}
                        alt="Vector Left"
                        className="cursor-pointer w-[7px] xxxl:w-[9px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />
                    <h1 className="font-medium title-size text-[#262626]">
                        Form Options
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
                                toggleScreen("desktop");
                        }}
                    >
                        {button1 == "desk" ? (
                            <img
                                src={Logos.MonitorImg}
                                alt="Monitor Img"
                                className="desktop-icons"
                            />
                        ) : (
                            <img
                                src={Logos.MoniterImg1}
                                alt="Monitor Img dull"
                                className="desktop-icons"
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
                                toggleScreen("mobile");
                        }}
                    >
                        {button1 == "mbl" ? (
                            <img
                                src={Logos.SmartPhone1}
                                className="mobile-icon"
                                alt="Smart Phone Img "
                            />
                        ) : (
                            <img
                                src={Logos.SmartPhoneImg}
                                className="mobile-icon"
                                alt="Smart Phone Img dull"
                            />
                        )}
                    </button>
                </div>
            </div>
            <div
                style={{height: "calc(100vh - 130px)"}}
                className="flex flex-wrap xxxs:flex-wrap lg:flex-nowrap"
            >
                <div
                    className="lg:w-1/3 xxxxl:w-1/4 xxxs:w-[100%]  overflow-scroll rounded border-[1px] shadow-md border-[#EBEBEB] pt-1 ">
                    <div className="flex justify-between items-center border-b-[1px] p-2">
                        <div className="flex items-center gap-3">
                            <div
                                className="h-5 w-5 bg-[#3A37A6] text-white rounded-full flex justify-center items-center text-[10px]">
                                06
                            </div>
                            <h1 className="title-size text-[#3A37A6]">
                                Form
                            </h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src={Logos.EditIcon2}
                                alt="Copy Icon"
                                className="w-[18px] xxxxl:w-[27px]"
                            />
                            <img
                                src={Logos.DonationCopyIcon}
                                alt="Copy Icon"
                                className="w-[18px]  xxxxl:w-[27px]"
                            />
                            <img
                                src={Logos.TrashIcon1}
                                alt="Trash Icon"
                                className="w-[18px]  xxxxl:w-[27px]"
                            />
                        </div>
                    </div>
                    <div className=" flex flex-col h-full justify-between"
                    >
                        <div>
                            <h1 className="subtitle-size text-[#262626] pt-2 px-2">
                                Select interaction type
                            </h1>
                            <InteractionDropdown
                                selectedValue={"Form option"}
                                Img={Logos.MenuBoardIcon}
                            />
                            <div>
                                <ImageButtons/>
                                <div className="flex flex-col px-2 py-2 gap-2">
                                    <div className="flex justify-between gap-2 pb-2 border-b-[1px] ">
                                        <h1 className="flex items-center gap-2 subtitle-size text-[#262626]">
                                            Fit video
                                            <ToolTip/>
                                        </h1>
                                        <ToggleButton
                                            isActive={true}
                                            width="[40px]"
                                            height="[22px]"
                                        />
                                    </div>
                                    <div
                                        onClick={handleClick}
                                        className="cursor-pointer flex flex-col gap-2"
                                    >
                                        <h1 className="subtitle-size text-[#262626]">
                                            Overlay texts
                                        </h1>
                                        <textarea
                                            className=" outline-none placeholder-input-modal placeholder:leading-5 w-full resize-none min-h-[80px]  text-[#A0A0A0] text-[11px] p-2 leading-3  rounded   border-[1px] border-[#EBEBEB]"
                                            onClick={handleClick}
                                            placeholder=" Lorem is the dummy text of the printing and type setting industry. Lorem ipsum is the industry standard dummy text ever since 1500s."
                                        ></textarea>
                                    </div>
                                    <h1 className="xxxs:text-[10px]   xxxl:text-[18px] lg:text-[11px] flex pb-2 border-b-[1px] items-center gap-2 text-[#94A2F2]">
                                        Learn how to pipe in variables
                                        (e.g. name) into your overlay
                                        text.
                                        <img
                                            src={Logos.Export}
                                            alt="Export"
                                            className="w-[12px] xxxl:w-[16px]"
                                        />
                                    </h1>
                                    <div className="flex justify-between gap-2 pb-2 border-b-[1px]">
                                        <h1 className="flex items-center   gap-2 subtitle-size text-[#262626]">
                                            Delay Interaction
                                            <ToolTip/>
                                        </h1>
                                        <input
                                            type="text"
                                            placeholder="2"
                                            className="bg-[#F5F5F5] placeholder:text-black placeholder-input-modal  text-center outline-none px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px]"
                                            name=""
                                            id=""
                                        />
                                    </div>
                                    <div className="flex justify-between items-center gap-2 pb-2 border-b-[1px]">
                                        <h1 className="flex items-center   gap-2 subtitle-size text-[#262626]">
                                            Capture contact details
                                            <Tooltip/>
                                        </h1>

                                        <ToggleButton
                                            isActive={true}
                                            width="[40px]"
                                            height="[22px]"
                                        />
                                    </div>
                                    <div className="flex flex-col rounded border-[1px] p-2">
                                        <div className="text-[#A0A0A0] flex justify-between pb-1 items-center">
                                            <p className="lg:text-[13px] subtitle-size font-medium">
                                                Form title
                                            </p>

                                            <ToggleButton
                                                isActive={true}
                                                width="[40px]"
                                                height="[22px]"
                                            />
                                        </div>
                                        {toggle === true && (
                                            <p className="text-[#A0A0A0] xxxl:text-[16px] border-t-[1px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                Description
                                            </p>
                                        )}
                                        {dropdown == "text" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6]  xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3  xxxl:text-[18px] items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={Logos.Text1}
                                                                    alt=""
                                                                    className="w-[14px]"
                                                                />
                                                                <p className="xxxl:text-[18px]">
                                                                    Short answer
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px] "
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            {" "}
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkboxes
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Contact form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[16px]">
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-[#A0A0A0] cursor-pointer text-[10px] pt-2 border-dashed font-medium border-b-[1px] pb-1"
                                                    onClick={() => {
                                                        questionHandler(
                                                            !question
                                                        );
                                                    }}
                                                >
                                                    <p className="xxxl:text-[18px]">
                                                        Question...
                                                    </p>
                                                </p>
                                                {question === true && (
                                                    <div className="flex gap-2 italic xxxl:text-[18px] text-[#A0A0A0]">
                                                        <div>I</div>
                                                        <div>B</div>
                                                        <div>U</div>
                                                    </div>
                                                )}
                                                {description === true &&
                                                    response === false && (
                                                        <p className="text-[#A0A0A0] xxxl:text-[16px] border-t-[1px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                            Description
                                                        </p>
                                                    )}

                                                <p className="text-[#A0A0A0] xxxl:text-[14px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                    Answer text
                                                </p>
                                                {response === true &&
                                                    description === false && (
                                                        <div>
                                                            <div
                                                                className="lg:w-[140px] xxxs:w-[120px] border-b-[1px] mb-1">
                                                                <h1 className="flex justify-between pt-1 items-center gap-2">
                                                                    <div
                                                                        className="flex gap-4 items-center xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                        Number
                                                                    </div>
                                                                    <img
                                                                        src={
                                                                            Logos.Arrowdown
                                                                        }
                                                                        alt="Dropdown Arrow"
                                                                        onClick={() => {
                                                                            dropDown3();
                                                                        }}
                                                                        style={{
                                                                            transform:
                                                                                showDropdown3
                                                                                    ? "rotate(180deg)"
                                                                                    : "rotate(0deg)",
                                                                        }}
                                                                        className="cursor-pointer w-[16px]"
                                                                    />
                                                                </h1>
                                                                <div
                                                                    className={
                                                                        !showDropdown3
                                                                            ? "hidden"
                                                                            : "flex flex-col absolute mt-1"
                                                                    }
                                                                >
                                                                    <div
                                                                        className="bg-[#FFFFFF] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                        <div
                                                                            className="flex flex-col lg:gap-[5px] xxxs:gap-[3px]">
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Number
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Text
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Length
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Regular
                                                                                expression
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="lg:w-[160px] xxxs:w-[140px]  xxxl:w-[220px] border-b-[1px] mb-1">
                                                                <h1 className="flex justify-between pt-1 items-center gap-2">
                                                                    <div
                                                                        className="flex gap-4 items-center xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                        Greater than or
                                                                        equal
                                                                    </div>
                                                                    <img
                                                                        src={
                                                                            Logos.Arrowdown
                                                                        }
                                                                        alt="Dropdown Arrow"
                                                                        onClick={() => {
                                                                            dropDown4();
                                                                        }}
                                                                        style={{
                                                                            transform:
                                                                                showDropdown4
                                                                                    ? "rotate(180deg)"
                                                                                    : "rotate(0deg)",
                                                                        }}
                                                                        className="cursor-pointer w-[16px]"
                                                                    />
                                                                </h1>
                                                                <div
                                                                    className={
                                                                        !showDropdown4
                                                                            ? "hidden"
                                                                            : "flex flex-col absolute mt-1"
                                                                    }
                                                                >
                                                                    <div
                                                                        className="bg-[#FFFFFF] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                        <div
                                                                            className="flex flex-col lg:gap-[5px] xxxs:gap-[3px]">
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Greater than
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Greater than
                                                                                or equal to
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Less than
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Less than or
                                                                                equal to
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Equal to
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Not equal to
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Between
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Not between
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Is number
                                                                            </div>
                                                                            <div
                                                                                className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[12px] xxxs:text-[10px]">
                                                                                Whole number
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div className="flex justify-end items-center gap-1">
                                                    <img
                                                        src={Logos.CopyBtn}
                                                        alt="Copy Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <img
                                                        src={Logos.TrashIcon1}
                                                        alt="Trash Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <p className="lg:text-[12px] xxxl:text-[16px] xxxs:text-[10px]">
                                                        Required
                                                    </p>
                                                    <div
                                                        className="w-8 h-4 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked4
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked4(!checked4);
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked4
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked4
                                                                    ? "12px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src={Logos.MoreIcon}
                                                            onClick={() => {
                                                                dropDown1();
                                                            }}
                                                            alt=""
                                                            className="w-[12px] xxxl:w-[20px] cursor-pointer relative"
                                                        />
                                                        <div
                                                            className={
                                                                !showDropdown1
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute right-0"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] w-[170px] xxxl:w-[220px] shadow-sm p-3 rounded-md cursor-auto">
                                                                <div className="flex flex-col gap-2">
                                                                    <div
                                                                        className="flex gap-3 items-center cursor-pointer xxxl:text-[16px] text-[12px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                true
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Description
                                                                    </div>

                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-3 items-center cursor-pointer xxxl:text-[16px] text-[12px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Respones
                                                                        validation
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {dropdown == "paragraph" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6] xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3 items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={
                                                                        Logos.Paragraph
                                                                    }
                                                                    alt=""
                                                                    className="w-[14px] "
                                                                />

                                                                <p className="xxxl:text-[18px]">
                                                                    Paragraph
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />

                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />

                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />

                                                                        <p className=" xxxl:text-[18px] ">
                                                                            {" "}
                                                                            <p className="xxxl:text-[18px]">
                                                                                Checkboxes
                                                                            </p>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />

                                                                        <p className=" xxxl:text-[18px] ">
                                                                            {" "}
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />

                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Contact Form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />

                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />

                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />

                                                                        <p className=" xxxl:text-[16px] ">
                                                                            {" "}
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />

                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-[#A0A0A0] cursor-pointer text-[10px] pt-2 border-dashed font-medium border-b-[1px] pb-1"
                                                    onClick={() => {
                                                        questionHandler(
                                                            !question
                                                        );
                                                    }}
                                                >
                                                    <p className="xxxl:text-[18px]">
                                                        {" "}
                                                        Question...
                                                    </p>
                                                </p>
                                                {question === true && (
                                                    <div className="flex gap-2 italic xxxl:text-[18px] text-[#A0A0A0]">
                                                        <div>I</div>
                                                        <div>B</div>
                                                        <div>U</div>
                                                    </div>
                                                )}
                                                {description === true &&
                                                    response === false && (
                                                        <p className="text-[#A0A0A0] border-t-[1px] xxxl:text-[16px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                            Description
                                                        </p>
                                                    )}

                                                <p className="text-[#A0A0A0] xxxl:text-[14px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                    Answer text
                                                </p>
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div className="flex justify-end items-center gap-1">
                                                    <img
                                                        src={Logos.CopyBtn}
                                                        alt="Copy Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <img
                                                        src={Logos.TrashIcon1}
                                                        alt="Trash Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <p className="lg:text-[12px] xxxl:text-[16px] xxxs:text-[10px]">
                                                        Required
                                                    </p>
                                                    <div
                                                        className="w-8 h-4 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked4
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked4(!checked4);
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked4
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked4
                                                                    ? "12px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src={Logos.MoreIcon}
                                                            onClick={() => {
                                                                dropDown1();
                                                            }}
                                                            alt=""
                                                            className="w-[12px] xxxl:w-[20px] cursor-pointer relative"
                                                        />
                                                        <div
                                                            className={
                                                                !showDropdown1
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute right-0"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] w-[170px] xxxl:w-[220px] shadow-sm p-3 rounded-md cursor-auto">
                                                                <div className="flex flex-col gap-2">
                                                                    <div
                                                                        className="flex gap-3 items-center cursor-pointer xxxl:text-[16px] text-[12px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                true
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Description
                                                                    </div>

                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-3 items-center cursor-pointer xxxl:text-[16px] text-[12px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Respones
                                                                        validation
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {dropdown == "mcqs" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6] xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3 items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={Logos.Mcqs}
                                                                    alt=""
                                                                    className="w-[14px]"
                                                                />
                                                                <p className="xxxl:text-[18px]">
                                                                    Multiple choice
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkboxes
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Contact Form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[16px]">
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-[#A0A0A0] cursor-pointer text-[10px] pt-2 border-dashed font-medium border-b-[1px] pb-1"
                                                    onClick={() => {
                                                        questionHandler(
                                                            !question
                                                        );
                                                    }}
                                                >
                                                    <p className="xxxl:text-[18px]">
                                                        {" "}
                                                        Question...
                                                    </p>
                                                </p>
                                                {question === true && (
                                                    <div className="flex gap-2 italic xxxl:text-[18px] text-[#A0A0A0]">
                                                        <div>I</div>
                                                        <div>B</div>
                                                        <div>U</div>
                                                    </div>
                                                )}
                                                {description === true &&
                                                    response === false &&
                                                    shuffle === false && (
                                                        <p className="text-[#A0A0A0] border-t-[1px] xxxl:text-[16px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                            Description
                                                        </p>
                                                    )}

                                                <p className="flex gap-1 text-[#A0A0A0] xxxl:text-[16px] text-[10px] pt-2">
                                                    <input
                                                        type="radio"
                                                        name=""
                                                        id=""
                                                    />
                                                    Option 1
                                                </p>
                                                {option === true && (
                                                    <p className="flex justify-between items-center text-[#A0A0A0]  xxxl:text-[16px] text-[10px] pt-2">
                                                        <div className="flex gap-1">
                                                            <input
                                                                type="radio"
                                                                name=""
                                                                id=""
                                                            />
                                                            Option 2
                                                        </div>
                                                        <p
                                                            className="cursor-pointer"
                                                            onClick={() => {
                                                                optionHandler(
                                                                    !option
                                                                );
                                                            }}
                                                        >
                                                            X
                                                        </p>
                                                    </p>
                                                )}
                                                <p
                                                    className="flex gap-1 text-[#A0A0A0] cursor-pointer  xxxl:text-[16px] text-[10px] pt-2"
                                                    onClick={() => {
                                                        optionHandler(true);
                                                    }}
                                                >
                                                    <input
                                                        type="radio"
                                                        name=""
                                                        id=""
                                                    />
                                                    Option Or
                                                    <p className="text-[#3A37A6]">
                                                        {" "}
                                                        Add "Other"
                                                    </p>
                                                </p>
                                                {response === true &&
                                                    description === false &&
                                                    shuffle === false && (
                                                        <div className="w-[160px] xxxl:w-[230px] border-b-[1px] mb-1">
                                                            <h1 className="flex justify-between pt-1 items-center gap-2">
                                                                <div
                                                                    className="flex gap-2 items-center xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                    Continue to next
                                                                    section
                                                                </div>
                                                                <img
                                                                    src={
                                                                        Logos.Arrowdown
                                                                    }
                                                                    alt="Dropdown Arrow"
                                                                    onClick={() => {
                                                                        dropDown3();
                                                                    }}
                                                                    style={{
                                                                        transform:
                                                                            showDropdown3
                                                                                ? "rotate(180deg)"
                                                                                : "rotate(0deg)",
                                                                    }}
                                                                    className="cursor-pointer w-[16px]"
                                                                />
                                                            </h1>
                                                            <div
                                                                className={
                                                                    !showDropdown3
                                                                        ? "hidden"
                                                                        : "flex flex-col absolute mt-1"
                                                                }
                                                            >
                                                                <div
                                                                    className="bg-[#FFFFFF] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                    <div
                                                                        className="flex flex-col lg:gap-[5px] xxxs:gap-[3px]">
                                                                        <div
                                                                            className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                            Continue to next
                                                                            section
                                                                        </div>
                                                                        <div
                                                                            className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                            Go to section 1
                                                                        </div>
                                                                        <div
                                                                            className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                            Submit form
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div className="flex justify-end items-center gap-1">
                                                    <img
                                                        src={Logos.CopyBtn}
                                                        alt="Copy Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <img
                                                        src={Logos.TrashIcon1}
                                                        alt="Trash Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <p className="lg:text-[12px] xxxl:text-[16px] xxxs:text-[10px]">
                                                        Required
                                                    </p>
                                                    <div
                                                        className="w-8 h-4 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked4
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked4(!checked4);
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked4
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked4
                                                                    ? "12px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src={Logos.MoreIcon}
                                                            onClick={() => {
                                                                dropDown1();
                                                            }}
                                                            alt=""
                                                            className="w-[12px] xxxl:w-[20px] cursor-pointer relative"
                                                        />
                                                        <div
                                                            className={
                                                                !showDropdown1
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute right-0"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:w-[220px] xxxl:w-[300px] xxxs:w-[200px] shadow-sm p-3 rounded-md cursor-auto">
                                                                <div className="flex flex-col gap-2">
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center xxxl:text-[16px] cursor-pointer lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                true
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Description
                                                                    </div>

                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                true
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Go to section
                                                                        based on answer
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Shuffle option
                                                                        order
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {dropdown == "checkbox" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6] xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3 items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={Logos.Checkbox}
                                                                    alt=""
                                                                    className="w-[14px]"
                                                                />
                                                                <p className="xxxl:text-[18px]">
                                                                    Checkbox
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkboxes
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Contact Form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[16px]">
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-[#A0A0A0] cursor-pointer text-[10px] pt-2 border-dashed font-medium border-b-[1px] pb-1"
                                                    onClick={() => {
                                                        questionHandler(
                                                            !question
                                                        );
                                                    }}
                                                >
                                                    <p className="xxxl:text-[18px]">
                                                        {" "}
                                                        Question...
                                                    </p>
                                                </p>
                                                {question === true && (
                                                    <div className="flex gap-2 italic xxxl:text-[18px] text-[#A0A0A0]">
                                                        <div>I</div>
                                                        <div>B</div>
                                                        <div>U</div>
                                                    </div>
                                                )}
                                                {description === true &&
                                                    response === false &&
                                                    shuffle === false && (
                                                        <p className="text-[#A0A0A0] border-t-[1px] xxxl:text-[16px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                            Description
                                                        </p>
                                                    )}

                                                <p className="flex gap-1 text-[#A0A0A0] xxxl:text-[16px] text-[10px] pt-2">
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                    />
                                                    Option 1
                                                </p>
                                                {option === true && (
                                                    <p className="flex justify-between items-center xxxl:text-[16px] text-[#A0A0A0] text-[10px] pt-2">
                                                        <div className="flex gap-1">
                                                            <input
                                                                type="checkbox"
                                                                name=""
                                                                id=""
                                                            />
                                                            Option 2
                                                        </div>
                                                        <p
                                                            className="cursor-pointer"
                                                            onClick={() => {
                                                                optionHandler(
                                                                    !option
                                                                );
                                                            }}
                                                        >
                                                            X
                                                        </p>
                                                    </p>
                                                )}
                                                <p
                                                    className="flex gap-1 text-[#A0A0A0] cursor-pointer xxxl:text-[16px] text-[10px] pt-2"
                                                    onClick={() => {
                                                        optionHandler(true);
                                                    }}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                    />
                                                    Option Or
                                                    <p className="text-[#3A37A6]">
                                                        {" "}
                                                        Add "Other"
                                                    </p>
                                                </p>
                                                {response === true &&
                                                    description === false &&
                                                    shuffle === false && (
                                                        <div className="w-[120px] xxxl:w-[160px] border-b-[1px] mb-1">
                                                            <h1 className="flex justify-between pt-1 items-center gap-2">
                                                                <div
                                                                    className="flex gap-2 items-center xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                    Select at least
                                                                </div>
                                                                <img
                                                                    src={
                                                                        Logos.Arrowdown
                                                                    }
                                                                    alt="Dropdown Arrow"
                                                                    onClick={() => {
                                                                        dropDown3();
                                                                    }}
                                                                    style={{
                                                                        transform:
                                                                            showDropdown3
                                                                                ? "rotate(180deg)"
                                                                                : "rotate(0deg)",
                                                                    }}
                                                                    className="cursor-pointer w-[16px]"
                                                                />
                                                            </h1>
                                                            <div
                                                                className={
                                                                    !showDropdown3
                                                                        ? "hidden"
                                                                        : "flex flex-col absolute mt-1"
                                                                }
                                                            >
                                                                <div
                                                                    className="bg-[#FFFFFF] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                    <div
                                                                        className="flex flex-col lg:gap-[5px] xxxs:gap-[3px]">
                                                                        <div
                                                                            className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                            Select at least
                                                                        </div>
                                                                        <div
                                                                            className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                            Select at most
                                                                        </div>
                                                                        <div
                                                                            className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                            Select exactly
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div className="flex justify-end items-center gap-1">
                                                    <img
                                                        src={Logos.CopyBtn}
                                                        alt="Copy Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <img
                                                        src={Logos.TrashIcon1}
                                                        alt="Trash Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <p className="lg:text-[12px] xxxl:text-[16px] xxxs:text-[10px]">
                                                        Required
                                                    </p>
                                                    <div
                                                        className="w-8 h-4 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked4
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked4(!checked4);
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked4
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked4
                                                                    ? "12px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src={Logos.MoreIcon}
                                                            onClick={() => {
                                                                dropDown1();
                                                            }}
                                                            alt=""
                                                            className="w-[12px] xxxl:w-[20px] cursor-pointer relative"
                                                        />
                                                        <div
                                                            className={
                                                                !showDropdown1
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute right-0"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:w-[170px] xxxl:w-[230px] xxxs:w-[150px] shadow-sm p-3 rounded-md cursor-auto">
                                                                <div className="flex flex-col gap-2">
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center xxxl:text-[16px] cursor-pointer lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                true
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Description
                                                                    </div>

                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                true
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Response
                                                                        validation
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Shuffle option
                                                                        order
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {dropdown == "dropdown" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6] xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3 items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={Logos.Dropdown}
                                                                    alt=""
                                                                    className="w-[14px]"
                                                                />
                                                                <p className="xxxl:text-[18px]">
                                                                    Dropdown
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkboxes
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Contact Form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[16px]">
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-[#A0A0A0] cursor-pointer text-[10px] pt-2 border-dashed font-medium border-b-[1px] pb-1"
                                                    onClick={() => {
                                                        questionHandler(
                                                            !question
                                                        );
                                                    }}
                                                >
                                                    <p className="xxxl:text-[18px]">
                                                        {" "}
                                                        Question...
                                                    </p>
                                                </p>
                                                {question === true && (
                                                    <div className="flex gap-2 italic xxxl:text-[18px] text-[#A0A0A0]">
                                                        <div>I</div>
                                                        <div>B</div>
                                                        <div>U</div>
                                                    </div>
                                                )}
                                                {description === true &&
                                                    response === false &&
                                                    shuffle === false && (
                                                        <p className="text-[#A0A0A0] border-t-[1px] xxxl:text-[16px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                            Description
                                                        </p>
                                                    )}

                                                <p className="flex gap-1 text-[#A0A0A0]  xxxl:text-[16px] text-[10px] pt-2">
                                                    1 . Option
                                                </p>
                                                {option === true && (
                                                    <p className="flex justify-between items-center text-[#A0A0A0] xxxl:text-[16px] text-[10px] pt-2">
                                                        <div className="flex gap-1">
                                                            2 . Option
                                                        </div>
                                                        <p
                                                            className="cursor-pointer"
                                                            onClick={() => {
                                                                optionHandler(
                                                                    !option
                                                                );
                                                            }}
                                                        >
                                                            X
                                                        </p>
                                                    </p>
                                                )}
                                                <p
                                                    className="flex gap-1 text-[#A0A0A0] cursor-pointer xxxl:text-[16px] text-[10px] pt-2"
                                                    onClick={() => {
                                                        optionHandler(true);
                                                    }}
                                                >
                                                    2 .
                                                    <p className="text-[#3A37A6]">
                                                        {" "}
                                                        Add "Other"
                                                    </p>
                                                </p>
                                                {response === true &&
                                                    description === false &&
                                                    shuffle === false && (
                                                        <div className="w-[160px] xxxl:w-[230px] border-b-[1px] mb-1">
                                                            <h1 className="flex justify-between pt-1 items-center gap-2">
                                                                <div
                                                                    className="flex gap-2 items-center xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                    Continue to next
                                                                    section
                                                                </div>
                                                                <img
                                                                    src={
                                                                        Logos.Arrowdown
                                                                    }
                                                                    alt="Dropdown Arrow"
                                                                    onClick={() => {
                                                                        dropDown3();
                                                                    }}
                                                                    style={{
                                                                        transform:
                                                                            showDropdown3
                                                                                ? "rotate(180deg)"
                                                                                : "rotate(0deg)",
                                                                    }}
                                                                    className="cursor-pointer w-[16px]"
                                                                />
                                                            </h1>
                                                            <div
                                                                className={
                                                                    !showDropdown3
                                                                        ? "hidden"
                                                                        : "flex flex-col absolute mt-1"
                                                                }
                                                            >
                                                                <div
                                                                    className="bg-[#FFFFFF] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                    <div
                                                                        className="flex flex-col lg:gap-[5px] xxxs:gap-[3px]">
                                                                        <div
                                                                            className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                            Continue to next
                                                                            section
                                                                        </div>
                                                                        <div
                                                                            className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                            Go to section 1
                                                                        </div>
                                                                        <div
                                                                            className="flex gap-4 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                                            Submit form
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div className="flex justify-end items-center gap-1">
                                                    <img
                                                        src={Logos.CopyBtn}
                                                        alt="Copy Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <img
                                                        src={Logos.TrashIcon1}
                                                        alt="Trash Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <p className="lg:text-[12px] xxxl:text-[16px] xxxs:text-[10px]">
                                                        Required
                                                    </p>
                                                    <div
                                                        className="w-8 h-4 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked4
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked4(!checked4);
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked4
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked4
                                                                    ? "12px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src={Logos.MoreIcon}
                                                            onClick={() => {
                                                                dropDown1();
                                                            }}
                                                            alt=""
                                                            className="w-[12px] xxxl:w-[20px] cursor-pointer relative"
                                                        />
                                                        <div
                                                            className={
                                                                !showDropdown1
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute right-0"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:w-[170px] xxxl:w-[230px] xxxs:w-[150px] shadow-sm p-3 rounded-md cursor-auto">
                                                                <div className="flex flex-col gap-2">
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center xxxl:text-[16px] cursor-pointer lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                true
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Description
                                                                    </div>

                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                true
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Response
                                                                        validation
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Shuffle option
                                                                        order
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {dropdown == "contactform" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6] xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3 items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={
                                                                        Logos.MenuBoardBlack
                                                                    }
                                                                    alt=""
                                                                    className="w-[14px]"
                                                                />
                                                                <p className="xxxl:text-[18px]">
                                                                    Contact Form
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkboxes
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Contact Form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[16px]">
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div className=" flex py-1 gap-2 items-center">
                                                        <p className="lg:text-[12px] xxxl:text-[16px] xxxs:text-[11px]">
                                                            Information collection
                                                        </p>
                                                        <ToolTip/>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                First Name
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />

                                                            <p className="flex text-[20px] xxxl:text-[26px] pl-1">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                Last Name
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />

                                                            <p className="flex text-[20px]  xxxl:text-[26px] pl-1">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                Organization
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />

                                                            <p className="flex text-[20px]  xxxl:text-[26px] pl-1 text-[#A0A0A0]">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                Email
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />

                                                            <p className="flex text-[20px]  xxxl:text-[26px] pl-1">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                Phone
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />

                                                            <p className="flex text-[20px] xxxl:text-[26px] pl-1">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                Address
                                                            </p>
                                                        </div>

                                                        <div className="flex items-center">
                                                            <div
                                                                className="w-10 h-5 xxxxl:w-[64px] xxxxl:h-[30px] cursor-pointer rounded-2xl bg-[#F5F5F5] flex items-center p-1"
                                                                style={{
                                                                    backgroundColor:
                                                                        checked5
                                                                            ? "#E7EEF9"
                                                                            : "#F5F5F5",
                                                                }}
                                                                onClick={() => {
                                                                    setChecked5(
                                                                        !checked5
                                                                    );
                                                                    toggleHandler1(
                                                                        !toggle1
                                                                    );
                                                                }}
                                                            >
                                                                <div
                                                                    className={`w-4 h-4 xxxxl:w-5 xxxxl:h-5 bg-[#3A37A6] rounded-xl cursor-pointer duration-200 ease-linear
                                  ${checked5 ? "bg-[#3A37A6] lg:ml-[16px] xxxxl:ml-[35px]" : "bg-[#A0A0A0] ml-[0px]"}
                                  `}
                                                                ></div>
                                                            </div>
                                                            <p className="flex text-[20px]  xxxl:text-[26px] pl-1 text-[#A0A0A0]">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                Address format
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={false}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />

                                                            <p className="flex text-[20px] xxxl:text-[26px] pl-1 text-[#A0A0A0]">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                Street Address
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={false}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                            <p className="flex text-[20px] xxxl:text-[26px] pl-1 text-[#A0A0A0]">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                City
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={false}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                            <p className="flex text-[20px] xxxl:text-[26px] pl-1 text-[#A0A0A0]">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                State
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={false}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                            <p className="flex text-[20px] xxxl:text-[26px] pl-1 text-[#A0A0A0]">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                Zip code
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={false}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                            <p className="flex text-[20px] xxxl:text-[26px] pl-1 text-[#A0A0A0]">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-1">
                                                            <p className="subtitle-size">
                                                                Employment
                                                            </p>
                                                            <ToolTip/>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={true}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                            <p className="flex text-[20px] xxxl:text-[26px] pl-1 text-[#A0A0A0]">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <p className="subtitle-size">
                                                                Contact from consent
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <ToggleButton
                                                                isActive={false}
                                                                width="[40px]"
                                                                height="[22px]"
                                                            />
                                                            <p className="flex text-[20px] xxxl:text-[26px] pl-1">
                                                                *
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className=" h-[90px] p-3  rounded shadow-md">
                                                        <p className="subtitle-size text-[#A0A0A0]">
                                                            Please subscribe me to
                                                            your mailing list and
                                                            send periodic updates
                                                            and offers.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {dropdown == "fileupload" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6] xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3 items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={
                                                                        Logos.CloudPlus
                                                                    }
                                                                    alt=""
                                                                    className="w-[14px]"
                                                                />
                                                                <p className="xxxl:text-[18px]">
                                                                    File upload
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkboxes
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Contact Form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[16px]">
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-[#A0A0A0] cursor-pointer text-[10px] pt-2 border-dashed font-medium border-b-[1px] pb-1"
                                                    onClick={() => {
                                                        questionHandler(
                                                            !question
                                                        );
                                                    }}
                                                >
                                                    <p className="xxxl:text-[18px]">
                                                        {" "}
                                                        Question...
                                                    </p>
                                                </p>
                                                {question === true && (
                                                    <div className="flex gap-2 italic xxxl:text-[18px] text-[#A0A0A0]">
                                                        <div>I</div>
                                                        <div>B</div>
                                                        <div>U</div>
                                                    </div>
                                                )}
                                                {description === true && (
                                                    <p className="text-[#A0A0A0] border-t-[1px] xxxl:text-[16px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                        Description
                                                    </p>
                                                )}
                                                <div className=" flex py-1 gap-2 items-center">
                                                    <p className="subtitle-size">
                                                        Allow only specific file
                                                        type
                                                    </p>
                                                    <div
                                                        className="w-10 h-5 cursor-pointer rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked6
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked6(!checked6);
                                                            toggleHandler1(
                                                                !toggle1
                                                            );
                                                        }}
                                                    >
                                                        <div
                                                            className="w-4 h-4 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked6
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked6
                                                                    ? "16px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                                {toggle1 === true && (
                                                    <div className="flex flex-col gap-1">
                                                        <div
                                                            className="grid grid-cols-2 lg:text-[9px] xxxl:text-[16px] xxxs:text-[8px] lg:gap-2 xxxs:gap-1 mt-1 text-[#A0A0A0]">
                                                            <div className="flex flex-col gap-[6px]">
                                                                <div className=" inner-size flex gap-1">
                                                                    <input
                                                                        type="checkbox"
                                                                        name=""
                                                                        id=""
                                                                    />
                                                                    Document
                                                                </div>
                                                                <div className="flex gap-1 inner-size">
                                                                    <input
                                                                        type="checkbox"
                                                                        name=""
                                                                        id=""
                                                                    />
                                                                    Presentataion
                                                                </div>
                                                                <div className="flex gap-1 inner-size">
                                                                    <input
                                                                        type="checkbox"
                                                                        name=""
                                                                        id=""
                                                                    />
                                                                    PDF
                                                                </div>
                                                                <div className="flex gap-1 inner-size">
                                                                    <input
                                                                        type="checkbox"
                                                                        name=""
                                                                        id=""
                                                                    />
                                                                    Video
                                                                </div>
                                                            </div>
                                                            <div className=" flex flex-col gap-[6px]">
                                                                <div className="flex gap-1 inner-size">
                                                                    <input
                                                                        type="checkbox"
                                                                        name=""
                                                                        id=""
                                                                    />
                                                                    Spreadsheet
                                                                </div>
                                                                <div className="flex gap-1 inner-size">
                                                                    <input
                                                                        type="checkbox"
                                                                        name=""
                                                                        id=""
                                                                    />
                                                                    Drawing
                                                                </div>
                                                                <div className="flex gap-1 inner-size">
                                                                    <input
                                                                        type="checkbox"
                                                                        name=""
                                                                        id=""
                                                                    />
                                                                    Image
                                                                </div>
                                                                <div className="flex gap-1 inner-size">
                                                                    <input
                                                                        type="checkbox"
                                                                        name=""
                                                                        id=""
                                                                    />
                                                                    Audio
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex justify-between gap-1 subtitle-size">
                                                        <p>
                                                            Maximum number of files
                                                        </p>
                                                        <div className="flex gap-1">
                                                            1
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt=""
                                                                className="w-[16px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between gap-1 subtitle-size">
                                                        <p>Maximum file size</p>
                                                        <div className="flex gap-1">
                                                            10 MB
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt=""
                                                                className="w-[16px]"
                                                            />
                                                        </div>
                                                    </div>

                                                    <p className="text-[#A0A0A0] inner-size">
                                                        This form can accept upto
                                                        1 GB of files
                                                    </p>
                                                </div>
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div className="flex justify-end items-center gap-1">
                                                    <img
                                                        src={Logos.CopyBtn}
                                                        alt="Copy Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <img
                                                        src={Logos.TrashIcon1}
                                                        alt="Trash Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <p className="inner-size">
                                                        Required
                                                    </p>
                                                    <div
                                                        className="w-8 h-4 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked4
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked4(!checked4);
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked4
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked4
                                                                    ? "12px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src={Logos.MoreIcon}
                                                            onClick={() => {
                                                                dropDown1();
                                                            }}
                                                            alt=""
                                                            className="w-[12px] xxxl:w-[20px] cursor-pointer relative"
                                                        />
                                                        <div
                                                            className={
                                                                !showDropdown1
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute right-0"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:w-[140px] xxxs:w-[130px] shadow-sm p-3 rounded-md cursor-auto">
                                                                <div className="flex flex-col gap-2">
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center xxxl:text-[16px] cursor-pointer lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                true
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Description
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {dropdown == "scale" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6] xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3 items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={Logos.Scale}
                                                                    alt=""
                                                                    className="w-[14px]"
                                                                />
                                                                <p className="xxxl:text-[18px]">
                                                                    Linear sc..
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkboxes
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Contact Form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[16px]">
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-[#A0A0A0] cursor-pointer text-[10px] pt-2 border-dashed font-medium border-b-[1px] pb-1"
                                                    onClick={() => {
                                                        questionHandler(
                                                            !question
                                                        );
                                                    }}
                                                >
                                                    <p className="xxxl:text-[18px]">
                                                        {" "}
                                                        Question...
                                                    </p>
                                                </p>
                                                {question === true && (
                                                    <div className="flex gap-2 italic xxxl:text-[18px] text-[#A0A0A0]">
                                                        <div>I</div>
                                                        <div>B</div>
                                                        <div>U</div>
                                                    </div>
                                                )}
                                                {description === true && (
                                                    <p className="text-[#A0A0A0] border-t-[1px] xxxl:text-[16px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                        Description
                                                    </p>
                                                )}
                                                <div className="flex flex-col gap-1 pt-1">
                                                    <div
                                                        className="flex gap-1 xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]">
                                                        <div className="flex gap-1">
                                                            1
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt=""
                                                                className="w-[12px]"
                                                            />
                                                        </div>
                                                        to
                                                        <div className="flex gap-1">
                                                            5
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt=""
                                                                className="w-[12px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <p className="text-[#A0A0A0] xxxl:text-[16px] lg:text-[9px] xxxs:text-[8px]">
                                                        1 . Label (optional)
                                                    </p>
                                                    <p className="text-[#A0A0A0] xxxl:text-[16px] lg:text-[9px] xxxs:text-[8px]">
                                                        5 . Label (optional)
                                                    </p>
                                                </div>
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div className="flex justify-end items-center gap-1">
                                                    <img
                                                        src={Logos.CopyBtn}
                                                        alt="Copy Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <img
                                                        src={Logos.TrashIcon1}
                                                        alt="Trash Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <p className="lg:text-[12px] xxxl:text-[16px] xxxs:text-[10px]">
                                                        Required
                                                    </p>
                                                    <div
                                                        className="w-8 h-4 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked4
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked4(!checked4);
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked4
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked4
                                                                    ? "12px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src={Logos.MoreIcon}
                                                            onClick={() => {
                                                                dropDown1();
                                                            }}
                                                            alt=""
                                                            className="w-[12px] xxxl:w-[20px] cursor-pointer relative"
                                                        />
                                                        <div
                                                            className={
                                                                !showDropdown1
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute right-0"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:w-[140px] xxxs:w-[130px] shadow-sm p-3 rounded-md cursor-auto">
                                                                <div className="flex flex-col gap-2">
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                true
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Description
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {dropdown == "choicegrid" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6] xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3 items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={
                                                                        Logos.ChoiceGrid
                                                                    }
                                                                    alt=""
                                                                    className="w-[14px]"
                                                                />
                                                                <p className="xxxl:text-[13px]">
                                                                    Multiple choice grid
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkboxes
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Contact Form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[16px]">
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-[#A0A0A0] cursor-pointer text-[10px] pt-2 border-dashed font-medium border-b-[1px] pb-1"
                                                    onClick={() => {
                                                        questionHandler(
                                                            !question
                                                        );
                                                    }}
                                                >
                                                    <p className="xxxl:text-[18px]">
                                                        {" "}
                                                        Question...
                                                    </p>
                                                </p>
                                                {question === true && (
                                                    <div className="flex gap-2 italic xxxl:text-[18px] text-[#A0A0A0]">
                                                        <div>I</div>
                                                        <div>B</div>
                                                        <div>U</div>
                                                    </div>
                                                )}
                                                {description === true && (
                                                    <p className="text-[#A0A0A0] border-t-[1px] xxxl:text-[16px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                        Description
                                                    </p>
                                                )}
                                                <p className="flex gap-1 text-[10px] xxxl:text-[16px] pt-2 font-medium">
                                                    Row
                                                </p>
                                                <p className="flex gap-1 xxxl:text-[16px] text-[10px] pt-2">
                                                    1 . Row
                                                </p>
                                                {option === true && (
                                                    <p className="flex justify-between items-center xxxl:text-[16px] text-[10px] pt-2">
                                                        <div className="flex gap-1">
                                                            2 . Row
                                                        </div>
                                                        <p
                                                            className="cursor-pointer"
                                                            onClick={() => {
                                                                optionHandler(
                                                                    !option
                                                                );
                                                            }}
                                                        >
                                                            X
                                                        </p>
                                                    </p>
                                                )}
                                                <p
                                                    className="flex gap-1 cursor-pointer xxxl:text-[16px] text-[10px] pt-2"
                                                    onClick={() => {
                                                        optionHandler(true);
                                                    }}
                                                >
                                                    3 .
                                                    <p className="text-[#3A37A6]">
                                                        {" "}
                                                        Add Row
                                                    </p>
                                                </p>
                                                <p className="flex gap-1 xxxl:text-[16px] text-[10px] pt-2 font-medium">
                                                    columns
                                                </p>
                                                <p className="flex gap-1 text-[10px] xxxl:text-[16px] pt-2">
                                                    1 . Columns
                                                </p>
                                                {option === true && (
                                                    <p className="flex justify-between items-center xxxl:text-[16px] text-[10px] pt-2">
                                                        <div className="flex gap-1">
                                                            2 . Columns
                                                        </div>
                                                        <p
                                                            className="cursor-pointer"
                                                            onClick={() => {
                                                                optionHandler(
                                                                    !option
                                                                );
                                                            }}
                                                        >
                                                            X
                                                        </p>
                                                    </p>
                                                )}
                                                <p
                                                    className="flex gap-1 cursor-pointer xxxl:text-[16px] text-[10px] pt-2"
                                                    onClick={() => {
                                                        optionHandler(true);
                                                    }}
                                                >
                                                    3 .
                                                    <p className="text-[#3A37A6]">
                                                        {" "}
                                                        Add Columns
                                                    </p>
                                                </p>
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div className="flex justify-end items-center gap-1">
                                                    <img
                                                        src={Logos.CopyBtn}
                                                        alt="Copy Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <img
                                                        src={Logos.TrashIcon1}
                                                        alt="Trash Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <p className="lg:text-[12px] xxxl:text-[16px] xxxs:text-[10px]">
                                                        Required
                                                    </p>
                                                    <div
                                                        className="w-8 h-4 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked4
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked4(!checked4);
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked4
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked4
                                                                    ? "12px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src={Logos.MoreIcon}
                                                            onClick={() => {
                                                                dropDown1();
                                                            }}
                                                            alt=""
                                                            className="w-[12px] xxxl:w-[20px] cursor-pointer relative"
                                                        />
                                                        <div
                                                            className={
                                                                !showDropdown1
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute right-0"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:w-[230px] xxxl:w-[330px] xxxs:w-[210px] shadow-sm p-3 rounded-md cursor-auto">
                                                                <div className="flex flex-col gap-2">
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                true
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Description
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                true
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Limit to one
                                                                        response per
                                                                        column
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Shuffle option
                                                                        order
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {dropdown == "checkboxgrid" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6] xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3 items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={
                                                                        Logos.CheckboxGrid
                                                                    }
                                                                    alt=""
                                                                    className="w-[14px]"
                                                                />
                                                                <p className="xxxl:text-[13px]">
                                                                    Checkbox grid
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkboxes
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Contact Form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[16px]">
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-[#A0A0A0] cursor-pointer text-[10px] pt-2 border-dashed font-medium border-b-[1px] pb-1"
                                                    onClick={() => {
                                                        questionHandler(
                                                            !question
                                                        );
                                                    }}
                                                >
                                                    <p className="xxxl:text-[18px]">
                                                        {" "}
                                                        Question...
                                                    </p>
                                                </p>
                                                {question === true && (
                                                    <div className="flex gap-2 italic xxxl:text-[18px] text-[#A0A0A0]">
                                                        <div>I</div>
                                                        <div>B</div>
                                                        <div>U</div>
                                                    </div>
                                                )}
                                                {description === true && (
                                                    <p className="text-[#A0A0A0] border-t-[1px] xxxl:text-[16px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                        Description
                                                    </p>
                                                )}
                                                <p className="flex gap-1 xxxl:text-[16px] text-[10px] pt-2 font-medium">
                                                    Row
                                                </p>
                                                <p className="flex gap-1 xxxl:text-[16px] text-[10px] pt-2">
                                                    1 . Row
                                                </p>
                                                {option === true && (
                                                    <p className="flex justify-between items-center xxxl:text-[16px] text-[10px] pt-2">
                                                        <div className="flex gap-1">
                                                            2 . Row
                                                        </div>
                                                        <p
                                                            className="cursor-pointer"
                                                            onClick={() => {
                                                                optionHandler(
                                                                    !option
                                                                );
                                                            }}
                                                        >
                                                            X
                                                        </p>
                                                    </p>
                                                )}
                                                <p
                                                    className="flex gap-1 cursor-pointer xxxl:text-[16px] text-[10px] pt-2"
                                                    onClick={() => {
                                                        optionHandler(true);
                                                    }}
                                                >
                                                    3 .
                                                    <p className="text-[#3A37A6]">
                                                        {" "}
                                                        Add Row
                                                    </p>
                                                </p>
                                                <p className="flex gap-1 xxxl:text-[16px] text-[10px] pt-2 font-medium">
                                                    columns
                                                </p>
                                                <p className="flex gap-1 xxxl:text-[16px] text-[10px] pt-2">
                                                    1 . Columns
                                                </p>
                                                {option === true && (
                                                    <p className="flex justify-between items-center xxxl:text-[16px] text-[10px] pt-2">
                                                        <div className="flex gap-1">
                                                            2 . Columns
                                                        </div>
                                                        <p
                                                            className="cursor-pointer"
                                                            onClick={() => {
                                                                optionHandler(
                                                                    !option
                                                                );
                                                            }}
                                                        >
                                                            X
                                                        </p>
                                                    </p>
                                                )}
                                                <p
                                                    className="flex gap-1 cursor-pointer xxxl:text-[16px] text-[10px] pt-2"
                                                    onClick={() => {
                                                        optionHandler(true);
                                                    }}
                                                >
                                                    3 .
                                                    <p className="text-[#3A37A6]">
                                                        {" "}
                                                        Add Columns
                                                    </p>
                                                </p>
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div className="flex justify-end items-center gap-1">
                                                    <img
                                                        src={Logos.CopyBtn}
                                                        alt="Copy Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <img
                                                        src={Logos.TrashIcon1}
                                                        alt="Trash Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <p className="lg:text-[12px] xxxl:text-[16px] xxxs:text-[10px]">
                                                        Required
                                                    </p>
                                                    <div
                                                        className="w-8 h-4 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked4
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked4(!checked4);
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked4
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked4
                                                                    ? "12px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src={Logos.MoreIcon}
                                                            onClick={() => {
                                                                dropDown1();
                                                            }}
                                                            alt=""
                                                            className="w-[12px] xxxl:w-[20px] cursor-pointer relative"
                                                        />
                                                        <div
                                                            className={
                                                                !showDropdown1
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute right-0"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:w-[230px] xxxl:w-[330px] xxxs:w-[210px] shadow-sm p-3 rounded-md cursor-auto">
                                                                <div className="flex flex-col gap-2">
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center xxxl:text-[16px] cursor-pointer lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                true
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Description
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                true
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Limit to one
                                                                        response per
                                                                        column
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Shuffle option
                                                                        order
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {dropdown == "date" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6] xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3 items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={
                                                                        Logos.DateBlack
                                                                    }
                                                                    alt=""
                                                                    className="w-[14px]"
                                                                />
                                                                <p className="xxxl:text-[18px]">
                                                                    Date
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkboxes
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Contact Form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[16px]">
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-[#A0A0A0] cursor-pointer text-[10px] pt-2 border-dashed font-medium border-b-[1px] pb-1"
                                                    onClick={() => {
                                                        questionHandler(
                                                            !question
                                                        );
                                                    }}
                                                >
                                                    <p className="xxxl:text-[18px]">
                                                        {" "}
                                                        Question...
                                                    </p>
                                                </p>
                                                {question === true && (
                                                    <div className="flex gap-2 italic xxxl:text-[18px] text-[#A0A0A0]">
                                                        <div>I</div>
                                                        <div>B</div>
                                                        <div>U</div>
                                                    </div>
                                                )}
                                                {description === true &&
                                                    response === false &&
                                                    shuffle === false && (
                                                        <p className="text-[#A0A0A0] border-t-[1px] xxxl:text-[16px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                            Description
                                                        </p>
                                                    )}
                                                <div className="flex justify-between">
                                                    <input
                                                        type="text"
                                                        placeholder="30/11/2022"
                                                        className="lg:w-[160px] mt-1 xxxs:w-full xxxl:text-[16px] border-b-[1px] border-dashed h-[20px] text-[10px] outline-none text-[#A0A0A0]"
                                                    />
                                                    <img
                                                        src={Logos.DateBlack}
                                                        alt=""
                                                        className="w-[12px] xxxl:w-[20px]"
                                                    />
                                                </div>
                                                {response === true &&
                                                    description === false &&
                                                    shuffle === false && (
                                                        <div className="flex justify-between">
                                                            <input
                                                                type="text"
                                                                placeholder="3 : 28 PM"
                                                                className="lg:w-[160px] mt-1 xxxl:text-[16px] xxxs:w-full border-b-[1px] border-dashed h-[20px] text-[10px] outline-none text-[#A0A0A0]"
                                                            />
                                                            <img
                                                                src={Logos.Time}
                                                                alt=""
                                                                className="w-[13px] xxxl:w-[20px]"
                                                            />
                                                        </div>
                                                    )}
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div className="flex justify-end items-center gap-1">
                                                    <img
                                                        src={Logos.CopyBtn}
                                                        alt="Copy Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <img
                                                        src={Logos.TrashIcon1}
                                                        alt="Trash Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <p className="lg:text-[12px] xxxl:text-[16px] xxxs:text-[10px]">
                                                        Required
                                                    </p>
                                                    <div
                                                        className="w-8 h-4 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked4
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked4(!checked4);
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked4
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked4
                                                                    ? "12px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src={Logos.MoreIcon}
                                                            onClick={() => {
                                                                dropDown1();
                                                            }}
                                                            alt=""
                                                            className="w-[12px] xxxl:w-[20px] cursor-pointer relative"
                                                        />
                                                        <div
                                                            className={
                                                                !showDropdown1
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute right-0"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:w-[140px] xxxl:w-[170px] xxxs:w-[120px] shadow-sm p-3 rounded-md cursor-auto">
                                                                <div className="flex flex-col gap-2">
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                true
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Description
                                                                    </div>

                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                true
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Include time
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Include year
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {dropdown == "time" && (
                                            <div className="relative">
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div
                                                    className="flex justify-between items-center border-[#3A37A6] pt-1 border-t-[1px] ">
                                                    <p className="text-[#3A37A6] xxxl:text-[24px] lg:text-[14px] xxxs:text-[12px]">
                                                        Q 1
                                                    </p>
                                                    <div
                                                        className="rounded-md lg:w-[210px] xxxs:w-[160px] h-[30px] xxxl:h-[40px] border-[1px] mb-1 ">
                                                        <h1 className="flex justify-between pt-1 lg:px-3 xxxs:px-2 items-center gap-2">
                                                            <div
                                                                className="flex gap-3 items-center lg:text-[12px] xxxs:text-[10px]">
                                                                <img
                                                                    src={Logos.Time}
                                                                    alt=""
                                                                    className="w-[14px]"
                                                                />
                                                                <p className="xxxl:text-[18px]">
                                                                    Time
                                                                </p>
                                                            </div>
                                                            <img
                                                                src={Logos.Arrowdown}
                                                                alt="Dropdown Arrow"
                                                                onClick={() => {
                                                                    dropDown5();
                                                                }}
                                                                style={{
                                                                    transform:
                                                                        showDropdown5
                                                                            ? "rotate(180deg)"
                                                                            : "rotate(0deg)",
                                                                }}
                                                                className="cursor-pointer w-[18px]"
                                                            />
                                                        </h1>
                                                        <div
                                                            className={
                                                                !showDropdown5
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute mt-2 z-10"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:max-w-[275px] xxxs:max-w-[198px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                                                                <div
                                                                    className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "text"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Text1
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className=" xxxl:text-[18px] ">
                                                                            Short answer
                                                                            text
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "paragraph"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Paragraph
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Paragraph
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "mcqs"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Mcqs}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Multiple choice
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkbox"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Checkbox
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkboxes
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "dropdown"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Dropdown
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Dropdown
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "contactform"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.MenuBoardBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Contact Form
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "fileupload"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CloudPlus
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            File upload
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "scale"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.Scale
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Linear scale
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "choicegrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ChoiceGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[16px]">
                                                                            Multiple choice
                                                                            grid
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "checkboxgrid"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.CheckboxGrid
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Checkbox grid
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "date"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.DateBlack
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Date
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="flex gap-4 items-center cursor-pointer lg:text-[12px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            dropdownHandler(
                                                                                "time"
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={Logos.Time}
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-[#A0A0A0] cursor-pointer text-[10px] pt-2 border-dashed font-medium border-b-[1px] pb-1"
                                                    onClick={() => {
                                                        questionHandler(
                                                            !question
                                                        );
                                                    }}
                                                >
                                                    <p className="xxxl:text-[18px]">
                                                        {" "}
                                                        Question...
                                                    </p>
                                                </p>
                                                {question === true && (
                                                    <div className="flex gap-2 italic xxxl:text-[18px] text-[#A0A0A0]">
                                                        <div>I</div>
                                                        <div>B</div>
                                                        <div>U</div>
                                                    </div>
                                                )}
                                                {description === true &&
                                                    response === false &&
                                                    shuffle === false && (
                                                        <div>
                                                            <p className="text-[#A0A0A0] xxxl:text-[16px] border-t-[1px] text-[10px] pt-2 border-b-[1px] pb-1">
                                                                Description
                                                            </p>
                                                            <div className="flex justify-between">
                                                                <input
                                                                    type="text"
                                                                    placeholder="3 : 28 PM"
                                                                    className="lg:w-[160px] mt-1 xxxs:w-full xxxl:text-[16px] border-b-[1px] border-dashed h-[20px] text-[10px] outline-none text-[#A0A0A0]"
                                                                />
                                                                <img
                                                                    src={Logos.Time}
                                                                    alt=""
                                                                    className="w-[13px] xxxl:w-[20px]"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                {description === false &&
                                                    response === true &&
                                                    shuffle === false && (
                                                        <div className="flex justify-between">
                                                            <input
                                                                type="text"
                                                                placeholder="3 : 28 PM"
                                                                className="lg:w-[160px] mt-1 xxxs:w-full xxxl:text-[16px] border-b-[1px] border-dashed h-[20px] text-[10px] outline-none text-[#A0A0A0]"
                                                            />
                                                            <img
                                                                src={Logos.Time}
                                                                alt=""
                                                                className="w-[13px]"
                                                            />
                                                        </div>
                                                    )}
                                                {response === false &&
                                                    description === false &&
                                                    shuffle === true && (
                                                        <div className="flex justify-between">
                                                            <input
                                                                type="text"
                                                                placeholder="Duration"
                                                                className="lg:w-[160px] mt-1 xxxs:w-full border-b-[1px] border-dashed h-[20px] text-[10px] outline-none text-[#A0A0A0]"
                                                            />
                                                            <img
                                                                src={Logos.Time}
                                                                alt=""
                                                                className="w-[13px] xxxl:w-[20px]"
                                                            />
                                                        </div>
                                                    )}
                                                <div
                                                    className="text-[#A0A0A0] text-[10px] pt-3 border-b-[1px] mb-2"></div>
                                                <div className="flex justify-end items-center gap-1">
                                                    <img
                                                        src={Logos.CopyBtn}
                                                        alt="Copy Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <img
                                                        src={Logos.TrashIcon1}
                                                        alt="Trash Icon"
                                                        className="w-[16px] xxxl:w-[22px]"
                                                    />
                                                    <p className="lg:text-[12px] xxxl:text-[16px] xxxs:text-[10px]">
                                                        Required
                                                    </p>
                                                    <div
                                                        className="w-8 h-4 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                                        style={{
                                                            backgroundColor:
                                                                checked4
                                                                    ? "#E7EEF9"
                                                                    : "#F5F5F5",
                                                        }}
                                                        onClick={() => {
                                                            setChecked4(!checked4);
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                                                            style={{
                                                                backgroundColor:
                                                                    checked4
                                                                        ? "#3A37A6"
                                                                        : "#A0A0A0",
                                                                marginLeft: checked4
                                                                    ? "12px"
                                                                    : "0px",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src={Logos.MoreIcon}
                                                            onClick={() => {
                                                                dropDown1();
                                                            }}
                                                            alt=""
                                                            className="w-[12px] xxxl:w-[20px] cursor-pointer relative"
                                                        />
                                                        <div
                                                            className={
                                                                !showDropdown1
                                                                    ? "hidden"
                                                                    : "flex flex-col absolute right-0"
                                                            }
                                                        >
                                                            <div
                                                                className="bg-[#FFFFFF] lg:w-[140px] xxxl:w-[160px] xxxs:w-[120px] shadow-sm p-3 rounded-md cursor-auto">
                                                                <div className="flex flex-col gap-2">
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                true
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Description
                                                                    </div>

                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                true
                                                                            );
                                                                            shuffleHandler(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        <p className="xxxl:text-[18px]">
                                                                            Time
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        src={Logos.Line}
                                                                        alt="Line"
                                                                    />
                                                                    <div
                                                                        className="flex lg:gap-3 xxxs:gap-1 items-center cursor-pointer xxxl:text-[16px] lg:text-[11px] xxxs:text-[10px]"
                                                                        onClick={() => {
                                                                            descriptionHandler(
                                                                                false
                                                                            );
                                                                            responseHandler(
                                                                                false
                                                                            );
                                                                            shuffleHandler(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                Logos.ButtonIcon
                                                                            }
                                                                            alt=""
                                                                            className="w-[14px]"
                                                                        />
                                                                        Duration
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className="flex justify-between gap-2 mb-10 cursor-pointer"
                                        onClick={() => {
                                            dropdownHandler("text");
                                        }}
                                    >
                                        <h1 className="subtitle-size text-[#262626]">
                                            Add new question
                                        </h1>
                                        <div
                                            className="flex text-[#3A37A6] items-centerjustify-center gap-2 rounded-sm xxxs:text-[12px] lg:text-[13px]">
                                            <img
                                                src={Logos.AddSquareIcon}
                                                alt="Add Square Icon"
                                                className="w-[15px] xxxl:w-[25px]"
                                            />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <button
                            className="bg-[#AEBFF2] mx-3 text-white shadow-md mb-1 flex justify-center items-center gap-3 p-3 rounded  xxxl:h-[50px] lg:h-[38px] xxxs:h-[30px] xxxl:text-[20px] lg:text-[16px] xxxs:text-[14px]">
                            Save
                        </button>
                    </div>
                </div>


                <div className="w-[100%] lg:ml-3 rounded py-2 xxxl:py-4 border-[1px] shadow-md border-[#EBEBEB]">
                    <div
                        className="flex justify-center sm:text-[12px] xxxl:text-[20px] lg:text-[13px] xxxs:text-[10px] text-[#A0A0A0] pb-2">
                        This is a preview. No data will be
                        recorded.
                    </div>
                    <div className="flex  lg:flex-nowrap w-full xxxs:flex-wrap justify-between gap-1">
                        <div className="flex w-[50%]  flex-auto">
                            <img
                                src={Logos.GirlImg}
                                alt="Girl Img"
                                className=" px-5"
                                style={{
                                    height: "calc(100vh - 170px)",
                                }}
                            />
                        </div>
                        <div className="w-[50%] rounded flex border-[1px]  shadow-md border-[#EBEBEB] mb-4 mt-1">
                            <div className="flex flex-col py-4  lg:px-[14px] xxxs:px-4">
                                <div className="rounded border-[1px] shadow-md p-2">
                                    <p className="border-b-[1px] py-2 xxxl:py-4 lg:text-[16px] xxxl:text-[20px] xxxs:text-[12px] pb-1 font-medium">
                                        Contact information
                                    </p>
                                    <hr></hr>
                                    <p className="text-[#A0A0A0] xxxl:text-[15px] text-[10px] pt-2 xxxl:py-4">
                                        Lorem Ipsum is simply dummy
                                        text of the printing and
                                        typesetting industry. Lorem
                                        Ipsum has been the industry's
                                        standard dummy text ever since
                                        the 1500s,
                                    </p>
                                </div>
                                {dropdown == "text" && (
                                    <div className="rounded border-[1px] shadow-md p-2">
                                        <p className="border-b-[1px] xxxl:text-[20px] lg:text-[13px] xxxs:text-[12px] pb-2">
                                            What is your name ?
                                        </p>
                                    </div>
                                )}
                                {dropdown == "paragraph" && (
                                    <div className="rounded border-[1px] shadow-md p-2">
                                        <p className="lg:text-[13px] xxxl:text-[20px] xxxs:text-[12px]">
                                            Write your collages life
                                            experiences ?
                                        </p>
                                        <p className="text-[#A0A0A0] xxxl:text-[15px] border-b-[1px] pb-2 text-[10px] pt-1">
                                            Tell us more
                                        </p>
                                    </div>
                                )}
                                {dropdown == "mcqs" && (
                                    <div className="rounded border-[1px] shadow-md p-2">
                                        <p className=" lg:text-[13px] xxxl:text-[20px] xxxs:text-[12px]">
                                            Can you attend ?
                                        </p>
                                        <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[15px] text-[10px] pt-1">
                                            <input
                                                type="radio"
                                                name=""
                                                id=""
                                            />
                                            Yes, I’ll be there
                                        </p>
                                        <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[15px] text-[10px] pt-1">
                                            <input
                                                type="radio"
                                                name=""
                                                id=""
                                            />
                                            Sorry, can’t make it
                                        </p>
                                    </div>
                                )}
                                {dropdown == "checkbox" && (
                                    <div className="rounded border-[1px] shadow-md p-2">
                                        <p className=" lg:text-[13px] xxxl:text-[20px] xxxs:text-[12px]">
                                            What will you be bringing ?
                                        </p>
                                        <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[15px] text-[10px] pt-1">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                            T-shart
                                        </p>
                                        <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[15px] text-[10px] pt-1">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                            Shart
                                        </p>
                                        <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[15px] text-[10px] pt-1">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                            Jeans
                                        </p>
                                        <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[15px] text-[10px] pt-1">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                            Jeans
                                        </p>
                                        <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[15px] text-[10px] pt-1">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                            Shus
                                        </p>
                                    </div>
                                )}
                                {dropdown == "dropdown" && (
                                    <div className="rounded border-[1px] shadow-md p-2">
                                        <p className=" lg:text-[13px] xxxl:text-[20px] xxxs:text-[12px]">
                                            Select information language
                                            type ?
                                        </p>
                                        <div className="flex gap-2 flex-col mt-2">
                                            <div className="flex justify-between items-center">
                                                <div className="flex flex-col">
                                                    <div
                                                        className="flex items-center max-w-[200px] xxxl:max-w-[260px] gap-2 relative justify-between border-[1px] cursor-pointer p-2 rounded-[5px]"
                                                        onClick={
                                                            openDropdownHanddler2
                                                        }
                                                    >
                                                        <input
                                                            placeholder="Choose"
                                                            value={dropdown2}
                                                            disabled
                                                            className="bg-white lg:text-[13px] xxxl:text-[15px] xxxs:text-[12px] cursor-pointer"
                                                        />
                                                        <div
                                                            className="border-l-[1px] border-b-[1px] h-2 border-black border-solid w-2"
                                                            style={{
                                                                transform:
                                                                    opendropdown2
                                                                        ? "rotate(135deg)"
                                                                        : "rotate(-45deg)",
                                                            }}
                                                        ></div>
                                                        {opendropdown2 && (
                                                            <div
                                                                className="flex flex-col rounded-md w-full left-0 max-w-[200px] shadow-sm border-[1px] absolute mt-4"
                                                                style={{
                                                                    top: "1.5rem",
                                                                }}
                                                            >
                                                                <label
                                                                    htmlFor="contact"
                                                                    className="cursor-pointer bg-[#ffffff] p-2 xxxl:text-[15px] lg:text-[13px] xxxs:text-[12px]"
                                                                    onClick={() => {
                                                                        dropdownHanddler2(
                                                                            "English"
                                                                        );
                                                                    }}
                                                                >
                                                                    English
                                                                </label>
                                                                <input
                                                                    type="radio"
                                                                    id="contact"
                                                                    name="dropdown"
                                                                    value="All contacts"
                                                                    className="none"
                                                                    style={{
                                                                        display:
                                                                            "none",
                                                                    }}
                                                                />
                                                                <hr className=" border-1 border-[#CEDEF2]"/>
                                                                <label
                                                                    htmlFor="donations"
                                                                    onClick={() => {
                                                                        dropdownHanddler2(
                                                                            "Gujrati"
                                                                        );
                                                                    }}
                                                                    className="cursor-pointer bg-[#ffffff] p-2 xxxl:text-[15px] lg:text-[13px] xxxs:text-[12px]"
                                                                >
                                                                    Gujrati
                                                                </label>
                                                                <input
                                                                    type="radio"
                                                                    id="donations"
                                                                    value="Donations"
                                                                    name="dropdown"
                                                                    className="none"
                                                                    style={{
                                                                        display:
                                                                            "none",
                                                                    }}
                                                                />
                                                                <hr className=" border-1 border-[#CEDEF2]"/>
                                                                <label
                                                                    htmlFor="hindi"
                                                                    className="cursor-pointer bg-[#ffffff] p-2 xxxl:text-[15px] lg:text-[13px] xxxs:text-[12px]"
                                                                    onClick={() => {
                                                                        dropdownHanddler2(
                                                                            "Hindi"
                                                                        );
                                                                    }}
                                                                >
                                                                    Hindi
                                                                </label>
                                                                <input
                                                                    type="radio"
                                                                    id="hindi"
                                                                    value="hindi"
                                                                    name="dropdown"
                                                                    className="none"
                                                                    style={{
                                                                        display:
                                                                            "none",
                                                                    }}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {dropdown == "contactform" && (
                                    <div
                                        style={{height: "calc(100vh - 360px)"}}
                                        className="rounded border-[1px] overflow-y-scroll mt-1 shadow-md p-2">
                                        <div className="flex justify-between gap-2 pb-1">
                                            <div>
                                                <p className="subtitle-size">
                                                    First Name
                                                </p>
                                                <input
                                                    type="text"
                                                    placeholder="Eg. Bessie"
                                                    className="lg:w-[140px] mt-1 xxxs:w-full border-b-[1px] h-[20px] xxxl:text-[16px] text-[10px] outline-none text-[#A0A0A0]"
                                                />
                                            </div>
                                            <div>
                                                <p className="subtitle-size">
                                                    Last Name
                                                </p>
                                                <input
                                                    type="text"
                                                    placeholder="Eg. Cooper"
                                                    className="lg:w-[140px] mt-1 xxxs:w-full border-b-[1px] h-[20px] xxxl:text-[16px] text-[10px] outline-none text-[#A0A0A0]"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-between gap-2 pb-1">
                                            <div>
                                                <p className="subtitle-size">
                                                    Email
                                                </p>
                                                <input
                                                    type="text"
                                                    placeholder="Eg. bessie@gmail.com"
                                                    className="lg:w-[140px] mt-1 xxxs:w-full border-b-[1px] h-[20px] xxxl:text-[16px] text-[10px] outline-none text-[#A0A0A0]"
                                                />
                                            </div>
                                            <div>
                                                <p className="subtitle-size">
                                                    Phone number
                                                </p>
                                                <input
                                                    type="text"
                                                    placeholder="Eg. 95699 9XXX6"
                                                    className="lg:w-[140px] mt-1 xxxs:w-full border-b-[1px] h-[20px] xxxl:text-[16px] text-[10px] outline-none text-[#A0A0A0]"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="subtitle-size">
                                                Employment
                                            </p>
                                            <input
                                                type="text"
                                                placeholder="Eg. XYZ"
                                                className="lg:w-[140px] mt-1 xxxs:w-full border-b-[1px] h-[20px] xxxl:text-[16px] text-[10px] outline-none text-[#A0A0A0]"
                                            />
                                        </div>

                                        {toggle1 === false && (
                                            <div>
                                                <div>
                                                    <p className="subtitle-size">
                                                        Address format
                                                    </p>
                                                    <input
                                                        type="text"
                                                        placeholder="Eg. international"
                                                        className="lg:w-[140px] mt-1 xxxs:w-full border-b-[1px] h-[20px] xxxl:text-[16px] text-[10px] outline-none text-[#A0A0A0]"
                                                    />
                                                </div>

                                                <div className="flex justify-between gap-2 pb-1">
                                                    <div>
                                                        <p className="subtitle-size">
                                                            Street Address
                                                        </p>
                                                        <input
                                                            type="text"
                                                            placeholder="Eg. 401 Smyth Road , Ottawa K1H 8L1 , Canada."
                                                            className="lg:w-[140px] mt-1 xxxs:w-full border-b-[1px] h-[20px] xxxl:text-[16px] text-[10px] outline-none text-[#A0A0A0]"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="subtitle-size">
                                                            City
                                                        </p>
                                                        <input
                                                            type="text"
                                                            placeholder="Eg. Ottawa"
                                                            className="lg:w-[140px] mt-1 xxxs:w-full border-b-[1px] h-[20px] xxxl:text-[16px] text-[10px] outline-none text-[#A0A0A0]"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex justify-between gap-2 pb-1">
                                                    <div>
                                                        <p className="subtitle-size">
                                                            State
                                                        </p>
                                                        <input
                                                            type="text"
                                                            placeholder="Eg. Canada"
                                                            className="lg:w-[140px] mt-1 xxxs:w-full border-b-[1px] h-[20px] xxxl:text-[16px] text-[10px] outline-none text-[#A0A0A0]"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="subtitle-size">
                                                            Zip code
                                                        </p>
                                                        <input
                                                            type="text"
                                                            placeholder="Eg. 61350"
                                                            className="lg:w-[140px] mt-1 xxxs:w-full border-b-[1px] h-[20px] xxxl:text-[16px] text-[10px] outline-none text-[#A0A0A0]"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="rounded border-[1px] shadow-md p-2 my-2">
                                            <p className="text-[#A0A0A0] xxxl:text-[15px] text-[10px]">
                                                Lorem ipsum dolor sit
                                                amet, consectetur
                                                adipiscing elit. Proin mi
                                                felis, fermentum vel
                                                imperdiet eu, aliquet eget
                                                libero. Proin pharetra
                                                interdum pharetra. Integer
                                                suscipit est ligula, at
                                                iaculis magna fermentum
                                                et. Quisque pulvinar dui
                                                in odio vehicula aliquet.
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-1 py-1">
                                            <div className="flex gap-2 items-center">
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <p className="text-[10px] xxxl:text-[15px]">
                                                    Remember Me
                                                </p>
                                            </div>
                                            <a
                                                href="#"
                                                className="border-b-[1px] border-[#94A2F2] xxxl:text-[15px] text-[10px] text-[#94A2F2]"
                                            >
                                                Terms Of Service And
                                                Privacy Policy
                                            </a>
                                        </div>
                                    </div>
                                )}
                                {dropdown == "fileupload" && (
                                    <div className="rounded border-[1px] shadow-md p-2">
                                        <p className=" lg:text-[13px] xxxl:text-[20px] xxxs:text-[12px] pb-2">
                                            Uplode your image.
                                        </p>
                                        <button
                                            className="flex justify-center items-center gap-2 border-dashed border-[1px] rounded-md w-[80px] xxxl:w-[120px] border-[#94A2F2] h-[30px]">
                                            <img
                                                src={Logos.Upload1}
                                                alt=""
                                                className="w-[14px] xxxl:w-[20px]"
                                            />
                                            <p className="text-[#94A2F2] xxxl:text-[16px] text-[10px]">
                                                Add File
                                            </p>
                                        </button>
                                    </div>
                                )}
                                {dropdown == "scale" && (
                                    <div className="rounded border-[1px] shadow-md p-2">
                                        <p className=" lg:text-[13px] xxxl:text-[20px] xxxs:text-[12px]">
                                            What is reting of the movie
                                            “ RRR” ?
                                        </p>
                                        <div className="flex lg:gap-6 xxxs:gap-2">
                                            <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[16px] text-[10px] pt-1">
                                                1
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                            </p>
                                            <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[16px] text-[10px] pt-1">
                                                2
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                            </p>
                                            <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[16px] text-[10px] pt-1">
                                                3
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                            </p>
                                            <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[16px] text-[10px] pt-1">
                                                4
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                            </p>
                                            <p className="flex gap-2 text-[#A0A0A0] xxxl:text-[16px] text-[10px] pt-1">
                                                5
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                            </p>
                                        </div>
                                    </div>
                                )}
                                {dropdown == "choicegrid" && (
                                    <div className="rounded border-[1px] shadow-md p-2">
                                        <p className=" lg:text-[13px] xxxl:text-[20px] xxxs:text-[12px]">
                                            Select the best time to meet
                                            each day ?
                                        </p>
                                        <div
                                            className="grid grid-cols-6 lg:text-[9px] xxxl:text-[16px] xxxs:text-[8px] lg:gap-2 xxxs:gap-1 mt-1 text-[#A0A0A0]">
                                            <div className=" flex flex-col gap-[5px]">
                                                <br/>
                                                <p>10:30 Am</p>
                                                <p>10:30 Am</p>
                                                <p>10:30 Am</p>
                                                <p>10:30 Am</p>
                                            </div>
                                            <div className=" flex flex-col items-center gap-[6px] xxxl:gap-[14px]">
                                                <p>Monday</p>
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                            <div className=" flex flex-col items-center gap-[6px] xxxl:gap-[14px]">
                                                <p>Tuesday</p>
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                            <div className=" flex flex-col items-center gap-[6px] xxxl:gap-[14px]">
                                                <p>Wednesday</p>
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                            <div className=" flex flex-col items-center gap-[6px] xxxl:gap-[14px]">
                                                <p>Thursday</p>
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                            <div className=" flex flex-col items-center gap-[6px] xxxl:gap-[14px]">
                                                <p>Friday</p>
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="radio"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {dropdown == "checkboxgrid" && (
                                    <div className="rounded border-[1px] shadow-md p-2">
                                        <p className=" lg:text-[13px] xxxl:text-[20px] xxxs:text-[12px]">
                                            Select the best time to meet
                                            each day ?
                                        </p>
                                        <div
                                            className="grid grid-cols-6 lg:text-[9px] xxxl:text-[16px] xxxs:text-[8px] lg:gap-2 xxxs:gap-1 mt-1 text-[#A0A0A0]">
                                            <div className=" flex flex-col gap-[5px]">
                                                <br/>
                                                <p>10:30 Am</p>
                                                <p>10:30 Am</p>
                                                <p>10:30 Am</p>
                                                <p>10:30 Am</p>
                                            </div>
                                            <div className=" flex flex-col items-center gap-[6px] xxxl:gap-[14px]">
                                                <p>Monday</p>
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                            <div className=" flex flex-col items-center gap-[6px] xxxl:gap-[14px]">
                                                <p>Tuesday</p>
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                            <div className=" flex flex-col items-center gap-[6px] xxxl:gap-[14px]">
                                                <p>Wednesday</p>
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                            <div className=" flex flex-col items-center gap-[6px] xxxl:gap-[14px]">
                                                <p>Thursday</p>
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                            <div className=" flex flex-col items-center gap-[6px] xxxl:gap-[14px]">
                                                <p>Friday</p>
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {dropdown == "date" && (
                                    <div className="rounded border-[1px] shadow-md p-2">
                                        <p className=" lg:text-[13px] xxxl:text-[20px] xxxs:text-[12px]">
                                            What is your birth date ?
                                        </p>
                                        <div className="flex gap-2 flex-col mt-2">
                                            <div className="flex justify-between gap-2 pb-1">
                                                <div>
                                                    <p className="lg:text-[12px] xxxs:text-[11px]">
                                                        <p className="xxxl:text-[18px]">
                                                            Date
                                                        </p>
                                                    </p>
                                                    <div className="flex justify-between">
                                                        <input
                                                            type="text"
                                                            placeholder="MM/YY/YYYY"
                                                            className="lg:w-[160px] mt-1 xxxs:w-full xxxl:text-[16px] border-b-[1px] border-dashed h-[20px] text-[10px] outline-none text-[#A0A0A0]"
                                                        />
                                                        <img
                                                            src={
                                                                Logos.DateBlack
                                                            }
                                                            alt=""
                                                            className="w-[13px] xxxl:w-[20px]"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {dropdown == "time" && (
                                    <div className="rounded border-[1px] shadow-md p-2">
                                        <p className=" lg:text-[13px] xxxl:text-[20px] xxxs:text-[12px]">
                                            Give me meeting time ?
                                        </p>
                                        <div className="flex gap-2 flex-col mt-2">
                                            <div className="flex justify-between gap-2 pb-1">
                                                <div>
                                                    <p className="lg:text-[12px] xxxl:text-[18px] xxxs:text-[11px]">
                                                        Time
                                                    </p>
                                                    <div className="flex justify-between">
                                                        <input
                                                            type="text"
                                                            placeholder="_ : _ AM"
                                                            className="lg:w-[160px] mt-1 xxxs:w-full xxxl:text-[16px] border-b-[1px] border-dashed h-[20px] text-[10px] outline-none text-[#A0A0A0]"
                                                        />
                                                        <img
                                                            src={Logos.Time}
                                                            alt=""
                                                            className="w-[13px] xxxl:w-[20px]"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="flex justify-center items-center pt-2 xxxl:pt-4">
                                    <button
                                        className="bg-[#AEBFF2] xxxl:text-[20px] text-white xxxl:w-[140px] lg:w-[120px] xxxs:w-[100px] shadow-md flex justify-center items-center gap-3 p-3 rounded-md xxxl:h-[48px] lg:h-[38px] xxxs:h-[30px] lg:text-[15px] xxxs:text-[12px]">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormOptions;
