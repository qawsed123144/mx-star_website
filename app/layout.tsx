'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode} from "react";

import { Toaster } from "@/components/toaster";
import { TooltipProvider } from "@/components/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          type="text/javascript"
          src="https://replit.com/public/js/replit-dev-banner.js"
        ></script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
      </body>
    </html>
  );
}