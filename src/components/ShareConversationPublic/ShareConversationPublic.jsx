import React, {useEffect, useRef, useState,} from "react";
import {Logos} from "../../assets";
import DynamicDropdown from "../DynamicDropdown/DynamicDropdown";
import ToolTip from "../ToolTip/ToolTip";
import ToggleButton from "../ToggleButton/ToggleButton";
import InputComp from "../InputComp/InputComp";

// import { Dialog } from 'primereact/dialog';
import {Modal} from "antd";
import {useMutation} from "react-query";
import {conversationSecurity, shareConversation,} from "../../hooks/useConversation";
import {useGlobalInfo} from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";


const ShareConversationPublic = () => {
    const [linkData, setLinkData] = useState();
    const {loading, setLoading} = useGlobalInfo();

    const [button1, setButton1] =
        useState("desktopImg");
    const [
        conversationModal,
        setConversationModal,
    ] = useState(false);
    const [searchValue, setSearchValue] =
        useState("");
    const [password, setPassword] = useState("");
    const [searchTextValue, setSearchTextValue] =
        useState("");
    const [showDropdown1, setShowDropdown1] =
        useState(false);
    const [showDropdown3, setShowDropdown3] =
        useState(false);
    const [card, setCard] = useState("img");

    const [toggle, setToggle] = useState(false);
    const [showPassword, setShowPassword] =
        useState(false);
    const toast = useRef(null);
    const h1Ref = useRef(null);
    const [convoData, setConvoData] = useState();

    function cardHandler(a) {
        setCard(a);
    }

    function copyHandler() {
        if (h1Ref.current) {
            const text = h1Ref.current.innerText;
            navigator.clipboard.writeText(text)
        }
        toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Copied successfully",
            life: 3000,
        });
    }

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
    const {mutate} = useMutation(
        conversationSecurity
    );
    const {mutate: share} = useMutation(
        shareConversation
    );
    // const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(true);

    const [error, setError] = useState(false)

    // const authentication = passwordMatching()
    // const { mutate: lock } =
    //   useMutation(passwordUnlock);
    const handleOk = () => {
        setLoading(true)
        const payload = {
            password: password,
            id: conversationId,
        };


        mutate(payload, {
            onSuccess: (data) => {
                if (data?.data?.data != null) {
                    setOpen(false);
                    setConvoData(data?.data?.data);
                    setLoading(false)
                } else {
                    setError(true)
                    setLoading(false)
                }
            },
            onError: (error) => {
                showError();
                setError(true)
                setLoading(false)
            },
        });
    };
    const [conversationId, setConversationId] =
        useState();

    function cardHandler(a, link) {
        setCard(a);
        setLinkData(link);
    }

    useEffect(() => {
        setLoading(true)
        const currentUrl = window.location.href;
        const urlParams = new URLSearchParams(
            new URL(currentUrl).search
        );
        const id = urlParams.get("id");
        const payload = {
            id: id,
        }
        setConversationId(id);
        mutate(payload, {
            onSuccess: (data) => {
                if (data.data.data.content) {
                    setOpen(false);
                    setConvoData(data?.data?.data);
                    setLoading(false)
                } else if (
                    !data.data.data.content
                ) {
                    setOpen(true);
                    setLoading(false)
                }
            },
            onError: (error) => {
                showError();
                setLoading(false)
            },
        });
    }, []);

    const details = JSON.parse(
        localStorage.getItem("receiverId")
    );
    return (
        <>
            {loading ? <GlobalLoaderCopy/> : <>
                {/* <Toast ref={toast} /> */}
                {open ? (
                    <Modal
                        open={open}
                        title="Enter Password"
                        centered
                        closeIcon={true}
                        onOk={handleOk}
                        footer={[
                            <button
                                disabled={password === ""}
                                className=" text-[16px] leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[100px] self-center "
                                onClick={handleOk}
                            >
                                Apply
                            </button>
                        ]}
                    >
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleOk()
                        }}>
                            <div className="flex flex-col relative mb-[1rem]">
                                <input
                                    type={
                                        !showPassword
                                            ? "password"
                                            : "text"
                                    }
                                    className="border-[#EBEBEB]  border-[1px] border-solid shadow-sm rounded-[8px] h-[42px] mt-1 pl-14 placeholder-input-modal"
                                    placeholder="Type Your Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                                <img
                                    src={Logos.PasswordIcon}
                                    height={24}
                                    width={24}
                                    className="absolute bottom-2 left-3"
                                />
                                {!showPassword ? (
                                    <img
                                        src={Logos.Eye}
                                        height={24}
                                        width={24}
                                        className="absolute bottom-2 right-3"
                                        onClick={() => {
                                            setShowPassword(
                                                !showPassword
                                            );
                                        }}
                                    />
                                ) : (
                                    <img
                                        src={Logos.EyeBlue}
                                        height={24}
                                        width={24}
                                        className="absolute bottom-2 right-3"
                                        onClick={() => {
                                            setShowPassword(
                                                !showPassword
                                            );
                                        }}
                                    />
                                )}
                            </div>
                            {
                                error && <div>
                                    <p className="text-red-600">Wrong Password! Please Enter Correct Password</p>
                                </div>
                            }

                        </form>
                    </Modal>
                ) : (
                    <div
                        className="flex lg:flex-nowrap  xxxs:flex-wrap justify-between w-full border-[1px] shadow-md rounded-md ">


                        {/* left side */}
                        <div
                            className="border-l-[1px] w-full  border-b-[1px]"
                            style={{
                                height: "calc(100vh - 10px)",
                            }}
                        >
                            <div className="flex lg:flex-nowrap xxxs:flex-wrap justify-between">
                                <div
                                    className="flex flex-col  w-full overflow-auto"
                                    style={{
                                        height: "calc(100vh - 50px)",
                                    }}
                                >

                                    <div className="">
                                        <div
                                            className={
                                                !showDropdown1
                                                    ? "hidden"
                                                    : "flex flex-col absolute left-[425px]"
                                            }
                                        >

                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start">
                                        {card === "audioplayer" && (
                                            <div>
                                                <div
                                                    className="flex justify-center items-center mx-auto"
                                                    style={{
                                                        height:
                                                            "calc(100vh - 200px)",
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
                                                        height:
                                                            "calc(100vh - 200px)",
                                                    }}
                                                >
                                                    <video
                                                        src={linkData}
                                                        className="px-5  "
                                                        style={{width: "calc(100vh - 50px)"}}
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
                                                        height:
                                                            "calc(100vh - 200px)",
                                                    }}
                                                >
                                                    <div className="flex flex-col items-center">
                                                        <div>
                                                            <img
                                                                src={Logos.CenterBtn}
                                                                alt="Commas"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h1 className="mt-5">
                                                                {linkData}
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {card == "desktopImg" &&
                                            toggle === false &&
                                            (
                                                <div
                                                    className="flex justify-center items-center"
                                                    style={{
                                                        height:
                                                            "calc(100vh - 200px)",
                                                    }}
                                                >
                                                    <img
                                                        src={
                                                            Logos.GenericThumbnail
                                                        }
                                                        alt="Video Yellow Girl"
                                                        style={{
                                                            height:
                                                                "calc(100vh - 200px)",
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
                                                            height:
                                                                "calc(100vh - 200px)",
                                                        }}
                                                    >
                                                        <img
                                                            src={Logos.CenterAudio}
                                                            alt="Audio Img"
                                                            // className="h-[70vh]"
                                                            onClick={() => {
                                                                setCard(
                                                                    "audioplayer"
                                                                );
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
                                                            height:
                                                                "calc(100vh - 200px)",
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
                                        {card === "desktopImg" &&
                                            button1 === "mobileImg" && (
                                                <div>
                                                    <div
                                                        className="flex justify-center items-center"
                                                        style={{
                                                            height:
                                                                "calc(100vh - 200px)",
                                                        }}
                                                    >
                                                        <img
                                                            src={
                                                                Logos.YellowVideoMblGirl
                                                            }
                                                            alt="Mbl Girl"
                                                            className="lg:p-4 xxxs:p-6 "
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                        {card === "text" &&
                                            button1 === "mobileImg" && (
                                                <div>
                                                    <div
                                                        className="flex justify-center items-center"
                                                        style={{
                                                            height:
                                                                "calc(100vh - 200px)",
                                                        }}
                                                    >
                                                        <img
                                                            src={Logos.MblTextImg}
                                                            alt="Mbl Girl"
                                                            className=" lg:p-4 xxxs:p-6 "
                                                            style={{
                                                                height:
                                                                    "calc(100vh - 200px)",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        {card === "audio" &&
                                            button1 === "mobileImg" && (
                                                <div>
                                                    <div
                                                        className="flex justify-center items-center"
                                                        style={{
                                                            height:
                                                                "calc(100vh - 200px)",
                                                        }}
                                                    >
                                                        <img
                                                            src={Logos.MblAudioImg}
                                                            alt="Mbl Girl"
                                                            className=" lg:p-4 xxxs:p-6 "
                                                            style={{
                                                                height:
                                                                    "calc(100vh - 200px)",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                        <div
                                            className="flex  cursor-pointer  items-center overflow-x-auto ml-3 z-50 mt-10">
                                            {convoData?.content?.map(
                                                (item, index) => {
                                                    if (item.type === "audio") {
                                                        return (
                                                            <img
                                                                src={Logos.CardImg3}
                                                                alt="Card Img 3"
                                                                className="w-full max-w-[100px]"
                                                                onClick={() => {
                                                                    cardHandler(
                                                                        "audio",
                                                                        item.content
                                                                    );
                                                                }}
                                                            />
                                                        );
                                                    } else if (
                                                        item.type === "video"
                                                    ) {
                                                        return (
                                                            <img
                                                                src={Logos.VideoThumbnailSmall}
                                                                alt="Card Img 1"
                                                                className=" w-full max-w-[68px] mx-2 mb-4"
                                                                onClick={() => {
                                                                    cardHandler(
                                                                        "desktopImg",
                                                                        item.content
                                                                    );
                                                                }}
                                                            />
                                                        );
                                                    } else if (
                                                        item.type === "text"
                                                    ) {
                                                        return (
                                                            <img
                                                                src={Logos.CardImg2}
                                                                alt="Card Img 2"
                                                                className="w-full max-w-[100px]"
                                                                onClick={() => {
                                                                    cardHandler(
                                                                        "textplayer",
                                                                        item.content
                                                                    );
                                                                }}
                                                            />
                                                        );
                                                    }
                                                }
                                            )}
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
                                                            setSearchValue(
                                                                e.target.value
                                                            );
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
                                                            setSearchTextValue(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                    <div className="flex justify-between align-center gap-2 xxxxl:py-3">
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
                                                            Show Overlay colors text
                                                            button
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
                                                            Darken video for
                                                            readability
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

                )}
            </>}
        </>

    );
};

export default ShareConversationPublic;
