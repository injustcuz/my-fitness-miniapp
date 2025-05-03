import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FrameProvider } from "@/components/farcaster-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monad Farcaster MiniApp Template",
  description: "A template for building mini-apps on Farcaster and Monad",
  other: {
    // This line tells Warpcast to treat your site as a vNext Frame
    'fc:frame': 'vNext',
    // Set your frame's preview image (optional)
    'fc:frame:image': 'https://my-fitness-miniapp.vercel.app/preview.png',
    // The button text that appears in the Farcaster post card
    'fc:frame:button:1': 'Open MiniApp',
    // The link that button goes to
    'fc:frame:post_url': 'https://my-fitness-miniapp.vercel.app',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FrameProvider>{children}</FrameProvider>
      </body>
    </html>
  );
}
