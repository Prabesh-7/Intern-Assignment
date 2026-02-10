import Trust from "../../data/Trust";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <section className="container mx-auto ">
      <div className="flex flex-col lg:flex-row gap-6 lg:mb-15 mt-[10px] ">
        <div className="w-full lg:w-[418px]  bg-primary_brand flex flex-col px-4 lg:px-8 py-8 lg:py-8 lg:rounded-2xl">
          <h2 className="font-bold text-[24px] lg:text-[32px] leading-[142%] tracking-normal text-white_brand text-center lg:text-left mt-0 lg:mt-32">
            Why Businesses Trust Us
          </h2>

          <p className="font-normal text-[14px] lg:text-[18px] leading-[150%] tracking-normal text-white_brand text-center lg:text-left mt-2 mb-6 lg:mb-0">
            Smart tools, seamless integrations, and real-time insights designed
            to help your business run better.
          </p>

          {/* CARDS INSIDE PURPLE BACKGROUND ON MOBILE */}
          <div className="grid grid-cols-1 gap-4 lg:hidden w-full">
            {Trust.map((card, index) => (
              <div
                key={index}
                className="bg-background_brand px-6 py-6 rounded-2xl flex flex-col gap-3"
              >
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <card.icon />
                </div>

                <h1 className="text-[18px] mt-2 font-semibold leading-[150%] tracking-normal text-title_brand">
                  {card.title}
                </h1>

                <p className="text-body-text_brand text-[14px] font-normal leading-[150%] tracking-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <Button
            variant="secondary"
            className="h-12 w-full lg:w-fit mt-6 lg:mt-16"
            // className="bg-[#5DC7A4] h-12 w-full lg:w-fit text-white mt-6 lg:mt-16"
          >
            Get Started
          </Button>
        </div>

        {/* RIGHT CARDS - DESKTOP ONLY */}
        <div className="hidden lg:grid grid-cols-2 gap-3 lg:gap-4 w-full flex-1">
          {Trust.map((card, index) => (
            <div
              key={index}
              className="bg-background_brand px-4 lg:px-6  py-4 lg:py-9 rounded-lg border border-gray-200 flex flex-col gap-2 lg:gap-4"
            >
              <h3>
                <card.icon />
              </h3>

              <h1 className="text-[18px] font-semibold leading-[150%] tracking-normal text-title_brand">
                {card.title}
              </h1>

              <p className="text-body-text_brand text-[16px] font-normal leading-[150%] tracking-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



