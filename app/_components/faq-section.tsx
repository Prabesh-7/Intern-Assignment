import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Faq } from "../data/Faq";
import { Button } from "@/components/ui/button";

import { ChevronDownIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function FaqSection() {
  return (
    <section className="py-8 lg:py-16 bg- bg-white">
      <div className="container mx-auto px-4 lg:px-0">
        {/* Header */}
        <div className="flex justify-center">
          <h1 className="font-semibold text-[20px] lg:text-[56px] leading-tight text-center tracking-normal mb-6 lg:mb-8">
            Frequently asked questions
          </h1>
        </div>

        <div className="flex justify-center">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full lg:w-180 mb-8 lg:mb-16"
          >
            {Faq.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white mb-2 px-4 lg:px-6 rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="hover:no-underline py-4 lg:py-5">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-left font-semibold text-[18px] lg:text-base">
                      {faq.question}
                    </span>

                    {index === 0 ? (
                      <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0 ml-2" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0 ml-2" />
                    )}
                  </div>
                </AccordionTrigger>

                <AccordionContent className=" text-gray-600 text-xs lg:text-sm pb-4 lg:pb-5 ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="mt-2 flex flex-col gap-2 justify-center items-center px-4 lg:px-0">
          <h3 className="text-[20px] lg:text-[24px] font-semibold leading-[160%] tracking-normal text-center">
            Still have a questions?
          </h3>

          <p className="text-[14px] lg:text-[16px] font-normal leading-[160%] tracking-normal text-center">
            If you cannot find answer to your question in our FAQ, you can
            <br className="hidden lg:block" />
            always <span className="text-blue-600">contact us</span>. We will
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
