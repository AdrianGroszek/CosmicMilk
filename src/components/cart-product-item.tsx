import {
  increaseQuantity,
  decreaseQuantity,
  type CartProductType,
} from "@/redux/features/cart-slice";
import Image from "next/image";
import { useDispatch } from "react-redux";

type CartProductItemProps = {
  product: CartProductType;
};

export default function CartProductItem({ product }: CartProductItemProps) {
  const dispatch = useDispatch();

  function handleIncreaseQuantity() {
    dispatch(increaseQuantity(product));
  }

  function handleDecreaseQuantity() {
    dispatch(decreaseQuantity(product));
  }

  return (
    <li className="flex gap-2 rounded-md bg-navybluedark p-2 font-cosmic">
      <div className="flex h-[130px] w-[100px] shrink-0 overflow-hidden rounded-md bg-navybluelight">
        <Image
          src={product.product.images[0]}
          width={100}
          height={130}
          alt={`Picture of ${product.product.name}`}
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col justify-between">
        <div className="font-bold">
          <span>{product.product.name}</span>
          <span> ({product.selectedVariant[0].capacity})</span>
        </div>
        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
          <div className="flex items-center gap-4 text-textdark">
            <span>QUANTITY</span>
            <div>
              <button
                className="w-6 rounded-full border border-textdark hover:border-white hover:text-white"
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <span className="inline-block w-8 text-center">
                {product.quantity}
              </span>
              <button
                className="w-6 rounded-full border border-textdark hover:border-white hover:text-white"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          <span className="font-bold">${product.totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </li>
  );
}
