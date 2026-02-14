import React, { useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { COMPANY_NAME, PHONE_NUMBER, HERO_IMAGE_URL, SERVICE_AREAS } from '../constants';

const SEOHelper: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }
    
    // Set language attribute on HTML tag
    document.documentElement.lang = language === 'en' ? 'en-US' : 'pt-BR';
  }, [language, t]);

  // Schema.org JSON-LD for LocalBusiness
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop", // Using AutoBodyShop/AutomotiveBusiness as close proxy, specific 'VehicleTransport' isn't a direct high-level type but fits under Automotive. Using 'LocalBusiness' generally.
    "additionalType": "https://schema.org/DeliveryService",
    "name": COMPANY_NAME,
    "image": HERO_IMAGE_URL,
    "telephone": PHONE_NUMBER,
    "url": "https://bgeservices.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "CT",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.6967, // Approximate center of Newington/Hartford area
      "longitude": -72.7237
    },
    "areaServed": SERVICE_AREAS.map(city => ({
        "@type": "City",
        "name": city,
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "CT",
            "addressCountry": "US"
        }
    })),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$"
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
        }
    }))
  };

  return (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([schemaData, faqSchema]) }}
    />
  );
};

export default SEOHelper;
