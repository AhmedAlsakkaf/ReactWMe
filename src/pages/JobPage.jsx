import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) return;
    deleteJob(jobId);
    toast.success('Job deleted successfully', { position: 'top-center' });
    navigate('/jobs');
  };

  return (
    <>
      <ToastContainer />
      <section>
        <div className='container mx-auto py-6 px-6'>
          <Link to='/jobs' className='text-green-600 hover:text-green-700 flex items-center font-medium transition-all duration-200'>
            <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className='bg-green-50 py-10'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-lg text-center md:text-left'>
                <div className='text-gray-500 mb-4 uppercase tracking-wide'>{job.type}</div>
                <h1 className='text-3xl font-extrabold text-gray-800 mb-4'>{job.title}</h1>
                <div className='text-gray-500 mb-4 flex justify-center md:justify-start items-center'>
                  <FaMapMarker className='text-orange-600 mr-2' />
                  <p className='text-orange-600'>{job.location}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-lg mt-6'>
                <h3 className='text-green-700 text-lg font-semibold mb-4'>Job Description</h3>
                <p className='mb-4 text-gray-700 leading-relaxed'>{job.description}</p>
                <h3 className='text-green-700 text-lg font-semibold mb-2'>Salary</h3>
                <p className='text-gray-800 font-medium'>{job.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className='bg-white p-6 rounded-lg shadow-lg'>
                <h3 className='text-xl font-semibold mb-6 text-gray-800'>Company Info</h3>
                <h2 className='text-2xl font-bold text-gray-900'>{job.company.name}</h2>
                <p className='my-2 text-gray-600'>{job.company.description}</p>
                <hr className='my-4' />
                <h3 className='text-lg font-medium text-gray-800'>Contact Email:</h3>
                <p className='my-2 bg-green-100 p-2 rounded-lg font-medium'>{job.company.contactEmail}</p>
                <h3 className='text-lg font-medium text-gray-800'>Contact Phone:</h3>
                <p className='my-2 bg-green-100 p-2 rounded-lg font-medium'>{job.company.contactPhone}</p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-lg mt-6'>
                <h3 className='text-xl font-semibold mb-6 text-gray-800'>Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className='bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-lg w-full block transition-all duration-200 shadow-md hover:shadow-lg'
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full block transition-all duration-200 shadow-md hover:shadow-lg mt-4'
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  if (!res.ok) throw new Error('Job not found');
  return res.json();
};

export { JobPage as default, jobLoader };