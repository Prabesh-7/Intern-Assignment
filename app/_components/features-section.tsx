"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Features } from "../data/Features";

export default function KeyFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = Features[activeIndex];

  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-0">
        {/* Header */}
        <div className="flex justify-center">
          <h1 className="w-fit px-6 py-2 rounded-full bg-gray-100 text-sm font-medium">
            Key Features
          </h1>
        </div>

        <div className="mt-6 flex justify-center">
          <h1 className="font-semibold text-[28px] lg:text-4xl lg:text-[56px] leading-[130%] tracking-normal text-center px-4 lg:px-0">
            Everything You Need to Run
            <br />
            Your Store Smoothly
          </h1>
        </div>

        <div className="mt-4 flex font-normal text-[15px] lg:text-[20px] leading-[150%] tracking-normal justify-center text-center px-4 lg:px-0">
          <p className="text-gray-600 max-w-3xl">
            Powerful tools that help you manage products, orders, shipping,
            payments, and customers — all from one simple dashboard.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8 lg:mt-12">
          {/* Mobile Scrollable Tabs */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide px-4">
            <ul className="flex gap-2 min-w-max pb-2">
              {Features.map((feature, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                      activeIndex === index
                        ? "bg-[#1e3a8a] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {feature.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:flex justify-center">
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
        </div>

        {/* Feature Content */}
        <div className="mt-8 lg:mt-12 px-4 lg:px-0">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="bg-[#FEF5EC] rounded-2xl overflow-hidden">
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold font-[Google_Sans_Flex] leading-tight">
                  {activeFeature.title}
                </h2>

                <p className="text-base font-semibold text-gray-800">
                  {activeFeature.description}
                </p>

                {/* Image */}
                <div className="bg-[#FADFC3] rounded-lg overflow-hidden -mx-2">
                  <Image
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    width={810}
                    height={633}
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-sm text-gray-700 leading-relaxed pt-2">
                  {activeFeature.details}
                </p>

                <Button
                  variant="default"
                  className="bg-primary text-white h-12 px-8 w-full mt-2"
                >
                  {activeFeature.buttonText}
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-center">
            <div className="flex">
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
      </div>
    </section>
  );
}



