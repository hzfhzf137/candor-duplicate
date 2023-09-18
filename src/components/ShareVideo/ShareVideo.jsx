import React, { useEffect, useRef, useState } from "react";
import { Logos } from "../../assets";
import { Link, useParams } from "react-router-dom";
import InputComp from "../../components/InputComp/InputComp";
import { useNavigate } from "react-router";
import ToolTip from "../ToolTip/ToolTip";
import ToggleButton from "../ToggleButton/ToggleButton";
import DynamicDropdown from "../DynamicDropdown/DynamicDropdown";
import { useGlobalInfo } from "../../contexts/GlobalContext";
import VideoRightComp from "../VideoSteps/AllSubComp/VideoRightComp";
import MainEndingRight from "../VideoSteps/AllSubComp/MainEndingRight";
import { getShareSubFolder } from "../../hooks/useVideo";
import { useMutation } from "react-query";
import { root_url } from "../../utils/constants";
import { Toast } from "primereact/toast";

const ShareVideo = () => {
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [searchPass, setSearchPass] = useState("");
  const [searchPassValue, setSearchPassValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchTextValue, setSearchTextValue] = useState("");
  // const [color, setColor] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [button, setButton] = useState("link");
  const [button1, setButton1] = useState("desk");
  const [icon, setIcon] = useState("letsTalk");
  const [widgeticon, setWidgetIcon] = useState(false);
  const getShareVideo = useMutation(getShareSubFolder);
  const navigate = useNavigate();
  const {
    interaction,
    sharedVideoData,
    setSharedVideoData,
    setInteraction,
    setPathDataList,
    interactionId,
    subfolderId,
    setDelay,
    setSubfolderId,

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
    setThumbnail,
    setThumbnail2,
    thumbnail,
    thumbnail2,
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
        setDonationInformation(updatedDonationInformation);
        setSubfolderId(data?.subFolderId);
        setSuggestedAmountValues(data?.interactionId?.suggestedAmounts);
        setThumbnail2(data?.highPreviewThumbnail);
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
  }, []);
  function VideoHandler() {
    navigate("/video");
  }

  function colorHandler(a) {
    setColor(a);
  }

  function toggleHandler(a) {
    setToggle(a);
  }

  function btnHandler(a) {
    setButton(a);
  }

  function iconHandler(a) {
    setIcon(a);
  }

  function widgeticonHandler(a) {
    setWidgetIcon(a);
  }

  function btnHandler1(a) {
    setButton1(a);
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  function cardHandler(c) {
    setCard(c);
  }
  const h1Ref = useRef(null);
  const toast = useRef(null);
  function copyHandler() {
    if (h1Ref.current) {
      const text = h1Ref.current.innerText;
      navigator.clipboard.writeText(text);
    }
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Copied successfully",
      life: 3000,
    });
  }
  return (
    <div>
      <Toast ref={toast} />
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center justify-start gap-3 w-full">
          <img
            src={Logos.VectorLeft}
            alt="Vector Left"
            className="cursor-pointer w-[7px]"
            onClick={() => {
              VideoHandler();
            }}
          />
          <h1 className="font-medium title-size text-[#262626]">Share Video</h1>
        </div>

        {button === "link" && (
          <div className="rounded-[8px] grid grid-cols-2">
            <button
              className="cursor-pointer lg:py-3 text-[#A0A0A0] xxxs:py-2 lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-l-md"
              style={{
                backgroundColor: button1 == "desk" ? "#94A2F2" : "#E7EEF9",
                color: button1 == "desk" ? "white" : "#A0A0A0",
              }}
              onClick={() => {
                btnHandler1("desk");
              }}
            >
              {button1 == "desk" ? (
                <img
                  src={Logos.MonitorImg}
                  alt="Monitor Img"
                  className="desktop-icon"
                />
              ) : (
                <img
                  src={Logos.MoniterImg1}
                  alt="Monitor Img dull"
                  className="desktop-icon"
                />
              )}
            </button>
            <button
              className="cursor-pointer lg:py-3 text-[#A0A0A0]  xxxs:py-2  lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-r-md"
              style={{
                backgroundColor: button1 == "mbl" ? "#94A2F2" : "#E7EEF9",
                color: button1 == "mbl" ? "white" : "#A0A0A0",
              }}
              onClick={() => {
                // btnHandler1("mbl");
              }}
            >
              {" "}
              {button1 == "mbl" ? (
                <img
                  src={Logos.SmartPhone1}
                  alt="Smart Phone Img "
                  className="mobile-icon"
                />
              ) : (
                <img
                  src={Logos.SmartPhoneImg}
                  alt="Smart Phone Img dull"
                  className="mobile-icon"
                />
              )}{" "}
            </button>
          </div>
        )}
        {button === "email" && (
          <div className="rounded-[8px] grid grid-cols-1 py-2">
            <Link to="/video">
              <img src={Logos.CloseBtn} alt="Close Btn" className="w-[28px]" />
            </Link>
          </div>
        )}
        {button === "widget" && (
          <div className="rounded-[8px] grid grid-cols-2">
            <button
              className="cursor-pointer lg:py-3 text-[#A0A0A0] xxxs:py-2 lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-l-md"
              style={{
                backgroundColor: button1 == "desk" ? "#94A2F2" : "#E7EEF9",
                color: button1 == "desk" ? "white" : "#A0A0A0",
              }}
              onClick={() => {
                btnHandler1("desk");
              }}
            >
              {button1 == "desk" ? (
                <img
                  src={Logos.MonitorImg}
                  alt="Monitor Img"
                  className="desktop-icon"
                />
              ) : (
                <img
                  src={Logos.MoniterImg1}
                  alt="Monitor Img dull"
                  className="desktop-icon"
                />
              )}
            </button>
            <button
              className="cursor-pointer lg:py-3 text-[#A0A0A0]  xxxs:py-2  lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-r-md"
              style={{
                backgroundColor: button1 == "widget" ? "#94A2F2" : "#E7EEF9",
                color: button1 == "widget" ? "white" : "#A0A0A0",
              }}
              onClick={() => {
                btnHandler1("widget");
              }}
            >
              {button1 == "mbl" ? (
                <img
                  src={Logos.SmartPhone1}
                  alt="Smart Phone Img "
                  className="mobile-icon"
                />
              ) : (
                <img
                  src={Logos.SmartPhoneImg}
                  alt="Smart Phone Img dull"
                  className="mobile-icon"
                />
              )}
            </button>
          </div>
        )}
        {button === "embed" && (
          <div className="rounded-[8px] grid grid-cols-2">
            <button
              className="cursor-pointer lg:py-3 text-[#A0A0A0] xxxs:py-2 lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-l-md"
              style={{
                backgroundColor: button1 == "desk" ? "#94A2F2" : "#E7EEF9",
                color: button1 == "desk" ? "white" : "#A0A0A0",
              }}
              onClick={() => {
                btnHandler1("desk");
              }}
            >
              {button1 == "desk" ? (
                <img
                  src={Logos.MonitorImg}
                  alt="Monitor Img"
                  className="desktop-icon"
                />
              ) : (
                <img
                  src={Logos.MoniterImg1}
                  alt="Monitor Img dull"
                  className="desktop-icon"
                />
              )}
            </button>
            <button
              className="cursor-pointer lg:py-3 text-[#A0A0A0]  xxxs:py-2  lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-r-md"
              style={{
                backgroundColor: button1 == "embed" ? "#94A2F2" : "#E7EEF9",
                color: button1 == "embed" ? "white" : "#A0A0A0",
              }}
              onClick={() => {
                btnHandler1("embed");
              }}
            >
              {button1 == "mbl" ? (
                <img
                  src={Logos.SmartPhone1}
                  alt="Smart Phone Img "
                  className="mobile-icon"
                />
              ) : (
                <img
                  src={Logos.SmartPhoneImg}
                  alt="Smart Phone Img dull"
                  className="mobile-icon"
                />
              )}{" "}
            </button>
          </div>
        )}
      </div>
      <div
        style={{ minHeight: "calc(100vh - 150px)" }}
        className="flex lg:flex-nowrap xxxs:flex-wrap justify-between gap-4 w-full "
      >
        <div className="overflow-y-auto   xxxs:w-full w-[450px] lg:w-[30%] border-[1px] flex-auto">
          <div className="flex justify-between items-center border-b-[1px] p-2">
            <h1 className="title-size text-[#262626]">Share</h1>
          </div>
          <div className="flex flex-col p-2 gap-2">
            <div className="flex flex-col gap-1">
              {/* <div className="flex justify-between items-center gap-2 pb-1">
                <h1 className="flex items-center subtitle-size gap-2 text-[#262626]">
                  Make Candor Video Private
                  <ToolTip />
                </h1>
                <div
                  className="w-12 h-6 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                  style={{
                    backgroundColor: checked ? "#E7EEF9" : "#F5F5F5",
                  }}
                  onClick={() => {
                    setChecked(!checked);
                    toggleHandler(!toggle);
                    btnHandler("link");
                    btnHandler1("desk");
                  }}
                >
                  <div
                    className="w-5 h-5 bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                    style={{
                      backgroundColor: checked ? "#3A37A6" : "#A0A0A0",
                      marginLeft: checked ? "22px" : "0px",
                    }}
                  ></div>
                </div>
              </div> */}
              {toggle === true && (
                <div className="flex flex-col gap-3  pb-3">
                  <h1 className="flex items-center  xxxxl:text-[20px] xxxs:text-[12px] lg:text-[14px] text-[#262626] pt-2 border-t-[1px]">
                    Only people with the password can view. The widget option
                    has been disabled.
                  </h1>
                  <h1 className="xxxs:text-[12px]  xxxxl:text-[20px] lg:text-[14px] text-[#262626]">
                    Password
                  </h1>
                  <div className="flex">
                    <InputComp
                      type="password"
                      size="medium"
                      placeholder="Password"
                      isButton={true}
                      className="rounded-none  input-eye rounded-l-md h-[35px] p-2 xxxs:text-[12px] lg:text-[13px]"
                      value={searchPass}
                      onChange={(e) => {
                        setSearchPass(e.target.value);
                      }}
                    />
                    <button className="bg-[#94A2F2] w-[75px]  xxxxl:text-[18px]  rounded-r-md h-[35px] text-white xxxs:text-[12px] lg:text-[13px]">
                      Save
                    </button>
                  </div>
                  {/* <div className="flex justify-between align-center gap-2">
                    <h1 className="flex items-center gap-2  xxxxl:text-[20px]  xxxs:text-[12px] lg:text-[14px] text-[#262626]">
                      Color options
                      <ToolTip />
                    </h1>
                    <div className="flex gap-2">
                      <div className="bg-[#94A2F2] h-[30px] w-[30px] rounded-md shadow-md"></div>
                      <div className="bg-[#FFFFFF] h-[30px] w-[30px] rounded-md shadow-md border-[1px]"></div>
                    </div>
                  </div> */}
                  {/* <div className="flex justify-between gap-2">
                    <h1 className="flex items-center gap-2   xxxxl:text-[20px]  xxxs:text-[12px] lg:text-[14px] text-[#262626]">
                      Custom message
                      <ToolTip />
                    </h1>
                    <ToggleButton
                      isActive={true}
                      width="[40px]"
                      height="[22px]"
                    />
                  </div> */}
                  <InputComp
                    type="text"
                    size="medium"
                    placeholder="Enter the password to view"
                    isButton={true}
                    className="bg-[#F5F5F5]   input-eye  xxxxl:text-[20px]  h-[45px] xxxs:text-[11px] lg:text-[12px] p-2"
                    value={searchPassValue}
                    onChange={(e) => {
                      setSearchPassValue(e.target.value);
                    }}
                  />
                  <div className="flex justify-between gap-2">
                    <h1 className="flex items-center gap-2  xxxxl:text-[20px]  xxxs:text-[12px] lg:text-[14px] text-[#262626]">
                      Display logo
                      <ToolTip />
                    </h1>
                    <ToggleButton
                      isActive={true}
                      width="[40px]"
                      height="[22px]"
                    />
                  </div>
                  <div className="flex justify-between lg:gap-3 xxxs:gap-1">
                    <h1 className="flex items-center  xxxxl:text-[20px]   xxxs:text-[12px] lg:text-[14px] text-[#262626]">
                      Logo
                    </h1>
                    <DynamicDropdown
                      text="[13px]"
                      mainTitle={"Candour"}
                      option1={"Candour"}
                      option2={"noption"}
                      width="[110px]"
                    />
                    <button className="bg-[#F5F5F5] px-3 flex justify-center items-center rounded-md h-[35px]">
                      <img
                        src={Logos.EditBtn}
                        alt="Edit Btn"
                        className="w-[16px]"
                      />
                    </button>
                    <button className="bg-[#F5F5F5] px-3 flex justify-center items-center rounded-md h-[35px]">
                      <img
                        src={Logos.AddSquareBlack}
                        alt="Add Square"
                        className="w-[20px]"
                      />
                    </button>
                  </div>
                  {/* <h1 className="xxxs:text-[12px]  xxxxl:text-[20px]  lg:text-[14px] flex items-center gap-3 text-[#94A2F2] pb-2 border-b-[1px]">
                    Preview password page
                    <img src={Logos.Export} alt="Export" className="w-[12px]" />
                  </h1> */}
                  {/* <div className="h-[35px] rounded-[8px] w-full grid grid-cols-3">
                    <button
                      className="lg:text-[14px]  xxxxl:text-[20px]  xxxs:text-[12px] text-[#A0A0A0] rounded-l-md"
                      style={{
                        backgroundColor:
                          button == "link" ? "#94A2F2" : "#F5F5F5",
                        color: button == "link" ? "white" : "#A0A0A0",
                      }}
                      onClick={() => {
                        btnHandler("link");
                        setChecked(false);
                        toggleHandler(false);
                      }}
                    >
                      Link
                    </button>

                    <button
                      className="lg:text-[14px] xxxs:text-[12px] text-[#A0A0A0]"
                      style={{
                        backgroundColor:
                          button == "email" ? "#94A2F2" : "#F5F5F5",
                        color: button == "email" ? "white" : "#A0A0A0",
                      }}
                      onClick={() => {
                        btnHandler("email");
                        setChecked(false);
                        toggleHandler(false);
                      }}
                    >
                      Email
                    </button>
                    <button
                      className="lg:text-[14px] xxxs:text-[12px] text-[#A0A0A0] rounded-r-md"
                      style={{
                        backgroundColor:
                          button == "embed" ? "#94A2F2" : "#F5F5F5",
                        color: button == "embed" ? "white" : "#A0A0A0",
                      }}
                      onClick={() => {
                        btnHandler("embed");
                        setChecked(false);
                        toggleHandler(false);
                      }}
                    >
                      Embed
                    </button>
                  </div> */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between gap-2">
                      <h1 className="flex items-center gap-2 xxxs:text-[12px] lg:text-[14px] text-[#262626]">
                        Share a direct link
                        <ToolTip />
                      </h1>
                    </div>
                    <h1 className="xxxs:text-[11px] lg:text-[12px] text-[#94A2F2]">
                      https://to-dot-candor-fe-393406.de.r.appspot.com/candor/share-step/
                      {id}
                    </h1>
                    <div>
                      <div className="h-[35px] relative flex w-full">
                        <h1
                          className="flex gap-3 lg:text-[13px] xxxs:text-[12px] items-center cursor-pointer"
                          onClick={() => {
                            setShowDropdown2(!showDropdown2);
                          }}
                        >
                          <button className="bg-[#E7EEF9] rounded-md">
                            <img
                              src={Logos.AddSquare}
                              alt=""
                              className="lg:w-[27px] xxxs:w-[25px]"
                            />
                          </button>
                          Add to query string
                        </h1>
                      </div>
                      <div
                        className={
                          !showDropdown2 ? "hidden" : "flex flex-col absolute  "
                        }
                      >
                        <div className="bg-[#FFFFFF]  max-w-[180px] shadow-md border-t-[1px] rounded-md cursor-auto">
                          <div className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                            <div className="text-[12px] flex gap-4 justify-between px-1 items-center cursor-pointer">
                              First Name
                              <input
                                type="checkbox"
                                className="accent-[#3A37A6] h-4 w-4"
                              />
                            </div>
                            <img src={Logos.Line} alt="Line" />
                            <div className="text-[12px] flex gap-4 justify-between px-1 items-center cursor-pointer">
                              Last Name
                              <input
                                type="checkbox"
                                className="accent-[#3A37A6] h-4 w-4"
                              />
                            </div>
                            <img src={Logos.Line} alt="Line" />
                            <div className="text-[12px] flex gap-4 justify-between px-1 items-center cursor-pointer">
                              Organization
                              <input
                                type="checkbox"
                                className="accent-[#3A37A6] h-4 w-4"
                              />
                            </div>
                            <img src={Logos.Line} alt="Line" />
                            <div className="text-[12px] flex gap-4 justify-between px-1 items-center cursor-pointer">
                              Country
                              <input
                                type="checkbox"
                                className="accent-[#3A37A6] h-4 w-4"
                              />
                            </div>
                            <img src={Logos.Line} alt="Line" />
                            <div className="text-[12px] flex gap-4 justify-between px-1 items-center cursor-pointer">
                              Street Address
                              <input
                                type="checkbox"
                                className="accent-[#3A37A6] h-4 w-4"
                              />
                            </div>
                            <img src={Logos.Line} alt="Line" />
                            <div className="text-[12px] flex gap-4 justify-between px-1 items-center cursor-pointer">
                              Unit
                              <input
                                type="checkbox"
                                className="accent-[#3A37A6] h-4 w-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start lg:gap-2 xxxs:gap-1">
                      <button className="bg-[#E7EEF9] py-1 px-2 rounded-md">
                        <img src={Logos.CopyBtn} alt="" className="icon-size" />
                      </button>
                      <button className="bg-[#E7EEF9] py-1 px-2 rounded-md">
                        <img
                          src={Logos.TwitterBtn}
                          alt=""
                          className="icon-size"
                        />
                      </button>
                      <button
                        className="bg-[#E7EEF9] py-1 px-2 rounded-md"
                        onClick={togglePopup}
                      >
                        <img
                          src={Logos.FbBtn}
                          alt=""
                          className="lg:w-[11px] xxxs:w-[12px]"
                        />
                      </button>
                      <button className="bg-[#E7EEF9] py-1 px-2 rounded-md">
                        <img
                          src={Logos.LinkedinBtn}
                          alt=""
                          className="lg:w-[17px] xxxs:w-[12px]"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {button === "link" && toggle === false && (
              <div className="flex flex-col gap-2">
                <div className="subtitle-size  text-[#A0A0A0] pb-2 border-b-[1px]">
                  Anyone with the link can view now
                </div>
                {/* <div className="flex justify-between items-center gap-2">
                  <h1 className="flex items-center gap-2 subtitle-size font-medium text-[#262626]">
                    Default color
                    <ToolTip />
                  </h1>
                  <div
                    className="w-12 h-6 rounded-xl bg-[#F5F5F5] flex items-center p-1 cursor-pointer"
                    style={{
                      backgroundColor: checked1 ? "#E7EEF9" : "#F5F5F5",
                    }}
                    onClick={() => {
                      setChecked1(!checked1);
                      colorHandler(!color);
                    }}
                  >
                    <div
                      className="w-5 h-5 bg-[#A0A0A0] rounded-xl duration-200 ease-linear"
                      style={{
                        backgroundColor: checked1 ? "#3A37A6" : "#A0A0A0",
                        marginLeft: checked1 ? "22px" : "0px",
                      }}
                    ></div>
                  </div>
                </div> */}
                {color === true && (
                  <div className="flex justify-between align-center items-center gap-2">
                    <h1 className="flex items-center  xxxxl:text-[20px]  gap-2 xxxs:text-[12px] lg:text-[14px] text-[#A0A0A0]">
                      Default color
                    </h1>
                    <div className="bg-[#94A2F2] h-[30px] w-[30px] rounded-md shadow-md"></div>
                  </div>
                )}
                {/* <div className="h-[35px] rounded-[8px] w-full grid grid-cols-4">
                  <button
                    className="lg:text-[14px] xxxs:text-[12px] text-[#A0A0A0] rounded-l-md"
                    style={{
                      backgroundColor: button == "link" ? "#94A2F2" : "#F5F5F5",
                      color: button == "link" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("link");
                    }}
                  >
                    Link
                  </button>
                  <button
                    className="lg:text-[14px] xxxs:text-[12px] text-[#A0A0A0]"
                    style={{
                      backgroundColor:
                        button == "email" ? "#94A2F2" : "#F5F5F5",
                      color: button == "email" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("email");
                    }}
                  >
                    Email
                  </button>
                  <button
                    className="lg:text-[14px] xxxs:text-[12px] text-[#A0A0A0]"
                    style={{
                      backgroundColor:
                        button == "widget" ? "#94A2F2" : "#F5F5F5",
                      color: button == "widget" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("widget");
                    }}
                  >
                    Widget
                  </button>
                  <button
                    className="lg:text-[14px] xxxs:text-[12px] text-[#A0A0A0] rounded-r-md"
                    style={{
                      backgroundColor:
                        button == "embed" ? "#94A2F2" : "#F5F5F5",
                      color: button == "embed" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("embed");
                    }}
                  >
                    Embed
                  </button>
                </div> */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between gap-2">
                    <h1 className="flex items-center font-medium gap-2 subtitle-size text-[#262626]">
                      Share a direct link
                      <ToolTip />
                    </h1>
                  </div>
                  <h1
                    ref={h1Ref}
                    className="xxxs:text-[11px]   xxxxl:text-[18px]  lg:text-[12px] text-[#94A2F2]"
                  >
                    {root_url}share-step/
                    {id}
                  </h1>
                  <div className="mt-4">
                    <button
                      className="bg-[#E7EEF9] py-1 px-2 rounded-md"
                      onClick={copyHandler}
                    >
                      <img
                        src={Logos.CopyBtn}
                        alt=""
                        className="lg:w-[17px] xxxs:w-[12px]  xxxxl:w-[30px]"
                      />
                    </button>
                  </div>
                  {/* <div>
                     <div className="h-[35px] flex w-full">
                      <h1
                        className="flex gap-3 lg:text-[13px]  xxxxl:text-[20px] xxxs:text-[12px] items-center cursor-pointer"
                        onClick={() => {
                          setShowDropdown2(!showDropdown2);
                        }}
                      >
                        <button className="bg-[#E7EEF9] rounded-md">
                          <img
                            src={Logos.AddSquare}
                            alt=""
                            className="lg:w-[27px] xxxs:w-[25px]  xxxxl:w-[40px]"
                          />
                        </button>
                        Add to query string
                      </h1>
                    </div> 
                    <div
                      className={
                        !showDropdown2 ? "hidden" : "flex flex-col absolute"
                      }
                    >
                      <div className="bg-[#FFFFFF] max-w-[180px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                        <div className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                          <div className="text-[12px]   xxxxl:text-[18px]  flex gap-4 justify-between px-1 items-center cursor-pointer">
                            First Name
                            <input
                              type="checkbox"
                              className="accent-[#3A37A6] h-4 w-4"
                            />
                          </div>
                          <img src={Logos.Line} alt="Line" />
                          <div className="text-[12px] flex xxxxl:text-[18px] gap-4 justify-between px-1 items-center cursor-pointer">
                            Last Name
                            <div className="h-4 w-4 bg-[#3A37A6] rounded-md flex lg:gap-3 xxxs:gap-0 justify-center">
                              <input
                                type="checkbox"
                                className="accent-[#3A37A6] h-4 w-4"
                              />
                            </div>
                          </div>
                          <img src={Logos.Line} alt="Line" />
                          <div className="text-[12px] flex  xxxxl:text-[18px] gap-4 justify-between px-1 items-center cursor-pointer">
                            Organization
                            <input
                              type="checkbox"
                              className="accent-[#3A37A6] h-4 w-4"
                            />
                          </div>
                          <img src={Logos.Line} alt="Line" />
                          <div className="text-[12px] flex xxxxl:text-[18px] gap-4 justify-between px-1 items-center cursor-pointer">
                            Country
                            <input
                              type="checkbox"
                              className="accent-[#3A37A6] h-4 w-4"
                            />
                          </div>
                          <img src={Logos.Line} alt="Line" />
                          <div className="text-[12px] flex gap-4 xxxxl:text-[18px] justify-between px-1 items-center cursor-pointer">
                            Street Address
                            <input
                              type="checkbox"
                              className="accent-[#3A37A6] h-4 w-4"
                            />
                          </div>
                          <img src={Logos.Line} alt="Line" />
                          <div className="text-[12px] flex gap-4 xxxxl:text-[18px] justify-between px-1 items-center cursor-pointer">
                            Unit
                            <input
                              type="checkbox"
                              className="accent-[#3A37A6] h-4 w-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start lg:gap-2 xxxs:gap-1">
                    <button className="bg-[#E7EEF9] py-1 px-2 rounded-md">
                      <img
                        src={Logos.CopyBtn}
                        alt=""
                        className="lg:w-[17px] xxxs:w-[12px]  xxxxl:w-[30px]"
                      />
                    </button>
                    <button className="bg-[#E7EEF9] py-1 px-2 rounded-md">
                      <img
                        src={Logos.TwitterBtn}
                        alt=""
                        className="lg:w-[17px] xxxs:w-[12px]"
                      />
                    </button>
                    <button
                      className="bg-[#E7EEF9] py-1 px-2 rounded-md"
                      onClick={togglePopup}
                    >
                      <img
                        src={Logos.FbBtn}
                        alt=""
                        className="lg:w-[11px] xxxs:w-[12px]"
                      />
                    </button>
                    <button className="bg-[#E7EEF9] py-1 px-2 rounded-md">
                      <img
                        src={Logos.LinkedinBtn}
                        alt=""
                        className="lg:w-[17px] xxxs:w-[12px]"
                      />
                    </button>
                  </div> */}
                </div>
              </div>
            )}
            {button === "email" && toggle === false && (
              <div className="flex flex-col gap-3 pb-2">
                <div className="subtitle-size pb-2 border-b-[1px]">
                  Anyone with the link can view now
                </div>
                <div className="bg-[#F5F5F5] h-[35px] mb-2 mt-3 rounded-[8px] w-full grid grid-cols-4">
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0] rounded-l-md"
                    style={{
                      backgroundColor: button == "link" ? "#94A2F2" : "#F5F5F5",
                      color: button == "link" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("link");
                    }}
                  >
                    Link
                  </button>
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0]"
                    style={{
                      backgroundColor:
                        button == "email" ? "#94A2F2" : "#F5F5F5",
                      color: button == "email" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("email");
                      cardHandler("email");
                    }}
                  >
                    Email
                  </button>
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0]"
                    style={{
                      backgroundColor:
                        button == "widget" ? "#94A2F2" : "#F5F5F5",
                      color: button == "widget" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("widget");
                    }}
                  >
                    Widget
                  </button>
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0] rounded-r-md"
                    style={{
                      backgroundColor:
                        button == "embed" ? "#94A2F2" : "#F5F5F5",
                      color: button == "embed" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("embed");
                    }}
                  >
                    Embed
                  </button>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <h1 className="flex items-center  gap-2 subtitle-size text-[#262626]">
                    Copy and paste this code into an email or email marketing
                    tool
                    <ToolTip />
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="min-h-[130px] p-4 leading-3 rounded border-[1px] border-[#EBEBEB] shadow-sm">
                    <p className="text-[#94A2F2] xxxxl:text-[16px] xxxxl:leading-4 text-[11px]">
                      object width=”425” height=”355” param name=”movie”
                      value=”https:// www.youtube.com/v/4_afk AWj2Ek&hl=en”param
                      param name=”wmode” value=transparent” param embed
                      src=”https:// www.youtube.com/v/4_afkAWj2Ek
                      &hl=en”application/x-shockwave” wmode=”transparent”
                      width=”425” height=”355”embed object
                    </p>
                    <div class="bg-[#E7EEF9] p-1 self-end cursor-pointer float-right xxxxl:w-[30px] w-[25px] h-[25px] rounded-md  ">
                      <img src={Logos.CopyBtn} alt="" className="" />
                    </div>
                  </div>
                </div>
                <div className="border-b-[1px] pb-1 relative">
                  <div className="h-[35px] flex w-full">
                    <h1
                      className="flex gap-3 lg:text-[13px] xxxxl:text-[20px] xxxs:text-[12px] items-center cursor-pointer"
                      onClick={() => {
                        setShowDropdown2(!showDropdown2);
                      }}
                    >
                      <button className="bg-[#E7EEF9] subtitle-size  rounded-md">
                        <img
                          src={Logos.AddSquare}
                          alt=""
                          className="icon-size"
                        />
                      </button>
                      Add to query string
                    </h1>
                  </div>
                  <div
                    className={
                      !showDropdown2 ? "hidden" : "flex flex-col absolute"
                    }
                  >
                    <div className="bg-[#FFFFFF] max-w-[180px] z-[1] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                      <div className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                        <div className="text-[12px] flex gap-4  xxxxl:text-[18px] justify-between px-1 items-center cursor-pointer">
                          First Name
                          <div className="h-4 w-4 bg-[#3A37A6] rounded-md flex lg:gap-3 xxxs:gap-0 justify-center">
                            <input
                              type="checkbox"
                              className="accent-[#3A37A6] h-4 w-4"
                            />
                          </div>
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4  xxxxl:text-[18px] justify-between px-1 items-center cursor-pointer">
                          Last Name
                          <div className="h-4 w-4 bg-[#3A37A6] rounded-md flex lg:gap-3 xxxs:gap-0 justify-center">
                            <input
                              type="checkbox"
                              className="accent-[#3A37A6] h-4 w-4"
                            />
                          </div>
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px] justify-between px-1 items-center cursor-pointer">
                          Organization
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px] justify-between px-1 items-center cursor-pointer">
                          Country
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px] justify-between px-1 items-center cursor-pointer">
                          Street Address
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px] justify-between px-1 items-center cursor-pointer">
                          Unit
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  <h1 className="flex items-center gap-2 subtitle-size text-[#262626]">
                    Display Link
                    <ToolTip />
                  </h1>
                  <ToggleButton
                    isActive={true}
                    width="[40px]"
                    height="[22px]"
                  />
                </div>
                <h1 className="flex items-center gap-2 subtitle-size text-[#262626]">
                  Custom link text
                  <ToolTip />
                </h1>
                <InputComp
                  type="text"
                  size="medium"
                  placeholder="Let’s have a conversation"
                  className="bg-[#F5F5F5] border-none h-[35px]  backdrop:  p-3  text-[#A0A0A0] font-medium"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />
                <div className="flex justify-between align-center items-center gap-2">
                  <h1 className="flex items-center gap-2 subtitle-size">
                    Link Color
                    <ToolTip />
                  </h1>
                  <div className="bg-[#94A2F2] h-[30px] w-[30px] rounded-md shadow-md"></div>
                </div>
              </div>
            )}
            {button === "widget" && toggle === false && (
              <div className="flex flex-col gap-2 pb-3">
                <div className="lg:text-[12px] xxxxl:text-[20px] xxxs:text-[11px] pb-2 border-b-[1px]">
                  Anyone with the link can view now
                </div>
                <div className="bg-[#F5F5F5] h-[35px] mb-2 mt-3 rounded-[8px] w-full grid grid-cols-4">
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0] rounded-l-md"
                    style={{
                      backgroundColor: button == "link" ? "#94A2F2" : "#F5F5F5",
                      color: button == "link" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("link");
                    }}
                  >
                    Link
                  </button>
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0]"
                    style={{
                      backgroundColor:
                        button == "email" ? "#94A2F2" : "#F5F5F5",
                      color: button == "email" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("email");
                    }}
                  >
                    Email
                  </button>
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0]"
                    style={{
                      backgroundColor:
                        button == "widget" ? "#94A2F2" : "#F5F5F5",
                      color: button == "widget" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("widget");
                    }}
                  >
                    Widget
                  </button>
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0] rounded-r-md"
                    style={{
                      backgroundColor:
                        button == "embed" ? "#94A2F2" : "#F5F5F5",
                      color: button == "embed" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("embed");
                    }}
                  >
                    Embed
                  </button>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <h1 className="flex items-center gap-2 subtitle-size text-[#262626]">
                    Add this code to your website to embed your candor video
                    <ToolTip />
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="min-h-[130px] p-4 leading-3  rounded border-[1px] border-[#EBEBEB] shadow-sm">
                    <p className="text-[#94A2F2] text-[11px] xxxxl:text-[16px] xxxl:leading-4 ">
                      object width=”425” height=”355” param name=”movie”
                      value=”https:// www.youtube.com/v/4_afk AWj2Ek&hl=en”param
                      param name=”wmode” value=transparent” param embed
                      src=”https:// www.youtube.com/v/4_afkAWj2Ek
                      &hl=en”application/x-shockwave” wmode=”transparent”
                      width=”425” height=”355”embed object
                    </p>
                    <div class="bg-[#E7EEF9] p-1 self-end cursor-pointer xxxxl:w-[35px] float-right w-[25px] h-[25px] rounded-md  ">
                      <img src={Logos.CopyBtn} alt="" />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-[35px] flex w-full">
                    <h1
                      className="flex gap-3 lg:text-[13px] xxxxl:text-[20px] xxxs:text-[12px] items-center cursor-pointer"
                      onClick={() => {
                        setShowDropdown2(!showDropdown2);
                      }}
                    >
                      <button className="bg-[#E7EEF9] subtitle-size rounded-md">
                        <img
                          src={Logos.AddSquare}
                          alt=""
                          className="lg:w-[27px] xxxs:w-[25px] xxxxl:w-[35px]"
                        />
                      </button>
                      Add To Query String
                    </h1>
                  </div>
                  <div
                    className={
                      !showDropdown2 ? "hidden" : "flex flex-col absolute z-10"
                    }
                  >
                    <div className="bg-[#FFFFFF] max-w-[180px] shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                      <div className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px] justify-between px-1 items-center cursor-pointer">
                          First Name
                          <div className="h-4 w-4 bg-[#3A37A6] rounded-md flex lg:gap-3 xxxs:gap-0 justify-center">
                            <input
                              type="checkbox"
                              className="accent-[#3A37A6] h-4 w-4"
                            />
                          </div>
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4  xxxxl:text-[18px]  justify-between px-1 items-center cursor-pointer">
                          Last Name
                          <div className="h-4 w-4 bg-[#3A37A6] rounded-md flex lg:gap-3 xxxs:gap-0 justify-center">
                            <input
                              type="checkbox"
                              className="accent-[#3A37A6] h-4 w-4"
                            />
                          </div>
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4  xxxxl:text-[18px] justify-between px-1 items-center cursor-pointer">
                          Organization
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px]  justify-between px-1 items-center cursor-pointer">
                          Country
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px]  justify-between px-1 items-center cursor-pointer">
                          Street Address
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px]  justify-between px-1 items-center cursor-pointer">
                          Unit
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-6 min-h-[80px] p-4 leading-3 rounded border-[1px] border-[#EBEBEB] shadow-sm">
                    <img
                      src={Logos.BigInfo}
                      alt="Big Info"
                      className="w-[31px]"
                    />
                    <p className="text-[#94A2F2] text-[11px] xxxxl:text-[18px] xxxxl:leading-4 ">
                      Your website must have an SSL certificate in order for
                      your Candor Video to function properly.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-1 border-b-[1px]">
                  <h1 className=" subtitle-size">Widget Style</h1>

                  <div className="flex">
                    <img
                      src={Logos.Box1}
                      alt="Box1"
                      className="w-[45px] xxxxl:w-[60px] cursor-pointer"
                      onClick={() => {
                        iconHandler("letsTalk");
                        widgeticonHandler(false);
                      }}
                    />
                    <img
                      src={Logos.Box2}
                      alt="Box2"
                      className="w-[45px] xxxxl:w-[60px] cursor-pointer"
                      onClick={() => {
                        iconHandler("letsTalk1");
                        widgeticonHandler(false);
                      }}
                    />
                    <img
                      src={Logos.Box3}
                      alt="Box3"
                      className="w-[45px] xxxxl:w-[60px] cursor-pointer"
                      onClick={() => {
                        iconHandler("letsTalk2");
                        widgeticonHandler(false);
                      }}
                    />
                    <img
                      src={Logos.Box4}
                      alt="Box4"
                      className="w-[45px] xxxxl:w-[60px] cursor-pointer"
                      onClick={() => {
                        iconHandler("letsTalk3");
                        widgeticonHandler(false);
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-2 py-2 border-b-[1px]">
                  <h1 className="flex items-center  gap-2 subtitle-size text-[#262626]">
                    Display Close Button
                    <ToolTip />
                  </h1>
                  <ToggleButton
                    isActive={true}
                    width="[40px]"
                    height="[22px]"
                  />
                </div>
                <div className="flex justify-between items-center gap-2 border-b-[1px]">
                  <h1 className="flex items-center gap-2 subtitle-size">
                    Widget Position
                    <ToolTip />
                  </h1>
                  <div className="flex items-center">
                    <img src={Logos.Box5} alt="Box5" className="w-[45px]" />
                    <img src={Logos.Box1} alt="Box1" className="w-[45px]" />
                  </div>
                </div>
                <div className="flex justify-between align-center items-center gap-2 pt-1 pb-2 border-b-[1px]">
                  <h1 className="flex items-center gap-2 subtitle-size ">
                    Widget Color
                    <ToolTip />
                  </h1>
                  <div className="bg-[#94A2F2] h-[25px] w-[25px] rounded-md shadow-md"></div>
                </div>
                <h1 className="flex items-center gap-2 subtitle-size  text-[#262626]">
                  Call-to-action text
                  <ToolTip />
                </h1>
                <InputComp
                  type="text"
                  size="medium"
                  placeholder="Let’s talk"
                  className="bg-[#F5F5F5] border-none xxxxl:text-[20px] h-[35px] p-3 xxxs:text-[12px] lg:text-[13px] text-[#A0A0A0] font-medium"
                  value={searchTextValue}
                  onChange={(e) => {
                    setSearchTextValue(e.target.value);
                  }}
                />
              </div>
            )}
            {button === "embed" && toggle === false && (
              <div className="flex flex-col gap-2 pb-3">
                <div className="lg:text-[12px] xxxxl:text-[20px] xxxs:text-[11px] pb-2 border-b-[1px]">
                  Anyone with the link can view now
                </div>
                <div className="bg-[#F5F5F5] h-[35px] mb-2 mt-3 rounded-[8px] w-full grid grid-cols-4">
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0] rounded-l-md"
                    style={{
                      backgroundColor: button == "link" ? "#94A2F2" : "#F5F5F5",
                      color: button == "link" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("link");
                    }}
                  >
                    Link
                  </button>
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0]"
                    style={{
                      backgroundColor:
                        button == "email" ? "#94A2F2" : "#F5F5F5",
                      color: button == "email" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("email");
                    }}
                  >
                    Email
                  </button>
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0]"
                    style={{
                      backgroundColor:
                        button == "widget" ? "#94A2F2" : "#F5F5F5",
                      color: button == "widget" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("widget");
                    }}
                  >
                    Widget
                  </button>
                  <button
                    className="lg:text-[13px] xxxs:text-[12px] text-[#A0A0A0] rounded-r-md"
                    style={{
                      backgroundColor:
                        button == "embed" ? "#94A2F2" : "#F5F5F5",
                      color: button == "embed" ? "white" : "#A0A0A0",
                    }}
                    onClick={() => {
                      btnHandler("embed");
                    }}
                  >
                    Embed
                  </button>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <h1 className="flex items-center subtitle-size gap-2  text-[#262626]">
                    Add this code to your website to embed your candor video
                    <ToolTip />
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="min-h-[130px] p-4 leading-3 rounded border-[1px]  flex items-end  border-[#EBEBEB] shadow-sm">
                    <p className="text-[#94A2F2] xxxxl:text-[16px] xxxl:leading-4  text-[11px] flex flex-col ">
                      object width=”425” height=”355” param name=”movie”
                      value=”https:// www.youtube.com/v/4_afk AWj2Ek&hl=en”param
                      param name=”wmode” value=transparent” param embed
                      src=”https:// www.youtube.com/v/4_afkAWj2Ek
                      &hl=en”application/x-shockwave” wmode=”transparent”
                      width=”425” height=”355”embed object
                      <div className="bg-[#E7EEF9] p-1 self-end cursor-pointer xxxxl:w-[35px] w-[25px] h-[25px] rounded-md  ">
                        <img src={Logos.CopyBtn} alt="" />
                      </div>
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-[35px] flex w-full">
                    <h1
                      className="flex gap-3 lg:text-[13px] xxxxl:text-[20px] xxxs:text-[12px] items-center cursor-pointer"
                      onClick={() => {
                        setShowDropdown2(!showDropdown2);
                      }}
                    >
                      <button className="bg-[#E7EEF9] subtitle-size rounded-md">
                        <img
                          src={Logos.AddSquare}
                          alt=""
                          className="lg:w-[27px] xxxs:w-[25px] xxxxl:w-[35px]"
                        />
                      </button>
                      Add To Query String
                    </h1>
                  </div>
                  <div
                    className={
                      !showDropdown2 ? "hidden" : "flex flex-col absolute "
                    }
                  >
                    <div className="bg-[#FFFFFF] max-w-[180px] z-10 shadow-md border-t-[1px] p-3 rounded-md cursor-auto">
                      <div className="flex flex-col lg:gap-[7px] xxxs:gap-[6px]">
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px]  justify-between px-1 items-center cursor-pointer">
                          First Name
                          <div className="h-4 w-4 bg-[#3A37A6] rounded-md flex lg:gap-3 xxxs:gap-0 justify-center">
                            <input
                              type="checkbox"
                              className="accent-[#3A37A6] h-4 w-4"
                            />
                          </div>
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px]  justify-between px-1 items-center cursor-pointer">
                          Last Name
                          <div className="h-4 w-4 bg-[#3A37A6] rounded-md flex lg:gap-3 xxxs:gap-0 justify-center">
                            <input
                              type="checkbox"
                              className="accent-[#3A37A6] h-4 w-4"
                            />
                          </div>
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px]  justify-between px-1 items-center cursor-pointer">
                          Organization
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4  xxxxl:text-[18px]  justify-between px-1 items-center cursor-pointer">
                          Country
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4  xxxxl:text-[18px]  justify-between px-1 items-center cursor-pointer">
                          Street Address
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                        <img src={Logos.Line} alt="Line" />
                        <div className="text-[12px] flex gap-4 xxxxl:text-[18px]  justify-between px-1 items-center cursor-pointer">
                          Unit
                          <input
                            type="checkbox"
                            className="accent-[#3A37A6] h-4 w-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-6 min-h-[80px] p-4 leading-3 rounded border-[1px] border-[#EBEBEB] shadow-sm">
                    <img
                      src={Logos.BigInfo}
                      alt="Big Info"
                      className="w-[31px]"
                    />
                    <p className="text-[#94A2F2]  xxxxl:text-[17px]  xxxxl:leading-4 text-[11px]">
                      Your website must have an SSL certificate in order for
                      your Candor Video to function properly.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-2 pt-2">
                  <h1 className="flex items-center gap-2 subtitle-size text-[#262626]">
                    Round All Video Corners
                    <ToolTip />
                  </h1>
                  <ToggleButton
                    isActive={true}
                    width="[40px]"
                    height="[22px]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {button === "link" && button1 === "desk" && (
          <div className=" w-full px-4  shadow-md  border-[1px]  border-[#EBEBEB] border-solid rounded-md ">
            <div className="flex w-[full] lg:flex-nowrap xxxs:flex-wrap justify-between gap-1">
              {/* <div className="flex w-[50%]">
                <img
                  src={Logos.VideoGirl1}
                  alt="Video Girl1"
                  className=" flex flex-auto justify-center"
                  style={{ height: "calc(100vh - 150px)" }}
                />
              </div> */}

              {interaction ? (
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
                  <div className="flex gap-6 items-center justify-center h-full ">
                    {interaction != "Ending Screen" &&
                      interaction != "EndingScreen" &&
                      stepDetails?.content && (
                        <div
                          style={{
                            "--image-url": `url(${thumbnail2})`,
                            height: "calc(100vh - 250px)",
                          }}
                          className={`bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center flex justify-center items-center rounded-md w-full max-w-[400px] `}
                        >
                          <img
                            src={Logos.VideoCircle}
                            alt="Girl Img"
                            className=" "
                            
                          />
                        </div>
                      )}
                    <VideoRightComp
                      pathData={pathData?.pathsList}
                      card="desktopImg"
                    />
                  </div>
                </div>
              ) : (
                interaction == "Ending Screen" ||
                (interaction == "EndingScreen" && (
                  <MainEndingRight card="desktopImg" />
                ))
              )}
            </div>
          </div>
        )}
        {/* {button === "embed" && button1 === "desk" && (
          <div
            style={{ height: "calc(100vh - 130px)" }}
            className=" w-full border-[1px] px-4  shadow-md rounded-md"
          >
            <div className="flex lg:flex-nowrap xxxs:flex-wrap justify-between gap-1">
              <div className="flex w-[50%]">
                <img
                  src={Logos.VideoGirl1}
                  alt="Video Girl1"
                  style={{ height: "calc(100vh - 140px)" }}
                />
              </div>
              <div className="flex justify-center w-[50%] flex-auto  py-2">
                <div className="   flex flex-col w-full justify-center gap-4 border-[1px] px-4  border-[#EBEBEB] border-solid rounded-md shadow-md">
                  <>
                    {" "}
                    <p className=" text-[18px] font-[400]   leading-[28px] text-[#262626] text-center">
                      How would you like to respond?
                    </p>
                    <div className="flex justify-center flex-wrap">
                      <Link to="/reply-video-preview">
                        <Button
                          title="video"
                          img={Logos.Video}
                          class="max-xs:w-[40px] w-[60px]"
                          iconWidth="max-xs:w-[20px] w-[40px]"
                        ></Button>
                      </Link>
                      <Link to="/reply-audio-preview">
                        <Button
                          title="Audio"
                          img={Logos.MicroPhoneWhite}
                          class="w-[60px]"
                          iconWidth="w-[40px]"
                        ></Button>
                      </Link>

                      <Button
                        title="Text"
                        img={Logos.WhiteEdit}
                        class="w-[60px]"
                        iconWidth="w-[40px]"
                      ></Button>
                    </div>
                    <p className=" text-[14px] font-[400] leading-[22px] text-[#A0A0A0] text-center">
                      You can practice and review before sending
                    </p>
                  </>{" "}
                </div>
              </div>
            </div>
          </div>
        )}
        {button === "widget" && button1 === "desk" && (
          <div
            style={{ height: "calc(100vh - 130px)" }}
            className="border-[1px] w-full border-solid   shadow-md rounded-md h-[88vh] "
          >
            <div className="flex flex-auto relative">
              <img
                src={Logos.TransparentImg}
                alt="Transparent Img"
                className="mx-auto"
                style={{ height: "calc(100vh - 130px)" }}
                onClick={() => {
                  widgeticonHandler(false);
                }}
              />
              {icon === "letsTalk" && (
                <img
                  src={Logos.LetsTalk}
                  alt="LetsTalk"
                  className="w-[70px] absolute bottom-14 right-20"
                  onClick={() => {
                    widgeticonHandler(!widgeticon);
                  }}
                />
              )}
              {widgeticon === true && (
                <div>
                  <img
                    src={Logos.WidgetCloseIcon}
                    alt="LetsTalk"
                    className="w-[20px] absolute bottom-[420px] right-20 cursor-pointer"
                    onClick={() => {
                      widgeticonHandler(false);
                    }}
                  />
                  <img
                    src={Logos.WidgetImg}
                    alt="LetsTalk"
                    className="w-[200px] absolute bottom-14 z-10 right-20"
                  />
                </div>
              )}
              {icon === "letsTalk1" && (
                <img
                  src={Logos.LetsTalk1}
                  alt="LetsTalk"
                  className="w-[80px] absolute bottom-14 right-20"
                  onClick={() => {
                    widgeticonHandler(!widgeticon);
                  }}
                />
              )}
              {icon === "letsTalk2" && (
                <img
                  src={Logos.LetsTalk2}
                  alt="LetsTalk"
                  className="w-[70px] absolute bottom-14 right-20"
                  onClick={() => {
                    widgeticonHandler(!widgeticon);
                  }}
                />
              )}
              {icon === "letsTalk3" && (
                <img
                  src={Logos.LetsTalk3}
                  alt="LetsTalk"
                  className="w-[80px] absolute bottom-14 right-20"
                  onClick={() => {
                    widgeticonHandler(!widgeticon);
                  }}
                />
              )}
            </div>
          </div>
        )}
        {button === "email" && button1 === "desk" && (
          <div
            style={{ height: "calc(100vh - 135px)" }}
            className="relative w-full  border-[1px] shadow-md rounded-md pb-3"
          >
            <h1 className="flex justify-center items-center lg:text-[14px] xxxs:text-[12px] text-[#A0A0A0] p-1">
              This is a preview. No data will be recorded.
            </h1>
            <div className="lg:mx-10 h-[74vh] xxxs:mx-2 m-auto flex flex-col  border-[1px] shadow-md rounded-md">
              <h1 className="xxxs:text-[14px] border-b-[1px] lg:text-[16px] text-[#262626] my-1 p-3">
                New Message
              </h1>
              <h1 className="flex justify-between items-center xxxs:text-[12px] border-b-[1px] lg:text-[14px] text-[#A0A0A0] my-1 p-3">
                To
                <div className="flex gap-2">
                  <h1>Cc</h1>
                  <h1>Bcc</h1>
                </div>
              </h1>
              <h1 className="xxxs:text-[12px] border-b-[1px] lg:text-[14px] text-[#A0A0A0] my-1 p-3">
                Subject
              </h1>
              <div className="flex  flex-col h-full gap-1 justify-center items-center py-3">
                <img
                  src={Logos.VideoGirl2}
                  alt="Mbl Girl"
                  className=" lg:px-4 xxxs:px-2"
                  style={{ height: "calc(100vh - 405px)" }}
                />
                <h1 className="flex items-center gap-2 text-[#3A37A6] lg:text-[14px] xxxs:text-[12px] pt-2 pb-4">
                  <img
                    src={Logos.UrlIcon}
                    alt="Url Icon"
                    className="w-[28px]"
                  />
                  Let,s have a conversation
                </h1>
              </div>
            </div>
          </div>
        )}
        {button1 === "mbl" && (
          <div className="w-full  border-[1px] shadow-md rounded-md">
            <div className="flex justify-center items-center">
              <img
                src={Logos.MblGirl}
                alt="Mbl Girl"
                className=" p-8"
                style={{ height: "calc(100vh - 150px)" }}
              />
            </div>
          </div>
        )}
        {button1 === "widget" && (
          <div className="w-full border-[1px] shadow-md rounded-md">
            <div className="flex justify-center items-center">
              <img
                src={Logos.TransparentMbl}
                alt="Mbl Girl"
                className="h-[85vh] p-8"
              />
            </div>
          </div>
        )}
        {button1 === "embed" && (
          <div className="w-full border-[1px] shadow-md rounded-md">
            <div className="flex justify-center items-center">
              <img
                src={Logos.MblGirl}
                alt="Mbl Girl"
                className="h-[85vh] p-8"
              />
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ShareVideo;
