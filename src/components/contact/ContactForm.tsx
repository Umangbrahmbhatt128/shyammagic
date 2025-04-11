
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Booking Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Event Type: ${formData.eventType}\n` +
      `Event Date: ${formData.eventDate}\n\n` +
      `Message: ${formData.message}`
    );
    
    // Open email client with pre-filled data
    window.open(`mailto:Djshyam03@gmail.com?subject=${subject}&body=${body}`);
    
    // Create SMS link for mobile devices
    const smsBody = `Booking Request: Name: ${formData.name}, Phone: ${formData.phone}, Event: ${formData.eventType}, Date: ${formData.eventDate}`;
    const smsLink = `sms:+918200106575?body=${encodeURIComponent(smsBody)}`;
    
    // Open SMS link in new window
    window.open(smsLink, "_blank");
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Request Sent",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="magic-card relative overflow-hidden"
    >
      {/* Background card images */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5 rotate-45">
        <img src="/lovable-uploads/3c2aadb8-dcd8-4092-b110-79f2d24d4a5c.png" alt="" />
      </div>
      <div className="absolute bottom-10 left-0 w-40 h-40 opacity-5 -rotate-12">
        <img src="/lovable-uploads/951208cd-1ecd-44dd-aabd-05e859317986.png" alt="" />
      </div>
      <div className="absolute -top-10 -left-10 w-32 h-32 opacity-5 rotate-12">
        <img src="/lovable-uploads/2e413628-1b43-4886-9ffa-2fd9f212626f.png" alt="" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-magic-gold mb-2 font-medium">
            Your Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/5 border-magic-gold/20 focus:border-magic-gold text-magic-light"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-magic-gold mb-2 font-medium">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/5 border-magic-gold/20 focus:border-magic-gold text-magic-light"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-magic-gold mb-2 font-medium">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-white/5 border-magic-gold/20 focus:border-magic-gold text-magic-light"
            placeholder="+91 98765 43210"
          />
        </div>
        
        <div>
          <label htmlFor="eventType" className="block text-magic-gold mb-2 font-medium">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md bg-white/5 border border-magic-gold/20 focus:border-magic-gold text-magic-light"
          >
            <option value="" disabled>Select Event Type</option>
            <option value="corporate">Corporate Event</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday Party</option>
            <option value="private">Private Party</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="eventDate" className="block text-magic-gold mb-2 font-medium">
            Event Date
          </label>
          <Input
            id="eventDate"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            className="bg-white/5 border-magic-gold/20 focus:border-magic-gold text-magic-light"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-magic-gold mb-2 font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="bg-white/5 border-magic-gold/20 focus:border-magic-gold text-magic-light min-h-[120px]"
          placeholder="Tell us about your event and your requirements..."
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-magic-gold hover:bg-magic-gold/80 text-magic-dark font-medium"
        disabled={isSubmitting}
      >
        <Sparkles className="mr-2" size={18} />
        {isSubmitting ? "Sending..." : "Book Now"}
      </Button>
      
      {/* Removed email/SMS notification text as requested */}
    </form>
  );
};

export default ContactForm;
