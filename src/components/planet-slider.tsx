"use client";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

type PlanetSliderProps = {
  planetsImg: StaticImageData[];
  increaseSize?: boolean;
};

export default function PlanetSlider({
  planetsImg,
  increaseSize = true,
}: PlanetSliderProps) {
  const [currSlide, setCurrSlide] = useState(0);

  const prevSlide = () =>
    setCurrSlide((curr) => (curr === 0 ? planetsImg.length - 1 : curr - 1));

  const nextSlide = () =>
    setCurrSlide((curr) => (curr === planetsImg.length - 1 ? 0 : curr + 1));

  return (
    <div
      className={`relative overflow-x-hidden rounded-xl border-2 border-navybluelight shadow-lg shadow-neutral-900 lg:w-[500px] ${increaseSize ? "xl:w-[700px]" : "xl:w-[500px]"}`}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currSlide * 100}%)` }}
      >
        {planetsImg.map((planet, index) => (
          <Image src={planet} alt="Particular planet image" key={index} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <button
          onClick={prevSlide}
          className="rounded-full bg-navybluedark p-2 text-neutral-50 opacity-60 hover:opacity-100"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full bg-navybluedark p-2 text-neutral-50 opacity-60 hover:opacity-100"
        >
          <FaAngleRight />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <ul className="absolute bottom-4 flex gap-2">
          {planetsImg.map((_, index) => (
            <li
              key={index}
              className={`h-3 w-3 rounded-full duration-1000 ${currSlide === index ? "scale-125 bg-cosmicgreen opacity-100" : "bg-neutral-50 opacity-50"}`}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
