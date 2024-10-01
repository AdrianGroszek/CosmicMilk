import { type StaticImageData } from 'next/image'
import { type ReactNode } from 'react'
import CourierImageSlideshow from './courier-image-slideshow'

type CourierShowcaseProps = {
  courierName: string
  children: ReactNode
  courierImg: StaticImageData[]
}

export default function CourierShowcase({
  courierImg,
  courierName,
  children,
}: CourierShowcaseProps) {
  const courierNameArr = courierName.split('"')

  return (
    <li className="flex flex-col gap-2 mb-8 items-center">
      <h3 className="text-lg font-bold text-center">
        {courierNameArr[0]}
        <span className="text-cosmicgreen">
          &quot;{courierNameArr[1]}&quot;
        </span>
        {courierNameArr[2]}
      </h3>
      <p className="text-center mb-1">{children}</p>

      <CourierImageSlideshow
        courierImg={courierImg}
        courierName={courierName}
      />
    </li>
  )
}
