// import React from "react";
// import Image from "next/image";
// import forSellersCards from "../data/forSellersCards";
// import { Button } from "@/components/ui/button";


// export default function () {
//   return (
//     <section className="container mt-[106] w-[1728] mx-auto bg-[#F6F6F6]">
//       <div className="flex">
//         <h1 className='text-5xl font-semibold [font-family:"Google Sans Flex"]'>
//           Built for Every Type <br />
//           of seller
//         </h1>
        

//         <p className="">
//           Whether you sell online, in-store, or across multiple channels, our
//           platform adapts to the way you run your business.
//         </p>
//       </div>

//       <div>
//         <Image
//           src="/images/Seller.jpg"
//           alt="Hero Image"
//           width={647}
//           height={394}
//         />
//       </div>


//            <div className="cards grid ">
//         {forSellersCards.map((card, index) => (
//           <div className="card h-[189] w-[308] border-2" key={index}>
//             <h1>{card.title}</h1>
//             <p>{card.description}</p>

         
//               <Button>{card.buttonText}</Button>
          
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useState } from "react";
import Image from "next/image";
import forSellersCards from "../data/forSellersCards";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";



export default function ForSellers() {
  const [ReadIndex, setReadIndex] = useState<number | null>(null);
  return (
    <section className="bg-[#F6F6F6] py-20 mt-22">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* TOP ROW */}
        <div className="flex justify-between items-start mb-16">
          <h1 className='text-5xl font-semibold leading-tight'>
            Built for Every Type <br />
            of Seller
          </h1>

          <p className="max-w-md text-gray-600 text-lg">
            Whether you sell online, in-store, or across multiple channels, our
            platform adapts to the way you run your business.
          </p>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex gap-12">

          {/* LEFT IMAGE */}
          <div className="flex-shrink-0">
            <Image
              src="/images/Seller.jpg"
              alt="Seller"
              width={647}
              height={394}
              className="rounded-lg object-cover"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {forSellersCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition"
              >
              

                <h3 className="text-lg font-semibold mb-2 flex gap-4 ">
                   <card.icon /> {card.title}
                </h3>

                <p className={`text-sm text-gray-600 mb-4 ${ReadIndex===index?"":"line-clamp-4"}`}>
                  {card.description}
                </p>

                <Button variant="link" className="text-logo-text p-0" onClick={()=> setReadIndex(index)}>
                  Read More<MoveUpRight/> 
                </Button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
