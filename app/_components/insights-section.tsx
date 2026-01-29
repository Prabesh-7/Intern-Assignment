import React from "react";
import { Integration } from "../data/Integration";
import Image from "next/image";
import { Blog } from "../data/Blog";

export default function () {
  return (
    <section className=" bg-[#F6F6F6] ">
      <div className="container mx-auto mt-24  ">
        {/* Header */}
        <div className="flex justify-center ">
          <h1 className="w-fit px-6 py-2 rounded-full bg-white text-sm font-medium mt-20">
            Insights
          </h1>
        </div>

        <div className="flex flex-col items-center text-center mt-4">
          <div>
            <h1 className="font-semibold text-5xl">From Our Blog</h1>
          </div>

          <div>
            <p className="font-light text-xl align-center mt-6">
              Practical tips, insights, and guides to help you grow your online
              and
              <br /> retail business.
            </p>
          </div>
        </div>

        {/* RIGHT CARDS */}

        <div className="flex gap-6 flex-1 mt-2">
          {Blog.map((blog, index) => (
            <div key={index} className="bg-white rounded-2xl  flex-1 mb-25 ">
              <div>
                <Image
                  src={blog.image}
                  alt={blog.fullname}
                  height={284}
                  width={426}
                  className="w-full h-[284]"
                />
              </div>



              <div>


                    {/* Title */}
              <h3 className="text-[18px]  font-semibold mt-4 whitespace-pre-line">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 font- whitespace-pre-line">
                {blog.description}
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-5 mt-4">
                <Image
                  src={blog.profile}
                  alt={blog.fullname}
                  height={100}
                  width={100}
                  className="rounded-full h-18 w-18 object-cover"
                />

                <div className="flex flex-col">
                  <h1>{blog.fullname}</h1>

                  <div className="flex gap-2">
                    <p className="font-semibold text-sm">{blog.date}</p>
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
