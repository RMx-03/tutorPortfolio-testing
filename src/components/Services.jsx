import React from 'react';
import { HiAcademicCap, HiBookOpen, HiLightBulb, HiChartBar } from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      title: "Primary Classes (1-5)",
      description: "Building strong foundations in Mathematics, Science, and English",
      features: ["Interactive learning", "Basic concept clarity", "Regular homework help"],
      icon: HiBookOpen
    },
    {
      title: "Middle School (6-8)",
      description: "Comprehensive coverage of all major subjects",
      features: ["Subject expertise", "Exam preparation", "Doubt clearing sessions"],
      icon: HiAcademicCap
    },
    {
      title: "Secondary (9-10)",
      description: "Board exam preparation and concept strengthening",
      features: ["Focus on board syllabus", "Practice tests", "Performance tracking"],
      icon: HiLightBulb
    },
    {
      title: "Higher Secondary (11-12)",
      description: "Specialized coaching for Science and Commerce",
      features: ["JEE/NEET preparation", "Board exam focus", "Regular mock tests"],
      icon: HiChartBar
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-neutral-900 to-violet-950 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="glass-card inline-block px-6 py-2 mb-6">
            <p className="text-violet-400">Our Programs</p>
          </div>
          <h2 className="section-title mb-4">
            Comprehensive Learning Solutions
          </h2>
          <p className="section-subtitle">
            Tailored tutoring programs for every academic level
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="p-6">
                  <Icon className="h-12 w-12 text-violet-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-neutral-300">
                        <span className="mr-2 text-violet-400">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border-t border-white/10">
                  <a
                    href="#contact"
                    className="block text-center text-violet-400 hover:text-violet-300 transition-colors font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Services;