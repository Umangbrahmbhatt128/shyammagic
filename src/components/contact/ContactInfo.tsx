
import { Phone, Mail, MapPin } from "lucide-react";
import SocialLinks from "../SocialLinks";

const ContactInfo = () => {
  return (
    <div className="magic-card h-full">
      <h3 className="font-serif text-magic-gold text-2xl font-semibold mb-4">
        Contact Information
      </h3>
      
      <p className="text-magic-light/80 mb-8">
        Ready to add magic to your event? Fill out the form or reach out directly 
        using the contact information below.
      </p>
      
      <div className="space-y-6 mb-8">
        <div className="flex items-start gap-3">
          <Mail className="text-magic-gold mt-1" size={20} />
          <div>
            <h4 className="font-medium text-magic-gold mb-1">Email</h4>
            <a 
              href="mailto:Djshyam03@gmail.com"
              className="text-magic-light hover:text-magic-gold transition-colors"
            >
              Djshyam03@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Phone className="text-magic-gold mt-1" size={20} />
          <div>
            <h4 className="font-medium text-magic-gold mb-1">Phone</h4>
            <a 
              href="tel:+918200106575"
              className="text-magic-light hover:text-magic-gold transition-colors block"
            >
              +91 8200 106 575
            </a>
            <a 
              href="sms:+918200106575"
              className="text-magic-light/80 hover:text-magic-gold transition-colors text-sm"
            >
              Send SMS
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin className="text-magic-gold mt-1" size={20} />
          <div>
            <h4 className="font-medium text-magic-gold mb-1">Performance Areas</h4>
            <p className="text-magic-light/80">
              Available for bookings across all major cities in India
            </p>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-magic-gold mb-3">Social Media</h4>
          <SocialLinks />
        </div>
      </div>
      
      <div className="flex space-x-3 items-center">
        <span className="card-suit text-2xl">♣</span>
        <span className="card-suit text-2xl">♥</span>
        <span className="card-suit text-2xl">♠</span>
        <span className="card-suit text-2xl">♦</span>
      </div>
    </div>
  );
};

export default ContactInfo;
