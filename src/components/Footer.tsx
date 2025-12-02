import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-600 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Portfolio</h3>
            <p className="text-gray-400">{personal.title}</p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
            © {currentYear} {personal.name.split(' ')[0]}. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href={personal.socialLinks.github}
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.socialLinks.linkedin}
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personal.socialLinks.instagram}
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
