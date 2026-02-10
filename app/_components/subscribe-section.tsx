"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  function handleSubscribe() {
    if (!email.trim()) {
      setMessage("Please enter a valid email address.");
      setShow(true);
    } else {
      localStorage.setItem("email", email.toString());
      setMessage(" Email Subscribed successfully!");
      setShow(true);
      setEmail("");
    }
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
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

          <div className="flex-1 max-w-md w-full">
            <div className="flex items-stretch border border-gray-200 rounded-lg overflow-hidden bg-white relative">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none min-w-0"
              />

              <Button
                onClick={handleSubscribe}
                className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer w-20 sm:w-34"
                variant = 'secondary'
              >
                Subscribe
              </Button>
            </div>
            {message && show && (
              <p
                className={`${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
