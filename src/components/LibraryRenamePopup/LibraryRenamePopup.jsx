import React, {useState} from "react";
import {Logos} from "../../assets";
import InputComp from "../../components/InputComp/InputComp";

const LibraryRenamePopup = (props) => {
    const [searchText, setSearchText] = useState("");
    return (
        <div
            className="popup-box fixed backdrop-opacity-20 bg-black/30 flex justify-center items-center left-0 top-0 w-full h-full z-50"
            onClick={props.handleClose}
        >
            <div
                className="box relative rounded-md lg:w-[500px] xxxs:w-[350px] bg-white lg:min-h-[200px] mx-auto "
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between px-6 pt-4">
                    <div className=" leading-[30px] title-size w-48 overflow-hidden overflow-ellipsis">{props.title}</div>
                    <button className="btn-close" onClick={props.handleClose}>
                        <img
                            src={Logos.CloseIcon}
                            alt="Close Button"
                            className="lg:w-[20px] xxxs:w-[15px]"
                        />
                    </button>
                </div>
                <hr className=" border-1 border-[#E7EEF9] mt-5"/>
                <div className="w-full flex flex-col justify-center items-center px-6">
                    <h1 className="text-[#A0A0A0] inner-size pt-3">{props.paragraph}</h1>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-5 p-5">
                    <InputComp
                        type="text"
                        size="medium"
                        placeholder={props.placeholder}
                        isButton={true}
                        className="  input-eye bg-[#F5F5F5]  p-2"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <div className="flex gap-4 ">
                        <button
                            onClick={props.handleClose}
                            className="text-[#94A2F2] border-[#AEBFF2] flex items-center xxxl:text-[20px] border-[1px] h-[40px] px-8 rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                props.handleRename(props.id, searchText)
                                props.handleClose()
                            }}
                            disabled={searchText === ""}
                            className="text-white bg-[#AEBFF2] flex items-center xxxl:text-[20px] h-[40px] px-8 rounded-md shadow-md"
                        >
                            {props.btnname}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryRenamePopup;
