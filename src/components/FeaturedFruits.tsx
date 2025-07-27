import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Fruit } from '../types';
import { useCart } from '../contexts/CartContext';

interface FeaturedFruitsProps {
  fruits: Fruit[];
}

const FeaturedFruits: React.FC<FeaturedFruitsProps> = ({ fruits }) => {
  const { addToCart } = useCart();
  const seasonalFruits = fruits.filter(fruit => fruit.seasonal);
  
  const scrollLeft = () => {
    const container = document.getElementById('featured-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    const container = document.getElementById('featured-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  if (seasonalFruits.length === 0) return null;
  
  return (
    <section className="py-10 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">时令鲜果 · 当季特选</h2>
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
              aria-label="滚动到上一页"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
              aria-label="滚动到下一页"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        
        <div 
          id="featured-container"
          className="flex overflow-x-auto gap-6 pb-6 snap-x scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {seasonalFruits.map(fruit => (
            <div 
              key={fruit.id} 
              className="flex-none w-72 snap-start bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-[1.02]"
            >
              <div className="h-44 overflow-hidden">
                <img 
                  src={fruit.image} 
                  alt={fruit.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{fruit.name}</h3>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">限时特价</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{fruit.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold text-red-600">¥{fruit.price.toFixed(2)}</div>
                  <button 
                    onClick={() => addToCart(fruit)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm font-medium transition"
                  >
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFruits;