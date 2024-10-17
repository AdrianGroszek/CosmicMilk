"use client";

import { useAppSelector } from "@/redux/store";
import toast from "react-hot-toast";

export default function ChceckoutWrapper() {
  const totalPrice = useAppSelector((state) => state.cartReducer.totalPrice);

  function handleCheckout() {
    toast(
      "This is just a demo button, it doesn't have any purchasing functionality.",
      {
        icon: "🛒", // Ikona koszyka
      },
    );
  }

  return (
    <div className="">
      <p className="pb-2 pr-2 text-end font-cosmic">
        TOTAL: ${totalPrice.toFixed(2)}
      </p>
      <button
        className="relative w-full overflow-hidden border-2 border-cosmicgreen bg-cosmicgreen px-4 py-2 font-cosmic text-base font-bold text-navybluedark after:absolute after:left-[-75px] after:top-[-50px] after:h-[155px] after:w-[50px] after:rotate-[35deg] after:bg-neutral-50 after:opacity-20 after:duration-500 after:ease-out after:content-[''] hover:bg-cosmicgreendark hover:after:left-[120%]"
        onClick={handleCheckout}
      >
        CHECKOUT
      </button>
    </div>
  );
}
