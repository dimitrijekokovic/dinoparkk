"use client";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Resetuj scroll na vrh kad se promeni ruta
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LanguageProvider>
      <html lang="sr" className="overflow-x-hidden">
        <body
          suppressHydrationWarning={true}
          className="bg-gray-100 text-gray-900 overflow-x-hidden"
        >
          <Navbar />
          <main className="w-full max-w-[100vw] overflow-x-hidden">
            {children}
          </main>
        </body>
      </html>
    </LanguageProvider>
  );
}
