import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import BottomBar from "@/components/shared/BottomBar";


export const metadata: Metadata = {
  title: "Insight Funders",
  description: "Insight Funders is a platform for connecting startups with investors.",
};

export default async function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
        <>
            <Header />
            {children}
            <BottomBar />
            <Footer />
        </>
	);
}