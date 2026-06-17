# Schema Markup Usage Guide

This guide explains how to add JSON-LD structured data (schema markup) to your pages using the reusable schema system.

## Overview

The schema system is integrated with the existing SEO setup (`withPageSeo` and `pageSeoConfig.js`). You can add schemas by configuring them in `pageSeoConfig.js` for each route.

## Supported Schema Types

1. **Product** - For product pages
2. **Organization** - For company/organization pages
3. **BreadcrumbList** - For navigation breadcrumbs
4. **WebPage** - For general web pages
5. **FAQPage** - For FAQ sections

## How to Add Schema to a Page

### Step 1: Add Schema Configuration in `pageSeoConfig.js`

Find your page's configuration and add a `schema` property:

```javascript
"/your-page-path": createDefaultPageSeo("/your-page-path", {
  title: {
    fallback: "Your Page Title",
  },
  description: {
    fallback: "Your page description",
  },
  schema: [
    {
      type: "product", // or "organization", "breadcrumb", "webpage", "faq"
      config: {
        // Schema-specific configuration
      },
    },
  ],
}),
```

### Step 2: Schema Configuration Examples

#### Product Schema

```javascript
schema: [
  {
    type: "product",
    config: {
      name: {
        key: "translation.key.for.name", // Optional: use translation key
        fallback: "Product Name", // Fallback if translation fails
      },
      description: {
        key: "translation.key.for.description",
        fallback: "Product description here",
      },
      image: "/images/product-image.jpg", // Relative or absolute URL
      brand: "SWAM",
      category: "Industrial Blowers",
      sku: "PRODUCT-SKU",
      mpn: "Manufacturer Part Number", // Optional
      additionalProperty: [
        {
          name: "Capacity",
          value: "Up to 85,000 M³/Hr",
        },
        {
          name: "Pressure",
          value: "Max 1.1 bar 'g'",
        },
      ],
      offers: {
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        // price: "100000", // Optional: if you want to include price
      },
      aggregateRating: {
        ratingValue: 4.8,
        reviewCount: 150,
        bestRating: 5,
        worstRating: 1,
      },
    },
  },
],
```

#### Breadcrumb Schema

```javascript
schema: [
  {
    type: "breadcrumb",
    config: {
      items: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Products",
          url: "/products",
        },
        {
          name: "Your Product",
          url: "/your-product",
        },
      ],
    },
  },
],
```

#### Organization Schema

```javascript
schema: [
  {
    type: "organization",
    config: {
      name: "SWAM Pneumatics Pvt. Ltd.",
      url: "https://swamatics.com",
      logo: "/images/logo.png",
      contactPoint: {
        telephone: "+91-99103-02163",
        email: "sales@swamatics.com",
        contactType: "Customer Service",
        areaServed: "Worldwide",
      },
      address: {
        streetAddress: "C-2, Sector-3",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/swam",
        "https://www.facebook.com/swam",
      ],
    },
  },
],
```

#### FAQ Schema

```javascript
schema: [
  {
    type: "faq",
    config: {
      questions: [
        {
          question: {
            key: "faq.question1",
            fallback: "What is the capacity of this product?",
          },
          answer: {
            key: "faq.answer1",
            fallback: "The capacity is up to 85,000 M³/Hr.",
          },
        },
        {
          question: "Is it oil-free?",
          answer: "Yes, it operates 100% oil-free.",
        },
      ],
    },
  },
],
```

#### Multiple Schemas

You can add multiple schemas to a single page:

```javascript
schema: [
  {
    type: "product",
    config: { /* product config */ },
  },
  {
    type: "breadcrumb",
    config: { /* breadcrumb config */ },
  },
  {
    type: "organization",
    config: { /* organization config */ },
  },
],
```

## Translation Support

All schema fields support translation keys. Use the format:

```javascript
{
  key: "translation.key.path",
  fallback: "Fallback text if translation not found",
}
```

Or use plain strings:

```javascript
"Plain text value"
```

## Examples from Codebase

See `src/seo/pageSeoConfig.js` for the Rotary Twin Lobe Blowers example:

```javascript
"/rotary-piston-blowers": createDefaultPageSeo("/rotary-piston-blowers", {
  // ... title, description, etc.
  schema: [
    {
      type: "product",
      config: {
        // Product schema configuration
      },
    },
    {
      type: "breadcrumb",
      config: {
        // Breadcrumb configuration
      },
    },
  ],
}),
```

## Testing

After adding schema:

1. Build your application
2. View the page source
3. Look for `<script type="application/ld+json">` tags in the `<head>`
4. Validate using [Google's Rich Results Test](https://search.google.com/test/rich-results)
5. Validate using [Schema.org Validator](https://validator.schema.org/)

## Notes

- Schemas are automatically rendered in the page `<head>` via `withPageSeo`
- No changes needed in individual component files
- All schemas are generated server-side during render
- Translation keys are resolved using your existing translation system

