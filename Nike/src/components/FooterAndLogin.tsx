import React from 'react';

export const LoginSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-around bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="mb-10 lg:mb-0">
        <img src="image/logshoes.png" alt="Login Shoes" className="w-full max-w-lg" />
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg border border-purple-600 shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Welcome Back!</h1>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="text-sm font-medium dark:text-gray-300">User Name</label>
            <div className="flex items-center border-2 border-purple-600 rounded-md mt-1 px-3 bg-transparent">
              <i className="fa-solid fa-user text-pink-600 mr-3"></i>
              <input type="text" required placeholder="User Name" className="w-full py-2 bg-transparent outline-none dark:text-white text-sm" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium dark:text-gray-300">Password</label>
            <div className="flex items-center border-2 border-purple-600 rounded-md mt-1 px-3 bg-transparent">
              <i className="fa-solid fa-lock text-pink-600 mr-3"></i>
              <input type="password" required placeholder="Password" className="w-full py-2 bg-transparent outline-none dark:text-white text-sm" />
            </div>
          </div>

          <div className="text-right text-sm text-purple-600 dark:text-purple-400 cursor-pointer hover:underline">
            Forget Password ?
          </div>

          <button type="submit" className="w-full py-3 text-white font-semibold rounded-md bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200 py-12 border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-6">
        <div>
          <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Contact</h2>
          <p className="text-sm mb-2"><i className="fa-solid fa-house mr-2"></i> 123/Colombo/Sri Lanka</p>
          <p className="text-sm mb-2"><i className="fa-solid fa-phone mr-2"></i> +94 123 456 789</p>
          <p className="text-sm"><i className="fa-solid fa-envelope mr-2"></i> Contact@gmail.com</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Get Help</h2>
          <a href="#" className="block text-sm mb-2 hover:text-pink-600 transition">FAQ</a>
          <a href="#" className="block text-sm mb-2 hover:text-pink-600 transition">Shipping</a>
          <a href="#" className="block text-sm mb-2 hover:text-pink-600 transition">Returns</a>
          <a href="#" className="block text-sm hover:text-pink-600 transition">Payment Options</a>
        </div>

        <div>
          <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Our Stores</h2>
          <a href="#" className="block text-sm mb-2 hover:text-pink-600 transition">Sri Lanka</a>
          <a href="#" className="block text-sm mb-2 hover:text-pink-600 transition">USA</a>
          <a href="#" className="block text-sm mb-2 hover:text-pink-600 transition">India</a>
          <a href="#" className="block text-sm hover:text-pink-600 transition">Japan</a>
        </div>

        <div>
          <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Follow Us</h2>
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/youssef.sameh.7731247" target='_blank' rel='noopener noreferrer' className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition"><i className="fa-brands fa-facebook-f text-xs"></i></a>
            <a href="https://github.com/Youssef975825" target='_blank' rel='noopener noreferrer' className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center hover:bg-[#24292e] hover:text-white transition"><i className="fa-brands fa-github text-xl"></i></a>
            <a href="https://www.linkedin.com/in/youssef-sameh-721299337/" target='_blank' rel='noopener noreferrer' className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center hover:bg-[#0a66c2] hover:text-white transition"><i className="fa-brands fa-linkedin-in text-xs"></i></a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Newsletter</h2>
          <div className="flex flex-col space-y-3">
            <input type="email" placeholder="your email id here" className="px-4 py-2 rounded-full border bg-gray-200 dark:bg-gray-800 text-sm outline-none" />
            <button className="py-2 rounded-full text-white bg-gradient-to-r from-pink-600 to-purple-600 text-sm font-semibold hover:opacity-90 transition">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};