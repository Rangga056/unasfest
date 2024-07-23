import { timelinesHome } from "@/constants/Timeline";
import TimelineCards from "@/components/ui/timelineCards";

const Timeline = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <TimelineCards
          title="Activity Timeline"
          description="Pay attention to the time and date"
          timelines={timelinesHome}
        />
      </div>
    </div>
  );
};

export default Timeline;
