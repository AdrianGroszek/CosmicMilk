import Image, { type StaticImageData } from "next/image";

type ProductsShowcaseProps = {
  productsImg: StaticImageData[];
};

export default function ProductsShowcase({
  productsImg,
}: ProductsShowcaseProps) {
  return (
    <ul className="mb-16 flex gap-2 lg:mb-0">
      {productsImg.map((product, index) => (
        <li
          key={index}
          className="relative max-w-[90px] overflow-hidden rounded-md border-2 border-navybluelight shadow-sm shadow-neutral-900 sm:border-4 xl:max-w-[150px]"
        >
          <div className="duration-500 before:absolute before:bottom-[20%] before:left-[-50%] before:hidden before:h-[12%] before:w-[200%] before:rotate-[-30deg] before:bg-neutral-50 before:opacity-15 before:duration-500 before:ease-out before:content-[''] after:absolute after:left-[-50%] after:top-[20%] after:hidden after:h-[30%] after:w-[200%] after:rotate-[-30deg] after:bg-neutral-50 after:opacity-15 after:duration-500 after:ease-out after:content-[''] hover:before:bottom-[35%] hover:before:opacity-25 hover:after:top-[10%] hover:after:opacity-25 sm:before:block sm:after:block sm:hover:rotate-[-2deg] sm:hover:scale-110">
            <Image src={product} alt="Example product" />
          </div>
        </li>
      ))}
    </ul>
  );
}
