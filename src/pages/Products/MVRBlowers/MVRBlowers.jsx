import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
  FaFlask,
  FaTint,
  FaSnowflake,
  FaMicrochip,
  FaSpa,
  FaOilCan,
  FaGem,
  FaCube,
  FaCookie,
  FaUtensils,
  FaBatteryFull,
  FaCompress,
  FaWater,
  FaTimes,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const MVRBlowers = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    declaration: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create download link for PDF
    const link = document.createElement("a");
    link.href = "/images/Catalogues/Bro. MVR Blower (2025).pdf"; // Replace with your PDF path
    link.download = "Bro. MVR Blower (2025).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close modal and reset form
    setIsFormOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      declaration: false,
    });

    alert(t("mvrBlowers.form.successMessage"));
  };

  const keyFeatures = [
    {
      icon: <FaRocket className="text-2xl text-white" />,
      title: t("mvrBlowers.features.nextGeneration.title"),
      description: t("mvrBlowers.features.nextGeneration.description"),
      details: t("mvrBlowers.features.nextGeneration.details"),
      benefit: t("mvrBlowers.features.nextGeneration.benefit"),
    },
    {
      icon: <FaGears className="text-2xl text-white" />,
      title: t("mvrBlowers.features.rotorProfile.title"),
      description: t("mvrBlowers.features.rotorProfile.description"),
      details: t("mvrBlowers.features.rotorProfile.details"),
      benefit: t("mvrBlowers.features.rotorProfile.benefit"),
    },
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: t("mvrBlowers.features.ruggedConstruction.title"),
      description: t("mvrBlowers.features.ruggedConstruction.description"),
      details: t("mvrBlowers.features.ruggedConstruction.details"),
      benefit: t("mvrBlowers.features.ruggedConstruction.benefit"),
    },
    {
      icon: <FaBatteryFull className="text-2xl text-white" />,
      title: t("mvrBlowers.features.energyEfficient.title"),
      description: t("mvrBlowers.features.energyEfficient.description"),
      details: t("mvrBlowers.features.energyEfficient.details"),
      benefit: t("mvrBlowers.features.energyEfficient.benefit"),
    },
  ];
  const mvrAdvantages = [
    {
      icon: <FaBolt />,
      title: t("mvrBlowers.advantages.energySavings.title"),
      desc: t("mvrBlowers.advantages.energySavings.desc"),
    },
    {
      icon: <FaLeaf />,
      title: t("mvrBlowers.advantages.carbonFootprint.title"),
      desc: t("mvrBlowers.advantages.carbonFootprint.desc"),
    },
    {
      icon: <FaLayerGroup />,
      title: t("mvrBlowers.advantages.stagingConfigurations.title"),
      desc: t("mvrBlowers.advantages.stagingConfigurations.desc"),
    },
    {
      icon: <FaTint />,
      title: t("mvrBlowers.advantages.highTDS.title"),
      desc: t("mvrBlowers.advantages.highTDS.desc"),
    },
    {
      icon: <FaShieldAlt />,
      title: t("mvrBlowers.advantages.reliability.title"),
      desc: t("mvrBlowers.advantages.reliability.desc"),
    },
    {
      icon: <FaThermometerHalf />,
      title: t("mvrBlowers.advantages.highDeltaT.title"),
      desc: t("mvrBlowers.advantages.highDeltaT.desc"),
    },
  ];

  const applications = [
    {
      title: t("mvrBlowers.applications.evaporationSystems.title"),
      icon: <FaTint />,
      image: "💧",
      bg: "/images/Application_Images/Refineries.png",
      benefits: [
        t("mvrBlowers.applications.evaporationSystems.benefit1"),
        t("mvrBlowers.applications.evaporationSystems.benefit2"),
        t("mvrBlowers.applications.evaporationSystems.benefit3"),
      ],
    },
    {
      title: t("mvrBlowers.applications.distillationProcesses.title"),
      icon: <FaFlask />,
      image: "⚗️",
      bg: "/images/Application_Images/Distillation-Processes.png",
      benefits: [
        t("mvrBlowers.applications.distillationProcesses.benefit1"),
        t("mvrBlowers.applications.distillationProcesses.benefit2"),
        t("mvrBlowers.applications.distillationProcesses.benefit3"),
      ],
    },
    {
      title: t("mvrBlowers.applications.concentrationApplications.title"),
      icon: <FaCompress />,
      image: "🎯",
      bg: "/images/Application_Images/Concentration-Applications.png",
      benefits: [
        t("mvrBlowers.applications.concentrationApplications.benefit1"),
        t("mvrBlowers.applications.concentrationApplications.benefit2"),
        t("mvrBlowers.applications.concentrationApplications.benefit3"),
      ],
    },
    {
      title: t("mvrBlowers.applications.heatRecoverySystems.title"),
      icon: <FaRecycle />,
      image: "♻️",
      bg: "/images/Application_Images/Heat-Recovery-Systems.png",
      benefits: [
        t("mvrBlowers.applications.heatRecoverySystems.benefit1"),
        t("mvrBlowers.applications.heatRecoverySystems.benefit2"),
        t("mvrBlowers.applications.heatRecoverySystems.benefit3"),
      ],
    },
    {
      title: t("mvrBlowers.applications.crystallizationProcesses.title"),
      icon: <FaGem />,
      image: "💎",
      bg: "/images/Application_Images/Crystallization-Processes.png",
      benefits: [
        t("mvrBlowers.applications.crystallizationProcesses.benefit1"),
        t("mvrBlowers.applications.crystallizationProcesses.benefit2"),
        t("mvrBlowers.applications.crystallizationProcesses.benefit3"),
      ],
    },
    {
      title: t("mvrBlowers.applications.desalinationPlants.title"),
      icon: <FaWater />,
      image: "🌊",
      bg: "/images/Application_Images/Devalination-Plants.png",
      benefits: [
        t("mvrBlowers.applications.desalinationPlants.benefit1"),
        t("mvrBlowers.applications.desalinationPlants.benefit2"),
        t("mvrBlowers.applications.desalinationPlants.benefit3"),
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Flow Capacity",
      value: "Up to 65,000 M³/hr",
      icon: <FaWind />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure Range",
      value: "Up to 1.1 kg/cm²",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Vacuum Capability",
      value: "Up to 50%",
      icon: <FaCompress />,
      color: "#f59e0b",
    },
    {
      parameter: "Technology",
      value: "Mechanical Vapor Recompression",
      icon: <FaGears />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Flow Capacity",
      description:
        "Readily available for flows up to 65,000 M³/hr with consistent performance across the entire operating range",
      icon: <FaWind />,
      stat: "65,000",
      unit: "M³/hr Flow",
    },
    {
      title: "Energy Efficiency",
      description:
        "Advanced MVR technology significantly reduces energy consumption while maintaining high compression ratios",
      icon: <FaBatteryFull />,
      stat: "High",
      unit: "Efficiency",
    },
    {
      title: "Low Maintenance",
      description:
        "Next generation design with advanced features enables lower maintenance requirements and extended service intervals",
      icon: <FaTools />,
      stat: "Low",
      unit: "Maintenance",
    },
    {
      title: "Versatile Operation",
      description:
        "Capable of handling pressure up to 1.1 kg/cm² and vacuum up to 50% for diverse industrial applications",
      icon: <FaGears />,
      stat: "Multi",
      unit: "Application",
    },
  ];

  const workingPrinciple = {
    title: t("mvrBlowers.workingPrinciple.title"),
    description: t("mvrBlowers.workingPrinciple.description"),
    steps: [
      {
        step: "1",
        title: t("mvrBlowers.workingPrinciple.step1.title"),
        description: t("mvrBlowers.workingPrinciple.step1.description"),
      },
      {
        step: "2",
        title: t("mvrBlowers.workingPrinciple.step2.title"),
        description: t("mvrBlowers.workingPrinciple.step2.description"),
      },
      {
        step: "3",
        title: t("mvrBlowers.workingPrinciple.step3.title"),
        description: t("mvrBlowers.workingPrinciple.step3.description"),
      },
    ],
  };

  const productImageUrl = "/images/MVR-Blowers.jpg";

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
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start md:items-center">
          <div className="text-white">
            {/* removed leading <br /> */}
            <div className="mt-24 md:mt-1 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-5 py-2.5 rounded-full text-sm font-semibold mb-4 md:mb-6 animate-pulse">
              <FaStar className="text-blue-400" />
              <span>{t("mvrBlowers.hero.badge")}</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              {t("mvrBlowers.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("mvrBlowers.hero.subtitle")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 md:mb-8">
              {t("mvrBlowers.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
Up To 65,000                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("mvrBlowers.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
Max 1.1                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("mvrBlowers.hero.pressure")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  {t("mvrBlowers.hero.vacuumValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("mvrBlowers.hero.vacuum")}
                </div>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>{t("mvrBlowers.hero.downloadBrochure")}</span>
              </button>
            </div>
            {/* removed trailing <br /> */}
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex justify-center items-center">
              <div className="absolute w-full h-full bg-radial-gradient from-blue-500/10 to-transparent rounded-full animate-pulse"></div>
              <img
                src={productImageUrl}
                alt="MVR Blowers - Mechanical Vapor Recompression Technology"
                className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer relative z-10"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="z-100 absolute w-full h-full pointer-events-none hidden lg:block">
                <div
                  className="absolute top-[15%] -left-[10%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] min-h-[40px] justify-center text-center animate-bounce"
                  style={{ animationDelay: "0s" }}
                >
                  <FaGears className="text-blue-600" />
                  <span>{t("mvrBlowers.hero.mvrTechnology")}</span>
                </div>
                <div
                  className="absolute top-1/2 -right-[15%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] min-h-[40px] justify-center text-center animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <FaBatteryFull className="text-blue-600" />
                  <span>{t("mvrBlowers.hero.energyEfficient")}</span>
                </div>
                <div
                  className="absolute bottom-[20%] -left-[5%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] min-h-[40px] justify-center text-center animate-bounce"
                  style={{ animationDelay: "4s" }}
                >
                  <FaRocket className="text-blue-600" />
                  <span>{t("mvrBlowers.hero.nextGeneration")}</span>
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
                  {t("mvrBlowers.form.title")}
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
                    placeholder={t("mvrBlowers.form.firstName")}
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
                    placeholder={t("mvrBlowers.form.lastName")}
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
                    placeholder={t("mvrBlowers.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("mvrBlowers.form.phone")}
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
                  placeholder={t("mvrBlowers.form.company")}
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
                    {t("mvrBlowers.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("mvrBlowers.form.sendEnquiry")}</span>
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

      {/* Working Principle Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-4">
            <h2 className="text-4xl py-2 font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("mvrBlowers.workingPrinciple.sectionTitle")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("mvrBlowers.workingPrinciple.sectionDescription")}
            </p>
          </div>

          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="p-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                  <FaGears />
                  <span>{t("mvrBlowers.workingPrinciple.badge")}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {workingPrinciple.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {workingPrinciple.description}
                </p>

                <div className="flex flex-col gap-6">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center items-center">
                <img
                  src={productImageUrl}
                  alt="MVR Blowers Working Principle"
                  className="w-full h-auto drop-shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <FaBatteryFull className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">
                  {t("mvrBlowers.technologyDetails.energyEfficient.title")}
                </h4>
                <p className="opacity-90 leading-relaxed mb-6">
                  {t(
                    "mvrBlowers.technologyDetails.energyEfficient.description"
                  )}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">
                      {t(
                        "mvrBlowers.technologyDetails.energyEfficient.efficiency"
                      )}
                      :
                    </span>
                    <span className="font-semibold">
                      {t(
                        "mvrBlowers.technologyDetails.energyEfficient.efficiencyValue"
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">
                      {t(
                        "mvrBlowers.technologyDetails.energyEfficient.operation"
                      )}
                      :
                    </span>
                    <span className="font-semibold">
                      {t(
                        "mvrBlowers.technologyDetails.energyEfficient.operationValue"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaWind className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  {t("mvrBlowers.technologyDetails.highFlowCapacity.title")}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t(
                    "mvrBlowers.technologyDetails.highFlowCapacity.description"
                  )}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>
                      {t(
                        "mvrBlowers.technologyDetails.highFlowCapacity.benefit1"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>
                      {t(
                        "mvrBlowers.technologyDetails.highFlowCapacity.benefit2"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaGears className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  {t("mvrBlowers.technologyDetails.rotorProfile.title")}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t("mvrBlowers.technologyDetails.rotorProfile.description")}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>
                      {t("mvrBlowers.technologyDetails.rotorProfile.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>
                      {t("mvrBlowers.technologyDetails.rotorProfile.benefit2")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  {t("mvrBlowers.technologyDetails.ruggedConstruction.title")}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t(
                    "mvrBlowers.technologyDetails.ruggedConstruction.description"
                  )}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>
                      {t(
                        "mvrBlowers.technologyDetails.ruggedConstruction.benefit1"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>
                      {t(
                        "mvrBlowers.technologyDetails.ruggedConstruction.benefit2"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl py-2 font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
            {t("mvrBlowers.advantages.title")}
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-10"
          >
            {mvrAdvantages.map((a, i) => (
              <SwiperSlide key={i}>
                <div className="h-full">
                  <div className="h-full bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-3">
                      {a.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {a.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("mvrBlowers.applications.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("mvrBlowers.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
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
                  <div className="w-15 h-15 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">
                      {app.title}
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
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[340px] md:h-[420px]">
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

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t("mvrBlowers.cta.title")}
          </h2>
          <p className="text-xl mb-5 opacity-90">
            {t("mvrBlowers.cta.subtitle")}
          </p>

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
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-md border-0 rounded-full text-white text-2xl cursor-pointer z-10 flex items-center justify-center hover:bg-black/70 hover:scale-110 transition-all duration-300"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col max-h-[90vh]">
              <div className="flex-1 flex flex-col overflow-hidden">
                <img
                  src={modalImage}
                  alt="MVR Blowers - Mechanical Vapor Recompression Technology - Expanded View"
                  className="w-full h-auto max-h-[70vh] object-contain bg-slate-50 select-none"
                  style={{
                    userDrag: "none",
                    WebkitUserDrag: "none",
                    KhtmlUserDrag: "none",
                    MozUserDrag: "none",
                    OUserDrag: "none",
                  }}
                />
                <div className="p-8 bg-white border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {t("mvrBlowers.modal.title")}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {t("mvrBlowers.modal.subtitle")}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      {t("mvrBlowers.modal.flow")}
                    </span>
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      {t("mvrBlowers.modal.pressure")}
                    </span>
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      {t("mvrBlowers.modal.vacuum")}
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

export default MVRBlowers;
