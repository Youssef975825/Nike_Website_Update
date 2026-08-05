import React from 'react';
import type { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  if (!isOpen) return null;

  // Calculating The Total
  const totalPrice = cartItems.reduce((sum, item) => {
    const numPrice = parseFloat(item.price.replace('$', ''));
    return sum + numPrice * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 h-full shadow-2xl flex flex-col p-6 transition-all">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b dark:border-gray-800">
          <h2 className="text-2xl font-bold dark:text-white">Your Cart 🛒</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl font-bold"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-20">
              Your cart is currently empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border dark:border-gray-700">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div className="flex-1 mx-4">
                  <h4 className="font-bold dark:text-white text-sm">{item.title}</h4>
                  <p className="text-pink-600 font-semibold text-sm">{item.price}</p>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2 mt-2">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-xs dark:text-white"
                    >-</button>
                    <span className="text-sm font-bold dark:text-white">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-xs dark:text-white"
                    >+</button>
                  </div>
                </div>

                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="text-red-500 hover:opacity-80 p-2"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {cartItems.length > 0 && (
          <div className="pt-4 border-t dark:border-gray-800">
            <div className="flex justify-between mb-4 text-lg font-bold dark:text-white">
              <span>Total:</span>
              <span className="text-pink-600">${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => alert('Proceeding to Checkout! 🚀')}
              className="w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 transition shadow-lg"
            >
              Checkout Now
            </button>
          </div>
        )}

      </div>
    </div>
  );
};