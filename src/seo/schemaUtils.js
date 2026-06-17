/**
 * Schema Utilities for generating JSON-LD structured data
 * Supports Product, Organization, BreadcrumbList, and other common schemas
 */

const DEFAULT_SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://swamatics.com";

/**
 * Resolves a value that can be either a string or an object with key/fallback
 * @param {string|object} value - Value to resolve
 * @param {function} translate - Translation function
 * @returns {string|undefined} Resolved value
 */
const resolveValue = (value, translate) => {
  if (!value) return undefined;
  if (typeof value === "string") return value;
  if (value.key) {
    const translation = translate(value.key, value.options);
    if (translation && translation !== value.key) {
      return translation;
    }
    return value.fallback;
  }
  return value.fallback;
};

/**
 * Generates a Product schema (JSON-LD)
 * @param {object} config - Product configuration
 * @param {function} translate - Translation function
 * @returns {object} Product schema object
 */
export const generateProductSchema = (config, translate) => {
  const {
    name,
    description,
    image,
    brand = "SWAM",
    sku,
    mpn,
    category,
    offers = {},
    aggregateRating,
    review,
    additionalProperty = [],
  } = config;

  // Validate required fields
  const resolvedName = resolveValue(name, translate);
  const resolvedDescription = resolveValue(description, translate);

  if (!resolvedName) {
    console.warn("generateProductSchema: Missing required field 'name'");
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: resolvedName,
    brand: {
      "@type": "Brand",
      name: typeof brand === "string" ? brand : resolveValue(brand, translate),
    },
  };

  // Description is optional but recommended
  if (resolvedDescription) {
    schema.description = resolvedDescription;
  }

  if (image) {
    const imageUrl =
      typeof image === "string"
        ? image.startsWith("http")
          ? image
          : `${DEFAULT_SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`
        : resolveValue(image, translate);
    schema.image = imageUrl;
  }

  if (sku) schema.sku = resolveValue(sku, translate);
  if (mpn) schema.mpn = resolveValue(mpn, translate);
  if (category) schema.category = resolveValue(category, translate);

  // Offers
  if (offers && (offers.price || offers.priceCurrency || offers.availability)) {
    schema.offers = {
      "@type": "Offer",
      ...(offers.price && { price: offers.price }),
      ...(offers.priceCurrency && {
        priceCurrency: offers.priceCurrency || "INR",
      }),
      ...(offers.availability && {
        availability: offers.availability || "https://schema.org/InStock",
      }),
      ...(offers.url && { url: resolveValue(offers.url, translate) }),
    };
  }

  // Aggregate Rating
  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue || 0,
      reviewCount: aggregateRating.reviewCount || 0,
      ...(aggregateRating.bestRating && {
        bestRating: aggregateRating.bestRating,
      }),
      ...(aggregateRating.worstRating && {
        worstRating: aggregateRating.worstRating,
      }),
    };
  }

  // Review
  if (review) {
    schema.review = {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author || "Customer",
      },
      reviewBody: resolveValue(review.reviewBody, translate),
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.ratingValue || 5,
        bestRating: review.bestRating || 5,
      },
    };
  }

  // Additional Properties (specifications, features, etc.)
  if (additionalProperty && additionalProperty.length > 0) {
    schema.additionalProperty = additionalProperty.map((prop) => ({
      "@type": "PropertyValue",
      name: resolveValue(prop.name, translate),
      value: resolveValue(prop.value, translate),
      ...(prop.unitCode && { unitCode: prop.unitCode }),
    }));
  }

  return schema;
};

/**
 * Generates an Organization schema (JSON-LD)
 * @param {object} config - Organization configuration
 * @param {function} translate - Translation function
 * @returns {object} Organization schema object
 */
export const generateOrganizationSchema = (config, translate) => {
  const {
    name = "SWAM Pneumatics Pvt. Ltd.",
    url = DEFAULT_SITE_URL,
    logo,
    contactPoint,
    address,
    sameAs = [],
    id,
    foundingDate,
  } = config;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: resolveValue(name, translate),
    url: resolveValue(url, translate),
  };

  // Add @id if provided
  if (id) {
    schema["@id"] = resolveValue(id, translate);
  }

  // Add foundingDate if provided
  if (foundingDate) {
    schema.foundingDate = resolveValue(foundingDate, translate);
  }

  if (logo) {
    const logoUrl =
      typeof logo === "string"
        ? logo.startsWith("http")
          ? logo
          : `${DEFAULT_SITE_URL}${logo.startsWith("/") ? "" : "/"}${logo}`
        : resolveValue(logo, translate);
    schema.logo = logoUrl;
  }

  if (contactPoint) {
    schema.contactPoint = {
      "@type": "ContactPoint",
      ...(contactPoint.telephone && { telephone: contactPoint.telephone }),
      ...(contactPoint.email && { email: contactPoint.email }),
      ...(contactPoint.contactType && {
        contactType: contactPoint.contactType,
      }),
      ...(contactPoint.areaServed && { areaServed: contactPoint.areaServed }),
    };
  }

  if (address) {
    schema.address = {
      "@type": "PostalAddress",
      ...(address.streetAddress && {
        streetAddress: resolveValue(address.streetAddress, translate),
      }),
      ...(address.addressLocality && {
        addressLocality: resolveValue(address.addressLocality, translate),
      }),
      ...(address.addressRegion && {
        addressRegion: resolveValue(address.addressRegion, translate),
      }),
      ...(address.postalCode && { postalCode: address.postalCode }),
      ...(address.addressCountry && { addressCountry: address.addressCountry }),
    };
  }

  if (sameAs && sameAs.length > 0) {
    schema.sameAs = sameAs
      .map((url) => resolveValue(url, translate))
      .filter(Boolean);
  }

  return schema;
};

/**
 * Generates a BreadcrumbList schema (JSON-LD)
 * @param {array} items - Array of breadcrumb items [{name, url}]
 * @param {function} translate - Translation function
 * @returns {object} BreadcrumbList schema object
 */
export const generateBreadcrumbSchema = (items, translate) => {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: resolveValue(item.name, translate),
      item:
        typeof item.url === "string"
          ? item.url.startsWith("http")
            ? item.url
            : `${DEFAULT_SITE_URL}${item.url.startsWith("/") ? "" : "/"}${
                item.url
              }`
          : resolveValue(item.url, translate),
    })),
  };

  return schema;
};

/**
 * Generates a WebPage schema (JSON-LD)
 * @param {object} config - WebPage configuration
 * @param {function} translate - Translation function
 * @returns {object} WebPage schema object
 */
export const generateWebPageSchema = (config, translate) => {
  const { name, description, url, breadcrumb, mainEntity } = config;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: resolveValue(name, translate),
    description: resolveValue(description, translate),
    url: resolveValue(url, translate),
  };

  if (breadcrumb) {
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumb, translate);
    if (breadcrumbSchema) {
      schema.breadcrumb = breadcrumbSchema;
    }
  }

  if (mainEntity) {
    schema.mainEntity = mainEntity;
  }

  return schema;
};

/**
 * Generates a FAQPage schema (JSON-LD)
 * @param {array} questions - Array of {question, answer} objects
 * @param {function} translate - Translation function
 * @returns {object} FAQPage schema object
 */
export const generateFAQSchema = (questions, translate) => {
  if (!questions || questions.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: resolveValue(q.question, translate),
      acceptedAnswer: {
        "@type": "Answer",
        text: resolveValue(q.answer, translate),
      },
    })),
  };

  return schema;
};

/**
 * Main function to generate schema based on type
 * @param {string} type - Schema type (product, organization, breadcrumb, webpage, faq)
 * @param {object} config - Configuration object
 * @param {function} translate - Translation function
 * @returns {object|null} Generated schema or null
 */
export const generateSchema = (type, config, translate) => {
  if (!type || !config) return null;

  switch (type.toLowerCase()) {
    case "product":
      return generateProductSchema(config, translate);
    case "organization":
      return generateOrganizationSchema(config, translate);
    case "breadcrumb":
    case "breadcrumblist":
      return generateBreadcrumbSchema(config.items || config, translate);
    case "webpage":
      return generateWebPageSchema(config, translate);
    case "faq":
    case "faqpage":
      return generateFAQSchema(config.questions || config, translate);
    default:
      console.warn(`Unknown schema type: ${type}`);
      return null;
  }
};

/**
 * Generates multiple schemas and returns them as an array
 * @param {array} schemas - Array of {type, config} objects
 * @param {function} translate - Translation function
 * @returns {array} Array of generated schemas
 */
export const generateSchemas = (schemas, translate) => {
  if (!schemas || !Array.isArray(schemas)) {
    console.warn("generateSchemas: Invalid schemas input", schemas);
    return [];
  }

  return schemas
    .map((schemaConfig, index) => {
      try {
        if (!schemaConfig || !schemaConfig.type || !schemaConfig.config) {
          console.warn(
            `generateSchemas: Invalid schema config at index ${index}:`,
            schemaConfig
          );
          return null;
        }
        const generated = generateSchema(
          schemaConfig.type,
          schemaConfig.config,
          translate
        );
        if (!generated) {
          console.warn(
            `generateSchemas: Failed to generate schema for type "${schemaConfig.type}"`
          );
        }
        return generated;
      } catch (error) {
        console.error(
          `generateSchemas: Error generating schema at index ${index}:`,
          error
        );
        return null;
      }
    })
    .filter(Boolean);
};

export default {
  generateSchema,
  generateSchemas,
  generateProductSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateFAQSchema,
};
