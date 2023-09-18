import React, {useEffect, useRef} from "react";
import {Logos} from "../../assets";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Button from "../Buttons/Buttons";
import {useGlobalInfo} from "../../contexts/GlobalContext";
import {useUploadConversationFiles} from "../../hooks/useConversation";
import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
import {useStoreConversation} from "../../store/conversation";
import useStore from "../../store/video";

const AddVideo = () => {

    const {mutate, isLoading, isError} = useUploadConversationFiles();
    const setFileData = useStoreConversation((state) => state.setFileData);
    const uploadData = useRef(null);
    const fileData = useRef(null);
    const stepId = useStore(state => state.stepId)
    const handleFileUpload = (event) => {

        setLoading(true)
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("type", "conversation");
        fileData.current = formData;
        handleUpload();
    };
    const handleUpload = async () => {
        setLoading(true);
        if (fileData.current) {
            mutate(fileData.current, {
                onSuccess: (data) => {
                    setFileData(data.data);
                    navigate(`/approve/video`);
                    setLoading(false);
                },
                onError: (error) => {
                    showError();
                    setLoading(false);
                },
            });
        }

        // setLoading(false);
    };
    const navigate = useNavigate();

    function VideoHandler() {
        navigate("/AddNewStep");
    }

    const {
        videoType,
        setLoading,
        setVideoType,
        loading
    } = useGlobalInfo();
    useEffect(() => {
        setVideoType('video');
    }, [])
    return (
        <> {loading ? <GlobalLoaderCopy/> :
            <>
                <div className="flex justify-between items-center p-2">
                    <div className="flex items-center gap-1">
                        <img
                            src={Logos.ArrowLeft}
                            alt=""
                            className="cursor-pointer w-[18px]"
                            onClick={() => {
                                navigate(`/AddNewStep/${stepId}`)
                            }}
                        />

                        <h1 className="title-size font-[500] leading-[30px] text-[#262626]">
                            Reply Add Video
                        </h1>
                    </div>
                    <Link to="/conversation">
                        <img
                            src={Logos.Rectangule}
                            alt=""
                            className="w-[26px]"
                        />
                    </Link>
                </div>

                <div
                    className="w-full border-[1px] border-[#EBEBEB] border-solid mt-2 p-5 shadow-md flex flex-col"
                    style={{height: "calc(100vh - 170px)"}}
                >
                    <div className="  w-full m-auto flex flex-col justify-center gap-3">
                        <p className=" text-[20px] max-sm:text-[16px] font-[400] leading-[28px] text-[#262626] text-center">
                            How would you like to Capture this
                            video?
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">

                            <div className="flex flex-col items-center justify-center" onClick={() => {

                                setTimeout(() => {
                                    navigate(`/reply-video-preview/${videoType}`);
                                }, 1000)
                            }}>

                                <Button
                                    img={Logos.Video}
                                    class="max-xs:w-[40px] w-[50px] p-2 "
                                    iconWidth="max-xs:w-[20px] w-[45px]"
                                ></Button>

                                <p className="text-[#94A2F2] max-sm:text-[10px]">
                                    Record
                                </p>
                            </div>

                            <Link to="#">
                                <div className="flex flex-col items-center justify-center" onClick={() => {
                                    uploadData.current.click();

                                }}>

                                    <Button
                                        img={Logos.CloudPluswhite}
                                        class="max-xs:w-[40px] w-[50px] p-2 "
                                        iconWidth="max-xs:w-[20px] w-[45px]"
                                    ></Button>

                                    <p className="text-[#94A2F2] max-sm:text-[10px]">
                                        Upload...
                                    </p>
                                </div>
                            </Link>
                            <input
                                type="file"
                                accept="audio/*, video/*"
                                ref={uploadData}
                                style={{display: "none"}}
                                onChange={handleFileUpload}
                            />
                            <Link to="/AddLibrary">
                                <div className="flex flex-col items-center justify-center">

                                    <Button
                                        img={Logos.FolderAddWhite}
                                        class="max-xs:w-[40px] w-[50px] p-2 "
                                        iconWidth="max-xs:w-[20px] w-[45px]"
                                    ></Button>

                                    <p className="text-[#94A2F2] max-sm:text-[10px]">
                                        Library
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </>}</>
    );
};

export default AddVideo;
