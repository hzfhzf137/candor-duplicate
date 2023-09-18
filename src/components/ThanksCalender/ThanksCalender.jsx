import React, {useState} from "react";
import {Logos} from "../../assets";
import {useNavigate} from "react-router";
import LibraryDeletePopup from "../../components/LibraryDeletePopup/LibraryDeletePopup";
import InteractionDropdown from "../InteractionDropdown/InteractionDropdown";
import ImageButtons from "../ImageButtons/ImageButtons";
import ToggleButton from "../ToggleButton/ToggleButton";
import ToolTip from "../ToolTip/ToolTip";

const ThanksCalender = () => {
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
    const days = [
        {
            name: "SUN",
        },
        {
            name: "MON",
        },
        {
            name: "TUE",
        },
        {
            name: "WED",
        },
        {
            name: "THU",
        },
        {
            name: "FRI",
        },
        {
            name: "SAT",
        },
    ];

    return (
        <div className="">
            <div className="flex  justify-between items-center">
                <div className="flex">
                    <img
                        src={Logos.BreadcrumbBack}
                        alt="icon"
                        className="ml-2 w-[8px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />
                    <p className=" ml-4  text-[21px] tracking-wider 2xl:text-[24px]">
                        Calender details
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
                                    <img src={Logos.MonitorImg} alt="Monitor Img"/>
                                ) : (
                                    <img src={Logos.MoniterImg1} alt="Monitor Img dull"/>
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
                                    <img src={Logos.SmartPhone1} alt="Smart Phone Img "/>
                                ) : (
                                    <img src={Logos.SmartPhoneImg} alt="Smart Phone Img dull"/>
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
                    className="lg:w-1/3 2xl:w-1/4  xxxs:w-[100%] overflow-scroll rounded border-[1px] shadow-md border-[#EBEBEB] pt-1 ">
                    <div className="flex justify-between px-3 pt-2 ">
                        <div className="flex ">
                            <div
                                className="h-5 w-5 bg-[#3A37A6] 2xl:mt-2 text-white rounded-full flex justify-center items-center text-[10px]">
                                04
                            </div>
                            <p className="text-[15px] ml-3 text-[#3A37A6]  2xl:text-[24px]">
                                Thanks
                            </p>
                        </div>
                        <div className="flex">
                            <img
                                src={Logos.EditIcon2}
                                alt="icon"
                                className="w-[19px] mb-5 mr-2  xxxl:w-[27px]"
                            />
                            <img
                                src={Logos.DonationCopyIcon}
                                alt="icon"
                                className="w-[19px] mb-5 mr-2  xxxl:w-[27px] "
                            />
                            <img
                                src={Logos.BlueTrash}
                                alt="icon"
                                className="w-[19px] mb-5  xxxl:w-[27px] "
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

                    <p className="text-[16px] tracking-wider p-4  2xl:text-[20px]">
                        Interaction Type
                    </p>
                    <div className="flex flex-col justify-between h-full ">
                        <div className="flex flex-col justify-center">
                            <InteractionDropdown
                                selectedValue={"Calender"}
                                Img={Logos.CalendarIcon}
                            />
                            <ImageButtons/>
                            <div className="px-3 py-2">
                                <div className="flex justify-between pb-1">
                                    <div className="flex pt-1">
                                        <p className="text-[12px]  2xl:text-[18px]">Fit Video</p>
                                        <div className="px-1 py-1 2xl:pt-2">
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
                                <div className="flex justify-between py-2 pb-1">
                                    <div className="flex pt-1">
                                        <p className="text-[12px] 2xl:text-[18px]">
                                            Delay Interaction
                                        </p>
                                        <div className="px-1 py-1 2xl:pt-2">
                                            <ToolTip/>
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="2"
                                            className="bg-[#F5F5F5] text-[#A0A0A0] text-center outline-none px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px] text-[13px]"
                                            name=""
                                            id=""
                                        />
                                    </div>
                                </div>
                                <hr/>
                                <div className="flex justify-between pt-3 pb-2">
                                    <div className="flex pt-1">
                                        <p className="text-[12px] 2xl:text-[18px]">
                                            Capture contact details
                                        </p>
                                        <div className="px-1 py-1 2xl:pt-2">
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
                                <p className="text-[12px] py-2 2xl:text-[18px]">
                                    Overlay texts
                                </p>
                                <textarea
                                    className=" outline-none w-full 2xl:text-[18px] min-h-[80px] resize-none text-[#A0A0A0] text-[11px] p-2 leading-3  rounded   border-[1px] border-[#EBEBEB]"
                                    onClick={handleClick}
                                    placeholder=" Lorem is the dummy text of the printing and type setting industry. Lorem ipsum is the industry standard dummy text ever since 1500s."
                                ></textarea>
                                <p className="lg:text-[11px] py-2 xxxs:text-[10px]  2xl:text-[16px] text-[#94A2F2]">
                                    Learn how to pipe in variables (e.g. name) into your overlay
                                    text.
                                </p>
                                <div className="flex pt-1">
                                    <p className="text-[12px]  2xl:text-[18px]">
                                        Add an appointment scheduling link
                                    </p>
                                    <div className="px-1 py-1 2xl:pt-2">
                                        <ToolTip/>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="e.g https://calendly.com/jhon-doe/30min"
                                    className="w-full h-[40px]  2xl:text-[18px] bg-[#F5F5F5] my-2 px-2 text-[13px] outline-none rounded"
                                />
                                <p className="lg:text-[14px] xxxs:text-[11px]  2xl:text-[18px]">
                                    Work with these tools
                                </p>
                                <div className="flex gap-3 py-3 ">
                                    <img src={Logos.CalenderTool1} alt="Tool1" className="w-8"/>
                                    <img src={Logos.CalenderTool2} alt="Tool2" className="w-8"/>
                                    <img src={Logos.CalenderTool3} alt="Tool3" className="w-8"/>
                                    <img src={Logos.CalenderTool4} alt="Tool4" className="w-8"/>
                                </div>
                                <div
                                    className="flex justify-between py-2 mt-2 px-2 border-l-[13px] rounded border-[#AEBFF2] shadow-md">
                                    <p className="text-[15px] mt-1  2xl:text-[18px]">
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
                    </div>
                    <div className="px-3">
                        <button
                            className="text-white text-center w-full flex justify-center py-2 text-[15px] rounded bg-[#94A2F2] border-none h-[40px] ">
                            Save
                        </button>
                    </div>
                </div>

                {activeScreen === "desktop" && (
                    <div className="w-full border-[1px]   shadow-md rounded-md">
                        <div className="flex  lg:flex-nowrap w-full xxxs:flex-wrap justify-between gap-1">
                            <div className="flex w-[50%]  flex-auto">
                                <img
                                    src={Logos.GirlImg}
                                    alt="Girl Img"
                                    className=" px-5 flex flex-auto"
                                    style={{height: "calc(100vh - 130px)"}}
                                />
                            </div>
                            <div
                                className=" rounded w-[50%] flex flex-auto 2xl:justify-end justify-center  items-center mb-10 ">
                                <div
                                    style={{height: "calc(100vh - 170px)"}}
                                    className=" w-full"
                                >
                                    <div className=" flex  justify-end ">
                                        <div className="text-center w-[280px]  2xl:w-full 2xl:pt-24 pt-8">
                                            <p className="text-[#A0A0A0]  2xl:text-[26px] items-center">
                                                Jonathan Simpson
                                            </p>
                                            <p className="2xl:text-[26px] text-[14px]">Phone call</p>
                                        </div>
                                        <img
                                            src={Logos.ThanksCalenderCorner}
                                            alt=""
                                            className="w-[100px] 2xl:w-[280px]"
                                        />
                                    </div>
                                    <div className="flex md:px-5  xxxs:px-4">
                                        <div className="flex items-center">
                                            <img
                                                src={Logos.CalenderClock}
                                                alt=""
                                                className="w-[30px] 2xl:w-[50px]"
                                            />
                                            <p className="text-[14px] px-2  2xl:text-[20px]">15min</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img
                                                src={Logos.CalenderPhone}
                                                alt=""
                                                className="w-[30px] 2xl:w-[50px]"
                                            />
                                            <p className="text-[14px] px-2 2xl:text-[20px]">
                                                Phone Call
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-[#A0A0A0] md:px-5 xxxs:px-4 2xl:text-[18px] lg:text-[12px] pt-1 xxxs:text-[10px]">
                                        Schedule a time to speak over the phone. You can ask
                                        questions, share feedback, or just shoot the breeze.
                                    </p>
                                    <div className=" flex  pt-2  justify-center items-center justify-items-center">
                                        <div className=" flex flex-col text-center shadow justify-center">
                                            <div className=" flex  justify-between py-1 mx-auto px-2   w-[300px]">
                                                <img
                                                    src={Logos.ThanksCalenderArrowRight}
                                                    alt="Close Button"
                                                    className="w-[25px] "
                                                />
                                                <p className="px-6  text-[16px]">June 2022</p>
                                                <img
                                                    src={Logos.ThanksCalenderArrowLeft}
                                                    alt="Close Button"
                                                    className="w-[25px]"
                                                />
                                            </div>
                                            <div
                                                className="xxxs:ml-0 ml-6 w-[400px] xxxs:w-[330px]  2xl:w-[900px]  2xl:h-[570px] pt-3 grid grid-cols-7 min-h-[230px]   items-center justify-center  justify-items-center text-center">
                                                {days.map((item) => {
                                                    return (
                                                        <div className="text-[#A0A0A0]">
                                                            {item.name}
                                                            <hr className="w-[65px]"/>
                                                        </div>
                                                    );
                                                })}

                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div className="text-[#A0A0A0]">01</div>
                                                <div className="text-[#A0A0A0]">02</div>
                                                <div className="text-[#A0A0A0]">03</div>
                                                <div className="text-[#A0A0A0]">04</div>
                                                <div className="text-[#A0A0A0]">05</div>
                                                <div className="text-[#A0A0A0]">06</div>
                                                <div className="text-[#A0A0A0]">07</div>
                                                <div className="text-[#A0A0A0]">08</div>
                                                <div className="text-[#A0A0A0]">09</div>
                                                <div className="text-[#A0A0A0]">10</div>
                                                <div className="text-[#A0A0A0]">11</div>
                                                <div className="text-[#A0A0A0]">12</div>
                                                <div className="text-[#A0A0A0]">13</div>
                                                <div
                                                    className="text-white bg-[#94A2F2] w-[28px] text-center h-[28px] rounded-md mb-2 ">
                                                    14
                                                </div>
                                                <div className="text-[#A0A0A0]">15</div>
                                                <div className="text-[#A0A0A0]">16</div>
                                                <div className="text-[#A0A0A0]">17</div>
                                                <div className="text-[#A0A0A0]">18</div>
                                                <div className="text-[#A0A0A0]">19</div>
                                                <div>20</div>
                                                <div>21</div>
                                                <div>22</div>
                                                <div>23</div>
                                                <div>24</div>
                                                <div className="text-[#A0A0A0]">25</div>
                                                <div className="text-[#A0A0A0]">26</div>
                                                <div className="text-[#A0A0A0]">27</div>
                                                <div className="text-[#A0A0A0]">28</div>
                                                <div className="text-[#A0A0A0]">29</div>
                                                <div className="text-[#A0A0A0]">31</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-1 flex items-center">
                                        <img src={Logos.CalenderGlobal} alt="Goblet icob"/>
                                        <p className="text-[13px] px-4  2xl:text-[18px]">
                                            Eastern Time-US & Canada(11:09am)
                                        </p>
                                        <img src={Logos.DropdownIcon} alt="dropdown icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeScreen === "mobile" && (
                    <div className="w-full border-[1px]   shadow-md rounded-md">
                        <div className="flex justify-center py-[20px]">
                            <img
                                src={Logos.CalenderMobile}
                                alt="mobile"
                                className="w-[220px] xxxxl:w-[400px] xxxxl:pt-16"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ThanksCalender;
