import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Vijaya Lalitha 👩‍💻";
  const subtitle = "A curious mind exploring the world of Data Science";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-teal-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-teal-400 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-6xl">👩‍💻</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full opacity-50 animate-ping"></div>
          </div>

          {/* Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4 min-h-[80px]">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
            {subtitle}
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            B.Tech Computer Science (Data Science) Student passionate about turning data into insights 
            and building intelligent solutions for tomorrow's challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
            >
              <Eye className="w-5 h-5" />
              <span>View Projects</span>
            </a>
            <button className="group px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;