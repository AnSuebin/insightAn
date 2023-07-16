import path from "path";
import { readFile } from "fs/promises";
import { IHomePortfolio } from "./home.type";

export const getHomePortfolios = async (): Promise<IHomePortfolio[]> => {
  const filePath = path.join(
    process.cwd(),
    "data",
    "home",
    "portfolioList.json"
  );
  return readFile(filePath, "utf-8").then<IHomePortfolio[]>(JSON.parse);
};
