import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Logos } from "../../assets";
import VideoModal from "../Modals/VideoPreviewModals/VideoModal";
import { useNavigate } from "react-router";
import { Toast } from "primereact/toast";
import { useStoreConversation } from "../../store/conversation";
import GlobalLoader from "../GlobalLoader/GlobalLoader";
import { useStore } from "./../../store/auth";
import playIcon from "../../assets/Images/playicon.png";
import { sendFileMessage } from "../../hooks/useConversation";
import { useGlobalInfo } from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { updateStep } from "../../hooks/useVideo";

const ApproveReplyVideoPreview = () => {
  const [openMicModal, setOpenMicModal] = useState(false);
  const { loading, setLoading, stepId } = useGlobalInfo();
  const navigate = useNavigate();

  function VideoHandler() {
    type == "conversation"
      ? navigate(`/reply-video-preview/${type}`)
      : navigate(`/addVideo`);
  }

  const { type } = useParams();
  // USAMA Code start --- Displaying Toast on file uploads
  const storeIsLoading = useStore((state) => state.isLoading);

  const getFileData = useStoreConversation((state) => state.fileData);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [playBgVideo, setPlayBgVideo] = useState(false);
  let uploadedVideo;
  const toast = useRef("");
  const addvideo = useMutation(updateStep, {
    onSuccess: (data) => {
      navigate(`/AddNewStep/${stepId}`);
     
    },
  });
  const addVideo = async () => {
    setLoading(true);
    const payload = { content: getFileData?.fullPathUrl ,lowPreviewThumbnail:getFileData?.thumbnailUrl1, highPreviewThumbnail:getFileData?.thumbnailUrl2};
    addvideo.mutate({ payload: payload, id: stepId }, {});
    setLoading(false);
  };
  const sendMessage = () => {
    // console.log("Sending Message");
    // console.log(getFileData);
    const payload = getFileData;
    const data = sendFileMessage(payload);
    if (data) {
      navigate("/conversation");
    }
  };

  useEffect(() => {
    setLoading(true);
    // storeIsLoading(true);
    if (getFileData.thumbnailUrl2) {
      setThumbnailUrl(getFileData.thumbnailUrl2);
    }
    setTimeout(() => {
      // storeIsLoading(false);
      setIsLoading(true);
      setLoading(false);
    }, 1000);
  }, [getFileData.thumbnailUrl2]);

  function playVideo() {
    // alert("click on video");
    setPlayBgVideo(true);
  }

  // USAMA Code Ends --- Displaying Toast on file uploads

  return (
    <>
      {loading ? (
        <GlobalLoaderCopy />
      ) : (
        <div>
          {isLoading && (
            <div>
              <VideoModal
                open={openMicModal}
                setOpen={setOpenMicModal}
                width={600}
                title="Save to library"
                label="save"
              />
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

                  <h1 className=" text-[18px] font-[500] leading-[30px] text-[#262626] title-size ">
                    Video Preview
                  </h1>
                </div>
                <div className="flex items-center justify-center gap-4">
                  {/* <Link to="#">
                <img src={Logos.Upload} alt="" className="icon-size" />
              </Link> */}
                  <Link to="#">
                    <img
                      src={Logos.SaveIconVideoPreview}
                      alt=""
                      className="icon-size"
                      onClick={() => {
                        setOpenMicModal(true);
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div className="relative bg-contain w-full h-full border-[1px] border-[#EBEBEB] border-solid mt-2 p-5 shadow-md flex flex-col">
                {!playBgVideo && (
                  <img
                    className="w-full h-full absolute inset-0 object-contain"
                    src={getFileData.thumbnailUrl2}
                    alt="Thumbnail"
                  />
                )}

                {playBgVideo && (
                  <div className="your-div w-full h-full absolute inset-0 object-contain">
                    <video
                      src={getFileData.fullPathUrl}
                      autoPlay
                      className="live-player w-[100vw] h-full"
                      style={{ height: "600px" }}
                      controls
                    ></video>
                  </div>
                )}

                {!playBgVideo && (
                  <img
                    className="playIcon"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%)",
                      cursor: "pointer",
                      zIndex: "110",
                    }}
                    onClick={() => {
                      playVideo();
                    }}
                    src={playIcon}
                    height="100px"
                    width="100px"
                  />
                )}
                <div className="pl-8 relative z-10">
                  {type == "conversation" && (
                    <h1 className="text-[16px] font-[400] leading-[22px] text-white py-2 xxxxl:text-[28px] xxxxl:leading-[38px]">
                      Replying to the conversation...
                    </h1>
                  )}
                  <h1 className="text-[20px] font-[500] leading-[28px] text-white py-1 xxxxl:text-[32px] xxxxl:leading-[38px]">
                    {/* Ryan Jones */}
                  </h1>
                  <p className="sm:text-[16px] font-[400] leading-[22px] text-white text-[14px] xxxxl:text-[26px] xxxxl:leading-[28px]">
                    {/* ryanjones@example.com */}
                  </p>
                </div>
                <div
                  className="flex flex-col justify-end items-center gap-3 xxxxl:gap-6 relative z-10"
                  style={{ height: "calc(100vh - 200px)" }}
                >
                  <div className="flex items-center justify-center">
                    <h1
                      className="text-white xxxxl:font-thin xxxxl:leading-[28px]"
                      style={{ fontSize: "calc(0.7rem + 0.2vw)" }}
                    >
                      Looks good?
                    </h1>
                  </div>
                  <div className="flex justify-center items-end">
                    <div className="flex items-center gap-5 cursor-pointer">
                      {/* <Link to="/conversation"> */}
                      <img
                        src={Logos.ApproveYes}
                        alt=""
                        className=""
                        style={{ width: "calc(2.5rem + 1vw)" }}
                        onClick={() => {
                          if (type == "conversation") {
                            sendMessage();
                          } else if (type == "video") {
                            addVideo();
                          }
                        }}
                      />
                      {/* </Link> */}
                      <Link
                        to={
                          type == "conversation"
                            ? `/reply-video-preview/${type}`
                            : `/addVideo`
                        }
                      >
                        <img
                          src={Logos.ApproveNo}
                          alt=""
                          className=""
                          style={{ width: "calc(2.5rem + 1vw)" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Toast ref={toast} />
            </div>
          )}

          {/* {!isLoading && <GlobalLoader />} */}
        </div>
      )}
    </>
  );
};

export default ApproveReplyVideoPreview;
