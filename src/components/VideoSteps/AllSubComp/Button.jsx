import React from "react";
import { useState } from "react";
import ToggleButton from "../../ToggleButton/ToggleButton";
import ToolTip from "../../ToolTip/ToolTip";
import { Logos } from "../../../assets";
import { useGlobalInfo } from "../../../contexts/GlobalContext";
import LibraryAddPath from "../../LibraryAddPath/LibraryAddPath";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { GetSingleStep } from "../../../hooks/useVideo";
import { useEffect } from "react";

function ButtonLeft({ interactionId }) {
  const [displayText, setDisplayText] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setDisplayText(!displayText);
  };
  const { mutate: handleFetchPath } = useMutation(GetSingleStep);
  const {
    setButtonInteraction,
    buttonInteraction,
    subfolderId,
    setPathData,
    pathData,
  } = useGlobalInfo();
  const { id } = useParams();
  const togglePopup2 = () => {
    setShowModal(!showModal);
    // dataFetch();
  };
  const dataFetch = () => {
    handleFetchPath(id, {
      onSuccess: (data) => {
        setPathData(data?.interactionId);
        setButtonInteraction(data?.interactionId?.buttonText);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  // useEffect(() => {
  //   dataFetch();
  // }, [setButtonInteraction]);
const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="px-3">
        {/* <div className="flex justify-between pt-3 pb-2">
                  <div className="flex pt-1">
                    <p className="subtitle-size ">
                      Capture contact details
                    </p>
                    <div className="pt-1 px-1 xxxxl:pt-2">
                      <ToolTip />
                    </div>
                  </div>
                  <div>
                    <ToggleButton
                      isActive={true}
                      width="[40px]"
                      height="[22px]"
                    />
                  </div>
                </div> */}
        <hr />

        {/* <hr />
                <div className="flex justify-between pt-3 pb-2">
                  <div className="flex pt-1">
                    <p className="subtitle-size  ">
                      Capture contact details
                    </p>
                    <div className="pt-1 px-1 xxxxl:pt-2">
                      <ToolTip />
                    </div>
                  </div>
                  <ToggleButton
                    isActive={true}
                    width="[40px]"
                    height="[22px]"
                  />
                </div> */}

        {/* <p className="subtitle-size py-3">
                  Overlay texts
                </p>
                <textarea
                  className=" outline-none placeholder-input-modal placeholder:leading-5 resize-none w-full  xxxxl:text-[18px] min-h-[80px]  text-[#A0A0A0] text-[11px] p-2 leading-3  rounded   border-[1px] border-[#EBEBEB]"
                  onClick={handleClick}
                  placeholder=" Lorem is the dummy text of the printing and type setting industry. Lorem ipsum is the industry standard dummy text ever since 1500s."
                ></textarea>
                <h1 className="xxxs:text-[10px]  xxxxl:text-[16px] lg:text-[11px] flex pb-2 border-b-[1px] items-end text-[#94A2F2]">
                  Learn how to pipe in variables (e.g. name) into your overlay
                  text.
                  <img src={Logos.Export} alt="Export" className="subicon-size" />
                </h1> */}
        <div className="py-2">
          <p className="subtitle-size">Button Text</p>
          <input
            maxLength={"25"}
            placeholder="Add Button Label"
            className="  rounded shadow-md h-[35px] w-full outline-none px-2 "
            value={buttonInteraction != null ? buttonInteraction : ""}
            onChange={(e) => {
              setButtonInteraction(e.target.value);
              setCounter(e.target.value.length);
            }}
          />
          <p className=" text-gray-400 text-[12px] pt-1 float-right  ">{counter}/25</p>
        </div>
        {pathData?.buttonDestination == null && (
          <div className="flex justify-between gap-2 mt-2">
            <h1 className="font-medium subtitle-size text-[#262626]">
              Destination
            </h1>
            <div
              onClick={togglePopup2}
              className="flex cursor-pointer text-[#3A37A6] items-centerjustify-center gap-2 rounded-sm xxxs:text-[12px] lg:text-[13px]"
            >
              <img
                src={Logos.AddSquareIcon}
                alt="Add Square Icon"
                className="subicon-size  "
              />
              <p className="subtitle-size">Add Destination</p>
            </div>
          </div>
        )}
        {pathData?.buttonLabel && (
          <div className="flex justify-between py-2 mt-2 px-2 border-l-[13px] rounded border-[#AEBFF2] shadow-md">
            <p className="subtitle-size">{pathData?.buttonLabel}</p>
            <img src={Logos.DestinationIcon} alt="icon" className="w-[40px] " />
          </div>
        )}
      </div>
      {showModal && (
        <LibraryAddPath
          interactionId={interactionId}
          subfolderId={subfolderId}
          handleClose2={togglePopup2}
          type="Button"
        />
      )}
    </>
  );
}

export default ButtonLeft;
