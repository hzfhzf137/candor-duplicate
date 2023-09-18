import React, { useEffect, useState } from "react";
import { useGlobalInfo } from "../../contexts/GlobalContext";
import { Logos } from "../../assets";
import VideoRightComp from "../VideoSteps/AllSubComp/VideoRightComp";
import { getShareSubFolder } from "../../hooks/useVideo";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
function ShareStep() {
  const {
    interaction,
    sharedVideoData,
    setSharedVideoData,
    setInteraction,
    interactionId,
    subfolderId,
    setDelay,
    setSubfolderId,
    setPathDataList,
    loading,
    setLoading,
    setStepId,
    backgroundColor,
    addressFormat,
    setAddressFormat,
    fixedAmountValue,
    setDonationInformation,
    setButtonInteraction,
    informationCollection,
    setFixedAmountValue,
    textColor,
    selectedOption1,
    setSelectedOption1,
    logo,
    setColor,
    color,
    screenText,
    minAmount,
    setMinAmount,
    maxAmount,
    setMaxAmount,
    setScreenTitle,
    screenTitle,
    setInteractionId,
    setScreenText,
    stepDetails,
    setTextColor,
    setDetails,
    pathData,
    setPathData,
    buttonInteraction,
    titleValue,
    setTitleValue,
    suggestedAmountValues,
    setSuggestedAmountValues,
  } = useGlobalInfo();
  const { id } = useParams();
  const [isVideo, setIsVideo] = useState(false);
  const [stepID, setStepID] = useState(false);
  const [url, setUrl] = useState(false);
  const getShareVideo = useMutation(getShareSubFolder);
  useEffect(() => {
    getShareVideo.mutate(id, {
      onSuccess: (data) => {
        setSharedVideoData(data);
        setDetails(data);
        let updatedDonationInformation;

        updatedDonationInformation = {
          ...informationCollection,
          firstName: data?.interactionId?.informationCollection?.firstName,
          lastName: data?.interactionId?.informationCollection?.lastName,
          occupation: data?.interactionId?.informationCollection?.occupation,
          address: data?.interactionId?.informationCollection?.address,
          email: data?.interactionId?.informationCollection?.email,
          unit: data?.interactionId?.informationCollection?.unit,
          employment: data?.interactionId?.informationCollection?.employment,
          donationConsent:
            data?.interactionId?.informationCollection?.donationConsent,
          disclaimer: data?.interactionId?.informationCollection?.disclaimer,
        };
        setMinAmount(data?.interactionId?.minAmount);
        setAddressFormat(
          data?.interactionId?.informationCollection?.addressFormat
        );
        setButtonInteraction(data?.interactionId?.buttonText);
        setSelectedOption1(data?.interactionId?.currency);
        setMaxAmount(data?.interactionId?.maxAmount);
        setStepId(data?._id);
        setDonationInformation(updatedDonationInformation);
        setSubfolderId(data?.subFolderId);
        setSuggestedAmountValues(data?.interactionId?.suggestedAmounts);
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
        setUrl(data?.highPreviewThumbnail);
      },
    });
  }, []);
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center px-[200px] ">
      <div
        className="flex flex-col border  rounded-lg px-6 py-2 flex-auto "
        style={{
          height: "calc(100vh - 160px)",
          width: "90%",
        }}
      >
        <div className="flex gap-2 items-center h-full">
          {interaction != "EndingScreen" && (
            <div className="flex w-[50%]  flex-auto">
              {!isVideo ? (
                <>
                  {" "}
                  <div
                    className={`bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center flex justify-center items-center  w-[400px] `}
                    style={{ "--image-url": `url(${url})`, height: "calc(100vh - 210px)" }}
                  >
                    <img
                      src={ Logos.VideoCircle}
                      onClick={() => {
                        setIsVideo(true);
                      }}
                      alt="Girl Img"
                      className=" cursor-pointer"
                    />
                  </div>
                </>
              ) : (
                <video
                  src={sharedVideoData?.content}
                  controls
                  autoPlay
                  style={{ height: "calc(100vh - 210px)"}}
                  className="w-[100%] h-full"
                />
              )}
            </div>
          )}

          <VideoRightComp card="desktopImg" type="public" />
        </div>
      </div>
    </div>
  );
}

export default ShareStep;
