"use client"; // Enable Client Component for hooks

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Brief description of Project 1.',
    detailedDescription: 'bla bla bla.',
    image: '/path/to/project1-image.jpg', // Update with actual image path
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Brief description of Project 2.',
    detailedDescription: 'wewewewewewe.',
    image: '/path/to/project2-image.jpg', // Update with actual image path
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Brief description of Project 3.',
    detailedDescription: 'Soemthing useful.',
    image: '/path/to/project3-image.jpg', // Update with actual image path
  },
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Projects</h2>

        {/* Main Project Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${expandedProject ? 'pointer-events-none blur-sm' : ''}`}>
          {projectData.map(project => (
            <motion.div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() => handleExpand(project.id)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }} // Expand a bit on hover
              animate={{ scale: expandedProject === project.id ? 1.05 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {expandedProject && (
            <motion.div
              className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50"
              onClick={() => handleExpand(null)} // Collapse when clicking outside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700 relative"
                style={{ width: 'calc(100% - 128px)', height: 'calc(100% - 128px)' }} // Adjust for proper sizing
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{projectData.find(p => p.id === expandedProject).title}</h3>
                  <img
                    src={projectData.find(p => p.id === expandedProject).image}
                    alt="Project Image"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <p className="text-gray-800 dark:text-gray-300">{projectData.find(p => p.id === expandedProject).detailedDescription}</p>
                  <button
                    className="mt-4 bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded"
                    onClick={() => handleExpand(null)} // Collapse back to original state
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
