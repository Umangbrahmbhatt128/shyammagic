
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { DialogClose } from "@/components/ui/dialog";

interface DemoFormData {
  name: string;
  phone: string;
  address: string;
  dateTime: string;
}

const DemoForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    phone: "",
    address: "",
    dateTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate phone number
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Send email
    const subject = encodeURIComponent(`FREE DEMO Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Address: ${formData.address}\n` +
      `Date/Time: ${formData.dateTime}\n\n` +
      `This is a request for a free demo.`
    );
    
    // Open email client with pre-filled data
    window.open(`mailto:Djshyam03@gmail.com?subject=${subject}&body=${body}`);
    
    // Create clickable SMS link for mobile devices
    const smsBody = `FREE DEMO Request: Name: ${formData.name}, Phone: ${formData.phone}, Address: ${formData.address}, Date/Time: ${formData.dateTime}`;
    const smsLink = `sms:+918200106575?body=${encodeURIComponent(smsBody)}`;
    
    // Open SMS link in new window
    window.open(smsLink, "_blank");
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Demo Request Sent",
        description: "Thank you! Your free demo request has been sent. We'll contact you shortly.",
      });
      setFormData({
        name: "",
        phone: "",
        address: "",
        dateTime: "",
      });
    }, 1000);
  };

  return (
    <div className="p-2 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 opacity-5 rotate-15 w-48 h-48 z-0">
        <img src="/lovable-uploads/951208cd-1ecd-44dd-aabd-05e859317986.png" alt="" />
      </div>
      <div className="absolute bottom-0 -left-10 opacity-5 -rotate-12 w-32 h-32 z-0">
        <img src="/lovable-uploads/3c2aadb8-dcd8-4092-b110-79f2d24d4a5c.png" alt="" />
      </div>
      
      <h2 className="text-2xl font-bold text-magic-gold font-serif mb-6 text-center relative z-10">
        Request a FREE DEMO
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div>
          <label htmlFor="name" className="block text-magic-gold mb-2 font-medium">
            Your Name *
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
          <label htmlFor="phone" className="block text-magic-gold mb-2 font-medium">
            Mobile Number *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-white/5 border-magic-gold/20 focus:border-magic-gold text-magic-light"
            placeholder="10 digits mobile number"
          />
        </div>
        
        <div>
          <label htmlFor="address" className="block text-magic-gold mb-2 font-medium">
            Address *
          </label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="bg-white/5 border-magic-gold/20 focus:border-magic-gold text-magic-light"
            placeholder="Your address"
          />
        </div>
        
        <div>
          <label htmlFor="dateTime" className="block text-magic-gold mb-2 font-medium">
            Preferred Date/Time *
          </label>
          <Input
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
            className="bg-white/5 border-magic-gold/20 focus:border-magic-gold text-magic-light"
            placeholder="e.g., June 15, 2023 at 3:00 PM"
          />
        </div>
        
        <div className="flex space-x-2">
          <DialogClose asChild>
            <Button 
              type="button" 
              variant="outline" 
              className="w-1/2 border-magic-gold/50 text-magic-gold hover:bg-magic-gold/10"
            >
              Cancel
            </Button>
          </DialogClose>
          
          <Button
            type="submit"
            className="w-1/2 bg-magic-gold hover:bg-magic-gold/80 text-magic-dark font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Request Demo"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DemoForm;
