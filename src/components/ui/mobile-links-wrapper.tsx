import NavbarMobileLinks from "../navbar-mobile-links";
import { FaAnglesLeft } from "react-icons/fa6";
import ProductsCart from "../products-cart";

type MobileLinkstWrapperProps = {
  isOpenNavbar: boolean;
  isOpenCart: boolean;
  toggleOpenNavbarFunc: () => void;
  toggleOpenCartFunc: () => void;
};

export default function MobileLinkstWrapper({
  isOpenNavbar,
  isOpenCart,
  toggleOpenCartFunc,
  toggleOpenNavbarFunc,
}: MobileLinkstWrapperProps) {
  return (
    <>
      {/* Mobile toggle button */}
      <button
        className={`ml-10 mr-4 p-2 duration-200 sm:hidden ${isOpenNavbar ? "rotate-180" : ""}`}
        onClick={toggleOpenNavbarFunc}
      >
        <FaAnglesLeft />
      </button>

      {/* Mobile Links */}
      <NavbarMobileLinks
        isOpen={isOpenNavbar}
        toggleOpenNavbarFunc={toggleOpenNavbarFunc}
        toggleOpenCartFunc={toggleOpenCartFunc}
      />

      {/* Cart */}
      <ProductsCart
        isOpen={isOpenCart}
        toggleOpenCartFunc={toggleOpenCartFunc}
      />
    </>
  );
}
