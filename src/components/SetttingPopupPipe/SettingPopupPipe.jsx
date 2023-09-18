import React, {useState} from "react";
import {Logos} from "../../assets";
import InputComp from "../../components/InputComp/InputComp";

const SettingPopupPipe = (props) => {
    const [searchText, setSearchText] = useState("");

    function handleOptionClick(optionValue) {
        setSelectedValue(optionValue);
        setIsOpen(false);
    }

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    function handleButtonClick() {
        setIsOpen(!isOpen);
    }

    const options = [
        "Select tag...",
        "First name",
        "Last name",
        "Full name",
        "Organization",
        "Email",
        "Phone",
        "Full address",
        "Street address",
        "City",
        "State",
        "Zip code",
        "Submission date",
    ];
    return (
        <div
            className="popup-box fixed z-10 backdrop-opacity-20 bg-black/30 flex justify-center items-center left-0 top-0 w-full h-full"
            onClick={props.handleClose}
        >
            <div
                className="box relative rounded-md lg:w-[440px] xxxs:w-[320px] bg-white lg:min-h-[200px] mx-auto "
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between px-6 lg:pt-6 xxxs:pt-5">
                    <div className="lg:text-[16px] xxxl:text-[22px] xxxs:text-[14px] font-medium">
                        {props.title}
                    </div>
                    <button className="btn-close" onClick={props.handleClose}>
                        <img
                            src={Logos.CloseIcon}
                            alt="Close Button"
                            className="lg:w-[16px] xxxs:w-[14px]"
                        />
                    </button>
                </div>
                <hr className=" border-1 border-[#E7EEF9] mt-5"/>
                <div className="w-full flex flex-col gap-3 p-5">
                    <p className="lg:text-[12px] xxxs:text-[11px] xxxl:text-[15px] font-medium">
                        Select A Merge Tag
                    </p>
                    <div className="relative z-10">
                        <div>
                            <button
                                type="button"
                                className="inline-flex justify-between items-center w-full rounded-md px-3 h-[35px] bg-[#F5F5F5] text-[#A0A0A0] text-[11px]"
                                onClick={handleButtonClick}
                                aria-haspopup="true"
                                aria-expanded={isOpen}
                            >
                                {selectedValue ? selectedValue : "Select tag..."}
                                <img
                                    src={Logos.Arrowdown}
                                    alt="Dropdown Arrow"
                                    onClick={() => {
                                        handleButtonClick(!isOpen);
                                    }}
                                    style={{
                                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                    }}
                                    className="cursor-pointer w-[17px]"
                                />
                            </button>
                        </div>
                        {isOpen && (
                            <div
                                className="origin-top-right absolute w-full h-[170px] overflow-y-scroll shadow-md rounded bg-white">
                                <div
                                    className="py-1"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    {options.map((option, line) => (
                                        <button
                                            key={option}
                                            className={` px-4 py-2 w-full flex text-[11px] xxxl:text-[14px] text-gray   ${
                                                line !== options.length - 1 ? "border-b" : ""
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
                    <p className="lg:text-[12px] xxxs:text-[11px] xxxl:text-[15px] font-medium">
                        Set Fallback Text
                    </p>
                    <InputComp
                        type="text"
                        size="medium"
                        placeholder="Fallback text"
                        isButton={true}
                        className="bg-[#F5F5F5] border-none text-[#A0A0A0] h-[35px] text-[13px] xxxs:text-[12px]"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <div className="flex gap-4  justify-center items-center pt-1">
                        <button
                            className="text-[#94A2F2] xxxl:text-[20px] border-[#AEBFF2] border-[1px] py-2 px-8 rounded-md">
                            Cancel
                        </button>
                        <button className="text-white xxxl:text-[20px] bg-[#AEBFF2] py-2 px-9 rounded-md shadow-md">
                            {props.btnname}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingPopupPipe;
