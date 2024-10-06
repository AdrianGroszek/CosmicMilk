import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/redux/features/products-slice";

const store = configureStore({
  reducer: {
    productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
