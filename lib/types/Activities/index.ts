import { StaticImageData } from "next/image";

export interface activitiesData {
  path: string;
  title: string;
  coverImage: StaticImageData;
  contact: StaticImageData;
  contactNumber: string;
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
    index: number;
    detail: string[];
  }[];
  judgesData: {
    index: number;
    name: string;
    linkedin?: string
    image: StaticImageData;
    lastEducation: string;
    description: string;
    achievements: string[];
    experience: {
      eTitle: string;
      place?: string;
      eTime?: string;
      eDesc?: {
        dDetail?: string;
        dPoint?: string[];
      };
    }[];
  }[];
  judgesData2: {
    index: number;
    name: string;
    linkedin: string;
    image: StaticImageData;
    lastEducation: string;
    description: string;
    achievements: string[];
    experience: {
      eTitle: string;
      place?: string;
      eTime: string;
      eDesc?: {
        dDetail?: string;
        dPoint?: string[];
      };
    }[];
  }[];
  faqs: {
    question: string;
    answer: string[] | string;
  }[];
}
