import React from "react";
import {useNavigate} from "react-router";
import {useGlobalInfo} from "../../contexts/GlobalContext";

const NavDropdownComp = (props) => {
    const navigate = useNavigate();
    const {setRoute} = useGlobalInfo();
    const {setNavigateTabs} = useGlobalInfo();

    function clickHandler() {
        setRoute(props.alt);
        setNavigateTabs(props.alt);
        navigate(props.link);
    }

    return (
        <div className="flex leading-none items-center gap-5 cursor-pointer ">
            <div>
                <img src={props.src} alt={props.alt} className="icon-size"/>
            </div>
            <div
                className="flex items-center gap-5"
                onClick={() => {
                    clickHandler();
                    props.func();
                }}
                style={{fontSize: "calc(1rem + 0.2vw)"}}
            >
                <h1 className="">{props.content}</h1>
                <h1 className="text-[12px] text-stone-400 ">{props.data}</h1>
            </div>
        </div>
    );
};

export default NavDropdownComp;
