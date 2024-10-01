'use client'
import Image, { type StaticImageData } from 'next/image'
import { useState } from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

type PlanetSliderProps = {
  planetsImg: StaticImageData[]
}

export default function PlanetSlider({ planetsImg }: PlanetSliderProps) {
  const [currSlide, setCurrSlide] = useState(0)

  const prevSlide = () =>
    setCurrSlide((curr) => (curr === 0 ? planetsImg.length - 1 : curr - 1))

  const nextSlide = () =>
    setCurrSlide((curr) => (curr === planetsImg.length - 1 ? 0 : curr + 1))

  return (
    <div className="overflow-x-hidden relative rounded-xl shadow-lg shadow-neutral-900 border-2 border-navybluelight">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currSlide * 100}%)` }}
      >
        {planetsImg.map((planet, index) => (
          <Image
            src={planet}
            width={1184}
            height={664}
            alt="Particular planet image"
            key={index}
          />
        ))}
      </div>
      <div className="flex absolute inset-0 items-center justify-between px-2">
        <button
          onClick={prevSlide}
          className="bg-navybluedark text-neutral-50 p-2 rounded-full opacity-60 hover:opacity-100"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-navybluedark text-neutral-50 p-2 rounded-full opacity-60 hover:opacity-100"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  )
}
