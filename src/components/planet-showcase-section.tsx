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
  planetsImg={[planetAV3, planetAV1, planetAV2]}
  productsImg={[productOneA, productTwoA, productThreeA, productFourA]}>
    Lactarius-7, located in the heart of the Icy Nebula, is known for
    its creamy milk with a subtle, icy aftertaste. The inhabitants,
    called Lactonids, have perfected their craft over centuries, raising
    special cosmic cows on the planet&apos;s frozen plains. Thanks to
    Lactarius-7&apos;s unique atmosphere, their milk naturally contains
    antioxidants and rare nutrients that slow down the aging process.
  </PlanetShowcase>

  <PlanetShowcase
  title='Capriox-B: The Mountain Peaks Planet'
  planetsImg={[planetBV3, planetBV1, planetBV2]}
  productsImg={[productOneB, productTwoB, productThreeB, productFourB]}>
    Capriox-B is a world of endless mountain ranges, home to a resilient breed of cosmic goats known as Capriox. Their milk boasts an intense, rich flavor with subtle herbal notes, which the goats pick up while grazing in the high-altitude valleys. Capriox-B milk is perfect for those seeking a unique taste and an extra burst of energy.
  </PlanetShowcase>

  <PlanetShowcase 
  title='Nebula-3: The Land of Eternal Fields'
  planetsImg={[planetCV3, planetCV1, planetCV2]}
  productsImg={[productOneC, productTwoC, productThreeC, productFourC]}>
    Nebula-3 is a planet of endless green meadows, where the Taurions have been raising giant milkbeasts for generations—majestic animals with triple stomachs, allowing them to produce rich, velvety milk with a complex nutritional profile. This milk is a health powerhouse—full of protein, calcium, and vitamins, perfect for any time of the day!
  </PlanetShowcase>
</>
}