
import { Instagram, Youtube, Mail } from "lucide-react";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a
        href="https://www.instagram.com/djshammy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-magic-light hover:text-magic-gold transition-transform duration-300 hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>
      <a
        href="https://youtube.com/@shyammagic003"
        target="_blank"
        rel="noopener noreferrer"
        className="text-magic-light hover:text-magic-gold transition-transform duration-300 hover:scale-110"
        aria-label="YouTube"
      >
        <Youtube size={24} />
      </a>
      <a
        href="mailto:Djshyam03@gmail.com"
        className="text-magic-light hover:text-magic-gold transition-transform duration-300 hover:scale-110"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
