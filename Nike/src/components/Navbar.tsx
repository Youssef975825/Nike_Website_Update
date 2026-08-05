import React, { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  heartCount: number; 
  onOpenHeart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, heartCount, onOpenHeart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          NIKE.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium dark:text-gray-200">
          <a href="#Home" className="hover:text-pink-600 transition">Home</a>
          <a href="#Products" className="hover:text-pink-600 transition">Products</a>
          <a href="#About" className="hover:text-pink-600 transition">About</a>
          <a href="#Review" className="hover:text-pink-600 transition">Review</a>
          <a href="#Services" className="hover:text-pink-600 transition">Services</a>
        </div>

        {/* Icons & Cart/Heart Buttons */}
        <div className="flex items-center space-x-4">
          
          <button 
            onClick={onOpenHeart}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition dark:text-white"
          >
            <i className="fa-solid fa-heart text-xl text-red-500"></i>
            {heartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {heartCount}
              </span>
            )}
          </button>

          <button 
            onClick={onOpenCart}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition dark:text-white"
          >
            <i className="fa-solid fa-cart-shopping text-xl"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-2xl dark:text-white p-2"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};