"use client"

import { useState, useEffect, useRef } from "react"
import logo from "../../assets/images/logo-black.jpg"
import { useNavigate } from "react-router-dom"
// TopMenu.jsx

import { FaSearch, FaTimes,
  FaWind, FaFlask, FaRocket, FaCogs, FaIndustry, FaFan,
  FaBolt, FaBoxes, FaCompressAlt, FaChevronRight, FaGasPump, FaTint
} from "react-icons/fa";

// import i18n from "i18next";

const TopMenu = () => {
  const navigate = useNavigate()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedDivision, setSelectedDivision] = useState(null)
  const [showDivisionOverlay, setShowDivisionOverlay] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
const [searchQuery, setSearchQuery] = useState("")
const [searchResults, setSearchResults] = useState([])
const [previewDivision, setPreviewDivision] = useState("blower")
const [activeCompanySection, setActiveCompanySection] = useState(0)
const [selectedLeftItem, setSelectedLeftItem] = useState(null)

  
  const dropdownRefs = useRef({})
  const hoverTimeoutRef = useRef(null)
  // 👇 define the order of menus
  const menuOrder = ["product", "application", "company", "services", "contact"]

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const handleDropdownHover = (dropdown, event) => {
    // Only handle hover on desktop
    if (!isMobile) {
      // Clear any existing timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
      setActiveDropdown(dropdown)
      if (dropdown === "company" || dropdown === "contact") pickDefault(dropdown)
    }
  }
  const navRef = useRef(null);
const [navH, setNavH] = useState(0);

useEffect(() => {
  const measure = () => setNavH(navRef.current?.offsetHeight || 0);
  measure();
  window.addEventListener("resize", measure);
  return () => window.removeEventListener("resize", measure);
}, []);


  const openSearch = () => {
  setIsSearchOpen(true);
  setSearchQuery("");
  setSearchResults([]);
  setActiveDropdown(null);
};
// make a slug from a product name
const toSlug = s =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// put below `const toSlug = s => ...`
const productIconMap = {
  "rotary-twin-lobe-blowers": FaWind,
  "rotary-tri-lobe-blowers": FaWind,
  "process-gas-blowers": FaFlask,
  "turbo-blowers": FaRocket,
  "super-helical-hybrid-blower": FaBolt,
  "truck-blowers": FaBoxes,
  "screwblower": FaCogs,
  "centrifugal-fans-blowers": FaFan,
  "sr-series-blowers": FaIndustry,
  "air-injection": FaTint,

  "dry-screw-vacuum-pump": FaTint,
  "liquid-ring-vacuum-pumps": FaTint,
  "oil-vane-vacuum-pump-2": FaTint,
  "mvr-blowers": FaRocket,
  "mechanical-vacuum-boosters": FaCompressAlt,
  "vacuum-systems-and-packages": FaBoxes,
  "clawvacuum": FaCogs,
  "condenser-exhausters": FaFan,

  "rotary-sliding-vane-compressors": FaCogs,
  "bio-gas-blowers-compressors": FaGasPump,
  "liquid-compressors": FaCompressAlt, // ← matches slug of “Liquid Compressors”
};
const products = [
  { name: "Rotary Twin Lobe Blowers", link: "/rotary-piston-blowers" },
  { name: "Rotary Tri Lobe Blowers", link: "/rotarytrilobeblowers" },
  { name: "Process Gas Blowers", link: "/process-gas-blowers" },
  { name: "Turbo Blowers", link: "/turbo-blowers" },
  { name: "Super Helical Hybrid Blower", link: "/super-helical-hybrid-blower" },
  { name: "Truck Blowers", link: "/truck-blowers" },
 { name: "Bio Gas Compressors", link: "/bio-gas-blowers-compressors" },
  { name: "Dry Vacuum Pumps", link: "/air-injection" },
  { name: "Rotary Sliding Vane Compressors", link: "/rotary-sliding-vane-compressors" },
  { name: "Centrifugal Fans & Blowers", link: "/centrifugal-fans-blowers" },
  { name: "SR Series Blowers", link: "/sr-series-blowers" },
  { name: "Dry Screw Vacuum Pump", link: "/dry-screw-vacuum-pump" },
  { name: "Liquid Ring Vacuum Pumps", link: "/liquid-ring-vacuum-pumps" },
  { name: "Oil Vane Vacuum Pump", link: "/oil-vane-vacuum-pump-2" },
  { name: "Mechanical Vacuum Boosters", link: "/mechanical-vacuum-boosters" },
  { name: "MVR Blowers", link: "/mvr-blowers" },
  { name: "Vacuum Systems and Packages", link: "/vacuum-systems-and-packages" },
  { name: "Condenser Exhausters", link: "/condenser-exhausters" },
   { name: "Claw Vacuum", link: "/clawvacuum" },
    { name: "Liquid ring compressors", link: "/liquidringcompressors" },
    { name: "Screw blower", link: "/screwblower" },

];


const getProductIcon = (name) =>
  productIconMap[toSlug(name)] || FaChevronRight;


// optional: short captions per product (fallback text is used if missing)
const productShort = {
  "rotary-twin-lobe-blowers": "Positive displacement for air/gas duties",
  "rotary-tri-lobe-blowers": "Positive displacement for air/gas duties",
  "process-gas-blowers": "Sealed designs for corrosive/toxic gases",
  "turbo-blowers": "High efficiency, low footprint",
  "super-helical-hybrid-blower": "High pressure, low pulsation",
  "truck-blowers": "Bulk unloading specialists",
  "screwblower": "Energy-saving screw technology",
  "centrifugal-fans-blowers": "High flow, stable operation",
  "sr-series-blowers": "Compact, robust, easy service",
  "air-injection": "Vacuum with secondary suction",

  "dry-screw-vacuum-pump": "Oil-free, contamination-free vacuum",
  "liquid-ring-vacuum-pumps": "Rugged, wet-gas tolerant",
  "oil-vane-vacuum-pump-2": "Compact & economical",
  "mvr-blowers": "Energy recovery via recompression",
  "mechanical-vacuum-boosters": "Deep vacuum with high throughput",
  "vacuum-systems-and-packages": "Turnkey engineered packages",
  "clawvacuum": "Contact-free, low maintenance",
  "condenser-exhausters": "Efficient condenser evacuation",

  "rotary-sliding-vane-compressors": "Smooth, steady air delivery",
  "bio-gas-blowers-compressors": "For biogas handling & boosting",
  "liquidsringcompressors": "For saturated/vapor-laden gases"
};

// thumbnails per division+product (use what you have; fallbacks are provided)
const productThumbs = {
  blower: {
    "rotary-twin-lobe-blowers": "/images/rotary-twin.jpg",
    "rotary-tri-lobe-blowers": "/images/rotary-twin.jpg",
    "process-gas-blowers": "/images/Process-Gas-BlowersGas-Boosters.webp",
    "turbo-blowers": "/images/Turbo_Blowers.webp",
    "super-helical-hybrid-blower": "/images/SuperHelicalHybridBlower.webp",
    "truck-blowers": "/images/Truck-Blowers.png",
    "screwblower": "/images/screw-blower.jpg",
    "centrifugal-fans-blowers": "/images/swam-centrifugal-fans-and-blowers.webp",
    "sr-series-blowers": "/images/sR-Series-Blowers.webp",
    "air-injection": "/images/VacuumPumpsWithSecondarySuction.png"
  },
  vacuum: {
    "dry-screw-vacuum-pump": "/images/dry-Screw-Vacuum-Pump.png",
    "liquid-ring-vacuum-pumps": "/images/liquid-Ring-Vacuum-Pump.webp",
    "oil-vane-vacuum-pump-2": "/images/oil-Vane-Vacuum-Pump.webp",
    "mvr-blowers": "/images/MVR-Blowers.webp",
    "mechanical-vacuum-boosters": "/images/Mechanical-Vacuum.webp",
    "vacuum-systems-and-packages": "/images/Vacuum-Systems-Packages.png",
    "clawvacuum": "/images/claw-vacuum.jpg",
    "condenser-exhausters": "/images/Condenser-Exhausters.webp"
  },
  compressor: {
    "rotary-sliding-vane-compressors": "/images/rotary-Sliding-Vane-Compressors.webp",
    "bio-gas-blowers-compressors": "/images/bio-Gas-Blowers-Compressors.webp",
    "liquidsringcompressors": "/images/liquid-ring-compressors.jpg"
  }
};

const getThumb = (division, name) =>
  productThumbs[division]?.[toSlug(name)] || "/images/placeholder-product.jpg";

// which division is being previewed in the hero panel


const getDivisionBg = (k) => {
  switch (k) {
    case "blower": return "/images/Truck-Blowers.png";
    case "vacuum": return "/images/liquid-Ring-Vacuum-Pump.png";
    case "compressor": return "/images/bio-Gas-Blowers-Compressors.webp";
    default: return "/images/placeholder.jpg";
  }
};

const closeSearch = () => {
  setIsSearchOpen(false);
  setSearchQuery("");
  setSearchResults([]);
};

const onSearchChange = (val) => {
  setSearchQuery(val);
  const q = val.trim().toLowerCase();
  if (!q) {
    setSearchResults([]);
    return;
  }

  // match against product name and division title
  const matches = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    (p.divisionTitle && p.divisionTitle.toLowerCase().includes(q))
  ).slice(0, 12);

  setSearchResults(matches);
};


  const handleDropdownLeave = () => {
    // Only handle leave on desktop
    if (!isMobile) {
      // Add a small delay before closing to prevent accidental closes
      hoverTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null)
      }, 150)
    }
  }

  // Check if dropdown content is scrollable
  const checkScrollable = (element) => {
    if (!element) return false
    return element.scrollHeight > element.clientHeight
  }

  const handleDropdownClick = (dropdown) => {
  const next = activeDropdown === dropdown ? null : dropdown;
  setActiveDropdown(next);

  if (!isMobile && (next === "company" || next === "contact")) {
    pickDefault(next);
  }
  if (next === null) {
    setSelectedLeftItem(null);       // clear selection when closing
  }
};


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Close any open dropdowns when toggling mobile menu
    setActiveDropdown(null)
  }

  const handleDivisionClick = (division) => {
    setSelectedDivision(division)
    setShowDivisionOverlay(true)
    setActiveDropdown(null)
  }

  const closeDivisionOverlay = () => {
    setShowDivisionOverlay(false)
    setSelectedDivision(null)
  }

  const productDivisions = {
    blower: {
      title: "Blower Division",
      description: "High-performance blowers for industrial applications",

      products: [
        {
          name: "Rotary Twin Lobe Blowers",
          // description: "Rotary Twin & Tri Lobe Blowers",
          link: "/rotary-piston-blowers",
        },
        {
          name: "Rotary Tri Lobe Blowers",
          // description: "Rotary Twin & Tri Lobe Blowers",
          link: "/rotarytrilobeblowers",
        },
        {
          name: "Process Gas Blowers",
          // description: "Process Gas Blowers/ Gas Boosters",
          link: "/process-gas-blowers",
        },
        {
          name: "Turbo Blowers",
          // description: "Turbo Blowers- Integrally Geared Type",
          link: "/turbo-blowers",
        },
        {
          name: "Super Helical Hybrid Blower",
          // description: "Super Helical Hybrid Blower",
          link: "/super-helical-hybrid-blower",
        },
        {
          name: "Truck Blowers",
          // description: "Truck Blowers",
          link: "/truck-blowers",
        },
        {
          name: "Screw Blower",
          // description: "Truck Blowers",
          link: "/screwblower",
        },
        
        {
          name: "Centrifugal Blowers",
          // description: "Centrifugal Blowers",
          link: "/centrifugal-fans-blowers",
        },
        {
          name: "SR Series Blowers",
          // description: "SR Series Blowers",
          link: "/sr-series-blowers",
        },
        // {
        //   name: "MVR Blowers",
        //   // description: "MVR Blowers",
        //   link: "/mvr-blowers",
        // },
        {
          name: "Dry Vacuum Pump",
          // description: "Vacuum Pumps With Secondary Suction/Air Injection",
          link: "/air-injection",
        },
      ],
    },
    vacuum: {
      title: "Vacuum Division",
      description: "Advanced vacuum solutions for diverse applications",
   
      products: [
        {
          name: "Dry Screw Vacuum Pump",
          // description: "Dry Screw Vacuum Pump - Combined Variable Pitch",
          link: "/dry-screw-vacuum-pump",
        },
        {
          name: "Liquid Ring Vacuum Pump",
          // description: "Liquid Ring Vacuum Pump",
          link: "/liquid-ring-vacuum-pumps",
        },
        {
          name: "Oil Vane Vacuum Pump",
          // description: "Oil Vane Vacuum Pump",
          link: "/oil-vane-vacuum-pump-2",
        },
         {
          name: "Mechanical Vapor Recompression",
          // description: "MVR Blowers",
          link: "/mvr-blowers",
        },
        {
          name: "Mechanical Vacuum Boosters",
          // description: "Mechanical Vacuum Boosters",
          link: "/mechanical-vacuum-boosters",
        },
        {
          name: "Vacuum Systems And Packages",
          // description: "Vacuum Systems And Packages",
          link: "/vacuum-systems-and-packages",
        },
        {
          name: "Claw Vacuum",
          // description: "Vacuum Systems And Packages",
          link: "/clawvacuum",
        },
        {
          name: "Condenser Exhausters",
          // description: "Condenser Exhausters",
          link: "/condenser-exhausters",
        },
        
      ],
    },
    compressor: {
      title: "Compressor Division",
      description: "Reliable compression solutions for industrial needs",

      products: [
        {
          name: "Rotary Sliding Vane Compressors",
          // description: "Rotary Sliding Vane Compressors",
          link: "/rotary-sliding-vane-compressors",
        },
        {
          name: "Bio Gas Compressors",
          // description: "Bio Gas Blowers/Compressors",
          link: "/bio-gas-blowers-compressors",
        },
        
        {
          name: "Liquid Compressors",
          // description: "Bio Gas Blowers/Compressors",
          link: "/Liquidringcompressors",
        },
      ],
    },
  }

  // Dropdown content data
  const dropdownContent = {
    company: {
      sections: [
        {
          title: "About",
          links: [
            {
              name: "Welcome From MD",
              // description: "Message from our Chief Executive Officer",
              link: "/welcome-from-ceo",
            },
            {
              name: "About Us",
              // description: "Learn about our company and values",
              link: "/about",
            },
            {
              name: "History",
              // description: "Our company's journey and milestones",
              link: "/history",
            },
            {
              name: "Mission and Vision",
              // description: "Our mission statement and future vision",
              link: "/mission-and-vision",
            },
            {
              name: "Leadership",
              // description: "Meet our leadership team",
              link: "/leadership",
            },
          ],
        },
        {
          title: "Activities",
          links: [
            {
              name: "Events",
              // description: "Events",
              link: "/events",
            },
            {
              name: "Testimonials",
              // description: "Testimonials",
              link: "/testimonials",
            },
            {
              name: "Awards & Gallery",
              // description: "Awards",
              link: "/awards",
            },
            
            // {
            //   name: "Gallery",
            //   // description: "Gallery",
            //   link: "/Gallery",
            // },
          ],
        },
        {
          title: "Operations",
          links: [
            {
              name: "Plants",
              // description: "Our manufacturing facilities and locations",
              link: "/plants",
            },
            {
              name: "Quality And Testing Systems",
              // description: "Our quality assurance and testing processes",
              link: "/introduction",
            },
            {
              name: "Engineering & Design",
              // description: "Our engineering capabilities and design services",
              link: "/engineering-design",
            },
            {
              name: "Health and Safety",
              // description: "Our commitment to workplace safety",
              link: "/health-and-safety",
            },
          ],
        },
        {
          title: "Latest Posts",
          links: [
            {
              name: "Product Knowledge Base",
              // description: "Latest trends and insights",
              link: "/product-knowledge-base",
            },
            {
              name: "Product Updates",
              // description: "New features and improvements",
            },
            { name: "Best Practices" },
          ],
        },
        // {
        //   title: "Categories",
        //   links: [
        //     { name: "Technology" },
        //     { name: "Business" },
        //     { name: "Tutorials" },
        //   ],
        // },
        {
   title: "Credentials", hidden: true,
  links: [
    { name: "Certificates", link: "/certificates", hidden: true },
  ],
},


      ],
      
    },
    contact: {
    sections: [
      {
        title: "Contact Us",
        links: [
          { name: "Contact Us", link: "/contact-us" },
          { name: "Career", link: "/career" },
        ],
      },
    ],
  },
    
  }
  // Build the left menu from dropdownContent.company (honors hidden flags)
const getLeftMenuItems = (menuKey = "company") => {
const content = dropdownContent[menuKey]
  if (!content) return []
  return (content.sections || [])
    .filter(s => !s.hidden)
    .map(s => ({ id: s.title.toLowerCase().replace(/\s+/g, "-"), title: s.title, links: (s.links || []).filter(l => !l.hidden) }))
    .filter(s => s.links.length > 0)
}
// ---- Default 'About' when Company menu opens ----
const pickDefault = (menuKey) => {
const items = getLeftMenuItems(menuKey);
if (items.length) setSelectedLeftItem(items[0]);
};

const handleLeftItemClick = (item) => {
  setSelectedLeftItem(item)
}


  return (
    <>
      {/* CSS to hide scrollbars in WebKit browsers */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .mobile-menu::-webkit-scrollbar {
          display: none;
        }
      `}</style>
<nav
  ref={navRef}
  className="fixed top-0 left-0 right-4 w-[99%] bg-white backdrop-blur-xl shadow-lg border-b border-white/20 z-[10000] transition-all duration-300"
>
        <div className="w-full flex justify-between items-center px-6 py-3">
          {/* Logo Container */}
          <div className="flex items-center gap-2 z-10">
            <img
              src={logo || "/placeholder.svg"}
              alt="Material Kit 2"
              className="h-8 w-auto cursor-pointer"
              style={{ width: "150px", height: "auto" }}
              onClick={() => navigate("/")}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-10"
            onClick={toggleMobileMenu}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 top-3" : "top-1"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "top-3"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              />
            </div>
          </button>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            {menuOrder.map((key) => {
              if (key === "product") {
                return (
                  <div
                    key={key}
                    className="relative group"
                    onMouseEnter={(e) => handleDropdownHover(key, e)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {/* Invisible bridge to prevent hover gaps */}
                    {!isMobile && activeDropdown === key && (
                      <div className="absolute top-full left-0 right-0 h-6 bg-transparent z-40" />
                    )}

                    <button
                      className={`px-4 py-2 text-lg font-bold tracking-wide text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 flex items-center gap-1 ${
                        activeDropdown === key ? "text-blue-600 bg-blue-50" : ""
                      }`}
                      onClick={() => handleDropdownClick(key)}
                    >
                      Products
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === key ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {!isMobile && activeDropdown === key && (
                      <div
                        className="fixed left-0 right-0 w-full bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-2xl z-50 transition-all duration-300"
                        style={{ top: "calc(100% + 0rem)" }}
                      >
                        <div className="max-w-7xl mx-auto p-8">
                          <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Product Divisions</h2>
                            <p className="text-gray-600">Choose a division to explore our products</p>
                          </div>

                       <div className="grid grid-cols-12 gap-8 w-full">
  {/* Left rail: compact, tactile list */}
  <div className="col-span-12 md:col-span-4 space-y-3">
    {Object.entries(productDivisions).map(([k, v]) => {
      const active = previewDivision === k;
      return (
        <button
          key={k}
          onMouseEnter={() => setPreviewDivision(k)}
          onFocus={() => setPreviewDivision(k)}
          onClick={() => handleDivisionClick(k)}
          className={`w-full text-left relative group rounded-2xl border px-5 py-4 transition-all
                      ${active ? "border-blue-500 bg-blue-50/40 shadow-sm" : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/20"}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-gray-900 group-hover:text-blue-700">
                {v.title}
              </div>
              <div className="text-xs font-semibold text-gray-500 mt-1">
                {v.products.length} Products
              </div>
            </div>
            <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition
                              ${active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 group-hover:bg-blue-600 group-hover:text-white"}`}>
              Explore →
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{v.description}</p>
        </button>
      );
    })}
  </div>

  {/* Right: big hero preview */}
  <div className="col-span-12 md:col-span-8">
    <div className="relative h-[22rem] md:h-[26rem] rounded-3xl overflow-hidden shadow-2xl">
      {/* background image */}
      <img
        src={getDivisionBg(previewDivision)}
        alt={productDivisions[previewDivision].title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* layered glow + gradient for contrast */}
      <div className="absolute inset-0">
        <div className="absolute -right-24 -bottom-24 w-56 h-56 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-blue-700">
          {productDivisions[previewDivision].products.length} products
        </div>

        <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-white drop-shadow-sm">
          {productDivisions[previewDivision].title}
        </h3>

        <p className="mt-2 max-w-2xl text-white/85">
          {productDivisions[previewDivision].description}
        </p>

        <button
          onClick={() => handleDivisionClick(previewDivision)}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 font-semibold px-4 py-2 hover:bg-blue-50 transition"
        >
          View products
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>


                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              // If this item has dropdown content → render dropdown
              // If this item has dropdown content → render dropdown (generic for company/contact)
if (dropdownContent[key]) {
  const visibleSections =
    (dropdownContent[key]?.sections || [])
      .filter(s => !s.hidden)
      .map(s => ({ ...s, links: (s.links || []).filter(l => !l.hidden) }))
      .filter(s => s.links.length > 0);

  return (
    <div
      key={key}
      className="relative group"
      onMouseEnter={(e) => handleDropdownHover(key, e)}
      onMouseLeave={handleDropdownLeave}
    >
      {/* Invisible bridge to prevent hover gaps */}
      {!isMobile && activeDropdown === key && (
        <div className="absolute top-full left-0 right-0 h-6 bg-transparent z-40" />
      )}

      {/* The top button label */}
      <button
        className={`px-4 py-2 text-lg font-bold tracking-wide text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 flex items-center gap-1 ${
          activeDropdown === key ? "text-blue-600 bg-blue-50" : ""
        }`}
        onClick={() => handleDropdownClick(key)}
      >
        {key === "company" ? "Company" : key === "contact" ? "Contact Us" : key}
        <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === key ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Generic overlay (desktop only) */}
      {!isMobile && activeDropdown === key && (
        <div
          className="fixed left-0 right-0 bottom-0 z-[10001] bg-black/30"
          style={{ top: navH || 72 }}
          onClick={() => { setActiveDropdown(null); setSelectedLeftItem(null); }}
        >
          <div
            className="relative w-screen max-w-none bg-white shadow-2xl overflow-hidden"
            style={{ height: `calc(70vh - ${(navH || 42)}px)` }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => { setActiveDropdown(null); setSelectedLeftItem(null); }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100"
              aria-label={`Close ${key} menu`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <div className="grid grid-cols-3 h-full">
              {/* Left: categories */}
              <div className="p-8 pr-36 border-r border-gray-200 overflow-y-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {key === "company" ? "Company Overview" : "Get in touch"}
                </h3>
                <div className="space-y-2">
                  {getLeftMenuItems(key).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleLeftItemClick(item)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between ${
                        selectedLeftItem?.id === item.id
                          ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                    >
                      <span className="font-medium">{item.title}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: links */}
              <div className="col-span-2 p-8 pl-6 overflow-y-auto">
                {selectedLeftItem ? (
                  <>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">{selectedLeftItem.title}</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedLeftItem.links.map((link, i) => (
                        <button
                          key={i}
                          onClick={() => { navigate(link.link); setActiveDropdown(null); setSelectedLeftItem(null); }}
                          className="block text-left px-4 py-3 rounded-lg text-blue-600 hover:text-blue-800 hover:bg-blue-50 font-medium transition"
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <p className="text-sm">Select an item on the left to view options</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


              // Otherwise → render as simple navigation button
              return (
                <button
                  key={key}
                  onClick={() => navigate(`/${key === "contact" ? "contact-us" : key}`)}
                  className="px-4 py-2 text-lg font-bold tracking-wide text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  {key === "application"
                    ? "Applications"
                    : key === "services"
                      ? "Services"
                      : key === "contact"
                        ? "Contact Us"
                        : key}
                </button>
              )
            })}
            <button
  aria-label="Search products"
  onClick={openSearch}
  className="p-2 rounded-lg hover:bg-blue-50 text-gray-800 hover:text-blue-600 transition-colors"
  title="Search products"
>
  <FaSearch className="text-lg" />
</button>

          </div>
          

          {/* 🌍 Language Selector
<div className="flex items-center gap-3 ml-6">
  <button onClick={() => i18n.changeLanguage("en")} className="px-2 py-1 text-sm font-semibold text-gray-700 hover:text-blue-600">
    EN
  </button>
  <button onClick={() => i18n.changeLanguage("de")} className="px-2 py-1 text-sm font-semibold text-gray-700 hover:text-blue-600">
    DE
  </button>
  <button onClick={() => i18n.changeLanguage("fr")} className="px-2 py-1 text-sm font-semibold text-gray-700 hover:text-blue-600">
    FR
  </button>
  <button onClick={() => i18n.changeLanguage("hi")} className="px-2 py-1 text-sm font-semibold text-gray-700 hover:text-blue-600">
    HI
  </button>
</div> */}
        </div>
      </nav>

      {showDivisionOverlay && selectedDivision && (
        <div
          className="fixed left-0 right-0 bg-white z-[9999] border-b border-gray-200 shadow-xl overflow-y-auto"
          style={{ top: "4rem", maxHeight: "calc(100vh - 4rem)" }}
        >
          {/* Header */}
          <div className="bg-white px-8 py-4 mt-10">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center gap-3">
  <div className="text-2xl">{productDivisions[selectedDivision].icon}</div>
  <div>
    {/* Title row + small count chip */}
    <div className="flex items-center gap-2">
      <h1 className="text-[22px] md:text-2xl lg:text-[28px] font-extrabold tracking-tight text-slate-900">
        {productDivisions[selectedDivision].title}
      </h1>
      <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full
                       text-[11px] font-semibold bg-slate-100 text-slate-700">
        {productDivisions[selectedDivision].products.length} items
      </span>
    </div>

    {/* Subtle gradient bar under the title */}
    <div className="mt-1 h-1 w-14 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400"></div>

    {/* Description */}
    <p className="mt-2 text-sm md:text-[15px] text-slate-500">
      {productDivisions[selectedDivision].description}
    </p>
  </div>
</div>

              <button
                onClick={closeDivisionOverlay}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold transition-colors duration-200"
              >
                ×
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="bg-white rounded-xl ">
              {/* <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-3">Product Portfolio</h2> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {productDivisions[selectedDivision].products.map((product, index) => {
  const Icon = getProductIcon(product.name);
  return (
    <div
      key={index}
      onClick={() => { navigate(product.link); closeDivisionOverlay(); }}
      className="p-3 rounded-lg hover:bg-blue-500  cursor-pointer transition-all duration-200 border-l-4 border-transparent hover:border-blue-500 group"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-flex w-8 h-8 items-center justify-center
                         rounded-md bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100
                         group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-200 transition">
          <Icon className="text-[14px]" />
        </span>
        <h3 className="text-lg font-bold hover:text-white text-gray-800 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
      </div>

      <p className="text-xs text-gray-600 leading-relaxed">{product.description}</p>

      <div className="mt-1 text-blue-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        →
      </div>
    </div>
  );
})}

              </div>
            </div>
          </div>
        </div>
      )}

{/* Mobile Home */}
            {/* <div className="mb-4">
              <button
className="px-4 py-2 text-lg font-semibold tracking-wide text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                onClick={() => {
                  navigate("/");
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </button>
            </div> */}
{/* Mobile Menu Overlay */}
{isMobileMenuOpen && (
  <div className="fixed inset-0 bg-white z-[9998] md:hidden">
    {/* header row with close */}
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <img
        src={logo}
        alt="Swam"
        className="h-8 w-auto"
        onClick={() => { navigate("/"); setIsMobileMenuOpen(false); }}
      />
      <button
        className="p-2 rounded-lg hover:bg-gray-100"
        onClick={toggleMobileMenu}
        aria-label="Close menu"
      >
        <FaTimes />
      </button>
    </div>

    <div className="px-6 py-4 h-[calc(100vh-64px)] overflow-y-auto mobile-menu">
      {/* Search */}
      <div className="mb-3">
        <button
          className="w-full text-left px-4 py-3 rounded-lg font-bold text-gray-800 hover:text-blue-600 hover:bg-blue-50 flex items-center gap-2"
          onClick={() => { openSearch(); setIsMobileMenuOpen(false); }}
        >
          <FaSearch /> Search Products
        </button>
      </div>

      {/* Products (collapsible) */}
      <div className="mb-2">
        <button
          className="w-full text-left px-4 py-3 rounded-lg font-bold text-gray-800 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between"
          onClick={() => handleDropdownClick("product")}
        >
          Products
          <svg
            className={`w-4 h-4 transition-transform ${activeDropdown === "product" ? "rotate-180" : ""}`}
            viewBox="0 0 20 20" fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        </button>

        {activeDropdown === "product" && (
          <div className="ml-4 mt-2 space-y-1">
            {Object.entries(productDivisions).map(([divisionKey, division]) => (
              <button
                key={divisionKey}
                onClick={() => {
                  handleDivisionClick(divisionKey);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                {division.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Company (collapsible) */}
      <div className="mb-2">
        <button
          className="w-full text-left px-4 py-3 rounded-lg font-bold text-gray-800 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between"
          onClick={() => handleDropdownClick("company")}
        >
          Company
          <svg
            className={`w-4 h-4 transition-transform ${activeDropdown === "company" ? "rotate-180" : ""}`}
            viewBox="0 0 20 20" fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        </button>

        {activeDropdown === "company" && (
          <div className="ml-4 mt-2 space-y-3">
            {dropdownContent.company.sections
.filter((section) => !section.hidden)
.map((section, i) => (
              <div key={i}>
                <p className="px-4 text-sm font-semibold text-gray-500 mb-1">{section.title}</p>
                {(section.links || []).filter(l => !l.hidden).map((link, j) => (

                  <button
                    key={j}
                    onClick={() => { navigate(link.link); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left px-6 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

{/* Contact (collapsible) */}
<div className="mb-2">
  <button
    className="w-full text-left px-4 py-3 rounded-lg font-bold text-gray-800 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between"
    onClick={() => handleDropdownClick("contact")}
  >
    Contact
    <svg
      className={`w-4 h-4 transition-transform ${activeDropdown === "contact" ? "rotate-180" : ""}`}
      viewBox="0 0 20 20" fill="currentColor"
    >
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
    </svg>
  </button>

  {activeDropdown === "contact" && (
    <div className="ml-4 mt-2 space-y-3">
      {dropdownContent.contact.sections.map((section, i) => (
        <div key={i}>
          <p className="px-4 text-sm font-semibold text-gray-500 mb-1">{section.title}</p>
          {(section.links || []).map((link, j) => (
            <button
              key={j}
              onClick={() => { navigate(link.link); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-6 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              {link.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  )}
</div>


      {/* Simple links */}
      <div className="mt-2 space-y-2">
        <button
          onClick={() => { navigate("/application"); setIsMobileMenuOpen(false); }}
          className="w-full text-left px-4 py-3 rounded-lg font-bold text-gray-800 hover:text-blue-600 hover:bg-blue-50"
        >
          Applications
        </button>
        <button
          onClick={() => { navigate("/services"); setIsMobileMenuOpen(false); }}
          className="w-full text-left px-4 py-3 rounded-lg font-bold text-gray-800 hover:text-blue-600 hover:bg-blue-50"
        >
          Services
        </button>
        {/* <button
          onClick={() => { navigate("/contact-us"); setIsMobileMenuOpen(false); }}
          className="w-full text-left px-4 py-3 rounded-lg font-bold text-gray-800 hover:text-blue-600 hover:bg-blue-50"
        >
          Contact Us
        </button> */}
      </div>
    </div>
  </div>
)}
 {/* ← close ONLY the mobile menu here. Nothing else inside it. */}

{/* 🔍 Search modal (outside menus & maps) */}
{isSearchOpen && (
  <div
    className="fixed inset-0 z-[10001] bg-black/50 backdrop-blur-sm flex items-start md:items-center justify-center p-4"
    onClick={closeSearch}
  >
    <div
      className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="text-lg font-bold text-gray-800">Search Products</h3>
        <button onClick={closeSearch} className="p-2 rounded hover:bg-gray-100" aria-label="Close search">
          <FaTimes />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
          <FaSearch className="text-gray-500" />
          <input
  autoFocus
  value={searchQuery}
  onChange={(e) => onSearchChange(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Escape") closeSearch();
    if (e.key === "Enter" && searchResults[0]) {
      navigate(searchResults[0].link);
      closeSearch();
    }
  }}
  type="text"
  placeholder="Type a product name…"
  className="w-full outline-none py-1"
/>

        </div>

        <div className="mt-3 max-h-80 overflow-auto divide-y">
          {searchQuery && searchResults.length === 0 && (
            <div className="p-4 text-sm text-gray-500">No matching products.</div>
          )}
          {searchResults.map((item, i) => (
            <button
              key={i}
              onClick={() => { navigate(item.link); closeSearch(); }}
              className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors"
            >
              <div className="font-semibold text-gray-800">{item.name}</div>
              <div className="text-xs text-gray-500">{item.link}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
)}


    </>
  )
}

export default TopMenu
