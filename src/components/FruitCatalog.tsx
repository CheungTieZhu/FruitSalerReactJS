import React, { useState, useEffect } from 'react';
import FruitCard from './FruitCard';
import { Fruit } from '../types';
import { categories } from '../data/fruits';

interface FruitCatalogProps {
  fruits: Fruit[];
}

const FruitCatalog: React.FC<FruitCatalogProps> = ({ fruits }) => {
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [filteredFruits, setFilteredFruits] = useState<Fruit[]>(fruits);
  
  // 当类别或水果列表变化时，应用过滤
  useEffect(() => {
    if (activeCategory === '全部') {
      setFilteredFruits(fruits);
    } else {
      setFilteredFruits(fruits.filter(fruit => fruit.category === activeCategory));
    }
  }, [activeCategory, fruits]);
  
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">精选水果</h2>
        
        <div className="mb-6 overflow-x-auto pb-2">
          <div className="flex space-x-4 min-w-max">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === '全部' 
                  ? 'bg-green-500 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveCategory('全部')}
            >
              全部
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${activeCategory === category 
                    ? 'bg-green-500 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFruits.map(fruit => (
            <FruitCard key={fruit.id} fruit={fruit} />
          ))}
        </div>
        
        {filteredFruits.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">该分类下暂无水果</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FruitCatalog;