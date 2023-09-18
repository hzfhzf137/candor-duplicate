import React, {useEffect, useState} from "react";
import {Logos} from "../../assets";
import {SearchOutlined} from "@ant-design/icons";
import InputComp from "../../components/InputComp/InputComp";
import LibraryCard from "../../components/libraryCard/LibraryCard";

const allarray = [
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Donation thank you",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Donation thank you",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
];

const videoarray = [
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Donation thank you",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Donation thank you",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/AddVideoApprove",
    },
];

const audioarray = [
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Donation thank you",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Donation thank you",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
];

const textarray = [
    {
        label: "Education follow-up",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Education follow-up",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Donation thank you",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Education follow-up",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Education follow-up",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Education follow-up",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Education follow-up",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Donation thank you",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Education follow-up",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Education follow-up",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
];

const alltoggle = [
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/build-tax-reform",
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Donation thank you",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/build-tax-reform",
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/build-tax-reform",
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
];

const videotoggle = [
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/build-tax-reform",
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/build-tax-reform",
    },
    {
        label: "Donation thank you",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/build-tax-reform",
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/build-tax-reform",
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/build-tax-reform",
    },
    {
        label: "Education follow-up",
        icon: Logos.ChildImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "/build-tax-reform",
    },
];

const audiotoggle = [
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Donation thank you",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
    {
        label: "Education follow-up",
        icon: Logos.LibraryAudio1,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        audioLink: true,
    },
];

const texttoggle = [
    {
        label: "Education follow-up",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Education follow-up",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
    {
        label: "Donation thank you",
        icon: Logos.TextImg,
        info: Logos.InfoBtn,
        like: Logos.LikeIcon,
        more: Logos.MoreIcon,
        link: "",
        array: [
            {
                label: "Rename",
                icon: Logos.EditIcon2,
                id: "LibraryRename",
                link: "#",
            },
            {
                label: "Trim",
                icon: Logos.ScissorIcon,
                link: "/trim-video-library",
            },
            {
                label: "Delete",
                icon: Logos.TrashIcon,
                id: "LibraryDelete",
                link: "#",
            },
        ],
    },
];

const LibraryModule = () => {
    const [isClicked1, setIsClicked1] = useState("All");
    const TabClick = (a) => {
        setIsClicked1(a);
    };
    const [searchValue, setSearchValue] = useState("");
    const [card, setCard] = useState("all");
    const [checked, setChecked] = useState(false);

    const [toggle, setToggle] = useState(false);

    function cardHandler(a) {
        setCard(a);
    }

    function toggleHandler(b) {
        setToggle(b);
    }

    useEffect(() => {
        localStorage.setItem('module', 'Library');
    }, [])
    return (
        <div
            style={{height: "calc(100vh - 95px)"}}
            className="shadow-md rounded-md border-[1px] p-3 overflow-auto"
        >
            <div className="flex items-center justify-between lg:gap-3 xxxs:gap-1 lg:flex-nowrap xxxs:flex-wrap">
                <div className="w-full max-w-[500px]">
                    <InputComp
                        type="text"
                        placeholder="Search"
                        icon={<SearchOutlined/>}
                        size="large"
                        isButton={true}
                        value={searchValue}
                        className="input-eye"
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <button
                        className="bg-[#AEBFF2] text-white w-[110px] xxxl:w-[160px] flex justify-center items-center gap-2 rounded-md h-[40px] xxxl:h-[50px] inner-size">
                        <img
                            src={Logos.AddIcon}
                            alt="Add Icon"
                            className="w-[18px] xxxl:w-[26px]"
                        />
                        Add New
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between lg:flex-nowrap xxxs:flex-wrap">
                <div className="flex items-center justify-start py-3">
                    <div className="flex w-full">
                        <div>
                            <p
                                className={`lg:px-10 xxxs:px-6 xxxl:px-16 text-center cursor-pointer text-${
                                    isClicked1 == "All" ? "[#3A37A6]" : "[#A0A0A0]"
                                } subtitle-size`}
                                onClick={() => {
                                    TabClick("All");
                                    cardHandler("all");
                                }}
                            >
                                All
                            </p>
                            <hr
                                className={`border-${
                                    isClicked1 == "All" ? "[#3A37A6]" : "[#CEDEF2]"
                                } border-[1px] mt-1`}
                            />
                        </div>
                        <div>
                            <p
                                className={`lg:px-10 xxxs:px-6  xxxl:px-16 text-center cursor-pointer text-${
                                    isClicked1 ? "[#A0A0A0]" : "[#3A37A6]"
                                }  subtitle-size`}
                                onClick={() => {
                                    TabClick();
                                    cardHandler("video");
                                }}
                            >
                                Video
                            </p>
                            <hr
                                className={`border-${
                                    isClicked1 ? "[#CEDEF2]" : "[#3A37A6]"
                                } border-[1px] mt-1`}
                            />
                        </div>
                        <div>
                            <p
                                className={`lg:px-10 xxxs:px-6 xxxl:px-16 text-center cursor-pointer text-${
                                    isClicked1 == "Audio" ? "[#3A37A6]" : "[#A0A0A0]"
                                }  subtitle-size`}
                                onClick={() => {
                                    TabClick("Audio");
                                    cardHandler("audio");
                                }}
                            >
                                Audio
                            </p>
                            <hr
                                className={`border-${
                                    isClicked1 == "Audio" ? "[#3A37A6]" : "[#CEDEF2]"
                                } border-[1px] mt-1`}
                            />
                        </div>
                        <div>
                            <p
                                className={`lg:px-10 xxxs:px-6 xxxl:px-16 text-center cursor-pointer text-${
                                    isClicked1 == "Text" ? "[#3A37A6]" : "[#A0A0A0]"
                                }  subtitle-size`}
                                onClick={() => {
                                    TabClick("Text");
                                    cardHandler("text");
                                }}
                            >
                                Text
                            </p>
                            <hr
                                className={`border-${
                                    isClicked1 == "Text" ? "[#3A37A6]" : "[#CEDEF2]"
                                } border-[1px] mt-1`}
                            />
                        </div>
                    </div>
                </div>
                <h1 className="flex max-w-[250px] xxxl:max-w-[320px] justify-end items-center lg:gap-3 xxxs:gap-1 p-2 font-medium lg:text-[13px] xxxs:text-[12px] xxxl:text-[20px]">
                    Show Quick Replies Only
                    <div
                        className="w-[38px] h-[22px] xxxl:w-[42px] xxxl:h-[26px] rounded-xl bg-[#F5F5F5] flex items-center p-1"
                        style={{
                            backgroundColor: checked ? "#E7EEF9" : "#F5F5F5",
                        }}
                        onClick={() => {
                            setChecked(!checked);
                            toggleHandler(!toggle);
                        }}
                    >
                        <div
                            className="w-[14px] h-[14px] xxxl:w-[18px] xxxl:h-[18px] bg-[#A0A0A0] rounded-xl cursor-pointer duration-200 ease-linear"
                            style={{
                                backgroundColor: checked ? "#3A37A6" : "#A0A0A0",
                                marginLeft: checked ? "16px" : "0px",
                            }}
                        ></div>
                    </div>
                </h1>
            </div>
            {card === "all" && toggle === true && (
                <div>
                    <div className="flex align-center gap-3 items-center flex-wrap">
                        {alltoggle.map((item) => {
                            return (
                                <LibraryCard
                                    src={item.icon}
                                    content={item.label}
                                    infoicon={item.info}
                                    moreicon={item.more}
                                    likeicon={item.like}
                                    link={item.link}
                                    array={item.array}
                                    audioLink={item.audioLink}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            {card === "all" && toggle === false && (
                <div>
                    <div className="flex align-center gap-3 items-center flex-wrap">
                        {allarray.map((item) => {
                            return (
                                <LibraryCard
                                    src={item.icon}
                                    content={item.label}
                                    infoicon={item.info}
                                    moreicon={item.more}
                                    likeicon={item.like}
                                    link={item.link}
                                    array={item.array}
                                    audioLink={item.audioLink}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            {card === "video" && toggle === false && (
                <div>
                    <div className="flex align-center gap-3 items-center flex-wrap">
                        {videoarray.map((item) => {
                            return (
                                <LibraryCard
                                    src={item.icon}
                                    content={item.label}
                                    infoicon={item.info}
                                    moreicon={item.more}
                                    likeicon={item.like}
                                    link={item.link}
                                    audioLink={item.audioLink}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            {card === "video" && toggle === true && (
                <div>
                    <div className="flex align-center gap-3 items-center flex-wrap">
                        {videotoggle.map((item) => {
                            return (
                                <LibraryCard
                                    src={item.icon}
                                    content={item.label}
                                    infoicon={item.info}
                                    moreicon={item.more}
                                    likeicon={item.like}
                                    link={item.link}
                                    audioLink={item.audioLink}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            {card === "audio" && toggle === false && (
                <div>
                    <div className="flex align-center gap-3 items-center flex-wrap">
                        {audioarray.map((item) => {
                            return (
                                <LibraryCard
                                    src={item.icon}
                                    content={item.label}
                                    infoicon={item.info}
                                    moreicon={item.more}
                                    likeicon={item.like}
                                    audioLink={item.audioLink}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            {card === "audio" && toggle === true && (
                <div>
                    <div className="flex align-center gap-3 items-center flex-wrap">
                        {audiotoggle.map((item) => {
                            return (
                                <LibraryCard
                                    src={item.icon}
                                    content={item.label}
                                    infoicon={item.info}
                                    moreicon={item.more}
                                    likeicon={item.like}
                                    audioLink={item.audioLink}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            {card === "text" && toggle === false && (
                <div>
                    <div className="flex align-center gap-3 items-center flex-wrap">
                        {textarray.map((item) => {
                            return (
                                <LibraryCard
                                    src={item.icon}
                                    content={item.label}
                                    infoicon={item.info}
                                    moreicon={item.more}
                                    likeicon={item.like}
                                    array={item.array}
                                    audioLink={item.audioLink}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            {card === "text" && toggle === true && (
                <div>
                    <div className="flex align-center gap-3 items-center flex-wrap">
                        {texttoggle.map((item) => {
                            return (
                                <LibraryCard
                                    src={item.icon}
                                    content={item.label}
                                    infoicon={item.info}
                                    moreicon={item.more}
                                    likeicon={item.like}
                                    array={item.array}
                                    audioLink={item.audioLink}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LibraryModule;
