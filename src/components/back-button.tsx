"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

type BackButtonProps = {
  modal?: boolean;
  backBtnFunc?: () => void;
};

export default function BackButton({
  modal = false,
  backBtnFunc,
}: BackButtonProps) {
  const router = useRouter();

  function handlePrevRoute() {
    router.back();
  }

  return (
    <button
      className="flex items-center gap-2 pl-1 text-start font-bold duration-300 hover:gap-1 hover:pl-0 hover:text-cosmicgreen"
      onClick={modal ? backBtnFunc : handlePrevRoute}
    >
      <FaArrowLeft />
      BACK
    </button>
  );
}
