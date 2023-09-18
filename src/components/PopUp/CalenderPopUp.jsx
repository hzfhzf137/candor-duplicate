import React from 'react'
import {Logos} from "../../assets";

const days = [
    {
        name: "SUN"
    },
    {
        name: "MON"
    },
    {
        name: "TUE"
    },
    {
        name: "WED"
    },
    {
        name: "THU"
    },
    {
        name: "FRI"
    },
    {
        name: "SAT"
    },


]
const dates = [
    {
        entity: ''
    },
    {
        entity: ''
    }, {
        entity: ''
    },
    {
        entity: "01"
    },
    {
        entity: "02"
    },
    {
        entity: '03'
    },
    {
        entity: ' 04'
    },
    {
        entity: '05'
    },
    {
        entity: ' 06'
    },
    {
        entity: ' 07'
    },
    {
        entity: '08'
    },
    {
        entity: '09'
    },
    {
        entity: '10'
    },
    {
        entity: '11'
    },
    {
        entity: '12'
    },
    {

        entity: '13'
    },
    {
        entity: '14'
    },
    {
        entity: '15'
    },
    {
        entity: '16'
    },
    {
        entity: '17'
    },
    {
        entity: ' 18'
    },
    {
        entity: '19'
    },
    {
        entity: '20'
    },
    {
        entity: '21'
    },
    {
        entity: '22'
    },
    {
        entity: '23'
    },
    {
        entity: '24'
    },
    {
        entity: '25'
    },
    {
        entity: '26'
    },
    {
        entity: '27'
    },
    {
        entity: '28'
    },
    {
        entity: '29'
    },
    {
        entity: '30'
    },
    {
        entity: '31'
    },
    {
        entity: ''
    },

]


const CalenderPopUp = props => {
    return (
        <div
            className="popup-box fixed  backdrop-opacity-20 z-20 bg-black/30 flex justify-center items-center left-0 top-0 w-full h-full"
            onClick={props.CloseCalender}>
            <div
                className="box  relative rounded-md  lg:w-[380px] xxxs:w-[320px] bg-white lg:min-h-[360px]  xxxs:min-h-[300px] mx-auto "
                onClick={e => {
                    e.stopPropagation()
                }}>
                <div className="px-4 ">
                    <div className=" flex  pt-6  justify-end gap-16 w-full items-center justify-items-center">
                        <div className=" flex  justify-between py-1 w-50 px-2 bg-[rgb(231,238,249)]   rounded">
                            <img
                                src={Logos.LeftBtn}
                                alt="Close Button"
                                className="w-[25px] "
                            />
                            <p className="px-6  text-[16px] text-[#3A37A6]">June 2022</p>
                            <img
                                src={Logos.RightBtn}
                                alt="Close Button"
                                className="w-[25px]"
                            />
                        </div>
                        <button className="btn-close " onClick={props.CloseCalender}>
                            <img
                                src={Logos.ClosePopup}
                                alt="Close Button"
                                className="lg:w-[20px] xxxs:w-[15px]"
                            />
                        </button>
                    </div>

                    <div
                        className=" ml-6 pt-10 grid grid-cols-7 items-center justify-center  justify-items-centertext-center">
                        {days.map((item) => {
                            return <div className="text-[#94A2F2]  lan">{item.name}</div>;
                        })}
                        {dates.map((item) => {
                            return <div className="leading-[36px]">{item.entity}</div>;
                        })}
                    </div>

                    <div
                        className=" flex justify-center py-4"

                    >
                        <img src={Logos.Applybtn} className=" w-[45%]"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalenderPopUp
