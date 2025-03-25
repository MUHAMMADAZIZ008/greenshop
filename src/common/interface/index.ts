export interface CategoryT {
  _id: string;
  name: string;
  description: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CategoryResponse {
  status: number;
  message: string;
  data: CategoryT[];
}

export interface ProductT {
  _id: string;
  category: CategoryT;
  name: string;
  description: string;
  price: number;
  discount: number;
  discount_price: number;
  quantity: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductResponse {
  data: ProductT[];
  message: string;
  status: number;
  totalCount: number;
}

export interface FilterT {
  page?: number;
  limit?: number;
  category?: string;
  maxPrice?: number;
  minPrice?: number;
  size?: string;
}
