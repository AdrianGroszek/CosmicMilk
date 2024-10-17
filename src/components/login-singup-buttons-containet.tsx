"use client";

import toast from "react-hot-toast";
import Button from "./ui/button";

export default function LoginSingupButtonsContainer() {
  function handleDemoButtons() {
    toast(
      `Check 'products', this is just a demo button, it doesn't have any login/sign up.`,
    );
  }
  return (
    <div className="flex justify-center gap-3">
      <Button variant="btn" fill="border" onClick={handleDemoButtons}>
        LOG IN
      </Button>
      <Button variant="btn" onClick={handleDemoButtons}>
        SING UP
      </Button>
    </div>
  );
}
