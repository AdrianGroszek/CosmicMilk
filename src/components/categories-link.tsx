import Link from "next/link";
import { ReactNode } from "react";

type CategoriesLinkProps = {
  planet: string | null;
  slug: string;
  children: ReactNode;
};

export default function CategoriesLink({
  planet,
  slug,
  children,
}: CategoriesLinkProps) {
  return (
    <li className={`h-8 w-[100px] p-1 ${planet === slug ? "hidden" : ""}`}>
      <Link
        href={`?planet=${slug}`}
        className="group relative inline-block h-full w-full overflow-hidden duration-300"
      >
        <span className="absolute w-full duration-300 group-hover:translate-y-[-36px]">
          {children}
        </span>
        <span className="absolute w-full translate-y-[36px] text-cosmicgreen duration-300 group-hover:translate-y-0">
          {children}
        </span>
      </Link>
    </li>
  );
}
