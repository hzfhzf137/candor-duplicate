import React, {useState} from "react";

const ToggleClose = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div
            className="w-[38px] h-[22px] rounded-xl bg-[#F5F5F5] flex items-center p-1"
            style={{
                backgroundColor: checked ? "#E7EEF9" : "#F5F5F5",
            }}
            onClick={() => {
                setChecked(!checked);
            }}
        >
            <div
                className="w-[14px] h-[14px] bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                style={{
                    backgroundColor: checked ? "#3A37A6" : "#A0A0A0",
                    marginLeft: checked ? "16px" : "0px",
                }}
            ></div>
        </div>
    );
};

export default ToggleClose;
