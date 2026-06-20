import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAGVEL Capital Services Pvt. Ltd.",
  description:
    "Get the Best Home Loan Deals from Top Banks & NBFCs. Compare loan offers from leading banks and NBFCs with MAGVEL Capital Services Pvt. Ltd.",

  metadataBase: new URL("https://magvelcapital.in"),

  openGraph: {
    title: "MAGVEL Capital Services Pvt. Ltd.",
    description:
      "Trusted Financial Partner for Home Loans, LAP, Business Loans, Construction Finance & Builder Funding.",
    url: "https://magvelcapital.in",
    siteName: "MAGVEL Capital Services Pvt. Ltd.",
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://magvelcapital.in",
  },

  icons: {
    icon: "/logo.png", // replace with your actual logo filename
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}