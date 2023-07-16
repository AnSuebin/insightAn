import React, { FC } from "react";
import onboardingImage from "@/../public/images/onboarding.gif";
import Image from "next/image";
import { IHomePortfolio } from "@/apis/home/home.type";

interface Props {
  item: IHomePortfolio;
}

const HomePortfolioCard: FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-imageWidth h-imageHeight max-h-imageHeight overflow-y-auto mb-4">
        <Image src={onboardingImage} alt="onboarding summary image" />
      </div>
      <p className="text-lg font-semibold text-mainColor mb-10">
        Project{item.id}. {item.title}
      </p>
    </div>
  );
};

export default HomePortfolioCard;
