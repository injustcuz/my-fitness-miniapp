// app/head.tsx
import React from "react";

export default function Head() {
  const frameEmbed = {
    version: "next",
    imageUrl: "https://my-fitness-miniapp.vercel.app/images/splash.png",
    button: {
      title: "Open MiniApp",
      action: {
        type: "launch_frame",
        url:  "https://my-fitness-miniapp.vercel.app",
        name: "My Farcaster MiniApp",
        splashImageUrl: "https://my-fitness-miniapp.vercel.app/images/splash.png",
        splashBackgroundColor: "#ffffff"
      }
    }
  };

  return (
    <>
      {/* this single tag is all Farcaster needs */}
      <meta name="fc:frame" content={JSON.stringify(frameEmbed)} />
    </>
  );
}