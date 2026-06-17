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
  FaBolt,
  FaWind,
  FaGasPump,
  FaWarehouse,
  FaBoxes,
  FaAtom,
  FaFire,
  FaSeedling,
  FaLayerGroup,
  FaCompressArrowsAlt,
  FaExpand,
  FaTimes,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const CentrifugalFansAndBlowers = () => {
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
    link.href = "/images/Catalogues/Bro.Centrifugal Blowers.pdf"; // Replace with your PDF path
    link.download = "Bro.Centrifugal Blowers.pdf";
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
      icon: <FaLayerGroup className="text-3xl text-blue-500" />,
      title: "Multi-Stage Capability",
      description:
        "Single stage Max 1800 mmwg, higher pressures achievable through multi-staging",
      details:
        "Advanced multi-stage design allows for achieving higher static pressures while maintaining efficiency across the entire operating range",
      benefit: "High pressure flexibility",
    },
    {
      icon: <FaWind className="text-3xl text-blue-500" />,
      title: "High Capacity Range",
      description:
        "Exceptional capacity handling up to 1,20,000 M³/Hr for large-scale operations",
      details:
        "Industry-leading capacity range designed for demanding industrial applications with consistent performance and reliability",
      benefit: "Maximum throughput",
    },
    {
      icon: <FaAtom className="text-3xl text-blue-500" />,
      title: "Special Materials",
      description:
        "Manufactured with special materials for gas conveying applications with superior durability",
      details:
        "Corrosion-resistant materials and specialized coatings ensure long service life in challenging gas handling environments",
      benefit: "Enhanced durability",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-500" />,
      title: "Advanced Sealing",
      description:
        "Equipped with mechanical and semi-mechanical seals for reliable operation",
      details:
        "Professional-grade sealing systems prevent leakage and ensure safe operation in gas conveying applications",
      benefit: "Leak-proof operation",
    },
  ];

  const applications = [
    {
      title: t("centrifugalFans.applications.idfd.title"),
      // description:
      //   "Induced Draft and Forced Draft fans for boiler and furnace applications",
      icon: <FaFire />,
      image: "🔥",
      bg: "/images/Application_Images/ID-FD-Fan-Systems.png",

      benefits: [
        t("centrifugalFans.applications.idfd.benefit1"),
        t("centrifugalFans.applications.idfd.benefit2"),
        t("centrifugalFans.applications.idfd.benefit3"),
      ],
    },
    {
      title: t("centrifugalFans.applications.gasConveying.title"),
      // description:
      //   "Positive conveying and negative suction for various gas types",
      icon: <FaGasPump />,
      image: "💨",
      bg: "/images/Application_Images/Gas-Conveying.png",

      benefits: [
        t("centrifugalFans.applications.gasConveying.benefit1"),
        t("centrifugalFans.applications.gasConveying.benefit2"),
        t("centrifugalFans.applications.gasConveying.benefit3"),
      ],
    },
    {
      title: t("centrifugalFans.applications.ventilation.title"),
      // description: "Large-scale ventilation systems for industrial facilities",
      icon: <FaIndustry />,
      image: "🏭",
      bg: "/images/Application_Images/Industrial-Ventilation.png",

      benefits: [
        t("centrifugalFans.applications.ventilation.benefit1"),
        t("centrifugalFans.applications.ventilation.benefit2"),
        t("centrifugalFans.applications.ventilation.benefit3"),
      ],
    },
    {
      title: t("centrifugalFans.applications.power.title"),
      // description:
      //   "Critical air and gas handling for power plants and utilities",
      icon: <FaBolt />,
      image: "⚡",
      bg: "/images/Application_Images/Power-Generation.png",

      benefits: [
        t("centrifugalFans.applications.power.benefit1"),
        t("centrifugalFans.applications.power.benefit2"),
        t("centrifugalFans.applications.power.benefit3"),
      ],
    },
    {
      title: t("centrifugalFans.applications.material.title"),
      // description: "Pneumatic conveying systems for bulk material transport",
      icon: <FaBoxes />,
      image: "📦",
      bg: "/images/Application_Images/Material-Handling.png",

      benefits: [
        t("centrifugalFans.applications.material.benefit1"),
        t("centrifugalFans.applications.material.benefit2"),
        t("centrifugalFans.applications.material.benefit3"),
      ],
    },
    {
      title: t("centrifugalFans.applications.process.title"),
      // description:
      //   "Specialized applications in chemical and process industries",
      icon: <FaCogs />,
      image: "⚙️",
      bg: "/images/Application_Images/Process-Industries.png",

      benefits: [
        t("centrifugalFans.applications.process.benefit1"),
        t("centrifugalFans.applications.process.benefit2"),
        t("centrifugalFans.applications.process.benefit3"),
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "1,20,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Static Pressure",
      value: "Max 1800 mmwg",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Multi-Stage",
      value: "Higher Pressures",
      icon: <FaLayerGroup />,
      color: "#f59e0b",
    },
    {
      parameter: "Application",
      value: "ID/FD Systems",
      icon: <FaWind />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Pressure",
      description:
        "Single stage Max 1800 mmwg with multi-stage options for higher pressures",
      icon: <FaTachometerAlt />,
      stat: "1800",
      unit: "mmwg",
    },
    {
      title: "Maximum Capacity",
      description:
        "Industry-leading capacity Up To 1,20,000 M³/Hr for large operations",
      icon: <FaChartLine />,
      stat: "1,20,000",
      unit: "M³/Hr",
    },
    {
      title: "Dual Operation",
      description:
        "ID/FD capability for both positive conveying and negative suction",
      icon: <FaWind />,
      stat: "ID/FD",
      unit: "Compatible",
    },
    {
      title: "Special Materials",
      description:
        "Advanced materials and sealing for gas conveying applications",
      icon: <FaShieldAlt />,
      stat: "Special",
      unit: "MOC & Seals",
    },
  ];

  const productImageUrl = "/images/swam-centrifugal-fans-and-blowers.jpg";

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
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/1800/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="inline-flex items-center gap-2 mt-10 md:mt-14 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 md:mb-8 animate-pulse">
              <FaStar className="text-blue-400" />
              <span>{t("centrifugalFans.hero.badge")}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              {t("centrifugalFans.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("centrifugalFans.hero.subtitle")}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 mb-6 md:mb-10">
              {t("centrifugalFans.hero.description")}
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:flex md:gap-8 mb-6 md:mb-10">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 leading-none">
                  {t("centrifugalFans.hero.capacityValue")}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t("centrifugalFans.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 leading-none">
                  {t("centrifugalFans.hero.pressureValue")}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t("centrifugalFans.hero.pressure")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 leading-none">
                  {t("centrifugalFans.hero.dualValue")}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t("centrifugalFans.hero.dual")}
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-3 md:gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>{t("centrifugalFans.hero.downloadBrochure")}</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] flex justify-center items-center">
              <div className="hidden sm:block absolute inset-0 bg-blue-500/10 rounded-full animate-pulse" />
              <img
                src={productImageUrl}
                alt="Centrifugal Fans & Blowers - Industrial Air Movement Solutions"
                className="max-w-[260px] sm:max-w-[340px] md:max-w-96 max-h-[260px] sm:max-h-[340px] md:max-h-96 object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-300 z-10 cursor-pointer"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute top-12 left-12 z-30 bg-blue-600/20 px-3 py-1.5 text-xs sm:text-sm sm:px-4 sm:py-2 text-white flex items-center gap-2 animate-bounce">
                  <FaWind />
                  <span>{t("centrifugalFans.hero.highCapacity")}</span>
                </div>
                <div
                  className="absolute top-24 right-8 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                >
                  <FaTachometerAlt />
                  <span>{t("centrifugalFans.hero.highPressure")}</span>
                </div>
                <div
                  className="absolute bottom-16 left-8 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                >
                  <FaShieldAlt />
                  <span>{t("centrifugalFans.hero.specialMaterials")}</span>
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
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("centrifugalFans.form.title")}
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
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={t("centrifugalFans.form.firstName")}
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
                    placeholder={t("centrifugalFans.form.lastName")}
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
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("centrifugalFans.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("centrifugalFans.form.phone")}
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
                  placeholder={t("centrifugalFans.form.company")}
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
                    {t("centrifugalFans.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("centrifugalFans.form.sendEnquiry")}</span>
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

      {/* Features Section */}

      {/* Technology Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl py-2 font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("centrifugalFans.technology.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("centrifugalFans.technology.subtitle")}
            </p>
          </div>

          <div className="space-y-16">
            {/* Technology Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-700 font-medium mb-6">
                  <FaWind />
                  <span>{t("centrifugalFans.technology.badge")}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  {t("centrifugalFans.technology.whyTitle")}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {t("centrifugalFans.technology.whyDescription")}
                </p>
                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                  <div className="text-center">
                    <span className="block text-xl sm:text-2xl font-bold text-blue-600">
                      {t("centrifugalFans.technology.stat1Value")}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600">
                      {t("centrifugalFans.technology.stat1Label")}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">
                      {t("centrifugalFans.technology.stat2Value")}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600">
                      {t("centrifugalFans.technology.stat2Label")}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">
                      {t("centrifugalFans.technology.stat3Value")}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600">
                      {t("centrifugalFans.technology.stat3Label")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Centrifugal Fan Technology"
                  className="w-full max-w-sm sm:max-w-md mx-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(productImageUrl)}
                />
                {/* <div className="absolute top-8 left-8">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <div className="absolute -top-2 left-6 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
                    Advanced Impeller
                  </div>
                </div> */}
                {/* <div className="absolute top-1/2 right-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <div className="absolute -top-2 -right-20 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
                    Multi-Stage Ready
                  </div>
                </div> */}
                {/* <div className="absolute bottom-12 left-12">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <div className="absolute -top-2 left-6 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
                    Special Material Construction
                  </div>
                </div> */}
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaLayerGroup className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  {t("centrifugalFans.technology.multiStage.title")}
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
Single stage delivers Max 1800 mmwg static pressure, with multi-stage options for even higher pressure requirements                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">
                      {t("centrifugalFans.technology.multiStage.singleStage")}:
                    </span>
                    <span className="text-sm font-medium">
                      Max 1800 mmwg
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">
                      {t("centrifugalFans.technology.multiStage.multiStage")}:
                    </span>
                    <span className="text-sm font-medium">
                      {t(
                        "centrifugalFans.technology.multiStage.multiStageValue"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <FaChartLine className="text-emerald-600 text-xl" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  {t("centrifugalFans.technology.capacity.title")}
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t("centrifugalFans.technology.capacity.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">
Up To 1,20,000 M³/Hr                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">
                      {t("centrifugalFans.technology.capacity.benefit2")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <FaWind className="text-cyan-600 text-xl" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  {t("centrifugalFans.technology.idfd.title")}
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t("centrifugalFans.technology.idfd.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">
                      {t("centrifugalFans.technology.idfd.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">
                      {t("centrifugalFans.technology.idfd.benefit2")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-amber-600 text-xl" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  {t("centrifugalFans.technology.materials.title")}
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t("centrifugalFans.technology.materials.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">
                      {t("centrifugalFans.technology.materials.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">
                      {t("centrifugalFans.technology.materials.benefit2")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}

      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("centrifugalFans.applications.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("centrifugalFans.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-6 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "bg-blue-50 border-2 border-blue-300 shadow-md"
                      : "bg-slate-50 border-2 border-transparent hover:bg-slate-100"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-xl sm:text-2xl">{app.image}</div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
                      {app.title}
                    </h4>
                    <p className="text-slate-600">{app.description}</p>
                  </div>
                  <FaArrowRight
                    className={`transition-colors duration-300 ${
                      selectedApplication === index
                        ? "text-blue-600"
                        : "text-slate-400"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* RIGHT: clean, readable image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[300px] sm:h-[340px] md:h-[420px]">
              {/* Big full-bleed image */}
              <img
                src={
                  applications[selectedApplication].bg ||
                  "/images/apps/applications-bg.jpg"
                }
                alt={applications[selectedApplication].title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gentle bottom gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/65" />

              {/* Small title badge (top-left) */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-2xl drop-shadow">
                  {applications[selectedApplication].image}
                </span>
                <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-black/60 text-white font-semibold text-base sm:text-lg">
                  {applications[selectedApplication].title}
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
                      <span className="font-medium">{benefit}</span>
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
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            {t("centrifugalFans.cta.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-xl leading-relaxed text-slate-300 mb-5">
            {t("centrifugalFans.cta.subtitle")}
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
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
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 md:p-8"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl max-h-[90svh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-2xl font-bold transition-colors duration-200 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-8">
              <div className="text-center mb-6">
                <img
                  src={modalImage}
                  alt="Centrifugal Fans & Blowers - Industrial Air Movement Solutions - Expanded View"
                  className="max-w-full  max-h-[70svh] object-contain mx-auto rounded-lg"
                />
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {t("centrifugalFans.modal.title")}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {t("centrifugalFans.modal.subtitle")}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {t("centrifugalFans.modal.capacity")}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      {t("centrifugalFans.modal.pressure")}
                    </span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {t("centrifugalFans.modal.applications")}
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

export default CentrifugalFansAndBlowers;
