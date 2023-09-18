import React, { useEffect, useRef, useState } from "react";
import { Logos } from "../../assets";
import ButtonComp from "../../components/ButtonComp/ButtonComp";
import ChatComp from "../../components/ChatComp/ChatComp";
import InboxComp from "../../components/InboxComp/InboxComp";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "antd";
import Popup from "../../components/PopUp/PopUp";
import CalenderPopUp from "../../components/PopUp/CalenderPopUp";

import ToolTip from "../../components/ToolTip/ToolTip";
import "./Conversation.css";
import LibraryDeletePopup from "../../components/LibraryDeletePopup/LibraryDeletePopup";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Calendar } from "primereact/calendar";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
// import { ReadMessages } from "../../hooks/useConversation";
import {
  addNewContact,
  closeChat,
  deleteChat,
  deleteMsg,
  downloadConversation,
  filterConversation,
  getAllContact,
  readUnread,
  useFetchConversation,
  useReadMessages,
} from "../../hooks/useConversation";

import { useStore } from "../../store/auth";
import { io } from "socket.io-client";
import { Toast } from "primereact/toast";
import { useGlobalInfo } from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../../components/GloabalLoaderCopy/GloabalLoaderCopy";
import { useStoreConversationDownload } from "../../store/conversationDownload";
// import { useStore } from "../../store/auth";
import { ProgressSpinner } from "primereact/progressspinner";
import { root_url } from "../../utils/constants.jsx";

const { Title } = Typography;

const schema = yup
  .object({
    firstName: yup.string().required("Field Required"),
    lastName: yup.string().required("Field Required"),
    email: yup
      .string()
      .email()
      .matches(
        /^[\w\.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,4}$/,
        "Please enter a valid Email"
      ),
  })
  .required();

const Conversation = ({ props }) => {
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
  const error = (param) => {
    toast.current.error({
      severity: "error",
      summary: "error",
      detail: param,
    });
  };
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [payloadDownload, setPayloadDownload] = useState({
    text: false,
    video: false,
    audio: false,
  });
  const [filter, setFilter] = useState({
    dateRange: new Date(),
    lastMessage: "",
  });
  const setFilterConversation = useMutation(filterConversation);
  const [selected, setSelected] = useState(null);
  const [dataActive, setDataActive] = useState([]);
  const [dataClosed, setDataClosed] = useState([]);
  const [seen, setSeen] = useState(false);
  const { loading, setLoading } = useGlobalInfo();
  const [disable, setDisable] = useState(false);
  const { mutate } = useMutation(downloadConversation);
  // calling and assigning Api data to an array
  const { data: getData, refetch: conveFetch } = useFetchConversation();

  // function onSubmitHandler() {
  //   setLoading(true)
  //   mutate(payloadDownload, {
  //     onSuccess: (data) => {
  //       window.open(data.data.downloadLink, "_blank");
  //       setLoading(false)
  //     },
  //     onError: (error) => {
  //       showError();
  //       setLoading(false)
  //     },
  //   });
  //   togglePopup2();
  // }

  function onSubmitHandler() {
    // setLoading(true)
    setIsDownloadConversation(true);
    mutate(payloadDownload, {
      onSuccess: (data) => {
        // window.open(data.data.downloadLink, "_blank");
        // setLoading(false);
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
  }

  // Array will be again Filter the latest changes of api
  useEffect(() => {
    // setFileData({});
    if (setFilterConversation?.data?.data?.data) {
      const filteredData = setFilterConversation?.data?.data?.data?.filter(
        (conversation) => conversation.isClosed === false
      );
      setDataActive(filteredData);
      const filteredDataClosed =
        setFilterConversation?.data?.data?.data?.filter(
          (conversation) => conversation.isClosed === true
        );
      setDataClosed(filteredDataClosed);
    }
  }, [setFilterConversation?.data?.data]);

  useEffect(() => {
    if (getData?.data?.data) {
      const filteredData = getData.data.data.filter(
        (conversation) => conversation.isClosed === false
      );
      setDataActive(filteredData);
      const closeCheck = getData?.data?.data?.filter((e) => e._id === id);

      setClose(closeCheck?.[0]?.isClosed);
      const filteredDataClosed = getData.data.data.filter(
        (conversation) => conversation.isClosed === true
      );
      setDataClosed(filteredDataClosed);
    }
  }, [getData?.data?.data, getData]);

  // const handleReloadClick = () => {
  //   fetchContacts();
  // };

  const handleReloadClick = () => {
    conveFetch();
  };

  const handleClick = (index) => {
    fetchAllMessages();
    setSelected(index);
  };
  const userId = useStore((state) => state.userId);

  const [active, setActive] = useState(
    JSON.parse(localStorage.getItem("active"))
  );
  const [messages, setMessages] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isSelected, setIsSelected] = useState({
    parent: null,
    child: null,
  });
  const id = localStorage.getItem("conversationId");
  const [conversationId, setConversationId] = useState(id);
  const [isOpen5, setIsOpen5] = useState(false);
  const [conversationName, setConversationName] = useState("");
  const [read, setRead] = useState(false);

  const [recipientData, setRecipientData] = useState({
    ID: "",
    email: "",
    phone: "",
    address: "",
  });
  // const { mutate: readIcon } = useMutation(readUnread)
  // start usama code for download

  // const [isDownloadConversation, setIsDownloadConversation] = useState(false);
  // const [uploadSocket, setUploadSocket] = useState(null);
  // const [downloadAbleFile, setDownloadAbleFile] = useState("");
  // const [socketSetupComplete, setSocketSetupComplete] = useState(false);
  // for getting value from store
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
    localStorage.setItem("module", "Conversations");
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
  // useEffect(() => {
  //   if (socketSetupComplete) {
  //     showSuccess();
  //     setSocketSetupComplete(false);
  //   }
  // }, [socketSetupComplete]);
  // useEffect(() => {}, [uploadSocket]);
  const downloadFile = () => {
    window.open(downloadAbleFile, "_blank");
    setIsDownloadConversation(false);
    setIsReadyToDownload(!readyToDownload);
  };
  // end usama code

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
  const [closeCopy, setCloseCopy] = useState(
    JSON.parse(localStorage.getItem("active"))
  );
  const [contacts, setContacts] = useState();
  const [conversationModal, setConversationModal] = useState(false);
  // const [close, setClose] = useState(JSON.parse(localStorage.getItem('active')));
  const { mutate: dataContacts } = useMutation(getAllContact);
  const {
    data: content,
    isLoading: loadcontent,
    isError,
    refetch: fetchAllMessages,
  } = useReadMessages(conversationId);
  const togglePopup = async () => {
    setIsOpen(!isOpen);
  };

  function clearFilterHanlder() {
    setFilter({
      dateRange: new Date(),
      lastMessage: "",
    });
    conveFetch();
  }

  function ImageHandler() {
    setImgActive(true);
    setVidActive(false);
    setTxtActive(false);
    setAudActive(false);
  }

  const [video, setVideo] = useState("");
  const [audio, setAudio] = useState("");
  const [thumbnailContent, setThumbnailContent] = useState("");
  const [downloadVideo, setDownloadVideo] = useState("");
  const [downloadAudio, setDownloadAudio] = useState("");
  const [msgIndex, setindex] = useState(null);

  function VideoHandler(param) {
    setImgActive(false);
    setVidActive(true);
    setTxtActive(false);
    setAudActive(false);
    setVideo(param.content);
    setDownloadVideo(param.content);
    setThumbnailContent(param.messagePreviewThumbnail);
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
  const handleShareAudioClick = (data) => {
    navigator.clipboard.writeText(downloadAudio);
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Link Copied Successfully.",
      life: 3000,
    });
  };
  const handleShareVideoClick = (data) => {
    navigator.clipboard.writeText(downloadVideo);
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Link Copied Successfully.",
      life: 3000,
    });
  };
  const [close, setClose] = useState(false);

  const closeMutation = useMutation(closeChat);

  // Seen Unseen
  const ReadChat = async () => {
    // debugger
    // readMutation;
    setRead(!read);

    const payload = {
      read: read, // Toggle the read value
      id: id, // Toggle the read value
    };
    DeleteHandler();
    setConversationId("");
    await readMutation.mutate(payload);
    // localStorage.removeItem("conversationId");
    // localStorage.setItem('conversationId', '64b51e9160819fb07416b030')
    // fetchAllMessages(

    // )
  };

  useEffect(() => {
    if (!readMutation?.data?.error) {
      handleReloadClick();
    }
  }, [readMutation?.data]);

  // Close Chat
  const CloseChat = () => {
    // closeMutation;

    const payload = {
      closed: closeCopy,
      id: id,
    };
    DeleteHandler();
    setConversationId("");
    closeMutation.mutate(payload);
  };

  useEffect(() => {
    if (!closeMutation?.data?.error) {
      handleReloadClick();
    }
  }, [closeMutation?.data]);

  // Delete Intire Conversation
  const [deletes, setDeletes] = useState(false);
  const deleteMutation = useMutation(deleteChat);
  const DeleteChat = () => {
    // readMutation;

    setDeletes(deletes);

    const payload = {
      deletes: deletes, // Toggle the read value
      id: id, // Toggle the read value
    };
    DeleteHandler();
    localStorage.removeItem("conversationId");
    deleteMutation.mutate(payload);
  };
  useEffect(() => {
    setLoading(true);
    conveFetch()
      .then((data) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!deleteMutation?.data?.error) {
      handleReloadClick();
    }
  }, [deleteMutation?.data]);
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
    }
  }, [deleteMsgMutation?.data]);

  function DeleteHandler() {
    setImgActive(false);
    setVidActive(false);
    setAudActive(false);
    setTxtActive(false);
  }

  function deleteAll() {
    console.log("---->i am removing all ");
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
    setLoading(true);
    navigate("/share-conversation");
  }

  const TogglePopup = () => {
    setIsToggle(!isToggle);
  };
  const [socket, setSocket] = useState(null);
  // https://to-dot-candore-be.de.r.appspot.com/
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
  const CreateContact = useMutation(addNewContact);
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);

  function onSubmitFilter() {
    localStorage.removeItem("conversationId");
    const userId = localStorage.getItem("userId");
    togglePopup4();

    const payload = {
      userId: userId,
      lastMessage: filter.lastMessage,
      startDate: filter.dateRange[0],
      endDate: filter.dateRange[1],
    };

    setFilterConversation.mutate(payload);
    setIsOpen4(!isOpen4);
  }

  const fetchingContacts = () => {
    setLoading(true);
    dataContacts("payload", {
      onSuccess: (data) => {
        setContacts(data);
        setLoading(false);
      },
      onError: () => {
        setLoading(false);
      },
    });
  };
  const onSubmit = (data) => {
    setLoading(true);

    // onSuccess: (data) => {

    //   console.log(' ia m sus')
    //   show(data.message);
    //   // isLoading(!loadingState);
    //  if(data.error== false){
    //    localStorage.setItem('receiverId',data?.data?._id);
    //    navigate('/reply');
    //    setTimeout(() => {
    //     isLoading(false)
    //   }, 1000)
    //  }
    // },
    // onerror: (data) => {

    //   error(data.message);
    //   isLoading(false);
    // },
    localStorage.setItem("conversationId", null);

    CreateContact.mutate(data, {
      onSuccess: (data) => {
        // isLoading(!loadingState);
        if (data.error == false) {
          localStorage.setItem("receiverId", JSON.stringify(data?.data?._id));

          navigate("/reply");
          setLoading(false);

          //  setTimeout(() => {
          //   isLoading(false)
          // }, 1000)
        } else if (data.error == true) {
          // setTimeout(() => {
          //   isLoading(false)
          // }, 1000)

          setLoading(false);

          show(data.message);
        }
      },
      onError: (data) => {
        togglePopup1();
        error(data.message);
        // setTimeout(() => {
        //   isLoading(false)
        // }, 1000)
      },
      onSettled: () => {
        setTimeout(() => {
          isLoading(false);
        }, 1000);
      },
    });
    isLoading(false);
    // .finally(f() => {
    //   // After API call completion (success or error)
    //   console.log('i am callig fially ')
    //  isLoading(false);
    // });
  };
  // const onSubmit = (data) => {
  //   // isLoading(!loadingState);

  //   CreateContact.mutate(data, {
  //     onSuccess: (data) => {

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

  //       error(data.message);
  //       // isLoading(!loadingState);
  //     },
  //   });
  // };
  const [thumbnail, setThumbnail] = useState(true);
  const [audiothumbnail, setaudioThumbnail] = useState(true);

  // Timer in message
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
  return (
    <>
      {loading ? (
        <GlobalLoaderCopy />
      ) : (
        <div className="rounded-lg shadow-md">
          <Toast ref={toast} color="primary" position="top-right" />
          {isToggle && <CalenderPopUp CloseCalender={TogglePopup} />}
          {isOpen && (
            <Popup
              handleClose={togglePopup}
              popup={togglePopup1}
              onclickHanddler={conversationIdHanddler}
              data={contacts}
              setConversationId={setConversationId}
              deletehanddler={DeleteHandler}
            />
          )}

          <div
            className="flex  w-full max-xl:flex-wrap "
            style={{
              height: "calc(100vh - 90px)",
            }}
          >
            <div
              className={`flex flex-col w-[25%]  max-xxs:w-full xxxxl:min-w-[400px] xl:min-w-[350px] flex-auto  xxl:min-w-[350px]  h-full `}
            >
              <div className=" bg-white border-t-[1px] border-l-[1px]  flex items-center flex-nowrap justify-between border-b-[1px] border-r-[1px] p-4 w-full shadow-sm">
                <div>
                  <h1 className="  font-medium  whitespace-nowrap title-size">
                    Conversation
                  </h1>
                </div>
                <div className="flex gap-3">
                  <img
                    src={Logos.AddSquare}
                    alt="Add Button"
                    className="icon-size cursor-pointer  "
                    onClick={() => {
                      togglePopup();
                      fetchingContacts();
                    }}
                  />
                  <img
                    src={Logos.Filter}
                    alt="Filter Button"
                    className="icon-size cursor-pointer  "
                    onClick={togglePopup4}
                  />
                  <img
                    src={Logos.RotateRight}
                    alt="Rotate Right"
                    className="icon-size cursor-pointer  "
                    onClick={clearFilterHanlder}
                  />
                </div>
              </div>
              <div className=" bg-white  flex  justify-between cursor-pointer border-b-[2px] border-r-[1px] min-h-[40px] w-full shadow-sm">
                <div
                  onClick={() => {
                    setActive(true);
                    localStorage.setItem("active", JSON.stringify(true));
                    localStorage.setItem(
                      "conversationId",
                      JSON.stringify(null)
                    );
                    DeleteHandler();
                    setConversationId("");
                    setCloseCopy(true);
                  }}
                  className={
                    active
                      ? "border-b-[#3A37A6] border-b-[2px] flex justify-center xxxxl:py-3 items-center w-[50%] h-full"
                      : "flex justify-center items-center w-[50%] h-full xxxxl:py-3"
                  }
                >
                  <h1
                    className={
                      active
                        ? "text-[#3A37A6] border-b-[#3A37A6] "
                        : "text-gray-400 "
                    }
                    style={{
                      fontSize: "calc(0.5rem + 0.4vw)",
                    }}
                  >
                    Active
                  </h1>
                </div>
                <div
                  onClick={() => {
                    setActive(false);
                    localStorage.setItem("active", JSON.stringify(false));
                    localStorage.setItem(
                      "conversationId",
                      JSON.stringify(null)
                    );
                    setConversationId("");
                    DeleteHandler();
                    setCloseCopy(false);
                  }}
                  className={
                    !active
                      ? "border-b-[#3A37A6] xxxxl:py-3 border-b-[2px] flex justify-center items-center w-[50%] h-full"
                      : "flex justify-center xxxxl:py-3 items-center w-[50%] h-full"
                  }
                >
                  <h1
                    className={
                      !active
                        ? "text-[#3A37A6] border-b-[#3A37A6] "
                        : "text-gray-400 "
                    }
                    style={{
                      fontSize: "calc(0.5rem + 0.4vw)",
                    }}
                  >
                    Closed
                  </h1>
                </div>
              </div>
              <div className=" rounded-md bg-white  h-full overflow-auto  cursor-pointer border-b-[2px] border-r-[1px]  w-full shadow-sm">
                {active ? (
                  <div className="flex flex-col overflow-auto  h-full">
                    {/* by using ternary checking data must not be empty */}
                    {dataActive.length === 0 ? (
                      <p className="text-[#000000] w-full h-full flex justify-center items-center">
                        no conversation found{" "}
                      </p>
                    ) : (
                      dataActive.map((item, index) => {
                        // console.log('index',index)
                        // if(index==0  ){
                        //   if( conversationId=='null' || conversationId=='')
                        //   {localStorage.setItem('conversationId',item._id);
                        //    setConversationId(item._id);
                        //    console.log('---->i ma cover',item._id)
                        // }

                        // }
                        return (
                          <ChatComp
                            key={index}
                            data={item}
                            index={index}
                            closeCopy={closeCopy}
                            setCloseCopy={setCloseCopy}
                            selectedChatIndex={selectedChatIndex}
                            setSelectedChatIndex={setSelectedChatIndex}
                            handleReloadClick={handleReloadClick}
                            setSeen={setSeen}
                            seen={seen}
                            selected={selected}
                            handleClick={handleClick}
                            setIsSelected={setIsSelected}
                            isSelected={isSelected}
                            idHanddler={conversationIdHanddler}
                            active={true}
                            DeleteHandler={DeleteHandler}
                            setindex={setindex}
                          />
                        );
                      })
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    {/* <span>tets</span> */}

                    {dataClosed.length === 0 ? (
                      <p className="text-[#000000] w-full h-full flex justify-center my-auto items-center">
                        no conversation found{" "}
                      </p>
                    ) : (
                      dataClosed.map((item, index) => {
                        return (
                          <ChatComp
                            key={index}
                            closeCopy={closeCopy}
                            setCloseCopy={setCloseCopy}
                            data={item}
                            index={index}
                            selectedChatIndex={selectedChatIndex}
                            setSelectedChatIndex={setSelectedChatIndex}
                            handleReloadClick={handleReloadClick}
                            setSeen={setSeen}
                            seen={seen}
                            selected={selected}
                            handleClick={handleClick}
                            setIsSelected={setIsSelected}
                            isSelected={isSelected}
                            idHanddler={conversationIdHanddler}
                            active={true}
                            DeleteHandler={DeleteHandler}
                            setindex={setindex}
                          />
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col w-[50%] max-w-[60%] w-full h-full max-lg:min-w-[100%]">
              {conversationName &&
                conversationId &&
                conversationId != "null" && (
                  <div className=" bg-white border-t-[1px]  border-l-[1px]  relative col-end-7 flex items-center  justify-between p-4  border-b-[1px] shadow-sm  ">
                    <div
                      className="flex gap-1 max-xxs:gap-[2px] max-sm:gap-1 w-[50%] parent"
                      // onClick={() => {
                      //   setConversationModal(!conversationModal);
                      //   let classss = document.querySelector("#child1");

                      //   classss.classList.toggle("child");
                      // }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {conversationName && conversationId && (
                        <h1 className="title-size max-xs:text-[14px] max-w-[100%] overflow-ellipsis overflow-hidden  px-2  font-medium  max-xxxxxl:text-[24px] max-lg:text-[14px] whitespace-nowrap max-xl:text-[14px] max-xxxl:text-[18px] max-xxxxl:text-[22px] text-[30px]  max-xxs:text-[16px] ">
                          Conversation With {conversationName}
                        </h1>
                      )}
                      {conversationName && (
                        <img
                          className="w-[18px]  xxxxl: "
                          id="child1"
                          src={Logos.Arrowdown}
                          alt="Arrow Down"
                        />
                      )}
                      {conversationModal && (
                        <div className="absolute top-14 left-0 flex flex-col gap-3 xxxxl:gap-4 bg-white shadow-sm p-5 max-w-[350px] xxxxl:max-w-[550px] w-full">
                          <div className="flex justify-between items-center">
                            <h1 className="font-medium  max-xs:text-[10px] xxxxl:text-[18px] max-xxs:text-[8px] ">
                              Organization :
                            </h1>
                            <p className="text-[gray] text-[12px] xxxxl:text-[18px]  max-xs:text-[10px] max-xxs:text-[8px]">
                              {recipientData.organization
                                ? recipientData.organization
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
                    {conversationName && (
                      <div className="flex gap-3 max-sm:gap-2 max-xxs:gap-[2px]   justify-end w-[50%]">
                        <img
                          src={Logos.Share}
                          alt=""
                          className="icon-size cursor-pointer"
                          onClick={() => {
                            ShareHandler();
                          }}
                        />
                        <img
                          src={Logos.Message}
                          alt=""
                          onClick={ReadChat}
                          className="icon-size cursor-pointer"
                        />
                        <img
                          src={Logos.Trash}
                          alt=""
                          onClick={togglePopup001}
                          className="icon-size cursor-pointer"
                        />
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
                    )}
                    <div></div>
                  </div>
                )}
              <div className="bg-white    overflow-hidden h-full  border-b-[2px] border-r-[1px] flex justify-center items-center    shadow-sm">
                {imgActive && (
                  <div className="flex flex-col  justify-center w-[80%]">
                    <img
                      src={Logos.CenterImage}
                      className="icon-size w-full  object-cover rounded-md"
                    />
                    <div className="flex gap-5 items-center justify-center">
                      <img
                        src={Logos.Upload}
                        className="cursor-pointer"
                        alt="icon-size"
                      />
                      <img
                        src={Logos.CopyIcon}
                        className="cursor-pointer"
                        alt="icon-size"
                      />
                      <img
                        src={Logos.Share}
                        alt=""
                        className=""
                        onClick={() => {
                          // setSharePopup(!SharePopup);
                        }}
                      />
                      <img
                        src={Logos.Trash}
                        alt="icon-size"
                        className="cursor-pointer"
                      />
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
                      className={` w-full h-full  object-cover ${
                        thumbnailContent && thumbnail
                          ? "bg-img bg-[image:var(--image-url)]"
                          : ""
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
                            className="icon-size cursor-pointer rounded-lg"
                            alt=""
                            onClick={handleDownloadVideoClick}
                          />
                          {/* <Link to="/transcript">
                            <img
                              src={Logos.CopyIcon}
                              className="icon-size cursor-pointer"
                              alt=""
                            />
                          </Link> */}
                          <img
                            src={Logos.Share}
                            alt=""
                            onClick={() => {
                              handleShareVideoClick();
                              // setSharePopup(!SharePopup);
                            }}
                            className="icon-size cursor-pointer"
                          />
                          <img
                            src={Logos.Trash}
                            alt=""
                            onClick={togglePopup3}
                            className="icon-size cursor-pointer"
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
                        className="icon-size cursor-pointer"
                      />
                      <div className="p-2 max-sm:p-0  overflow-y-auto ">
                        <p
                          className="text-[16px] break-words text-justify break-all text-[#A0A0A0] xxxxl:text-[30px] xxxxl:leading-[45px] max-xxs:text-[10px] leading-5 ml-3"
                          style={{
                            wordBreak: "break-word",
                          }}
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
                        className="icon-size cursor-pointer"
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
                            style={{
                              width: "calc(80vh - 70px)",
                            }}
                            controls
                            autoPlay="false"
                            preload="none"
                          ></audio>
                        )}

                        <div className="flex gap-5 h-full pb-10 xxxxl:pb-20 items-end justify-center">
                          <img
                            src={Logos.Download}
                            className="icon-size cursor-pointer"
                            alt=""
                            onClick={handleDownloadAudioClick}
                          />

                          <img
                            src={Logos.Share}
                            alt=""
                            className="icon-size cursor-pointer "
                            onClick={() => {
                              handleShareAudioClick();
                            }}
                          />
                          <img
                            src={Logos.Trash}
                            onClick={togglePopup3}
                            alt=""
                            className="icon-size cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-[25%] xxl:max-w-[500px] max-xxs:w-full xxxxl:min-w-[450px] xl:min-w-[350px] flex-auto  h-full  ">
              <div className=" bg-white border-t-[1px] border-r-[1px] p-4 border-b-[1px] border-l-[1px]  shadow-sm">
                <div className="flex justify-between items-center ">
                  <div>
                    <h1 className="title-size  font-medium  max-xxxxxl:text-[24px] max-lg:text-[14px] whitespace-nowrap max-xl:text-[14px] max-xxxl:text-[18px] max-xxxxl:text-[22px] text-[30px]  max-xxs:text-[16px]">
                      History
                    </h1>
                  </div>
                  <div>
                    {conversationId &&
                      localStorage.getItem("conversationId") != "null" && (
                        <Link to="/reply">
                          <ButtonComp
                            className="rounded-[8px] z-0 bg-gradient-to-b xxxxl:w-[150px]  xxxxl:py-[8px] xxxxl:text-[20px] from-[#AEBFF2] to-[#94A2F2] text-white pl-5 py-2  max-xxs:pl-2 max-xxs:text-[12px] max-xxxxl:w-[100px] text-[12px]"
                            disabled={disable}
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
                      setindex={setindex}
                      msgIndex={msgIndex}
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
                  {/* <button
                type="submit"
                className="text-[14px] my-5 leading-[30px] xxxl:text-[20px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px]  w-[110px]  xxxl:w-[140px] self-center "
              >
                Download
              </button> */}
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

          {isOpen4 && (
            <div
              className="popup-box fixed backdrop-opacity-20  bg-black/30 left-0 top-0 w-full min-h-[100vh] z-10 flex justify-center items-center "
              onClick={togglePopup4}
            >
              <div
                className="box  relative  rounded-md  w-[450px]  bg-white lg:min-h-[260px]   mx-auto flex flex-col  "
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="flex justify-between px-5 lg:pt-8 p-3  xxxs:pt-5 h-[20px] items-center">
                  <div className="title-size">Filter conversations</div>
                  <button className="btn-close " onClick={togglePopup4}>
                    <img
                      src={Logos.ClosePopup}
                      alt="Close Button"
                      className="lg:w-[20px] xxxs:w-[15px]"
                    />
                  </button>
                </div>
                <hr className=" border-1 border-[#CEDEF2] mt-5" />
                <form onSubmit={onSubmitFilter}>
                  <div
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <div
                      className="flex flex-col px-4 gap-4  "
                      style={{ marginTop: "8px" }}
                    >
                      <div className="flex gap-2 flex-col  relative">
                        <label
                          className="text-[#262626]  font-[500]"
                          style={{
                            fontSize: "calc(0.7rem + 0.2vw)",
                          }}
                        >
                          Date Range
                        </label>

                        <Calendar
                          value={filter.dateRange}
                          onChange={(e) => {
                            setFilter((prev) => ({
                              ...prev,
                              dateRange: e.value,
                            }));
                          }}
                          selectionMode="range"
                          readOnlyInput
                          touchUI="true"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 flex-col m-4">
                      <div className="flex gap-1">
                        <label
                          className="text-[#262626] font-[500]"
                          style={{
                            fontSize: "calc(0.7rem + 0.2vw)",
                          }}
                        >
                          Last Message Sender
                        </label>
                        <div className="py-1">
                          <ToolTip />
                        </div>
                      </div>

                      <select
                        className="bg-[#F5F5F5] p-3 rounded-[5px]"
                        name="message"
                        id="message"
                        value={filter.lastMessage}
                        onChange={(e) => {
                          setFilter((prev) => ({
                            ...prev,
                            lastMessage: e.target.value,
                          }));
                        }}
                      >
                        <option value="" className="bg-[#ffffff] p-3">
                          Select
                        </option>
                        <option value="us" className="bg-[#ffffff] p-3">
                          Us
                        </option>
                        <option value="them" className="bg-[#ffffff] p-3">
                          Them
                        </option>
                      </select>
                      {/* <div className="flex gap-1">
                    <label
                      className="text-[#262626] font-[500]"
                      style={{
                        fontSize:
                          "calc(0.7rem + 0.2vw)",
                      }}
                    >
                      Last Message Sender
                    </label>
                    <div className="py-1">
                      <ToolTip />
                    </div>
                  </div> */}
                      {/* <div className="w-full flex justify-between relative items-center ">
                    <div className="flex flex-col w-full">
                      <div
                        className="flex items-center gap-3 justify-between cursor-pointer w-full bg-[#F5F5F5] p-3 rounded-[5px]  "
                        onClick={
                          openDropdownHanddler2
                        }
                      >
                        <input
                          placeholder="Select.."
                          value={dropdown2}
                          disabled
                          className="placeholder-input-modal"
                        />
                        <div
                          className="border-l-[1px] border-b-[1px] h-3 border-black border-solid w-3  "
                          style={{
                            transform:
                              opendropdown2
                                ? "rotate(135deg)"
                                : "rotate(-45deg)",
                            borderBottomLeftRadius:
                              "3px",
                          }}
                        ></div>
                      </div>

                      {opendropdown2 && (
                        <div className="flex flex-col absolute top-10 lg:w-[418px] xxxs:w-[316px] z-10 rounded-[10px] drop-shadow-lg">
                          <label
                            htmlFor="dropdown1"
                            className="cursor-pointer  w-full bg-[#ffffff] p-3   "
                          >
                            Select..
                          </label>
                          <input
                            type="radio"
                            id="dropdown1"
                            name="dropdown"
                            value="All contacts"
                            className="none"
                            style={{
                              display: "none",
                            }}
                            onClick={(el) => {
                              setFilter(
                                (prev) => ({
                                  ...prev,
                                  LastMessage: "",
                                })
                              );
                            }}
                          />
                          <hr className=" border-1 border-[#CEDEF2] " />
                          <label
                            htmlFor="contact"
                            className="cursor-pointer  w-full bg-[#ffffff] p-3  "
                          >
                            Us
                          </label>
                          <input
                            type="radio"
                            id="contact"
                            name="dropdown"
                            value="All contacts"
                            className="none"
                            style={{
                              display: "none",
                            }}
                            onClick={(el) => {
                              setFilter((prev)=>({
                                ...prev,
                                LastMessage: "Us",
                              }))
                            }}
                          />
                          <hr className=" border-1 border-[#CEDEF2] " />
                          <label
                            htmlFor="donations"
                            className="cursor-pointer w-full bg-[#ffffff] p-3 "
                          >
                            Them
                          </label>
                          <input
                            type="radio"
                            id="donations"
                            value="Donations"
                            name="dropdown"
                            className="none"
                            style={{
                              display: "none",
                            }}
                            onClick={(el) => {
                              setFilter((prev)=>({
                                ...prev,
                                LastMessage: "Them",
                              }))
                            }}
                          />

                        </div>
                      )}
                    </div>
                  </div> */}
                    </div>
                  </div>
                  <div className="flex justify-center my-3 gap-3">
                    <button
                      className="text-[16px] leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[100px] self-center "
                      // onClick={togglePopup4}
                      type="submit"
                    >
                      Apply
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {isOpen1 && (
            <div className="popup-box z-10 fixed backdrop-opacity-20  bg-black/30 left-0 top-0 w-full h-[100vh] flex justify-center items-center ">
              <div className="box  relative rounded-md  lg:w-[450px] xxxs:w-[350px] bg-white lg:min-h-[260px]   mx-auto flex flex-col  ">
                <div className="flex justify-between px-5 lg:pt-8 p-3  xxxs:pt-5 h-[20px] items-center">
                  <div className="title-size">Add new contact</div>
                  <button
                    className="btn-close "
                    onClick={() => {
                      togglePopup1();
                    }}
                  >
                    <img
                      src={Logos.ClosePopup}
                      alt="Close Button"
                      className="lg:w-[20px] xxxs:w-[15px]"
                    />
                  </button>
                </div>
                <hr className=" border-1 border-[#CEDEF2] mt-5" />
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col justify-between h-[100%]"
                >
                  <div
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <div
                      className="flex px-4 gap-4  "
                      style={{ marginTop: "8px" }}
                    >
                      <div>
                        <div className="flex gap-2 flex-col">
                          <label className="text-[#262626] inner-size font-[500]">
                            First Name
                          </label>
                          <div className="w-full flex justify-between items-center ">
                            <input
                              type="text"
                              placeholder="Enter your Name"
                              {...register("firstName")}
                              className="placeholder-input-modal relative lg:text-[16px] outline-none bg-[#F5F5F5] placeholder:text-[#A0A0A0] placeholder:text-[12px] placeholder:font-[200]   rounded-md border-2 border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full"
                              style={{
                                paddingLeft: "28px",
                              }}
                            />
                            <img
                              src={Logos.Person}
                              className="absolute lg:w-[20px] xxxs:w-[15px]  ml-2"
                            />
                          </div>
                        </div>
                        {errors.firstName?.message && (
                          <p className="text-red-600  mt-[5px] text-[12px]">
                            {errors.firstName?.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <div className="flex gap-2 flex-col">
                          <label className="text-[#262626] inner-size font-[500]">
                            Last Name
                          </label>
                          <div className="w-full flex justify-between items-center ">
                            <input
                              type="text"
                              placeholder="Enter your Name"
                              {...register("lastName")}
                              className="placeholder-input-modal relative lg:text-[16px] outline-none   rounded-md border-2 bg-[#F5F5F5] border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full placeholder:text-[12px]"
                              style={{
                                paddingLeft: "28px",
                              }}
                            />
                            <img
                              src={Logos.Person}
                              className="absolute lg:w-[20px] xxxs:w-[15px]  ml-2"
                            />
                          </div>
                        </div>
                        {errors.lastName?.message && (
                          <p className="text-red-600  mt-[5px]  text-[12px]">
                            {errors.lastName?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 flex-col m-4">
                      <label className="text-[#262626] inner-size font-[500]">
                        Email*
                      </label>
                      <div className="w-full flex justify-between  items-center ">
                        <input
                          type="text"
                          placeholder="Enter your email address"
                          className="placeholder-input-modal relative lg:text-[16px] outline-none bg-[#F5F5F5] placeholder:text-[12px] placeholder:font-[200]   rounded-md border-2 border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full"
                          style={{
                            paddingLeft: "35px",
                          }}
                          {...register("email", {
                            required: true,
                          })}
                        />
                        <img
                          src={Logos.EmailIcon}
                          className="absolute lg:w-[20px] xxxs:w-[15px]  ml-2"
                        />
                      </div>
                    </div>
                    {errors.email?.message && (
                      <p className="text-red-600  mt-[-10px] ml-5 text-[12px]">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center my-4 gap-3">
                    <button
                      type="button"
                      className="text-[16px] leading-[30px] font-[400] text-[#94A2F2] border-[1px] border-solid border-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] self-center "
                      onClick={() => {
                        togglePopup1();
                      }}
                    >
                      Cancel
                    </button>
                    <input
                      type="submit"
                      className="cursor-pointer text-[16px] leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] self-center "
                      value="Add Contact"
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
          {/* {SharePopup && (
            <div
              className="popup-box fixed backdrop-opacity-20 z-50 bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center "
              onClick={() => {
                // setSharePopup(!SharePopup);
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
                      // setSharePopup(!SharePopup);
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
                    // setSharePopup(!SharePopup);
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          )} */}
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

export default Conversation;
