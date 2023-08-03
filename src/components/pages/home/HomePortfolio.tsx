import React from "react";
import HomePortfolioCard from "./HomePortfolioCard";
import BottomArrow from "@/components/common/BottomArrow";
import Link from "next/link";
import { portfolioList } from "@/apis/home/home";

const HomePortfolio = async () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center gap-16">
      {portfolioList.map((portfolio) => (
        <div className="-translate-y-20" key={`home-portfolio-${portfolio.id}`}>
          <Link href={`/portfolio/${portfolio.id}`}>
            <HomePortfolioCard item={portfolio} />
          </Link>
        </div>
      ))}
      <BottomArrow />
    </div>
  );
};

export default HomePortfolio;
