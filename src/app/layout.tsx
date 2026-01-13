import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "LMST",
  description: "Logic, Material, Space, Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${archivo.className} antialiased bg-white text-black`}
        style={{ fontStretch: "75%" }}
      >
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
