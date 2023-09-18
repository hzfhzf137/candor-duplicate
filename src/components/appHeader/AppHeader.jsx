import React, {useEffect, useRef, useState} from "react";
import {Layout, theme} from "antd";
import {Logos} from "../../assets";
import NavDropdownComp from "../NavDropdownComp/NavDropdownComp";
import {Link, useNavigate} from "react-router-dom";
import {useGlobalInfo} from "../../contexts/GlobalContext";

const firstPartData = [
    {
        label: "Profile & Account",
        icon: Logos.ProfileUser,
        alt: "Profile & Account",
        link: "/profile-settings",
    },
    {
        label: "Security",
        icon: Logos.Sheild,
        alt: "Security",
        link: "/profile-settings",
    },

];
const secondPartData = [

    {
        label: "Plan & Billing",
        icon: Logos.Notepad,
        alt: "Plan & Billing",
        link: "/martin-us-senate",
    },
    {
        label: "Branding",
        icon: Logos.MedalStar,
        alt: "Branding",
        link: "/martin-us-senate",
    },

];
const AppHeader = ({module}) => {
    const {Header} = Layout;
    const [searchValue, setSearchValue] = useState("");
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const {setVisible} = useGlobalInfo();
    const [collapsed, setCollapsed] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);
    const LogoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem('conversationId')
    };
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    let userPic = localStorage.getItem('userPic');
    if (userPic == "null" || userPic == null) {
        localStorage.setItem("userPic", "");
    }
    const navigate = useNavigate()
    const useClickOutside = (handler) => {
        const domNode = useRef();
        useEffect(() => {
            const eventHandler = (event) => {
                if (!domNode.current.contains(event.target)) {
                    handler();
                }
            };
            document.addEventListener("mousedown", eventHandler);

            const keyUpEventHandler = (event) => {
                if (event.keyCode === 27) {
                    handler();
                }
            };
            document.addEventListener("keyup", keyUpEventHandler);
            return () => {
                document.removeEventListener("mousedown", eventHandler);
                document.removeEventListener("keyup", keyUpEventHandler);
            };
        });
        return domNode;
    };
    const dropdownNode = useClickOutside(() => {
        setShowDropdown(false);
    });

    function logout() {
        sessionStorage.removeItem("token")
        localStorage.setItem("active", true)
        localStorage.removeItem("token")
        localStorage.removeItem('loginEmail');
        localStorage.removeItem('signUpEmail');
        localStorage.removeItem('receiverId');
        localStorage.removeItem('conversationId');
        localStorage.removeItem('userId');
        localStorage.setItem("active", JSON.stringify(true));
        navigate("/login")
    }

    return (
        <Header
            style={{
                background: colorBgContainer,
                boxShadow:
                    "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1)",
                zIndex: 10,
                paddingInline: "0px",
                padding: "6px",
            }}
            className="h-auto max-md:pt-4"
        >

            <div className="flex justify-between items-center max-md:items-start relative lg:pr-[50px] xxxs:pr-[16px]">
                <div className="flex items-center gap-5 max-md:w-[58%]">
                    <img
                        src={Logos.Toggle}
                        alt="Toggle"
                        className="ml-4 hidden max-md:inline "
                        onClick={() => {
                            setVisible(true);
                        }}
                    />
                    <div className="md:block hidden h-[30px] sm:h-[40px] bg-[#94A2F2] w-[4px]"></div>
                    <div>
                        <h1
                            className="md:block hidden font-medium text-black text-[28px]"
                            style={{
                                fontSize: "calc(1rem + 0.6vw)",
                            }}
                        >
                            {module}
                        </h1>
                    </div>
                </div>
                <div className="flex items-center gap-3 max-md:gap-0   max-md:justify-end max-md:flex-wrap-reverse">

                    <div
                        className="flex items-center justify-end  gap-3 max-md:gap-0 cursor-pointer max-md:w-full"
                        onClick={() => {
                            setShowDropdown(!showDropdown);
                        }}
                    >
                        <div className="flex justify-between max-md:w-full">
                            <img
                                src={Logos.MblLogo}
                                alt="MblLogo"
                                className="max-sm:ml-5 hidden max-md:inline"
                            />
                            <img
                                src={userPic ? userPic : Logos.Navdropdown}
                                style={{width: "calc(1.5rem + 1vw)", borderRadius: "50%"}}
                                alt="User Image"
                            />
                        </div>
                        <div
                            style={{
                                fontSize: "calc(0.6rem + 0.5vw)",
                            }}
                            className="md:block hidden"
                        >
                            <h1>{userName}</h1>
                        </div>
                        <div>
                            <img
                                src={Logos.Arrowdown}
                                alt="Dropdown Arrow"
                                className="cursor-pointer md:block hidden"
                            />
                            <div
                                className={
                                    !showDropdown
                                        ? "hidden"
                                        :
                                        "flex flex-col fixed left-0 top-0 backdrop-opacity-20 z-[11]  bg-black/30 w-[100vw] h-[100vh] "
                                }
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <div
                                    className="bg-[#FFFFFF] shadow-sm p-[10px] rounded-[10px] absolute top-10 right-12 "
                                    style={{width: "calc(25rem + 1vw)"}}
                                    ref={dropdownNode}
                                >
                                    <div className="flex items-center gap-5 ">
                                        <img
                                            src={userPic ? userPic : Logos.Navdropdown}
                                            alt="man image"
                                            style={{width: "calc(1rem + 3vw)", borderRadius: "50%"}}
                                        />
                                        <div className="flex leading-6 flex-col gap-2">
                                            <h1
                                                className="font-medium text-[14px]"
                                                style={{fontSize: "calc(1rem + 0.2vw)"}}
                                            >
                                                {userName}
                                            </h1>
                                            <p
                                                className="font-normal text-[12px]"
                                                style={{fontSize: "calc(1rem + 0.2vw)"}}
                                            >
                                                {userEmail}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 ">
                                        <img src={Logos.Line} alt="Line"/>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 mt-2"
                                        onClick={() => {
                                            setShowDropdown(!showDropdown);
                                        }}
                                    >
                                        {firstPartData.map((item) => {
                                            return (
                                                <NavDropdownComp
                                                    showDropdown={showDropdown}
                                                    setShowDropdown={setShowDropdown}
                                                    link={item.link}
                                                    src={item.icon}
                                                    alt={item.alt}
                                                    content={item.label}
                                                />
                                            );
                                        })}
                                    </div>
                                    <div className="mt-2 ">
                                        <img src={Logos.Line} alt="Line"/>
                                    </div>
                                    <div className="flex items-center leading-none h-10 ">
                                        <h1
                                            className="font-medium text-[16px]"
                                            style={{fontSize: "calc(1rem + 0.3vw)"}}
                                        >
                                            Maetin for U.S Senate
                                        </h1>
                                    </div>
                                    <div className=" ">
                                        <img src={Logos.Line} alt="Line"/>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 mt-2"
                                        onClick={() => {
                                            setShowDropdown(!showDropdown);
                                        }}
                                    >
                                        {secondPartData.map((item) => {
                                            return (
                                                <NavDropdownComp
                                                    onClick={() => {
                                                        setShowDropdown(!showDropdown);
                                                    }}
                                                    showDropdown={showDropdown}
                                                    setShowDropdown={setShowDropdown}
                                                    src={item.icon}
                                                    link={item.link}
                                                    alt={item.alt}
                                                    content={item.label}
                                                />
                                            );
                                        })}
                                    </div>
                                    <div className="mt-2">
                                        <img src={Logos.Line} alt="Line"/>
                                    </div>
                                    <Link
                                        to="/login"
                                        onClick={LogoutHandler}
                                        className="flex flex-col mt-2"
                                    >
                                        <NavDropdownComp
                                            src={Logos.Logout}
                                            alt={"Logout"}
                                            content={"Logout"}
                                            func={logout}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    );
};

export default AppHeader;
