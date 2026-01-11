import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import MomentsSection from "@/components/MomentsSection";
import SpecsSection from "@/components/SpecsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="philosophy">
        <PhilosophySection />
      </section>
      <section id="moments">
        <MomentsSection />
      </section>
      <section id="specs">
        <SpecsSection />
      </section>
      <section id="reserve">
        <CTASection />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
