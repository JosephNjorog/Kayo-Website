import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kayo - Verifiable Carbon Credits & Supply Chain Platform",
  description: "Bringing trust and transparency to carbon credits and agricultural supply chains with advanced monitoring, reporting, and verification systems.",
  keywords: "carbon credits, supply chain, verification, agriculture, sustainability, blockchain, dMRV, transparency",
  authors: [{ name: "Kayo Platform", url: "https://kayopulse.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kayopulse.com",
    siteName: "Kayo Platform",
    title: "Kayo - Verifiable Carbon Credits & Supply Chain Platform",
    description: "Bringing trust and transparency to carbon credits and agricultural supply chains with advanced monitoring, reporting, and verification systems.",
    images: [
      {
        url: "https://kayopulse.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kayo Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayo - Verifiable Carbon Credits & Supply Chain Platform",
    description: "Bringing trust and transparency to carbon credits and agricultural supply chains with advanced monitoring, reporting, and verification systems.",
    creator: "@KayoPulse",
    images: ["https://kayopulse.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
