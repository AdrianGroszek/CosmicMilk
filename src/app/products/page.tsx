import Image from "next/image";
import backgroundImage from "@/public/products-section-background.png";
import { getProducts } from "@/services/apiProducts";
import ProductsFilter from "@/components/products-filter";

export type ProductType = {
  id: number;
  created_at: string;
  name: string;
  description: string;
  images: string[];
  variants: { price: number; opacity: string }[];
  planetOfOrigin: string;
  type: string;
  storageInstructions: string;
  nutritionalInfo: string;
  status: "New" | null;
};

export default async function Products() {
  const products: ProductType[] = await getProducts();

  return (
    <main className="relative pt-[56px]">
      {/* Planet hero image */}
      <div className="h-[150px] sm:h-[250px]">
        <Image
          src={backgroundImage}
          alt="Icy planet image"
          priority
          className="h-full w-full object-cover"
        />
      </div>
      {/* Products */}
      <ProductsFilter products={products} />
    </main>
  );
}
