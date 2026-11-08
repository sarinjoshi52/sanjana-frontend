import type { Metadata } from "next";
import { Cal_Sans, Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter-source" });

const calSans = Cal_Sans({
  weight: "400",
  variable: "--font-cal-sans-source",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit-source",
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
        calSans.variable,
        outfit.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
