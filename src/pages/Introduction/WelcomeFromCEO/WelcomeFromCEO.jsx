import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import {
  FaIndustry,
  FaGlobeAmericas,
  FaAward,
  FaLeaf,
  FaUsers,
  FaHandshake,
  FaQuoteLeft,
  FaQuoteRight,
  FaLinkedin,
  FaEnvelope,
  FaBuilding,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const WelcomeFromCEO = () => {
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
  // Add this under your useState hooks
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

  const handleContactUs = () => {
    // Add your contact navigation logic
    window.location.href = "/contact-us";
  };

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-10 "></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400 rounded-full opacity-10 "></div>
          </div>

          <div className="relative container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-14 md:pb-20">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
                {t("welcomeFromCEO.hero.title")}
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                {t("welcomeFromCEO.hero.subtitle")}
              </p>
              <div className="mt-6 sm:mt-8 flex justify-center items-center space-x-3 sm:space-x-4">
                <FaIndustry className="text-2xl sm:text-3xl text-blue-300" />
                <div className="w-12 sm:w-16 h-0.5 bg-blue-300"></div>
                <FaGlobeAmericas className="text-2xl sm:text-3xl text-blue-300" />
                <div className="w-12 sm:w-16 h-0.5 bg-blue-300"></div>
                <FaAward className="text-2xl sm:text-3xl text-blue-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Leadership Section */}
        <div className="relative py-10 bg-white overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 bg-white">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 "></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-200 rounded-full opacity-20 "></div>
          </div>

          <div className="relative container mx-auto px-4 md:px-6">
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-2 mb-4">
                <FaUsers className="text-3xl text-blue-600" />
                <span className="text-lg font-semibold text-blue-600 uppercase tracking-wide">
                  {t("welcomeFromCEO.leadership.title")}
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                {t("welcomeFromCEO.leadership.heading")}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {t("welcomeFromCEO.leadership.headingHighlight")}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("welcomeFromCEO.leadership.description")}
              </p>
              <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            {/* Leadership Cards */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
              {/* Managing Director */}
              <div className="group relative">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 border border-gray-100">
                  {/* Card Header with Image */}
                  <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 overflow-hidden">
                    <img
                      src="/new_images/ABHISHEK.png"
                      alt="Mr. Abhishek Gambhir"
                      className="w-full h-full object-contain sm:object-cover object-top bg-black/10 transition-transform duration-500 group-hover:sm:scale-110"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

                    {/* Floating Badge */}
                    <div
                      className="absolute top-2 left-2 sm:top-3 sm:left-3
                md:top-6 md:right-6 md:left-auto z-10
                bg-white/90 md:bg-white/90 backdrop-blur-sm rounded-full
                px-3 py-1.5 md:px-4 md:py-2 border border-white/30 shadow-sm"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-gray-500 md:text-gray-500">
                        {t("welcomeFromCEO.leadership.managingDirector.badge")}
                      </span>
                    </div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {t("welcomeFromCEO.leadership.managingDirector.name")}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-0.5 bg-blue-300"></div>
                        <span className="text-blue-200 font-medium">
                          {t("welcomeFromCEO.leadership.managingDirector.role")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                          <FaChartLine className="text-xl text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 uppercase tracking-wide">
                            {t(
                              "welcomeFromCEO.leadership.managingDirector.leadershipSince"
                            )}
                          </p>
                          <p className="text-lg font-bold text-gray-800">
                            {t(
                              "welcomeFromCEO.leadership.managingDirector.year"
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer group">
                          <FaLinkedin className="text-blue-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer group">
                          <FaEnvelope className="text-blue-600 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6">
                      {t(
                        "welcomeFromCEO.leadership.managingDirector.description"
                      )}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">
                          {t(
                            "welcomeFromCEO.leadership.managingDirector.achievement1"
                          )}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">
                          {t(
                            "welcomeFromCEO.leadership.managingDirector.achievement2"
                          )}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">
                          {t(
                            "welcomeFromCEO.leadership.managingDirector.achievement3"
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chairman & Founder */}
              <div className="group relative">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 border border-gray-100">
                  {/* Card Header with Image */}
                  <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-700 overflow-hidden">
                    <img
                      src="/new_images/S.K..jpg"
                      alt="Mr. S.K. Gambhir"
                      className="w-full h-full object-contain sm:object-cover object-center bg-black/10 transition-transform duration-500 group-hover:sm:scale-110"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

                    {/* Floating Badge */}
                    <div
                      className="absolute top-2 left-2 sm:top-3 sm:left-3
                md:top-6 md:right-6 md:left-auto z-10
                bg-white/90 md:bg-white/90 backdrop-blur-sm rounded-full
                px-3 py-1.5 md:px-4 md:py-2 border border-white/30 shadow-sm"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-gray-500 md:text-gray-500">
                        {t("welcomeFromCEO.leadership.chairman.badge")}
                      </span>
                    </div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {t("welcomeFromCEO.leadership.chairman.name")}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-0.5 bg-purple-300"></div>
                        <span className="text-purple-200 font-medium">
                          {t("welcomeFromCEO.leadership.chairman.role")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                          <FaAward className="text-xl text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 uppercase tracking-wide">
                            {t("welcomeFromCEO.leadership.chairman.founded")}
                          </p>
                          <p className="text-lg font-bold text-gray-800">
                            {t("welcomeFromCEO.leadership.chairman.year")}
                          </p>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex space-x-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center hover:bg-indigo-200 transition-colors cursor-pointer group">
                          <FaLinkedin className="text-indigo-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center hover:bg-indigo-200 transition-colors cursor-pointer group">
                          <FaEnvelope className="text-indigo-600 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6">
                      {t("welcomeFromCEO.leadership.chairman.description")}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">
                          {t("welcomeFromCEO.leadership.chairman.achievement1")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">
                          {t("welcomeFromCEO.leadership.chairman.achievement2")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">
                          {t("welcomeFromCEO.leadership.chairman.achievement3")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Story Section */}
        <div className="bg-white py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                {t("welcomeFromCEO.companyStory.title")}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                {t("welcomeFromCEO.companyStory.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Foundation */}
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaHandshake className="text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {t("welcomeFromCEO.companyStory.integrity.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("welcomeFromCEO.companyStory.integrity.description")}
                </p>
              </div>

              {/* Quality */}
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaShieldAlt className="text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {t("welcomeFromCEO.companyStory.quality.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("welcomeFromCEO.companyStory.quality.description")}
                </p>
              </div>

              {/* Reliability */}
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaCogs className="text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {t("welcomeFromCEO.companyStory.reliability.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("welcomeFromCEO.companyStory.reliability.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Message Section */}
        <div className="py-5 mb-5 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-gray-100">
                <div className="flex items-center justify-center mb-8">
                  <FaQuoteLeft className="text-2xl sm:text-3xl md:text-4xl text-blue-500 mr-3 sm:mr-4" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                    {t("welcomeFromCEO.message.title")}
                  </h2>
                  <FaQuoteRight className="text-2xl sm:text-3xl md:text-4xl text-blue-500 ml-3 sm:ml-4" />
                </div>

                <div className="space-y-5 sm:space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p className="font-semibold text-blue-900 text-xl text-center mb-8">
                    {t("welcomeFromCEO.message.heading")}
                  </p>

                  <p>
                    <span className="font-semibold">
                      {t("welcomeFromCEO.message.greeting")}
                    </span>
                  </p>

                  <p>
                    {t("welcomeFromCEO.message.intro")}{" "}
                    <span className="font-semibold text-blue-700">
                      {t("welcomeFromCEO.message.banner")}
                    </span>
                    .
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 mb-2">
                      {t("welcomeFromCEO.message.globalRecognition.title")}
                    </p>
                    <p>
                      {t(
                        "welcomeFromCEO.message.globalRecognition.description"
                      )}
                    </p>
                  </div>

                  <p>
                    {t("welcomeFromCEO.message.growth")}{" "}
                    <span className="font-bold text-blue-700">
                      {t("welcomeFromCEO.message.largestInIndia")}
                    </span>{" "}
                    {t("welcomeFromCEO.message.andRanks")}{" "}
                    <span className="font-bold text-blue-700">
                      {t("welcomeFromCEO.message.fifthGlobally")}
                    </span>
                    {t("welcomeFromCEO.message.growthContinuation")}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <div className="flex items-center mb-3">
                        <FaLeaf className="text-green-600 text-xl mr-3" />
                        <h4 className="font-semibold text-green-800">
                          {t("welcomeFromCEO.message.environmental.title")}
                        </h4>
                      </div>
                      <p className="text-green-700">
                        {t("welcomeFromCEO.message.environmental.description")}
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <div className="flex items-center mb-3">
                        <FaAward className="text-yellow-600 text-xl mr-3" />
                        <h4 className="font-semibold text-yellow-800">
                          {t("welcomeFromCEO.message.leadership.title")}
                        </h4>
                      </div>
                      <p className="text-yellow-700">
                        {t("welcomeFromCEO.message.leadership.description")}
                      </p>
                    </div>
                  </div>

                  <p>
                    {t("welcomeFromCEO.message.portfolio")}{" "}
                    <span className="font-bold">
                      {t("welcomeFromCEO.message.powerValue")}
                    </span>{" "}
                    {t("welcomeFromCEO.message.andCapacities")}{" "}
                    <span className="font-bold">
                      {t("welcomeFromCEO.message.capacityValue")}
                    </span>
                    . {t("welcomeFromCEO.message.testing")}
                  </p>

                  <p>{t("welcomeFromCEO.message.transcendence")}</p>

                  <div className="text-center mt-8 p-6 bg-green-50 text-green-800 rounded-xl">
                    <p className="text-xl font-semibold mb-2">
                      {t("welcomeFromCEO.message.focus")}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-4">
                      <span className="font-bold">
                        {t("welcomeFromCEO.message.focusValues.integrity")}
                      </span>
                      <span className="text-blue-300">•</span>
                      <span className="font-bold">
                        {t("welcomeFromCEO.message.focusValues.quality")}
                      </span>
                      <span className="text-blue-300">•</span>
                      <span className="font-bold">
                        {t("welcomeFromCEO.message.focusValues.reliability")}
                      </span>
                      <span className="text-blue-300">•</span>
                      <span className="font-bold">
                        {t("welcomeFromCEO.message.focusValues.innovation")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Global Impact Section */}
        <div className="relative bg-blue-600 text-white py-10 md:py-14 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>

          <div className="relative container mx-auto px-4 md:px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
                {t("welcomeFromCEO.globalImpact.title")}
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                {t("welcomeFromCEO.globalImpact.subtitle")}
              </p>
              <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mx-auto rounded-full"></div>
            </div>

            {/* Main Statistics Grid */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {/* Global Ranking */}
              <div className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-2 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-10 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <FaChartLine className="text-3xl text-white" />
                    </div>
                    <div className="text-5xl font-bold mb-3 text-cyan-500">
                      {t("welcomeFromCEO.globalImpact.ranking.number")}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {t("welcomeFromCEO.globalImpact.ranking.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("welcomeFromCEO.globalImpact.ranking.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* India Leadership */}
              <div className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-2 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-15 mx-auto mb-6 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <FaIndustry className="text-3xl text-white" />
                    </div>
                    <div className="text-5xl font-bold mb-3 text-indigo-500">
                      {t("welcomeFromCEO.globalImpact.india.number")}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {t("welcomeFromCEO.globalImpact.india.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("welcomeFromCEO.globalImpact.india.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Manufacturing Excellence */}
              <div className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-2 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-15 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <FaCogs className="text-3xl text-white" />
                    </div>
                    <div className="text-5xl font-bold mb-3 text-purple-500">
                      {t("welcomeFromCEO.globalImpact.manufacturing.number")}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {t("welcomeFromCEO.globalImpact.manufacturing.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(
                        "welcomeFromCEO.globalImpact.manufacturing.description"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  {t("welcomeFromCEO.globalImpact.power")}
                </div>
                <p className="text-gray-600 text-sm">
                  {t("welcomeFromCEO.globalImpact.powerLabel")}
                </p>
              </div>

              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 text-center">
                <div className="text-3xl font-bold text-cyan-500 mb-2">
                  {t("welcomeFromCEO.globalImpact.capacity")}
                </div>
                <p className="text-gray-600 text-sm">
                  {t("welcomeFromCEO.globalImpact.capacityLabel")}
                </p>
              </div>

              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">
                  {t("welcomeFromCEO.globalImpact.testing")}
                </div>
                <p className="text-gray-600 text-sm">
                  {t("welcomeFromCEO.globalImpact.testingLabel")}
                </p>
              </div>
            </div>

            {/* Global Reach */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t("welcomeFromCEO.globalImpact.markets.title")}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {[
                  "USA",
                  "Australia",
                  "Canada",
                  "UAE",
                  "Germany",
                  "Iran",
                  "Italy",
                  "Malaysia",
                  "Russia",
                  "South Korea",
                  "Taiwan",
                  "China",
                  "Africa",
                ].map((country, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white bg-opacity-10 rounded-full text-xs sm:text-sm text-gray-900 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-10 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              {t("welcomeFromCEO.cta.title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
              {t("welcomeFromCEO.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={openSearch}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {t("welcomeFromCEO.cta.exploreProducts")}
              </button>
              <button
                onClick={handleContactUs}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {t("welcomeFromCEO.cta.contactUs")}
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
                <h3 className="text-lg font-bold text-gray-800">
                  {t("welcomeFromCEO.search.title")}
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
                    // In your <input ...> keep your props and add:
                    onKeyDown={(e) => {
                      if (e.key === "Escape") return closeSearch();
                      if (e.key === "Enter" && searchResults[0]) {
                        window.location.href = searchResults[0].link;
                        closeSearch();
                      }
                    }}
                    type="text"
                    placeholder={t("welcomeFromCEO.search.placeholder")}
                    className="w-full outline-none py-1"
                  />
                </div>

                <div className="mt-3 max-h-80 overflow-auto divide-y">
                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-4 text-sm text-gray-500">
                      {t("welcomeFromCEO.search.noResults")}
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

export default WelcomeFromCEO;
