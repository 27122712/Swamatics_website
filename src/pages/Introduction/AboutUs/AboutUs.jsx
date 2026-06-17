import React, { useState, useMemo } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import {
  FaIndustry,
  FaGlobeAmericas,
  FaCogs,
  FaEye,
  FaBullseye,
  FaAward,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaTools,
  FaFlask,
  FaBolt,
  FaBuilding,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const AboutUs = () => {
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
  // Add custom styles for animations
  const customStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes float-delayed {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
    .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
  `;
  const stats = useMemo(
    () => [
      {
        icon: FaUsers,
        number: "55,000+",
        text: t("aboutUs.stats.globalInstallations"),
      },
      {
        icon: FaGlobeAmericas,
        number: "25+",
        text: t("aboutUs.stats.exportCountries"),
      },
      { icon: FaCogs, number: "100,000", text: t("aboutUs.stats.capacity") },
    ],
    [t]
  );

  const coreValues = useMemo(
    () => [
      {
        icon: FaHandshake,
        title: t("aboutUs.coreValues.integrity.title"),
        description: t("aboutUs.coreValues.integrity.description"),
      },
      {
        icon: FaAward,
        title: t("aboutUs.coreValues.highQuality.title"),
        description: t("aboutUs.coreValues.highQuality.description"),
      },
      {
        icon: FaShieldAlt,
        title: t("aboutUs.coreValues.reliability.title"),
        description: t("aboutUs.coreValues.reliability.description"),
      },
      {
        icon: FaLightbulb,
        title: t("aboutUs.coreValues.innovation.title"),
        description: t("aboutUs.coreValues.innovation.description"),
      },
    ],
    [t]
  );

  const achievements = useMemo(
    () => [
      {
        icon: FaBuilding,
        title: t("aboutUs.achievements.manufacturing.title"),
        description: t("aboutUs.achievements.manufacturing.description"),
        highlight: t("aboutUs.achievements.manufacturing.highlight"),
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: FaFlask,
        title: t("aboutUs.achievements.testing.title"),
        description: t("aboutUs.achievements.testing.description"),
        highlight: t("aboutUs.achievements.testing.highlight"),
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: FaGlobeAmericas,
        title: t("aboutUs.achievements.globalPresence.title"),
        description: t("aboutUs.achievements.globalPresence.description"),
        highlight: t("aboutUs.achievements.globalPresence.highlight"),
        color: "from-purple-500 to-violet-500",
      },
      {
        icon: FaCogs,
        title: t("aboutUs.achievements.precisionEngineering.title"),
        description: t("aboutUs.achievements.precisionEngineering.description"),
        highlight: t("aboutUs.achievements.precisionEngineering.highlight"),
        color: "from-orange-500 to-red-500",
      },
      {
        icon: FaCertificate,
        title: t("aboutUs.achievements.industryLeadership.title"),
        description: t("aboutUs.achievements.industryLeadership.description"),
        highlight: t("aboutUs.achievements.industryLeadership.highlight"),
        color: "from-indigo-500 to-blue-500",
      },
      {
        icon: FaRocket,
        title: t("aboutUs.achievements.innovationExcellence.title"),
        description: t("aboutUs.achievements.innovationExcellence.description"),
        highlight: t("aboutUs.achievements.innovationExcellence.highlight"),
        color: "from-pink-500 to-rose-500",
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
      <style>{customStyles}</style>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-6 left-6 w-12 h-12 md:top-10 md:left-10 md:w-20 md:h-20 bg-blue-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-24 right-10 w-10 h-10 md:top-40 md:right-20 md:w-16 md:h-16 bg-purple-400 rounded-full opacity-20 animate-float-delayed"></div>
            <div className="absolute bottom-10 left-1/5 w-9 h-9 md:bottom-20 md:left-1/4 md:w-12 md:h-12 bg-cyan-400 rounded-full opacity-20 animate-float-slow"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 mt-8 md:mt-10">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600 rounded-full mt-10 hover:bg-blue-500 hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer group">
                  <FaIndustry className="text-4xl group-hover:text-yellow-300 transition-colors duration-300" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight hover:scale-105 transition-transform duration-300">
                {t("aboutUs.hero.about")}{" "}
                <span className="text-blue-300 hover:text-cyan-300 transition-colors duration-300">
                  {t("aboutUs.hero.swamGroup")}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed hover:text-blue-100 transition-colors duration-300">
                {t("aboutUs.hero.description")}
              </p>
              <div className="flex justify-center">
                <HiOutlineSparkles className="text-3xl text-blue-300 animate-pulse hover:text-yellow-300 hover:scale-125 transition-all duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-5 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:shadow-2xl group-hover:from-purple-500 group-hover:to-pink-600 transition-all duration-500 group-hover:rotate-12">
                      <stat.icon className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium group-hover:text-gray-800 group-hover:font-semibold transition-all duration-300">
                    {stat.text}
                  </p>
                  <div className="mt-3 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Story Section */}
        <div className="py-5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12">
              {/* Grid layout for 2 paragraphs + 4 blocks */}
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* First 2 paragraphs */}
                <div className="space-y-5 sm:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                  <p>{t("aboutUs.companyStory.paragraph1")}</p>
                  <p>{t("aboutUs.companyStory.paragraph2")}</p>
                </div>

                {/* Right side 4 blocks */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <FaTools className="text-2xl sm:text-3xl text-blue-600 mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">
                      {t("aboutUs.features.advancedTechnology.title")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("aboutUs.features.advancedTechnology.description")}
                    </p>
                  </div>
                  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <FaChartLine className="text-3xl text-green-600 mb-4" />
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">
                      {t("aboutUs.features.continuousGrowth.title")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("aboutUs.features.continuousGrowth.description")}
                    </p>
                  </div>
                  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <FaGlobeAmericas className="text-3xl text-purple-600 mb-4" />
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">
                      {t("aboutUs.features.globalReach.title")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("aboutUs.features.globalReach.description")}
                    </p>
                  </div>
                  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <FaAward className="text-3xl text-yellow-600 mb-4" />
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">
                      {t("aboutUs.features.industryLeader.title")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("aboutUs.features.industryLeader.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Remaining 4 paragraphs */}
              <div className="space-y-5 sm:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>{t("aboutUs.companyStory.paragraph3")}</p>
                <p>{t("aboutUs.companyStory.paragraph4")}</p>
                <p>{t("aboutUs.companyStory.paragraph5")}</p>
                <p>{t("aboutUs.companyStory.paragraph6")}</p>
                <p>{t("aboutUs.companyStory.paragraph7")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {t("aboutUs.coreValuesSection.title")}{" "}
                <span className="text-blue-600">
                  {t("aboutUs.coreValuesSection.titleHighlight")}
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {t("aboutUs.coreValuesSection.subtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 border border-gray-100 group hover:-translate-y-4 hover:scale-105 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex justify-center mb-6">
                      <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:scale-125 group-hover:rotate-12 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500 group-hover:shadow-lg">
                        <value.icon className="text-2xl text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {value.description}
                    </p>
                    <div className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="py-10 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6 hover:scale-110 hover:shadow-xl hover:shadow-blue-400/50 transition-all duration-300">
                <FaBolt className="text-2xl text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
                {t("aboutUs.achievementsSection.title")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  {t("aboutUs.achievementsSection.titleHighlight")}
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                {t("aboutUs.achievementsSection.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl transform scale-110"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-300 shadow-xl hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:-translate-y-3">
                    {/* Icon and Highlight Badge */}
                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-6">
                      <div
                        className={`bg-gradient-to-r ${achievement.color}
              flex items-center justify-center
              w-12 h-12 sm:w-auto sm:h-auto sm:p-4
              rounded-full sm:rounded-xl
              shadow-md group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6
              transition-all duration-500`}
                      >
                        <achievement.icon className="text-lg sm:text-2xl text-white" />
                      </div>

                      <div
                        className="bg-gradient-to-r from-gray-800 to-gray-900 text-white
                px-3 sm:px-4 py-1.5 sm:py-2
                rounded-full text-xs sm:text-sm font-bold border border-gray-600
                group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white
                transition-all duration-300"
                      >
                        {achievement.highlight}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-all duration-300 transform group-hover:scale-105">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-all duration-300">
                      {achievement.description}
                    </p>

                    {/* Decorative Line */}
                    <div
                      className={`mt-6 h-1 bg-gradient-to-r ${achievement.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Statistics */}
            <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-10 md:pt-12 border-t border-gray-400">
              <div className="text-center group cursor-pointer hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-300 mb-2 group-hover:text-blue-200">
                  1000KW
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white font-medium">
                  {t("aboutUs.achievementsSection.testingCapacity")}
                </div>
              </div>
              <div className="text-center group cursor-pointer hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-purple-300 mb-2 group-hover:text-purple-200">
                  6.6KV
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white font-medium">
                  {t("aboutUs.achievementsSection.voltageTesting")}
                </div>
              </div>
              <div className="text-center group cursor-pointer hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-orange-300 mb-2 group-hover:text-orange-200">
                  {t("aboutUs.achievementsSection.global")}
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white font-medium">
                  {t("aboutUs.achievementsSection.marketLeader")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-5 bg-white"></section>

        {/* Contact Section */}
        {/* <div className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Get In <span className="text-blue-600">Touch</span>
              </h2>
              <p className="text-xl text-gray-600">
                Ready to partner with industry leaders? Contact us today
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-shadow duration-500">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group cursor-pointer hover:transform hover:-translate-y-2 transition-all duration-500">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <FaMapMarkerAlt className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Address
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    C-2, SECTOR-3, NOIDA-201301, (U.P.) INDIA
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                <div className="text-center group cursor-pointer hover:transform hover:-translate-y-2 transition-all duration-500">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <FaPhone className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-green-600 transition-colors duration-300">
                    Phone
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    +91-99103-02163
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    +91-120-2527610, 2537282
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                <div className="text-center group cursor-pointer hover:transform hover:-translate-y-2 transition-all duration-500">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <FaEnvelope className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    Email
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    sales@swamatics.com
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    service@swamatics.com
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="py-7 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              {t("aboutUs.cta.title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
              {t("aboutUs.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={openSearch}
                className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {t("aboutUs.cta.exploreProducts")}
              </button>
              <button
                onClick={handleContactUs}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {t("aboutUs.cta.contactUs")}
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
                  {t("aboutUs.search.title")}
                </h3>
                <button
                  onClick={closeSearch}
                  className="p-2 rounded hover:bg-gray-100"
                  aria-label={t("aboutUs.search.close")}
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
                    placeholder={t("aboutUs.search.placeholder")}
                    className="w-full outline-none py-1"
                  />
                </div>

                <div className="mt-3 max-h-[70svh] overflow-auto divide-y">
                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-4 text-sm text-gray-500">
                      {t("aboutUs.search.noResults")}
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

export default AboutUs;
