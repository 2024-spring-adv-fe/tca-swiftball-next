import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {};

import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

if (process.env.NODE_ENV === "development") {
   await setupDevPlatform();
}

const withPWA = withPWAInit({
   dest: "public",
});

export default withPWA({ nextConfig });
