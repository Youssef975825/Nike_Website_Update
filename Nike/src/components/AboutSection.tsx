import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="About" className="py-16 sm:py-24 bg-gray-950 text-white px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Image Or Loading Light Side*/}
        <div className="relative flex justify-center">
          <div className="absolute w-48 sm:w-72 h-48 sm:h-72 bg-purple-600/20 rounded-full blur-3xl -top-4 pointer-events-none"></div>
          <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 relative z-10 shadow-xl backdrop-blur-md">
            <span className="text-pink-500 font-bold text-xs sm:text-sm tracking-wider uppercase">
              // ABOUT THE METAVERSE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4 leading-snug">
              Redefining Future Streetwear & Comfort
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We merge virtual aesthetics with everyday durability, providing high-performance sneakers built for the next generation of pioneers.
            </p>
          </div>
        </div>

        {/* Text And Details Side */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Engineered For The <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Virtual Pioneers
            </span>
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Welcome to the future of footwear. We bridge the gap between virtual reality aesthetics and everyday street fashion, bringing you exclusive sneakers designed for tomorrow.
          </p>

          {/* Small Result To React On Mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-800">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800/60">
              <h4 className="text-2xl sm:text-3xl font-bold text-pink-500">100%</h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Futuristic Vibe</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800/60">
              <h4 className="text-2xl sm:text-3xl font-bold text-purple-500">24/7</h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Digital Support</p>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-gray-900/50 p-4 rounded-xl border border-gray-800/60">
              <h4 className="text-2xl sm:text-3xl font-bold text-indigo-500">Global</h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Metaverse Shipping</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};