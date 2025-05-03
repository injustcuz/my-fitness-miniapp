// app/layout.tsx
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://my-fitness-miniapp.vercel.app"),
  title:       "My Farcaster MiniApp",
  description: "A Next.js template for building mini-apps on Farcaster and Monad",
  openGraph: {
    title:       "My Farcaster MiniApp",
    description: "A Next.js template for building mini-apps on Farcaster and Monad",
    url:         "https://my-fitness-miniapp.vercel.app",
    images: [
      {
        url:    "https://my-fitness-miniapp.vercel.app/images/splash.png",
        width:   1200,
        height:  630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
