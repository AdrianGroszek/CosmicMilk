import { type ReactNode } from "react";
import PlanetSlider from "./planet-slider";
import { type StaticImageData } from "next/image";
import ProductsShowcase from "./products-showcase";

type PlanetShowcaseProps = {
  children: ReactNode;
  title: string;
  planetsImg: StaticImageData[];
  productsImg: StaticImageData[];
  className?: string;
};

export default function PlanetShowcase({
  title,
  planetsImg,
  productsImg,
  children,
  className,
}: PlanetShowcaseProps) {
  return (
    <>
      {/* mobile view */}
      <div className="flex flex-col gap-2 lg:hidden">
        <h3 className="text-lg font-bold text-cosmicgreen">{title}</h3>
        <p className="text-neutral-300">{children}</p>
        <div className="my-3 max-w-2xl">
          <PlanetSlider planetsImg={planetsImg} />
        </div>
        <h3 className="text-lg font-bold text-cosmicgreen">Products</h3>
        <ProductsShowcase productsImg={productsImg} />
      </div>

      {/* desktop view */}
      <div className={`hidden flex-col gap-2 lg:mb-20 lg:flex lg:w-11/12`}>
        <div className={`flex justify-center ${className}`}>
          <div>
            <PlanetSlider planetsImg={planetsImg} />
          </div>
          <div
            className={`flex flex-col justify-between ${className ? "mr-8" : "ml-8"}`}
          >
            <div className="xl:max-w-[620px]">
              <h3 className="text-lg font-bold text-cosmicgreen">{title}</h3>
              <p className="text-neutral-300">{children}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-cosmicgreen">Products</h3>
              <ProductsShowcase productsImg={productsImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
