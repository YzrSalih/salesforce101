"use client";

import { useEffect, useState } from "react";

/**
 * Responsive helper hook to detect if viewport width is below a breakpoint.
 * Defaults to 820px to mirror the user's example.
 */
export default function useIsMobile(breakpoint: number = 820) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Guard for SSR
    if (typeof window === "undefined") return;

    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}
