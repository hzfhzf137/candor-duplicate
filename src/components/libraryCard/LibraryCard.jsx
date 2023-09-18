import React, {useState} from "react";
import {Logos} from "../../assets";
import {useNavigate} from "react-router";
import {Tooltip} from "antd";
import MenuDropdown from "../../components/MenuDropdown/MenuDropdown";

const menuarray = [
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
];

const LibraryCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const text = (
        <div className="text-black text-[10px] leading-[12px] w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus
            odio ullam placeat ducimus voluptas quisquam ipsam assumenda esse quod
            nisi repellat doloremque officia, nostrum nobis minus dolores laboriosam
            dolor?
        </div>
    );
    const color = ["white"];

    const [showDropdownInfo, setShowDropdownInfo] = useState(false);

    const navigate = useNavigate();
    const togglePopup = ({setModule}) => {
        setIsOpen(!isOpen);
    };

    function routeHandler() {
        if (props.link) {
            navigate("/AddVideoApproveLibrary");
        }
    }

    return (
        <div
            className="flex xxxl:justify-between py-4 flex-col gap-4 items-center shadow-md rounded-md border-[1px] w-[250px] h-auto"
            style={{width: "calc(16rem + 4vw)", height: "calc(15rem + 6vh)"}}
        >
            <div className="flex justify-center gap-3 items-center py-3 border-b-[1px] w-full ">
                <div
                    className="flex items-center gap-3 "
                    onMouseLeave={() => {
                        setShowDropdownInfo(!showDropdownInfo);
                    }}
                >
                    <h1 className="font-medium  cursor-pointer subtitle-size">
                        {props.content}
                    </h1>
                    <div>
                        <div className="cursor-pointer">
                            <Tooltip
                                placement="bottom"
                                title={text}
                                color={color}
                                key={color}
                            >
                                <img src={props.infoicon} alt="icon" className="subicon-size"/>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <img src={props.likeicon} className="subicon-size"/>

                    <button
                        onClick={togglePopup}
                        className="bg-[#E7EEF9] dropdown-link flex justify-center items-center h-4 w-4 rounded-md xxxl:w-[16px] xxxl:[20px]"
                    >
                        <img
                            src={Logos.MoreIcon}
                            alt="moreicon"
                            className="subicon-size cursor-pointer"
                        />
                        {props.array ? (
                            <MenuDropdown
                                class="w-[140px] xxxl:w-[180px] top-[18px] right-0"
                                menuarray={props.array}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                title={props.content}
                                btnname="Rename"
                                placeholder={props.content}
                            />
                        ) : (
                            <MenuDropdown
                                class="w-[140px] xxxl:w-[180px] top-[18px] right-0"
                                menuarray={menuarray}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                title={props.content}
                                btnname="Rename"
                                placeholder={props.content}
                            />
                        )}
                    </button>
                </div>
            </div>
            <img
                src={props.src}
                className={`px-2  ${props.link ? "cursor-pointer" : "cursor-default"} ${
                    props.audioLink ? "aud-img-size xxxl:mb-16 mt-16" : "img-size"
                }`}
                onClick={() => {
                    routeHandler();
                }}
            />
        </div>
    );
};

export default LibraryCard;
