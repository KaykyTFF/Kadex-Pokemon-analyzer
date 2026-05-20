"use client";

import { usePathname } from "next/navigation";

/**
 * Decorative Background for Internal Pages
 * Adds a subtle themed image below the TopNav that fades into the app background.
 */
export function InternalDecorativeBackground() {
  const pathname = usePathname();

  // Do not show on the landing page (Home)
  if (pathname === "/") {
    return null;
  }

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-screen pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `linear-gradient(
            to bottom, 
            rgba(250, 250, 250, 0) 0%, 
            rgba(250, 250, 250, 0.4) 30%, 
            rgba(250, 250, 250, 0.8) 60%, 
            #fafafa 100%
          ), url("/images/pokemon-fundo.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4
        }}
      />
      <div className="kadex-pattern-bg" />
    </div>

  );
}
