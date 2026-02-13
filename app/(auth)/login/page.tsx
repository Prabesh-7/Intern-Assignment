import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='container mx-auto overflow-y-hidden'>

        <div className='flex justify-center items-center '>

            <div className='bg-primary_brand flex flex-col w-[640px] h-[837px] mt-[140px] '>

                

               <div className=' px-12 mt-25'>
                 <h2 className='text-[56px] font-bold text-white_brand leading-[120%] tracking-normal'>Manage your business with confidence</h2>
                 <p className='text-[24px] font-normal leading-[150%] tracking-normal text-white_brand mt-8'>Experience a secure, seamless platform that keeps every part of your business running smoothly.</p>
                
               </div>

               <div>


                     <Image
                    src = '/images/login.png'
                     alt='login image'
                     width={372}
                     height={458}
                     
                     />
               </div>
            
               
              


            </div>


            <div>
                <h1 className='text-2xl font-bold'>Login right</h1>


            </div>







        </div>
    
      
    </div>
  )
}
