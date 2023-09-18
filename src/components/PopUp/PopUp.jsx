import React, {useState} from "react";
import {Logos} from "../../assets";
import Button from "../../components/Buttons/Buttons";
import {useQuery} from "react-query";
import {SearchContact} from "../../hooks/useConversation";
import {useNavigate} from "react-router-dom";

const Popup = (props) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [id, setID] = useState("");
    let {data, isLoading, isError} = useQuery(["getData", searchQuery], () =>
        SearchContact(searchQuery)
    );

    function onSearchHandller(param) {
        setSearchQuery(param);
    }

    if (data == undefined) {
        data = [];
    }

    const contacts = searchQuery ? data : props.data;

    return (
        <div
            className="popup-box fixed backdrop-opacity-20 flex p-2 justify-center items-center bg-black/30 left-0 top-0 w-full h-full z-50"
            onClick={props.handleClose}
        >
            <div
                className="box  relative rounded-md xxxl:w-[550px] lg:w-[450px] xxxs:w-[350px] bg-white max-h-[80vh]  lg:min-h-[410px] mx-auto"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className=" bg-white z-[2]">
                    <div className="flex justify-between px-5  xxxl:pt-6 pt-5 ">
                        <div className="title-size">Contact</div>
                        <button className="btn-close " onClick={props.handleClose}>
                            <img
                                src={Logos.ClosePopup}
                                alt="Close Button"
                                className="lg:w-[27px] xxxs:w-[15px]"
                            />
                        </button>
                    </div>
                    <hr className=" border-2 border-[#CEDEF2] mt-5"/>
                </div>
                <div className="w-full flex justify-between items-center gap-2 p-3">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => {
                            onSearchHandller(e.target.value);
                            localStorage.removeItem("conversationId");
                        }}
                        className="relative lg:text-[16px] outline-none   mt-2 ml-3 rounded-md border-2 border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full"
                        style={{paddingLeft: "40px"}}
                    />
                    <img
                        src={Logos.SearchIcon}
                        className="absolute lg:w-[20px] xxxs:w-[15px] mt-2 left-3 ml-7"
                    />

                    <Button
                        img={Logos.profileAddWhite}
                        class="w-[40px] xxxxl:w-[45px] mt-[5px] cursor-pointer "
                        iconWidth="w-[35px]"
                        onClick={props.popup}
                    ></Button>
                </div>
                <div
                    className="overflow-y-scroll min-h-[200px] max-h-[300px] h-[50vh]"
                    style={{
                        marginTop: "-10px",
                        paddingRight: "10px",
                    }}
                >
                    {contacts?.map((item) => {
                        return (
                            <div
                                onClick={() => {
                                    setID(item._id);
                                    const a = null;
                        
                                    props.deletehanddler();
                                    localStorage.removeItem("conversationId");

                                    props.setConversationId("");
                                    props.onclickHanddler(
                                        a,
                                        item._id,
                                        item.firstName,
                                        item.email
                                    );
                                }}
                                className="flex justify-between  cursor-pointer lg:px-6 px-4  xxxs:px-4  "
                                style={{
                                    marginTop: "8px",
                                    backgroundColor: id === item._id ? "#E7EEF9" : "white",
                                }}
                            >
                                <div className="person flex items-center">
                                    <img src={item.img} className=" mr-2"/>
                                    <p
                                        className="lg:mt-2 xxxs:mt-1 font-bold "
                                        style={{fontSize: "calc(0.7rem + 0.2vw)"}}
                                    >
                                        {item.firstName} {item.lastName}
                                    </p>
                                </div>
                                <div className="email flex w-[130px] lg:w-[190px] items-center xxxs:w-[145px]">
                                    <img
                                        src={Logos.SmsBtnIcon}
                                        alt="Close Button"
                                        className="w-[15px] lg:w-[20px] xxxs:w-[15px] mr-2"
                                    />
                                    <p
                                        className="mt-1 w-full max-w-[200px] overflow-hidden text-ellipsis "
                                        style={{fontSize: "calc(0.7rem + 0.2vw)"}}
                                    >
                                        {item.email}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {data.length == 0 && searchQuery != "" && (
                    <>
                        <p className="text-[#ff0000] ml-6"> No contact found...</p>
                    </>
                )}
                <div className=" flex justify-center py-4 xxxl:pt-5 cursor-pointer">
                    <button
                        onClick={() => {
                            if (id != "") {
                                localStorage.setItem('conversationId', null)
                                navigate("/reply");
                            }
                        }}
                        className="lg:text-[14px] xxxs:text-[12px] xxxl:text-[20px] rounded shadow text-white bg-[#94A2F2] w-[120px] xxxl:w-[140px] py-2 px-1"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
