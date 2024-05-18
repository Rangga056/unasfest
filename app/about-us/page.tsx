import Image from "next/image";
import AboutUsBanner from "@/public/assets/images/about-us/about-us-banner.png";
import { Button } from "@/components/ui/button";
import InfiniteSlidingComponent from "@/components/shared/InfiniteSlidingComponent/InfiniteSlidingComponent";
import Slider from "@/components/shared/Slider/Slider";
import { logoDetails, mascots, missions } from "@/constants/About";
//TODO:Import the icon for the InfiniteSlidingComponent
import UnasfestLogo from "@/public/assets/icons/unasfest-icon-logo.png";
import Unasfest2023Macsot from "@/public/assets/images/mascots/unasfest2023mascot.png";
import Gallery from "@/components/shared/Gallery/Gallery";

const AboutUsPage = () => {
  const InfiniteSlidingProps = {
    icon: UnasfestLogo.src,
    text: "UNAS FEST 2024",
  };

  return (
    <main>
      {/* Hero Section */}
      <div className="container">
        <h1 className="text-4xl lg:text-[53px] text-center uppercase font-bungee font-medium  mt-20 lg:leading-[70px]">
          voices and minds knit competitive rhythms at unas fest 2024
        </h1>
        <p className="text-lg lg:text-xl text-center mx-auto mt-4 lg:w-3/5">
          Implementation of Technology in Blue Economy Policy to Optimize
          Sustainable Maritime Innovation in Indonesia.
        </p>
      </div>
      {/* Vision and Mission */}
      <div className="bg-page-black max-w-[1560px] mx-auto mt-20 pb-10 text-page-white">
        <Image
          src={AboutUsBanner}
          alt="banner image"
          className="w-full h-48 md:h-full max-w-[1560px] mx-auto object-cover md:object-contain"
        />
        <div className=" mt-16 mx-auto">
          <div className="container">
            <p className="text-xl font-medium">
              This activity is an open competition for the public at the student
              level. The purpose of UNAS FEST 2024 is to develop critical
              thinking of Indonesian students in responding to marine problems
              in Indonesia, increasing pride and love for the country, and
              strengthening the spirit of scientific and competitive spirit to
              Indonesian students. There are 4 branches of competition in this
              activity, namely Scientific Writing Competition (SPC), English
              Debate Competition (EDC), Indonesian Language Debate Competition
              (KDBI) and short movie competiton.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-none mt-6 text-xl font-semibold py-6 px-10"
            >
              See Our Competition
            </Button>
          </div>
        </div>
        {/* InfiniteSlidingText */}
        <div className="w-full z-10 mt-20 text-black">
          <InfiniteSlidingComponent props={InfiniteSlidingProps} />
        </div>
        <div className="container mt-24">
          <h1 className="text-5xl text-center uppercase font-bungee font-semibold">
            our vision
          </h1>
          <p className="text-xl font-medium mt-8">
            Being a forum for coaching and training as well as a benchmark
            (barometer) in terms of improving the quality of students in
            committee and organizational activities at the National University.
          </p>
          <h1 className="text-5xl text-center uppercase font-bungee font-semibold mt-14">
            our missions
          </h1>
          {/* Missions Slider */}
          <div className="w-full pb-16 mt-10">
            <Slider props={missions} />
          </div>
        </div>
      </div>
      {/* Logo and Mascot Section */}
      <div className="container text-page-black">
        <div className="text-center mt-20">
          <h1 className="text-5xl font-bungee font-medium py-2 uppercase">
            our logo
          </h1>
          <p className="text-xl capitalize">our logo definition</p>
        </div>
        {/* Logo */}
        <div className="flex flex-col md:flex-row items-center gap-x-10 mt-20">
          <Image
            src={UnasfestLogo}
            alt="unasfest logo"
            width={380}
            height={380}
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bungee font-medium mt-10 md:mt-0">
              sawo manila fruit and leaves
            </h1>
            <p className="text-xl font-medium mt-6">
              Sawo Manila fruit and leaves represent the location of UNAS FEST.
              Sawo manila is also a tree of 1000 benefits, where every part of
              the tree can be utilized. This illustrates that the UNAS FEST
              committee consists of students from all study programs at the
              National University. The placement of 3 leaves and 1 sawo manila
              fruit forms a star formation in the center, depicting high hopes
              and shine.
            </p>
          </div>
        </div>
        {/* Logo Details */}
        <div className="container mt-20">
          <h1 className="text-2xl font-bungee font-medium text-center">
            logo details
          </h1>
          <div className="flex flex-wrap items-center justify-center mt-8 gap-x-0">
            {logoDetails.map((item) => (
              <div
                key={item.index}
                className="border border-page-black flex flex-col items-start justify-start h-[290px] w-[290px] text-xl gap-y-0 p-10 "
              >
                <div className="flex h-full items-center gap-x-4 justify-center font-semibold capitalize">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={52}
                    height={52}
                  />
                  <span>{item.name}</span>
                </div>
                <div className="flex h-full justify-start">
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mascots */}
        <div className="container mt-20">
          <div className="text-center">
            <h1 className="text-5xl uppercase font-bungee font-medium">
              our mascots
            </h1>
            <p className="text-xl capitalize ">our mascots definition</p>
          </div>
          {/* List of mascots */}
          <div className="flex flex-col gap-y-10">
            {mascots.map((item) => (
              <div
                key={item.index}
                className="flex flex-col md:flex-row flex-1 items-center justify-between"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={380}
                  height={400}
                  className="object-contain"
                />
                <div className="flex flex-col gap-y-6 text-center lg:text-left">
                  <h1 className="text-5xl font-bold uppercase">{item.name}</h1>
                  <p className="text-xl text-left">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mascots documentation */}
        <h1 className="uppercase font-bungee text-5xl font-medium text-center mt-20">
          documentation of making <br className="hidden md:block" /> mascots
        </h1>
        <div className="container mt-10 flex items-center justify-center">
          {/* Youtube video */}
          <iframe
            className="max-w-[1280px] w-full aspect-video"
            src="https://www.youtube.com/embed/wy7yAUl3ROw?si=xRhSzihbUzwYgK8j"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Unasfest 2023 mascot */}
      <div className="bg-page-lightblue mt-36 max-w-[1560px] min-h-[460px] mx-auto flex flex-col lg:flex-row gap-x-10 items-center relative px-32 py-10">
        <div className="flex-[1]">
          <Image
            src={Unasfest2023Macsot}
            alt="uansfest 2023 mascot"
            width={520}
            className="aspect-square object-contain lg:absolute left-0 bottom-10"
          />
        </div>
        <div className="text-center flex flex-col gap-y-10 items-center justify-center flex-[2]">
          <h1 className="text-5xl font-bungee font-medium">
            unas fest 2023 mascot philosophy
          </h1>
          <p className="text-xl">
            Megalodon has a philosophy as the largest predator, megalodon teeth
            as a fossil that is found a lot can describe the UnasFest committee
            as a responsible person consisting of 208 Members (Many),
            Megalodon&apos;s big teeth also describe the great responsibility
            and strong mentality of the Unas Fest 2023 committee.
          </p>
        </div>
      </div>
      {/* Gallery Component */}
      <div className="container mt-20">
        <Gallery />
      </div>
    </main>
  );
};

export default AboutUsPage;
