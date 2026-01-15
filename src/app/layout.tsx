import type { Metadata } from "next";
import { Archivo_Narrow, Geist_Mono } from "next/font/google"; // Removed separate Geist import
import "./globals.css";
import { SystemNav } from "@/components/SystemNav";

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LMST",
  description: "Logic, Materiality, Structure, Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoNarrow.variable} ${geistMono.variable} antialiased font-sans bg-[#F4F4F4] text-black selection:bg-black selection:text-white`}
      >
        <SystemNav />
        <div className="pt-12">{children}</div>
      </body>
    </html>
  );
}
