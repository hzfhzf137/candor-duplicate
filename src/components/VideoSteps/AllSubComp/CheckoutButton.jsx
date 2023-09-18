import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { stripeConnection } from "../../../hooks/useVideo";
import { useGlobalInfo } from "../../../contexts/GlobalContext";
import GlobalLoaderCopy from "../../GloabalLoaderCopy/GloabalLoaderCopy";
import { Logos } from "../../../assets";

const CheckoutButton = ({ payload, shareFolderId, inputValue,navigateToContent1 ,disable }) => {
  const { mutate: StripeConnectHandler } = useMutation(stripeConnection);
  const { stepId } = useGlobalInfo();
  const [loading, setLoading] = useState(false);
  const [finalData, setFinalData] = useState({
    amount: +inputValue,
    currency: "usd",
    stepId: stepId,
    informationCollection: payload,
    shareFolderId: shareFolderId,
  });
  function handleDonate() {
    setLoading(true);
    StripeConnectHandler({ finalData, setLoading });
  }

  return (
    <>
      {loading ? (
        <div className="w-full flex items-center flex-col   px-3 my-auto justify-center mx-auto">
          <img
            src={Logos.AnimatedLoader}
            alt="Loader"
            className="lg:w-[120px]  xxxxl:w-[10%] xxxs:w-[90px]"
          />
        </div>
      ) : (
          <div className="flex gap-3">
            <button
              onClick={navigateToContent1}
          className="w-[110px] py-2 h-[40px] xxxxl:h-[50px] xxxxl:text-[20px] rounded  flex justify-center border-none text-[15px] cursor-pointer text-white bg-[#94A2F2]"
        >
          Back
        </button>
        <button
              onClick={handleDonate}
               disabled={disable}
          className="w-[110px] py-2 h-[40px] xxxxl:h-[50px] xxxxl:text-[20px] rounded  flex justify-center border-none text-[15px] cursor-pointer text-white bg-[#94A2F2]"
        >
          Donate
        </button>
   </div>
      )}
    </>
  );
};

export default CheckoutButton;
