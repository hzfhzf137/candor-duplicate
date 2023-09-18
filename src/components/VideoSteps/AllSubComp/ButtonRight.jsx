import React from "react";
import { Logos } from "../../../assets";
import { useGlobalInfo } from "../../../contexts/GlobalContext";
import { useMutation } from "react-query";
import { GetSingleStep } from "../../../hooks/useVideo";
import './style.css'
const ButtonRight = ({ activeScreen }) => {
  const {
    sharedVideoData,
    setSharedVideoData,
    setInteraction,
    setSubfolderId,
    setAddressFormat,
    setDonationInformation,
    buttonInteraction,
    pathData,
    setButtonInteraction,
    informationCollection,
    setFixedAmountValue,
    setSelectedOption1,
    setColor,
    setPathDataList,isDisabled,
    pathDataList,
    setMinAmount,
    setMaxAmount,
    setScreenTitle,
    setInteractionId,
    setScreenText,
    setTextColor,
    setDetails,
    setPathData,
    setTitleValue,
    buttonDEstination,
    setButtonDestination,
    setSuggestedAmountValues,
  } = useGlobalInfo();
  const getNextStep = useMutation(GetSingleStep);
  return (
    <>
      {activeScreen === "desktopImg" && (
        // <div className="flex  lg:flex-nowrap w-full xxxs:flex-wrap h-full justify-between gap-1">

        <div className="w-[50%] rounded flex py-4 flex-auto h-full justify-center  items-center border-[1px]  shadow-md border-[#EBEBEB] mb-4 mt-1">
          <input
            onClick={() => {
              getNextStep.mutate(buttonDEstination, {
                onSuccess: (data) => {
                  setSharedVideoData(data);
                  setDetails(data);
                  setButtonDestination(data?.interactionId?.buttonDestination);
                  let updatedDonationInformation;

                  updatedDonationInformation = {
                    ...informationCollection,
                    firstName:
                      data?.interactionId?.informationCollection?.firstName,
                    lastName:
                      data?.interactionId?.informationCollection?.lastName,
                    occupation:
                      data?.interactionId?.informationCollection?.occupation,
                    address:
                      data?.interactionId?.informationCollection?.address,
                    email: data?.interactionId?.informationCollection?.email,
                    unit: data?.interactionId?.informationCollection?.unit,
                    employment:
                      data?.interactionId?.informationCollection?.employment,
                    donationConsent:
                      data?.interactionId?.informationCollection
                        ?.donationConsent,
                    disclaimer:
                      data?.interactionId?.informationCollection?.disclaimer,
                  };
                  setMinAmount(data?.interactionId?.minAmount);
                  setAddressFormat(
                    data?.interactionId?.informationCollection?.addressFormat
                  );
                  setButtonInteraction(data?.interactionId?.buttonText);
                  setSelectedOption1(data?.interactionId?.currency);
                  setMaxAmount(data?.interactionId?.maxAmount);
                  setDonationInformation(updatedDonationInformation);
                  setSubfolderId(data?.subFolderId);
                  setSuggestedAmountValues(
                    data?.interactionId?.suggestedAmounts
                  );
                  setScreenTitle(data?.interactionId?.screenTitle);
                  setInteraction(data?.interactionId?.type);
                  setScreenText(data?.interactionId?.screenText);
                  setFixedAmountValue(data?.interactionId?.fixedAmount);
                  // setDelay(data?.interactionId?.delayInteraction);
                  if (data?.interactionId?.backgroundColor != null) {
                    setColor(data?.interactionId?.backgroundColor);
                  }
                  if (data?.interactionId?.textColor != null) {
                    setTextColor(data?.interactionId?.textColor);
                  }
                  setPathData(data?.interactionId);
                  setPathDataList(data?.interactionId?.pathsList);
                  setTitleValue(data?.title);
                  setInteractionId(data?.interactionId?.pathList);
                },
              });
            }}
            type="button"
            value={buttonInteraction}
            disabled={isDisabled}
            placeholder="Add label"
            className="px-2 bg-[#AEBFF2] text-white xxxxl:text-[24px] placeholder-style rounded min-w-[140px] max-w-[200px] text-[23px] min-h-[45px] text-ellipsis shadow-md cursor-pointer text-center overflow-hidden"
          />
           
        </div>
      )}
    </>
  );
};

export default ButtonRight;
