import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ConditionalRedCoreTopNav } from "@/components/layout/ConditionalRedCoreTopNav";
import { InternalDecorativeBackground } from "@/components/layout/InternalDecorativeBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Kadex - Competitive Pokémon Intelligence",
  description: "Advanced team builder and analyzer for competitive Pokémon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} kadex-page-shell`}>
        <ConditionalRedCoreTopNav />
        <main className="flex-1 relative z-10">
          <InternalDecorativeBackground />
          {children}
        </main>
      </body>
    </html>
  );
}

