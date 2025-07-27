import React from 'react';
import Hero from '../components/Hero';
import FeaturedFruits from '../components/FeaturedFruits';
import FruitCatalog from '../components/FruitCatalog';
import { fruits } from '../data/fruits';
interface HomePageProps {
  redicrectToAllFruit: () => void;
}

const HomePage: React.FC<HomePageProps> = ({redicrectToAllFruit}) => {
  return (
    <div className="flex-grow">
      <Hero redicrectToAllFruit = {redicrectToAllFruit}/>
      <FeaturedFruits fruits={fruits} />
      <FruitCatalog fruits={fruits} />
    </div>
  );
};

export default HomePage; 