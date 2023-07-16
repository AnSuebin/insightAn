import BottomArrow from "@/components/common/BottomArrow";
import React from "react";

const HomeIntroBox = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div className="text-9xl font-extrabold text-mainColor mb-10">
        Insight
      </div>
      <BottomArrow />
    </div>
  );
};

export default HomeIntroBox;
