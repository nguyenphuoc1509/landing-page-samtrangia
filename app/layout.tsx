import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rượu Sâm Trà My",
  description:
    "Rượu Sâm Ngọc Linh nguyên chất - Trà My Quảng Nam",
  keywords: [
    "sâm ngọc linh",
    "sâm ngọc linh quảng nam",
    "rượu sâm ngọc linh",
    "rượu sâm ngâm mật ong",
    "rượu sâm nguyên củ",
    "sâm ngọc linh chính hãng",
    "panax vietnamensis",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
      <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
