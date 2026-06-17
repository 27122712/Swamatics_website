import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import {
  FaCogs,
  FaIndustry,
  FaChartLine,
  FaShieldAlt,
  FaTools,
  FaLeaf,
  FaThermometerHalf,
  FaTachometerAlt,
  FaVolumeDown,
  FaWrench,
  FaCheckCircle,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaRecycle,
  FaLightbulb,
  FaAward,
  FaRocket,
  FaPlay,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaCertificate,
  FaAtom,
  FaFlask,
  FaFire,
  FaWind,
  FaOilCan,
  FaTimes,
} from "react-icons/fa";

const ProcessGasBlowers = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create download link for PDF
    const link = document.createElement("a");
    link.href = "/images/Catalogues/Bro. Process Gas Booster & Compressor.pdf"; // Replace with your PDF path
    link.download = "Bro. Process Gas Booster & Compressor.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close modal and reset form
    setIsFormOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

    alert("Thank you! Your brochure is downloading.");
  };

  const keyFeatures = [
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: t("processGas.features.sealing.title"),
      description: t("processGas.features.sealing.description"),
      details: t("processGas.features.sealing.details"),
      benefit: t("processGas.features.sealing.benefit"),
    },
    {
      icon: <FaCogs className="text-2xl text-white" />,
      title: t("processGas.features.materials.title"),
      description: t("processGas.features.materials.description"),
      details: t("processGas.features.materials.details"),
      benefit: t("processGas.features.materials.benefit"),
    },
    {
      icon: <FaAtom className="text-2xl text-white" />,
      title: t("processGas.features.multiGas.title"),
      description: t("processGas.features.multiGas.description"),
      details: t("processGas.features.multiGas.details"),
      benefit: t("processGas.features.multiGas.benefit"),
    },
    {
      icon: <FaIndustry className="text-2xl text-white" />,
      title: t("processGas.features.optimization.title"),
      description: t("processGas.features.optimization.description"),
      details: t("processGas.features.optimization.details"),
      benefit: t("processGas.features.optimization.benefit"),
    },
  ];

  const gasTypes = [
    {
      name: "Hydrogen",
      symbol: "H₂",
      icon: <FaAtom />,
      color: "#3b82f6",
      applications: ["Petrochemical", "Refining", "Steel Production"],
    },
    {
      name: "Nitrogen",
      symbol: "N₂",
      icon: <FaFlask />,
      color: "#10b981",
      applications: ["Inerting", "Blanketing", "Food Processing"],
    },
    {
      name: "Oxygen",
      symbol: "O₂",
      icon: <FaWind />,
      color: "#f59e0b",
      applications: ["Combustion", "Oxidation", "Medical"],
    },
    {
      name: "Biogas",
      symbol: "CH₄ + CO₂",
      icon: <FaRecycle />,
      color: "#10b981",
      applications: ["Energy Recovery", "Waste Treatment", "Power Generation"],
    },
    {
      name: "Carbon Dioxide",
      symbol: "CO₂",
      icon: <FaLeaf />,
      color: "#6b7280",
      applications: [
        "Food Processing",
        "Chemical Synthesis",
        "Enhanced Oil Recovery",
      ],
    },
    {
      name: "Methane",
      symbol: "CH₄",
      icon: <FaFire />,
      color: "#ef4444",
      applications: ["Natural Gas", "Landfill Gas", "Digester Gas"],
    },
  ];

  const applications = [
    {
      titleKey: "processGas.applications.chemical.title",
      icon: <FaFlask />,
      image: "🧪",
      bg: "/images/Application_Images/Chemical-&-Petrochemical.png",
      benefits: [
        "processGas.applications.chemical.benefit1",
        "processGas.applications.chemical.benefit2",
        "processGas.applications.chemical.benefit3",
      ],
    },
    {
      titleKey: "processGas.applications.petrochemical.title",
      icon: <FaOilCan />,
      image: "⚗️",
      bg: "/images/Application_Images/Chemical-&-Petrochemical.png",
      benefits: [
        "processGas.applications.petrochemical.benefit1",
        "processGas.applications.petrochemical.benefit2",
        "processGas.applications.petrochemical.benefit3",
      ],
    },
    {
      titleKey: "processGas.applications.steel.title",
      icon: <FaIndustry />,
      image: "🏭",
      bg: "/images/Application_Images/Steel-&-Metal-Processing.png",
      benefits: [
        "processGas.applications.steel.benefit1",
        "processGas.applications.steel.benefit2",
        "processGas.applications.steel.benefit3",
      ],
    },
    {
      titleKey: "processGas.applications.power.title",
      icon: <FaRocket />,
      image: "⚡",
      bg: "/images/Application_Images/Power-Generation.png",
      benefits: [
        "processGas.applications.power.benefit1",
        "processGas.applications.power.benefit2",
        "processGas.applications.power.benefit3",
      ],
    },
    {
      titleKey: "processGas.applications.environmental.title",
      icon: <FaLeaf />,
      image: "🌱",
      bg: "/images/Application_Images/Environmental-Systems.png",
      benefits: [
        "processGas.applications.environmental.benefit1",
        "processGas.applications.environmental.benefit2",
        "processGas.applications.environmental.benefit3",
      ],
    },
    {
      titleKey: "processGas.applications.food.title",
      icon: <FaShieldAlt />,
      image: "🍃",
      bg: "/images/Application_Images/Food-&-Pharmaceutical.png",
      benefits: [
        "processGas.applications.food.benefit1",
        "processGas.applications.food.benefit2",
        "processGas.applications.food.benefit3",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 1,00,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure",
      value: "Max 1.3 bar 'g'",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Operation",
      value: "Continuous Duty",
      icon: <FaTools />,
      color: "#f59e0b",
    },
    {
      parameter: "Sealing",
      value: "Leak-Proof Design",
      icon: <FaShieldAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "40+ Years Experience",
      description: "Four decades of expertise in gas handling technology",
      icon: <FaAward />,
      stat: "40+",
      unit: "Years",
    },
    {
      title: "Multi-Gas Capability",
      description: "Handles diverse industrial gases safely and efficiently",
      icon: <FaAtom />,
      stat: "10+",
      unit: "Gas Types",
    },
    {
      title: "Global Installations",
      description: "Trusted by industries worldwide for critical applications",
      icon: <FaGlobe />,
      stat: "500+",
      unit: "Installations",
    },
    {
      title: "Zero Leakage",
      description: "Advanced sealing technology ensures leak-proof operation",
      icon: <FaShieldAlt />,
      stat: "100%",
      unit: "Leak-Proof",
    },
  ];

  // Using the official process gas blowers image from Swamatics website
  const productImageUrl = "/images/Process-Gas-BlowersGas-Boosters.jpg";

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="min-h-[82svh] md:min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden pt-20 md:pt-0">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <div className="text-white lg:text-left text-center">
            <br />

            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
              <FaAtom className="text-amber-400" />
              <span>{t("processGas.hero.badge")}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              {t("processGas.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("processGas.hero.subtitle")}
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 opacity-90">
              {t("processGas.hero.description")}
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:flex md:justify-start md:gap-8 mb-6 md:mb-10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 leading-none">
                  {t("processGas.hero.capacityValue")}
                </div>
                <div className="text-sm opacity-80 mt-2">
                  {t("processGas.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 leading-none">
                  {t("processGas.hero.pressureValue")}
                </div>
                <div className="text-sm opacity-80 mt-2">
                  {t("processGas.hero.pressure")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 leading-none">
                  {t("processGas.hero.leakProofValue")}
                </div>
                <div className="text-sm opacity-80 mt-2">
                  {t("processGas.hero.leakProof")}
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-3 md:gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>{t("processGas.hero.downloadBrochure")}</span>
              </button>
            </div>
            <br />
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md sm:max-w-lg mx-auto">
              {/* Pulsing background */}
              <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-radial from-white/15 via-white/5 to-transparent rounded-full animate-pulse" />

              <img
                src={productImageUrl}
                alt="Process Gas Blower"
                className="w-full h-auto rounded-3xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105 bg-white/10 p-4 backdrop-blur-lg border border-white/20"
                onClick={() => openModal(productImageUrl)}
              />

              {/* Floating specs - hidden on mobile */}
              <div className="absolute inset-0 pointer-events-none overflow-visible z-10 hidden lg:block">
                <div
                  className="absolute top-[15%] -right-[15%] bg-white/95 backdrop-blur-lg px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg border-2 border-white/80 min-w-[100px] justify-center whitespace-nowrap z-15 animate-bounce"
                  style={{ animationDuration: "3s", animationDelay: "0s" }}
                >
                  <FaShieldAlt />
                  <span>{t("processGas.hero.floatingLeakProof")}</span>
                </div>
                <div
                  className="absolute top-[60%] -left-[20%] bg-white/95 backdrop-blur-lg px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg border-2 border-white/80 min-w-[100px] justify-center whitespace-nowrap z-15 animate-bounce"
                  style={{ animationDuration: "3s", animationDelay: "1s" }}
                >
                  <FaAtom />
                  <span>{t("processGas.hero.floatingMultiGas")}</span>
                </div>
                <div
                  className="absolute bottom-[25%] -right-[10%] bg-white/95 backdrop-blur-lg px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg border-2 border-white/80 min-w-[100px] justify-center whitespace-nowrap z-15 animate-bounce"
                  style={{ animationDuration: "3s", animationDelay: "2s" }}
                >
                  <FaCogs />
                  <span>{t("processGas.hero.floatingChemicalGrade")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90svh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("processGas.form.title")}
                </h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={t("processGas.form.firstName")}
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                    required
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^A-Za-z]/g, "");
                    }}
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={t("processGas.form.lastName")}
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                    required
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^A-Za-z]/g, "");
                    }}
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("processGas.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("processGas.form.phone")}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                    required
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    minLength={7}
                    maxLength={15}
                  />
                </div>

                {/* Company Name */}
                <input
                  type="text"
                  name="company"
                  placeholder={t("processGas.form.company")}
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                {/* Declaration Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="declaration"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleInputChange}
                    className="mr-2"
                    required
                  />
                  <label
                    htmlFor="declaration"
                    className="text-sm text-gray-600"
                  >
                    {t("processGas.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("processGas.form.sendEnquiry")}</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Key Specifications */}
      <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            {t("processGas.specifications.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-xl border shadow-sm flex items-start gap-3">
              <FaChartLine className="text-blue-600 text-xl sm:text-2xl mt-1" />

              <div>
                <div className="font-semibold">
                  {t("processGas.specifications.capacity")}
                </div>
                <div className="text-slate-600">
                  {t("processGas.specifications.capacityValue")}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border shadow-sm flex items-start gap-3">
              <FaTachometerAlt className="text-blue-600 text-2xl mt-1" />
              <div>
                <div className="font-semibold">
                  {t("processGas.specifications.pressure")}
                </div>
                <div className="text-slate-600">
Max 1.3 bar(g)                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border shadow-sm flex items-start gap-3">
              <FaAtom className="text-blue-600 text-2xl mt-1" />
              <div>
                <div className="font-semibold">
                  {t("processGas.specifications.gasCompat")}
                </div>
                <div className="text-slate-600">
                  {t("processGas.specifications.gasCompatValue")}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border shadow-sm flex items-start gap-3">
              <FaShieldAlt className="text-blue-600 text-2xl mt-1" />
              <div>
                <div className="font-semibold">
                  {t("processGas.specifications.sealing")}
                </div>
                <div className="text-slate-600">
                  {t("processGas.specifications.sealingValue")}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border shadow-sm flex items-start gap-3">
              <FaCogs className="text-blue-600 text-2xl mt-1" />
              <div>
                <div className="font-semibold">
                  {t("processGas.specifications.materials")}
                </div>
                <div className="text-slate-600">
                  {t("processGas.specifications.materialsValue")}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border shadow-sm flex items-start gap-3">
              <FaThermometerHalf className="text-blue-600 text-2xl mt-1" />
              <div>
                <div className="font-semibold">
                  {t("processGas.specifications.temperature")}
                </div>
                <div className="text-slate-600">
                  {t("processGas.specifications.temperatureValue")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              {t("processGas.features.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("processGas.features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent relative overflow-hidden group ${
                  activeFeature === index
                    ? "border-indigo-500 -translate-y-2 shadow-2xl"
                    : "hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-500"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 transition-opacity duration-300 ${
                    activeFeature === index
                      ? "opacity-5"
                      : "group-hover:opacity-5 opacity-0"
                  }`}
                />

                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 relative z-10">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm relative z-10">
                  <FaCheckCircle />
                  <span>{feature.benefit}</span>
                </div>
                {activeFeature === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 text-gray-600 text-sm leading-relaxed">
                    <p>{feature.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}

      {/* <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Technical Specifications
              </h2>
              <p className="text-lg leading-relaxed mb-8 opacity-90">
                Our process gas blowers are engineered for demanding chemical
                and industrial applications, delivering reliable performance
                with specialized materials and advanced sealing systems.
              </p> */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-white/20"
                  >
                    <div
                      className="text-2xl mb-4"
                      style={{ color: spec.color }}
                    >
                      {spec.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold mb-2 opacity-80">
                        {spec.parameter}
                      </h4>
                      <div
                        className="text-lg font-bold"
                        style={{ color: spec.color }}
                      >
                        {spec.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}

      {/* <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  <FaAward />
                  <span>ATEX Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  <FaShieldAlt />
                  <span>Leak-Proof Design</span>
                </div>
              </div> */}

      {/* <div className="relative max-w-md">
                <img
                  src={productImageUrl}
                  alt="Process Gas Blower Specifications"
                  className="w-full h-auto rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                {/* Tech highlights - positioned around the image */}
      {/* Improved Sealing System - Top */}
      {/* <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full text-xs font-semibold text-gray-800 shadow-xl border-2 border-white/80 whitespace-nowrap">
                    Improved Sealing System
                  </div> */}

      {/* Special Construction Materials - Left side */}
      {/* <div className="absolute top-[35%] -left-[15%] bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full text-xs font-semibold text-gray-800 shadow-xl border-2 border-white/80 whitespace-nowrap">
                    Special Construction Materials
                  </div> */}

      {/* Mechanical Seals Available - Right side */}
      {/* <div className="absolute top-[55%] -right-[15%] bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full text-xs font-semibold text-gray-800 shadow-xl border-2 border-white/80 whitespace-nowrap">
                    Mechanical Seals Available
                  </div> */}

      {/* Chemical Process Optimized - Bottom */}
      {/* <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full text-xs font-semibold text-gray-800 shadow-xl border-2 border-white/80 whitespace-nowrap">
                    Chemical Process Optimized
                  </div> */}

      {/* Applications Section */}
      <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              {t("processGas.applications.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600">
              {t("processGas.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mt-8 md:mt-12">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`bg-slate-50 rounded-xl p-3 sm:p-4 flex items-center gap-3 cursor-pointer border-2 transition-all ${
                    selectedApplication === index
                      ? "bg-white border-blue-600 transform translate-x-1 shadow-md"
                      : "border-transparent hover:bg-white hover:border-blue-600 hover:transform hover:translate-x-1 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-xl sm:text-2xl rounded-lg flex items-center justify-center shadow">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1.5 sm:mb-2">
                      {t(app.titleKey)}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                  <FaArrowRight
                    className={`text-indigo-500 transition-transform duration-300 ${
                      selectedApplication === index ? "translate-x-1" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* RIGHT: clean, readable image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[300px] sm:h-[340px] md:h-[420px]">
              {" "}
              {/* Big full-bleed image */}
              <img
                src={
                  applications[selectedApplication].bg ||
                  "/images/apps/applications-bg.jpg"
                }
                alt={t(applications[selectedApplication].titleKey)}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gentle bottom gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/65" />
              {/* Small title badge (top-left) */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl drop-shadow">
                  {applications[selectedApplication].image}
                </span>
                <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-black/60 text-white font-semibold text-base sm:text-lg">
                  {t(applications[selectedApplication].titleKey)}
                </span>
              </div>
              {/* Optional short description (kept subtle & narrow) */}
              {applications[selectedApplication].description && (
                <div className="absolute top-16 left-4 right-4 max-w-md">
                  <p className="px-3 py-2 rounded-lg bg-black/45 text-white/95 text-sm leading-relaxed ring-1 ring-white/10">
                    {applications[selectedApplication].description}
                  </p>
                </div>
              )}
              {/* Compact benefit pills (bottom-left, not full width) */}
              <div className="absolute bottom-4 left-4 right-4 max-w-md space-y-2">
                {applications[selectedApplication].benefits.map(
                  (benefit, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-black/45 text-white text-[11px] sm:text-sm ring-1 ring-white/10 shadow-md"
                    >
                      <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                      <span className="font-medium">{t(benefit)}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              {t("processGas.cta.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-5 opacity-90">
              {t("processGas.cta.subtitle")}
            </p>

            {/* <div className="flex justify-center gap-4 mb-12 flex-wrap">
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                <FaPhone />
                <span>Get Expert Consultation</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 backdrop-blur-lg px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all">
                <FaDownload />
                <span>Download Technical Brochure</span>
              </button>
            </div> */}

            <div className="flex justify-center gap-4 md:gap-8 flex-wrap text-sm">
              {/* Phone - optional to link */}
              <div className="flex items-center gap-2 text-sm opacity-90">
                <FaPhone />
                <span>+91-99103-02163</span>
              </div>

              {/* ✅ Email */}
              <a
                href="mailto:sales@swamatics.com"
                className="flex items-center gap-2 text-sm opacity-90 hover:underline"
              >
                <FaEnvelope />
                <span>sales@swamatics.com</span>
              </a>

              {/* ✅ Location */}
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <a
                  href="https://www.google.com/maps/dir/28.6265871,77.3778548/SWAM+PNEUMATICS+PVT.LTD/@28.6153645,77.3712721,15z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x390cef861e8f8021:0x9df3c94baebd9915!2m2!1d77.38298!2d28.6044287!3e2?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-90 hover:underline"
                >
                  C-2, Sector-3, Noida-201301, India
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 md:p-8"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[92vw] md:max-w-[90vw] max-h-[90svh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black/70 text-white w-10 h-10 rounded-full text-xl cursor-pointer z-50 flex items-center justify-center transition-all duration-300 hover:bg-black/90 hover:scale-110"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col">
              <div className="relative">
                <img
                  src={modalImage}
                  alt="Process Gas Blower - Expanded View"
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
                <div className="p-4 sm:p-6 bg-white">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    {t("processGas.modal.title")}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4">
                    {t("processGas.modal.subtitle")}
                  </p>
                  <div className="flex gap-2 sm:gap-4 flex-wrap">
                    <span className="bg-gray-100 px-3 py-1.5 rounded-2xl text-xs sm:text-sm text-gray-700 font-medium">
                      {t("processGas.modal.capacity")}
                    </span>
                    <span className="bg-gray-100 px-4 py-2 rounded-2xl text-sm text-gray-700 font-medium">
                      {t("processGas.modal.pressure")}
                    </span>
                    <span className="bg-gray-100 px-4 py-2 rounded-2xl text-sm text-gray-700 font-medium">
                      {t("processGas.modal.operation")}
                    </span>
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

export default ProcessGasBlowers;
