import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">鲜果之家</h3>
            <p className="text-gray-600 text-sm mb-4">
              我们致力于为您提供最新鲜、最优质的水果，让健康与美味常伴您左右。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-green-600 transition text-sm">首页</Link></li>
              <li><Link to="/all-fruits" className="text-gray-600 hover:text-green-600 transition text-sm">全部水果</Link></li>
              <li><Link to="/seasonal" className="text-gray-600 hover:text-green-600 transition text-sm">季节特选</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-green-600 transition text-sm">关于我们</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">帮助中心</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">配送说明</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">退换政策</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">支付方式</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">常见问题</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>客服电话：400-123-4567</li>
              <li>工作时间：9:00-18:00</li>
              <li>邮箱：service@fruit.example.com</li>
              <li>地址：中国上海市静安区某某路123号</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 鲜果之家 版权所有 沪ICP备123456789号
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;