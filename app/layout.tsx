import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sansidamjaya.kodamjaya-tniad.mil.id"),
  title: "Sansidam Jaya - Sandi dan Siber Kodam Jaya",
  description:
    "Situs resmi Sansidam Jaya (Sandi dan Siber Kodam Jaya). Badan pelaksana staf di tingkat Mako Kodam Jaya yang membina dan menyelenggarakan fungsi persandian serta pertahanan siber di wilayah Kodam Jaya/Jayakarta.",
  keywords: [
    "Sansidam Jaya",
    "Sandi dan Siber Kodam Jaya",
    "Kodam Jaya",
    "Persandian TNI AD",
    "Pertahanan Siber Kodam Jaya",
    "Sandi Kodam Jaya",
  ],
  authors: [{ name: "Sansidam Jaya" }],
  openGraph: {
    title: "Sansidam Jaya - Sandi dan Siber Kodam Jaya",
    description:
      "Situs resmi informasi profil, tugas pokok, dan kegiatan Sansidam Jaya (Sandi dan Siber Kodam Jaya).",
    url: "https://sansidamjaya.kodamjaya-tniad.mil.id",
    siteName: "Sansidam Jaya",
    images: [
      {
        url: "/images/logoSansidamJaya.png",
        width: 800,
        height: 800,
        alt: "Logo Sansidam Jaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/images/logoSansidamJaya.png",
    apple: "/images/logoSansidamJaya.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${openSans.variable} ${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F7F9FB] text-[#17252A] antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
