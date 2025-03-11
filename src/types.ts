export interface Food {
  id: string;
  name: string;
  category: Category;
  numberInStock: number;
  price: number;
  imageUrl: string;
  isFavored?: boolean;
}

export interface Category {
  id: string;
  name: string;
}
