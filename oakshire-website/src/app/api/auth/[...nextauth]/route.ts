export const dynamic = "force-static";

// Generate static params for build (required for static export)
export function generateStaticParams() {
  return [{ nextauth: ["dummy"] }];
}

import { handlers } from "~/server/auth";

export const { GET, POST } = handlers;
