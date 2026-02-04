import Image from "next/image";
import { Blog } from "../data/Blog";

export default function () {
  return (
    <section className=" bg-bg-secondary ">
      <div className="container mx-auto mt-12 lg:mt-24  ">
        {/* Header */}
        <div className="flex justify-center ">
          <h1 className="w-fit px-6 py-2 rounded-full bg-white text-sm font-medium mt-10 lg:mt-20">
            Insights
          </h1>
        </div>

        <div className="flex flex-col items-center text-center mt-4 px-4">
          <div>
            <h1 className="font-semibold text-3xl lg:text-5xl">From Our Blog</h1>
          </div>

          <div>
            <p className="font-light text-base lg:text-xl align-center mt-4 lg:mt-6">
              Practical tips, insights, and guides to help you grow your online
              and
              <br className="hidden lg:block" /> retail business.
            </p>
          </div>
        </div>

        {/* RIGHT CARDS */}

        <div className="flex gap-4 lg:gap-6 flex-1 mt-6 lg:mt-2 py-2 px-4 lg:px-2 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
          {Blog.map((blog, index) => (
            <div key={index} className="bg-white rounded-2xl flex-shrink-0 w-[280px] lg:w-auto lg:flex-1 mb-6 lg:mb-25 ">
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.fullname}
                  height={284}
                  width={426}
                  className="w-full h-[200px] lg:h-[284px] object-cover rounded-t-2xl z-50"
                />
                
                {/* Stay In Sync Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-transparent text-white text-xs rounded-full backdrop-blur-sm z-10">
                    Stay In Sync
                  </span>
                </div>
              </div>



              <div className="px-4 lg:px-6 pb-4 lg:pb-6">


                    {/* Title */}
              <h3 className="text-base lg:text-[18px] font-semibold mt-4 lg:mt-6 whitespace-pre-line">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm lg:text-base mt-3 lg:mt-4 font- whitespace-pre-line">
                {blog.description}
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-3 lg:gap-5 mt-4 lg:mt-6">
                <Image
                  src={blog.profile}
                  alt={blog.fullname}
                  height={100}
                  width={100}
                  className="rounded-full h-12 w-12 lg:h-18 lg:w-18 object-cover"
                />

                <div className="flex flex-col">
                  <h1 className="text-sm lg:text-base font-medium">{blog.fullname}</h1>

                  <div className="flex gap-2">
                    <p className="font-semibold text-xs lg:text-sm">{blog.date}</p>
                    <p className="text-xs text-gray-500">
                      <span className="">·</span> {blog.readTime}
                    </p>
                  </div>
                </div>
              </div>
              </div>

          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}