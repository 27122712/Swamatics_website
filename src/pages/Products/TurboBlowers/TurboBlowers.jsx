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
  FaTimes,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "../../../styles/animations.css";

const TurboBlowers = () => {
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
    link.href = "/images/Catalogues/Bro. Turbo Blower.pdf"; // Replace with your PDF path
    link.download = "Bro. Turbo Blower.pdf";
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
      icon: <FaBolt className="feature-icon" />,
      title: "High Speed Technology",
      description:
        "Advanced single stage centrifugal machine with high speed focused specialized technology",
      details:
        "Oil-less operation with precision-engineered impellers for maximum efficiency",
      benefit: "Up to 95% efficiency",
    },
    {
      icon: <FaGears className="feature-icon" />,
      title: "Integrally Geared Design",
      description:
        "Speed increasing gearbox geared up to impeller working speed for optimal performance",
      details:
        "Constant speed operation around 3000 rpm from motor with intelligent speed control",
      benefit: "Consistent performance",
    },
    {
      icon: <FaWind className="feature-icon" />,
      title: "Variable Guide Vanes",
      description:
        "Diffuser vanes and inlet guide vanes for dynamic airflow regulation",
      details:
        "Variable inlet guide vanes optimize power consumption and handle pressure changes",
      benefit: "45-100% turndown range",
    },
    {
      icon: <FaLeaf className="feature-icon" />,
      title: "Oil-Free Operation",
      description: "Completely oil-free design ensuring clean air delivery",
      details:
        "Advanced bearing technology eliminates oil contamination in airflow",
      benefit: "100% oil-free guarantee",
    },
  ];

  const applications = [
    {
      titleKey: "turboBlowers.applications.wastewater.title",
      icon: <FaRecycle />,
      image: "💧",
      bg: "/images/Application_Images/Wastewater-Treatment.png",
      benefits: [
        "turboBlowers.applications.wastewater.benefit1",
        "turboBlowers.applications.wastewater.benefit2",
        "turboBlowers.applications.wastewater.benefit3",
      ],
    },
    {
      titleKey: "turboBlowers.applications.pneumatic.title",
      icon: <FaIndustry />,
      image: "📦",
      bg: "/images/Application_Images/Pneumatic-Conveying.png",
      benefits: [
        "turboBlowers.applications.pneumatic.benefit1",
        "turboBlowers.applications.pneumatic.benefit2",
        "turboBlowers.applications.pneumatic.benefit3",
      ],
    },
    {
      titleKey: "turboBlowers.applications.processAir.title",
      icon: <FaCogs />,
      image: "⚙️",
      bg: "/images/Application_Images/Process-Air-Supply.png",
      benefits: [
        "turboBlowers.applications.processAir.benefit1",
        "turboBlowers.applications.processAir.benefit2",
        "turboBlowers.applications.processAir.benefit3",
      ],
    },
    {
      titleKey: "turboBlowers.applications.hvac.title",
      icon: <FaWind />,
      image: "🌪️",
      bg: "/images/Application_Images/HVAC-Systems.png",
      benefits: [
        "turboBlowers.applications.hvac.benefit1",
        "turboBlowers.applications.hvac.benefit2",
        "turboBlowers.applications.hvac.benefit3",
      ],
    },
    {
      titleKey: "turboBlowers.applications.chemical.title",
      icon: <FaThermometerHalf />,
      image: "🧪",
      bg: "/images/Application_Images/Chemical-&-Petrochemical.png",
      benefits: [
        "turboBlowers.applications.chemical.benefit1",
        "turboBlowers.applications.chemical.benefit2",
        "turboBlowers.applications.chemical.benefit3",
      ],
    },
    {
      titleKey: "turboBlowers.applications.power.title",
      icon: <FaBolt />,
      image: "⚡",
      bg: "/images/Application_Images/Power-Generation.png",
      benefits: [
        "turboBlowers.applications.power.benefit1",
        "turboBlowers.applications.power.benefit2",
        "turboBlowers.applications.power.benefit3",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 21,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure",
      value: "Max 1.0 bar 'g'",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Speed",
      value: "High Speed Centrifugal",
      icon: <FaTachometerAlt />,
      color: "#f59e0b",
    },
    {
      parameter: "Control",
      value: "Variable Guide Vanes",
      icon: <FaTools />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Advanced Technology",
      description:
        "Single stage centrifugal with high speed specialized technology",
      icon: <FaRocket />,
      stat: "95%",
      unit: "Efficiency",
    },
    {
      title: "Energy Savings",
      description: "Variable guide vanes optimize power consumption",
      icon: <FaLeaf />,
      stat: "30%",
      unit: "Energy Saved",
    },
    {
      title: "Turndown Range",
      description: "Flexible operation from 45% to 100% capacity",
      icon: <FaTachometerAlt />,
      stat: "45-100%",
      unit: "Range",
    },
    {
      title: "Oil-Free Design",
      description: "Completely oil-free operation for clean applications",
      icon: <FaShieldAlt />,
      stat: "100%",
      unit: "Oil-Free",
    },
  ];

  const productImageUrl = "/images/Turbo_Blowers.jpg";

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
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-white space-y-8">
            <br />
            <div className="inline-flex mt-8 md:mt-10 items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm font-semibold animate-fade-in-up">
              <FaStar className="text-blue-400" />
              <span>{t("turboBlowers.hero.badge")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight animate-fade-in-up [animation-delay:0.2s] [animation-fill-mode:both]">
              {t("turboBlowers.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                {t("turboBlowers.hero.subtitle")}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 animate-fade-in-up [animation-delay:0.4s] [animation-fill-mode:both]">
              {t("turboBlowers.hero.description")}
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:flex md:gap-8 animate-fade-in-up [animation-delay:0.6s] [animation-fill-mode:both]">
              <div className="text-center">
                <div className="text-xl sm:text-xl  font-bold text-blue-400 leading-none">
                  {t("turboBlowers.hero.capacityValue")}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t("turboBlowers.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-xl  font-bold text-blue-400 leading-none">
95%                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t("turboBlowers.hero.efficiency")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-xl font-bold text-blue-400 leading-none">
                  {t("turboBlowers.hero.oilFreeValue")}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t("turboBlowers.hero.oilFree")}
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-3 md:gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>{t("turboBlowers.hero.downloadBrochure")}</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] flex justify-center items-center">
              {/* Background glow */}
              <div className="hidden sm:block absolute w-full h-full bg-gradient-radial from-blue-500/10 to-transparent rounded-full animate-pulse"></div>

              <img
                src={productImageUrl}
                alt="Turbo Blowers - Integrally Geared Type"
                className="max-w-[260px] sm:max-w-[340px] md:max-w-[400px] max-h-[260px] sm:max-h-[340px] md:max-h-[400px] object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 cursor-pointer z-10 relative"
                onClick={() => openModal(productImageUrl)}
              />

              {/* Floating spec bubbles - hidden on mobile */}
              <div className="absolute z-1000 w-full h-full pointer-events-none hidden lg:block">
                <div className="absolute top-[15%] left-[-10%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float min-w-[120px] max-w-[180px] justify-center">
                  <FaBolt className="text-blue-600" />
                  <span>{t("turboBlowers.hero.floatingHighSpeed")}</span>
                </div>
                <div className="absolute top-1/2 right-[-15%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float [animation-delay:2s] min-w-[120px] max-w-[180px] justify-center">
                  <FaGears className="text-blue-600" />
                  <span>{t("turboBlowers.hero.floatingGeared")}</span>
                </div>
                <div className="absolute bottom-[20%] left-[-5%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float [animation-delay:4s] min-w-[120px] max-w-[180px] justify-center">
                  <FaLeaf className="text-blue-600" />
                  <span>{t("turboBlowers.hero.floatingOilFree")}</span>
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {t("turboBlowers.form.title")}
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
                    placeholder={t("turboBlowers.form.firstName")}
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
                    placeholder={t("turboBlowers.form.lastName")}
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
                    placeholder={t("turboBlowers.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("turboBlowers.form.phone")}
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
                  placeholder={t("turboBlowers.form.company")}
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
                    {t("turboBlowers.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("turboBlowers.form.sendEnquiry")}</span>
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

      {/* Technology Section - Redesigned */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text ">
              {t("turboBlowers.technology.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("turboBlowers.technology.subtitle")}
            </p>
          </div>

          <div className="space-y-16">
            {/* Technology Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold">
                  <FaBolt />
                  <span>{t("turboBlowers.technology.badge")}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                  {t("turboBlowers.technology.whyTitle")}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t("turboBlowers.technology.whyDescription")}
                </p>
                <div className="grid grid-cols-3 gap-3 sm:gap-6 md:flex md:gap-8">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600 block">
                      20%
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      Higher Efficiency
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600 block">
                      30%
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      Energy Savings
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600 block">
                      45-100%
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      Turndown Range
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center items-center">
                <img
                  src={productImageUrl}
                  alt="Turbo Blower Technology"
                  className="w-full max-w-md sm:max-w-lg h-auto filter drop-shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                {/* <div className="absolute w-full h-full pointer-events-none hidden lg:block">
                  <div className="absolute top-[20%] left-[-20%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-3xl text-xs font-semibold text-slate-800 shadow-md whitespace-nowrap">
                      Variable Inlet Guide Vanes
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-[-25%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-3xl text-xs font-semibold text-slate-800 shadow-md whitespace-nowrap">
                      High-Speed Impeller
                    </div>
                  </div>
                  <div className="absolute bottom-[25%] left-[-15%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-3xl text-xs font-semibold text-slate-800 shadow-md whitespace-nowrap">
                      Variable Diffuser Vanes
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <FaGears className="text-xl text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  {t("turboBlowers.technology.constantSpeed.title")}
                </h4>
                <p className="opacity-90 leading-relaxed mb-6">
                  {t("turboBlowers.technology.constantSpeed.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">
                      {t("turboBlowers.technology.constantSpeed.motorSpeed")}
                    </span>
                    <span className="font-semibold">
                      {t(
                        "turboBlowers.technology.constantSpeed.motorSpeedValue"
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">
                      {t("turboBlowers.technology.constantSpeed.gearRatio")}
                    </span>
                    <span className="font-semibold">
                      {t(
                        "turboBlowers.technology.constantSpeed.gearRatioValue"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaWind className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  {t("turboBlowers.technology.diffuserVanes.title")}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t("turboBlowers.technology.diffuserVanes.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">
                      {t("turboBlowers.technology.diffuserVanes.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">
                      {t("turboBlowers.technology.diffuserVanes.benefit2")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaBolt className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  {t("turboBlowers.technology.inletVanes.title")}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t("turboBlowers.technology.inletVanes.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">
                      {t("turboBlowers.technology.inletVanes.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">
                      {t("turboBlowers.technology.inletVanes.benefit2")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaLeaf className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  {t("turboBlowers.technology.oilFree.title")}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t("turboBlowers.technology.oilFree.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">
                      {t("turboBlowers.technology.oilFree.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">
                      {t("turboBlowers.technology.oilFree.benefit2")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Efficiency Performance Analysis */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 mt-10 md:mt-16 border border-slate-200/50 shadow-xl">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  <FaChartLine className="text-lg" />
                  <span>{t("turboBlowers.performance.badge")}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl py-1 font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t("turboBlowers.performance.title")}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  {t("turboBlowers.performance.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Enhanced Charts Section */}
                <div className="space-y-8">
                  {/* Peak Efficiency Chart */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-800">
                        {t("turboBlowers.performance.chartTitle")}
                      </h4>
                    </div>

                    <div className="space-y-6">
                      {/* Turbo Blowers Bar */}
                      <div className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-slate-700">
                            {t("turboBlowers.performance.turboBlowers")}
                          </span>
                          <span className="text-xl sm:text-2xl font-bold text-blue-600">
                            95%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out flex items-center justify-between px-4 group-hover:from-blue-600 group-hover:to-blue-700"
                            style={{ width: "95%" }}
                          >
                            <span className="text-xs font-semibold text-white">
                              {t("turboBlowers.performance.swamTurbo")}
                            </span>
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      {/* Conventional Bar */}
                      <div className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-slate-700">
                            {t("turboBlowers.performance.conventional")}
                          </span>
                          <span className="text-lg sm:text-xl font-bold text-amber-600">
                            78%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-between px-4"
                            style={{ width: "78%" }}
                          >
                            <span className="text-xs font-semibold text-white">
                              {t("turboBlowers.performance.standard")}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Direct Drive Bar */}
                      <div className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-slate-700">
                            {t("turboBlowers.performance.directDrive")}
                          </span>
                          <span className="text-lg sm:text-xl font-bold text-red-500">
                            65%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-between px-4"
                            style={{ width: "65%" }}
                          >
                            <span className="text-xs font-semibold text-white">
                              {t("turboBlowers.performance.basic")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Insight */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                      <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                        <FaRocket className="text-blue-600" />
                        <span>{t("turboBlowers.performance.advantage")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Energy Savings Display */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-slate-100">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-800">
                        {t("turboBlowers.performance.energySavingsTitle")}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FaLeaf className="text-2xl text-white" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-emerald-600">
                              30%
                            </div>
                            <div className="text-sm text-emerald-700 font-medium">
                              {t("turboBlowers.performance.vsConventional")}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-xs text-emerald-600 font-semibold bg-emerald-100 px-3 py-2 rounded-full">
                          {t("turboBlowers.performance.reducedEnergy")}
                        </div>
                      </div>

                      <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FaBolt className="text-2xl text-white" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-blue-600">
                              45%
                            </div>
                            <div className="text-sm text-blue-700 font-medium">
                              {t("turboBlowers.performance.vsDirectDrive")}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-xs text-blue-600 font-semibold bg-blue-100 px-3 py-2 rounded-full">
                          {t("turboBlowers.performance.lowerCosts")}
                        </div>
                      </div>
                    </div>

                    {/* ROI Calculator */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <FaChartLine className="text-emerald-400 text-xl" />
                        <h5 className="font-bold text-lg">
                          {t("turboBlowers.performance.annualSavings")}
                        </h5>
                      </div>
                      <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-emerald-400">
                            $25K+
                          </div>
                          <div className="text-xs text-slate-300">
                            {t("turboBlowers.performance.energyCosts")}
                          </div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-xl sm:text-2xl font-bold text-blue-400">
                            $15K+
                          </div>
                          <div className="text-xs text-slate-300">
                            {t("turboBlowers.performance.maintenance")}
                          </div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-purple-400">
                            $40K+
                          </div>
                          <div className="text-xs text-slate-300">
                            {t("turboBlowers.performance.totalSavings")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Explanation Section */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-slate-100">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800">
                      {t("turboBlowers.performance.whyTitle")}
                    </h4>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          1
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {t("turboBlowers.performance.reason1Title")}
                        </h5>
                        <p className="text-slate-600 leading-relaxed">
                          {t("turboBlowers.performance.reason1Desc")}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-blue-600 font-semibold">
                          <FaCheckCircle />
                          <span>
                            {t("turboBlowers.performance.reason1Point")}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          2
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                          {t("turboBlowers.performance.reason2Title")}
                        </h5>
                        <p className="text-slate-600 leading-relaxed">
                          {t("turboBlowers.performance.reason2Desc")}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-emerald-600 font-semibold">
                          <FaCheckCircle />
                          <span>
                            {t("turboBlowers.performance.reason2Point")}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          3
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors">
                          {t("turboBlowers.performance.reason3Title")}
                        </h5>
                        <p className="text-slate-600 leading-relaxed">
                          {t("turboBlowers.performance.reason3Desc")}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-purple-600 font-semibold">
                          <FaCheckCircle />
                          <span>
                            {t("turboBlowers.performance.reason3Point")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center">
                    <h5 className="font-bold text-lg mb-2">
                      {t("turboBlowers.performance.ctaTitle")}
                    </h5>
                    <p className="text-blue-100 mb-4 text-sm">
                      {t("turboBlowers.performance.ctaSubtitle")}
                    </p>
                    <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
                      <FaChartLine />
                      <span>{t("turboBlowers.performance.ctaButton")}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Excellence Section */}
      {/* Enhanced Industrial Applications Section */}
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("turboBlowers.applications.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("turboBlowers.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mt-10 md:mt-16">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-3 bg-white rounded-2xl shadow-sm transition-all duration-300 cursor-pointer border-2 border-transparent ${
                    selectedApplication === index
                      ? "border-blue-500 translate-x-3 shadow-lg"
                      : "hover:translate-x-2 hover:shadow-md hover:border-blue-500"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
                      {t(app.titleKey)}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                  <FaArrowRight
                    className={`text-blue-600 transition-transform duration-300 ${
                      selectedApplication === index ? "translate-x-1" : ""
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
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/45 text-white ring-1 ring-white/10 shadow-md"
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

      {/* Enhanced Why Choose SWAM Section */}

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("turboBlowers.cta.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-5 opacity-90">
              {t("turboBlowers.cta.subtitle")}
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

            <div className="flex justify-center gap-8 flex-wrap">
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

      {/* Enhanced CTA Section */}
    </MainTemplate>
  );
};

export default TurboBlowers;
