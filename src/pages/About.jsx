import { FaUsers, FaCheckCircle, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
          Connecting talented individuals with exciting job opportunities. We
          help job seekers and employers find the perfect match.
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900">Our Mission</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Our mission is to revolutionize the job market by making hiring
          seamless, efficient, and transparent. Whether you're looking for a new
          opportunity or the perfect candidate, we've got you covered.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaUsers className="text-green-500 text-4xl mx-auto mb-3" />
              <h3 className="text-lg font-bold">Thousands of Jobs</h3>
              <p className="text-gray-600 mt-2">
                Access a wide range of job listings across industries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-3" />
              <h3 className="text-lg font-bold">Verified Employers</h3>
              <p className="text-gray-600 mt-2">
                Work with trusted and verified companies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaRocket className="text-green-500 text-4xl mx-auto mb-3" />
              <h3 className="text-lg font-bold">Fast Hiring</h3>
              <p className="text-gray-600 mt-2">
                Get hired quickly with our smart matching system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the CEO */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900">Meet Our CEO</h2>
        <div className="bg-white p-6 rounded-lg shadow-md w-80 mx-auto mt-6">
          <img
            src="/src\assets\images\image2.jpg"
            alt="Ahmed Alsakkaf"
            className="w-40 h-40 mx-auto rounded-full"
          />
          <h3 className="text-lg font-bold mt-4">Ahmed Alsakkaf</h3>
          <p className="text-gray-600">CEO & Owner</p>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-green-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900">Join Us</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Interested in joining or collaborating with us? Reach out through our
          contact page.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default About;
