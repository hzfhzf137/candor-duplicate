import React, {useState} from "react";
import {Logos} from "../../assets";
import EditAddress from "../PopUp/EditAddress";
import ToolTip from "../ToolTip/ToolTip";

function PlanAndBiling() {
    const [button, setButton] = useState(false);
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const [progress, setProgress] = useState(40);
    const [showContent, setShowContent] = useState(false);

    const handleButtonClick1 = () => {
        setProgress(100);
        setShowContent(true);
    };

    const barColor = progress < 100 ? "bg-[#94A2F2]" : "bg-[#F24B59]";

    const Popup = () => {
        setIsPopup(!isPopup);
    };

    function btnHandler(a) {
        setButton(a);
        setButton1(false);
        setButton2(false);
        setButton3(false);
    }

    function btnHandler1(a) {
        setButton1(a);
        setButton(false);
        setButton2(false);
        setButton3(false);
    }

    function btnHandler2(a) {
        setButton2(a);
        setButton1(false);
        setButton(false);
        setButton3(false);
    }

    function btnHandler3(a) {
        setButton3(a);
        setButton1(false);
        setButton2(false);
        setButton(false);
    }

    return (
        <div>

            <div className="w-full h-[82vh] overflow-y-auto">
                <div className="px-3 py-2">
                    <div className="min-h-[270px] mb-2 rounded-md border">
                        <div className="lg:p-4  xxxs:p-2  border-b ">
                            <p className="title-size">Your Plan</p>
                        </div>
                        <div className="lg:py-3 xxxs:py-1 lg:px-4 xxxs:px-2">
                            <p className="subtitle-size">Brand</p>
                            <div className="flex gap-2 items-center">
                                <p className="subtitle-size text-[#94A2F2] font-bold">
                                    $50
                                </p>
                                <p className=" subtitle-size">
                                    (Monthly)
                                </p>
                            </div>
                            <p className="inner-size text-[#A0A0A0]">
                                Free for 3 users, after 3 users each additional user had to pay
                                $16.67
                            </p>
                            <div className="flex justify-between">
                                <div className="flex pt-1">
                                    <p className="inner-size mb-2 ">
                                        Processing Minutes used so far this month
                                    </p>
                                    <div className="p-1">
                                        <ToolTip/>
                                    </div>
                                </div>

                                <div className="flex subtitle-size">
                  <span
                      className={`  ${
                          progress == 100 ? "text-[#F24B59]" : "text-[#94A2F2]"
                      } `}
                  >
                    <p className="inner-size">{progress == 100 ? "230Min" : "86Min"}</p>
                  </span>
                                    <span className="inner-size">/200Min</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-full bg-[#F5F5F5] h-4 rounded-full">
                                    <div
                                        className={`h-full ${barColor} rounded-full transition-all duration-1000`}
                                        style={{width: `${progress}%`}}
                                    ></div>
                                </div>
                                <button
                                    className="mt-4 px-4 py-2 subtitle-size bg-[#94A2F2] text-white rounded-md"
                                    onClick={handleButtonClick1}
                                >
                                    progress
                                </button>
                                {showContent && (
                                    <div className="mt-4">
                                        <div className="flex justify-center flex-wrap w-full gap-4">
                                            <div
                                                className="lg:h-[250px] xxxs:h-[200px]  lg:w-[400px] xxxs:w-[200px] rounded shadow p-3  bg-[#E7EEF9]">
                                                <p className="subtitle-size text-[#3A37A6]">
                                                    Average
                                                </p>
                                                <div className="flex justify-between inner-size pt-1">
                                                    <p>Minutes</p>
                                                    <p className="text-[#F24B59] inner-size">+86Min</p>
                                                </div>
                                                <div className="flex justify-between inner-size pt-1">
                                                    <p>Cost per minute</p>
                                                    <p className="text-[#A0A0A0] inner-size">€10</p>
                                                </div>
                                                <hr className="lg:mt-24 xxxs:mt-10 border-[#A0A0A0]"/>
                                                <div className="flex justify-between inner-size py-2">
                                                    <p>Total</p>
                                                    <p className="text-[#A0A0A0] inner-size">$8.60</p>
                                                </div>
                                            </div>
                                            <div
                                                className="lg:h-[250px] xxxs:h-[200px]   lg:w-[400px] xxxs:w-[200px]  rounded shadow p-3   bg-[#E7EEF9]">
                                                <p className="subtitle-size text-[#3A37A6]">
                                                    Additional users
                                                </p>
                                                <div className="flex justify-between inner-size pt-1">
                                                    <p>Included users</p>
                                                    <p className="text-[#A0A0A0] inner-size">3/3</p>
                                                </div>
                                                <div className="flex justify-between inner-size pt-1">
                                                    <p>Additional user</p>
                                                    <p className="text-[#A0A0A0] inner-size">2</p>
                                                </div>
                                                <div className="flex justify-between inner-size pt-1">
                                                    <p>Cost per additional user</p>
                                                    <div>
                                                        <p className="text-[#A0A0A0] text-end inner-size">$10</p>
                                                        <p className="text-[#A0A0A0] inner-size">
                                                            Pre month
                                                        </p>
                                                    </div>
                                                </div>
                                                <hr className="lg:mt-10 xxxs:mt-2  border-[#A0A0A0]"/>
                                                <div className="flex justify-between inner-size py-2">
                                                    <p>Total</p>
                                                    <p className="text-[#A0A0A0] ">$8.60</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between lg:text-[14px] py-2 xxxs:text-[11px]">
                                            <p className="inner-size">Monthly billing estimate</p>
                                            <div>
                                                <p className="inner-size">$68.60</p>
                                                <p className="text-[#A0A0A0] inner-size">
                                                    Plus tax
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="border-[1px] rounded-md ">
                        <div
                            className={`flex cursor-pointer justify-between px-3  h-[55px]  ${
                                button === true ? "text-[#3A37A6]" : "text-black"
                            }`}
                            onClick={() => {
                                btnHandler(!button);
                            }}
                        >
                            <p className="subtitle-size xxxs:mt-1 py-3">
                                Billing Address
                            </p>
                            <img
                                src={Logos.Arrowdown}
                                alt="Dropdown Arrow"
                                style={{
                                    transform: button ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                                className="w-[20px]"
                            />
                        </div>
                        {button === true && (
                            <div className=" border-t-[1px] p-5 xxxs:px-2">
                                <div className="flex  border-[1px] rounded justify-between  p-3">
                                    <div className=" ">
                                        <p className="subtitle-size">
                                            525 North 5th street
                                        </p>
                                        <p className="subtitle-size">
                                            Suite #302
                                        </p>
                                        <p className="subtitle-size">
                                            Greensboro, nc 27455
                                        </p>
                                    </div>
                                    <img
                                        src={Logos.BrandingEdit}
                                        alt="Add Button"
                                        className="icon-size"
                                        onClick={Popup}
                                    />
                                    {isPopup && (
                                        <EditAddress
                                            handleClose={Popup}
                                            title={"Edit Address"}
                                            input1={"Address"}
                                            input2={"Address line 2"}
                                            input3={"City"}
                                            input4={"State"}
                                            placeholder1={"city"}
                                            placeholder2={"state"}
                                            height={"570px"}
                                            margin={"10"}
                                            paddingBottom={"4"}
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={` border-[1px] my-4 rounded-md `}>
                        <div
                            className={`flex cursor-pointer justify-between px-3  h-[55px]  ${
                                button1 === true ? "text-[#3A37A6]" : "text-black"
                            }`}
                            onClick={() => {
                                btnHandler1(!button1);
                            }}
                        >
                            <p className="subtitle-size py-3">
                                Payment Method
                            </p>
                            <img
                                src={Logos.Arrowdown}
                                alt="Dropdown Arrow"
                                style={{
                                    transform: button1 ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                                className="w-[20px]"
                            />
                        </div>
                        {button1 === true && (
                            <div className=" border-t-[1px] p-5 xxxs:px-2">
                                <div className="flex justify-between  rounded p-4 border-[1px]">
                                    <div className="flex gap-2">
                                        <img src={Logos.PlaningVisa} alt="Visa img" className=""/>
                                        <div>
                                            <p className="subtitle-size">
                                                Visa ending in 1234
                                            </p>
                                            <p className="inner-size">
                                                James doe
                                            </p>
                                            <p className="inner-size">
                                                Expires 12/2026
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src={Logos.BrandingEdit}
                                        alt="Add Button"
                                        className="icon-size"
                                        onClick={Popup}
                                    />
                                    {isPopup && (
                                        <EditAddress
                                            handleClose={Popup}
                                            title={"Add card"}
                                            class={"hidden"}
                                            input1={"Name on the card"}
                                            input2={"Card number"}
                                            input3={"Expiration"}
                                            input4={"CVV"}
                                            placeholder1={"MM/YY"}
                                            placeholder2={""}
                                            height={"380px"}
                                            margin={"20"}
                                            paddingBottom={"4"}
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={` border-[1px] my-4 rounded-md `}>
                        <div
                            className={`flex cursor-pointer justify-between px-3  h-[55px]  ${
                                button2 === true ? "text-[#3A37A6]" : "text-black"
                            }`}
                            onClick={() => {
                                btnHandler2(!button2);
                            }}
                        >
                            <p className="subtitle-size py-3">History</p>
                            <img
                                src={Logos.Arrowdown}
                                alt="Dropdown Arrow"
                                style={{
                                    transform: button2 ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                                className="w-[20px]"
                            />
                        </div>
                        {button2 === true && (
                            <div className=" border-t-[1px] lg:pt-4  xxxs:pt-2">
                                <table className="w-full">
                                    <tr className="bg-[#E7EEF9]  w-full h-[60px]">
                                        <td className="subtitle-size lg:px-3 xxxs:px-1">
                                            Reference
                                        </td>
                                        <td className="subtitle-size lg:px-3 xxxs:px-1">
                                            Status
                                        </td>
                                        <td className="subtitle-size lg:px-3 xxxs:px-1">
                                            Amount
                                        </td>
                                        <td className="subtitle-size lg:px-3 xxxs:px-1">
                                            Overage minute
                                        </td>
                                        <td className="subtitle-size lg:px-3 xxxs:px-1">
                                            Overage cost
                                        </td>
                                        <td className="subtitle-size lg:px-3 xxxs:px-1">
                                            Additional user
                                        </td>
                                        <td className="subtitle-size lg:px-3 xxxs:px-1">
                                            Additional user Cost
                                        </td>
                                        <td className="subtitle-size lg:px-3 xxxs:px-1">
                                            Date
                                        </td>
                                        <td className="subtitle-size lg:px-9 xxxs:px-1"></td>
                                    </tr>
                                    <tr className="">
                                        <td className=" inner-size lg:text-[13px] xxxs:text-[10px] text-[#94A2F2] text-center px-2">
                                            #3682303
                                        </td>
                                        <td className="inner-size lg:text-[13px] xxxs:text-[10px] text-[#F6CE99] text-start px-2">
                                            Pending
                                        </td>
                                        <td className="inner-size lg:text-[13px] xxxs:text-[10px] text-start px-2">
                                            $264
                                        </td>
                                        <td className="inner-size lg:text-[13px] xxxs:text-[10px] text-start px-2">
                                            19 min
                                        </td>
                                        <td className=" inner-size lg:text-[13px] xxxs:text-[10px] text-start px-2">
                                            $4.75
                                        </td>
                                        <td className=" inner-size lg:text-[13px] xxxs:text-[10px] text-start px-2">
                                            2
                                        </td>
                                        <td className=" inner-size lg:text-[13px] xxxs:text-[10px] text-start px-2">
                                            $20
                                        </td>
                                        <td className="inner-size px-2 lg:text-[13px] xxxs:text-[10px] text-center  ">
                                            22/04/2020
                                        </td>
                                        <td className="py-2">
                                            <div className="flex gap-2 px-3">
                                                <img
                                                    src={Logos.EyeBtn}
                                                    alt="eye icon"
                                                    className="lg:w-8 xxxs:w-5"
                                                />
                                                <img
                                                    src={Logos.PlanningDownload}
                                                    alt="download"
                                                    className="lg:w-6 xxxs:w-5 "
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="inner-size  text-[#94A2F2] text-center px-2">
                                            #3682303
                                        </td>
                                        <td className=" inner-size  text-[#41e94a] text-start px-2">
                                            Successfull
                                        </td>
                                        <td className="inner-size  text-start px-2">
                                            $264
                                        </td>
                                        <td className=" inner-size  text-start px-2">
                                            19 min
                                        </td>
                                        <td className="inner-size  text-start px-2">
                                            $4.75
                                        </td>
                                        <td className=" inner-size  text-start px-2">
                                            2
                                        </td>
                                        <td className=" inner-size  text-start px-2">
                                            $20
                                        </td>
                                        <td className="inner-size  text-center  ">
                                            22/04/2020
                                        </td>
                                        <td>
                                            <div className="flex gap-2 px-3">
                                                <img
                                                    src={Logos.EyeBtn}
                                                    alt="eye icon"
                                                    className="lg:w-8 xxxs:w-5"
                                                />
                                                <img
                                                    src={Logos.PlanningDownload}
                                                    alt="download"
                                                    className="lg:w-6 xxxs:w-5 "
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="inner-size  text-[#94A2F2] text-center px-2">
                                            #3682303
                                        </td>
                                        <td className="inner-size  text-[#41e94a] text-start px-2">
                                            Successfull
                                        </td>
                                        <td className="inner-size  text-start px-2">
                                            $264
                                        </td>
                                        <td className="inner-size  text-start px-2">
                                            19 min
                                        </td>
                                        <td className="inner-size  text-start px-2">
                                            $4.75
                                        </td>
                                        <td className="inner-size  text-start px-2">
                                            2
                                        </td>
                                        <td className="inner-size  text-start px-2">
                                            $20
                                        </td>
                                        <td className="inner-size  text-center  ">
                                            22/04/2020
                                        </td>
                                        <td className="py-2">
                                            <div className="flex gap-2 px-3">
                                                <img
                                                    src={Logos.EyeBtn}
                                                    alt="eye icon"
                                                    className="lg:w-8 xxxs:w-5"
                                                />
                                                <img
                                                    src={Logos.PlanningDownload}
                                                    alt="download"
                                                    className="lg:w-6 xxxs:w-5 "
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        )}
                    </div>
                    <div className={` border-[1px] my-4 rounded-md `}>
                        <div
                            className={`flex cursor-pointer justify-between px-3  min-h-[55px]  ${
                                button3 === true ? "text-[#3A37A6]" : "text-black"
                            }`}
                            onClick={() => {
                                btnHandler3(!button3);
                            }}
                        >
                            <p className="subtitle-size py-3">
                                Cancel Subscription
                            </p>
                            <img
                                src={Logos.Arrowdown}
                                alt="Dropdown Arrow"
                                style={{
                                    transform: button3 ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                                className="w-[20px]"
                            />
                        </div>
                        {button3 === true && (
                            <div className=" border-t-[1px] lg:px-5 xxxs:px-2">
                                <div className=" py-2">
                                    <p className="inner-size">
                                        This will delete all other accounts, all Candor Video, and
                                        all<br></br> interactions. This cannot be undone.
                                    </p>
                                    <button className="  subtitle-size rounded mt-3 p-3 text-white bg-[#ea5a5a]">
                                        Cancel Subscription
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanAndBiling;
