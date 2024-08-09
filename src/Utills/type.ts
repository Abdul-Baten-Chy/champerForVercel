export type Tproduct = {
  _id?: string;
  name: string;
  price: number;
  sizes: string[];
  rating: number;
  category: string;
  quantity: number;
  description: string;
  brand: string;
  userQuantity?: number;
  images: string[];
  isFeatured: boolean;
};

export type Tresult = {
  success: boolean;
  statusCode: number;
  message: string;
  data: Tproduct[];
};
export type TresultSingle = {
  id?: string;
  success: boolean;
  statusCode: number;
  message: string;
  data: Tproduct;
};
export type TqueryObj = {
  category: string;
  maxPrice: number;
  minPrice: number;
  searchTerm: string;
};
export type newObj = {
  subTotal?: number;
  price?: number;
  quantity?: number;
  productName?: string;
  id?: string;
};
export type TqueryParam = {
  searchTerm?: string;
};
export type TexistingItem = {
  userQuantity?: number;
};
export type TuserDetails = {
  id?: string;
  quantity?: number;
  address?: string;
  email?: string;
  name?: string;
  userProductInfo?: newObj[];
  userTotalPay?: number;
};
