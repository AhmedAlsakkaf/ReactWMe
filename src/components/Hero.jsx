import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isArabic, setIsArabic] = useState(false);

  // Automatically switch the language every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsArabic(prev => !prev);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative py-20 mb-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {isArabic
              ? 'أصبح مطور React'
              : 'Become a React Developer'}
          </h1>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {isArabic
              ? 'انضم إلينا وطور مهاراتك في React!'
              : 'Join us and enhance your React skills!'}
          </h1>
          <p className="my-4 text-xl text-white">
            {isArabic
              ? 'اعثر على وظيفة React التي تناسب مهاراتك واحتياجاتك'
              : 'Find the React job that fits your skills and needs'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;