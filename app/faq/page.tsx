import React from "react";
import Navbar from "../_components/navbar";
import SubscribeSection from "../_components/subscribe-section";
import Footer from "../_components/footer";
import Hero from "../faq/hero";
import Faq from "../faq/faq";
import FeatureOverview from "../features/_components/services";



function page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Faq />
      
       

        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
}

export default page;
