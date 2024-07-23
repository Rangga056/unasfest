import Image from "next/image";
import AboutUsBanner from "@/public/assets/images/about-us/about-us-banner.png";
import { Button } from "@/components/ui/button";
import InfiniteSlidingComponent from "@/components/shared/InfiniteSlidingComponent/InfiniteSlidingComponent";
import Slider from "@/components/shared/Slider/Slider";
import {
  logoDetails,
  mascots,
  missions,
  unasCollaborate,
} from "@/constants/About";
//TODO:Import the icon for the InfiniteSlidingComponent
import UnasfestLogo from "@/public/assets/icons/unasfest-icon-logo.png";
import Star from "@/public/assets/icons/star-icon.svg";
import Unasfest2023Macsot from "@/public/assets/images/mascots/unasfest2023mascot.png";
import Gallery from "@/components/shared/Gallery/Gallery";
import SteeringCommitteeSlider from "@/components/shared/AboutUs/SteeringCommitteSlider";
import Link from "next/link";

const AboutUsPage = () => {
  const InfiniteSlidingProps = {
    icon: Star.src,
    text: "UNAS FEST 2024",
  };

  return (
    <main>
      {/* Hero Section */}
      <div className="container">
        <h1 className="mt-20 text-center font-bungee text-4xl font-medium uppercase  lg:text-[53px] lg:leading-[70px]">
          voices and minds knit competitive rhythms at unas fest 2024
        </h1>
        <p className="mx-auto mt-4 text-center text-lg lg:w-3/5 lg:text-xl">
          Implementation of Technology in Blue Economy Policy to Optimize
          Sustainable Maritime Innovation in Indonesia.
        </p>
      </div>
      {/* Vision and Mission */}
      <div className="mx-auto mt-20 w-full bg-page-black pb-10 text-page-white">
        <Image
          src={AboutUsBanner}
          alt="banner image"
          className="mx-auto h-48 w-full max-w-[1560px] object-cover md:h-full md:object-contain"
        />
        <div className=" mx-auto mt-16">
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
              className="mt-6 rounded-none px-10 py-6 text-xl font-semibold"
            >
              See Our Competition
            </Button>
          </div>
        </div>
        {/* InfiniteSlidingText */}
        <div className="z-10 mt-20 h-24 w-full overflow-hidden pt-6 text-black md:overflow-visible ">
          <InfiniteSlidingComponent props={InfiniteSlidingProps} />
        </div>
        <div className="container mt-32">
          <h1 className="text-center font-bungee text-5xl font-semibold uppercase">
            our vision
          </h1>
          <p className="mt-8 text-center text-base font-semibold md:text-3xl">
            <i>
              &quot;Being a forum for coaching and training as well as a
              benchmark (barometer) in terms of improving the quality of
              students in committee and organizational activities at the
              National University.&quot;
            </i>
          </p>
          <h1 className="mt-14 text-center font-bungee text-5xl font-semibold uppercase">
            our missions
          </h1>
          {/* Missions Slider */}
        </div>
        <div className="container mt-10 w-full pb-16 pr-0">
          <Slider props={missions} />
        </div>
      </div>
      {/* Steering Commitee */}
      <div className="container mt-24">
        <h1 className="text-center font-bungee text-5xl font-medium uppercase text-page-black">
          steering commitee
        </h1>
        <p className="mt-2 text-center text-xl capitalize">
          steering committee list
        </p>
      </div>
      {/* Steering commitee slider */}
      <div className="container pr-0">
        <SteeringCommitteeSlider />
      </div>
      {/* Unasfest 2024 committee */}
      {/* <div className="mx-auto mt-20 w-full bg-page-black p-8 text-page-white md:p-12 lg:p-[130px]">
        <div className="container flex aspect-square h-full min-h-[300px] w-full max-w-[1180px] flex-col items-center justify-center gap-y-6 bg-unasfest-committee bg-contain bg-center md:aspect-video md:max-h-[576px] ">
          <ul className="hidden list-disc items-center justify-center gap-x-10 text-xl font-semibold md:flex">
            <li className="list-none">1 project manager</li>
            <li>4 deputy manager</li>
            <li>15 assistant project manager</li>
            <li>161 committee</li>
          </ul>
          <h1 className="text-center font-bungee text-2xl font-medium uppercase md:text-5xl">
            our unas fest 2024 <br /> committee
          </h1>
          <Button
            variant="secondary"
            size="lg"
            className="rounded-none text-base font-medium capitalize md:text-xl"
          >
            <Link href="/about-us/committee">meet us</Link>
          </Button>
        </div>
      </div> */}

      {/* Logo and Mascot Section */}
      <div className="container text-page-black">
        <div className="mt-20 text-center">
          <h1 className="py-2 font-bungee text-5xl font-medium uppercase">
            our logo
          </h1>
          <p className="text-xl capitalize">our logo definition</p>
        </div>
        {/* Logo */}
        <div className="mt-20 flex flex-col items-center gap-x-10 md:flex-row">
          <Image
            src={UnasfestLogo}
            alt="unasfest logo"
            width={380}
            height={380}
          />
          <div className="flex flex-col">
            <h1 className="mt-10 font-bungee text-2xl font-medium md:mt-0">
              sawo manila fruit and leaves
            </h1>
            <p className="mt-6 text-xl font-medium">
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
          <h1 className="text-center font-bungee text-2xl font-medium">
            logo details
          </h1>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-0">
            {logoDetails.map((item) => (
              <div
                key={item.index}
                className="flex h-[290px] w-[290px] flex-col items-start justify-start gap-y-0 border border-page-black p-10 text-xl "
              >
                <div className="flex h-full items-center justify-center gap-x-4 font-semibold capitalize">
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
            <h1 className="font-bungee text-5xl font-medium uppercase">
              our mascots
            </h1>
            <p className="text-xl capitalize ">our mascots definition</p>
          </div>
          {/* List of mascots */}
          <div className="mt-10 flex flex-col gap-y-10">
            {mascots.map((item) => (
              <div
                key={item.index}
                className="flex flex-1 flex-col items-center justify-between gap-x-10 md:flex-row"
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
                  <p className="text-left text-xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mascots documentation */}
        <h1 className="mt-20 text-center font-bungee text-3xl font-medium uppercase md:text-5xl">
          documentation of making <br className="hidden md:block" /> mascots
        </h1>
        <div className="mt-10 flex items-center justify-center">
          {/* Youtube video */}
          <iframe
            className="aspect-video w-full max-w-[1280px]"
            src="https://www.youtube.com/embed/wy7yAUl3ROw?si=xRhSzihbUzwYgK8j"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Unasfest 2023 mascot */}
      <div className="relative mx-auto mt-36 flex min-h-[460px] max-w-[1560px] flex-col items-center gap-x-10 bg-water-pool bg-cover bg-center px-32 py-10 lg:flex-row">
        <div className="flex-[1]">
          <Image
            src={Unasfest2023Macsot}
            alt="unasfest 2023 mascot"
            width={520}
            className="bottom-10 left-0 aspect-square object-contain lg:absolute"
          />
        </div>
        <div className="flex flex-[2] flex-col items-center justify-center gap-y-10 text-center">
          <h1 className="font-bungee text-5xl font-medium">
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
      <div className="mx-auto mt-20 max-w-[1400px] px-3 md:container">
        <Gallery />
      </div>
      {/*TODO: Collaborations */}
      <div className="container mt-24 h-full px-3 text-5xl">
        <h1 className="text-center font-bungee text-2xl md:text-5xl">
          collaborate
        </h1>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-2 md:mt-24 md:gap-5">
          {unasCollaborate.map((item) => (
            <div
              key={item.index}
              className="flex h-[230px] w-[150px] flex-col justify-center gap-y-4 border border-page-black p-6 md:h-[350px] md:w-[250px] md:p-16"
            >
              <div className="flex justify-center">
                <Image
                  src={item.img.src}
                  alt={item.alt}
                  width={143}
                  height={142}
                  className="aspect-square object-contain"
                />
              </div>

              <p className="text-center text-sm font-semibold md:text-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutUsPage;
