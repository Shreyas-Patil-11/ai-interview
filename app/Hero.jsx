
import Features from "./Features";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import StepSection from "./StepSection";

const Hero = () => {

  return (
    <div className="relative bg-gray-100 pt-20 w-full">
      <HeroSection />
      <StepSection />
      <Features />
      <Footer />
    </div>
  );
};

export default Hero;
