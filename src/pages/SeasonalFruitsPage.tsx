import React from 'react';
import { fruits } from '../data/fruits';
import FruitCard from '../components/FruitCard';
import { Fruit } from '../types';

interface  SeasonalFruitsPageProps {
  redirect: (url: string) => void;
  fruitSelect: (fruit: Fruit) => void;
}

const SeasonalFruitsPage: React.FC<SeasonalFruitsPageProps> = ({redirect, fruitSelect}) => {
  // 过滤季节性水果
  const seasonalFruits = fruits.filter(fruit => fruit.seasonal);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">季节特选水果</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          季节水果是在当季收获的水果，新鲜度最高，风味最佳，价格也更加合理。
          我们精选当季水果，为您提供最优质的水果体验。
        </p>
      </div>
      
      <div className="bg-green-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">本季推荐</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {seasonalFruits.slice(0, 2).map(fruit => (
            <div
              onClick={()=>{
              fruitSelect(fruit)
              redirect('details')
            }}
            key={fruit.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={fruit.image} 
                  alt={fruit.name} 
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{fruit.name}</h3>
                <p className="text-gray-600 mb-4">{fruit.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-xl font-bold text-green-600">¥{fruit.price}/{fruit.unit}</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    当季特选
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-6">更多季节水果</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {seasonalFruits.slice(2).map(fruit => (
          <FruitCard key={fruit.id} fruit={fruit} redirect={redirect} fruitSelect={fruitSelect}/>
        ))}
      </div>
      
      {seasonalFruits.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">目前没有季节性水果特选</p>
        </div>
      )}
    </div>
  );
};

export default SeasonalFruitsPage; 