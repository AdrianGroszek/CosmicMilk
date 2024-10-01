import CourierShowcase from './courier-showcase'

import courierOneV1 from '@/public/courier-one.jpg'
import courierOneV2 from '@/public/courier-one-v2.jpg'

import courierTwoV1 from '@/public/courier-two.jpg'
import courierTwoV2 from '@/public/courier-two-v2.jpg'

import courierThreeV1 from '@/public/courier-three.jpg'
import courierThreeV2 from '@/public/courier-three-v2.jpg'

export default function CouriersShowcaseSection() {
  return (
    <ul>
      <CourierShowcase
        courierName='Captain Stella "Star Courier" Novax'
        courierImg={[courierOneV1, courierOneV2]}
      >
        Commanding the trade ship Milk Express, Stella can cover intergalactic
        distances in record time. Thanks to her reliability, the milk always
        arrives fresh and delicious.
      </CourierShowcase>

      <CourierShowcase
        courierName='Epsilon "Flying Goat" Tarix'
        courierImg={[courierTwoV1, courierTwoV2]}
      >
        A specialist on the planetary routes of Capriox-B, Epsilon ensures the
        milk is always transported in perfect conditions, protected from extreme
        temperatures and cosmic storms.
      </CourierShowcase>

      <CourierShowcase
        courierName='Orion "Taurion Rider" Ventus'
        courierImg={[courierThreeV1, courierThreeV2]}
      >
        A large-scale transport expert from Nebula-3. His ship can carry several
        tons of cosmic milk in a single trip, ensuring our supplies never run
        dry.
      </CourierShowcase>
    </ul>
  )
}
