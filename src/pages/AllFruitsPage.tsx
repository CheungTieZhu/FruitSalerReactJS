import React, { useState } from 'react';
import { fruits, categories } from '../data/fruits';
import FruitCard from '../components/FruitCard';
import { Fruit } from '../types';

interface AllFruitsPageProps {
  fruitSelect: (fruit: Fruit) => void;
  redirect: (url: string) => void;
}
const AllFruitsPage: React.FC<AllFruitsPageProps> = ({fruitSelect,redirect}) => {
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [sortOption, setSortOption] = useState<string>('default');
  // 筛选和排序水果
  const filteredAndSortedFruits = fruits
    .filter(fruit => activeCategory === '全部' || fruit.category === activeCategory)
    .sort((a, b) => {
      switch (sortOption) {
        case 'priceAsc':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        case 'nameAsc':
          return a.name.localeCompare(b.name);
        case 'nameDesc':
          return b.name.localeCompare(a.name);
        default:
          return a.id - b.id;
      }
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">全部水果</h1>
      
      {/* 分类和排序控制 */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <h3 className="font-semibold mb-2">分类:</h3>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-1 rounded-full text-sm ${
                activeCategory === '全部' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveCategory('全部')}
            >
              全部
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeCategory === category ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">排序方式:</h3>
          <select
            className="px-3 py-2 border rounded-md"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">默认排序</option>
            <option value="priceAsc">价格 (低到高)</option>
            <option value="priceDesc">价格 (高到低)</option>
            <option value="nameAsc">名称 (A-Z)</option>
            <option value="nameDesc">名称 (Z-A)</option>
          </select>
        </div>
      </div>
      
      {/* 水果网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAndSortedFruits.map((fruit) => (
          <FruitCard key={fruit.id} fruit={fruit} redirect={redirect} fruitSelect={fruitSelect}/>
        ))}
      </div>
      
      {filteredAndSortedFruits.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">没有找到符合条件的水果</p>
        </div>
      )}
    </div>
  );
};

export default AllFruitsPage; 