import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import ValueProps from "@/components/ValueProps";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhatYouGet />
        <ValueProps />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
