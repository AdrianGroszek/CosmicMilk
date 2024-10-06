import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  variant: "btn";
  size?: "small" | "medium" | "large";
  fill?: "solid" | "border";
} & ComponentPropsWithoutRef<"button">;

type LinkProps = {
  variant: "link";
  size?: "small" | "medium" | "large";
  fill?: "solid" | "border";
} & ComponentPropsWithoutRef<"a">;

type Props = ButtonProps | LinkProps;

export default function Button({
  size = "medium",
  fill = "solid",
  ...props
}: Props) {
  const baseClasses =
    "font-bold font-cosmic relative overflow-hidden after:bg-neutral-50 after:content-[''] after:h-[155px] after:w-[50px] after:absolute after:opacity-20 after:left-[-75px] after:top-[-50px] after:rotate-[35deg] after:ease-out after:duration-500 hover:after:left-[120%] border-2 border-cosmicgreen";

  const sizeClasses = {
    small: "px-3 py-1 text-sm rounded-md",
    medium: "px-4 py-2 text-base rounded-lg",
    large: "px-6 py-3 text-lg rounded-[10px]",
  };

  const colorClasses = {
    solid: "bg-cosmicgreen text-navybluedark hover:bg-cosmicgreendark",
    border: "text-cosmicgreen",
  };

  const classNames = `${sizeClasses[size] || sizeClasses.medium} ${colorClasses[fill] || colorClasses.solid} ${baseClasses}`;

  if (props.variant === "link") {
    const { ...linkProps } = props;
    return (
      <Link
        href={`${linkProps.href}`}
        {...linkProps}
        className={`${classNames} inline-block`}
      ></Link>
    );
  }
  return <button {...props} className={`${classNames}`}></button>;
}
