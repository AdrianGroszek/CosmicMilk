import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ProductType = {
  id: number;
  created_at: string;
  name: string;
  description: string;
  images: string[];
  variants: { price: number; capacity: string }[];
  planetOfOrigin: string;
  type: string;
  storageInstructions: string;
  nutritionalInfo: string;
  status: "New" | null;
};

type ProductsState = {
  products: ProductType[];
  product: ProductType | undefined;
};

const initialState: ProductsState = {
  products: [],
  product: undefined,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    getProduct: (state, action: PayloadAction<number>) => {
      state.product =
        state.products.find((product) => product.id === action.payload) ||
        undefined;
    },
  },
});

export const { setProducts, getProduct } = productsSlice.actions;
export default productsSlice.reducer;
