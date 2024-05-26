import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL(defaultUrl),
  title: "paper ai 使用真实文献让AI完成论文",
  description: "写论文最高效的方式",
  keywords: [
    "free AI",
    "免费AI模型",
    "AI",
    "AI paper",
    "true references",
    "真实文献",
    "真实文献引用",
  ],
  authors: [{ name: "li", url: "" }],
  creator: "li",
  publisher: "li",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images:
      "",
  },
  twitter: {
    card: "page",
    title: "AI write",
    description: "The fastest way to write paper",
    creator: "@lijian",
    images: [
      "",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      {/* <Script>{`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                  // 注册成功
                  console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                  // 注册失败 :(
                  console.log('ServiceWorker registration failed: ', err);
                });
              });
            }
          `}</Script> */}
      {/* msft clarify 
      
      Microsoft Clarity 分析工具的
      
      */}
      <Script>

        {`(function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "l869naiex9");`}
      </Script>
      {/* google一键登录 */}
      {/* <Script src="https://accounts.google.com/gsi/client" async></Script> */}
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>


      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <GoogleAnalytics gaId="G-WLC7HWWQFF" />

      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-WLC7HWWQFF"></script>
      {/* <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WLC7HWWQFF');
      </script> */}
    </html>
  );
}
