import React from "react";
import { Logos } from "../../assets";

const VideoPreview = () => {
  return (
    <div>
      <div className="col-start-1 col-end-2 flex items-center justify-between w-full lg:px-2 lg:pb-2 xxxs:px-0 xxxs:pb-2">
        <div>
          <h1 className="font-medium sm:text-[20px] text-[#262626]">
            Video Preview
          </h1>
        </div>
        <div className="flex gap-3">
          <img src={Logos.CloseBtn} alt="Close Button" className="w-[26px]" />
        </div>
      </div>
      <img src={Logos.VideoGirl} alt="Video Girl" className="w-full" />
    </div>
  );
};

export default VideoPreview;
