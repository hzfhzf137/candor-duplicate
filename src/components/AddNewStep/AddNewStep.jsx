import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Logos } from "../../assets";
import LibraryDeletePopup from "../../components/LibraryDeletePopup/LibraryDeletePopup";
import InteractionDropdown from "../InteractionDropdown/InteractionDropdown";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ToolTip from "../ToolTip/ToolTip";
import { useQuery, useMutation } from "react-query";
import { GetSingleStep, deleteStep } from "../../hooks/useVideo";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
import { useGlobalInfo } from "../../contexts/GlobalContext";
import VideoLeftComp from "../VideoSteps/AllSubComp/VideoLeftComp";
import VideoRightComp from "../VideoSteps/AllSubComp/VideoRightComp";
import "./style.css";
import { duplicateStep } from "../../hooks/useVideo";
import { updateStep } from "../../hooks/useVideo";
import MainEndingRight from "../VideoSteps/AllSubComp/MainEndingRight";
import { Toast } from "primereact/toast";
import useStore from "../../store/video";
// import InteractionDropdown from "../InteractionDropdown/InteractionDropdown";

const MainEnding = () => {
  const {
    interaction,
    setSubfolderId,
    setInteraction,
    loading,
    setStepId,
    backgroundColor,
    CurrencySign,
    setCurrencySign,
    counter,
    setCounter,
    addressFormat,
    setLoading,
    setAddressFormat,
    fixedAmountValue,
    setDonationInformation,
    informationCollection,
    amount,
    setAmount,
    checkStatus,
    setFixedAmountValue,
    textColor,setButtonInteraction,
    selectedOption1,
    setSelectedOption1,
    logo,
    setColor,
    screenText,
    minAmount,
    setMinAmount,
    maxAmount,
    setMaxAmount,
    setThumbnail,
    setThumbnail2,isDisabled, setIsDisabled,
    thumbnail,
    thumbnail2,
    setScreenTitle,
    screenTitle,
    setInteractionId,
    setFixedAmount,
    setScreenText,
    stepDetails,
    setTextColor,
    setDetails,
    pathData,
    setPathData,
    setCustomAmount,
    setSuggestedAmount,
    buttonInteraction,
    titleValue,
    setPathDataList,
    setTitleValue,
    suggestedAmountValues,
    setSuggestedAmountValues,
    delay,
    setDelay,
  } = useGlobalInfo();
  const toast = useRef(null);

  function onsuccess(param) {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: param,
    });
  }

  function onError(param) {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: param,
    });
  }
  const [stripePreview, setStripePreview] = useState(true);
useEffect(() => {
    if (location.pathname.includes("/AddNewStep")) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [location.pathname]);
  useEffect(() => {
    if (checkStatus?.data?.isConnected == false && interaction == "Donation") {
      setStripePreview(false);
    }
    if (checkStatus?.data?.isConnected == true) {
      setStripePreview(true);
    }
    if (checkStatus?.data?.isConnected == false && interaction != "Donation") {
      setStripePreview(true);
    }
  }, [checkStatus, interaction]);
  const [loadingState, setLoadingState] = useState(false);
  const interactionFirstRender = useRef(false);
  useEffect(() => {
    if (interactionFirstRender.current) {
      const interaction2 = {
        type: interaction,
      };
      updateTitle.mutate(
        { id: id, interaction: interaction2 },
        {
          onSuccess: () => {
            fetchData();
          },
        }
      );
    } else {
      interactionFirstRender.current = true;
    }
  }, [interaction]);
  const isFirstRender = useRef(true);
  const inputRef = useRef(null);
  const [editableTitle, setEditableTitle] = useState(true);
  const setStepIdUrl = useStore((state) => state.setStepIdUrl);
  const [card, setCard] = useState("desktopImg");

  const [isOpen1, setIsOpen1] = useState(false);
  const deleteStepHandler = useMutation(deleteStep);
  const dupliacteStepHandler = useMutation(duplicateStep);
  const updateTitle = useMutation(updateStep);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setStepIdUrl(id);
  }, []);
  function saveHandler() {
    setLoading(true);
    if (interaction == "Ending Screen" || interaction == "EndingScreen") {
      const payload = {
        type: "EndingScreen",
        screenTitle: screenTitle,
        screenText: screenText,
        backgroundColor: backgroundColor,
        delayInteraction: +delay,
        textColor: textColor,
        logo: logo,
      };

      updateTitle.mutate(
        { id: id, interaction: payload },
        {
          onSuccess: () => {
            VideoHandler();
          },
        }
      );
    } else if (interaction == "Button") {
      const payload = {
        type: "Button",
        delayInteraction: +delay,
        buttonText: buttonInteraction,
      };
      updateTitle.mutate(
        { id: id, interaction: payload },
        {
          onSuccess: () => {
            VideoHandler();
          },
        }
      );
    } else if (interaction == "Path") {
      const payload = {
        type: "Path",
        delayInteraction: +delay,
      };
      updateTitle.mutate(
        { id: id, interaction: payload },
        {
          onSuccess: () => {
            VideoHandler();
          },
        }
      );
    } else if (interaction == "Donation") {
      const payload = {
        type: "Donation",
        delayInteraction: +delay,
        currency: selectedOption1,
        // maxAmount: maxAmount,
        // minAmount: minAmount,
        informationCollection,
      };
      updateTitle.mutate(
        { id: id, interaction: payload },
        {
          onSuccess: () => {
            VideoHandler();
          },
        }
      );
    }
    setLoading(false);
  }

  const togglePopup1 = (props) => {
    if (props == true) {
      setLoading(true);
      deleteStepHandler.mutate(id, {
        onSuccess: (data) => {
          VideoHandler();
        },
      });
      setLoading(false);
    }
    setIsOpen1(!isOpen1);
  };

  function VideoHandler() {
    navigate("/video");
  }

  function cardHandler(a) {
    setCard(a);
  }

  const popupData = [
    {
      heading: "Are you sure you want to delete this step?",
    },
  ];
  const getSTepDetails = useMutation(GetSingleStep);
  function fetchData() {
    setLoadingState(true);

    getSTepDetails.mutate(id, {
      onSuccess: (data) => {
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
        setFixedAmount(data?.interactionId?.fixedAmount ? true : false);
        setCustomAmount(
          data?.interactionId?.maxAmount || data?.interactionId?.minAmount
            ? true
            : false
        );
        setSelectedOption1(data?.interactionId?.currency);
        if (data?.interactionId?.currency == "USD") {
          setCurrencySign("$");
        } else if (data?.interactionId?.currency == "CAD") {
          setCurrencySign("C$");
        } else if (data?.interactionId?.currency == "GBP") {
          setCurrencySign("£");
        } else if (data?.interactionId?.currency == "AUD") {
          setCurrencySign("A$");
        }
        setMaxAmount(data?.interactionId?.maxAmount);
        setDonationInformation(updatedDonationInformation);
        setThumbnail(data?.lowPreviewThumbnail);
        setThumbnail2(data?.highPreviewThumbnail);
        setSubfolderId(data?.subFolderId);
        setSuggestedAmountValues(data?.interactionId?.suggestedAmounts);
        setScreenTitle(data?.interactionId?.screenTitle);
        setInteraction(data?.interactionId?.type);
        setScreenText(data?.interactionId?.screenText);
        setFixedAmountValue(data?.interactionId?.fixedAmount);
        setButtonInteraction(data?.interactionId?.buttonText);
        setDelay(data?.interactionId?.delayInteraction);
        if (data?.interactionId?.backgroundColor != null) {
          setColor(data?.interactionId?.backgroundColor);
        }
        if (data?.interactionId?.textColor != null) {
          setTextColor(data?.interactionId?.textColor);
        }
        setSuggestedAmount(
          data?.interactionId?.suggestedAmounts.length != 0 ? true : false
        );
        setPathData(data?.interactionId);
        setTitleValue(data?.title);
        setInteractionId(data?.interactionId?.pathList);
        setPathDataList(data?.interactionId?.pathList);
        setLoadingState(false);
      },
      onError: () => {
        setLoadingState(false);
      },
    });
  }
  useEffect(() => {
    setLoading(true);

    fetchData();
    setLoading(false);
    setStepId(id);
  }, []);

  const [videoError, setVideoError] = useState(false);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, [interaction]);
  return (
    <>
      {loadingState ? (
        <GlobalLoaderCopy loading={"loading"} />
      ) : (
        <div>
          {
            <div className="flex items-center justify-between pb-2">
              <Toast ref={toast} position="top-right"></Toast>
              {
                <div className="flex items-center justify-start gap-3 w-full">
                  <img
                    src={Logos.VectorLeft}
                    alt="Vector Left"
                    className="cursor-pointer w-[7px]"
                    onClick={() => {
                      VideoHandler();
                    }}
                  />
                  <h1 className="font-medium title-size text-[#262626]">
                    Add Video
                  </h1>
                </div>
              }
              <div className="flex w-full justify-end ">
                <button
                  onClick={() => {
                    cardHandler("desktopImg");
                  }}
                  className="   cursor-pointer lg:py-3 xxxs:py-2  lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-l-md"
                  style={{
                    background: card == "desktopImg" ? " #94A2F2" : "#E7EEF9",
                  }}
                >
                  <img
                    src={
                      card == "desktopImg"
                        ? Logos.MonitorImg
                        : Logos.MonitorGrey
                    }
                    alt="Monitor Img"
                    className="desktop-icon cursor-pointer"
                  />
                </button>
                <button
                  onClick={() => {
                    // cardHandler("mobileImg");
                  }}
                  style={{
                    background: card == "mobileImg" ? " #94A2F2" : "#E7EEF9",
                  }}
                  className="bg-[#E7EEF9] lg:py-3 cursor-pointer xxxs:py-2 lg:px-5 xxxs:px-4 flex justify-center items-center rounded-none rounded-r-md"
                >
                  <img
                    src={
                      card == "mobileImg"
                        ? Logos.MobileWhite
                        : Logos.SmartPhoneImg
                    }
                    alt="Smart Phone Img"
                    className="mobile-icon"
                  />
                </button>
              </div>
            </div>
          }
          <div
            style={{ height: "calc(100vh - 170px)" }}
            className="flex lg:flex-nowrap xxxs:flex-wrap justify-between gap-3 w-full"
          >
            <div
              className="overflow-y-auto overflow-x-hidden lg:w-1/5 xxxxl:w-1/5  flex-auto border-[1px] shadow-md rounded-md"
              style={{ width: "calc(300px + 1vw)" }}
            >
              <div className="flex justify-between bg-white items-center border-b-[1px] p-2 sticky top-0 z-[11]">
                <div className="flex items-center bg-white gap-3 ">
                  <div className="h-5 w-5 bg-[#3A37A6] text-white rounded-full flex justify-center items-center text-[10px]">
                    {localStorage.getItem("stepNumber")}
                  </div>
                  <input
                    value={titleValue}
                    ref={inputRef}
                    disabled={editableTitle}
                    className=" eidtedTitle title-size edit bg-white outline-none text-[#3A37A6] w-36"
                    onChange={(e) => {
                      setTitleValue(e.target.value);
                    }}
                    onBlur={(e) => {
                      const payload = { title: e.target.value };
                      updateTitle.mutate(
                        { id: id, payload: payload },
                        {
                          onSuccess: (data) => {
                            if (data.error == false) {
                              fetchData();
                              onsuccess("Title updated successfully");
                            } else {
                              onError(data?.message);
                            }
                          },
                          onError: (data) => {
                            setTitleValue(stepDetails?.title);
                            onError(data?.message);
                          },
                        }
                      );
                    }}
                  />
                </div>
                <div className="flex items-center bg-white gap-2">
                  <img
                    src={Logos.EditIcon2}
                    alt="Copy Icon"
                    className="w-[18px] xxxl:w-[27px]"
                    onClick={() => {
                      setEditableTitle(false);
                      inputRef.current.focus();
                    }}
                  />

                  <img
                    src={Logos.CopyBtn}
                    onClick={() => {
                      setLoading(true);
                      dupliacteStepHandler.mutate(id, {
                        onSuccess: (data) => {
                          navigate("/video");
                        },
                      });
                      setLoading(false);
                    }}
                    alt="Copy Icon"
                    className="w-[18px]  xxxl:w-[27px] cursor-pointer"
                  />
                  <img
                    src={Logos.TrashIcon1}
                    alt="Trash Icon"
                    className="w-[18px] cursor-pointer  xxxl:w-[27px]"
                    onClick={togglePopup1}
                  />

                  {popupData.map((item) => {
                    return (
                      isOpen1 && (
                        <LibraryDeletePopup
                          title={item.heading}
                          handleClose1={togglePopup1}
                        />
                      )
                    );
                  })}
                </div>
              </div>
              <div
                className="flex flex-col justify-between "
                style={{ minHeight: "calc(100vh - 230px)" }}
              >
                {" "}
                <div className="flex flex-col  ">
                  <h1 className="font-medium subtitle-size text-[#262626] my-1 p-2">
                    Interaction Type
                  </h1>
                  <InteractionDropdown />
                  {videoError && (
                    <p className="  animation-fadeOut ml-3  ">
                      you have not added video..
                    </p>
                  )}
                  <div className="flex justify-between gap-2 pb-2 mt-2 px-2 border-b-[1px]">
                    <h1 className="flex font-medium    items-center gap-2 subtitle-size text-[#262626]">
                      Delay Interaction
                      <ToolTip />
                    </h1>
                    <input
                      type="text"
                      placeholder="2"
                      value={delay}
                      onChange={(e) => {
                        setDelay(e.target.value);
                      }}
                      onBlur={(e) => {
                        const payload = {
                          type: interaction,
                          delayInteraction: +e.target.value,
                        };
                        updateTitle.mutate(
                          { id: id, interaction: payload },
                          {
                            onSuccess: (data) => {
                              setDelay(data?.interactionId?.delayInteraction);
                            },
                          }
                        );
                      }}
                      className="bg-white shadow-md text-[#A0A0A0] text-center outline-none placeholder-input-modal px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px] text-[13px]"
                      name=""
                      id=""
                    />
                  </div>
                  {interaction !== "Ending Screen" &&
                    interaction !== "EndingScreen" && (
                      <>
                        <div className="w-full flex flex-col shadow-md rounded-lg p-2 justify-center items-center gap-3 h-[150px] ">
                          {" "}
                          <Link to="/AddVideo">
                            <img
                              src={Logos.AddSquare}
                              alt=""
                              className="cursor-pointer"
                            />
                          </Link>
                          {stepDetails.content == null ? (
                            <h1 className="subtitle-size">Add a video</h1>
                          ) : (
                            <h1 className="subtitle-size">Update video</h1>
                          )}
                        </div>
                      </>
                    )}
                  <div></div>

                  {interaction ? (
                    <VideoLeftComp
                      pathData={pathData}
                      interactionId={pathData?._id}
                    />
                  ) : (
                    <div className="flex flex-col p-2  gap-2">
                      {/*
              <div className="flex justify-between gap-2 pb-2 border-b-[1px] p-2">
                <h1 className="flex font-medium items-center gap-2 subtitle-size text-[#262626]">
                  Capture contact details
                  <ToolTip />
                </h1>

                <ToggleButton isActive={true} width="[40px]" height="[22px]" />
              </div>
              <div className="flex flex-col my-3 p-2 gap-4">
                <label
                  htmlFor="overlay"
                  className=" font-[500] subtitle-size leading-[22px] text-[#262626]"
                >
                  Overlay texts
                </label>
                <textarea
                  name="overlay"
                  id="overlay"
                  cols="20"
                  rows="6"
                  className="shadow-md xxxxl:text-[20px] resize-none p-3 outline-none text-[12px]"
                ></textarea>
              </div>

              <h1 className="xxxs:text-[10px] xxxxl:text-[18px] lg:text-[11px] p-2  pb-2 border-b-[1px] flex items-end text-[#94A2F2]">
                <span>
                  Learn how to pipe in variables (e.g. name) into your overlay
                  text.
                </span>{" "}
                <span>
                  {" "}
                  <img src={Logos.Export} alt="Export" className="" style={{width: "calc(0.8rem + 0.3vw)"}} />
                </span>
              </h1> */}
                    </div>
                  )}
                </div>
                <div className="flex justify-center py-3 px-3 my-10">
                  <button
                    className="bg-[#AEBFF2] w-full xxxxl:text-[20px] text-white   shadow-md flex justify-center items-center gap-3 p-3 rounded-md lg:h-[45px] xxxs:h-[38px] lg:text-[18px] xxxs:text-[16px]"
                    onClick={() => {
                      saveHandler();
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {card === "desktopImg" &&
              (interaction && stepDetails.content != null && stripePreview ? (
                <div
                  className="flex flex-col border rounded-lg px-6 py-2 flex-auto "
                  style={{
                    height: "calc(100vh - 160px)",
                    width: "calc(75vw - 100px)",
                  }}
                >
                  {interaction != "Ending Screen" &&
                    interaction != "EndingScreen" && (
                      <h1 className="flex justify-center items-center  xxxxl:text-[17px] xxxs:text-[12px] text-[#A0A0A0] p-2">
                        This is a preview. No data will be recorded.
                      </h1>
                    )}
                  <div className="flex gap-6 justify-center items-center ">
                    {interaction != "Ending Screen" &&
                      interaction != "EndingScreen" && (
                        //  <div className="flex w-[50%] rounded-md flex-auto">
                        //   <img
                        //     src={thumbnail2}
                        //     alt="Girl Img"
                        //     className="px-5 rounded-md"
                        //     style={{ height: "calc(100vh - 210px)" }}
                        //   />
                        // </div>
                        <div
                          className="flex w-full max-w-[400px] bg-no-repeat bg-cover bg-center gap-4 justify-center bg-[image:var(--image-url)]  items-center rounded-md "
                          style={{
                            "--image-url": `url(${thumbnail2})`,
                            height: "calc(100vh - 250px)",
                          }}
                        >
                          <img src={Logos.VideoPlayButton} alt="Play Button" />
                        </div>
                      )}
                    <VideoRightComp
                      pathData={pathData?.pathsList}
                      card={card}
                    />{" "}
                  </div>{" "}
                </div>
              ) : interaction != "Ending Screen" &&
                interaction != "EndingScreen" ? (
                <div
                  className="flex  p-2  gap-2 justify-center items-center  border-[1px] shadow-md rounded-md  bg-[#ffffff] flex-auto"
                  style={{
                    width: "calc(75vw - 100px)",
                    height: "calc(100vh - 180px)",
                  }}
                >
                  {stepDetails.content == null ? (
                    <h1 className="text-[24px] text-[#3A37A6] font-[500]">
                      Add video to start
                    </h1>
                  ) : (
                    <h1 className="text-[24px] text-[#3A37A6] font-[500]">
                      Connect stripe to start
                    </h1>
                  )}
                </div>
              ) : (
                (interaction == "Ending Screen" ||
                  interaction == "EndingScreen") && (
                  <MainEndingRight card={card} />
                )
              ))}
            {/* {card === "mobileImg" && (
          <div
            className=" border-[1px] shadow-md rounded-md flex-auto"
            style={{width:'calc(75vw - 125px)'}}
          >
            <div className="flex justify-center items-center">
              <img
                src={Logos.MblVideo}
                style={{height:'calc(100vh - 170px)'}}
                alt="Mbl Girl Img"
                className="w-[306px] xxxxl:w-[470px] xxxxl:p-12 p-9"
              />
            </div>
          </div>
        )} */}
          </div>
        </div>
      )}
    </>
  );
};

export default MainEnding;
