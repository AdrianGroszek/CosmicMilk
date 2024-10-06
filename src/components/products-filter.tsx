"use client";

import { ProductType } from "@/app/products/page";
import ProductCard from "./ui/product-card";
import { useSearchParams } from "next/navigation";
import CategoriesLink from "./categories-link";

type ProductsFilterProps = {
  products: ProductType[];
};

export default function ProductsFilter({ products }: ProductsFilterProps) {
  const searchParams = useSearchParams();
  const planet = searchParams.get("planet");

  const filteredProducts =
    planet === "All"
      ? products
      : products.filter(
          (product) =>
            product.planetOfOrigin.toLowerCase() === planet?.toLowerCase(),
        );

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
        <ul className="flex gap-4 text-textdark">
          <CategoriesLink planet={planet} slug="All">
            All Products
          </CategoriesLink>
          <CategoriesLink planet={planet} slug="Lactarius-7">
            Lactarius-7
          </CategoriesLink>
          <CategoriesLink planet={planet} slug="Capriox-B">
            Capriox-B
          </CategoriesLink>
          <CategoriesLink planet={planet} slug="Nebula-3">
            Nebula-3
          </CategoriesLink>
        </ul>
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
