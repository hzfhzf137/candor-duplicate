import React, { useEffect, useRef, useState } from "react";
import { Logos } from "../../assets";
import { useNavigate } from "react-router";

import CreateNewFolder from "../../components/PopUp/CreateNewFolder";
import DeleteVideo from "../../components/PopUp/DeleteVideo";
import MoveFolder from "../../components/PopUp/MoveFolder";
import VideoSetPermission from "../../components/PopUp/VideoSetPermission";
import { Link } from "react-router-dom";
import MenuDropdown from "../../components/MenuDropdown/MenuDropdown";
import { useGlobalInfo } from "../../contexts/GlobalContext";
import { useMutation } from "react-query";
import { shareSubFolder } from "../../hooks/useVideo";
import {
  createFolder,
  createStep,
  createSubFolder,
  deleteFolder,
  deleteSubFolder,
  getAllStep,
  renameFolder,
  renameSubFolder,
  useFetchFolders,
} from "../../hooks/useVideo";
import GlobalLoaderCopy from "../../components/GloabalLoaderCopy/GloabalLoaderCopy";
import { Toast } from "primereact/toast";

const menuarray = [
  // {
  //   label: "View",
  //   icon: Logos.VideoEye,
  //   link: "#",
  // },
  // {
  //   label: "See Interactions",
  //   icon: Logos.VideoInteraction,
  //   link: "/conversation",
  // },
  {
    label: "Rename",
    id: "1",
    icon: Logos.videoPencil,
    link: "#",
  },
  {
    label: "Move to Folder",
    icon: Logos.VedioDocumentUpload,
    link: "#",
  },
  {
    label: "Duplicate",
    icon: Logos.VideoCopy,
    link: "#",
  },
  {
    label: "Share",
    icon: Logos.VideoShareArrow,
    link: "#",
  },
  {
    label: "Delete",
    id: "0",
    icon: Logos.trash2,
    link: "#",
  },
];
const menuarray1 = [
  {
    label: "New Video",
    icon: Logos.AddSquareIcon,
    link: "#",
  },
  {
    label: "Rename Folder",
    icon: Logos.videoUserSquare,
    link: "#",
  },

  {
    label: "Delete Folder",
    icon: Logos.trash2,
    link: "#",
  },
];

const VideoModule = () => {
  const toast = useRef(null);

  function onsuccess(param) {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: param,
    });
  }

  function onerror(param) {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: param,
    });
  }

  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDuplicate, setIsOpenDuplicate] = useState(false);
  const [isOpen0, setIsOpen0] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [showSubFolderModal, setShowSubFolderModal] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const {
    videoState,
    setVideoState,
    setInteraction,
    sharedVideoData,
    setSharedVideoData,
    setSelectedSubFolderIndex,
    selectedSubFolderIndex,
    loading,
    setThumbnail,
    thumbnail,
    setLoading,
    setSteps,
    steps,
    selectedFolderIndex,
    setSelectedFolderIndex,
    stepId,
    folderId,
    setFolderId,counter,
    subfolderId,setCounter,
    setSubfolderId,
    selectedSubFolderData,
    setSelectedSubFolderData,
  } = useGlobalInfo();

  const [isPermission, setIsPermission] = useState(false);
  const shareVideo = useMutation(shareSubFolder);
  const [selectedDropdownIndex, setSelectedDropdownIndex] = useState(null);
  const [selectedFolderData, setSelectedFolderData] = useState(null);

  const handleFolderClick = (index) => {
    if (selectedSubFolderIndex) {
      setSelectedSubFolderIndex(null);
    }
    if (selectedFolderIndex == index && selectedSubFolderIndex == null) {
      setSelectedFolderIndex(null);
    } else {
      setSelectedFolderIndex(index);
    }
  };

  const {
    data: GetFolders,
    isLoading,
    isError,
    refetch: folderRefetch,
  } = useFetchFolders();
useEffect(()=>{
setCounter(GetFolders?.data[0]?.subFolders[0]?.counter)
},[GetFolders])


  const { mutate: folderCreate } = useMutation(createFolder);
  // const { mutate: subFolders } =
  //   useMutation(getSubFolder);
  const { mutate: subFolderCreate } = useMutation(createSubFolder);
  const { mutate: stepCreate } = useMutation(createStep);
  const { mutate: fetchStep } = useMutation(getAllStep);

  function stepHandler() {
    fetchStep(subfolderId, {
      onSuccess: (data) => {
        setSteps(data.data);
        setLoading(false);
      },
      onError: () => {
        setLoading(false);
      },
    });
  }

  useEffect(() => {
    stepHandler();
  }, [subfolderId]);
  useEffect(() => {
    stepHandler();
  }, []);
  const { mutate: folderRename } = useMutation(renameFolder);
  const { mutate: subFolderRename } = useMutation(renameSubFolder);

  const { mutate } = useMutation(deleteFolder);
  const { mutate: subFolderDelete } = useMutation(deleteSubFolder);

  function deleteFolderHandler(id) {
    setLoading(true);
    mutate(id, {
      onSuccess: (data) => {
        setVideoState([]);
        setLoading(false);
        folderRefetch();
      },
      onError: (error) => {
        setLoading(false);
      },
    });
  }

  function deleteSubFolderHandler(id) {
    setLoading(true);
    subFolderDelete(id, {
      onSuccess: (data) => {
        setLoading(false);
        setVideoState([]);
        folderRefetch();
      },
      onError: (error) => {
        setLoading(false);
      },
    });
  }

  const navigate = useNavigate();

  function routeHandler1() {
    navigate("/integrations");
  }

  function AddNewStepHandler(id) {
    // localStorage.setItem('stepId',id);

    navigate(`/AddNewStep/${id}`);

    // navigate(`/AddNewStep/${localStorage.getItem('stepId')}`);
  }

  function Dropdown1() {
    setShowDropdown1(true);
    setShowDropdown(false);
  }

  function Dropdown3() {
    setShowDropdown3(!showDropdown3);
  }

  function Dropdown4() {
    setShowDropdown4(!showDropdown4);
  }

  function Dropdown5() {
    setShowDropdown5(!showDropdown5);
  }

  function routeHandler() {
    shareVideo.mutate(subfolderId, {
      onSuccess: (data) => {
        navigate(`/share-video/${data?.data?.id}`);
      },
    });
  }

  const togglePopup = () => {
    setIsOpen0(!isOpen0);

    setShowDropdown1(false);
    setShowDropdown(false);
  };
  const SetPermission = () => {
    setIsPermission(!isPermission);
    setShowDropdown(false);
  };
  const folderPopup = () => {
    setIsOpen(!isOpen);
    setShowDropdown1(false);
  };
  const DuplicatePopup = () => {
    setIsOpenDuplicate(!isOpenDuplicate);
    setShowDropdown1(false);
  };
  const togglePopup1 = (data) => {
    if (typeof data == "string") {
      setLoading(true);
      const payload = {
        folderName: data,
      };
      folderCreate(payload, {
        onSuccess: (data) => {
          if (data.statusCode === 500) {
            setLoading(false);
            onerror(data?.message);
          } else {
            onsuccess(data?.message);
            folderRefetch();
          }
        },
        onError: (error) => {
          onerror(error?.message);
          setLoading(false);
        },
      });
    }

    setIsOpen1(!isOpen1);
    setIsOpen0(false);
    setShowDropdown1(false);
    setShowDropdown(false);
  };
  const handleRename = (id, name) => {
    setLoading(true);
    const payload = {
      id: id,
      folderName: name,
    };
    folderRename(payload, {
      onSuccess: () => {
        setLoading(false);
        folderRefetch();
      },
      onError: () => {
        setLoading(false);
      },
    });
  };
  const handleRenameSubFolder = (id, name) => {
    setLoading(true);
    const payload = {
      id: id,
      folderName: name,
      folderId: folderId,
    };
    subFolderRename(payload, {
      onSuccess: () => {
        setLoading(false);
        folderRefetch();
      },
      onError: () => {
        setLoading(false);
      },
    });
  };
  const subFolderState = () => {
    setShowSubFolderModal(!showSubFolderModal);
    setIsOpen0(false);
    setShowDropdown1(false);
    setShowDropdown(false);
  };
  const newStepHandler = (text) => {
    const length = steps.length;
    if (typeof text === "string") {
      const payload = {
        title: text,
        stepNumber: counter + 1,
        subFolderId: selectedSubFolderData?.id,
      };
      setLoading(true);
      stepCreate(payload, {
        onSuccess: (data) => {
         folderRefetch();
         localStorage.setItem('stepNumber',++steps.length)
          setLoading(false);
         
          onsuccess(data?.message);
            
          AddNewStepHandler(data?.data?._id);
        },
        onError: (error) => {
          setLoading(false);

          onerror(error?.response?.data?.message);
        },
      });
    }

    setAddOtherStep(false);
  };
  const createSubFolderHandler = (text) => {
    if (typeof text === "string") {
      const payload = {
        subFolderName: text,
        folderId: selectedSubFolderData?.id,
      };
      setLoading(true);
      subFolderCreate(payload, {
        onSuccess: () => {
          setLoading(false);
          folderRefetch();
        },
        onError: () => {
          setLoading(false);
        },
      });
    }
    setShowSubFolderModal(!showSubFolderModal);
    setIsOpen0(false);
    setShowDropdown1(false);
    setShowDropdown(false);
  };
  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
    setShowDropdown1(false);
  };
  const togglePopup3 = () => {
    setIsOpen3(!isOpen3);
    setShowDropdown1(false);
  };
  const DeletePopup = () => {
    setIsDelete(!isDelete);
    setShowDropdown(false);
  };
  const deleteFolderPopup = () => {
    folderRefetch();
  };
  const greet1 = [
    {
      title: "Move ''main greeting''",
    },
  ];
  const greet2 = [
    {
      title: "Duplicate ''main greeting''",
    },
  ];

  const popupData2 = {
    heading: "Create a new Folder",
    btn: "Create",
    placeholder: "Name your new folder...",
  };
  const popupData3 = {
    heading: "Rename 'main greetings' ",
    btn: "Rename",
    placeholder: "Main greetings|",
  };

  const DeleteData = [
    {
      heading: "Move the ''Education'' folder to the trash?",
      btn: "Move to the trash",
      paragraph:
        "Your candor video will remain in trash for 30 days before it is permanetly deleted. you will be able to recover your candor video during this time.All interactions will be restored when the candor video is recovered.",
    },
  ];
  const [isOpenN, setIsOpenN] = useState(false);
  const handleClose = () => {
    setIsOpen0(!isOpen0);
  };
  const togglePopupN = () => {
    setIsOpenN(!isOpenN);
  };

  const popupDataN = [
    {
      heading: "Lets get started",
      btn: "Create Video",
      placeholder: "Name Your Video...",
    },
  ];
  const [addOtherStep, setAddOtherStep] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else if (isError) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [GetFolders, isLoading, isError]);
  useEffect(() => {
    localStorage.setItem("module", "Video Individual - Build");
  }, []);
  return (
    <>
      <Toast ref={toast} position="top-right" />
      {loading ? (
        <GlobalLoaderCopy />
      ) : (
        <>
          <div className="flex xxxs:flex-wrap lg:flex-nowrap   rounded w-full border-[1px] shadow-sm border-[#EBEBEB] ">
            {isPermission && (
              <VideoSetPermission handleCloseO={SetPermission} />
            )}
            {greet1.map((item) => {
              return (
                isOpen && (
                  <MoveFolder title={item.title} handleCloseN={folderPopup} />
                )
              );
            })}
            {greet2.map((item) => {
              return (
                isOpenDuplicate && (
                  <MoveFolder
                    title={item.title}
                    handleCloseN={DuplicatePopup}
                  />
                )
              );
            })}

            {isOpen2 && (
              <CreateNewFolder
                // title={`Rename '${}' `}

                title={popupData3.title}
                btnname={popupData3.btn}
                placeholder={popupData3.placeholder}
                handleCloseM={togglePopup2}
              />
            )}
            {addOtherStep && (
              <CreateNewFolder
                title={`Create a new Step`}
                btnname={popupData2.btn}
                placeholder="Name your new step..."
                handleCloseM={newStepHandler}
              />
            )}
            {DeleteData.map((item) => {
              return (
                isDelete && (
                  <DeleteVideo
                    title={item.heading}
                    btnname={item.btn}
                    paragraph={item.paragraph}
                    handleCloseM={DeletePopup}
                  />
                )
              );
            })}
            {DeleteData.map((item) => {
              return (
                isOpen3 && (
                  <DeleteVideo
                    title={item.heading}
                    btnname={item.btn}
                    paragraph={item.paragraph}
                    handleCloseM={togglePopup3}
                  />
                )
              );
            })}
            <div className="lg:w-1/4 xxxxl:w-1/5  xxxs:w-full h-[88vh]    lg:border-r-2 xxxs-border-none border-[#EBEBEB] pt-1 ">
              <div className="flex   justify-between py-2  ">
                {isOpen0 && (
                  <div
                    className="popup-box fixed backdrop-opacity-20 flex justify-center items-center bg-black/30 left-0 top-0 w-full h-full z-50"
                    onClick={handleClose}
                  >
                    <div
                      className="box  relative rounded-md  lg:w-[370px] xxxxl:w-[400px] xxxs:w-[350px] bg-white xxxxl:min-h-[280px] mx-auto "
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <div className="flex justify-between px-5 pt-5 ">
                        <div className="lg:text-[18px] xxxs:text-[16px] xxxxl:text-[22px]">
                          Add a new video to...
                        </div>
                        <button className="btn-close " onClick={handleClose}>
                          <img
                            src={Logos.ClosePopup}
                            alt="Close Button"
                            className="lg:w-[20px] xxxs:w-[15px]"
                          />
                        </button>
                      </div>
                      <div className="h-[46vh] overflow-y-scroll">
                        {GetFolders.data.map((item) => {
                          return (
                            <>
                              <div
                                className="cursor-pointer flex py-4 px-6 hover:bg-[#E7EEF9]"
                                key={item.id}
                                onClick={() => {
                                  subFolderState();
                                  setSelectedFolderData(item);
                                  setSelectedSubFolderData(item);
                                }}
                              >
                                <img
                                  src={Logos.BlueFolderTwo}
                                  alt="folder icon"
                                  className="lg:w-[18px] xxxs:w-[15px]"
                                />
                                <p className=" text-[15px] xxxs:text-[13px] ml-3 xxxxl:text-[18px] whitespace-nowrap w-40 overflow-ellipsis overflow-x-hidden">
                                  {item.folderName}
                                </p>

                                {/* {popupDataN.map((item) => {
                  return (
                    isOpenN && (
                      <CreateNewFolder
                        title={item.heading}
                        btnname={item.btn}
                        placeholder={
                          item.placeholder
                        }
                        handleCloseM={
                          togglePopupN
                        }
                      />
                    )
                  );
                })} */}
                              </div>
                              <hr />
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex">
                  {GetFolders?.data?.length > 0 && (
                    <img
                      src={Logos.AddSquare2}
                      alt="Add"
                      onClick={togglePopup}
                      className={` icon-size lg:ml-4 xxxs:ml-3 cursor-pointer `}
                    />
                  )}
                  <p className=" title-size  ml-3">New Video</p>
                </div>

                {isOpen1 && (
                  <CreateNewFolder
                    title={popupData2.heading}
                    btnname={popupData2.btn}
                    placeholder={popupData2.placeholder}
                    handleCloseM={togglePopup1}
                  />
                )}
                {showSubFolderModal && (
                  <CreateNewFolder
                    title={`Create a new Video`}
                    btnname={popupData2.btn}
                    placeholder="Name your new video..."
                    handleCloseM={createSubFolderHandler}
                  />
                )}

                <img
                  src={Logos.FolderAdd}
                  alt="Add"
                  onClick={togglePopup1}
                  className=" video-icon mr-4  cursor-pointer"
                />
              </div>
              <hr />
              <div className="leading-[57px] lg:pt-3 xxxs:pt-3 xxxs:p-2 lg:p-0 h-[77vh] overflow-y-auto">
                {GetFolders?.data?.map((item, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        onClick={() => {
                          // globalState("tax");
                          setFolderId(item.id);
                          setVideoState([]);
                          handleFolderClick(index);
                          setSelectedSubFolderData(item);
                        }}
                        className={`flex  w-full  justify-between px-4 cursor-pointer xxxs:shadow-md xxxs:rounded-md   lg:mt-0 xxxs:mt-2  lg:shadow-none  lg:rounded-none ${
                          selectedFolderIndex === index
                            ? "bg-[#E7EEF9] mb-[10px] text-[#3A37A6]"
                            : "bg-white"
                        }`}
                      >
                        <div className="flex  ">
                          {selectedFolderIndex === index ? (
                            <img
                              src={Logos.OpenFolder}
                              alt="Add"
                              className=" video-icon"
                            />
                          ) : (
                            <img
                              src={Logos.FolderEducation}
                              alt="Add"
                              className=" video-icon xxxs:w-[15px]"
                            />
                          )}
                          <p className="lg:text-[15px] xxxxl:text-[20px] xxxs:text-[12px] whitespace-nowrap ml-6 text w-60 lg:w-28 overflow-hidden overflow-ellipsis">
                            {item.folderName}
                          </p>
                        </div>
                        <div className="flex ">
                          {selectedDropdownIndex === index && (
                            <MenuDropdown
                              class="w-[170px] xxxxl:w-[210px] top-[34px] -right-1"
                              setLoading={setLoading}
                              menuarray={menuarray1}
                              isOpen={showDropdown3}
                              setIsOpen={setShowDropdown3}
                              item={item}
                              deleteFolderPopup={deleteFolderPopup}
                              handleRename={handleRename}
                              deleteFolderHandler={deleteFolderHandler}
                              subFolderState={subFolderState}
                            />
                          )}
                          {selectedFolderIndex === index ? (
                            <img
                              src={Logos.BlueThreeDots}
                              alt="Add"
                              className=" video-icon"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedDropdownIndex(index);
                                setSelectedSubFolderData(item);
                                Dropdown1();
                                Dropdown3();
                              }}
                            />
                          ) : (
                            <img
                              src={Logos.ThreeDots}
                              alt="Add"
                              className="video-icon"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedDropdownIndex(index);
                                setSelectedSubFolderData(item);
                                Dropdown1();
                                Dropdown3();
                              }}
                            />
                          )}
                        </div>
                      </div>
                      {selectedFolderIndex === index &&
                        item?.subFolders?.map((items, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => {
                                setSubfolderId(items.id);
                                setSelectedSubFolderIndex(items.id);
                                setSelectedSubFolderData(items);
                                setVideoState(items);
                                // globalState("reform");
                              }}
                              className="cursor-pointer ml-10 xxxs:ml-12 xxxs:mb-2 xxxs:shadow-md  lg:mt-0 xxxs:mt-2 lg:shadow-none xxxs:rounded-lg lg:rounded-md-none lg:rounded-l-md xxxs:rounded-l-md-none "
                            >
                              <div>
                                {
                                  <div
                                    className={` rounded-l  ${
                                      selectedSubFolderIndex === items.id
                                        ? "bg-[#E7EEF9] text-[#3A37A6] mb-[10px] "
                                        : ""
                                    }`}
                                  >
                                    <div className="flex  justify-between px-3  ">
                                      <div className="flex">
                                        <img
                                          src={
                                            selectedSubFolderIndex === items.id
                                              ? Logos.BlueVideoCam
                                              : Logos.OffVideoCam
                                          }
                                          alt="Add"
                                          className="video-icon ml-3"
                                        />
                                        <p className="px-2 xxxxl:px-6 w-28 whitespace-nowrap overflow-hidden overflow-ellipsis lg:text-[12px] xxxxl:text-[20px] xxxs:text-[11px]">
                                          {items.subFolderName}
                                        </p>
                                      </div>
                                      <div className="flex justify-end">
                                        {selectedSubFolderIndex ===
                                          items.id && (
                                          //    <MenuDropdown
                                          //    class="w-[170px] xxxxl:w-[210px]
                                          // top-[42px] right-[4px]"
                                          // menuarray={menuarray}
                                          // isOpen={showDropdown5}
                                          // setIsOpen={setShowDropdown5}
                                          // title="education" btnname="Rename"
                                          // placeholder="Education|"
                                          // Folder="folder" />
                                          <MenuDropdown
                                            class="w-[170px] xxxxl:w-[210px] top-[34px] -right-1"
                                            video={items.subFolderName}
                                            onsuccessHandler={onsuccess}
                                            onError={onerror}
                                            folderRefetch={folderRefetch}
                                            setLoading={setLoading}
                                            menuarray={menuarray}
                                            isOpen={showDropdown5}
                                            setIsOpen={setShowDropdown5}
                                            item={items}
                                            deleteFolderPopup={
                                              deleteFolderPopup
                                            }
                                            subFolderId={items?.id}
                                            folder={GetFolders?.data}
                                            handleRename={handleRenameSubFolder}
                                            deleteFolderHandler={
                                              deleteSubFolderHandler
                                            }
                                            id={items.id}
                                            routeHandler={routeHandler}
                                          />
                                        )}
                                        {selectedSubFolderIndex === items.id ? (
                                          <img
                                            src={Logos.BlueThreeDots}
                                            alt="Add"
                                            className="video-icon mr-1"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setSubfolderId(items.id);
                                              setSelectedSubFolderData(items);
                                              setVideoState(items);
                                              setSelectedSubFolderIndex(
                                                items.id
                                              );
                                              setSelectedSubFolderData(items);
                                              Dropdown1();
                                              Dropdown5();
                                            }}
                                          />
                                        ) : (
                                          <img
                                            src={Logos.ThreeDots}
                                            alt="Add"
                                            className="video-icon mr-1"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setSelectedSubFolderData(items);
                                              setVideoState(items);
                                              setSubfolderId(items.id);
                                              setSelectedSubFolderIndex(
                                                items.id
                                              );
                                              setSelectedSubFolderData(items);
                                              Dropdown1();
                                              Dropdown5();
                                            }}
                                          />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                }
                              </div>
                            </div>
                          );
                        })}
                    </>
                  );
                })}
              </div>
            </div>

            <div className="w-[100%] h-[88vh] mx-auto  flex justify-center flex-auto overflow-y-auto">
              <div className="">
                {videoState.length == 0 && (
                  <div className=" mt-20 items-center ">
                    <img
                      src={Logos.VideoBg}
                      alt="Add"
                      className=" mx-auto w-[600px]"
                    />
                  </div>
                )}
              </div>

              {videoState.length != 0 && (
                <div className="relative w-full">
                  <div className="xxxs:px-2 lg:px-0  pt-1 w-full sticky top-[0%] bg-white">
                    <div className=" flex justify-between  h-[50px]   border px-2 lg:p-2 xxxxl:p-1">
                      <div className="flex items-center gap-3">
                        <img
                          src={Logos.TaxReform}
                          alt="Add"
                          className="icon-size xxxxl:ml-3 md:block xxxs:hidden cursor-pointer"
                        />
                        <p className="title-size font-bold xxxs:p-0 w-48 whitespace-nowrap overflow-hidden overflow-ellipsis">
                          {videoState?.subFolderName}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src={Logos.WindowBtn}
                          alt="Add"
                          className="icon-size cursor-pointer"
                          onClick={() => {
                            routeHandler1();
                          }}
                        />
                        <Link to="/Metrics">
                          {" "}
                          <img
                            src={Logos.GraphBtn}
                            alt="Add"
                            className="icon-size   lg:mt-0 cursor-pointer"
                          />
                        </Link>

                        <img
                          src={Logos.Share}
                          alt="Add"
                          className="icon-size  cursor-pointer "
                          onClick={() => {
                            routeHandler();
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" lg:py-4   xxxs:px-1 lg:px-4 ">
                    {steps.length != 0 &&
                      steps.map((item, index) => {
                        return (
                          <div className="flex w-full ">
                            <div className="">
                              {item?.stepNumber && (
                                <div className="icon h-8 cursor-pointer  mt-16 transition-all duration-400 font-bold text-[27px] w-[40px] my-auto">
                                  {++index}.
                                </div>
                              )}
                            </div>
                            <div
                              className=" flex xxxs:p-1 my-4 w-full  border shadow-sm rounded cursor-pointer"
                              onClick={() => {
                              localStorage.setItem('stepNumber',index)
                                AddNewStepHandler(item?._id);
                              }}
                            >
                              <div className="w-full lg:max-w-[180px]  xxxxl:max-w-[230px] xxxs:max-w-[150px] py-2 pl-1  ">
                                <img
                                  src={
                                    item?.lowPreviewThumbnail ?? Logos.MediaOne
                                  }
                                  alt="Add"
                                  className="xxxxl:pt-2 rounded-md aspect-auto"
                                />
                              </div>
                              <div className="lg:px-4 xxxs:px-2">
                                <p className="title-size lg:px-0 xxxs:px-2 lg:py-2 xxxs:pt-2 w-96 overflow-y-hidden overflow-ellipsis overflow-hidden font-bold">
                                  {item?.title}
                                </p>
                                <p className="text-[#A0A0A0] pb-3 md:block xxxs:hidden inner-size"></p>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    <div
                      onClick={() => {
                        setAddOtherStep(true);
                        // AddNewStepHandler();
                      }}
                      className="flex items-center mt-2  cursor-pointer  lg:p-4 xxxs:p-2  xxxs:mb-2  lg:min-h-[55px]  xxxs:min-h-[50px] border shadow-sm rounded"
                    >
                      <img
                        src={Logos.AddSquare}
                        alt="icon"
                        className="icon-size cursor-pointer"
                      />
                      <p className="font-bold  xxxxl:leading-none  title-size px-4 ">
                        Add another step
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VideoModule;
