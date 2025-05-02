import React from 'react';
import plus from '../assets/add.png';
import minus from '../assets/minus.png';
import divide from '../assets/division.png';
import multiply from '../assets/multiply.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-violet-950 to-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          <div className="max-w-xl">
            <div className="glass-card inline-block px-6 py-2 mb-6">
              <p className="text-violet-400">Transform Your Learning Journey</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Unlock Your</span>
              <br />
              <span className="text-gradient">Academic Potential</span>
            </h1>
            <p className="text-lg text-neutral-400 mb-8">
              Expert tutoring services tailored to your needs. Join thousands of successful students who have achieved academic excellence with our guidance.
            </p>
            <div className="flex gap-4">
              <a href="#contact">
                <button className="btn-primary">
                  Start Learning
                </button>
              </a>
              <a href="#services" className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                View Courses
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="stats-card">
                <h3 className="text-3xl font-bold text-violet-400">1000+</h3>
                <p className="text-neutral-400">Students</p>
              </div>
              <div className="stats-card">
                <h3 className="text-3xl font-bold text-violet-400">95%</h3>
                <p className="text-neutral-400">Success Rate</p>
              </div>
              <div className="stats-card">
                <h3 className="text-3xl font-bold text-violet-400">10+</h3>
                <p className="text-neutral-400">Years</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px] glass-card rounded-3xl overflow-hidden animate-float">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-white/20">
                <img 
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" 
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-[18%] left-[20%] glass-card p-4 rounded-full animate-float">
                <img src={plus} alt="Plus" className="w-12 h-12 object-cover" />
              </div>

              <div className="absolute top-[10%] right-[20%] glass-card p-4 rounded-full animate-float" style={{animationDelay: '1s'}}>
                <img src={multiply} alt="Multiply" className="w-12 h-12 object-cover" />
              </div>

              <div className="absolute bottom-[20%] left-[10%] glass-card p-4 rounded-full animate-float" style={{animationDelay: '1.5s'}}>
                <img src={minus} alt="Minus" className="w-12 h-12 object-cover" />
              </div>

              <div className="absolute bottom-[15%] right-[15%] glass-card p-4 rounded-full animate-float" style={{animationDelay: '2s'}}>
                <img src={divide} alt="Divide" className="w-12 h-12 object-cover" />
              </div>

              <div className="absolute inset-0">
                <div className="absolute top-[25%] left-[25%] w-[50%] h-[50%] 
                  border-2 border-dashed border-white/20 rounded-full animate-spin-slow">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-violet-600/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-violet-400/20 blur-3xl"></div>
    </section>
  );
};

export default Hero;