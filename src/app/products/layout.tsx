export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex items-center justify-center">{children}</main>;
}
