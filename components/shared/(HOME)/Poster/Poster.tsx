import {postersData} from "@/constants/posterDatas";
import PosterCard from "@/components/ui/PosterCard";

const Poster = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <PosterCard
          title="Our Competition"
          description="UNAS FEST 2024 Competition List"
          posterDatas={postersData}
        />
      </div>
    </div>
  );
};

export default Poster;
