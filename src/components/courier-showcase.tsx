import { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import CourierImageSlideshow from "./courier-image-slideshow";

type CourierShowcaseProps = {
  courierName: string;
  children: ReactNode;
  courierImg: StaticImageData[];
  colReverse?: boolean;
};

export default function CourierShowcase({
  courierImg,
  courierName,
  children,
  colReverse,
}: CourierShowcaseProps) {
  const courierNameArr = courierName.split('"');

  return (
    <li
      className={`relative mb-8 flex flex-col items-center gap-2 md:mb-16 md:w-[80%] md:items-start lg:max-w-[1000px] xl:flex-col-reverse xl:items-center xl:gap-6 ${colReverse ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div
        className={`sm:w-[75%] md:sticky md:top-[56px] xl:relative xl:top-0 ${colReverse ? "sm:pr-3 lg:pr-6" : "sm:pl-3 lg:pl-6"} xl:p-0`}
      >
        <h3 className="text-center text-lg font-bold md:text-start xl:text-center">
          {courierNameArr[0]}
          <span className="text-cosmicgreen">
            &quot;{courierNameArr[1]}&quot;
          </span>
          {courierNameArr[2]}
        </h3>
        <p className="mb-1 text-center md:text-start xl:text-center">
          {children}
        </p>
      </div>

      <CourierImageSlideshow
        courierImg={courierImg}
        courierName={courierName}
      />
    </li>
  );
}
