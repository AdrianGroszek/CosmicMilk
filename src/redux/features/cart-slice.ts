import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ProductType } from "./products-slice";

export type VariantType = {
  price: number;
  capacity: string;
};

export type CartProductType = {
  product: ProductType;
  quantity: number;
  selectedVariant: VariantType[];
  totalPrice: number;
};

export type CartType = {
  products: CartProductType[];
  totalPrice: number;
  totalItems: number;
};

const initialState: CartType = {
  products: [],
  totalPrice: 0,
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: {
      prepare(product: ProductType, selectedVariant: VariantType) {
        const quantity = 1;
        const totalPrice = selectedVariant.price * quantity;
        return {
          payload: {
            product,
            quantity,
            selectedVariant: [selectedVariant],
            totalPrice,
          },
        };
      },
      reducer(state: CartType, action: PayloadAction<CartProductType>) {
        const existingProductIndex = state.products.findIndex(
          (product) =>
            product.product.id === action.payload.product.id &&
            product.selectedVariant[0].capacity ===
              action.payload.selectedVariant[0].capacity,
        );

        if (existingProductIndex >= 0) {
          const existingProduct = state.products[existingProductIndex];
          existingProduct.quantity += action.payload.quantity;
          existingProduct.totalPrice += action.payload.totalPrice;
        } else {
          state.products.push(action.payload);
        }

        state.totalItems = state.products.reduce(
          (total, product) => total + product.quantity,
          0,
        );
        state.totalPrice = state.products.reduce(
          (total, product) => total + product.totalPrice,
          0,
        );
      },
    },

    increaseQuantity: (state, action: PayloadAction<CartProductType>) => {
      const existingProduct = state.products.find(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.selectedVariant[0].capacity ===
            action.payload.selectedVariant[0].capacity,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice += existingProduct.selectedVariant[0].price;
      }

      state.totalItems = state.products.reduce(
        (total, item) => total + item.quantity,
        0,
      );
      state.totalPrice = state.products.reduce(
        (total, item) => total + item.totalPrice,
        0,
      );
    },

    decreaseQuantity: (state, action: PayloadAction<CartProductType>) => {
      const existingProduct = state.products.find(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.selectedVariant[0].capacity ===
            action.payload.selectedVariant[0].capacity,
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          existingProduct.totalPrice -=
            existingProduct.selectedVariant[0].price;
        } else {
          state.products = state.products.filter(
            (item) =>
              !(
                item.product.id === existingProduct.product.id &&
                item.selectedVariant[0].capacity ===
                  existingProduct.selectedVariant[0].capacity
              ),
          );
        }
      }

      state.totalItems = state.products.reduce(
        (total, item) => total + item.quantity,
        0,
      );
      state.totalPrice = state.products.reduce(
        (total, item) => total + item.totalPrice,
        0,
      );
    },
  },
});

export const { addProductToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
