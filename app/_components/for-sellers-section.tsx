"use client";

import React, { useState } from "react";
import Image from "next/image";
import forSellersCards from "../data/forSellersCards";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ForSellers() {
  const [ReadIndex, setReadIndex] = useState<number | null>(null);
  return (
    <section className="bg-[#F6F6F6] py-20 mt-22">
      <div className="container mx-auto ">
        {/* TOP ROW */}
        <div className="flex justify-between mb-16">
          <h1 className="text-5xl font-semibold leading-tight">
            Built for Every Type <br />
            of Seller
          </h1>

          <p className=" text-gray-600 text-lg pr-20">
            Whether you sell online, in-store, or across multiple channels, our<br/>
            platform adapts to the way you run your business.
          </p>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex gap-12">
          {/* LEFT IMAGE */}
          <div className="flex flex-shrink-0">
            <Image
              src="/images/Seller.jpg"
              alt="Seller"
              width={647}
              height={394}
              className="rounded-lg object-cover"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {forSellersCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 "
              >
                <h3 className="text-lg font-semibold mb-2 flex gap-4 ">
                  <card.icon /> {card.title}
                </h3>

                <p
                  className={`text-sm text-gray-600 mb-4 ${ReadIndex === index ? "" : "line-clamp-2"}`}
                >
                  {card.description}
                </p>


                {ReadIndex === index ? (
                <Button
                  className="flex justify-start items-center gap-2 font-light cursor-pointer"
                  onClick={() => setReadIndex(null)}
                 
                >
                  Show Less
                  <ArrowDownRight size={18} />
                </Button>
              ) : (
                <Button
           
                  className="flex justify-start items-center gap-2 font-light cursor-pointer"
                  onClick={() => setReadIndex(index)}
                >
                  Read More
                  <ArrowUpRight size={18} />
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
