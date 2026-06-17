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
  FaAtom,
  FaFlask,
  FaFire,
  FaWind,
  FaOilCan,
  FaTruck,
  FaSnowflake,
  FaFilter,
  FaCube,
  FaCompress,
  FaEye,
  FaTimes,
} from "react-icons/fa";

const RotarySlidingVaneCompressors = () => {
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
    link.href = "/images/Catalogues/Bro. Sliding Vane Compressor.pdf"; // Replace with your PDF path
    link.download = "Bro. Sliding Vane Compressor.pdf";
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

    alert(t("rotarySlidingVaneCompressors.form.successMessage"));
  };

  // Advantages from brochure (image)
  const pdfAdvantages = useMemo(
    () => [
      {
        icon: <FaChartLine />,
        title: t(
          "rotarySlidingVaneCompressors.advantages.highEfficiency.title"
        ),
        text: t(
          "rotarySlidingVaneCompressors.advantages.highEfficiency.description"
        ),
      },
      {
        icon: <FaTools />,
        title: t(
          "rotarySlidingVaneCompressors.advantages.simpleMaintenance.title"
        ),
        text: t(
          "rotarySlidingVaneCompressors.advantages.simpleMaintenance.description"
        ),
      },
      {
        icon: <FaWind />,
        title: t("rotarySlidingVaneCompressors.advantages.pulsationFree.title"),
        text: t(
          "rotarySlidingVaneCompressors.advantages.pulsationFree.description"
        ),
      },
      {
        icon: <FaOilCan />,
        title: t("rotarySlidingVaneCompressors.advantages.selfRenewing.title"),
        text: t(
          "rotarySlidingVaneCompressors.advantages.selfRenewing.description"
        ),
      },
      {
        icon: <FaShieldAlt />,
        title: t(
          "rotarySlidingVaneCompressors.advantages.corrosionProtection.title"
        ),
        text: t(
          "rotarySlidingVaneCompressors.advantages.corrosionProtection.description"
        ),
      },
      {
        icon: <FaFilter />,
        title: t(
          "rotarySlidingVaneCompressors.advantages.impurityRemoval.title"
        ),
        text: t(
          "rotarySlidingVaneCompressors.advantages.impurityRemoval.description"
        ),
      },
    ],
    [t]
  );

  const keyFeatures = useMemo(
    () => [
      {
        icon: <FaCogs className="text-2xl text-white" />,
        title: t(
          "rotarySlidingVaneCompressors.keyFeatures.cncManufacturing.title"
        ),
        description: t(
          "rotarySlidingVaneCompressors.keyFeatures.cncManufacturing.description"
        ),
        details:
          "State-of-the-art CNC machining technology delivers exceptional precision and reliability for demanding applications",
        benefit: "High precision accuracy",
      },
      {
        icon: <FaLeaf className="text-2xl text-white" />,
        title: t(
          "rotarySlidingVaneCompressors.keyFeatures.energyEfficient.title"
        ),
        description: t(
          "rotarySlidingVaneCompressors.keyFeatures.energyEfficient.description"
        ),
        details:
          "Optimized design reduces energy consumption while maintaining superior performance for bio gas and landfill gas applications",
        benefit: "Energy efficient operation",
      },
      {
        icon: <FaCompress className="text-2xl text-white" />,
        title: t("rotarySlidingVaneCompressors.keyFeatures.highPressure.title"),
        description: t(
          "rotarySlidingVaneCompressors.keyFeatures.highPressure.description"
        ),
        details:
          "Robust design capable of handling high pressure requirements up to 2.5 bar gauge for demanding industrial processes",
        benefit: "Up to 2.5 bar pressure",
      },
      {
        icon: <FaCube className="text-2xl text-white" />,
        title: t(
          "rotarySlidingVaneCompressors.keyFeatures.variableVolume.title"
        ),
        description: t(
          "rotarySlidingVaneCompressors.keyFeatures.variableVolume.description"
        ),
        details:
          "Sliding vanes create individual compression chambers with reducing volumes during rotation from suction to discharge",
        benefit: "Efficient compression cycle",
      },
    ],
    [t]
  );

  const workingPrinciple = useMemo(
    () => ({
      title: t("rotarySlidingVaneCompressors.workingPrinciple.title"),
      description: t(
        "rotarySlidingVaneCompressors.workingPrinciple.description"
      ),
      steps: [
        {
          step: "1",
          title: t("rotarySlidingVaneCompressors.workingPrinciple.step1.title"),
          description: t(
            "rotarySlidingVaneCompressors.workingPrinciple.step1.description"
          ),
          icon: <FaCogs />,
        },
        {
          step: "2",
          title: t("rotarySlidingVaneCompressors.workingPrinciple.step2.title"),
          description: t(
            "rotarySlidingVaneCompressors.workingPrinciple.step2.description"
          ),
          icon: <FaCube />,
        },
        {
          step: "3",
          title: t("rotarySlidingVaneCompressors.workingPrinciple.step3.title"),
          description: t(
            "rotarySlidingVaneCompressors.workingPrinciple.step3.description"
          ),
          icon: <FaEye />,
        },
        {
          step: "4",
          title: t("rotarySlidingVaneCompressors.workingPrinciple.step4.title"),
          description: t(
            "rotarySlidingVaneCompressors.workingPrinciple.step4.description"
          ),
          icon: <FaCompress />,
        },
      ],
    }),
    [t]
  );

  const applications = useMemo(
    () => [
      {
        title: t("rotarySlidingVaneCompressors.applications.steelPlant.title"),
        icon: <FaIndustry />,
        image: "🏭",
        bg: "/images/Application_Images/Steel-Plant-Mix-Gas-Boosters.png",
        benefits: [
          t("rotarySlidingVaneCompressors.applications.steelPlant.benefit1"),
          t("rotarySlidingVaneCompressors.applications.steelPlant.benefit2"),
          t("rotarySlidingVaneCompressors.applications.steelPlant.benefit3"),
        ],
      },
      {
        title: t("rotarySlidingVaneCompressors.applications.cementPlant.title"),
        icon: <FaRecycle />,
        image: "🏗️",
        bg: "/images/Application_Images/Cement-Plants.png",
        benefits: [
          t("rotarySlidingVaneCompressors.applications.cementPlant.benefit1"),
          t("rotarySlidingVaneCompressors.applications.cementPlant.benefit2"),
          t("rotarySlidingVaneCompressors.applications.cementPlant.benefit3"),
        ],
      },
      {
        title: t(
          "rotarySlidingVaneCompressors.applications.waterTreatment.title"
        ),
        icon: <FaLeaf />,
        image: "💧",
        bg: "/images/Application_Images/Water-Treatment-Plant-Bio-Gas.png",
        benefits: [
          t(
            "rotarySlidingVaneCompressors.applications.waterTreatment.benefit1"
          ),
          t(
            "rotarySlidingVaneCompressors.applications.waterTreatment.benefit2"
          ),
          t(
            "rotarySlidingVaneCompressors.applications.waterTreatment.benefit3"
          ),
        ],
      },
      {
        title: t("rotarySlidingVaneCompressors.applications.biogas.title"),
        icon: <FaLeaf />,
        image: "🌱",
        bg: "/images/Application_Images/Agricultural-Biogas.png",
        benefits: [
          t("rotarySlidingVaneCompressors.applications.biogas.benefit1"),
          t("rotarySlidingVaneCompressors.applications.biogas.benefit2"),
          t("rotarySlidingVaneCompressors.applications.biogas.benefit3"),
        ],
      },
      {
        title: t("rotarySlidingVaneCompressors.applications.landfillGas.title"),
        icon: <FaRecycle />,
        image: "♻️",
        bg: "/images/Application_Images/Landfill-Gas-Recovery.png",
        benefits: [
          t("rotarySlidingVaneCompressors.applications.landfillGas.benefit1"),
          t("rotarySlidingVaneCompressors.applications.landfillGas.benefit2"),
          t("rotarySlidingVaneCompressors.applications.landfillGas.benefit3"),
        ],
      },
      {
        title: t(
          "rotarySlidingVaneCompressors.applications.industrialGas.title"
        ),
        icon: <FaCogs />,
        image: "⚙️",
        bg: "/images/Application_Images/Industrial-Gas-Boosting.png",
        benefits: [
          t("rotarySlidingVaneCompressors.applications.industrialGas.benefit1"),
          t("rotarySlidingVaneCompressors.applications.industrialGas.benefit2"),
          t("rotarySlidingVaneCompressors.applications.industrialGas.benefit3"),
        ],
      },
    ],
    [t]
  );

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 3500 M³/Hr (3000 CFM)",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure",
      value: "Up to 2.5 bar gauge",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Manufacturing",
      value: "CNC Machine Precision",
      icon: <FaCogs />,
      color: "#f59e0b",
    },
    {
      parameter: "Applications",
      value: "Bio Gas & Landfill Gas",
      icon: <FaLeaf />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "CNC Precision",
      description:
        "Manufactured on CNC machines for high accuracy and reliability",
      icon: <FaCogs />,
      stat: "CNC",
      unit: "Precision",
    },
    {
      title: "Energy Efficient",
      description:
        "Advanced design for maximum energy efficiency in bio gas applications",
      icon: <FaLeaf />,
      stat: "Energy",
      unit: "Efficient",
    },
    {
      title: "High Pressure",
      description:
        "Capable of developing pressure up to 2.5 bar for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "2.5",
      unit: "Bar",
    },
    {
      title: "High Capacity",
      description:
        "Available for flows up to 3000 CFM for large scale operations",
      icon: <FaChartLine />,
      stat: "3500",
      unit: "M³/Hr",
    },
  ];

  // Using the specified image path
  const productImageUrl = "/images/rotary-Sliding-Vane-Compressors.jpg";

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
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start md:items-center">
          <div className="text-white">
            {/* removed leading <br /> */}
            <div className="inline-flex items-center gap-2 mt-24 md:mt-12 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-5 py-2.5 rounded-full text-sm font-semibold mb-4 md:mb-6">
              <FaCompress className="text-blue-400" />
              <span>{t("rotarySlidingVaneCompressors.hero.badge")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              {t("rotarySlidingVaneCompressors.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("rotarySlidingVaneCompressors.hero.subtitle")}
              </span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-slate-300 mb-6 md:mb-8">
              SWAM offers most advance and energy efficient sliding vane
              compressors for bio gas landfill gases with pressure Max 2.5 bar
              and manufactured on CNC Machine. The Sliding vane compressor have
              very high accuracies and are available for flows up to 3000 CFM
              (3500 M³/Hr).{" "}
            </p>

            <div className="flex flex-wrap gap-10 sm:gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  Up To 3500{" "}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("rotarySlidingVaneCompressors.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  Max 2.5{" "}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("rotarySlidingVaneCompressors.hero.pressure")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  {t("rotarySlidingVaneCompressors.hero.manufacturingValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("rotarySlidingVaneCompressors.hero.manufacturing")}
                </div>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>
                  {t("rotarySlidingVaneCompressors.hero.downloadBrochure")}
                </span>
              </button>
            </div>
            {/* removed trailing <br /> */}
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:max-w-md aspect-square rounded-3xl">
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 to-transparent rounded-3xl animate-pulse"></div>
              <img
                src={productImageUrl}
                alt="Rotary Sliding Vane Compressors"
                className="w-full h-full object-contain rounded-2xl relative z-10 transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openModal(productImageUrl)}
              />

              {/* Floating specs - hidden on mobile */}
              <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <div className="absolute z-100 top-1/5 -left-10 bg-white/90 backdrop-blur-sm border border-blue-300 rounded-full px-5 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce">
                  <FaCogs className="text-blue-600" />
                  <span>
                    {t("rotarySlidingVaneCompressors.hero.cncPrecision")}
                  </span>
                </div>
                <div
                  className="absolute z-100 top-3/5 -right-10 bg-white/90 backdrop-blur-sm border border-blue-300 rounded-full px-5 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <FaLeaf className="text-blue-600" />
                  <span>
                    {t("rotarySlidingVaneCompressors.hero.bioGasReady")}
                  </span>
                </div>
                <div
                  className="absolute z-100 bottom-1/5 left-10 bg-white/90 backdrop-blur-sm border border-blue-300 rounded-full px-5 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce"
                  style={{ animationDelay: "4s" }}
                >
                  <FaCompress className="text-blue-600" />
                  <span>
                    {t("rotarySlidingVaneCompressors.hero.pressureBadge")}
                  </span>
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
                  {t("rotarySlidingVaneCompressors.form.title")}
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
                    placeholder={t(
                      "rotarySlidingVaneCompressors.form.firstName"
                    )}
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
                    placeholder={t(
                      "rotarySlidingVaneCompressors.form.lastName"
                    )}
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
                    placeholder={t("rotarySlidingVaneCompressors.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("rotarySlidingVaneCompressors.form.phone")}
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
                  placeholder={t("rotarySlidingVaneCompressors.form.company")}
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
                    {t("rotarySlidingVaneCompressors.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>
                    {t("rotarySlidingVaneCompressors.form.sendEnquiry")}
                  </span>
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
      <section className="py-7 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-15">
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <FaCogs
                className="animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <span>
                {t("rotarySlidingVaneCompressors.workingPrinciple.badge")}
              </span>
            </div>
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 py-2">
              {workingPrinciple.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {workingPrinciple.description}
            </p>
          </div>

          {/* Central Flow Diagram */}
          <div className="relative mb-16">
            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1000 300">
                <defs>
                  <linearGradient
                    id="flowGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                  </linearGradient>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="2.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 2.5, 0 7"
                      fill="#3b82f6"
                      opacity="0.7"
                    />
                  </marker>
                </defs>

                {/* Curved flow line */}
                <path
                  d="M 125 150 Q 300 100, 375 150 Q 500 200, 625 150 Q 750 100, 875 150"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                  style={{ animationDuration: "2s" }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {workingPrinciple.steps.map((step, index) => {
                const colors = [
                  {
                    bg: "from-emerald-500 to-teal-600",
                    accent: "emerald-500",
                    light: "emerald-50",
                  },
                  {
                    bg: "from-blue-500 to-indigo-600",
                    accent: "blue-500",
                    light: "blue-50",
                  },
                  {
                    bg: "from-purple-500 to-violet-600",
                    accent: "purple-500",
                    light: "purple-50",
                  },
                  {
                    bg: "from-orange-500 to-red-600",
                    accent: "orange-500",
                    light: "orange-50",
                  },
                ];
                const color = colors[index];

                return (
                  <div
                    key={index}
                    className="relative group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Step Number Badge */}
                    <div
                      className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${color.bg} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {step.step}
                    </div>

                    {/* Main Card */}
                    <div
                      className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border-2 border-transparent hover:border-${color.accent} relative overflow-hidden group-hover:bg-${color.light}/50`}
                    >
                      {/* Animated Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-${color.accent}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>

                      {/* Floating Particles Effect */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-2 h-2 bg-${color.accent}/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping`}
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + (i % 3) * 20}%`,
                              animationDelay: `${i * 200}ms`,
                              animationDuration: "2s",
                            }}
                          />
                        ))}
                      </div>

                      {/* Icon Container */}
                      <div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${color.bg} flex items-center justify-center mb-6 text-3xl text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg relative z-10`}
                      >
                        <div className="group-hover:animate-pulse">
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700">
                          {step.description}
                        </p>

                        {/* Progress Indicator */}
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-1 bg-${color.accent}/20 rounded-full flex-1 overflow-hidden`}
                          >
                            <div
                              className={`h-full bg-gradient-to-r ${color.bg} rounded-full transition-all duration-1000 group-hover:w-full`}
                              style={{ width: "0%" }}
                            />
                          </div>
                          <span
                            className={`text-xs font-semibold text-${color.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          >
                            {index + 1}/4
                          </span>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                      ></div>
                    </div>

                    {/* Arrow Connector - Visible only on larger screens */}
                    {index < workingPrinciple.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                        <div
                          className={`w-12 h-8 text-${color.accent} group-hover:animate-pulse`}
                        >
                          <FaArrowRight className="w-full h-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <FaCompress className="mx-auto text-4xl mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold mb-3">
                {t(
                  "rotarySlidingVaneCompressors.workingPrinciple.summary.title"
                )}
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
                {t(
                  "rotarySlidingVaneCompressors.workingPrinciple.summary.description"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Advantages (from brochure) */}
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-800">
              {t("rotarySlidingVaneCompressors.advantages.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfAdvantages.map((a, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                  {a.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {a.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <FaCogs className="animate-spin" />
            <span>{t("rotarySlidingVaneCompressors.keyFeatures.badge")}</span>
          </div>
          <h2 className="text-5xl py-2 font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {t("rotarySlidingVaneCompressors.keyFeatures.title")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("rotarySlidingVaneCompressors.keyFeatures.subtitle")}
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* Specifications Section */}

      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {t("rotarySlidingVaneCompressors.applications.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("rotarySlidingVaneCompressors.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 bg-white rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "border-blue-600 transform translate-x-4 shadow-md bg-gradient-to-r from-blue-50 to-blue-25"
                      : "border-slate-200 hover:border-blue-600 hover:transform hover:translate-x-2 hover:shadow-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-25"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-2xl w-10 h-10 flex items-center justify-center bg-slate-50 rounded-2xl">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">
                      {app.title}
                    </h4>
                  </div>
                  <FaArrowRight
                    className={`text-slate-400 transition-all duration-300 ${
                      selectedApplication === index
                        ? "transform translate-x-1 text-blue-600"
                        : "group-hover:transform group-hover:translate-x-1 group-hover:text-blue-600"
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

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              {t("rotarySlidingVaneCompressors.cta.title")}
            </h2>
            <p className="text-lg leading-relaxed mb-5 opacity-90">
              {t("rotarySlidingVaneCompressors.cta.subtitle")}
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <FaPhone />
                <span>Get Technical Consultation</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-full font-semibold transition-all duration-300 hover:bg-white/20">
                <FaDownload />
                <span>Download Sliding Vane Brochure</span>
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 text-white border-none cursor-pointer flex items-center justify-center text-2xl z-10 transition-all duration-300 hover:bg-black/90 hover:scale-110"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="flex flex-col">
              <div className="relative bg-slate-50 p-8 text-center">
                <img
                  src={modalImage}
                  alt="Rotary Sliding Vane Compressors - Expanded View"
                  className="max-w-full max-h-[60vh] object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-8 bg-white text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {t("rotarySlidingVaneCompressors.modal.title")}
                </h3>
                <p className="text-slate-600 mb-4">
                  {t("rotarySlidingVaneCompressors.modal.subtitle")}
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <span className="bg-slate-50 px-4 py-2 rounded-3xl text-sm font-medium text-slate-800">
                    {t("rotarySlidingVaneCompressors.modal.capacity")}
                  </span>
                  <span className="bg-slate-50 px-4 py-2 rounded-3xl text-sm font-medium text-slate-800">
                    {t("rotarySlidingVaneCompressors.modal.pressure")}
                  </span>
                  <span className="bg-slate-50 px-4 py-2 rounded-3xl text-sm font-medium text-slate-800">
                    {t("rotarySlidingVaneCompressors.modal.manufacturing")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default RotarySlidingVaneCompressors;
