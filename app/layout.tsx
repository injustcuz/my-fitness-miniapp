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
  // ⚠️ NO more `other: { "fc:frame": … }`
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

  // app/head.tsx
export default function Head() {
  const frameEmbed = {
    version: "next",                               // must be "1" or "next"
    imageUrl: "https://my-fitness-miniapp.vercel.app/images/splash.png", // 3:2 ratio
    button: {
      title: "Open MiniApp",                      // ≤32 chars
      action: {
        type: "launch_frame",                     // opens the Mini-App
        url:  "https://my-fitness-miniapp.vercel.app", 
        name: "My Farcaster MiniApp",             // your app’s name
        splashImageUrl: "https://my-fitness-miniapp.vercel.app/images/splash.png", // optional
        splashBackgroundColor: "#ffffff"          // optional
      }
    }
  };

  return (
    <>
      <meta
        name="fc:frame"
        content={JSON.stringify(frameEmbed)}
      />
    </>
  );
}
