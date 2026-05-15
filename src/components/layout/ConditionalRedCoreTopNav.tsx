"use client";

import { usePathname } from "next/navigation";
import { RedCoreTopNav } from "./RedCoreTopNav";

export function ConditionalRedCoreTopNav() {
  const pathname = usePathname();

  // Hide the navigation bar only on the main home screen
  if (pathname === "/") {
    return null;
  }

  return <RedCoreTopNav />;
}
