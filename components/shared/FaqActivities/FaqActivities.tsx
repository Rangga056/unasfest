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
  answer: string[] | string;
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
            <AccordionTrigger className="w-full cursor-pointer text-start font-inter text-xl font-semibold sm:pb-3 sm:text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-start text-xl font-semibold opacity-70 sm:text-lg">
            {Array.isArray(faq.answer) ? (
                <ul className="list-inside list-disc">
                  {faq.answer.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{faq.answer}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqActivities;
