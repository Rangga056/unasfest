import BenefitCard from "@/components/ui/benefitCard";


const Benefit = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <BenefitCard
          title="BENEFIT OF THE UNAS FEST 2024" competency={<div>COMPETENCY</div>}
        //   posterDatas={posterData}
        />
      </div>
    </div>
  );
};

export default Benefit;
