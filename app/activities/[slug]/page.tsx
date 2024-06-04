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
import Judges from "@/components/shared/Judges/Judges";
import Contact from "@/components/shared/Contact/Contact";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Slider from "@/components/shared/Slider/Slider";
import toa from "@/public/assets/images/competition/toa.png";
import { Download } from "lucide-react";

type DetailCompetitionProps = { params: { slug: string } };

export default function DetailCompetition(props: DetailCompetitionProps) {
  const { params } = props;
  // console.log("params", params.slug);
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
        <h1
          className="mb-9 font-bungee text-4xl uppercase leading-normal tracking-wide sm:text-center md:text-start md:font-semibold lg:text-5xl"
          style={{ color: competition.color }}
        >
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
        className="mx-auto max-w-[1560px] text-page-white md:pt-[200px]"
      >
        {/* HERO */}
        <Card className="container relative mb-12 flex flex-col items-center justify-center overflow-hidden rounded-none pb-2 text-center align-middle">
          <div className="flex flex-col items-center justify-center">
            <CardContent>
              <CardDescription className="text-start text-sm text-white md:text-xl">
                {competition.description}
              </CardDescription>
              <div className="mt-10 flex gap-5">
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
        <Card className="container relative mx-auto mb-12 overflow-hidden rounded-none pb-2 text-center">
          <CardTitle className="text-3xl font-semibold leading-normal tracking-wide lg:text-5xl">
            Competition Requirements
          </CardTitle>
          <CardDescription className="mb-16 text-sm font-normal leading-normal tracking-wide text-page-white lg:text-xl">
            {competition.requirementsTitle}
          </CardDescription>
          <CardContent>
            {/* <RequirementsSwipe requirements={competition.requirements} /> */}
            <Slider props={requirementsData} />
          </CardContent>
        </Card>

        {/* DOWNLOAD GUIDE BOOK */}
        <Card className="relative m-auto mb-12 flex w-full max-w-screen-xl flex-col items-center justify-center overflow-hidden rounded-none pb-20 text-center  align-middle sm:w-[90%]">
          <CardTitle className="mb-5 text-3xl font-semibold leading-normal tracking-wide md:text-4xl lg:text-5xl">
            download guidebook
          </CardTitle>
          <CardDescription className="mb-5 max-w-xl text-center font-normal leading-normal tracking-wide text-page-white sm:text-base md:text-xl">
            Download the competition guidebook to find out the overall mechanism
            of the National University Festival debate competition
          </CardDescription>
          <Link href={competition.guideBook}>
            <Button
              variant="secondary"
              className="mt-6 flex w-[235px] items-center gap-2 rounded-none py-8 text-xl"
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

      {params.slug !== "semnas" && (
        <Card className="relative m-auto mb-12 flex w-full max-w-screen-xl flex-col items-center justify-center overflow-hidden rounded-none pb-20 text-center  align-middle lg:w-[90%]">
          <CardTitle className="tracrking-wide text-3xl font-semibold leading-normal lg:text-5xl">
            competition judges
          </CardTitle>
          <CardDescription className="mb-16 text-sm font-normal leading-normal tracking-wide lg:text-xl">
            Competition Judges List
          </CardDescription>
          <CardContent className="h-full w-full">
            <Judges
              judgesData={competition.judgesData}
              color={competition.color}
            />
          </CardContent>
        </Card>
      )}

      {params.slug === "semnas" && (
        <div>
          <Card className="relative m-auto mb-12 flex w-full max-w-screen-xl flex-col items-center justify-center overflow-hidden rounded-none pb-20 text-center  align-middle lg:w-[90%]">
            <CardTitle className="tracrking-wide text-3xl font-semibold leading-normal lg:text-5xl">
              seminar speakers
            </CardTitle>
            <CardDescription className="mb-16 text-sm font-normal leading-normal tracking-wide lg:text-xl">
              Seminar Speaker List
            </CardDescription>
            <CardContent className="h-full w-full">
              <h1 className="p-1 text-center text-2xl font-semibold uppercase md:w-[20%] md:text-start md:text-3xl">
                agency government
              </h1>
              <Judges
                judgesData={competition.judgesData}
                color={competition.color}
              />

              <h1 className="p-1 pt-10 text-center text-2xl font-semibold uppercase md:w-[20%] md:text-start md:text-3xl">
                agency non-government
              </h1>
              <Judges
                judgesData={competition.judgesData}
                color={competition.color}
              />
            </CardContent>
          </Card>

          <Card className="relative m-auto mb-12 flex w-full max-w-screen-xl flex-col items-center justify-center overflow-hidden rounded-none pb-20 text-center  align-middle lg:w-[90%]">
            <CardTitle className="tracrking-wide text-3xl font-semibold leading-normal lg:text-5xl">
              seminar Presenters
            </CardTitle>
            <CardDescription className="mb-16 text-sm font-normal leading-normal tracking-wide lg:text-xl">
              Seminar presenters List
            </CardDescription>
            <CardContent className="h-full w-full">
              <h1 className="p-1 text-center text-2xl font-semibold uppercase md:w-[20%] md:text-start md:text-3xl">
                lecturer presenters
              </h1>
              <Judges
                judgesData={competition.judgesData}
                color={competition.color}
              />

              <h1 className="p-1 text-center text-2xl font-semibold uppercase md:w-[20%] md:text-start md:text-3xl">
                student presenters
              </h1>
              <Judges
                judgesData={competition.judgesData}
                color={competition.color}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* FAQ */}
      <div className="relative m-auto max-w-screen-xl">
        <Card className="relative flex  min-h-60 w-full flex-col overflow-hidden rounded-none sm:justify-center lg:w-[90%] lg:justify-start">
          <CardTitle className="pb-5 text-3xl font-semibold leading-normal tracking-wide sm:text-center lg:w-3/5 lg:text-start lg:text-5xl pl-12">
            frequently asked questions
          </CardTitle>
          <CardContent className="lg:w-4/5 pl-12">
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

      {/* CONTACT */}
      <Card className="pt-0">
        <Contact contact={competition.contact} />
      </Card>
    </section>
  );
}
