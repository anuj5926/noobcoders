
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, ExternalLink, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cosmic-purple/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cosmic-blue/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Reach out to us and let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="cosmic-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <Input 
                      id="name"
                      className="bg-cosmic-dark/50 border-cosmic-purple/30 focus:border-cosmic-purple text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      className="bg-cosmic-dark/50 border-cosmic-purple/30 focus:border-cosmic-purple text-white"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    className="bg-cosmic-dark/50 border-cosmic-purple/30 focus:border-cosmic-purple text-white min-h-[120px]"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cosmic-purple hover:bg-cosmic-blue transition-colors duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cosmic-purple/10 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-cosmic-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a href="mailto:hello@noobcores.io" className="text-gray-300 hover:text-cosmic-purple transition-colors">
                      hello@noobcores.io
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cosmic-blue/10 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-cosmic-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <a href="tel:+15551234567" className="text-gray-300 hover:text-cosmic-blue transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cosmic-card p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Connect With Us</h4>
              <div className="space-y-3">
                <Button className="w-full bg-cosmic-purple hover:bg-cosmic-blue transition-colors flex items-center justify-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Hire Us on Upwork
                </Button>
                <Button variant="outline" className="w-full border-cosmic-blue text-cosmic-blue hover:bg-cosmic-blue/10 flex items-center justify-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" className="w-full border-cosmic-cyan text-cosmic-cyan hover:bg-cosmic-cyan/10 flex items-center justify-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
