import React, {useState} from "react";
import {Logos} from "../../assets";

const DynamicDropdown = (props) => {
    const [isOpen2, setIsOpen2] = useState(false);


    const handleDropdownClick1 = () => {
        setIsOpen2(!isOpen2);
    };

    const handleOptionClick2 = (option) => {
        props.setSelectedOption1(option);
        setIsOpen2(false);
    };
    return (
        <div>
            <div className="dropdown relative " onClick={handleDropdownClick1}>
                <div
                    className={`flex justify-between rounded-md  text-${props.text}  w-${props.width} px-4 py-2 bg-white shadow-md `}
                    style={{fontSize: "calc(0.6rem + 0.2vw)"}}
                >
                    {props.selectedOption1 || [props.mainTitle]}
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
                    <div
                        className={`bg-white absolute z-10 shadow text-${props.text}  w-${props.width} `}
                    >
                        <div
                            className={`p-2 ${
                                props.selectedOption1 == [props.option1]
                                    ? "text-[#A0A0A0]"
                                    : "text-black"
                            } `}
                            onClick={() => handleOptionClick2(props.option1)}
                        >
                            <p className="inner-size">{props.option1}</p>
                            <p></p>
                        </div>
                        <hr/>
                        <div
                            className={`p-2 inner-size ${
                                props.selectedOption1 == [props.option2]
                                    ? "text-[#A0A0A0] "
                                    : "text-black"
                            } `}
                            onClick={() => handleOptionClick2(props.option2)}
                        >
                            {props.option2}
                        </div>
                        <div
                            className={`p-2 inner-size ${
                                props.selectedOption1 == [props.option3]
                                    ? "text-[#A0A0A0] "
                                    : "text-black"
                            } `}
                            onClick={() => handleOptionClick2(props.option3)}
                        >
                            {props.option3}
                        </div>
                         <div
                            className={`p-2 inner-size ${
                                props.selectedOption1 == [props.option4]
                                    ? "text-[#A0A0A0] "
                                    : "text-black"
                            } `}
                            onClick={() => handleOptionClick2(props.option4)}
                        >
                            {props.option4}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DynamicDropdown;
