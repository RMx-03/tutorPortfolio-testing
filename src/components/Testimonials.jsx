import React from 'react';
import { HiStar } from 'react-icons/hi';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      content: "The improvement in my child's grades has been remarkable. The personalized attention really makes a difference.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Student, Class 10",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      content: "The teachers here explain concepts so well. My understanding of Mathematics has improved significantly.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Parent",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      content: "Excellent teaching methodology and regular feedback. My daughter loves attending the classes.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-neutral-900 to-violet-950 relative">
      <div className="absolute inset-0 bg-cover bg-center"></div>
      {/* bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="glass-card inline-block px-6 py-2 mb-6">
            <p className="instrument-serif-regular-italic text-xl text-stone-200">Testimonials</p>
          </div>
          <h2 className="section-title mb-4">
            What Our Students Say
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our students and parents
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <img
                  className="h-20 w-20 rounded-full object-cover ring-4 ring-violet-600/20"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="h-6 w-6 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-300 italic text-center mb-6">"{testimonial.content}"</p>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                <p className="text-neutral-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;