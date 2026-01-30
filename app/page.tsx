import Navbar from "./_components/navbar";
import HeroSection from "./_components/hero-section";
import AnalyticsSection from "./_components/analytics-section";
import FeaturesSection from "./_components/features-section";
import ForSellersSection from "./_components/for-sellers-section";
import InsightsSection from "./_components/insights-section";
import IntegrationsSection from "./_components/integrations-section";
import TestimonialSection from "./_components/testimonial-section";
import FaqSection from "./_components/faq-section";
import SubscribeSection from "./_components/subscribe-section";
import Footer from "./_components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ForSellersSection />
        <FeaturesSection />
        <AnalyticsSection />
        <IntegrationsSection />

        <TestimonialSection />
        <InsightsSection />
        <FaqSection />
        <SubscribeSection />
      </main>
      <Footer/>
    </>
  );
}
