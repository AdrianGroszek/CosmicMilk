import Image from "next/image";
import StatusTag from "./status-tag";
import { type ProductType } from "@/redux/features/products-slice";
import Link from "next/link";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="group relative w-full overflow-hidden rounded-lg bg-navybluedark p-2 font-cosmic font-semibold shadow-md">
      {/* optional tag */}
      {product.status && product.status === "New" && <StatusTag status="new" />}
      <Link href={`/products/${product.id}`}>
        <div className="= relative overflow-hidden rounded-md duration-500 before:absolute before:bottom-[20%] before:left-[-50%] before:z-[1] before:hidden before:h-[12%] before:w-[200%] before:rotate-[-30deg] before:bg-neutral-50 before:opacity-5 before:duration-500 before:ease-out before:content-[''] after:absolute after:left-[-50%] after:top-[20%] after:hidden after:h-[30%] after:w-[200%] after:rotate-[-30deg] after:bg-neutral-50 after:opacity-5 after:duration-500 after:ease-out after:content-[''] group-hover:before:bottom-[35%] group-hover:before:opacity-15 group-hover:after:top-[10%] group-hover:after:opacity-15 sm:before:block sm:after:block">
          <Image
            src={product.images[0]}
            alt={`product image ${product.name}`}
            width={500}
            height={500}
            className="duration-500 sm:group-hover:rotate-[-2deg] sm:group-hover:scale-110"
          />
        </div>
        <div className="px-2 pt-1">
          <p>{product.name}</p>
          <p className="text-textdark">${product.variants.at(0)?.price}</p>
        </div>
      </Link>
    </li>
  );
}
