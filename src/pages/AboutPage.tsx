import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">关于我们</h1>
        
        <div className="mb-12">
          <img 
            src="https://tse2-mm.cn.bing.net/th/id/OIP-C.2sFA0WDs2kQB-H7pkIALZwHaHa?rs=1&pid=ImgDetMain" 
            alt="鲜果之家团队" 
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
          
          <h2 className="text-2xl font-semibold mb-4">我们的故事</h2>
          <p className="text-gray-700 mb-4">
            鲜果之家成立于2018年,由一群热爱水果、关注健康生活的年轻人共同创立。我们的创始团队来自农业、电商和物流领域，
            拥有丰富的行业经验和专业知识。创立之初，我们就立志要为消费者提供最新鲜、最优质的水果。
          </p>
          <p className="text-gray-700 mb-4">
            经过几年的发展，鲜果之家已经成为值得信赖的优质水果供应商，我们与全国各地的优质果园建立了长期合作关系，
            从源头把控品质，确保每一个送到消费者手中的水果都是精挑细选的上乘之作。
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">我们的使命与愿景</h2>
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-medium text-green-700 mb-2">使命</h3>
            <p className="text-gray-700">
              为每一位消费者提供新鲜、健康、安全的优质水果，促进健康生活方式的普及。
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-green-700 mb-2">愿景</h3>
            <p className="text-gray-700">
              成为中国领先的高品质水果供应平台，让人人都能便捷地享用到优质水果。
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">我们的承诺</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border p-6 rounded-lg text-center">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">新鲜保证</h3>
              <p className="text-gray-600">
                我们承诺提供最新鲜的水果，从采摘到配送的全程冷链保鲜。
              </p>
            </div>
            <div className="border p-6 rounded-lg text-center">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">品质承诺</h3>
              <p className="text-gray-600">
                严格的品控标准，确保每一份水果都符合高品质要求。
              </p>
            </div>
            <div className="border p-6 rounded-lg text-center">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">快速配送</h3>
              <p className="text-gray-600">
                高效的物流系统，确保水果在最佳状态送达您的手中。
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">联系我们</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">联系方式</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>客服电话: 400-123-4567</li>
                  <li>电子邮箱: contact@fruitshome.com</li>
                  <li>工作时间: 周一至周日 9:00-21:00</li>
                  <li>公司地址: 上海市浦东新区张江高科技园区金科路2889号</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">关注我们</h3>
                <p className="text-gray-700 mb-4">
                  关注我们的社交媒体，获取最新的水果资讯、促销活动和健康贴士。
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    <span className="sr-only">微信</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.58 9.43c.37 0 .67.3.67.67 0 .37-.3.67-.67.67-.37 0-.67-.3-.67-.67 0-.37.3-.67.67-.67zm6.84 0c.37 0 .67.3.67.67 0 .37-.3.67-.67.67-.37 0-.67-.3-.67-.67 0-.37.3-.67.67-.67zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.86 14.86c-1.05 0-1.86-.16-2.89-.47l-2.88 1.43.82-2.47c-1.4-1.01-2.19-2.23-2.19-3.76 0-2.79 2.64-4.86 6.14-4.86 3.03 0 5.67 1.84 6.21 4.25-.2-.02-.43-.03-.66-.03-2.96 0-5.29 2.27-5.29 4.99 0 .38.05.74.12 1.1-.12.01-.24.02-.36.02zM17.6 14.1l.57 1.89-2.1-.93c-.79.24-1.63.33-2.39.33-2.79 0-4.99-1.93-4.99-4.29S10.9 6.72 13.68 6.72c2.87 0 5.09 1.93 5.09 4.29 0 1.3-.76 2.46-1.77 3.29h-.4z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    <span className="sr-only">微博</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10.9,9.2c-2.5-0.5-5.4,1.2-6.5,3.8c-1.2,2.9-0.1,6.2,2.7,7.2c3,1.1,6.4-0.8,7.6-3.7 C15.8,13.4,13.4,9.7,10.9,9.2z M9.7,17.8c-0.6,0.9-1.8,1.3-2.8,0.8c-0.9-0.4-1.2-1.6-0.6-2.5c0.6-0.9,1.8-1.3,2.8-0.9 C10,15.8,10.3,16.9,9.7,17.8z M11.9,15.4c-0.2,0.4-0.7,0.6-1.1,0.3c-0.4-0.2-0.5-0.7-0.3-1c0.2-0.4,0.7-0.5,1-0.3 C12,14.6,12.1,15.1,11.9,15.4z M15.3,6.3c-0.7,0-1.4,0.2-1.9,0.5c0-0.4,0-0.7,0-0.8c0-0.6-0.5-0.5-0.5-0.5h-2.2 c-0.6,0-0.8,0.5-0.8,0.5c0,0,0,8.3,0,9.8c0,0.1,0,0.9,0.8,0.9h2.9c0.4,0,0.6-0.2,0.7-0.4c1.2,0.4,2.5,0.1,3-0.1 c3.2-1.6,1.3-7.2-1.3-7.2c-0.1,0-0.2,0-0.3,0L15.3,6.3z M14.9,15c-1.7,0-3.1-0.8-3.1-1.8c0-1,1.4-1.8,3.1-1.8 c1.7,0,3.1,0.8,3.1,1.8C18,14.2,16.6,15,14.9,15z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    <span className="sr-only">抖音</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.7 10.6h-2C19.7 5.1 15.2 1 9.6 1H7.5v10.8h2.1V9.6c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v10.8c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-2.1H7.5v2.1c0 2.8 2.3 5.1 5.1 5.1s5.1-2.3 5.1-5.1v-7.5c1.3 1.3 3 2 4.9 2.1v-2.1c-0.1 0-0.1 0-0.1 0 0-1.1-0.1-2.5-0.8-2.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 