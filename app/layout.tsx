import type { Metadata } from "next";
import { Arsenal } from "next/font/google";
import "./globals.css";

const arsenal = Arsenal({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Jennifer Hazard - Online Therapeutic Counselling",
  description: "Professional counselling services by Jennifer Hazard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arsenal.className}>{children}</body>
    </html>
  );
}