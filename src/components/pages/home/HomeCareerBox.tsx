import { getHomeCareers } from "@/apis/home/home";
import React from "react";
import PortfolioTableRow from "../Portfolio/PortfolioTableRow";

const HomeCareerBox = async () => {
  const careerData = await getHomeCareers();

  return (
    <div className="w-full h-screen flex justify-center items-center gap-16">
      <div className="h-full flex items-end w-full mx-40 mb-40">
        <div>
          <h4 className="text-8xl font-extrabold text-mainColor mb-5 ">
            Career.
          </h4>
          {careerData.map((careers) => (
            <>
              <h6 className="text-mainColor font-bold mb-2 mt-6">
                {careers.title}
              </h6>
              <table className="table-fixed border-solid w-full text-mainColor ">
                <tbody>
                  {careers.contents.map((career) => (
                    <PortfolioTableRow
                      title={career.duration}
                      item={career.belongs}
                      isLineExist
                    />
                  ))}
                </tbody>
              </table>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCareerBox;
