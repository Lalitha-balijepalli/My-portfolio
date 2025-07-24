import React from 'react';
import { Heart, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-teal-400 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-8xl">🧠</span>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">✨</span>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm a passionate B.Tech Computer Science student specializing in Data Science, 
                  currently in my journey of exploring the fascinating world of artificial intelligence 
                  and machine learning.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My curiosity drives me to dive deep into data patterns, build predictive models, 
                  and create solutions that can make a real impact. I love the challenge of turning 
                  raw data into meaningful insights and actionable intelligence.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-teal-50 dark:from-purple-900/20 dark:to-teal-900/20 p-6 rounded-xl border-l-4 border-purple-500">
                  <p className="italic text-gray-700 dark:text-gray-300 font-medium">
                    "Data is the new oil, but unlike oil, data becomes more valuable when shared and analyzed."
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Code className="w-8 h-8 text-purple-500 mb-2" />
                  <h4 className="font-semibold text-gray-800 dark:text-white">Programming</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Python, Java, C</p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Database className="w-8 h-8 text-teal-500 mb-2" />
                  <h4 className="font-semibold text-gray-800 dark:text-white">Data Science</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">ML, AI, Analytics</p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Heart className="w-8 h-8 text-pink-500 mb-2" />
                  <h4 className="font-semibold text-gray-800 dark:text-white">Innovation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Problem Solving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;