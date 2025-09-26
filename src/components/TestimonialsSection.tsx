
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'CEO, TechFusion',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop',
    rating: 5,
    text: "Noobcoders.io transformed our outdated platform into a modern, high-performing application. Their team's expertise in React and Laravel is unmatched!"
  },
  {
    id: 2,
    name: 'Sarah Williams',
    position: 'Marketing Director, Orbital',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    text: 'The AI solution they built for us has revolutionized how we handle customer data. Increased our efficiency by 40% while reducing costs.'
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'CTO, LaunchPad',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Their DevOps expertise helped us implement a seamless CI/CD pipeline that cut our deployment time by 70%. Incredibly professional team.'
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cosmic-purple/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cosmic-blue/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="cosmic-card p-6 relative rounded-2xl shadow-lg border border-cosmic-purple/10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-cosmic-purple/20 to-transparent rounded-bl-[100px]"></div>
              
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cosmic-purple text-cosmic-purple" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 cosmic-card p-8 text-center max-w-3xl mx-auto rounded-2xl shadow-2xl border border-cosmic-purple/20">
          <p className="text-xl text-white mb-6">
            "Working with Noobcoders.io has been a game-changer for our business. Their team delivers excellence at every step."
          </p>
          <div className="flex justify-center items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="w-2 h-2 rounded-full bg-cosmic-purple"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
