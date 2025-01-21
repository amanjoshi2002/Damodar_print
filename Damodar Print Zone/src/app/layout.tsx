import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damodar Print Zone | Premium Printing Services in Vasco, Goa",
  description:
    "Damodar Print Zone offers high-quality printing services in Vasco, Goa, including Smart ID Cards, Customized Mugs, Pamphlets, Photo Prints, UV DTF Stickers, Flex Banners, Graphics Designing, and more. Visit us at Shop No 30, 1st Floor, Fr Jos Vaz Road, Vasco Da Gama, Goa - 403802 (Near Damodar Xerox, Apna Bazaar). Contact us at 9623451932 or damodarprintzone@gmail.com.",
  keywords: [
    "printing services Vasco",
    "printing services Goa",
    "Smart ID Cards",
    "Customized Mugs",
    "Pamphlets",
    "Photo Prints",
    "UV DTF Stickers",
    "Flex Banners",
    "Graphics Designing",
    "Digital Printing",
    "Offset Printing",
    "Visiting Cards",
    "Brochures",
    "Stickers",
    "Lamination",
    "CAD Plotting",
    "Photo Frames",
    "Rollup Standies",
    "Glow Sign Boards",
    "Damodar Print Zone",
    "Vasco printing",
  ],
  authors: [{ name: "Damodar Print Zone", url: "https://damodarprintzone.com" }],
  openGraph: {
    title: "Damodar Print Zone | Premium Printing Services in Vasco, Goa",
    description:
      "High-quality printing services in Vasco, Goa, including Smart ID Cards, Customized Mugs, Pamphlets, Photo Prints, UV DTF Stickers, Flex Banners, Graphics Designing, and more. Visit us at Shop No 30, 1st Floor, Fr Jos Vaz Road, Vasco Da Gama, Goa - 403802 (Near Damodar Xerox, Apna Bazaar). Contact us at 9623451932 or damodarprintzone@gmail.com.",
    url: "https://damodarprintzone.com",
    siteName: "Damodar Print Zone",
    images: [
      {
        url: "/images/og-image.jpg", // Replace with your OG image path
        width: 1200,
        height: 630,
        alt: "Damodar Print Zone",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damodar Print Zone | Premium Printing Services in Vasco, Goa",
    description:
      "High-quality printing services in Vasco, Goa, including Smart ID Cards, Customized Mugs, Pamphlets, Photo Prints, UV DTF Stickers, Flex Banners, Graphics Designing, and more. Visit us at Shop No 30, 1st Floor, Fr Jos Vaz Road, Vasco Da Gama, Goa - 403802 (Near Damodar Xerox, Apna Bazaar). Contact us at 9623451932 or damodarprintzone@gmail.com.",
    images: ["/images/twitter-image.jpg"], // Replace with your Twitter image path
  },
  metadataBase: new URL("https://damodarprintzone.com"), // Replace with your actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}