import React, { useState, useMemo } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import {
  FaBuilding,
  FaIndustry,
  FaCog,
  FaTruck,
  FaGlobe,
  FaAward,
  FaRocket,
  FaTools,
  FaCertificate,
  FaChartLine,
  FaUsers,
  FaFlag,
  FaStar,
  FaLightbulb,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";
import {
  MdFactory,
  MdPrecisionManufacturing,
  MdTrendingUp,
} from "react-icons/md";
import { GiTurbine, GiVacuumCleaner, GiGears, GiFactory } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi";
import { BsGraphUp, BsAward } from "react-icons/bs";

const History = () => {
  const { t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleContactUs = () => {
    // Add your contact navigation logic
    window.location.href = "/contact-us";
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
      .filter((p) => p.name.toLowerCase().includes(q))
      .slice(0, 12);

    setSearchResults(results);
  };

  const timelineData = useMemo(
    () => [
      {
        year: "1978",
        title: t("history.timeline.1978.title"),
        description: t("history.timeline.1978.description"),
        icon: <FaBuilding className="w-6 h-6" />,
        color: "bg-blue-500",
        bgPattern: "from-blue-500 to-blue-600",
      },
      {
        year: "1982",
        title: t("history.timeline.1982.title"),
        description: t("history.timeline.1982.description"),
        icon: <FaBuilding className="w-6 h-6" />,
        color: "bg-green-500",
        bgPattern: "from-green-500 to-green-600",
      },
      {
        year: "1996",
        title: t("history.timeline.1996.title"),
        description: t("history.timeline.1996.description"),
        icon: <FaChartLine className="w-6 h-6" />,
        color: "bg-purple-500",
        bgPattern: "from-purple-500 to-purple-600",
      },
      {
        year: "2000",
        title: t("history.timeline.2000.title"),
        description: t("history.timeline.2000.description"),
        icon: <FaCertificate className="w-6 h-6" />,
        color: "bg-orange-500",
        bgPattern: "from-orange-500 to-orange-600",
      },
      {
        year: "2002",
        title: t("history.timeline.2002.title"),
        description: t("history.timeline.2002.description"),
        icon: <MdFactory className="w-6 h-6" />,
        color: "bg-red-500",
        bgPattern: "from-red-500 to-red-600",
      },
      {
        year: "2003",
        title: t("history.timeline.2003.title"),
        description: t("history.timeline.2003.description"),
        icon: <FaIndustry className="w-6 h-6" />,
        color: "bg-indigo-500",
        bgPattern: "from-indigo-500 to-indigo-600",
      },
      {
        year: "2004",
        title: t("history.timeline.2004.title"),
        description: t("history.timeline.2004.description"),
        icon: <GiVacuumCleaner className="w-6 h-6" />,
        color: "bg-teal-500",
        bgPattern: "from-teal-500 to-teal-600",
      },
      {
        year: "2005",
        title: t("history.timeline.2005.title"),
        description: t("history.timeline.2005.description"),
        icon: <FaAward className="w-6 h-6" />,
        color: "bg-pink-500",
        bgPattern: "from-pink-500 to-pink-600",
      },
      {
        year: "2006",
        title: t("history.timeline.2006.title"),
        description: t("history.timeline.2006.description"),
        icon: <FaCog className="w-6 h-6" />,
        color: "bg-yellow-500",
        bgPattern: "from-yellow-500 to-yellow-600",
      },
      {
        year: "2009",
        title: t("history.timeline.2009.title"),
        description: t("history.timeline.2009.description"),
        icon: <FaTruck className="w-6 h-6" />,
        color: "bg-cyan-500",
        bgPattern: "from-cyan-500 to-cyan-600",
      },
      {
        year: "2010",
        title: t("history.timeline.2010.title"),
        description: t("history.timeline.2010.description"),
        icon: <MdPrecisionManufacturing className="w-6 h-6" />,
        color: "bg-emerald-500",
        bgPattern: "from-emerald-500 to-emerald-600",
      },
      {
        year: "2012",
        title: t("history.timeline.2012.title"),
        description: t("history.timeline.2012.description"),
        icon: <FaTools className="w-6 h-6" />,
        color: "bg-violet-500",
        bgPattern: "from-violet-500 to-violet-600",
      },
      {
        year: "2014",
        title: t("history.timeline.2014.title"),
        description: t("history.timeline.2014.description"),
        icon: <FaGlobe className="w-6 h-6" />,
        color: "bg-rose-500",
        bgPattern: "from-rose-500 to-rose-600",
      },
      {
        year: "2015",
        title: t("history.timeline.2015.title"),
        description: t("history.timeline.2015.description"),
        icon: <FaGlobe className="w-6 h-6" />,
        color: "bg-amber-500",
        bgPattern: "from-amber-500 to-amber-600",
      },
      {
        year: "2016",
        title: t("history.timeline.2016.title"),
        description: t("history.timeline.2016.description"),
        icon: <GiTurbine className="w-6 h-6" />,
        color: "bg-lime-500",
        bgPattern: "from-lime-500 to-lime-600",
      },
    ],
    [t]
  );

  const growthPrinciples = useMemo(
    () => [
      {
        name: t("history.growthPrinciples.integrity"),
        icon: <FaShieldAlt className="w-8 h-8" />,
        color: "from-blue-500 to-blue-600",
      },
      {
        name: t("history.growthPrinciples.highQuality"),
        icon: <BsAward className="w-8 h-8" />,
        color: "from-green-500 to-green-600",
      },
      {
        name: t("history.growthPrinciples.reliability"),
        icon: <FaHandshake className="w-8 h-8" />,
        color: "from-purple-500 to-purple-600",
      },
      {
        name: t("history.growthPrinciples.innovation"),
        icon: <FaLightbulb className="w-8 h-8" />,
        color: "from-orange-500 to-orange-600",
      },
      {
        name: t("history.growthPrinciples.worldBestPractices"),
        icon: <FaGlobe className="w-8 h-8" />,
        color: "from-teal-500 to-teal-600",
      },
      {
        name: t("history.growthPrinciples.highestStandards"),
        icon: <FaStar className="w-8 h-8" />,
        color: "from-pink-500 to-pink-600",
      },
      {
        name: t("history.growthPrinciples.customerRequirements"),
        icon: <FaUsers className="w-8 h-8" />,
        color: "from-indigo-500 to-indigo-600",
      },
    ],
    [t]
  );
  const products = [
    { name: "Rotary Twin Lobe Blowers", link: "/rotary-piston-blowers" },
    { name: "Rotary Tri Lobe Blowers", link: "/rotarytrilobeblowers" },
    { name: "Process Gas Blowers", link: "/process-gas-blowers" },
    { name: "Turbo Blowers", link: "/turbo-blowers" },
    {
      name: "Super Helical Hybrid Blower",
      link: "/super-helical-hybrid-blower",
    },
    { name: "Truck Blowers", link: "/truck-blowers" },
    { name: "Bio Gas Compressors", link: "/bio-gas-blowers-compressors" },
    { name: "Dry Vacuum Pumps", link: "/air-injection" },
    {
      name: "Rotary Sliding Vane Compressors",
      link: "/rotary-sliding-vane-compressors",
    },
    { name: "Centrifugal Fans & Blowers", link: "/centrifugal-fans-blowers" },
    { name: "SR Series Blowers", link: "/sr-series-blowers" },
    { name: "Dry Screw Vacuum Pump", link: "/dry-screw-vacuum-pump" },
    { name: "Liquid Ring Vacuum Pumps", link: "/liquid-ring-vacuum-pumps" },
    { name: "Oil Vane Vacuum Pump", link: "/oil-vane-vacuum-pump-2" },
    { name: "Mechanical Vacuum Boosters", link: "/mechanical-vacuum-boosters" },
    { name: "MVR Blowers", link: "/mvr-blowers" },
    {
      name: "Vacuum Systems and Packages",
      link: "/vacuum-systems-and-packages",
    },
    { name: "Condenser Exhausters", link: "/condenser-exhausters" },
    { name: "Claw Vacuum", link: "/clawvacuum" },
    { name: "Liquid ring compressors", link: "/liquidringcompressors" },
    { name: "Screw blower", link: "/screwblower" },
  ];

  // const statistics = [
  //   {
  //     number: "45+",
  //     label: "Years of Excellence",
  //     icon: <FaFlag className="w-8 h-8" />,
  //     color: "from-blue-500 to-blue-600",
  //   },
  //   {
  //     number: "5",
  //     label: "Manufacturing Plants",
  //     icon: <GiFactory className="w-8 h-8" />,
  //     color: "from-green-500 to-green-600",
  //   },
  //   {
  //     number: "25+",
  //     label: "Countries",
  //     icon: <FaGlobe className="w-8 h-8" />,
  //     color: "from-purple-500 to-purple-600",
  //   },
  //   {
  //     number: "1,20,000 m3/hr",
  //     label: "Blower Capacity",
  //     icon: <GiTurbine className="w-8 h-8" />,
  //     color: "from-orange-500 to-orange-600",
  //   },
  // ];

  return (
    <MainTemplate>
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 -left-20 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-15 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-green-100 to-teal-100 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>

          {/* Geometric Patterns */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rotate-45 opacity-30 animate-spin-slow"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rotate-45 opacity-30 animate-spin-slow animation-delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-green-400 rotate-45 opacity-30 animate-spin-slow animation-delay-2000"></div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-14 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* Hero Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-white rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-10 right-1/3 w-12 h-12 border-2 border-white rounded-full animate-pulse animation-delay-3000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6 md:mb-8 mt-6 md:mt-10">
              <div className="relative">
                <FaRocket className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-blue-300 animate-bounce" />
                <HiSparkles className="absolute -top-1.5 -right-1.5 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-300 animate-pulse" />
                <HiSparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-blue-200 animate-pulse animation-delay-500" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
              {t("history.hero.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                {t("history.hero.titleHighlight")}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
              {t("history.hero.description")}
            </p>

            {/* Animated Progress Bar */}
            <div className="max-w-md mx-auto">
              <div className="bg-blue-800 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-300 to-cyan-300 h-full w-full animate-pulse"></div>
              </div>
              <p className="text-blue-200 text-sm mt-2">
                {t("history.hero.yearsOfInnovation")}
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        {/* <div className="relative -mt-16 z-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 border-l-4 border-blue-500"
                >
                  <div
                    className={`bg-gradient-to-r ${stat.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${stat.color} h-2 rounded-full animate-pulse`}
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Timeline Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 relative bg-white">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <MdTrendingUp className="w-16 h-16 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              {t("history.timelineSection.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t("history.timelineSection.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("history.timelineSection.description")}
            </p>
            <div className="mt-8 flex justify-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-400"></div>
            </div>
          </div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Mobile timeline line (left) */}
            <div className="absolute md:hidden left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 rounded-full"></div>

            {/* Desktop timeline line (center) */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 rounded-full shadow-lg"></div>

            {/* Decorative elements along timeline */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full animate-pulse"></div>
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full animate-pulse"></div>

            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row md:items-center mb-8 md:mb-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline content */}
                <div
                  className={`w-full md:w-5/12
              ${
                index % 2 === 0
                  ? "md:pr-8 md:text-right"
                  : "md:pl-8 md:text-left"
              }
              pl-10 md:pl-0 text-left`}
                >
                  <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden">
                    {/* Background pattern for card */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <GiGears className="w-full h-full transform rotate-12" />
                    </div>

                    <div className="flex items-center mb-6">
                      <div
                        className={`bg-gradient-to-r ${
                          item.bgPattern
                        } text-white p-4 rounded-2xl mr-4 shadow-lg transform hover:rotate-12 transition-transform duration-300 ${
                          index % 2 !== 0 ? "order-2 ml-4 mr-0" : ""
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div className={index % 2 !== 0 ? "order-1" : ""}>
                        <div className="flex items-center">
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                            {item.year}
                          </h3>
                          <HiSparkles className="w-6 h-6 text-yellow-400 ml-2 animate-pulse" />
                        </div>
                        <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {item.description}
                    </p>

                    {/* Decorative bottom border */}
                    <div
                      className={`mt-6 h-1 bg-gradient-to-r ${item.bgPattern} rounded-full`}
                    ></div>
                  </div>
                </div>

                {/* Enhanced Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-8 h-8 bg-white border-4 border-blue-500 rounded-full shadow-xl"></div>
                  <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Empty space on the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Growth Principles Section */}
        <div className="bg-white py-5 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <BsGraphUp className="w-20 h-20 text-blue-600" />
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <HiSparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                {t("history.growthPhilosophy.title")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {t("history.growthPhilosophy.titleHighlight")}
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t("history.growthPhilosophy.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {growthPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden group"
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                    <FaIndustry className="w-full h-full transform rotate-12" />
                  </div>

                  <div className="relative">
                    <div
                      className={`bg-gradient-to-br ${principle.color} text-white w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}
                    >
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      {principle.name}
                    </h3>
                    <div
                      className={`w-20 h-1 bg-gradient-to-r ${principle.color} mx-auto rounded-full`}
                    ></div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Closing Section */}
        <div className="py-10 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              {t("history.cta.title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
              {t("history.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={openSearch}
                className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {t("history.cta.exploreProducts")}
              </button>
              <button
                onClick={handleContactUs}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {t("history.cta.contactUs")}
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
              className="w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <h3 className="text-lg font-bold text-gray-800">
                  {t("history.search.title")}
                </h3>
                <button
                  onClick={closeSearch}
                  className="p-2 rounded hover:bg-gray-100"
                  aria-label="Close search"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                    placeholder={t("history.search.placeholder")}
                    className="w-full outline-none py-1"
                  />
                </div>

                <div className="mt-3 max-h-[70svh] overflow-auto divide-y">
                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-4 text-sm text-gray-500">
                      {t("history.search.noResults")}
                    </div>
                  )}
                  {searchResults.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        window.location.href = item.link;
                        closeSearch();
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-semibold text-gray-800">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">{item.link}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainTemplate>
  );
};

export default History;
