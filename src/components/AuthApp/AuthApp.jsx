import React, {useState} from "react";
import {Logos} from "../../assets";

function AuthApp() {
    const [button, setButton] = useState(true);

    function btnHandler(a) {
        setButton(a);
    }

    return (
        <div>
            <div className="w-full h-[82vh] overflow-y-auto">
                <div className="px-3 py-4">
                    <div className="border-[1px] rounded-md ">
                        <div
                            className={`flex cursor-pointer justify-between px-3  h-[55px]  ${
                                button === true ? "text-[#3A37A6]" : "text-black"
                            }`}
                            onClick={() => {
                                btnHandler(!button);
                            }}
                        >
                            <p className="title-size xxxs:mt-1 py-3">
                                Manage Integrations
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
                            <div className=" border-t-[1px] lg:px-5 xxxs:px-2">
                                <p className="subtitle-size mt-2">
                                    Connect app or revoke access here
                                </p>
                                <div>
                                    <div className="flex rounded-lg lg:my-4 xxxs:my-2 border p-3 justify-between">
                                        <div className="flex gap-4 items-center">
                                            <img
                                                src={Logos.AuthZapier}
                                                alt="zapier"
                                                className="lg:w-[70px] xxxs:w-[40px]"
                                            />
                                            <div>
                                                <p className="subtitle-size">
                                                    Zapier
                                                </p>
                                                <p className="inner-size">
                                                    Connect to over 2,000 apps via zapier
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <img
                                                src={Logos.BrandingCheckbox}
                                                alt="checkbox icon"
                                                className="icon-size  cursor-pointer"
                                            />
                                            <img
                                                src={Logos.Trash}
                                                alt="Trash icon"
                                                className="icon-size  cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex rounded-lg lg:my-4 xxxs:my-2 border p-3 justify-between">
                                        <div className="flex gap-4 items-center">
                                            <img
                                                src={Logos.AuthStripe}
                                                alt="stripe"
                                                className="lg:w-[70px] xxxs:w-[40px]"
                                            />
                                            <div>
                                                <p className="subtitle-size">
                                                    Stripe
                                                </p>
                                                <p className="inner-size">
                                                    Process payments With stripe payment processing.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                className="w-[150px] h-[45px] my-3 shadow rounded text-white lg:text-[14px] xxs:text-[12px] bg-[#94A2F2]">
                                                Connect
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthApp;
