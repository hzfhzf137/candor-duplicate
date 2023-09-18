import React from "react";
import {Logos} from "../../assets";
import {RotatingLines,} from "react-loader-spinner";

const InboxComp = (props) => {
    const id = localStorage.getItem(
        "conversationId"
    );
    if (!props.data || !id) {
        return (
            <div className="flex items-center justify-center w-full h-full  ">
                {id != 'null' && !props.data && id != "" && id != null ? <RotatingLines
                    strokeColor="#9FAFF2"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                /> : <>No Chat Selected</>}
            </div>
        ); // or a loading spinner component
    }
    let userPic = localStorage.getItem("userPic");
    if (userPic == "null" || userPic == null) {
        localStorage.setItem("userPic", "");
    }
    if (props.id && id) {
        return (
            <div>
                {props?.data?.map((item, index) => {

                    const createdAt = new Date(item.createdAt);
                    const time = createdAt.toLocaleTimeString([], {timeStyle: "short"});
                    const date =
                        createdAt.toLocaleDateString();
                    return (
                        <>
                            {item.sentByMe === false && (
                                <div
                                    className={`mt-5 mb-2 rounded-md p-1 bg-[${props.msgIndex == index
                                        ? "#E7EEF9"
                                        : "white"
                                    }] `}
                                    onClick={() => {
                                        props.textHandler(item);

                                    }}
                                >
                                    <div className="pl-[45px] text-[10px] xxxxl:text-[14px] xxxxl:pl-[50px]">
                                        {props.Name}
                                    </div>
                                    <div className="flex items-end gap-1">
                                        <div className="flex items-end h-[35px]">
                                            <img
                                                src={props.data.image ?? Logos.Profile1}
                                                alt="Pic Profile"
                                                className="w-[36px] xxxxl:w-[40px]"
                                            />
                                        </div>
                                        {item.type == "text" && (
                                            <div
                                                className="p-2 xxxxl:py-4 break-words break-all max-w-[85%] overflow-x-hidden text-ellipsis rounded-md bg-[#F5F5F5]  flex items-center justify-center cursor-pointer"
                                                onClick={() => {
                                                    props.TextHandler();
                                                    props.setindex(index)
                                                }}
                                            >
                                                <h1 className="text-[14px]  max-xxs:text-[9px] xxxxl:text-[15px]">
                                                    {item.content}
                                                </h1>
                                            </div>
                                        )}
                                        {item.type === "audio" && (
                                            <div
                                                className=" rounded-md cursor-pointer   flex items-center justify-center"
                                                onClick={() => {
                                                    props.AudHandler(item);
                                                    props.setindex(index)
                                                }}
                                            >
                                                <img
                                                    src={Logos.IbAudio}
                                                    alt="ImageIb"
                                                    className="mt-2 "
                                                />
                                            </div>
                                        )}
                                        {item.type === "video" && (
                                            <div
                                                className="py-2 px-0 rounded-md flex items-center justify-start cursor-pointer"
                                                onClick={() => {
                                                    props.VideoHandler(item);
                                                    props.setindex(index)
                                                }}
                                            >
                                                <img
                                                    src={Logos.IbVideo}
                                                    alt="ImageIb"
                                                    className="w-[70%] xxxxl:w-[80%]"
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className="text-[#A0A0A0] text-[11px] xxxxl:text-[15px] max-xxs:text-[8px] mt-1 font-[300] w-full flex justify-center items-center">
                                        {date} {time}
                                    </div>
                                </div>
                            )}
                            {item.sentByMe === true && (
                                <div
                                    className={`mt-5 mb-2 rounded-md p-1 bg-[${props.msgIndex == index
                                        ? "#E7EEF9"
                                        : "white"
                                    }] `}
                                    onClick={() => {
                                        props.textHandler(item);

                                    }}
                                >
                                    <div
                                        className="pr-12 xxxxl:pr-[65px] flex justify-end text-[10px] xxxxl:text-[14px] max-xxs:text-[7px]">
                                        You
                                    </div>
                                    <div className="flex items-end justify-end gap-1">
                                        {item.type == "text" && (
                                            <div
                                                className="p-2 xxxxl:py-4 break-words break-all max-w-[85%] overflow-x-hidden text-ellipsis rounded-md bg-[#F5F5F5]  flex items-center justify-center cursor-pointer"
                                                onClick={() => {
                                                    props.TextHandler();
                                                    props.setindex(index)
                                                }}
                                            >
                                                <h1
                                                    className="text-[14px]  max-xxs:text-[9px] xxxxl:text-[15px]"
                                                    style={{
                                                        wordBreak:
                                                            "break-word",
                                                    }}
                                                >
                                                    {item.content}
                                                </h1>
                                            </div>
                                        )}
                                        {item.type === "audio" && (
                                            <div
                                                className=" rounded-md cursor-pointer   flex items-center justify-center"
                                                onClick={() => {
                                                    props.AudHandler(item);
                                                    props.setindex(index)
                                                }}
                                            >
                                                <img
                                                    src={Logos.IbAudio}
                                                    alt="ImageIb"
                                                    className="mt-2 "
                                                />
                                            </div>
                                        )}
                                        {item.type === "video" && (
                                            <div
                                                className="py-2 px-0 rounded-md flex items-center justify-end cursor-pointer"
                                                onClick={() => {
                                                    props.VideoHandler(item);
                                                    props.setindex(index)
                                                }}
                                            >
                                                
                                                <img
                                                    src={!item.messageHistoryPreviewThumbnail ??  Logos.IbVideo }
                                                    alt="ImageIb"
                                                    className="w-[70%] xxxxl:w-[80%]"
                                                />
                                            </div>
                                        )}
                                        <div className="flex items-end mb-2 h-[35px]  mr-2 rounded-full">
                                            <img
                                                src={
                                                    props.data.image
                                                        ? props.data.image
                                                        : Logos.Navdropdown
                                                }
                                                style={{
                                                    width:
                                                        "calc(1.5rem + 1vw)",
                                                    borderRadius: "50%",
                                                }}
                                                alt="Pic Profile"
                                                className="w-[36px] mb-[-5px] xxxxl:w-[50px]"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="text-[#A0A0A0] text-[11px] xxxxl:text-[15px] max-xxs:text-[8px] mt-1 font-[300] w-full flex justify-center items-center">
                                        {date} {time}
                                    </div>
                                </div>
                            )}
                        </>
                    );
                })}

                {/* <div className=" mt-5">
        <div className="pl-11 text-[10px] xxxxl:pl-[65px] xxxxl:text-[14px] max-xxs:text-[7px]">
          Rayan Janes
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-end h-[35px]">
            <img
              src={Logos.Profile1}
              alt="Pic Profile"
              className="w-[36px] xxxxl:w-[40px]"
            />
          </div>
          <div
            className=" rounded-md cursor-pointer  flex items-center justify-center"
            onClick={props.AudHandler}
          >
            <img src={Logos.IbAudio} alt="ImageIb" className=" " />
          </div>
        </div>
        <div className="text-[#A0A0A0] xxxxl:text-[14px] max-xxs:text-[8px] text-[11px]  font-[300] w-full flex justify-center items-center">
          Yesterday 1:06 AM
        </div>
      </div>
      <div className=" mt-5">
        <div className="pr-10 xxxxl:pr-[65px] flex justify-end text-[10px] xxxxl:text-[14px] max-xxs:text-[7px]">
          Jacob Billings
        </div>
        <div className="flex items-end justify-end gap-1">
          <div
            className="py-2 px-0 rounded-md flex items-center justify-end cursor-pointer"
            onClick={props.VideoHandler}
          >
            <img
              src={Logos.IbVideo}
              alt="ImageIb"
              className="w-[70%] xxxxl:w-[80%]"
            />
          </div>
          <div className="flex items-end h-[35px]">
            <img
              src={Logos.Profile5}
              alt="Pic Profile"
              className="w-[36px] mb-2 xxxxl:w-[50px]"
            />
          </div>
        </div>
        <div className="text-[#A0A0A0] xxxxl:text-[14px] text-[11px] max-xxs:text-[8px] mt-1 font-[300] w-full flex justify-center items-center">
          Yesterday 1:06 AM
        </div>
      </div> */}
            </div>
        );
    }
};

export default InboxComp;
