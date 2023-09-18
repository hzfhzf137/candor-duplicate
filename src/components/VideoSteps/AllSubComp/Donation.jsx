import React, { useEffect, useRef, useState } from "react";
// import ToolTip from '../../ToolTip/ToolTip'
import ToggleButton from "../../ToggleButton/ToggleButton";
import { Logos } from "../../../assets";
import DynamicDropdown from "../../DynamicDropdown/DynamicDropdown";
import ToolTip from "../../ToolTip/ToolTip";
import { useGlobalInfo } from "../../../contexts/GlobalContext";
import CreateNewFolder from "../../PopUp/CreateNewFolder";
import { updateStep } from "../../../hooks/useVideo";
import { useMutation } from "react-query";
import { number, string } from "yup";
import { StripeConnect } from "../../../hooks/useVideo";
import { addSuggestedAmount } from "../../../hooks/useVideo";
import { getSuggestedAmount } from "../../../hooks/useVideo";
import { deleteSuggestedAmount } from "../../../hooks/useVideo";
import { checkStripeStatus } from "../../../hooks/useVideo";
import { updateSuggestedAmount } from "../../../hooks/useVideo";
import { GetSingleStep } from "../../../hooks/useVideo";
import { useParams } from "react-router-dom";
import LibraryAddPath from "../../LibraryAddPath/LibraryAddPath";
import GlobalLoaderCopy from "../../GloabalLoaderCopy/GloabalLoaderCopy";

const DonationLeft = ({ interactionId, pathsList }) => {
  const [isOpen2, setIsOpen2] = useState(false);
  const updateTitle = useMutation(updateStep);
  // const [suggestedPopup, setSuggestedPopup] = useState(false);
  const fetchSuggestedAmount = useMutation(getSuggestedAmount);
  const StripeConnectHandler = useMutation(StripeConnect);
  const stripeStatus = useMutation(checkStripeStatus);
  const [showModal, setShowModal] = useState(false);
  const updateAmount = useMutation(updateSuggestedAmount);
  const {
    fixedAmount,
    setFixedAmount,
    suggestedAmount,
    setSuggestedAmount,
    Disclaimer,
    stepDetails,
    minAmount,
    subfolderId,
    checkStatus,
    setStripeStatus,
    addressFormat,
    setAddressFormat,
    setMinAmount,
    selectedOption1,
    setSelectedOption1,
    maxAmount,pathData,
    setMaxAmount,
    stepId,
    customAmount,
    setCustomAmount,
    setDisclaimer,
    CurrencySign,
    setCurrencySign,
    setDonationInformation,
    informationCollection,
    fixedAmountValue,
    setFixedAmountValue,
    suggestedAmountValues,
    setSuggestedAmountValues,
    setButtonInteraction,
    setPathData,
    loading,
    setLoading,
  } = useGlobalInfo();
  function updateAmountHandler({ id, payload }) {
    updateAmount.mutate(
      {
        interactionId: stepDetails.interactionId._id,
        amountId: id,
        payload: payload,
      },
      {
        onSuccess: () => {
          fetchAmountHandler();
        },
      }
    );
  }
  const { id } = useParams();
  const { mutate: handleFetchPath } = useMutation(GetSingleStep);
  const dataFetch = () => {
    setLoading(true);
    handleFetchPath(id, {
      onSuccess: (data) => {
        setPathData(data?.interactionId);
        setLoading(false);
      },
      onError: (error) => {
        console.log(error);
        setLoading(false);
      },
    });
  };
  const togglePopup2 = () => {
    setShowModal(!showModal);
    // setLoading(true);
    // dataFetch();
  };
  const patchSuggestedAmount = useMutation(addSuggestedAmount);

  const currencyFirstRender = useRef(false);
  const interactionFirstRender = useRef(false);
  function fetchAmountHandler() {
    fetchSuggestedAmount.mutate(stepDetails?.interactionId?._id, {
      onSuccess: (data) => {
        setSuggestedAmountValues(data?.data);
      },
    });
  }
  const deleteAmount = useMutation(deleteSuggestedAmount);
  function deleteSuggestedAmountHandler(id) {
    deleteAmount.mutate(
      { IntractionId: stepDetails.interactionId._id, Id: id },
      {
        onSuccess: () => {
          fetchAmountHandler();
        },
      }
    );
  }
  const [isFirstRender, setFirstRender] = useState(false);
  const [isFirstRender2, setFirstRender2] = useState(false);
  useEffect(() => {
    if (isFirstRender == true) {
      if (suggestedAmount == false && customAmount == false) {
        setSuggestedAmount(true);
      }
    } else {
      setFirstRender(true);
    }
  }, [customAmount]);
  useEffect(() => {
    if (isFirstRender2 == true) {
      if (suggestedAmount == false && customAmount == false) {
        setCustomAmount(true);
      }
    } else {
      setFirstRender2(true);
    }
  }, [suggestedAmount]);
  useEffect(() => {
    fetchAmountHandler();
    stripeStatus.mutate([], {
      onSuccess: (data) => {
        setStripeStatus(data.data);
      },
    });
  }, []);
  function toggleHanddler(value, key) {
    let updatedDonationInformation;
    if (key == "firstName") {
      updatedDonationInformation = {
        ...informationCollection,
        firstName: value,
      };
    } else if (key == "lastName") {
      updatedDonationInformation = {
        ...informationCollection,
        lastName: value,
      };
    } else if (key == "Occupation") {
      updatedDonationInformation = {
        ...informationCollection,
        occupation: value,
      };
    } else if (key == "Address") {
      updatedDonationInformation = { ...informationCollection, address: value };
    } else if (key == "Email") {
      updatedDonationInformation = { ...informationCollection, email: value };
    } else if (key == "unit") {
      updatedDonationInformation = { ...informationCollection, unit: value };
    } else if (key == "Employer") {
      updatedDonationInformation = {
        ...informationCollection,
        employment: value,
      };
    }
    setDonationInformation(updatedDonationInformation);
  }
  useEffect(() => {
    if (currencyFirstRender.current) {
      const payload = {
        type: "Donation",
        currency: selectedOption1,
      };
      updateDonation(payload);
      if (selectedOption1 == "USD") {
        setCurrencySign("$");
      } else if (selectedOption1 == "CAD") {
        setCurrencySign("C$");
      } else if (selectedOption1 == "GBP") {
        setCurrencySign("£");
      } else if (selectedOption1 == "AUD") {
        setCurrencySign("A$");
      }
    } else {
      currencyFirstRender.current = true;
    }
  }, [selectedOption1]);
  useEffect(() => {
    if (interactionFirstRender.current) {
      const payload = {
        type: "Donation",
        informationCollection: { addressFormat: addressFormat },
      };
      updateDonation(payload);
    } else {
      interactionFirstRender.current = true;
    }
  }, [addressFormat]);
  const handleDropdownClick1 = () => {
    setIsOpen2(!isOpen2);
  };

  function SuggestedAmountHandler(amount) {
    if (typeof amount == "string") {
      const payload = { amount: +amount };
      patchSuggestedAmount.mutate(
        { id: stepDetails.interactionId._id, payload: payload },
        {
          onSuccess: () => {
            fetchAmountHandler();
          },
        }
      );
    }
    // setSuggestedPopup(!suggestedPopup);
  }

  const handleOptionClick2 = (option) => {
    setSelectedOption1(option);
    setIsOpen2(false);
  };

  function updateDonation(payload) {
    updateTitle.mutate(
      { id: stepId, interaction: payload },
      {
        onSuccess: () => {
          //   VideoHandler();
        },
      }
    );
  }
  const firstRender = useRef(false);
  useEffect(() => {
    if (firstRender.current == true) {
      const payload = {
        type: "Donation",
        informationCollection,
      };
      updateDonation(payload);
    } else {
      firstRender.current = true;
    }
  }, [informationCollection]);

  const toggleSwitch = () => {
    setSuggestedAmount(!suggestedAmount);
  };
  const toggleSwitch2 = () => {
    setCustomAmount(!customAmount);
  };
  return (
    <>
      {/* {suggestedPopup && (
        <CreateNewFolder
          title="Add suggested amount"
          btnname="Add"
          type="number"
          placeholder="Add amount"
          handleCloseM={SuggestedAmountHandler}
        />
      )} */}
      {/* {loading ? (
        <GlobalLoaderCopy />
      ) : ( */}
        <div className="px-3">
          {/* <div className="flex justify-between py-2">
                <div className="flex pt-1">
                  <p className="subtitle-size">Fit Video</p>
                  <div className="py-1 px-1  xxxxl:pt-2">
                    <ToolTip />
                  </div>
                </div>
                <ToggleButton isActive={true} width="[40px]" height="[22px]" />
              </div> */}
          {/* <hr /> */}
          {/* <p className="subtitle-size  py-3 ">
                Overlay texts
              </p>
              <textarea
                placeholder="Lorem is the dummy text of the printing and type settingindustry. Lorem ipsum is the industry standard dummy text ever since 1500s."
                className=" min-h-[80px] p-2 resize-none placeholder-input-modal placeholder:leading-5 xxxxl:text-[20px] text-[11px] outline-none w-full leading-3  rounded   border-[1px] border-[#EBEBEB]"
              ></textarea>
              <h1 className="xxxs:text-[10px] relative xxxxl:text-[16px] lg:text-[11px] flex pb-2 border-b-[1px] items-end text-[#94A2F2]">
                Learn how to pipe in variables (e.g. name) into your overlay
                text.
                <img
                  src={Logos.Export}
                  alt="Export"
                  className="w-[12px] absolute left-[70px] bottom-[10px] xxxxl:left-24"
                />
              </h1> */}
          {/* <div className="flex justify-between pb-1">
                <div className="flex items-center pt-1">
                  <p className="subtitle-size pr-1">
                    Delay Interaction
                  </p>
                  <ToolTip />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="2"
                    className="bg-[#F5F5F5] placeholder-input-modal text-[#A0A0A0] text-center outline-none px-2 w-[44px] flex justify-center items-center gap-3 rounded h-[25px] text-[13px]"
                    name=""
                    id=""
                  />
                </div>
              </div> */}
          {/* <hr /> */}
          {/* <div className="flex justify-between items-center pt-3 pb-2">
                <div className="flex gap-1 items-center pt-1">
                  <p className="subtitle-size ">
                    Capture contact details
                  </p>
                  <ToolTip />
                </div>
                <div className="mr-1">
                  <ToggleButton
                    isActive={true}
                    width="[40px]"
                    height="[22px]"
                  />
                </div>
              </div> */}
          <div className="flex justify-between pt-2 pb-1">
            <div className="flex items-center pt-1">
              <p className="subtitle-size pr-1 ">Currency</p>
              <ToolTip />
            </div>
            <DynamicDropdown
              mainTitle={"USD"}
              option1={"USD"}
              option2={"CAD"}
              option3={"GBP"}
              option4={"AUD"}
              width="[70px]"
              text="[12px]"
              selectedOption1={selectedOption1}
              setSelectedOption1={setSelectedOption1}
            />
          </div>
          <hr />
          <div className="flex justify-between pt-3 pb-2">
            <div className="flex pt-1 items-center gap-1">
              <p className="subtitle-size">Fixed amount</p>

              <ToolTip />
            </div>
            <ToggleButton
              state={fixedAmount}
              setState={setFixedAmount}
              width="[40px]"
              height="[22px]"
            />
          </div>
          {fixedAmount && (
            <div className="pr-2 w-full">
              <input
                type="number"
                placeholder={`${CurrencySign}25`}
                value={fixedAmountValue}
                onChange={(e) => {
                  //  fixedAmount.insert('$',0)
                  setFixedAmountValue(e.target.value);
                }}
                onBlur={(e) => {
                  const payload = {
                    fixedAmount: +e.target.value,
                    type: "Donation",
                  };
                  updateDonation(payload);
                }}
                className="w-full placeholder-input-modal rounded h-[35px] px-2 xxxxl:text-[20px] text-[11px] outline-none bg-white shadow-md text-[#A0A0A0]"
              />
            </div>
          )}
          {!fixedAmount && (
            <div className="flex justify-between pt-3 pb-2">
              <div className="flex pt-1 items-center gap-1">
                <p className="subtitle-size">Show suggested amounts</p>

                <ToolTip />
              </div>

              <div className="flex items-center">
                <div
                  className="flex cursor-pointer "
                  onClick={() => {
                    toggleSwitch(!suggestedAmount);
                  }}
                >
                  <div
                    className={`w-[40px] h-[22px] xxxxl:w-[65px] xxxxl:h-[30px] xxxxl:rounded-2xl  rounded-xl p-1 ${
                      suggestedAmount === true && "ml-auto"
                    } ${
                      suggestedAmount ? "bg-[#E7EEF9]" : "bg-[#F5F5F5]"
                    } transition-all`}
                  >
                    <div
                      className={` w-[15px] h-[15px] rounded-full xxxxl:w-[20px] xxxxl:h-[20px]  float-${
                        suggestedAmount === false ? "left" : "right"
                      } ${
                        suggestedAmount
                          ? "translate-x-[1px] , bg-[#3A37A6] "
                          : "translate-x-0 , bg-[#A0A0A0]"
                      } transition-all`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {suggestedAmount == true && !fixedAmount && (
            <>
              {suggestedAmountValues.map((item) => {
                return (
                  <div className="flex justify-between">
                    <div className="pr-2 w-full">
                      <input
                        type="number"
                        onChange={(e) => {
                          // setSuggestedAmountValues(e.target.value);
                        }}
                        onBlur={(e) => {
                          const payload = {
                            amount: +e.target.value,
                          };

                          updateAmountHandler({
                            id: item?._id,
                            payload: payload,
                          });
                        }}
                        placeholder={`${CurrencySign}${item?.amount}`}
                        className="w-full placeholder-input-modal rounded h-[35px] px-2 xxxxl:text-[20px] text-[11px] outline-none bg-white shadow-md text-[#A0A0A0]"
                      />
                    </div>
                    <div className="flex justify-around lg:gap-3  xxxs:gap-1">
                      <input
                        name="radio"
                        type="radio"
                        checked={item?.default}
                        
                        onClick={(e) => {
                          const payload = {
                            default: e.target.value == "on" ? true : false,
                          };
                          updateAmountHandler({
                            id: item?._id,
                            payload: payload,
                          });
                        }}
                        id=""
                        className="text-black w-[15px]"
                      />
                      <p className="mt-3 mr-2 text-[13px]  xxxxl:text-[20px]">
                        Default
                      </p>
                      <div
                        className="rounded-full w-[16px] my-3 h-[16px]  xxxxl:mt-4 text-[16px] flex justify-center items-center text-white bg-red-600"
                        onClick={() => {
                          deleteSuggestedAmountHandler(item?._id);
                        }}
                      >
                        -
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div className="flex justify-between pt-2">
              <div className="pr-2 w-full">
                <input
                  type="text"
                  placeholder="$25"
                  className="w-full rounded h-[35px] placeholder-input-modal xxxxl:text-[20px] px-2 text-[11px] outline-none bg-[#F5F5F5] text-[#A0A0A0]"
                />
              </div>
              <div className="flex justify-around lg:gap-3  xxxs:gap-1">
                <input
                  type="radio"
                  name=""
                  id=""
                  className="text-black w-[15px]"
                />
                <p className="mt-3 mr-2 text-[13px]  xxxxl:text-[20px]">
                  Default
                </p>
                <div className="rounded-full w-[16px] my-3 h-[16px] xxxxl:mt-4 text-[16px] flex justify-center items-center text-white bg-red-600">
                  -
                </div>
              </div>
              </div>*/}
              {!fixedAmount && (
                <div className="py-3 flex items-center justify-start">
                  <img
                    src={Logos.AddSquare2}
                    alt="icon"
                    onClick={() => {
                      SuggestedAmountHandler("");
                      // setSuggestedPopup(true);
                    }}
                    className="w-[27px] ml-2 cursor-pointer "
                  />
                  <p className=" ml-3 subtitle-size ">Add amount</p>
                </div>
              )}
            </>
          )}
          <hr />
          {!fixedAmount && (
            <div className="flex justify-between pt-3 pb-2">
              <div className="flex pt-1 items-center gap-1">
                <p className="subtitle-size ">Allow for custom amount</p>

                <ToolTip />
              </div>

              <div className="flex items-center">
                <div
                  className="flex cursor-pointer "
                  onClick={() => {
                    toggleSwitch2(!customAmount);
                  }}
                >
                  <div
                    className={`w-[40px] h-[22px] xxxxl:w-[65px] xxxxl:h-[30px] xxxxl:rounded-2xl  rounded-xl p-1 ${
                      customAmount === true && "ml-auto"
                    } ${
                      customAmount ? "bg-[#E7EEF9]" : "bg-[#F5F5F5]"
                    } transition-all`}
                  >
                    <div
                      className={` w-[15px] h-[15px] rounded-full xxxxl:w-[20px] xxxxl:h-[20px]  float-${
                        customAmount === false ? "left" : "right"
                      } ${
                        customAmount
                          ? "translate-x-[1px] , bg-[#3A37A6] "
                          : "translate-x-0 , bg-[#A0A0A0]"
                      } transition-all`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!fixedAmount && customAmount && (
            <div className="flex w-full pb-2">
              <div className="px-1 w-full">
                <p className="ml-1 subtitle-size">Min</p>
                <input
                  type="number"
                  placeholder={`${CurrencySign}25`}
                  value={minAmount}
                  onChange={(e) => {
                    setMinAmount(e.target.value);
                  }}
                  onBlur={(e) => {
                    const payload = {
                      type: "Donation",
                      minAmount: +e.target.value,
                    };
                    updateTitle.mutate({ id: stepId, interaction: payload });
                  }}
                  className="w-full text-center placeholder-input-modal xxxxl:text-[20px] rounded h-[35px]   text-[11px] outline-none bg-white shadow-md text-[#A0A0A0]"
                />
              </div>
              <div className="px-1 w-full">
                <p className="ml-1 subtitle-size">Max</p>
                <input
                  type="number"
                  placeholder={`${CurrencySign}29,000`}
                  value={maxAmount}
                  onChange={(e) => {
                    setMaxAmount(e.target.value);
                  }}
                  onBlur={(e) => {
                    const payload = {
                      type: "Donation",
                      maxAmount: +e.target.value,
                    };
                    updateTitle.mutate({ id: stepId, interaction: payload });
                  }}
                  className="w-full text-center placeholder-input-modal xxxxl:text-[20px] rounded h-[35px]  text-[11px] outline-none bg-white shadow-md text-[#A0A0A0]"
                />
              </div>
            </div>
          )}

          <hr />
          <div className="flex justify-between pt-3 pb-2">
            <div className="flex items-center gap-1 pt-1">
              <p className="subtitle-size ">Information collection</p>

              <ToolTip />
            </div>
          </div>
          <div className="flex justify-between items-center pt-3 ">
            <div className="flex pt-1">
              <p className="subtitle-size">First Name</p>
            </div>
            <div className="flex justify-center items-center">
              <ToggleButton
                state={true}
                // state={informationCollection?.firstName}
                width="[40px]"
                height="[22px]"
                disabled={true}
                setState={toggleHanddler}
                key1="firstName"
              />
              <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">*</div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-1 ">
            <div className="flex pt-1">
              <p className="subtitle-size">Last Name</p>
            </div>
            <div className="flex justify-center items-center">
              <ToggleButton
                state={true}
                // state={informationCollection?.lastName}
                width="[40px]"
                height="[22px]"
                disabled={true}
                setState={toggleHanddler}
                key1="lastName"
              />
              <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">*</div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-1 ">
            <div className="flex pt-1">
              <p className="subtitle-size">Occupation</p>
            </div>
            <div className="mr-3 flex items-center">
              <ToggleButton
                state={informationCollection?.occupation}
                width="[40px]"
                height="[22px]"
                setState={toggleHanddler}
                key1="Occupation"
              />
            </div>
          </div>
          <div className="flex justify-between items-center pt-3 ">
            <div className="flex pt-1">
              <p className="subtitle-size">Email</p>
            </div>
            <div className="flex items-center">
              <ToggleButton
                state={true}
                // state={informationCollection?.email}
                width="[40px]"
                disabled={true}
                height="[22px]"
                setState={toggleHanddler}
                key1="Email"
              />
              <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">*</div>
            </div>
          </div>
          {/* <div className="flex justify-between items-center pt-3 ">
                <div className="flex pt-1">
                  <p className="subtitle-size">Phone</p>
                </div>
                <div className="flex items-center">
                  <div>
                    <ToggleButton
                      isActive={true}
                      width="[40px]"
                      height="[22px]"
                    />
                  </div>

                  <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">*</div>
                </div>
              </div> */}
          <div className="flex justify-between items-center pt-3 ">
            <div className="flex pt-1">
              <p className="subtitle-size">Address</p>
            </div>
            <div className="flex items-center">
              <ToggleButton
                state={true}
                // state={informationCollection?.address}
                width="[40px]"
                disabled={true}
                height="[22px]"
                setState={toggleHanddler}
                key1="Address"
              />
              <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">*</div>
            </div>
          </div>
          <div className="py-1">
            <p className=" subtitle-size mb-2 ">Address format</p>
            <div>
              <div
                className="dropdown z-10 relative"
                onClick={handleDropdownClick1}
              >
                <div className="flex justify-between rounded-md text-[13px]  xxxxl:text-[20px] text-[#A0A0A0] w-full mr-3  px-4 py-2 bg-white shadow-md">
                  {addressFormat || "United state"}
                  <img
                    src={Logos.Arrowdown}
                    alt="Dropdown Arrow"
                    style={{
                      transform: isOpen2 ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    className="cursor-pointer w-[17px] ml-2"
                  />
                </div>
                {isOpen2 && (
                  <div className="bg-white absolute  shadow w-full ">
                    <div
                      className={`p-2 ${
                        addressFormat == "Pakistan"
                          ? "text-[#A0A0A0]"
                          : "text-black"
                      } `}
                      onClick={() => setAddressFormat("Pakistan")}
                    >
                      <p className="xxxxl:text-[20px] lg:text-[14px]">
                        Pakistan
                      </p>
                      <p></p>
                    </div>
                    <hr />
                    <div
                      className={`p-3 ${
                        addressFormat == "UAE" ? "text-[#A0A0A0]" : "text-black"
                      } `}
                      onClick={() => setAddressFormat("United State")}
                    >
                      <p className="xxxxl:text-[20px] lg:text-[14px]">
                        United State
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between items-center pt-3 ">
                <div className="flex pt-1">
                  <p className="subtitle-size">
                    Street Address
                  </p>
                </div>
                <div className="flex items-center">
                  <ToggleButton
                    isActive={true}
                    width="[40px]"
                    height="[22px]"
                  />
                  <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0]">*</div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3 ">
                <div className="flex pt-1">
                  <p className="subtitle-size">City</p>
                </div>
                <div className="flex items-center">
                  <ToggleButton
                    isActive={true}
                    width="[40px]"
                    height="[22px]"
                  />
                  <div className="text-[24px] mt-1 ml-1">*</div>
                </div>
              </div> */}
          {/* <div className="flex justify-between items-center pt-3 ">
                <div className="flex pt-1">
                  <p className="subtitle-size">State</p>
                </div>
                <div className="flex items-center">
                  <ToggleButton
                    isActive={true}
                    width="[40px]"
                    height="[22px]"
                  />
                  <div className="text-[24px] mt-1 ml-1 ">*</div>
                </div>
              </div> */}
          {/* <div className="flex justify-between items-center pt-3 ">
                <div className="flex pt-1">
                  <p className="subtitle-size">Zip code</p>
                </div>
                <div className="flex items-center">
                  <ToggleButton
                    isActive={true}
                    width="[40px]"
                    height="[22px]"
                  />
                  <div className="text-[24px] mt-1 ml-1 ">*</div>
                </div>
              </div> */}
          <div className="flex justify-between items-center pt-3 ">
            <div className="flex pt-1">
              <p className="subtitle-size ">Employment</p>
              <div className="p-1">
                <ToolTip />
              </div>
            </div>
            <div className="flex items-center">
              <ToggleButton
                state={informationCollection?.employment}
                width="[40px]"
                height="[22px]"
                disabled={true}
                setState={toggleHanddler}
                key1="Employer"
              />
              <div className="text-[24px] mt-1 ml-1 text-[#A0A0A0] ">*</div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-3 ">
            <div className="flex pt-1 items-center">
              <p className="subtitle-size">Donation consent</p>
              <div className="p-1">
                <ToolTip />
              </div>
            </div>
            <div className="flex items-center">
              <ToggleButton isActive={true} width="[40px]" height="[22px]" />
              <div className="text-[24px] mt-1 ml-1 ">*</div>
            </div>
          </div>
          <textarea
            className=" h-[90px] placeholder-input-modal p-3 text-[11px] xxxxl:text-[20px] placeholder-2xl w-full outline-none placeholder-[20px] text-[#A0A0A0]  rounded shadow-md"
            placeholder="Please subscribe me to your mailing list and send periodic updates and offers"
            value={informationCollection?.donationConsent}
            onChange={(e) => {
              let updatedDonationInformation;
              updatedDonationInformation = {
                ...informationCollection,
                donationConsent: e.target.value,
              };

              setDonationInformation(updatedDonationInformation);
            }}
          ></textarea>
          <div className="flex justify-between pt-3 ">
            <div className="flex pt-1">
              <p className="subtitle-size">Disclaimer</p>
              <div className="p-1">
                <ToolTip />
              </div>
            </div>
            <div className="flex">
              <ToggleButton state={true} width="[40px]" height="[22px]" />
            </div>
          </div>
          <textarea
            className=" min-h-[140px] p-3 leading-3 text-[#A0A0A0] w-full rounded shadow-md"
            placeholder="type your Disclaimer here"
            style={{ fontSize: "calc(0.5rem + 0.2vw)" }}
            value={informationCollection?.disclaimer}
            onChange={(e) => {
              let updatedDonationInformation;

              updatedDonationInformation = {
                ...informationCollection,
                disclaimer: e.target.value,
              };

              setDonationInformation(updatedDonationInformation);
              setDisclaimer(e.target.value);
            }}
          />

          <div className="flex justify-between py-3">
            <div className="flex items-center">
              <img
                src={Logos.SIcon}
                alt="icon"
                className="lg:w-[27px] xxxs:w-[24px] ml-2"
              />
              <p className="subtitle-size ml-3">Stripe account</p>
            </div>
            <div className="">
              <button
                onClick={() => {
                  const payload = `/AddNewStep/${id}`;
                  StripeConnectHandler.mutate(payload, {
                    onSuccess: (data) => {
                      window.open(data?.URL, "_blank");
                    },
                  });
                }}
                disabled={checkStatus?.isConnected}
                className="bg-[#E7EEF9] border-none
                    px-2  text-center flex py-2
                  justify-center h-[34px] xxxxl:text-[16px] xxxs:text-[11px] lg:text-[14px]
                   text-[#3A37A6] rounded"
              >
                {checkStatus?.isConnected==true ? "Connected" : "Connect"}
              </button>
            </div>
          </div>
          <div className="py-3">
            <p className="text-[12px] xxxxl:text-[16px] text-[#A0A0A0] leading-[15px]">
              Collect payment with your stripe account.If you don't already have
              one,you can create new one when connecting.
            </p>
          </div>
          {/* <div className="flex justify-between items-center pt-3 ">
                <div className="flex pt-1 items-center">
                  <p className="subtitle-size">Credit card</p>
                  <div className="p-1">
                    <ToolTip />
                  </div>
                </div>
                <div className="flex">
                  <ToggleButton
                    isActive={true}
                    width="[40px]"
                    height="[22px]"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center pt-2 ">
                <div className="flex pt-1 items-center">
                  <p className="subtitle-size ">
                    Bank transfer
                  </p>
                  <div className="p-1">
                    <ToolTip />
                  </div>
                </div>
                <div className="flex">
                  <ToggleButton
                    isActive={true}
                    width="[40px]"
                    height="[22px]"
                  />
                </div>
              </div> */}
          <hr />
          {pathData?.donationDestination == null && (
            <div className="flex justify-between gap-2">
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
          {pathData?.donationDestination && (
            <div className="flex justify-between py-2 mt-2 px-2 border-l-[13px] rounded border-[#AEBFF2] shadow-md">
              <p className="subtitle-size">{pathData?.donationText}</p>
              <img
                src={Logos.DestinationIcon}
                alt="icon"
                className="w-[40px] "
              />
            </div>
          )}
          {showModal && (
            <LibraryAddPath
              interactionId={interactionId}
              subfolderId={subfolderId}
              handleClose2={togglePopup2}
              type="Donation"
            />
          )}
          {/* <div className="flex justify-between py-2 mt-2 px-2 border-l-[13px] rounded border-[#AEBFF2] shadow-md">
          <p className=" mt-1 subtitle-size">Destination</p>
          <img src={Logos.DestinationIcon} alt="icon" className="w-[40px] " />
        </div> */}
        </div>
      {/* )} */}
    </>
  );
};

export default DonationLeft;
