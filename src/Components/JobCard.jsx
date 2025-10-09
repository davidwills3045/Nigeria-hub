import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaCertificate,
} from "react-icons/fa";

const JobCard = ({ job }) => {
  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "full-time":
        return "bg-green-100 text-green-800";
      case "part-time":
        return "bg-blue-100 text-blue-800";
      case "internship":
        return "bg-purple-100 text-purple-800";
      case "contract":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="bg-primary text-secondary p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{job.title}</h3>
          <span
            className={`text-xs  text-center w-24 py-1 rounded-full font-semibold ${getTypeColor(
              job.type
            )}`}
          >
            {job.type}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <FaMapMarkerAlt className="text-accent" />
          <span>{job.location}</span>
          {job.duration && (
            <>
              <span>•</span>
              <FaClock className="text-accent" />
              <span>{job.duration}</span>
            </>
          )}
          {job.stipend && (
            <>
              <span>•</span>
              <FaMoneyBillWave className="text-accent" />
              <span>Stipend</span>
            </>
          )}
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>

        {/* Requirements */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Requirements:
          </h4>
          <ul className="space-y-1">
            {job.requirements.map((requirement, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex items-start gap-2"
              >
                <span className="text-accent mt-1">•</span>
                <span>{requirement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Info */}
        <div className="space-y-3">
          {job.skills && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                Technical Skills:
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {job.platforms && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                Platforms:
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.platforms.map((platform, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          )}

          {job.tools && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                Tools:
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {job.deliverables && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                Key Deliverables:
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.deliverables.map((deliverable, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs"
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </div>
          )}

          {job.sectors && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                Focus Sectors:
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.sectors.map((sector, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          )}

          {job.certifications && (
            <div className="flex items-center gap-2 bg-yellow-50 p-3 rounded-lg">
              <FaCertificate className="text-yellow-600" />
              <span className="text-sm text-yellow-700">
                {job.certifications}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {job.href && (
          <div className="flex flex-row-reverse gap-3 mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/1vVMFrzbw_j1cfWsoRAGu09yT6qheJ2zVStiHhnRk8Pk/edit",
                  "_blank"
                )
              }
              className="flex-1 bg-accent text-dark py-3 px-4 rounded-lg font-medium hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Submit Task
            </button>
            <button
              onClick={() => window.open(job.href, "_blank")}
              className="flex-1 bg-primary text-secondary py-3 px-4 rounded-lg font-medium hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Apply Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
