import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import website from "@/data/website";

export const metadata: Metadata = website.meta

// Fonts 
const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"], weight: ['300', '400', '500', '600', '700', '800'] });
const ubuntu = Ubuntu({ variable: "--font-ubuntu", subsets: ["latin"], weight: ['300', '400', '500', '700'] });
const ubuntuMono = Ubuntu_Mono({ variable: "--font-ubuntu-mono", subsets: ["latin"], weight: ['400', '700'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${ubuntu.variable} ${ubuntuMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
