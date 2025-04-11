
import { Button } from "@/components/ui/button";

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <div className="magic-card group hover:-translate-y-2 transition-transform duration-300">
    <div className="text-3xl text-magic-gold mb-4">{icon}</div>
    <h3 className="text-xl font-serif font-semibold text-magic-gold mb-3">{title}</h3>
    <p className="text-magic-light/80 mb-6">{description}</p>
    <Button asChild variant="link" className="text-magic-gold p-0 hover:text-magic-gold/80">
      <a href="#contact">Book Now</a>
    </Button>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Corporate Events",
      description: "Engage your audience with mind-blowing performances that will make your event memorable and talked about.",
      icon: "🏢",
    },
    {
      title: "Weddings & Parties",
      description: "Add a magical touch to your special day with close-up magic and mesmerizing performances for your guests.",
      icon: "💍",
    },
    {
      title: "Stage Shows",
      description: "Full-scale illusion shows combining mentalism, sleight of hand, and theatrical elements.",
      icon: "🎭",
    },
    {
      title: "Virtual Performances",
      description: "Interactive digital shows that bring magic directly to your screen with full audience participation.",
      icon: "💻",
    },
  ];

  return (
    <section id="services" className="py-20 bg-magic-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          Magical <span className="gold-gradient">Services</span>
        </h2>
        <p className="text-magic-light/80 text-center max-w-2xl mx-auto mb-12">
          From intimate gatherings to large corporate events, Shyam Joshi offers tailored magical 
          experiences that will leave your guests amazed and entertained.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-magic-gold hover:bg-magic-gold/80 text-magic-dark font-medium px-8">
            <a href="#contact">Request Custom Package</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
