// const runtimeCaching = [
//   {
//     urlPattern: /^https:\/\/api\.openweathermap\.org\/.*/i,
//     handler: 'NetworkFirst',
//     options: {
//       cacheName: 'weather-api-cache',
//       expiration: {
//         maxEntries: 50,
//         maxAgeSeconds: 60 * 60, 
//       },
//       networkTimeoutSeconds: 5,
//     },
//   },
// ];
// const nextConfig = {
//   reactStrictMode: true,
//   turbopack: {},
//   webpack: (config) => {
//     // ensure next-pwa works with webpack
//     return config;
//   },
// };
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   runtimeCaching,
// });

// module.exports = withPWA({
//   reactStrictMode: true,
// });
import type { NextConfig } from "next";
 
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: [/app-build-manifest\.json$/],
});
 
const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // ensure next-pwa works with webpack
    return config;
  },
};
 
export default withPWA(nextConfig);