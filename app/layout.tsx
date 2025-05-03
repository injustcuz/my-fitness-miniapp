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
    'fc:frame:image': 'https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667f1590ccceec3eee19ec7c_Favicon.png',
    'fc:frame:button:1:text': 'Open MiniApp',
    'fc:frame:button:1:url': 'https://my-fitness-miniapp.vercel.app',
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Standard SEO tags */}
        <title>Monad Farcaster MiniApp Template</title>
        <meta
          name="description"
          content="A template for building mini-apps on Farcaster and Monad"
        />

        {/* Farcaster MiniApp meta tags */}
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667f1590ccceec3eee19ec7c_Favicon.png"
        />
        <meta property="fc:frame:button:1:text" content="Open MiniApp" />
        <meta
          property="fc:frame:button:1:url"
          content="https://my-fitness-miniapp.vercel.app"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
