import PlanetShowcase from "./planet-showcase";

import planetAV1 from '@/public/planet-a-v1.jpg'
import planetAV2 from '@/public/planet-a-v2.jpg'
import planetAV3 from '@/public/planet-a-v3.jpg'

import planetBV1 from '@/public/planet-b-v1.jpg'
import planetBV2 from '@/public/planet-b-v2.jpg'
import planetBV3 from '@/public/planet-b-v3.jpg'

import planetCV1 from '@/public/planet-c-v1.jpg'
import planetCV2 from '@/public/planet-c-v2.jpg'
import planetCV3 from '@/public/planet-c-v3.jpg'

import productOneA from '@/public/product-planeta-one.jpg'
import productTwoA from '@/public/product-planeta-two.jpg'
import productThreeA from '@/public/product-planeta-three.jpg'
import productFourA from '@/public/product-planeta-four.jpg'

import productOneB from '@/public/product-planetb-one.jpg'
import productTwoB from '@/public/product-planetb-two.jpg'
import productThreeB from '@/public/product-planetb-three.jpg'
import productFourB from '@/public/product-planetb-four.jpg'

import productOneC from '@/public/product-planetc-one.jpg'
import productTwoC from '@/public/product-planetc-two.jpg'
import productThreeC from '@/public/product-planetc-three.jpg'
import productFourC from '@/public/product-planetc-four.jpg'

export default function PlanetShowcaseSection() {
  return <>
  <PlanetShowcase
  title='Lactarius-7: The Icy Nebula Planet'
  planetsImg={[planetAV1, planetAV2, planetAV3]}
  productsImg={[productOneA, productTwoA, productThreeA, productFourA]}>
    Lactarius-7, located in the heart of the Icy Nebula, is known for
    its creamy milk with a subtle, icy aftertaste. The inhabitants,
    called Lactonids, have perfected their craft over centuries, raising
    special cosmic cows on the planet&apos;s frozen plains. Thanks to
    Lactarius-7&apos;s unique atmosphere, their milk naturally contains
    antioxidants and rare nutrients that slow down the aging process.
  </PlanetShowcase>

  <PlanetShowcase
  title='Lactarius-7: The Icy Nebula Planet'
  planetsImg={[planetBV1, planetBV2, planetBV3]}
  productsImg={[productOneB, productTwoB, productThreeB, productFourB]}>
    Lactarius-7, located in the heart of the Icy Nebula, is known for
    its creamy milk with a subtle, icy aftertaste. The inhabitants,
    called Lactonids, have perfected their craft over centuries, raising
    special cosmic cows on the planet&apos;s frozen plains. Thanks to
    Lactarius-7&apos;s unique atmosphere, their milk naturally contains
    antioxidants and rare nutrients that slow down the aging process.
  </PlanetShowcase>

  <PlanetShowcase 
  title='Lactarius-7: The Icy Nebula Planet'
  planetsImg={[planetCV1, planetCV2, planetCV3]}
  productsImg={[productOneC, productTwoC, productThreeC, productFourC]}>
    Lactarius-7, located in the heart of the Icy Nebula, is known for
    its creamy milk with a subtle, icy aftertaste. The inhabitants,
    called Lactonids, have perfected their craft over centuries, raising
    special cosmic cows on the planet&apos;s frozen plains. Thanks to
    Lactarius-7&apos;s unique atmosphere, their milk naturally contains
    antioxidants and rare nutrients that slow down the aging process.
  </PlanetShowcase>
</>
}