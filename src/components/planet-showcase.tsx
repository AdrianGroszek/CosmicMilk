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
    {productsImg.map((product, index) => <li key={index} className="rounded-md overflow-hidden relative">
      <div className="after:bg-neutral-50 after:content-['*'] after:h-[155px] after:w-[50px] after:absolute after:opacity-20 after:left-[-75px] after:top-[-50px] after:rotate-[35deg] after:ease-out after:duration-500 hover:after:left-[120%]">
        <Image src={product} alt="Example product" className="hover:scale-110 duration-500" />
      </div>
      </li>
    )}
  </ul>
 
</div>
}