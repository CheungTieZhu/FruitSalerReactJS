import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { fruit, quantity } = item;
  
  const handleIncrement = () => {
    updateQuantity(fruit.id, quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(fruit.id, quantity - 1);
    } else {
      removeFromCart(fruit.id);
    }
  };
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200 last:border-b-0">
      <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
        <img 
          src={fruit.image} 
          alt={fruit.name} 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h4 className="text-sm font-medium">{fruit.name}</h4>
        <p className="text-xs text-gray-500">{fruit.unit} · {fruit.price.toFixed(2)}元</p>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button 
            onClick={handleDecrement}
            className="px-2 py-1 text-gray-500 hover:bg-gray-100 transition"
            aria-label="减少数量"
          >
            {quantity === 1 ? <Trash2 size={16} className="text-red-500" /> : <Minus size={16} />}
          </button>
          
          <span className="px-2 text-sm select-none">
            {quantity}
          </span>
          
          <button 
            onClick={handleIncrement}
            className="px-2 py-1 text-gray-500 hover:bg-gray-100 transition"
            aria-label="增加数量"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <div className="ml-4 text-right w-16">
          <span className="text-sm font-medium">
            ¥{(fruit.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;