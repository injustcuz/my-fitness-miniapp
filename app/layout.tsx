import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Farcaster MiniApp",
  description: "A Next.js template for building mini-apps on Farcaster and Monad",
  openGraph: {
    title: "My Farcaster MiniApp",
    description: "A Next.js template for building mini-apps on Farcaster and Monad",
    url: "https://my-fitness-miniapp.vercel.app",
    images: [
      {
        url: "https://postimg.cc/8FtbhgpM",
        width: 1200,
        height: 630,
      },
    ],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://postimg.cc/8FtbhgpM",
    "fc:frame:button:1:text": "Open MiniApp",
    "fc:frame:button:1:url": "https://my-fitness-miniapp.vercel.app"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
