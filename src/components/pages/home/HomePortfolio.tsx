import React from "react";
import HomePortfolioCard from "./HomePortfolioCard";

const HomePortfolio = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-16">
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
    </div>
  );
};

export default HomePortfolio;
