"use client";

import Image from "next/image";
import { featureoverview } from "../../data/feature-overview";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const FeatureOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = contentRefs.current.length - 1; i >= 0; i--) {
        const element = contentRefs.current[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="container mx-auto px-4">
      <div className="space-y-6 lg:space-y-0 mb-6 lg:mb-25">
        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {featureoverview.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F3F3F3] rounded-lg p-4 space-y-3"
            >
              {/* Image */}
              <div className="w-full">
                <div className="w-full max-w-[664px] h-auto aspect-[664/496] rounded-lg relative p-3 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full flex flex-col gap-3">
                <p className="font-medium text-sm leading-[150%] text-title_brand">
                  {feature.label}
                </p>

                <h2 className="font-semibold text-xl leading-[120%] text-title_brand">
                  {feature.title}
                </h2>

                <p className="font-normal text-sm leading-[150%] text-body-text_brand">
                  {feature.details}
                </p>

                <div>
                  <Button className="w-full text-sm">
                    {feature.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        


        {/*desktop scroll*/}
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-[130px]">
         

          <div className="w-1/2 sticky top-44 self-start">
            <div className="w-full max-w-[664px] h-auto aspect-[664/496] bg-[#F3F3F3] rounded-lg relative p-12 flex items-center justify-center overflow-hidden">
              {featureoverview.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-12 flex items-center justify-center transition-opacity duration-1000 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

         

          {/* RIGHT SIDE - Scrollable Content */}
<div className="w-1/2 flex flex-col gap-50 mt-14">
  {featureoverview.map((feature, index) => (
    <div
      key={index}
      ref={(el) => {
        contentRefs.current[index] = el;
      }}
      className={"flex flex-col gap-6 max-w-[534px] min-h-0"}
    >
      <p className="font-medium text-base leading-[150%] text-title_brand">
        {feature.label}
      </p>

      <h2 className="font-semibold text-[32px] leading-[120%] text-title_brand">
        {feature.title}
      </h2>

      <p className="font-normal text-base leading-[150%] text-body-text_brand">
        {feature.details}
      </p>

      <div>
        <Button className="w-auto text-base">
          {feature.buttonText}
        </Button>
      </div>
    </div>
  ))}
</div>




        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;