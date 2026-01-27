import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ManifestoSection from "@/components/ManifestoSection";
import PhilosophySection from "@/components/PhilosophySection";
import B2CFeaturesSection from "@/components/B2CFeaturesSection";
import MomentsSection from "@/components/MomentsSection";
import B2BFeaturesSection from "@/components/B2BFeaturesSection";
import SpecsSection from "@/components/SpecsSection";
import TechArchitectureSection from "@/components/TechArchitectureSection";
import CompetitiveSection from "@/components/CompetitiveSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="manifesto">
        <ManifestoSection />
      </section>
      <section id="philosophy">
        <PhilosophySection />
      </section>
      <section id="dashing">
        <B2CFeaturesSection />
      </section>
      <section id="moments">
        <MomentsSection />
      </section>
      <section id="project67">
        <B2BFeaturesSection />
      </section>
      <section id="specs">
        <SpecsSection />
      </section>
      <section id="sdk">
        <TechArchitectureSection />
      </section>
      <section id="compare">
        <CompetitiveSection />
      </section>
      <section id="reserve">
        <CTASection />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
