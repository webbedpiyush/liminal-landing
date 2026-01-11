import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComparisonSection from "@/components/ComparisonSection";
import MomentsSection from "@/components/MomentsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="compare">
        <ComparisonSection />
      </section>
      <section id="moments">
        <MomentsSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="preorder">
        <CTASection />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
