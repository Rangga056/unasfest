// types/competition.ts
export interface CompetitionData {
    path: string;
    coverImage: string;
    description: string;
    timeline: string[]; // Array of timeline strings
    guideBook: string;
    requirements: {
      no: string;
      provision: string;
    }[];
  }
  