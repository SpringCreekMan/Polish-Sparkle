import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polish Sparkle | Professional Cleaning Services in Chicagoland Suburbs",
  description:
    "Premium indoor and outdoor cleaning services serving Woodridge, Naperville, Orland Park, Bolingbrook, Hinsdale, and surrounding Chicago suburbs. Residential & commercial cleaning. Get a free quote today!",
  keywords:
    "cleaning services, house cleaning, commercial cleaning, pressure washing, window cleaning, Naperville, Woodridge, Orland Park, Bolingbrook, Hinsdale, Chicagoland",
  openGraph: {
    title: "Polish Sparkle | Professional Cleaning Services",
    description:
      "Premium indoor and outdoor cleaning services serving Chicagoland suburbs.",
    type: "website",
    url: "https://www.polishsparkle.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
