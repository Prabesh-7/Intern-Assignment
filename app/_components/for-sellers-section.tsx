"use client";

import React, { useState } from "react";
import Image from "next/image";
import forSellersCards from "../data/forSellersCards";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ForSellers() {
  const [ReadIndex, setReadIndex] = useState<number | null>(null);
  return (
    <section className="bg-[#F6F6F6]  py-6 lg:py-20">
      <div className="container mx-auto px-4">
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row lg:justify-between mb-8 lg:mb-16">
          <h1 className="text-[20px] lg:text-5xl font-semibold leading-tight mb-3 lg:mb-0 max-lg:text-center">
            Built for Every Type 
            <span className="lg:block inline">
             of Seller
            </span>
          
          </h1>

          <p className="text-gray-600 text-sm lg:text-lg lg:pr-20">
            Whether you sell online, in-store, or across multiple channels, our
            <br className="hidden lg:block" />
            platform adapts to the way you run your business.
          </p>


          
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* LEFT IMAGE - Hidden on mobile */}
          <div className="hidden lg:flex flex-shrink-0">
            <Image
              src="/images/Seller.jpg"
              alt="Seller"
              width={647}
              height={394}
              className="rounded-lg object-cover"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-3 lg:gap-6">
            {forSellersCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-4 lg:p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-sm lg:text-lg font-semibold mb-2 lg:mb-3 flex items-start gap-2 lg:gap-4">
                  <card.icon />
                  <span className="leading-tight">{card.title}</span>
                </h3>

                <p
                  className={`text-xs lg:text-sm text-gray-600 mb-3 lg:mb-4 ${ReadIndex === index ? "" : "line-clamp-2"}`}
                >
                  {card.description}
                </p>

                {ReadIndex === index ? (
                  <Button
                    variant="readmore"
                    className="flex justify-start items-center gap-1 lg:gap-2 font-light cursor-pointer text-xs lg:text-sm p-0"
                    onClick={() => setReadIndex(null)}
                  >
                    Show Less
                    <ArrowDownRight className="w-3 h-3 lg:w-[18px] lg:h-[18px]" />
                  </Button>
                ) : (
                  <Button
                    variant="readmore"
                    className="flex justify-start items-center gap-1 lg:gap-2 font-light cursor-pointer text-xs lg:text-sm p-0"
                    onClick={() => setReadIndex(index)}
                  >
                    Read More
                    <ArrowUpRight className="w-3 h-3 lg:w-[18px] lg:h-[18px]" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}