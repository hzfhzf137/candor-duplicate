import React from "react";
import {Link} from "react-router-dom";
import {Logos} from "../../assets";
import {useState} from "react";
import {useGlobalInfo} from "../../contexts/GlobalContext";

const InteractionDropdown = (props) => {
    const [showDropdown2, setShowDropdown2] = useState(false);
    const {interaction, setInteraction} = useGlobalInfo()
    return (
        <div>
            <div className=" py-1 px-2">
                <div className="rounded-md shadow-md border xxxxl:h-[45px] h-[35px] mb-1 relative">
                    <h1
                        onClick={() => {
                            setShowDropdown2(!showDropdown2);
                        }}
                        className="flex cursor-pointer justify-between p-1 px-3 items-center gap-2 sm:text-[15px] text-[#262626]"
                    >
                        <div className="flex gap-4 items-center">
                            {
                                interaction === "Button" && <img src={Logos.ButtonIcon} alt="" className="w-[16px]"/>
                            }
                            {
                                interaction === "Path" && <img src={Logos.PathIcon} alt="" className="w-[16px]"/>
                            }
                            {
                                interaction === "Donation" &&
                                <img src={Logos.CardEditIcon} alt="" className="w-[16px]"/>
                            }
                            {
                                interaction === "Ending Screen" || interaction === "EndingScreen" &&
                                <img src={Logos.MonitorIcon} alt="" className="w-[16px]"/>
                            }
                            <p className="text-[#A0A0A0] xxxxl:text-[20px]">
                                {interaction}
                            </p>
                        </div>

                        <img
                            src={Logos.Arrowdown}
                            alt="Dropdown Arrow"
                            style={{
                                transform: showDropdown2 ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                        />
                    </h1>
                    <div
                        className={
                            !showDropdown2
                                ? "hidden"
                                : "flex z-10 flex-col absolute top-10 xxxxl:top-12 w-full  "
                        }
                    >
                        <div className="bg-[#FFFFFF]  shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                            <div className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">

                                {/* <div className="flex gap-4 xxxxl:text-[22px] items-center cursor-pointer" onClick={()=>{
                    setInteraction("Reply");
                    setShowDropdown2(!showDropdown2);
                  }}>
                    <img
                      src={Logos.ReplyIcon}
                      alt=""
                      className="w-[16px] xxxl:w-[20px]"
                    />
                    Reply
                  </div>
            
                <hr /> */}


                                <div className="flex gap-4 xxxxl:text-[22px] items-center cursor-pointer"
                                     onClick={() => {
                                         setInteraction("Path");
                                         setShowDropdown2(!showDropdown2);
                                     }}
                                >
                                    <img
                                        src={Logos.PathIcon}
                                        alt=""
                                        className="w-[16px] xxxl:w-[20px]"
                                    />
                                    Path
                                </div>


                                <hr/>
                                <div className="flex gap-4 pt-2 items-center xxxxl:text-[22px] cursor-pointer"
                                     onClick={() => {
                                         setInteraction("Button");
                                         setShowDropdown2(!showDropdown2);
                                     }}
                                >
                                    <img
                                        src={Logos.ButtonIcon}
                                        alt=""
                                        className="w-[16px]  xxxl:w-[20px]"
                                    />
                                    Button
                                </div>

                                {/* <img src={Logos.Line} alt="Line" /> */}
                                <hr/>

                                <div className="flex gap-4 items-center  xxxxl:text-[22px] cursor-pointer"
                                     onClick={() => {
                                         setInteraction("Donation");
                                         setShowDropdown2(!showDropdown2);
                                     }}
                                >
                                    <img
                                        src={Logos.CardEditIcon}
                                        alt=""
                                        className="w-[16px] xxxl:w-[20px]"
                                    />
                                    Donation
                                </div>


                                {/* <img src={Logos.Line} alt="Line" /> */}
                                {/* <hr />
                  <div className="flex gap-4 pt-2 items-center xxxxl:text-[22px] cursor-pointer"
                            onClick={()=>{
                              setInteraction("Calendar");
                              setShowDropdown2(!showDropdown2);
                            }}
                  >
                    <img
                      src={Logos.CalendarIcon}
                      alt=""
                      className="w-[16px] xxxl:w-[20px]"
                    />
                    Calendar
                  </div> */}


                                {/* <img src={Logos.Line} alt="Line" /> */}
                                {/* <hr />
                  <div className="flex gap-4 pt-2 items-center  xxxxl:text-[22px] cursor-pointer"
                            onClick={()=>{
                              setInteraction("Payment");
                              setShowDropdown2(!showDropdown2);
                            }}
                  >
                    <img
                      src={Logos.CardTickIcon}
                      alt=""
                      className="w-[16px] xxxl:w-[20px]"
                    />
                    Payment
                  </div> */}

                                {/* <img src={Logos.Line} alt="Line" /> */}
                                <hr/>

                                <div className="flex gap-4 items-center  xxxxl:text-[22px] cursor-pointer"
                                     onClick={() => {
                                         setInteraction("EndingScreen");
                                         setShowDropdown2(!showDropdown2);
                                     }}
                                >
                                    <img
                                        src={Logos.MonitorIcon}
                                        alt=""
                                        className="w-[16px] xxxl:w-[20px]"
                                    />
                                    Ending screen
                                </div>

                                {/* <img src={Logos.Line} alt="Line" /> */}
                                {/* <hr /> */}
                                {/*
                  <div className="flex gap-4 items-center  xxxxl:text-[22px] cursor-pointer"
                            onClick={()=>{
                              setInteraction("Form");
                              setShowDropdown2(!showDropdown2);
                            }}
                  >
                    <img
                      src={Logos.MenuBoardIcon}
                      alt=""
                      className="w-[16px] xxxl:w-[20px]"
                    />
                    Form
                  </div>
           */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractionDropdown;
