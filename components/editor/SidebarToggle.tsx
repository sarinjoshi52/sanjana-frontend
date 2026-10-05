"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export default function SidebarToggle() {
  const { open, openMobile, isMobile, toggleSidebar } = useSidebar();
  const isOpen = isMobile ? openMobile : open;

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      onClick={toggleSidebar}
      className="hover:bg-transparent rounded-lg"
    >
      {isOpen ? <ChevronLeft /> : <ChevronRight />}
    </Button>
  );
}
