import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import BottomBar from "@/components/shared/BottomBar";
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insight Funders",
  description: "Insight Funders is a platform for connecting startups with investors.",
};

const roboto = Roboto({
    weight: ['100','300', '400', '500', '700', '900'],
    subsets: ['latin'],
    display: "swap",
})

const logoFont = localFont({
    src: '../../../public/fonts/Fontspring-DEMO-integralcf-medium.otf',
    display: 'swap',
	variable: '--IntegralCF',
})

export default async function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
      <main className={cn('p-0 m-0 flex flex-col', roboto.className, logoFont.variable)}>
          <Header />
          {children}
          {/* <BottomBar /> */}
          <Footer />
      </main>
	);
}