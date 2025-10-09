import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative pt-20 md:pt-24 h-[666px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 relative text-secondary">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            RadAssist AI
            <span className="block text-accent text-4xl md:text-5xl lg:text-6xl mt-2">
              Nigeria Hub
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Building the future of healthcare in Nigeria through artificial intelligence and innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#opportunities" 
              className="inline-block bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-[#006e42] transform hover:-translate-y-1 transition-all duration-300 shadow-lg text-center"
            >
              Join Our Team
            </a>
            <a 
              href="#contact" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 text-center"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;