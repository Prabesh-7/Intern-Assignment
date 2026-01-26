import React from "react";
import { Integration } from "../data/Integration";
import Image from "next/image";

export default function () {
  return (
    <section className="mt-28">
      <div className="container mx-auto ">
        {/* Header */}
        <div className="flex justify-center">
          <h1 className="w-fit px-6 py-2 rounded-full bg-gray-100 text-sm font-medium">
            Integratios & Workflow
          </h1>
        </div>

        <div className="flex flex-col items-center text-center mt-4">
          <div>
            <h1 className="font-semibold text-5xl">
              Works Seamlessly With the
              <br /> Tools You Already Use
            </h1>
          </div>

          <div>
            <p className="font-medium text-xl align-center mt-6">
              Connect your store with leading shipping partners, payment
              gateways, POS <br />
              systems, and marketplaces — so everything stays in sync
              automatically.
            </p>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-5 gap-6 mt-10 overflow-x-auto">
          {Integration.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition"
            >
              <div className="h-10 w-10 bg-gray-50 flex items-center justify-center rounded-md mb-4 border">
                <Image
                  src={card.logo}
                  alt={card.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2 flex gap-4 ">
                {card.title}
              </h3>

              <p className={`text-sm text-gray-600 mb-4`}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
