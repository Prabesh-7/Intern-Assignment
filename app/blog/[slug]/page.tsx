import React from "react";
import Navbar from "../../_components/navbar";
import SubscribeSection from "../../_components/subscribe-section";
import Footer from "../../_components/footer";
import Hero from "../[slug]/_components/Hero";
import Article from "../[slug]/_components/Article";




function page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Article />
      
       

        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
}

export default page;
