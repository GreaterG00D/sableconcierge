import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const description =
  "Impeccable care for plants and place. A luxury concierge service in Austin, Texas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sablesvcs.com"),
  title: "Sable Concierge | Luxury Personal Concierge",
  description,
  openGraph: {
    title: "Sable Concierge",
    description,
    siteName: "Sable Concierge",
    url: "/",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
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
