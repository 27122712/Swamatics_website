import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaGlobe,
  FaHome,
  FaAward,
  FaIndustry,
  FaHandshake,
  FaCertificate,
  FaRocket,
  FaStar,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaSearch,
  FaTrophy,
  FaNetworkWired,
  FaLightbulb,
} from "react-icons/fa";

const Events = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalEvent, setModalEvent] = useState(null);
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

  // Sample events data
  const eventsData = {
    2024: [
      {
        id: 1,
        title: "Bharat Solar Expo 2025",
        category: "international",
        // date: "March 15-17, 2024",
        // location: "Singapore",
        // attendees: 500,
        type: "Conference",
        description:
          "Leading industrial automation conference featuring latest technologies and innovations in manufacturing.",
        image: "/images/Event1.jpeg",
        highlights: [
          "AI in Manufacturing",
          "IoT Solutions",
          "Automation Trends",
        ],
        status: "completed",
      },
      {
        id: 2,
        title: "CHEMTECH BOMBAY_MAR 24",
        category: "domestic",
        // date: "April 22-23, 2024",
        // location: "Mumbai, India",
        // attendees: 300,
        type: "Awards Ceremony",
        description:
          "Celebrating excellence in Indian manufacturing sector with industry leaders and innovators.",
        image: "/images/Event2.jpeg",
        highlights: ["Excellence Awards", "Industry Recognition", "Networking"],
        status: "completed",
      },
      // {
      //   id: 3,
      //   title: "SWAM Technology Showcase",
      //   category: "domestic",
      //   date: "June 10-12, 2024",
      //   location: "Noida, India",
      //   attendees: 250,
      //   type: "Product Launch",
      //   description:
      //     "Showcasing our latest rotary blower innovations and technological advancements.",
      //   image:
      //     "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      //   highlights: [
      //     "New Product Launch",
      //     "Live Demonstrations",
      //     "Technical Sessions",
      //   ],
      //   status: "completed",
      // },
      {
        id: 4,
        title: "IFAT 2023 MUMBAI",
        category: "international",
        date: "September 5-8, 2024",
        location: "Frankfurt, Germany",
        attendees: 1200,
        type: "Exhibition",
        description:
          "International exhibition focusing on energy-efficient solutions and sustainable technologies.",
        image: "/images/Event3.jpeg",
        highlights: [
          "Energy Solutions",
          "Sustainability",
          "Global Partnerships",
        ],
        status: "completed",
      },
      {
        id: 5,
        title: "IFAT MUNICH 2024",
        category: "domestic",
        date: "November 18-19, 2024",
        location: "Bangalore, India",
        attendees: 400,
        type: "Conference",
        description:
          "Annual conference bringing together industry experts to discuss latest innovations.",
        image: "/images/Event4.jpeg",
        highlights: [
          "Innovation Showcase",
          "Expert Panels",
          "Future Technologies",
        ],
        status: "upcoming",
      },
      {
        id: 6,
        title: "NTPC_GETS 2023",
        category: "international",
        date: "December 8-11, 2024",
        location: "Tokyo, Japan",
        attendees: 800,
        type: "Exhibition",
        description:
          "Premier industrial exhibition in the Asia Pacific region showcasing cutting-edge technologies.",
        image: "/images/Event5.jpeg",
        highlights: [
          "Regional Expansion",
          "Technology Display",
          "Market Insights",
        ],
        status: "upcoming",
      },

      {
        id: 7,
        title: "OIL, GAS & POWER- CHEMTECH 2025",
        category: "international",
        date: "February 20-22, 2023",
        location: "Dubai, UAE",
        attendees: 600,
        type: "Summit",
        description:
          "Regional summit focusing on smart manufacturing technologies and digital transformation.",
        image: "/images/Event6.jpeg",
        highlights: [
          "Digital Transformation",
          "Smart Technologies",
          "Industry 4.0",
        ],
        status: "completed",
      },
      {
        id: 8,
        title: "PHARMACHEMLAB EXPO (FEB 2024)",
        category: "domestic",
        date: "May 15-16, 2023",
        location: "Chennai, India",
        attendees: 350,
        type: "Conference",
        description:
          "Celebrating engineering excellence and innovation in the Indian manufacturing sector.",
        image: "/images/Event7.jpeg",
        highlights: [
          "Engineering Innovation",
          "Best Practices",
          "Technical Excellence",
        ],
        status: "completed",
      },
      {
        id: 9,
        title: "WETEX DUBAI",
        category: "international",
        date: "August 12-14, 2023",
        location: "London, UK",
        attendees: 450,
        type: "Forum",
        description:
          "International forum for establishing strategic partnerships and collaborations.",
        image: "/images/Event8.jpeg",
        highlights: [
          "Strategic Partnerships",
          "Global Collaborations",
          "Business Development",
        ],
        status: "completed",
      },
    ],
    // 2022: [
    //   {
    //     id: 10,
    //     title: "Automation & Robotics Expo",
    //     category: "international",
    //     date: "March 10-13, 2022",
    //     location: "Shanghai, China",
    //     attendees: 900,
    //     type: "Exhibition",
    //     description:
    //       "Major exhibition showcasing latest automation and robotics technologies.",
    //     image:
    //       "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    //     highlights: [
    //       "Robotics Innovation",
    //       "Automation Solutions",
    //       "Future Manufacturing",
    //     ],
    //     status: "completed",
    //   },
    //   {
    //     id: 11,
    //     title: "India Industrial Growth Summit",
    //     category: "domestic",
    //     date: "July 25-26, 2022",
    //     location: "New Delhi, India",
    //     attendees: 280,
    //     type: "Summit",
    //     description:
    //       "National summit focusing on industrial growth strategies and market expansion.",
    //     image:
    //       "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    //     highlights: [
    //       "Growth Strategies",
    //       "Market Expansion",
    //       "Industry Insights",
    //     ],
    //     status: "completed",
    //   },
    // ],
  };

  const availableYears = Object.keys(eventsData).sort((a, b) => b - a);

  const getFilteredEvents = () => {
    const yearEvents = eventsData[selectedYear] || [];
    if (selectedCategory === "all") return yearEvents;
    return yearEvents.filter((event) => event.category === selectedCategory);
  };

  const openModal = (event) => {
    setModalEvent(event);
    setModalImage(event.image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
    setModalEvent(null);
  };

  const getEventIcon = (type) => {
    switch (type.toLowerCase()) {
      case "conference":
        return <FaUsers />;
      case "exhibition":
        return <FaIndustry />;
      case "awards ceremony":
        return <FaAward />;
      case "summit":
        return <FaRocket />;
      case "forum":
        return <FaHandshake />;
      case "product launch":
        return <FaLightbulb />;
      default:
        return <FaCalendarAlt />;
    }
  };

  const getCategoryStats = () => {
    const yearEvents = eventsData[selectedYear] || [];
    const domestic = yearEvents.filter((e) => e.category === "domestic").length;
    const international = yearEvents.filter(
      (e) => e.category === "international"
    ).length;
    const totalAttendees = yearEvents.reduce((sum, e) => sum + e.attendees, 0);

    return {
      domestic,
      international,
      total: domestic + international,
      totalAttendees,
    };
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

  const stats = getCategoryStats();

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section
        className="relative min-h-[78svh] md:min-h-[80vh] flex items-center text-white overflow-hidden pt-20 md:pt-24"
        style={{
          background: `linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%), url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1920&h=1080&fit=crop') no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        {/* Hero Background Effects */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute w-32 h-32 bg-white rounded-full blur-3xl top-1/2 left-1/5 animate-pulse"></div>
          <div className="absolute w-24 h-24 bg-white rounded-full blur-3xl top-1/5 right-1/5 animate-pulse"></div>
          <div className="absolute w-28 h-28 bg-white rounded-full blur-3xl bottom-1/5 left-2/5 animate-pulse"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none z-1">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-900/20"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-8 backdrop-blur-md border border-white/20">
              <FaStar className="text-amber-400" />
              <span>{t("events.hero.badge")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              {t("events.hero.title")}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                {" "}
                {t("events.hero.subtitle")}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-12 opacity-90">
              {t("events.hero.description")}
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-400 leading-none">
                  {stats.total}
                </div>
                <div className="text-sm opacity-80 mt-2">
                  {t("events.hero.eventsIn")} {selectedYear}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-400 leading-none">
                  {stats.totalAttendees.toLocaleString()}
                </div>
                <div className="text-sm opacity-80 mt-2">
                  {t("events.hero.totalAttendees")}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-[500px] h-[500px] lg:block hidden">
              <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-br from-amber-400/20 to-blue-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

              <div className="relative w-full h-full">
                <div className="absolute top-[20%] left-[10%] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col items-center gap-2 text-white animate-bounce">
                  <FaGlobe className="text-2xl text-amber-400" />
                  <span className="text-sm font-semibold">
                    {t("events.hero.globalReach")}
                  </span>
                </div>
                <div
                  className="absolute top-[60%] right-[10%] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col items-center gap-2 text-white animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <FaNetworkWired className="text-2xl text-amber-400" />
                  <span className="text-sm font-semibold">
                    {t("events.hero.networking")}
                  </span>
                </div>
                <div
                  className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col items-center gap-2 text-white animate-bounce"
                  style={{ animationDelay: "4s" }}
                >
                  <FaTrophy className="text-2xl text-amber-400" />
                  <span className="text-sm font-semibold">
                    {t("events.hero.excellence")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-12 bg-white p-5 md:p-8 rounded-3xl shadow-xl">
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2 font-semibold text-gray-700 text-base">
                <FaFilter className="text-blue-500" />
                <span>{t("events.filter.category")}</span>
              </label>
              <div className="flex gap-4 flex-wrap">
                <button
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === "all"
                      ? "bg-blue-500 border-blue-500 text-white -translate-y-1 shadow-lg shadow-blue-500/30"
                      : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-500 hover:-translate-y-1"
                  }`}
                  onClick={() => setSelectedCategory("all")}
                >
                  {t("events.filter.allEvents")}
                </button>
                <button
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === "domestic"
                      ? "bg-blue-500 border-blue-500 text-white -translate-y-1 shadow-lg shadow-blue-500/30"
                      : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-500 hover:-translate-y-1"
                  }`}
                  onClick={() => setSelectedCategory("domestic")}
                >
                  <FaHome />
                  {t("events.filter.domestic")}
                </button>
                <button
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === "international"
                      ? "bg-blue-500 border-blue-500 text-white -translate-y-1 shadow-lg shadow-blue-500/30"
                      : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-500 hover:-translate-y-1"
                  }`}
                  onClick={() => setSelectedCategory("international")}
                >
                  <FaGlobe />
                  {t("events.filter.international")}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2 font-semibold text-gray-700 text-base">
                <FaCalendarAlt className="text-blue-500" />
                <span>{t("events.filter.year")}</span>
              </label>
              <div className="flex gap-2 flex-wrap">
                {availableYears.map((year) => (
                  <button
                    key={year}
                    className={`px-4 py-2.5 text-sm sm:text-base border-2 rounded-xl font-semibold transition-all duration-300 ${
                      selectedYear === year
                        ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/30"
                        : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-500"
                    }`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-3xl text-center shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-emerald-100 rounded-full flex items-center justify-center text-xl sm:text-2xl text-emerald-500">
                <FaHome />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t("events.stats.domesticTitle")}
                </h3>
                <div className="text-3xl sm:text-5xl font-extrabold text-emerald-500 leading-none mb-2">
                  {stats.domestic}
                </div>
                <p className="text-gray-500 text-sm">
                  {t("events.stats.domesticDescription")}
                </p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-3xl text-center shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-amber-100 rounded-full flex items-center justify-center text-xl sm:text-2xl text-amber-500">
                <FaGlobe />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t("events.stats.internationalTitle")}
                </h3>
                <div className="text-3xl sm:text-5xl font-extrabold text-amber-500 leading-none mb-2">
                  {stats.international}
                </div>
                <p className="text-gray-500 text-sm">
                  {t("events.stats.internationalDescription")}
                </p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-3xl text-center shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center text-xl sm:text-2xl text-blue-500">
                <FaUsers />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t("events.stats.totalAttendeesTitle")}
                </h3>
                <div className="text-3xl sm:text-5xl font-extrabold text-blue-500 leading-none mb-2">
                  {stats.totalAttendees.toLocaleString()}
                </div>
                <p className="text-gray-500 text-sm">
                  {t("events.stats.totalAttendeesDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-5 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 md:mb-4">
              {selectedCategory === "all"
                ? t("events.grid.allEventsTitle")
                : selectedCategory === "domestic"
                ? t("events.grid.domesticEventsTitle")
                : t("events.grid.internationalEventsTitle")}{" "}
              {t("events.grid.in")} {selectedYear}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
              {selectedCategory === "domestic"
                ? t("events.grid.domesticDescription")
                : selectedCategory === "international"
                ? t("events.grid.internationalDescription")
                : t("events.grid.allDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {getFilteredEvents().map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 relative"
              >
                <div
                  className="relative h-64 overflow-hidden cursor-pointer group"
                  onClick={() => openModal(event)}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaEye className="text-4xl mb-2" />
                    <span>{t("events.card.viewDetails")}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-gray-700">
                    {getEventIcon(event.type)}
                    <span>{event.type}</span>
                  </div>
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                      event.status === "completed"
                        ? "bg-emerald-200 text-emerald-700"
                        : "bg-amber-200 text-amber-700"
                    }`}
                  >
                    {event.status === "completed"
                      ? t("events.card.completed")
                      : t("events.card.upcoming")}
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-0 items-start mb-3 md:mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-tight flex-1 mr-4">
                      {event.title}
                    </h3>
                    <div
                      className={`flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm rounded-full font-semibold whitespace-nowrap ${
                        event.category === "domestic"
                          ? "bg-emerald-200 text-emerald-700"
                          : "bg-amber-200 text-amber-700"
                      }`}
                    >
                      {event.category === "domestic" ? <FaHome /> : <FaGlobe />}
                      <span>
                        {event.category === "domestic"
                          ? t("events.card.domestic")
                          : t("events.card.international")}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-500 leading-relaxed mb-4 md:mb-6 text-sm sm:text-base">
                    {event.description}
                  </p>

                  {/* <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700 text-sm">
                      <FaCalendarAlt className="text-blue-500 w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 text-sm">
                      <FaMapMarkerAlt className="text-blue-500 w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 text-sm">
                      <FaUsers className="text-blue-500 w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div> */}

                  <div>
                    <h4 className="text-base font-semibold text-gray-800 mb-4">
                      {t("events.card.keyHighlights")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2.5 py-1.5 rounded-2xl text-[11px] sm:text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getFilteredEvents().length === 0 && (
            <div className="text-center py-16 text-gray-500">
              <div className="text-6xl mb-4 opacity-50">
                <FaCalendarAlt />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                {t("events.grid.noEventsFound")}
              </h3>
              <p>{t("events.grid.noEventsDescription")}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-[1400px] mx-auto px-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
              Join Us at Upcoming Events
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Stay updated with our latest event participation and connect with
              us at industry gatherings worldwide.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base transition-all duration-300 bg-blue-600 text-white hover:blue-500 hover:-translate-y-1 border-none cursor-pointer">
                <FaCalendarAlt />
                <span>View Event Calendar</span>
              </button>
              <button className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base transition-all duration-300 bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-900 hover:-translate-y-1 cursor-pointer">
                <FaCertificate />
                <span>Partnership Opportunities</span>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <div className="py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
            {t("events.cta.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            {t("events.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={openSearch}
              className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {t("events.cta.exploreProducts")}
            </button>
            <button
              onClick={handleContactUs}
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              {t("events.cta.contactUs")}
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
                {t("events.search.title")}
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
                  placeholder={t("events.search.placeholder")}
                  className="w-full outline-none py-1"
                />
              </div>

              <div className="mt-3 max-h-[70svh] overflow-auto divide-y">
                {searchQuery && searchResults.length === 0 && (
                  <div className="p-4 text-sm text-gray-500">
                    {t("events.search.noResults")}
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

      {/* Event Modal */}
      {isModalOpen && modalEvent && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000] p-4 md:p-8"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90svh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white border-none rounded-full text-2xl cursor-pointer z-10 flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              <div className="relative">
                <img
                  src={modalImage}
                  alt={modalEvent.title}
                  className="w-full h-full object-cover lg:rounded-l-3xl lg:rounded-r-none rounded-t-3xl lg:rounded-t-3xl"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                        modalEvent.category === "domestic"
                          ? "bg-emerald-500/90 text-white"
                          : "bg-amber-500/90 text-white"
                      }`}
                    >
                      {modalEvent.category === "domestic" ? (
                        <FaHome />
                      ) : (
                        <FaGlobe />
                      )}
                      {modalEvent.category === "domestic"
                        ? t("events.modal.domestic")
                        : t("events.modal.international")}
                    </span>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        modalEvent.status === "completed"
                          ? "bg-emerald-500/90 text-white"
                          : "bg-amber-500/90 text-white"
                      }`}
                    >
                      {modalEvent.status === "completed"
                        ? t("events.modal.completed")
                        : t("events.modal.upcoming")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-3 sm:mb-4 leading-tight">
                  {modalEvent.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-5 sm:mb-8">
                  {modalEvent.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="flex items-start gap-4">
                    <FaCalendarAlt className="text-blue-500 text-xl mt-1" />
                    <div className="flex-1">
                      <span className="block text-sm text-gray-500 mb-1">
                        {t("events.modal.date")}
                      </span>
                      <span className="block font-semibold text-gray-800">
                        {modalEvent.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
                    <div className="flex-1">
                      <span className="block text-sm text-gray-500 mb-1">
                        {t("events.modal.location")}
                      </span>
                      <span className="block font-semibold text-gray-800">
                        {modalEvent.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaUsers className="text-blue-500 text-xl mt-1" />
                    <div className="flex-1">
                      <span className="block text-sm text-gray-500 mb-1">
                        {t("events.modal.attendees")}
                      </span>
                      <span className="block font-semibold text-gray-800">
                        {modalEvent.attendees} {t("events.modal.professionals")}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    {getEventIcon(modalEvent.type)}
                    <div className="flex-1">
                      <span className="block text-sm text-gray-500 mb-1">
                        {t("events.modal.type")}
                      </span>
                      <span className="block font-semibold text-gray-800">
                        {modalEvent.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {t("events.modal.keyHighlights")}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {modalEvent.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <FaStar className="text-amber-400 text-base" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default Events;
