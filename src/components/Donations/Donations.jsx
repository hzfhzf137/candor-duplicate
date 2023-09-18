import React from "react";
import {Logos} from "../../assets";
import {useState} from "react";
import {useNavigate} from "react-router";
import InteractionDropdown from "../InteractionDropdown/InteractionDropdown";
import ToolTip from "../ToolTip/ToolTip";
import LibraryDeletePopup from "../../components/LibraryDeletePopup/LibraryDeletePopup";
import ImageButtons from "../ImageButtons/ImageButtons";
import {Tooltip} from "antd";
import ToggleButton from "../ToggleButton/ToggleButton";
import DynamicDropdown from "../DynamicDropdown/DynamicDropdown";

function Donations() {
    const [inputValue, setInputValue] = useState("");
    const [isClicked, setIsClicked] = useState("credit");
    const [activeContent, setActiveContent] = useState("content1");
    const [activeTab, setActiveTab] = useState("Tabcontent1");
    const [activeScreen, setActiveScreen] = useState("desktop");
    const [titleChange, setIsTitleChange] = useState("Donate");
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [button, setButton] = useState("link");
    const [button1, setButton1] = useState("desk");
    const navigate = useNavigate();

    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState("");

    const handleDropdownClick1 = () => {
        setIsOpen2(!isOpen2);
    };
    const handleClick = (value) => {
        setInputValue(value);

    };
    const handleOptionClick2 = (option) => {
        setSelectedOption1(option);
        setIsOpen2(false);
    };

    function VideoHandler() {
        if (activeContent == "content1") {
            navigate("/video");
        } else if (activeContent == "content2") {
            toggleContent("content1");
        } else if (activeContent == "content3") {
            toggleContent("content2");
        } else if (activeContent == "content4") {
            toggleContent("content3");
        }
    }


    function btnHandler1(a) {
        setButton1(a);
    }

    const Title1 = () => {
        setIsTitleChange("Enter an amount");
    };
    const Title2 = () => {
        setIsTitleChange("Enter your information");
    };
    const Title3 = () => {
        setIsTitleChange("Payment details");
    };
    const Title4 = () => {
        setIsTitleChange("Enter payment details");
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const togglePopup1 = () => {
        setIsOpen1(!isOpen1);
    };

    const TabClick = () => {
        setIsClicked(!isClicked);
    };

    const toggleContent = (content) => {
        setActiveContent(activeContent === content ? "content1" : content);
    };

    const toggleTab = (content) => {
        setActiveTab(activeTab === content ? "Tabcontent1" : content);
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
                <div className="flex ">
                    <img
                        src={Logos.BreadcrumbBack}
                        alt="icon"
                        className="cursor-pointer ml-2 w-[8px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />
                    <p className=" ml-4  title-size">
                        {titleChange}
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
                className="flex   xxxs:flex-wrap lg:flex-nowrap  mt-[6px]"
            >
                <div
                    className="lg:w-1/3 xxxxl:w-1/4  xxxs:w-[100%]  overflow-scroll rounded border-[1px] shadow-md border-[#EBEBEB] pt-1 ">
                    <div className="flex justify-between px-3 pt-3 ">
                        <div className="flex items-center">
                            <div
                                className="h-5 w-5 bg-[#3A37A6]  xxxxl:text-[12px] text-white rounded-full flex justify-center items-center text-[10px]">
                                03
                            </div>
                            <p className="title-size   ml-3 text-[#3A37A6] ">
                                Donate
                            </p>
                        </div>
                        <div className="flex item">
                            <img
                                src={Logos.EditIcon2}
                                alt="icon"
                                className="w-[19px]  mr-2  xxxl:w-[27px]"
                            />
                            <img
                                src={Logos.DonationCopyIcon}
                                alt="icon"
                                className="w-[19px]  mr-2  xxxl:w-[27px] "
                            />
                            <img
                                src={Logos.BlueTrash}
                                alt="icon"
                                className="w-[19px]   xxxl:w-[27px] "
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
                    <p className="subtitle-size p-4">
                        Interaction Type
                    </p>
                    <div className="flex flex-col justify-center">
                        <InteractionDropdown
                            Img={Logos.CardEditIcon}
                            selectedValue={"Donation"}
                        />
                        <div>
                            <ImageButtons/>
                        </div>
                        <div className="px-3">

                            <hr/>
                            <p className="subtitle-size  py-3 ">
                                Overlay texts
                            </p>
                            <textarea
                                placeholder="Lorem is the dummy text of the printing and type settingindustry. Lorem ipsum is the industry standard dummy text ever since 1500s."
                                className=" min-h-[80px] p-2 resize-none placeholder-input-modal placeholder:leading-5 xxxxl:text-[20px] text-[11px] outline-none w-full leading-3  rounded   border-[1px] border-[#EBEBEB]"
                            ></textarea>
                            <h1 className="xxxs:text-[10px] relative xxxxl:text-[16px] lg:text-[11px] flex pb-2 border-b-[1px] items-end text-[#94A2F2]">
                                Learn how to pipe in variables (e.g. name) into your overlay
                                text.
                                <img
                                    src={Logos.Export}
                                    alt="Export"
                                    className="w-[12px] absolute left-[70px] bottom-[10px] xxxxl:left-24"
                                />
                            </h1>
                            <div className="flex justify-between pb-1">
                                <div className="flex items-center pt-1">
                                    <p className="subtitle-size pr-1">
                                        Delay Interaction
                                    </p>
                                    <ToolTip/>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="2"
                                        className="bg-[#F5F5F5] placeholder-input-modal text-[#A0A0A0] text-center outline-none px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px] text-[13px]"
                                        name=""
                                        id=""
                                    />
                                </div>
                            </div>
                            <hr/>
                            <div className="flex justify-between items-center pt-3 pb-2">
                                <div className="flex gap-1 items-center pt-1">
                                    <p className="subtitle-size ">
                                        Capture contact details
                                    </p>
                                    <ToolTip/>
                                </div>
                                <div className="mr-1">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between pb-1">
                                <div className="flex items-center pt-1">
                                    <p className="subtitle-size pr-1 ">
                                        Currency
                                    </p>
                                    <ToolTip/>
                                </div>
                                <DynamicDropdown
                                    mainTitle={"USA"}
                                    option1={"USA"}
                                    option2={"UAE"}
                                    width="[70px]"
                                    text="[12px]"
                                />
                            </div>
                            <hr/>
                            <div className="flex justify-between pt-3 pb-2">
                                <div className="flex pt-1 items-center gap-1">
                                    <p className="subtitle-size">
                                        Fixed amount
                                    </p>

                                    <ToolTip/>
                                </div>
                            </div>

                            <div className="flex justify-between pt-3 pb-2">
                                <div className="flex pt-1 items-center gap-1">
                                    <p className="subtitle-size">
                                        Show suggested amounts
                                    </p>

                                    <ToolTip/>
                                </div>

                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />

                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="pr-2 w-full">
                                    <input
                                        type="text"
                                        placeholder="$25"
                                        className="w-full placeholder-input-modal rounded h-[35px] px-2 xxxxl:text-[20px] text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                    />
                                </div>
                                <div className="flex justify-around lg:gap-3  xxxs:gap-1">
                                    <input
                                        type="radio"
                                        name=""
                                        id=""
                                        className="text-black w-[15px]"
                                    />
                                    <p className="mt-3 mr-2 text-[13px]  xxxxl:text-[20px]">
                                        Default
                                    </p>
                                    <div
                                        className="rounded-full w-[16px] my-3 h-[16px]  xxxxl:mt-4 text-[16px] flex justify-center items-center text-white bg-red-600">
                                        -
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between pt-2">
                                <div className="pr-2 w-full">
                                    <input
                                        type="text"
                                        placeholder="$25"
                                        className="w-full rounded h-[35px] placeholder-input-modal xxxxl:text-[20px] px-2 text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                    />
                                </div>
                                <div className="flex justify-around lg:gap-3  xxxs:gap-1">
                                    <input
                                        type="radio"
                                        name=""
                                        id=""
                                        className="text-black w-[15px]"
                                    />
                                    <p className="mt-3 mr-2 text-[13px]  xxxxl:text-[20px]">
                                        Default
                                    </p>
                                    <div
                                        className="rounded-full w-[16px] my-3 h-[16px] xxxxl:mt-4 text-[16px] flex justify-center items-center text-white bg-red-600">
                                        -
                                    </div>
                                </div>
                            </div>
                            <div className="py-3 flex items-center justify-start">
                                <img
                                    src={Logos.AddSquare2}
                                    alt="icon"
                                    className="w-[27px] ml-2"
                                />
                                <p className=" ml-3 subtitle-size ">
                                    Add amount
                                </p>
                            </div>
                            <hr/>
                            <div className="flex justify-between pt-3 pb-2">
                                <div className="flex pt-1 items-center gap-1">
                                    <p className="subtitle-size ">
                                        Allow for custom amount
                                    </p>

                                    <ToolTip/>
                                </div>

                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />

                                </div>
                            </div>
                            <div className="flex w-full pb-2">
                                <div className="px-1 w-full">
                                    <p className="ml-1 subtitle-size">Min</p>
                                    {/* <input
                                        type="text"
                                        placeholder="$25"
                                        className="w-full text-center bg-white placeholder-input-modal xxxxl:text-[20px] rounded h-[35px]   text-[11px] outline-none  text-[#A0A0A0]"
                                    /> */}
                                </div>
                                <div className="px-1 w-full">
                                    <p className="ml-1 subtitle-size">Max</p>
                                    <input
                                        type="text"
                                        placeholder="$29,000"
                                        className="w-full text-center bg-white placeholder-input-modal xxxxl:text-[20px] rounded h-[35px]  text-[11px] outline-none  text-[#A0A0A0]"
                                    />
                                </div>
                            </div>

                            <hr/>
                            <div className="flex justify-between pt-3 pb-2">
                                <div className="flex items-center gap-1 pt-1">
                                    <p className="subtitle-size ">
                                        Information collection
                                    </p>

                                    <Tooltip/>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">First Name</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <div className="text-[24px] mt-1 ml-1">*</div>
                                </div>
                            </div>


                            <div className="flex justify-between items-center pt-1 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">Last Name</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <div className="text-[24px] mt-1 ml-1">*</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-1 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">organization</p>
                                </div>
                                <div className="mr-3 flex items-center">
                                    <ToggleButton
                                        isActive={false}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">Email</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <div className="text-[24px] mt-1 ml-1">*</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">Phone</p>
                                </div>
                                <div className="flex items-center">
                                    <div>
                                        <ToggleButton
                                            isActive={true}
                                            width="[40px]"
                                            height="[22px]"
                                        />
                                    </div>

                                    <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">*</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">Address</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">*</div>
                                </div>
                            </div>
                            <div className="py-1">
                                <p className=" subtitle-size mb-2 ">
                                    Address format
                                </p>
                                <div>
                                    <div
                                        className="dropdown z-10 relative"
                                        onClick={handleDropdownClick1}
                                    >
                                        <div
                                            className="flex justify-between rounded-md text-[13px]  xxxxl:text-[20px] text-[#A0A0A0] w-full mr-3  px-4 py-2 caret-white">
                                            {selectedOption1 || "United state"}
                                            <img
                                                src={Logos.Arrowdown}
                                                alt="Dropdown Arrow"
                                                style={{
                                                    transform: isOpen2
                                                        ? "rotate(180deg)"
                                                        : "rotate(0deg)",
                                                }}
                                                className="cursor-pointer w-[17px] ml-2"
                                            />
                                        </div>
                                        {isOpen2 && (
                                            <div className="bg-white absolute  shadow w-full ">
                                                <div
                                                    className={`p-2 ${
                                                        selectedOption1 == "Pakistan"
                                                            ? "text-[#A0A0A0]"
                                                            : "text-black"
                                                    } `}
                                                    onClick={() => handleOptionClick2("Pakistan")}
                                                >
                                                    <p className="xxxxl:text-[20px] lg:text-[14px]">
                                                        Pakistan
                                                    </p>
                                                    <p></p>
                                                </div>
                                                <hr/>
                                                <div
                                                    className={`p-3 ${
                                                        selectedOption1 == "UAE"
                                                            ? "text-[#A0A0A0]"
                                                            : "text-black"
                                                    } `}
                                                    onClick={() => handleOptionClick2("United State")}
                                                >
                                                    <p className="xxxxl:text-[20px] lg:text-[14px]">
                                                        United State
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">
                                        Street Address
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">*</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">City</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <div className="text-[24px] mt-1 ml-1">*</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">State</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <div className="text-[24px] mt-1 ml-1 ">*</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">Zip code</p>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <div className="text-[24px] mt-1 ml-1 ">*</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">Employment</p>
                                    <div className="p-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <div className="text-[24px] mt-1 ml-1 ">*</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3 ">
                                <div className="flex pt-1 items-center">
                                    <p className="subtitle-size">
                                        Donation consent
                                    </p>
                                    <div className="p-1">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <ToggleButton
                                        isActive={true}
                                        width="[40px]"
                                        height="[22px]"
                                    />
                                    <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">*</div>
                                </div>
                            </div>
                            <textarea
                                className=" h-[90px] placeholder-input-modal p-3 text-[11px] xxxxl:text-[20px] placeholder-2xl w-full outline-none placeholder-[20px] text-[#A0A0A0]  rounded shadow-md"
                                placeholder="Please subscribe me to your mailing list and send periodic updates and offers"
                            ></textarea>
                            <div className="flex justify-between pt-3 ">
                                <div className="flex pt-1">
                                    <p className="subtitle-size">Disclaimer</p>
                                    <div className="p-1">
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
                            <div className=" min-h-[140px] p-3 leading-3  rounded shadow-md">
                                <p className=" text-[#A0A0A0] leading-4"
                                   style={{fontSize: "calc(0.5rem + 0.2vw)"}}
                                >
                                    [Sample legal text] The personal data you have provided will
                                    be processed by XXXXX for purposes of providing you the
                                    service. The legal basis of the processing is XXXXX. your data
                                    will not be transferred nor assigned to third parties. You can
                                    exercise your data, as well as the other rights granted by law
                                    by sending an email to XXXXX. For further information, please
                                    check our privacy policy XXXXX.
                                </p>
                            </div>
                            <div className="flex justify-between py-3">
                                <div className="flex items-center">
                                    <img
                                        src={Logos.SIcon}
                                        alt="icon"
                                        className="lg:w-[27px] xxxs:w-[24px] ml-2"
                                    />
                                    <p className="subtitle-size ml-3">
                                        Stripe account
                                    </p>
                                </div>
                                <div className="">
                                    <button
                                        className="bg-[#E7EEF9] border-none
                  lg:w-[100px] xxxs:w-[70px]  text-center flex py-2
                  justify-center h-[34px] xxxxl:text-[16px] xxxs:text-[11px] lg:text-[14px]
                   text-[#3A37A6] rounded"
                                    >
                                        Connected
                                    </button>
                                </div>
                            </div>
                            <div className="py-3">
                                <p className="text-[12px] xxxxl:text-[16px] text-[#A0A0A0] leading-[15px]">
                                    Collect payment with your stripe account.If you don't already
                                    have one,you can create new one when connecting.
                                </p>
                            </div>
                            <div className="flex justify-between items-center pt-3 ">
                                <div className="flex pt-1 items-center">
                                    <p className="subtitle-size">Credit card</p>
                                    <div className="p-1">
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
                            <div className="flex justify-between items-center pt-2 ">
                                <div className="flex pt-1 items-center">
                                    <p className="subtitle-size ">
                                        Bank transfer
                                    </p>
                                    <div className="p-1">
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
                            <div
                                className="flex justify-between py-2 mt-2 px-2 border-l-[13px] rounded border-[#AEBFF2] shadow-md">
                                <p className=" mt-1 subtitle-size">
                                    Destination
                                </p>
                                <img
                                    src={Logos.DestinationIcon}
                                    alt="icon"
                                    className="w-[40px] "
                                />
                            </div>
                        </div>

                        <div className="py-3 px-2">
                            <button
                                className="text-white text-center w-full flex justify-center py-2 text-[15px] rounded bg-[#94A2F2] border-none h-[40px] ">
                                Save
                            </button>
                        </div>
                    </div>
                </div>


                <div className="w-[100%] lg:ml-3   rounded border-[1px] shadow-md border-[#EBEBEB]">
                    {activeScreen === "desktop" && (
                        <div>
                            <div
                                className="flex   justify-center  xxxxl:text-[20px] text-[13px] lg:text-[13px] xxxs:text-[10px] text-[#A0A0A0] mt-3">
                                This is a preview. No data will be recorded.
                            </div>

                            <div className="flex  lg:flex-nowrap w-full px-4 xxxs:flex-wrap justify-between gap-1">
                                <div className="flex w-[50%] justify-center flex-auto">
                                    <img
                                        src={Logos.GirlImg}
                                        alt="Girl Img"
                                        className=" px-5"
                                        style={{height: "calc(100vh - 170px)"}}
                                    />
                                </div>
                                <div
                                    className="w-[50%] rounded flex  flex-auto justify-center  items-center border-[1px]  shadow-md border-[#EBEBEB] mb-4 mt-1">
                                    {activeContent === "content1" && (
                                        <div className="w-[80%] flex flex-col gap-[30px] py-2 justify-between">
                                            <div className="flex justify-center  gap-2">
                                                <div className="bg-[#94A2F2] w-[10px] h-[10px] rounded-full"></div>
                                                <div className="bg-[#EBEBEB] w-[10px] h-[10px] rounded-full"></div>
                                                <div className="bg-[#EBEBEB] w-[10px] h-[10px] rounded-full"></div>
                                            </div>
                                            <div
                                                className="w-[350px] h-[45vh] xxxs:w-full flex flex-col mx-auto justify-center">
                                                <div
                                                    className="flex justify-center xxxxl:text-[26px] mt-7 text-[15px] text-[#3A37A6] tracking-wider">
                                                    Select an amount
                                                </div>
                                                <div className="w-[350px] flex flex-col justify-center mx-auto">
                                                    <div
                                                        className="grid grid-cols-3  justify-items-center pt-8 xxxs:gap-1 lg:gap-2 xxxxl:gap-7 lg:px-14  py-2">
                                                        <button
                                                            onClick={() => handleClick("25$")}
                                                            className="w-[60px] py-2 h-[35px] xxxxl:w-[85px]  xxxxl:h-[45px]  xxxxl:text-[20px] flex justify-center text-[12px] bg-[#AEBFF2] text-white rounded border-none focus:bg-[#3A37A6] "
                                                        >
                                                            $25
                                                        </button>
                                                        <button
                                                            onClick={() => handleClick("50$")}
                                                            className="w-[60px] py-2 h-[35px] xxxxl:w-[85px]  xxxxl:h-[45px]  xxxxl:text-[20px] flex justify-center text-[12px] bg-[#AEBFF2] text-white rounded border-none focus:bg-[#3A37A6]"
                                                        >
                                                            $50
                                                        </button>
                                                        <button
                                                            onClick={() => handleClick("100$")}
                                                            className="w-[60px] py-2 h-[35px] xxxxl:w-[85px]  xxxxl:h-[45px]  xxxxl:text-[20px] flex justify-center text-[12px]  bg-[#AEBFF2] text-white rounded border-none focus:bg-[#3A37A6]"
                                                        >
                                                            $100
                                                        </button>
                                                        <button
                                                            onClick={() => handleClick("25$")}
                                                            className="w-[60px] py-2 h-[35px] xxxxl:w-[85px]  xxxxl:h-[45px]  xxxxl:text-[20px] flex justify-center text-[12px] bg-[#AEBFF2] text-white rounded border-none focus:bg-[#3A37A6]"
                                                        >
                                                            $25
                                                        </button>
                                                        <button
                                                            onClick={() => handleClick("50$")}
                                                            className="w-[60px] py-2 h-[35px] xxxxl:w-[85px]  xxxxl:h-[45px]  xxxxl:text-[20px]  flex justify-center text-[12px] bg-[#AEBFF2] text-white rounded border-none focus:bg-[#3A37A6]"
                                                        >
                                                            $50
                                                        </button>
                                                        <button
                                                            onClick={() => handleClick("100$")}
                                                            className="w-[60px] py-2 h-[35px] xxxxl:w-[85px]  xxxxl:h-[45px]  xxxxl:text-[20px] flex justify-center text-[12px] bg-[#AEBFF2] text-white rounded border-none focus:bg-[#3A37A6]"
                                                        >
                                                            $100
                                                        </button>
                                                    </div>
                                                    <div className="flex xxxs:px-0 lg:px-8 justify-center">
                                                        <input
                                                            type="text"
                                                            value={inputValue}
                                                            onChange={(e) => setInputValue(e.target.value)}
                                                            className="w-[80%]  px-2 rounded h-[35px] placeholder-input-modal xxxxl:w-[93%] xxxxl:mt-[10px] xxxxl:h-[40px] xxxxl:text-[20px] text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                            placeholder="$100"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="flex justify-center"
                                                onClick={() => {
                                                    toggleContent("content2"), Title1();
                                                }}
                                            >
                                                <button
                                                    className="w-[110px] py-2 h-[40px] xxxxl:h-[50px] xxxxl:text-[20px] rounded  flex justify-center border-none text-[15px] text-white cursor-pointer bg-[#94A2F2]">
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {activeContent === "content2" && (
                                        <div className="w-[80%] py-2 flex flex-col gap-12 justify-center">
                                            <div className="flex justify-center py-3 gap-2">
                                                <div className="bg-[#94A2F2] w-[10px] h-[10px] rounded-full"></div>
                                                <div className="bg-[#EBEBEB] w-[10px] h-[10px] rounded-full"></div>
                                                <div className="bg-[#EBEBEB] w-[10px] h-[10px] rounded-full"></div>
                                            </div>
                                            <div
                                                className="flex justify-center xxxxl:text-[26px]  text-[15px] text-[#3A37A6] tracking-wider">
                                                Enter an amount
                                            </div>

                                            <div className="flex px-2 justify-center">
                                                <input
                                                    type="text"
                                                    value={inputValue}
                                                    onChange={(e) => setInputValue(e.target.value)}
                                                    className="lg:w-[220px] placeholder-input-modal  xxxs:w-full xxxxl:text-[20px] px-2 rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                    placeholder="$100"
                                                />
                                            </div>
                                            <div
                                                className="flex justify-center   mt-36"
                                                onClick={() => {
                                                    toggleContent("content3"), Title2();
                                                }}
                                            >
                                                <button
                                                    className="w-[110px] py-2 h-[40px] xxxxl:h-[50px] xxxxl:text-[20px] rounded  flex justify-center border-none text-[15px] cursor-pointer text-white bg-[#94A2F2]">
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {activeContent === "content3" && (
                                        <div className="   overflow-scroll h-[70vh]  ">
                                            <div className="w-[100%] flex justify-center">
                                                <div className="w-[80%] flex flex-col gap-12  justify-center">
                                                    <div className="flex justify-center py-3 gap-2 ">
                                                        <div
                                                            className="bg-[#94A2F2] w-[10px] h-[10px] rounded-full"></div>
                                                        <div
                                                            className="bg-[#94A2F2] w-[10px] h-[10px] rounded-full"></div>
                                                        <div
                                                            className="bg-[#EBEBEB] w-[10px] h-[10px] rounded-full"></div>
                                                    </div>
                                                    <div>
                                                        <div className=" ">
                                                            <p className="flex  justify-center mt-3 xxxxl:text-[24px] lg:text-[14px]">
                                                                $35.00
                                                            </p>
                                                            <p className="text-[#3A37A6] xxxxl:text-[26px] flex mt-2 justify-center tracking-wider  text-[15px]">
                                                                Enter Your Information
                                                            </p>
                                                        </div>
                                                        <div
                                                            className="flex flex-col lg:w-[320px]  justify-center mx-auto">
                                                            <div className="flex flex-col justify-center  mt-5">
                                                                <div className="flex  justify-center gap-2">
                                                                    <div>
                                                                        <p className="lg:text-[14px] xxxxl:text-[20px]">
                                                                            First Name
                                                                        </p>
                                                                        <input
                                                                            type="text"
                                                                            className=" mt-1  px-2 rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <p className="lg:text-[14px] xxxxl:text-[20px]">
                                                                            Last Name
                                                                        </p>
                                                                        <input
                                                                            type="text"
                                                                            className=" mt-1    px-2 rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col m justify-start">
                                                                    <p className=" ml-1 py-2 lg:text-[14px] xxxxl:text-[20px]">
                                                                        Email
                                                                    </p>
                                                                    <div className="flex justify-center">
                                                                        <input
                                                                            type="text"
                                                                            className=" mt-1 w-[312px] relative  px-2 rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex justify-center gap-3 mt-2">
                                                                <div>
                                                                    <p className="lg:text-[14px] xxxxl:text-[20px]">
                                                                        Address
                                                                    </p>
                                                                    <input
                                                                        type="text"
                                                                        className="lg:w-[205px] mt-1 xxxs:w-full px-2 rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <p className="lg:text-[14px] xxxxl:text-[20px]">
                                                                        Unit
                                                                    </p>
                                                                    <input
                                                                        type="text"
                                                                        className="lg:w-[90px]  mt-1 xxxs:w-full px-2  rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="flex ">
                                                                <div className="">
                                                                    <p className="pt-2 ml-2 text-[13px] xxxxl:text-[20px]">
                                                                        Are you currently employed?
                                                                    </p>
                                                                    <div className="flex">
                                                                        <div className="flex p-2">
                                                                            <input type="radio" name="" id=""/>
                                                                            <p className="ml-2 checked:[#3A37A6] xxxxl:text-[20px]">
                                                                                Yes
                                                                            </p>
                                                                        </div>
                                                                        <div className="flex p-2">
                                                                            <input type="radio" name="" id=""/>
                                                                            <p className="ml-2 xxxxl:text-[20px]">
                                                                                No
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-center gap-2 mt-2">
                                                                <div>
                                                                    <p className="lg:text-[14px] xxxxl:text-[20px]">
                                                                        Occupation
                                                                    </p>
                                                                    <input
                                                                        type="text"
                                                                        className="  mt-1 xxxs:w-full  px-2 rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <p className="lg:text-[14px] xxxxl:text-[20px]">
                                                                        Employer
                                                                    </p>
                                                                    <input
                                                                        type="text"
                                                                        className=" mt-1 xxxs:w-full  px-2 rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3  min-h-[190px] p-3 rounded shadow-md">
                                                            <div className="flex  items-start">
                                                                <input
                                                                    type="checkbox"
                                                                    name=""
                                                                    id=""
                                                                    className="mt-1 accent-[#3A37A6] text-[#A0A0A0]"
                                                                />
                                                                <p className="text-[11px] xxxxl:text-[20px] px-1 text-[#A0A0A0]">
                                                                    [Sample legal text] The personal data you have
                                                                    provided will be processed by XXXXX for
                                                                    purposes of providing you the service. The
                                                                    legal basis of the processing is XXXXX. your
                                                                    data will not be transferred nor assigned to
                                                                    third parties. You can exercise your data, as
                                                                    well as the other rights granted by law by
                                                                    sending an email to XXXXX. For further
                                                                    information,please check our privacy policy
                                                                    XXXXX.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className=" xxxs:p-1">
                                                            <p className="xxxxl:text-[20px]">
                                                                Contribution rules
                                                            </p>
                                                            <div
                                                                className="mt-2  min-h-[300px] pt-2 px-1 rounded shadow-md">
                                                                <ul className="p-2 text-[11px] xxxxl:text-[20px] text-[#A0A0A0] ">
                                                                    <li>
                                                                        . I am a U.S. citizen or lawfully admitted
                                                                        permanent resident (i,e., green card
                                                                        holder).{" "}
                                                                    </li>
                                                                    <li>
                                                                        . This Contribution is made from my own
                                                                        funds, and funds are not being provided to
                                                                        me by another personor entity for the
                                                                        purpose of making this contribution.
                                                                    </li>
                                                                    <li>. I am at least eighteen years old.</li>
                                                                    <li>. I am not a federal contractor.</li>
                                                                    <li>
                                                                        . I am making this contribution with my own
                                                                        personal creadit card and not with my own
                                                                        personal creadit card and not with a
                                                                        corporater or business creadit card or a
                                                                        card issued to another person.
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex justify-center  py-2"
                                                        onClick={() => {
                                                            toggleContent("content4"), Title3();
                                                        }}
                                                    >
                                                        <button
                                                            className="w-[110px] py-2 h-[40px] xxxxl:h-[50px] xxxxl:text-[20px] rounded  flex justify-center border-none text-[15px] cursor-pointer text-white bg-[#94A2F2]">
                                                            Next
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeContent === "content4" && (
                                        <div
                                            className="lg:w-[80%] xxxs:w-full flex flex-col py-2 gap-7  justify-center">
                                            <div className="flex justify-center gap-2">
                                                <div className="bg-[#94A2F2] w-[10px] h-[10px] rounded-full"></div>
                                                <div className="bg-[#94A2F2] w-[10px] h-[10px] rounded-full"></div>
                                                <div className="bg-[#94A2F2] w-[10px] h-[10px] rounded-full"></div>
                                            </div>
                                            <div className=" ">
                                                <p className="flex  justify-center mt-3 xxxxl:text-[24px] lg:text-[14px]">
                                                    $35.00
                                                </p>
                                                <p className="text-[#3A37A6] xxxxl:text-[26px] flex mt-2 justify-center tracking-wider  text-[15px]">
                                                    Enter Payment Details
                                                </p>
                                            </div>
                                            <div className="p-4">
                                                <div className="flex justify-center ">
                                                    <div className="flex justify-center ">
                                                        <div>
                                                            <p
                                                                className={`text-center cursor-pointer  xxxxl:text-[26px] text-${
                                                                    isClicked ? "[#3A37A6]" : "[#A0A0A0]"
                                                                } text-[12px]`}
                                                                onClick={() => {
                                                                    TabClick("credit"),
                                                                        toggleTab("Tabcontent1"),
                                                                        Title3;
                                                                }}
                                                            >
                                                                Credit card
                                                            </p>
                                                            <hr
                                                                className={`border-${
                                                                    isClicked ? "[#3A37A6]" : "[#CEDEF2]"
                                                                } border-[1px] lg:w-[140px]  xxxxl:w-[260px]  xxxs:w-[100px] mt-1`}
                                                            />
                                                        </div>
                                                        <div>
                                                            <p
                                                                className={`text-center xxxxl:text-[26px] cursor-pointer text-${
                                                                    isClicked ? "[#A0A0A0]" : "[#3A37A6]"
                                                                } text-[12px]`}
                                                                onClick={() => {
                                                                    TabClick(),
                                                                        toggleTab("Tabcontent2"),
                                                                        Title4();
                                                                }}
                                                            >
                                                                Bank account
                                                            </p>
                                                            <hr
                                                                className={`border-${
                                                                    isClicked ? "[#CEDEF2]" : "[#3A37A6]"
                                                                } border-[1px] xxxxl:w-[260px] lg:w-[140px]  xxxs:w-[100px] mt-1`}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {activeTab === "Tabcontent1" && (
                                                    <div className="">
                                                        <div className="flex justify-center">
                                                            <div
                                                                className=" px-4  pt-5 lg:px-4 lg:text-[14px] xxxs:text-[12px] ">
                                                                <p className="lg:text-[14px]  xxxxl:text-[20px]">
                                                                    Credit card number
                                                                </p>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter you email address"
                                                                    className=" mt-1 lg:w-[280px]  xxxs:w-[210px]  px-2 xxxxl:w-[350px]  xxxxl:text-[20px] xxxxl:h-[40px] rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex  justify-center  gap-2 mt-2 py-2">
                                                            <div className="">
                                                                <p className="lg:text-[14px]  xxxxl:text-[20px]">
                                                                    Expiration
                                                                </p>
                                                                <input
                                                                    type="text"
                                                                    placeholder="MM/YY"
                                                                    className=" mt-1 lg:w-[135px] xxxxl:w-[170px]  xxxxl:text-[20px] xxxxl:h-[40px] xxxs:w-[100px] px-2 rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                                />
                                                            </div>
                                                            <div className="">
                                                                <p className="lg:text-[14px]  xxxxl:text-[20px]">
                                                                    CVV
                                                                </p>
                                                                <input
                                                                    type="text"
                                                                    className=" mt-1 lg:w-[135px]  xxxs:w-[100px] xxxxl:w-[170px]  xxxxl:text-[20px] xxxxl:h-[40px] px-2 rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab === "Tabcontent2" && (
                                                    <div>
                                                        <div className="pt-5 px-1">
                                                            <div className="flex">
                                                                <p className="xxxxl:text-[20px]">
                                                                    Account number
                                                                </p>
                                                                <img
                                                                    src={Logos.InfoIcon}
                                                                    alt="info icon"
                                                                    className="w-3 ml-1"
                                                                />
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className=" mt-1 xxxs:w-full  px-2 rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                            />
                                                        </div>
                                                        <div className="pt-5 px-1">
                                                            <div className="flex">
                                                                <p className="xxxxl:text-[20px]">
                                                                    Routing number
                                                                </p>
                                                                <img
                                                                    src={Logos.InfoIcon}
                                                                    alt="info icon"
                                                                    className="w-3 ml-1"
                                                                />
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className=" mt-1 xxxs:w-full  px-2 rounded h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex justify-center  gap-3 ">
                                                <button
                                                    className="w-[110px]  py-2 h-[40px] xxxxl:h-[50px] xxxxl:text-[20px] rounded  flex justify-center border-[#94A2F2] border-[1px] text-[15px] text-[#94A2F2]  cursor-pointer">
                                                    Back
                                                </button>
                                                <button
                                                    className="w-[110px] py-2 h-[40px] xxxxl:h-[50px] xxxxl:text-[20px] rounded  flex justify-center border-none text-[15px] text-white cursor-pointer bg-[#94A2F2]">
                                                    Donate
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {activeScreen === "mobile" &&
                        (activeContent === "content1" || activeContent === "content2") && (
                            <div>
                                <div className="flex justify-center py-[20px]">
                                    <img
                                        src={Logos.DonationMobile}
                                        alt="mobile"
                                        className="w-[220px] xxxxl:w-[400px] xxxxl:pt-16"
                                    />
                                </div>
                            </div>
                        )}
                    {activeScreen === "mobile" && activeContent === "content3" && (
                        <div>
                            <div className="flex justify-center gap-4 py-[20px]">
                                <img
                                    src={Logos.MobileInformation}
                                    alt="mobile"
                                    className="w-[220px] xxxxl:w-[400px] xxxxl:pt-16"
                                />
                                <img
                                    src={Logos.MobileInformation2}
                                    alt="mobile"
                                    className="w-[220px] xxxxl:w-[400px] xxxxl:pt-16"
                                />
                            </div>
                        </div>
                    )}
                    {activeScreen === "mobile" && activeContent === "content4" && (
                        <div>
                            <div className="flex  justify-center py-[20px]">
                                <img
                                    src={Logos.PaymentMobile}
                                    alt="mobile"
                                    className="w-[220px] xxxxl:w-[400px] xxxxl:pt-16"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Donations;
