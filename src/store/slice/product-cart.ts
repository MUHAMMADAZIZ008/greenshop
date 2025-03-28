import { ProductT } from "@/common/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface CartProduct extends ProductT {
  total_price: number;
  order_quantity: number;
  order_size: string;
}

export interface CounterState {
  total: number;
  sub_total: number;
  coupon_discount: number;
  shipping: number;
  products: CartProduct[];
}

const initialState: CounterState = {
  total: 0,
  sub_total: 0,
  coupon_discount: 0,
  shipping: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: { type: string; payload: CartProduct }) => {
      const currentProduct = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (!currentProduct) {
        return {
          ...state,
          products: [...state.products, action.payload],
          sub_total: state.sub_total + action.payload.total_price,
          shipping: (state.products.length + 1) * 5,
          total:  state.sub_total + action.payload.total_price + (state.products.length + 1) * 5,
        };
      }
      return state;
    },
    removeCart: (state, action: { type: string; payload: { id: string } }) => {
      const newProducts = state.products.filter(
        (item) => item._id !== action.payload.id
      );
      return {
        ...state,
        products: newProducts,
        sub_total: newProducts.reduce((acc, item) => acc + item.total_price, 0),
        shipping: newProducts.length * 5,
        total:
          newProducts.length * 5 +
          newProducts.reduce((acc, item) => acc + item.total_price, 0),
      };
    },
    productIncrement: (
      state,
      action: { type: string; payload: { id: string } }
    ) => {
      const currentProduct = state.products.find(
        (item) => item._id === action.payload.id
      );
      if (currentProduct) {
        const newProduct = state.products.map((item) => {
          if (item._id === currentProduct._id) {
            return { ...item, order_quantity: item.order_quantity + 1 };
          } else {
            return item;
          }
        });
        return { ...state, products: newProduct };
      }
      return state;
    },
    productDecrement: (
      state,
      action: { type: string; payload: { id: string } }
    ) => {
      const currentProduct = state.products.find(
        (item) => item._id === action.payload.id
      );
      if (currentProduct) {
        const newProduct = state.products.map((item) => {
          if (item._id === currentProduct._id) {
            return { ...item, order_quantity: item.order_quantity - 1 };
          } else {
            return item;
          }
        });
        return { ...state, products: newProduct };
      }
      return state;
    },
    updateProduct: (
      state,
      action: { type: string; payload: Partial<CartProduct> }
    ) => {
      const currentProduct = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (currentProduct) {
        const newProducts = state.products.map((item) => {
          if (currentProduct._id === item._id) {
            return { ...item, ...action.payload };
          } else {
            return item;
          }
        });
        return { ...state, products: newProducts };
      }
      return state;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeCart,
  productIncrement,
  productDecrement,
  updateProduct,
} = cartSlice.actions;
