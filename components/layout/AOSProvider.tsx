"use client";

import { useEffect, type ReactNode } from "react";

export default function AOSProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let cancelled = false;

    import("aos").then(({ default: AOS }) => {
      if (!cancelled) {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
          once: true,
          offset: 80,
        });
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return children;
}
