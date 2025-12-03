import React from 'react';
import { Download, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { personal } = portfolioData;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personal.cvUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div
            className={`w-full lg:w-2/5 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img
                src="https://t4.ftcdn.net/jpg/05/46/01/69/360_F_546016914_qE7KlgNMJCzFSueLhBZ1Qo7NbmIVfu9e.jpg"
                alt={personal.name}
                className="relative z-10 rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div
            className={`w-full lg:w-3/5 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who I Am</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{personal.bio}</p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              My journey into web development started during my Computer Science studies, where I
              discovered a strong passion for crafting clean, user-friendly interfaces. Since then, I’ve
              started building projects — some for friends and family — to sharpen my skills and help them
              establish a strong digital presence through responsive, modern, and efficient web solutions.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Hire Me?</h3>
            <ul className="space-y-4 mb-8">
              {personal.whyHireMe.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mt-1 mr-3">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={handleDownloadCV}
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
