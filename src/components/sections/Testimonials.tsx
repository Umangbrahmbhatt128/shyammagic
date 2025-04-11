
const testimonialsData = [
  {
    quote: "Shyam's performance at our corporate event was absolutely mind-blowing. Our clients couldn't stop talking about his incredible mentalism act!",
    author: "Raj Mehta",
    title: "Marketing Director, TechnovaCorp",
  },
  {
    quote: "The highlight of our wedding reception! Shyam moved around our guests performing close-up magic that left everyone amazed. Highly recommended!",
    author: "Priya & Akash",
    title: "Wedding Clients",
  },
  {
    quote: "We've hired Shyam for three consecutive annual galas. His stage presence and ability to engage the audience is unmatched.",
    author: "Anjali Sharma",
    title: "Event Coordinator, LuxeEvents",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-magic-dark/95">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          Client <span className="gold-gradient">Testimonials</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="magic-card flex flex-col"
            >
              <div className="mb-4 text-magic-gold text-4xl">"</div>
              <p className="text-magic-light/80 italic mb-6">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="font-serif text-magic-gold font-medium">{testimonial.author}</p>
                <p className="text-magic-light/60 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-1 text-magic-gold">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-center text-magic-light/60 mt-2">Rated 5.0/5 based on 45+ reviews</p>
      </div>
    </section>
  );
};

export default Testimonials;
