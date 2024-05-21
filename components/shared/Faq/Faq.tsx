import {faqsData} from "@/constants/Faqs";
import { Card, CardTitle, CardContent} from "@/components/ui/card";
import FaqSwipe from "@/components/ui/faqSwipe";
import { faqsDataProps } from "@/lib/types/Faq";

interface Props extends faqsDataProps{
  title: string;
  children?: React.ReactNode;
}


function faq({ title }: Props) {
  return (
    <section className="relative mt-20 w-full max-w-screen-xl m-auto lg:w-[90%] mb-12">
      <Card className="pb-2 text-center overflow-hidden">
        <CardTitle className="text-4xl tracking-wide pb-20 font-semibold leading-normal lg:text-5xl">
          {title}
        </CardTitle>
        <CardContent className="w-full h-full">
            <FaqSwipe faqsData={faqsData}/>
        </CardContent>
      </Card>
    </section>
  );
}

export default faq;
