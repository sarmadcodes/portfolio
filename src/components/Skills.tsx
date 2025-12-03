import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
    color: string;
  };
  isVisible: boolean;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, isVisible, delay }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <h4 className="text-lg font-semibold text-gray-900 mb-3">{skill.name}</h4>
      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <p className="text-right text-sm text-gray-600 mt-2">{skill.level}%</p>
    </div>
  );
};

const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { skills } = portfolioData;

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools in web development. 
            Here's an overview of my technical expertise.
          </p>
        </div>

        <div className="mb-16">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frontend Technologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skills.frontend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  isVisible={isVisible}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.tools.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                isVisible={isVisible}
                delay={index * 100 + 400}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
