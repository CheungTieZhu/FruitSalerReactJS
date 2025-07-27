import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import CartItem from './CartItem';
import { useCart } from '../contexts/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <ShoppingCart className="h-6 w-6 text-green-600" />
                <h2 className="ml-2 text-lg font-medium">购物车</h2>
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {cartItems.length} 种商品
                </span>
              </div>
              
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition"
                aria-label="关闭购物车"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length > 0 ? (
                cartItems.map(item => (
                  <CartItem key={item.fruit.id} item={item} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <ShoppingCart size={64} className="text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg mb-2">购物车空空如也</p>
                  <p className="text-gray-400 text-sm text-center">
                    快去挑选喜欢的水果吧！
                  </p>
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">小计</span>
                  <span className="text-lg font-bold text-red-600">¥{getTotalPrice().toFixed(2)}</span>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={clearCart}
                    className="flex-1 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
                  >
                    清空购物车
                  </button>
                  
                  <button
                    className="flex-1 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                  >
                    前往结算
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;