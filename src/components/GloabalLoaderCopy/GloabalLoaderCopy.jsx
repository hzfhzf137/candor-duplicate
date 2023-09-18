import React from "react";
import { Logos } from "../../assets";
import { useGlobalInfo } from "../../contexts/GlobalContext";

const GlobalLoaderCopy = (props) => {
  // const showLoader = useStore((state)=>state.loading);
  const { loading } = useGlobalInfo();
  return (
    <div>
      {(loading || props.loading) && (
        <div className=" w-full absolute bg-white h-[88vh] xxxxl:h-[100vh] z-50  rounded-md ">
          <div className=" flex flex-col justify-center items-center h-full">
            <div className="w-full flex items-center flex-col px-3 my-auto justify-center mx-auto">
              {console.log("HELLO IMAN")}
              <img
                src={Logos.AnimatedLoader}
                alt="Loader"
                className="lg:w-[120px]  xxxxl:w-[10%] xxxs:w-[90px]"
              />
              <p className="font-[500] my-1 xxxxl:text-[22px]">{props?.data}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalLoaderCopy;
