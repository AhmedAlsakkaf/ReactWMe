import { useState, useEffect } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();
  const [title, setTitle] = useState(job.title || '');
  const [type, setType] = useState(job.type || 'Full-Time');
  const [location, setLocation] = useState(job.location || '');
  const [description, setDescription] = useState(job.description || '');
  const [salary, setSalary] = useState(job.salary || '700,000 - 900,000 YER');
  const [companyName, setCompanyName] = useState(job.company?.name || '');
  const [companyDescription, setCompanyDescription] = useState(job.company?.description || '');
  const [contactEmail, setContactEmail] = useState(job.company?.contactEmail || '');
  const [contactPhone, setContactPhone] = useState(job.company?.contactPhone || '');

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateJobSubmit(updatedJob);

    toast.success('Job Updated Successfully');
    navigate(`/jobs/${id}`);
  };

  return (
    <section className='bg-blue-50 min-h-screen flex items-center justify-center'>
      <div className='container max-w-2xl py-12'>
        <div className='bg-white px-8 py-10 shadow-lg rounded-lg border border-gray-200'>
          <h2 className='text-3xl font-bold text-center text-green-700 mb-6'>Edit Job</h2>
          <form onSubmit={submitForm} className='space-y-4'>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Job Title</label>
              <input
                type='text'
                className='w-full p-3 border rounded-lg'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Job Type</label>
              <select
                className='w-full p-3 border rounded-lg'
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Remote</option>
                <option>Internship</option>
              </select>
            </div>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Location</label>
              <input
                type='text'
                className='w-full p-3 border rounded-lg'
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Salary (YER)</label>
              <select
                className='w-full p-3 border rounded-lg'
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option>650,000 - 850,000 YER</option>
                <option>700,000 - 900,000 YER</option>
                <option>750,000 - 950,000 YER</option>
                <option>800,000 - 1,000,000 YER</option>
                <option>900,000 - 1,200,000 YER</option>
                <option>950,000 - 1,300,000 YER</option>
              </select>
            </div>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Description</label>
              <textarea
                className='w-full p-3 border rounded-lg'
                rows='4'
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <h3 className='text-xl font-semibold text-green-700 mt-6'>Company Information</h3>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Company Name</label>
              <input
                type='text'
                className='w-full p-3 border rounded-lg'
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Company Description</label>
              <textarea
                className='w-full p-3 border rounded-lg'
                rows='3'
                required
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Contact Email</label>
              <input
                type='email'
                className='w-full p-3 border rounded-lg'
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Contact Phone</label>
              <input
                type='tel'
                className='w-full p-3 border rounded-lg'
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition'
            >
              Update Job
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
