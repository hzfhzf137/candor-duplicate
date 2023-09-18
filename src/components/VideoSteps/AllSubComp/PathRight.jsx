import React from "react";
import { Logos } from "../../../assets";
import { useGlobalInfo } from "../../../contexts/GlobalContext";
import { GetSingleStep } from "../../../hooks/useVideo";
import { useMutation } from "react-query";
const PathRight = ({ card }) => {
  const {
    sharedVideoData,
    setSharedVideoData,
    setInteraction,
    setSubfolderId,
    setAddressFormat,
    setDonationInformation,
    pathData,
    setButtonInteraction,
    informationCollection,
    isDisabled,
    setIsDisabled,
    setFixedAmountValue,
    setSelectedOption1,
    setColor,
    setPathDataList,
    setButtonDestination,
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
    setSuggestedAmountValues,
  } = useGlobalInfo();
  const getNextStep = useMutation(GetSingleStep);
  return (
    <>
      {card === "desktopImg" && (
        <div
          className="flex justify-center  w-[50%]  flex-auto  my-2"
          style={{
            height: "calc(100vh - 230px)",
          }}
        >
          <div className="flex flex-col gap-3 justify-center overflow-x-hidden min-h-[300px]  w-full lg:px-20 xxxs:px-4 shadow-md border-[1px] rounded-md">
            {pathDataList?.map((item) => {
              return (
                <div
                  className={`flex justify-center ${isDisabled ? '' : 'cursor-pointer'} items-center`}
                  onClick={() => {
                    if (isDisabled == false) {
                      getNextStep.mutate(item?.pathDestination, {
                        onSuccess: (data) => {
                          setSharedVideoData(data);
                          setDetails(data);
                          let updatedDonationInformation;

                          updatedDonationInformation = {
                            ...informationCollection,
                            firstName:
                              data?.interactionId?.informationCollection
                                ?.firstName,
                            lastName:
                              data?.interactionId?.informationCollection
                                ?.lastName,
                            occupation:
                              data?.interactionId?.informationCollection
                                ?.occupation,
                            address:
                              data?.interactionId?.informationCollection
                                ?.address,
                            email:
                              data?.interactionId?.informationCollection?.email,
                            unit: data?.interactionId?.informationCollection
                              ?.unit,
                            employment:
                              data?.interactionId?.informationCollection
                                ?.employment,
                            donationConsent:
                              data?.interactionId?.informationCollection
                                ?.donationConsent,
                            disclaimer:
                              data?.interactionId?.informationCollection
                                ?.disclaimer,
                          };
                          setMinAmount(data?.interactionId?.minAmount);
                          setAddressFormat(
                            data?.interactionId?.informationCollection
                              ?.addressFormat
                          );
                          setButtonInteraction(data?.interactionId?.buttonText);
                          setButtonDestination(
                            data?.interactionId?.buttonDestination
                          );
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
                    }
                  }}
                >
                  <h1 className="flex justify-start xxxs:text-[12px]   xxxxl:text-[17px] items-center  xxxs:border-none  w-full h-[45px] shadow-md rounded-l-md text-[#A0A0A0] px-4">
                    {item.pathText}
                  </h1>
                  <div className="w-[18px] h-[45px] bg-[#AEBFF2] shadow-md rounded-r-md"></div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default PathRight;
