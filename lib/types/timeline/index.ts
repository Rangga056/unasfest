export interface timelinesDatasProps {
    timelines: Array<{
      title: string;
      description: string;
      month: string | number;
      date: string | number;
      year: string | number;
      color: string;
    }>;
  }
