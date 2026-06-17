import React, { useState } from 'react';
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaCheckCircle,
  FaCog,
  FaIndustry,
  FaFlask,
  FaCertificate,
  FaTools,
  FaChartLine,
  FaShieldAlt,
  FaBolt,
  FaThermometerHalf,
  FaVolumeUp,
  FaClock,
  FaEye,
  FaAward,
} from "react-icons/fa";

const QualityTesting = () => {

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

  
  const testingFeatures = [
    {
      icon: <FaBolt className="text-4xl text-blue-600 mb-4" />,
      title: "High Voltage Testing",
      description:
        "In-house testing facility up to 1000KW 6.6KV HV testing with shop test motor of 1000KW",
    },
    {
      icon: <FaCertificate className="text-4xl text-green-600 mb-4" />,
      title: "International Standards",
      description:
        "All testing done as per International Standards BS1571(Part II)",
    },
    {
      icon: <FaIndustry className="text-4xl text-purple-600 mb-4" />,
      title: "Large Testing Facilities",
      description:
        "Test beds with test motors up to 1000KW with voltage range of 415V, 690V, 3300V & 6600V",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-600 mb-4" />,
      title: "Vigorous Performance Test",
      description:
        "Every SWAM product passes through rigorous performance testing before dispatch",
    },
  ];

  const testParameters = [
    { icon: <FaChartLine />, name: "Pumping Capacity" },
    { icon: <FaThermometerHalf />, name: "Temperature Rise" },
    { icon: <FaCog />, name: "Vibrations" },
    { icon: <FaVolumeUp />, name: "Noise Level" },
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
  return (
    <MainTemplate>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="text-center mt-15">
              <h1 className="text-5xl font-bold mb-6">
                Quality Control & Testing
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                SWAM is the only blower company globally having in-house testing
                facility up to 1000KW 6.6KV HV testing, ensuring unmatched
                quality and reliability.
              </p>
              <div className="flex justify-center">
                <FaFlask className="text-6xl text-blue-300 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Testing Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              World-Class Testing Capabilities
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Philosophy Section */}
        <div className="bg-white py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Quality Philosophy
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Many years ago Quality Control was something like "Measure
                    twice and cut once." Today it is far more sophisticated,
                    with automated machinery and 100% repeatability.
                  </p>
                  <p>
                    Emphasis on quality and performance is a commitment of every
                    individual at SWAM beginning at grass root level.
                  </p>
                  <p>
                    The quality control is practiced at all levels of the
                    organization and all its aspects are thoroughly complied
                    with the specified structured standard specification till
                    the product is delivered.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="text-center">
                  <FaAward className="text-6xl text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-700">
                    A new way of saying this is "garbage in, garbage out." We
                    ensure excellence at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Process Section */}
        <div className="bg-white py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Testing Process
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Mechanical Run Test */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <FaClock className="text-3xl text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Mechanical Run Test
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Each machine undergoes continuous running test for 2-3 hours
                  continuously at different set points, checking all parameters:
                </p>
                <div className="space-y-3">
                  {testParameters.map((param, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <span className="text-blue-600 mr-3">{param.icon}</span>
                      {param.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hot Run Testing */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <FaFlask className="text-3xl text-red-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Hot Run Testing
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Final product testing at our "Hot run" testing station where
                  every finished product is run tested for 4-6 continuous hours.
                </p>
                <div className="bg-red-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <FaCertificate className="text-red-600 mr-2" />
                    <span className="text-sm font-medium text-red-800">
                      Test Certificate Issued
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <FaEye className="text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-800">
                      Third Party Witnessing Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Quality Control */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <FaTools className="text-3xl text-green-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Quality Control
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      All raw material and castings checked upon delivery
                    </span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>All final machining completed on CNC Machines</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Fixed stage measuring and testing stations</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Over 18 quality control engineers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Capacity Highlight */}
        <div className="bg-blue-600 text-white py-10 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-25 rounded-full mb-6">
                <FaIndustry className="text-4xl text-white" />
              </div>
              <h2 className="text-5xl font-bold mb-4 text-white">
                Testing Facility Capacity
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto opacity-90">
                World's only blower company with comprehensive in-house testing
                capabilities up to industrial-grade specifications
              </p>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="group bg-white bg-opacity-95 rounded-2xl p-8 border border-gray-200 hover:bg-opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <FaBolt className="text-2xl text-gray-900" />
                  </div>
                </div>
                <div className="text-6xl font-bold mb-4 text-yellow-600">
                  1000
                </div>
                <div className="text-2xl font-semibold mb-2 text-gray-900">
                  KW Motor Size
                </div>
                <div className="text-gray-600 text-sm">
                  Maximum testing capacity with high-power industrial motors
                </div>
              </div>

              <div className="group bg-white bg-opacity-95 rounded-2xl p-8 border border-gray-200 hover:bg-opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center">
                    <FaFlask className="text-2xl text-gray-900" />
                  </div>
                </div>
                <div className="text-6xl font-bold mb-4 text-red-600">6.6</div>
                <div className="text-2xl font-semibold mb-2 text-gray-900">
                  KV High Voltage
                </div>
                <div className="text-gray-600 text-sm">
                  High voltage testing capabilities for industrial applications
                </div>
              </div>

              <div className="group bg-white bg-opacity-95 rounded-2xl p-8 border border-gray-200 hover:bg-opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                    <FaClock className="text-2xl text-gray-900" />
                  </div>
                </div>
                <div className="text-6xl font-bold mb-4 text-green-600">
                  4-6
                </div>
                <div className="text-2xl font-semibold mb-2 text-gray-900">
                  Hours Testing
                </div>
                <div className="text-gray-600 text-sm">
                  Continuous performance testing for reliability assurance
                </div>
              </div>
            </div>

            {/* Voltage Range Section */}
            <div className="bg-white bg-opacity-95 rounded-3xl p-8 border border-gray-200 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  Comprehensive Voltage Range Testing
                </h3>
                <p className="text-gray-600">
                  Supporting diverse industrial voltage requirements
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { voltage: "415V", desc: "Standard Industrial" },
                  { voltage: "690V", desc: "Medium Voltage" },
                  { voltage: "3300V", desc: "High Voltage" },
                  { voltage: "6600V", desc: "Extra High Voltage" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                  >
                    <div className="text-3xl font-bold text-green-500 mb-2">
                      {item.voltage}
                    </div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Leadership Banner */}
            <div className="text-center bg-green-300 text-gray-900 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-4">
                <FaAward className="text-4xl mr-4" />
                <h3 className="text-3xl font-bold">Global Industry Leader</h3>
              </div>
              <p className="text-xl font-semibold">
                The ONLY blower company worldwide with complete in-house testing
                facility up to 1000KW 6.6KV
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Growth Focus */}
        <div className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <FaChartLine className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Growth Focus
              </h2>
              <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                SWAM continues to grow year on year, driven by our unwavering
                commitment to excellence.
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Our strategic focus areas ensure sustainable growth and industry
                leadership through:
              </p>
            </div>

            {/* Growth Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {[
                {
                  title: "Integrity",
                  icon: <FaShieldAlt className="text-4xl text-blue-600 mb-4" />,
                  description:
                    "Ethical business practices and transparent operations that build lasting trust with our clients and partners.",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "from-blue-50 to-cyan-50",
                  borderColor: "border-blue-200",
                },
                {
                  title: "High Quality",
                  icon: <FaAward className="text-4xl text-green-600 mb-4" />,
                  description:
                    "Uncompromising standards in every product, backed by rigorous testing and continuous improvement.",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "from-green-50 to-emerald-50",
                  borderColor: "border-green-200",
                },
                {
                  title: "Reliability",
                  icon: <FaCog className="text-4xl text-purple-600 mb-4" />,
                  description:
                    "Dependable performance that our customers can count on, ensuring operational excellence at all times.",
                  color: "from-purple-500 to-violet-500",
                  bgColor: "from-purple-50 to-violet-50",
                  borderColor: "border-purple-200",
                },
                {
                  title: "Innovation",
                  icon: <FaFlask className="text-4xl text-orange-600 mb-4" />,
                  description:
                    "Cutting-edge technology and creative solutions that push the boundaries of what's possible in blower technology.",
                  color: "from-orange-500 to-red-500",
                  bgColor: "from-orange-50 to-red-50",
                  borderColor: "border-orange-200",
                },
              ].map((pillar, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${pillar.bgColor} rounded-2xl p-8 border-2 ${pillar.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2`}
                >
                  <div className="text-center mb-6">
                    {pillar.icon}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div
                    className={`w-full h-2 bg-gradient-to-r ${pillar.color} rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Growth Statistics */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Growth Through Excellence
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our commitment to these core values has driven consistent
                  growth and established us as the global leader in blower
                  technology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                    <FaIndustry className="text-2xl text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Global Reach
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Serving industries worldwide with unmatched expertise and
                    reliability
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                    <FaTools className="text-2xl text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Advanced Technology
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Cutting-edge manufacturing and testing facilities setting
                    industry standards
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4">
                    <FaCheckCircle className="text-2xl text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Proven Track Record
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Decades of successful projects and satisfied customers
                    across the globe
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
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
                  // In your <input ...> keep your props and add:
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
        </div>
      </div>
    </MainTemplate>
  );
};

export default QualityTesting;
