import React from 'react'
import { useState } from 'react'
import {FaMapMarker} from 'react-icons/fa'


const JobListing = (job) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 100) + "...";
  }



  return (
    <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{job.type}</div>
        <h3 class="text-xl font-bold">{job.title}</h3>
      </div>

      <div class="mb-5">
      {description}
      </div>
      <button onClick={() => setShowFullDescription((prevState) => !prevState) } className="text-green-500 mb-5 hover: text-green-500">
        {showFullDescription ? "Show Less" : "Show More"}
      </button>

      <h3 class="text-green-500 mb-2">{job.salary} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <FaMapMarker className='inline text-lg mb-2 mr-3'/>
          {job.location}
        </div>
        <a
          href={`/jobs/${job.id}`}
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
  )
}

export default JobListing