import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with us for any inquiries, support, or collaborations.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">Reach Out to Us</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Whether you have questions or want to work with us, we are here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 text-center">03440580996</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Email Us</h3>
              <p className="text-blue-600 hover:text-blue-800 text-center transition-colors">
                <a href="mailto:ahmedabdulkareem1000@gmail.com">ahmedabdulkareem1000@gmail.com</a>
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-center">Hostel City, Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">Send Us a Message</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          
          <form className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea 
                id="message" 
                placeholder="How can we help you?" 
                rows="5" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 rounded-lg font-semibold shadow-md hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center"
            >
              <FaPaperPlane className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;