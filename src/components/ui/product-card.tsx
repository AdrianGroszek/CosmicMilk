import testProduct from "@/public/product-planeta-three.jpg";
import Image from "next/image";
import StatusTag from "./status-tag";

export default function ProductCard() {
  return (
    <li className="relative w-full rounded-lg bg-navybluedark p-2 font-cosmic font-semibold shadow-md">
      <div className="relative">
        {/* optional tag */}
        <StatusTag status="new" />

        <Image src={testProduct} alt="product test" className="rounded-md" />
      </div>
      <div className="px-2 pt-1">
        <p>Icy Milk fron Planet-A</p>
        <p className="text-textdark">$19.90</p>
      </div>
    </li>
  );
}
