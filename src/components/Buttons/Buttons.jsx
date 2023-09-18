import React from "react";

const Button = (props) => {
    return (
        <>
            <div className="">
                <div
                    className={`rounded-md cursor-pointer p-[2px] flex flex-col items-center text-center xxxxl:w-[120px]  ${props.class} max-xs:w-[50px]`}
                    style={{
                        background:
                            "radial-gradient(84.87% 89.47% at -11.18% -9.21%, #AEBFF2 0%, #94A2F2 100%)",
                    }}
                    onClick={props.onClick}
                >
                    <img
                        src={props.img}
                        alt=""
                        className={` px-2 py-2 ${props.iconWidth} max-xs:w-[32px] xxxxl:w-[80px] `}
                    />
                    <p className="text-[10px] xxxxl:text-[20px] max-xs:text-[7px] font-[200] text-white">
                        {props.title}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Button;
