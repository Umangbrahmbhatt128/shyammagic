
import { Instagram, Mail, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-magic-dark border-t border-magic-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-magic-gold text-2xl font-bold">Shyam Joshi</h3>
            <p className="text-magic-light/80 mt-2 text-center md:text-left">
              Magician & Mentalist
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.instagram.com/djshammy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-magic-light hover:text-magic-gold transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://youtube.com/@shyammagic003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-magic-light hover:text-magic-gold transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="mailto:Djshyam03@gmail.com" 
                className="text-magic-light hover:text-magic-gold transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-magic-gold font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-magic-light/80 hover:text-magic-gold transition-colors">
                Home
              </a>
              <a href="#about" className="text-magic-light/80 hover:text-magic-gold transition-colors">
                About
              </a>
              <a href="#services" className="text-magic-light/80 hover:text-magic-gold transition-colors">
                Services
              </a>
              <a href="#gallery" className="text-magic-light/80 hover:text-magic-gold transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-magic-light/80 hover:text-magic-gold transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-magic-gold font-semibold mb-4">Contact</h4>
            <a href="mailto:Djshyam03@gmail.com" className="text-magic-light/80 hover:text-magic-gold transition-colors">
              Djshyam03@gmail.com
            </a>
            <div className="mt-4 text-magic-light/60 text-sm text-center md:text-left">
              <p>Available for bookings all across India</p>
              <p>Corporate events, weddings, private parties & more</p>
            </div>
          </div>
        </div>

        <div className="border-t border-magic-gold/20 mt-8 pt-8 text-center text-magic-light/60 text-sm">
          <p>&copy; {currentYear} Shyam Joshi. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            <span className="card-suit">♣</span>
            <span className="card-suit">♥</span>
            <span className="card-suit">♠</span>
            <span className="card-suit">♦</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
