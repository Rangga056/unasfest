import {faqsData} from "@/constants/FaqsData";
import FaqCard from "@/components/ui/faqCard"

const Faq = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <FaqCard
          title="Our Competition"
          description="UNAS FEST 2024 Competition List"
          faqsData={faqsData}
        />
      </div>
    </div>
  );
};

export default Faq;
