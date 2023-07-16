import FullHightMaxWidth from "@/components/layout/FullHightMaxWidth";
import MaxWidth from "@/components/layout/MaxWidth";
import HomeCareerBox from "@/components/pages/home/HomeCareerBox";
import HomeIntroBox from "@/components/pages/home/HomeIntroBox";
import HomeOverviewBox from "@/components/pages/home/HomeOverviewBox";
import HomePortfolio from "@/components/pages/home/HomePortfolio";
import HomePortfolioCard from "@/components/pages/home/HomePortfolioCard";
import HomeTemplate from "@/components/pages/home/HomeTemplate";
import ArrowIcon from "@/icons/ArrowIcon";
import DownArrowIcon from "@/icons/DownArrowIcon";

export default function HomePage() {
  return (
    <section className="w-full">
      <HomeTemplate
        Intro={<HomeIntroBox />}
        Overview={<HomeOverviewBox />}
        Portfolio={<HomePortfolio />}
        Career={<HomeCareerBox />}
      />
    </section>
  );
}
