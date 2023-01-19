import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
