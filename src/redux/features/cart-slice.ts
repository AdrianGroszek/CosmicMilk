import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "./products-slice";

export type CartProductType = {
  product: ProductType;
  quantity: number;
  selectedVariant: { price: number; capacity: string }[];
  totalPrice: number;
};

export type CartType = {
  products: CartProductType[];
  totalPrice: number;
  totalItems: number;
};

const initialState = {
  products: [],
  totalPrice: 0,
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
