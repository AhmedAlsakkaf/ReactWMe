import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!job) return null;

  let description = job.description || "No description available";

  if (!showFullDescription && job.description) {
    description = description.substring(0, 100) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
            {job.type}
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-2">{job.title}</h3>
        </div>

        <div className="text-gray-600 mb-5">
          {description}
          <button
            onClick={() => setShowFullDescription((prevState) => !prevState)}
            className="text-blue-600 hover:text-blue-800 ml-1 font-medium transition-colors"
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </button>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-red-600 font-bold">{job.salary} / Year</span>
        </div>

        <div className="border-t border-gray-200 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-blue-600 mb-3 lg:mb-0 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-red-500" />
            <span>{job.location}</span>
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="bg-gradient-to-r from-red-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;