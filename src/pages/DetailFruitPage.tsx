import React from 'react';
import { Plus } from 'lucide-react';
import { Fruit } from '../types';
import { useCart } from '../contexts/CartContext';

interface DetailFruitPageProps {
  fruitSelect: Fruit;
}

const DetailFruitPage: React.FC<DetailFruitPageProps> = ({ fruitSelect }) => {
    console.log(fruitSelect.name)
    return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-8">{fruitSelect.name}</h1>
    </div>
    );
};
export default DetailFruitPage;