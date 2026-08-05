import React from 'react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="Services" className="w-full py-24 bg-white dark:bg-gray-950 transition-colors">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center uppercase mb-16 dark:text-white">
        Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent ml-3">Services</span>
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 text-center">
        <div className="p-6">
          <i className="fa-solid fa-truck-fast text-5xl text-yellow-500 mb-4 inline-block"></i>
          <h3 className="text-2xl font-bold dark:text-white mb-2">Fast Delivery</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Get your futuristic sneakers delivered straight to your doorstep with our fast and secure shipping service.</p>
        </div>

        <div className="p-6">
          <i className="fa-solid fa-rotate-left text-5xl text-yellow-500 mb-4 inline-block"></i>
          <h3 className="text-2xl font-bold dark:text-white mb-2">10 Days Replacement</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Enjoy a hassle-free replacement policy within 10 days of purchase if the size or fit isn't quite right.</p>
        </div>

        <div className="p-6">
          <i className="fa-solid fa-headset text-5xl text-yellow-500 mb-4 inline-block"></i>
          <h3 className="text-2xl font-bold dark:text-white mb-2">24 x 7 Support</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Our dedicated digital team is available around the clock via WhatsApp to assist you with any inquiries.</p>
        </div>
      </div>
    </section>
  );
};