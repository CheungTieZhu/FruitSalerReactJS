import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
// 页面
import HomePage from './pages/HomePage';
import AllFruitsPage from './pages/AllFruitsPage';
import SeasonalFruitsPage from './pages/SeasonalFruitsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailFruitPage from './pages/DetailFruitPage';
import { fruits } from './data/fruits';
import { Fruit } from './types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [fruitSelect, setFruitSelect] = useState(fruits[0]);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const navigate = useNavigate();
  const redirect = (url: string) => {
    navigate(url);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // 当路由变化时关闭移动菜单
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [location.pathname]);
  
  // 检查当前是否在登录或注册页面
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header 
          toggleCart={toggleCart} 
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          isAuthPage = {isAuthPage}
        />
        
        <main className={isAuthPage ? "flex-grow" : "flex-grow"}>
          <Routes>
            <Route path="/" element={<HomePage redirect = {redirect} fruitSelect={(fruit: Fruit)=> setFruitSelect(fruit)}/>} />
            <Route path="/all-fruits" element={<AllFruitsPage redirect = {redirect} fruitSelect={(fruit: Fruit)=> setFruitSelect(fruit)}/>} />
            <Route path="/seasonal" element={<SeasonalFruitsPage redirect = {redirect} fruitSelect={(fruit: Fruit)=> setFruitSelect(fruit)}/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/details" element={<DetailFruitPage fruitSelect={fruitSelect}/>} />
          </Routes>
        </main>
        
        {!isAuthPage && <Footer />}
        
        {!isAuthPage && <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
      </div>
    </CartProvider>
  );
}

export default App;