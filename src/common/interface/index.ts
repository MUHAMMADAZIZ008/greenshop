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
