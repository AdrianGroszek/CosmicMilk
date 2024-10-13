import DragScrollImages from "@/components/drag-scroll-images";
import RelatedProducts from "@/components/related-products";
import StatusTag from "@/components/ui/status-tag";
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
    <main className="min-h-screen w-full px-4 pt-[87px] lg:max-w-[1100px]">
      <div className="flex flex-col lg:flex-row">
        {/* Product scroll on drag images */}
        <DragScrollImages product={singleProduct} />

        {/* Product information container */}
        <div className="sticky top-[87px] flex flex-col gap-2 lg:h-full lg:w-2/3 lg:pb-4 lg:pl-8">
          <h3 className="font-bold">
            {singleProduct.name} ({singleProduct.variants.at(0)?.capacity})
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-light text-cosmicgreen">
              ${singleProduct.variants.at(0)?.price}
            </span>
            <StatusTag status="new" absolute={false} />
          </div>
          <p>{singleProduct.description}</p>
          <div>
            <p>
              <span className="font-bold">Capacity:</span>{" "}
              {singleProduct.variants.at(0)?.capacity}
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
          <button className="relative mt-5 w-full overflow-hidden rounded-lg border-2 border-cosmicgreen bg-cosmicgreen px-4 py-2 font-cosmic text-base font-bold text-navybluedark after:absolute after:left-[-75px] after:top-[-50px] after:h-[155px] after:w-[50px] after:rotate-[35deg] after:bg-neutral-50 after:opacity-20 after:duration-500 after:ease-out after:content-[''] hover:bg-cosmicgreendark hover:after:left-[120%]">
            ADD TO CART
          </button>
        </div>
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
