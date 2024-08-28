import type { Metadata } from "next";
import '../globals.css';

import { Manrope } from 'next/font/google';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="flex w-full shrink-0 flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
