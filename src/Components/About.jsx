import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 relative inline-block section-title">
            About Nigeria Hub
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are dedicated to connecting talented individuals with opportunities that drive Nigeria's growth and development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To bridge the gap between talent and opportunity, fostering economic growth across Nigeria.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🌟</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              A Nigeria where every talented individual can find meaningful work and contribute to national development.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">💼</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <p className="text-gray-600">
              Excellence, Integrity, Innovation, and Commitment to Nigeria's development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;