import DragScrollImages from "@/components/drag-scroll-images";
import ProductInfo from "@/components/product-info";
import RelatedProducts from "@/components/related-products";
import { type ProductType } from "@/redux/features/products-slice";
import { getProduct } from "@/services/apiProducts";

type ProductDetailsPage = {
  params: {
    id: string;
  };
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPage) {
  const productArr: ProductType[] = await getProduct(+params.id);
  const singleProduct = productArr?.[0];

  if (!singleProduct) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="mb-[150px] min-h-screen w-full px-4 pt-[67px] lg:max-w-[1100px]">
      <div className="flex flex-col lg:flex-row">
        {/* Product scroll on drag images */}
        <DragScrollImages product={singleProduct} />

        {/* Product information container */}
        <ProductInfo singleProduct={singleProduct} />
      </div>

      {/* Product description */}
      <div className="mt-10 flex flex-col gap-4">
        <h3 className="text-center text-xl font-bold">Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi
          sunt reiciendis, tenetur magni eaque deleniti odio possimus totam
          explicabo ea fugit sint nulla quaerat magnam, dolores qui unde saepe!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi
          sunt reiciendis, tenetur magni eaque deleniti odio possimus totam
          explicabo ea fugit sint nulla quaerat magnam, dolores qui unde saepe!
        </p>
      </div>

      {/* Related Products */}
      <RelatedProducts />
    </main>
  );
}
