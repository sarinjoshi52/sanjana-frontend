import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Announcement from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import BreadCrumb from "@/components/layout/BreadCrumb";
import Footer from "@/components/layout/Footer";
import AOSProvider from "./AOSProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SañJñāNā Development",
  description:
    "SañJñāNā is a team of knowledge professionals dedicated to developing institutions, knowledge, and leadership. Our mission is to strengthen these foundational pillars, advancing transformative perspectives, power, and potential within society through crystallized and evidence-based knowledge services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <Announcement />
        <div id="sticky-navigation" className="sticky top-0 left-0 right-0 z-50">
          <Header />
          <BreadCrumb />
        </div>
        <AOSProvider />
        <div className="mt-8 mb-8">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
