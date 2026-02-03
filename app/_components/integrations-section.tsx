import { Integration } from "../data/Integration";
import Image from "next/image";

export default function () {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-center">
          <h1 className="w-fit px-6 py-2 rounded-full bg-white text-sm font-medium mt-8 lg:mt-25">
            Integratios & Workflow
          </h1>
        </div>

        <div className="flex flex-col items-center text-center mt-4 px-4 lg:px-0">
          <div>
            <h1 className="font-semibold text-3xl lg:text-5xl">
              Works Seamlessly With the
              <br className="hidden lg:block" /> Tools You Already Use
            </h1>
          </div>

          <div>
            <p className="font-medium text-base lg:text-xl align-center mt-6">
              Connect your store with leading shipping partners, payment
              gateways, POS <br className="hidden lg:block" />
              systems, and marketplaces — so everything stays in sync
              automatically.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-10 overflow-x-auto lg:overflow-visible px-4 lg:px-0">
          <div className="flex lg:grid lg:grid-cols-5 gap-4 lg:gap-6 pb-4 lg:pb-0">
            {Integration.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition mb-6 lg:mb-25 flex-shrink-0 
                           w-[100px] h-[100px] lg:w-auto lg:h-auto lg:p-6 
                           flex items-center justify-center lg:block"
              >
                <div className="h-12 w-12 lg:bg-gray-50 flex items-center justify-center lg:rounded-md lg:mb-4 lg:border">
                  <Image
                    src={card.logo}
                    alt={card.title}
                    width={24}
                    height={24}
                    className="object-contain h-full w-full p-1"
                  />
                </div>

                <h3 className="hidden lg:block text-lg font-semibold mb-2">
                  {card.title}
                </h3>

                <p className="hidden lg:block text-sm text-gray-600 mb-4">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}