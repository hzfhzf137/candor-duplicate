import React, {useEffect} from "react";
import {Logos} from "../../assets";
import {useNavigate} from "react-router";
import {useGlobalInfo} from "../../contexts/GlobalContext";

function TrimVideoLibrary() {
    const navigate = useNavigate();
    const {setModule} = useGlobalInfo();

    function VideoHandler() {
        navigate("/video-steps");
    }

    useEffect(() => {
        setModule("Video Trim");
    }, []);
    return (
        <div className="">
            <div className="flex w-full justify-between items-center">
                <div className="flex">
                    <img
                        src={Logos.BreadcrumbBack}
                        alt="icon"
                        className="cursor-pointer ml-2 w-[8px] xxxl:w-[10px]"
                        onClick={() => {
                            VideoHandler();
                        }}
                    />
                    <p className="ml-4 text-[18px] xxxl:text-[22px]">Trim Video</p>
                </div>
                <div className="flex gap-3">
                    <button
                        className="h-[45px] border-[1px] rounded shadow-md text-center px-3 border-[#94A2F2] text-[#94A2F2] xxxl:text-[20px] lg:text-[15px] xxxs:text-[11px]">
                        Total time : 2m : 30s
                    </button>
                    <button
                        onClick={() => {
                            VideoHandler();
                        }}
                        className="bg-[#94A2F2] h-[45px] w-[80px] px-2 rounded shadow-md text-center text-white xxxl:text-[20px]  lg:text-[15px] xxxs:text-[11px]"
                    >
                        Trim
                    </button>
                </div>
            </div>
            <div className="">
                <img
                    src={Logos.TrimVideoImg}
                    alt="Trim video image flex flex-auto"
                    className="w-full"
                    style={{height: "calc(100vh - 130px)"}}
                />
            </div>
        </div>
    );
}

export default TrimVideoLibrary;
