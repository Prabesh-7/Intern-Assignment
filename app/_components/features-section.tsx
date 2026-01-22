import React from "react";

export default function () {
  return (
    <section>
      <div className="container mx-auto mt-18">
        <div className="flex justify-center">
          <h1 className="w-fit px-6 py-2 rounded-full bg-gray-100">Key Features</h1>
        </div>
        <div className="mt-4 flex justify-center">
          <h1 className="font-semibold text-5xl text-center">
            Everything You Need to Run
            <br />
            Your Store Smoothly
          </h1>
        </div>

        <div className="mt-4 flex justify-center text-center">
          <p>Powerful tools that help you manage products, orders, shipping, payments, and<br/> customers — all from one simple dashboard.</p>
        </div>


        <div className="mt-12 flex justify-center">
          <ul className="flex flex-row gap-8 ">
            <li>Product & Inventory Management</li>
            <li>Shipping Integration</li>
            <li>POS Integration</li>
            <li>Order Management</li>
          </ul>

        </div>

      
      </div>
    </section>
  );
}
