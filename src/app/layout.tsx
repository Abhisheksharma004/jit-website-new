import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jyoti Info Tech — Software & IT Solutions",
  description:
    "Jyoti Info Tech delivers fixed-price custom software, enterprise client portals, ERP systems and AI solutions for growing businesses and institutions.",
  keywords: [
    "Jyoti Info Tech",
    "Software and IT Solutions",
    "custom software development",
    "ERP systems",
    "client portal development",
    "AI chatbots for business",
    "web development agency",
  ],
  authors: [{ name: "Jyoti Info Tech" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Jyoti Info Tech — Software & IT Solutions",
    description:
      "Engineered with precision. Fixed-price custom software, web portals, and AI systems built by senior engineers.",
    url: "https://jyotiinfotech.com",
    siteName: "Jyoti Info Tech",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f1ea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300..800;1,300..800&family=Courgette&family=Fuzzy+Bubbles:wght@400;700&family=Petit+Formal+Script&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-[#f4f1ea] font-sans text-[#11100e] selection:bg-[#fe1e10] selection:text-white">
        {children}
      </body>
    </html>
  );
}
