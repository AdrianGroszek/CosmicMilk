'use client'

import Image, { type StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import ProgressBar from './ui/progress-bar'

type CourierImageSlodeshowProps = {
  courierImg: StaticImageData[]
  courierName: string
}

export default function CourierImageSlideshow({
  courierImg,
  courierName,
}: CourierImageSlodeshowProps) {
  const [showImageIndex, setShowImageIndex] = useState(0)

  const activeStyles = `z-1 opacity-100 scale-100 translate-x-0 rotate-0`

  const duration = 5000

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImageIndex((prevIndex) =>
        prevIndex < courierImg.length - 1 ? prevIndex + 1 : 0,
      )
    }, duration)
    return () => clearInterval(interval)
  }, [courierImg.length])

  return (
    <div className="rounded-xl w-full max-w-[350px] h-[500px] sm:w-[350px] sm:h-[500px] overflow-hidden shadow-md shadow-neutral-900 border-2 border-navybluedark sm:border-4 relative">
      {courierImg.map((image, index) => (
        <Image
          src={image}
          alt={courierName}
          key={index}
          className={`absolute w-full h-full object-cover inset-0 opacity-0 scale-110 translate-x-[-4px] rotate-[-5deg] ease-in-out duration-1000 ${showImageIndex === index ? activeStyles : ''}`}
        />
      ))}
      <div className="flex items-center justify-center">
        <ul className="absolute bottom-4 flex gap-2">
          {courierImg.map((_, index) => (
            <li
              key={index}
              className={`w-3 h-3 rounded-full duration-1000 ${showImageIndex === index ? 'opacity-100 bg-cosmicgreen scale-125' : 'bg-neutral-50 opacity-50'}`}
            ></li>
          ))}
        </ul>
      </div>
      <ProgressBar duration={duration} imgIndex={showImageIndex} />
    </div>
  )
}
