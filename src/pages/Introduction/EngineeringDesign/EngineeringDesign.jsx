import React, { useState } from 'react';
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaCogs,
  FaUserTie,
  FaShieldAlt,
  FaGlobe,
  FaHandshake,
  FaTools,
  FaIndustry,
  FaChartLine,
  FaCheckCircle,
  FaLightbulb,
  FaAward,
  FaHeart,
  FaArrowRight,
  FaStar,
  FaRocket,
  FaCertificate,
  FaFlag,
  FaOilCan,
  FaHardHat,
  FaEuroSign,
} from "react-icons/fa";
import { GiGears, GiFactory, GiChemicalDrop, GiMining } from "react-icons/gi";
import {
  MdEngineering,
  MdPrecisionManufacturing,
  MdSecurity,
} from "react-icons/md";
import {
  Engineering,
  Security,
  Handshake as HandshakeIcon,
  EmojiEvents,
  Lightbulb as LightbulbIcon,
  Shield,
} from "@mui/icons-material";

const EngineeringDesign = () => {
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

  const services = [
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Concept Development",
    description:
      "From initial concept to final design, we provide comprehensive engineering solutions.",
    gradient: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
  },
  {
    icon: <MdEngineering className="w-8 h-8" />,
    title: "Engineering Design",
    description:
      "Advanced engineering and design capabilities for complex industrial applications.",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    icon: <MdPrecisionManufacturing className="w-8 h-8" />,
    title: "Manufacturing",
    description:
      "State-of-the-art manufacturing facilities with precision engineering.",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: "Testing & Commissioning",
    description:
      "Comprehensive testing, installation and commissioning services.",
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50",
  },
];

// Add your images array here
// const projectImages = [
//   "/images/extra/9.png",
//   "/images/extra/12.png",
//   "/images/extra/16.png",
//   "/images/extra/25.png",
//   "/images/extra/30.png",
//   "/images/extra/31.png",
// ];

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
  const expertise = [
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "Mechanical Engineers",
      description: "Fully qualified mechanical engineering specialists",
      color: "text-blue-600",
    },
    {
      icon: <GiChemicalDrop className="w-6 h-6" />,
      title: "Process Engineers",
      description: "Experts in hazardous chemicals and gases",
      color: "text-green-600",
    },
    {
      icon: <FaIndustry className="w-6 h-6" />,
      title: "Electrical Systems",
      description: "Advanced electrical engineering solutions",
      color: "text-purple-600",
    },
    {
      icon: <GiGears className="w-6 h-6" />,
      title: "Instrumentation & Control",
      description: "Precision control systems and instrumentation",
      color: "text-orange-600",
    },
  ];

  const standards = [
    {
      name: "ISO",
      color: "bg-blue-500",
      icon: <FaCertificate className="w-5 h-5" />,
      description: "International Organization for Standardization",
    },
    {
      name: "ATEX",
      color: "bg-green-500",
      icon: <FaFlag className="w-5 h-5" />,
      description: "ATmospheres EXplosibles",
    },
    {
      name: "API",
      color: "bg-purple-500",
      icon: <FaOilCan className="w-5 h-5" />,
      description: "American Petroleum Institute",
    },
    {
      name: "CE",
      color: "bg-orange-500",
      icon: <FaEuroSign className="w-5 h-5" />,
      description: "Conformité Européenne",
    },
    {
      name: "OHSAS",
      color: "bg-red-500",
      icon: <FaShieldAlt className="w-5 h-5" />,
      description: "Occupational Health and Safety Assessment Series",
    },
    // {
    //   name: "Mining",
    //   color: "bg-indigo-500",
    //   icon: <GiMining className="w-5 h-5" />,
    //   description: "Mining Industry Standards",
    // },
  ];

  const growthPillars = [
    {
      icon: <FaHandshake className="w-12 h-12" />,
      title: "Integrity",
      description:
        "Building trust through honest and ethical business practices",
      gradient: "from-blue-600 to-blue-800",
      decorativeIcon: <FaStar className="w-4 h-4" />,
    },
    {
      icon: <FaAward className="w-12 h-12" />,
      title: "High Quality",
      description: "Delivering excellence in every product and service",
      gradient: "from-emerald-600 to-emerald-800",
      decorativeIcon: <FaRocket className="w-4 h-4" />,
    },
    {
      icon: <FaShieldAlt className="w-12 h-12" />,
      title: "Reliability",
      description: "Dependable solutions that perform for many years",
      gradient: "from-purple-600 to-purple-800",
      decorativeIcon: <FaCheckCircle className="w-4 h-4" />,
    },
    {
      icon: <FaLightbulb className="w-12 h-12" />,
      title: "Innovation",
      description: "Continuous improvement and technological advancement",
      gradient: "from-orange-600 to-orange-800",
      decorativeIcon: <FaLightbulb className="w-4 h-4" />,
    },
  ];

  return (
    <MainTemplate>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-12 mt-10 overflow-hidden">
          {/* Animated background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Enhanced icon with glow effect */}
              <div className="flex justify-center mb-8">
                <div className="relative p-6 bg-gradient-to-br from-white/20 to-white/10 rounded-full backdrop-blur-sm border border-white/20 shadow-2xl group hover:scale-110 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-600/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Engineering
                    sx={{ fontSize: 80, color: "white" }}
                    className="relative z-10"
                  />
                </div>
              </div>

              {/* Enhanced typography with animations */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
                  Engineering & Design
                </h1>

                <div className="flex justify-center mb-5">
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                </div>

                <p className="text-xl md:text-2xl mb-5 text-blue-100 max-w-5xl mx-auto leading-relaxed font-light">
                  Complete Turn Key service from concept, engineering and
                  design, all the way to manufacturing, testing, installation
                  and commissioning of various blower and vacuum applications.
                </p>

                {/* Call-to-action buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                  <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                    Get Started
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="group border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1">
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Services Section */}
        <div className="py-5 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                <FaRocket className="w-4 h-4 mr-2" />
                Our Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Engineering Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive engineering solutions designed to meet your
                specific requirements with cutting-edge technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden`}
                  >
                    {/* Background decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed relative z-10">
                      {service.description}
                    </p>

                    {/* Hover arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaArrowRight className="text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Add the images section here */}
{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
  {projectImages.map((img, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
    >
      <img
        src={img}
        alt={`Project ${index + 1}`}
        className="w-full h-64 object-cover"
      />
    </div>
  ))}
</div> */}
          </div>
        </div>

        {/* Enhanced Team Expertise Section */}
        <div className="py-5 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
                <FaCogs className="w-4 h-4 mr-2" />
                Expert Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Engineering Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our engineering and design team are fully qualified and skilled
                professionals with decades of combined experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((expert, index) => (
                <div
                  key={index}
                  className="group bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div
                    className={`${expert.color} mb-6 p-3 bg-gray-50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 relative z-10`}
                  >
                    {expert.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10">
                    {expert.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                    {expert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Safety & Standards Section */}
        <div className="py-10 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-blue-100 rounded-2xl mr-6">
                    <Security sx={{ fontSize: 48, color: "#2563eb" }} />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      Safety & Standards
                    </h2>
                    <div className="w-16 h-1 bg-blue-500 mt-3"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    "Incorporate appropriate health criteria and factors into business decisions as well as selection and placement of personnel at appropriate levels.",
                    "Provide & maintain safe and healthy work place through operational procedures, safe systems and method of work.",
                    "Fully conversant with many international standards and certifications.",
                  ].map((text, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="p-2 bg-green-100 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <FaCheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-10 rounded-3xl shadow-xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-8 relative z-10">
                  International Standards
                </h3>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {standards.map((standard, index) => (
                    <div
                      key={index}
                      className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden border border-gray-100 hover:border-gray-200"
                    >
                      <div
                        className={`absolute top-0 left-0 w-full h-2 ${standard.color} rounded-t-xl`}
                      ></div>

                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 ${standard.color} rounded-lg mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {standard.icon}
                      </div>

                      <div className="mb-2">
                        <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors block">
                          {standard.name}
                        </span>
                      </div>

                      <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                        {standard.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Customer Focus Section */}
        <div className="py-10 bg-gray-900 text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                  <FaHandshake className="w-16 h-16 text-blue-200" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Customer-Centric Approach
              </h2>

              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Swam prides itself by listening to you the customer, we work
                with you in the development of the best and most efficient
                system, which will not only do the job, but will perform for
                many years.
              </p>

              <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl max-w-4xl mx-auto border border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                <p className="text-lg text-blue-100 leading-relaxed relative z-10">
                  As engineering manufacturer Swam is very adaptable, with
                  regard to materials, suitability/compatibility, both for the
                  process and the environment. We are more than happy to help
                  our customers regardless of the size of the project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Growth Pillars Section */}
      

        {/* Enhanced Call to Action Section */}
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
      </div>
    </MainTemplate>
  );
};

export default EngineeringDesign;
