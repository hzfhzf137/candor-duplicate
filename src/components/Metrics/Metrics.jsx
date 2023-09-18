import React, {useState} from "react";
import {Logos} from "../../assets";
import ToolTip from "../ToolTip/ToolTip";
import ToggleButton from "../ToggleButton/ToggleButton";
import {useNavigate} from "react-router";
import {Tooltip} from "antd";

const ContactsModule = () => {
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/video");
    }

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const [isOpen3, setIsOpen3] = useState(false);
    const togglePopup3 = () => {
        setIsOpen3(!isOpen3);
    };

    const data = [
        {
            img: Logos.IntroPeople,
            title: "Introduction",
        },
        {
            img: Logos.PoliciesPeople,
            title: "Policies",
        },
        {
            img: Logos.DonatePeople,
            title: "Donate",
        },
        {
            img: Logos.ThanksPeople,
            title: "Thanks",
        },
    ];
    const dates = [
        {
            entity: "",
        },
        {
            entity: "",
        },
        {
            entity: "",
        },
        {
            entity: "1",
        },
        {
            entity: "2",
        },
        {
            entity: "3",
        },
        {
            entity: " 4",
        },
        {
            entity: "5",
        },
        {
            entity: " 6",
        },
        {
            entity: " 7",
        },
        {
            entity: "8",
        },
        {
            entity: "9",
        },
        {
            entity: "10",
        },
        {
            entity: "11",
        },
        {
            entity: "12",
        },
        {
            entity: "13",
        },
        {
            entity: "14",
            bg: "#94A2F2",
            color: "white",
        },
        {
            entity: "15",
            color: "#A0A0A0",
        },
        {
            entity: "16",
            color: "#A0A0A0",
        },
        {
            entity: "17",
            color: "#A0A0A0",
        },
        {
            entity: " 18",
            color: "#A0A0A0",
        },
        {
            entity: "19",
            color: "#A0A0A0",
        },
        {
            entity: "20",
            color: "#A0A0A0",
        },
        {
            entity: "21",
            color: "#A0A0A0",
        },
        {
            entity: "22",
            color: "#A0A0A0",
        },
        {
            entity: "23",
            color: "#A0A0A0",
        },
        {
            entity: "24",
            color: "#A0A0A0",
        },
        {
            entity: "25",
            color: "#A0A0A0",
        },
        {
            entity: "26",
            color: "#A0A0A0",
        },
        {
            entity: "27",
            color: "#A0A0A0",
        },
        {
            entity: "28",
            color: "#A0A0A0",
        },
        {
            entity: "29",
            color: "#A0A0A0",
        },
        {
            entity: "30",
            color: "#A0A0A0",
        },

        {
            entity: "",
        },
    ];
    const days = [
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
        {
            name: "SUN",
        },
    ];
    const data2 = [
        {
            title: "Visited",
        },
        {
            img: Logos.PoliciesPeople,
            title: "Desktop",
        },
        {
            img: Logos.DonatePeople,
            title: "Interacted",
        },
        {
            img: Logos.ThanksPeople,
            title: "Mobile",
        },
        {
            img: Logos.ThanksPeople,
            title: "Completed",
        },
        {
            img: Logos.ThanksPeople,
            title: "Tablet",
        },
    ];
    return (
        <>
            <div className="  ">
                <div className="flex items-center justify-between p-1">
                    <div className="flex items-center justify-start gap-3 w-full">
                        <img
                            src={Logos.VectorLeft}
                            alt="Vector Left"
                            className="cursor-pointer w-[7px]"
                            onClick={() => {
                                VideoHandler();
                            }}
                        />
                        <h1 className="font-medium title-size text-[#262626]">Polices</h1>
                    </div>
                </div>
                <div
                    style={{height: "calc(100vh - 120px)"}}
                    className="w-full shadow-md flex lg:flex-nowrap justify-between xxxs:flex-wrap rounded-lg  "
                >
                    <div
                        className=" w-[20vw]   border-[1px] border-[#EBEBEB] border-solid shadow-md  flex-auto mx-auto overflow-y-scroll overflow-x-hidden  rounded-lg  ">
                        <div
                            className="  border-b-[1px] border-[#EBEBEB] border-solid px-3 py-4 flex justify-between items-center gap-1 sticky top-0 bg-white">
                            <h1 className="title-size text-[#262626]">Settings</h1>{" "}
                            <img src={Logos.RotateRight} className="icon-size" alt=""/>
                        </div>
                        {data.map((items) => {
                            const html = (
                                <>
                                    <p className=" text-[12px] py-2  xxxxl:text-[20px]">
                                        During the selected time period :
                                    </p>
                                    <ul className="p-1">
                                        <li className="flex items-start gap-1 text-[12px]">
                                            <div className=" mt-2  w-1 h-1  bg-[white] rounded-full"></div>
                                            {" "}
                                            <p className=" xxxxl:text-[20px]">
                                                9 people landed on step 4{" "}
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-1 text-[12px]">
                                            <div className=" mt-2  w-1 h-1  bg-[white] rounded-full"></div>
                                            {" "}
                                            <p className=" xxxxl:text-[20px]">
                                                6 people watched more than 75% of the video{" "}
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-1 text-[12px]">
                                            <div className=" mt-2  w-1 h-1  bg-[white] rounded-full"></div>
                                            {" "}
                                            <p className=" xxxxl:text-[20px]">
                                                2 people proceeded to the following step{" "}
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-1 text-[12px]">
                                            <div className=" mt-2  w-1 h-1  bg-[white] rounded-full"></div>
                                            {" "}
                                            <p className=" xxxxl:text-[20px]">
                                                This step’s drop-off rate was-15%{" "}
                                            </p>
                                        </li>
                                    </ul>
                                </>
                            );
                            return (
                                <div className="w-full flex items-center justify-center gap-6 max-xl:gap-2 p-4 ">
                                    <img src={items.img} alt="" className="w-[70px]"/>
                                    <div className="flex flex-col gap-1">
                                        <p className=" text-[#262626]   font-[400]  title-size ">
                                            {items.title}
                                        </p>
                                        <p className=" text-[#262626] inner-size font-[400]">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </p>
                                        <div className="flex items-center justify-start gap-8">
                                            <div className="flex items-center gap-1 justify-center">
                                                <Tooltip
                                                    placement="bottom"
                                                    title={html}
                                                    color="#94A2F2"
                                                    key="red"
                                                >
                                                    {" "}
                                                    <img
                                                        src={Logos.personbtn}
                                                        alt=""
                                                        className="w-[20px]  xxxxl:w-[35px]"
                                                    />{" "}
                                                </Tooltip>
                                                <span
                                                    className="text-[12px] xxxxl:text-[18px] text-[#262626] font-[300]">
                          9
                        </span>
                                            </div>
                                            <div className="flex items-center gap-1 justify-center">
                                                <Tooltip
                                                    placement="bottom"
                                                    title={html}
                                                    color="#94A2F2"
                                                    key="red"
                                                >
                                                    <img
                                                        src={Logos.EyeBtn}
                                                        alt=""
                                                        className="w-[20px]  xxxxl:w-[35px]"
                                                    />
                                                </Tooltip>
                                                <span
                                                    className="text-[12px] xxxxl:text-[18px] text-[#262626] font-[300]">
                          6
                        </span>
                                            </div>
                                            <div className="flex items-center gap-1 justify-center">
                                                <Tooltip
                                                    placement="bottom"
                                                    title={html}
                                                    color="#94A2F2"
                                                    key="red"
                                                >
                                                    {" "}
                                                    <img
                                                        src={Logos.checkbtn}
                                                        alt=""
                                                        className="w-[20px]  xxxxl:w-[35px]"
                                                    />{" "}
                                                </Tooltip>
                                                <span
                                                    className="text-[12px] xxxxl:text-[18px] text-[#262626] font-[300]">
                          2
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div
                        className=" border-[1px] flex-auto border-[#EBEBEB] border-solid mx-auto "
                        style={{height: "100%", width: "70vw", overflow: "hidden"}}
                    >
                        <div
                            className=" border-[1px] w-full border-[#EBEBEB] border-solid px-3 py-4 flex justify-between items-center relative">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center  gap-2">
                                    <img
                                        src={Logos.CalendarIcon}
                                        alt=""
                                        onClick={togglePopup3}
                                        className="cursor-pointer icon-size"
                                    />
                                    <h1 className=" font-[500]  text-[#262626] title-size  flex items-center gap-1 ">
                                        May 20-Jun 2,2022{" "}
                                    </h1>
                                </div>
                                <img
                                    src={Logos.Filter}
                                    alt=""
                                    className="icon-size cursor-pointer"
                                    onClick={togglePopup}
                                />
                            </div>
                            <div></div>
                        </div>
                        <div
                            className="flex flex-col gap-6 rounded-md border-2 border-[#EBEBEB] p-6  max-sm:p-2  max-sm:m-0 m-4">
                            <h1 className="text-[18px] xxxxl:text-[20px] text-[#3A37A6] font-[500]  max-xs:text-[12px]">
                                Most important Metrics
                            </h1>

                            <img
                                src={Logos.Metrics}
                                alt=""
                                className=""
                                style={{height: "calc(100vh - 350px)", objectFit: "contain"}}
                            />
                            <div className="flex items-center justify-center w-full gap-4">
                                <h1 className="text-[12px] max-xs:text-[8px] text-[#262626] font-[200] flex gap-1  items-center">
                                    <span className="text-[#94A2F2]">14</span>Visited
                                </h1>
                                <h1 className="text-[12px] max-xs:text-[8px] text-[#262626] font-[200] flex gap-1 items-center">
                                    <span className="text-[#94A2F2]">08</span>Interacted
                                </h1>
                                <h1 className="text-[12px] max-xs:text-[8px] text-[#262626] font-[200] flex gap-1 items-center">
                                    <span className="text-[#3A37A6]">03</span>Completed
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="popup-box fixed backdrop-opacity-20 z-50 bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center "
                    onClick={togglePopup}
                >
                    <div
                        className="box  relative rounded-md  lg:w-[500px] xxxs:w-[400px] bg-white lg:min-h-[380px]   mx-auto flex flex-col  "
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="flex justify-between p-5 lg:pt-8   xxxs:pt-5 h-[20px] items-center">
                            <div className="title-size ">Filter Metrics</div>
                            <button className="btn-close " onClick={togglePopup}>
                                <img
                                    src={Logos.ClosePopup}
                                    alt="Close Button"
                                    className="lg:w-[20px] xxxs:w-[15px]"
                                />
                            </button>
                        </div>
                        <hr className=" border-1 border-[#CEDEF2] "/>

                        <div
                            className=" grid grid-cols-2 gapx-6 p-2"
                            style={{
                                marginTop: "10px",
                            }}
                        >
                            <h1 className="lg:mt-2 xxxs:mt-1 mx-2   subtitle-size self-center">
                                Engagement
                            </h1>
                            <h1 className="lg:mt-2 xxxs:mt-1 mx-2   subtitle-size self-center">
                                Devices
                            </h1>
                            {data2.map((item) => {
                                return (
                                    <div
                                        className="flex mx-2 items-center justify-between"
                                        style={{marginTop: "8px"}}
                                    >
                                        <div className="flex gap-1">
                                            <h1 className="lg:mt-2 xxxs:mt-1  subtitle-size self-center">
                                                {item.title}
                                            </h1>
                                            <div className="pt-4">
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
                                );
                            })}
                        </div>
                        <div
                            className="flex mx-2 items-center justify-between p-2"
                            style={{marginTop: "8px"}}
                        >
                            <div className="flex gap-1">
                                <h1 className="lg:mt-2 xxxs:mt-1  subtitle-size self-center">
                                    Warning threshold
                                </h1>
                                <div className="mt-4">
                                    <ToolTip/>
                                </div>
                            </div>

                            <input
                                type="text"
                                placeholder="65%"
                                className="bg-[#F5F5F5] placeholder-input-modal text-[#A0A0A0] text-center outline-none px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px] text-[13px]"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="flex justify-center gap-3 py-3">
                            <button
                                className="text-[16px] leading-[30px] font-[400]  text-[#94A2F2] border-[1px] border-solid border-[#94A2F2] p-1 rounded-[5px] my-3 w-[100px] self-center "
                                onClick={togglePopup}
                            >
                                Apply
                            </button>
                            <button
                                className="text-[16px] leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[100px] self-center "
                                onClick={togglePopup}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isOpen3 && (
                <div
                    className="popup-box fixed backdrop-opacity-20 z-20 bg-black/30 left-0 top-0 w-full h-full"
                    onClick={togglePopup3}
                >
                    <div
                        className="box  relative rounded-md  flex  bg-white lg:min-h-[360px]  xxxs:min-h-[300px] max-w-[450px] w-full mt-40 mx-auto "
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="px-4 border-r-[1px] border-[#E7EEF9]">
                            <div className=" flex  pt-6  justify-center items-center justify-items-center">
                                <div className=" flex  justify-between py-1 w-50 px-2    rounded">
                                    <img
                                        src={Logos.ArrowLeft}
                                        alt="Close Button"
                                        className="w-[22px] "
                                    />
                                    <p className="px-6  text-[16px] ">June 2022</p>
                                    <img
                                        src={Logos.Arrowdown}
                                        alt="Close Button"
                                        className="w-[22px] rotate-[-90deg]"
                                    />
                                </div>
                            </div>

                            <div
                                className=" ml-6 pt-2 grid grid-cols-7 gap-2 items-center justify-center  justify-items-centertext-center">
                                {days.map((item) => {
                                    return (
                                        <div className="text-[#A0A0A0]  leading-[36px] text-[12px]">
                                            {item.name}
                                        </div>
                                    );
                                })}
                                {dates.map((item) => {
                                    return (
                                        <div
                                            className="leading-[36px] w-[25px] h-[25px] p-1 flex justify-center items-center rounded-md"
                                            style={{color: item.color, backgroundColor: item.bg}}
                                        >
                                            {item.entity}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex justify-center gap-3 py-3">
                                <button
                                    className="text-[16px] leading-[30px] font-[400]  text-[#94A2F2] border-[1px] border-solid border-[#94A2F2] p-1 rounded-[5px] my-3 w-[100px] self-center "
                                    onClick={togglePopup3}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="text-[16px] leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[100px] self-center ">
                                    Apply
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col pl-4  gap-4">
                            <div
                                className=" flex  pt-6 p-2 border-b-[1px] border-[#E7EEF9] justify-center items-center justify-items-center">
                                <h1 className="text-[16px] text-[#262626]">All time</h1>
                            </div>
                            <div className="flex items-center gap-2 max-xs:text-[12px] ">
                                <input type="radio" name="today" id="today"/>{" "}
                                <label htmlFor="today">Today</label>
                            </div>
                            <div className="flex items-center gap-2 max-xs:text-[12px]">
                                <input type="radio" name="today" id="today"/>{" "}
                                <label htmlFor="Last Week">Last Week</label>
                            </div>
                            <div className="flex items-center gap-2 max-xs:text-[12px]">
                                <input type="radio" name="today" id="Last Month"/>{" "}
                                <label htmlFor="Last Month">Last Month</label>
                            </div>
                            <div className="flex items-center gap-2 max-xs:text-[12px]">
                                <input type="radio" name="today" id="Last Year"/>{" "}
                                <label htmlFor="Last Year">Last Year</label>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactsModule;
