import AutoScrollComponent from "@/components/shared/AutoScrollComponent";
import Hero from "@/components/shared/activities/Hero";

const IndonesianDebatePage = () => {
  return (
    <div className="mx-auto pt-8 relative">
      <div className="bg-page-green absolute z-[-10] top-[380px] right-0 left-0 h-[1660px] max-w-[1500px] mx-auto" />

      <div className="container">
        <Hero />
      </div>
      <div className="w-screen">
        <AutoScrollComponent />
      </div>
    </div>
  );
};

export default IndonesianDebatePage;
