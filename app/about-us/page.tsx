import Image from "next/image";
import AboutUsBanner from "@/public/assets/images/about-us/about-us-banner.png";
import { Button } from "@/components/ui/button";
import InfiniteSlidingComponent from "@/components/shared/InfiniteSlidingComponent/InfiniteSlidingComponent";
import Slider from "@/components/shared/Slider/Slider";
import { missions } from "@/constants/About";

const AboutUsPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <div className="container">
        <h1 className="text-[53px] text-center uppercase font-bungee font-medium  mt-20 leading-[70px]">
          voices and minds knit competitive rhythms at unas fest 2024
        </h1>
        <p className="text-xl text-center mx-auto mt-4 w-3/5">
          Implementation of Technology in Blue Economy Policy to Optimize
          Sustainable Maritime Innovation in Indonesia.
        </p>
      </div>

      {/* Vision and Mission */}
      <div className="bg-page-black mt-20 pb-10 text-page-white">
        <Image
          src={AboutUsBanner}
          alt="banner image"
          className="w-full h-full"
        />
        <div className=" mt-16 mx-20">
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
              className="rounded-none mt-4 text-xl font-semibold py-4 px-10"
            >
              See Our Competition
            </Button>
          </div>
        </div>

        {/* InfiniteSlidingText */}
        <div className="z-10 w-120vw text-black">
          <InfiniteSlidingComponent />
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
          <div className="w-full pb-8 mt-10">
            <Slider props={missions} />
          </div>
          <p></p>
        </div>
      </div>
    </main>
  );
};

export default AboutUsPage;
