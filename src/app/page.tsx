import CouriersShowcaseSection from '@/components/couriers-showcase-section'
import PlanetShowcaseSection from '@/components/planet-showcase-section'
import Button from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center">
      {/* Hero section */}
      <section className="flex flex-col items-center gap-8 px-4 h-screen sm:pt-[96px] pt-[56px] relative">
        <h1 className="flex flex-col items-center font-bold text-[32px] font-cosmic leading-9 my-6 sm:text-[48px] sm:leading-none lg:text-[72px]">
          COSMIC FRESHNESS{' '}
          <span className="text-cosmicgreen">DELIVERED TO EARTH</span>
        </h1>
        <p className="text-center px-6 sm:w-[70%] lg:max-w-[1100px]">
          Discover the extraordinary taste of milk that has traveled thousands
          of light-years to arrive directly in your cup. Our milk comes from
          three unique planets, each offering a different, unparalleled flavor
          and nutritional profile. Transported by our top interplanetary
          couriers, we deliver the best the cosmos has to offer, right to Earth.
        </p>
        <div className="flex items-center justify-center mt-4">
          <Button variant="btn">START EXPLORING NOW !</Button>
        </div>
        {/* Temporary square imitating background image */}
        <div className="w-full h-[300px] bg-navybluedark absolute bottom-0"></div>
        {/* <Image src={smokemilk.src} alt="" fill /> */}
      </section>

      {/* Planets info section */}
      <section className="bg-navybluedark px-4">
        <h3 className="text-lg font-bold mb-6">
          Our Planets and Their Unique Stories
        </h3>
        <PlanetShowcaseSection />
      </section>

      {/* Couriers info section */}
      <section className="px-4 mt-5 max-w-[500px]">
        <h3 className="text-xl font-bold mb-4 text-center">
          Meet Our Intergalactic Couriers!
        </h3>
        <p className="mb-8 text-center">
          Our team of couriers are true heroes of intergalactic routes,
          traveling millions of kilometers every day to deliver fresh milk
          straight from space!
        </p>
        <CouriersShowcaseSection />
      </section>

      {/* Why Choose Milk from Cosmos section */}
      <section className="px-4 pt-6 mt-5 w-full bg-navybluedark">
        <h3 className="text-xl font-bold mb-4 text-center">
          Why Choose Milk from the Cosmos?
        </h3>
        <p>
          <span className="text-cosmicgreen font-semibold">Unique Flavor</span>{' '}
          – Each type of milk offers a one-of-a-kind tasting experience,
          transporting you to another planet.
        </p>
        <p>
          <span className="text-cosmicgreen font-semibold">Cosmic Quality</span>{' '}
          – Our milk is produced and harvested in conditions monitored by the
          interplanetary quality commission.
        </p>
        <p>
          <span className="text-cosmicgreen font-semibold">
            Sustainable Transport
          </span>{' '}
          – With advanced technology and eco-friendly logistics, our deliveries
          leave no carbon footprint in space!
        </p>
        <div></div>
      </section>
    </main>
  )
}
