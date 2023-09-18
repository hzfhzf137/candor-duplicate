import React, {useState} from "react";
import {Logos} from "../../assets";
import {SearchOutlined} from "@ant-design/icons";
import InputComp from "../../components/InputComp/InputComp";
import {useNavigate} from "react-router";


const allarray = [
    {
        label: "Education follow-up",
        img: Logos.People1,
        link: "/AddVideoApproveAddLibrary",
    },
    {
        label: "Donation thank you",
        text: true,
    },
    {
        label: "Immigration response",
        img: Logos.People2,
    },
    {
        label: "Education follow-up",
        img: Logos.LibraryAudio,
    },
    {
        label: "Donation thank you",
        img: Logos.People3,
    },
    {
        label: "Immigration response",
        text: true,
    },
    {
        label: "Crime",
        img: Logos.People4,
    },
    {
        label: "Tax policy reply",
        img: Logos.LibraryAudio,
    },
    {
        label: "Crime",
        text: true,
    },
    {
        label: "Tax policy reply",
        img: Logos.People5,
    },
    {
        label: "Crime",
        img: Logos.LibraryAudio,
    },
    {
        label: "Tax policy reply",
        text: true,
    },
];
const quick = [
    {
        label: "Education follow-up",
        img: Logos.People1,
        link: "/AddVideoApproveAddLibrary",
    },
    {
        label: "Donation thank you",
        img: Logos.People3,
    },
    {
        label: "Immigration response",
        img: Logos.People2,
    },
    {
        label: "Education follow-up",
        img: Logos.People1,
    },
    {
        label: "Donation thank you",
        img: Logos.People3,
    },
    {
        label: "Immigration response",
        img: Logos.People2,
    },
    {
        label: "Crime",
        img: Logos.People4,
    },
    {
        label: "Tax policy reply",
        img: Logos.People5,
    },
    {
        label: "Crime",
        img: Logos.People4,
    },
    {
        label: "Tax policy reply",
        img: Logos.People5,
    },
    {
        label: "Crime",
        img: Logos.People4,
    },
    {
        label: "Tax policy reply",
        img: Logos.People5,
    },
];

const AddLibrary = () => {
    const [searchValue, setSearchValue] = useState("");
    const [card, setCard] = useState("CandorVideo");

    const [active, setActive] = useState("CandorVideo");
    const handleClick = (c) => {
        setActive(c);
    };

    function cardHandler(a) {
        setCard(a);
    }

    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/AddVideo");
    }

    function routeHandler() {
        navigate("/AddVideoApproveLibrary");
    }

    return (
        <>
            {" "}
            <div className="flex justify-between items-center p-2 mb-2">
                <div className="flex items-center gap-2">
                    <img
                        src={Logos.ArrowLeft}
                        alt=""
                        className="cursor-pointer w-[18px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />
                    <h1 className=" text-[18px] font-[500] leading-[30px] text-[#262626]">
                        Library
                    </h1>
                </div>
            </div>
            <div className="shadow-md rounded-md border-[1px] py-3 px-5">
                <div className="flex items-center justify-between lg:gap-3 xxxs:gap-1 lg:flex-nowrap xxxs:flex-wrap">
                    {" "}
                    <h1 className=" text-[18px] font-[500] leading-[30px] text-[#262626]">
                        Select From Library
                    </h1>
                    <div className="w-full max-w-[500px]">
                        <InputComp
                            type="text"
                            placeholder="Search"
                            icon={<SearchOutlined/>}
                            size="large"
                            isButton={true}
                            value={searchValue}
                            className=" input-eye"
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div
                    className="flex items-center justify-between   lg:flex-nowrap xxxs:flex-wrap border-b-[2px] "
                    style={{marginBottom: "20px"}}
                >
                    <div className="flex items-center justify-start  gap-2">
                        <div
                            className="lg:px-10 xxxs:px-[7px] font-medium py-3 text-[14px] max-sm:text-[12px] max-xs:text-[10px] cursor-pointer"
                            onClick={() => {
                                cardHandler("CandorVideo");
                                handleClick("CandorVideo");
                            }}
                            style={{
                                color: active === "CandorVideo" ? "#3A37A6" : "#A0A0A0",
                                borderBottom:
                                    active === "CandorVideo" ? "2px solid #3A37A6 " : "",
                            }}
                        >
                            In this Candor video
                        </div>
                        <div
                            className="lg:px-10 xxxs:px-2 py-3 font-medium text-[14px]  cursor-pointer max-sm:text-[12px] max-xs:text-[10px]"
                            onClick={() => {
                                cardHandler("QuickReplies");
                                handleClick("QuickReplies");
                            }}
                            style={{
                                color: active === "QuickReplies" ? "#3A37A6" : "#A0A0A0",
                                borderBottom:
                                    active === "QuickReplies" ? "2px solid #3A37A6 " : "",
                            }}
                        >
                            Quick replies
                        </div>
                        <div
                            className="lg:px-10 xxxs:px-2 font-medium py-3  text-[14px]  cursor-pointer max-sm:text-[12px] max-xs:text-[10px]"
                            onClick={() => {
                                cardHandler("library");
                                handleClick("library");
                            }}
                            style={{
                                color: active === "library" ? "#3A37A6" : "#A0A0A0",
                                borderBottom: active === "library" ? "2px solid #3A37A6 " : "",
                            }}
                        >
                            Full library
                        </div>
                    </div>
                </div>

                {card === "CandorVideo" && (
                    <div>
                        <div className="flex align-center gap-3 items-center flex-wrap">
                            <div className="mt-4 flex flex-wrap gap-5">
                                {quick.map((item) => {
                                    return (
                                        <div
                                            className="flex flex-col items-start "
                                            style={{width: "180px", height: "180px"}}
                                        >
                                            <h1 className="subtitle-size">{item.label}</h1>
                                            {item.img && (
                                                <img
                                                    src={item.img}
                                                    alt=""
                                                    onClick={() => {
                                                        routeHandler();
                                                    }}
                                                    className={`mt-2 rounded-md ${
                                                        item.link ? "cursor-pointer" : "cursor-default"
                                                    } `}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            )}
                                            {item.text && (
                                                <div
                                                    className="border-[1px] mt-2 border-[#EBEBEB] rounded-md shadow-md p-4 "
                                                    style={{width: "100%", height: "160px"}}
                                                >
                                                    <p className=" text-[10px] font-[300] text-[#262626]">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Enim tincidunt placerat phasellus rutrum.Lorem
                                                        ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Enim tincidunt placerat phasellus rutrum.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
                {card === "QuickReplies" && (
                    <div>
                        <div className="flex align-center gap-3 items-center flex-wrap">
                            <div className="mt-4 flex flex-wrap gap-5">
                                {allarray.map((item) => {
                                    return (
                                        <div
                                            className="flex flex-col items-start "
                                            style={{width: "180px", height: "180px"}}
                                        >
                                            <h1>{item.label}</h1>
                                            {item.img && (
                                                <img
                                                    src={item.img}
                                                    alt=""
                                                    onClick={() => {
                                                        if (item.link) {
                                                            routeHandler();
                                                        }
                                                    }}
                                                    className={`mt-2 rounded-md ${
                                                        item.link ? "cursor-pointer" : "cursor-default"
                                                    } `}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            )}
                                            {item.text && (
                                                <div
                                                    className="border-[1px] mt-2 border-[#EBEBEB] rounded-md shadow-md p-4 "
                                                    style={{width: "100%", height: "160px"}}
                                                >
                                                    <p className=" text-[10px] font-[300] text-[#262626]">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Enim tincidunt placerat phasellus rutrum.Lorem
                                                        ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Enim tincidunt placerat phasellus rutrum.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {card === "library" && (
                    <div>
                        <div className="flex align-center gap-3 items-center flex-wrap">
                            <div className="mt-4 flex flex-wrap gap-5">
                                {allarray.map((item) => {
                                    return (
                                        <div
                                            className="flex flex-col items-start "
                                            style={{width: "180px", height: "180px"}}
                                        >
                                            <h1>{item.label}</h1>
                                            {item.img && (
                                                <img
                                                    src={item.img}
                                                    alt=""
                                                    onClick={() => {
                                                        if (item.link) {
                                                            routeHandler();
                                                        }
                                                    }}
                                                    className={`mt-2 rounded-md ${
                                                        item.link ? "cursor-pointer" : "cursor-default"
                                                    } `}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            )}
                                            {item.text && (
                                                <div
                                                    className="border-[1px] mt-2 border-[#EBEBEB] rounded-md shadow-md p-4 "
                                                    style={{width: "100%", height: "160px"}}
                                                >
                                                    <p className=" text-[10px] font-[300] text-[#262626]">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Enim tincidunt placerat phasellus rutrum.Lorem
                                                        ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Enim tincidunt placerat phasellus rutrum.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AddLibrary;
