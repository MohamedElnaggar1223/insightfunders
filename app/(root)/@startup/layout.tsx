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