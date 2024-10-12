"use client";

import { setProducts, type ProductType } from "@/redux/features/products-slice";
import ProductCard from "./ui/product-card";
import { useSearchParams } from "next/navigation";
import FilterCategories from "./filter-categories";
import { useDispatch } from "react-redux";
import { useAppSelector, type AppDispatch } from "@/redux/store";
import { useEffect } from "react";

type ProductsFilterProps = {
  products: ProductType[];
};

export default function ProductsFilter({ products }: ProductsFilterProps) {
  const searchParams = useSearchParams();
  const planet = searchParams.get("planet");
  const dispatch = useDispatch<AppDispatch>();
  const productsState = useAppSelector(
    (state) => state.productsReducer.products,
  );

  const filteredProducts =
    planet === "All"
      ? products
      : products.filter(
          (product) =>
            product.planetOfOrigin.toLowerCase() === planet?.toLowerCase(),
        );

  useEffect(() => {
    dispatch(setProducts(products));
    console.log(productsState);
  }, [dispatch, products, productsState]);

  return (
    <>
      <div className="sticky top-[55px] z-10 bg-navybluelight px-2 pt-2 lg:px-10 xl:px-20">
        <h3 className="px-1 font-bold">
          Shop By Categories:{" "}
          <span className="font-light text-cosmicgreen">
            {planet === "All" ? "All Products" : planet}
          </span>
        </h3>

        {/* Products categories filter by planets */}
        <FilterCategories planet={planet} />
      </div>

      {/* Products list */}
      <ul className="grid grid-cols-2 gap-2 px-3 lg:grid-cols-3 lg:px-10 xl:grid-cols-4 xl:px-20">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}
