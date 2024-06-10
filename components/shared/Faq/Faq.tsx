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
      <Card className="overflow-hidden rounded-none pb-2 text-center">
        <CardTitle className="text-3xl font-semibold leading-normal tracking-wide text-page-blue md:pb-20 md:text-5xl">
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
