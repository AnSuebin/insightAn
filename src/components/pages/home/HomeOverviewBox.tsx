import BottomArrow from "@/components/common/BottomArrow";
import ArrowIcon from "@/icons/ArrowIcon";
import Link from "next/link";
import React from "react";

const HomeOverviewBox = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
      <div>
        <div className="flex gap-5 items-center">
          <div className="text-8xl font-extrabold text-mainColor mb-5">
            Make Insight <br />
            for the Next.
          </div>
          <ArrowIcon />
        </div>
        <p className="text-3xl font-normal text-mainColor mb-10">
          다음을 위해 고민하고, 깨달음을 얻어 한 발짝씩 나아 가는 개발자
        </p>
      </div>
      <BottomArrow />
    </div>
  );
};

export default HomeOverviewBox;
