import React from 'react';
interface HeroProps {
  redirect: (url: string) => void;
}

const Hero: React.FC<HeroProps> = ({redirect}) => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">新鲜水果，健康生活</h1>
            <p className="text-lg md:text-xl mb-6 text-green-100">
              优选全球优质水果，每一口都新鲜美味
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
              onClick= {() => redirect('/All-fruits')}
              className="bg-white text-green-700 hover:bg-green-50 transition py-3 px-6 rounded-lg font-medium">
                立即选购
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-green-700 transition py-3 px-6 rounded-lg font-medium">
                了解更多
              </button>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                <p className="text-sm font-medium">产地直采</p>
                <p className="text-xs text-green-100">源头把控品质</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                <p className="text-sm font-medium">新鲜配送</p>
                <p className="text-xs text-green-100">24小时送达</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                <p className="text-sm font-medium">品质保障</p>
                <p className="text-xs text-green-100">不满意随时退</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform md:rotate-3 transition hover:rotate-0">
              <img 
                src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="各种新鲜水果" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden md:block">
              <div className="bg-white text-green-700 shadow-lg rounded-full py-2 px-4 font-medium animate-bounce">
                限时折扣 🔥
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;