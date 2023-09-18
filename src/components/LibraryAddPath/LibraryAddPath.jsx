import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Logos } from "../../assets";
import "./LibraryAddPath.css";
import { useMutation } from "react-query";
import { getAllStep, setPath, updateInteraction } from "../../hooks/useVideo";
import { useGlobalInfo } from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
import CreateNewFolder from "../PopUp/CreateNewFolder";
import { createStep, GetSingleStep } from "../../hooks/useVideo";
import { Toast } from "primereact/toast";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const LibraryAddPath = (props) => {
  const [addStep, setAddStep] = useState(false);
  const [addOtherStep, setAddOtherStep] = useState(false);
  const inputHandler = () => {
    setAddStep(true);
  };
  const schema = yup
    .object({
      label: yup.string().required("Field Required"),
    })
    .required();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const getSTepDetails = useMutation(GetSingleStep);
  const { mutate: fetchStep } = useMutation(getAllStep);
  const { mutate: createPath } = useMutation(setPath);
  const { mutate: updateButtonInteraction } = useMutation(updateInteraction);
  const [selectedStepId, setSelectedStepId] = useState("");
  const [labelText, setLabelText] = useState("");
  const [steps, setSteps] = useState([]);
  const {
    loading,
    setLoading,
    buttonInteraction,
    setPathDataList,
    setThumbnail,
    setThumbnail2,
    counter,
    setSubfolderId,
    setScreenTitle,
    setInteraction,
    setScreenText,
    setFixedAmountValue,
    setButtonInteraction,
    setDetails,
    informationCollection,
    setMinAmount,
    setCustomAmount,
    setSelectedOption1,
    setDelay,
    setPathData,
    setTitleValue,
    setMaxAmount,
    setSuggestedAmountValues,
    setTextColor,
    setColor,
    selectedSubFolderData,
    setLoadingState,
    setAddressFormat,
    setFixedAmount,
    setCurrencySign,
    setDonationInformation,
    setInteractionId,
    setSuggestedAmount,
  } = useGlobalInfo();
  const toast = useRef(null);

  function onsuccess(param) {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: param,
    });
  }

  function onerror(param) {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: param,
    });
  }
  const { id } = useParams();
  const addPathLabel = () => {
    if (selectedStepId === "") {
      onerror("please select a step or create a new one");
    } else if (props.type === "Path") {
      const payload = {
        id: props.interactionId,
        pathText: labelText,
        pathDestination: selectedStepId,
        pathSource: "https://example.com/source-video-link",
      };
      createPath(payload, {
        onSuccess: (data) => {
          props.handleClose2();
          setLoading(false);
          getSTepDetails.mutate(id, {
            onSuccess: (data) => {
              setDetails(data);
              let updatedDonationInformation;

              updatedDonationInformation = {
                ...informationCollection,
                firstName:
                  data?.interactionId?.informationCollection?.firstName,
                lastName: data?.interactionId?.informationCollection?.lastName,
                occupation:
                  data?.interactionId?.informationCollection?.occupation,
                address: data?.interactionId?.informationCollection?.address,
                email: data?.interactionId?.informationCollection?.email,
                unit: data?.interactionId?.informationCollection?.unit,
                employment:
                  data?.interactionId?.informationCollection?.employment,
                donationConsent:
                  data?.interactionId?.informationCollection?.donationConsent,
                disclaimer:
                  data?.interactionId?.informationCollection?.disclaimer,
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
              props.handleClose2();
            },
            onError: () => {
              setLoadingState(false);
            },
          });
        },
        onError: () => {
          props.handleClose2();
          setLoading(false);
        },
      });
    } else if (props.type === "Button") {
      const payload = {
        id: props.interactionId,
        type: "Button",
        buttonText: buttonInteraction,
        buttonDestination: selectedStepId,
        buttonLabel: labelText,
        buttonSource: "https://example.com/source-video-link",
      };
      updateButtonInteraction(payload, {
        onSuccess: (data) => {
          // setButtonInteraction(data)

          getSTepDetails.mutate(id, {
            onSuccess: (data) => {
              setDetails(data);
              let updatedDonationInformation;

              updatedDonationInformation = {
                ...informationCollection,
                firstName:
                  data?.interactionId?.informationCollection?.firstName,
                lastName: data?.interactionId?.informationCollection?.lastName,
                occupation:
                  data?.interactionId?.informationCollection?.occupation,
                address: data?.interactionId?.informationCollection?.address,
                email: data?.interactionId?.informationCollection?.email,
                unit: data?.interactionId?.informationCollection?.unit,
                employment:
                  data?.interactionId?.informationCollection?.employment,
                donationConsent:
                  data?.interactionId?.informationCollection?.donationConsent,
                disclaimer:
                  data?.interactionId?.informationCollection?.disclaimer,
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
              props.handleClose2();
            },
            onError: () => {
              props.handleClose2();
              setLoadingState(false);
            },
          });

          setLoading(false);
        },
        onError: () => {
          props.handleClose2();
          setLoading(false);
        },
      });
    } else if (props.type === "Donation") {
      const payload = {
        id: props.interactionId,
        type: "Donation",
        donationText: labelText,
        donationDestination: selectedStepId,
        donationSource: "https://example.com/source-video-link",
      };
      updateButtonInteraction(payload, {
        onSuccess: (data) => {
          // setButtonInteraction(data)
          getSTepDetails.mutate(id, {
            onSuccess: (data) => {
              setDetails(data);
              let updatedDonationInformation;

              updatedDonationInformation = {
                ...informationCollection,
                firstName:
                  data?.interactionId?.informationCollection?.firstName,
                lastName: data?.interactionId?.informationCollection?.lastName,
                occupation:
                  data?.interactionId?.informationCollection?.occupation,
                address: data?.interactionId?.informationCollection?.address,
                email: data?.interactionId?.informationCollection?.email,
                unit: data?.interactionId?.informationCollection?.unit,
                employment:
                  data?.interactionId?.informationCollection?.employment,
                donationConsent:
                  data?.interactionId?.informationCollection?.donationConsent,
                disclaimer:
                  data?.interactionId?.informationCollection?.disclaimer,
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
              props.handleClose2();
            },
            onError: () => {
              props.handleClose2();
              setLoadingState(false);
            },
          });

          setLoading(false);
        },
        onError: () => {
          props.handleClose2();
          setLoading(false);
        },
      });
    }
  };
  const { mutate: stepCreate } = useMutation(createStep);
  const newStepHandler = (text) => {
    const length = steps.length;
    if (typeof text === "string") {
      const payload = {
        title: text,
        stepNumber: counter + 2,
        subFolderId: selectedSubFolderData?.id,
      };
      setLoading(true);
      stepCreate(payload, {
        onSuccess: (data) => {
          setLoading(false);
          onsuccess(data?.message);
          const id = window.location.pathname.split("/").pop();
          setLoading(true);
          fetchStep(props.subfolderId, {
            onSuccess: (data) => {
              setSteps(
                data?.data?.filter((item) => {
                  if (item._id !== id) {
                    return item;
                  }
                })
              );
              setLoading(false);
            },
            onError: () => {
              setLoading(false);
            },
          });
        },

        onError: (errorData) => {
          onerror(errorData?.response?.data?.message);
          setLoading(false);
        },
      });
      setLoading(false);
    }

    setAddOtherStep(false);
  };
  useEffect(() => {
    // debugger;
    // const {id} = window.location.pathname.split("/").pop();
    // setLoading(true);
    fetchStep(props.subfolderId, {
      onSuccess: (data) => {
        setSteps(
          data?.data?.filter((item) => {
            if (item._id !== id) {
              return item;
            }
          })
        );
        setLoading(false);
      },
      onError: () => {
        setLoading(false);
      },
    });
  }, []);

  return (
    <>
      {/* {loading ? (
        <GlobalLoaderCopy />
      ) : ( */}
      <>
        <Toast ref={toast} position="top-right"></Toast>{" "}
        {addOtherStep && (
          <CreateNewFolder
            title={`Create a new Step`}
            btnname="Add Step"
            placeholder="Name your new step..."
            handleCloseM={newStepHandler}
          />
        )}
        {!addOtherStep && (
          <div
            className="popup-box fixed backdrop-opacity-20 bg-black/30 left-0 top-0 w-full h-full z-50"
            onClick={props.handleClose2}
          >
            <form
              onClick={(e) => {
                e.stopPropagation();
              }}
              onSubmit={handleSubmit(addPathLabel)}
              className="box relative rounded-md lg:w-[500px] xxxs:w-[350px]  bg-white lg:min-h-[450px] mt-32 mx-auto "
            >
              <div className="flex justify-between px-6 lg:pt-6 xxxs:pt-3">
                <div className="title-size ">Choose a destination</div>
                <button className="btn-close" onClick={props.handleClose2}>
                  <img
                    src={Logos.CloseIcon}
                    alt="Close Button"
                    className="lg:w-[20px] xxxs:w-[15px]"
                  />
                </button>
              </div>
              <hr className="border-1 border-[#E7EEF9] mt-4 xxxs:mt-3" />
              <div className="flex flex-col w-full lg:py-4 xxxs:py-2 px-6">
                <div
                  onClick={inputHandler}
                  className="flex gap-1 mb-2 text-[#3A37A6] inner-size items-center shadow-sm rounded-md w-full h-[35px] cursor-pointer"
                >
                  <input
                    placeholder={"Enter Your Label"}
                    value={labelText}
                    {...register("label")}
                    onChange={(e) => {
                      setLabelText(e.target.value);
                    }}
                    className="bg-[#ffffff] h-[35px] shadow-md p-2 custom-play w-full "
                  />

                  {/* <input
                      type="text"
                      className="flex gap-1 mb-2 text-[#3A37A6] border-[1px] border-black inner-size items-center rounded-md w-full cursor-pointer shadow-md h-[35px] pl-2 add-another-step"
                      placeholder={"Enter Your Label"}
                      value={labelText}
                      onChange={(e) => {
                        setLabelText(e.target.value);
                      }}
                    /> */}
                </div>
                {errors.label?.message && (
                  <p className="text-red-600  mt-[3px] text-[12px]">
                    {errors.label?.message}
                  </p>
                )}
                <div className="flex flex-col lg:gap-3 xxxs:gap-1 " >
                  {/* {console.log("HELLO",selectedStepId)} */}
               <div style={{height:'calc(50vh - 100px)'}} className=" overflow-y-auto flex flex-col lg:gap-3 xxxs:gap-1">   {steps?.map((item) => {
                    return (
                      <div
                        className={`${
                          item._id === selectedStepId ? `bg-[#E7EEF9]` : ""
                        } cursor-pointer flex w-full h-[45px] shadow-sm rounded-md`}
                        key={item._id}
                        onClick={() => {
                          setSelectedStepId(item._id);
                        }}
                      >
                        <h1 className="flex gap-2 subtitle-size items-center w-[95%] overflow-hidden overflow-ellipsis">
                          <img
                            src={Logos.PathImg5}
                            alt="Path Img1"
                            className=" mx-2 p-1"
                            style={{
                              width: "calc(3rem + 1vh)",
                            }}
                          />
                          {item.title}
                        </h1>
                      </div>
                    );
                  })}</div>

                  <div>
                    <div
                      onClick={() => {
                        inputHandler();
                        setAddOtherStep(true);
                      }}
                      className="flex gap-1 text-[#3A37A6] inner-size items-center bg-[#AEBFF2]  shadow-sm rounded-md  h-[35px] cursor-pointer"
                    >
                      <button className="bg-[#E7EEF9] mx-3 rounded-md">
                        <img
                          src={Logos.AddSquare}
                          alt=""
                          className="lg:w-[25px] xxxs:w-[20px]"
                        />
                      </button>
                      <button
                        onClick={() => {
                          // AddNewStepHandler();
                        }}
                        type="text"
                        className="bg-[#AEBFF2] h-[35px] pl-2 add-another-step"
                      >
                        Add Another Step
                      </button>
                    </div>
                    <hr className="border-1 border-[#E7EEF9]   lg:mt-4 xxxs:mt-3" />
                  </div>
                  <div className="flex justify-center py-3 ">
                    <button
                      // onClick={() => {
                      //   addPathLabel();
                      // }}
                      type="submit"
                      className="bg-[#AEBFF2] text-white w-[100%]  shadow-md flex justify-center items-center gap-3 p-3 rounded-md lg:h-[40px] xxxs:h-[35px] lg:text-[18px] xxxs:text-[16px]"
                      // disabled={labelText === "" || selectedStepId === ""}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </>
      {/* )} */}
    </>
  );
};

export default LibraryAddPath;
