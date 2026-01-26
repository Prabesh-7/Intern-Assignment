import React from 'react'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'


export default function TestimonialSection() {
  return (

    <section className="mt-28">

      
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex ">
          <h1 className="w-fit px-6 py-2 rounded-full bg-gray-100 text-sm font-medium">
            Testimonial
          </h1>
        </div>

        <div className='flex flex-col mt-4'>
          <div><h1 className='font-semibold text-[56px]'>Loved by<br/> Businesses of All <br/>Sizes</h1></div>

        <div className='mt-6'><p>See how stores, brands, and retail teams use our<br/> platform to simplify operations, boost sales, and scale<br/> confidently.</p></div>


        </div>

        <div className='flex gap-6 mt-6'>
          <Button className='rounded-full w-12 h-12'><MoveLeft/></Button>
          <Button className='rounded-full w-12 h-12'><MoveRight/></Button>
        </div>

        


    </div>
    </section>
  )
}
