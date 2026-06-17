import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
// add to your existing react-icons import(s)
import { FaArrowsAlt, FaLock } from "react-icons/fa";

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
  FaMicrochip,
  FaBatteryFull,
  FaDesktop,
  FaSyncAlt,
  FaWater,
  FaOilCan,
  FaFlask,
  FaFire,
  FaWind,
  FaAtom,
  FaTimes,
} from "react-icons/fa";

const HybridHelicalBlowers = () => {
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
    link.href =
      "/images/Catalogues/Bro. Super Helical Hybrid Blower (SHHB).pdf"; // Replace with your PDF path
    link.download = "Bro. Super Helical Hybrid Blower (SHHB).pdf";
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

  const salientFeatureItems = [
    {
      icon: <FaShieldAlt />,
      labelKey: "hybridBlowers.salientFeatures.ruggeConstruction",
    },
    {
      icon: <FaCogs />,
      labelKey: "hybridBlowers.salientFeatures.optimizedProfile",
    },
    {
      icon: <FaCogs />,
      labelKey: "hybridBlowers.salientFeatures.heavyDutyGears",
    },
    {
      icon: <FaLeaf />,
      labelKey: "hybridBlowers.salientFeatures.oilFreeConveyance",
    },
    {
      icon: <FaOilCan />,
      labelKey: "hybridBlowers.salientFeatures.effectiveLubrication",
    },
    {
      icon: <FaArrowsAlt />,
      labelKey: "hybridBlowers.salientFeatures.positiveNegative",
    },
    {
      icon: <FaArrowRight />,
      labelKey: "hybridBlowers.salientFeatures.sideSuction",
    },
    {
      icon: <FaLock />,
      labelKey: "hybridBlowers.salientFeatures.specialSealed",
    },
    {
      icon: <FaWind />,
      labelKey: "hybridBlowers.salientFeatures.pulsationDampeners",
    },
    {
      icon: <FaSyncAlt />,
      labelKey: "hybridBlowers.salientFeatures.dynamicallyBalanced",
    },
    {
      icon: <FaCheckCircle />,
      labelKey: "hybridBlowers.salientFeatures.sixBearings",
    },
    {
      icon: <FaWrench />,
      labelKey: "hybridBlowers.salientFeatures.heavyDutyShaft",
    },
  ];

  const keyFeatures = [
    {
      icon: <FaMicrochip className="feature-icon" />,
      title: t("hybridBlowers.keyFeatures.computerProfile.title"),
      description: t("hybridBlowers.keyFeatures.computerProfile.description"),
      details: t("hybridBlowers.keyFeatures.computerProfile.details"),
      benefit: t("hybridBlowers.keyFeatures.computerProfile.benefit"),
    },
    {
      icon: <FaDesktop className="feature-icon" />,
      title: t("hybridBlowers.keyFeatures.integratedVFD.title"),
      description: t("hybridBlowers.keyFeatures.integratedVFD.description"),
      details: t("hybridBlowers.keyFeatures.integratedVFD.details"),
      benefit: t("hybridBlowers.keyFeatures.integratedVFD.benefit"),
    },
    {
      icon: <FaSyncAlt className="feature-icon" />,
      title: t("hybridBlowers.keyFeatures.turndownCapability.title"),
      description: t(
        "hybridBlowers.keyFeatures.turndownCapability.description"
      ),
      details: t("hybridBlowers.keyFeatures.turndownCapability.details"),
      benefit: t("hybridBlowers.keyFeatures.turndownCapability.benefit"),
    },
    {
      icon: <FaBatteryFull className="feature-icon" />,
      title: t("hybridBlowers.keyFeatures.energyEfficient.title"),
      description: t("hybridBlowers.keyFeatures.energyEfficient.description"),
      details: t("hybridBlowers.keyFeatures.energyEfficient.details"),
      benefit: t("hybridBlowers.keyFeatures.energyEfficient.benefit"),
    },
  ];

  const applications = [
    {
      titleKey: "hybridBlowers.applications.chemical.title",
      icon: <FaFlask />,
      image: "🧪",
      bg: "/images/Application_Images/Chemical-&-Petrochemical.png",
      benefits: [
        "hybridBlowers.applications.chemical.benefit1",
        "hybridBlowers.applications.chemical.benefit2",
        "hybridBlowers.applications.chemical.benefit3",
      ],
    },
    {
      titleKey: "hybridBlowers.applications.wastewater.title",
      icon: <FaWater />,
      image: "💧",
      bg: "/images/Application_Images/Wastewater-Treatment.png",
      benefits: [
        "hybridBlowers.applications.wastewater.benefit1",
        "hybridBlowers.applications.wastewater.benefit2",
        "hybridBlowers.applications.wastewater.benefit3",
      ],
    },
    {
      titleKey: "hybridBlowers.applications.power.title",
      icon: <FaRocket />,
      image: "⚡",
      bg: "/images/Application_Images/Power-Plants.png",
      benefits: [
        "hybridBlowers.applications.power.benefit1",
        "hybridBlowers.applications.power.benefit2",
        "hybridBlowers.applications.power.benefit3",
      ],
    },
    {
      titleKey: "hybridBlowers.applications.cement.title",
      icon: <FaIndustry />,
      image: "🏭",
      bg: "/images/Application_Images/Cement-Plants.png",
      benefits: [
        "hybridBlowers.applications.cement.benefit1",
        "hybridBlowers.applications.cement.benefit2",
        "hybridBlowers.applications.cement.benefit3",
      ],
    },
    {
      titleKey: "hybridBlowers.applications.refineries.title",
      icon: <FaOilCan />,
      image: "⚗️",
      bg: "/images/Application_Images/Refineries.png",
      benefits: [
        "hybridBlowers.applications.refineries.benefit1",
        "hybridBlowers.applications.refineries.benefit2",
        "hybridBlowers.applications.refineries.benefit3",
      ],
    },
    {
      titleKey: "hybridBlowers.applications.food.title",
      icon: <FaLeaf />,
      image: "🍃",
      bg: "/images/Application_Images/Food-&-Pharmaceutical.png",
      benefits: [
        "hybridBlowers.applications.food.benefit1",
        "hybridBlowers.applications.food.benefit2",
        "hybridBlowers.applications.food.benefit3",
      ],
    },
    {
      titleKey: "hybridBlowers.applications.environmental.title",
      icon: <FaRecycle />,
      image: "🌱",
      bg: "/images/Application_Images/Environmental-Systems.png",
      benefits: [
        "hybridBlowers.applications.environmental.benefit1",
        "hybridBlowers.applications.environmental.benefit2",
        "hybridBlowers.applications.environmental.benefit3",
      ],
    },
    {
      titleKey: "hybridBlowers.applications.metallurgy.title",
      icon: <FaFire />,
      image: "🔥",
      bg: "/images/Application_Images/Metallurgy.png",
      benefits: [
        "hybridBlowers.applications.metallurgy.benefit1",
        "hybridBlowers.applications.metallurgy.benefit2",
        "hybridBlowers.applications.metallurgy.benefit3",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Flow Capacity",
      value: "Up to 40,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Discharge Pressure",
      value: "Up to 1.3 kg/cm²",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Bio-Gas Capacity",
      value: "Up to 35,000 M³/Hr",
      icon: <FaRecycle />,
      color: "#f59e0b",
    },
    {
      parameter: "Turndown Ratio",
      value: "As low as 20%",
      icon: <FaSyncAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "30+ Years Innovation",
      description: "Three decades of experience in advanced blower technology",
      icon: <FaAward />,
      stat: "30+",
      unit: "Years",
    },
    {
      title: "Superior Efficiency",
      description:
        "Higher volumetric efficiency with computer-generated profiles",
      icon: <FaMicrochip />,
      stat: "95%+",
      unit: "Efficiency",
    },
    {
      title: "CNC Precision",
      description: "High accuracy manufacturing on CNC machines",
      icon: <FaCogs />,
      stat: "100%",
      unit: "CNC Made",
    },
    {
      title: "Smart Control",
      description: "Integrated VFD, HMI with complete automation",
      icon: <FaDesktop />,
      stat: "100%",
      unit: "Automated",
    },
  ];

  // Using the specified image name for hybrid helical blowers
  const productImageUrl = "/images/SuperHelicalHybridBlower.jpg";

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
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoom-in-95 {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .fade-in {
          animation-name: fade-in;
        }

        .zoom-in-95 {
          animation-name: zoom-in-95;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-[82svh] md:min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden pt-20 md:pt-0">
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-white">
            <br />
            <div
              className="relative z-20 inline-flex ml-0 md:ml-10 mt-8 md:mt-20 items-center gap-2
                bg-white/10 backdrop-blur-xl border border-white/30
                px-3 py-1.5 md:px-6 md:py-3 rounded-full
                text-xs sm:text-sm font-semibold text-white shadow-sm"
            >
              <FaMicrochip className="text-blue-200" aria-hidden="true" />
              <span
                className="uppercase tracking-wide"
                aria-label="Tagline: Next-Generation Technology"
              >
                {t("hybridBlowers.hero.badge")}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              {t("hybridBlowers.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("hybridBlowers.hero.subtitle")}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 md:mb-10">
              {t("hybridBlowers.hero.description")}
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:flex md:gap-8 mb-6 md:mb-10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 leading-none">
                  {t("hybridBlowers.hero.capacityValue")}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t("hybridBlowers.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 leading-none">
                  {t("hybridBlowers.hero.turndownValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("hybridBlowers.hero.turndown")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 leading-none">
                  {t("hybridBlowers.hero.pressureValue")}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t("hybridBlowers.hero.pressure")}
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-3 md:gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>{t("hybridBlowers.hero.downloadBrochure")}</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative max-w-md sm:max-w-lg w-full overflow-visible z-10">
              <div
                className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              />
              <img
                src={productImageUrl}
                alt="Super Helical Hybrid Blower"
                className="w-full h-auto rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer relative z-20"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="hidden sm:flex absolute top-[15%] right-[5%] bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-full flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-lg z-50 animate-bounce">
                  <FaMicrochip className="text-blue-600" />
                  <span>{t("hybridBlowers.hero.smartControl")}</span>
                </div>
                <div
                  className="absolute bottom-[25%] left-[5%] bg-white/95 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg z-50 animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <FaSyncAlt className="text-blue-600" />
                  <span>{t("hybridBlowers.hero.turndownBadge")}</span>
                </div>
                <div
                  className="absolute top-[50%] right-[10%] bg-white/95 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg z-50 animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <FaBatteryFull className="text-blue-600" />
                  <span>{t("hybridBlowers.hero.energyEfficient")}</span>
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
                  {t("hybridBlowers.form.title")}
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
                    placeholder={t("hybridBlowers.form.firstName")}
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
                    placeholder={t("hybridBlowers.form.lastName")}
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
                    placeholder={t("hybridBlowers.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("hybridBlowers.form.phone")}
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
                  placeholder={t("hybridBlowers.form.company")}
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
                    {t("hybridBlowers.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("hybridBlowers.form.sendEnquiry")}</span>
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

      {/* Technology Highlights Section */}

      <section id="salient-features" className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4">
            {t("hybridBlowers.salientFeatures.title")}
          </h2>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {salientFeatureItems.map((item, i) => (
              <li
                key={i}
                className="group flex items-center gap-3 bg-white/90 border border-slate-200 rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-base sm:text-lg  shadow-sm group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="text-slate-800 font-medium">
                  {t(item.labelKey)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-7 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-200/50 ppx-4 py-1.5 md:px-6 md:py-2 text-xs sm:text-sm rounded-full text-blue-600 font-medium mb-6">
              <FaCogs className="text-blue-500" />
              <span>{t("hybridBlowers.features.badge")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              {t("hybridBlowers.features.title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t("hybridBlowers.features.subtitle")}
            </p>
            <div className="mt-8 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl transition-all duration-500 cursor-pointer border border-white/50 overflow-hidden ${
                  activeFeature === index
                    ? "shadow-2xl -translate-y-6 scale-105 border-blue-300/50 bg-white"
                    : "hover:-translate-y-4 hover:shadow-xl hover:border-blue-200/70 hover:bg-white/90"
                }`}
                onClick={() => setActiveFeature(index)}
                style={{
                  transformStyle: "preserve-3d",
                  animation:
                    activeFeature === index
                      ? "float 3s ease-in-out infinite"
                      : "none",
                }}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 transition-opacity duration-500 ${
                    activeFeature === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                ></div>

                {/* Top Progress Line */}
                <div
                  className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 ease-out ${
                    activeFeature === index
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></div>

                {/* Side Accent Line */}
                <div
                  className={`absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-700 ease-out ${
                    activeFeature === index
                      ? "h-full"
                      : "h-0 group-hover:h-full"
                  }`}
                ></div>

                {/* Enhanced Icon */}
                <div
                  className={`relative w-20 h-20 mb-6 transition-all duration-500 ${
                    activeFeature === index
                      ? "scale-110 rotate-3"
                      : "group-hover:scale-105 group-hover:-rotate-1"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transition-all duration-500 ${
                      activeFeature === index
                        ? "shadow-lg shadow-blue-500/25"
                        : "group-hover:shadow-md group-hover:shadow-blue-500/20"
                    }`}
                  ></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-2xl">{feature.icon}</div>
                  </div>
                  {/* Floating particles effect */}
                  <div
                    className={`absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full transition-all duration-500 ${
                      activeFeature === index
                        ? "opacity-100 animate-ping"
                        : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Enhanced Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                      activeFeature === index
                        ? "text-blue-900"
                        : "text-slate-800 group-hover:text-blue-900"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    {feature.description}
                  </p>

                  {/* Enhanced Benefit Badge */}
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-full mb-4 transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                        : "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100"
                    }`}
                  >
                    <FaCheckCircle
                      className={`text-sm transition-transform duration-300 ${
                        activeFeature === index ? "scale-110" : ""
                      }`}
                    />
                    <span className="text-sm font-semibold">
                      {feature.benefit}
                    </span>
                  </div>

                  {/* Enhanced Details with Better Animation */}
                  {activeFeature === index && (
                    <div
                      className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl border-l-4 border-blue-500 relative overflow-hidden"
                      style={{
                        animation: "slideDown 0.5s ease-out",
                      }}
                    >
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-pulse"></div>
                      <p className="text-slate-700 text-sm font-medium relative z-10">
                        {feature.details}
                      </p>
                      <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500/10 rounded-full blur-sm"></div>
                    </div>
                  )}
                </div>

                {/* Corner Accent */}
                <div
                  className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/10 to-transparent transition-opacity duration-500 ${
                    activeFeature === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* Enhanced Call-to-Action */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-blue-200/50 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <FaLightbulb className="text-blue-500 text-xl" />
              <span className="text-slate-700 font-medium">
                {t("hybridBlowers.features.cta")}
              </span>
              <FaArrowRight className="text-blue-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Construction Section */}
      <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {t("hybridBlowers.construction.title")}
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
            {t("hybridBlowers.construction.subtitle")}
          </p>
          <img
            src="/images/SuperHelicalHybridBlowerextra.png"
            alt="Rotary Twin Lobe Blower Construction"
            className="block mx-auto rounded-2xl w-full max-w-md sm:max-w-[680px] md:max-w-[760px] h-auto object-contain"
            loading="lazy"
          />
        </div>
      </section>

      {/* Specifications Section */}

      {/* Applications Section */}
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("hybridBlowers.applications.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("hybridBlowers.applications.subtitle")}
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

      {/* Advantages Section */}

      {/* SBR Optimization Section */}
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("hybridBlowers.sbr.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("hybridBlowers.sbr.subtitle")}
            </p>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-emerald-500 hover:-translate-y-3 transition-all duration-300 group max-w-sm">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaSyncAlt />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("hybridBlowers.sbr.turndown.title")}
                </h3>
                <div className="text-2xl font-bold text-emerald-500 mb-4">
                  {t("hybridBlowers.sbr.turndown.value")}
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    {t("hybridBlowers.sbr.turndown.badge1")}
                  </span>
                  <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    {t("hybridBlowers.sbr.turndown.badge2")}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-blue-500 hover:-translate-y-3 transition-all duration-300 group max-w-sm">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBatteryFull />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("hybridBlowers.sbr.energy.title")}
                </h3>
                <div className="text-2xl font-bold text-blue-500 mb-4">
                  {t("hybridBlowers.sbr.energy.value")}
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {t("hybridBlowers.sbr.energy.badge1")}
                  </span>
                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    {t("hybridBlowers.sbr.energy.badge2")}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-amber-500 hover:-translate-y-3 transition-all duration-300 group max-w-sm">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaWater />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("hybridBlowers.sbr.stp.title")}
                </h3>
                <div className="text-2xl font-bold text-amber-500 mb-4">
                  {t("hybridBlowers.sbr.stp.value")}
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                    {t("hybridBlowers.sbr.stp.badge1")}
                  </span>
                  <span className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    {t("hybridBlowers.sbr.stp.badge2")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              {t("hybridBlowers.cta.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-5 opacity-90">
              {t("hybridBlowers.cta.subtitle")}
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

      {/* CTA Section */}

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[9999] p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[95vw] max-h-[90svh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border-none rounded-full w-11 h-11 flex items-center justify-center text-white cursor-pointer z-20 transition-all duration-300 hover:bg-black/95 hover:scale-110 text-2xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="relative h-full overflow-hidden flex flex-col">
              <div className="flex-1 overflow-auto flex items-center justify-center p-4 scrollbar-hide">
                <img
                  src={modalImage}
                  alt="Super Helical Hybrid Blower - Expanded View"
                  className="max-w-none max-h-none w-auto h-auto min-w-full min-h-full object-contain block cursor-grab transition-transform duration-300 active:cursor-grabbing"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white text-center z-30 backdrop-blur-md">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {t("hybridBlowers.modal.title")}
                  </h3>
                  <p className="text-slate-200 mb-4 sm:mb-6 text-base sm:text-lg drop-shadow-md">
                    {t("hybridBlowers.modal.subtitle")}
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-md">
                      {t("hybridBlowers.modal.capacity")}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-md">
                      {t("hybridBlowers.modal.pressure")}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-md">
                      {t("hybridBlowers.modal.turndown")}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-md">
                      {t("hybridBlowers.modal.features")}
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

export default HybridHelicalBlowers;
