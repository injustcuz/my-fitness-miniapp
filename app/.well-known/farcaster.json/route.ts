import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
      accountAssociation: {
        "header": "eyJmaWQiOjMyMDIxNSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGE1N2U1MzRhZDVENDEwMGNjMDE1QUFkYWZhOUFBODhiMzY2NkQzZmMifQ",
        "payload": "eyJkb21haW4iOiJteS1maXRuZXNzLW1pbmlhcHAudmVyY2VsLmFwcCJ9",
        "signature": "MHgyNjYwNzY1YTdmMWUxOWMwOTVjOWQzYmZjZDhiNzUzZTZkY2ExZDdiNGU0MThhMmMwZmQ4NTFjMzI3YTYxMzI4NTAyN2MzZTA4YjMzYWFhM2IwYTQwM2Y2YmRlYThmODcyMzUxMzBlMjI1ZTE4M2JiNGMzMDU2ZDU4YzlhYmJhMTFj"
      }
    },
    frame: {
      version: "1",
      name: "Monad Farcaster MiniApp Template",
      iconUrl: `${APP_URL}/images/icon.png`,
      homeUrl: `${APP_URL}`,
      imageUrl: `${APP_URL}/images/feed.png`,
      screenshotUrls: [],
      tags: ["monad", "farcaster", "miniapp", "template"],
      primaryCategory: "developer-tools",
      buttonTitle: "Launch Template",
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
    },
  };

  return NextResponse.json(farcasterConfig);
}
