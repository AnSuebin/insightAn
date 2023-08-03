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
  id: number;
  duration: string;
  belongs: string;
}
