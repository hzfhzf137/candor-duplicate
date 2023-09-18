import React from "react";
import {Link} from "react-router-dom";
import ButtonComp from "../ButtonComp/ButtonComp";

const AuthButtonComp = (props) => {
    return (
        <div className="flex flex-col  justify-center items-center gap-5 ">
            <button
                type="submit"
                className="bg-gradient-to-b flex justify-center items-center w-full h-[40px] from-[#AEBFF2] to-[#94A2F2]  xxl:h-[60px] text-white py-[15px] px-[30px] rounded-[5px] xxl:text-[24px]"
            >
                {props.firstButtonLabel}
            </button>
            {props.icon ? (
                <div></div>
            ) : (
                <Link to={props.toSecond} className="w-full">
                    <ButtonComp
                        className="flex items-center justify-center w-full shadow-sm h-[40px]  xxl:h-[60px] py-[15px] px-[30px] rounded-[5px] border-2 border-[#94A2F2] text-[#94A2F2] xxl:text-[24px]"
                        name={props.secondButtonLabel}
                    />
                </Link>
            )}
        </div>
    );
};

export default AuthButtonComp;
