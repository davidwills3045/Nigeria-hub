import React from 'react'
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
            Explore our current job openings and find the perfect role to advance your career while contributing to Nigeria's development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobCards