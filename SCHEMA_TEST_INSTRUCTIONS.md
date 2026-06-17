# Schema Implementation - Testing Instructions

## ✅ What Was Fixed

1. **Removed duplicate function** - There were TWO `createDefaultPageSeo` functions:
   - OLD version (line 38): `createDefaultPageSeov1` - **DID NOT** preserve schema ❌
   - NEW version (line 92): `createDefaultPageSeo` - **DOES** preserve schema ✅

2. **The fix**: Removed the old duplicate function so only the correct version remains

## 🧪 How to Test

### Step 1: Open Browser Console
1. Navigate to: `http://localhost:5173/rotary-piston-blowers` (or your dev server URL)
2. Open browser DevTools (F12 or Cmd+Option+I)
3. Go to the **Console** tab

### Step 2: Check Console Logs
You should see these logs confirming schema is being processed:

```
Schema config received for path: /rotary-piston-blowers [Array(2)]
Generating schemas for path: /rotary-piston-blowers Configs: [Array(2)]
Generated schemas: [Array(2)]
Rendering schema 1/2: {JSON of Product schema}
Rendering schema 2/2: {JSON of Breadcrumb schema}
```

### Step 3: View Page Source
1. Right-click on the page → **View Page Source** (or Ctrl+U / Cmd+U)
2. Search for: `application/ld+json`
3. You should find **TWO** script tags:

#### Expected Result 1: Product Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Rotary Twin Lobe Blowers",
  "brand": {
    "@type": "Brand",
    "name": "SWAM"
  },
  "description": "High-performance rotary twin lobe blowers...",
  "image": "https://swamatics.com/images/rotary-twin.jpg",
  "category": "Industrial Blowers",
  "sku": "RTB-SERIES",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Capacity",
      "value": "Up to 85,000 M³/Hr"
    },
    ...
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.8,
    "reviewCount": 150,
    "bestRating": 5,
    "worstRating": 1
  }
}
</script>
```

#### Expected Result 2: Breadcrumb Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://swamatics.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blower Division",
      "item": "https://swamatics.com/blower-division"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Rotary Twin Lobe Blowers",
      "item": "https://swamatics.com/rotary-piston-blowers"
    }
  ]
}
</script>
```

## 🔍 If Still Not Working

### Check 1: Console Logs
- If you see **"No schema provided for path"** → Schema isn't being passed from config
- If you see **"Failed to generate schema"** → Check the schema generation logic
- If you see **"Rendering schema"** but no script tags → React Helmet issue

### Check 2: Verify File Changes
Run this command to verify the fix:
```bash
grep -n "createDefaultPageSeo" src/seo/pageSeoConfig.js
```

You should see ONLY ONE result (around line 38), not two.

### Check 3: Hard Refresh
- Clear browser cache
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

## 🎯 Validate the Schema

Once you see the schemas in the page source:

1. **Google Rich Results Test**
   - Go to: https://search.google.com/test/rich-results
   - Paste your page URL or HTML
   - Check for validation errors

2. **Schema.org Validator**
   - Go to: https://validator.schema.org/
   - Paste the JSON-LD code
   - Check for warnings/errors

## 📝 Implementation Details

### What Changed in `pageSeoConfig.js`:

**BEFORE** (Lines 38-90):
```javascript
const createDefaultPageSeov1 = (path, overrides = {}) => {
  // ... OLD VERSION WITHOUT SCHEMA SUPPORT
  const { keywords, ...restOverrides } = overrides;  // ❌ Schema gets lost here
  
  return {
    ...defaults,
    ...restOverrides,
    keywords: keywords || defaults.keywords,
    // No schema preservation ❌
  };
};
```

**AFTER** (Now at line 38):
```javascript
const createDefaultPageSeo = (path, overrides = {}) => {
  // ... CORRECT VERSION WITH SCHEMA SUPPORT
  const { keywords, schema, ...restOverrides } = overrides;  // ✅ Extract schema
  
  return {
    ...defaults,
    ...restOverrides,
    keywords: keywords || defaults.keywords,
    ...(schema && { schema }),  // ✅ Preserve schema
  };
};
```

## 🚀 Next Steps

After confirming it works for `/rotary-piston-blowers`, you can add schemas to other pages by updating their config in `src/seo/pageSeoConfig.js`.

See `src/seo/SCHEMA_USAGE.md` for detailed examples.

