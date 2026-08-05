export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  rating: number;
  image: string;
  colors?: string[];
}

export interface CartItem extends Product{
    quantity: number;
}

export type HeartItem = Product;

export interface Review {
  name: string;
  image: string;
  comment: string;
  rating: number;
}