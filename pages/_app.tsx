import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://analytics.ckoisa.net/js/plausible.js"
        data-domain="psy-charente-maritime.fr"
      />
      <Component {...pageProps} />
    </>
  );
}
