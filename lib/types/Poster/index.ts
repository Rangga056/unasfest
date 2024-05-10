import { StaticImageData } from "next/image";

export interface posterDatasProps {
    posterDatas: Array<{
      image: StaticImageData | string;
      name: string;
    }>;
  }