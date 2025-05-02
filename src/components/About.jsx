import React from 'react';
import { HiAcademicCap, HiUserGroup, HiClipboardCheck, HiClock } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-violet-950 to-neutral-900 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center">
          <div className="glass-card inline-block px-6 py-2 mb-6">
            <p className="text-violet-400">Why Choose Us?</p>
          </div>
          <h2 className="section-title mb-4">
            Excellence in Education
          </h2>
          <p className="section-subtitle lg:mx-auto">
            With over 10 years of teaching excellence, we provide comprehensive education support
            for students from Class 1 to 12.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <dt className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-600 text-white">
                  <HiAcademicCap className="h-6 w-6" />
                </div>
                <p className="ml-4 text-xl font-semibold text-white">Expert Faculty</p>
              </dt>
              <dd className="mt-4 text-neutral-400">
                Our teachers are highly qualified professionals with years of experience in their respective subjects.
              </dd>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <dt className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-600 text-white">
                  <HiUserGroup className="h-6 w-6" />
                </div>
                <p className="ml-4 text-xl font-semibold text-white">Personalized Attention</p>
              </dt>
              <dd className="mt-4 text-neutral-400">
                We focus on individual student needs and create customized learning plans for optimal results.
              </dd>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <dt className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-600 text-white">
                  <HiClipboardCheck className="h-6 w-6" />
                </div>
                <p className="ml-4 text-xl font-semibold text-white">Regular Assessments</p>
              </dt>
              <dd className="mt-4 text-neutral-400">
                Weekly tests and detailed progress reports to track and improve student performance.
              </dd>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <dt className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-600 text-white">
                  <HiClock className="h-6 w-6" />
                </div>
                <p className="ml-4 text-xl font-semibold text-white">Flexible Schedule</p>
              </dt>
              <dd className="mt-4 text-neutral-400">
                Choose from various time slots that best suit your schedule and learning pace.
              </dd>
            </div>
          </dl>
        </div>        
      </div>
      
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;