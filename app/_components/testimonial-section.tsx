import { MoveLeft, MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Testimonial } from "../data/Testimonial"
import Image from 'next/image'

export default function TestimonialSection() {
  return (
    <section className="mt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between  gap-12">
          
          {/* Left Content */}
          <div className="flex flex-col ">
            {/* Badge */}
            <div className="w-fit px-6 py-2 rounded-full bg-gray-100 text-sm font-medium mb-6">
              Testimonial
            </div>

            {/* Heading */}
            <h1 className="font-semibold text-[56px] leading-tight ">
              Loved by<br />
              Businesses of All<br />
              Sizes
            </h1>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              See how stores, brands, and retail teams use our<br />
              platform to simplify operations, boost sales, and scale<br />
              confidently.
            </p>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <Button className="rounded-full w-12 h-12 p-0">
                <MoveLeft size={20} />
              </Button>
              <Button className="rounded-full w-12 h-12 p-0">
                <MoveRight size={20} />
              </Button>
            </div>
          </div>

          {/* Right Content - Testimonial Cards */}
          <div className="flex gap-6 flex-1 ">
            {Testimonial.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 flex-1 "
              >
                {/* Title */}
                <h3 className="text-xl font-semibold ">
                  {testimonial.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-10">
                  {testimonial.description}
                </p>

                {/* Profile Section */}
                <div className="flex items-center gap-5 mt-18">
                  <Image 
                  
                    src={testimonial.profile}
                    alt={testimonial.name}
                    height={100}
                    width={100}
                    
                    className="rounded-xl h-18 w-18 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}