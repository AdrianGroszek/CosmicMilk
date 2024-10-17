import { useAppSelector } from "@/redux/store";
import Button from "./ui/button";
import CartProductsList from "./cart-products-list";
import ChceckoutWrapper from "./checkout-wrapper";
import BackButton from "./back-button";

type ProductsCartProps = {
  isOpen: boolean;
  toggleOpenCartFunc: () => void;
};

export default function ProductsCart({
  isOpen,
  toggleOpenCartFunc,
}: ProductsCartProps) {
  const cartList = useAppSelector((state) => state.cartReducer.products);

  const totalCartItems = useAppSelector(
    (state) => state.cartReducer.totalItems,
  );

  // if (!isOpen) return null;

  return (
    <>
      <div
        className={`absolute left-0 top-[57px] h-screen w-full bg-neutral-900 transition-opacity duration-300 ${isOpen ? "visible opacity-80" : "invisible opacity-0"}`}
        onClick={toggleOpenCartFunc}
      ></div>
      <div
        className={`absolute top-[57px] h-screen w-11/12 max-w-[800px] bg-navybluelight transition-all duration-300 sm:w-4/5 ${isOpen ? "visible right-0 opacity-100" : "invisible right-[-100px] opacity-0"}`}
      >
        <div className="flex h-[50px] w-full items-center justify-between bg-navybluedark px-6">
          <BackButton modal={true} backBtnFunc={toggleOpenCartFunc} />
          <span>BAG ({totalCartItems})</span>
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
              <CartProductsList />
            </div>

            {/* CHECKOUT button with price */}
            <ChceckoutWrapper />
          </div>
        )}
      </div>
    </>
  );
}
