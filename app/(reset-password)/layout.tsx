import '../globals.css'
import { Inter } from "next/font/google";

export const metadata = {
  title: 'Insight Funders',
  description: 'Insight Funders is a platform for connecting startups with investors.',
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
			<body className={inter.className}>
        <section className='w-full flex flex-col bg-[#1A1A1A] min-h-screen'>
          {children}
        </section>
			</body>
		</html>
  )
}
