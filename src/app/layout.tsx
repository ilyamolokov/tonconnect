import { Suspense } from "react";
import type { Metadata } from "next";
import Providers from "@/providers/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Delaem-IT Task",
};

export default function RootLayout({
  children,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-mono antialiased min-h-screen"
        // suppressHydrationWarning
      >
        <Providers>
          <Suspense>
            {header}
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
