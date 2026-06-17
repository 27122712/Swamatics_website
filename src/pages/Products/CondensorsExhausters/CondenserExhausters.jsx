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
  FaExchangeAlt,
  FaPowerOff,
  FaCompress,
  FaTimes,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const CondenserExhausters = () => {
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
    link.href = "/images/Catalogues/Bro. Condenser Exhauster.pdf"; // Replace with your PDF path
    link.download = "Bro. Condenser Exhauster.pdf";
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

    alert(t("condenserExhausters.form.successMessage"));
  };

  const keyFeatures = [
    {
      icon: <FaIndustry className="feature-icon" />,
      title: "Power Generation Service",
      description:
        "Advanced design Condenser Exhauster specifically for hogging and holding service in power generation applications",
      details:
        "Specialized design optimized for power plant condensers with reliable performance for continuous operation",
      benefit: "Power plant optimized",
    },
    {
      icon: <FaSync className="feature-icon" />,
      title: "Total Recirculation System",
      description:
        "Complete system with liquid ring vacuum pumps, separator, heat exchanger with total recirculation capability",
      details:
        "Integrated recirculation system ensures efficient operation and optimal performance with minimal water consumption",
      benefit: "Efficient operation",
    },
    {
      icon: <FaExchangeAlt className="feature-icon" />,
      title: "Integrated Heat Exchanger",
      description:
        "Built-in heat exchanger for optimal thermal management and enhanced system efficiency",
      details:
        "Advanced heat exchanger design maintains optimal operating temperatures for consistent performance",
      benefit: "Thermal efficiency",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Reliable Performance",
      description:
        "Proven design with robust construction for continuous operation in demanding power generation environments",
      details:
        "Built for 24/7 operation with minimal maintenance requirements and guaranteed reliability",
      benefit: "Continuous operation",
    },
  ];

  const applications = useMemo(
    () => [
      {
        title: t("condenserExhausters.applications.powerPlant.title"),
        icon: <FaPowerOff />,
        image: "⚡",
        bg: "/images/Application_Images/Power-Plants.png",
        benefits: [
          t("condenserExhausters.applications.powerPlant.benefit1"),
          t("condenserExhausters.applications.powerPlant.benefit2"),
          t("condenserExhausters.applications.powerPlant.benefit3"),
        ],
      },
      {
        title: t("condenserExhausters.applications.hogging.title"),
        icon: <FaRocket />,
        image: "🚀",
        bg: "/images/Application_Images/Wastewater-Treatment.png",
        benefits: [
          t("condenserExhausters.applications.hogging.benefit1"),
          t("condenserExhausters.applications.hogging.benefit2"),
          t("condenserExhausters.applications.hogging.benefit3"),
        ],
      },
      {
        title: t("condenserExhausters.applications.holding.title"),
        icon: <FaLock />,
        image: "🔒",
        bg: "/images/Application_Images/Bulk-Material-Loading.png",
        benefits: [
          t("condenserExhausters.applications.holding.benefit1"),
          t("condenserExhausters.applications.holding.benefit2"),
          t("condenserExhausters.applications.holding.benefit3"),
        ],
      },
      {
        title: t("condenserExhausters.applications.steamPower.title"),
        icon: <FaIndustry />,
        image: "🏭",
        bg: "/images/Application_Images/Steam-Power-Plants.png",
        benefits: [
          t("condenserExhausters.applications.steamPower.benefit1"),
          t("condenserExhausters.applications.steamPower.benefit2"),
          t("condenserExhausters.applications.steamPower.benefit3"),
        ],
      },
      {
        title: t("condenserExhausters.applications.industrialSteam.title"),
        icon: <FaGasPump />,
        image: "🔧",
        bg: "/images/Application_Images/Industrial-Ventilation.png",
        benefits: [
          t("condenserExhausters.applications.industrialSteam.benefit1"),
          t("condenserExhausters.applications.industrialSteam.benefit2"),
          t("condenserExhausters.applications.industrialSteam.benefit3"),
        ],
      },
      {
        title: t("condenserExhausters.applications.turbine.title"),
        icon: <FaWind />,
        image: "💨",
        bg: "/images/Application_Images/Turbine-Applications.png",
        benefits: [
          t("condenserExhausters.applications.turbine.benefit1"),
          t("condenserExhausters.applications.turbine.benefit2"),
          t("condenserExhausters.applications.turbine.benefit3"),
        ],
      },
    ],
    [t]
  );

  const specifications = [
    {
      parameter: "Capacity Range",
      value: "40 SCFM",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Service Type",
      value: "Hogging & Holding",
      icon: <FaSync />,
      color: "#10b981",
    },
    {
      parameter: "Application",
      value: "Power Generation",
      icon: <FaPowerOff />,
      color: "#f59e0b",
    },
    {
      parameter: "System Type",
      value: "Total Recirculation",
      icon: <FaExchangeAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Proven Design",
      description:
        "Advanced design specifically developed for power generation condenser applications",
      icon: <FaAward />,
      stat: "Advanced",
      unit: "Design",
    },
    {
      title: "Dual Service",
      description:
        "Single system handles both hogging and holding service for complete condenser support",
      icon: <FaSync />,
      stat: "Dual",
      unit: "Service",
    },
    {
      title: "Complete System",
      description:
        "Integrated package with pumps, separator, heat exchanger, and optional ejector",
      icon: <FaLayerGroup />,
      stat: "Complete",
      unit: "Package",
    },
    {
      title: "Power Optimized",
      description:
        "Specifically engineered for power generation industry requirements and standards",
      icon: <FaPowerOff />,
      stat: "Power",
      unit: "Optimized",
    },
  ];

  const systemComponents = useMemo(
    () => [
      {
        component: t("condenserExhausters.systemComponents.liquidRingPumps"),
        description: t(
          "condenserExhausters.systemComponents.liquidRingPumpsDesc"
        ),
        icon: <FaCircle />,
      },
      {
        component: t("condenserExhausters.systemComponents.separator"),
        description: t("condenserExhausters.systemComponents.separatorDesc"),
        icon: <FaFilter />,
      },
      {
        component: t("condenserExhausters.systemComponents.heatExchanger"),
        description: t(
          "condenserExhausters.systemComponents.heatExchangerDesc"
        ),
        icon: <FaExchangeAlt />,
      },
      {
        component: t("condenserExhausters.systemComponents.ejector"),
        description: t("condenserExhausters.systemComponents.ejectorDesc"),
        icon: <FaRocket />,
      },
      {
        component: t("condenserExhausters.systemComponents.recirculation"),
        description: t(
          "condenserExhausters.systemComponents.recirculationDesc"
        ),
        icon: <FaSync />,
      },
      {
        component: t("condenserExhausters.systemComponents.control"),
        description: t("condenserExhausters.systemComponents.controlDesc"),
        icon: <FaCogs />,
      },
    ],
    [t]
  );

  const workingPrinciple = useMemo(
    () => ({
      title: t("condenserExhausters.workingPrinciple.title"),
      description: t("condenserExhausters.workingPrinciple.description"),
      steps: [
        {
          step: "1",
          title: t("condenserExhausters.workingPrinciple.step1.title"),
          description: t(
            "condenserExhausters.workingPrinciple.step1.description"
          ),
        },
        {
          step: "2",
          title: t("condenserExhausters.workingPrinciple.step2.title"),
          description: t(
            "condenserExhausters.workingPrinciple.step2.description"
          ),
        },
        {
          step: "3",
          title: t("condenserExhausters.workingPrinciple.step3.title"),
          description: t(
            "condenserExhausters.workingPrinciple.step3.description"
          ),
        },
      ],
    }),
    [t]
  );

  const productImageUrl = "/images/Condenser-Exhausters.jpg";

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
      <section className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-grid-pattern"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start md:items-center">
          <div className="text-white">
            {/* removed leading <br /> */}
            <div className="mt-24 md:mt-12 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-5 py-2.5 rounded-full text-sm font-semibold mb-4 md:mb-6 animate-fade-in-up">
              <FaStar className="text-blue-400" />
              <span>{t("condenserExhausters.hero.badge")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 animate-fade-in-up animation-delay-200">
              {t("condenserExhausters.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("condenserExhausters.hero.subtitle")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 md:mb-8 animate-fade-in-up animation-delay-400">
              {t("condenserExhausters.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8 animate-fade-in-up animation-delay-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
Up To 40                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("condenserExhausters.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  {t("condenserExhausters.hero.serviceValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("condenserExhausters.hero.service")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  {t("condenserExhausters.hero.applicationValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("condenserExhausters.hero.application")}
                </div>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>{t("condenserExhausters.hero.downloadBrochure")}</span>
              </button>
            </div>
            {/* removed trailing <br /> */}
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex justify-center items-center">
              <div className="absolute w-full h-full bg-blue-500/10 rounded-full animate-pulse"></div>
              <img
                src={productImageUrl}
                alt="Condenser Exhausters - Power Generation Service"
                className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] h-auto object-contain filter drop-shadow-2xl hover:scale-105 transition-transform cursor-pointer z-10"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="z-100 absolute w-full h-full hidden lg:block">
                <div className="absolute top-[15%] -left-[10%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float min-w-[120px] max-w-[280px] min-h-[40px] justify-center text-center">
                  <FaSync className="text-blue-600" />
                  <span>
                    {t("condenserExhausters.hero.totalRecirculation")}
                  </span>
                </div>
                <div className="absolute top-1/2 -right-[15%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float animation-delay-2000 min-w-[120px] max-w-[180px] min-h-[40px] justify-center text-center">
                  <FaPowerOff className="text-blue-600" />
                  <span>{t("condenserExhausters.hero.powerGeneration")}</span>
                </div>
                <div className="absolute bottom-[20%] -left-[5%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float animation-delay-4000 min-w-[120px] max-w-[180px] min-h-[40px] justify-center text-center">
                  <FaExchangeAlt className="text-blue-600" />
                  <span>{t("condenserExhausters.hero.heatExchanger")}</span>
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
                  {t("condenserExhausters.form.title")}
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
                    placeholder={t("condenserExhausters.form.firstName")}
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
                    placeholder={t("condenserExhausters.form.lastName")}
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
                    placeholder={t("condenserExhausters.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("condenserExhausters.form.phone")}
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
                  placeholder={t("condenserExhausters.form.company")}
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
                    {t("condenserExhausters.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("condenserExhausters.form.sendEnquiry")}</span>
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
      {/* <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Advanced Condenser Exhauster Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover our specialized condenser exhauster systems designed for
              power generation applications, featuring advanced liquid ring
              technology with total recirculation for both hogging and holding
              service requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center transition-all cursor-pointer border border-slate-200 relative overflow-hidden ${
                  activeFeature === index
                    ? "transform -translate-y-2 shadow-2xl border-blue-600"
                    : "hover:transform hover:-translate-y-2 hover:shadow-xl"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-0 transition-opacity ${
                    activeFeature === index ? "opacity-5" : ""
                  }`}
                ></div>
                <div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform ${
                    activeFeature === index ? "scale-110 rotate-6" : ""
                  }`}
                >
                  <div className="text-2xl text-white">{feature.icon}</div>
                </div>
                <h3 className="relative z-10 text-xl font-semibold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="relative z-10 flex items-center justify-center gap-2 text-emerald-600 font-semibold text-sm">
                  <FaCheckCircle className="text-base" />
                  <span>{feature.benefit}</span>
                </div>
                {activeFeature === index && (
                  <div className="relative z-10 mt-4 pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500">{feature.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* System Components Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-4">
            <h2 className="text-4xl py-2 font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("condenserExhausters.systemComponents.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("condenserExhausters.systemComponents.description")}
            </p>
          </div>

          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="p-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                  <FaIndustry />
                  <span>{t("condenserExhausters.systemComponents.badge")}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {workingPrinciple.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {workingPrinciple.description}
                </p>

                <div className="space-y-6">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
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

              <div className="relative flex justify-center items-center">
                <img
                  src={productImageUrl}
                  alt="Condenser Exhauster Components and Technology"
                  className="max-w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                {/* <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[10%] left-[5%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-800 shadow-md">
                      Liquid Ring Pump
                    </div>
                  </div>
                  <div className="absolute top-[40%] right-[10%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse animation-delay-1000"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-800 shadow-md">
                      Heat Exchanger
                    </div>
                  </div>
                  <div className="absolute bottom-[20%] left-[15%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse animation-delay-2000"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-800 shadow-md">
                      Separator
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* System Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {systemComponents.map((component, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-white text-lg">{component.icon}</div>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">
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
      {/* <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Condenser Exhausters deliver reliable performance with proven
                specifications designed specifically for power generation
                condenser service with both hogging and holding capabilities in
                a complete integrated system.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
                    style={{ "--accent-color": spec.color }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: spec.color + "20",
                          color: spec.color,
                        }}
                      >
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">
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
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-6 border border-slate-200 mb-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Standard System Configuration
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-100 last:border-b-0">
                    <span className="font-medium text-slate-700">
                      Capacity Options:
                    </span>
                    <span className="font-semibold text-slate-800">
                      10, 20, 30, 40 SCFM
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100 last:border-b-0">
                    <span className="font-medium text-slate-700">
                      Service Type:
                    </span>
                    <span className="font-semibold text-slate-800">
                      Hogging & Holding
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100 last:border-b-0">
                    <span className="font-medium text-slate-700">
                      Primary Application:
                    </span>
                    <span className="font-semibold text-slate-800">
                      Power Generation
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium text-slate-700">
                      System Features:
                    </span>
                    <span className="font-semibold text-slate-800">
                      Total Recirculation
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-semibold">
                  <FaAward />
                  <span>Power Industry Proven</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-semibold">
                  <FaShieldAlt />
                  <span>Reliable Operation</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-lg p-8 shadow-lg">
                <img
                  src={productImageUrl}
                  alt="Condenser Exhausters Technical Specifications"
                  className="w-full h-auto rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute -top-4 -right-4 -bottom-4 -left-4 flex flex-wrap content-around justify-around pointer-events-none">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Liquid Ring Technology
                  </div>
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Total Recirculation
                  </div>
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Heat Exchanger
                  </div>
                  <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Dual Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Applications Section */}
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("condenserExhausters.applications.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("condenserExhausters.applications.subtitle")}
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

      {/* Advantages Section */}
      {/* <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Condenser Exhausters
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Advanced condenser exhauster solutions delivering proven
              performance for power generation applications with specialized
              design for both hogging and holding service requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center border border-slate-200 hover:shadow-lg hover:-translate-y-2 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl">{advantage.icon}</div>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
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
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("condenserExhausters.salientFeatures.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("condenserExhausters.salientFeatures.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <FaPowerOff className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t("condenserExhausters.salientFeatures.powerOptimized.title")}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "condenserExhausters.salientFeatures.powerOptimized.description"
                )}
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <FaSync className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t("condenserExhausters.salientFeatures.dualService.title")}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "condenserExhausters.salientFeatures.dualService.description"
                )}
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <FaCircle className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t("condenserExhausters.salientFeatures.liquidRing.title")}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "condenserExhausters.salientFeatures.liquidRing.description"
                )}
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <FaExchangeAlt className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t("condenserExhausters.salientFeatures.integratedHeat.title")}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "condenserExhausters.salientFeatures.integratedHeat.description"
                )}
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <FaFilter className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t(
                  "condenserExhausters.salientFeatures.advancedSeparation.title"
                )}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "condenserExhausters.salientFeatures.advancedSeparation.description"
                )}
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <FaTint className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                {t(
                  "condenserExhausters.salientFeatures.totalRecirculation.title"
                )}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "condenserExhausters.salientFeatures.totalRecirculation.description"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {t("condenserExhausters.cta.title")}
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-5">
            {t("condenserExhausters.cta.subtitle")}
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="inline-flex items-center gap-3 bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-3 bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 backdrop-blur-lg hover:bg-white/20 hover:-translate-y-0.5 transition-all">
              <FaDownload />
              <span>Download Product Brochure</span>
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
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors z-10 text-xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <img
                  src={modalImage}
                  alt="Condenser Exhausters - Power Generation Service - Expanded View"
                  className="flex-1 max-w-full h-auto rounded-lg shadow-lg"
                />
                <div className="lg:w-80 flex-shrink-0">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {t("condenserExhausters.modal.title")}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {t("condenserExhausters.modal.subtitle")}
                  </p>
                  <div className="space-y-3">
                    <div className="bg-slate-50 px-4 py-2 rounded-lg">
                      <span className="font-semibold text-slate-800">
                        {t("condenserExhausters.modal.capacity")}
                      </span>
                    </div>
                    <div className="bg-slate-50 px-4 py-2 rounded-lg">
                      <span className="font-semibold text-slate-800">
                        {t("condenserExhausters.modal.service")}
                      </span>
                    </div>
                    <div className="bg-slate-50 px-4 py-2 rounded-lg">
                      <span className="font-semibold text-slate-800">
                        {t("condenserExhausters.modal.application")}
                      </span>
                    </div>
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

export default CondenserExhausters;
