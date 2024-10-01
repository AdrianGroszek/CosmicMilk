import { type ReactNode } from "react"
import PlanetSlider from "./planet-slider";
import Image, { type StaticImageData } from "next/image";

type PlanetShowcaseProps = {
  children: ReactNode;
  title: string;
  planetsImg: StaticImageData[];
  productsImg: StaticImageData[]
}

export default function PlanetShowcase({title, planetsImg, productsImg, children}: PlanetShowcaseProps) {
  return <div className="flex flex-col gap-2">

  <h3 className="text-lg font-bold text-cosmicgreen">
    {title}
  </h3>

  <p className="">
    {children}
  </p>

  <div className="max-w-2xl my-3">
    <PlanetSlider planetsImg={planetsImg}/>
  </div>

  <h3 className='text-lg font-bold text-cosmicgreen'>Products</h3>

  
  <ul className="flex gap-2 mb-16">
    {productsImg.map((product, index) => <li key={index} className="rounded-md overflow-hidden relative border-2 sm:border-4 border-navybluelight shadow-sm shadow-neutral-900 max-w-[150px]">
      <div className="after:hidden sm:after:block before:hidden sm:before:block after:bg-neutral-50 after:content-['*'] after:h-full after:w-[50px] after:absolute after:opacity-10 after:left-12 after:bottom-12 after:rotate-[60deg] after:ease-out after:duration-500 hover:after:bottom-[30%] hover:after:opacity-20 sm:hover:scale-110 duration-500 before:bg-neutral-50 before:content-['*'] before:h-full before:w-[15px] before:absolute before:opacity-10 before:left-16 before:top-10 before:rotate-[60deg] before:ease-out before:duration-500 hover:before:top-[2%] hover:before:opacity-20 sm:hover:rotate-[-2deg]">
        <Image src={product} alt="Example product" />
      </div>
      </li>
    )}
  </ul>
 
</div>
}