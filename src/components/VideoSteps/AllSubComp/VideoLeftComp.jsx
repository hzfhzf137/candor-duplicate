import React from 'react'
import Path from './Path'
import {useGlobalInfo} from '../../../contexts/GlobalContext'
import ButtonLeft from './Button'
import DonationLeft from './Donation'
import MainEndingLeft from './MainEnding'

const VideoLeftComp = (props) => {
    const {interaction} = useGlobalInfo()
    return (
        <>
            {interaction === "Path" && <Path pathData={props?.pathData?.pathsList} interactionId={props.interactionId}/>}
            {interaction === "Button" && <ButtonLeft interactionId={props.interactionId} pathsList={props.pathData}/>}
            {interaction === "Donation" && <DonationLeft interactionId={props.interactionId} pathsList={props.pathData}/>}
            {(interaction === "Ending Screen" || interaction === "EndingScreen") && <MainEndingLeft/>}
        </>
    )
}

export default VideoLeftComp
