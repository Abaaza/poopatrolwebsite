import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object | object[];
}

const SITE_NAME = "Poo Patrol Cleaning";
const DEFAULT_IMAGE = "https://poopatrolcleaning.com/og-image.jpg";
const BASE_URL = "https://poopatrolcleaning.com";

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage,
  schema,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} – Dog-Waste Removal & Yard Sanitizing`;
  const metaDescription =
    description ||
    "Professional dog-waste removal, deodorizing, and yard-sanitizing service in Northridge & the San Fernando Valley. Book online today!";
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const image = ogImage || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
