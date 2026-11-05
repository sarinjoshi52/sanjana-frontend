"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type PreviousUrlProp = {
  label: string;
};

export default function PreviousUrl({ label }: PreviousUrlProp) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant="outline"
      className="flex items-center gap-1 font-semibold text-sm h-fit w-fit self-start border-primary hover:bg-primary hover:text-white py-2 rounded-lg "
    >
      <ChevronLeft />
      {label}
    </Button>
  );
}
