import "./globals.css";

export const metadata = {
  title: "MAGVEL Capital Services",
  description: "Home Loans, Mortgage Loans & Financial Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}