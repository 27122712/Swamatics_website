import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaIndustry,
  FaCog,
  FaFan,
  FaCompressArrowsAlt,
  FaTruck,
  FaLeaf,
  FaWind,
  FaBolt,
  FaSearch,
  FaArrowRight,
  FaBookOpen,
  FaLightbulb,
  FaTools,
  FaChartLine,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ProductKnowledgeBase = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };
  
  const handleContactUs = () => {
    // Add your contact navigation logic
    window.location.href = '/contact-us';
  };
  
const onSearchChange = (val) => {
  setSearchQuery(val);

  const q = val.trim().toLowerCase();
  if (!q) {
    setSearchResults([]);
    return;
  }

  // Simple, case-insensitive contains match (limit to 12)
  const results = products
    .filter(p => p.name.toLowerCase().includes(q))
    .slice(0, 12);

  setSearchResults(results);
};
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);

  const productLinks = [
    {
      name: "Rotary Twin Lobe Blowers",
      description:
        "High-efficiency rotary blowers for industrial applications with superior performance and reliability",
      link: "/rotary-piston-blowers",
      category: "blowers",
      icon: FaCog,
      features: ["High Efficiency", "Low Maintenance", "Oil-Free Operation"],
      applications: [
        "Wastewater Treatment",
        "Cement Industry",
        "Chemical Processing",
      ],
    },
    {
      name: "Rotary Tri Lobe Blowers",
      description:
        "Our Tri Lobe Blowers ensure durability, energy savings, and optimal performance across demanding industries.",
      link: "/rotarytrilobeblowers",
      category: "blowers",
      icon: FaCog,
      features: ["Advanced Rotor Design", "Heavy Duty Construction", "Oil-Free Operation"],
      applications: [
        "Wastewater Treatment",
        "Cement Industry",
        "Aquaculture Systems",
      ],
    },
    {
      name: "Process Gas Blowers",
      description:
        "Advanced gas boosters designed for demanding process applications with precise control",
      link: "/process-gas-blowers",
      category: "blowers",
      icon: FaCompressArrowsAlt,
      features: ["Precise Control", "High Pressure", "Corrosion Resistant"],
      applications: ["Petrochemical", "Steel Industry", "Power Generation"],
    },
    {
      name: "Turbo Blowers",
      description:
        "Integrally geared turbo blowers offering superior energy efficiency and performance",
      link: "/turbo-blowers",
      category: "blowers",
      icon: FaFan,
      features: ["Energy Efficient", "Variable Speed", "Low Noise"],
      applications: [
        "Wastewater Treatment",
        "Aeration Systems",
        "Industrial Processes",
      ],
    },
    {
      name: "Screw Blowers",
      description:
        "Tight internal clearances keep slip losses very low, so delivery is smooth, non-pulsating and with lower sound emission.",
      link: "/screwblower",
      category: "blowers",
      icon: FaFan,
      features: ["Oil-Free Operation", "Deep Vacuum Capability", "Immediate Solvent Recovery"],
      applications: [
        "Cement & Lime Industry",
        "Food & Beverage",
        "Power Generation",
      ],
    },
    {
      name: "Super Helical Hybrid Blower",
      description:
        "Innovative hybrid technology combining the best of positive displacement and centrifugal principles",
      link: "/super-helical-hybrid-blower",
      category: "blowers",
      icon: FaCog,
      features: [
        "Hybrid Technology",
        "High Efficiency",
        "Wide Operating Range",
      ],
      applications: ["Water Treatment", "Food Processing", "Pharmaceutical"],
    },
    {
      name: "Truck Blowers",
      description:
        "Specialized blowers designed for mobile applications and transportation industry",
      link: "/truck-blowers",
      category: "blowers",
      icon: FaTruck,
      features: ["Mobile Ready", "Compact Design", "Durable Construction"],
      applications: ["Transportation", "Mobile Units", "Emergency Services"],
    },
    {
      name: "Bio Gas Compressors",
      description:
        "Specialized compressors for biogas applications with enhanced safety features",
      link: "/bio-gas-blowers-compressors",
      category: "compressors",
      icon: FaLeaf,
      features: ["Biogas Compatible", "Safety Certified", "Emission Control"],
      applications: ["Biogas Plants", "Landfill Gas", "Agricultural Waste"],
    },
    {
      name: "Liquid Ring Compressors",
      description:
        "As the impeller rotates, the liquid is centrifuged outward to form a stable liquid ring along the casing wall.",
      link: "/liquidringcompressors",
      category: "compressors",
      icon: FaLeaf,
      features: ["Deep Vacuum Capability", "Oil-Free Operation", "Immediate Solvent Recovery"],
      applications: ["Pulp & Paper Industry", "Chlorine & Vinyl Plants", "Fertilizer Plants"],
    },
    {
      name: "Vacuum Pumps",
      description:
        "Advanced vacuum systems with secondary suction and air injection capabilities",
      link: "/air-injection",
      category: "vacuum",
      icon: FaCompressArrowsAlt,
      features: ["Secondary Suction", "Air Injection", "High Vacuum"],
      applications: ["Chemical Processing", "Food Packaging", "Electronics"],
    },
    {
      name: "Rotary Sliding Vane Compressors",
      description:
        "Reliable rotary vane compressors for various industrial applications",
      link: "/rotary-sliding-vane-compressors",
      category: "compressors",
      icon: FaCog,
      features: ["Oil Lubricated", "Continuous Operation", "Proven Technology"],
      applications: ["Manufacturing", "Automotive", "General Industry"],
    },
    {
      name: "Centrifugal Blowers",
      description:
        "High-performance centrifugal fans and blowers for large-scale applications",
      link: "/centrifugal-fans-blowers",
      category: "blowers",
      icon: FaWind,
      features: ["High Volume", "Low Pressure", "Energy Efficient"],
      applications: [
        "HVAC Systems",
        "Industrial Ventilation",
        "Drying Processes",
      ],
    },
    {
      name: "SR Series Blowers",
      description:
        "Specialized SR series blowers designed for specific industrial requirements",
      link: "/sr-series-blowers",
      category: "blowers",
      icon: FaBolt,
      features: ["Custom Design", "High Performance", "Reliable Operation"],
      applications: [
        "Specialized Processes",
        "Custom Applications",
        "Industrial Systems",
      ],
    },
    {
      name: "Dry Screw Vacuum Pump",
      description:
        "Dry screw vacuum pump with combined variable pitch for high efficiency and reliability.",
      link: "/dry-screw-vacuum-pump",
      category: "vacuum",
      icon: FaCompressArrowsAlt,
      features: ["Oil-Free Operation", "High Efficiency", "Low Maintenance"],
      applications: ["Pharmaceutical", "Chemical Processing", "Food Industry"],
    },
    {
      name: "Liquid Ring Vacuum Pump",
      description:
        "Liquid ring vacuum pump for robust and continuous operation in demanding environments.",
      link: "/liquid-ring-vacuum-pumps",
      category: "vacuum",
      icon: FaCompressArrowsAlt,
      features: ["Continuous Operation", "Corrosion Resistant", "Low Noise"],
      applications: ["Paper Industry", "Power Plants", "Petrochemical"],
    },

    {
      name: "Oil Vane Vacuum Pump",
      description:
        "Reliable oil vane vacuum pump for versatile industrial applications.",
      link: "/oil-vane-vacuum-pump-2",
      category: "vacuum",
      icon: FaCompressArrowsAlt,
      features: ["Compact Design", "High Performance", "Durable"],
      applications: ["Laboratories", "Medical Equipment", "Packaging"],
    },
    {
      name: "Mechanical Vacuum Boosters",
      description:
        "Mechanical vacuum boosters for enhanced vacuum performance and efficiency.",
      link: "/mechanical-vacuum-boosters",
      category: "vacuum",
      icon: FaCompressArrowsAlt,
      features: ["Boosted Vacuum", "Energy Efficient", "Reliable Operation"],
      applications: ["Vacuum Furnaces", "Freeze Drying", "Coating"],
    },
    {
      name: "Claw Vacuum",
      description:
        "Inside the housing, two claw-shaped rotors rotate in opposite directions.",
      link: "/clawvacuum",
      category: "vacuum",
      icon: FaCompressArrowsAlt,
      features: ["Combined Variable Pitch Technology", "Oil-Free Operation", "Deep Vacuum Capability"],
      applications: ["Wastewater Treatment Aeration", "Food Industry-MAP", "Pharmaceutical Freeze Drying"],
    },
    {
      name: "MVR Blowers",
      description:
        "Mechanical vapor recompression (MVR) blowers for energy-saving evaporation processes.",
      link: "/mvr-blowers",
      category: "blowers",
      icon: FaFan,
      features: ["Energy Saving", "High Capacity", "Low Noise"],
      applications: ["Evaporation", "Distillation", "Wastewater Treatment"],
    },
    {
      name: "Vacuum Systems And Packages",
      description:
        "Integrated vacuum systems and packages for turnkey industrial solutions.",
      link: "/vacuum-systems-and-packages",
      category: "vacuum",
      icon: FaCompressArrowsAlt,
      features: ["Turnkey Solution", "Customizable", "Efficient"],
      applications: [
        "Industrial Plants",
        "Process Engineering",
        "Manufacturing",
      ],
    },
    {
      name: "Condenser Exhausters",
      description:
        "Condenser exhausters for efficient removal of air and gases from condensers.",
      link: "/condenser-exhausters",
      category: "vacuum",
      icon: FaCompressArrowsAlt,
      features: [
        "Efficient Air Removal",
        "Robust Design",
        "Continuous Operation",
      ],
      applications: ["Power Plants", "Chemical Industry", "Refineries"],
    },
    // {
    //   name: "Shell And Tube Type",
    //   description:
    //     "Shell and tube type heat exchangers for effective heat transfer in industrial processes.",
    //   link: "/shell-and-tube-type-heat-exchangers",
    //   category: "other",
    //   icon: FaCog,
    //   features: ["High Heat Transfer", "Durable Construction", "Customizable"],
    //   applications: ["Chemical Processing", "Oil & Gas", "HVAC"],
    // },
    // {
    //   name: "Acoustic Enclosures & Silencers",
    //   description:
    //     "Acoustic enclosures and silencers for noise reduction in industrial environments.",
    //   link: "/acoustic-enclosures-and-silencers",
    //   category: "other",
    //   icon: FaCog,
    //   features: ["Noise Reduction", "Custom Design", "Easy Installation"],
    //   applications: ["Industrial Plants", "Power Generation", "Manufacturing"],
    // },
  ];
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
  const categories = [
    { id: "all", name: "All Products", icon: FaIndustry },
    { id: "blowers", name: "Blowers", icon: FaFan },
    { id: "compressors", name: "Compressors", icon: FaCompressArrowsAlt },
    { id: "vacuum", name: "Vacuum Systems", icon: FaCompressArrowsAlt },
  ];

  const filteredProducts = productLinks.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Filtered suggestions for autocomplete
  const suggestions = searchTerm
    ? productLinks.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Handle keyboard navigation in suggestions
  const handleInputKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === "ArrowDown") {
      setActiveSuggestion((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
      setShowSuggestions(true);
    } else if (e.key === "ArrowUp") {
      setActiveSuggestion((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
      setShowSuggestions(true);
    } else if (e.key === "Enter") {
      if (activeSuggestion >= 0 && activeSuggestion < suggestions.length) {
        setSearchTerm(suggestions[activeSuggestion].name);
        setActiveSuggestion(-1);
        setShowSuggestions(false);
        inputRef.current?.blur();
      }
    } else if (e.key === "Escape") {
      setActiveSuggestion(-1);
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    if (inputRef.current && searchTerm && showSuggestions) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "absolute",
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        zIndex: 9999,
      });
    }
  }, [searchTerm, showSuggestions]);

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 mt-10 lg:py-20 lg:mt-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                <FaBookOpen className="text-4xl text-blue-400 drop-shadow-lg" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              Product Knowledge Base
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Comprehensive guide to our industrial equipment portfolio.
              Discover cutting-edge solutions for your manufacturing and
              processing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
              <div className="relative max-w-md w-full">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-lg pointer-events-none z-10" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setActiveSuggestion(-1);
                    setShowSuggestions(true);
                  }}
                  onKeyDown={handleInputKeyDown}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() =>
                    setTimeout(() => setShowSuggestions(false), 120)
                  }
                  className="w-full pl-12 pr-10 py-4 bg-white bg-opacity-80 backdrop-blur-sm border border-white border-opacity-30 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                  autoComplete="off"
                />
                {searchTerm && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 text-xl focus:outline-none z-20 bg-white bg-opacity-70 rounded-full p-1"
                    onClick={() => {
                      setSearchTerm("");
                      setActiveSuggestion(-1);
                      setShowSuggestions(false);
                      inputRef.current?.focus();
                    }}
                  >
                    <IoMdClose />
                  </button>
                )}
                {/* Autocomplete Suggestions rendered in a portal */}
                {searchTerm &&
                  showSuggestions &&
                  typeof window !== "undefined" &&
                  ReactDOM.createPortal(
                    <div
                      style={dropdownStyle}
                      className="bg-white rounded-xl shadow-lg border border-gray-200 max-h-60 overflow-y-auto"
                    >
                      {suggestions.length === 0 ? (
                        <div className="px-4 py-3 text-gray-400 text-sm">
                          No suggestions found
                        </div>
                      ) : (
                        suggestions.slice(0, 6).map((product, idx) => {
                          const matchIndex = product.name
                            .toLowerCase()
                            .indexOf(searchTerm.toLowerCase());
                          let before = product.name.slice(0, matchIndex);
                          let match = product.name.slice(
                            matchIndex,
                            matchIndex + searchTerm.length
                          );
                          let after = product.name.slice(
                            matchIndex + searchTerm.length
                          );
                          return (
                            <button
                              key={idx}
                              type="button"
                              className={`w-full text-left px-4 py-3 rounded-xl transition-colors duration-200 flex items-center gap-2 ${
                                idx === activeSuggestion
                                  ? "bg-blue-100"
                                  : "hover:bg-blue-50"
                              }`}
                              style={{
                                color:
                                  idx === activeSuggestion
                                    ? "#1e40af"
                                    : "#64748b",
                              }}
                              onMouseEnter={() => setActiveSuggestion(idx)}
                              onMouseLeave={() => setActiveSuggestion(-1)}
                              onClick={() => {
                                setSearchTerm(product.name);
                                setActiveSuggestion(-1);
                                setShowSuggestions(false);
                              }}
                            >
                              <span className="text-base">
                                {before}
                                <span className="font-bold text-blue-900">
                                  {match}
                                </span>
                                {after}
                              </span>
                            </button>
                          );
                        })
                      )}
                    </div>,
                    document.body
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                }`}
              >
                <category.icon className="text-lg" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2"
                >
                  {/* Product Header */}
                  <div className="relative h-32 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 group-hover:from-blue-600/20 group-hover:to-indigo-600/20 transition-all duration-500"></div>
                    <div className="relative z-10 flex flex-col items-center w-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        <product.icon className="text-3xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300 mt-4">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <FaLightbulb className="text-blue-500" />
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <FaTools className="text-green-500" />
                        Applications
                      </h4>
                      <div className="flex flex-wrap mb- gap-2">
                        {product.applications.map((app, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={product.link}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 group"
                    >
                      <span>Learn More</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-10 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <FaChartLine className="text-3xl text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our team of experts is ready to help you find the perfect
              industrial solution for your specific requirements. Get in touch
              for personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                <span>Contact Our Experts</span>
                <FaArrowRight />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Request Quote</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <div className="py-10 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Partner with Global Excellence</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in our journey towards global leadership. Whether you're looking for new requirements or partnership
            opportunities, we're here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={openSearch}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Explore Products
            </button>
            <button
              onClick={handleContactUs}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onKeyDown={(e) => {
  if (e.key === "Escape") return closeSearch();
  if (e.key === "Enter" && searchResults[0]) {
    window.location.href = searchResults[0].link;
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
                    onClick={() => {
                      window.location.href = item.link
                      closeSearch()
                    }}
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
    </MainTemplate>
  );
};

export default ProductKnowledgeBase;
