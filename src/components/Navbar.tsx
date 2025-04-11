
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DemoForm from "@/components/contact/DemoForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-magic-dark/95 backdrop-blur-md py-2 shadow-lg" : "bg-magic-dark/60 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img 
            src="/lovable-uploads/c49b4972-07f9-4ab2-bd1f-0664353b8ec8.png" 
            alt="Magician Logo" 
            className="h-10 sm:h-12 object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-magic-light hover:text-magic-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="bg-magic-gold hover:bg-magic-gold/80 text-magic-dark font-medium">
                FREE DEMO
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-magic-dark border-magic-gold/20">
              <DemoForm />
            </DialogContent>
          </Dialog>
          
          <Button asChild variant="outline" className="border-magic-gold text-magic-gold hover:bg-magic-gold/10">
            <a href="#contact">Book Now</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-magic-light hover:text-magic-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-magic-dark/95 backdrop-blur-md py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-magic-light hover:text-magic-gold transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="bg-magic-gold hover:bg-magic-gold/80 text-magic-dark font-medium w-full">
                  FREE DEMO
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-magic-dark border-magic-gold/20">
                <DemoForm />
              </DialogContent>
            </Dialog>
            
            <Button asChild variant="outline" className="border-magic-gold text-magic-gold hover:bg-magic-gold/10 w-full">
              <a href="#contact" onClick={() => setIsOpen(false)}>Book Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
