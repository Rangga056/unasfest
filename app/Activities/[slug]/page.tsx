import { Activities } from "@/constants/Activites";
import Image from "next/image";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { activitiesData } from "@/lib/types/Activities";
import InfiniteSliding from "@/components/shared/AutoScroll/InfiniteSlidingComponent";
import RequirementsSwipe from "@/components/ui/requirementsSwipe";
import TimelineCards from "@/components/ui/timelineCards";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type DetailCompetitionProps = { params: { slug: string } };

export default function DetailCompetition(props: DetailCompetitionProps) {
  const { params } = props;
  console.log("params", params.slug);
  const competition: activitiesData | undefined = Activities.find(
    (comp) => comp.path === params.slug
  );

  if (!competition) {
    return <div>Kompetisi tidak ditemukan</div>;
  }

  return (
    <section className="relative w-full m-auto lg:w-[90%] mb-12">
      {/* HERO */}
      <Card
        className="pb-2 text-center rounded-none overflow-hidden flex flex-col justify-center align-middle items-center"
        style={{ backgroundColor: competition.color }}
      >
        <CardTitle className="text-4xl mb-9 tracking-wide font-semibold leading-normal lg:text-5xl">
          {competition.title}
        </CardTitle>
        <CardContent className="w-[85%] h-full ">
          <Image
            src={competition.coverImage}
            alt={competition.title}
            width={1200}
            height={1200}
          />
          <CardDescription className="text-start mt-10">
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
      </Card>

      {/* INFINITE SLIDING */}
      <Card className="pb-10">
        <InfiniteSliding />
      </Card>

      {/* REQUIREMENTS */}
      <Card
        className="pb-2 text-center overflow-hidden rounded-none"
        style={{ backgroundColor: competition.color }}
      >
        <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
          Competition Requirements
        </CardTitle>
        <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl">
          {competition.requirementsTitle}
        </CardDescription>
        <CardContent>
          <RequirementsSwipe requirements={competition.requirements} />
        </CardContent>
      </Card>

      {/* DOWNLOAD GUIDE BOOK */}
      <Card
        className="flex flex-col rounded-none justify-center items-center align-middle pb-20 text-center overflow-hidden"
        style={{ backgroundColor: competition.color }}
      >
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

      {/* TIMELINE */}
      <TimelineCards
          title="Competition Timeline"
          description="Pay attention to the time and date of the race"
          timelines={competition.timeline}
        />
    </section>
  );
}
