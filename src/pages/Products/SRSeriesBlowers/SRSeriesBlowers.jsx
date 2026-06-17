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
  FaSync,
  FaWeight,
  FaEye,
  FaLock,
  FaTimes,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SRSeriesBlowers = () => {
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
    link.href = "/images/Catalogues/Bro. SR Series Blowers.pdf"; // Replace with your PDF path
    link.download = "Bro. SR Series Blowers.pdf";
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
  // Headings-only list (put near your other constants)
  const benefits = [
    "Rugged, low-deflection & low-noise design",
    "Computer-generated rotor profiles (high volumetric efficiency)",
    "Integrated rotor/shaft with dual-side oil lubrication",
    "Oversized bearings & ultra-rigid frame alignment",
    "Multiple sizes & capacities for every duty",
  ];

  const models = [
    {
      code: "SR-21",
      fadMax: "181 m³/hr",
      powerMax: "3.78 kW",
      pressure: "1000–6000 mmwg",
      speed: "1200–2900 RPM",
    },
    {
      code: "SR-31",
      fadMax: "302 m³/hr",
      powerMax: "6.36 kW",
      pressure: "1000–6000 mmwg",
      speed: "1200–2900 RPM",
    },
    {
      code: "SR-41",
      fadMax: "436 m³/hr",
      powerMax: "9.00 kW",
      pressure: "1000–6000 mmwg",
      speed: "1200–2900 RPM",
    },
    {
      code: "SR-51",
      fadMax: "592 m³/hr",
      powerMax: "11.40 kW",
      pressure: "1000–6000 mmwg",
      speed: "1200–2900 RPM",
    },
    {
      code: "SR-61",
      fadMax: "630 m³/hr",
      powerMax: "10.50 kW",
      pressure: "1000–5000 mmwg",
      speed: "1200–2500 RPM",
    },
    {
      code: "SR-71",
      fadMax: "1462 m³/hr",
      powerMax: "27.60 kW",
      pressure: "1000–6000 mmwg",
      speed: "1200–2900 RPM",
    },
    {
      code: "SR-81",
      fadMax: "1281 m³/hr",
      powerMax: "24.40 kW",
      pressure: "1000–6000 mmwg",
      speed: "1000–2000 RPM",
    },
  ];

  const keyFeatures = [
    {
      icon: <FaGears className="feature-icon" />,
      title: "Computer Generated Axcel Series Profile",
      description:
        "Advanced computer-generated rotor profile optimizes high volumetric efficiency with better uniform clearances",
      details:
        "State-of-the-art rotor profile design ensures maximum efficiency with minimal internal slip losses and optimal gas flow characteristics",
      benefit: "High volumetric efficiency",
    },
    {
      icon: <FaWeight className="feature-icon" />,
      title: "Heavy Duty Construction",
      description:
        "Ruggedly built with appropriate rotor shaft design for tough conditions and high load transmission",
      details:
        "Engineered for demanding industrial environments with heavy-duty antifriction oil lubricated bearings and robust construction",
      benefit: "Maximum durability",
    },
    {
      icon: <FaCogs className="feature-icon" />,
      title: "CNC Machine Precision",
      description:
        "High accuracy manufacturing on CNC machines ensuring precise clearances and reliable operation",
      details:
        "Advanced CNC machining technology guarantees consistent quality and precise tolerances for optimal performance",
      benefit: "Precision engineering",
    },
    {
      icon: <FaLock className="feature-icon" />,
      title: "Special Lip Seal System",
      description:
        "Advanced sealing system with inbuilt pulsation dampeners for smooth, non-pulsating delivery",
      details:
        "Professional-grade sealing technology prevents leakage while integrated dampeners ensure smooth operation with lower sound emission",
      benefit: "Reliable sealing",
    },
  ];

  const applications = [
    {
      title: t("srSeries.applications.wastewater.title"),
      // description:
      //   "Aeration systems for biological treatment processes and sludge handling",
      icon: <FaRecycle />,
      image: "🌊",
      bg: "/images/Application_Images/Wastewater-Treatment.png",

      benefits: [
        t("srSeries.applications.wastewater.benefit1"),
        t("srSeries.applications.wastewater.benefit2"),
        t("srSeries.applications.wastewater.benefit3"),
      ],
    },
    {
      title: t("srSeries.applications.pneumatic.title"),
      // description:
      //   "Material transport systems for bulk handling and powder conveying",
      icon: <FaBoxes />,
      image: "📦",
      bg: "/images/Application_Images/Pneumatic-Conveying.png",

      benefits: [
        t("srSeries.applications.pneumatic.benefit1"),
        t("srSeries.applications.pneumatic.benefit2"),
        t("srSeries.applications.pneumatic.benefit3"),
      ],
    },
    {
      title: t("srSeries.applications.industrial.title"),
      // description:
      //   "Process gas handling and industrial applications requiring reliable air flow",
      icon: <FaIndustry />,
      image: "🏭",
      bg: "/images/Application_Images/Industrial-Equipment.png",

      benefits: [
        t("srSeries.applications.industrial.benefit1"),
        t("srSeries.applications.industrial.benefit2"),
        t("srSeries.applications.industrial.benefit3"),
      ],
    },
    {
      title: t("srSeries.applications.aquaculture.title"),
      // description: "Aeration for fish farming and aquaculture applications",
      icon: <FaSeedling />,
      image: "🐟",
      bg: "/images/Application_Images/Aquaculture-Systems.png",

      benefits: [
        t("srSeries.applications.aquaculture.benefit1"),
        t("srSeries.applications.aquaculture.benefit2"),
        t("srSeries.applications.aquaculture.benefit3"),
      ],
    },
    {
      title: t("srSeries.applications.chemical.title"),
      // description:
      //   "Gas boosting and process applications in chemical industries",
      icon: <FaAtom />,
      image: "⚗️",
      bg: "/images/Application_Images/Chemical-&-Petrochemical.png",

      benefits: [
        t("srSeries.applications.chemical.benefit1"),
        t("srSeries.applications.chemical.benefit2"),
        t("srSeries.applications.chemical.benefit3"),
      ],
    },
    {
      title: t("srSeries.applications.power.title"),
      // description:
      //   "Auxiliary systems for power plants and utility applications",
      icon: <FaBolt />,
      image: "⚡",
      bg: "/images/Application_Images/Power-Generation.png",

      benefits: [
        t("srSeries.applications.power.benefit1"),
        t("srSeries.applications.power.benefit2"),
        t("srSeries.applications.power.benefit3"),
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "Up to 1300 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure Range",
      value: "Max 0.6 kg/cm²",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Design Types",
      value: "Twin & Tri-Lobe",
      icon: <FaGears />,
      color: "#f59e0b",
    },
    {
      parameter: "Operation",
      value: "Single Stage",
      icon: <FaSync />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Capacity",
      description:
        "Exceptional flow capacity up to 1300 M³/Hr for large-scale industrial operations",
      icon: <FaChartLine />,
      stat: "1300",
      unit: "M³/Hr",
    },
    {
      title: "Reliable Pressure",
      description:
        "Consistent pressure delivery up to 0.6 kg/cm² in single stage configuration",
      icon: <FaTachometerAlt />,
      stat: "0.6",
      unit: "kg/cm²",
    },
    {
      title: "Dual Design",
      description:
        "Available in both Twin-Lobe and Tri-Lobe designs for versatile applications",
      icon: <FaGears />,
      stat: "Twin/Tri",
      unit: "Lobe Design",
    },
    {
      title: "Energy Efficient",
      description:
        "Advanced rotor profile and precision engineering for optimal energy efficiency",
      icon: <FaBolt />,
      stat: "High",
      unit: "Efficiency",
    },
  ];

  const workingPrinciple = {
    title: "Working Principle",
    description:
      "The rotors move opposite to each other, maintaining fine clearances in perfect synchronization through precision timing gears. As rotation proceeds, trapped gas moves along until it reaches the discharge port, raising pressure against system resistance.",
    steps: [
      {
        step: "1",
        title: "Gas Intake",
        description: "Gas enters through the inlet as rotors create vacuum",
      },
      {
        step: "2",
        title: "Compression",
        description: "Rotors trap and compress gas with precise clearances",
      },
      {
        step: "3",
        title: "Discharge",
        description: "Compressed gas delivered smoothly with minimal pulsation",
      },
    ],
  };

  const productImageUrl = "/images/sR-Series-Blowers.jpg";

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
      <section className="min-h-[80vh] md:min-h-screen bg-black bg-gradient-to-b from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 md:mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <FaStar className="text-blue-400" />
              <span>Small Size,Big Impact</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              {t("srSeries.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("srSeries.hero.subtitle")}
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300 mb-10">
              {t("srSeries.hero.description")}
            </p>

            <div className="flex flex-wrap gap-6 sm:gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  Up To 1300
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("srSeries.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  {t("srSeries.hero.pressureValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("srSeries.hero.pressure")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  {t("srSeries.hero.designValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("srSeries.hero.design")}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {/* Download Brochure Button */}
              <div className="flex gap-4">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <FaDownload />
                  <span>{t("srSeries.hero.downloadBrochure")}</span>
                </button>
              </div>

              {/* Watch Demo Button */}
              <a
                href="#available-models"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
              >
                {t("srSeries.hero.ourProducts")}
              </a>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex justify-center items-center">
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                }}
              ></div>
              <img
                src={productImageUrl}
                alt="SR Series Blowers - Advanced Positive Displacement Technology"
                className="max-w-80 max-h-80 lg:max-w-96 lg:max-h-96 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer z-10"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="z-100 absolute inset-0 pointer-events-none hidden lg:block">
                <div
                  className="absolute top-[15%] -left-[10%] bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] justify-center animate-bounce"
                  style={{ animationDelay: "0s", animationDuration: "6s" }}
                >
                  <FaGears className="text-blue-600" />
                  <span>{t("srSeries.hero.axcelProfile")}</span>
                </div>
                <div
                  className=" absolute top-1/2 -right-[15%] bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] justify-center animate-bounce"
                  style={{ animationDelay: "2s", animationDuration: "6s" }}
                >
                  <FaCogs className="text-blue-600" />
                  <span>{t("srSeries.hero.cncPrecision")}</span>
                </div>
                <div
                  className="absolute bottom-[20%] -left-[5%] bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] justify-center animate-bounce"
                  style={{ animationDelay: "4s", animationDuration: "6s" }}
                >
                  <FaLock className="text-blue-600" />
                  <span>{t("srSeries.hero.specialSealing")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("srSeries.form.title")}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={t("srSeries.form.firstName")}
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
                    placeholder={t("srSeries.form.lastName")}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("srSeries.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("srSeries.form.phone")}
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
                  placeholder={t("srSeries.form.company")}
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
                    {t("srSeries.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("srSeries.form.sendEnquiry")}</span>
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
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Heading */}
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <FaCogs className="animate-spin" />
              <span>{t("srSeries.features.badge")}</span>
            </div>
            <h2 className="text-4xl py-1 font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("srSeries.features.title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t("srSeries.features.subtitle")}
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {keyFeatures.slice(0, 4).map((feature, index) => (
              <div
                key={index}
                className="px-4 py-3 text-center text-sm font-semibold text-slate-900
                 bg-blue-500 border border-slate-200 rounded-lg
                 hover:bg-blue-50 hover:border-blue-300 transition"
              >
                {feature.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-6 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4 md:mb-6 text-center">
            {t("srSeries.benefits.title")}
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {[
              t("srSeries.benefits.benefit1"),
              t("srSeries.benefits.benefit2"),
              t("srSeries.benefits.benefit3"),
              t("srSeries.benefits.benefit4"),
              t("srSeries.benefits.benefit5"),
            ].map((b, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-white/90 border border-slate-200 rounded-2xl p-4 shadow-sm"
              >
                <FaCheckCircle className="text-emerald-600" />
                <h4 className="text-slate-800 font-semibold">{b}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Working Principle Section */}
      <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-5">
            <h2 className="text-4xl py-1 font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("srSeries.workingPrinciple.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("srSeries.workingPrinciple.subtitle")}
            </p>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                  <FaSync />
                  <span>{t("srSeries.workingPrinciple.badge")}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {t("srSeries.workingPrinciple.heading")}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {t("srSeries.workingPrinciple.description")}
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-800 mb-1">
                        {t("srSeries.workingPrinciple.step1Title")}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {t("srSeries.workingPrinciple.step1Description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-800 mb-1">
                        {t("srSeries.workingPrinciple.step2Title")}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {t("srSeries.workingPrinciple.step2Description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-800 mb-1">
                        {t("srSeries.workingPrinciple.step3Title")}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {t("srSeries.workingPrinciple.step3Description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center items-center">
                <img
                  src={productImageUrl}
                  alt="SR Series Blower Working Principle"
                  className="w-full h-auto max-w-md drop-shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                {/* <div className="absolute inset-0 pointer-events-none hidden lg:block">
                  <div className="absolute top-[20%] -left-[20%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-30 scale-150"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-2xl shadow-md text-xs font-semibold text-slate-800 whitespace-nowrap">
                      Precision Timing Gears
                    </div>
                  </div>
                  <div className="absolute top-1/2 -right-[25%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-30 scale-150"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-2xl shadow-md text-xs font-semibold text-slate-800 whitespace-nowrap">
                      Twin-Lobe Rotors
                    </div>
                  </div>
                  <div className="absolute bottom-[25%] -left-[15%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-30 scale-150"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-2xl shadow-md text-xs font-semibold text-slate-800 whitespace-nowrap">
                      Fine Clearances
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-2xl p-8 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <FaEye className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">
                  {t("srSeries.technology.clearances.title")}
                </h4>
                <p className="opacity-90 leading-relaxed mb-6">
                  {t("srSeries.technology.clearances.description")}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">
                      {t("srSeries.technology.clearances.control")}:
                    </span>
                    <span className="font-semibold">
                      {t("srSeries.technology.clearances.controlValue")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">
                      {t("srSeries.technology.clearances.slipLoss")}:
                    </span>
                    <span className="font-semibold">
                      {t("srSeries.technology.clearances.slipLossValue")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaVolumeDown className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  {t("srSeries.technology.smooth.title")}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t("srSeries.technology.smooth.description")}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">
                      {t("srSeries.technology.smooth.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">
                      {t("srSeries.technology.smooth.benefit2")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaWeight className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  {t("srSeries.technology.heavyDuty.title")}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t("srSeries.technology.heavyDuty.description")}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">
                      {t("srSeries.technology.heavyDuty.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">
                      {t("srSeries.technology.heavyDuty.benefit2")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaCogs className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  {t("srSeries.technology.cnc.title")}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t("srSeries.technology.cnc.description")}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">
                      {t("srSeries.technology.cnc.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">
                      {t("srSeries.technology.cnc.benefit2")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Section */}
      {/* <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Construction
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
            Explore the internal construction of our SR Series Blowers, 
            engineered with precision for maximum efficiency and durability.
          </p>
          <img
  src="/images/sR-Series-Blowers_extra.png"
  alt="Rotary Twin Lobe Blower Construction"
  className="block mx-auto rounded-2xl w-full sm:w-auto max-w-[680px] md:max-w-[760px] object-contain"
  loading="lazy"
/>

        </div>
      </section> */}

      <section id="available-models" className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">
            {t("srSeries.models.title")}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-2">
            {t("srSeries.models.subtitle")}
          </p>

          <div className="mt-8">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {models.map((m) => (
                <SwiperSlide key={m.code} className="h-full">
                  <div className="h-full bg-white rounded-2xl p-6 shadow-lg flex flex-col justify-between text-left hover:shadow-2xl transition-all">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                        <FaGears /> <span>SR Series</span>
                      </div>
                      <h3 className="text-2xl font-bold text-indigo-600 mt-3">
                        {m.code}
                      </h3>

                      <ul className="mt-4 space-y-2 text-slate-700">
                        <li className="flex items-center gap-2">
                          <FaChartLine className="text-blue-600" />
                          <span className="font-semibold">
                            {t("srSeries.models.fadUpTo")}:
                          </span>
                          <span>{m.fadMax}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FaCompressArrowsAlt className="text-blue-600" />
                          <span className="font-semibold">
                            {t("srSeries.models.pressure")}:
                          </span>
                          <span>{m.pressure}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FaTachometerAlt className="text-blue-600" />
                          <span className="font-semibold">
                            {t("srSeries.models.speed")}:
                          </span>
                          <span>{m.speed}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FaBolt className="text-blue-600" />
                          <span className="font-semibold">
                            {t("srSeries.models.powerUpTo")}:
                          </span>
                          <span>{m.powerMax}</span>
                        </li>
                        {m.note && (
                          <li className="text-xs text-slate-500 mt-1">
                            {m.note}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Specifications Section */}

      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("srSeries.applications.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("srSeries.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`bg-slate-50 rounded-2xl p-4 sm:p-5 flex items-center gap-4 cursor-pointer transition-all duration-300 border-2 ${
                    selectedApplication === index
                      ? "bg-white border-blue-600 transform translate-x-2 shadow-md"
                      : "border-transparent hover:bg-white hover:border-blue-600 hover:transform hover:translate-x-2 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-3xl w-10 h-10 flex items-center justify-center bg-white rounded-2xl shadow-sm">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      {app.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                  <FaArrowRight
                    className={`text-slate-400 transition-all duration-300 ${
                      selectedApplication === index
                        ? "text-blue-600 transform translate-x-1"
                        : "group-hover:text-blue-600 group-hover:transform group-hover:translate-x-1"
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
                <span className="px-3 py-1 rounded-xl bg-black/60 text-white font-semibold text-lg">
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
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/45 text-white ring-1 ring-white/10 shadow-md"
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
      <section className="py-8 md:py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              {t("srSeries.cta.title")}
            </h2>
            <p className="text-xl mb-5 opacity-90 leading-relaxed">
              {t("srSeries.cta.subtitle")}
            </p>

            {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <FaPhone />
                <span>Get Expert Consultation</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <FaDownload />
                <span>Download Technical Brochure</span>
              </button>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm opacity-80">
              <div className="flex items-center gap-2">
                <FaPhone />
                <span>+91-99103-02163</span>
              </div>
              <a
                href="mailto:sales@swamatics.com"
                className="flex items-center gap-2 text-sm opacity-90 hover:underline"
              >
                <FaEnvelope />
                <span>sales@swamatics.com</span>
              </a>
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm border-none rounded-full text-white text-2xl cursor-pointer z-10 flex items-center justify-center transition-all duration-300 hover:bg-black/70 hover:scale-110"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col max-h-[90vh]">
              <div className="flex-1 flex flex-col overflow-hidden">
                <img
                  src={modalImage}
                  alt="SR Series Blowers - Advanced Positive Displacement Technology - Expanded View"
                  className="w-full h-auto max-h-[70vh] object-contain bg-slate-50 select-none"
                  style={{ userDrag: "none", WebkitUserDrag: "none" }}
                />
                <div className="p-8 bg-white border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {t("srSeries.modal.title")}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {t("srSeries.modal.subtitle")}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      Capacity: Up To 1300{" "}
                    </span>
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      {t("srSeries.modal.pressure")}
                    </span>
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      {t("srSeries.modal.design")}
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

export default SRSeriesBlowers;
