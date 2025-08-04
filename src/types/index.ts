export interface Comment {
  id: number;
  user: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

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
  customerComment: Comment[];
}

export interface CartItem {
  fruit: Fruit;
  quantity: number;
}