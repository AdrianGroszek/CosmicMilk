"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import ProgressBar from "./ui/progress-bar";

type CourierImageSlodeshowProps = {
  courierImg: StaticImageData[];
  courierName: string;
};

export default function CourierImageSlideshow({
  courierImg,
  courierName,
}: CourierImageSlodeshowProps) {
  const [showImageIndex, setShowImageIndex] = useState(0);

  const activeStyles = `z-1 opacity-100 scale-100 translate-x-0 rotate-0`;

  const duration = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImageIndex((prevIndex) =>
        prevIndex < courierImg.length - 1 ? prevIndex + 1 : 0,
      );
    }, duration);
    return () => clearInterval(interval);
  }, [courierImg.length]);

  return (
    <div className="relative h-[500px] w-full max-w-[350px] overflow-hidden rounded-xl border-2 border-navybluedark shadow-md shadow-neutral-900 sm:h-[500px] sm:w-[350px] sm:border-4 xl:w-full">
      {courierImg.map((image, index) => (
        <Image
          src={image}
          alt={courierName}
          key={index}
          className={`absolute inset-0 h-full w-full translate-x-[-4px] rotate-[-5deg] scale-110 object-cover opacity-0 duration-1000 ease-in-out ${showImageIndex === index ? activeStyles : ""}`}
        />
      ))}
      <div className="flex items-center justify-center">
        <ul className="absolute bottom-4 flex gap-2">
          {courierImg.map((_, index) => (
            <li
              key={index}
              className={`h-3 w-3 rounded-full duration-1000 ${showImageIndex === index ? "scale-125 bg-cosmicgreen opacity-100" : "bg-neutral-50 opacity-50"}`}
            ></li>
          ))}
        </ul>
      </div>
      <ProgressBar duration={duration} imgIndex={showImageIndex} />
    </div>
  );
}
