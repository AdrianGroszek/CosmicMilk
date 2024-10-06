import Link from "next/link";
import { PiBasketBold } from "react-icons/pi";
import MobileLinkstWrapper from "./ui/mobile-links-wrapper";

export function NavBar() {
  return (
    <nav className="fixed z-20 flex w-full items-stretch justify-between border-b border-navybluedark bg-navybluelight px-0 py-3 lg:px-10 xl:px-20">
      <Link
        href="/"
        className="ml-4 self-center font-semibold text-cosmicgreen sm:text-lg lg:ml-0 lg:text-xl"
      >
        CosmicMilk
      </Link>

      <div className="flex gap-5">
        {/* start only for upper 768px width */}
        <ul className="hidden gap-1 sm:flex">
          <li className="flex h-full rounded duration-300 hover:text-cosmicgreen">
            <Link href="/" className="flex h-full items-center px-4">
              HOME
            </Link>
          </li>
          <li className="flex h-full rounded duration-300 hover:text-cosmicgreen">
            <Link
              href="/products?planet=All"
              className="flex h-full items-center px-4"
            >
              PRODUCTS
            </Link>
          </li>
        </ul>
        {/* end only for upper 768px width */}

        <button className="mr-4 hidden p-1 duration-300 hover:text-cosmicgreen sm:inline-block">
          <PiBasketBold className="h-6 w-6" />
        </button>
      </div>
      <MobileLinkstWrapper />
    </nav>
  );
}
