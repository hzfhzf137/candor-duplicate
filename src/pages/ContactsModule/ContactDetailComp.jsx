import React, { useEffect, useRef, useState } from "react";
import { Logos } from "../../assets";
import ButtonComp from "../../components/ButtonComp/ButtonComp";
// import ChatComp from "../../components/ChatComp/ChatComp";
import InboxComp from "../../components/InboxComp/InboxComp";
import { Link, useNavigate } from "react-router-dom";
// import { Typography } from "antd";
// const { Title } = Typography;
import Popup from "../../components/PopUp/PopUp";
import CalenderPopUp from "../../components/PopUp/CalenderPopUp";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

// import ToolTip from "../../components/ToolTip/ToolTip";
import "../../pages/Conversation/Conversation.css";
import LibraryDeletePopup from "../../components/LibraryDeletePopup/LibraryDeletePopup";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
// import { Calendar } from "primereact/calendar";
// import * as yup from "yup";
// import { Controller, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
// import { getAllContact } from "../../hooks/useConversation";
// import { useQuery } from "react-query";
// import { SearchContact } from "../../hooks/useConversation";
// import { ReadMessages } from "../../hooks/useConversation";
// import { useFetchContactsDetails } from "../../hooks/useConversation";
import {
  closeChat,
  deleteChat,
  deleteMsg,
  downloadConversation,
  readUnread,
  useReadMessages,
} from "../../hooks/useConversation";

import { useStore } from "../../store/auth";
import { io } from "socket.io-client";
// import { useStoreConversation } from "../../store/conversation";
import { Toast } from "primereact/toast";
import { useGlobalInfo } from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../../components/GloabalLoaderCopy/GloabalLoaderCopy";
// import { useStore } from "../../store/auth";
import { useStoreConversationDownload } from "../../store/conversationDownload";
import { ProgressSpinner } from "primereact/progressspinner";
import { root_url } from "../../utils/constants.jsx";
// import { deleteChat } from "../../hooks/useContact";
// const schema = yup
//   .object({
//     firstName: yup.string().required("Field Required"),
//     lastName: yup.string().required("Field Required"),
//     email: yup
//       .string()
//       .email()
//       .matches(
//         /^[\w\.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,4}$/,
//         "Please enter a valid Email"
//       ),
//   })
//   .required();

const ContactDetailsComp = (props) => {
  const toast = useRef(null);
  const loadingState = useStore((state) => state.loading);
  const isLoading = useStore((state) => state.isLoading);
  const show = (param) => {
    toast.current.show({
      severity: "info",
      summary: "Info",
      detail: param,
    });
  };
  // const error = (param) => {
  //   toast.current.error({
  //     severity: "error",
  //     summary: "error",
  //     detail: param,
  //   });
  // };
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   control,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  const [payloadDownload, setPayloadDownload] = useState({
    text: false,
    video: false,
    audio: false,
  });
  const [filter, setFilter] = useState({
    dateRange: new Date(),
    lastMessage: "",
  });
  // const setFilterConversation = useMutation(filterConversation);
  // const [selected, setSelected] = useState(null);
  // const [dataActive, setDataActive] = useState([]);
  // const [dataClosed, setDataClosed] = useState([]);
  // const [seen, setSeen] = useState(false);
  const [disable, setDisable] = useState(false);
  const { mutate } = useMutation(downloadConversation);
  const [closeCopy, setCloseCopy] = useState(
    JSON.parse(localStorage.getItem("active"))
  );
  const [thumbnailContent, setThumbnailContent] = useState("");
  // calling and assigning Api data to an array
  // const { data: getData, refetch: conveFetch } = useFetchConversation();
  // function onSubmitHandler() {
  //   setLoading(true);
  //   mutate(payloadDownload, {
  //     onSuccess: (data) => {
  //       window.open(data.data.downloadLink, "_blank");
  //       setLoading(false);
  //     },
  //     onError: (error) => {
  //       showError();
  //       setLoading(false);
  //     },
  //   });
  //   togglePopup2();
  // }

  // usama code starts from here
  function onSubmitHandler() {
    setLoading(true);
    setIsDownloadConversation(true);
    if (content) {
      localStorage.setItem("conversationId", content[0].conversationId);
    }
    mutate(payloadDownload, {
      onSuccess: (data) => {
        window.open(data.data.downloadLink, "_blank");
        setLoading(false);
      },
      onError: (error) => {
        setIsDownloadConversation(false);
        setIsReadyToDownload(false);
        showDownloadFail();
        showError();
        setLoading(false);
      },
    });
    startUploadSocket();
    togglePopup2();
    setLoading(false);
  }

  // zustand code
  const toastRef = useRef(null);
  const readyToDownload = useStoreConversationDownload(
    (state) => state.readyToDownload
  );
  const isDownloadConversation = useStoreConversationDownload(
    (state) => state.isDownloadConversation
  );

  const downloadAbleFile = useStoreConversationDownload(
    (state) => state.downloadAbleFile
  );
  const uploadSocket = useStoreConversationDownload(
    (state) => state.uploadSocket
  );

  // for updating value in store
  const setIsReadyToDownload = useStoreConversationDownload(
    (state) => state.isReadyToDownload
  );
  const setIsDownloadConversation = useStoreConversationDownload(
    (state) => state.setIsDownloadConversation
  );
  const setDownloadAbleFile = useStoreConversationDownload(
    (state) => state.setDownloadAbleFile
  );
  const setUploadSocket = useStoreConversationDownload(
    (state) => state.setUploadSocket
  );

  // functions for download files
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "The file is ready for download.",
      life: 2000,
    });
  };
  const showDownloadStatus = () => {
    toast.current.show({
      severity: "info",
      summary: "Download Status",
      detail: "Your conversation is getting ready for download. Please wait.",
      life: 2000,
    });
  };
  const showDownloadFail = () => {
    toast.current.show({
      severity: "error",
      summary: "Files not avalible",
      detail: "Selected item does not exist in the conversation.",
      life: 2000,
    });
  };
  const startUploadSocket = () => {
    showDownloadStatus();
    const newSocket = io(`${root_url}`).connect();
    newSocket.on("conversation-uploaded", (message) => {
      setIsDownloadConversation(false);
      setIsReadyToDownload(!readyToDownload);
      setDownloadAbleFile(message);
      showSuccess();
    });

    return () => {
      uploadSocket.disconnect();
    };
  };
  useEffect(() => {
    toastRef.current =
      toastRef.current || document.querySelector(".p-toast-message");
  }, []);
  useEffect(() => {
    if (readyToDownload) {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "The file is ready for download.",
        life: 2000,
      });
    }
  }, [readyToDownload]);
  const downloadFile = () => {
    window.open(downloadAbleFile, "_blank");
    setIsDownloadConversation(false);
    setIsReadyToDownload(!readyToDownload);
  };
  // usama code ends from here

  // Array will be again Filter the latest changes of api
  // useEffect(() => {
  //   // setFileData({});
  //   if (setFilterConversation?.data?.data?.data) {
  //     const filteredData = setFilterConversation?.data?.data?.data?.filter(
  //       (conversation) => conversation.isClosed === false
  //     );
  //     setDataActive(filteredData);
  //     const filteredDataClosed =
  //       setFilterConversation?.data?.data?.data?.filter(
  //         (conversation) => conversation.isClosed === true
  //       );
  //     setDataClosed(filteredDataClosed);
  //   }
  // }, [setFilterConversation?.data?.data, seen, filter]);

  // useEffect(() => {
  //   if (getData?.data?.data) {
  //     const filteredData = getData.data.data.filter(
  //       (conversation) => conversation.isClosed === false
  //     );
  //     setDataActive(filteredData);

  //     const filteredDataClosed = getData.data.data.filter(
  //       (conversation) => conversation.isClosed === true
  //     );
  //     setDataClosed(filteredDataClosed);
  //   }
  // }, [getData?.data?.data, seen, filter]);

  // const handleReloadClick = () => {
  //   fetchContacts();
  // };

  // const handleReloadClick = () => {
  //   // conveFetch();
  // };

  // const handleClick = (index) => {
  //   setSelected(index);
  // };
  // const [date, setDate] = useState(new Date());
  // const userId = useStore((state) => state.userId);

  // const [active, setActive] = useState(true);
  const [messages, setMessages] = useState(true);
  // const [checkedThree, setCheckedThree] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  // const [opendropdown, setopendropdown] = useState(false);
  // const [opendropdown2, setopendropdown2] = useState(false);
  // const [dropdown, setdropdown] = useState("Direct Messages, Greeting 1");
  // const [dropdown2, setdropdown2] = useState("");
  const [isOpen1, setIsOpen1] = useState(false);
  const [SharePopup, setSharePopup] = useState(false);
  // const [isSelected, setIsSelected] = useState({
  //   parent: null,
  //   child: null,
  // });
  const id = localStorage.getItem("conversationId");
  const [conversationId, setConversationId] = useState(id);
  // const [dates, setDates] = useState(new Date());
  // const [dates, setDates] = useState(new Date());
  const [isOpen5, setIsOpen5] = useState(false);
  const [conversationName, setConversationName] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const [read, setRead] = useState(false);

  const [recipientData, setRecipientData] = useState({
    ID: "",
    email: "",
    phone: "",
    address: "",
  });
  // const { mutate: readIcon } = useMutation(readUnread)
  const readMutation = useMutation(readUnread);

  async function conversationIdHanddler(
    id,
    recieverID,
    firstName,
    lastName,
    email,
    phone,
    address
  ) {
    // await id;
    // console.log(" i am callig this ----> ", recieverID);
    setConversationName(firstName);
    setRecipientData((prev) => ({
      ...prev,
      ID: recieverID,
      email: email,
      phone: phone,
      address: address,
    }));

    localStorage.setItem("receiverId", JSON.stringify(recieverID));

    localStorage.setItem("conversationId", id);

    await setConversationId(localStorage.getItem("conversationId"));
    // readIcon(id, {
    //   onSuccess: () => {
    //     console.log("happen")
    //   },
    //   onError: (error) => {
    //     showError();
    //   },
    // })
  }

  const [isOpen01, setIsOpen01] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const togglePopup01 = () => {
    DeleteChat();
    setIsOpen01(!isOpen01);
  };
  const togglePopup001 = () => {
    setIsOpen01(!isOpen01);
  };

  const togglePopup1 = () => {
    togglePopup();
    setIsOpen1(!isOpen1);
  };
  const [isOpen3, setIsOpen3] = useState(false);
  const togglePopup3 = () => {
    setIsOpen3(!isOpen3);
  };
  const togglePopup30 = () => {
    DeleteMsg();
    setIsOpen3(!isOpen3);
  };
  const [isOpen4, setIsOpen4] = useState(false);
  const togglePopup4 = () => {
    setIsOpen4(!isOpen4);
  };
  const togglePopup5 = () => {
    setIsOpen5(!isOpen5);
  };
  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };
  const { loading, setLoading } = useGlobalInfo();
  useEffect(() => {
    if (conversationId) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [conversationId]);

  const navigate = useNavigate();
  const [imgActive, setImgActive] = useState(false);
  const [vidActive, setVidActive] = useState(false);
  const [txtActive, setTxtActive] = useState(false);
  const [audActive, setAudActive] = useState(false);
  const [copyAlert, setCopyAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [conversationModal, setConversationModal] = useState(false);

  // const {
  //   data: contacts,
  //   isLoadingContacts,
  //   isErrorContacts,
  // } = useQuery("getData", getAllContact);
  const {
    data: content,
    isLoading: loadcontent,
    isError,
    refetch: fetchAllMessages,
  } = useReadMessages(props.msg);
  const togglePopup = async () => {
    setIsOpen(!isOpen);
  };

  // function clearFilterHanlder() {
  //   setFilter({
  //     dateRange: new Date(),
  //     lastMessage: "",
  //   });
  // }
  function ImageHandler() {
    setImgActive(true);
    setVidActive(false);
    setTxtActive(false);
    setAudActive(false);
  }

  const [video, setVideo] = useState("");
  const [audio, setAudio] = useState("");
  const [downloadVideo, setDownloadVideo] = useState("");
  const [downloadAudio, setDownloadAudio] = useState("");

  function VideoHandler(param) {
    setImgActive(false);
    setVidActive(true);
    setTxtActive(false);
    setAudActive(false);
    setVideo(param.content);
    setDownloadVideo(param.content);
    setThumbnailContent(param.messagePreviewThumbnail)
    setMsgId(param._id);
    setThumbnail(true);
  }

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(msg)
      .then(() => {
        setCopyAlert(true);
        setTimeout(() => {
          setCopyAlert(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  };
  const handleDownloadVideoClick = (data) => {
    window.open(downloadVideo, "_blank");
  };
  const handleDownloadAudioClick = (data) => {
    window.open(downloadAudio, "_blank");
  };

  // const [close, setClose] = useState(false);

  const closeMutation = useMutation(closeChat);

  // Seen Unseen
  const ReadChat = async () => {
    // readMutation;

    setRead(!read);

    const payload = {
      read: read, // Toggle the read value
      id: id, // Toggle the read value
    };
    DeleteHandler();
    localStorage.removeItem("conversationId");
    await readMutation.mutate(payload);
    // localStorage.removeItem("conversationId");
    // localStorage.setItem('conversationId', '64b51e9160819fb07416b030')
    fetchAllMessages();
  };

  // useEffect(() => {
  //   if (!readMutation?.data?.error) {
  //     handleReloadClick();
  //   }
  // }, [readMutation?.data]);

  // Close Chat
  const CloseChat = () => {
    // closeMutation;

    const payload = {
      closed: closeCopy,
      id: id,
    };

    localStorage.removeItem("conversationId");
    DeleteHandler();
    closeMutation.mutate(payload);
  };

  // useEffect(() => {
  //   if (!closeMutation?.data?.error) {
  //     handleReloadClick();
  //   }
  // }, [closeMutation?.data]);

  // Delete Intire Conversation
  const [deletes, setDeletes] = useState(false);
  const deleteMutation = useMutation(deleteChat);
  const DeleteChat = () => {
    // readMutation;

    setDeletes(deletes);

    // const payload = {
    //   deletes: deletes, // Toggle the read value
    //   id: id, // Toggle the read value
    // };
    DeleteHandler();
    localStorage.removeItem("conversationId");
    if (content) {
      deleteMutation.mutate(content[0]?.conversationId);
    }
  };

  // useEffect(() => {
  //   if (!deleteMutation?.data?.error) {
  //     handleReloadClick();
  //   }
  // }, [deleteMutation?.data]);
  // Delete single message
  const [deleteMsgs, setDeleteMsgs] = useState(false);
  const deleteMsgMutation = useMutation(deleteMsg);

  const DeleteMsg = (data) => {
    const payload = {
      id: msgId, //
    };
    deleteMsgMutation.mutate(payload);

    setDeleteMsgs(!deleteMsgs);
    DeleteHandler();
  };

  useEffect(() => {
    if (!deleteMsgMutation?.data?.error) {
      DeleteHandler();
      fetchAllMessages();
      //   localStorage.setItem('conversationId',content?._id)
    }
  }, [deleteMsgMutation?.data]);
  // const deleteMutation = useMutation(deleteChat);
  // function deletechat(){
  //   const data = JSON.parse(localStorage.getItem('receiverId'))
  //   deleteMutation.mutate(data.contactId,{
  //       onSuccess:()=>{
  //           console.log(' i am success',data.contactId);
  //       }
  //   });
  // }
  function DeleteHandler() {
    setImgActive(false);
    setVidActive(false);
    setAudActive(false);
    setTxtActive(false);
  }

  function deleteAll() {
    // console.log("---->i am removing all ");
    setConversationId("");
    localStorage.removeItem("conversationId");
  }

  function TextHandler() {
    setImgActive(false);
    setVidActive(false);
    setAudActive(false);
    setTxtActive(true);
  }

  function AudHandler(param) {
    setImgActive(false);
    setVidActive(false);
    setTxtActive(false);
    setAudActive(true);
    setDownloadAudio(param.content);

    setAudio(param.content);
    setaudioThumbnail(true);
  }

  function ShareHandler() {
    if (content) {
      localStorage.setItem("conversationId", content[0].conversationId);
    }
    setLoading(true);
    navigate("/share-conversation");
  }

  const TogglePopup = () => {
    setIsToggle(!isToggle);
  };
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socket = io(`${root_url}`).connect(); // Replace with your server URL
    setSocket(socket);

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);
  const [msg, setMsg] = useState("");
  const [msgId, setMsgId] = useState("");

  function textHandler(a) {
    setMsgId(a._id);
    setMsg(a.content);
  }

  useEffect(() => {
    if (socket) {
      // Listen for chat messages from the server
      socket.on("new-message", (message) => {
        conveFetch();
        fetchAllMessages();
      });
    }
  }, [socket]);
  useEffect(() => {
    fetchAllMessages();
  }, []);
  // const CreateContact = useMutation(addNewContact);
  // const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  // function onSubmitFilter() {
  //   localStorage.removeItem("conversationId");
  //   const userId = localStorage.getItem("userId");
  //   togglePopup4();

  //   // const payload = {
  //   //   userId: userId,
  //   //   lastMessage: filter.lastMessage,
  //   //   startDate: filter.dateRange[0],
  //   //   endDate: filter.dateRange[1],
  //   // };

  //   // setFilterConversation.mutate(payload);
  //   setIsOpen4(!isOpen4);
  // }
  // const onSubmit = (data) => {
  //   // setLoading(true);

  //   // onSuccess: (data) => {
  //   //   // togglePopup1();
  //   //   console.log(' ia m sus')
  //   //   show(data.message);
  //   //   // isLoading(!loadingState);
  //   //  if(data.error== false){
  //   //    localStorage.setItem('receiverId',data?.data?._id);
  //   //    navigate('/reply');
  //   //    setTimeout(() => {
  //   //     isLoading(false)
  //   //   }, 1000)
  //   //  }
  //   // },
  //   // onerror: (data) => {
  //   //   togglePopup1();
  //   //   error(data.message);
  //   //   isLoading(false);
  //   // },
  //   // localStorage.setItem("conversationId", null);

  //   // CreateContact.mutate(data, {
  //   //   onSuccess: (data) => {
  //   //     // togglePopup1();

  //   //     // isLoading(!loadingState);
  //   //     if (data.error == false) {
  //   //       localStorage.setItem("receiverId", JSON.stringify(data?.data?._id));

  //   //       navigate("/reply");
  //   //       setLoading(false);

  //   //       //  setTimeout(() => {
  //   //       //   isLoading(false)
  //   //       // }, 1000)
  //   //     } else if (data.error == true) {
  //   //       // setTimeout(() => {
  //   //       //   isLoading(false)
  //   //       // }, 1000)

  //   //       setLoading(false);

  //   //       show(data.message);
  //   //     }
  //   //   },
  //   //   onError: (data) => {
  //   //     togglePopup1();
  //   //     error(data.message);
  //   //     // setTimeout(() => {
  //   //     //   isLoading(false)
  //   //     // }, 1000)
  //   //   },
  //   //   onSettled: () => {
  //   //     setTimeout(() => {
  //   //       isLoading(false);
  //   //     }, 1000);
  //   //   },
  //   // });
  //   // isLoading(false);
  //   // .finally(f() => {
  //   //   // After API call completion (success or error)
  //   //   console.log('i am callig fially ')
  //   //  isLoading(false);
  //   // });
  // };
  // const onSubmit = (data) => {
  //   // isLoading(!loadingState);

  //   CreateContact.mutate(data, {
  //     onSuccess: (data) => {
  //       // togglePopup1();
  //       console.log(" ia m sus");
  //       show(data.message);
  //       // isLoading(!loadingState);
  //       if (data.error == false) {
  //         localStorage.setItem("receiverId", data?.data?._id);
  //         navigate("/reply");
  //         //  isLoading(!loadingState);
  //       }
  //     },
  //     onerror: (data) => {
  //       togglePopup1();
  //       error(data.message);
  //       // isLoading(!loadingState);
  //     },
  //   });
  // };
  const [thumbnail, setThumbnail] = useState(true);
  const [audiothumbnail, setaudioThumbnail] = useState(true);

  // Timer in message
  // Arslan Code Start
  const handleMouseEnter = () => {
    setConversationModal(true);
    let childElement = document.querySelector("#child1");
    if (childElement) {
      childElement.classList.add("child");
    }
  };

  const handleMouseLeave = () => {
    setConversationModal(false);
    let childElement = document.querySelector("#child1");
    if (childElement) {
      childElement.classList.remove("child");
    }
  };
  // Arslan Code end
  const reciverData = JSON.parse(localStorage.getItem("receiverId"));

  return (
    <>
      {loading ? (
        <GlobalLoaderCopy />
      ) : (
        <div className="rounded-lg shadow-md w-full max-lg:overflow-visible">
          <Toast ref={toast} color="primary" position="bottom-right" />
          {isToggle && <CalenderPopUp CloseCalender={TogglePopup} />}
          {isOpen && (
            <Popup
              handleClose={togglePopup}
              popup={togglePopup1}
              onclickHanddler={conversationIdHanddler}
              data={contacts}
            />
          )}

          <div
            className="flex w-full max-xl:flex-wrap max-lg:overflow-visible "
            style={{
              height: "calc(100vh - 140px)",
            }}
          >
            <div className="flex flex-col   xl:max-w-[70%] max-lg:w-[100vw] w-full h-full  ">
              {
                <div className=" bg-white border-t-[1px]  border-l-[1px]  relative col-end-7 flex items-center  justify-between p-6  border-b-[1px] shadow-sm  ">
                  <div
                    // className="flex gap-1 max-xxs:gap-[2px] max-sm:gap-1 w-[50%] parent"
                    // onClick={() => {
                    //   setConversationModal(!conversationModal);
                    //   let classss = document.querySelector("#child1");
                    //   classss.classList.toggle("child");
                    // }}
                    className="flex gap-1 max-xxs:gap-[2px] max-sm:gap-1 w-[50%] parent"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => {
                      // setConversationModal(!conversationModal);
                      // let classss = document.querySelector("#child1");
                      // console.log("i am clickig", classss);
                      // classss.classList.toggle("child");
                    }}
                  >
                    {
                      <h1 className="title-size max-xs:text-[14px] max-w-[100%] overflow-ellipsis overflow-hidden  px-2  font-medium  max-xxxxxl:text-[24px] max-lg:text-[14px] whitespace-nowrap max-xl:text-[14px] max-xxxl:text-[18px] max-xxxxl:text-[22px] text-[30px]  max-xxs:text-[16px] ">
                        Conversation With{" "}
                        {conversationName || reciverData.firstName}
                      </h1>
                    }
                    {
                      <img
                        className="w-[18px]  xxxxl: "
                        id="child1"
                        src={Logos.Arrowdown}
                        alt="Arrow Down"
                      />
                    }
                    {conversationModal && (
                      <div className="absolute top-14 left-0 flex flex-col gap-3 xxxxl:gap-4 bg-white shadow-sm p-5 max-w-[350px] xxxxl:max-w-[550px] w-full">
                        <div className="flex justify-between items-center">
                          <h1 className="font-medium  max-xs:text-[10px] xxxxl:text-[18px] max-xxs:text-[8px] ">
                            Organization :
                          </h1>
                          <p className="text-[gray] text-[12px] xxxxl:text-[18px]  max-xs:text-[10px] max-xxs:text-[8px]">
                            {recipientData.organization
                              ? recipientData.organization
                              : "---" && reciverData?.organization
                              ? reciverData?.organization
                              : "---"}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <h1 className="font-medium xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                            Email :
                          </h1>
                          <p className="text-[gray] text-[12px] xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                            {recipientData.email
                              ? recipientData.email
                              : "---" && reciverData?.email
                              ? reciverData?.email
                              : "---"}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <h1 className="font-medium xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                            Phone :
                          </h1>
                          <p className="text-[gray] text-[12px] xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                            {recipientData.phone
                              ? recipientData.phone
                              : "---" && reciverData?.phone
                              ? reciverData?.phone
                              : "---"}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <h1 className="font-medium xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                            Address :
                          </h1>
                          <div className="flex flex-col justify-end items-end">
                            <p className="text-[gray] text-[12px] xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                              {recipientData?.address
                                ? recipientData?.address
                                : "---" && reciverData?.address
                                ? reciverData?.address
                                : "---"}
                            </p>
                            {/* <p className="text-[gray] text-[12px] xxxxl:text-[18px] max-xs:text-[10px] max-xxs:text-[8px]">
                        NC 28202 United States:
                      </p> */}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {
                    <div className="flex gap-3 max-sm:gap-2 max-xxs:gap-[2px]   justify-end w-[50%]">
                      {content && (
                        <img
                          src={Logos.Share}
                          alt=""
                          className="icon-size cursor-pointer"
                          onClick={() => {
                            ShareHandler();
                          }}
                        />
                      )}
                      <img
                        src={Logos.Message}
                        alt=""
                        onClick={ReadChat}
                        className="icon-size cursor-pointer"
                      />
                      {content && (
                        <img
                          src={Logos.Trash}
                          alt=""
                          onClick={() => {
                            // console.log('----->content',content[0]?.conversationId);
                            togglePopup001();
                          }}
                          className="icon-size cursor-pointer"
                        />
                      )}
                      {!readyToDownload && !isDownloadConversation && (
                        <img
                          src={Logos.Download}
                          alt=""
                          onClick={togglePopup2}
                          className="icon-size cursor-pointer rounded-md"
                        />
                      )}
                      {!readyToDownload && isDownloadConversation && (
                        // <img
                        //   src={Logos.DownloadWhite}
                        //   alt=""
                        //   onClick={showDownloadStatus}
                        //   className="icon-size cursor-pointer bg-red-600 rounded-md"
                        // />
                        <div className="w-10 h-10">
                          <ProgressSpinner
                            onClick={showDownloadStatus}
                            style={{ width: "40px", height: "40px" }}
                            strokeWidth="4"
                            fill="var(--surface-ground)"
                            animationDuration=".5s"
                          />
                        </div>
                      )}
                      {readyToDownload && (
                        <img
                          src={Logos.DownloadComplete}
                          alt=""
                          className="icon-size cursor-pointer rounded-md"
                          onClick={() => downloadFile()}
                        />
                      )}
                      <img
                        src={Logos.Clear}
                        alt=""
                        onClick={CloseChat}
                        className="icon-size cursor-pointer"
                      />
                    </div>
                  }
                  <div></div>
                </div>
              }
              <div className="bg-white    overflow-hidden h-full  border-b-[2px] border-r-[1px] flex justify-center items-center    shadow-sm">
                {imgActive && (
                  <div className="flex flex-col  justify-center w-[80%]">
                    <img
                      src={Logos.CenterImage}
                      className="icon-size w-full  object-cover rounded-md"
                    />
                    <div className="flex gap-5 items-center justify-center">
                      <img src={Logos.Upload} className="" alt="icon-size" />
                      <img src={Logos.CopyIcon} className="" alt="icon-size" />
                      <img
                        src={Logos.Share}
                        alt=""
                        className=""
                        onClick={() => {
                          setSharePopup(!SharePopup);
                        }}
                      />
                      <img src={Logos.Trash} alt="icon-size" className="" />
                    </div>
                  </div>
                )}
                {vidActive && (
                  <div className="flex flex-col gap-2 h-[90%] w-[90%] mx-auto rounded-lg">
                    <div
                      style={
                        thumbnailContent && {
                          "--image-url": `url(${thumbnailContent})`,
                        }
                      }
                      className={` w-full bg-[image:var(--image-url)] h-full  object-cover ${
                        thumbnailContent ? "bg-img" : "bg-img-dummy"
                      }`}
                      onClick={() => {
                        setThumbnail(false);
                      }}
                    >
                      <div className="flex gap-4  flex-col h-full ">
                        {!thumbnail && (
                          <video
                            src={video}
                            className="h-full"
                            controls
                            autoPlay
                          ></video>
                        )}
                        <div
                          className={`flex gap-5 ${
                            thumbnail ? "h-full" : ""
                          }  pb-10 items-end justify-center`}
                        >
                          <img
                            src={Logos.ConversationDownload}
                            className="icon-size rounded-lg"
                            alt=""
                            onClick={handleDownloadVideoClick}
                          />
                          <Link to="/transcript">
                            <img
                              src={Logos.CopyIcon}
                              className="icon-size"
                              alt=""
                            />
                          </Link>
                          <img
                            src={Logos.Share}
                            alt=""
                            onClick={() => {
                              setSharePopup(!SharePopup);
                            }}
                            className="icon-size"
                          />
                          <img
                            src={Logos.Trash}
                            alt=""
                            onClick={togglePopup3}
                            className="icon-size"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {txtActive && (
                  <div className="flex flex-col px-10 gap-5 py-2 items-center justify-around w-[90%] h-[90%] border-[1px] rounded-lg aspect-square   mx-auto">
                    <div className="mt-[50px] flex flex-col justify-center items-center gap-6 h-full overflow-hidden overflow-ellipsis">
                      <img
                        src={Logos.CenterBtn}
                        alt="Close Button"
                        className="icon-size "
                      />
                      <div className="p-2 max-sm:p-0 overflow-y-scroll">
                        <p
                          className="text-[16px] break-words break-all text-[#A0A0A0] xxxxl:text-[30px] xxxxl:leading-[45px] max-xxs:text-[10px] leading-5 ml-3"
                          style={{ wordBreak: "break-word" }}
                        >
                          {msg}
                        </p>
                      </div>
                    </div>
                    {copyAlert ? (
                      <alert
                        id="alert-message absolute"
                        className="text-[#94A2F2]"
                      >
                        Copied!
                      </alert>
                    ) : (
                      <p style={{ opacity: 0 }}>Copied!</p>
                    )}
                    <div className="flex gap-5 items-center xxxxl:mb-20 justify-center ">
                      <img
                        id="image-pointer"
                        onClick={handleCopyClick}
                        src={Logos.ConversationDoubleFile}
                        className="icon-size"
                        alt="Copy"
                      />
                      {/* <img
                    src={Logos.Share}
                    alt=""
                    className="icon-size"
                    onClick={() => {
                      setSharePopup(!SharePopup);
                    }}
                  /> */}
                      <img
                        src={Logos.Trash}
                        onClick={togglePopup3}
                        alt=""
                        className="icon-size"
                      />
                    </div>
                  </div>
                )}
                {audActive && (
                  <div className="flex flex-col px-8 h-[90%] items-center justify-center w-full  gap-3 ">
                    <div
                      className={`" w-full h-full  ${
                        audiothumbnail ? "bg-aud-img" : ""
                      }  pb-1 object-cover"`}
                      onClick={() => {
                        setaudioThumbnail(false);
                      }}
                    >
                      <div className="flex flex-col w-full h-full gap-4 ">
                        {!audiothumbnail && (
                          <audio
                            src={audio}
                            className="h-full mx-auto"
                            style={{ width: "calc(80vh - 70px)" }}
                            controls
                            autoPlay="false"
                            preload="none"
                          ></audio>
                        )}

                        <div className="flex gap-5 h-full pb-10 xxxxl:pb-20 items-end justify-center">
                          <img
                            src={Logos.Download}
                            className="icon-size"
                            alt=""
                            onClick={handleDownloadAudioClick}
                          />

                          <img
                            src={Logos.Share}
                            alt=""
                            className="icon-size"
                            onClick={() => {
                              setSharePopup(!SharePopup);
                            }}
                          />
                          <img
                            src={Logos.Trash}
                            onClick={togglePopup3}
                            alt=""
                            className="icon-size"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col xl:w-[30%] lg:w-[450px]  max-lg:w-[100vw]  xxxxl:min-w-[450px] xl:min-w-[350px] flex-auto  h-full  ">
              <div className=" bg-white border-t-[1px] border-r-[1px border-b-[1px] p-5 border-l-[1px] shadow-sm">
                <div className="flex justify-between items-center ">
                  <div>
                    <h1 className="title-size  font-medium  max-xxxxxl:text-[24px] max-lg:text-[14px] whitespace-nowrap max-xl:text-[14px] max-xxxl:text-[18px] max-xxxxl:text-[22px] text-[30px]  max-xxs:text-[16px]">
                      History
                    </h1>
                  </div>
                  <div>
                    {conversationId &&
                      localStorage.getItem("conversationId") && (
                        <Link to="/reply">
                          <ButtonComp
                            className="rounded-[8px] z-0 bg-gradient-to-b xxxxl:w-[150px]  xxxxl:py-[8px] xxxxl:text-[20px] from-[#AEBFF2] to-[#94A2F2] text-white pl-5 py-2  max-xxs:pl-2 max-xxs:text-[12px] max-xxxxl:w-[100px] text-[12px]"
                            disabled={disable}
                            onClick={() => {
                              console.log("--->", content);
                            }}
                            name="Reply"
                            logo={Logos.ReplyButton}
                            size="max-xxxxl:w-[14px] max-xxs:w-[12px] w-[24px] xxxxl:top-[14px] top-[12px] xxxl:left-[18px] top-2 left-2.5 absolute"
                          />
                        </Link>
                      )}
                  </div>
                </div>
              </div>
              <div className=" bg-white  flex  justify-between cursor-pointer border-b-[2px] border-r-[1px] min-h-[40px] w-full shadow-sm">
                <div
                  onClick={() => {
                    setMessages(true);
                  }}
                  className={
                    messages
                      ? "border-b-[#3A37A6] border-b-[2px] w-full flex justify-center items-center xxxxl:py-3  h-full"
                      : "flex justify-center items-center w-full h-full border-b-[#CEDEF2] xxxxl:py-3 border-b-[2px]"
                  }
                >
                  <h1
                    className={
                      messages
                        ? "text-[#3A37A6] border-b-[#3A37A6] "
                        : " text-gray-400 "
                    }
                    style={{
                      fontSize: "calc(0.5rem + 0.4vw)",
                    }}
                  >
                    Messages
                  </h1>
                </div>
              </div>
              <div className="bg-white h-full rounded-md overflow-auto p-3 border-b-[1px] border-l-[1px] shadow-sm">
                {messages && (
                  <div className=" h-full overflow-auto">
                    <InboxComp
                      ImageHandler={ImageHandler}
                      VideoHandler={VideoHandler}
                      TextHandler={TextHandler}
                      textHandler={textHandler}
                      AudHandler={AudHandler}
                      data={content}
                      id={conversationId}
                      Name={conversationName}
                      // setThumbnailHanddler={setThumbnailHanddler}
                    />
                  </div>
                )}
                {!messages && (
                  <div className=" overflow-auto">
                    <div className="cursor-pointer flex flex-col gap-2 ">
                      <div className="flex items-center justify-start gap-4 ">
                        <div className="flex items-end h-[35px]">
                          <img
                            src={Logos.videoWithbg}
                            alt="Pic Profile"
                            className=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className=" text-[10px] xxxxl:text-[14px]">
                            Rayan Janes
                          </p>
                          <p className="text-[#A0A0A0] xxxxl:text-[14px] text-[10px] max-xxs:text-[8px] mt-1 font-[300]  w-full flex justify-start items-center">
                            Yesterday 1:06 AM
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 ">
                        <div
                          className="p-2 rounded-md bg-[#F5F5F5] flex items-center justify-center  "
                          style={{ width: "80%" }}
                        >
                          <h1 className="text-[12px] max-xxs:text-[9px] xxxxl:text-[14px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Volutpat vestibulum sem feugiat pharetra.
                          </h1>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="cursor-pointer flex flex-col gap-2 items-end">
                      <div className="flex items-center justify-end gap-4  ">
                        <div className="flex flex-col items-end">
                          <p className=" text-[10px] xxxxl:text-[14px]">
                            Jacob Billings
                          </p>
                          <p className="text-[#A0A0A0] xxxxl:text-[14px] text-[10px] max-xxs:text-[8px] mt-1 font-[300]  w-full flex justify-start items-center">
                            Yesterday 11:36 AM
                          </p>
                        </div>
                        <div className="flex items-end h-[35px] ">
                          <img
                            src={Logos.videoWithbg}
                            alt="Pic Profile"
                            className=" xxxxl:w-[50px]"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end  gap-2 w-full">
                        <div
                          className="p-2 rounded-md bg-[#F5F5F5] flex items-center justify-center "
                          style={{ width: "80%" }}
                        >
                          <h1 className="text-[12px] max-xxs:text-[9px] xxxxl:text-[14px]">
                            Lorem i14um dolor sit amet, consectetur adipiscing
                            elit. Volutpat vestibulum sem feugiat pharetra.
                          </h1>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="cursor-pointer flex flex-col gap-2">
                      <div className="flex items-center justify-start gap-4 ">
                        <div className="flex items-end h-[35px]">
                          <img
                            src={Logos.audioWithbg}
                            alt="Pic Profile"
                            className=" xxxxl:w-[50px]"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className=" text-[10px] xxxxl:text-[14px]">
                            Rayan Janes
                          </p>
                          <p className="text-[#A0A0A0] xxxxl:text-[14px] text-[10px] max-xxs:text-[8px] mt-1 font-[300]  w-full flex justify-start items-center">
                            Yesterday 1:06 AM
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div
                          className="p-2 rounded-md bg-[#F5F5F5] flex items-center justify-center "
                          style={{ width: "80%" }}
                        >
                          <h1 className="text-[12px] max-xxs:text-[9px] xxxxl:text-[14px]">
                            Lorem i14um dolor sit amet, consectetur adipiscing
                            elit. Volutpat vestibulum sem feugiat pharetra.
                          </h1>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="cursor-pointer flex flex-col gap-2 items-end">
                      <div className="flex items-center justify-end gap-4  ">
                        <div className="flex flex-col items-end">
                          <p className=" text-[10px] xxxxl:text-[14px]">
                            Jacob Billings
                          </p>
                          <p className="text-[#A0A0A0] xxxxl:text-[14px] text-[10px] max-xxs:text-[8px] mt-1 font-[300]  w-full flex justify-start items-center">
                            Yesterday 11:36 AM
                          </p>
                        </div>
                        <div className="flex items-end h-[35px] ">
                          <img
                            src={Logos.audioWithbg}
                            alt="Pic Profile"
                            className=" xxxxl:w-[50px]"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end  gap-2 w-full">
                        <div
                          className="p-2 rounded-md bg-[#F5F5F5] flex items-center justify-center "
                          style={{ width: "80%" }}
                        >
                          <h1 className="text-[12px] max-xxs:text-[9px] xxxxl:text-[14px]">
                            Lorem i14um dolor sit amet, consectetur adipiscing
                            elit. Volutpat vestibulum sem feugiat pharetra.
                          </h1>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                )}
              </div>
            </div>
          </div>
          {isOpen3 && (
            <LibraryDeletePopup
              title="Message"
              paragraph="This message will be lost forever for both the sender and recipient."
              text="Are you sure you want to delete this message?"
              handleClose1={togglePopup30}
              handleClose2={togglePopup3}
            />
          )}
          {isOpen01 && (
            <LibraryDeletePopup
              title="Entire Conversations"
              paragraph="All answers and replies in this Conversation will be lost."
              text="Are you sure you want to delete this conversation ?"
              handleClose1={togglePopup01}
              handleClose2={togglePopup001}
              DeleteHandler={DeleteHandler}
              deleteChat={DeleteChat}
              deleteConversation={true}
              deleteAll={deleteAll}
            />
          )}
          {isOpen2 && (
            <div
              className="popup-box fixed backdrop-opacity-20 z-50 bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center "
              onClick={togglePopup2}
            >
              <div
                className="box  relative rounded-md  lg:w-[450px] xxxs:w-[350px] bg-white    mx-auto flex flex-col  "
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="flex justify-between p-5 xxxl:py-7 pt-6 h-[20px] items-center">
                  <div className="title-size">Download Conversations</div>
                  <button className="btn-close " onClick={togglePopup2}>
                    <img
                      src={Logos.ClosePopup}
                      alt="Close Button"
                      className="lg:w-[20px] xxxs:w-[15px]"
                    />
                  </button>
                </div>
                <hr className=" border-1 border-[#CEDEF2] " />

                <form
                  onSubmit={onSubmitHandler}
                  className="flex  flex-col lg:px-6 px-4  xxxs:px-4  justify-center gap-2 "
                >
                  <div
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <p className="lg:text-[16px] xxxs:text-[13px] leading-[30px] xxxl:text-[18px] font-[400] text-[#262626]">
                      Include:
                    </p>

                    <div className="flex items-center gap-5">
                      <input
                        type="checkbox"
                        name="download"
                        id="text"
                        className="accent-[#3A37A6] h-4 w-4 cursor-pointer"
                        checked={payloadDownload.text}
                        onChange={() => {
                          setPayloadDownload((prev) => ({
                            ...prev,
                            text: !payloadDownload.text,
                          }));
                        }}
                      />
                      <label
                        htmlFor="text"
                        className="lg:text-[16px] xxxs:text-[13px] xxxl:text-[18px] leading-[30px] font-[400] text-[#262626] "
                      >
                        Text
                      </label>
                      <input
                        type="checkbox"
                        name="download"
                        id="text"
                        className="accent-[#3A37A6] h-4 w-4 cursor-pointer"
                        checked={payloadDownload.video}
                        onChange={(e) => {
                          setPayloadDownload((prev) => ({
                            ...prev,
                            video: !payloadDownload.video,
                          }));
                        }}
                      />
                      <label
                        htmlFor="video"
                        className="lg:text-[16px] xxxs:text-[13px] xxxl:text-[18px] leading-[30px] font-[400] text-[#262626] "
                      >
                        Video
                      </label>
                      <input
                        type="checkbox"
                        name="download"
                        id="text"
                        className="accent-[#3A37A6] h-4 w-4 cursor-pointer"
                        checked={payloadDownload.audio}
                        onChange={(e) => {
                          setPayloadDownload((prev) => ({
                            ...prev,
                            audio: !payloadDownload.audio,
                          }));
                        }}
                      />
                      <label
                        htmlFor="audio"
                        className=" lg:text-[16px] xxs:text-[13px] xxxl:text-[18px] leading-[30px] font-[400] text-[#262626] "
                      >
                        Audio
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-[14px] my-5 leading-[30px] xxxl:text-[20px] font-[400] text-[#FFFFFF] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] w-[110px] xxxl:w-[140px] self-center"
                    disabled={
                      !payloadDownload.text &&
                      !payloadDownload.video &&
                      !payloadDownload.audio
                    }
                  >
                    Download
                  </button>
                </form>
              </div>
            </div>
          )}

          {SharePopup && (
            <div
              className="popup-box fixed backdrop-opacity-20 z-50 bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center "
              onClick={() => {
                setSharePopup(!SharePopup);
              }}
            >
              <div
                className="box  relative rounded-md  lg:w-[400px] xxxs:w-[350px] bg-white mx-auto flex flex-col  "
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="flex justify-between p-6 h-[20px] xxxl:py-8 items-center">
                  <div className="lg:text-[18px] xxxs:text-[16px] xxxl:text-[22px]">
                    Share message
                  </div>
                  <button
                    className="btn-close "
                    onClick={() => {
                      setSharePopup(!SharePopup);
                    }}
                  >
                    <img
                      src={Logos.ClosePopup}
                      alt="Close Button"
                      className="lg:w-[20px] xxxs:w-[15px]"
                    />
                  </button>
                </div>
                <hr className=" border-1 border-[#CEDEF2] " />

                <div
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <div className="flex  flex-col lg:px-6 px-4  xxxs:px-4  justify-center gap-2 ">
                    <p className="lg:text-[16px] xxxs:text-[13px] xxxl:text-[18px] leading-[30px] font-[400] text-[#262626]">
                      Share individual response ?
                    </p>
                  </div>
                  <div
                    className="flex  lg:px-6 px-4  xxxs:px-4  items-center gap-2 justify-between"
                    style={{ marginTop: "8px" }}
                  >
                    <div className="flex gap-2">
                      <h1 className="lg:mt-2 xxxs:mt-1 text-[#94A2F2] underline  text-[10px] lg:text-[15px] xxxl:text-[17px] xxxs:text-[13px] self-center">
                        https://customer.candor.video/aef
                      </h1>
                    </div>
                    <ToggleButton
                      isActive={true}
                      width="[40px]"
                      height="[22px]"
                    />
                  </div>
                  <div className="flex lg:px-6 px-4  xxxs:px-4 py-4 gap-4">
                    <img
                      src={Logos.CopyBtn}
                      alt=""
                      className="bg-[#E7EEF9] p-1 rounded-md xxxl:w-8 xxxs:w-6"
                    />
                    <img
                      src={Logos.html}
                      alt=""
                      className="bg-[#E7EEF9] p-1 rounded-md xxxl:w-8 xxxs:w-6"
                    />
                  </div>
                </div>
                <button
                  className="text-[14px] xxxl:text-[20px] mb-5 leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px]  w-[100px] self-center "
                  onClick={() => {
                    setSharePopup(!SharePopup);
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          )}
          {isOpen5 && (
            <div
              className="popup-box fixed backdrop-opacity-20 z-10 bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center "
              onClick={togglePopup5}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="box  relative rounded-md lg:w-[500px] xxxs:w-[350px] bg-white lg:min-h-[200px]   mx-auto flex flex-col  "
              >
                <div className="flex justify-between px-6 lg:pt-6 xxxs:pt-5">
                  <div className="lg:text-[20px] xxxs:text-[16px] xxxl:text-[22px] text-black">
                    Delete Entire Conversations
                  </div>
                  <button className="btn-close " onClick={togglePopup5}>
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
                    className=" lg:text-[14px] xxxs:text-[11px] xxxl:text-[16px] px-4 gap-4  "
                    style={{ marginTop: "8px" }}
                  >
                    <p className="font-[300] leading-[22px] text-[#A0A0A0] ">
                      <span className="mr-1  font-[500] leading-[22px] text-[#262626]">
                        This cannot be undone.
                      </span>
                      All answers and replies in this converstaion will be lost.
                      we cannot recover thers once delete.
                    </p>
                    <br />
                    <p className="  font-[300] leading-[22px] text-[#A0A0A0] ">
                      Are you sure you want to delte this conversation?
                    </p>
                  </div>
                </div>
                <div className="flex justify-center my-3 gap-3">
                  <button
                    className="text-[14px] xxxl:text-[20px] leading-[30px] font-[400] text-[#A0A0A0] border-[1px] border-solid border-[#A0A0A0] p-1 rounded-[5px] my-3 w-[120px] self-center "
                    onClick={togglePopup5}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-[14px] xxxl:text-[20px] leading-[30px] font-[400] text-[#ffffff] border-[1px]  border-solid  p-1 rounded-[5px] my-3 w-[120px] self-center "
                    style={{
                      backgroundColor: "#F24B59",
                    }}
                    onClick={togglePopup5}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ContactDetailsComp;
