import React, { useEffect, useState } from "react";
import { Logos } from "../../../assets";
import { useGlobalInfo } from "../../../contexts/GlobalContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutButton from "./CheckoutButton";
import { useParams } from "react-router-dom";
import GlobalLoaderCopy from "../../GloabalLoaderCopy/GloabalLoaderCopy";
import { useLocation } from "react-router-dom";
import { stripeConnection } from "../../../hooks/useVideo";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
const stripePromise = loadStripe(
  "pk_test_51MJADqIhkdGbsnclOj2GCrgK8wYQAdaPhrfXjWXzZxhuHgQrvonQ6H3XoEBGTV95SQ2xr2xpUeBVotniKx9xURLg009l5PSs29"
);
const DonationRight = ({ activeScreen }) => {
  // const [isDisabled, setIsDisabled] = useState(false);
  const schema = yup
    .object({
      firstName: yup.string().required("Field Required"),
      lastName: yup.string().required("Field Required"),
      email: yup.string().required("Field Required"),
      address: yup.string().required("Field Required"),
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
  const location = useLocation();
  // useEffect(() => {
  //   if (location.pathname.includes("/AddNewStep")) {
  //     setIsDisabled(true);
  //   } else {
  //     setIsDisabled(false);
  //   }
  // }, [location.pathname]);
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState("credit");
  const [activeContent, setActiveContent] = useState("content1");
  const [activeTab, setActiveTab] = useState("Tabcontent1");
  // const [activeScreen, setActiveScreen] = useState("desktopImg");
  const [titleChange, setIsTitleChange] = useState("Donate");
  const navigateToContent1 = () => {
    setActiveContent("content1");
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    employer: "",
    occupation: "",
  });
  const {
    fixedAmount,
    setFixedAmount,
    minAmount,
    maxAmount,
    isDisabled,
    setIsDisabled,
    CurrencySign,
    setCurrencySign,
    selectedOption1,
    fixedAmountValue,
    setFixedAmountValue,
    suggestedAmountValues,
    suggestedAmount,
    stepId,
    setSuggestedAmount,
    Disclaimer,
    informationCollection,
  } = useGlobalInfo();
  const { id } = useParams();

  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState(false);
  useEffect(() => {
    const defaultSelected = suggestedAmountValues.filter(
      (item) => item.default == true
    );
    setSelectedAmount(defaultSelected[0]?._id);
    setInputValue(defaultSelected[0]?.amount);
    setFixedAmountValue(defaultSelected[0]?.amount);
  }, [suggestedAmountValues]);
  const handleClick = (value) => {
    setInputValue(value?.amount + "$");
    setFixedAmountValue(value?.amount);
    setSelectedAmount(value?._id);
  };

  const Title1 = () => {
    setIsTitleChange("Enter an amount");
  };
  const Title2 = () => {
    setIsTitleChange("Enter your information");
  };
  const Title3 = () => {
    setIsTitleChange("Payment details");
  };
  const Title4 = () => {
    setIsTitleChange("Enter payment details");
  };

  const TabClick = () => {
    setIsClicked(!isClicked);
  };

  const toggleContent = (content) => {
    setActiveContent(activeContent === content ? "content1" : content);
  };

  const toggleTab = (content) => {
    setActiveTab(activeTab === content ? "Tabcontent1" : content);
  };
  function updateHandlerData(data) {
    setFormData((prev) => ({
      ...prev,
      [data.name]: data.value,
    }));
  }
  const { mutate: StripeConnectHandler } = useMutation(stripeConnection);

  const [loading, setLoading] = useState(false);
  const [finalData, setFinalData] = useState({
    amount: +inputValue,
    currency: "usd",
    stepId: stepId,
    informationCollection: formData,
    shareFolderId: id,
  });

  function handleDonate(data) {
    // debugger;
    setLoading(true);
    const payload = {
      amount: +inputValue,
      currency: selectedOption1 ? selectedOption1 : "USD",
      stepId: stepId,
      informationCollection: data,
      shareFolderId: finalData?.shareFolderId,
    };
    StripeConnectHandler({ payload, setLoading });
  }
  return (
    <>
      <div
        className="w-[50%] rounded flex  flex-auto justify-center   items-center border-[1px]  shadow-md border-[#EBEBEB] mb-4 mt-1"
        style={{ height: "calc(80vh - 100px)" }}
      >
        {activeContent === "content1" &&
          fixedAmount != true &&
          suggestedAmount == true && (
            <div className="w-[80%] flex flex-col gap-[30px] py-2 justify-between">
              <div className="flex justify-center  gap-2">
                <div className="bg-[#94A2F2] w-[10px] h-[10px] rounded-full"></div>
                <div className="bg-[#EBEBEB] w-[10px] h-[10px] rounded-full"></div>
              </div>
              <div className="w-[350px] h-[45vh] xxxs:w-full flex flex-col mx-auto justify-center">
                <div className="flex justify-center xxxxl:text-[26px] mt-7 text-[15px] text-[#3A37A6] tracking-wider">
                  Select an amount
                </div>
                <div className="w-[350px] flex flex-col justify-center mx-auto">
                  <div className="grid grid-cols-3  justify-items-center pt-8 xxxs:gap-1 lg:gap-2 xxxxl:gap-7 lg:px-14  py-2">
                    {suggestedAmountValues.map((item) => {
                      return (
                        <button
                          onClick={() => {
                            handleClick(item);
                            setInputValue(item?.amount);
                          }}
                          className={`w-full py-2 h-[35px]  max-w-[85px]  xxxxl:h-[45px]  xxxxl:text-[20px] flex justify-center text-[12px]  text-white rounded border-none  ${
                            selectedAmount == item?._id
                              ? "bg-[#3A37A6]"
                              : "bg-[#AEBFF2]"
                          } `}
                        >
                          {CurrencySign}
                          {item?.amount}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex xxxs:px-0 lg:px-8 justify-center">
                    <input
                      type="number"
                      value={inputValue}
                      onChange={(e) => {
                        setFixedAmountValue(e.target.value);
                        setInputValue(e.target.value);
                      }}
                      className="w-[80%]  px-2 rounded h-[35px] placeholder-input-modal xxxxl:w-[93%] xxxxl:mt-[10px] xxxxl:h-[40px] xxxxl:text-[20px] text-[11px] outline-none bg-[#ffffff] shadow-md text-[#A0A0A0]"
                      placeholder={`${CurrencySign}100`}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex justify-center"
                onClick={() => {
                  toggleContent("content3"), Title1();
                }}
              >
                <button
                  disabled={inputValue === ""}
                  className="w-[110px] py-2 h-[40px] xxxxl:h-[50px] xxxxl:text-[20px] rounded  flex justify-center border-none text-[15px] text-white cursor-pointer bg-[#94A2F2]"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        {suggestedAmount == false &&
          activeContent != "content3" &&
          activeContent != "content4" &&
          fixedAmount == false && (
            <div className="w-[80%] py-2 flex flex-col gap-12 justify-center">
              <div className="flex justify-center py-3 gap-2">
                <div className="bg-[#94A2F2] w-[10px] h-[10px] rounded-full"></div>
                <div className="bg-[#EBEBEB] w-[10px] h-[10px] rounded-full"></div>
              </div>
              <div className="flex justify-center xxxxl:text-[26px]  text-[15px] text-[#3A37A6] tracking-wider">
                Enter an amount
              </div>

              <div className="flex px-2 justify-center">
                <input
                  type="number"
                  max={maxAmount}
                  min={minAmount}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="lg:w-[220px] placeholder-input-modal  xxxs:w-full xxxxl:text-[20px] px-2 rounded h-[35px]  text-[11px] outline-none bg-[#ffffff] shadow-md text-[#A0A0A0]"
                  placeholder={`${CurrencySign}100`}
                />
              </div>
              <div
                className="flex justify-center   mt-36"
                onClick={() => {
                  toggleContent("content3"), Title2();
                }}
              >
                <button className="w-[110px] py-2 h-[40px] xxxxl:h-[50px] xxxxl:text-[20px] rounded  flex justify-center border-none text-[15px] cursor-pointer text-white bg-[#94A2F2]">
                  Next
                </button>
              </div>
            </div>
          )}
        {(activeContent === "content3" || fixedAmount === true) &&
          activeContent != "content4" && (
            <div className="   overflow-scroll  h-full ">
              <div className="w-[100%] flex justify-center">
                <form
                  className="w-[80%] flex flex-col gap-12  justify-center"
                  onSubmit={handleSubmit(handleDonate)}
                >
                  <div className="flex justify-center py-3 gap-2 ">
                    <div className="bg-[#94A2F2] w-[10px] h-[10px] rounded-full"></div>
                    <div className="bg-[#94A2F2] w-[10px] h-[10px] rounded-full"></div>
                  </div>

                  <div>
                    {informationCollection?.employment ||
                      informationCollection?.occupation ||
                      informationCollection?.unit ||
                      informationCollection?.address ||
                      informationCollection?.email ||
                      informationCollection?.firstName ||
                      (informationCollection?.lastName && (
                        <div className=" ">
                          <p className="flex  justify-center mt-3 xxxxl:text-[24px] lg:text-[14px]">
                            {CurrencySign ? CurrencySign : " $"}
                            {inputValue}
                          </p>
                          <p className="text-[#3A37A6] xxxxl:text-[26px] flex mt-2 justify-center tracking-wider  text-[15px]">
                            Enter Your Information
                          </p>
                        </div>
                      ))}
                    <div className="flex flex-col lg:w-[320px]  justify-center mx-auto">
                      <div className="flex flex-col justify-center  mt-5">
                        <div className="flex   gap-2">
                          <div className="flex-auto">
                            <p className="lg:text-[14px] xxxxl:text-[20px]">
                              First Name
                            </p>
                            <input
                              onChange={(e) => {
                                updateHandlerData(e.target);
                              }}
                              type="text"
                              disabled={isDisabled}
                              {...register("firstName")}
                              name="firstName"
                              className=" mt-1 flex-auto w-full  px-2 rounded h-[35px]  text-[11px] outline-none bg-[#ffffff] shadow-md text-[#A0A0A0]"
                            />
                            {errors.firstName?.message && (
                              <p className="text-red-600  mt-[3px] text-[12px]">
                                {errors.firstName?.message}
                              </p>
                            )}
                          </div>

                          <>
                            {" "}
                            <div className="flex-auto">
                              <p className="lg:text-[14px] xxxxl:text-[20px]">
                                Last Name
                              </p>
                              <input
                                onChange={(e) => {
                                  updateHandlerData(e.target);
                                }}
                                type="text"
                                {...register("lastName")}
                                name="lastName"
                                disabled={isDisabled}
                                className=" mt-1 w-full   px-2 rounded h-[35px]  text-[11px] outline-none bg-[#ffffff] shadow-md text-[#A0A0A0]"
                              />
                              {errors.lastName?.message && (
                                <p className="text-red-600  mt-[3px] text-[12px]">
                                  {errors.firstName?.message}
                                </p>
                              )}
                            </div>
                          </>
                        </div>

                        <div className="flex flex-col justify-start">
                          <p className=" ml-1 py-2 lg:text-[14px] xxxxl:text-[20px]">
                            Email
                          </p>
                          <div className="flex justify-center">
                            <input
                              name="email"
                              {...register("email")}
                              disabled={isDisabled}
                              onChange={(e) => {
                                updateHandlerData(e.target);
                              }}
                              type="email"
                              className=" mt-1 w-[312px] relative  px-2 rounded h-[35px]  text-[11px] outline-none bg-[#ffffff] shadow-md text-[#A0A0A0]"
                            />
                          </div>
                          {errors.lastName?.message && (
                            <p className="text-red-600  mt-[3px] text-[12px]">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex w-full  gap-3 mt-2">
                        <div className="w-full">
                          <p className="lg:text-[14px] xxxxl:text-[20px]">
                            Address
                          </p>
                          <input
                            type="text"
                            name="address"
                            disabled={isDisabled}
                            {...register("address")}
                            onChange={(e) => {
                              updateHandlerData(e.target);
                            }}
                            className=" mt-1 w-full px-2 rounded h-[35px]  text-[11px] outline-none bg-[#ffffff] shadow-md text-[#A0A0A0]"
                          />
                          {errors.lastName?.message && (
                            <p className="text-red-600  mt-[3px] text-[12px]">
                              {errors.address?.message}
                            </p>
                          )}
                        </div>

                        {informationCollection?.unit && (
                          <div className="flex-auto w-full">
                            <p className="lg:text-[14px] xxxxl:text-[20px]">
                              Unit
                            </p>
                            <input
                              type="text"
                              disabled={isDisabled}
                              className=" w-full mt-1 xxxs:w-full px-2  rounded h-[35px]  text-[11px] outline-none bg-[#ffffff] shadow-md text-[#A0A0A0]"
                            />
                          </div>
                        )}
                      </div>
                      {informationCollection?.occupation && (
                        <div className="flex ">
                          <div className="">
                            <p className="pt-2 ml-2 text-[13px] xxxxl:text-[20px]">
                              Are you currently employed?
                            </p>
                            <div className="flex">
                              <div
                                className="flex p-2 cursor-pointer"
                                onClick={() => {
                                  setSelectedRadio(true);
                                }}
                              >
                                <input
                                  type="radio"
                                  name="employed"
                                  disabled={isDisabled}
                                  id=""
                                  // value={selectedRadio}
                                  checked={selectedRadio}
                                  className=""
                                />
                                <p className="ml-2 checked:[#3A37A6] xxxxl:text-[20px] ">
                                  Yes
                                </p>
                              </div>
                              <div
                                className="flex p-2 cursor-pointer"
                                onClick={() => {
                                  setSelectedRadio(false);
                                }}
                              >
                                <input
                                  type="radio"
                                  name="employed"
                                  disabled={isDisabled}
                                  id=""
                                  className=""
                                  checked={!selectedRadio}
                                />
                                <p className="ml-2 xxxxl:text-[20px]">No</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="flex  gap-2 mt-2">
                        {selectedRadio && informationCollection?.occupation && (
                          <div className="flex-auto">
                            <p className="lg:text-[14px] xxxxl:text-[20px]">
                              Occupation
                            </p>
                            <input
                              type="text"
                              name="occupation"
                              onChange={(e) => {
                                updateHandlerData(e.target);
                              }}
                              className="  mt-1 xxxs:w-full  px-2 rounded h-[35px]  text-[11px] outline-none bg-[#ffffff] shadow-md text-[#A0A0A0]"
                            />
                          </div>
                        )}
                        {selectedRadio && informationCollection?.employment && (
                          <div className="flex-auto">
                            <p className="lg:text-[14px] xxxxl:text-[20px]">
                              Employer
                            </p>
                            <input
                              name="employer"
                              onChange={(e) => {
                                updateHandlerData(e.target);
                              }}
                              type="text"
                              className=" mt-1 xxxs:w-full  px-2 rounded h-[35px]  text-[11px] outline-none bg-[#ffffff] shadow-md text-[#A0A0A0]"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    {Disclaimer != "" && (
                      <div className="mt-3   p-3 rounded shadow-md">
                        <div className="flex  items-start">
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="mt-1 accent-[#3A37A6] text-[#A0A0A0]"
                          />
                          <p className="text-[11px] xxxxl:text-[20px] px-1 pt-0.5 text-[#A0A0A0]">
                            {Disclaimer}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className=" xxxs:p-1 mt-2">
                      <p className="xxxxl:text-[20px]">Contribution rules</p>
                      <div className="mt-2  min-h-[200px] pt-2 px-1 rounded shadow-md">
                        <ul className="p-2 text-[11px] xxxxl:text-[20px] text-[#A0A0A0] ">
                          <li>
                            . I am a U.S. citizen or lawfully admitted permanent
                            resident (i,e., green card holder).
                          </li>
                          <li>
                            . This Contribution is made from my own funds, and
                            funds are not being provided to me by another
                            personor entity for the purpose of making this
                            contribution.
                          </li>
                          <li>. I am at least eighteen years old.</li>
                          <li>. I am not a federal contractor.</li>
                          <li>
                            . I am making this contribution with my own personal
                            credit card and not with my own personal credit card
                            and not with a corporator or business credit card or
                            a card issued to another person.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center  py-2">
                    <Elements stripe={stripePromise}>
                      {loading ? (
                        <div className="w-full flex items-center flex-col   px-3 my-auto justify-center mx-auto">
                          <img
                            src={Logos.AnimatedLoader}
                            alt="Loader"
                            className="lg:w-[120px]  xxxxl:w-[10%] xxxs:w-[90px]"
                          />
                        </div>
                      ) : (
                        <div className="flex gap-3">
                          {fixedAmount == false && (
                            <button
                              type="button"
                              onClick={navigateToContent1}
                              className="w-[110px] py-2 h-[40px] xxxxl:h-[50px] xxxxl:text-[20px] rounded  flex justify-center border-none text-[15px] cursor-pointer text-white bg-[#94A2F2]"
                            >
                              Back
                            </button>
                          )}
                          <button
                            type="submit"
                            // onClick={handleDonate}
                            disabled={isDisabled}
                            className="w-[110px] py-2 h-[40px] xxxxl:h-[50px] xxxxl:text-[20px] rounded  flex justify-center border-none text-[15px] cursor-pointer text-white bg-[#94A2F2]"
                          >
                            Donate
                          </button>
                        </div>
                      )}
                      {/* <CheckoutButton
                        payload={formData}
                        shareFolderId={id}
                        inputValue={inputValue}
                        navigateToContent1={navigateToContent1}
                        disable={isDisabled}
                      /> */}
                    </Elements>
                  </div>
                </form>
              </div>
            </div>
          )}
        {activeContent === "content4" && <GlobalLoaderCopy />}
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* )} */}
      {activeScreen === "mobileImg" &&
        (activeContent === "content1" || activeContent === "content2") && (
          <div>
            <div className="flex justify-center py-[20px]">
              <img
                src={Logos.DonationMobile}
                alt="mobile"
                className="w-[220px] xxxxl:w-[400px] xxxxl:pt-16"
              />
            </div>
          </div>
        )}
      {activeScreen === "mobileImg" && activeContent === "content3" && (
        <div>
          <div className="flex justify-center gap-4 py-[20px]">
            <img
              src={Logos.MobileInformation}
              alt="mobile"
              className="w-[220px] xxxxl:w-[400px] xxxxl:pt-16"
            />
            <img
              src={Logos.MobileInformation2}
              alt="mobile"
              className="w-[220px] xxxxl:w-[400px] xxxxl:pt-16"
            />
          </div>
        </div>
      )}
      {activeScreen === "mobileImg" && activeContent === "content4" && (
        <div>
          <div className="flex  justify-center py-[20px]">
            <img
              src={Logos.PaymentMobile}
              alt="mobile"
              className="w-[220px] xxxxl:w-[400px] xxxxl:pt-16"
            />
          </div>
        </div>
      )}
      {/* </div> */}
    </>
  );
};

export default DonationRight;
