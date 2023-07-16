import DownArrowIcon from "@/icons/DownArrowIcon";
import React from "react";

const HomeIntroBox = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div className="text-9xl font-extrabold text-mainColor mb-10">
        Insight
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <DownArrowIcon />
      </div>
    </div>
  );
};

export default HomeIntroBox;
