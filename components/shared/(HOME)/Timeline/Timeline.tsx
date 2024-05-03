import { timelinesHome } from "@/constants/Timeline/timelineshome";
import TimelineCards from "@/components/ui/timelineCards";

const Timeline = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <TimelineCards
          title="Competition Timeline"
          description="Pay attention to the time and date of the race"
          timelines={timelinesHome}
        />
      </div>
    </div>
  );
};

export default Timeline;