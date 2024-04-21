"use client";

import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card";
  
  import PosterSwipe, { posterDatasProps } from "@/components/ui/posterswipe";
  import React from "react";

  interface Props extends posterDatasProps {
    title: string;
    description: string;
    children?: React.ReactNode;
  }
  
  function TimelineCard({ title, description, posterDatas, children }: Props) {
    return (
      <section className="relative mt-20 w-full max-w-screen-xl m-auto lg:w-[90%] mb-12">
        <Card className="pb-2 text-center overflow-hidden">
          <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
            {title}
          </CardTitle>
          <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl">
            {description}
          </CardDescription>
          <CardContent className="w-full h-full">
            <div className="">
              <PosterSwipe posterDatas={posterDatas}/>
            </div>
          </CardContent>
          <CardFooter className="hidden lg:h-2 lg:p-0 lg:w-3/5 lg:m-auto"></CardFooter>
        </Card>
        {children}
      </section>
    );
  }
  
  export default TimelineCard;
  