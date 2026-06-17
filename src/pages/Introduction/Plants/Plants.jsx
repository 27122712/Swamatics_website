import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import {
  FaIndustry,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExpand,
  FaCheckCircle,
  FaCogs,
  FaThermometerHalf,
  FaBuilding,
  FaArrowRight,
  FaGlobe,
  FaCertificate,
  FaUsers,
  FaTrophy,
  FaRocket,
  FaShieldAlt,
  FaStar,
  FaChartLine,
} from "react-icons/fa";

const Plants = () => {
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

  // Plant Images - Easy to update individually
// Plant images (local + online)
const plantImages = {
  plant1: "https://images.unsplash.com/photo-1613312328-37e4e20abe4a?auto=format&fit=crop&w=800&q=80",
  plant2:
    "https://images.unsplash.com/photo-1613312328-37e4e20abe4a?auto=format&fit=crop&w=800&q=80",
  plant3:
    "https://images.unsplash.com/photo-1587293852123-8c75937b1e67?auto=format&fit=crop&w=800&q=80",
  plant4:
    "https://images.unsplash.com/photo-1581094794361-6d6b0c21c7d2?auto=format&fit=crop&w=800&q=80",
  upcomingPlant:
    "https://images.unsplash.com/photo-1586864387976-5b5a1ea12e6b?auto=format&fit=crop&w=800&q=80",
};

// Fallback images (used if the main image is missing)
const fallbackImages = {
  plant1: "https://via.placeholder.com/800x300/3B82F6/FFFFFF?text=Manufacturing+Plant+1",
  plant2: "https://via.placeholder.com/800x300/3B82F6/FFFFFF?text=Manufacturing+Plant+2",
  plant3: "https://via.placeholder.com/800x300/3B82F6/FFFFFF?text=Manufacturing+Plant+3",
  plant4: "https://via.placeholder.com/800x300/3B82F6/FFFFFF?text=Manufacturing+Plant+4",
  upcomingPlant: "https://via.placeholder.com/800x300/F59E0B/FFFFFF?text=Upcoming+Facility",
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

  const plants = [
    {
      id: 1,
      address: "C-2, Sector-3, Noida, U.P. INDIA",
      status: "operational",
      established: "1978",
      image: "/images/Plants/1.jpg",
      fallback: fallbackImages.plant1,
    },
    {
      id: 2,
      address: "B-9, Sector-57, Noida, U.P. INDIA",
      status: "operational",
      established: "2005",
      image: "/images/Plants/2.jpg",
      fallback: fallbackImages.plant2,
    },
    {
      id: 3,
      address: "B-111, Sector-67, Noida, U.P. INDIA",
      status: "operational",
      established: "2008",
      image: "/images/Plants/3.jpg",
      fallback: fallbackImages.plant3,
    },
    {
      id: 4,
      address: "C-52, Sector-57, Noida, U.P. INDIA",
      status: "operational",
      established: "2010",
      image: "/images/Plants/4.jpg",
      fallback: fallbackImages.plant4,
    },
    {
      id: 5,
      address: "SWAM Facility in Noida Sector-80",
      status: "operational",
      established: "2025",
      image:
        "/images/Plants/5.jpg",
      fallback: fallbackImages.upcomingPlant,
    },
  ];

  const stats = [
    {
      icon: <FaCalendarAlt className="text-blue-600 text-4xl" />,
      title: t("plants.metrics.since1978.title"),
      description: t("plants.metrics.since1978.description"),
      value: t("plants.metrics.since1978.value"),
      gradient: "from-blue-500 to-blue-700",
      pattern: "bg-blue-50",
    },
    {
      icon: <FaIndustry className="text-emerald-600 text-4xl" />,
      title: t("plants.metrics.manufacturingPlants.title"),
      description: t("plants.metrics.manufacturingPlants.description"),
      value: t("plants.metrics.manufacturingPlants.value"),
      gradient: "from-emerald-500 to-emerald-700",
      pattern: "bg-emerald-50",
    },
    {
      icon: <FaExpand className="text-purple-600 text-4xl" />,
      title: t("plants.metrics.manufacturingSpace.title"),
      description: t("plants.metrics.manufacturingSpace.description"),
      value: t("plants.metrics.manufacturingSpace.value"),
      gradient: "from-purple-500 to-purple-700",
      pattern: "bg-purple-50",
    },
    {
      icon: <FaGlobe className="text-orange-600 text-4xl" />,
      title: t("plants.metrics.globalExpansion.title"),
      description: t("plants.metrics.globalExpansion.description"),
      value: t("plants.metrics.globalExpansion.value"),
      gradient: "from-orange-500 to-orange-700",
      pattern: "bg-orange-50",
    },
  ];

  return (
    <MainTemplate>
      <div className="min-h-screen bg-gray-50 relative overflow-hidden">
        {/* Hero Section with Enhanced Graphics */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Decorative Element Above Title */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent mt-15 to-blue-400"></div>
                  <FaIndustry className="text-blue-400 text-3xl" />
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
                </div>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {t("plants.hero.title")}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                {t("plants.hero.description")}
              </p>

              {/* Floating Action Indicators */}
              <div className="flex justify-center space-x-8 mt-12">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <FaTrophy className="text-white text-lg" />
                  </div>
                  <span className="text-sm text-blue-200">
                    {t("plants.hero.excellence")}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <FaRocket className="text-white text-lg" />
                  </div>
                  <span className="text-sm text-blue-200">
                    {t("plants.hero.innovation")}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <FaShieldAlt className="text-white text-lg" />
                  </div>
                  <span className="text-sm text-blue-200">
                    {t("plants.hero.quality")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="py-10 bg-white relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                {t("plants.metrics.title")}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  {/* Floating Card Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-20`}
                  ></div>

                  <div
                    className={`relative ${stat.pattern} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm`}
                  >
                    {/* Icon with Animated Background */}
                    <div className="relative flex justify-center mb-6">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-full w-20 h-20 opacity-20 animate-pulse`}
                      ></div>
                      <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                        {stat.icon}
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 mb-2">
                        {stat.title}
                      </p>
                      <p className="text-gray-600">{stat.description}</p>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-4 right-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Growth Story Section */}
        <div className="py-5 bg-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-semibold mb-6">
                <FaChartLine className="mr-2" />
                {t("plants.growth.badge")}
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                {t("plants.growth.title")}
              </h2>

              {/* Timeline Visual */}
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  <div className="flex justify-center items-center space-x-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {t("plants.growth.year1978")}
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {t("plants.growth.factory1")}
                      </p>
                    </div>
                    <FaArrowRight className="text-gray-400 text-2xl" />
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {t("plants.growth.year2010")}
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {t("plants.growth.factory4")}
                      </p>
                    </div>
                    <FaArrowRight className="text-gray-400 text-2xl" />
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {t("plants.growth.year2025")}
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {t("plants.growth.factory5")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                  <p
                    className="text-center text-xl"
                    dangerouslySetInnerHTML={{
                      __html: t("plants.growth.story1"),
                    }}
                  />
                  <p
                    className="text-center text-xl"
                    dangerouslySetInnerHTML={{
                      __html: t("plants.growth.story2"),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quality Control Section */}
        <div className="py-5 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>

                <h2 className="text-5xl font-bold text-gray-900 mb-8">
                  {t("plants.quality.title")}
                </h2>

                <div className="space-y-8">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl transform -skew-y-1 group-hover:skew-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-start space-x-6 p-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                        <FaCheckCircle className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                          {t("plants.quality.rawMaterial.title")}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t("plants.quality.rawMaterial.description")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl transform skew-y-1 group-hover:skew-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-start space-x-6 p-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <FaThermometerHalf className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                          {t("plants.quality.hotRun.title")}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t("plants.quality.hotRun.description")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl transform -skew-y-1 group-hover:skew-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-start space-x-6 p-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                        <FaCertificate className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                          {t("plants.quality.qualityAssurance.title")}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t("plants.quality.qualityAssurance.description")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-3xl transform rotate-2"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-10 rounded-3xl shadow-2xl border border-white/50">
                  <div className="text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full w-24 h-24 mx-auto opacity-20 animate-pulse"></div>
                      <FaCogs className="relative text-blue-600 text-8xl mx-auto" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {t("plants.quality.advancedManufacturing.title")}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {t("plants.quality.advancedManufacturing.description")}
                    </p>

                    {/* Achievement Badges */}
                    <div className="flex justify-center space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mb-2">
                          <FaStar className="text-white text-lg" />
                        </div>
                        <span className="text-xs text-gray-600">
                          {t("plants.quality.badge1")}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mb-2">
                          <FaShieldAlt className="text-white text-lg" />
                        </div>
                        <span className="text-xs text-gray-600">
                          {t("plants.quality.badge2")}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-2">
                          <FaTrophy className="text-white text-lg" />
                        </div>
                        <span className="text-xs text-gray-600">
                          {t("plants.quality.badge3")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Manufacturing Plants Section */}
        <div className="py-5 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200 to-transparent rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200 to-transparent rounded-full opacity-30 blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-800 to-gray-800 rounded-full text-white text-sm font-semibold mb-6 shadow-lg">
                <FaBuilding className="mr-2" />
                {t("plants.facilities.badge")}
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                {t("plants.facilities.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("plants.facilities.description")}
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plants.map((plant, index) => (
                <div key={plant.id} className="group relative">
                  {/* Floating Background Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl transform transition-all duration-500 ${
                      plant.status === "upcoming"
                        ? "bg-gradient-to-br from-orange-400 to-red-400 group-hover:scale-105"
                        : "bg-gradient-to-br from-blue-400 to-indigo-400 group-hover:scale-105"
                    } opacity-20 blur-xl`}
                  ></div>

                  <div
                    className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 border-l-4 ${
                      plant.status === "upcoming"
                        ? "border-orange-500"
                        : "border-blue-500"
                    } backdrop-blur-sm border-t border-white/50`}
                  >
                    {/* Factory Image */}
                    <div className="relative mb-6 rounded-xl overflow-hidden">
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={plant.image}
                          alt={`${
                            plant.status === "upcoming"
                              ? "Upcoming"
                              : "Manufacturing"
                          } facility`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = plant.fallback;
                          }}
                        />
                        {/* Image Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${
                            plant.status === "upcoming"
                              ? "from-orange-900/50 to-transparent"
                              : "from-blue-900/50 to-transparent"
                          }`}
                        ></div>

                        {/* Status Badge on Image */}
                        <div className="absolute top-4 right-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg ${
                              plant.status === "upcoming"
                                ? "bg-green-500/90 text-white"
                                : "bg-green-500/90 text-white"
                            }`}
                          >
                            {plant.status === "upcoming"
                              ? t("plants.plant.active")
                              : t("plants.plant.active")}
                          </span>
                        </div>

                        {/* Plant ID Badge */}
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                            <span className="text-gray-800 font-bold text-sm">
                              Plant #{plant.id}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                            plant.status === "upcoming"
                              ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                              : "bg-gradient-to-r from-blue-500 to-indigo-500"
                          }`}
                        >
                          <FaBuilding className="text-white text-2xl" />
                        </div>
                        <div>
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                              plant.status === "upcoming"
                                ? "bg-gradient-to-r from-orange-100 to-red-100 text-orange-800"
                                : "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800"
                            }`}
                          >
                            {plant.status === "upcoming"
                              ? t("plants.plant.operational")
                              : t("plants.plant.operational")}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">
                          #{plant.id}
                        </div>
                        <div className="text-sm text-gray-500">
                          {plant.established}
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="mb-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center mt-1 ${
                            plant.status === "upcoming"
                              ? "bg-blue-100"
                              : "bg-blue-100"
                          }`}
                        >
                          <FaMapMarkerAlt
                            className={`text-lg ${
                              plant.status === "upcoming"
                                ? "text-blue-600"
                                : "text-blue-600"
                            }`}
                          />
                        </div>
                        <p className="text-gray-700 font-medium leading-relaxed flex-1">
                          {plant.address}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              plant.status === "upcoming"
                                ? "bg-green-400"
                                : "bg-green-400"
                            } animate-pulse`}
                          ></div>
                          <span className="text-sm text-gray-600 font-medium">
                            {plant.status === "upcoming"
                              ? t("plants.plant.activeProduction")
                              : t("plants.plant.activeProduction")}
                          </span>
                        </div>
                        <div
                          className={`p-2 rounded-full transition-colors duration-300 ${
                            plant.status === "upcoming"
                              ? "bg-blue-50 group-hover:bg-blue-100"
                              : "bg-blue-50 group-hover:bg-blue-100"
                          }`}
                        >
                          <FaArrowRight
                            className={`text-sm transition-transform duration-300 group-hover:translate-x-1 ${
                              plant.status === "upcoming"
                                ? "text-blue-600"
                                : "text-blue-600"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Growth Focus Section */}
        <div className="py-10 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t("plants.cta.title")}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t("plants.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={openSearch}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {t("plants.cta.exploreProducts")}
              </button>
              <button
                onClick={handleContactUs}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {t("plants.cta.contactUs")}
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
                  {t("plants.search.title")}
                </h3>
                <button
                  onClick={closeSearch}
                  className="p-2 rounded hover:bg-gray-100"
                  aria-label={t("plants.search.close")}
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
                    placeholder={t("plants.search.placeholder")}
                    className="w-full outline-none py-1"
                  />
                </div>

                <div className="mt-3 max-h-80 overflow-auto divide-y">
                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-4 text-sm text-gray-500">
                      {t("plants.search.noResults")}
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

export default Plants;
