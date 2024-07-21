import bannerImg from "@/public/assets/images/about-us/committe-banner-img.png";
import projectManagerImg from "@/public/assets/images/about-us/project-manager.png";
import linkedinIcon from "@/public/assets/icons/LinkedIn-icon-white.svg";
import instagramIcon from "@/public/assets/icons/instagram-icon-white.svg";
import Image from "next/image";
import Link from "next/link";
import CommitteeSlider from "@/components/shared/AboutUs/CommitteSlider";
import { DPM } from "@/constants/About";

const page = () => {
  return (
    <div>
      {/* Hero Section*/}
      <div className="container mt-20 flex flex-col items-center justify-between gap-3 md:flex-row">
        <h1 className="w-full font-bungee text-3xl font-medium uppercase leading-normal md:text-[53px]">
          who are the <br className="hidden md:block" /> unas fest committe?
        </h1>
        <div className="item-center flex w-full justify-start text-xl">
          <p className="w-full md:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{" "}
          </p>
        </div>
      </div>
      {/* Banner image */}
      <div className="mt-16 w-full md:container">
        <Image
          src={bannerImg}
          alt="committe bannerImg"
          className="h-full w-full object-contain object-center"
        />
        <ul className="container mt-8 flex list-disc flex-wrap items-center justify-start gap-x-10 text-base font-semibold md:justify-center md:text-xl">
          <li className="list-none">1 project manager</li>
          <li>4 deputy manager</li>
          <li>15 assistant project manager</li>
          <li>161 committee</li>
        </ul>
      </div>
      {/* Project Manager */}
      <div className="mx-auto mt-32 max-w-[1560px] md:pl-10">
        <div className="relative ml-auto mr-6 flex w-full flex-col bg-page-black md:max-w-[1380px] md:flex-row">
          {/* Image */}
          <div className="-left-8 -top-8 p-5 md:absolute md:p-0">
            <Image
              src={projectManagerImg}
              alt="project manager"
              width={380}
              height={530}
              className="h-full w-full object-contain md:w-auto"
            />
          </div>
          {/* description */}
          <div className="mx-auto flex w-full max-w-[678px] flex-col items-center justify-center gap-y-6 p-5 text-left text-xl text-page-white md:h-[530px] md:w-3/4 md:p-0 md:pl-[160px]">
            <div className="flex w-full flex-col items-start gap-y-3">
              <p>Project Manager UNAS FEST 2024</p>
              <h1 className="font-bungee text-5xl font-medium uppercase">
                shafa sabrina
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
          {/* social media links */}
          <div className="absolute right-10 top-0 z-0 flex h-[200px] w-[54px] flex-col items-center justify-end gap-y-2 bg-page-green pb-5 text-3xl text-page-white md:right-32">
            <Link href="/">
              <Image
                src={linkedinIcon}
                alt="instagramIcon"
                width={32}
                height={32}
              />
            </Link>
            <Link href="/">
              <Image
                src={instagramIcon}
                alt="instagramIcon"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/* deputy managers */}
        <div className="container">
          <CommitteeSlider props={DPM} />
        </div>
        {/*NOTE: image grid make separate component fecth data from database */}
        {/* debate departement */}
        <div>image grid</div>
        {/* short movie departement */}
        <div>image grid</div>
        {/* scientific paper departement */}
        <div>image grid</div>
        {/* International seminar departement */}
        <div>image grid</div>
        {/* sisa departement */}
        <div>image grid</div>
      </div>
    </div>
  );
};

export default page;
