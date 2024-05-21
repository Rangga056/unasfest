import bannerImg from "@/public/assets/images/about-us/committe-banner-img.png";
import projectManagerImg from "@/public/assets/images/about-us/project-manager.png";
import linkedinIcon from "@/public/assets/icons/LinkedIn-icon-white.svg";
import instagramIcon from "@/public/assets/icons/instagram-icon-white.svg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* Hero Section*/}
      <div className="container flex flex-col md:flex-row items-center justify-between mt-20 gap-3">
        <h1 className="uppercase font-bungee text-3xl md:text-[53px] leading-normal font-medium w-full">
          who are the <br className="hidden md:block" /> unas fest committe?
        </h1>
        <div className="text-xl flex justify-start item-center w-full">
          <p className="w-full md:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{" "}
          </p>
        </div>
      </div>
      {/* Banner image */}
      <div className="md:container w-full mt-16">
        <Image
          src={bannerImg}
          alt="committe bannerImg"
          className="w-full h-full object-contain object-center"
        />
        <ul className="mt-8 flex items-center justify-start md:justify-center flex-wrap gap-x-10 font-semibold text-base md:text-xl list-disc">
          <li className="list-none">1 project manager</li>
          <li>4 deputy manager</li>
          <li>15 assistant project manager</li>
          <li>161 committee</li>
        </ul>
      </div>
      {/* Project Manager */}
      <div className="max-w-[1560px] mx-auto mt-32">
        <div className="bg-page-black flex flex-col md:flex-row w-full md:max-w-[1380px] ml-auto mr-6 relative">
          {/* Image */}
          <div className="md:absolute -left-8 -top-8 p-5 md:p-0">
            <Image
              src={projectManagerImg}
              alt="project manager"
              width={380}
              height={530}
              className="object-contain w-full md:w-auto h-full"
            />
          </div>
          {/* description */}
          <div className="md:h-[530px] w-full md:w-3/4 md:pl-72 mx-auto flex flex-col gap-y-6 items-center justify-center text-xl text-page-white text-left p-5 md:p-0">
            <div className="w-full flex flex-col items-start gap-y-3">
              <p>Project Manager UNAS FEST 2024</p>
              <h1 className="uppercase text-5xl font-bungee font-medium">
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
          <div className="flex flex-col items-center justify-end pb-5 text-3xl text-page-white gap-y-2 absolute top-0 right-10 md:right-20 bg-page-green w-[54px] h-[200px] z-0">
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
        <div>images slider</div>
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
