import React from "react";
import HomePortfolioCard from "./HomePortfolioCard";
import BottomArrow from "@/components/common/BottomArrow";
import Link from "next/link";
import { getHomePortfolios } from "@/apis/home/home";

const HomePortfolio = async () => {
  const portfolioListData = await getHomePortfolios();

  return (
    <div className="relative w-full h-screen flex justify-center items-center gap-16">
      {portfolioListData.map((portfolio) => (
        <div className="-translate-y-20">
          <Link href="/portfolio">
            <HomePortfolioCard item={portfolio} />
          </Link>
        </div>
      ))}
      <BottomArrow />
    </div>
  );
};

export default HomePortfolio;
