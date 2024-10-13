"use client";

import { type ProductType } from "@/redux/features/products-slice";
import StatusTag from "./ui/status-tag";
import Button from "./ui/button";
import { useState } from "react";

type ProductInfoProps = {
  singleProduct: ProductType;
};

type ProductVariantsType = {
  price: number;
  capacity: string;
};

export default function ProductInfo({ singleProduct }: ProductInfoProps) {
  const [selectedProductVariants, setSelectedProductVariants] = useState<
    ProductVariantsType | undefined
  >(singleProduct.variants.at(0));

  const productVariantsArray: ProductVariantsType[] = singleProduct.variants;

  function handleSelectProductVariant(index: number) {
    setSelectedProductVariants(singleProduct.variants.at(index));
  }

  return (
    <div className="sticky top-[87px] flex flex-col gap-2 lg:h-full lg:w-2/3 lg:pb-4 lg:pl-8">
      <h3 className="font-bold">
        {singleProduct.name} ({selectedProductVariants?.capacity})
      </h3>

      <div className="flex items-center justify-between">
        <span className="font-light text-cosmicgreen">
          ${selectedProductVariants?.price}
        </span>
        {singleProduct.status && <StatusTag status="new" absolute={false} />}
      </div>

      <p>{singleProduct.description}</p>

      <div>
        <p>
          <span className="font-bold">Capacity:</span>{" "}
          {selectedProductVariants?.capacity}
        </p>
        <p>
          <span className="font-bold">Planet of Origin:</span>{" "}
          {singleProduct.planetOfOrigin}
        </p>
        <p>
          <span className="font-bold">Type:</span> {singleProduct.type}
        </p>
        <p>
          <span className="font-bold">Storage:</span>{" "}
          {singleProduct.storageInstructions}
        </p>
        <p>
          <span className="font-bold">Nutritional Information:</span>{" "}
          {singleProduct.nutritionalInfo}
        </p>
      </div>

      <ul className="mt-2 flex gap-2">
        {productVariantsArray.map((variant, index) => (
          <li key={index}>
            <Button
              onClick={() => handleSelectProductVariant(index)}
              variant="btn"
              fill={
                selectedProductVariants?.capacity === variant.capacity
                  ? "solid"
                  : "border"
              }
              size="medium"
            >
              {variant.capacity}
            </Button>
          </li>
        ))}
      </ul>

      <button className="relative mt-5 w-full overflow-hidden rounded-lg border-2 border-cosmicgreen bg-cosmicgreen px-4 py-2 font-cosmic text-base font-bold text-navybluedark after:absolute after:left-[-75px] after:top-[-50px] after:h-[155px] after:w-[50px] after:rotate-[35deg] after:bg-neutral-50 after:opacity-20 after:duration-500 after:ease-out after:content-[''] hover:bg-cosmicgreendark hover:after:left-[120%]">
        ADD TO CART
      </button>
    </div>
  );
}
