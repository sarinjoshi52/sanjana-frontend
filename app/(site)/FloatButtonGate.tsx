"use client";

import FloatButton from "@/components/layout/FloatButton";
import { useEffect, useState } from "react";

export default function FloatButtonGate() {
  const [hasEmail, setHasEmail] = useState(false);

  useEffect(() => {
    setHasEmail(Boolean(localStorage.getItem("email")));
  }, []);

  return hasEmail ? <FloatButton /> : null;
}
