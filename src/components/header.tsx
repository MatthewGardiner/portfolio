// src/components/Header.tsx
"use client"; // This enables client-side hooks

import { useState } from 'react';  // To manage the pop-out state
import { motion } from 'framer-motion';  // For animations
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <>
      <nav className="bg-gray-800 dark:bg-gray-900 text-white py-4 relative">
        <div className="max-w mx-auto flex justify-end items-center">
          <button
            className="text-white focus:outline-none flex top-4 right-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-16 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      
      <motion.div
        initial={{ x: "100%" }}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed top-16 right-0 h-[calc(100vh-64px)] w-64 bg-gray-800 dark:bg-gray-900 text-white py-4 space-y-4 shadow-lg z-50"
      >
        <Link href="/" className="block text-center text-white hover:bg-gray-700 py-2" onClick={() => setIsOpen(!isOpen)}>Home</Link>
        <Link href="/about" className="block text-center text-white hover:bg-gray-700 py-2" onClick={() => setIsOpen(!isOpen)}>About</Link>
        <Link href="/projects" className="block text-center text-white hover:bg-gray-700 py-2" onClick={() => setIsOpen(!isOpen)}>Projects</Link>
        <Link href="/CV" className="block text-center text-white hover:bg-gray-700 py-2" onClick={() => setIsOpen(!isOpen)}>CV</Link>
      </motion.div>
    </>
  );
}
