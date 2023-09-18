import React, {useState} from "react";
import {Logos} from "../../assets";
import CreateNewFolder from "../../components/PopUp/CreateNewFolder";


const AddNewVideoPopup = props => {
    const [isOpen1, setIsOpen1] = useState(false);
    const togglePopup1 = () => {
        setIsOpen1(!isOpen1);
    };
    const popupData2 = [
        {
            heading: "Lets get started",
            btn: "Create Video",
            placeholder: "Name Your Video..."
        },
    ];
    return (
        <div
            className="popup-box fixed backdrop-opacity-20 bg-black/30 left-0 top-0 w-full h-full z-50 flex justify-center items-center"
            onClick={props.handleClose}>
            <div className="box  relative rounded-md  lg:w-[370px] xxxs:w-[350px] bg-white lg:min-h-[260px] mx-auto "
                 onClick={e => {
                     e.stopPropagation()
                 }}>
                <div className="flex justify-between px-5 lg:pt-8 pt-2  xxxs:pt-5 ">
                    <div className="lg:text-[18px]  xxxs:text-[15px] ">Add a new video to...</div>
                    <button className="btn-close " onClick={props.handleClose}>
                        <img
                            src={Logos.ClosePopup}
                            alt="Close Button"
                            className="lg:w-[20px] xxxs:w-[15px]"
                        />
                    </button>
                </div>
                <hr className=" border-1 border-[#CEDEF2] mt-3"/>
                <div className="flex py-4 px-6">
                    <img src={Logos.BlueFolderTwo} alt="folder icon" className="lg:w-[18px] xxxs:mb-2 xxxs:w-[15px]"/>
                    <div>
                        <p className="text-[15px] ml-3">Organization folder</p>
                        <p className="text-[10px]  ml-3 text-[#A0A0A0]">Everyone in your organization will have
                            access</p>
                    </div>


                </div>
                <hr className=" border-1 border-[#CEDEF2] "/>
                <div className="flex py-3 px-6">
                    <img src={Logos.BlueFolderTwo} alt="folder icon" className="lg:w-[18px] xxxs:w-[15px]"/>
                    <p className="text-[15px] ml-3" onClick={togglePopup1}>Education</p>
                    {popupData2.map((item) => {
                        return (
                            isOpen1 && (
                                <CreateNewFolder
                                    title={item.heading}
                                    btnname={item.btn}
                                    placeholder={item.placeholder}
                                    handleCloseM={togglePopup1}
                                />
                            )
                        );
                    })}
                </div>
                <div className="flex py-2 px-6">
                    <img src={Logos.BlueFolderTwo} alt="folder icon" className="lg:w-[18px] xxxs:w-[15px]"/>
                    <p className="text-[15px] ml-3">Taxes</p>
                </div>
            </div>
        </div>
    );
}

export default AddNewVideoPopup;




