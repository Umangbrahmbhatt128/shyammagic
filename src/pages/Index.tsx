
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { useEffect, useState } from "react";

// Create card component for floating animations
const FloatingCard = ({ src, className, translateY, delay }: { 
  src: string; 
  className: string; 
  translateY: string;
  delay: string;
}) => {
  return (
    <div 
      className={`fixed pointer-events-none z-0 ${className}`} 
      style={{ 
        transform: translateY,
        animation: `float 6s ease-in-out infinite ${delay}`,
        opacity: 0.15
      }}
    >
      <img src={src} alt="" className="w-full h-full object-contain" />
    </div>
  );
};

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardImages = [
    "/lovable-uploads/b1a4214b-05d2-460f-89ed-22501deb646d.png",
    "/lovable-uploads/2e413628-1b43-4886-9ffa-2fd9f212626f.png",
    "/lovable-uploads/951208cd-1ecd-44dd-aabd-05e859317986.png",
    "/lovable-uploads/3c2aadb8-dcd8-4092-b110-79f2d24d4a5c.png",
    "/lovable-uploads/01a53bdf-9e00-43d3-8506-38a6a1722a9c.png",
  ];

  return (
    <div className="min-h-screen bg-magic-dark text-magic-light overflow-hidden relative">
      {/* Floating card images */}
      <FloatingCard 
        src={cardImages[0]} 
        className="top-[15%] -right-[20%] max-w-[200px]" 
        translateY={`translateY(${scrollPosition * 0.05}px)`}
        delay="0s"
      />
      <FloatingCard 
        src={cardImages[1]}
        className="bottom-[20%] -left-[15%] max-w-[180px]" 
        translateY={`translateY(${-scrollPosition * 0.03}px)`}
        delay="0.5s" 
      />
      <FloatingCard 
        src={cardImages[2]}
        className="top-[40%] -left-[10%] max-w-[150px] rotate-12" 
        translateY={`translateY(${scrollPosition * 0.02}px)`}
        delay="1s"
      />
      <FloatingCard 
        src={cardImages[3]}
        className="bottom-[30%] -right-[10%] max-w-[160px] -rotate-6" 
        translateY={`translateY(${-scrollPosition * 0.04}px)`}
        delay="1.5s"
      />
      <FloatingCard 
        src={cardImages[4]}
        className="top-[60%] left-[5%] max-w-[140px] rotate-15" 
        translateY={`translateY(${scrollPosition * 0.03}px)`}
        delay="2s"
      />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
