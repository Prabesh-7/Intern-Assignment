'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'

export default function AnalyticsDashboardSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const cards = [
    {
      image: '/images/Analytics1.png',
      title: 'Active Customers',
      description:
        'See how many customers are currently engaging with your store, browsing products, or placing new orders.',
    },
    {
      image: '/images/Analytics2.png',
      title: "Today's Revenue",
      description:
        "Track today's total earnings in real time. Understand performance instantly without switching tabs.",
    },
    {
      image: '/images/Analytics3.png',
      title: 'Total Orders',
      description:
        'View the total number of orders placed across all channels — online store, POS, and social platforms.',
    },
  ]

  return (
    <section className="bg-[#1a1d2e] lg:py-20 py-6">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-white font-bold text-[20px] lg:text-[56px] leading-tight text-center lg:text-left">
              Get a Clear, Real-Time View of Your Business
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-center lg:text-left">
              A smart, real-time dashboard that brings all your essential
              business data together. Track sales, customers, orders,
              deliveries, and payouts instantly, giving you a complete and clear
              view of your store's performance in one place.
            </p>
          </div>
        </div>

        {/* Mobile Carousel - Hidden on Large Screens */}
        <div className="block lg:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {cards.map((card, index) => (
                <CarouselItem key={index} className="pl-4">
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={400}
                        height={300}
                        className="object-contain w-full h-auto"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white text-left px-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm text-left px-2">
                      {card.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-8">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index ? 'bg-[#5DC7A4] w-8' : 'bg-gray-500 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Active Customers */}
          <div className="rounded-2xl p-6 space-y-4">
            <div className="bg-analytics-text rounded-lg flex items-center justify-center">
              <Image
                src="/images/Analytics1.png"
                alt="Total Active Customer Dashboard"
                width={400}
                height={250}
                className="object-contain h-60"
              />
            </div>
            <h3 className="text-xl font-semibold text-analytics-text">
              Active Customers
            </h3>
            <p className="text-analytics-text text-sm">
              See how many customers are currently engaging with your store,
              browsing products, or placing new orders.
            </p>
          </div>

          {/* Card 2 - Today's Revenue */}
          <div className="rounded-2xl p-6 space-y-4">
            <div className="bg-analytics-text rounded-lg flex items-center justify-center">
              <Image
                src="/images/Analytics2.png"
                alt="Total Active Customer Dashboard"
                width={400}
                height={250}
                className="object-contain h-60"
              />
            </div>
            <h3 className="text-xl font-semibold text-analytics-text">
              Today's Revenue
            </h3>
            <p className="text-analytics-text text-sm">
              Track today's total earnings in real time. Understand performance
              instantly without switching tabs.
            </p>
          </div>

          {/* Card 3 - Total Orders */}
          <div className="rounded-2xl p-6 space-y-4">
            <div className="bg-analytics-text rounded-lg flex items-center justify-center">
              <Image
                src="/images/Analytics3.png"
                alt="Total Active Customer Dashboard"
                width={400}
                height={250}
                className="object-contain h-60"
              />
            </div>
            <h3 className="text-xl font-semibold text-analytics-text">
              Total Orders
            </h3>
            <p className="text-analytics-text text-sm">
              View the total number of orders placed across all channels —
              online store, POS, and social platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}