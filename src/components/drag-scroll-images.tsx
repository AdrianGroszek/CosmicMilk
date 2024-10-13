"use client";

import { ProductType } from "@/redux/features/products-slice";
import Image from "next/image";
import React, { useRef, useState } from "react";

type DragScrollImagesProps = {
  product: ProductType;
};

export default function DragScrollImages({ product }: DragScrollImagesProps) {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    e.preventDefault();
    setIsDragging(true);

    if (scrollRef.current) {
      setStartPosition(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    e.preventDefault();

    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startPosition) * 1;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <ul
      ref={scrollRef}
      className="no-scrollbar mb-4 flex h-[430px] gap-2 overflow-x-auto rounded-xl lg:h-full lg:w-1/3 lg:flex-col"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      {product.images.map((image, index) => (
        <li key={index} className="w-[358px] shrink-0 lg:w-full">
          <Image
            width={430}
            height={430}
            src={image}
            priority
            alt={`Image of ${product.name} product`}
            className="h-full w-full rounded-xl object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
