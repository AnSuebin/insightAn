import FullHightMaxWidth from "@/components/layout/FullHightMaxWidth";
import MaxWidth from "@/components/layout/MaxWidth";
import ArrowIcon from "@/icons/arrowIcon";

export default function HomePage() {
  return (
    <section className="w-full">
      <MaxWidth>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="text-9xl font-extrabold text-mainColor mb-10">
            Insight
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
        <div className="w-full h-screen flex flex-col justify-center items-center"></div>
      </MaxWidth>
    </section>
  );
}
