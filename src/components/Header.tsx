import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useActiveSection } from '../hooks/useScrollAnimation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ ] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Me' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Expertise' },
    { href: '#projects', label: 'Work' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Mubashir! I'm interested in discussing a project with you. Let's connect!");
    window.open(`https://wa.me/03313103442?text=${message}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="text-xl font-semibold text-blue-500 
                     px-4 py-2.5 rounded-full 
                     backdrop-blur-lg shadow-md
                     hover:bg-blue-300/10 hover:text-blue-500
                     transition-all duration-300"
        >
          Portfolio
        </a>

        {/* Desktop Nav - Updated Pills */}
        <nav className="hidden md:flex items-center backdrop-blur-xl rounded-full px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
  {navLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
      className={`px-4  py-1.5 mx-1 rounded-full text-sm font-normal
        transition-all duration-200
        ${
          activeSection === link.href.slice(1)
            ? 'bg-blue-400 text-white shadow-md backdrop-blur-lg'
            : 'text-black hover:bg-blue-100'
        }`}
    >
      {link.label}
    </a>
  ))}
</nav>

        {/* WhatsApp Button */}
        <button
  onClick={handleWhatsAppClick}
  className="hidden md:flex items-center gap-2 
              border-blue-300/10        /* ← bolder border */
             text-blue-400 font-semibold     /* ← blue + bold text */
             px-5 py-2.5              /* slightly more padding so it doesn't look cramped */
             rounded-full 
             hover:bg-blue-300/10            /* hover keeps the blue vibe */
             hover:border-blue-300              /* border gets fully opaque on hover */
             hover:text-blue-500
             transition-all duration-300 
             backdrop-blur-lg 
             
             shadow-md"
>
  <MessageCircle size={18} />
  WhatsApp
</button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/60 backdrop-blur-xl md:hidden py-4 shadow-lg">
          <nav className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`font-medium text-white text-lg ${
                  activeSection === link.href.slice(1) ? 'opacity-100' : 'opacity-70'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button onClick={handleWhatsAppClick} className="flex items-center justify-center bg-white/10 text-white px-6 py-3 rounded-lg">
              <MessageCircle size={18} className="mr-2" />
              WhatsApp
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
