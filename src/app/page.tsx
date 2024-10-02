import CouriersShowcaseSection from "@/components/couriers-showcase-section";
import PlanetShowcaseSection from "@/components/planet-showcase-section";
import PlanetSlider from "@/components/planet-slider";
import Button from "@/components/ui/button";

import milkSmokeDark from "@/public/milk-smoke-dark.png";
import Image from "next/image";

import whyCosmicMilkV1 from "@/public/why-cosmicmilk-v1.jpg";
import whyCosmicMilkV2 from "@/public/why-cosmicmilk-v2.jpg";
import whyCosmicMilkV3 from "@/public/why-cosmicmilk-v3.jpg";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="row-start-2 flex flex-col items-center">
      {/* Hero section */}
      <section className="relative z-10 flex h-screen flex-col items-center gap-8 px-4 pt-[56px] sm:pt-[96px]">
        <h1 className="my-6 flex flex-col items-center font-cosmic text-[32px] font-bold leading-9 sm:text-[48px] sm:leading-none lg:text-[72px]">
          COSMIC FRESHNESS{" "}
          <span className="text-cosmicgreen">DELIVERED TO EARTH</span>
        </h1>
        <p className="px-6 text-center sm:w-[70%] lg:max-w-[1100px]">
          Discover the extraordinary taste of milk that has traveled thousands
          of light-years to arrive directly in your cup. Our milk comes from
          three unique planets, each offering a different, unparalleled flavor
          and nutritional profile. Transported by our top interplanetary
          couriers, we deliver the best the cosmos has to offer, right to Earth.
        </p>
        <div className="mt-4 flex items-center justify-center">
          <Button variant="btn">START EXPLORING NOW !</Button>
        </div>
        {/* Temporary background image */}
      </section>

      <Image src={milkSmokeDark} alt="" fill className="object-cover" />

      {/* Planets info section */}
      <section className="w-full bg-navybluedark px-4 sm:flex sm:justify-center">
        <div className="sm:w-[600px] lg:flex lg:w-full lg:flex-col lg:items-center">
          <h3 className="mb-6 text-lg font-bold md:text-center md:text-2xl lg:mb-12 lg:text-3xl xl:mb-20">
            Our Planets and Their Unique Stories
          </h3>
          <PlanetShowcaseSection />
        </div>
      </section>

      {/* Couriers info section */}
      <section className="w-full bg-gradient-to-b from-navybluelight to-navybluedark">
        <div className="mt-20 flex flex-col items-center px-4">
          <div className="mb-6 max-w-[500px] lg:mb-10">
            <h3 className="mb-6 text-center text-lg font-bold md:text-2xl lg:text-3xl">
              Meet Our Intergalactic Couriers!
            </h3>
            <p className="mb-8 text-center">
              Our team of couriers are true heroes of intergalactic routes,
              traveling millions of kilometers every day to deliver fresh milk
              straight from space!
            </p>
          </div>
          <CouriersShowcaseSection />
        </div>
      </section>

      {/* Why Choose Milk from Cosmos section */}
      <section className="flex w-full flex-col items-center bg-navybluedark px-4 pt-12">
        <h3 className="mb-8 text-center text-xl font-bold md:text-3xl">
          Why Choose Milk from the Cosmos?
        </h3>
        <div className="mb-14 xl:flex xl:flex-row-reverse">
          <div className="max-w-[650px] xl:ml-6 xl:flex xl:w-[500px] xl:flex-col xl:justify-between">
            <div>
              <p className="mb-3">
                <span className="font-semibold text-cosmicgreen">
                  Unique Flavor
                </span>{" "}
                – Each type of milk offers a one-of-a-kind tasting experience,
                transporting you to another planet.
              </p>
              <p className="mb-3">
                <span className="font-semibold text-cosmicgreen">
                  Cosmic Quality
                </span>{" "}
                – Our milk is produced and harvested in conditions monitored by
                the interplanetary quality commission.
              </p>
              <p className="mb-8">
                <span className="font-semibold text-cosmicgreen">
                  Sustainable Transport
                </span>{" "}
                – With advanced technology and eco-friendly logistics, our
                deliveries leave no carbon footprint in space!
              </p>
            </div>
            <div className="hidden xl:mb-10 xl:flex xl:justify-center">
              <Button variant="btn">CHECK OUT PRODUCTS</Button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-8 max-w-[550px]">
              <PlanetSlider
                planetsImg={[whyCosmicMilkV3, whyCosmicMilkV2, whyCosmicMilkV1]}
                increaseSize={false}
              />
            </div>
            <div className="xl:hidden">
              <Button variant="btn">CHECK OUT PRODUCTS</Button>
            </div>
          </div>
        </div>
        <div className="max-w-[650px] pb-20">
          <h3 className="mb-4 text-center text-xl font-bold md:text-3xl">
            Join the Galactic Taste Revolution!
          </h3>
          <p className="mb-12 text-center">
            Don’t wait to try what the universe has to offer! Order now, and
            we’ll deliver cosmic milk straight to your door. Ready for your
            first sip? Choose your planet and start your flavor journey through
            the galaxy!
          </p>
          <div className="flex justify-center gap-3">
            <Button variant="btn" fill="border">
              LOG IN
            </Button>
            <Button variant="btn">SING UP</Button>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="flex flex-col items-center pb-14 text-neutral-300">
        <h3 className="mb-2 pt-12 text-xl font-bold">Contact Us</h3>
        <div className="mb-12 flex flex-col gap-2 text-center">
          <p>
            <span className="font-semibold text-cosmicgreen">Email</span>{" "}
            info@galacticmilk.com
          </p>
          <p>
            <span className="font-semibold text-cosmicgreen">Phone</span> +12
            345 678 901
          </p>
          <p>
            <span className="block font-semibold text-cosmicgreen">
              Live Support Center
            </span>{" "}
            Click here to chat with our advisor
          </p>
        </div>
        <div className="mb-3 flex gap-2 text-neutral-300 *:h-[25px] *:w-[25px]">
          <FaSquareInstagram />
          <FaFacebook />
          <FaLinkedin />
          <FaYoutube />
          <FaXTwitter />
        </div>
        <p>© 2024 CosmicMilk</p>
      </footer>
    </main>
  );
}
