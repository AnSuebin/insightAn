import { getSelectPortfolios } from "@/apis/portfolio/portfolio";
import FullHightMaxWidth from "@/components/layout/FullHightMaxWidth";
import PortfolioTableListRow from "@/components/pages/Portfolio/PortfolioTableListRow";
import PortfolioTableRow from "@/components/pages/Portfolio/PortfolioTableRow";
import React, { FC } from "react";

interface Props {
  params: {
    slug: string;
  };
}

const PortfolioPage: FC<Props> = async ({ params: { slug } }) => {
  const portfolioData = await getSelectPortfolios(+slug);
  const portfolioSummary = portfolioData.contents.summary;

  return (
    <FullHightMaxWidth>
      <div className="flex w-full h-screen gap-6 justify-between pt-[120px] pb-14 px-4 box-border">
        <div className="flex-1 bg-indigo-500"></div>
        <div className="flex-1">
          <div className="text-mainColor">
            <div className="flex items-end mb-4">
              <div className="text-8xl font-thin">{portfolioData.id}</div>
              <div className="text-4xl font-thin ml-3 pb-3">
                {portfolioData.title}
              </div>
            </div>
            {portfolioData.about.map((item) => (
              <p className="font-semibold">{item}</p>
            ))}
          </div>

          <div className="w-full pr-4 mt-10">
            <table className="table-fixed border-solid w-full text-mainColor">
              <tbody>
                <PortfolioTableRow
                  title="기간"
                  item={`${portfolioSummary.period.start}~${portfolioSummary.period.end}`}
                />
                <PortfolioTableRow
                  title="참여 인원"
                  item={portfolioSummary.participants}
                />
                <PortfolioTableRow title="담당" item={portfolioSummary.part} />
                <PortfolioTableRow
                  title="기술"
                  item={portfolioSummary.skills}
                />
                {portfolioData.contents.goal && (
                  <PortfolioTableListRow
                    title="구현 목표"
                    items={portfolioData.contents.goal}
                    isLineExist
                  />
                )}
                <PortfolioTableListRow
                  title="핵심 구현 내용"
                  items={portfolioData.contents.makePoint}
                  isLineExist
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </FullHightMaxWidth>
  );
};

export default PortfolioPage;
