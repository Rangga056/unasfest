"use client";

import React from "react";
import { activitiesData } from "@/lib/types/Activities";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordiion";

interface faqProps {
  faqs: activitiesData["faqs"];
}

const FaqActivities: React.FC<faqProps> = ({ faqs }) => {
  return (
    <div>
      <Accordion defaultValue="item-0" type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-xl font-semibold w-full font-inter text-start">
                {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-xl font-semibold opacity-70 text-start">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqActivities;
