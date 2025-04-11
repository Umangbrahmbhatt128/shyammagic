
import { Button } from "@/components/ui/button";
import SocialLinks from "../SocialLinks";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/eb93de90-1f18-44e7-bc91-bad19da284fe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      <div className="absolute inset-0 hero-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-shadow mb-4 font-serif animate-fade-in" style={{animationDelay: "0.2s"}}>
            <span className="text-white">The Magic of</span>{" "}
            <span className="text-magic-gold">Illusion</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-magic-light/80 animate-fade-in" style={{animationDelay: "0.4s"}}>
            Mind-blowing illusions and mentalism for modern audiences
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <Button asChild size="lg" className="bg-magic-gold hover:bg-magic-gold/80 text-magic-dark font-medium px-8 py-6">
              <a href="#contact">Book Now</a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-magic-gold text-magic-gold hover:bg-magic-gold/10 px-8 py-6">
              <a href="#gallery">Watch Demo</a>
            </Button>
          </div>
          
          <div className="mt-12 animate-fade-in" style={{animationDelay: "0.8s"}}>
            <SocialLinks />
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <a href="#about" className="text-magic-light/60 hover:text-magic-gold transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
