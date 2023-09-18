import React, {useEffect, useState} from "react";
import {Logos} from "../../assets";

const AnimatedLoader = (props) => {
    const [showLoader, setShowLoader] = useState(true);

    function LoaderHandler() {
        setShowLoader(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(!LoaderHandler);
        }, 2000);
    }, []);
    return (
        <div>
            {showLoader && (
                <div
                    className=" w-full border-[1px] absolute bg-white h-[88vh] xxxxl:h-[100vh] z-50 shadow-md rounded-md ">
                    <div className=" flex flex-col justify-center items-center h-full">
                        <div className="h-[150px] w-full">
                            <div className={`p-4 ${props.content}`}>
                                <p className="pb-1 xxxxl:text-[28px] ">Sending to...</p>
                                <p className="font-[500] lg:text-[14px] xxxs:text-[11px] xxxxl:text-[32px]">
                                    Ryan Jones
                                </p>
                                <p className="lg:text-[12px] xxxs:text-[10px] text-[#A0A0A0] xxxxl:text-[30px]  ">
                                    ryanjones@example.com
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex items-center flex-col   px-3 my-auto justify-center mx-auto">
                            <img
                                src={Logos.AnimatedLoader}
                                alt="Loader"
                                className="lg:w-[120px]  xxxxl:w-[10%] xxxs:w-[90px]"
                            />
                            <p className="font-[500] my-1 xxxxl:text-[22px]">
                                Getting ready...
                            </p>
                            <p className="text-[#A0A0A0] text-center pt-32 lg:text-[13px] xxxs:text-[10px] xxxxl:text-[18px]">
                                Please make sure you’ve given your browser permission to
                                <br></br> access your camera and microphone.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnimatedLoader;
