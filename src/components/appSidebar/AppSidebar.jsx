import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout, theme } from "antd";
import { PrivateRoutes } from "../../../routes";
import logo from "../../assets/Svg/Logo.svg";
import { Logos } from "../../assets";
import { Sidebar } from "primereact/sidebar";

import "./style.css";
import { useGlobalInfo } from "../../contexts/GlobalContext";

const AppSidebar = (props) => {
  const navigate = useNavigate();

  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { visible, setVisible, setModule } = useGlobalInfo();
  const [active, setActive] = useState({
    conversation:
      localStorage.getItem("module") == "Conversations" ? true : false,
    video:
      localStorage.getItem("module") == "Video Individual - Build"
        ? true
        : false,
    contact:
      localStorage.getItem("module") == "Data and records" ? true : false,
    library: localStorage.getItem("module") == "Library" ? true : false,
  });
  const navClickHandler = (e) => {
    const event = e.domEvent.target.textContent;
    PrivateRoutes.forEach((route) => {
      if (route.name == event) {
        navigate(`${route.path}`);
      }
    });
  };

  function conversationClick() {
    navigate("/conversation");
  }

  function conversationClick() {
    navigate("/conversation");
  }

  function videoClick() {
    navigate("/video");
  }

  function libraryClick() {
    navigate("/library");
  }

  function contactClick() {
    navigate("/contact");
  }
  useEffect(() => {
    if (window.location.pathname.includes("conversation") || window.location.pathname=='/') {
      setActive((prev) => ({
        video: false,
        contact: false,
        library: false,
        conversation: true,
      }));
    }
 if (window.location.pathname.includes("video")) {
      setActive((prev) => ({
        video: true,
        contact: false,
        library: false,
        conversation: false,
      }));
    }
 if (window.location.pathname.includes("library")) {
      setActive((prev) => ({
        video: false,
        contact: false,
        library: true,
        conversation: false,
      }));
    }
 if (window.location.pathname.includes("contact")) {
      setActive((prev) => ({
        video: false,
        contact: true,
        library: false,
        conversation: false,
      }));
    }

// console.log('url route',window.location.pathname );
  }, []);
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="max-md:hidden"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1)",
          zIndex: 2,
        }}
        theme="light"
      >
        {/* <Link to="/"> */}
        <img
          src={logo}
          alt=""
          onClick={() => {
            conversationClick();
            setActive((prev) => ({
              video: false,
              contact: false,
              library: false,
              conversation: true,
            }));
            setModule("Conversations");
            // onMain();
          }}
          className="cursor-pointer mx-auto py-2 mb-3 w-[82%]"
        />
        {/* </Link> */}
        <div className="flex flex-col gap-5">
          <div
            onClick={() => {
              conversationClick();
              setActive((prev) => ({
                video: false,
                contact: false,
                library: false,
                conversation: true,
              }));
              setModule("Conversations");
            }}
            className={
              active.conversation
                ? "bg-[#E7EEF9] flex items-center gap-5 cursor-pointer"
                : "flex items-center justify-center h-[50px] cursor-pointer"
            }
          >
            <div
              className={
                active.conversation
                  ? "bg-[#3A37A6] w-[5px] h-[50px]"
                  : "hidden "
              }
              style={{
                borderRadius: " 0px 4px 4px 0px",
              }}
            ></div>
            <div>
              <img
                src={
                  !active.conversation
                    ? Logos.ColorConversation
                    : Logos.Conversation
                }
                alt="Chat Image"
              />
            </div>
          </div>
          <Link
            to="/video"
            onClick={() => {
              setActive((prev) => ({
                video: true,
                contact: false,
                library: false,
                conversation: false,
              }));
              setModule("Video Individual - Build");
            }}
            className={
              active.video
                ? "bg-[#E7EEF9] flex items-center gap-5 cursor-pointer"
                : "flex items-center justify-center h-[50px] cursor-pointer"
            }
          >
            <div
              className={
                active.video ? "bg-[#3A37A6] w-[5px] h-[50px]" : "hidden"
              }
              style={{
                borderRadius: " 0px 4px 4px 0px",
              }}
            ></div>
            <div>
              <img
                src={!active.video ? Logos.video : Logos.ColorVideo}
                alt="Video Image"
              />
            </div>
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              setActive((prev) => ({
                video: false,
                contact: true,
                library: false,
                conversation: false,
              }));
              setModule("Data and records");
            }}
            className={
              active.contact
                ? "bg-[#E7EEF9] flex items-center gap-5 cursor-pointer"
                : "flex items-center justify-center h-[50px] cursor-pointer"
            }
          >
            <div
              className={
                active.contact ? "bg-[#3A37A6] w-[5px] h-[50px]" : "hidden "
              }
              style={{
                borderRadius: " 0px 4px 4px 0px",
              }}
            ></div>
            <div>
              <img
                src={!active.contact ? Logos.contact : Logos.ColorContacts}
                alt="Contact Image"
              />
            </div>
          </Link>
          <Link
            to="/library"
            onClick={() => {
              setActive((prev) => ({
                video: false,
                contact: false,
                library: true,
                conversation: false,
              }));
              setModule("Library");
            }}
            className={
              active.library
                ? "bg-[#E7EEF9] flex items-center gap-5 cursor-pointer"
                : "flex items-center justify-center h-[50px] cursor-pointer"
            }
          >
            <div
              className={
                active.library ? "bg-[#3A37A6] w-[5px] h-[50px]" : "hidden "
              }
              style={{
                borderRadius: " 0px 4px 4px 0px",
              }}
            ></div>
            <div>
              <img
                src={!active.library ? Logos.library : Logos.ColorLibrary}
                alt="Library Image"
              />
            </div>
          </Link>
          <div className="absolute bottom-16 left-6">
            <Link
              to="/login"
              onClick={() => {
                setActive((prev) => ({
                  video: false,
                  contact: false,
                  library: true,
                  conversation: false,
                }));
                setModule("Library");
                localStorage.removeItem("token");
              }}
              className={"flex items-end justify-center  cursor-pointer"}
            >
              <div>
                <img
                  src={Logos.LogoutGray}
                  className="w-[26px]"
                  alt="Library Image"
                />
              </div>
            </Link>
          </div>
        </div>
      </Sider>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "70px" }}
      >
        <img
          src={logo}
          alt=""
          onClick={(e) => {
            setModule("Conversations");
            setVisible(false);
            e.preventDefault();
          }}
          className="cursor-pointer mx-auto py-2 mb-3 w-[68%]"
        />
        <div className="flex flex-col gap-5">
          <div
            onClick={(e) => {
              conversationClick();
              setActive((prev) => ({
                video: false,
                contact: false,
                library: false,
                conversation: true,
              }));
              setModule("Conversations");
              setTimeout(setVisible(false), 1000);
            }}
            className={
              active.conversation
                ? "bg-[#E7EEF9] flex items-center gap-4 w-full  cursor-pointer"
                : "flex items-center justify-center h-[50px] cursor-pointer"
            }
          >
            <div
              className={
                active.conversation
                  ? "bg-[#3A37A6] w-[5px] h-[50px]"
                  : "hidden "
              }
              style={{
                borderRadius: " 0px 4px 4px 0px",
              }}
            ></div>
            <div>
              <img
                src={
                  !active.conversation
                    ? Logos.ColorConversation
                    : Logos.Conversation
                }
                alt="Chat Image"
                className="w-[30px]"
              />
            </div>
          </div>
          <div
            onClick={() => {
              videoClick();
              setActive((prev) => ({
                video: true,
                contact: false,
                library: false,
                conversation: false,
              }));
              setModule("Video Individual - Build");
              setTimeout(setVisible(false), 1000);
            }}
            className={
              active.video
                ? "bg-[#E7EEF9] flex items-center gap-5 cursor-pointer"
                : "flex items-center justify-center h-[50px] cursor-pointer"
            }
          >
            <div
              className={
                active.video ? "bg-[#3A37A6] w-[5px] h-[50px]" : "hidden"
              }
              style={{
                borderRadius: " 0px 4px 4px 0px",
              }}
            ></div>
            <div>
              <img
                src={!active.video ? Logos.video : Logos.ColorVideo}
                alt="Video Image"
              />
            </div>
          </div>
          <div
            onClick={() => {
              contactClick();
              setActive((prev) => ({
                video: false,
                contact: true,
                library: false,
                conversation: false,
              }));
              setModule("Data and records");
              setTimeout(setVisible(false), 1000);
            }}
            className={
              active.contact
                ? "bg-[#E7EEF9] flex items-center gap-5 cursor-pointer"
                : "flex items-center justify-center h-[50px] cursor-pointer"
            }
          >
            <div
              className={
                active.contact ? "bg-[#3A37A6] w-[5px] h-[50px]" : "hidden "
              }
              style={{
                borderRadius: " 0px 4px 4px 0px",
              }}
            ></div>
            <div>
              <img
                src={!active.contact ? Logos.contact : Logos.ColorContacts}
                alt="Contact Image"
              />
            </div>
          </div>
          <div
            onClick={() => {
              libraryClick();
              setActive((prev) => ({
                video: false,
                contact: false,
                library: true,
                conversation: false,
              }));
              setModule("Library");
              setTimeout(setVisible(false), 1000);
            }}
            className={
              active.library
                ? "bg-[#E7EEF9] flex items-center gap-5 cursor-pointer"
                : "flex items-center justify-center h-[50px] cursor-pointer"
            }
          >
            <div
              className={
                active.library ? "bg-[#3A37A6] w-[5px] h-[50px]" : "hidden "
              }
              style={{
                borderRadius: " 0px 4px 4px 0px",
              }}
            ></div>
            <div>
              <img
                src={!active.library ? Logos.library : Logos.ColorLibrary}
                alt="Library Image"
              />
            </div>
          </div>
          <div className="absolute bottom-16 left-6">
            <Link
              to="/login"
              onClick={() => {
                setActive((prev) => ({
                  video: false,
                  contact: false,
                  library: true,
                  conversation: false,
                }));
                setModule("Library");
                localStorage.removeItem("token");
                setTimeout(setVisible(false), 1000);
              }}
              className={"flex items-end justify-center  cursor-pointer"}
            >
              <div>
                <img
                  src={Logos.LogoutGray}
                  className="w-[26px]"
                  alt="Library Image"
                />
              </div>
            </Link>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default AppSidebar;
