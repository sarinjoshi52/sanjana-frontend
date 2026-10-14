"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function PreviousUrl() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant="ghost"
      className="flex items-center gap-1 font-semibold text-sm h-fit w-fit self-start hover:bg-transparent hover:scale-105 transition-transform duration-75 justify-start"
    >
      <ChevronLeft />
      Go Back
    </Button>
  );
}
