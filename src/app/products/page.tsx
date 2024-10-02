import Image from "next/image";
import IcyPlanetImg from "@/public/planet-a-v2.jpg";
import ProductCard from "@/components/ui/product-card";

export default function Products() {
  return (
    <main className="relative pt-[56px]">
      {/* Planet hero image */}
      <div className="h-[150px] sm:h-[250px] lg:h-[500px]">
        <Image
          src={IcyPlanetImg}
          alt="Icy planet image"
          className="h-full object-cover"
        />
      </div>

      {/* Filter category */}
      <div className="sticky top-[55px] z-10 bg-navybluelight px-2 pt-2">
        <h3 className="px-1 font-bold">Shop By Categories:</h3>
        <ul className="text-textdark flex gap-4">
          <li className="p-1">Planet-A</li>
          <li className="p-1">Planet-B</li>
          <li className="p-1">Planet-C</li>
        </ul>
      </div>

      {/* Products list */}
      <ul className="grid grid-cols-2 gap-2 px-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </main>
  );
}
