import { Activities } from "@/constants/Activites";
import Image from "next/image";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { activitiesData } from "@/lib/types/Activities";
import InfiniteSliding from "@/components/shared/InfiniteSlidingComponent/InfiniteSlidingComponent";
import FaqActivities from "@/components/shared/FaqActivities/FaqActivities";
import TimelineCards from "@/components/ui/timelineCards";
import Judges from "@/components/shared/Judges/Judges"
import Contact from "@/components/shared/Contact/Contact";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Slider from "@/components/shared/Slider/Slider";
import toa from "@/public/assets/images/competition/toa.png";
import { Download } from "lucide-react";

type DetailCompetitionProps = { params: { slug: string } };

export default function DetailCompetition(props: DetailCompetitionProps) {
  const { params } = props;
  console.log("params", params.slug);
  const competition = Activities.find((comp) => comp.path === params.slug);

  if (!competition) {
    return <div>Kompetisi tidak ditemukan</div>;
  }

  const requirementsData = competition.requirements;

  const InfiniteSlidingProps = {
    icon: competition.infiniteSlidingIcon.src,
    text: competition.infiniteSlidingText,
  };

  return (
    <section>
      <div className="container mx-auto sm:mt-10 md:mt-16">
        <h1 className="text-4xl mb-9 tracking-wide md:font-semibold leading-normal sm:text-center md:text-start lg:text-5xl font-bungee uppercase"
            style={{ color: competition.color }}>
          {competition.title}
        </h1>
        <Image
          src={competition.coverImage}
          alt={competition.title}
          width={1400}
          height={480}
          className="mx-auto md:-mb-[200px]"
        />
      </div>
      <div
        style={{ backgroundColor: competition.color }}
        className="text-page-white max-w-[1560px] mx-auto md:pt-[200px]"
      >
        {/* HERO */}
        <Card className="pb-2 text-center rounded-none overflow-hidden flex flex-col justify-center align-middle items-center container relative mb-12">
          <div className="flex flex-col justify-center items-center">
            <CardContent>
              <CardDescription className="text-start text-white text-sm md:text-xl">
                {competition.description}
              </CardDescription>
              <div className="flex gap-5 mt-10">
                <Button
                  size="xl"
                  variant="secondary"
                  className="text-page-black"
                >
                  Sign Up
                </Button>
                <Button size="xl" variant="outline" className="bg-transparant">
                  See More
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* INFINITE SLIDING */}
        <Card className="mb-10 w-full text-page-black">
          <InfiniteSliding props={InfiniteSlidingProps} />
        </Card>

        {/* REQUIREMENTS */}
        <Card className="pb-2 text-center overflow-hidden rounded-none container mx-auto relative mb-12">
          <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
            Competition Requirements
          </CardTitle>
          <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl text-page-white">
            {competition.requirementsTitle}
          </CardDescription>
          <CardContent>
            {/* <RequirementsSwipe requirements={competition.requirements} /> */}
            <Slider props={requirementsData} />
          </CardContent>
        </Card>

        {/* DOWNLOAD GUIDE BOOK */}
        <Card className="flex flex-col rounded-none justify-center items-center align-middle pb-20 text-center overflow-hidden w-full relative max-w-screen-xl m-auto  sm:w-[90%] mb-12">
          <CardTitle className="text-3xl tracking-wide font-semibold leading-normal md:text-4xl lg:text-5xl">
            download guidebook
          </CardTitle>
          <CardDescription className="text-center tracking-wide font-normal mb-5 leading-normal sm:text-base md:text-xl text-page-white max-w-xl">
            Download the competition guidebook to find out the overall mechanism
            of the National University Festival debate competition
          </CardDescription>
          <Link href={competition.guideBook}>
            <Button
              variant="secondary"
              className="w-[235px] py-8 rounded-none mt-6 text-xl flex items-center gap-2"
            >
              <Download />
              Download
              <span></span>
            </Button>
          </Link>
        </Card>
      </div>

      {/* TIMELINE */}
      <TimelineCards
        title="Competition Timeline"
        description="Pay attention to the time and date of the race"
        timelines={competition.timeline}
      />

      <Card className="flex flex-col rounded-none justify-center items-center align-middle pb-20 text-center overflow-hidden w-full relative max-w-screen-xl m-auto  lg:w-[90%] mb-12">
        <CardTitle className="text-4xl tracrking-wide font-semibold leading-normal lg:text-5xl">
          competition judges
        </CardTitle>
        <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl">
          Competition Judges List
        </CardDescription>
        <CardContent className="w-full h-full">
          <Judges judgesData={competition.judgesData}/>
        </CardContent>
      </Card>

      <div className="relative max-w-screen-xl m-auto">
        <Card className="rounded-none min-h-60  overflow-hidden w-full relative flex flex-col sm:justify-center lg:justify-start lg:w-[90%]">
          <CardTitle className="text-4xl pb-5 tracking-wide font-semibold leading-normal sm:text-center lg:text-start lg:w-3/5 lg:text-5xl">
            frequently asked questions
          </CardTitle>
          <CardContent className="lg:w-4/5">
            <FaqActivities faqs={competition.faqs} />
          </CardContent>
        </Card>
        <Image
          src={toa}
          alt="toa"
          width={400}
          height={400}
          className="absolute -bottom-4 right-0 sm:hidden lg:inline-block"
        />
      </div>
    <Card className="pt-0">
      <Contact contact={competition.contact} />
    </Card>
    </section>
  );
}