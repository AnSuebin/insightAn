import React from "react";
import HomePortfolioCard from "./HomePortfolioCard";
import BottomArrow from "@/components/common/BottomArrow";
import Link from "next/link";

const HomePortfolio = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center gap-16">
      <div className="-translate-y-20">
        <Link href="/portfolio">
          <HomePortfolioCard />
        </Link>
      </div>
      <div className="translate-y-20">
        <Link href="/portfolio">
          <HomePortfolioCard />
        </Link>
      </div>
      <div className="-translate-y-20">
        <Link href="/portfolio">
          <HomePortfolioCard />
        </Link>
      </div>
      <div className="translate-y-20">
        <Link href="/portfolio">
          <HomePortfolioCard />
        </Link>
      </div>
      <BottomArrow />
    </div>
  );
};

export default HomePortfolio;
