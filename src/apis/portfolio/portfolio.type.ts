export interface IPortfolio {
  id: number;
  title: string;
  about: string[];
  contents: {
    summary: {
      period: { start: string; end: string };
      participants: string;
      part: string;
      skills: string;
    };
    goal?: string[];
    makePoint: string[];
  };
}
