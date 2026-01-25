// import React from "react";

// import { features } from "process";

// export default function () {
//   return (
//     <section>
//       <div className="container mx-auto mt-18">
//         <div className="flex justify-center">
//           <h1 className="w-fit px-6 py-2 rounded-full bg-gray-100">Key Features</h1>
//         </div>
//         <div className="mt-4 flex justify-center">
//           <h1 className="font-semibold text-5xl text-center">
//             Everything You Need to Run
//             <br />
//             Your Store Smoothly
//           </h1>
//         </div>

//         <div className="mt-4 flex justify-center text-center">
//           <p>Powerful tools that help you manage products, orders, shipping, payments, and<br/> customers — all from one simple dashboard.</p>
//         </div>

//         <div className="mt-12 flex justify-center">
//           <ul className="flex flex-row gap-8 ">
//             <li>Product & Inventory Management</li>
//             <li>Shipping Integration</li>
//             <li>POS Integration</li>
//             <li>Order Management</li>
//           </ul>
//         </div>

//         <div className="flex justify-center mt-12">

//           {Features.map((features,index)=>

//           <div className="h-158.25 w-[532] bg-[#FEF5EC]  ">
//             key ={index}

//             <h1>{features.title}</h1>
//             <p>{features.description}</p>
//             <button>{features.buttonText}</button>
//             </div>
//           )}

//             <div className="h-158.25 w-[810] bg-[#FADFC3]">
//               <Image src={features.image}
//                alt={features.title} width={810} height={158.25}/>

//             </div>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Features } from "../data/Features";

export default function KeyFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = Features[activeIndex];

  return (
    <section className="py-20">
      <div className=" ">
        {/* Header */}
        <div className="flex justify-center">
          <h1 className="w-fit px-6 py-2 rounded-full bg-gray-100 text-sm font-medium">
            Key Features
          </h1>
        </div>

        <div className="mt-6 flex justify-center">
          <h1 className="font-semibold text-4xl lg:text-5xl text-center font-[Google_Sans_Flex]">
            Everything You Need to Run
            <br />
            Your Store Smoothly
          </h1>
        </div>

        <div className="mt-4 flex justify-center text-center">
          <p className="text-gray-600 max-w-3xl">
            Powerful tools that help you manage products, orders, shipping,
            payments, and
            <br className="hidden sm:block" />
            customers — all from one simple dashboard.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex justify-center">
          <ul className="flex gap-8">
            {Features.map((feature, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`pb-2 font-medium transition-colors ${
                    activeIndex === index
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {feature.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Feature Content */}

        <div className="container mx-auto flex justify-center">

          <div className="flex  mt-12">
            {/* Left Content */}
            <div className="w-133 bg-[#FEF5EC] p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-semibold font-[Google_Sans_Flex] leading-tight whitespace-pre-line">
                  {activeFeature.title}
                </h2>

                <p className="text-xl font-semibold text-gray-800">
                  {activeFeature.description}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {activeFeature.details}
                </p>

                <Button
                  variant="default"
                  className="bg-primary text-white h-12 px-8"
                >
                  {activeFeature.buttonText}
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-202.5 flex-1 h-158.25 bg-[#FADFC3] pt-16 pl-[128] overflow-hidden">
              <Image
                src={activeFeature.image}
                alt={activeFeature.title}
                width={810}
                height={633}
                className="rounded-tl-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
