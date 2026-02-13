import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" container mx-auto">
      <div className=" lg:mt-25 mt-6">
        <div className=" flex flex-col justify-center ">
          <h1 className="font-semibold text-[20px] lg:text-[64px] lg:text-[56px] leading-[120%] tracking-normal text-center px-4 lg:px-0 text-title_brand">
            How to Manage Inventory Efficiently Across
            <br /> Online and POS Stores
          </h1>

          <p className="text-body-text_brand mt-4 flex font-normal text-[14px] lg:text-[24px] leading-[160%] tracking-normal justify-center text-center ">
            Managing inventory across multiple sales channels is challenging.
            When your website, POS, and marketplaces show different stock
            levels, fulfilling orders becomes frustrating and error-prone.
          </p>
        </div>

        <div className="flex justify-center items-center gap-3 lg:gap-5 mt-4 lg:mt-6 ">
          <Image
            src="/images/Bimal.jpg"
            alt="bimal"
            height={100}
            width={100}
            className="rounded-full h-12 w-12 lg:h-18 lg:w-18 object-cover border border-secondary_brand"
          />

          <h1 className="text-sm lg:text-base font-medium">By Bimal Khatri</h1>

          <span className="h-8 w-px bg-gray-300"></span>

          <p className="font-semibold text-xs lg:text-sm">March 16 2022</p>

          <span className="h-8 w-px bg-gray-300"></span>

          <p className="text-xs text-gray-500">5 min Read</p>
        </div>

        <div className=" mt-6 lg:mt-9  ">
          <Image
            src="/images/Blogdetail.jpg"
            alt="eCommerce Dashboard Interface"
            width={1328}
            height={792}
            priority
            className="rounded-[32px] h-full w-full px-4 lg:px-0 py-4 lg:py-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
