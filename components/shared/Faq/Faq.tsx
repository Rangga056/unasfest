import { faqsData } from "@/constants/Faqs";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import FaqSwipe from "@/components/ui/faqSwipe";
import { faqsDataProps } from "@/lib/types/Faq";

interface Props extends faqsDataProps {
  title: string;
  children?: React.ReactNode;
}

function faq({ title }: Props) {
  return (
    <section className="relative m-auto mb-12 mt-20 w-full max-w-screen-xl lg:w-[90%]">
      <Card className="overflow-hidden rounded-none text-center pb-2">
        <CardTitle className="md:pb-20 text-3xl font-semibold leading-normal tracking-wide lg:text-5xl">
          {title}
        </CardTitle>
        <CardContent className="h-full w-full">
          <FaqSwipe faqsData={faqsData} />
        </CardContent>
      </Card>
    </section>
  );
}

export default faq;
