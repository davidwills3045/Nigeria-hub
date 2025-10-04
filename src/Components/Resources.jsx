import React from 'react';

const Resources = () => {
  const resources = [
    {
      title: "Career Guidance",
      description: "Get expert advice on building your career in Nigeria's growing tech industry.",
      icon: "📈"
    },
    {
      title: "Skill Development",
      description: "Access resources to upgrade your skills and stay competitive in the job market.",
      icon: "🛠️"
    },
    {
      title: "Industry Insights",
      description: "Stay updated with the latest trends and opportunities in various sectors.",
      icon: "📊"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 relative inline-block section-title">
            Resources
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Access valuable resources to help you advance your career and professional development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
              <button className="mt-4 text-primary font-semibold hover:text-[#006e42] transition-colors duration-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;