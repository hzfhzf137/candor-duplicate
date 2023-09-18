import React from "react";
import PathRight from "./PathRight";
import {useGlobalInfo} from "../../../contexts/GlobalContext";
import ButtonRight from "./ButtonRight";
import DonationRight from "./DonationRight";
import MainEndingRight from "./MainEndingRight";

const VideoRightComp = (props) => {
    const {interaction} = useGlobalInfo();
   
    return (
        <>
            {interaction === "Path" && (
                <PathRight card={props.card} pathData={props.pathData} />
            )}
            {interaction === "Button" && (
                <ButtonRight activeScreen={props.card}/>
            )}
            {interaction === "Donation" && (
                <DonationRight activeScreen={props.card}/>
            )}
            {(interaction === "Ending Screen" || interaction === "EndingScreen") && (
                <MainEndingRight card={props.card}/>
            )}
        </>
    );
};

export default VideoRightComp;
