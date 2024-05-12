import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
  } from "@/components/ui/card";

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
      <section className="relative mt-20 w-full max-w-screen-xl m-auto lg:w-[90%] mb-12">
        <Card className="pb-2 text-center overflow-hidden ">
          <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
            {title}
          </CardTitle>
          <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl">
            {description}
          </CardDescription>
          <CardContent className="w-full h-full p-0">
              <Timeliner timelines={timelines}/>
          </CardContent>
        </Card>
        {children}
      </section>
    );
  }

  export default PosterCard;
