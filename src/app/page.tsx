import FullHightMaxWidth from "@/components/layout/FullHightMaxWidth";
import MaxWidth from "@/components/layout/MaxWidth";
import HomePortfolioCard from "@/components/pages/home/HomePortfolioCard";
import ArrowIcon from "@/icons/ArrowIcon";
import DownArrowIcon from "@/icons/DownArrowIcon";

export default function HomePage() {
  return (
    <section className="w-full">
      <MaxWidth>
        <div className="w-full h-screen flex justify-center items-center relative">
          <div className="text-9xl font-extrabold text-mainColor mb-10">
            Insight
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
            <DownArrowIcon />
          </div>
        </div>
        <div className="w-full h-screen flex flex-col justify-center items-center">
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
        </div>
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
      </MaxWidth>
    </section>
  );
}
