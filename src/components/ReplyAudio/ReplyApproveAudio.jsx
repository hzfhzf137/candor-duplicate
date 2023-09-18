import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Logos} from "../../assets";
import VideoModal from "../Modals/VideoPreviewModals/VideoModal";
import {useNavigate} from "react-router";
import {Toast} from "primereact/toast";
import {useStoreConversation} from "../../store/conversation";
import {sendFileMessage} from "../../hooks/useConversation";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
import {useGlobalInfo} from "../../contexts/GlobalContext";

const ReplyApproveAudio = () => {
    const [openMicModal, setOpenMicModal] = useState(false);
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/audio-play");
    }

    const {loading, setLoading} = useGlobalInfo()
    const getFileData = useStoreConversation((state) => state.fileData);
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const toast = useRef("");
    // const showSuccess = () => {
    //   toast.current.show({
    //     severity: "success",
    //     summary: "Success",
    //     detail: "File uploaded successfully",
    //     life: 3000,
    //   });
    // };

    const sendMessage = () => {
        setLoading(true)
        // console.log("Sending Message");
        // console.log(getFileData);
        const payload = getFileData;
        const data = sendFileMessage(payload);
        if (data) {
            navigate("/conversation");
            setLoading(false)
        }
    };
    useEffect(() => {
        setLoading(true)
        // showSuccess();
        setTimeout(() => {
            setIsLoading(true);
            setLoading(false)
        }, 3000);
    }, []);

    return (
        <>
            {loading ? <GlobalLoaderCopy/> : <div>
                <VideoModal
                    open={openMicModal}
                    setOpen={setOpenMicModal}
                    width={500}
                    title="Save to library"
                    label="save"
                />
                {isLoading && (
                    <div>
                        <div className="flex justify-between items-center p-2">
                            <div className="flex items-center gap-2">
                                <img
                                    src={Logos.ArrowLeft}
                                    alt=""
                                    className="cursor-pointer w-[20px] xxxxl:w-[30px]"
                                    onClick={() => {
                                        VideoHandler();
                                    }}
                                />
                                <h1 className=" font-[500] leading-[30px] text-[#262626] title-size">
                                    Audio Recording
                                </h1>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <Link to="#">
                                    <img
                                        src={Logos.Upload}
                                        alt=""
                                        className="w-[26px] xxxxl:w-[50px]"
                                    />
                                </Link>
                                <Link to="#">
                                    <img
                                        src={Logos.SaveIconVideoPreview}
                                        alt=""
                                        className="w-[26px] xxxxl:w-[50px]"
                                        onClick={() => {
                                            setOpenMicModal(true);
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div
                            className={` bg-contain w-full  border-[1px] border-[#EBEBEB] border-solid mt-2 p-5 rounded-md shadow-md flex flex-col`}
                            style={{height: "calc(100vh - 150px)"}}
                        >
                            <div className="flex flex-col items-center justify-center h-[100vh] gap-8 ">
                                <img src={Logos.AudioPreview} alt="" className="xxxxl:w-[40%]"/>

                                <audio autoPlay="false" controls src={getFileData.fullPathUrl}></audio>
                            </div>
                            <div
                                className="flex flex-col justify-end items-center gap-3 xxxxl:gap-6 "
                                style={{height: "calc(100vh - 150px)"}}
                            >
                                <div className="flex items-center justify-center">
                                    <h1 className="text-[#A0A0A0] xxxxl:text-[28px] xxxxl:font-thin xxxxl:leading-[28px]">
                                        Looks good ?
                                    </h1>
                                </div>
                                <div className="flex justify-center items-end ">
                                    <div className="flex items-center gap-4 xxxxl:gap-8 cursor-pointer">
                                        {/* <Link to="/conversation"> */}
                                        <img
                                            src={Logos.ApproveYes}
                                            alt=""
                                            className="w-[50px] xxxxl:w-[130px]"
                                            onClick={() => sendMessage()}
                                        />
                                        {/* </Link> */}
                                        <Link to="/reply-audio-preview">
                                            <img
                                                src={Logos.ApproveNo}
                                                alt=""
                                                className="w-[50px] xxxxl:w-[130px]"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Toast ref={toast}/>
                    </div>
                )}
            </div>}
        </>
    );
};

export default ReplyApproveAudio;
