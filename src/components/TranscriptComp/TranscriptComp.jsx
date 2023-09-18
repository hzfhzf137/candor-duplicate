import React from "react";
import {Logos} from "../../assets";
import {useNavigate} from "react-router-dom";

const TranscriptComp = () => {
    const navigate = useNavigate();

    function clickHandler() {
        navigate("/conversation");
    }

    return (
        <div className="grid">
            <div className="col-start-1 col-end-2 flex items-center justify-between w-full p-4">
                <div>
                    <h1 className="text-[18px] xxxxl:text-[26px]">Transcript</h1>
                </div>
                <div className="flex gap-3">
                    <img
                        src={Logos.CancelButton}
                        alt="Close Button"
                        className="w-[20px] cursor-pointer xxxxl:w-[30px]"
                        onClick={clickHandler}
                    />
                </div>
            </div>
            <div
                className="w-full shadow-md px-6 flex flex-col justify-between overflow-auto"
                style={{height: "calc(100vh - 135px)"}}
            >
                <div className="flex  justify-center ">
                    <img src={Logos.CenterBtn} alt="Close Button" className="w-[20px] "/>
                </div>

                <div className="lg:text-[12px] xxxs:text-[10px] xxxxl:text-[22px] xxl:text-[12px]   pb-5 ">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <div className="lg:text-[12px] xxxs:text-[10px] xxxxl:text-[22px] xxl:text-[12px]  pb-5">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <div className="lg:text-[12px] xxxs:text-[10px] xxxxl:text-[22px] xxl:text-[12px]  pb-5">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <div className="lg:text-[12px] xxxs:text-[10px] xxxxl:text-[22px] xxl:text-[12px]  pb-5">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <div className="flex flex-col justify-end items-center">
                    <div className="flex justify-center items-center px-10">
                        <img src={Logos.VideoEditBtn} alt="VideoEditBtn" className="px-4"/>
                        <img src={Logos.VideoPLayBtn} alt="VideoPLayBtn"/>
                        <img
                            src={Logos.RightVideoButton}
                            alt="RightVideoButton"
                            className="px-4"
                        />
                    </div>
                    <div className="flex justify-center text-[16px] mt-2  pb-3">
                        <p>00:46/1:26</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TranscriptComp;
