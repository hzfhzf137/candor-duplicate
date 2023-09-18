import React from "react";
import { Logos } from "../../../assets";
import { useGlobalInfo } from "../../../contexts/GlobalContext";

const MainEndingRight = (props) => {
  const { backgroundColor, textColor, logo, screenText, screenTitle } =
    useGlobalInfo();

  return (
    <>
      {props.card === "desktopImg" && (
        <div
          className={`flex flex-col p-2  gap-2 justify-center items-end  border-[1px]  shadow-md rounded-md flex-auto  `}
          style={{
            backgroundColor: backgroundColor.startsWith("#")
              ? backgroundColor
              : "#" + backgroundColor,
            height: "calc(100vh - 190px)",
            width: "calc(75vw - 100px)",
          }}
        >
          <div className="flex flex-col  gap-2 justify-center items-center w-full h-full">
            <input
              className={`text-[40px] placeholder:text-[40px] text-center bg-transparent`}
              disabled
              style={{
                color: textColor.startsWith("#") ? textColor : "#" + textColor,
              }}
              value={screenTitle}
              placeholder="Title here"
            />
            <input
              className={`text-[18px] text-center bg-transparent`}
              disabled
              value={screenText}
              style={{
                color: textColor.startsWith("#") ? textColor : "#" + textColor,
              }}
              placeholder="Text here"
            />
          </div>
          {logo && (
            <img
              className="mb-5 mr-5 max-sm:w-[100px] max-sm:mb-1 max-sm:mr-2 max-md:w-[120px] max-md:mb-2 max-md:mr-3 w-[200px]"
              src={Logos.Candor}
              alt=""
            />
          )}
        </div>
      )}
      {props.card === "mobileImg" && (
        <div
          className=" border-[1px] shadow-md rounded-md flex-auto"
          style={{ width: "75vw" }}
        >
          <div className="flex justify-center items-center">
            <img
              src={Logos.MblBlue}
              alt="Mbl Girl Img"
              className="w-[306px] xxxxl:w-[470px] xxxxl:pt-16 p-9"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MainEndingRight;
