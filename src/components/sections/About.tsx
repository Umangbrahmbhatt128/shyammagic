
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-magic-dark to-magic-dark/95">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          About <span className="gold-gradient">Shyam Joshi</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-magic-gold mb-4">
              Magician & Mentalist
            </h3>
            
            <p className="text-magic-light/90 mb-6">
              With over 5 years of experience, Shyam Joshi has mastered the art of close-up magic, 
              mentalism, and stage illusions. His performances blend traditional sleight of hand with 
              modern psychological techniques, creating a unique experience that leaves audiences 
              amazed and mystified.
            </p>
            
            <p className="text-magic-light/90 mb-6">
              Shyam's journey began with a simple card trick at the age of 15, which quickly evolved into 
              a passion for the impossible. Today, he performs at corporate events, private parties, and 
              weddings across India, bringing wonder and astonishment to every occasion.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-magic-dark/50 backdrop-blur-sm border border-magic-gold/20 rounded-lg px-4 py-2">
                <span className="text-magic-gold font-medium">Close-up Magic</span>
              </div>
              <div className="bg-magic-dark/50 backdrop-blur-sm border border-magic-gold/20 rounded-lg px-4 py-2">
                <span className="text-magic-gold font-medium">Card Manipulation</span>
              </div>
              <div className="bg-magic-dark/50 backdrop-blur-sm border border-magic-gold/20 rounded-lg px-4 py-2">
                <span className="text-magic-gold font-medium">Mentalism</span>
              </div>
              <div className="bg-magic-dark/50 backdrop-blur-sm border border-magic-gold/20 rounded-lg px-4 py-2">
                <span className="text-magic-gold font-medium">Stage Illusions</span>
              </div>
            </div>
            
            <Button asChild className="bg-magic-gold hover:bg-magic-gold/80 text-magic-dark font-medium">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-magic-gold rounded-lg"></div>
              <img
                src="/lovable-uploads/17138352-1d31-4640-bbfc-b7f0b74eb310.png"
                alt="Shyam Joshi performing magic"
                className="rounded-lg w-full h-auto object-cover z-10 relative"
              />
              <div className="absolute -bottom-4 -left-4 flex items-center justify-center gap-2 bg-magic-dark border border-magic-gold/30 p-3 rounded-lg">
                <span className="card-suit text-2xl">♠</span>
                <span className="card-suit text-2xl">♥</span>
                <span className="card-suit text-2xl">♣</span>
                <span className="card-suit text-2xl">♦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
