import { StaticImageData } from "next/image";

export interface activitiesData {
  path: string;
  title: string;
  coverImage: StaticImageData | string;
  description: string;
  color: string;
  timeline: {
    title: string;
    description: string;
    month: string;
    date: string;
    year: string;
    color: string;
  }[];
  guideBook: string;
  requirementsTitle: string;
  requirements: {
    no: string;
    provision: string;
  }[];
}
