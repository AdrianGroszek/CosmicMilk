import Link from "next/link";
import { PiBasketBold } from "react-icons/pi";
import MobileLinkstWrapper from "./ui/mobile-links-wrapper";

export function NavBar() {
  return (
    <nav className="fixed z-20 flex w-full items-stretch justify-between bg-navybluelight px-0 py-3">
      <Link
        href="/"
        className="ml-4 self-center font-semibold text-cosmicgreen sm:text-lg lg:text-xl"
      >
        CosmicMilk
      </Link>

      {/* start only for upper 768px width */}
      <ul className="hidden gap-1 sm:flex">
        <li className="flex h-full rounded hover:text-neutral-300">
          <Link href="/" className="flex h-full items-center px-4">
            HOME
          </Link>
        </li>
        <li className="flex h-full rounded hover:text-neutral-300">
          <Link href="/products" className="flex h-full items-center px-4">
            PRODUCTS
          </Link>
        </li>
      </ul>
      {/* end only for upper 768px width */}

      <button className="mr-4 hidden p-1 hover:text-neutral-300 sm:inline-block">
        <PiBasketBold className="h-6 w-6" />
      </button>
      <MobileLinkstWrapper />
    </nav>
  );
}
