import React, {useEffect, useRef, useState} from "react";
import {Logos} from "../../assets";
import InputComp from "../../components/InputComp/InputComp";
import NavDropdownComp from "../../components/NavDropdownComp/NavDropdownComp";
import ToggleButton from "../ToggleButton/ToggleButton";
import ToolTip from "../../components/ToolTip/ToolTip";
import {useNavigate} from "react-router";
import DynamicDropdown from "../DynamicDropdown/DynamicDropdown";
import {useMutation} from "react-query";
import {passwordLock, shareConversation} from "../../hooks/useConversation";
import {Toast} from "primereact/toast";
import {useGlobalInfo} from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
import {root_url_fe} from "../../utils/constants.jsx";


const firstPart = [
    {
        label: "Organization:",
        data: "Pin Views",
    },
    {
        label: "Email:",
        data: "ryanjones@example.com",
    },
    {
        label: "Phone:",
        data: "555-555-5555",
    },
    {
        label: "Address:",
        data: "100 South Street Suite 102 Charlotte, NC 28202 United States:",
    },
    {
        label: "Donation consent:",
        data: "Yes",
    },
    {
        label: "Seen donation disclosure:",
        data: "Yes",
    },
];

const ShareConversation = () => {
    const [searchPass, setSearchPass] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [searchTextValue, setSearchTextValue] = useState("");
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);
    const [card, setCard] = useState("");
    const [button1, setButton1] = useState("desktopImg");
    const [toggle, setToggle] = useState(false);
    const [linkData, setLinkData] = useState();
    const [isBoxToggle1, setIsBoxToggle1] = useState("Note");

    const [conversationModal, setConversationModal] = useState(false);

    function cardHandler(a, link) {
        setCard(a);
        setLinkData(link);
    }

    function toggleHandler(b) {
        setToggle(b);
    }

    function btnHandler1(a) {
        setButton1(a);
    }

    function boxToggle1(param) {
        setIsBoxToggle1(param);
    }

    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/conversation");
    }

    const {mutate} = useMutation(shareConversation);
    const {loading, setLoading} = useGlobalInfo();
    const [requiredPassword, setRequiredPassword] = useState(false);
    const [convoData, setConvoData] = useState();
    const {mutate: lock} = useMutation(passwordLock);

    function lockHanlder(password) {
        setLoading(true);

        const payload = {
            requirePassword: true,
            password: password,
            id: convoData?.id,
        };

        lock(payload, {
            onSuccess: (data) => {
                // console.log(data);
                setLoading(false);
                setSearchPass("");
            },
            onError: (error) => {
                showError();
                setLoading(false);
            },
        });
    }

    function toggleLockHandler(a) {
        if (convoData?.id) {

            setLoading(true)
            const payload = {
                requirePassword: a,
                id: convoData?.id
            }

            lock((payload), {

                onSuccess: (data) => {
                    // console.log(data);
                    setLoading(false)
                    setSearchPass("")
                },
                onError: (error) => {
                    showError();
                    setLoading(false)
                },
            });
        }

    }


    useEffect(() => {
        setLoading(true);
        mutate("data", {
            onSuccess: (data) => {
                setLoading(false);
                setConvoData(data?.data?.data);
            },
            onError: (error) => {
                showError();
                setLoading(false);
            },
        });
    }, []);
    useEffect(() => {
        if (requiredPassword) {
            toggleLockHandler(true)
        } else (
            toggleLockHandler(false)
        )
    }, [requiredPassword]);
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

    // const loading = useStore(state=>state.loading)
    // const setLoading = useStore(state=>state.isLoading)
    useEffect(() => {
        convoData?.content[0]?.type === "text" &&
        cardHandler("textplayer", convoData?.content[0]?.content);
        {
            convoData?.content[0]?.type === "video" &&
            cardHandler("desktopImg", convoData?.content[0]?.content);
        }
        {
            convoData?.content[0]?.type === "audio" &&
            cardHandler("audioplayer", convoData?.content[0]?.content);
        }
    }, [convoData]);

    const details = JSON.parse(localStorage.getItem("receiverId"));

    return (
        <>
            <Toast ref={toast}/>
            {loading ? (
                <GlobalLoaderCopy/>
            ) : (
                <>
                    <div>
                        <div className="flex items-center justify-between pb-2 w-full">
                            <div className="flex items-center justify-start gap-3">
                                <img
                                    src={Logos.VectorLeft}
                                    alt="Vector Left"
                                    className="cursor-pointer "
                                    style={{
                                        width: "calc(0.3rem + 0.2vw)",
                                    }}
                                    onClick={() => {
                                        VideoHandler();
                                    }}
                                />
                                <h1 className="font-medium title-size text-[#262626]">
                                    Share Entire Conversation
                                </h1>
                            </div>
                            <div className="flex justify-end">
                                {/* <button
            style={{
              backgroundColor: button1 == "desktopImg" ? "#94A2F2" : "#E7EEF9",
              color: button1 == "desktopImg" ? "white" : "#A0A0A0",
            }}
            onClick={() => {
              btnHandler1("desktopImg");
            }}
            className="bg-[#94A2F2] cursor-pointer py-2 px-3 flex justify-center items-center rounded-none rounded-l-md"
          >
            {button1 == "desktopImg" ? (
              <img
                src={Logos.MonitorImg}
                alt="Monitor Img"
                className=" cursor-pointer  desktop-icon"
              />
            ) : (
              <img
                src={Logos.MoniterImg1}
                alt="Monitor Img dull"
                className=" cursor-pointer desktop-icon"
              />
            )}
          </button>
          <button
            style={{
              backgroundColor: button1 == "mobileImg" ? "#94A2F2" : "#E7EEF9",
              color: button1 == "mobileImg" ? "white" : "#A0A0A0",
            }}
            onClick={() => {
              btnHandler1("mobileImg");
            }}
            className="bg-[#E7EEF9] py-2 cursor-pointer lg:px-4 xxxs:px-3 flex justify-center items-center rounded-none rounded-r-md"
          >
            {card == "mblimg" ? (
              <img
                src={Logos.SmartPhone1}
                alt="Smart Phone Img"
                className=" mobile-icon"
              />
            ) : (
              <img
                src={Logos.SmartPhoneImg}
                alt="Smart Phone Img"
                className=" mobile-icon"
              />
            )}
          </button> */}
                            </div>
                        </div>
                        <div
                            className="flex lg:flex-nowrap  xxxs:flex-wrap justify-between w-full border-[1px] shadow-md rounded-md ">
                            <div
                                className="overflow-y-auto overflow-x-hidden w-[400px] xxxxl:w-[620px] flex-auto xxxxl:px-4   "
                                style={{
                                    height: "calc(100vh - 150px)",
                                }}
                            >
                                <h1 className="font-medium  border-b-[1px] p-4 text-[#262626] sticky top-[0%] bg-white title-size">
                                    Share Conversations
                                </h1>
                                <div className="flex flex-col p-2 gap-1  ">
                                    <div className="flex justify-between gap-2 xxxxl:py-3 ">
                                        <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                            Share entire response
                                            <ToolTip/>
                                        </h1>
                                        <ToggleButton
                                            width="[40px]"
                                            height="[22px]"
                                            isActive={true}
                                        />
                                    </div>
                                    <h1
                                        className="xxxs:text-[11px] lg:text-[12px] text-[#94A2F2] xxxxl:text-[20px] "
                                        ref={h1Ref}
                                    >
                                        {root_url_fe}share-conversation-public?id={convoData?.id}
                                    </h1>
                                </div>
                                <div
                                    className="flex justify-start lg:gap-4 xxxs:gap-2 pl-2 pb-2 border-b-[1px] xxxxl:text-[24px] xxxxl:py-3">
                                    <button
                                        onClick={copyHandler}
                                        className="bg-[#F5F5F5] w-[95px] px-1 xxxxl:p-8 xxxxl:px-16 flex justify-center items-center rounded-md h-[35px] text-[13px] xxxxl:text-[24px]"
                                    >
                                        Copy
                                    </button>
                                    {/* <button className="bg-[#F5F5F5] w-[95px] px-1 xxxxl:p-8 xxxxl:px-16 flex justify-center items-center rounded-md h-[35px] text-[13px] xxxxl:text-[24px]">
              Embed
            </button> */}
                                </div>
                                <div className="flex flex-col gap-2 p-2">
                                    <div className="flex justify-between xxxxl:py-3 gap-2">
                                        <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                            Require a password
                                            <ToolTip/>
                                        </h1>
                                        <ToggleButton
                                            width="[40px]"
                                            height="[22px]"
                                            isActive={requiredPassword}
                                            onChange={() => {
                                                setRequiredPassword(!requiredPassword)

                                            }}
                                        />
                                    </div>
                                    {
                                        requiredPassword && (<>
                                            <h1 className="lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                Password
                                            </h1>
                                            <div className="flex">
                                                <InputComp
                                                    type="password"
                                                    size="medium"
                                                    placeholder="Password"
                                                    isButton={true}
                                                    className="placeholder-ant-share rounded-none rounded-l-md h-[35px] p-2 lg:text-[13px] xxxxl:h-[62px] xxxxl:text-[24px] xxxs:text-[11px]"
                                                    value={searchPass}
                                                    onChange={(e) => {
                                                        setSearchPass(e.target.value);
                                                    }}
                                                />
                                                <button onClick={() => {
                                                    lockHanlder(searchPass)
                                                }}
                                                        className="bg-[#94A2F2] w-[75px] xxxxl:p-8 rounded-r-md h-[35px] flex justify-center items-center xxxxl:h-[54px] text-white text-[13px] xxxxl:text-[24px]">
                                                    Save
                                                </button>
                                            </div>
                                        </>)
                                    }


                                    {/* <InputComp
              type="password"
              size="medium"
              placeholder="Enter the password to view"
              className="placeholder-ant-share bg-[#F5F5F5] hide-bg placeholder:bg-[#F5F5F5]  h-[35px] p-2 lg:text-[13px] xxxxl:text-[24px] xxxxl:h-[60px] xxxs:text-[11px]"
              value={searchPassValue}
              onChange={(e) => {
                setSearchPassValue(
                  e.target.value
                );
              }}
            /> */}
                                    {/* <div className="flex justify-between gap-2 xxxxl:py-3">
              <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                Display logo
                <ToolTip />
              </h1>
              <ToggleButton
                width="[40px]"
                height="[22px]"
                isActive={true}
              />
            </div>
            <div className="flex justify-between lg:gap-3 xxxs:gap-1 xxxxl:pt-5">
              <h1 className="flex items-center lg:text-[14px] xxxs:text-[12px] text-[#262626]  xxxxl:text-[24px]">
                Logo
              </h1>
              <button className="bg-[#F5F5F5] w-[90px] flex justify-center xxxxl:gap-3 items-center gap-1 rounded-md h-[30px] text-[12px]  xxxxl:text-[24px] xxxxl:w-[140px] xxxxl:p-8">
                Candor
                <img
                  src={Logos.VectorDown}
                  alt="Vector Down"
                  className="w-[12px] xxxxl:w-[18px]"
                />
              </button>
              <button className="bg-[#F5F5F5] w-[50px] flex justify-center  xxxxl:h-[60px] xxxxl:w-[60px] items-center rounded-md h-[30px] ">
                <img
                  src={Logos.EditBtn}
                  alt="Edit Btn"
                  className="w-[16px] xxxxl:w-[30px]"
                />
              </button>
              <button className="bg-[#F5F5F5] w-[50px] xxxxl:h-[60px] xxxxl:w-[60px] flex justify-center items-center rounded-md h-[30px] ">
                <img
                  src={Logos.AddSquareBlack}
                  alt="Add Square"
                  className="w-[18px] xxxxl:w-[30px]"
                />
              </button>
            </div> */}

                                    <div className="xxxxl:py-3">
                                        <div
                                            className={
                                                !showDropdown2
                                                    ? "hidden"
                                                    : "flex flex-col gap-2 px-2 xxxxl:py-3"
                                            }
                                        >
                                            <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] pt-3 xxxxl:text-[24px]">
                                                Include
                                            </h1>
                                            <div className="flex items-center justify-around pb-1 border-b-[1px]">
                                                <input
                                                    type="checkbox"
                                                    className="accent-[#3A37A6] h-4 w-4"
                                                />
                                                <h1 className="lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Text
                                                </h1>

                                                <input
                                                    type="checkbox"
                                                    className="accent-[#3A37A6] h-4 w-4"
                                                />
                                                <h1 className="lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Audio
                                                </h1>
                                                <input
                                                    type="checkbox"
                                                    className="accent-[#3A37A6] h-4 w-4"
                                                />
                                                <div
                                                    className="lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Video
                                                </div>
                                            </div>
                                            <div className="flex justify-between gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Include replies
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 pb-1 border-b-[1px] xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Publish new replies
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Include non-respondent steps
                                                    <ToolTip/>
                                                </h1>

                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Non-respondent display
                                                    <ToolTip/>
                                                </h1>
                                            </div>
                                            <div className="flex xxxxl:py-3">
                                                <button
                                                    className={` w-[90px] rounded-l-md h-[35px] xxxxl:w-[180px] xxxxl:p-4 xxxxl:h-[60px] xxxxl:text-[28px] text-[13px] ${
                                                        isBoxToggle1 == "inline"
                                                            ? "bg-[#94A2F2] , text-white"
                                                            : "bg-[#F5F5F5] , text-black"
                                                    }`}
                                                    onClick={() => {
                                                        boxToggle1("inline");
                                                    }}
                                                >
                                                    In-line
                                                </button>
                                                <button
                                                    className={` w-[90px] rounded-r-md h-[35px] xxxxl:w-[180px] xxxxl:p-4 xxxxl:h-[60px] text-[13px] xxxxl:text-[28px] ${
                                                        isBoxToggle1 == "Note"
                                                            ? "bg-[#94A2F2] , text-white"
                                                            : "bg-[#F5F5F5] , text-black"
                                                    }`}
                                                    onClick={() => {
                                                        boxToggle1("Note");
                                                    }}
                                                >
                                                    Note
                                                </button>
                                            </div>
                                            <div className="flex justify-between xxxxl:py-3 gap-2">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Display step title
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Show step selection
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <div className="flex justify-between items-center gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Overlay step titel on tiles
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={false}
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 pb-1 border-b-[1px] xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Auto-playthrough
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Display respondent name
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <div className="flex justify-between items-center gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Respondent name
                                                    <ToolTip/>
                                                </h1>
                                                <input
                                                    type="text"
                                                    placeholder="Ryan J."
                                                    className="bg-[#F5F5F5] placeholder-input-modal  placeholder:text-black text-center xxxxl:text-[24px] xxxxl:h-[45px] outline-none px-2 w-[65px]  rounded h-[35px] text-[13px]"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 border-b-[1px] xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Show submission dates
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Use step titel as overlay text
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <div
                                                className="flex justify-between align-center items-center gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Overlay text colors
                                                    <ToolTip/>
                                                </h1>
                                                <div className="flex gap-2">
                                                    <div
                                                        className="bg-[#94A2F2] h-[30px] w-[30px] xxxxl:w-[50px] xxxxl:h-[50px] rounded-md shadow-md"></div>
                                                    <div
                                                        className="bg-[#FFFFFF] h-[30px] w-[30px] xxxxl:w-[50px] xxxxl:h-[50px] rounded-md shadow-md border-[1px]"></div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Show Overlay colors text button
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <div className="flex justify-between items-center gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Overlay text size
                                                    <ToolTip/>
                                                </h1>
                                                <DynamicDropdown
                                                    mainTitle={"Medium"}
                                                    option1={"Medium"}
                                                    option2={"Small"}
                                                    width="[100px] xxxxl:w-[140px]  xxxxl:h-[50px] xxxxl:text-[24px]"
                                                    text="[12px]"
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Fade in delay
                                                    <ToolTip/>
                                                </h1>
                                                <input
                                                    type="number"
                                                    placeholder="10"
                                                    className="placeholder-input-modal bg-[#F5F5F5] placeholder:text-black xxxxl:text-[24px] xxxxl:w-[50px] xxxxl:h-[50px] text-center outline-none px-2 w-[44px] rounded h-[25px] text-[13px]"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Fade out offset
                                                    <ToolTip/>
                                                </h1>
                                                <input
                                                    type="number"
                                                    placeholder="2"
                                                    className="placeholder-input-modal bg-[#F5F5F5] xxxxl:w-[50px] xxxxl:h-[50px] text-cente placeholder:text-black text-center outline-none px-2 w-[44px] rounded h-[25px] text-[13px]"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Darken video for readability
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <div className="flex justify-between gap-2 xxxxl:py-3">
                                                <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                    Display logo
                                                    <ToolTip/>
                                                </h1>
                                                <ToggleButton
                                                    width="[40px]"
                                                    height="[22px]"
                                                    isActive={true}
                                                />
                                            </div>
                                            <h1 className="flex items-center lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px] xxxxl:py-3">
                                                Logo
                                            </h1>
                                            <div className="flex justify-between lg:gap-3 xxxs:gap-2 xxxxl:py-3">
                                                <DynamicDropdown
                                                    mainTitle={"Candour"}
                                                    option1={"Candour"}
                                                    option2={"N-option"}
                                                    width="[110px] xxxxl:w-[150px]  xxxxl:h-[50px] xxxxl:text-[24px]"
                                                    text="[12px]"
                                                />
                                                <button
                                                    className="bg-[#F5F5F5] w-[50px] xxxxl:w-[70px] xxxxl:h-[50px]  flex justify-center items-center rounded-md h-[35px]">
                                                    <img
                                                        src={Logos.EditBtn}
                                                        alt="Edit Btn"
                                                        className="w-[18px]  xxxxl:w-[36px]"
                                                    />
                                                </button>
                                                <button
                                                    className="bg-[#F5F5F5] w-[50px] xxxxl:w-[70px] xxxxl:h-[50px] flex justify-center items-center rounded-md h-[35px]">
                                                    <img
                                                        src={Logos.AddSquareBlack}
                                                        alt="Add Square"
                                                        className="w-[20px] xxxxl:w-[38px]"
                                                    />
                                                </button>
                                            </div>
                                            <button
                                                className="bg-[#AEBFF2] xxxxl:py-3 xxxxl:text-[30px]   xxxxl:h-[70px] text-white flex justify-center items-center mb-3 gap-3 p-3 rounded-md lg:h-[40px] xxxs:h-[35px] lg:text-[18px] xxxs:text-[16px]">
                                                Done
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* left side */}
                            <div
                                className="border-l-[1px] w-full  border-b-[1px]"
                                style={{
                                    height: "calc(100vh - 150px)",
                                }}
                            >
                                <div className="flex lg:flex-nowrap xxxs:flex-wrap justify-between">
                                    <div
                                        className="flex flex-col  w-full overflow-auto"
                                        style={{
                                            height: "calc(100vh - 160px)",
                                        }}
                                    >
                                        <div
                                            className="flex items-center justify-between border-b-[1px] sticky top-[0%] bg-white  lg:px-4 xxxs:p-2 lg:py-2 xxxs:py-1">
                                            <div
                                                className="flex gap-2 max-xxs:gap-[2px] max-sm:gap-1 pb-[3px] w-[50%] parent "
                                                onMouseOver={() => {
                                                    setConversationModal(true);
                                                }}
                                                onMouseLeave={() => {
                                                    setConversationModal(false);
                                                }}
                                            >
                                                <h1 className="title-size p-2 font-medium">
                                                    Conversation With {details?.firstName}
                                                </h1>
                                                <img
                                                    className="w-[13px] xxxxl:w-[30px] child "
                                                    src={Logos.Arrowdown}
                                                    alt="Arrow Down"
                                                />
                                                {conversationModal && (
                                                    <div
                                                        className="absolute top-10 left-0 flex flex-col gap-3 xxxxl:gap-4 bg-white shadow-sm p-5 max-w-[350px] xxxxl:max-w-[550px] w-full">
                                                        <div className="flex justify-between items-center">
                                                            <h1 className="font-medium  max-xs:text-[10px] xxxxl:text-[18px] max-xxs:text-[8px] ">
                                                                Organization :
                                                            </h1>
                                                            <p className="text-[gray] text-[12px] xxxxl:text-[18px]  max-xs:text-[10px] max-xxs:text-[8px]">
                                                                {details.organization
                                                                    ? details.organization
                                                                    : "---"}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <h1 className="font-medium xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                                                                Email :
                                                            </h1>
                                                            <p className="text-[gray] text-[12px] xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                                                                {details.email ? details.email : "---"}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <h1 className="font-medium xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                                                                Phone :
                                                            </h1>
                                                            <p className="text-[gray] text-[12px] xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                                                                {details.phone ? details.phone : "---"}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <h1 className="font-medium xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                                                                Address :
                                                            </h1>
                                                            <div className="flex flex-col justify-end items-end">
                                                                <p className="text-[gray] text-[12px] xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                                                                    {details.address ? details.address : "---"}
                                                                </p>
                                                                {/* <p className="text-[gray] text-[12px] xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                            NC 28202 United
                            States:
                          </p> */}
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <h1 className="font-medium xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                                                                Donation consent :
                                                            </h1>
                                                            <p className="text-[gray] text-[12px] xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                                                                {details.donation_consent
                                                                    ? details.donation_consent
                                                                    : "---"}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <h1 className="font-medium xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                                                                Seen donation disclosure :
                                                            </h1>
                                                            <p className="text-[gray] text-[12px] xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                                                                {details.donation_disclosure
                                                                    ? details.donation_disclosure
                                                                    : "---"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="">
                                            <div
                                                className={
                                                    !showDropdown1
                                                        ? "hidden"
                                                        : "flex flex-col absolute left-[425px]"
                                                }
                                            >
                                                <div className="bg-[#FFFFFF] w-[360px] shadow-sm p-[10px] rounded-md">
                                                    <div className="flex flex-col gap-3 mt-2">
                                                        {firstPart.map((item) => {
                                                            return (
                                                                <NavDropdownComp
                                                                    content={item.label}
                                                                    data={item.data}
                                                                />
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-start">
                                            {card === "audioplayer" && (
                                                <div>
                                                    <div
                                                        className="flex justify-center items-center mx-auto"
                                                        style={{
                                                            height: "calc(100vh - 380px)",
                                                        }}
                                                    >
                                                        <audio
                                                            src={linkData}
                                                            className="px-5 w-full "
                                                            controls
                                                            autoPlay
                                                        ></audio>
                                                    </div>
                                                </div>
                                            )}
                                            {card === "videoplayer" && (
                                                <div>
                                                    <div
                                                        className="flex justify-center items-center mx-auto"
                                                        style={{
                                                            height: "calc(100vh - 380px)",
                                                        }}
                                                    >
                                                        <video
                                                            src={linkData}
                                                            className="px-5  "
                                                            style={{width: "calc(100vh - 120px)"}}
                                                            controls
                                                            autoPlay
                                                        ></video>
                                                    </div>
                                                </div>
                                            )}
                                            {card === "textplayer" && (
                                                <div>
                                                    <div
                                                        className="flex justify-center items-center mx-auto"
                                                        style={{
                                                            height: "calc(100vh - 380px)",
                                                        }}
                                                    >
                                                        <div className="flex flex-col items-center">
                                                            <div>
                                                                <img src={Logos.CenterBtn} alt="Commas"/>
                                                            </div>
                                                            <div className="p-2 max-sm:p-0  overflow-y-scroll ">
                                                                <p
                                                                    className="text-[14px] break-words text-justify break-all xxxxl:text-[30px] xxxxl:leading-[45px] max-xxs:text-[10px] leading-5 ml-3"
                                                                    style={{wordBreak: "break-word"}}
                                                                >
                                                                    {linkData}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {card == "desktopImg" &&
                                                toggle === false &&
                                                button1 === "desktopImg" && (
                                                    <div
                                                        className="flex justify-center items-center"
                                                        style={{
                                                            height: "calc(100vh - 380px)",
                                                        }}
                                                    >
                                                        <img
                                                            src={Logos.GenericThumbnail}
                                                            alt="Video Yellow Girl"
                                                            style={{
                                                                height: "calc(100vh - 380px)",
                                                            }}
                                                            onClick={() => {
                                                                setCard("videoplayer");
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                            {card == "audio" &&
                                                toggle === false &&
                                                button1 === "desktopImg" && (
                                                    <div>
                                                        <div
                                                            className="flex justify-center items-center"
                                                            style={{
                                                                height: "calc(100vh - 380px)",
                                                            }}
                                                        >
                                                            <img
                                                                src={Logos.CenterAudio}
                                                                alt="Audio Img"
                                                                // className="h-[70vh]"
                                                                onClick={() => {
                                                                    setCard("audioplayer");
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            {card == "text" &&
                                                toggle === false &&
                                                button1 === "desktopImg" && (
                                                    <div>
                                                        <div
                                                            className="flex justify-center items-center"
                                                            style={{
                                                                height: "calc(100vh - 380px)",
                                                            }}
                                                        >
                                                            <img
                                                                src={Logos.ShareTextImg}
                                                                alt="ShareTextImg"
                                                                onClick={() => {
                                                                    setCard("textplayer");
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            {card === "desktopImg" && button1 === "mobileImg" && (
                                                <div>
                                                    <div
                                                        className="flex justify-center items-center"
                                                        style={{
                                                            height: "calc(100vh - 380px)",
                                                        }}
                                                    >
                                                        <img
                                                            src={Logos.YellowVideoMblGirl}
                                                            alt="Mbl Girl"
                                                            className="lg:p-4 xxxs:p-6 "
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {card === "text" && button1 === "mobileImg" && (
                                                <div>
                                                    <div
                                                        className="flex justify-center items-center"
                                                        style={{
                                                            height: "calc(100vh - 380px)",
                                                        }}
                                                    >
                                                        <img
                                                            src={Logos.MblTextImg}
                                                            alt="Mbl Girl"
                                                            className=" lg:p-4 xxxs:p-6 "
                                                            style={{
                                                                height: "calc(100vh - 380px)",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                            {card === "audio" && button1 === "mobileImg" && (
                                                <div>
                                                    <div
                                                        className="flex justify-center items-center"
                                                        style={{
                                                            height: "calc(100vh - 380px)",
                                                        }}
                                                    >
                                                        <img
                                                            src={Logos.MblAudioImg}
                                                            alt="Mbl Girl"
                                                            className=" lg:p-4 xxxs:p-6 "
                                                            style={{
                                                                height: "calc(100vh - 380px)",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <div
                                                className="flex  cursor-pointer  items-center overflow-x-auto ml-3 mt-10">
                                                {convoData?.content?.map((item, index) => {
                                                    if (item.type === "audio") {
                                                        return (
                                                            <img
                                                                src={Logos.CardImg3}
                                                                alt="Card Img 3"
                                                                className="w-full max-w-[100px]"
                                                                onClick={() => {
                                                                    cardHandler("audio", item.content);
                                                                }}
                                                            />
                                                        );
                                                    } else if (item.type === "video") {
                                                        return (
                                                            <img
                                                                src={Logos.VideoThumbnailSmall}
                                                                alt="Card Img 1"
                                                                className=" w-full max-w-[68px] mx-2 mb-4"
                                                                onClick={() => {
                                                                    cardHandler("desktopImg", item.content);
                                                                }}
                                                            />
                                                        );
                                                    } else if (item.type === "text") {
                                                        return (
                                                            <img
                                                                src={Logos.CardImg2}
                                                                alt="Card Img 2"
                                                                className="w-full max-w-[100px]"
                                                                onClick={() => {
                                                                    cardHandler("textplayer", item.content);
                                                                }}
                                                            />
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            !showDropdown3
                                                ? "hidden"
                                                :
                                                "flex flex-col w-[430px] xxxxl:w-[620px] flex-auto xxxxl:px-4 max-lg:mt-6  "
                                        }
                                        style={{
                                            height: "calc(100vh - 140px)",
                                        }}
                                    >
                                        <div className="border-[1px] flex flex-col gap-4 overflow-auto ">
                                            <h1 className="font-medium xxxs:text-[13px] lg:text-[16px] sticky top-[0%] bg-white border-b-[1px] p-2 text-[#262626] xxxxl:text-[28px]">
                                                Step 1
                                            </h1>
                                            <div className="flex flex-col justify-between h-full">
                                                <div>
                                                    <div className="flex flex-col pt-2 px-2 gap-4 xxxxl:py-3">
                                                        <div className="flex justify-between">
                                                            <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                                Show/hide
                                                                <ToolTip/>
                                                            </h1>

                                                            <ToggleButton
                                                                width="[40px]"
                                                                height="[22px]"
                                                                isActive={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-4 px-2 py-1 xxxxl:py-3">
                                                        <div className="flex justify-between gap-2">
                                                            <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                                Step name
                                                                <ToolTip/>
                                                            </h1>
                                                            <ToggleButton
                                                                width="[40px]"
                                                                height="[22px]"
                                                                isActive={true}
                                                            />
                                                        </div>
                                                        <InputComp
                                                            type="text"
                                                            size="medium"
                                                            placeholder="What is your take on the eco..."
                                                            isButton={true}
                                                            className="bg-[#F5F5F5] h-[35px] xxxxl:h-[60px] xxxxl:text-[24px] p-2 lg:text-[13px] xxxs:text-[12px]"
                                                            value={searchValue}
                                                            onChange={(e) => {
                                                                setSearchValue(e.target.value);
                                                            }}
                                                        />
                                                        <div className="flex justify-between gap-2 xxxxl:py-3">
                                                            <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                                Custome text overlay
                                                                <ToolTip/>
                                                            </h1>
                                                            <ToggleButton
                                                                width="[40px]"
                                                                height="[22px]"
                                                                isActive={true}
                                                            />
                                                        </div>
                                                        <InputComp
                                                            type="text"
                                                            size="medium"
                                                            placeholder="What is your take on the economy ?"
                                                            isButton={true}
                                                            className="bg-[#F5F5F5] h-[60px] p-2 lg:text-[13px] xxxs:text-[12px]"
                                                            value={searchTextValue}
                                                            onChange={(e) => {
                                                                setSearchTextValue(e.target.value);
                                                            }}
                                                        />
                                                        <div
                                                            className="flex justify-between align-center gap-2 xxxxl:py-3">
                                                            <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                                Overlay text colors
                                                                <ToolTip/>
                                                            </h1>
                                                            <div className="flex gap-2">
                                                                <div
                                                                    className="bg-[#94A2F2] h-[30px] xxxxl:h-[50px] xxxxl:w-[50px] w-[30px] rounded-md shadow-md"></div>
                                                                <div
                                                                    className="bg-[#FFFFFF] h-[30px] xxxxl:h-[50px] xxxxl:w-[50px]  w-[30px] rounded-md shadow-md border-[1px]"></div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between gap-2 xxxxl:py-3">
                                                            <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                                Show Overlay colors text button
                                                                <ToolTip/>
                                                            </h1>
                                                            <ToggleButton
                                                                width="[40px]"
                                                                height="[22px]"
                                                                isActive={true}
                                                            />
                                                        </div>
                                                        <div
                                                            className="flex justify-between items-center gap-2 xxxxl:py-3">
                                                            <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                                Overlay text size
                                                                <ToolTip/>
                                                            </h1>
                                                            <DynamicDropdown
                                                                mainTitle={"Medium"}
                                                                option1={"Medium"}
                                                                option2={"Small"}
                                                                width="[100px] xxxxl:w-[140px]  xxxxl:h-[50px] xxxxl:text-[24px]"
                                                                text="[12px]"
                                                            />
                                                        </div>
                                                        <div className="flex justify-between gap-2 xxxxl:py-3">
                                                            <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                                Fade in delay
                                                                <ToolTip/>
                                                            </h1>
                                                            <input
                                                                type="number"
                                                                placeholder="10"
                                                                className="placeholder-input-modal bg-[#F5F5F5] placeholder:text-black  text-center outline-none px-2 w-[44px] rounded h-[25px] text-[13px]"
                                                                name=""
                                                                id=""
                                                            />
                                                        </div>
                                                        <div className="flex justify-between gap-2 xxxxl:py-3">
                                                            <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                                Fade out offset
                                                                <ToolTip/>
                                                            </h1>
                                                            <input
                                                                type="number"
                                                                placeholder="2"
                                                                className="placeholder-input-modal bg-[#F5F5F5] placeholder:text-black  text-center outline-none px-2 w-[44px] rounded h-[25px] text-[13px]"
                                                                name=""
                                                                id=""
                                                            />
                                                        </div>
                                                        <div className="flex justify-between gap-2 xxxxl:py-3">
                                                            <h1 className="flex items-center gap-2 lg:text-[14px] xxxs:text-[12px] text-[#262626] xxxxl:text-[24px]">
                                                                Darken video for readability
                                                                <ToolTip/>
                                                            </h1>
                                                            <ToggleButton
                                                                width="[40px]"
                                                                height="[22px]"
                                                                isActive={true}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    {" "}
                                                    <button
                                                        className="bg-[#AEBFF2] w-full xxxxl:h-[80px] xxxxl:text-[30px] text-white flex justify-center items-center gap-3 p-3 rounded-md lg:h-[40px] xxxs:h-[35px] lg:text-[18px] xxxs:text-[16px]">
                                                        Done
                                                    </button>
                                                </div>
                                                {" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ShareConversation;
