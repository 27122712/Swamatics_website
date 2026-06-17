import React, { useState, useMemo } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import {
  FaEye,
  FaBullseye,
  FaLeaf,
  FaShieldAlt,
  FaCogs,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaGlobe,
  FaAward,
  FaTools,
  FaCheckCircle,
  FaHeart,
  FaRocket,
  FaCertificate,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

const MissionVision = () => {
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

  const missionPoints = useMemo(
    () => [
      {
        icon: <FaLeaf className="text-green-600" />,
        title: t("missionVision.missionPoints.environmentalAwareness.title"),
        description: t(
          "missionVision.missionPoints.environmentalAwareness.description"
        ),
      },
      {
        icon: <FaShieldAlt className="text-blue-600" />,
        title: t("missionVision.missionPoints.safeWorkingEnvironment.title"),
        description: t(
          "missionVision.missionPoints.safeWorkingEnvironment.description"
        ),
      },
      {
        icon: <FaCogs className="text-purple-600" />,
        title: t("missionVision.missionPoints.manufacturingExcellence.title"),
        description: t(
          "missionVision.missionPoints.manufacturingExcellence.description"
        ),
      },
      {
        icon: <FaTools className="text-orange-600" />,
        title: t("missionVision.missionPoints.stateOfTheArtEngineering.title"),
        description: t(
          "missionVision.missionPoints.stateOfTheArtEngineering.description"
        ),
      },
      {
        icon: <FaUsers className="text-indigo-600" />,
        title: t("missionVision.missionPoints.customerFocus.title"),
        description: t("missionVision.missionPoints.customerFocus.description"),
      },
      {
        icon: <FaLightbulb className="text-yellow-600" />,
        title: t("missionVision.missionPoints.productDevelopment.title"),
        description: t(
          "missionVision.missionPoints.productDevelopment.description"
        ),
      },
    ],
    [t]
  );

  const visionPoints = useMemo(
    () => [
      {
        icon: <FaHandshake className="text-blue-600" />,
        title: t("missionVision.visionPoints.customerPartnership.title"),
        description: t(
          "missionVision.visionPoints.customerPartnership.description"
        ),
      },
      {
        icon: <FaLightbulb className="text-purple-600" />,
        title: t("missionVision.visionPoints.innovationFlexibility.title"),
        description: t(
          "missionVision.visionPoints.innovationFlexibility.description"
        ),
      },
      {
        icon: <FaGlobe className="text-green-600" />,
        title: t("missionVision.visionPoints.internationalStandards.title"),
        description: t(
          "missionVision.visionPoints.internationalStandards.description"
        ),
      },
      {
        icon: <FaAward className="text-red-600" />,
        title: t("missionVision.visionPoints.qualityControl.title"),
        description: t("missionVision.visionPoints.qualityControl.description"),
      },
      {
        icon: <FaCheckCircle className="text-indigo-600" />,
        title: t("missionVision.visionPoints.approvedComponents.title"),
        description: t(
          "missionVision.visionPoints.approvedComponents.description"
        ),
      },
    ],
    [t]
  );

  const coreValues = useMemo(
    () => [
      {
        title: t("missionVision.coreValues.integrity.title"),
        color: "from-blue-600 to-blue-800",
        icon: <FaHeart size={32} />,
        description: t("missionVision.coreValues.integrity.description"),
        highlights: [
          t("missionVision.coreValues.integrity.highlights.transparency"),
          t("missionVision.coreValues.integrity.highlights.ethics"),
          t("missionVision.coreValues.integrity.highlights.trust"),
        ],
      },
      {
        title: t("missionVision.coreValues.highQuality.title"),
        color: "from-green-600 to-green-800",
        icon: <FaCertificate size={32} />,
        description: t("missionVision.coreValues.highQuality.description"),
        highlights: [
          t("missionVision.coreValues.highQuality.highlights.excellence"),
          t("missionVision.coreValues.highQuality.highlights.standards"),
          t("missionVision.coreValues.highQuality.highlights.precision"),
        ],
      },
      {
        title: t("missionVision.coreValues.reliability.title"),
        color: "from-purple-600 to-purple-800",
        icon: <FaShieldAlt size={32} />,
        description: t("missionVision.coreValues.reliability.description"),
        highlights: [
          t("missionVision.coreValues.reliability.highlights.consistency"),
          t("missionVision.coreValues.reliability.highlights.dependability"),
          t("missionVision.coreValues.reliability.highlights.performance"),
        ],
      },
      {
        title: t("missionVision.coreValues.innovation.title"),
        color: "from-orange-600 to-red-600",
        icon: <FaRocket size={32} />,
        description: t("missionVision.coreValues.innovation.description"),
        highlights: [
          t("missionVision.coreValues.innovation.highlights.technology"),
          t("missionVision.coreValues.innovation.highlights.creativity"),
          t("missionVision.coreValues.innovation.highlights.progress"),
        ],
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

  return (
    <MainTemplate>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative container mx-auto px-4 py-14 md:py-20 mt-6 md:mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl mt-5 md:text-6xl font-bold leading-tight">
                  {t("missionVision.hero.title")}
                </h1>
                <p className="text-base sm:text-lg md:text-2xl text-blue-100 leading-relaxed">
                  {t("missionVision.hero.description")}
                </p>
                <div className="flex space-x-3 text-xs sm:text-sm md:text-base">
                  <span className="flex items-center space-x-2">
                    <FaGlobe className="text-blue-300" />
                    <span>{t("missionVision.hero.globalExcellence")}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <FaAward className="text-blue-300" />
                    <span>{t("missionVision.hero.qualityDriven")}</span>
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md h-64 sm:h-72 md:h-80 bg-gray-300 rounded-2xl shadow-2xl flex items-center justify-center">
                  <img
                    // src="https://swamatics.com/wp-content/uploads/2024/02/4.png"
                    src="/images/extra/6.png"
                    alt="Mission Vision"
                    className="w-full h-full object-contain md:object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-7 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-5">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <FaBullseye size={40} className="text-blue-600" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                {t("missionVision.mission.title")}
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-relaxed mb-4 md:mb-5">
                  {t("missionVision.mission.description1")}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  {t("missionVision.mission.description2")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-xl border border-gray-100">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl">{point.icon}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Image */}
            {/* <div className="text-center">
  <div className="w-full max-w-3xl mx-auto flex items-center justify-center shadow-lg rounded-2xl overflow-hidden">
    <img 
      src="/images/Our_mission.jpg" 
      alt="Our Mission" 
      className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain"
    />
  </div>
</div> */}
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-5 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-5">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-100 rounded-full">
                  <FaEye size={40} className="text-purple-600" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                {t("missionVision.vision.title")}
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  {t("missionVision.vision.description1")}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  {t("missionVision.vision.description2")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-xl border border-gray-200">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-100 rounded-full mb-4 sm:mb-6">
                      <div className="text-xl sm:text-2xl">{point.icon}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision Image */}
            {/* <div className="text-center">
  <div className="w-full max-w-3xl mx-auto flex items-center justify-center shadow-lg rounded-2xl overflow-hidden">
    <img 
      src="/images/Our_vision.jpg" 
      alt="Our Vision" 
      className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain"
    />
  </div>
</div> */}
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-5 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-5">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-sky-200 to-violet-200 rounded-full shadow-md">
                  <FaStar size={40} className="text-sky-700" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">
                {t("missionVision.coreValuesSection.title")}
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
                {t("missionVision.coreValuesSection.description")}
              </p>

              <div className="flex justify-center mt-8">
                <div className="w-24 h-1 bg-gradient-to-r from-sky-300 to-violet-300 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
              {coreValues.map((value, index) => {
                // --- light palettes per block (rotates every 4) ---
                const bg =
                  index % 4 === 0
                    ? "from-sky-50 to-sky-100"
                    : index % 4 === 1
                    ? "from-emerald-50 to-emerald-100"
                    : index % 4 === 2
                    ? "from-amber-50 to-amber-100"
                    : "from-violet-50 to-violet-100";

                const ring =
                  index % 4 === 0
                    ? "ring-sky-200"
                    : index % 4 === 1
                    ? "ring-emerald-200"
                    : index % 4 === 2
                    ? "ring-amber-200"
                    : "ring-violet-200";

                const accent1 =
                  index % 4 === 0
                    ? "bg-sky-200/40"
                    : index % 4 === 1
                    ? "bg-emerald-200/40"
                    : index % 4 === 2
                    ? "bg-amber-200/40"
                    : "bg-violet-200/40";

                const accent2 =
                  index % 4 === 0
                    ? "bg-sky-200/30"
                    : index % 4 === 1
                    ? "bg-emerald-200/30"
                    : index % 4 === 2
                    ? "bg-amber-200/30"
                    : "bg-violet-200/30";

                const iconColor =
                  index % 4 === 0
                    ? "text-sky-700"
                    : index % 4 === 1
                    ? "text-emerald-700"
                    : index % 4 === 2
                    ? "text-amber-700"
                    : "text-violet-700";

                const dotColor =
                  index % 4 === 0
                    ? "bg-sky-500"
                    : index % 4 === 1
                    ? "bg-emerald-500"
                    : index % 4 === 2
                    ? "bg-amber-500"
                    : "bg-violet-500";

                const underlineFrom =
                  index % 4 === 0
                    ? "from-sky-300"
                    : index % 4 === 1
                    ? "from-emerald-300"
                    : index % 4 === 2
                    ? "from-amber-300"
                    : "from-violet-300";

                const underlineTo =
                  index % 4 === 0
                    ? "to-sky-400"
                    : index % 4 === 1
                    ? "to-emerald-400"
                    : index % 4 === 2
                    ? "to-amber-400"
                    : "to-violet-400";

                return (
                  <div
                    key={index}
                    className="group hover:scale-[1.02] transition-all duration-500"
                  >
                    <div
                      className={`bg-gradient-to-br ${bg} rounded-3xl p-4 md:p-5 text-slate-800 shadow-lg hover:shadow-xl transform transition-all duration-500 relative overflow-hidden ring-1 ${ring}`}
                    >
                      {/* Light background accents */}
                      <div
                        className={`absolute top-0 right-0 w-32 h-32 ${accent1} rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500`}
                      />
                      <div
                        className={`absolute bottom-0 left-0 w-24 h-24 ${accent2} rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500`}
                      />

                      <div className="relative z-10">
                        {/* Icon + Title */}
                        <div className="flex items-start space-x-4 sm:space-x-6 mb-5 sm:mb-6">
                          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-sm border border-white/60 bg-white">
                            <div className={iconColor}>{value.icon}</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1.5 sm:mb-2 text-slate-900">
                              {value.title}
                            </h3>
                            <div
                              className={`w-16 h-1 bg-gradient-to-r ${underlineFrom} ${underlineTo} rounded-full`}
                            />
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-5 sm:mb-6">
                          {value.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-3">
                          <div className="flex items-center text-slate-700 mb-4">
                            <FaQuoteLeft
                              size={16}
                              className="mr-2 text-slate-500"
                            />
                            <span className="text-sm font-medium">
                              {t(
                                "missionVision.coreValuesSection.keyFocusAreas"
                              )}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {value.highlights.map((highlight, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2 bg-white rounded-full px-3 py-1.5 border border-white/70 shadow-sm"
                              >
                                <div
                                  className={`w-2 h-2 rounded-full ${dotColor}`}
                                />
                                <span className="text-xs sm:text-sm font-medium text-slate-700">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Growth Statement */}
        <div className="py-7 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              {t("missionVision.partnership.title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
              {t("missionVision.partnership.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={openSearch}
                className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {t("missionVision.partnership.exploreProducts")}
              </button>
              <button
                onClick={handleContactUs}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {t("missionVision.partnership.contactUs")}
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
                  {t("missionVision.search.title")}
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
                    placeholder={t("missionVision.search.placeholder")}
                    className="w-full outline-none py-1"
                  />
                </div>

                <div className="mt-3 max-h-[70svh] overflow-auto divide-y">
                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-4 text-sm text-gray-500">
                      {t("missionVision.search.noResults")}
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

export default MissionVision;
