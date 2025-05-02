import React, { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      content: "info@tutorpro.com",
      link: "mailto:info@tutorpro.com"
    },
    {
      icon: HiPhone,
      title: "Phone",
      content: "+1 234 567 890",
      link: "tel:+1234567890"
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      content: "123 Education Street, Learning City",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-violet-950 to-neutral-900 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-5"></div>
      {/* bg-[url('https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg')] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="glass-card inline-block px-6 py-2 mb-6">
            <p className="instrument-serif-regular-italic text-xl text-stone-200">Contact Us</p>
          </div>
          <h2 className="section-title mb-4">
            Get Started Today
          </h2>
          <p className="section-subtitle">
            Book a free demo class or get in touch with us
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="glass-card p-6 flex items-center hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                    <p className="text-neutral-400">{info.content}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Contact;