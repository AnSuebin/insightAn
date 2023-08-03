import { IHomeCareer, IHomePortfolio } from "./home.type";

export const careerList: IHomeCareer[] = [
  {
    id: 1,
    title: "개발 커리어",
    contents: [{ id: 1, duration: "2022.04 - 현재", belongs: "모션랩스" }],
  },
  {
    id: 2,
    title: "개발 교육 과정",
    contents: [
      {
        id: 1,
        duration: "2022.04 - 현재",
        belongs: "제주더큰내일센터디지털6기",
      },
      { id: 2, duration: "2022.11 - 2023.02", belongs: "항해 99 10기" },
    ],
  },
  {
    id: 3,
    title: "비 개발 교육 과정 및 경력",
    contents: [
      {
        id: 1,
        duration: "2019-2021",
        belongs: "제주팔렛뜨창업",
      },
      {
        id: 2,
        duration: "2012 - 2017",
        belongs: "단국대학교 커뮤니케이션학과",
      },
    ],
  },
];

export const portfolioList: IHomePortfolio[] = [
  { id: 1, title: "폼폼폼" },
  { id: 2, title: "국민은행 액티브 시니어 타겟 온보딩 페이지" },
  { id: 3, title: "탐나는 예약 시스템" },
  { id: 4, title: "추가필요" },
];
