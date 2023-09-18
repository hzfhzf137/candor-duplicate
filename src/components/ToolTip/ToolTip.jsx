import React from "react";
import {Tooltip} from "antd";
import {Logos} from "../../assets";

function ToolTip() {
    const text = (
        <span className="text-black text-[10px] leading-none xxxxl:text-[20px]">
      "Lorem ipsum dolor sit amet,consecte-tur adipiscing elit,
    </span>
    );
    const color = ["white"];

    return (
        <div>
            <div className="cursor-pointer">
                <Tooltip placement="bottom" title={text} color={color} key={color}>
                    <img
                        src={Logos.InfoIcon}
                        alt="icon"
                        className=""
                        style={{width: "calc(1rem + 0.2vw)"}}
                    />
                </Tooltip>
            </div>
        </div>
    );
}

export default ToolTip;
