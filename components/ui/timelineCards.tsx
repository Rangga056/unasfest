import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { ScrollArea, ScrollBar } from "@/components/ui/scrollBarArea";

import Timeliner from "@/components/ui/timeliner";
import { timelinesDatasProps } from "@/lib/types/timeline";
import React from "react";

interface Props extends timelinesDatasProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

function PosterCard({ title, description, timelines, children }: Props) {
  return (
    <section className="relative m-auto mb-12 mt-20 w-full max-w-screen-xl lg:w-[90%]">
      <Card className="overflow-hidden pb-2 text-center">
        <CardTitle className="text-3xl font-semibold leading-normal tracking-wide md:text-4xl lg:text-5xl">
          {title}
        </CardTitle>
        <CardDescription className="mb-16 text-sm font-normal leading-normal tracking-wide lg:text-xl">
          {description}
        </CardDescription>
        <ScrollArea className="">
          <CardContent className="h-full max-h-[1000px] w-full p-0">
            <Timeliner timelines={timelines} />
          </CardContent>
        </ScrollArea>
      </Card>
      {children}
    </section>
  );
}

export default PosterCard;
