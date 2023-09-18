import React, {useState} from 'react'
import ToggleButton from '../../ToggleButton/ToggleButton'
import ToolTip from '../../ToolTip/ToolTip'
import {ColorPicker} from "primereact/colorpicker"
import {useGlobalInfo} from '../../../contexts/GlobalContext'

const MainEndingLeft = (props) => {

    const {
        backgroundColor,
        setColor,
        textColor,
        setTextColor,
        setScreenTitle,
        setScreenText,
        stepDetails,
        setDetails
    } = useGlobalInfo()

    return (
        <>
            <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col p-2 px-4 gap-2">
                    {/* <div className="flex justify-between items-center gap-2 pb-2 border-b-[1px]">
                <h1 className="flex items-center   gap-2 subtitle-size font-medium text-[#262626]">
                  Add Video
                  <ToolTip />
                </h1>
                <ToggleButton isActive={true} width="[40px]" height="[22px]" />
              </div> */}
                    <div className="flex flex-col my-3  gap-4">
                        <label
                            htmlFor="overlay"
                            className=" font-[500]  subtitle-size leading-[22px] text-[#262626]"
                        >
                            Add a screen title
                        </label>
                        <textarea
                            name="overlay"
                            id="overlay"
                            cols="20"
                            rows="6"
                            className="shadow-md placeholder-input-modal  resize-none p-3 text-[14px] outline-none rounded-md"
                            onChange={(e) => {
                                setScreenTitle(e.target.value)
                            }}
                            placeholder="Thank you!"
                        ></textarea>
                    </div>
                    <div className="flex flex-col my-3  gap-4">
                        <label
                            htmlFor="overlay"
                            className=" font-[500] subtitle-size leading-[22px] text-[#262626] rounded-md"
                        >
                            Add a screen text
                        </label>
                        <textarea
                            name="overlay"
                            id="overlay"
                            cols="20"
                            rows="6"
                            onChange={(e) => {
                                setScreenText(e.target.value)
                            }}
                            className="shadow-md resize-none placeholder-input-modal   xxxxl:text-[20px] p-3 text-[14px] outline-none"
                            placeholder="Your help is greatly Appreciated"
                        ></textarea>
                    </div>

                    <div className="flex justify-between gap-2 pb-2 border-b-[1px]">
                        <h1 className="flex font-medium subtitle-size items-center gap-2  text-[#262626]">
                            Background color
                            <ToolTip/>
                        </h1>
                        {/* <button className="bg-[#3A37A6] shadow-md w-[40px] flex justify-center items-center gap-3 rounded-lg h-[40px] text-[13px]"></button> */}
                        <ColorPicker format="hex" value={backgroundColor} onChange={(e) => setColor(e.value)}/>
                    </div>

                    <div className="flex justify-between gap-2 pb-2 border-b-[1px]">
                        <h1 className="flex font-medium  subtitle-size items-center gap-2  text-[#262626]">
                            Text color
                            <ToolTip/>
                        </h1>
                        {/* <button className="bg-[#ffffff] w-[40px] flex justify-center items-center gap-3 rounded-lg h-[40px] text-[13px] shadow-md"></button> */}
                        <ColorPicker format="hex" value={textColor} onChange={(e) => setTextColor(e.value)}/>
                    </div>

                    <div className="flex justify-between items-center gap-2 pb-2 border-b-[1px]">
                        <h1 className="flex items-center  subtitle-size gap-2  font-medium text-[#262626]">
                            Logo
                            <ToolTip/>
                        </h1>
                        <ToggleButton state={true} width="[40px]" height="[22px]"/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainEndingLeft
