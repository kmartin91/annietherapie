import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="gestalt,thérapie,royan,annie,maquet,gestalt thérapie,psychopraticien,psychopraticienne,psychothérapeute,psychocorporelle,psychothérapie,accompagnement,saujon,vaux-sur-mer,saint-palais-sur-mer,saint-augustin,saint-georges-de-didonne"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="French" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
