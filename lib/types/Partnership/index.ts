import { StaticImageData } from "next/image";

export interface partnershipDataProps {
    id : number,
    title : string,
    image : StaticImageData,
    description : string,
    link : string,
}