import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-KXJNQKBLB3`}
      />
      <Script strategy="lazyOnload">
        {` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-KXJNQKBLB3');`}
      </Script>
    </SessionProvider>
  );
}
