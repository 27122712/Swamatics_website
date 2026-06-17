import { Helmet } from "react-helmet-async";
import { useMemo } from "react";
import { useTranslation } from "../contexts/TranslationContext";
import { generateSchemas } from "./schemaUtils";

const DEFAULT_SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://swamatics.com";
const DEFAULT_BRAND = "Swamatics";

const formatTitleFromPath = (pathSegments) => {
  if (!pathSegments.length) {
    return "Home";
  }

  return pathSegments
    .map((segment) =>
      segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
    )
    .join(" | ");
};

const buildDefaults = (path) => {
  const segments = path
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== "index");

  const titleSegment = formatTitleFromPath(segments);
  const title =
    segments.length === 0
      ? `${DEFAULT_BRAND} | Home`
      : `${DEFAULT_BRAND} | ${titleSegment}`;

  const description =
    segments.length === 0
      ? "Discover Swamatics innovations, products, and services for sustainable industrial performance."
      : `${titleSegment} from ${DEFAULT_BRAND}. Learn about our capabilities, solutions, and expertise.`;

  const canonical =
    path === "/"
      ? DEFAULT_SITE_URL
      : `${DEFAULT_SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

  const keywords = segments.length
    ? [
        "Swamatics",
        titleSegment,
        "industrial solutions",
        "engineering",
        "manufacturing",
      ]
    : ["Swamatics", "industrial solutions", "engineering", "manufacturing"];

  return { title, description, canonical, keywords };
};

const resolveValue = (value, translate) => {
  if (!value) return undefined;
  if (typeof value === "string") return value;
  if (value.key) {
    const translation = translate(value.key, value.options);
    if (translation && translation !== value.key) {
      return translation;
    }
    // Return fallback if translation failed or doesn't exist
    return value.fallback;
  }
  // If value is an object but has no key, return fallback if it exists
  return value.fallback;
};

export const withPageSeo =
  (Component, options = {}) =>
  (props) => {
    const { t } = useTranslation();

    const {
      path = "/",
      title,
      description,
      canonical,
      keywords,
      noindex = false,
      openGraph = {},
      twitter = {},
      alternates = [],
      schema = null, // Can be a single schema config or array of schema configs
    } = options;

    // Debug: Log schema config
    if (schema) {
      console.log("Schema config received for path:", path, schema);
    }

    // Generate defaults ONLY if we don't have explicit values
    const defaults = useMemo(() => {
      if (!title && !description && !canonical && !keywords) {
        return buildDefaults(path);
      }
      return null;
    }, [path, title, description, canonical, keywords]);

    // Resolve title
    const resolvedTitle =
      resolveValue(title, t) || defaults?.title || "Swamatics";

    // Resolve description - this is the critical fix
    const resolvedDescription =
      resolveValue(description, t) || defaults?.description || undefined;

    // Resolve canonical
    const resolvedCanonical =
      resolveValue(canonical, t) ||
      defaults?.canonical ||
      `${import.meta.env.VITE_SITE_URL || "https://swamatics.com"}${path}`;

    // Resolve keywords
    const resolvedKeywords = useMemo(() => {
      if (keywords && keywords.length) {
        return keywords
          .map((keyword) => resolveValue(keyword, t))
          .filter(Boolean);
      }
      return defaults?.keywords || [];
    }, [keywords, defaults?.keywords, t]);

    const resolvedOg = {
      type: "website",
      url: resolvedCanonical,
      title: resolvedTitle,
      description: resolvedDescription,
      ...openGraph,
    };

    const resolvedTwitter = {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      ...twitter,
    };

    // Debug logging - remove this after confirming it works
    console.log("SEO Debug:", {
      path,
      resolvedTitle,
      resolvedDescription,
      resolvedCanonical,
      descriptionInput: description,
    });

    // Add this right before the return statement in withPageSeo
    console.log("=== HELMET RENDER DEBUG ===");
    console.log("resolvedDescription:", resolvedDescription);
    console.log("resolvedDescription type:", typeof resolvedDescription);
    console.log("resolvedDescription length:", resolvedDescription?.length);
    console.log("Has description?", !!resolvedDescription);
    console.log("===========================");

    // Generate schemas if provided
    const schemas = useMemo(() => {
      if (!schema) {
        console.log("No schema provided for path:", path);
        return [];
      }

      // If schema is an array, use it directly; otherwise wrap in array
      const schemaConfigs = Array.isArray(schema) ? schema : [schema];
      console.log(
        "Generating schemas for path:",
        path,
        "Configs:",
        schemaConfigs
      );
      const generatedSchemas = generateSchemas(schemaConfigs, t);
      console.log("Generated schemas:", generatedSchemas);
      return generatedSchemas;
    }, [schema, t, path]);

    return (
      <>
        <Helmet>
          <meta
            name="description"
            content={resolvedDescription || "DEFAULT DESCRIPTION FOR SWAMATICS"}
          />
          <title>{resolvedTitle}</title>

          {resolvedCanonical && (
            <link rel="canonical" href={resolvedCanonical} />
          )}

          {resolvedKeywords && resolvedKeywords.length > 0 && (
            <meta name="keywords" content={resolvedKeywords.join(", ")} />
          )}

          <meta property="og:type" content={resolvedOg.type} />
          <meta
            property="og:title"
            content={resolvedOg.title || resolvedTitle}
          />
          <meta
            property="og:description"
            content={resolvedOg.description || resolvedDescription}
          />
          <meta
            property="og:url"
            content={resolvedOg.url || resolvedCanonical}
          />
          {resolvedOg.image && (
            <meta property="og:image" content={resolvedOg.image} />
          )}

          <meta name="twitter:card" content={resolvedTwitter.card} />
          <meta
            name="twitter:title"
            content={resolvedTwitter.title || resolvedTitle}
          />
          <meta
            name="twitter:description"
            content={resolvedTwitter.description || resolvedDescription}
          />
          {resolvedTwitter.image && (
            <meta name="twitter:image" content={resolvedTwitter.image} />
          )}

          {noindex && <meta name="robots" content="noindex, nofollow" />}

          {/* Render JSON-LD schemas */}
          {schemas.length > 0 &&
            schemas.map((schemaData, index) => {
              try {
                const schemaJson = JSON.stringify(schemaData, null, 2);
                return (
                  <script key={`schema-${index}`} type="application/ld+json">
                    {schemaJson}
                  </script>
                );
              } catch (error) {
                console.error(
                  `Error stringifying schema ${index}:`,
                  error,
                  schemaData
                );
                return null;
              }
            })}
        </Helmet>

        <Component {...props} />
      </>
    );
  };

export default withPageSeo;
