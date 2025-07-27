export interface Fruit {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
  unit: string;
  seasonal: boolean;
}

export interface CartItem {
  fruit: Fruit;
  quantity: number;
}