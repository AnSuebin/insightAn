import HomeCareerBox from "@/components/pages/home/HomeCareerBox";
import HomeIntroBox from "@/components/pages/home/HomeIntroBox";
import HomeOverviewBox from "@/components/pages/home/HomeOverviewBox";
import HomePortfolio from "@/components/pages/home/HomePortfolio";
import HomeTemplate from "@/components/pages/home/HomeTemplate";

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
