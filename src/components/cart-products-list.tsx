"use client";

import { useAppSelector } from "@/redux/store";
import CartProductItem from "./cart-product-item";

export default function CartProductsList() {
  const { products } = useAppSelector((state) => state.cartReducer);
  return (
    <ul className="no-scrollbar flex max-h-[600px] flex-col gap-2 overflow-y-scroll sm:max-h-[700px]">
      {products.map((product, index) => (
        <CartProductItem key={index} product={product} />
      ))}
    </ul>
  );
}
