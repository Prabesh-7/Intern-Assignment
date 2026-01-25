import React from 'react'
import Image from 'next/image'

export default function AnalyticsDashboardSection() {
  return (
    <section className="bg-[#1a1d2e] py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-white font-bold text-4xl lg:text-5xl leading-tight">
              Get a Clear, Real-Time
              <br />
              View of Your Business
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              A smart, real-time dashboard that brings all your essential business
              data together. Track sales, customers, orders, deliveries, and payouts
              instantly, giving you a complete and clear view of your store's
              performance in one place.
            </p>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Active Customers */}
          <div className=" rounded-2xl p-6 space-y-4">
            <div className=" bg-analytics-text rounded-lg flex items-center justify-center">
              <Image
                src="/images/Analytics1.png"
                alt="Total Active Customer Dashboard"
                width={400}
                height={250}
                className=" object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-analytics-text">
              Active Customers
            </h3>
            <p className=" text-analytics-text text-sm">
              See how many customers are currently engaging with your store,
              browsing products, or placing new orders.
            </p>
          </div>


             <div className=" rounded-2xl p-6 space-y-4">
            <div className=" bg-analytics-text rounded-lg flex items-center justify-center">
              <Image
                     src="/images/Analytics2.png"
                alt="Total Active Customer Dashboard"
                width={400}
                height={250}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-analytics-text">
             Today’s Revenue
            </h3>
            <p className=" text-analytics-text text-sm">
             Track today’s total earnings in real time. Understand performance instantly without switching tabs.
            </p>
          </div>



             <div className=" rounded-2xl p-6 space-y-4">
            <div className=" bg-analytics-text rounded-lg flex items-center justify-center">
              <Image
                 src="/images/Analytics3.png"
                alt="Total Active Customer Dashboard"
                width={400}
                height={250}
                className=" object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-analytics-text">
              Total Orders
            </h3>
            <p className=" text-analytics-text text-sm">
             View the total number of orders placed across all channels — online store, POS, and social platforms.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}