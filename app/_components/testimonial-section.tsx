'use client';

import { MoveLeft, MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Testimonial } from "../data/Testimonial"
import Image from 'next/image'
import { useState } from 'react'

export default function TestimonialSection() {

  const [currentIndex, setCurrentIndex] = useState(0)

 
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? Testimonial.length - 1 : prev - 1))
  }

 
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === Testimonial.length - 1 ? 0 : prev + 1))
  }

  
  const getDesktopTestimonials = () => {
    const first = Testimonial[currentIndex]
    const second = Testimonial[(currentIndex + 1) % Testimonial.length]
    return [first, second]
  }

  return (
    <section className="mt-6 lg:mt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          
         
          <div className="hidden lg:flex flex-col">
      
            <div className="w-fit px-6 py-2 rounded-full bg-gray-100 text-sm font-medium mb-6">
              Testimonial
            </div>

         
            <h1 className="font-semibold text-[56px] leading-tight">
              Loved by<br />
              Businesses of All<br />
              Sizes
            </h1>

         
            <p className="text-gray-600 leading-relaxed mb-8">
              See how stores, brands, and retail teams use our<br />
              platform to simplify operations, boost sales, and scale<br />
              confidently.
            </p>

           
            <div className="flex gap-4">
              <Button 
                onClick={handlePrevious}
  className="rounded-full w-12 h-12 p-0 bg-black hover:bg-gray-800"              >
                <MoveLeft size={20} />
              </Button>
              <Button 
                onClick={handleNext}

                 className="rounded-full w-12 h-12 p-0 bg-indigo-600 hover:bg-indigo-700"
              >
                <MoveRight size={20} />
              </Button>
            </div>
          </div>



          {/* mob */}

         
          <div className="flex lg:hidden flex-col items-center text-center px-4">
          
            <div className="w-fit px-4 py-1.5 rounded-full bg-gray-100 text-xs font-medium mb-4">
              Testimonial
            </div>

      
            <h1 className="font-semibold text-[20px] leading-tight mb-3">
              Loved by Businesses of All Sizes
            </h1>

         
            <p className="text-gray-600 text-[13px] leading-relaxed mb-6">
              See how stores, brands, and retail teams use our platform to simplify operations, boost sales, and scale confidently.
            </p>

           
            <div className="bg-gray-50 rounded-3xl p-6 w-full mb-6">
          
              <h3 className="font-semibold text-base leading-snug mb-4 text-left">
                {Testimonial[currentIndex].title}
              </h3>

              <p className="text-gray-600 text-[13px] leading-relaxed mb-6 text-left">
                {Testimonial[currentIndex].description}
              </p>

         
              <div className="flex items-center gap-3">
                <Image 
                  src={Testimonial[currentIndex].profile}
                  alt={Testimonial[currentIndex].name}
                  height={56}
                  width={56}
                  className="rounded-xl h-14 w-14 object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-sm">{Testimonial[currentIndex].name}</p>
                  <p className="text-xs text-gray-500">{Testimonial[currentIndex].position}</p>
                </div>
              </div>
            </div>

     
            <div className="flex gap-3 justify-center">
              <Button 
                onClick={handlePrevious}
                className="rounded-full w-10 h-10 p-0 bg-black hover:bg-gray-800"
              >
                <MoveLeft size={18} />
              </Button>
              <Button 
                onClick={handleNext}
                className="rounded-full w-10 h-10 p-0 bg-indigo-600 hover:bg-indigo-700"
              >
                <MoveRight size={18} />
              </Button>
            </div>
          </div>

  
          <div className="hidden lg:flex gap-6 flex-1">
            {getDesktopTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 flex-1 flex flex-col"
              >
          
                <h3 className="text-xl font-semibold mb-4">
                  {testimonial.title}
                </h3>

            
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {testimonial.description}
                </p>

               {/* Profile Section */}
                <div className="flex items-center gap-4 mt-8">
                  <Image 
                    src={testimonial.profile}
                    alt={testimonial.name}
                    height={72}
                    width={72}
                    className="rounded-xl h-18 w-18 object-cover flex-shrink-0"
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