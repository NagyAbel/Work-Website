// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, schemaData }) {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Person Schema Markup (JSON-LD) */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}