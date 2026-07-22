import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpatialCare — Find Healthcare, Fast",
  description:
    "SpatialCare helps you discover top-rated doctors, hospitals, and health services near you. Book appointments, access emergency routing, and exercise your healthcare rights — all for free.",
  keywords: "healthcare, doctors, hospitals, appointments, emergency, health services",
  authors: [{ name: "SpatialCare" }],
  openGraph: {
    title: "SpatialCare — Find Healthcare, Fast",
    description:
      "Discover top-rated doctors, hospitals, and health services near you.",
    type: "website",
  },
};

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
      <body>{children}</body>
    </html>
  );
}
