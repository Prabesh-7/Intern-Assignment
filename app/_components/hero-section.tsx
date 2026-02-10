import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video } from "lucide-react";

const PARTNER_LOGOS = [
  { src: "/images/dressnepal.png", alt: "Dress Nepal", width: 164, height: 35 },
  {
    src: "/images/yeshelpinghand.png",
    alt: "Yes Helping Hand",
    width: 241,
    height: 41,
  },
  {
    src: "/images/organiccraft.png",
    alt: "Organic Craft",
    width: 191,
    height: 41,
  },
  { src: "/images/giftypoint.png", alt: "Gifty Point", width: 131, height: 53 },
  {
    src: "/images/naturalwears.jpg",
    alt: "Natural Wears",
    width: 160,
    height: 31,
  },
  { src: "/images/aicen.png", alt: "AICEN", width: 144, height: 53 },
];

export default function HeroSection() {
  return (
    <section className="bg- bg-primary_brand">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-center flex-col items-center mb-8 lg:mb-10">
          <h1 className="text-[24px] text-primary-text lg:text-[64px] font-semibold leading-[120%] tracking-normal text-center  mt-12 lg:mt-26 ">
            Run your whole eCommerce
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            business from one dashboard.
          </h1>

          <p className="font-medium text-secondary-text text-[16px] lg:text-[24px] leading-[160%] tracking-normal text-center mt-4  px-2">
            Manage your products, orders, shipping, POS, discounts, and payouts
            seamlessly
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            in a single SaaS platform, simplifying operations and saving you
            time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center mt-6 lg:mt-8 gap-3 lg:gap-4 px-4">
          <Button
            variant="default"
            className="bg-button-primary h-12 w-full lg:w-auto text-white"
          >
            Start Free Trial
            <ArrowRight />
          </Button>
          <Button
            variant="outline"
            className="h-12 w-full lg:w-auto text-navbar-text"
          >
            <Video />
            Watch Demo
          </Button>
        </div>

        <div className="text-center mt-3 lg:mt-4">
          <p className="font-bold text-[14px] lg:text-[16px] leading-[150%] tracking-normal">
            Secure setup
            <span className="font-medium text-[14px] lg:text-[16px] leading-[150%] tracking-normal text-primary-text">
              {" "}
              · Free 14-day trial, no card.
            </span>
          </p>
        </div>

        <div className="hidden lg:flex justify-center mt-12">
          <Image
            src="/images/hero.png"
            alt="eCommerce Dashboard Interface"
            width={1077}
            height={737}
            priority
          />
        </div>

        <div className="text-center mt-10 lg:mt-12 font-semibold text-[16px] lg:text-[20px] leading-[160%] tracking-normal">
          <p>Trusted by Businesses Worldwide</p>
        </div>

        {/* Partner Logos - Mobile Scroll, Desktop Wrap */}
        <div className="overflow-x-auto lg:overflow-x-visible mt-4 lg:mt-6 pb-8 scrollbar-hide">
          <div className="flex lg:flex-wrap lg:justify-center gap-6 lg:gap-8 min-w-max lg:min-w-0">
            {PARTNER_LOGOS.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain max-w-30 lg:max-w-none h-10 lg:h-auto flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
