import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { personal } = portfolioData;

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300"
    >
      {/* ✅ Added wrapper for entire Hero content */}
      <div className="w-full text-black dark:text-white">

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-gray-700 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-gray-700 rounded-full opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">

            {/* Left content */}
            <div
              className={`w-full lg:w-1/2 order-2 lg:order-1 mb-12 lg:mb-0 text-center lg:text-left transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Mobile Image */}
<div className="lg:hidden flex justify-center mb-8 order-1">
  <div className="relative">
    <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
      <img 
        src="https://media.assettype.com/englishkesari/2025-03-17/dxgy0ghu/Rajpal-Yadav.7.jpg" 
        alt={personal.name} 
        className="w-full h-full object-cover" 
      />
    </div>
    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full"></div>
    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full"></div>
    <div className="absolute top-1/4 -left-8 w-4 h-4 bg-yellow-400 rounded-full"></div>
  </div>
</div>

              {/* Text */}
              <div className="order-2">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">Hello, I'm</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  {personal.name}
                </h1>
                <div className="overflow-hidden">
                  <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6 animate-pulse">
                    {personal.title}
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  I build clean, responsive, and user-friendly websites that help businesses grow 
                  and succeed in the digital world.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                  <button
                    onClick={handleScrollToProjects}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={handleScrollToContact}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 w-full sm:w-auto"
                  >
                    Contact Me
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a
                    href={personal.socialLinks.github}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={personal.socialLinks.linkedin}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={personal.socialLinks.instagram}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Image */}
            <div
              className={`hidden lg:flex w-full lg:w-1/2 justify-center order-1 lg:order-2 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img src="\pic2.jpeg" alt={personal.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full"></div>
                <div className="absolute top-1/4 -left-8 w-4 h-4 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
