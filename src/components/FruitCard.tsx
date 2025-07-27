import React from 'react';
import { ShoppingCart, Plus } from 'lucide-react';
import { Fruit } from '../types';
import { useCart } from '../contexts/CartContext';

interface FruitCardProps {
  fruit: Fruit;
}

const FruitCard: React.FC<FruitCardProps> = ({ fruit }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={fruit.image} 
          alt={fruit.name}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
        {fruit.seasonal && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            应季水果
          </span>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{fruit.name}</h3>
          <span className="text-sm text-gray-600">{fruit.category}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{fruit.description}</p>
        
        <div className="flex justify-between items-center mt-2">
          <div className="text-lg font-semibold text-red-600">
            ¥{fruit.price.toFixed(2)}<span className="text-sm text-gray-500 font-normal">/{fruit.unit}</span>
          </div>
          
          <button
            onClick={() => addToCart(fruit)}
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition duration-200 transform hover:scale-105"
            aria-label={`添加${fruit.name}到购物车`}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FruitCard;