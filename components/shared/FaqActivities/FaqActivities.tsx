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
            <AccordionTrigger>
              <div className="text-4xl w-full font-bungee text-start">
                {faq.question}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-lg text-start">{faq.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqActivities;
