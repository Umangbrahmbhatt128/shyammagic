
import ContactInfo from "../contact/ContactInfo";
import ContactForm from "../contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-magic-dark to-black relative overflow-hidden">
      {/* Background playing cards */}
      <div className="absolute -top-20 -left-20 opacity-5 rotate-15 w-64 h-64 animate-float" style={{animationDelay: "0.5s"}}>
        <img src="/lovable-uploads/951208cd-1ecd-44dd-aabd-05e859317986.png" alt="" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 -rotate-12 w-48 h-48 animate-float" style={{animationDelay: "1.2s"}}>
        <img src="/lovable-uploads/2e413628-1b43-4886-9ffa-2fd9f212626f.png" alt="" />
      </div>
      <div className="absolute top-1/3 right-0 opacity-5 rotate-6 w-40 h-40 animate-float" style={{animationDelay: "0.8s"}}>
        <img src="/lovable-uploads/3c2aadb8-dcd8-4092-b110-79f2d24d4a5c.png" alt="" />
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          Book <span className="gold-gradient">Your Event</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <ContactInfo />
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
