/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://reactjs.org/tutorial/tutorial.html
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
// 配置 @next/bundle-analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
// 首先使用withBundleAnalyzer包装nextConfig
const enhancedConfig = withBundleAnalyzer(nextConfig);
// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");
// 然后使用withSentryConfig包装已增强的配置
module.exports = withSentryConfig(
  enhancedConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "liuweiqing-limited",
    project: "paperai",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
