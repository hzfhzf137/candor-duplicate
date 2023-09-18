import React, {useState} from "react";
import {Logos} from "../../assets";
import AddALogo from "../PopUp/AddALogo";
import CreateMarket from "../CreateMarket/CreateMarket";

function OrgBranding(props) {
    const [button, setButton] = useState(false);
    const [isPopup, setIsPopup] = useState(false);


    const Popup = () => {
        setIsPopup(!isPopup);
    };

    function btnHandler(a) {
        setButton(a);
    }

    return (
        <>
            {!props.showSecondContent ? (
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
                                    <p className="subtitle-size  py-3">Logos</p>
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
                                        <div className="flex justify-between  py-2">
                                            <div>
                                                <p className="subtitle-size">Logos</p>
                                                <p className="inner-size">
                                                    Logos can be addes to candor video and emails
                                                </p>
                                            </div>
                                            <img
                                                src={Logos.BrandingAdd}
                                                alt="Add Button"
                                                className="lg:w-[120px] xxxs:w-[50px] cursor-pointer"
                                                onClick={Popup}
                                            />
                                            {isPopup && (
                                                <AddALogo
                                                    handleClose={Popup}
                                                    title={"Add Logo"}
                                                    btnTitle={"Save Logo"}
                                                />
                                            )}
                                        </div>
                                        <div className="flex justify-between ">
                                            <p className="inner-size">Martine For U.S senate</p>
                                            <div className="flex gap-2 mr-2">
                                                <img
                                                    src={Logos.BrandingEdit}
                                                    alt="edit button"
                                                    className="icon-size"
                                                />
                                                <img
                                                    src={Logos.Trash}
                                                    alt="Trash button"
                                                    className="icon-size"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-between py-2 pb-4">
                                            <p className="inner-size">Hispanics for martin</p>
                                            <div className="flex gap-2 mr-2">
                                                <img
                                                    src={Logos.BrandingEdit}
                                                    alt="edit button"
                                                    className="icon-size"
                                                />
                                                <img
                                                    src={Logos.Trash}
                                                    alt="Trash button"
                                                    className="icon-size"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <CreateMarket/>
            )}
        </>
    );
}

export default OrgBranding;
