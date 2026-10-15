import Head from "next/head";
import { ReactElement } from "react";

import { DEFAULT_OG_IMAGE, SITE_NAME, buildCanonicalUrl } from "@/lib/seo";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}

// Balises de tête d'une page et ses données structurées propres.
const Seo = ({ title, description, path, jsonLd, noindex = false }: SeoProps): ReactElement => {
  const url = buildCanonicalUrl(path);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={url} key="canonical" />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"} key="robots" />
      <meta property="og:type" content="website" key="og-type" />
      <meta property="og:locale" content="fr_FR" key="og-locale" />
      <meta property="og:site_name" content={SITE_NAME} key="og-site" />
      <meta property="og:title" content={title} key="og-title" />
      <meta property="og:description" content={description} key="og-description" />
      <meta property="og:url" content={url} key="og-url" />
      <meta property="og:image" content={DEFAULT_OG_IMAGE.url} key="og-image" />
      <meta property="og:image:width" content={String(DEFAULT_OG_IMAGE.width)} key="og-image-w" />
      <meta property="og:image:height" content={String(DEFAULT_OG_IMAGE.height)} key="og-image-h" />
      <meta property="og:image:alt" content={DEFAULT_OG_IMAGE.alt} key="og-image-alt" />
      <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
      {jsonLd && (
        <script
          type="application/ld+json"
          key="page-jsonld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      )}
    </Head>
  );
};

export default Seo;
