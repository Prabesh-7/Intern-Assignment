import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Video } from 'lucide-react'

const PARTNER_LOGOS = [
  { src: '/images/dressnepal.png', alt: 'Dress Nepal', width: 164, height: 35 },
  { src: '/images/yeshelpinghand.png', alt: 'Yes Helping Hand', width: 241, height: 41 },
  { src: '/images/organiccraft.png', alt: 'Organic Craft', width: 191, height: 41 },
  { src: '/images/giftypoint.png', alt: 'Gifty Point', width: 131, height: 53 },
  { src: '/images/naturalwears.jpg', alt: 'Natural Wears', width: 160, height: 31 },
  { src: '/images/aicen.png', alt: 'AICEN', width: 144, height: 53 },
]

export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex justify-center flex-col items-center gap-4 mb-10 mt-20">
          <h1 className="text-5xl font-semibold  text-center">
            Run your whole eCommerce
            <br />
            business from one dashboard.
          </h1>

          <p className="font-medium text-center">
            Manage your products, orders, shipping, POS, discounts, and payouts seamlessly
            <br />
            in a single SaaS platform, simplifying operations and saving you time.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex  justify-center mt-8 gap-4">
          <Button variant="default" className="bg-primary h-12 text-white">
            Start Free Trial
            <ArrowRight />
          </Button>
          <Button variant="outline" className="h-12 text-navbar-text">
            <Video />
            Watch Demo
          </Button>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-2 ">
          <p className='font-semibold'>Secure setup · Free 14-day trial, no card.</p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mt-12">
          <Image
            src="/images/hero.png"
            alt="eCommerce Dashboard Interface"
            width={1077}
            height={737}
            priority
          />
        </div>

        {/* Social Proof Section */}
        <div className="text-center mt-8 font-semibold font-[Google_Sans_Flex]">
          <p>Trusted by Businesses Worldwide</p>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center gap-8 mt-8">
          {PARTNER_LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}