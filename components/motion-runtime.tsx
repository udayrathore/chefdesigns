"use client";

import { useEffect } from "react";

export function MotionRuntime() {
  useEffect(() => {
    document.body.dataset.reactHydrated = "true";
    window.dispatchEvent(new CustomEvent("proposal:hydrated"));
  }, []);

  return null;
}
