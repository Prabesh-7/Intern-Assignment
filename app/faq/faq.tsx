"use client";

import { Button } from "@/components/ui/button";
import { Faq } from "../data/Faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  ActiveTriggerSvg,
} from "@/components/ui/accordion";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function faq() {
  return (
    <section className="container mx-auto">
      <div className="lg:mb-25 mb-6 px-4 lg:px-0 ">
        <div className="flex flex-col gap-4 lg:gap-6">
          {Faq.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-[#F1F1F1] p-6 rounded-2xl">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Title and Description Section */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <h1 className="text-[20px] text-title_brand font-semibold leading-[160%] tracking-normal mb-4">
                    {category.type}
                  </h1>
                  <p className="text-[14px] lg:text-[16px] font-normal leading-[160%] text-title_brand">
                    {category.description}
                  </p>
                </div>

                {/* Accordion*/}
                <AccordionWrapper faqs={category.faqs} />
              </div>
            </div>
          ))}
        </div>

        

        
        <div className="mt-12 lg:mt-16 flex flex-col gap-2 justify-center items-center px-4 lg:px-0">
          <h3 className="text-[20px] lg:text-[24px] font-semibold leading-[160%] tracking-normal text-center">
            Still have a questions?
          </h3>

          <p className="text-[14px] lg:text-[16px] font-normal leading-[160%] tracking-normal text-center">
            If you cannot find answer to your question in our FAQ, you can
            <br className="hidden lg:block" />
            always <span className="text-secondary_brand">contact us</span>. We will
            answer to you shortly
          </p>

          <Button
            className="mt-2 px-8 py-6 text-sm lg:text-base w-full lg:w-auto"
            variant="default"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

function AccordionWrapper({ faqs }: { faqs: any[] }) {
 

  return (
    <div className="flex-1">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
      
        className="w-full"
      >
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white_brand mb-2 px-4 lg:px-6 rounded-lg border border-gray-200"
            >
              <AccordionTrigger
              
                icon={ArrowDownRight}
                className="py-4 lg:py-5 [&[data-state=open]>svg]:-rotate-90"
              >
                <span className="text-left font-semibold text-[16px] lg:text-[18px]  tracking-normal text-title_brand">
                  {faq.question}
                </span>
              </AccordionTrigger>

              <AccordionContent className="text-body-text_brand text-[14px] lg:text-[16px] pb-4 font-normal leading-[150%] tracking-normal">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
