import FullHightMaxWidth from "@/components/layout/FullHightMaxWidth";
import React from "react";

const PortfolioPage = () => {
  return (
    <FullHightMaxWidth>
      <div className="flex w-full h-screen gap-6 justify-between pt-[120px] pb-14 px-4 box-border ">
        <div className="flex-1 bg-indigo-500"></div>
        <div className="flex-1">
          <div className="text-mainColor">
            <div className="flex items-end">
              <div className="text-8xl font-thin">1</div>
              <div className="text-4xl font-thin pb-3">프로젝트 탐나예</div>
            </div>
            <p className="ml-4 mt-1">
              기존 설문조사 제작 사이트의 불편한 사용성 개선,
              <br /> 직관적이고 사용하기 편리한 설문조사 제작 페이지
            </p>
          </div>
          <div className="w-full px-4 mt-8">
            <table className="table-fixed border-solid w-full">
              <tr className="">
                <td className="border-r border-b border-t border-mainColor">
                  hi
                </td>
                <td className="border-b border-t border-mainColor">hi</td>
              </tr>
              <tr>
                <td className="border-r border-b border-mainColor">hi</td>
                <td className="border-b border-mainColor">hi</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </FullHightMaxWidth>
  );
};

export default PortfolioPage;
