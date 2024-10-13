"use client";

import { type ProductType, setProducts } from "@/redux/features/products-slice";
import ProductCard from "./ui/product-card";
import { useAppSelector } from "@/redux/store";
import { getProducts } from "@/services/apiProducts";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function RelatedProducts() {
  const [randomProducts, setRandomProducts] = useState<ProductType[]>([]);
  const dispatch = useDispatch();
  const productsState = useAppSelector(
    (state) => state.productsReducer.products,
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProducts();
        dispatch(setProducts(fetchedProducts));
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    }

    if (!productsState || productsState.length === 0) {
      fetchProducts();
    }
  }, [productsState, dispatch]);

  useEffect(() => {
    if (productsState.length > 0) {
      const uniqueRandomProducts = new Set<number>();

      while (uniqueRandomProducts.size < 3) {
        const randomIndex = Math.floor(Math.random() * productsState.length);
        uniqueRandomProducts.add(randomIndex);
      }

      const randomThreeProducts = Array.from(uniqueRandomProducts).map(
        (index) => productsState[index],
      );

      setRandomProducts(randomThreeProducts);
    }
  }, [productsState]);

  return (
    <div className="mt-10 flex flex-col items-center">
      <h3 className="mb-5 text-center text-xl font-bold">Related Products</h3>
      <ul className="mb-4 flex h-full gap-1 overflow-x-auto rounded-xl lg:w-[1000px]">
        {randomProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ul>
    </div>
  );
}
