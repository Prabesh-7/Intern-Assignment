
// import React from 'react'
// import { Button } from "@/components/ui/button";
// import { Faq } from "../data/Faq";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "@/components/ui/accordion";

// import { ChevronDownIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";

// export default function faq() {
//   return (
//     <section className='container mx-auto'>
//       <div className='lg:mb-25 mb-6'>

        
//         <div className='flex flex-col gap-6 lg:gap-6'>
//           {Faq.map((category, categoryIndex) => (
//             <div
//               key={categoryIndex}
//               className='bg-[#F1F1F1] p-6 rounded-2xl'
//             > 
//               <div className='flex flex-col lg:flex-row gap-6'>
//                 {/* Title and Description Section */}
//                 <div className='lg:w-1/3 flex-shrink-0'>
//                   <h1 className='text-[20px] text-title_brand font-semibold leading-[160%] tracking-normal mb-4'>{category.type}</h1>
//                   <p className='text-[14px] lg:text-[16px] font-normal leading-[160%] text-title_brand'>{category.description}</p>
//                 </div>
           
//                 {/* Accordion Section */}
//                 <div className='flex-1'>
//                   <Accordion
//                     type="single"
//                     collapsible
//                     defaultValue="item-0"
//                     className="w-full"
//                   >
//                     {category.faqs.map((faq, index) => (
//                       <AccordionItem
//                         key={index}
//                         value={`item-${index}`}
//                         className="bg-white_brand mb-2 px-4 lg:px-6 rounded-lg border border-gray-200"
//                       >
//                         <AccordionTrigger className="hover:no-underline py-4 lg:py-5">
//                           <div className="flex w-full items-center justify-between">
//                             <span className="text-left font-semibold text-sm lg:text-base">
//                               {faq.question}
//                             </span>
//                             {index === 0 ? (
//                               <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0 ml-2" />
//                             ) : (
//                               <ArrowDownRight className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0 ml-2" />
//                             )}
//                           </div>
//                         </AccordionTrigger>
//                         <AccordionContent className="text-xs lg:text-sm pb-4">
//                           {faq.answer}
//                         </AccordionContent>
//                       </AccordionItem>
//                     ))}
//                   </Accordion>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact Section */}
//         <div className="mt-12 lg:mt-16 flex flex-col gap-2 justify-center items-center px-4 lg:px-0">
//           <h3 className="text-[20px] lg:text-[24px] font-semibold leading-[160%] tracking-normal text-center">
//             Still have a questions?
//           </h3>

//           <p className="text-[14px] lg:text-[16px] font-normal leading-[160%] tracking-normal text-center">
//             If you cannot find answer to your question in our FAQ, you can
//             <br className="hidden lg:block" />
//             always <span className="text-secondary_brand font-semibold  text-[14px] lg:text-[16px] ">contact us</span>. We will
//             answer to you shortly
//           </p>

//           <Button
//             // className="mt-2 px-8 py-6 text-sm lg:text-base w-full lg:w-auto"
//             className='mt-6 lg:w-auto w-full'
//             variant="default"
//           >
//             Contact Us
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client';

import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Faq } from "../data/Faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function faq() {
  return (
    <section className='container mx-auto'>
      <div className='lg:mb-25 mb-6'>
        <div className='flex flex-col gap-6 lg:gap-6'>
          {Faq.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className='bg-[#F1F1F1] p-6 rounded-2xl'
            > 
              <div className='flex flex-col lg:flex-row gap-6'>
                {/* Title and Description Section */}
                <div className='lg:w-1/3 flex-shrink-0'>
                  <h1 className='text-[20px] text-title_brand font-semibold leading-[160%] tracking-normal mb-4'>{category.type}</h1>
                  <p className='text-[14px] lg:text-[16px] font-normal leading-[160%] text-title_brand'>{category.description}</p>
                </div>
           
                {/* Accordion Section */}
                <AccordionWrapper faqs={category.faqs} />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 lg:mt-16 flex flex-col gap-2 justify-center items-center px-4 lg:px-0">
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
  )
}

// Separate component to manage accordion state
function AccordionWrapper({ faqs }: { faqs: any[] }) {
  const [openItem, setOpenItem] = useState<string>("item-0");

  return (
    <div className='flex-1'>
      <Accordion
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
        className="w-full"
      >
        {faqs.map((faq, index) => {
          const isOpen = openItem === `item-${index}`;
          
          return (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-50 mb-2 px-4 lg:px-6 rounded-lg border border-gray-200"
            >
              <AccordionTrigger className="hover:no-underline py-4 lg:py-5">
                <div className="flex w-full items-center justify-between">
                  <span className="text-left font-semibold text-sm lg:text-base">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0 ml-2" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0 ml-2" />
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xs lg:text-sm pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}