import React from "react";

const AuthComp = (props) => {
    return (
        <>
            <div className="hidden laptop:flex  bg-[#94A2F2]  w-[50%] flex-col justify-center">
                <div className="w-[80%]  mx-auto">
                    <img src={props.url} alt/>
                </div>
                <div>
                    <h1 className="text-[#FFFFFF] text-center sm:text-[20px] md:text-[25px] laptop:text-[30px] lg:text-[40px] xxl:text-[50px] laptop:leading-[62px] font-medium">
                        {props.startText}<br></br>{props.endText}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default AuthComp;
