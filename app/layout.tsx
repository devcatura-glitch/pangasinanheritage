import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pangasinan Heritage Showcase",
  description: "A digital initiative by the Pangasinan Provincial Tourism Office.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* This prevents the image glitch by hiding the body until Tailwind loads */}
        <style>{`
          body { opacity: 0; transition: opacity 0.2s ease-in; }
          .tailwind-loaded body { opacity: 1; }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col">
        {/* Tiny script to remove the hidden class once everything is ready */}
        <script dangerouslySetInnerHTML={{__html: `
          window.addEventListener('load', function() {
            document.documentElement.classList.add('tailwind-loaded');
          });
        `}} />
        {children}
      </body>
    </html>
  );
}