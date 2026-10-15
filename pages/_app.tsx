import type { AppProps } from "next/app";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

import Layout from "components/layout/Layout";
import { siteJsonLd } from "@/lib/seo";

import "styles/globals.css";

// Polices auto-hébergées par next/font : titres en Cormorant Garamond (celle
// du site d'origine, en semi-gras), texte courant en Figtree.
const cormorant = Cormorant_Garamond({
  weight: ["500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});

const siteData = JSON.stringify(siteJsonLd()).replace(/</g, "\\u003c");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script type="application/ld+json" key="site-jsonld" dangerouslySetInnerHTML={{ __html: siteData }} />
      </Head>
      <style jsx global>{`
        :root {
          --font-cormorant: ${cormorant.style.fontFamily};
          --font-figtree: ${figtree.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {process.env.NODE_ENV === "production" && (
        <Script
          src="https://analytics.ckoisa.net/js/plausible.js"
          data-domain="psy-charente-maritime.fr"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
