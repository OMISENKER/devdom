import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Serif } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dominique Eclavia",
  url: "https://devdom.dev",
  jobTitle: "Full-Stack Web Developer",
  description:
    "Full-stack web developer specializing in React, Next.js, and the MERN stack. Based in Pasig, Philippines.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pasig",
    addressRegion: "NCR",
    addressCountry: "PH",
  },
  sameAs: [
    "https://www.linkedin.com/in/dominique-eclavia",
    "https://github.com/OMISENKER",
    "mailto:dominiquealvarez8888@gmail.com",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://devdom.dev"),
  title: "Dominique Eclavia — Full-Stack Web Developer",
  description:
    "Full-stack web developer based in Pasig, Philippines. Specializing in React, Next.js, and the MERN stack — building dynamic, responsive, and scalable web applications.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "MERN",
    "Web Developer",
    "Philippines",
    "Dominique Eclavia",
  ],
  authors: [{ name: "Dominique Eclavia" }],
  creator: "Dominique Eclavia",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://devdom.dev",
    siteName: "Dominique Eclavia",
    title: "Dominique Eclavia — Full-Stack Web Developer",
    description:
      "Full-stack web developer based in Pasig, Philippines. React, Next.js, MERN stack.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dominique Eclavia — Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominique Eclavia — Full-Stack Web Developer",
    description:
      "Full-stack web developer based in Pasig, Philippines. React, Next.js, MERN stack.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://devdom.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
