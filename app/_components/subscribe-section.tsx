// import { Button } from "@/components/ui/button";
// import React from "react";

// export default function () {
//   return (
//     <section className="mt-8 mb-8">
//       <div className="container mx-auto flex gap-80 ">


//         <div>
//           <h1 className="text-[32px] font-semibold tracking-normal leading-[100%] "> Join our newsletter</h1>
//           <p className="text-base font-normal leading-[150%] tracking-normal mt-4">
//             Sign up today Writing copy is time-consuming and difficult.<br/>
//             Headlime's artificial intelligence can take your thoughts.
//           </p>
//         </div>



       
//           <div className=" border-2 border-gray-100 h-16 w-126 ">
//             <input
//               type="email"
//               placeholder="Enter email address"
//               className="   text-gray-700 h-16 w-40 pl-5 "
//             />

//             <button className="ml-48 bg-emerald-400 text-white font-medium rounded-lg w-35 h-13">
//               Subscribe
//             </button>
//           </div>

//       </div>
//     </section>
//   );
// }



import React from "react";

export default function Newsletter() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Join our newsletter
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Sign up today Writing copy is time-consuming and difficult.
              <br className="hidden md:block" />
              Headlime's artificial intelligence can take your thoughts.
            </p>
          </div>

          {/* Right Input Form */}
          <div className="flex-1 max-w-md w-full">
            <div className="flex items-stretch border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 px-5 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none min-w-0"
              />
              <button className="px-8 bg-emerald-400 text-white font-medium text-sm hover:bg-emerald-500 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}