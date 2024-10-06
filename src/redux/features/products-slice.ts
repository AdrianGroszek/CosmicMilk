import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ProductType = {
  id: number;
  created_at: string;
  name: string;
  description: string;
  images: string[];
  variants: { price: number; opacity: string }[];
  planetOfOrigin: string;
  type: string;
  storageInstructions: string;
  nutritionalInfo: string;
  status: "New" | null;
};

type ProductsState = {
  products: ProductType[];
};

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
