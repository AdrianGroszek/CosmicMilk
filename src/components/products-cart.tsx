import { useAppSelector } from "@/redux/store";
import CartProductItem from "./cart-product-item";
import Button from "./ui/button";

type ProductsCartProps = {
  isOpen: boolean;
  toggleOpenCartFunc: () => void;
};

export default function ProductsCart({
  isOpen,
  toggleOpenCartFunc,
}: ProductsCartProps) {
  const cartList = useAppSelector((state) => state.cartReducer.products);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="absolute left-0 top-[57px] h-screen w-full bg-neutral-900 opacity-80"
        onClick={toggleOpenCartFunc}
      ></div>
      <div className="absolute right-0 top-[57px] h-screen w-11/12 max-w-[800px] bg-navybluelight sm:w-4/5">
        <div className="flex h-[50px] w-full items-center justify-between bg-navybluedark px-6">
          <button onClick={toggleOpenCartFunc}>BACK</button>
          <span>BAG 0</span>
        </div>

        {/* Empty cart */}
        {!cartList || cartList.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center pb-[100px]">
            <h3 className="text-xl">STILL SHOPPING?</h3>
            <p className="mb-8 text-gray-300">Your cart is currently empty.</p>
            <Button
              variant="link"
              href="/products?planet=All"
              onClick={toggleOpenCartFunc}
            >
              SHOP ALL
            </Button>
          </div>
        ) : (
          <div className="flex h-full flex-col justify-between pb-[107px]">
            <div className="mx-3 my-2">
              <ul className="no-scrollbar flex max-h-[600px] flex-col gap-2 overflow-y-scroll sm:max-h-[700px]">
                <CartProductItem />
              </ul>
            </div>

            {/* CHECKOUT button with price */}
            <div className="">
              <p className="pb-2 pr-2 text-end">TOTAL: $99.98</p>
              <button className="relative w-full overflow-hidden border-2 border-cosmicgreen bg-cosmicgreen px-4 py-2 font-cosmic text-base font-bold text-navybluedark after:absolute after:left-[-75px] after:top-[-50px] after:h-[155px] after:w-[50px] after:rotate-[35deg] after:bg-neutral-50 after:opacity-20 after:duration-500 after:ease-out after:content-[''] hover:bg-cosmicgreendark hover:after:left-[120%]">
                CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
