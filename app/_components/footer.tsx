import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';


export default function Footer() {


  
  return (
    <footer className="bg-[#1a1d3d] text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-5  gap-12 mb-12">






          {/* Brand Column */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Logo goes here</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Powering modern commerce — online, offline, and everything in between.
            </p>
            <div>
              <p className="text-sm mb-3">Follow us on</p>

              <div className="flex gap-3 ">
               <Facebook/>
              <Instagram/>
              <Twitter/>
              <Linkedin/>


              </div>





              



              
     


            
            </div>
          </div>







          {/* Product Column */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 text-sm">Features</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Integrations</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Dashboard Preview</a></li>
              <li><a href="#" className="text-gray-300 text-sm">POS Sync</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Shipping Tools</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Getting Started Guide</a></li>
              <li><a href="#" className="text-gray-300 text-smn">Blog</a></li>
              <li><a href="#" className="text-gray-300 text-sm">API Documentation</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Release Notes</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Tutorials</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Partners</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Press Kit</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 text-sm">FAQs</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Community Forum</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Report an Issue</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Request a Feature</a></li>
              <li><a href="#" className="text-gray-300 text-sm">Live Chat</a></li>
            </ul>
          </div>
        </div>







        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Yhhit Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Data Protection</a>
            </div>
          </div>
        </div>

        

     
      </div>
    </footer>
  );
}