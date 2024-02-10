import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "@/app/providers";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thread-it",
  description: "A Reddit-style forum app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <Providers>
            <Header />
              <div className="container mx-auto px-4 max-w-6xl">
                {children}
              </div>
          </Providers>

      </body>
    </html>
  );
}
