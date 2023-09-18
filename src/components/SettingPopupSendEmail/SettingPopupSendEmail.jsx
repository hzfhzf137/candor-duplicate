import React, {useState} from "react";
import {Logos} from "../../assets";
import InputComp from "../../components/InputComp/InputComp";
import ToggleOpen from "../../components/ToggleComp/ToggleOpen";

const SettingPopupSendEmail = (props) => {
    const [searchText, setSearchText] = useState("");
    return (
        <div
            className="popup-box fixed z-10 backdrop-opacity-20 flex justify-center items-center bg-black/30 left-0 top-0 w-full h-full"
            onClick={props.handleClose1}
        >
            <div
                className="box relative rounded-md lg:w-[440px] xxxs:w-[320px] bg-white lg:min-h-[200px] mx-auto "
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between px-6 lg:pt-6 xxxs:pt-5">
                    <div className="lg:text-[16px] xxxs:text-[14px] xxxl:text-[22px] font-medium">
                        {props.title}
                    </div>
                    <button className="btn-close" onClick={props.handleClose1}>
                        <img
                            src={Logos.CloseIcon}
                            alt="Close Button"
                            className="lg:w-[16px] xxxs:w-[14px]"
                        />
                    </button>
                </div>
                <hr className=" border-1 border-[#E7EEF9] mt-5"/>
                <div className="w-full flex flex-col gap-3 p-5">
                    <p className="lg:text-[12px] xxxs:text-[11px] xxxl:text-[17px] font-medium">
                        Send A Test To...
                    </p>
                    <InputComp
                        type="text"
                        size="medium"
                        placeholder="tim@example.com,jill@example.com"
                        isButton={true}
                        className="bg-[#F5F5F5] text-[#A0A0A0] border-none h-[35px] text-[13px] xxxs:text-[12px]"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <p className="lg:text-[11px] xxxs:text-[10px] xxxl:text-[15px] pl-2 font-medium">
                        Use Commas To Separate Multiple Emails.
                    </p>
                    <div
                        className="min-h-[60px] lg:text-[11px] xxxs:text-[10px] xxxl:text-[14px] p-3 bg-[#CEDEF2] rounded shadow-md">
                        <p className="font-medium">
                            Merge tags will populate with sample text in emaill previews..
                        </p>
                        <p className="text-[#A0A0A0]">
                            Alternatively, you can test your email using merge tag falllbacks.
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <p className="lg:text-[12px] xxxs:text-[11px] xxxl:text-[15px] font-medium">
                                Use fallbacks
                            </p>
                            <img src={Logos.InfoIcon} alt="icon" className="w-[11px]"/>
                        </div>
                        <div className="flex">
                            <ToggleOpen/>
                        </div>
                    </div>
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

export default SettingPopupSendEmail;
