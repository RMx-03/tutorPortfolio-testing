import React from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              TutorPro
            </h3>
            <p className="text-neutral-400">
              Providing quality education and personalized tutoring services for students from Class 1 to 12.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-400 hover:text-violet-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-violet-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-violet-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-violet-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-neutral-400">
                <HiMail className="h-5 w-5 text-violet-400 mr-2" />
                info@tutorpro.com
              </li>
              <li className="flex items-center text-neutral-400">
                <HiPhone className="h-5 w-5 text-violet-400 mr-2" />
                +1 234 567 890
              </li>
              <li className="flex items-center text-neutral-400">
                <HiLocationMarker className="h-5 w-5 text-violet-400 mr-2" />
                123 Education Street, Learning City
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-neutral-400">&copy; {new Date().getFullYear()} TutorPro. All rights reserved.</p>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;