import React, { useState, useEffect } from "react";
import { Logos } from "../../assets";
import InputComp from "../../components/InputComp/InputComp";
import { useNavigate } from "react-router";
import { checkStripeStatus } from "../../hooks/useVideo";
import { useMutation } from "react-query";
import { useGlobalInfo } from "../../contexts/GlobalContext";
import { StripeConnect } from "../../hooks/useVideo";
import StripeLogo from "./download.png";

const Integrations = () => {
  const [searchText, setSearchText] = useState("");
  const [searchText1, setSearchText1] = useState("");
  const [searchText2, setSearchText2] = useState("");
  const [button, setButton] = useState(false);
const StripeConnectHandler = useMutation(StripeConnect);
  const stripeStatus = useMutation(checkStripeStatus);
  function btnHandler(a) {
    setButton(a);
  }
  const { setStripeStatus, checkStatus } = useGlobalInfo();
  const navigate = useNavigate();

  function VideoHandler() {
    navigate("/video");
  }
  useEffect(() => {
    stripeStatus.mutate([], {
      onSuccess: (data) => {
   
        setStripeStatus(data);
      },
    });
  }, []);
  return (
    <div>
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
          <h1 className="font-medium title-size text-[#262626]">
            Integrations
          </h1>
        </div>
      </div>
      <div
        style={{ height: "calc(100vh - 135px)" , }}
        className="flex xxxs:flex-wrap  lg:flex-nowrap rounded w-full border-[1px] shadow-sm border-[#EBEBEB] "
      >
        <div className="overflow-y-auto  lg:border-r-2 xxxs-border-none border-[#EBEBEB] lg:py-3 xxxs:py-2 " style={{width:"calc(26vw + 10px)"}}>
          <div className="px-3">
            <p className="title-size pb-2">Add Interactions</p>
          </div>
          <hr />
          <div className="flex flex-col gap-3 px-3 py-3">
            <div className="flex justify-between  subtitle-size px-3 text-white gap-2 items-center h-[38px] bg-[#AEBFF2] rounded-md">
              Payments
              <p>1</p>
            </div>
            {/* <div className="flex justify-between subtitle-size px-3 border-[1px] gap-2 items-center h-[38px] rounded-md cursor-pointer">
              Analytics
              <p>3</p>
            </div>
            <div className="flex justify-between subtitle-size px-3 border-[1px] gap-2 items-center h-[38px] rounded-md">
              CRM
              <p>5</p>
            </div>
            <div className="flex justify-between  subtitle-size px-3 border-[1px] gap-2 items-center h-[38px] rounded-md">
              Data management
              <p>5</p>
            </div>
            <div className="flex justify-between subtitle-size px-3 border-[1px] gap-2 items-center h-[38px] rounded-md">
              Customer support
              <p>1</p>
            </div>
            <div className="flex justify-between subtitle-size px-3 border-[1px] gap-2 items-center h-[38px] rounded-md">
              Productivity
              <p>3</p>
            </div>
            <div className="flex justify-between subtitle-size px-3 border-[1px] gap-2 items-center h-[38px] rounded-md">
              Marketing
              <p>3</p>
            </div>
            <div className="flex justify-between  subtitle-size px-3 border-[1px] gap-2 items-center h-[38px] rounded-md">
              Communication
              <p>6</p>
            </div>
            <div className="flex justify-between px-3 subtitle-size border-[1px] gap-2 items-center h-[38px] rounded-md">
              Other
              <p>1</p>
            </div> */}
          </div>
          <div className="px-6 py-3">
            {/* <div className="flex flex-col bg-[#E7EEF9] subtitle-size font-medium gap-1 p-3 text-[14px] min-h-[150px] rounded-md">
              Still Looking for something?
              <p className="inner-size font-normal">
                <span className="underline text-[#3A37A6] subtitle-size ">
                  Zapier.com
                </span>{" "}
                offers over 2,000 integrations with Candor Video.
              </p>
              Have a Suggestion for a native integration?
              <p className="inner-size font-normal">
                Let us know <span className="underline">here.</span>
              </p>
            </div> */}
          </div>
        </div>

        <div className="w-full h-[80vh] overflow-y-auto lg:py-3 xxxs:py-2 ">
          <p className="title-size px-3 pb-2">All categories</p>
          <hr />
          <div className="flex flex-col gap-3 pt-4 xxxs:px-1 lg:px-4 ">
            {/* <div className="flex flex-col py-2 shadow-md rounded gap-3 min-h-[80px]">
                            <div className="flex lg:flex-nowrap xxxs:flex-wrap gap-1">
                                <div
                                    className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                    <img src={Logos.IntImg1} alt="Int Img1" className=""/>
                                </div>
                                <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                    <p className="lg:text-[16px] xxxxl:text-[20px] font-medium xxxs:text-[14px]">
                                        Google Analytics
                                    </p>
                                    <p className="text-[#A0A0A0] xxxxl:text-[20px] lg:text-[12px] xxxs:text-[10px]">
                                        Discover how people find and interact with your videoask.
                                        Measure campaigns, improve conversions, and more.
                                    </p>
                                </div>
                                {!button ? (
                                    <div className="flex float-right items-center px-2 ">
                                        <button
                                            className="bg-[#AEBFF2] xxxxl:text-[18px] lg:h-[38px] xxxs:h-[30px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-white rounded-md shadow-md"
                                            onClick={() => {
                                                btnHandler(!button);
                                            }}
                                        >
                                            Connect
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex float-right items-center px-2 ">
                                        <button
                                            className="bg-[#AEBFF2] xxxxl:text-[20px] lg:h-[38px] xxxs:h-[30px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-white rounded-md shadow-md"
                                            onClick={() => {
                                                btnHandler(!button);
                                            }}
                                        >
                                            Save
                                        </button>
                                    </div>
                                )}
                            </div>
                            {button === true && (
                                <div
                                    className="flex lg:flex-nowrap xxxxl:text-[20px] lg:text-[16px] lg:leading-4 xxxs:leading-none font-medium xxxs:text-[14px] xxxs:flex-wrap items-center gap-2 lg:px-6 xxxs:px-2 max-w-[500px]">
                                    <h1>Tracking code</h1>
                                    <InputComp
                                        type="text"
                                        size="medium"
                                        placeholder="e.g. UA-XXXXX-Y"
                                        isButton={true}
                                        className="bg-[#F5F5F5] xxxxl:text-[20px] font-medium h-[35px] border-none xxxs:text-[12px] lg:text-[13px] p-2"
                                        value={searchText}
                                        onChange={(e) => {
                                            setSearchText(e.target.value);
                                        }}
                                    />
                                </div>
                            )}
                        </div> */}
            <div className="flex flex-col py-2 shadow-md rounded gap-3 min-h-[80px]">
              <div className="flex lg:flex-nowrap xxxs:flex-wrap gap-1">
                <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                  <img src={StripeLogo} alt="Int Img1" className="" height={60} width={60} style={{borderRadius: 50}} />
                </div>
                <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                  <p className="lg:text-[16px] xxxxl:text-[20px] font-medium xxxs:text-[14px]">
                    Stripe
                  </p>
                  <p className="text-[#A0A0A0] xxxxl:text-[20px] lg:text-[12px] xxxs:text-[10px]">
                  Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                  </p>
                </div>

                <div className="flex float-right items-center px-2 ">
                  <button
                    className="bg-[#AEBFF2] xxxxl:text-[18px] lg:h-[38px] xxxs:h-[30px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-white rounded-md shadow-md"
                    onClick={() => {
                     const route ='/integrations'
                      StripeConnectHandler.mutate(route, {
                        onSuccess: (data) => {
                          window.open(data?.URL, "_blank");
                        },
                      });
                    }}
                  >
                    {checkStatus?.data?.isConnected == false
                      ? "Connect"
                      : "Connected"}
                  </button>
                </div>
              </div>
              {button === true && (
                <div className="flex lg:flex-nowrap xxxxl:text-[20px] lg:text-[16px] lg:leading-4 xxxs:leading-none font-medium xxxs:text-[14px] xxxs:flex-wrap items-center gap-2 lg:px-6 xxxs:px-2 max-w-[500px]">
                  <h1>Tracking code</h1>
                  <InputComp
                    type="text"
                    size="medium"
                    placeholder="e.g. UA-XXXXX-Y"
                    isButton={true}
                    className="bg-[#F5F5F5] xxxxl:text-[20px] font-medium h-[35px] border-none xxxs:text-[12px] lg:text-[13px] p-2"
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                  />
                </div>
              )}
            </div>
            {/* <div className="flex flex-col py-2 shadow-md rounded gap-3 min-h-[80px]">
                            <div className="flex lg:flex-nowrap xxxs:flex-wrap gap-1">
                                <div
                                    className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                    <img src={Logos.IntImg2} alt="Int Img2" className=""/>
                                </div>
                                <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                    <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                        Google Tag Manager
                                    </p>
                                    <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                        Add your own code snippets to your videoask for conversion
                                        tracking. site analytics, retargeting, and more.
                                    </p>
                                </div>
                                {!button ? (
                                    <div className="flex float-right items-center px-2 ">
                                        <button
                                            className="bg-[#AEBFF2] lg:h-[38px] xxxxl:text-[18px] xxxs:h-[30px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-white rounded-md shadow-md"
                                            onClick={() => {
                                                btnHandler(!button);
                                            }}
                                        >
                                            Connect
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex float-right items-center px-2 ">
                                        <button
                                            className="bg-[#AEBFF2] lg:h-[38px] xxxxl:text-[18px] xxxs:h-[30px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-white rounded-md shadow-md"
                                            onClick={() => {
                                                btnHandler(!button);
                                            }}
                                        >
                                            Save
                                        </button>
                                    </div>
                                )}
                            </div>
                            {button === true && (
                                <div
                                    className="flex lg:flex-nowrap xxxxl:text-[20px] lg:text-[16px] lg:leading-4 xxxs:leading-none font-medium xxxs:text-[14px] xxxs:flex-wrap items-center gap-2 lg:px-6 xxxs:px-2 max-w-[500px]">
                                    <h1>Container ID</h1>
                                    <InputComp
                                        type="text"
                                        size="medium"
                                        placeholder="e.g. GTM-XXXXX"
                                        isButton={true}
                                        className="bg-[#F5F5F5] font-medium xxxxl:text-[20px] h-[35px] border-none xxxs:text-[12px] lg:text-[13px] p-2"
                                        value={searchText1}
                                        onChange={(e) => {
                                            setSearchText1(e.target.value);
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col py-2 shadow-md rounded gap-3 min-h-[80px]">
                            <div className="flex lg:flex-nowrap xxxs:flex-wrap gap-1">
                                <div
                                    className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                    <img src={Logos.IntImg3} alt="Int Img3" className=""/>
                                </div>
                                <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                    <p className="lg:text-[16px] font-medium  xxxxl:text-[20px] xxxs:text-[14px]">
                                        Facebook Pixel
                                    </p>
                                    <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px]  xxxs:text-[10px]">
                                        Add your Facebook pixel ID nad get all the data you need to
                                        measure and optimize your marketing campaigns.
                                    </p>
                                </div>
                                {!button ? (
                                    <div className="flex float-right items-center px-2 ">
                                        <button
                                            className="bg-[#AEBFF2] lg:h-[38px] xxxxl:text-[18px] xxxs:h-[30px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-white rounded-md shadow-md"
                                            onClick={() => {
                                                btnHandler(!button);
                                            }}
                                        >
                                            Connect
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex float-right items-center px-2 ">
                                        <button
                                            className="bg-[#AEBFF2] lg:h-[38px] xxxxl:text-[18px] xxxs:h-[30px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-white rounded-md shadow-md"
                                            onClick={() => {
                                                btnHandler(!button);
                                            }}
                                        >
                                            Save
                                        </button>
                                    </div>
                                )}
                            </div>
                            {button === true && (
                                <div
                                    className="flex lg:flex-nowrap xxxxl:text-[20px] lg:text-[16px] lg:leading-4 xxxs:leading-none font-medium xxxs:text-[14px] xxxs:flex-wrap items-center gap-2 lg:px-6 xxxs:px-2 max-w-[500px]">
                                    <h1>Pixel ID</h1>
                                    <InputComp
                                        type="text"
                                        size="medium"
                                        placeholder="e.g. 12345678901234567"
                                        isButton={true}
                                        className="bg-[#F5F5F5] font-medium xxxxl:text-[20px] h-[35px] border-none xxxs:text-[12px] lg:text-[13px] p-2"
                                        value={searchText2}
                                        onChange={(e) => {
                                            setSearchText2(e.target.value);
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg4} alt="Int Img4" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    HubSpot
                                </p>
                                <p className="text-[#A0A0A0] xxxxl:text-[20px] lg:text-[12px] xxxs:text-[10px]">
                                    Create new contacts and attach responses in Hubspot directly
                                    from a videoask.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="bg-[#AEBFF2] xxxxl:text-[18px] lg:h-[38px] xxxs:h-[30px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-white rounded-md shadow-md">
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg5} alt="Int Img5" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Pipedrive
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Turn new contacts into deals and add them to any stage your
                                    sales pipeline in pipedrive.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="bg-[#AEBFF2] lg:h-[38px] xxxxl:text-[18px] xxxs:h-[30px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-white rounded-md shadow-md">
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg6} alt="Int Img6" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Copper
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Create new contracts and attach responses in HubSpot directly
                                    from a videoask.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center xxxxl:text-[18px] items-center gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg7} alt="Int Img7" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Zendesk sell
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Connect your videoask to Zendesk Sell to capture leads.Easily
                                    build and maintain sales force automation.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg8} alt="Int Img8" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Salesforce
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Send videoask responses to salesforce as contacts, Leads, and
                                    more.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center xxxxl:text-[18px] items-center gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg9} alt="Int Img9" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Google Sheets
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Send data straight to google sheets via Zapier, Automatically
                                    syncs as result come in. Oh sheet!
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg10} alt="Int Img10" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Google Drive
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Easily collect videos or audio clips from your videoask into
                                    google drive.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center xxxxl:text-[18px] items-center gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div> */}
            {/* <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg11} alt="Int Img11" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Dropbox
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px]  xxxxl:text-[20px] xxxs:text-[10px]">
                                    Easily collect videos or audios clips from your videoask into
                                    dropbox.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center xxxxl:text-[18px] items-center gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg12} alt="Int Img12" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Box
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    As for files in style with a videoask,then send them straight
                                    to box for better organization and collaboration.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center xxxxl:text-[18px] items-center gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg13} alt="Int Img13" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium  xxxxl:text-[20px] xxxs:text-[14px]">
                                    Microsoft onedrive
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxs:text-[10px]">
                                    Upload files from your videoask to OneDrive cloud storage for
                                    better organization and collaboration.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg7} alt="Int Img7" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Zendesk
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Automatically create new ticket in Zendesk from new videoask
                                    responses.Support your customers via a frictionless
                                    experience.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center xxxxl:text-[18px] items-center gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg15} alt="Int Img15" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium  xxxxl:text-[20px] xxxs:text-[14px]">
                                    Trello
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Send videoask responses straight to Trello so your team can
                                    come together and act Quickly.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg16} alt="Int Img16" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Asana
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Automatically turn videoask responses into task to save time
                                    and effort when setting up your projects.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg17} alt="Int Img17" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Slack
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Notify a channel or individual in Slack with real time
                                    videoask responses so the right person can react in an
                                    instant.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg18} alt="Int Img18" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    NationBuilder
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Create new contact and attach responses in HubSpot directly
                                    from a videoask.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg19} alt="Int Img19" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium  xxxxl:text-[20px] xxxs:text-[14px]">
                                    Twitter
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Broadcast videoask responses to twitter. Share content with
                                    the world.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center xxxxl:text-[18px] items-center gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg20} alt="Int Img20" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Mailchimp
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Send new contact to your Mialchimp lists, and tag them so
                                    they're easy to organize.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg21} alt="Int Img21" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium  xxxxl:text-[20px] xxxs:text-[14px]">
                                    ConstantContact
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Broadcast videoask responses to twitter. Share content with
                                    the world.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center xxxxl:text-[18px] items-center gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg22} alt="Int Img22" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Gmail
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Trigger an email to your respondent or set up custom
                                    notification for your team to get notified.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg23} alt="Int Img23" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Outlook
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[18px] xxxs:text-[10px]">
                                    Send an email in Microsoft Outlook when your videoask receives
                                    a response.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg24} alt="Int Img24" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Office 365
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Add new contacts with office 365. Great fir customizing your
                                    workflows or interacting with your audience in a personal way.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center xxxxl:text-[18px] items-center gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg25} alt="Int Img25" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px]  xxxs:text-[14px]">
                                    Zoom
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Easily sign attendees up automatically yo your Zoom webinar
                                    using your videoask.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg26} alt="Int Img26" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Zapier SMS
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Trigger SMS messages from videoask responses.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap xxxs:flex-wrap py-2 shadow-md rounded gap-1 min-h-[80px]">
                            <div className="flex justify-center items-center lg:max-w-[180px] xxxs:max-w-[150px] pl-2">
                                <img src={Logos.IntImg26} alt="Int Img26" className=""/>
                            </div>
                            <div className="flex flex-col justify-center lg:px-4 xxxs:px-2 w-full">
                                <p className="lg:text-[16px] font-medium xxxxl:text-[20px] xxxs:text-[14px]">
                                    Zapier Email
                                </p>
                                <p className="text-[#A0A0A0] lg:text-[12px] xxxxl:text-[20px] xxxs:text-[10px]">
                                    Send new videoask responses to multiple emails.
                                </p>
                            </div>
                            <div className="flex float-right items-center px-2 ">
                                <button
                                    className="flex justify-center items-center xxxxl:text-[18px] gap-2 lg:h-[38px] xxxs:h-[30px] border-[#94A2F2] border-[1px] lg:text-[14px] xxxs:text-[12px] lg:w-[120px] xxxs:w-[100px] text-[#94A2F2] rounded-md shadow-sm">
                                    <img src={Logos.Export} alt=""/>
                                    Connect
                                </button>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
