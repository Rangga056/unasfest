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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Slider from "@/components/shared/Slider/Slider";

type DetailCompetitionProps = { params: { slug: string } };

export default function DetailCompetition(props: DetailCompetitionProps) {
  const { params } = props;
  console.log("params", params.slug);
  const competition: activitiesData | undefined = Activities.find(
    (comp) => comp.path === params.slug,
  );

  if (!competition) {
    return <div>Kompetisi tidak ditemukan</div>;
  }

  const data = competition.requirements;

  return (
    <section>
      <div style={{ backgroundColor: competition.color }}>
        {/* HERO */}
        <Card className="pb-2 text-center rounded-none overflow-hidden flex flex-col justify-center align-middle items-center w-full relative max-w-screen-xl m-auto  lg:w-[90%] mb-12">
          <CardTitle className="text-4xl mb-9 tracking-wide font-semibold leading-normal lg:text-5xl">
            {competition.title}
          </CardTitle>
          <div className="flex flex-col justify-center items-center">
            <CardContent className="w-[80%]">
              <Image
                src={competition.coverImage}
                alt={competition.title}
                width={1400}
                height={1400}
              />
              <CardDescription className="text-start mt-10 text-white md:text-lg">
                {competition.description}
              </CardDescription>
              <div className="flex gap-5 mt-10">
                <Button className="w-32 rounded-none bg-white text-black">
                  Sign Up
                </Button>
                <Button className="w-32 rounded-none  outline bg-transparent">
                  See More
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* INFINITE SLIDING */}
        <Card className="pb-10 lg:w-[100%]">
          <InfiniteSliding />
        </Card>

        {/* REQUIREMENTS */}
        <Card className="pb-2 text-center overflow-hidden rounded-none w-full relative max-w-screen-xl m-auto lg:w-[90%] mb-12">
          <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
            Competition Requirements
          </CardTitle>
          <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl">
            {competition.requirementsTitle}
          </CardDescription>
          <CardContent className="ml-36">
            {/* <RequirementsSwipe requirements={competition.requirements} /> */}
            <Slider props={data} />
          </CardContent>
        </Card>

        {/* DOWNLOAD GUIDE BOOK */}
        <Card className="flex flex-col rounded-none justify-center items-center align-middle pb-20 text-center overflow-hidden w-full relative max-w-screen-xl m-auto  lg:w-[90%] mb-12">
          <CardTitle className="text-4xl mb-5 tracking-wide font-semibold leading-normal lg:text-5xl">
            download guidebook
          </CardTitle>
          <CardDescription className="text-sm w-[60%] tracking-wide font-normal mb-5 leading-normal lg:text-xl">
            Download the competition guidebook to find out the overall mechanism
            of the National University Festival debate competition
          </CardDescription>
          <Link href={competition.guideBook}>
            <Button className="w-32 rounded-none">Download</Button>
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
        <CardContent className="w-full h-full flex justify-around">
          {competition.judgesData.map((judge, index) => (
            <div key={index} className="flex">
              <Image
                src={judge.image}
                alt={judge.name}
                width={400}
                height={400}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className=" rounded-none align-middle pb-20 text-center overflow-hidden w-full relative max-w-screen-xl m-auto  lg:w-[90%] mb-12">
        <CardTitle className="text-4xl tracrking-wide font-semibold leading-normal lg:text-5xl">
          frequently asked questions
        </CardTitle>
        <CardContent className="md:w-[60%]">
          <FaqActivities faqs={competition.faqs} />
        </CardContent>
      </Card>
    </section>
  );
}
