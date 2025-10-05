import React from 'react';
import JobCard from './JobCard';
import { jobData } from '../Data/Jobs';

const JobCards = () => {
  return (
    <section id="opportunities" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 relative inline-block section-title">
            Career Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join our mission to drive innovation across Nigeria. Explore these exciting roles and be part of the digital transformation.
          </p>
        </div>
        
        {/* Job Type Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['All', 'Full-time', 'Part-time', 'Internship', 'Contract'].map((type) => (
            <button
              key={type}
              className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {jobData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see the perfect role? We're always looking for talented individuals.
          </p>
          <button className="bg-accent text-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
            Send General Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobCards;