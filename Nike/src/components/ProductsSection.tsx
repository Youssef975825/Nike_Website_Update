import React from 'react';
import type { Product } from '../types';

const productsData: Product[] = [
  { id: 1, title: 'Cyber Neon Runner X-1', description: 'Engineered with interactive neon lighting and flexible materials to give you unmatched agility with every step.', price: '$100.99', rating: 5, image: 'image/shoes1.png' },
  { id: 2, title: 'Quantum Boost V2', description: 'Equipped with smart shock-absorption sole technology, specially crafted to keep you comfortable through long hours.', price: '$200.99', rating: 4.5, image: 'image/shoes2.png' },
  { id: 3, title: 'Hologram Street Master', description: 'The perfect blend of classic elegance and futuristic reflective details for steps that turn heads.', price: '$175.99', rating: 3.5, image: 'image/shoes3.png' },
  { id: 4, title: 'Futuristic Cyber Design', description: 'The upper structure features sleek, futuristic lines tailored for a cutting-edge Metaverse aesthetic', price: '$120.99', rating: 4, image: 'image/shoes4.png' },
  { id: 5, title: 'Advanced Cushioning Sole', description: 'Built with an ultra-responsive foam sole ensuring maximum shock absorption and daily comfort.', price: '$150.99', rating: 5, image: 'image/shoes5.png' },
  { id: 6, title: 'Lightweight Breathable Upper', description: 'Crafted with high-grade breathable mesh fabric to maintain airflow during intense movement.', price: '$220.99', rating: 4.5, image: 'image/shoes6.png' },
  { id: 7, title: 'Secure Grip Traction', description: 'Equipped with an anti-slip rubber outsole designed for ultimate stability on all surfaces.', price: '$110.99', rating: 3, image: 'image/shoes7.png' },
  { id: 8, title: 'Premium Brand Detailing', description: 'Features the iconic Nike branding accented with modern color gradients and refined stitching.', price: '$170.99', rating: 4.5, image: 'image/shoes8.png' },
];

interface ProductsSectionProps {
    onAddToCart: (product: Product) => void;
    onAddToHeart: (product: Product) => void;
    heartItems: Product[];
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onAddToCart, onAddToHeart, heartItems }) => {
  const handleWhatsAppShare = (product: Product) => {
    const phoneNumber = "201234567890"; // Your Number
    const message = `Nike hello, iam interesting about this product from Nike Shop:\n👟 *${product.title}*\n💰 Price: ${product.price}\n I want to know more details about him.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="Products" className="w-full py-20 bg-gray-50 dark:bg-gray-900 transition-colors relative overflow-hidden">
      
      {/* Neon Glow for Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-center uppercase bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-12 relative z-10">
        Products
      </h1>

      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
        {productsData.map((product) => (
          <div 
            key={product.id} 
            className="product-card-3d relative group bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 text-center flex flex-col justify-between overflow-hidden border border-gray-100 dark:border-gray-700/50"
          >
            
            {/*Background Neon Will Show When The Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

            {/* Small Action Icons */}
            <div className="absolute top-4 left-4 flex flex-col space-y-2 lg:opacity-0 sm:opacity-100 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button 
                onClick={() => onAddToHeart(product)}
                className={`w-10 h-10 rounded-md border border-gray-200 dark:border-gray-700 flex items-center justify-center transition cursor-pointer ${
                  heartItems.some(item => item.id === product.id) 
                    ? 'bg-pink-600 text-white border-pink-600 shadow-md' 
                    : 'bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <i className="fa-solid fa-heart"></i>
              </button>

              {/* WhatsApp Button */}
              <button 
                onClick={() => handleWhatsAppShare(product)}
                title="Contact By WhatsApp About Product"
                className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] text-green-600 transition cursor-pointer shadow-md"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </button>
            </div>

            {/* Product Image Floating Impact and Scale movement */}
            <div className="flex items-center justify-center my-6 relative z-10">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-36 floating-shoe transform group-hover:scale-110 transition duration-300 drop-shadow-[0_15px_15px_rgba(219,39,119,0.2)]" 
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold dark:text-white mt-2 group-hover:text-pink-600 transition-colors">{product.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm my-2">{product.description}</p>
              <h3 className="text-lg font-semibold dark:text-gray-200 mb-3">{product.price}</h3>
              
              <div className="text-yellow-400 mb-5 space-x-1">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
            </div>

            <a 
              href="#cart" 
              onClick={() => onAddToCart(product)} 
              className="relative z-10 inline-block w-full py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-95 hover:scale-[1.02] shadow-lg hover:shadow-pink-600/40 transition-all"
            >
              ADD TO CART 🛒
            </a>

          </div>
        ))}
      </div>
    </section>
  );
};