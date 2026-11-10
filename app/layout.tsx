import type { Metadata } from "next";
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
  openGraph: {
    title: "Sable Services",
    description,
    siteName: "Sable Services",
    url: "/",
    type: "website",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
