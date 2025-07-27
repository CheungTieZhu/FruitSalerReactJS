import React from 'react';
import Hero from '../components/Hero';
import FeaturedFruits from '../components/FeaturedFruits';
import FruitCatalog from '../components/FruitCatalog';
import { fruits } from '../data/fruits';
import { Fruit } from '../types';

interface HomePageProps {
  redirect: (url: string) => void;
  fruitSelect: (fruit: Fruit) => void;
}

const HomePage: React.FC<HomePageProps> = ({redirect, fruitSelect}) => {
  return (
    <div className="flex-grow">
      <Hero redirect = {redirect}/>
      <FeaturedFruits fruits={fruits} redirect={redirect} fruitSelect={fruitSelect}/>
      <FruitCatalog fruits={fruits} redirect={redirect} fruitSelect={fruitSelect}/>
    </div>
  );
};

export default HomePage; 