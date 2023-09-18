import React, {useState} from "react";
import {Logos} from "../../assets";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

import Button from "../Buttons/Buttons";

const ConversationReplyPreview = () => {
    const navigate = useNavigate();

    function replyHandler() {
        navigate("/reply");
    }

    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState("");

    const handleDropdownClick1 = () => {
        setIsOpen2(!isOpen2);
    };

    const handleOptionClick2 = (option) => {
        setSelectedOption1(option);
        setIsOpen2(false);
    };

    const [button, setButton] = useState("reply");
    const [isClick, setIsClick] = useState("");
    const handleInput = (event) => {
        const value = event.target.value;
        setIsClick(value);
    };

    const showOptions = isClick.length > 0;

    function btnHandler(a) {
        setButton(a);
    }

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const data = [
        {
            img: Logos.Pic1,
        },
        {
            img: Logos.Pic2,
        },
        {
            img: Logos.Pic3,
        },
        {
            img: Logos.Pic4,
        },
    ];

    return (
        <>
            <div className="flex justify-between p-2 items-center">
                <div className="flex gap-3  items-center ">
                    <img
                        src={Logos.BreadcrumbBack}
                        alt="icon"
                        className="cursor-pointer ml-2 w-[8px] xxxxl:w-[12px]"
                        onClick={() => {
                            replyHandler();
                        }}
                    />
                    <h1 className=" font-[500] leading-[30px] text-[#262626] title-size">
                        Conversation Reply
                    </h1>
                </div>
                <Link to="/conversation">
                    <img
                        src={Logos.Rectangule}
                        alt=""
                        className="w-[30px] xxxxl:w-[50px]"
                    />
                </Link>
            </div>

            <div
                className="w-full xxxxl:height height2  rounded-md mt-2 gap-5 relative  flex lg:flex-nowrap xxxs:flex-wrap  ">
                <div
                    className="flex flex-col justify-between w-[25vw] min-w-[20vw]  overflow-y-scroll overflow-x-hidden  shadow-md  flex-auto mx-auto">
                    <div className="card1  ">
                        <div
                            className="min-h-[20px]   xxxxl:h-[80px] flex items-center px-3 absolute top-[0%] w-[20vw] bg-white max-lg:w-full py-2  border-[1px] border-[#EBEBEB] border-solid">
                            <h1
                                className=" font-[500] leading-[28px] text-[#262626] w-full  p-2"
                                style={{fontSize: "calc(1rem + 0.2vw)"}}
                            >
                                Almost finished...
                            </h1>
                        </div>
                    </div>
                    <div className=" mb-[30px] ">
                        <button
                            className="w-[98%] mb-[0%] text-[18px] font-[400] leading-[30px] text-[#ffffff] bg-[#94A2F2]  p-2 shadow-md rounded-[5px] my-3 mx-1 box-border xxxxl:text-[32px] xxxxl:py-[20px]">
                            Send Reply
                        </button>
                    </div>
                </div>

                <div className="card2 w-full   shadow-md xxxxl:height height2 ">
                    <div className="min-h-[20px] xxxxl:h-[80px] border-[1px] border-[#EBEBEB] border-solid px-3 py-1">
                        <h1
                            className="  font-[400]  text-[#262626]"
                            style={{fontSize: "calc(1rem + 0.2vw)"}}
                        >
                            Replying to...
                        </h1>
                        <h1 className="  font-[500] leading-[22px] text-[#262626] title-size">
                            Ryan Jones
                            <span className="title-size">(Ryanjones@example.com)</span>
                        </h1>
                    </div>
                    <p className=" text-[16px] font-[400] leading-[22px] text-[#A0A0A0] text-center mx-auto my-2 xxxxl:text-[28px] ">
                        This is a preview. No data will be recorded.
                    </p>

                    <div className="flex  lg:flex-nowrap gap-4 xxxs:flex-wrap justify-center p-2  overflow-auto ">
                        <div className="img flex  lg:w-[45%]">
                            <img
                                src={Logos.ReplyConversationGirlImage}
                                alt=""
                                className="  xxxxl:height3 height4 flex-grow-[1]"
                                style={{
                                    aspectRatio: "1/2",
                                    width: "100%",
                                }}
                            />
                        </div>

                        <div
                            className="lg:w-[50%] xxxxl:height3 max-xxxxl:height4 w-full flex flex-col justify-center  gap-4 border-[1px] px-4 border-[#EBEBEB] border-solid rounded-[10px] shadow-md">
                            {button == "reply" && (
                                <>
                                    {" "}
                                    <p className=" text-[20px] max-sm:text-[16px] font-[400] leading-[28px] text-[#262626] text-center xxxxl:text-[35px]">
                                        How would you like to respond?
                                    </p>
                                    <div className="flex justify-center flex-wrap xxxxl:gap-3">
                                        <Link to="/reply-video-preview">
                                            <Button
                                                title="video"
                                                img={Logos.Video}
                                                class="max-xs:w-[40px] w-[60px] xxxxl:w-[120px]  "
                                                iconWidth="max-xs:w-[20px] w-[40px] xxxxl:w-[80px]"
                                            ></Button>
                                        </Link>
                                        <Link to="/reply-audio-preview">
                                            <Button
                                                title="Audio"
                                                img={Logos.MicroPhoneWhite}
                                                class="w-[60px] xxxxl:w-[120px]"
                                                iconWidth="w-[40px] xxxxl:w-[80px]"
                                            ></Button>
                                        </Link>
                                        <Link to="/reply-text-preview">
                                            <Button
                                                title="Text"
                                                img={Logos.WhiteEdit}
                                                class="w-[60px] xxxxl:w-[120px]"
                                                iconWidth="w-[40px] xxxxl:w-[80px]"
                                            ></Button>
                                        </Link>
                                    </div>
                                    <p className=" text-[16px] font-[400] max-sm:text-[12px] leading-[28px] text-[#A0A0A0] text-center xxxxl:text-[30px]">
                                        You can practice and review before sending
                                    </p>
                                </>
                            )}
                            {button == "button" && (
                                <button
                                    className="text-[16px] font-[400] leading-[20px] text-[#ffffff] bg-[#94A2F2] rounded-md  p-3 w-[130px] self-center xxxxl:w-[180px] xxxxl:text-[32px] xxxxl:p-[25px]">
                                    Sign up
                                </button>
                            )}
                            {button == "end" && (
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-[#3A37A6] font-[500] leading[32.5px] text-[20px] xxxxl:text-[36px]">
                                        Add screen title
                                    </p>
                                    <p className="text-[#94A2F2] font-[400] leading[25px] text-[16px] xxxxl:text-[30px]">
                                        Add screen text
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="popup-box fixed backdrop-opacity-20  bg-black/30 left-0 top-0 w-full h-full "
                    onClick={togglePopup}
                >
                    <div
                        className="box  relative rounded-md  lg:w-[450px] xxxs:w-[350px] bg-white lg:min-h-[460px] mt-20  mx-auto flex flex-col  "
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="flex justify-between px-5 lg:pt-8 pt-3  xxxs:pt-5 h-[20px] items-center">
                            <div className="lg:text-[20px]  xxxs:text-[15px] ">
                                Select a Candor Video to link to
                            </div>
                            <button className="btn-close " onClick={togglePopup}>
                                <img
                                    src={Logos.ClosePopup}
                                    alt="Close Button"
                                    className="lg:w-[20px] xxxs:w-[15px]"
                                />
                            </button>
                        </div>
                        <hr className=" border-2 border-[#CEDEF2] mt-5"/>
                        <div className="w-full flex justify-between p-3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="relative lg:text-[16px] outline-none   mt-2 ml-3 rounded-md border-2 border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-[70%]"
                                style={{paddingLeft: "45px"}}
                            />
                            <img
                                src={Logos.Search}
                                className="absolute lg:w-[20px] xxxs:w-[15px] mt-4  ml-8"
                            />
                        </div>
                        <div
                            style={{
                                marginTop: "-10px",
                            }}
                        >
                            {data.map((item) => {
                                return (
                                    <div
                                        className="flex  lg:px-6 px-4  xxxs:px-4  items-center gap-2 "
                                        style={{marginTop: "8px"}}
                                    >
                                        <img src={item.img} className="   mr-2"/>
                                        <p className="lg:mt-2 xxxs:mt-1 font-bold text-[10px] lg:text-[18px] xxxs:text-[14px] self-center">
                                            Education
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <button
                            className="text-[24px] leading-[30px] font-[400] text-[#94A2F2] border-[1px] border-solid border-[#94A2F2] p-3 rounded-[5px] my-3 max-w-[170px] self-center "
                            onClick={togglePopup}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConversationReplyPreview;
