import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/commons/Header";
import Footer from "@/components/commons/Footer";
import ToastProvider from "@/providers/ToastProvider";

// assign fonts a variable for tailwind-css usage
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mont = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "Task Management Application",
  description: "Task Management Assignment for Stamurai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mont.variable} ${inter.className}`}>
        <Header />
        {children}
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
