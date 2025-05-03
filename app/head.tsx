import React from "react";

export default function Head() {
  const frameEmbed = {
    version: "next",                                // “next” or “1”
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
      <meta
        name="fc:frame"
        content={JSON.stringify(frameEmbed)}
      />
    </>
  );
}
