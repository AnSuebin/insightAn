export interface IHomePortfolio {
  id: number;
  title: string;
}

export interface IHomeCareer {
  id: number;
  title: string;
  contents: IContents[];
}

export interface IContents {
  id: 1;
  duration: string;
  belongs: string;
}
