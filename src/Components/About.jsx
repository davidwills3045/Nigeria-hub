import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 relative inline-block section-title">
            About Nigeria Hub
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg">
            RadAssist AI Nigeria Hub is dedicated to advancing healthcare through artificial intelligence. 
            We're building a community of innovators, developers, and healthcare professionals working together 
            to create AI-powered solutions that make healthcare safer, faster, and more accessible across Nigeria.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To empower Nigerian clinicians with simple, smart AI tools that enhance patient care, 
              reduce diagnostic errors, and improve healthcare outcomes across the country.
            </p>
            
            <h3 className="text-2xl font-bold text-primary mb-6">Why Join Us?</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">→</span>
                <span>Work on meaningful projects that directly impact healthcare delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">→</span>
                <span>Learn from experienced professionals in AI and healthcare technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">→</span>
                <span>Access to Microsoft Azure cloud resources and training</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">→</span>
                <span>Be part of Nigeria's growing healthtech innovation ecosystem</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-primary to-green-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg mb-6">
              "Safer, faster care happens when clinicians are empowered by simple, smart tools."
            </p>
            <p className="opacity-90">
              We envision a future where every healthcare professional in Nigeria has access to 
              AI-powered tools that enhance their expertise and improve patient outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;