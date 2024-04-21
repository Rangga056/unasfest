import { posterData } from "@/components/constants/posterData";
import TimelineCard from "@/components/ui/timelinecard";
import { Star } from "lucide-react";

const AutoScrollBanner = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <TimelineCard
          title="Auto Scroll"
          description="Scroll automatically when you reach the end of the page"
          posterDatas={posterData}
        />
      </div>
    </div>
  );
};

export default AutoScrollBanner;
