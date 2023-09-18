import React, {useState} from "react";
import {Logos} from "../../assets";

import {useNavigate} from "react-router";


const EmailPreview = () => {

    const [toggle, setToggle] = useState(false);

    const [button1, setButton1] = useState("desk");

    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/general-setting");
    }


    function btnHandler1(a) {
        setButton1(a);
    }


    return (
        <div>
            {button1 === "desk" && (
                <div className="flex items-center justify-between pb-2 w-full">
                    <div className="flex items-center justify-start gap-3">
                        <img
                            src={Logos.VectorLeft}
                            alt="Vector Left"
                            className="cursor-pointer w-[7px]"
                            onClick={() => {
                                VideoHandler();
                            }}
                        />
                        <h1 className="font-medium lg:text-[18px] xxxs:text-[14px] text-[#262626]">
                            Email Preview
                        </h1>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="bg-[#94A2F2] cursor-pointer py-2 px-3 flex justify-center items-center rounded-none rounded-l-md"
                            style={{
                                backgroundColor: button1 == "desk" ? "#94A2F2" : "#E7EEF9",
                                color: button1 == "desk" ? "white" : "#A0A0A0",
                            }}
                            onClick={() => {
                                btnHandler1("desk");
                            }}
                        >
                            {button1 == "desk" ? (
                                <img src={Logos.MonitorImg} alt="Monitor Img" className="w-5"/>
                            ) : (
                                <img src={Logos.MoniterImg1} alt="Monitor Img dull"/>
                            )}
                        </button>
                        <button
                            className="bg-[#E7EEF9] py-2 cursor-pointer lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-r-md"
                            style={{
                                backgroundColor: button1 == "mbl" ? "#94A2F2" : "#E7EEF9",
                                color: button1 == "mbl" ? "white" : "#A0A0A0",
                            }}
                            onClick={() => {
                                btnHandler1("mbl");
                            }}
                        >
                            {button1 == "mbl" ? (
                                <img src={Logos.SmartPhone1} alt="Smart Phone Img "/>
                            ) : (
                                <img src={Logos.SmartPhoneImg} alt="Smart Phone Img dull"/>
                            )}
                        </button>
                    </div>
                </div>
            )}
            {button1 === "mbl" && (
                <div className="flex items-center justify-between pb-2 w-full">
                    <div className="flex items-center justify-start gap-3">
                        <img
                            src={Logos.VectorLeft}
                            alt="Vector Left"
                            className="cursor-pointer w-[7px]"
                            onClick={() => {
                                VideoHandler();
                            }}
                        />
                        <h1 className="font-medium lg:text-[18px] xxxs:text-[14px] text-[#262626]">
                            Mobile Preview
                        </h1>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="bg-[#94A2F2] cursor-pointer py-2 px-3 flex justify-center items-center rounded-none rounded-l-md"
                            style={{
                                backgroundColor: button1 == "desk" ? "#94A2F2" : "#E7EEF9",
                                color: button1 == "desk" ? "white" : "#A0A0A0",
                            }}
                            onClick={() => {
                                btnHandler1("desk");
                            }}
                        >
                            {button1 == "desk" ? (
                                <img src={Logos.MonitorImg} alt="Monitor Img" className="w-5"/>
                            ) : (
                                <img
                                    src={Logos.MoniterImg1}
                                    alt="Monitor Img dull"
                                    className="w-5"
                                />
                            )}
                        </button>
                        <button
                            className="bg-[#E7EEF9] py-2 cursor-pointer lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-r-md"
                            style={{
                                backgroundColor: button1 == "mbl" ? "#94A2F2" : "#E7EEF9",
                                color: button1 == "mbl" ? "white" : "#A0A0A0",
                            }}
                            onClick={() => {
                                btnHandler1("mbl");
                            }}
                        >
                            {button1 == "mbl" ? (
                                <img src={Logos.SmartPhone1} alt="Smart Phone Img "/>
                            ) : (
                                <img src={Logos.SmartPhoneImg} alt="Smart Phone Img dull"/>
                            )}
                        </button>
                    </div>
                </div>
            )}
            <div
                className={`bg-contain w-full rounded-md relative border-[1px] border-[#EBEBEB] border-solid shadow-md`}
            >
                <div
                    className="flex flex-col items-center gap-3"
                    style={{height: "calc(100vh - 130px)"}}
                >
                    {button1 === "desk" && (
                        <div className="w-full">
                            <div
                                class="border-b-[1px] lg:text-[12px] xxxs:text-[10px] text-[#A0A0A0] border-solid py-3 lg:px-4 xxxs:px-2">
                                This is a preview for an example contact. Click here to generate
                                the preview for a specific contact.
                            </div>
                            <div
                                className="flex flex-col justify-center items-center p-3"
                                style={{height: "calc(100vh - 170px)"}}
                            >
                                <div
                                    className="bg-[#E7EEF9] m-auto flex flex-col gap-1 h-[287px] p-4 border-[1px] rounded-md">
                                    <p className="flex lg:gap-11 xxxs:gap-8 lg:text-[12px] xxxs:text-[11px] font-medium text-[#262626]">
                                        To
                                        <p className="lg:text-[11px] xxxs:text-[10px]">
                                            : Example Contact example@google.com
                                        </p>
                                    </p>
                                    <p className="flex lg:gap-3 xxxs:gap-1 lg:text-[12px] xxxs:text-[11px] font-medium text-[#262626]">
                                        Subject
                                        <p className="lg:text-[11px] xxxs:text-[10px]">: Example</p>
                                    </p>
                                    <div className="lg:text-[11px] xxxs:text-[10px] flex flex-col gap-1">
                                        <p className="py-1">Hi Example,</p>
                                        <p>
                                            Notices all my emails have been opened, is this my cue to
                                            stop following up?
                                        </p>
                                        <p className="pt-1"> Best,</p>
                                        <p className="pb-1">Eugen</p>
                                        <p>Eugen Esanu</p>
                                        <p>Apollo</p>
                                        <p>
                                            535 Mission St, Suite 1100, San Francisco, California
                                            94105, US
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="bg-[#AEBFF2] w-[200px] mt-4 text-white flex justify-center items-center gap-3 p-3 rounded-md shadow-md lg:h-[35px] xxxs:h-[30px] lg:text-[14px] xxxs:text-[12px]">
                                    Send Test Email To Me
                                </button>
                                <p className="my-3 pb-2 lg:text-[12px] xxxs:text-[10px] text-[#A0A0A0] text-center">
                                    Tests will deliver from your default mailbox to
                                    eugen@apollo.io
                                </p>
                            </div>
                        </div>
                    )}
                    {button1 === "mbl" && (
                        <div className="w-full">
                            <div className="flex justify-center items-center ">
                                <img
                                    src={Logos.EmailMblPreview}
                                    alt="Mbl Girl"
                                    className="w-[250px] lg:p-6 xxxs:p-10"
                                />
                                {toggle === true && (
                                    <img
                                        src={Logos.SettingOverlayGirlImg}
                                        alt="Black Video Girl"
                                        className="absolute w-[170px] top-12"
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmailPreview;
