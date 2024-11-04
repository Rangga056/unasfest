import React from "react";
import SliderCommittee from "../Committe/SliderCommittee";
import { DPM, APM, Maskot, Web, Music } from "@/constants/Committe";

const Visionaries = () => {
  return (
    <div>
      <h4 className="mt-16 flex justify-start gap-x-10 text-start text-3xl font-semibold uppercase">
        our <br /> mascot creators
      </h4>
      <div className="flex flex-col items-center">
        <div className="mx-auto flex items-center">
          <SliderCommittee props={Maskot} maxWidth={320} isDPM={false} />
        </div>
      </div>
      <h4 className="mt-16 flex justify-start gap-x-10 text-start text-3xl font-semibold uppercase">
        our <br /> mascot creators
      </h4>
      <div>
        <SliderCommittee props={Web} maxWidth={320} isDPM={false} />
      </div>
      <div>
        <SliderCommittee props={Music} maxWidth={320} isDPM={false} />
      </div>
    </div>
  );
};

export default Visionaries;
