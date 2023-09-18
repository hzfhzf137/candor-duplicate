import React, {useEffect, useState} from "react";
import {Logos} from "../../assets";
import {Link, useNavigate} from "react-router-dom";
import QuickReply from "../Modal/AudioPreview/QuickReply";
import VideoModal from "../Modals/VideoPreviewModals/VideoModal";
import TextArea from "antd/es/input/TextArea";
import {useMutation} from "react-query";
import {sendText} from "../../hooks/useConversation";
import {useGlobalInfo} from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";

const data = [
    {
        title: "Education follow-up",
    },
    {
        title: "Donation thank you",
    },
    {
        title: "Immigration response",
    },
    {
        title: "Crime",
    },
    {
        title: "Tax policy reply",
    },
];
const ReplyTextPreview = () => {
    const [openQuickReply, setOpenQuickReply] = useState(false);
    const [openMicModal, setOpenMicModal] = useState(false);
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const {loading, setLoading} = useGlobalInfo()
    // const id =localStorage.getItem('conversationId');
    const SendMsg = useMutation(sendText);

    async function onClickHandler() {
        setLoading(true)
        SendMsg.mutate(text, {
            onSuccess: () => {
                navigate('/conversation');
                setLoading(false)
            }

        })
        // setLoading(false)
    }

    useEffect(() => {
        setLoading(false)
    }, [SendMsg.isSuccess == true])
    return (
        <>
            {loading ? <GlobalLoaderCopy/> : <>
                <VideoModal
                    open={openMicModal}
                    setOpen={setOpenMicModal}
                    width={430}
                    title="Save to library"
                    label="save"
                />
                <QuickReply
                    open={openQuickReply}
                    data={data}
                    setOpen={setOpenQuickReply}
                    text={
                        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '
                    }
                    width={700}
                    title="Add  a quick reply"
                    label="Quick reply"
                />
                <div>
                    <div
                        className={`bg-contain w-full relative  border-[1px] border-[#EBEBEB] border-solid mt-2 p-5 rounded-md shadow-md flex flex-col`}
                        style={{height: "calc(100vh - 100px)"}}
                    >
                        <div className="flex justify-between  text-[gray] h-[100vh]">
                            <TextArea
                                placeholder="Type here..."
                                size="large"
                                style={{resize: "none"}}
                                onChange={(e) => {
                                    setText(e.target.value);
                                }}
                                className="placeholder:text-[#A0A0A0] resize-none w-[100vw] "
                                bordered={false}
                            />

                            <div className="flex gap-2 absolute right-[20px] top-[20px]">
                                <img
                                    src={Logos.AddFolder}
                                    alt=""
                                    className="icon-size cursor-pointer "
                                    onClick={() => {
                                        setOpenQuickReply(true);
                                    }}
                                />
                                <img
                                    src={Logos.SaveIconVideoPreview}
                                    alt=""
                                    className="icon-size cursor-pointer "
                                    onClick={() => {
                                        setOpenMicModal(true);
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className="flex flex-col justify-end items-center bottom-[20px] xl:left-[45%] max-xl:left-[45%] max-sm:left-[35%] gap-3 absolute">
                            <div className="flex items-center justify-center"></div>
                            <div className="flex justify-center items-end ">
                                <div className="flex justify-center items-center gap-1 cursor-pointer">
                                    <Link to="">
                                        <img
                                            src={Logos.NextArrowTextPreview}
                                            alt=""
                                            onClick={() => {
                                                if (text != "") {
                                                    onClickHandler()
                                                }
                                            }}
                                            className="w-[70px] xxxxl:w-[170px]"

                                        />
                                    </Link>
                                    <Link to="/reply">
                                        <img
                                            src={Logos.CrossIconTextPreview}
                                            alt=""
                                            className="w-[30px] xxxxl:w-[60px]"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </>

    );
};

export default ReplyTextPreview;
