import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/redux/features/products-slice";
import cartReducer from "@/redux/features/cart-slice";
import { type TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    productsReducer,
    cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
