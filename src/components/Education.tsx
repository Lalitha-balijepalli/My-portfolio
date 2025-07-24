import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'B.Tech Computer Science - Data Science',
      institution: 'NRI institute of technology',
      duration: '2023 - 2027',
      location: 'Vijayawada, Andhra pradesh',
      description: 'Specializing in Data Science with focus on Machine Learning, AI, and Big Data Analytics',
      subjects: [
        'Artificial Intelligence',
        'Machine Learning',
        'Database Management Systems',
        'Big Data Analytics',
        'Cloud Computing',
        'Data Structures & Algorithms',
        'Statistics & Probability',
        'Computer Networks'
      ],
      
    }
  ];

  const certifications = [
    { name: 'Python for Data Science', issuer: 'IBM', year: '2024' },
    { name: 'Machine Learning Specialization', issuer: 'Stanford Online', year: '2024' },
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2023' },
    { name: 'Data Analysis with Pandas', issuer: 'Coursera', year: '2023' },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
              Academic Journey
            </h3>
            
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-3 rounded-full">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                      <div className="text-lg font-semibold text-teal-600 dark:text-teal-400">
                        
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-3">
                      Key Subjects:
                    </h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {edu.subjects.map((subject, subjectIndex) => (
                        <span
                          key={subjectIndex}
                          className="px-3 py-2 bg-gradient-to-r from-purple-50 to-teal-50 dark:from-purple-900/20 dark:to-teal-900/20 text-gray-700 dark:text-gray-300 text-sm rounded-lg text-center"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
              Certifications & Achievements
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-teal-50 dark:from-purple-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        {cert.name}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;