import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
          Get in touch with us for any inquiries, support, or collaborations.
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900">Reach Out to Us</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Whether you have questions or want to work with us, we are here to help.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaPhone className="text-green-500 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-bold">Call Us</h3>
            <p className="text-gray-600 mt-2">03440580996</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaEnvelope className="text-green-500 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-bold">Email Us</h3>
            <p className="text-gray-600 mt-2">ahmedabdulkareem1000@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-green-500 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-bold">Visit Us</h3>
            <p className="text-gray-600 mt-2">Hostel City, Islamabad, Pakistan</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-green-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900">Send Us a Message</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Fill out the form below, and we’ll get back to you as soon as possible.
        </p>
        <form className="max-w-2xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border border-gray-300 rounded" rows="5"></textarea>
          <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;