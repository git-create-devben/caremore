import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "~/components/Navbar";
import Footer from "~/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'All You Need In One Pack - Premium Skincare',
  description: 'Complete skincare solution including Moisturizer, Sunscreen, Face toner, Cleansing balm, and Face wash in a single pack.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FBF0EA]`}
      >
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
