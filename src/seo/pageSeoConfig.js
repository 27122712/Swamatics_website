const DEFAULT_SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://swamatics.com";

const BRAND_KEYWORD = {
  key: "seo.common.keyword.brand",
  fallback: "Swamatics",
};

const toSlug = (path) => {
  if (!path || path === "/") return "home";
  return path
    .replace(/^\//, "")
    .toLowerCase()
    .split("/")
    .filter(Boolean)
    .join("-")
    .split("-")
    .map((segment, index) => {
      if (index === 0) return segment;
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    })
    .join("");
};

const toTitleCase = (slug) =>
  slug
    .replace(/([A-Z])/g, " $1")
    .replace(/(\d+)/g, " $1 ")
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word) =>
      word.length <= 3
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

const createDefaultPageSeo = (path, overrides = {}) => {
  const slug = toSlug(path);
  const readableName = toTitleCase(slug);

  const placeholderTitle =
    slug === "home" ? "Swamatics | Home" : `Swamatics | ${readableName}`;
  const placeholderDescription =
    slug === "home"
      ? "Discover Swamatics innovations, products, and services for sustainable industrial performance."
      : `Learn about ${readableName} from Swamatics. Explore capabilities, solutions, and expertise.`;

  const defaults = {
    title: {
      key: `seo.${slug}.title`,
      fallback: placeholderTitle,
    },
    description: {
      key: `seo.${slug}.description`,
      fallback: placeholderDescription,
    },
    keywords: [
      { ...BRAND_KEYWORD },
      {
        key: `seo.${slug}.keyword.primary`,
        fallback: readableName,
      },
    ],
    openGraph: {
      image: `${DEFAULT_SITE_URL}/og/${slug}.jpg`,
      alt: `${readableName} – Swamatics`,
    },
    twitter: {
      image: `${DEFAULT_SITE_URL}/og/${slug}.jpg`,
      card: "summary_large_image",
    },
  };

  const { keywords, schema, ...restOverrides } = overrides; // ADD: extract schema

  // Debug logging for schema
  if (path === "/rotary-piston-blowers" && schema) {
    console.log("🔍 DEBUG - createDefaultPageSeo");
    console.log("Path:", path);
    console.log("Schema received in overrides:", schema);
    console.log("Schema type:", typeof schema);
    console.log("Schema is array?", Array.isArray(schema));
  }

  const result = {
    ...defaults,
    ...restOverrides,
    keywords: keywords || defaults.keywords,
    openGraph: {
      ...defaults.openGraph,
      ...(restOverrides.openGraph || {}),
    },
    twitter: {
      ...defaults.twitter,
      ...(restOverrides.twitter || {}),
    },
    ...(schema && { schema }), // ADD: preserve schema if it exists
  };

  // Debug: Confirm schema is in result
  if (path === "/rotary-piston-blowers") {
    console.log("Result has schema?", !!result.schema);
    console.log("Result schema:", result.schema);
  }

  return result;
};

// `PAGE_SEO_CONFIG` centralises per-route SEO metadata.
// Each entry can use `title`, `description`, etc. directly or reference translation keys.
// See `withPageSeo` for the full list of supported options.
export const PAGE_SEO_CONFIG = {
  "/": createDefaultPageSeo("/", {
    description: {
      key: "seo.home.description",
      fallback:
        "Discover Swamatics innovations, products, and services for sustainable industrial performance.",
    },
    keywords: [
      { key: "seo.home.keyword.main", fallback: "Swamatics" },
      { key: "seo.home.keyword.secondary", fallback: "industrial engineering" },
    ],
    openGraph: {
      image: `${DEFAULT_SITE_URL}/og/home-default.jpg`,
    },
    twitter: {
      image: `${DEFAULT_SITE_URL}/og/home-default.jpg`,
    },
    schema: [
      {
        type: "organization",
        config: {
          name: "Swam Pneumatics Private Limited",
          url: "https://swamatics.com/",
          id: "https://swamatics.com/#organization",
          logo: "https://swamatics.com/assets/logo-black-CWb7_wVJ.jpg",
          foundingDate: "1978",
          sameAs: [
            "https://www.facebook.com/SwamPneumaticss",
            "https://www.linkedin.com/company/swam-pneumatics/",
            "https://x.com/swam_pneumatics",
          ],
        },
      },
    ],
  }),
  "/new": createDefaultPageSeo("/new", {
    title: {
      fallback:
        "SWAM | Transforming Industrial Challenges into Sustainable Solutions",
    },
    description: {
      fallback:
        "Since 1978, SWAM has led in vacuum technology—delivering innovative solutions for carbon capture, cryogenics, solar, semiconductor, and steel industries.",
    },
  }),
  "/welcome-from-ceo": createDefaultPageSeo("/welcome-from-ceo", {
    title: {
      fallback:
        "SWAM | Message from CEO – Engineering a Global Leader in Vacuum & Blowers",
    },
    description: {
      fallback:
        "Read the CEO’s vision at SWAM: transforming industrial challenges into engineering solutions since 1978, committed to innovation, quality and “Internationally Made in India”.",
    },
  }),
  "/application": createDefaultPageSeo("/application", {
    title: {
      fallback: "SWAM | Industrial Applications of Blowers & Vacuum Systems",
    },
    description: {
      fallback:
        "Discover how SWAM’s advanced vacuum pumps, blowers and compressors deliver solutions across carbon capture, semiconductors, solar, steel and cryogenics—transforming industrial challenges into performance.",
    },
  }),
  "/services": createDefaultPageSeo("/services", {
    title: {
      fallback: "On-Site Vacuum Pump Repair & Maintenance Services | SWAM ",
    },
    description: {
      fallback:
        "SWAM offers expert services for vacuum systems, including installation, diagnostics, AMC, retrofitting, and performance upgrades to ensure peak industrial efficiency.",
    },
  }),
  // "/lime-calcination": createDefaultPageSeo("/lime-calcination"),
  // "/chemical": createDefaultPageSeo("/chemical"),
  // "/food": createDefaultPageSeo("/food"),
  // "/hvac": createDefaultPageSeo("/hvac"),
  // "/landfill": createDefaultPageSeo("/landfill"),
  // "/wastewater": createDefaultPageSeo("/wastewater"),
  // "/powergeneration": createDefaultPageSeo("/powergeneration"),
  "/about": createDefaultPageSeo("/about", {
    title: {
      fallback:
        "SWAM | About Us – Engineering Excellence in Vacuum Pumps, Blowers & Compressors ",
    },
    description: {
      fallback:
        "Since 1978, SWAM has delivered high-performance vacuum pumps, blowers and compressors worldwide. Trusted for innovation, quality and four decades of engineering excellence.",
    },
  }),
  "/history": createDefaultPageSeo("/history", {
    title: {
      fallback:
        "SWAM | Our History – 40+ Years of Engineering Excellence in Vacuum & Blowers ",
    },
    description: {
      fallback:
        "Discover SWAM’s journey since 1978 — from a single factory to global leadership in vacuum pumps, blowers and compressors, driven by innovation, quality and reliability",
    },
  }),
  "/plants": createDefaultPageSeo("/plants", {
    title: {
      fallback:
        "SWAM | Manufacturing Plants – Advanced Engineering Facilities in Noida ",
    },
    description: {
      fallback:
        "Explore SWAM’s state-of-the-art manufacturing plants in Noida, India — over 130,000 sq ft of production space, multiple facilities since 1978 dedicated to quality, innovation & global engineering.",
    },
  }),
  "/mission-and-vision": createDefaultPageSeo("/mission-and-vision", {
    title: {
      fallback:
        "SWAM | Mission & Vision – Engineering Excellence for a Sustainable Future ",
    },
    description: {
      fallback:
        "At SWAM, our vision is to deliver the best-manufactured vacuum, blower & compressor solutions globally by meeting customer needs with competitive innovation, quality and sustainability since 1978.",
    },
  }),
  "/leadership": createDefaultPageSeo("/leadership", {
    title: {
      fallback:
        "SWAM | Leadership Team – Guiding Engineering Excellence Since 1978 ",
    },
    description: {
      fallback:
        "Meet the leadership team at SWAM — a world-class engineering company leading innovation in vacuum pumps, blowers and compressors with over four decades of experience, quality and global reach.",
    },
  }),
  "/introduction": createDefaultPageSeo("/introduction", {
    title: {
      fallback:
        "SWAM | Introduction – Engineering Global Vacuum & Blower Solutions ",
    },
    description: {
      fallback:
        "Welcome to SWAM: over four decades of engineering excellence in designing and manufacturing high-performance positive displacement & centrifugal blowers and vacuum systems for global industries.",
    },
  }),
  "/engineering-design": createDefaultPageSeo("/engineering-design", {
    title: {
      fallback:
        "SWAM | Engineering & Design – Turn-key Solutions for Vacuum & Blower Systems",
    },
    description: {
      fallback:
        "SWAM provides full turn-key engineering from concept to commissioning for vacuum, blower and compressor systems. Our multidisciplinary team specializes in process, mechanical, electrical and instrumentation design—delivering reliable, efficient systems since 1978.",
    },
  }),
  "/health-and-safety": createDefaultPageSeo("/health-and-safety", {
    title: {
      fallback:
        "SWAM | Health & Safety – “Zero Accidents” Safety Culture in Engineering",
    },
    description: {
      fallback:
        "SWAM prioritises occupational health and safety with a “Zero Accidents” policy, ISO 45001 certification and rigorous safe-work systems to ensure safe, reliable operations across our engineering and manufacturing plants.",
    },
  }),
  "/certificates": createDefaultPageSeo("/certificates", {
    title: {
      fallback:
        "Certificates & Accreditations | SWAM Quality & Compliance Standards",
    },
    description: {
      fallback:
        "Explore SWAM’s official certificates and accreditations, validating our commitment to international standards in quality, safety and reliability across all products.",
    },
  }),
  "/blower-division": createDefaultPageSeo("/blower-division", {
    title: {
      fallback:
        "Blower Division Products | High-Efficiency Industrial Blowers – SWAM",
    },
    description: {
      fallback:
        "Explore SWAM’s complete range of high-efficiency industrial blowers engineered for superior performance, energy savings, and durability. Discover oil-free, low-maintenance solutions for various industrial applications.",
    },
  }),
  "/vacuum-systems": createDefaultPageSeo("/vacuum-systems", {
    title: {
      fallback: "Vacuum Division | Explore Advanced Vacuum Solutions by SWAM",
    },
    description: {
      fallback:
        "From liquid ring to dry vacuum systems, SWAM delivers precision-engineered vacuum solutions trusted worldwide. Browse our innovative vacuum technologies now.",
    },
    schema: [
      {
        type: "webpage",
        config: {
          name: {
            fallback: "Vacuum Division | Advanced Vacuum Solutions by SWAM",
          },
          description: {
            fallback:
              "Explore SWAM's complete range of vacuum systems including dry screw vacuum pumps, liquid ring vacuum pumps, oil vane vacuum pumps, mechanical vacuum boosters, vacuum systems & packages, MVR blowers, condenser exhausters, and claw vacuum pumps. Precision-engineered vacuum solutions trusted worldwide.",
          },
          url: "/vacuum-systems",
          breadcrumb: {
            items: [
              {
                name: "Home",
                url: "/",
              },
              {
                name: "Vacuum Systems",
                url: "/vacuum-systems",
              },
            ],
          },
        },
      },
    ],
  }),
  "/other-products-projects": createDefaultPageSeo("/other-products-projects", {
    title: {
      fallback:
        "Compressor Division | Bio Gas, Rotary Vane & Liquid Compressors by Swamatics",
    },
    description: {
      fallback:
        "Explore Swamatics' advanced Compressor Division, featuring high-performance bio gas blowers, rotary sliding vane compressors, and liquid ring compressors engineered for industrial efficiency.",
    },
  }),
  "/rotary-piston-blowers": createDefaultPageSeo("/rotary-piston-blowers", {
    title: {
      fallback:
        "SWAM | Rotary Piston Blowers – High-Capacity Vacuum & Blower Solutions",
    },
    description: {
      fallback:
        "Discover SWAM's robust rotary piston blowers engineered for exceptional performance in vacuum systems, high airflow conveying and industrial applications.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "rotaryTwinLobe.hero.title",
            fallback: "Rotary Twin Lobe Blowers",
          },
          description: {
            key: "rotaryTwinLobe.hero.description",
            fallback:
              "High-performance rotary twin lobe blowers engineered for industrial vacuum systems, conveying, and compression applications. Oil-free operation with capacity up to 85,000 M³/Hr and pressure up to 1.1 bar 'g'.",
          },
          image: "/images/rotary-twin.jpg",
          brand: "SWAM",
          category: "Industrial Blowers",
          sku: "RTB-SERIES",
          additionalProperty: [
            {
              name: "Capacity",
              value: "Up to 85,000 M³/Hr",
            },
            {
              name: "Pressure",
              value: "Max 1.1 bar 'g'",
            },
            {
              name: "Vacuum",
              value: "0.5 bar",
            },
            {
              name: "Operation",
              value: "Continuous Duty",
            },
            {
              name: "Oil-Free Operation",
              value: "100%",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 150,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Blower Division",
              url: "/blower-division",
            },
            {
              name: "Rotary Twin Lobe Blowers",
              url: "/rotary-piston-blowers",
            },
          ],
        },
      },
    ],
  }),
  "/rotarytrilobeblowers": createDefaultPageSeo("/rotarytrilobeblowers", {
    title: {
      fallback:
        "SWAM | Rotary Tri-Lobe Blowers – High Performance Vacuum & Blower Solutions",
    },
    description: {
      fallback:
        "Explore SWAM's rotary tri-lobe blowers engineered for industrial vacuum systems, conveying, and compression applications – delivering superior efficiency, performance and reliability since 1978.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "rotaryTriLobe.hero.title",
            fallback: "Rotary Tri-Lobe Blowers",
          },
          description: {
            key: "rotaryTriLobe.hero.description",
            fallback:
              "High-performance rotary tri-lobe blowers engineered for industrial vacuum systems, conveying, and compression applications. Oil-free operation with capacity up to 85,000 M³/Hr and pressure up to 1.1 bar 'g'. Features advanced tri-lobe rotor design for lower pulsation and noise.",
          },
          image: "/images/Tri-Lobe.jpg",
          brand: "SWAM",
          category: "Industrial Blowers",
          sku: "RTLB-SERIES",
          additionalProperty: [
            {
              name: "Capacity",
              value: "Up to 85,000 M³/Hr",
            },
            {
              name: "Pressure",
              value: "Max 1.1 bar 'g'",
            },
            {
              name: "Vacuum",
              value: "0.5 bar",
            },
            {
              name: "Operation",
              value: "Continuous Duty",
            },
            {
              name: "Oil-Free Operation",
              value: "100%",
            },
            {
              name: "Rotor Design",
              value: "Tri-Lobe Profile",
            },
            {
              name: "Noise Level",
              value: "Lower sound emission",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 150,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Blower Division",
              url: "/blower-division",
            },
            {
              name: "Rotary Tri-Lobe Blowers",
              url: "/rotarytrilobeblowers",
            },
          ],
        },
      },
    ],
  }),
  "/screwblower": createDefaultPageSeo("/screwblower", {
    title: {
      fallback:
        "SWAM | Screw Blowers – Energy-Efficient Industrial Blower Solutions",
    },
    description: {
      fallback:
        "Explore SWAM's screw blowers designed for high efficiency and up to 25% power savings over conventional systems — engineered for industrial vacuum and blower applications.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "screwBlower.hero.title",
            fallback: "Dry Screw Vacuum Pump",
          },
          description: {
            key: "screwBlower.hero.description",
            fallback:
              "Advanced dry screw vacuum pump with combined variable pitch technology for superior vacuum performance. Features oil-free operation with zero contamination, deep vacuum capability up to 0.01 Torr, and immediate solvent recovery. Delivers pulsation-free compressed air with lower noise. Available in multiple models (SSB-9 to SSB-250) with capacity up to 12,000 m³/h.",
          },
          image: "/images/Screw Blower.png",
          brand: "SWAM",
          category: "Industrial Vacuum Pumps",
          sku: "SSB-SERIES",
          additionalProperty: [
            {
              name: "Maximum Capacity",
              value: "Up to 12,000 m³/h",
            },
            {
              name: "Vacuum Level",
              value: "Up to 0.01 Torr",
            },
            {
              name: "Operation",
              value: "Oil-Free",
            },
            {
              name: "Technology",
              value: "Combined Variable Pitch Technology",
            },
            {
              name: "Rotor Design",
              value: "4 Lobe / 6 Flute (Most Efficient Profile)",
            },
            {
              name: "Delivery",
              value: "Pulsation-Free Compressed Air",
            },
            {
              name: "Noise Level",
              value: "Lower Noise Operation",
            },
            {
              name: "Contamination",
              value: "Zero Contamination",
            },
            {
              name: "Solvent Recovery",
              value: "Immediate Recovery at Pump Exhaust",
            },
            {
              name: "Models Available",
              value:
                "SSB-9, SSB-18, SSB-30, SSB-55, SSB-90, SSB-132, SSB-180, SSB-250",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 195,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Vacuum Systems",
              url: "/vacuum-systems",
            },
            {
              name: "Dry Screw Vacuum Pump",
              url: "/screwblower",
            },
          ],
        },
      },
    ],
  }),
  "/clawvacuum": createDefaultPageSeo("/clawvacuum", {
    title: { fallback: "Claw Vacuum Pumps | SWAM India – Oil-Free Efficiency" },
    description: {
      fallback:
        "Explore SWAM's claw vacuum pumps for oil-free, contactless operation. Designed for clean, reliable, and low-maintenance performance across industrial applications.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "clawVacuum.hero.title",
            fallback: "Claw Vacuum Pump",
          },
          description: {
            key: "clawVacuum.hero.description",
            fallback:
              "Claw Vacuum Pumps offer oil-free, contactless operation with consistent performance in continuous duty. Their robust claw design ensures low maintenance, long service life, and cost-efficient reliability for demanding industrial applications.",
          },
          image: "/images/Claw_vacuum.png",
          brand: "SWAM",
          category: "Industrial Vacuum Pumps",
          sku: "CLAW-SERIES",
          additionalProperty: [
            {
              name: "Maximum Capacity",
              value: "Up to 600 M³/Hr",
            },
            {
              name: "Vacuum Level",
              value: "Up to 50 mbar",
            },
            {
              name: "RPM",
              value: "3600 RPM",
            },
            {
              name: "Operation",
              value: "Oil-Free",
            },
            {
              name: "Rotor Design",
              value: "Non-Contact Claw-Shaped Rotors",
            },
            {
              name: "Compression",
              value: "Four-Stage Compression",
            },
            {
              name: "Cooling",
              value: "Built-In Air Cooling (No Water Required)",
            },
            {
              name: "Design",
              value: "Vertical Design - Self-Draining of Vapours",
            },
            {
              name: "Performance",
              value: "Pulsation-Free & Vibration-Free Operation",
            },
            {
              name: "Maintenance",
              value: "Low Maintenance",
            },
            {
              name: "Applications",
              value:
                "Wastewater Treatment Aeration, Pharmaceutical Processing, Food Industry (MAP), Biogas Compression & Handling, Plastic Processing",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 140,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Vacuum Systems",
              url: "/vacuum-systems",
            },
            {
              name: "Claw Vacuum Pump",
              url: "/clawvacuum",
            },
          ],
        },
      },
    ],
  }),
  "/liquidringcompressors": createDefaultPageSeo("/liquidringcompressors", {
    title: {
      fallback:
        "SWAM | Liquid-Ring Compressors – Robust Solutions for Wet & Corrosive Gases",
    },
    description: {
      fallback:
        "Explore SWAM's liquid-ring compressors, engineered for safe handling of wet, dirty or corrosive gases across chemical, oil & gas and process industries — proven reliability for demanding applications.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "liquidRingCompressors.hero.title",
            fallback: "Liquid Ring Compressors",
          },
          description: {
            key: "liquidRingCompressors.hero.description",
            fallback:
              "Built for reliability, Liquid Ring Compressors deliver stable, oil-free performance even with wet and contaminated gases. Their rugged design and continuous duty capability make them the trusted choice for critical industrial applications.",
          },
          image: "/images/liquid_ring.png",
          brand: "SWAM",
          category: "Industrial Compressors",
          sku: "LRC-SERIES",
          additionalProperty: [
            {
              name: "Maximum Capacity",
              value: "Up to 6,000 M³/Hr",
            },
            {
              name: "Maximum Pressure",
              value: "Max 250 KPaG",
            },
            {
              name: "Leak-Proof",
              value: "100% Leak-Proof",
            },
            {
              name: "Compression",
              value: "2× Compression Per Revolution",
            },
            {
              name: "Operation",
              value: "Oil-Free",
            },
            {
              name: "Technology",
              value: "Liquid Ring Technology",
            },
            {
              name: "Performance",
              value: "Smooth Flow, Zero Oil Carryover",
            },
            {
              name: "Design",
              value: "CNC-Built Internals & Body",
            },
            {
              name: "Compliance",
              value: "Design Compliance to API",
            },
            {
              name: "Construction",
              value: "Rigid, Strong Casing",
            },
            {
              name: "Gas Handling",
              value: "Wet, Dirty, Corrosive Gases",
            },
            {
              name: "Applications",
              value:
                "Mining & Metallurgy, Fertilizer Plants, Oil & Gas Offshore Platforms, Chlorine & Vinyl Plants, Pulp & Paper Industry",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.7,
            reviewCount: 145,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Compressor Division",
              url: "/compressor-division",
            },
            {
              name: "Liquid Ring Compressors",
              url: "/liquidringcompressors",
            },
          ],
        },
      },
    ],
  }),
  "/process-gas-blowers": createDefaultPageSeo("/process-gas-blowers", {
    title: {
      fallback:
        "SWAM | Process Gas Blowers & Boosters for Industrial Gas Handling",
    },
    description: {
      fallback:
        "Discover SWAM's high-capacity process gas blowers engineered for handling hydrogen, nitrogen, oxygen, biogas, CO₂ and more—capacity up to 1,00,000 m³/hr with leak-proof sealing and custom construction.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "processGas.hero.title",
            fallback: "Process Gas Blowers & Boosters",
          },
          description: {
            key: "processGas.hero.description",
            fallback:
              "High-capacity process gas blowers engineered for handling diverse industrial gases including hydrogen, nitrogen, oxygen, biogas, CO₂, and methane. Features leak-proof sealing, custom construction materials, and multi-gas capability. Capacity up to 1,00,000 M³/Hr with pressure up to 1.3 bar 'g'.",
          },
          image: "/images/Process-Gas-BlowersGas-Boosters.jpg",
          brand: "SWAM",
          category: "Industrial Gas Blowers",
          sku: "PGB-SERIES",
          additionalProperty: [
            {
              name: "Capacity",
              value: "Up to 1,00,000 M³/Hr",
            },
            {
              name: "Pressure",
              value: "Max 1.3 bar 'g'",
            },
            {
              name: "Operation",
              value: "Continuous Duty",
            },
            {
              name: "Sealing",
              value: "Leak-Proof Design",
            },
            {
              name: "Gas Compatibility",
              value: "Multi-Gas (H₂, N₂, O₂, Biogas, CO₂, CH₄, and more)",
            },
            {
              name: "Construction",
              value: "Chemical-Grade Materials",
            },
            {
              name: "Applications",
              value:
                "Chemical, Petrochemical, Steel, Power Generation, Environmental",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 200,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Blower Division",
              url: "/blower-division",
            },
            {
              name: "Process Gas Blowers",
              url: "/process-gas-blowers",
            },
          ],
        },
      },
    ],
  }),
  "/turbo-blowers": createDefaultPageSeo("/turbo-blowers", {
    title: {
      fallback:
        "SWAM | Turbo Blowers – Oil-Less, High-Efficiency Centrifugal Machines",
    },
    description: {
      fallback:
        "Explore SWAM's advanced single-stage turbo blowers — oil-free, high-speed centrifugal machines delivering up to 21,000 m³/h airflow with exceptional efficiency for industrial vacuum & blower systems.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "turboBlowers.hero.title",
            fallback: "Turbo Blowers",
          },
          description: {
            key: "turboBlowers.hero.description",
            fallback:
              "Advanced single-stage turbo blowers with high-speed centrifugal technology. Oil-free, integrally geared design with variable guide vanes for optimal performance. Delivers up to 21,000 m³/h airflow with 95% efficiency and 30% energy savings compared to conventional systems.",
          },
          image: "/images/Turbo_Blowers.jpg",
          brand: "SWAM",
          category: "Industrial Turbo Blowers",
          sku: "TB-SERIES",
          additionalProperty: [
            {
              name: "Capacity",
              value: "Up to 21,000 M³/Hr",
            },
            {
              name: "Pressure",
              value: "Max 1.0 bar 'g'",
            },
            {
              name: "Speed",
              value: "High Speed Centrifugal",
            },
            {
              name: "Control",
              value: "Variable Guide Vanes",
            },
            {
              name: "Efficiency",
              value: "Up to 95%",
            },
            {
              name: "Energy Savings",
              value: "30% vs Conventional",
            },
            {
              name: "Turndown Range",
              value: "45-100%",
            },
            {
              name: "Operation",
              value: "Oil-Free",
            },
            {
              name: "Design",
              value: "Integrally Geared",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 180,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Blower Division",
              url: "/blower-division",
            },
            {
              name: "Turbo Blowers",
              url: "/turbo-blowers",
            },
          ],
        },
      },
    ],
  }),
  "/super-helical-hybrid-blower": createDefaultPageSeo(
    "/super-helical-hybrid-blower",
    {
      title: {
        fallback:
          "SWAM | Super Helical Hybrid Blower – Advanced Vacuum & Blower Solutions",
      },
      description: {
        fallback:
          "Discover SWAM's Super Helical Hybrid Blower — combining high-efficiency helical rotor technology and hybrid capabilities for superior industrial vacuum performance, reliability & innovation.",
      },
      schema: [
        {
          type: "product",
          config: {
            name: {
              key: "hybridBlowers.hero.title",
              fallback: "Super Helical Hybrid Blower",
            },
            description: {
              key: "hybridBlowers.hero.description",
              fallback:
                "Next-generation Super Helical Hybrid Blower combining high-efficiency helical rotor technology with hybrid capabilities. Features computer-generated profiles, integrated VFD, HMI automation, and exceptional turndown capability as low as 20%. Delivers up to 40,000 M³/Hr flow capacity with pressure up to 1.3 kg/cm².",
            },
            image: "/images/SuperHelicalHybridBlower.jpg",
            brand: "SWAM",
            category: "Industrial Hybrid Blowers",
            sku: "SHHB-SERIES",
            additionalProperty: [
              {
                name: "Flow Capacity",
                value: "Up to 40,000 M³/Hr",
              },
              {
                name: "Discharge Pressure",
                value: "Up to 1.3 kg/cm²",
              },
              {
                name: "Bio-Gas Capacity",
                value: "Up to 35,000 M³/Hr",
              },
              {
                name: "Turndown Ratio",
                value: "As low as 20%",
              },
              {
                name: "Efficiency",
                value: "95%+",
              },
              {
                name: "Control System",
                value: "Integrated VFD & HMI",
              },
              {
                name: "Manufacturing",
                value: "100% CNC Made",
              },
              {
                name: "Automation",
                value: "100% Automated",
              },
              {
                name: "Rotor Design",
                value: "Computer-Generated Helical Profile",
              },
            ],
            offers: {
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
            },
            aggregateRating: {
              ratingValue: 4.9,
              reviewCount: 175,
              bestRating: 5,
              worstRating: 1,
            },
          },
        },
        {
          type: "breadcrumb",
          config: {
            items: [
              {
                name: "Home",
                url: "/",
              },
              {
                name: "Blower Division",
                url: "/blower-division",
              },
              {
                name: "Super Helical Hybrid Blower",
                url: "/super-helical-hybrid-blower",
              },
            ],
          },
        },
      ],
    }
  ),
  "/truck-blowers": createDefaultPageSeo("/truck-blowers", {
    title: {
      fallback:
        "SWAM | Truck Blowers – High-Performance Bulk Vehicle Pressure & Vacuum Systems",
    },
    description: {
      fallback:
        "Explore SWAM's purpose-built truck blowers for bulk and silo vehicles — designed for pneumatic loading-unloading, up to 38,000 m³/hr, with outstanding efficiency and serviceability.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "truckBlowers.hero.title",
            fallback: "Truck Blowers",
          },
          description: {
            key: "truckBlowers.hero.description",
            fallback:
              "Purpose-built truck blowers designed for bulk and silo vehicles. Specialized for pneumatic loading and unloading operations with dual operation capability (positive pressure and vacuum). Features superior design, energy-efficient operation, and easy maintenance. Available in KHV and SHV series with capacity up to 38,000 M³/Hr.",
          },
          image: "/images/Truck-Blowers_below.jpg",
          brand: "SWAM",
          category: "Mobile Industrial Blowers",
          sku: "TB-KHV-SHV-SERIES",
          additionalProperty: [
            {
              name: "Capacity",
              value: "Up to 38,000 M³/Hr",
            },
            {
              name: "Operation",
              value: "Positive & Vacuum",
            },
            {
              name: "Design",
              value: "Mobile Optimized",
            },
            {
              name: "Maintenance",
              value: "Easy Service Access",
            },
            {
              name: "Energy Efficiency",
              value: "25% Energy Saved",
            },
            {
              name: "Vehicle Integration",
              value: "100% Vehicle Ready",
            },
            {
              name: "Series",
              value: "KHV Series (01-06), SHV Series (30-45)",
            },
            {
              name: "Applications",
              value:
                "Bulk Material Loading, Silo Vehicles, Vacuum Unloading, Industrial Transport",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 165,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Blower Division",
              url: "/blower-division",
            },
            {
              name: "Truck Blowers",
              url: "/truck-blowers",
            },
          ],
        },
      },
    ],
  }),
  "/bio-gas-blowers-compressors": createDefaultPageSeo(
    "/bio-gas-blowers-compressors",
    {
      title: {
        fallback:
          "SWAM | Bio-Gas Blowers & Compressors – Renewable Energy Solutions",
      },
      description: {
        fallback:
          "Explore SWAM's bio-gas blowers and compressors built for renewable energy systems — high performance in biogas, landfill gas and process gas applications, with flows up to 20 000 m³/h and pressures up to 4 bar.g.",
      },
      schema: [
        {
          type: "product",
          config: {
            name: {
              key: "bioGasBlowersCompressors.hero.title",
              fallback: "Bio Gas Blowers & Compressors",
            },
            description: {
              key: "bioGasBlowersCompressors.hero.description",
              fallback:
                "SWAM Bio Gas Blowers and Compressors are available in wide range with two specialized designs - Rotary lobe type and sliding vane compressors. Available in various MOCs (CI, CS, SS) for optimal performance in renewable energy applications.",
            },
            image: "/images/bio-Gas-Blowers-Compressors.jpg",
            brand: "SWAM",
            category: "Renewable Energy Equipment",
            sku: "BIOGAS-SERIES",
            additionalProperty: [
              {
                name: "Maximum Capacity",
                value: "Up to 20,000 M³/Hr",
              },
              {
                name: "Maximum Pressure",
                value: "Max 3.0 bar",
              },
              {
                name: "Design Types",
                value: "2 Types (Rotary Lobe & Sliding Vane)",
              },
              {
                name: "Materials of Construction",
                value: "CI, CS, SS (Multiple MOCs)",
              },
              {
                name: "Technology",
                value: "Rotary Lobe Type & Sliding Vane Compressors",
              },
              {
                name: "Application",
                value: "Renewable Energy",
              },
              {
                name: "Operation",
                value: "Continuous Duty",
              },
              {
                name: "Gas Types",
                value: "Biogas, Landfill Gas, Process Gas",
              },
              {
                name: "Applications",
                value:
                  "Waste Treatment Plants, Landfill Gas Recovery, Agricultural Biogas, Industrial Applications, Gas Distribution, Energy Recovery",
              },
            ],
            offers: {
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
            },
            aggregateRating: {
              ratingValue: 4.7,
              reviewCount: 130,
              bestRating: 5,
              worstRating: 1,
            },
          },
        },
        {
          type: "breadcrumb",
          config: {
            items: [
              {
                name: "Home",
                url: "/",
              },
              {
                name: "Compressor Division",
                url: "/compressor-division",
              },
              {
                name: "Bio Gas Blowers & Compressors",
                url: "/bio-gas-blowers-compressors",
              },
            ],
          },
        },
      ],
    }
  ),
  "/air-injection": createDefaultPageSeo("/air-injection", {
    title: {
      fallback:
        "SWAM | Air Injection Vacuum Pumps – Clean, Oil-Free Secondary Suction Systems",
    },
    description: {
      fallback:
        "Discover SWAM’s oil-free air injection vacuum pumps with secondary suction for clean-gas streams and industrial processes—zero liquid contact, high performance, trusted worldwide.",
    },
  }),
  "/rotary-sliding-vane-compressors": createDefaultPageSeo(
    "/rotary-sliding-vane-compressors",
    {
      title: {
        fallback:
          "SWAM | Rotary Sliding Vane Compressors – High-Efficiency Industrial Boosters",
      },
      description: {
        fallback:
          "SWAM's advanced rotary sliding vane compressors deliver energy-efficient, CNC-machined performance for biogas, landfill gas and process gas applications — flows up to 5100 m³/h and pressures to 3.5 bar g.",
      },
      schema: [
        {
          type: "product",
          config: {
            name: {
              key: "rotarySlidingVaneCompressors.hero.title",
              fallback: "Rotary Sliding Vane Compressors",
            },
            description: {
              key: "rotarySlidingVaneCompressors.hero.description",
              fallback:
                "SWAM offers most advance and energy efficient sliding vane compressors for bio gas landfill gases with pressure up to 2.5 bar and manufactured on CNC Machine. The Sliding vane compressor have very high accuracies and are available for flows up to 3000 CFM (3500 M³/Hr).",
            },
            image: "/images/rotary-Sliding-Vane-Compressors.jpg",
            brand: "SWAM",
            category: "Industrial Compressors",
            sku: "RSVC-SERIES",
            additionalProperty: [
              {
                name: "Maximum Capacity",
                value: "Up to 3,500 M³/Hr (3000 CFM)",
              },
              {
                name: "Maximum Pressure",
                value: "Up to 2.5 bar",
              },
              {
                name: "Manufacturing",
                value: "CNC Machine Manufacturing",
              },
              {
                name: "Precision",
                value: "Very High Accuracies",
              },
              {
                name: "Technology",
                value: "Sliding Vane Compression",
              },
              {
                name: "Operation",
                value: "Energy Efficient",
              },
              {
                name: "Design",
                value: "Variable Volume Chambers",
              },
              {
                name: "Lubrication",
                value: "Self-Renewing Lubricating Oil Film",
              },
              {
                name: "Performance",
                value: "Pulsation-Free Gas Flow",
              },
              {
                name: "Gas Types",
                value: "Bio Gas, Landfill Gas, Process Gas",
              },
              {
                name: "Applications",
                value:
                  "Steel Plant Mix Gas Boosters, Cement Plant Landfill Gas, Water Treatment Plants, Biogas Applications, Landfill Gas Recovery, Industrial Gas Boosting",
              },
            ],
            offers: {
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
            },
            aggregateRating: {
              ratingValue: 4.8,
              reviewCount: 160,
              bestRating: 5,
              worstRating: 1,
            },
          },
        },
        {
          type: "breadcrumb",
          config: {
            items: [
              {
                name: "Home",
                url: "/",
              },
              {
                name: "Compressor Division",
                url: "/compressor-division",
              },
              {
                name: "Rotary Sliding Vane Compressors",
                url: "/rotary-sliding-vane-compressors",
              },
            ],
          },
        },
      ],
    }
  ),
  "/centrifugal-fans-blowers": createDefaultPageSeo(
    "/centrifugal-fans-blowers",
    {
      title: {
        fallback:
          "SWAM | Centrifugal Fans & Blowers – High-Pressure Industrial Airflow Solutions",
      },
      description: {
        fallback:
          "Explore SWAM's centrifugal fans and blowers engineered for extreme performance—single-stage static pressure up to 1,800 mm WG (and higher by multi-staging), capacities up to 1,20,000 m³/h.",
      },
      schema: [
        {
          type: "product",
          config: {
            name: {
              key: "centrifugalFans.hero.title",
              fallback: "Centrifugal Fans & Blowers",
            },
            description: {
              key: "centrifugalFans.hero.description",
              fallback:
                "High-performance centrifugal fans and blowers engineered for extreme industrial applications. Features multi-stage capability with single-stage delivering up to 1,800 mmwg static pressure. Exceptional capacity handling up to 1,20,000 M³/Hr. Available with special materials and advanced sealing systems for gas conveying applications. Ideal for ID/FD systems, ventilation, and process industries.",
            },
            image: "/images/swam-centrifugal-fans-and-blowers.jpg",
            brand: "SWAM",
            category: "Industrial Centrifugal Fans & Blowers",
            sku: "CFB-SERIES",
            additionalProperty: [
              {
                name: "Maximum Capacity",
                value: "Up to 1,20,000 M³/Hr",
              },
              {
                name: "Static Pressure",
                value: "Max 1,800 mmwg (Single Stage)",
              },
              {
                name: "Multi-Stage",
                value: "Higher Pressures Available",
              },
              {
                name: "Application",
                value: "ID/FD Systems",
              },
              {
                name: "Operation",
                value: "Positive Conveying & Negative Suction",
              },
              {
                name: "Materials",
                value: "Special Materials for Gas Conveying",
              },
              {
                name: "Sealing",
                value: "Mechanical & Semi-Mechanical Seals",
              },
              {
                name: "Design",
                value: "Multi-Stage Capability",
              },
            ],
            offers: {
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
            },
            aggregateRating: {
              ratingValue: 4.9,
              reviewCount: 220,
              bestRating: 5,
              worstRating: 1,
            },
          },
        },
        {
          type: "breadcrumb",
          config: {
            items: [
              {
                name: "Home",
                url: "/",
              },
              {
                name: "Blower Division",
                url: "/blower-division",
              },
              {
                name: "Centrifugal Fans & Blowers",
                url: "/centrifugal-fans-blowers",
              },
            ],
          },
        },
      ],
    }
  ),
  "/sr-series-blowers": createDefaultPageSeo("/sr-series-blowers", {
    title: {
      fallback:
        "SWAM | SR Series Rotary Blowers – Next-Gen High-Efficiency Industrial Blowers",
    },
    description: {
      fallback:
        "Discover SWAM's SR Series rotary blowers — computer-optimized rotor profiles, CNC precision manufacture, flows up to 1,300 m³/h and pressures to 0.6 kg/cm² for reliable industrial performance.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "srSeries.hero.title",
            fallback: "SR Series Rotary Blowers",
          },
          description: {
            key: "srSeries.hero.description",
            fallback:
              "Next-generation SR Series rotary blowers featuring computer-generated Axcel Series rotor profiles for high volumetric efficiency. Built with heavy-duty construction, CNC machine precision, and special lip seal system with integrated pulsation dampeners. Available in Twin-Lobe and Tri-Lobe designs with capacity up to 1,300 M³/Hr and pressure up to 0.6 kg/cm².",
          },
          image: "/images/sR-Series-Blowers.jpg",
          brand: "SWAM",
          category: "Industrial Rotary Blowers",
          sku: "SR-SERIES",
          additionalProperty: [
            {
              name: "Maximum Capacity",
              value: "Up to 1,300 M³/Hr",
            },
            {
              name: "Pressure Range",
              value: "Max 0.6 kg/cm²",
            },
            {
              name: "Design Types",
              value: "Twin & Tri-Lobe",
            },
            {
              name: "Operation",
              value: "Single Stage",
            },
            {
              name: "Rotor Profile",
              value: "Computer-Generated Axcel Series",
            },
            {
              name: "Manufacturing",
              value: "CNC Machine Precision",
            },
            {
              name: "Sealing System",
              value: "Special Lip Seal with Pulsation Dampeners",
            },
            {
              name: "Construction",
              value: "Heavy Duty with Dual-Side Oil Lubrication",
            },
            {
              name: "Models Available",
              value: "SR-21, SR-31, SR-41, SR-51, SR-61, SR-71, SR-81",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 190,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Blower Division",
              url: "/blower-division",
            },
            {
              name: "SR Series Blowers",
              url: "/sr-series-blowers",
            },
          ],
        },
      },
    ],
  }),
  "/dry-screw-vacuum-pump": createDefaultPageSeo("/dry-screw-vacuum-pump", {
    title: { fallback: "Dry Screw Vacuum Pump Manufacturer | SWAM " },
    description: {
      fallback:
        "Discover SWAM’s advanced dry screw vacuum pump for oil‑free, leak‑proof operation in chemical, pharmaceutical, and industrial processing.",
    },
  }),
  "/liquid-ring-vacuum-pumps": createDefaultPageSeo(
    "/liquid-ring-vacuum-pumps",
    {
      title: { fallback: "Liquid Ring Vacuum Pumps Supplier | SWAM India" },
      description: {
        fallback:
          "Explore SWAM's advanced vacuum pumps, designed for continuous duty in harsh industrial environments. Ideal for textile, chemical, power, food & beverage sectors.",
      },
      schema: [
        {
          type: "product",
          config: {
            name: {
              key: "liquidRingVacuumPump.hero.title",
              fallback: "Liquid Ring Vacuum Pumps",
            },
            description: {
              key: "liquidRingVacuumPump.hero.description",
              fallback:
                "Advanced liquid ring vacuum pumps designed for continuous duty in harsh industrial environments. Features higher reliability, efficiency, water savings, and ability to handle slugs. Available in single-stage and double-stage configurations with capacity up to 30,000 m³/h. Ideal for textile, chemical, power, food & beverage, and pharmaceutical sectors.",
            },
            image: "/images/liquid-Ring-Vacuum-Pump.jpg",
            brand: "SWAM",
            category: "Industrial Vacuum Pumps",
            sku: "LRVP-SERIES",
            additionalProperty: [
              {
                name: "Maximum Capacity",
                value: "Up to 30,000 m³/h",
              },
              {
                name: "Configuration",
                value: "Single-Stage & Double-Stage",
              },
              {
                name: "Operation",
                value: "Continuous Duty",
              },
              {
                name: "Reliability",
                value: "Higher Reliability",
              },
              {
                name: "Efficiency",
                value: "Higher Efficiency",
              },
              {
                name: "Water Consumption",
                value: "Water Saving Design",
              },
              {
                name: "Slug Handling",
                value: "Can Handle Slugs",
              },
              {
                name: "Applications",
                value:
                  "Textile, Chemical, Power, Food & Beverage, Pharmaceutical",
              },
              {
                name: "Series Available",
                value: "SVLD Series (Double-Stage), SVLP Series (Single-Stage)",
              },
            ],
            offers: {
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
            },
            aggregateRating: {
              ratingValue: 4.8,
              reviewCount: 210,
              bestRating: 5,
              worstRating: 1,
            },
          },
        },
        {
          type: "breadcrumb",
          config: {
            items: [
              {
                name: "Home",
                url: "/",
              },
              {
                name: "Vacuum Systems",
                url: "/vacuum-systems",
              },
              {
                name: "Liquid Ring Vacuum Pumps",
                url: "/liquid-ring-vacuum-pumps",
              },
            ],
          },
        },
      ],
    }
  ),
  "/oil-vane-vacuum-pump-2": createDefaultPageSeo("/oil-vane-vacuum-pump-2", {
    title: { fallback: "Oil Vane Vacuum Pumps | SWAM – Durable & Efficient" },
    description: {
      fallback:
        "SWAM's high-efficiency oil vane vacuum pumps—ideal for continuous operation in industrial, packaging, and processing applications. Built for durability, low maintenance, and smooth performance.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "oilVaneVacuumPump.hero.title",
            fallback: "Oil Vane Vacuum Pumps",
          },
          description: {
            key: "oilVaneVacuumPump.hero.description",
            fallback:
              "High-efficiency oil vane vacuum pumps with positive displacement rotary vane technology. Features oil-lubricated operation for reliable performance, high vacuum capability up to 0.01 Torr, and flow capacity up to 600 M³/hr. Available in air-cooled and water-cooled configurations with single-stage and double-stage options. Ideal for vacuum distillation, filtration, jewelry casting, vacuum drying, degassing, and food processing applications.",
          },
          image: "/images/oil-Vane-Vacuum-Pump.jpg",
          brand: "SWAM",
          category: "Industrial Vacuum Pumps",
          sku: "OVVP-SERIES",
          additionalProperty: [
            {
              name: "Maximum Capacity",
              value: "Up to 600 M³/hr",
            },
            {
              name: "Vacuum Level",
              value: "Up to 0.01 Torr",
            },
            {
              name: "Technology",
              value: "Positive Displacement Rotary Vane",
            },
            {
              name: "Operation",
              value: "Oil-Lubricated",
            },
            {
              name: "Cooling",
              value: "Air-Cooled & Water-Cooled",
            },
            {
              name: "Stages",
              value: "Single-Stage & Double-Stage",
            },
            {
              name: "Vapor Handling",
              value: "Chemical Series for Condensable Vapors",
            },
            {
              name: "Noise Level",
              value: "Low Noise Operation",
            },
            {
              name: "Series Available",
              value:
                "SP-OL (Air Cooled Single), SP-DD (Air Cooled Double), SP-S/SP-D (Single/Double), SP-D (Water Cooled Double)",
            },
            {
              name: "Applications",
              value:
                "Vacuum Distillation, Filtration, Jewelry Casting, Vacuum Drying, Degassing, Food Processing",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 185,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Vacuum Systems",
              url: "/vacuum-systems",
            },
            {
              name: "Oil Vane Vacuum Pumps",
              url: "/oil-vane-vacuum-pump-2",
            },
          ],
        },
      },
    ],
  }),
  "/mechanical-vacuum-boosters": createDefaultPageSeo(
    "/mechanical-vacuum-boosters",
    {
      title: { fallback: "Mechanical Vacuum Boosters | SWAM India" },
      description: {
        fallback:
          "Explore high-performance mechanical vacuum boosters by SWAM for enhanced vacuum efficiency in industrial systems. Designed for reliability, speed & low maintenance.",
      },
      schema: [
        {
          type: "product",
          config: {
            name: {
              key: "mechanicalVacuumBoosters.hero.title",
              fallback: "Mechanical Vacuum Boosters",
            },
            description: {
              key: "mechanicalVacuumBoosters.hero.description",
              fallback:
                "SWAM Mechanical Vacuum Boosters work in combination with conventional vacuum pumps to boost high vacuum up to one micron. Featuring state-of-the-art design with advanced sealing systems for complete vacuum tightness and leak-proof construction.",
            },
            image: "/images/Mechanical-Vacuum.jpg",
            brand: "SWAM",
            category: "Industrial Vacuum Boosters",
            sku: "MVB-SERIES",
            additionalProperty: [
              {
                name: "Maximum Capacity",
                value: "Up to 80,000 M³/Hr",
              },
              {
                name: "Vacuum Level",
                value: "Max 10⁻³ Torr",
              },
              {
                name: "Operation",
                value: "Continuous Duty",
              },
              {
                name: "Sealing",
                value: "Advanced Sealing Systems",
              },
              {
                name: "Construction",
                value: "Leak-Proof Design",
              },
              {
                name: "Vacuum Tightness",
                value: "Complete Vacuum Tightness",
              },
              {
                name: "Compatibility",
                value: "Works with Conventional Vacuum Pumps",
              },
              {
                name: "Performance",
                value: "Ultra-High Performance",
              },
            ],
            offers: {
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
            },
            aggregateRating: {
              ratingValue: 4.9,
              reviewCount: 180,
              bestRating: 5,
              worstRating: 1,
            },
          },
        },
        {
          type: "breadcrumb",
          config: {
            items: [
              {
                name: "Home",
                url: "/",
              },
              {
                name: "Vacuum Systems",
                url: "/vacuum-systems",
              },
              {
                name: "Mechanical Vacuum Boosters",
                url: "/mechanical-vacuum-boosters",
              },
            ],
          },
        },
      ],
    }
  ),
  "/mvr-blowers": createDefaultPageSeo("/mvr-blowers", {
    title: {
      fallback: "MVR Blowers | SWAM India – Energy‑Efficient Vapor Compression",
    },
    description: {
      fallback:
        "SWAM's next‑gen MVR blowers designed for mechanical vapor recompression in industrial processes. Achieve high efficiency, lower maintenance, and reliable performance.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "mvrBlowers.hero.title",
            fallback: "MVR Blowers",
          },
          description: {
            key: "mvrBlowers.hero.description",
            fallback:
              "SWAM offers advanced Next Generation Mechanical Vapour Re-Compressor technology equipped with latest features for enhanced reliability, energy efficiency and lower maintenance. Ruggedly built with computer-generated rotor profiles enabling better uniform clearance and higher volumetric efficiency for flows up to 65,000 M³/hr.",
          },
          image: "/images/MVR-Blowers.jpg",
          brand: "SWAM",
          category: "Industrial MVR Blowers",
          sku: "MVR-SERIES",
          additionalProperty: [
            {
              name: "Maximum Flow",
              value: "Up to 65,000 M³/hr",
            },
            {
              name: "Maximum Pressure",
              value: "Max 1.1 kg/cm²",
            },
            {
              name: "Vacuum",
              value: "50%",
            },
            {
              name: "Technology",
              value: "Next Generation MVR Technology",
            },
            {
              name: "Rotor Design",
              value: "Computer-Generated Rotor Profiles",
            },
            {
              name: "Efficiency",
              value: "Higher Volumetric Efficiency",
            },
            {
              name: "Construction",
              value: "Ruggedly Built",
            },
            {
              name: "Energy Efficiency",
              value: "Enhanced Energy Efficiency",
            },
            {
              name: "Maintenance",
              value: "Lower Maintenance",
            },
            {
              name: "Applications",
              value:
                "Evaporation Systems, Distillation Processes, Concentration Applications, Heat Recovery Systems, Crystallization Processes, Desalination Plants",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 150,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Blower Division",
              url: "/blower-division",
            },
            {
              name: "MVR Blowers",
              url: "/mvr-blowers",
            },
          ],
        },
      },
    ],
  }),
  "/vacuum-systems-and-packages": createDefaultPageSeo(
    "/vacuum-systems-and-packages",
    {
      title: { fallback: "Industrial Vacuum Systems & Packages by SWAM" },
      description: {
        fallback:
          "Explore high-performance mechanical vacuum boosters by SWAM for enhanced vacuum efficiency in industrial systems. Designed for reliability, speed & low maintenance.",
      },
      schema: [
        {
          type: "product",
          config: {
            name: {
              key: "vacuumSystemsPackages.hero.title",
              fallback: "Vacuum Systems & Packages",
            },
            description: {
              key: "vacuumSystemsPackages.hero.description",
              fallback:
                "Complete turnkey vacuum systems and packages delivering ultra-high vacuum performance. Features multi-stage booster configuration achieving vacuum levels up to 10⁻⁴ mbar and lower. Exceptional pumping capacity up to 52,000 M³/Hr with flexible configuration from 1 to 5 boosters. Complete package includes backup pumps, boosters, condensers, gauges, starter panels, and catch pots for guaranteed performance.",
            },
            image: "/images/Vacuum-Systems-Packages.png",
            brand: "SWAM",
            category: "Industrial Vacuum Systems",
            sku: "VSP-SERIES",
            additionalProperty: [
              {
                name: "Maximum Capacity",
                value: "Up to 52,000 M³/Hr",
              },
              {
                name: "Vacuum Level",
                value: "Up to 10⁻⁴ mbar",
              },
              {
                name: "Minimum Capacity",
                value: "150 M³/Hr",
              },
              {
                name: "Booster Stages",
                value: "1 to 5 Boosters",
              },
              {
                name: "Package Type",
                value: "Complete Turnkey Solution",
              },
              {
                name: "System Components",
                value:
                  "Backup Pumps, Boosters, Condensers, Gauges, Starter Panels, Catch Pots",
              },
              {
                name: "Performance",
                value: "Guaranteed Performance",
              },
              {
                name: "Configuration",
                value: "Multi-Stage Design",
              },
            ],
            offers: {
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
            },
            aggregateRating: {
              ratingValue: 4.9,
              reviewCount: 250,
              bestRating: 5,
              worstRating: 1,
            },
          },
        },
        {
          type: "breadcrumb",
          config: {
            items: [
              {
                name: "Home",
                url: "/",
              },
              {
                name: "Vacuum Systems",
                url: "/vacuum-systems",
              },
              {
                name: "Vacuum Systems & Packages",
                url: "/vacuum-systems-and-packages",
              },
            ],
          },
        },
      ],
    }
  ),
  "/condenser-exhausters": createDefaultPageSeo("/condenser-exhausters", {
    title: {
      fallback: "Condenser Exhausters | SWAM – Reliable Vacuum Solutions",
    },
    description: {
      fallback:
        "SWAM's condenser exhausters offer efficient steam removal in power plants and process industries. Engineered for durability, high vacuum, and energy efficiency.",
    },
    schema: [
      {
        type: "product",
        config: {
          name: {
            key: "condenserExhausters.hero.title",
            fallback: "Condenser Exhausters",
          },
          description: {
            key: "condenserExhausters.hero.description",
            fallback:
              "SWAM offers advanced design Condenser Exhauster for hogging and holding service in power generation. The system consists of liquid ring vacuum pumps, separator, heat exchanger and ejector (optional) with total recirculation for reliable and efficient condenser service.",
          },
          image: "/images/Condenser-Exhausters.jpg",
          brand: "SWAM",
          category: "Industrial Vacuum Systems",
          sku: "CE-SERIES",
          additionalProperty: [
            {
              name: "Capacity Range",
              value: "10-40 SCFM",
            },
            {
              name: "Service Type",
              value: "Hogging & Holding",
            },
            {
              name: "Application",
              value: "Power Generation",
            },
            {
              name: "System Components",
              value:
                "Liquid Ring Vacuum Pumps, Separator, Heat Exchanger, Ejector (Optional)",
            },
            {
              name: "Recirculation",
              value: "Total Recirculation",
            },
            {
              name: "Operation",
              value: "Continuous Duty",
            },
            {
              name: "Design",
              value: "Advanced Design",
            },
            {
              name: "Applications",
              value:
                "Power Plants, Steam Power Systems, Industrial Steam Systems, Turbine Applications",
            },
          ],
          offers: {
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            ratingValue: 4.7,
            reviewCount: 120,
            bestRating: 5,
            worstRating: 1,
          },
        },
      },
      {
        type: "breadcrumb",
        config: {
          items: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Vacuum Systems",
              url: "/vacuum-systems",
            },
            {
              name: "Condenser Exhausters",
              url: "/condenser-exhausters",
            },
          ],
        },
      },
    ],
  }),
  // "/shell-and-tube-type-heat-exchangers": createDefaultPageSeo(
  //   "/shell-and-tube-type-heat-exchangers"
  // ),
  // "/acoustic-enclosures-and-silencers": createDefaultPageSeo(
  //   "/acoustic-enclosures-and-silencers"
  // ),
  "/events": createDefaultPageSeo("/events", {
    title: {
      fallback:
        "SWAM | Events & Exhibitions – Global Engineering Showcases & Innovation",
    },
    description: {
      fallback:
        "Explore SWAM’s schedule of global events and exhibitions – from sustainable energy expos to industrial vacuum-technology showcases. Join us as we demonstrate our engineering excellence to the world.",
    },
  }),
  "/testimonials": createDefaultPageSeo("/testimonials", {
    title: {
      fallback:
        "SWAM | Client Testimonials – Real Success Stories from Industrial Leaders",
    },
    description: {
      fallback:
        "Read how SWAM has partnered with leading global companies to deliver high-performance blower, vacuum and compressor systems—proven reliability, over 500 success stories and industry-trusted solutions.",
    },
  }),
  "/awards": createDefaultPageSeo("/awards", {
    title: {
      fallback:
        "SWAM | Awards & Recognitions – Engineering Excellence Since 1978",
    },
    description: {
      fallback:
        "Discover the global awards and recognitions earned by SWAM–from Manufacturer of the Year to Business Leader of the Year–affirming our commitment to innovation, quality and sustainability.",
    },
  }),
  "/career": createDefaultPageSeo("/career", {
    title: {
      fallback: "Careers at SWAM | Grow with India’s Vacuum Tech Leader",
    },
    description: {
      fallback:
        "Explore career opportunities at SWAM. Join our team of innovators in vacuum technology, engineering, and service. Build a rewarding future in industrial excellence.",
    },
  }),
  "/gallery": createDefaultPageSeo("/gallery", {
    title: {
      fallback: "SWAM | Gallery – View Our Engineering Projects & Facilities",
    },
    description: {
      fallback:
        "Explore SWAM's gallery showcasing our state-of-the-art manufacturing facilities, product innovations, project installations and engineering excellence in vacuum pumps, blowers and compressors.",
    },
  }),
  "/product-knowledge-base": createDefaultPageSeo("/product-knowledge-base", {
    title: {
      fallback:
        "SWAM | Product Knowledge Base – Technical Resources for Vacuum, Blower & Compressor",
    },
    description: {
      fallback:
        "Explore SWAM’s extensive product knowledge base: detailed technical articles, datasheets and FAQs covering vacuum pumps, blowers and compressors — helping you select, operate and maintain the right system.",
    },
  }),
  "/contact-us": createDefaultPageSeo("/contact-us", {
    title: {
      fallback: "Contact SWAM India | Vacuum Systems & Blower Experts",
    },
    description: {
      fallback:
        "Get in touch with SWAM for expert support on vacuum systems, blowers, and industrial solutions. Our team is ready to assist you with quotes, service, or consultations.",
    },
    keywords: [
      { ...BRAND_KEYWORD },
      { key: "seo.contactUs.keyword.primary", fallback: "Customer support" },
    ],
    openGraph: {
      image: `${DEFAULT_SITE_URL}/og/contact.jpg`,
    },
    twitter: {
      image: `${DEFAULT_SITE_URL}/og/contact.jpg`,
    },
  }),

  "/404": {
    title: "Swamatics | Page Not Found",
    description:
      "The page you are looking for could not be found. Explore Swamatics products, services, and solutions.",
    noindex: true,
  },
};

export const getPageSeoConfig = (path) => PAGE_SEO_CONFIG[path] || {};
