import React from "react";
import HomePortfolioCard from "./HomePortfolioCard";
import BottomArrow from "@/components/common/BottomArrow";

const HomePortfolio = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center gap-16">
      <div className="-translate-y-20">
        <HomePortfolioCard />
      </div>
      <div className="translate-y-20">
        <HomePortfolioCard />
      </div>
      <div className="-translate-y-20">
        <HomePortfolioCard />
      </div>
      <div className="translate-y-20">
        <HomePortfolioCard />
      </div>
      <BottomArrow />
    </div>
  );
};

export default HomePortfolio;
