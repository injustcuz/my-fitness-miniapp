import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://my-fitness-miniapp.vercel.app"), 
  title: "My Farcaster MiniApp",
  description: "A Next.js template for building mini-apps on Farcaster and Monad",
  openGraph: {
    title: "My Farcaster MiniApp",
    description: "A Next.js template for building mini-apps on Farcaster and Monad",
    url: "https://my-fitness-miniapp.vercel.app",
    images: [
      {
        url: "https://i.postimg.cc/9MjNHcs8/wow.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://i.postimg.cc/9MjNHcs8/wow.png",
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
      <body>{children}</body>
    </html>
  );
}
