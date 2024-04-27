import posterDatas from "@/components/constants/posterDatas";
import PosterCard from "@/components/ui/PosterCard";

const Poster = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <PosterCard
          title="Auto Scroll"
          description="Scroll automatically when you reach the end of the page"
          posterDatas={posterDatas}
        />
      </div>
    </div>
  );
};

export default Poster;
