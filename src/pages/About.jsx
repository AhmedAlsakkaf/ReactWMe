import { FaUsers, FaCheckCircle, FaRocket, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-24 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Our Company</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connecting top talent with leading companies through innovative technology and personalized service.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Our Mission</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We're revolutionizing the job market by making hiring seamless, efficient, and transparent. 
            Whether you're looking for your dream job or the perfect candidate, we've built the platform 
            to make meaningful connections happen.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Why Choose Us?</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Extensive Network</h3>
              <p className="text-gray-600">
                Access thousands of job listings across all major industries and specializations.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Trusted Partners</h3>
              <p className="text-gray-600">
                All employers are thoroughly vetted to ensure quality opportunities.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Matching</h3>
              <p className="text-gray-600">
                Our AI-powered platform accelerates the hiring process for both candidates and employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the CEO */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Meet Our Leadership</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-md mx-auto">
            <img
              src="/src/assets/images/image2.jpg"
              alt="Ahmed Alsakkaf"
              className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-blue-100"
            />
            <h3 className="text-2xl font-bold mt-6 text-gray-800">Ahmed Alsakkaf</h3>
            <p className="text-blue-600 font-medium">CEO & Founder</p>
            <p className="text-gray-600 mt-4">
              Technology enthusiast with a passion for connecting talent with opportunity.
            </p>
            <a 
              href="https://www.linkedin.com/in/ahmed-alsakkaf/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin className="mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-900 text-center mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Whether you're seeking talent or opportunities, we're here to help you take the next step.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;