import React, {useEffect, useState} from "react";
import {Logos} from "../../assets";
import {Link} from "react-router-dom";
import MenuDropdown from "../../components/MenuDropdown/MenuDropdown";
import {useGlobalInfo} from "../../contexts/GlobalContext";
import {useMutation} from "react-query";
import {closeChat, deleteChat, readUnread,} from "../../hooks/useConversation";
import {useStore} from "../../store/auth";

const ChatComp = ({
                      data,
                      index,
                      handleClick,
                      selected,
                      handleReloadClick,
                      seen,
                      setSeen,
                      isSelected,
                      // ReadChat,
                      setIsSelected,
                      idHanddler,
                      DeleteHandler,
                      active,
                      setindex,

                      closeCopy,
                      setCloseCopy,
                  }) => {
    const {videoState, setVideoState} = useGlobalInfo();

    const [read, setRead] = useState(data.isSeen);

    const [deletes, setDeletes] = useState(data.isActive);

    const readMutation = useMutation(readUnread);
    const closeMutation = useMutation(closeChat);
    const deleteMutation = useMutation(deleteChat);

    const conversationId = localStorage.getItem("conversationId");
    useEffect(() => {
        if (data._id && conversationId == data._id) {

            idHanddler(
                data._id,
                data.contactId,
                data.contactId?.firstName,
                data.contactId?.lastName,
                data.contactId?.email,
                data.contactId?.userId.phone,
                data.contactId?.address
            );
        }
    }, []);

    const DeleteChat = () => {
        // readMutation;

        setDeletes(!deletes);

        const payload = {
            deletes: !deletes, // Toggle the read value
            id: data._id, // Toggle the read value
        };
        deleteMutation.mutate(payload);
    };

    useEffect(() => {
        if (!readMutation?.data?.error) {
            handleReloadClick();
        }
    }, [deleteMutation?.data]);

    const CloseChat = () => {
        // closeMutation;
        setCloseCopy(!close);
        // console.log("789", close)
        // setCloseCopy(!close)
  

        const payload = {
            closed: closeCopy,
            id: data._id,
        };

        closeMutation.mutate(payload);
    };

    useEffect(() => {
        if (!closeMutation?.data?.error) {
            handleReloadClick();
        }
    }, [closeMutation?.data]);

    const ReadChat = async () => {
        // readMutation;

        setRead(!read);
        const payload = {
            read: !read, // Toggle the read value
            id: data._id, // Toggle the read value
        };
        readMutation.mutate(payload);
    };

    // function chatRead() {

    // }

    // useEffect(() => {
    //   chatRead();
    // }, [read]);

    useEffect(() => {
        if (!readMutation?.data?.error) {
            handleReloadClick();
        }
    }, [readMutation?.data]);

    const childIndex = "";
    // destructing the time
    const updatedAt = new Date(data?.updatedAt);
    const time = updatedAt.toLocaleTimeString([], {timeStyle: "short"});
    const [dots, setdots] = useState(false);
    const ConvoId = data._id;
    // const [item, setItem] = useState([]);
    // setItem(data.recipientId);
    const dotsHandler = () => {
        setdots(!dots);
    };
    const chatSelectionId = useStore((state) => state.setChatSelectedId);
    const [isOpen3, setIsOpen3] = useState(false);
    const togglePopup3 = () => {
        setIsOpen3(!isOpen3);
        setdots(!dots);
        DeleteHandler();
    };

    function globalState(a) {
        setVideoState(a);
        if (videoState === "folder" && a === "folder") {
            setVideoState("");
        }
    }

    function chatIdSelection(data) {
        chatSelectionId(data._id);
    }

    const localId = localStorage.getItem("conversationId");
    // filtering the wheater the chat is closed or active
    // const IsActive = data.isActive;

    const menuarray = [
        {
            label: read ? "Mark as Unread" : "Mark as Read",
            icon: Logos.MessageTick,
            link: "#",
        },
        {
            label: " View Contact Details",
            icon: Logos.ProfileUser,
            link: "/contact-Info",
        },
        {
            label: closeCopy ? "Close Conversation" : "Active Conversation",
            icon: Logos.MessageRemove,
            link: "#",
        },

        {
            label: "Delete Conversation",
            icon: Logos.trash2,
            link: "#",
        },
    ];
    return (
        <>
            <div className="flex flex-col gap-0 xxxxl:gap-5 w-[100%] ">
                {/* <div className="px-3 xxxxl:px-5 mt-3 ">
          <h1
            className="font-normal "
            style={{ fontSize: "calc(0.8rem + 0.3vw)" }}
          >
            {data?.day}
          </h1>
        </div> */}
                {/* {data?.map((item, childIndex) => {
          const [dots, setdots] = useState(false);

          const dotsHandler = () => {
            setdots(!dots);
          };

          const [isOpen3, setIsOpen3] = useState(false);
          const togglePopup3 = () => {
            setIsOpen3(!isOpen3);
            setdots(!dots);
          };

          return (
            <>
              {" "}
              <div
                className={`flex justify-between h-[70px] border-b-[1px] items-center p-2 px-4 py-[40px] bg-[${
                  isSelected.parent === index && isSelected.child === childIndex
                    ? "#E7EEF9"
                    : "none"
                }]`}
                onClick={() => {
                  setIsSelected({
                    parent: index,
                    child: childIndex,
                  });
                }}
              >
                <div className="flex items-center gap-5  w-[60%] max-xxs:gap-2">
                  <div className="relative  ">
                    <div>
                      <img
                        src={data.img}
                        alt="Profile Photo"
                        className="w-[45px] xxxxl:w-[60px]"
                      />
                    </div>
                    {data.share && (
                      <div className="absolute bottom-0 right-0">
                        <img
                          src={Logos.SendMessage}
                          alt="Profile Photo"
                          className="w-[15px] xxxxl:w-[22px]"
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <h1
                      className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis  w-full"
                      style={{ fontSize: "calc(0.8rem + 0.2vw)" }}
                    >
                      {data.recipientId.firstName + data.recipientId.lastName}
                    </h1>
                    {data.via && (
                      <p
                        className=" font-normal text-[#A0A0A0]"
                        style={{ fontSize: "calc(0.6rem + 0.3vw)" }}
                        onClick={() => {
                          if (data.via == "Greeting2") {
                            globalState("reform");
                          } else {
                            globalState("folder");
                          }
                        }}
                      >
                        Via{" "}
                        <Link
                          to={data.to}
                          className="underline"
                          onClick={data.onclick}
                        >
                          {data.via}
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center  py-6 justify-end gap-2 max-xxs:gap-1 relative ">
                  {data.lock && (
                    <img
                      src={Logos.Lock}
                      alt="Lock"
                      className="max-xxs:w-[15px] xxxxl:w-[30px]"
                    />
                  )}
                  {data.circle && (
                    <img
                      src={Logos.Circle}
                      alt="Circle"
                      className="xxxxl:w-[12px]"
                    />
                  )}
                  <p className="text-[11px] max-xxs:text-[9px] font-[100] text-[#A0A0A0] xxxxl:text-[18px] whitespace-nowrap">
                    {data.time}
                  </p>
                  <img
                    src={Logos.Options}
                    alt="Options"
                    className="w-[20px] xxxxl:w-[35px]"
                    onClick={dotsHandler}
                  />
                  <div className="z-10">
                    <MenuDropdown
                      class="w-[195px] xxxl:w-[250px] top-[25px] right-0 "
                      menuarray={menuarray}
                      isOpen={dots}
                      setIsOpen={setdots}
                    />
                  </div>
                </div>
              </div>
              {isOpen3 && (
                <div className="popup-box fixed backdrop-opacity-20 z-10 bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center ">
                  <div className="box  relative rounded-md  lg:w-[400px] xxxs:w-[350px] bg-white lg:min-h-[260px]   mx-auto flex flex-col  ">
                    <div className="flex justify-between px-5 lg:pt-8 p-3  xxxs:pt-5 h-[20px] items-center">
                      <div className="lg:text-[18px] font-[400] xxxs:text-[15px] ">
                        Delete entire conversations
                      </div>
                      <button className="btn-close " onClick={togglePopup3}>
                        <img
                          src={Logos.ClosePopup}
                          alt="Close Button"
                          className="lg:w-[20px] xxxs:w-[15px]"
                        />
                      </button>
                    </div>
                    <hr className=" border-1 border-[#CEDEF2] mt-5" />

                    <div
                      style={{
                        marginTop: "10px",
                      }}
                    >
                      <div
                        className=" px-4 gap-4  "
                        style={{
                          marginTop: "8px",
                        }}
                      >
                        <p className=" text-[12px] font-[300] leading-[22px] text-[#A0A0A0] ">
                          This cannot be undone. All answers and replies in this
                          converstaion will be lost. we cannot recover thers
                          once delete.
                        </p>
                        <br />
                        <p className="text-[12px] font-[300] leading-[22px] text-[#A0A0A0] ">
                          Are you sure you want to delte this conversation?
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center my-3 gap-3">
                      <button
                        className="text-[14px] leading-[30px] font-[400] text-[#A0A0A0] border-[1px] border-solid border-[#A0A0A0] p-1 rounded-[5px] my-3 w-[120px] self-center "
                        onClick={togglePopup3}
                      >
                        Cancel
                      </button>
                      <button
                        className="text-[14px] leading-[30px] font-[400] text-[#ffffff] border-[1px]  border-solid  p-1 rounded-[5px] my-3 w-[120px] self-center "
                        style={{
                          backgroundColor: "#F24B59",
                        }}
                        onClick={togglePopup3}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })} */}

                <div>
                    <div
                        className={`flex justify-between h-[70px] border-b-[1px] items-center p-2 px-4 py-[40px] bg-[${
                            data._id == conversationId ? "#E7EEF9" : "none"
                        }]`}
                        onClick={() => {
                            handleClick();
                            idHanddler(
                                data._id,
                                data?.contactId,
                                data?.contactId?.firstName,
                                data?.contactId?.lastName,
                                data?.contactId?.email,
                                data?.contactId?.phone,
                                data?.contactId?.address,
                                data?.isSeen
                            );
                            setIsSelected({
                                parent: index,
                                child: childIndex,
                            });
                            if (data.isSeen == false) {
                                ReadChat();
                            }
                            chatIdSelection(data)
                            if (conversationId != data._id) {

                                DeleteHandler();
                                setindex(null)
                            }
                        }}
                    >
                        <div className="flex items-center gap-5  w-[60%]  text-ellipsis max-xxs:gap-2">
                            <div className="relative  ">
                                <div className="w-[45px] xxxxl:w-[60px] ">
                                    <img
                                        src={data?.contactId?.userId?.picture ?? Logos.Dpp}
                                        alt="Photo"
                                        className="w-[45px] xxxxl:w-[60px] rounded-full"
                                    />
                                </div>
                                {data.share && (
                                    <div className="absolute bottom-0 right-0">
                                        <img
                                            src={Logos.SendMessage}
                                            alt="Photo"
                                            className="w-[15px] xxxxl:w-[22px]"
                                        />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h1
                                    className="font-medium whitespace-nowrap max-w-[150px] overflow-hidden overflow-ellipsis  w-full"
                                    style={{
                                        fontSize: "calc(0.8rem + 0.2vw)",
                                        maxWidth: "calc(145px + 2vw)",
                                    }}
                                >
                                    {data?.contactId?.firstName + " " + data?.contactId?.lastName}
                                </h1>
                                {/* <p
                  className=" font-normal text-[#A0A0A0]"
                  style={{ fontSize: "calc(0.6rem + 0.3vw)" }}
                >
                  Via Educational
                </p> */}
                                {data.via && (
                                    <p
                                        className=" font-normal text-[#A0A0A0]"
                                        style={{fontSize: "calc(0.6rem + 0.3vw)"}}
                                        onClick={() => {
                                            if (data.via == "Greeting2") {
                                                globalState("reform");
                                            } else {
                                                globalState("folder");
                                            }
                                        }}
                                    >
                                        Via
                                        <Link
                                            to={data.to}
                                            className="underline"
                                            onClick={data.onclick}
                                        >
                                            {data.via}
                                        </Link>
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center  py-6 justify-end gap-2 max-xxs:gap-1 relative ">
                            {data.lock && (
                                <img
                                    src={Logos.Lock}
                                    alt="Lock"
                                    className="max-xxs:w-[15px] xxxxl:w-[30px]"
                                />
                            )}

                            {/* <img src="{Images}" alt="Circle" class="xxxxl:w-[12px]"></img> */}
                            {data.isSeen == false && (
                                <img
                                    src={Logos.Circle}
                                    alt="Circle"
                                    className="xxxxl:w-[12px]"
                                />
                            )}
                            <p className="text-[11px] max-xxs:text-[9px] font-[100] text-[#A0A0A0] xxxxl:text-[18px] whitespace-nowrap">
                                {time}
                            </p>
                            <img
                                src={Logos.Options}
                                alt="Options"
                                className="w-[20px] xxxxl:w-[35px]"
                                onClick={(e) => {
                                    // e.stopPropagation();
                                    dotsHandler();
                                }}
                            />
                            <div className="z-10">
                                <MenuDropdown
                                    class="w-[195px] xxxl:w-[250px] top-[25px] right-0 "
                                    menuarray={menuarray}
                                    isOpen={dots}
                                    ReadChat={ReadChat}
                                    CloseChat={CloseChat}
                                    DeleteChat={DeleteChat}
                                    ConvoId={ConvoId}
                                    id={data._id}
                                    idHanddler={idHanddler}
                                    DeleteHandler={DeleteHandler}
                                    setIsOpen={setdots}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen3 && (
                <div
                    className="popup-box fixed backdrop-opacity-20 z-10 bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center ">
                    <div
                        className="box  relative rounded-md  lg:w-[400px] xxxs:w-[350px] bg-white lg:min-h-[260px]   mx-auto flex flex-col  ">
                        <div className="flex justify-between px-5 lg:pt-8 p-3  xxxs:pt-5 h-[20px] items-center">
                            <div className="lg:text-[18px] font-[400] xxxs:text-[15px] ">
                                Delete entire conversations
                            </div>
                            <button className="btn-close " onClick={togglePopup3}>
                                <img
                                    src={Logos.ClosePopup}
                                    alt="Close Button"
                                    className="lg:w-[20px] xxxs:w-[15px]"
                                />
                            </button>
                        </div>
                        <hr className=" border-1 border-[#CEDEF2] mt-5"/>

                        <div
                            style={{
                                marginTop: "10px",
                            }}
                        >
                            <div
                                className=" px-4 gap-4  "
                                style={{
                                    marginTop: "8px",
                                }}
                            >
                                <p className=" text-[12px] font-[300] leading-[22px] text-[#A0A0A0] ">
                                    This cannot be undone. All answers and replies in this
                                    converstaion will be lost. we cannot recover thers once
                                    delete.
                                </p>
                                <br/>
                                <p className="text-[12px] font-[300] leading-[22px] text-[#A0A0A0] ">
                                    Are you sure you want to delte this conversation?
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center my-3 gap-3">
                            <button
                                className="text-[14px] leading-[30px] font-[400] text-[#A0A0A0] border-[1px] border-solid border-[#A0A0A0] p-1 rounded-[5px] my-3 w-[120px] self-center "
                                onClick={togglePopup3}
                            >
                                Cancel
                            </button>
                            <button
                                className="text-[14px] leading-[30px] font-[400] text-[#ffffff] border-[1px]  border-solid  p-1 rounded-[5px] my-3 w-[120px] self-center "
                                style={{
                                    backgroundColor: "#F24B59",
                                }}
                                onClick={togglePopup3}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatComp;
