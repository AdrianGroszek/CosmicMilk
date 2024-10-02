import Link from "next/link";

type NavbarMobileLinksProps = {
  isOpen: boolean;
  toggleOpenNavbarFunc: () => void;
};

export default function NavbarMobileLinks({
  isOpen,
  toggleOpenNavbarFunc,
}: NavbarMobileLinksProps) {
  return (
    <>
      {/* start Opacity dark background for mobile nav */}
      <div
        className={`absolute top-[55px] z--10 h-screen w-full bg-neutral-900 transition-all duration-200 sm:hidden ${isOpen ? "opacity-80" : "translate-x-[100%] opacity-0"}`}
        onClick={toggleOpenNavbarFunc}
      ></div>
      {/* end Opacity dark background for mobile nav */}

      {/* start navigation links for mobile */}
      <ul
        className={`absolute top-[55px] flex w-full flex-col items-center bg-navybluelight duration-200 sm:hidden ${isOpen ? "opacity-100" : "translate-x-[100%] opacity-0"}`}
      >
        <li className="flex h-full w-full border-y border-neutral-50/20 duration-300 hover:bg-navybluedark">
          <Link
            href="/"
            className="flex h-full w-full items-center justify-center py-5"
            onClick={toggleOpenNavbarFunc}
          >
            HOME
          </Link>
        </li>
        <li className="flex h-full w-full border-b border-neutral-50/20 duration-300 hover:bg-navybluedark">
          <Link
            href="/products"
            className="flex h-full w-full items-center justify-center py-5"
            onClick={toggleOpenNavbarFunc}
          >
            PRODUCTS
          </Link>
        </li>
        <li className="flex h-full w-full duration-300 hover:bg-navybluedark">
          <Link
            href="/cart"
            className="flex h-full w-full items-center justify-center py-5"
            onClick={toggleOpenNavbarFunc}
          >
            CART
          </Link>
        </li>
      </ul>
      {/* start navigation links for mobile */}
    </>
  );
}
