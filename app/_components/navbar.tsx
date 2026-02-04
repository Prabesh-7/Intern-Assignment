"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, LogIn, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto py-4  sticky top-0 z-50">
        <div className="  flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 px-2">
            <div className="w-6 h-6 bg-indigo-600"></div>
            <span className="text-logo-text font-medium">Logo goes Here</span>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <Link href="/" className="text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 text-navbar-text"
              >
                Features <ChevronDown className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-navbar-text">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-navbar-text">
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 text-navbar-text"
              >
                Resources <ChevronDown className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-navbar-text">
                Contact
              </Link>
            </li>
          </ul>

          {/* Auth Buttons (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
            variant = "default"
            className="bg-button-primary text-white">
              <LogIn className="mr-1" /> Login
            </Button>
            <Button
              variant="outline"
              className="bg-white border-gray-300 text-gray-700"
            >
              Register <ArrowRight className="ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden px-2" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-4 flex flex-col gap-4 border-t pt-4 px-2">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Features
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Pricing
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Solutions
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Resources
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <div className="flex flex-row gap-2 pt-2">
              <Button
              
              className="bg-button-primary text-white">
                <LogIn className="mr-1" /> Login
              </Button>
              <Button
                variant="outline"
                className="bg-white border-gray-300 text-gray-700"
              >
                Get Started <ArrowRight className="ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
