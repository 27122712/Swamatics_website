import React, { useState, useMemo } from "react";
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
  FaExpandArrowsAlt,
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
  FaCircle,
  FaWater,
  FaCube,
  FaPlug,
  FaMedkit,
  FaTable,
  FaFilter,
  FaTimes,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const VaccumSystemsPackages = () => {
  const { t, currentLanguage } = useTranslation();
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
    link.href = "/images/Catalogues/Bro. Vacuum Systems & Packages.pdf"; // Replace with your PDF path
    link.download = "Bro. Vacuum Systems & Packages.pdf";
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

    alert(t("vacuumSystemsPackages.form.successMessage"));
  };

  const keyFeatures = useMemo(
    () => [
      {
        icon: <FaLayerGroup className="feature-icon" />,
        title: t("vacuumSystemsPackages.keyFeatures.turnkey.title"),
        description: t("vacuumSystemsPackages.keyFeatures.turnkey.description"),
        details: t("vacuumSystemsPackages.keyFeatures.turnkey.details"),
        benefit: t("vacuumSystemsPackages.keyFeatures.turnkey.benefit"),
      },
      {
        icon: <FaChartLine className="feature-icon" />,
        title: t("vacuumSystemsPackages.keyFeatures.multiStage.title"),
        description: t(
          "vacuumSystemsPackages.keyFeatures.multiStage.description"
        ),
        details: t("vacuumSystemsPackages.keyFeatures.multiStage.details"),
        benefit: t("vacuumSystemsPackages.keyFeatures.multiStage.benefit"),
      },
      {
        icon: <FaGears className="feature-icon" />,
        title: t("vacuumSystemsPackages.keyFeatures.comprehensive.title"),
        description: t(
          "vacuumSystemsPackages.keyFeatures.comprehensive.description"
        ),
        details: t("vacuumSystemsPackages.keyFeatures.comprehensive.details"),
        benefit: t("vacuumSystemsPackages.keyFeatures.comprehensive.benefit"),
      },
      {
        icon: <FaShieldAlt className="feature-icon" />,
        title: t("vacuumSystemsPackages.keyFeatures.quality.title"),
        description: t("vacuumSystemsPackages.keyFeatures.quality.description"),
        details: t("vacuumSystemsPackages.keyFeatures.quality.details"),
        benefit: t("vacuumSystemsPackages.keyFeatures.quality.benefit"),
      },
    ],
    [t, currentLanguage]
  );

  const applications = useMemo(
    () => [
      {
        title: t("vacuumSystemsPackages.applications.drying.title"),
        description: t("vacuumSystemsPackages.applications.drying.description"),
        icon: <FaThermometerHalf />,
        image: "🌡️",
        bg: "/images/Application_Images/ID-FD-Fan-Systems.png",
        benefits: [
          t("vacuumSystemsPackages.applications.drying.benefit1"),
          t("vacuumSystemsPackages.applications.drying.benefit2"),
          t("vacuumSystemsPackages.applications.drying.benefit3"),
        ],
      },
      {
        title: t("vacuumSystemsPackages.applications.chemical.title"),
        description: t(
          "vacuumSystemsPackages.applications.chemical.description"
        ),
        icon: <FaFlask />,
        image: "⚗️",
        bg: "/images/Application_Images/Chemical-&-Petrochemical.png",
        benefits: [
          t("vacuumSystemsPackages.applications.chemical.benefit1"),
          t("vacuumSystemsPackages.applications.chemical.benefit2"),
          t("vacuumSystemsPackages.applications.chemical.benefit3"),
        ],
      },
      {
        title: t("vacuumSystemsPackages.applications.electronics.title"),
        description: t(
          "vacuumSystemsPackages.applications.electronics.description"
        ),
        icon: <FaMicrochip />,
        image: "🔌",
        bg: "/images/Application_Images/Electronics-&-Semiconductors.png",
        benefits: [
          t("vacuumSystemsPackages.applications.electronics.benefit1"),
          t("vacuumSystemsPackages.applications.electronics.benefit2"),
          t("vacuumSystemsPackages.applications.electronics.benefit3"),
        ],
      },
      {
        title: t("vacuumSystemsPackages.applications.sterilization.title"),
        description: t(
          "vacuumSystemsPackages.applications.sterilization.description"
        ),
        icon: <FaMedkit />,
        image: "🏥",
        bg: "/images/Application_Images/Sterilization-Processes.png",
        benefits: [
          t("vacuumSystemsPackages.applications.sterilization.benefit1"),
          t("vacuumSystemsPackages.applications.sterilization.benefit2"),
          t("vacuumSystemsPackages.applications.sterilization.benefit3"),
        ],
      },
      {
        title: t("vacuumSystemsPackages.applications.biofuels.title"),
        description: t(
          "vacuumSystemsPackages.applications.biofuels.description"
        ),
        icon: <FaSeedling />,
        image: "🌱",
        bg: "/images/Application_Images/Bio-Fuels-Production.png",
        benefits: [
          t("vacuumSystemsPackages.applications.biofuels.benefit1"),
          t("vacuumSystemsPackages.applications.biofuels.benefit2"),
          t("vacuumSystemsPackages.applications.biofuels.benefit3"),
        ],
      },
      {
        title: t("vacuumSystemsPackages.applications.oilGas.title"),
        description: t("vacuumSystemsPackages.applications.oilGas.description"),
        icon: <FaOilCan />,
        image: "🛢️",
        bg: "/images/Application_Images/Oil-and-Gas-Plants.png",
        benefits: [
          t("vacuumSystemsPackages.applications.oilGas.benefit1"),
          t("vacuumSystemsPackages.applications.oilGas.benefit2"),
          t("vacuumSystemsPackages.applications.oilGas.benefit3"),
        ],
      },
    ],
    [t, currentLanguage]
  );

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "52,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Vacuum Level",
      value: "Up to 10⁻⁴ mbar",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Minimum Capacity",
      value: "150 M³/Hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: "Booster Stages",
      value: "1 to 5 Boosters",
      icon: <FaLayerGroup />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Ultra-High Vacuum",
      description:
        "Achieves vacuum levels up to 10⁻⁴ mbar and lower with multi-stage booster configuration",
      icon: <FaTachometerAlt />,
      stat: "10⁻⁴",
      unit: "mbar",
    },
    {
      title: "High Displacement",
      description:
        "Exceptional pumping capacity Up To 65,000 M³/Hr for large-scale vacuum operations",
      icon: <FaChartLine />,
      stat: "52,000",
      unit: "M³/Hr",
    },
    {
      title: "Complete Package",
      description:
        "Turnkey solution with all components including backup pumps, boosters, and controls",
      icon: <FaLayerGroup />,
      stat: "Complete",
      unit: "System",
    },
    {
      title: "Flexible Configuration",
      description:
        "Multi-stage systems with 1 to 5 boosters for optimized performance requirements",
      icon: <FaGears />,
      stat: "1-5",
      unit: "Boosters",
    },
  ];

  const systemComponents = useMemo(
    () => [
      {
        component: t(
          "vacuumSystemsPackages.systemComponents.backupPump.component"
        ),
        description: t(
          "vacuumSystemsPackages.systemComponents.backupPump.description"
        ),
        icon: <FaGasPump />,
      },
      {
        component: t(
          "vacuumSystemsPackages.systemComponents.boosters.component"
        ),
        description: t(
          "vacuumSystemsPackages.systemComponents.boosters.description"
        ),
        icon: <FaRocket />,
      },
      {
        component: t(
          "vacuumSystemsPackages.systemComponents.condensers.component"
        ),
        description: t(
          "vacuumSystemsPackages.systemComponents.condensers.description"
        ),
        icon: <FaSnowflake />,
      },
      {
        component: t("vacuumSystemsPackages.systemComponents.gauges.component"),
        description: t(
          "vacuumSystemsPackages.systemComponents.gauges.description"
        ),
        icon: <FaTachometerAlt />,
      },
      {
        component: t(
          "vacuumSystemsPackages.systemComponents.starterPanels.component"
        ),
        description: t(
          "vacuumSystemsPackages.systemComponents.starterPanels.description"
        ),
        icon: <FaPlug />,
      },
      {
        component: t(
          "vacuumSystemsPackages.systemComponents.catchPot.component"
        ),
        description: t(
          "vacuumSystemsPackages.systemComponents.catchPot.description"
        ),
        icon: <FaWarehouse />,
      },
    ],
    [t, currentLanguage]
  );

  const workingPrinciple = useMemo(
    () => ({
      title: t("vacuumSystemsPackages.workingPrinciple.title"),
      description: t("vacuumSystemsPackages.workingPrinciple.description"),
      steps: [
        {
          step: "1",
          title: t("vacuumSystemsPackages.workingPrinciple.step1.title"),
          description: t(
            "vacuumSystemsPackages.workingPrinciple.step1.description"
          ),
        },
        {
          step: "2",
          title: t("vacuumSystemsPackages.workingPrinciple.step2.title"),
          description: t(
            "vacuumSystemsPackages.workingPrinciple.step2.description"
          ),
        },
        {
          step: "3",
          title: t("vacuumSystemsPackages.workingPrinciple.step3.title"),
          description: t(
            "vacuumSystemsPackages.workingPrinciple.step3.description"
          ),
        },
      ],
    }),
    [t, currentLanguage]
  );

  const productImageUrl = "/images/Vacuum-Systems-Packages.png";
  const systemComponentsImageUrl = "/images/Vacuum_Systems_Packages.jpg";

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
      <section className="min-h-[80vh] md:min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-start md:items-center relative overflow-hidden py-6 md:py-10">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start md:items-center">
          <div className="text-white">
            <br />
            <div className="mt-12 md:mt-12 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 px-5 py-2.5 rounded-full text-sm font-semibold mb-4 md:mb-6 animate-[fadeInUp_0.8s_ease-out]">
              <FaStar className="text-blue-400" />
              <span>{t("vacuumSystemsPackages.hero.badge")}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 md:mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              {t("vacuumSystemsPackages.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("vacuumSystemsPackages.hero.subtitle")}
              </span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-300 mb-6 md:mb-8 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              {t("vacuumSystemsPackages.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
Up To 65,000                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("vacuumSystemsPackages.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
Max 10⁻⁴                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("vacuumSystemsPackages.hero.vacuum")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  {t("vacuumSystemsPackages.hero.turnkey")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("vacuumSystemsPackages.hero.solutions")}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>{t("vacuumSystemsPackages.hero.downloadBrochure")}</span>
              </button>
            </div>
            <br />
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
              <img
                src={productImageUrl}
                alt="Vacuum Systems & Packages - Complete Turnkey Solutions"
                className="relative w-full max-w-md rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-medium flex items-center gap-2 animate-[float_3s_ease-in-out_infinite]">
                  <FaLayerGroup />
                  <span>{t("vacuumSystemsPackages.hero.completePackage")}</span>
                </div>
                <div className="absolute top-1/2 -right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-medium flex items-center gap-2 animate-[float_3s_ease-in-out_infinite_1s]">
                  <FaRocket />
                  <span>
                    {t("vacuumSystemsPackages.hero.multiStageBoosters")}
                  </span>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-medium flex items-center gap-2 animate-[float_3s_ease-in-out_infinite_2s]">
                  <FaChartLine />
                  <span>{t("vacuumSystemsPackages.hero.highPerformance")}</span>
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
                  {t("vacuumSystemsPackages.form.title")}
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
                    placeholder={t("vacuumSystemsPackages.form.firstName")}
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
                    placeholder={t("vacuumSystemsPackages.form.lastName")}
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
                    placeholder={t("vacuumSystemsPackages.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("vacuumSystemsPackages.form.phone")}
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
                  placeholder={t("vacuumSystemsPackages.form.company")}
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
                    {t("vacuumSystemsPackages.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("vacuumSystemsPackages.form.sendEnquiry")}</span>
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
      {/* <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Complete Vacuum System Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive vacuum systems and packages that
              deliver guaranteed performance with complete turnkey solutions
              including all necessary components for ultra-high vacuum
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative p-6 bg-white rounded-xl border border-slate-200 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-300 ${
                  activeFeature === index
                    ? "ring-2 ring-blue-500 shadow-lg border-blue-300"
                    : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-blue-500 text-white"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                  <FaCheckCircle className="w-4 h-4" />
                  <span>{feature.benefit}</span>
                </div>
                {activeFeature === index && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {feature.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* System Components Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl py-2 font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("vacuumSystemsPackages.systemComponents.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("vacuumSystemsPackages.systemComponents.subtitle")}
            </p>
          </div>

          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <FaLayerGroup />
                  <span>
                    {t("vacuumSystemsPackages.systemComponents.badge")}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {workingPrinciple.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {workingPrinciple.description}
                </p>

                <div className="space-y-6">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={systemComponentsImageUrl}
                  alt="Vacuum Systems Components and Technology"
                  className="w-full rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(systemComponentsImageUrl)}
                />
                {/* <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-0 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-800 whitespace-nowrap">
                      Vacuum Boosters
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-0 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-800 whitespace-nowrap">
                      Backup Pump
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-800 whitespace-nowrap">
                      Control System
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* System Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemComponents.map((component, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-lg mb-4">
                    {component.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {component.component}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      {/* <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Vacuum Systems & Packages deliver exceptional ultra-high vacuum
                performance with proven specifications designed for demanding
                applications requiring complete turnkey solutions and guaranteed
                performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-blue-600">{spec.icon}</div>
                      <h4 className="font-semibold text-slate-800">
                        {spec.parameter}
                      </h4>
                    </div>
                    <div className="text-lg font-bold text-slate-900">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Standard System Configuration
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="font-medium text-slate-700">
                      Capacity Range:
                    </span>
                    <span className="font-bold text-slate-900">
                      150 - 52,000 M³/Hr
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="font-medium text-slate-700">
                      Vacuum Level:
                    </span>
                    <span className="font-bold text-slate-900">
                      Up to 10⁻⁴ mbar & lower
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="font-medium text-slate-700">
                      Booster Stages:
                    </span>
                    <span className="font-bold text-slate-900">
                      1 to 5 Boosters
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-slate-700">
                      Package Type:
                    </span>
                    <span className="font-bold text-slate-900">
                      Complete Turnkey
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg">
                  <FaCertificate />
                  <span className="font-medium">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg">
                  <FaAward />
                  <span className="font-medium">CE Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-lg">
                  <FaShieldAlt />
                  <span className="font-medium">Guaranteed Performance</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Vacuum Systems & Packages Technical Specifications"
                  className="w-full rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                      <div className="text-xs font-medium text-slate-600">
                        Complete Package
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                      <div className="text-xs font-medium text-slate-600">
                        Multi-Stage Design
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                      <div className="text-xs font-medium text-slate-600">
                        Guaranteed Performance
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                      <div className="text-xs font-medium text-slate-600">
                        Turnkey Solution
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("vacuumSystemsPackages.applications.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("vacuumSystemsPackages.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-300 shadow-lg"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{app.image}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">
                        {app.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                    <FaArrowRight
                      className={`transition-transform duration-300 ${
                        selectedApplication === index
                          ? "text-blue-600 rotate-90"
                          : "text-slate-400"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: clean, readable image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[300px] sm:h-[340px] md:h-[420px]">
              <img
                src={
                  applications[selectedApplication].bg ||
                  "/images/apps/applications-bg.jpg"
                }
                alt={applications[selectedApplication].title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* softer gradient for phones */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/65 sm:from-transparent sm:via-black/20 sm:to-black/65" />

              {/* title badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl drop-shadow">
                  {applications[selectedApplication].image}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-black/60 text-white font-semibold text-sm sm:text-base">
                  {applications[selectedApplication].title}
                </span>
              </div>

              {/* optional description */}
              {applications[selectedApplication].description && (
                <div className="absolute top-14 sm:top-16 left-3 right-3 sm:left-4 sm:right-4">
                  <p className="px-3 py-2 rounded-lg bg-black/45 text-white/95 text-xs sm:text-sm leading-relaxed ring-1 ring-white/10 whitespace-normal break-words">
                    {applications[selectedApplication].description}
                  </p>
                </div>
              )}

              {/* benefit pills */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 space-y-2">
                {applications[selectedApplication].benefits.map(
                  (benefit, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/45 text-white ring-1 ring-white/10 shadow-md text-xs sm:text-sm whitespace-normal break-words"
                    >
                      <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Additional Applications Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("vacuumSystemsPackages.applications.moreApplications.title")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaTable className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  {t(
                    "vacuumSystemsPackages.applications.moreApplications.pervaporation"
                  )}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaAtom className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  {t(
                    "vacuumSystemsPackages.applications.moreApplications.polymerization"
                  )}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaFlask className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  {t(
                    "vacuumSystemsPackages.applications.moreApplications.fattyAcids"
                  )}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaIndustry className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  {t(
                    "vacuumSystemsPackages.applications.moreApplications.reactorService"
                  )}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaFilter className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  {t(
                    "vacuumSystemsPackages.applications.moreApplications.filtrationSystems"
                  )}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaGlobe className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  {t(
                    "vacuumSystemsPackages.applications.moreApplications.andManyMore"
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      {/* <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Vacuum Systems & Packages
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Complete turnkey vacuum solutions delivering guaranteed
              performance with ultra-high vacuum capability and comprehensive
              system integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-4">
                  {advantage.icon}
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-slate-900 leading-none">
                    {advantage.stat}
                  </div>
                  <div className="text-sm font-medium text-slate-500 mt-1">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Salient Features Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("vacuumSystemsPackages.salientFeatures.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("vacuumSystemsPackages.salientFeatures.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-lg mb-4">
                <FaLayerGroup />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t(
                  "vacuumSystemsPackages.salientFeatures.turnkeyPackage.title"
                )}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "vacuumSystemsPackages.salientFeatures.turnkeyPackage.description"
                )}
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-lg mb-4">
                <FaShieldAlt />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t(
                  "vacuumSystemsPackages.salientFeatures.guaranteedPerformance.title"
                )}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "vacuumSystemsPackages.salientFeatures.guaranteedPerformance.description"
                )}
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-lg mb-4">
                <FaGears />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t(
                  "vacuumSystemsPackages.salientFeatures.multiStageConfig.title"
                )}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "vacuumSystemsPackages.salientFeatures.multiStageConfig.description"
                )}
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-lg mb-4">
                <FaChartLine />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t(
                  "vacuumSystemsPackages.salientFeatures.wideOperatingRange.title"
                )}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "vacuumSystemsPackages.salientFeatures.wideOperatingRange.description"
                )}
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-lg mb-4">
                <FaTools />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t(
                  "vacuumSystemsPackages.salientFeatures.auxiliaryEquipment.title"
                )}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "vacuumSystemsPackages.salientFeatures.auxiliaryEquipment.description"
                )}
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500 text-white rounded-lg mb-4">
                <FaRocket />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t(
                  "vacuumSystemsPackages.salientFeatures.highSpeedOperation.title"
                )}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "vacuumSystemsPackages.salientFeatures.highSpeedOperation.description"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              {t("vacuumSystemsPackages.cta.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-5 max-w-2xl mx-auto leading-relaxed">
              {t("vacuumSystemsPackages.cta.subtitle")}
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300">
                <FaPhone />
                <span>Get Expert Consultation</span>
              </button>
              <button className="inline-flex items-center gap-3 bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                <FaDownload />
                <span>Download System Brochure</span>
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

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-4">
              <div className="relative">
                <img
                  src={modalImage}
                  alt="Vacuum Systems & Packages - Complete Turnkey Solutions - Expanded View"
                  className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t("vacuumSystemsPackages.modal.title")}
                  </h3>
                  <p className="text-blue-200 mb-4">
                    {t("vacuumSystemsPackages.modal.subtitle")}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                      {t("vacuumSystemsPackages.modal.capacity")}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                      {t("vacuumSystemsPackages.modal.vacuum")}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                      {t("vacuumSystemsPackages.modal.configuration")}
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

export default VaccumSystemsPackages;
