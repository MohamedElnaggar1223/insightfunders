import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { cn } from "@/lib/utils";
import BottomBar from "@/components/shared/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insight Funders",
  description: "Insight Funders is a platform for connecting startups with investors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-[#F9FAFB] overflow-x-hidden')}>
        <Header />
        {children}
        <BottomBar />
        <Footer />
      </body>
    </html>
  );
}
