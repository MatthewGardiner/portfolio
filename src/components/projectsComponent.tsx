"use client"; // Mark this as a client component

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'This website!',
    detailedDescription: `This website serves as my personal portfolio, showcasing my work as a developer. It is built using Next.js, TailwindCSS, and TypeScript.`,
    image: '/img/you_are_here.png', // You can remove or leave this to test the no-image case
  },
  {
    id: 2,
    title: 'Master\'s Dissertation Project',
    description: 'Hospital Length of Stay prediction using MIMIC-II',
    detailedDescription: `This project aimed to predict the length of hospital stays for patients using the MIMIC-II dataset. I developed multiple regression models to analyze various factors influencing patient length-of-stay. The work involved extensive data preprocessing, feature engineering, and model optimization to achieve accurate predictions. I primarily used PyCharm for Python-based analysis and RStudio for statistical modeling in R, leveraging the strengths of each platform to deliver results. This project highlighted my ability to work with large, complex datasets and apply machine learning models to solve real-world healthcare problems.`,
    image: '',
  },
  {
    id: 3,
    title: 'Undergraduate Final Year Project',
    description: 'AI For Artificial Game Opponents - \'An effective AI for StarCraft II using SC2API\'',
    detailedDescription: `This project involved understanding how artificial intelligences function and make decisions. The goal was to create a functional AI capable of playing StarCraft II. The AI was developed in Visual Studio using C++, leveraging the SC2API C++ library. Despite the system's evident power, one key conclusion from the project was that the limited support and documentation for the SC2API library made both development and understanding much more challenging.`,
    image: '',
  },
  
  // Add more projects...
];

export default function ProjectsComponent() {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">Projects</h2>

        {/* Project Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${expandedProject ? 'pointer-events-none blur-sm' : ''}`}>
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() => handleExpand(project.id)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }} // Pop out on hover
              animate={{ scale: expandedProject === project.id ? 1.05 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Expanded View */}
        <AnimatePresence>
          {expandedProject && (
            <motion.div
              className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50"
              onClick={() => handleExpand(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-300 relative"
                style={{ width: 'calc(100% - 128px)', height: 'calc(100% - 128px)' }}
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">
                    {projectData.find(p => p.id === expandedProject).title}
                  </h3>

                  {/* Conditionally render image */}
                  {projectData.find(p => p.id === expandedProject).image ? (
                    <img
                      src={projectData.find(p => p.id === expandedProject).image}
                      alt="Project Image"
                      className="w-1/3 h-auto rounded-lg mb-4 float-right ml-4" // Aligns image to the right with spacing
                    />
                  ) : (
                    <div className="w-full h-auto mb-4 text-center">
                      {/* Fallback content, if no image */}
                      <p className="text-gray-500 italic">No image available for this project.</p>
                    </div>
                  )}

                  <p className="text-gray-800 dark:text-gray-200">
                    {projectData.find(p => p.id === expandedProject).detailedDescription}
                  </p>
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleExpand(null)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
