import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insight Funders - Startups",
  description: "Insight Funders is a platform for connecting startups with investors.",
}

export default async function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<>
			{children}
		</>
	);
}