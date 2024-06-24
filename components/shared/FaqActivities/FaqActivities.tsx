"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordiion";

interface Faq {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: Faq[];
}

const FaqActivities: React.FC<FaqProps> = ({ faqs }) => {
  return (
    <div>
      <Accordion defaultValue="item-0" type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-xl font-semibold w-full font-inter text-start sm:pb-3 sm:text-lg cursor-pointer">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-xl font-semibold opacity-70 text-start sm:text-lg">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqActivities;
