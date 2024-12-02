import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunito = localFont({
  src: [
    {
      path: './fonts/Nunito-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-nunito',
  display: 'swap',
});

const ocraext = localFont({
  src: './fonts/OCRAEXT.ttf',
  variable: '--font-ocra',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DevDom",
  description: "Full-Stack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${ocraext.variable}`}>
      <body className="font-nunito antialiased">{children}</body>
    </html>
  );
}
