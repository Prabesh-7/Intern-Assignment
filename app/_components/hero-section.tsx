import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { ArrowRight, Video } from 'lucide-react'

export default function () {
  return (

    <section>
      {/* <div className='container py-26 px-90'> */}
      <div className='container mx-auto'>

        <div className='flex justify-center flex-col items-center gap-4 mb-10'>
        <h1 className='text-5xl font-semibold [font-family:"Google Sans Flex"]'>Run your whole eCommerce<br/>
         business from one dashboard.</h1>

        <p className='font-medium'>Manage your products, orders, shipping, POS, discounts, and payouts seamlessly
          <br/> in a single SaaS platform, simplifying operations and saving you time.</p> 
        </div>



   

   

        {/* Buttons Section */}
      <div className='flex gap-1 justify-center mt-8'>
        <Button variant="default" className="bg-primary h-12 text-white">Start Free Trial<ArrowRight/></Button>
        <Button variant="outline" className=' h-12 text-navbar-text'><Video/>Watch Demo</Button>

        
      
      </div >

      <div className='text-center mt-4'>
      <p>Secure setup · Free 14-day trial, no card.</p>
      </div>

         {/* Hero Image Section */}
       <div className='flex justify-center mt-12'>     
        <Image
        src="/images/hero.png"
        alt="Hero Image"
        width={1077}
        height={737}  
        />
      </div>

      <div className='text-center mt-8 font-semibold font-[Google Sans Flex]'>
        <p>Trusted by Businesses Worldwide</p>
      </div>

      <div className='flex justify-center gap-8 mt-8  '>
        <Image
        src="/images/dressnepal.png"
        alt="Logos Image"
        width={164}
        height={35} 
        className='object-contain' 
        />

        <Image
        src="/images/yeshelpinghand.png"
        alt="Logos Image"
        width={241}
        height={41} 
         className='object-contain'  
        />

        <Image
        src="/images/organiccraft.png"
        alt="Logos Image"
        width={191}
        height={41} 
         className='object-contain'  
        />

        <Image
        src="/images/giftypoint.png"
        alt="Logos Image"
        width={131}
        height={53} 
         className='object-contain'  
        />

        <Image
        src="/images/naturalwears.jpg"
        alt="Logos Image"
        width={160}
        height={31}  
         className='object-contain' 
        />

        <Image
        src="/images/aicen.png"
        alt="Logos Image"
        width={144}
        height={53} 
         className='object-contain'  
        />
      </div>

      

      </div>



      


    </section>
  )
}
