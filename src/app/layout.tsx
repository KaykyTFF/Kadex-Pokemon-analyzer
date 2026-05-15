import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ConditionalRedCoreTopNav } from "@/components/layout/ConditionalRedCoreTopNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Kadex - Competitive Pokémon Workspace",
  description: "Advanced team builder and analyzer for competitive Pokémon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} flex flex-col h-screen overflow-hidden`}>
        <ConditionalRedCoreTopNav />
        <main className="flex-1 overflow-y-auto custom-scrollbar rc-animate-fade relative z-10">
          <div className="max-w-[1400px] mx-auto w-full h-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

