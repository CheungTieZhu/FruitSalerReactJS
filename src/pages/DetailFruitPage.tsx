import React from 'react';
import { Fruit } from '../types';
import QuantitySelector from './QuantitySelector';

interface DetailFruitPageProps {
  fruitSelect: Fruit;
}

const DetailFruitPage: React.FC<DetailFruitPageProps> = ({ fruitSelect }) => {
  const averageRating = fruitSelect.customerComment.reduce((acc, review) => acc + review.rating, 0) / fruitSelect.customerComment.length;
  return (
    <div className="max-w-6xl mx-auto p-5 caret-transparent">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-md p-6 mb-8">
        {/* 产品图片区域 - 添加 flex 和高度控制 */}
        <div className="relative md:w-1/2 flex">
          <div className="w-full flex flex-col">
            <div className="flex-1 relative overflow-hidden">
              <img
                src={fruitSelect.image}
                alt={fruitSelect.name}
                className="w-full h-full object-cover rounded-lg"
              />
              {fruitSelect.seasonal && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                  时令水果
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 产品信息区域 - 添加 flex 和高度控制 */}
        <div className="md:w-1/2 flex flex-col">
          <div className="flex-1">
            <div className="mb-6">
              <span className="text-gray-500 text-sm">{fruitSelect.category}</span>
              <h1 className="text-3xl font-bold text-gray-800 mt-2">{fruitSelect.name}</h1>
              <div className="flex items-center mt-3">
                <span className="text-2xl font-bold text-red-600">¥{fruitSelect.price}</span>
                <span className="text-gray-500 ml-1">/{fruitSelect.unit}</span>
              </div>
            </div>

            <div className="py-5 border-t border-b border-gray-200 my-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">产品描述</h3>
              <p className="text-gray-600 leading-relaxed">{fruitSelect.description}</p>
            </div>

            <div className="mb-6">
              <span className="text-green-600">
                库存: {fruitSelect.stock}{fruitSelect.unit}
              </span>
            </div>
          </div>

          <div className="mt-auto">
              <QuantitySelector stock={fruitSelect.stock} fruitSelect={fruitSelect}/>
          </div>
        </div>
      </div>

      {/* 用户评价部分 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">用户评价</h2>

        {/* 评分概览 */}
        <div className="flex items-center mb-8">
          <div className="text-4xl font-bold mr-4">{averageRating.toFixed(1)}</div>
          <div className="mr-6">
            <div className="flex items-center mb-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-gray-500 text-sm">{fruitSelect.customerComment.length} 条评价</div>
          </div>
          <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition duration-300">
            写评价
          </button>
        </div>

        {/* 评价列表 */}
        <div className="space-y-6">
          {fruitSelect.customerComment.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
              <div className="flex items-center mb-3">
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">{review.user}</div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* 查看更多评价按钮 */}
        {fruitSelect.customerComment.length > 3 && (
          <div className="mt-6 text-center">
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              查看更多评价
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default DetailFruitPage;