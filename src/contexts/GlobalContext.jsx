import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("Profile & Account");
  const [navigateTabs, setNavigateTabs] = useState("organization");
  const [videoState, setVideoState] = useState([]);
  const [module, setModule] = useState(
    localStorage.getItem("module") ?? "Conversations"
  );
  const [visible, setVisible] = useState(false);
  const [showSecondContent, setShowSecondContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fixedAmount, setFixedAmount] = useState(false);
  const [Disclaimer, setDisclaimer] = useState("");
  const [suggestedAmountValues, setSuggestedAmountValues] = useState([]);
  const [suggestedAmount, setSuggestedAmount] = useState(true);
  const [subfolderId, setSubfolderId] = useState("");
  const [interactionId, setInteractionId] = useState("");
  const [selectedFolderIndex, setSelectedFolderIndex] = useState(null);
  const [steps, setSteps] = useState([]);
  const [fixedAmountValue, setFixedAmountValue] = useState(null);
  const [maxAmount, setMaxAmount] = useState(null);
  const [minAmount, setMinAmount] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState("USD");
  const [screenTitle, setScreenTitle] = useState("");
  const [screenText, setScreenText] = useState("");
  const [selectedSubFolderIndex, setSelectedSubFolderIndex] = useState(null);
  const [stepDetails, setDetails] = useState({});
  const [selectedSubFolderData, setSelectedSubFolderData] = useState(null);
  const [sharedVideoData, setSharedVideoData] = useState({});
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnail2, setThumbnail2] = useState(null);
  const [customAmount, setCustomAmount] = useState(false);
  const [folderId, setFolderId] = useState(null);
  const [informationCollection, setDonationInformation] = useState({
    firstName: true,
    lastName: true,
    email: true,
    unit: true,
    address: true,
    occupation: true,
    employment: true,
    donationConsent: true,
    disclaimer: true,
  });
  const [interaction, setInteraction] = useState("");
  const [stepId, setStepId] = useState("");
  const [videoType, setVideoType] = useState("");
  const [time, setTime] = useState(0);
  const [backgroundColor, setColor] = useState("#3A37A6");
  const [textColor, setTextColor] = useState("#DEDEDE");
  const [buttonInteraction, setButtonInteraction] = useState("");
  const [delay, setDelay] = useState(null);
  const [logo, setLogo] = useState(true);
  const [pathData, setPathData] = useState([]);
  const [pathDataList, setPathDataList] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const [addressFormat, setAddressFormat] = useState("");
  const [buttonDEstination, setButtonDestination] = useState(null);
  const [CurrencySign, setCurrencySign] = useState("");
  const [counter, setCounter] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [checkStatus, setStripeStatus] = useState(null);
  return (
    <GlobalContext.Provider
      value={{
        interactionId,
        setInteractionId,
        addressFormat,
        checkStatus,
        isDisabled,
        setIsDisabled,
        setStripeStatus,
        counter,
        setCounter,
        buttonDEstination,
        setButtonDestination,
        delay,
        setDelay,
        thumbnail,
        customAmount,
        setCustomAmount,
        CurrencySign,
        setCurrencySign,
        setThumbnail,
        thumbnail2,
        setThumbnail2,
        setAddressFormat,
        selectedOption1,
        setSelectedOption1,
        maxAmount,
        setMaxAmount,
        minAmount,
        folderId,
        setFolderId,
        setMinAmount,
        titleValue,
        setTitleValue,
        pathDataList,
        setPathDataList,
        pathData,
        setPathData,
        buttonInteraction,
        setButtonInteraction,
        subfolderId,
        steps,
        setSteps,
        suggestedAmountValues,
        setSuggestedAmountValues,
        selectedSubFolderIndex,
        setSelectedSubFolderIndex,
        selectedFolderIndex,
        setSelectedFolderIndex,
        setSubfolderId,
        logo,
        sharedVideoData,
        setSharedVideoData,
        setLogo,
        selectedSubFolderData,
        setSelectedSubFolderData,
        backgroundColor,
        videoType,
        setVideoType,
        Disclaimer,
        informationCollection,
        setDonationInformation,
        setDisclaimer,
        fixedAmount,
        setFixedAmount,
        suggestedAmount,
        setSuggestedAmount,
        setColor,
        textColor,
        setTextColor,
        interaction,
        setInteraction,
        time,
        setTime,
        loading,
        setLoading,
        screenTitle,
        setScreenTitle,
        screenText,
        setScreenText,
        showSecondContent,
        setShowSecondContent,
        fixedAmountValue,
        setFixedAmountValue,
        stepDetails,
        setDetails,
        visible,
        setVisible,
        module,
        setModule,
        route,
        setRoute,
        videoState,
        setVideoState,
        navigateTabs,
        setNavigateTabs,
        stepId,
        setStepId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalInfo = () => {
  return useContext(GlobalContext);
};
