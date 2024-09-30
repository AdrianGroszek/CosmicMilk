import Link from 'next/link'
import { FaBars } from 'react-icons/fa6'
import { PiBasketBold } from 'react-icons/pi'

export function NavBar() {
  return (
    <nav className="px-4 py-3 bg-navybluelight flex justify-between fixed w-full items-stretch z-10">
      <Link
        href="/"
        className="text-cosmicgreen font-semibold self-center sm:text-lg lg:text-xl"
      >
        CosmicMilk
      </Link>
      <ul className="hidden sm:flex gap-1">
        <li className="h-full flex hover:text-neutral-300 rounded">
          <Link href="" className="h-full flex items-center px-4">
            HOME
          </Link>
        </li>
        <li className="h-full flex rounded hover:text-neutral-300">
          <Link href="" className="h-full flex items-center px-4">
            PRODUCTS
          </Link>
        </li>
      </ul>
      <button className="p-1 hidden sm:inline-block hover:text-neutral-300">
        <PiBasketBold className="h-6 w-6" />
      </button>
      <button className="p-2 sm:hidden">
        <FaBars />
      </button>
    </nav>
  )
}
