import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-2JJZHSW6XF";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;

    // GA4: send a page view on every route change
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, { page_path: path });
    }

    // Optional: push a virtual pageview into dataLayer (useful if you add GTM rules later)
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "virtual_pageview", page_path: path });
    }
  }, [location]);

  return null;
}
