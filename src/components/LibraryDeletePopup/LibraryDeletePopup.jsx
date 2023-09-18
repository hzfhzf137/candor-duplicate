import React from "react";
import {Logos} from "../../assets";

const LibraryDeletePopup = (props) => {
    return (
        <div
            className="popup-box fixed backdrop-opacity-20 bg-black/30 left-0 flex justify-center  items-center top-0 w-[110vw] h-[100vh]"
            style={{zIndex: 1000,}}
            onClick={props.handleClose1}
        >
            <div
                className="box relative rounded-md z-[13] w-full max-w-[590px]  bg-white lg:min-h-[200px] mx-auto "
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between px-6 lg:pt-6 xxxs:pt-5">
                    <div className=" text-black title-size">
                        Delete "{props.title}" {props.Folder}
                    </div>
                    <button className="btn-close" onClick={props.handleClose1}>
                        <img
                            src={Logos.CloseIcon}
                            alt="Close Button"
                            className="lg:w-[20px] mt-[-25px]   xxxs:w-[15px]"
                        />
                    </button>
                </div>
                <hr className=" border-1 border-[#E7EEF9] mt-5"/>
                <div className="px-6 mt-5 lg:text-[13px] xxxs:text-[10px] xxxl:text-[15px]">
                    <div
                        className="flex lg:flex-nowrap xxxs:flex-wrap"
                        style={{fontSize: "calc(0.7rem + 0.2vw)"}}
                    >
                        <h1>
                            <b className="mr-1 text-black">This cannot be undone.</b>
                            <span className="text-[#A0A0A0] break-words ">
                {props.paragraph}
                                we cannot recover this once deleted.
              </span>
                        </h1>
                    </div>
                    <div
                        className="text-[#A0A0A0] leading-[14px] flex mt-3"
                        style={{fontSize: "calc(0.7rem + 0.2vw)"}}
                    >
                        {props.text}
                    </div>
                </div>
                <div className="w-full flex justify-center items-center gap-4  p-6">
                    <button
                        onClick={props.handleClose1}
                        className="text-[#A0A0A0] border-[#A0A0A0] xxxl:text-[20px] border-[1px] py-2 px-8 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            let del = true;
                            props.handleClose1(del);
                            if (props.DeleteHandler) {
                                props.DeleteHandler();
                            }
                            if (props.deleteChat) {
                                props.deleteChat()
                            }
                            // if (props.deleteConversation==true){
                            //   localStorage.removeItem('conversationId');
                            //   console.log('i am cllig ');
                            //   let id='';
                            //   props.idHanddler(id);
                            // }
                            if (props.deleteAll) {
                                props.deleteAll()
                            }
                        }}
                        className="text-white bg-[#F24B59] xxxl:text-[20px] py-2 px-8 rounded-md shadow-md"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LibraryDeletePopup;
