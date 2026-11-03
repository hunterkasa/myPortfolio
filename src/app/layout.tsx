import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0817",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} (@${portfolioData.personal.handle}): ${portfolioData.personal.title}`,
  description: `${portfolioData.personal.tagline} Student at AIUB, Codeforces Expert (1618), ICPC Regional Preliminary 35th. Over 4,300+ solved algorithmic problems.`,
  keywords: [
    portfolioData.personal.name,
    "hunterkasa",
    "hunterkasa_",
    "Codeforces Expert",
    "AIUB",
    "ICPC",
    "Competitive Programming",
    "Software Engineer",
    ".NET Developer",
    "C++",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: portfolioData.personal.name, url: portfolioData.contact.github }],
  creator: portfolioData.personal.name,
  openGraph: {
    title: `${portfolioData.personal.name} (@${portfolioData.personal.handle})`,
    description: portfolioData.personal.tagline,
    url: "https://hunterkasa.github.io",
    siteName: `${portfolioData.personal.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} (@${portfolioData.personal.handle})`,
    description: portfolioData.personal.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0c0817] text-[#f8f4ff] font-sans selection:bg-[#c084fc] selection:text-[#0c0817]">
        {children}
      </body>
    </html>
  );
}
