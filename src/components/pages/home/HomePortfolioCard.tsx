import React from "react";
import onboardingImage from "@/../public/images/onboarding.gif";
import Image from "next/image";

const HomePortfolioCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-imageWidth h-imageHeight max-h-imageHeight overflow-y-auto mb-4">
        <Image src={onboardingImage} alt="onboarding summary image" />
      </div>
      <p className="text-lg font-semibold text-mainColor mb-10">
        Project1. 탐나예
      </p>
    </div>
  );
};

export default HomePortfolioCard;
