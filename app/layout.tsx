import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FrameProvider } from "@/components/farcaster-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monad Farcaster MiniApp Template",
  description: "A template for building mini-apps on Farcaster and Monad",
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://my-fitness-miniapp.vercel.app/preview.png.png',
    'fc:frame:button:1:text': 'Open MiniApp',
    'fc:frame:button:1:url': 'https://my-fitness-miniapp.vercel.app',
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
