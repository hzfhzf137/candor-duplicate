import React, {useState} from "react";
import {Logos} from "../../assets";
import ButtonComp from "../../components/ButtonComp/ButtonComp";
import DeleteModal from "../../components/Modals/Settings/DeleteModal";
import ToolTip from "../../components/ToolTip/ToolTip";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import {useGlobalInfo} from "../../contexts/GlobalContext";
import {useNavigate} from "react-router-dom";

const data = [
    {
        name: "Tax reform",
    },
    {
        name: "Education",
    },
    {
        name: "Main Greeting",
    },
    {
        name: "Donation Request",
    },
];
const ProfileSettings = () => {
    const {route, setRoute} = useGlobalInfo();
    const [openMicModal, setOpenMicModal] = useState(false);
    const [opendropdown, setopendropdown] = useState(false);
    const navigate = useNavigate();

    function openDropdownHanddler() {
        setopendropdown(!opendropdown);
    }

    const [dropdown, setdropdown] = useState("All Conversation");

    function dropdownHanddler(a) {

        setdropdown(a);

        setopendropdown(false);
    }

    function VideoHandler() {
        navigate("/conversation");
    }

    return (
        <div className="">
            <DeleteModal
                open={openMicModal}
                setOpen={setOpenMicModal}
                width={500}
                title="Are you sure you want to delete everything?"
            />

            <div className="flex items-center gap-2 ">
                <img
                    src={Logos.ArrowLeft}
                    onClick={() => {
                        VideoHandler();
                    }}
                    alt="LeftArrow"
                    className="cursor-pointer w-[20px]"
                />
                <h1 className="title-size">{route}</h1>
            </div>
            <div className="w-full max-lg:flex-wrap flex items-center mt-1 p-2 gap-5 ">
                <div className="w-1/5 shadow-md rounded-md h-[86vh] flex-auto">
                    <div className="border-b-[1px] p-3 title-size">Mark Johnson</div>
                    <div className="p-3 flex flex-col gap-2">
                        <div
                            onClick={() => {
                                setRoute("Profile & Account");
                            }}
                            className={
                                route === "Profile & Account" ||
                                route === "Profile & Account Edit"
                                    ?
                                    `p-2 rounded-md text-[11px] subtitle-size bg-gradient-to-r from-[#AEBFF2] to-[#94A2F2] text-white `
                                    : `p-2 rounded-md text-[11px] subtitle-size border-[1px] cursor-pointer`
                            }
                        >
                            Profile & Account
                        </div>
                        <div
                            onClick={() => {
                                setRoute("Security");
                            }}
                            className={
                                route === "Security"
                                    ?
                                    `p-2 rounded-md text-[11px] bg-gradient-to-r subtitle-size from-[#AEBFF2] to-[#94A2F2] text-white `
                                    : `p-2 rounded-md text-[11px] border-[1px] cursor-pointer subtitle-size`
                            }
                        >
                            Security
                        </div>
                    </div>
                </div>
                <div className="w-4/5 min-h-[86vh] shadow-md rounded-md flex-auto">
                    {route === "Profile & Account" && (
                        <>
                            <div className="flex  border-b-[1px] justify-between title-size">
                                <div className="title-size p-3">Your account details</div>
                                <div className="p-3 ">
                                    <img
                                        src={Logos.EditIconProfile}
                                        alt=" "
                                        className="icon-size cursor-pointer"
                                        onClick={() => {
                                            setRoute("Profile & Account Edit");
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="flex justify-center ">
                                    <img
                                        src={Logos.ProfileIcon}
                                        alt="profileIcon"
                                        className=""
                                        style={{width: "calc(6.5rem + 1vw)"}}
                                    />
                                </div>
                                <div className="w-full flex gap-3">
                                    <div className="flex flex-col w-1/2 max-sm:text-[12px]">
                                        <label className="subtitle-size">First name</label>
                                        <input
                                            type="text"
                                            placeholder="Mark"
                                            className=" mt-2 p-3 placeholder-input-modal placeholder:text-black bg-[#F5F5F5] rounded-md max-sm:p-1"
                                        />
                                    </div>
                                    <div className="flex flex-col w-1/2 max-sm:text-[12px]">
                                        <label className="subtitle-size">Last name</label>
                                        <input
                                            type="text"
                                            placeholder="Johanson"
                                            className="mt-2 max-sm:mr-1 placeholder-input-modal placeholder:text-black p-3 bg-[#F5F5F5] rounded-md max-sm:p-1 "
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex gap-3 mt-3 max-sm:text-[12px]">
                                    <div className="flex flex-col w-1/2">
                                        <label className="subtitle-size">Email</label>
                                        <input
                                            type="text"
                                            placeholder="markjohanson@example.com"
                                            className="mt-2 p-3 placeholder-input-modal placeholder:text-black  bg-[#F5F5F5] rounded-md max-sm:p-1 "
                                        />
                                    </div>
                                    <div className="flex flex-col w-1/2 max-sm:text-[12px]">
                                        <label className="subtitle-size">Phone number</label>
                                        <input
                                            type="text"
                                            placeholder="+31 61 234 5678"
                                            className="mt-2 max-sm:mr-1 placeholder-input-modal placeholder:text-black p-3 bg-[#F5F5F5] rounded-md max-sm:p-1"
                                        />
                                    </div>
                                </div>
                                <hr className="mt-2"/>
                                <div className="flex items-center justify-between max-sm:flex-wrap gap-2 mt-2">
                                    <div className="max-w-[400px] w-full">
                                        <h1 className="subtitle-size">Delete your account</h1>
                                        <p className="inner-size mt-2">
                                            As the sole admin, deleting your account will delete all
                                            other accounts, all Candor Videos, all interactions, and
                                            will cancel your subscription. If you only want to remove
                                            your account,{" "}
                                            <a
                                                href="#"
                                                className="text-[#3A37A6] px-1 border-[#3A37A6] border-b-[1px]"
                                            >
                                                designate another admin
                                            </a>
                                            first.
                                        </p>
                                    </div>
                                    <div className=" flex justify-end">
                                        <ButtonComp
                                            className="bg-[#F24B59] text-white py-2 px-4 rounded-md max-lg:text-[9px] max-sm:px-1.5 max-sm:py-2"
                                            name="Delete Account"
                                            onClick={() => {
                                                setOpenMicModal(true);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {route === "Profile & Account Edit" && (
                        <>
                            <div className="flex border-b-[1px] justify-between">
                                <div className="title-size p-3">Your account details</div>
                                <div className="p-3 ">
                                    <img
                                        src={Logos.EditIconProfile}
                                        alt=" "
                                        className="icon-size"
                                    />
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="flex justify-center ">
                                    <img
                                        src={Logos.ProfileEditPicture}
                                        alt="profileIcon"
                                        className=""
                                        style={{width: "calc(6rem + 1vw)"}}
                                    />
                                </div>
                                <div className="w-full flex gap-3 mt-2">
                                    <div className="flex flex-col w-1/2 max-sm:text-[12px]">
                                        <label className="subtitle-size">First name</label>
                                        <input
                                            type="text"
                                            placeholder="Mark"
                                            className=" mt-2 p-3 placeholder-input-modal placeholder:text-black bg-[#F5F5F5] rounded-md max-sm:p-1"
                                        />
                                    </div>
                                    <div className="flex flex-col w-1/2 max-sm:text-[12px]">
                                        <label className="subtitle-size">Last name</label>
                                        <input
                                            type="text"
                                            placeholder="Johanson"
                                            className="mt-2 max-sm:mr-1 placeholder-input-modal placeholder:text-black p-3 bg-[#F5F5F5] rounded-md max-sm:p-1 "
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex gap-3 mt-3">
                                    <div className="flex flex-col w-1/2 max-sm:text-[12px]">
                                        <label className="subtitle-size">Email</label>
                                        <input
                                            type="text"
                                            placeholder="markjohanson@example.com"
                                            className="mt-2 p-3 placeholder-input-modal placeholder:text-black  bg-[#F5F5F5] rounded-md max-sm:p-1 "
                                        />
                                    </div>
                                    <div className="flex flex-col w-1/2 max-sm:text-[12px]">
                                        <label className="subtitle-size">Phone number</label>
                                        <input
                                            type="text"
                                            placeholder="+31 61 234 5678"
                                            className="mt-2 max-sm:mr-1 placeholder-input-modal placeholder:text-black p-3 bg-[#F5F5F5] rounded-md max-sm:p-1"
                                        />
                                    </div>
                                </div>
                                <div className="flex mt-3 gap-5 max-sm:text-[12px] justify-center">
                                    <ButtonComp
                                        onClick={() => {
                                            setRoute("Profile & Account");
                                        }}
                                        className="py-3 px-10 rounded-md border-[1px] max-sm:py-2 max-sm:px-6 max-xxs:py-1 max-xxs:px-3 border-[#94A2F2] text-[#94A2F2]"
                                        name="Cancel"
                                    />
                                    <ButtonComp
                                        onClick={() => {
                                            setRoute("Profile & Account");
                                        }}
                                        className="py-3 px-5 rounded-md max-sm:py-2 max-sm:px-6 max-xxs:py-1 max-xxs:px-3  bg-gradient-to-r from-[#94A2F2] to-[#AEBFF2]  text-white"
                                        name="Save Changes"
                                    />
                                </div>
                                <hr className="mt-2"/>
                                <div className="flex items-center justify-between max-sm:flex-wrap gap-2 mt-2">
                                    <div className="max-w-[400px] w-full">
                                        <h1 className="subtitle-size">Delete your account</h1>
                                        <p className="inner-size mt-2">
                                            As the sole admin, deleting your account will delete all
                                            other accounts, all Candor Videos, all interactions, and
                                            will cancel your subscription. If you only want to remove
                                            your account,{" "}
                                            <a
                                                href="#"
                                                className="text-[#3A37A6] px-1 border-[#3A37A6] border-b-[1px]"
                                            >
                                                designate another admin
                                            </a>
                                            first.
                                        </p>
                                    </div>
                                    <div className=" flex justify-end">
                                        <ButtonComp
                                            className="bg-[#F24B59] text-white py-2 px-4 rounded-md max-lg:text-[9px] max-sm:px-1.5 max-sm:py-2"
                                            name="Delete Account"
                                            onClick={() => {
                                                setOpenMicModal(true);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {route === "Security" && (
                        <div className="flex flex-col justify-between h-full pb-5">
                            <div>
                                <div className="flex  border-b-[1px] justify-between title-size">
                                    <div className="p-3">Change Your Password</div>
                                </div>
                                <div className="p-3 flex w-full gap-10 max-xs:flex-wrap ">
                                    <div className="w-1/2 max-sm:text-[12px] flex-auto">
                                        <div className="flex flex-col">
                                            <label className="subtitle-size">Current Password</label>
                                            <input
                                                type="password"
                                                className=" mt-2 p-3 placeholder-input-modal bg-[#F5F5F5] rounded-md max-sm:p-1"
                                                placeholder="Enter current password"
                                            />
                                        </div>
                                        <div className="flex flex-col mt-2 ">
                                            <label className="subtitle-size">New Password</label>
                                            <input
                                                type="password"
                                                className=" mt-2 p-3 bg-[#F5F5F5] placeholder-input-modal rounded-md max-sm:p-1"
                                                placeholder="Enter current password"
                                            />
                                        </div>
                                        <div className="flex flex-col mt-2">
                                            <label className="subtitle-size">
                                                Confirm New Password
                                            </label>
                                            <input
                                                type="password"
                                                className=" mt-2 p-3 placeholder-input-modal bg-[#F5F5F5] rounded-md max-sm:p-1"
                                                placeholder="Enter current password"
                                            />
                                        </div>
                                    </div>
                                    <div className=" w-1/2 flex items-center flex-auto">
                                        <div className="subtitle-size p-3 shadow-md bg-[white] w-full ">
                                            <h1 className="font-bold max-sm:text-[10px]">
                                                Password requirements:
                                            </h1>
                                            <ul
                                                style={{listStyle: "inherit"}}
                                                className="pl-4 text-[#A0A0A0] max-sm:text-[9px] max-sm:pl-1"
                                            >
                                                <li>span Passwords must match</li>
                                                <li>Minimum 8 characters long-the more, the better</li>
                                                <li>At least one lowercase character</li>
                                                <li>At least one uppercase character</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5  justify-center ">
                                <ButtonComp
                                    className="py-3 max-sm:py-2 max-sm:px-6 max-xxs:py-1 max-xxs:px-3 px-10 rounded-md border-[1px] border-[#94A2F2] text-[#94A2F2]"
                                    name="Cancel"
                                />
                                <ButtonComp
                                    className="py-3 px-5 max-sm:py-2 max-sm:px-6 max-xxs:py-1 max-xxs:px-3 rounded-md  bg-gradient-to-r from-[#94A2F2] to-[#AEBFF2]  text-white"
                                    name="Save Changes"
                                />
                            </div>
                        </div>
                    )}
                    {route === "Notifications" && (
                        <>
                            <div className="flex  border-b-[1px] justify-between">
                                <div className="p-3 title-size">Response Notification</div>
                            </div>
                            <div className="p-3 w-full flex gap-5 max-sm:flex-wrap">
                                <div className="w-1/2  bg-white shadow-md p-3 flex-auto">
                                    <div>
                                        <h1 className="title-size flex items-center gap-2">
                                            Response notification{" "}
                                            <div className="mt-[1px]">
                                                <ToolTip/>
                                            </div>
                                        </h1>
                                    </div>
                                    {data.map((item) => {
                                        return (
                                            <div className="mt-3 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={Logos.NotificationListImg}
                                                        alt="NotificationListImg"
                                                        className=""
                                                        style={{width: "calc(2rem + 1vw)"}}
                                                    />
                                                    <h1 className="subtitle-size">{item.name}</h1>
                                                </div>
                                                <div>
                                                    <ToggleButton
                                                        width="[40px]"
                                                        height="[22px]"
                                                        isActive={false}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="w-1/2 h-fit bg-white shadow-md p-3 flex-auto">
                                    <div className="">
                                        <h1 className="title-size flex items-center gap-1">
                                            Reply Notification{" "}
                                            <div className="">
                                                <ToolTip/>
                                            </div>
                                        </h1>
                                    </div>

                                    <div className="mt-3 flex items-center gap-2 justify-between">
                                        <div
                                            className="flex  items-center bg-[#F5F5F5] max-w-[250px] relative w-full rounded-md whitespace-nowrap cursor-pointer justify-between p-2"
                                            onClick={openDropdownHanddler}
                                        >
                                            <h1 className="subtitle-size">{dropdown}</h1>
                                            <img
                                                src={Logos.Arrowdown}
                                                alt="DownArrow"
                                                className="w-4 "
                                                style={{
                                                    transform: opendropdown
                                                        ? "rotate(180deg)"
                                                        : "rotate(0deg)",
                                                }}
                                            />
                                            {opendropdown && (
                                                <div
                                                    className="flex flex-col rounded-[10px] absolute top-8 left-0 drop-shadow-lg w-full">
                                                    {" "}
                                                    <hr className=" border-1 border-[#CEDEF2] "/>
                                                    <label
                                                        htmlFor="contact"
                                                        className="cursor-pointer max-w-[400px] w-full bg-[#ffffff] p-3 subtitle-size "
                                                        onClick={() => {
                                                            dropdownHanddler("All Conversations");
                                                        }}
                                                    >
                                                        All Conversation
                                                    </label>{" "}
                                                    <input
                                                        type="radio"
                                                        id="contact"
                                                        name="dropdown"
                                                        className="none"
                                                        style={{display: "none"}}
                                                    />{" "}
                                                    <hr className=" border-1 border-[#CEDEF2] "/>
                                                    <label
                                                        htmlFor="donations"
                                                        className="cursor-pointer max-w-[400px] w-full bg-[#ffffff] p-3 subtitle-size "
                                                        onClick={(el) => {
                                                            dropdownHanddler("My Conversations");
                                                        }}
                                                    >
                                                        My Conversations
                                                    </label>{" "}
                                                    <input
                                                        type="radio"
                                                        id="donations"
                                                        name="dropdown"
                                                        className="none"
                                                        style={{display: "none"}}
                                                    />
                                                </div>
                                            )}{" "}
                                        </div>
                                        <div>
                                            <ToggleButton
                                                isActive={false}
                                                width="[40px]"
                                                height="[22px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
