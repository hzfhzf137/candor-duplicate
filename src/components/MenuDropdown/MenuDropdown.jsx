import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "https://cdn.skypack.dev/react-transition-group@4.4.2";
import "./MenuDropdown.css";
import { Logos } from "../../assets";
import { useNavigate } from "react-router";
import CreateNewFolder from "../../components/PopUp/CreateNewFolder";
import MoveFolder from "../../components/PopUp/MoveFolder";
import DeleteVideo from "../../components/PopUp/DeleteVideo";
import VideoSetPermission from "../PopUp/VideoSetPermission";
import LibraryDeletePopup from "../../components/LibraryDeletePopup/LibraryDeletePopup";
import LibraryRenamePopup from "../../components/LibraryRenamePopup/LibraryRenamePopup";
import { useStore } from "../../store/auth";
// import { contactDetails } from "../../hooks/useContact";
import { useMutation } from "react-query";
import { duplicateVideo, moveVideo } from "../../hooks/useVideo";
import { useGlobalInfo } from "../../contexts/GlobalContext";
const MenuDropdown = (props) => {
  const{setSubfolderId}=useGlobalInfo();
  const [folderId, setFolderId] = useState("");
  const moveSubfolder = useMutation(moveVideo);
  const duplicateVideoHandler = useMutation(duplicateVideo);

  function move() {
    props?.setLoading(true);
    const payload = {
      folderId: folderId,
      subFolderId: props.subFolderId,
    };
    moveSubfolder.mutate(payload, {
      onSuccess: (data) => {
        props.folderRefetch();
        moveToFolder();

        if (!data.error) {
          props.onsuccessHandler(data?.message);
        } else {
          props.onError(data?.message);
        }
      },
    });
    props?.setLoading(false);
  }

  function Duplicate() {
    const payload = {
      folderId: folderId,
      subFolderId: props.subFolderId,
    };
    props.setLoading(true);
    duplicateVideoHandler.mutate(payload, {
      onSuccess: (data) => {
        props.folderRefetch();
        duplicateFolder();

        if (!data.error) {
          props.onsuccessHandler(data?.message);
        } else {
          props.onError(data?.message);
        }
      },
    });
    props?.setLoading(false);
  }

  const navigate = useNavigate();
  const [isRename, setIsRename] = useState(false);
  const [isRename1, setIsRename1] = useState(false);
  const [isMoveFolder, setMoveFolder] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isRenameFolder, setIsRenameFolder] = useState(false);
  const [isSetPermission, setIsSetPermission] = useState(false);
  const [isDeleteConversation, setIsDeleteConversation] = useState(false);
  const [isLibraryDelete, setIsLibraryDelete] = useState(false);
  const isChatShow = useStore((state) => state.isChatShow);
  //  const contactdetails = useMutation(contactDetails);
  const useClickOutside = (handler) => {
    const chatSelectionId = useStore((state) => state.setChatSelectedId);
    const domNode = useRef();
    useEffect(() => {
      const eventHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", eventHandler);
      return () => {
        document.removeEventListener("mousedown", eventHandler);
      };
    });
    return domNode;
  };
  const dropdownNode = useClickOutside(() => {
    props.setIsOpen(false);
  });

  function routeHandler(link) {
    navigate(link);
  }

  const educationRename = () => {
    setIsRename(!isRename);
  };
  const Rename1 = () => {
    setIsRename1(!isRename1);
  };
  const moveToFolder = () => {
    setMoveFolder(!isMoveFolder);
  };
  const duplicateFolder = () => {
    setIsDuplicate(!isDuplicate);
  };
  const deletePopup = () => {
    props.deleteFolderPopup();
    setIsDelete(!isDelete);
  };
  const RenameFolder = () => {
    setIsRenameFolder(!isRenameFolder);
    setIsRename1(false);
  };
  const SetPermission = () => {
    setIsSetPermission(!isSetPermission);
  };
  const deleteConversation = () => {
    setIsDeleteConversation(!isDeleteConversation);
    props.DeleteChat();
    localStorage.removeItem("conversationId");
    if (props.DeleteHandler) {
      props.DeleteHandler();
    }
    let id = "";
    if (props.idHanddler) {
      props.idHanddler(id);
    }
    // console.log("Delete", isDeleteConversation);
  };
  const cancleDeleteConversation = () => {
    setIsDeleteConversation(!isDeleteConversation);
    // console.log("Cancel Delete", isDeleteConversation);
  };
  const LibraryDelete = () => {
    setIsLibraryDelete(!isLibraryDelete);
  };

  return (
    <>
      <div
        className="card-bo7dy"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="dropdown-item-box mb-4"
          onClick={() => {
            props.setIsOpen(!props.isOpen);
          }}
        >
          <div className="dropdown-container" ref={dropdownNode}>
            <CSSTransition
              in={props.isOpen}
              timeout={300}
              classNames="dropdown-animation"
              unmountOnExit
              onEnter={() => props.setIsOpen(true)}
              onExited={() => props.setIsOpen(false)}
            >
              <div
                className={`dropdown-box ${props.class}`}
                // onClick={props.onClick}
              >
                <ul>
                  {props.menuarray.map((item) => {
                    // console.log('item ---> ',item )
                    return (
                      <>
                        <li
                          onClick={() => {
                            routeHandler(item.link);
                          }}
                        >
                          <a
                            className="data-link"
                            onClick={() => {
                              if (item.label == "Share") {
                                 console.log('i am id >>>>>', props.id)
                                setSubfolderId(props.id)
                                props.routeHandler();
                              }
                              if (
                                item.label == "Rename" &&
                                item.id == "LibraryRename"
                              ) {
                                setIsRename(!isRename);
                              }
                              if (item.label == "New Video") {
                                props.subFolderState();
                              }
                              if (item.label == "Rename" && item.id == "1") {
                                setIsRename1(!isRename1);
                              }
                              if (
                                item.label == "Mark as Unread" ||
                                (item.label == "Mark as Read" &&
                                  item.link == "#")
                              ) {
                                props.ReadChat();
                                props.DeleteHandler();
                                localStorage.removeItem("conversationId");
                                // console.log('i am cllig ');
                                let id = "";
                                props.idHanddler(id);
                              }
                              if (
                                item.label == " View Contact Details" &&
                                item.link == "/contact-Info"
                              ) {
                                props.DeleteHandler();
                              }
                              if (item.label == "View contact details") {
                                // const
                                // details=contactdetails.mutate(props.item.contactId,{
                                // onSuccess:(data)=>{ console.log('i am contact
                                // details --->',details); } });

                                // console.log('------->i am contavt2------------->
                                // ',props.item)
                                localStorage.setItem(
                                  "receiverId",
                                  JSON.stringify(props.item)
                                );
                                localStorage.setItem("conversationId", null);
                                chatSelectionId(props.item);
                                // props.DeleteHandler()
                              }
                              if (
                                item.label == "Close Conversation" ||
                                (item.label == "Active Conversation" &&
                                  item.link == "#")
                              ) {
                                props.CloseChat();
                                props.DeleteHandler();
                                localStorage.removeItem("conversationId");
                                // console.log('i am cllig ');
                                let id = "";
                                props.idHanddler(id);
                              }
                              if (item.label == "Delete Conversation") {
                                setIsDeleteConversation(!isDeleteConversation);
                              }
                              if (item.label == "Delete Contact") {
                                setIsDeleteConversation(!isDeleteConversation);
                              }
                              if (item.label == "Move to Folder") {
                                setMoveFolder(!isMoveFolder);
                              }
                              if (item.label == "Duplicate") {
                                setIsDuplicate(!isDuplicate);
                              }
                              if (item.label == "Delete" && item.id == "0") {
                                setIsDelete(!isDelete);
                              }
                              if (item.label == "Rename Folder") {
                                setIsRenameFolder(!isRenameFolder);
                              }
                              if (item.label == "Set Permission") {
                                setIsSetPermission(!isSetPermission);
                              }
                              if (item.label == "Delete Folder") {
                                setIsDelete(!isDelete);
                              }
                              if (item.id == "LibraryDelete") {
                                setIsLibraryDelete(!isLibraryDelete);
                              }
                            }}
                          >
                            <img
                              src={item.icon}
                              alt=""
                              className=""
                              style={{ width: "calc(0.8rem + 0.5vw)" }}
                            />
                            <span className="text-[13px] xxxl:text-[18px]">
                              {" "}
                              {item.label}
                            </span>
                          </a>
                        </li>
                        <img src={Logos.Line} alt="Line" />
                      </>
                    );
                  })}
                </ul>
              </div>
            </CSSTransition>
          </div>
        </div>
        {isRename && (
          <CreateNewFolder
            title={props.title}
            btnname="Rename"
            placeholder={props.placeholder}
            handleCloseM={educationRename}
          />
        )}
        {isRename1 && (
          <LibraryRenamePopup
            title={`Rename “${props.item.subFolderName}”`}
            btnname="Rename"
            placeholder={`${props.item.subFolderName} |`}
            handleClose={Rename1}
            handleRename={props.handleRename}
            id={props.item.id}
          />
        )}
        {isDelete && (
          <DeleteVideo
            title={`Move the “${
              props.item.folderName ?? props.item.subFolderName
            }” folder to the trash ?`}
            btnname="Move to trash"
            paragraph="Your candor video will remain in trash for 30 days before it is permanently
           deleted. you will be able to recover your candor video during this time.
           All interactions will be restored when the candor video is recovered."
            handleCloseM={deletePopup}
            id={props.item.id}
            deleteFolderHandler={props.deleteFolderHandler}
          />
        )}
        {isMoveFolder && (
          <MoveFolder
            title={`Move “${props.video}”`}
            handleCloseN={moveToFolder}
            folder={props.folder}
            moveClick={move}
            folderId={folderId}
            setFolderIdHandler={setFolderId}
          />
        )}
        {isDuplicate && (
          <MoveFolder
            title={`Duplicate “${props.video}”`}
            handleCloseN={duplicateFolder}
            folder={props.folder}
            folderId={folderId}
            setFolderIdHandler={setFolderId}
            moveClick={Duplicate}
          />
        )}
        {isRenameFolder && (
          <LibraryRenamePopup
            title={`Rename “${props.item.folderName}”`}
            btnname="Rename"
            placeholder={`${props.item.folderName} |`}
            handleClose={RenameFolder}
            handleRename={props.handleRename}
            id={props.item.id}
          />
        )}
        {isSetPermission && <VideoSetPermission handleCloseO={SetPermission} />}
        {isDeleteConversation && (
          <LibraryDeletePopup
            title=" Contact "
            paragraph={
              <>
                <p>
                  All answers and replies in this Conversation will <br></br> be
                  lost.This contact will deleted from both side.
                </p>
              </>
            }
            text={<span>Are you sure you want to delete this contact ?</span>}
            handleClose1={deleteConversation}
            handleClose2={cancleDeleteConversation}
            DeleteChat={props.DeleteChat}
            deleteConversation={true}
          />
        )}
        {isLibraryDelete && (
          <LibraryDeletePopup
            title={props.title}
            text="Are you sure you want to delete this ?"
            handleClose1={LibraryDelete}
            idHanddler={idHanddler}
          />
        )}
      </div>
    </>
  );
};

export default MenuDropdown;
