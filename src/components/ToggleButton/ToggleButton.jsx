import React, { useState, useEffect } from "react";
import { useGlobalInfo } from "../../contexts/GlobalContext";

function ToggleButton({
  index,
  width,
  state,
  disabled,
  toggleState,
  height,
  setState,
  key1,
}) {
  const { setLogo } = useGlobalInfo();
  const [isOn, setIsOn] = useState(state);

  const [position, setPosition] = useState(state ? "right" : "left");
  const toggleSwitch = (On) => {
    setIsOn(!isOn);
    setPosition(position === "left" ? "right" : "left");
    // onChange()
    setLogo(!isOn);

    if (toggleState) {
      const updatedToggleState = [...toggleState];
      updatedToggleState[index].state = On;
    }
    if (setState && key1) {
      setState(On, key1);
    } else if (setState) {
      setState(On);
    }
  };

  return (
    <div
      className="flex cursor-pointer "
      onClick={() => {
        if (!disabled) {
          toggleSwitch(!isOn);
        }
      }}
    >
      <div
        className={`w-${width} h-${height} xxxxl:w-[65px] xxxxl:h-[30px] xxxxl:rounded-2xl  rounded-xl p-1 ${
          position === "right" && "ml-auto"
        } ${isOn ? "bg-[#E7EEF9]" : "bg-[#F5F5F5]"} transition-all`}
      >
        <div
          className={` w-[15px] h-[15px] rounded-full xxxxl:w-[20px] xxxxl:h-[20px]  float-${
            position === "left" ? "left" : "right"
          } ${
            isOn
              ? "translate-x-[1px] , bg-[#3A37A6] "
              : "translate-x-0 , bg-[#A0A0A0]"
          } transition-all`}
        ></div>
      </div>
    </div>
  );
}

export default ToggleButton;
