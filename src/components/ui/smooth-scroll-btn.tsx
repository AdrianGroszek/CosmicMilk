"use client";

import Button from "./button";

type SmoothScrollBtnProps = {
  targetElement: string;
};

export default function SmoothScrollBtn({
  targetElement,
}: SmoothScrollBtnProps) {
  return (
    <div className="mt-4 flex items-center justify-center">
      <Button
        variant="btn"
        onClick={() => {
          const el = document.getElementById(targetElement);
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        START EXPLORING NOW !
      </Button>
    </div>
  );
}
