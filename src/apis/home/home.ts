import path from "path";
import { readFile } from "fs/promises";
import { IHomeCareer, IHomePortfolio } from "./home.type";

export const getHomePortfolios = async (): Promise<IHomePortfolio[]> => {
  const filePath = path.join(
    process.cwd(),
    "data",
    "home",
    "portfolioList.json"
  );
  return readFile(filePath, "utf-8").then<IHomePortfolio[]>(JSON.parse);
};

export const getHomeCareers = async (): Promise<IHomeCareer[]> => {
  const filePath = path.join(process.cwd(), "data", "home", "careerList.json");
  return readFile(filePath, "utf-8").then<IHomeCareer[]>(JSON.parse);
};
