import { Star } from "lucide-react";

const AutoScrollBanner = () => {
  return (
    <div className="animate-scroll flex items-center gap-4">
      <div className="flex items-center gap-4 scroll-items">
        <Star />
        <span className="uppercase font-[900] text-2xl"> our competition</span>
      </div>
      <div className="flex items-center gap-4 scroll-items">
        <Star />
        <span className="uppercase font-[900] text-2xl"> our competition</span>
      </div>{" "}
      <div className="flex items-center gap-4 scroll-items">
        <Star />
        <span className="uppercase font-[900] text-2xl"> our competition</span>
      </div>{" "}
      <div className="flex items-center gap-4 scroll-items">
        <Star />
        <span className="uppercase font-[900] text-2xl"> our competition</span>
      </div>
    </div>
  );
};

export default AutoScrollBanner;
