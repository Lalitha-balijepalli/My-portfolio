import React, { useState, useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { category: 'Programming Languages', skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'C', level: 80 },
      { name: 'JavaScript', level: 75 },
    ]},
    { category: 'Data Science & ML', skills: [
      { name: 'Pandas & NumPy', level: 88 },
      { name: 'Scikit-Learn', level: 82 },
      { name: 'TensorFlow', level: 78 },
      { name: 'SQL', level: 85 },
    ]},
    { category: 'Web Technologies', skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'React', level: 80 },
      { name: 'Node.js', level: 70 },
      { name: 'MongoDB', level: 75 },
    ]},
    { category: 'Tools & Platforms', skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Jupyter Notebook', level: 90 },
      { name: 'Tableau', level: 80 },
      { name: 'VS Code', level: 95 },
    ]},
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ProgressBar: React.FC<{ skill: string; level: number; delay: number }> = ({ skill, level, delay }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;