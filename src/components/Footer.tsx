
import React from 'react';
import NoobcoreLogo from './NoobcoreLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'Laravel Development', href: '#' },
      { name: 'React Applications', href: '#' },
      { name: 'AI Solutions', href: '#' },
      { name: 'DevOps Services', href: '#' },
      { name: 'Digital Marketing', href: '#' },
    ],
    connect: [
      { name: 'Twitter', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'Instagram', href: '#' },
    ],
  };
  
  return (
    <footer className="bg-cosmic-darker relative overflow-hidden pt-16 pb-8">
      {/* Background effects */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cosmic-purple/50 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cosmic-purple/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cosmic-blue/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <NoobcoreLogo size="sm" />
              <span className="text-xl font-bold text-gradient">Noobcoders.io</span>
            </div>
            <p className="text-gray-400 mb-4">
              Pioneering the digital frontier with cutting-edge technology solutions for forward-thinking businesses.
            </p>
            <div className="flex space-x-4">
              {footerLinks.connect.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-8 h-8 rounded-full bg-cosmic-dark flex items-center justify-center hover:bg-cosmic-purple/20 transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  <div className="w-4 h-4 bg-cosmic-purple rounded-full opacity-70 hover:opacity-100 transition-opacity"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-cosmic-purple transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-cosmic-purple transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-4 py-2 bg-cosmic-dark flex-grow text-white border border-cosmic-purple/30 rounded-l-md focus:outline-none focus:border-cosmic-purple"
              />
              <button 
                type="submit"
                className="bg-cosmic-purple hover:bg-cosmic-blue px-4 py-2 text-white rounded-r-md transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Noobcoders.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
