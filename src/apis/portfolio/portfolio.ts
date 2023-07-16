import path from "path";
import { IPortfolio } from "./portfolio.type";
import { readFile } from "fs/promises";

export const getSelectPortfolios = async (id: number): Promise<IPortfolio> => {
  return getAllPortfolios().then(
    (portfolio) => portfolio.filter((portfolio) => portfolio.id === id)[0]
  );
};

export const getAllPortfolios = async (): Promise<IPortfolio[]> => {
  const filePath = path.join(
    process.cwd(),
    "data",
    "portfolio",
    "portfolioDetails.json"
  );
  return readFile(filePath, "utf-8").then<IPortfolio[]>(JSON.parse);
};
