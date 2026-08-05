import React from 'react';
import type { Product } from '../types';

interface HeartListProps {
  isOpen: boolean;
  onClose: () => void;
  heartItems: Product[];
  onRemoveHeart: (id: number) => void;
  onAddToCartFromHeart: (product: Product) => void;
}

export const HeartList: React.FC<HeartListProps> = ({
  isOpen,
  onClose,
  heartItems,
  onRemoveHeart,
  onAddToCartFromHeart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 h-full shadow-2xl flex flex-col p-6 transition-all">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b dark:border-gray-800">
          <h2 className="text-2xl font-bold dark:text-white">Your Wishlist ❤️</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl font-bold"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {heartItems.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-20">
              Your wishlist is empty.
            </p>
          ) : (
            heartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border dark:border-gray-700">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div className="flex-1 mx-4">
                  <h4 className="font-bold dark:text-white text-sm">{item.title}</h4>
                  <p className="text-pink-600 font-semibold text-sm">{item.price}</p>
                  
                  {/* Add The Product Directly To Your Cart */}
                  <button 
                    onClick={() => {
                      onAddToCartFromHeart(item);
                      onRemoveHeart(item.id);
                    }}
                    className="mt-2 text-xs bg-pink-600 text-white px-3 py-1.5 rounded-md hover:bg-pink-700 transition"
                  >
                    Move to Cart 🛒
                  </button>
                </div>

                <button 
                  onClick={() => onRemoveHeart(item.id)}
                  className="text-red-500 hover:opacity-80 p-2"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};