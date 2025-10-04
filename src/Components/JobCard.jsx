import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';

const JobCard = ({job}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="bg-primary text-secondary p-6">
        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-accent" />
          <span>{job.location}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{job.description}</p>
        <ul className="space-y-2 mb-6">
          {job.requirements.map((requirement, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-gray-700">{requirement}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <button className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300">
            View Details
          </button>
          <button className="flex-1 bg-primary text-secondary py-3 px-4 rounded-lg font-medium hover:bg-[#006e42] transition-colors duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobCard