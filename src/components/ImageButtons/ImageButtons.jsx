import React, {useState} from "react";
import {Logos} from "../../assets";
import LibraryRenamePopup from "../../components/LibraryRenamePopup/LibraryRenamePopup";
import {useNavigate} from "react-router";

import("./ImageButtons.css");

function ImageButtons() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    function ReplyHandler() {
        navigate("/reply");
    }

    function TrimHandler() {
        navigate("/trim-video");
    }

    function AddCaptionHandler() {
        navigate("/add-caption");
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const popupData2 = [
        {
            heading: "Save as a quick reply",
            btn: "Save",
            pragh:
                "Like it?Save it and use it as a quick reply to oyher conversations in the future.",
        },
    ];
    return (
        <div className=" ">
            <div className="flex flex-col max-md:pb-4   pb-6   items-center justify-end h-[150px] bg-img-intro">
                <div className="flex  justify-center gap-2 ">
                    <button className="bg-[#E7EEF9] p-2 rounded-md">
                        <img
                            src={Logos.DoubleArrows}
                            alt=""
                            className="subicon-size"
                            onClick={() => {
                                ReplyHandler();
                            }}
                        />
                    </button>

                    <button
                        onClick={() => {
                            TrimHandler();
                        }}
                        className="bg-[#E7EEF9] p-2 rounded-md"
                    >
                        <img src={Logos.ScissorIcon} alt="" className="subicon-size"/>
                    </button>

                    <button
                        onClick={() => {
                            AddCaptionHandler();
                        }}
                        className="bg-[#E7EEF9] p-2 rounded-md"
                    >
                        <img src={Logos.CcIcon} alt="" className="subicon-size"/>
                    </button>
                    <button className="bg-[#E7EEF9] p-2 rounded-md" onClick={togglePopup}>
                        <img src={Logos.HeartIcon} alt="" className="subicon-size"/>
                    </button>
                    {popupData2.map((item) => {
                        return (
                            isOpen && (
                                <LibraryRenamePopup
                                    title={item.heading}
                                    btnname={item.btn}
                                    paragraph={item.pragh}
                                    handleClose={togglePopup}
                                />
                            )
                        );
                    })}

                    <button className="bg-[#E7EEF9] p-2 rounded-md">
                        <img src={Logos.DownloadIcon} alt="" className="subicon-size"/>
                    </button>

                    <button className="bg-[#E7EEF9] p-2 rounded-md">
                        <img src={Logos.TrashIcon} alt="" className="subicon-size"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageButtons;
