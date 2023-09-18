import React, {useState} from "react";
import {Logos} from "../../assets";

import "../../assets/contact.css";
import Button from "../Buttons/Buttons";

const ContactsModule = () => {
    const [checked, setChecked] = useState(false);
    const [checkedOne, setCheckedOne] = useState(true);
    const [checkedTwo, setCheckedTwo] = useState(true);
    const [checkedThree, setCheckedThree] = useState(true);

    const [button, setButton] = useState("reply");

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
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className=" text-[24px] font-[500] leading-[30px] text-[#262626]">
                        Conversation Reply
                    </h1>
                </div>
                <img src={Logos.Rectangule} alt=""/>
            </div>
            <div
                className="w-full min-h-[660px] border-[1px] border-[#EBEBEB] border-solid  mt-4  shadow-md flex lg:flex-nowrap xxxs:flex-wrap  ">
                <div
                    className="card1 lg:max-w-[360px] w-full max-h-[660px]  border-[1px] border-[#EBEBEB] border-solid shadow-md  flex-auto mx-auto overflow-y-scroll overflow-x-hidden  scrollhost-container  ">
                    <div className="min-h-[20px] border-[1px] border-[#EBEBEB] border-solid px-3 py-4 ">
                        <h1 className="text-[22px] font-[500] leading-[28px] text-[#262626]">
                            Almost finished...
                        </h1>
                    </div>
                    <div className="flex flex-col p-3 gap-4">
                        <label
                            htmlFor="overlay"
                            className="text-[18px] font-[500] leading-[22px] text-[#262626]"
                        >
                            Overlay text
                        </label>
                        <textarea
                            name="overlay"
                            id="overlay"
                            cols="20"
                            rows="6"
                            className="shadow-md p-3 resize-none"
                            placeholder="Add overlay text here...(optional)"
                        ></textarea>
                    </div>
                    <div className="mi-h-[20px] p-3 shadow-md rounded-[8px] m-2 flex justify-between">
                        <div className="flex gap-2">
                            <h1 className="text-[18px] font-[400] leading-[22px] text-[#262626] whitespace-nowrap">
                                Fit video
                            </h1>
                            <img src={Logos.Info} alt=""/>
                        </div>
                        <div
                            className="w-12 h-6 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                            style={{backgroundColor: checked ? "#E7EEF9" : "#F5F5F5"}}
                        >
                            <div
                                className="w-4 h-4 bg-[#A0A0A0] rounded-lg cursor-pointer duration-200 ease-linear "
                                style={{
                                    backgroundColor: checked ? "#3A37A6" : "#A0A0A0",
                                    marginLeft: checked ? "22px" : "0px",
                                }}
                                onClick={() => {
                                    setChecked(!checked);
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="mi-h-[70px] p-3 shadow-md rounded-[8px] mx-2 my-3">

                        <div className="flex gap-2">
                            <h1 className="text-[18px] font-[400] leading-[22px] text-[#262626]">
                                Interaction
                            </h1>
                            <img src={Logos.Info} alt=""/>
                        </div>
                        <div
                            className="bg-[#F5F5F5] min-h-[50px] my-3 rounded-[8px] w-full max-w-[360px] grid  grid-cols-3">

                            <button
                                className="text-[14px] font-[400] leading-[20px] text-[#A0A0A0] min-h-[50px]  "
                                style={{
                                    backgroundColor: button == "reply" ? "#94A2F2" : "#F5F5F5",
                                    color: button == "reply" ? "white" : "#A0A0A0",
                                }}
                                onClick={() => {
                                    btnHandler("reply");
                                }}
                            >
                                Reply
                            </button>
                            <button
                                className="text-[14px] font-[400] leading-[20px] text-[#A0A0A0] min-h-[50px] "
                                style={{
                                    backgroundColor: button == "button" ? "#94A2F2" : "#F5F5F5",
                                    color: button == "button" ? "white" : "#A0A0A0",
                                }}
                                onClick={() => {
                                    btnHandler("button");
                                }}
                            >
                                Button
                            </button>
                            <button
                                className="text-[14px] font-[400] leading-[20px] text-[#A0A0A0] min-h-[50px] "
                                style={{
                                    backgroundColor: button == "end" ? "#94A2F2" : "#F5F5F5",
                                    color: button == "end" ? "white" : "#A0A0A0",
                                }}
                                onClick={() => {
                                    btnHandler("end");
                                }}
                            >
                                End
                            </button>
                        </div>
                    </div>

                    {button == "button" && (
                        <input
                            className="w-full max-w-[330px] min-h-[50px] p-3 m-2 bg-[#F5F5F5] text-[16px] font-[400] leading-[20px] text-[#A0A0A0] rounded-[8px]"
                            placeholder="Add Button Tex.."
                        />
                    )}
                    {button == "button" && (
                        <div className=" w-full max-w-[360px] p-3 grid grid-cols-3 ">
                            <input
                                className=" min-h-[50px]  p-3 bg-[#F5F5F5] text-[16px] font-[400] leading-[20px] text-[#A0A0A0] rounded-l-[8px]  col-span-2"
                                placeholder="Add button link..."
                            />
                            <button
                                className="text-[14px] font-[400] leading-[20px] text-[#ffffff] bg-[#94A2F2] rounded-r-[8px]  p-2"
                                onClick={togglePopup}
                            >
                                candor video
                            </button>
                        </div>
                    )}

                    {button == "end" && (
                        <div className="flex flex-col p-3 gap-4">
                            <label
                                htmlFor="overlay"
                                className="text-[18px] font-[500] leading-[22px] text-[#262626]"
                            >
                                Add a screen title
                            </label>
                            <textarea
                                name="overlay"
                                id="overlay"
                                cols="20"
                                rows="6"
                                className="shadow-md p-3 resize-none"
                            ></textarea>
                        </div>
                    )}
                    {button == "reply" && (
                        <div className="  rounded-[8px] shadow-md">
                            <div className="p-4 flex justify-between">
                                <h1 className="text-[18px] font-[400] leading-[22px] text-[#262626]">
                                    Video
                                </h1>
                                <div
                                    className="w-12 h-6 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                    style={{backgroundColor: checked ? "#E7EEF9" : "#F5F5F5"}}
                                >
                                    <div
                                        className="w-4 h-4 bg-[#A0A0A0] rounded-lg cursor-pointer duration-200 ease-linear "
                                        style={{
                                            backgroundColor: checkedOne ? "#3A37A6" : "#A0A0A0",
                                            marginLeft: checkedOne ? "22px" : "0px",
                                        }}
                                        onClick={() => {
                                            setCheckedOne(!checkedOne);
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="p-4 flex justify-between">
                                <h1 className="text-[18px] font-[400] leading-[22px] text-[#262626]">
                                    Audio
                                </h1>
                                <div
                                    className="w-12 h-6 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                    style={{backgroundColor: checked ? "#E7EEF9" : "#F5F5F5"}}
                                >
                                    <div
                                        className="w-4 h-4 bg-[#A0A0A0] rounded-lg cursor-pointer duration-200 ease-linear "
                                        style={{
                                            backgroundColor: checkedTwo ? "#3A37A6" : "#A0A0A0",
                                            marginLeft: checkedTwo ? "22px" : "0px",
                                        }}
                                        onClick={() => {
                                            setCheckedTwo(!checkedTwo);
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="p-4 flex justify-between">
                                <h1 className="text-[18px] font-[400] leading-[22px] text-[#262626]">
                                    Text
                                </h1>
                                <div
                                    className="w-12 h-6 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                    style={{
                                        backgroundColor: checkedThree ? "#E7EEF9" : "#F5F5F5",
                                    }}
                                >
                                    <div
                                        className="w-4 h-4 bg-[#A0A0A0] rounded-lg cursor-pointer duration-200 ease-linear "
                                        style={{
                                            backgroundColor: checkedThree ? "#3A37A6" : "#A0A0A0",
                                            marginLeft: checkedThree ? "22px" : "0px",
                                        }}
                                        onClick={() => {
                                            setCheckedThree(!checkedThree);
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <button
                        className="w-[98%] text-[20px] font-[400] leading-[30px] text-[#ffffff] bg-[#94A2F2]  p-2 shadow-md rounded-[5px] my-3 mx-1 box-border">
                        Send Reply
                    </button>
                </div>
                <div
                    className="card2 max-w-[860px] w-full min-h-[660px]  border-[1px] border-[#EBEBEB] border-solid shadow-md ">
                    <div className="min-h-[20px] border-[1px] border-[#EBEBEB] border-solid px-3 py-1">
                        <h1 className=" text-[16px] font-[400] leading-[22px] text-[#262626] ">
                            Replying to...
                        </h1>
                        <h1 className=" text-[16px] font-[500] leading-[28px] text-[#262626] ">
                            Ryan Jones
                            <span className="text-[12px]">(Ryanjones@example.com)</span>
                        </h1>
                    </div>
                    <p className=" text-[18px] font-[400] leading-[22px] text-[#A0A0A0] text-center mx-auto my-10">
                        This is a preview. No data will be recorded.
                    </p>

                    <div className="flex lg:flex-nowrap xxxs:flex-wrap justify-center  p-2">
                        <div className="img  w-full max-w-[430px]">
                            <img src={Logos.Mask} alt=""/>
                        </div>

                        <div
                            className="  w-full max-w-[430px] flex flex-col justify-center gap-4 border-[1px] p-4 border-[#EBEBEB] border-solid rounded-[10px] shadow-md">
                            {button == "reply" && (
                                <>

                                    <p className=" text-[22px] font-[400] leading-[28px] text-[#262626] text-center">
                                        How would you like to respond?
                                    </p>
                                    <div className="flex justify-center flex-wrap">

                                        <Button
                                            title="video"
                                            img={Logos.Video}
                                            class="max-xs:w-[40px] w-[60px]"
                                            iconWidth="max-xs:w-[20px] w-[40px]"
                                        ></Button>


                                        <Button
                                            title="Audio"
                                            img={Logos.MicroPhoneWhite}
                                            class="w-[60px]"
                                            iconWidth="w-[40px]"
                                        ></Button>


                                        <Button
                                            title="Text"
                                            img={Logos.WhiteEdit}
                                            class="w-[60px]"
                                            iconWidth="w-[40px]"
                                        ></Button>
                                    </div>
                                    <p className=" text-[18px] font-[400] leading-[22px] text-[#A0A0A0] text-center">
                                        You can practice and review before sending
                                    </p>
                                </>
                            )}
                            {button == "button" && (
                                <button
                                    className="text-[16px] font-[400] leading-[20px] text-[#ffffff] bg-[#94A2F2] rounded-[8px]  p-2 w-[130px] self-center">
                                    Sign up
                                </button>
                            )}
                            {button == "end" && (
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-[#3A37A6] font-[00] leading[32.5px] text-[26px]">
                                        Add screen title
                                    </p>
                                    <p className="text-[#94A2F2] font-[500] leading[25px] text-[20px]">
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
                    <img src={Logos.Rectangule} alt=""/>
                </div>
            )}
        </>
    );
};

export default ContactsModule;
