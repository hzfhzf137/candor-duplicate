import React from 'react'

const WelcomeComp = (props) => {
    return (
        <div className="flex gap-4  ">
            <div className="pt-2">
                <div className="bg-[#AEBFF2] w-[5px] h-full  rounded-[6px]"></div>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <h1 className="font-semibold text-[20px] xxl:text-[32px] text-[#94A2F2]">{props.title}</h1>
                <p className="font-light text-[12px] xxl:text-[20px] text-[#A0A0A0]">{props.caption}</p>
            </div>
        </div>
    )
}

export default WelcomeComp
