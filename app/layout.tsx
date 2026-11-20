import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";

const playfair = localFont({
  src: "./fonts/PlayfairDisplay.ttf",
  variable: "--font-heading",
  weight: "400 700",
  display: "swap",
});

const sourceSans = localFont({
  src: "./fonts/SourceSans3.ttf",
  variable: "--font-body",
  weight: "300 600",
  display: "swap",
});

const description =
  "Impeccable care for plants and place. A luxury concierge service in Austin, Texas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sablesvcs.com"),
  title: "Sable Services | Luxury Personal Concierge",
  description,
  applicationName: "Sable Services",
  authors: [{ name: "Olivia Whitehead" }],
  creator: "Sable Services",
  formatDetection: { telephone: true, email: true, address: false },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  openGraph: {
    title: "Sable Services",
    description,
    siteName: "Sable Services",
    url: "/",
    type: "website",
    locale: "en_US",
    images: [{
      url: "/social/sable-concierge-lattice-v3.jpg",
      width: 1200,
      height: 630,
      alt: "Sable Concierge — The gift of time. Private home concierge in Austin, Texas.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{
      url: "/social/sable-concierge-lattice-v3.jpg",
      alt: "Sable Concierge — The gift of time. Private home concierge in Austin, Texas.",
    }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1f2e24",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
