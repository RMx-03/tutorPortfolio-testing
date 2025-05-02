import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-900/80 backdrop-blur-md shadow-soft' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="inter-tight text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">TutorPro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="bg-transparent border border-gray-500 text-white rounded-3xl px-6 py-2.5 shadow-soft">
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-violet-400 transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-neutral-900/95 backdrop-blur-md shadow-soft">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <a href="#home" className="block px-4 py-3 text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">Home</a>
            <a href="#about" className="block px-4 py-3 text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">About</a>
            <a href="#services" className="block px-4 py-3 text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">Services</a>
            <a href="#testimonials" className="block px-4 py-3 text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">Testimonials</a>
            <a href="#contact" className="block px-4 py-3 text-violet-400 font-medium hover:bg-white/5 rounded-lg">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;