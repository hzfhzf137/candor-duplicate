import React, {useState} from "react";
import {Logos} from "../../assets";
import InviteNewMember from "../PopUp/InviteNewMember";
import DynamicDropdown from "../DynamicDropdown/DynamicDropdown";

function ManageTeam() {
    const [isPopup, setIsPopup] = useState(false);
    const Popup = () => {
        setIsPopup(!isPopup);
    };

    return (
        <div>
            <div className="w-full h-[82vh] overflow-y-auto ">
                <div className="lg:py-5 lg:px-4  xxxs:py-3 xxxs:px-2">
                    <div className="border rounded ">
                        <div>
                            <div className="flex justify-between lg:py-3 xxxs:py-1 px-3 ">
                                <p className="title-size">Manage Team</p>

                                <button
                                    onClick={Popup}
                                    className="h-[45px] w-[170px] rounded shadow-md  inner-size text-white bg-[#94A2F2]"
                                >
                                    Add a Member
                                </button>
                                {isPopup && <InviteNewMember handleClose={Popup}/>}
                            </div>
                            <hr/>
                            <div className="lg:px-3 xxxs:py-1">
                                <p className="subtitle-size p-3">
                                    Manage team (4 of 6 seats user)
                                </p>
                                <div className="rounded-lg mb-1 border p-3 ">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4">
                                            <img
                                                src={Logos.ManageTeamP1}
                                                alt="man dp"
                                                className="lg:w-[70px] xxxs:w-[40px]"
                                            />
                                            <div className="lg:py-2">
                                                <p className="subtitle-size">Liz Jennings</p>
                                                <p className="text-[#A0A0A0] inner-size">
                                                    lizjennings@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="subtitle-size px-4 ">Admin (You)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg mb-1 border p-3 ">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4">
                                            <img
                                                src={Logos.ManageTeamP2}
                                                alt="man dp"
                                                className="lg:w-[70px] xxxs:w-[40px]"
                                            />
                                            <div className="lg:py-2">
                                                <p className="subtitle-size">Brandon Smith</p>
                                                <p className="text-[#A0A0A0] inner-size">
                                                    brandonsmith@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex lg:gap-14 ">
                                            <DynamicDropdown
                                                mainTitle={"Admin"}
                                                option1={"Admin"}
                                                option2={"Member"}
                                                width="[130px]"
                                                text="[12px]"
                                            />
                                            <img
                                                src={Logos.Trash}
                                                alt="Trash"
                                                className="icon-size cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg mb-1 border p-3 ">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4">
                                            <img
                                                src={Logos.ManageTeamP3}
                                                alt="man dp"
                                                className="lg:w-[70px] xxxs:w-[40px]"
                                            />
                                            <div className="lg:py-2">
                                                <p className="subtitle-size">Hanah Busing</p>
                                                <p className="text-[#A0A0A0] inner-size">
                                                    hanahbusing@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex  gap-3">
                                            <DynamicDropdown
                                                mainTitle={"Member"}
                                                option1={"Admin"}
                                                option2={"Member"}
                                                width="[130px]"
                                                text="[12px]"
                                            />
                                            <img
                                                src={Logos.ManageLock}
                                                alt="Trash"
                                                className=" icon-size  cursor-pointer"
                                            />
                                            <img
                                                src={Logos.Trash}
                                                alt="Trash"
                                                className=" icon-size  cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg mb-10 border p-3 ">
                                    <div className="flex justify-between flex-wrap xxxs:py-1 items-center">
                                        <div>
                                            <p className="text-[#A0A0A0]  py-1 subtitle-size">
                                                hanahbusing@example.com
                                            </p>
                                            <button
                                                className="w-[100px] h-[40px] inner-size text-white bg-[#94A2F2] rounded">
                                                Panding
                                            </button>
                                        </div>
                                        <div className="flex gap-3">
                                            <DynamicDropdown
                                                mainTitle={"Admin"}
                                                option1={"Admin"}
                                                option2={"Member"}
                                                width="[130px]"
                                                text="[12px]"
                                            />
                                            <img
                                                src={Logos.ManageLock}
                                                alt="Trash"
                                                className=" icon-size  cursor-pointer"
                                            />
                                            <img
                                                src={Logos.Trash}
                                                alt="Trash"
                                                className=" icon-size  cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageTeam;
