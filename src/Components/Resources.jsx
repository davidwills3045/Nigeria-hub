import React from 'react';

const Resources = () => {
  const resources = [
    {
      title: "AI in Healthcare Training",
      description: "Access our curated resources and training materials on AI applications in healthcare, specifically tailored for the Nigerian context.",
      icon: "🩺"
    },
    {
      title: "Azure Cloud Learning Path",
      description: "Microsoft Azure training resources and cloud computing fundamentals for healthcare technology applications.",
      icon: "☁️"
    },
    {
      title: "Healthcare Innovation Network",
      description: "Connect with other healthcare innovators, clinicians, and technology experts across Nigeria.",
      icon: "🌐"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 relative inline-block section-title">
            Resources & Learning
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Access learning materials, training resources, and join our community of healthcare technology innovators in Nigeria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <button className="text-primary font-semibold hover:text-[#006e42] transition-colors duration-300 flex items-center gap-2">
                Explore Resources 
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Partnership Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Partnership Opportunities</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We collaborate with healthcare institutions, technology companies, and educational organizations 
            to advance AI in healthcare across Nigeria.
          </p>
          <button className="bg-accent text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-200 transition-colors duration-300">
            Explore Partnerships
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;