import React, {useState} from "react";
import {Logos} from "../../assets";
import ToggleButton from "../ToggleButton/ToggleButton";
import DynamicDropdown from "../DynamicDropdown/DynamicDropdown";
import ToolTip from "../ToolTip/ToolTip";

const InviteNewMember = (props) => {
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState("");

    const handleDropdownClick1 = () => {
        setIsOpen2(!isOpen2);
    };

    const handleOptionClick2 = (option) => {
        setSelectedOption1(option);
        setIsOpen2(false);
    };

    return (
        <div
            className="popup-box fixed backdrop-opacity-20 flex justify-center items-center bg-black/30 left-0 top-0 w-full h-full z-50"
            onClick={props.handleClose}
        >
            <div
                className="box  relative rounded-md  lg:w-[470px] xxxs:w-[350px] bg-white lg:min-h-[450px] mx-auto "
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between px-5 xxxl:pt-6 pb-3 pt-5 ">
                    <div className="lg:text-[18px] xxxs:text-[15px] xxxl:text-[22px]">
                        Invite new team member
                    </div>
                    <button className="btn-close " onClick={props.handleClose}>
                        <img
                            src={Logos.ClosePopup}
                            alt="Close Button"
                            className="lg:w-[20px] xxxs:w-[15px]"
                        />
                    </button>
                </div>
                <hr className=" border-1 border-[#CEDEF2] "/>
                <div>
                    <div className="flex gap-2 p-4">
                        <input
                            placeholder="brandonsmith@example.com"
                            type="text"
                            className="lg:w-[280px] lg:ml-2  xxxs:w-full  px-2 rounded-md h-[35px]  text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                        />
                        <DynamicDropdown
                            mainTitle={"Member"}
                            option1={"Admin"}
                            option2={"Member"}
                            width="[130px]"
                            text="[12px]"
                        />
                    </div>

                    <div className="flex justify-between items-center py-2 px-7">
                        <div className="flex items-center gap-1 pt-1">
                            <p className="lg:text-[14px] xxxl:text-[17px] xxxs:text-[11px] ">
                                Restrict access
                            </p>
                            <div className="py-1 px-1">
                                <ToolTip/>
                            </div>
                        </div>
                        <div className="flex">
                            <ToggleButton width="[40px]" height="[22px]" isActive={true}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex justify-between py-2 px-7  ">
                        <div className="flex gap-2 pt-1">
                            <img
                                src={Logos.FolderEducation}
                                alt="Folder"
                                className="lg:w-5 xxxs:w-4"
                            />
                            <p className="lg:text-[13px] xxxl:text-[16px] xxxs:text-[11px] py-2 ">
                                Root folder
                            </p>
                            <div className="pt-3 ">
                                <ToolTip/>
                            </div>
                        </div>
                        <div className="flex py-2">
                            <ToggleButton width="[40px]" height="[22px]" isActive={true}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex justify-between py-2 px-7  ">
                        <div className="flex gap-2 ">
                            <img
                                src={Logos.FolderEducation}
                                alt="Folder"
                                className="lg:w-5 xxxs:w-4 pb-2"
                            />
                            <p className="lg:text-[13px] xxxl:text-[16px] xxxs:text-[11px] py-3">
                                Education
                            </p>
                        </div>
                        <div className="flex py-2 lg:gap-0 xxxs:gap-3">
                            <div>
                                <div className="relative" onClick={handleDropdownClick1}>
                                    <div
                                        className="flex justify-between rounded-md xxxs:text-[11px] text-[13px] xxxl:text-[15px] mr-3 w-[150px] xxxs:w-[120px] px-4 py-2 bg-[#F5F5F5]">
                                        {selectedOption1 || "Write"}
                                        <img
                                            src={Logos.Arrowdown}
                                            alt="Dropdown Arrow"
                                            style={{
                                                transform: isOpen2 ? "rotate(180deg)" : "rotate(0deg)",
                                            }}
                                            className="cursor-pointer w-[17px] ml-2"
                                        />
                                    </div>
                                    {isOpen2 && (
                                        <div className="bg-white shadow absolute z-10 w-[150px] ">
                                            <div
                                                className={`p-2 ${
                                                    selectedOption1 == "Reader"
                                                        ? "text-[#A0A0A0]"
                                                        : "text-black"
                                                } `}
                                                onClick={() => handleOptionClick2("Read")}
                                            >
                                                <p>Read</p>
                                                <p className="text-[#A0A0A0] text-[11px]">
                                                    Can only view responses intractions
                                                </p>
                                            </div>
                                            <hr/>
                                            <div
                                                className={`p-2 ${
                                                    selectedOption1 == "Writer"
                                                        ? "text-[#A0A0A0]"
                                                        : "text-black"
                                                } `}
                                                onClick={() => handleOptionClick2("Write")}
                                            >
                                                <p>Write</p>
                                                <p className="text-[#A0A0A0] text-[11px]">
                                                    Can also reply & make changes
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="py-2">
                                <ToggleButton width="[40px]" height="[22px]" isActive={true}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex justify-between py-2 px-7  ">
                        <div className="flex gap-2 pt-1">
                            <img
                                src={Logos.FolderEducation}
                                alt="Folder"
                                className="lg:w-5 xxxs:w-4"
                            />
                            <p className="lg:text-[13px] xxxs:text-[11px] py-2 xxxl:text-[16px]">
                                Taxes
                            </p>
                        </div>
                        <div className="flex py-2">
                            <ToggleButton width="[40px]" height="[22px]" isActive={true}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex justify-center py-4 gap-3">
                        <button
                            className="lg:text-[14px] border-[1px] xxxl:text-[20px] rounded shadow border-[#94A2F2] text-[#94A2F2] xxxs:text-[12px] w-[120px] py-2 px-1">
                            Cancel
                        </button>
                        <button
                            className="lg:text-[14px] xxxs:text-[12px] xxxl:text-[20px] rounded shadow text-white bg-[#94A2F2] w-[120px] py-2 px-1">
                            Invite
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InviteNewMember;
