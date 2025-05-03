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
        url: "https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667f1590ccceec3eee19ec7c_Favicon.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667f1590ccceec3eee19ec7c_Favicon.png",
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
