import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  toggleCart: () => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  isAuthPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleCart, isMobileMenuOpen, toggleMobileMenu, isAuthPage }) => {
  const { getTotalItems } = useCart();
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-green-600">鲜果之家</Link>
        </div>
        
        {!isAuthPage && (<div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition"
                  }
                >
                  首页
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/all-fruits" 
                  className={({ isActive }) => 
                    isActive ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition"
                  }
                >
                  全部水果
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/seasonal" 
                  className={({ isActive }) => 
                    isActive ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition"
                  }
                >
                  季节特选
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition"
                  }
                >
                  关于我们
                </NavLink>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center text-gray-700 hover:text-green-600 transition"
            >
              <User size={20} className="mr-1" />
              <span>登录/注册</span>
            </Link>
            
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full transition"
              aria-label="购物车"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>)}
        
        <div className="flex md:hidden">
          <Link
            to="/login"
            className="flex items-center mr-2 p-2 text-gray-700 hover:bg-gray-100 rounded-full transition"
          >
            <User size={22} />
          </Link>
          
          <button 
            onClick={toggleCart}
            className="relative p-2 mr-2 text-gray-700 hover:bg-gray-100 rounded-full transition"
            aria-label="购物车"
          >
            <ShoppingCart size={22} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
          
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition"
            aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md">
          <nav>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `block py-2 ${isActive ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition"}`
                  }
                >
                  首页
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/all-fruits" 
                  className={({ isActive }) => 
                    `block py-2 ${isActive ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition"}`
                  }
                >
                  全部水果
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/seasonal" 
                  className={({ isActive }) => 
                    `block py-2 ${isActive ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition"}`
                  }
                >
                  季节特选
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `block py-2 ${isActive ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition"}`
                  }
                >
                  关于我们
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/login" 
                  className={({ isActive }) => 
                    `block py-2 ${isActive ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition"}`
                  }
                >
                  登录/注册
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;