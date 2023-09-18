import React, {useState} from "react";
import {Logos} from "../../assets";

const MoveFolder = (props) => {
    const [isOpen1, setIsOpen1] = useState(false);

    const togglePopup1 = () => {
        setIsOpen1(!isOpen1);
    };

    return (
        <div
            className="popup-box fixed backdrop-opacity-20  bg-black/30 flex justify-center items-center left-0 top-0 w-full h-full z-50"
            onClick={props.handleCloseN}
        >
            <div
                className="box  relative rounded-md  overflow-hidden lg:w-[500px] xxxs:w-[350px] bg-white lg:min-h-[300px] mx-auto "
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between px-5 pt-2">
                    <div className="lg:text-[18px]  xxxs:text-[15px] xxxl:text-[20px] w-48 overflow-hidden overflow-ellipsis">
                        {props.title}
                    </div>
                    <button className="btn-close " onClick={props.handleCloseN}>
                        <img
                            src={Logos.ClosePopup}
                            alt="Close Button"
                            className="lg:w-[20px] xxxs:w-[15px]"
                        />
                    </button>
                </div>
                <hr/>

                <p className="text-[14px] ml-[30px]  leading-[22px] mb-[5px] mt-[10px] text-[#A0A0A0] xxxl:text-[16px]">
                    Choose A Folder...
                </p>
                <div className="h-[50vh] overflow-y-auto overflow-hidden">
                {props.folder.map((item) => {
                    return (
                        <>
                            <div className={`flex py-2 px-6   ${props?.folderId == item?.id ?
                                "bg-[#E7EEF9]  text-[#3A37A6]"
                                : "bg-white"}`} onClick={() => {
                                props?.setFolderIdHandler(item?.id)
                            }}>
                                <img
                                    src={Logos.BlueFolderTwo}
                                    alt="folder icon"
                                    className="lg:w-[18px] xxxs:w-[15px]"
                                />
                                <p className="text-[15px] ml-3 leading-[22px] py-2 xxxl:text-[18px] w-72 overflow-hidden overflow-ellipsis">
                                    {item?.folderName}
                                </p>
                            </div>
                            <hr/>
                        </>
                    )
                })}
                </div>

                <div className="flex gap-4  justify-center  py-4 ">
                    <button
                        onClick={props.handleCloseN}
                        className="text-[#94A2F2] flex items-center border-[#AEBFF2] xxxl:text-[20px] h-[40px] border-[1px]  px-10 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={props.moveClick}
                        disabled={props?.folderId ? false : true}
                        className="text-white flex items-center xxxl:text-[20px] bg-[#AEBFF2] px-10 h-[40px] rounded-md shadow-md"
                    >
                        Move
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MoveFolder;
