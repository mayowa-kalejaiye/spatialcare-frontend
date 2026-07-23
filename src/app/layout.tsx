import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpatialCare — Find Healthcare, Fast",
  description:
    "SpatialCare helps Nigerians find verified BHCPF facilities, access completely free healthcare services, know their rights, and report illegal medical fees.",
  keywords: "healthcare, doctors, hospitals, appointments, emergency, health services",
  authors: [{ name: "SpatialCare" }],
  openGraph: {
    title: "SpatialCare — Find Healthcare, Fast",
    description:
      "Find verified BHCPF facilities, access free healthcare, know your rights, and report illegal fees in Nigeria.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpatialCare Open Graph Image",
      }
    ],
  },
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
