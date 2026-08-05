import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { AboutSection } from './components/AboutSection';
import { ReviewSection } from './components/ReviewSection';
import { ServicesSection } from './components/ServicesSection';
import { LoginSection, Footer } from './components/FooterAndLogin';
import { CartDrawer } from './components/CartDrawer';
import { HeartList } from './components/HeartList';
import type { CartItem, Product, HeartItem } from './types';

export function App() {
  // States To Carts And Wishlists
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [heartItems, setHeartItems] = useState<HeartItem[]>([]);
  
  // States To Control In Open And Close The Lists
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHeartOpen, setIsHeartOpen] = useState(false);

  //Add Or Increase Function Of Cart
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // The Cart will be opened automatically During Addition
  };

  // Function For Update Quantity Inside Cart
  const handleUpdateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  // Function To remove Product From Cart
  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Function To Switch to Wishlist (Adding Or Deleting)
  const handleAddToHeart = (product: Product) => {
    setHeartItems(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // Function To Remove Product From Wishlist
  const handleRemoveHeart = (id: number) => {
    setHeartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalHeartCount = heartItems.length;

  return (
    <div className="font-sans antialiased bg-white dark:bg-gray-950 text-black dark:text-white">
      {/* Top Bar With Basket Counters, Flip Function, and Opening Function */}
      <Navbar 
        cartCount={totalCartCount} 
        heartCount={totalHeartCount}
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenHeart={() => setIsHeartOpen(true)}
      />

      <HeroSection />
      
      {/* Product Department With Basket Counters, Flip Function, and Opening Function */}
      <ProductsSection 
        onAddToCart={handleAddToCart} 
        onAddToHeart={handleAddToHeart}
        heartItems={heartItems}
      />
      
      <AboutSection />
      <ReviewSection />
      <ServicesSection />
      <LoginSection />
      <Footer />

      {/* Side Shopping Cart List */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* SideBar Favorites List (Wishlist) */}
      <HeartList 
        isOpen={isHeartOpen}
        onClose={() => setIsHeartOpen(false)}
        heartItems={heartItems}
        onRemoveHeart={handleRemoveHeart}
        onAddToCartFromHeart={handleAddToCart}
      />
    </div>
  );
}

export default App;