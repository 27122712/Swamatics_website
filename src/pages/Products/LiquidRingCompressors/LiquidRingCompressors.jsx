import React, { useState, useMemo } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  FaCogs as FaGears, // 👈 alias so <FaGears /> works
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
  FaTimes,
} from "react-icons/fa";

const LiquidRingCompressors = () => {
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
    link.href = "/images/Catalogues/Bro. Liquid Ring Compressor.pdf"; // Replace with your PDF path
    link.download = "Bro. Liquid Ring Compressor.pdf";
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

    alert(t("liquidRingCompressors.form.successMessage"));
  };

  const modelRows = [
    { model: "SLC-150", minFlow: 100, maxFlow: 200 },
    { model: "SLC-200", minFlow: 250, maxFlow: 400 },
    { model: "SLC-500", minFlow: 500, maxFlow: 750 },
    { model: "SLC-800", minFlow: 800, maxFlow: 950 },
    { model: "SLC-1000", minFlow: 1000, maxFlow: 1200 },
    { model: "SLC-1500", minFlow: 1200, maxFlow: 2000 },
    { model: "SLC-2000", minFlow: 1800, maxFlow: 2600 },
    { model: "SLC-3000", minFlow: 2600, maxFlow: 3500 },
    { model: "SLC-4200", minFlow: 3400, maxFlow: 4500 },
    { model: "SLC-5200", minFlow: 4500, maxFlow: 5400 },
    { model: "SLC-6200", minFlow: 5200, maxFlow: 6100 },
  ];

  const keyFeatures = useMemo(
    () => [
      {
        icon: "🛠️",
        title: t("liquidRingCompressors.keyFeatures.feature1"),
      },
      {
        icon: "⚡",
        title: t("liquidRingCompressors.keyFeatures.feature2"),
      },
      {
        icon: "📏",
        title: t("liquidRingCompressors.keyFeatures.feature3"),
      },
      {
        icon: "🧠",
        title: t("liquidRingCompressors.keyFeatures.feature4"),
      },
      {
        icon: "🧪",
        title: t("liquidRingCompressors.keyFeatures.feature5"),
      },
      {
        icon: "🏗️",
        title: t("liquidRingCompressors.keyFeatures.feature6"),
      },
      {
        icon: "🛞",
        title: t("liquidRingCompressors.keyFeatures.feature7"),
      },
      {
        icon: "⚖️",
        title: t("liquidRingCompressors.keyFeatures.feature8"),
      },
      {
        icon: "🔒",
        title: t("liquidRingCompressors.keyFeatures.feature9"),
      },
    ],
    [t]
  );

  const applications = useMemo(
    () => [
      {
        title: t("liquidRingCompressors.applications.miningMetallurgy.title"),
        icon: <FaRocket />,
        image: "⚡",
        bg: "/images/Application_Images/Metallurgy.png",
        benefits: [
          t("liquidRingCompressors.applications.miningMetallurgy.benefit1"),
          t("liquidRingCompressors.applications.miningMetallurgy.benefit2"),
          t("liquidRingCompressors.applications.miningMetallurgy.benefit3"),
        ],
      },
      {
        title: t("liquidRingCompressors.applications.fertilizerPlants.title"),
        icon: <FaSpa />,
        image: "💊",
        bg: "/images/Application_Images/Food-&-Pharmaceutical.png",
        benefits: [
          t("liquidRingCompressors.applications.fertilizerPlants.benefit1"),
          t("liquidRingCompressors.applications.fertilizerPlants.benefit2"),
          t("liquidRingCompressors.applications.fertilizerPlants.benefit3"),
        ],
      },
      {
        title: t("liquidRingCompressors.applications.oilGasOffshore.title"),
        icon: <FaOilCan />,
        image: "⚗️",
        bg: "/images/Application_Images/Oil-and-Gas-Plants.png",
        benefits: [
          t("liquidRingCompressors.applications.oilGasOffshore.benefit1"),
          t("liquidRingCompressors.applications.oilGasOffshore.benefit2"),
          t("liquidRingCompressors.applications.oilGasOffshore.benefit3"),
        ],
      },
      {
        title: t("liquidRingCompressors.applications.chlorineVinyl.title"),
        icon: <FaOilCan />,
        image: "⚗️",
        bg: "/images/Application_Images/Degassing-Applications.png",
        benefits: [
          t("liquidRingCompressors.applications.chlorineVinyl.benefit1"),
          t("liquidRingCompressors.applications.chlorineVinyl.benefit2"),
          t("liquidRingCompressors.applications.chlorineVinyl.benefit3"),
        ],
      },
      {
        title: t("liquidRingCompressors.applications.pulpPaper.title"),
        icon: <FaLayerGroup />,
        image: "🔧",
        bg: "/images/Application_Images/Pulp-&-Paper-Industries.png",
        benefits: [
          t("liquidRingCompressors.applications.pulpPaper.benefit1"),
          t("liquidRingCompressors.applications.pulpPaper.benefit2"),
          t("liquidRingCompressors.applications.pulpPaper.benefit3"),
        ],
      },
    ],
    [t]
  );

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "2,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Ultimate Vacuum",
      value: "0.01 Torr",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Design Type",
      value: "Combined Variable Pitch",
      icon: <FaGears />,
      color: "#f59e0b",
    },
    {
      parameter: "Operation",
      value: "Oil-Free Dry Screw",
      icon: <FaLeaf />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "No Contamination",
      description:
        "Oil-free operation ensures no contamination of process stream for pure vacuum applications",
      icon: <FaLeaf />,
      stat: "Zero",
      unit: "Contamination",
    },
    {
      title: "Deep Vacuum",
      description:
        "Ultimate vacuum capability up to 0.01 Torr for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "0.01",
      unit: "Torr",
    },
    {
      title: "High Capacity",
      description:
        "Exceptional pumping speed up to 2,000 M³/Hr for large-scale operations",
      icon: <FaChartLine />,
      stat: "2,000",
      unit: "M³/Hr",
    },
    {
      title: "Lower Costs",
      description:
        "Reduced total cost of ownership with lower maintenance and utility costs",
      icon: <FaBolt />,
      stat: "Lower",
      unit: "Operating Cost",
    },
  ];

  const workingPrinciple = useMemo(
    () => ({
      title: t("liquidRingCompressors.workingPrinciple.title"),
      description: t("liquidRingCompressors.workingPrinciple.description"),
      subtitle: t("liquidRingCompressors.workingPrinciple.subtitle"),
      mainDescription: t(
        "liquidRingCompressors.workingPrinciple.mainDescription"
      ),
      steps: [
        {
          step: "1",
          title: t("liquidRingCompressors.workingPrinciple.step1.title"),
        },
        {
          step: "2",
          title: t("liquidRingCompressors.workingPrinciple.step2.title"),
        },
        {
          step: "3",
          title: t("liquidRingCompressors.workingPrinciple.step3.title"),
        },
      ],
    }),
    [t]
  );

  const productImageUrl = "/images/liquid_ring.png";
  const systemComponentsImageUrl = "/images/Liquid_ring_extra.png";

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <>
      <style jsx>{`
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
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .bg-radial-gradient {
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.1) 0%,
            transparent 70%
          );
        }
      `}</style>
      <MainTemplate>
        {/* Hero Section */}
        <section className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start md:items-center">
            <div className="text-white">
              {/* removed leading <br /> */}
              <div className="mt-24 md:mt-12 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-5 py-2.5 rounded-full text-sm font-semibold mb-4 md:mb-6 animate__animated animate__fadeInUp">
                <FaStar className="text-blue-400" />
                <span>{t("liquidRingCompressors.hero.badge")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 animate__animated animate__fadeInUp animate__delay-1s">
                {t("liquidRingCompressors.hero.title")}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  {t("liquidRingCompressors.hero.subtitle")}
                </span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-slate-300 mb-6 md:mb-8 animate__animated animate__fadeInUp animate__delay-2s">
                {t("liquidRingCompressors.hero.description")}
              </p>

              <div className="flex flex-wrap gap-10 sm:gap-6 md:gap-8 mb-6 md:mb-8 animate__animated animate__fadeInUp animate__delay-3s">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
Up To 6000                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {t("liquidRingCompressors.hero.capacity")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
Max 250                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {t("liquidRingCompressors.hero.pressure")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {t("liquidRingCompressors.hero.leakProofValue")}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {t("liquidRingCompressors.hero.leakProof")}
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
                    {t("liquidRingCompressors.hero.downloadBrochure")}
                  </span>
                </button>

                <a
                  href="#available-models"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  {t("liquidRingCompressors.hero.ourProducts")}
                </a>
              </div>
              {/* removed trailing <br /> */}
            </div>

            <div className="relative flex flex-col items-center">
              {/* Product Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex justify-center items-center">
                <div className="absolute w-full h-full bg-radial-gradient from-blue-500/10 to-transparent rounded-full animate-pulse-slow"></div>
                <img
                  src={productImageUrl}
                  alt="Dry Screw Vacuum Pump - Combined Variable Pitch Technology"
                  className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] h-auto object-contain filter drop-shadow-2xl hover:scale-105 transition-transform cursor-pointer z-10"
                  onClick={() => openModal(productImageUrl)}
                />
              </div>

              {/* floating badges already hidden on mobile via lg:block */}
              <div className="z-100 absolute w-full h-full hidden lg:block">
                <div className="absolute top-[15%] left-[-10%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg animate-float min-w-[120px] max-w-[180px] h-10 justify-center">
                  <FaGears className="text-blue-600" />
                  <span>
                    {t("liquidRingCompressors.hero.compressionBadge")}
                  </span>
                </div>
                <div
                  className="absolute top-[50%] right-[-15%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg animate-float min-w-[120px] max-w-[180px] h-10 justify-center"
                  style={{ animationDelay: "2s" }}
                >
                  <FaLeaf className="text-blue-600" />
                  <span>{t("liquidRingCompressors.hero.liquidRingBadge")}</span>
                </div>
                <div
                  className="absolute top-[50%] left-[-5%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg animate-float min-w-[120px] max-w-[180px] h-10 justify-center"
                  style={{ animationDelay: "4s" }}
                >
                  <FaRecycle className="text-blue-600" />
                  <span>{t("liquidRingCompressors.hero.smoothFlowBadge")}</span>
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
                    {t("liquidRingCompressors.form.title")}
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
                      placeholder={t("liquidRingCompressors.form.firstName")}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z]/g,
                          ""
                        );
                      }}
                    />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder={t("liquidRingCompressors.form.lastName")}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z]/g,
                          ""
                        );
                      }}
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder={t("liquidRingCompressors.form.email")}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder={t("liquidRingCompressors.form.phone")}
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
                    placeholder={t("liquidRingCompressors.form.company")}
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
                      {t("liquidRingCompressors.form.declaration")}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span>{t("liquidRingCompressors.form.sendEnquiry")}</span>
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

        <section className="py-7 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">
              {t("liquidRingCompressors.keyFeatures.title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border border-blue-100 bg-blue-50/40 min-h-[92px]"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
                    <span aria-hidden="true">{f.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Working Principle Section */}
        <section className="py-7 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-4">
              <h2 className="text-4xl py-1 font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                {workingPrinciple.title}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {workingPrinciple.description}
              </p>
            </div>

            <div className="flex flex-col gap-8 md:gap-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                    <FaGears />
                    <span>
                      {t("liquidRingCompressors.workingPrinciple.badge")}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">
                    {workingPrinciple.subtitle}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {workingPrinciple.mainDescription}
                  </p>

                  <div className="flex flex-col gap-6">
                    {workingPrinciple.steps.map((step, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800 mb-1">
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
                    src={systemComponentsImageUrl}
                    alt="Dry Screw Vacuum Pump Working Principle"
                    className="w-full h-auto filter drop-shadow-lg hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => openModal(systemComponentsImageUrl)}
                  />
                  <div className="absolute w-full h-full pointer-events-none hidden lg:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🔹 Models & Technical Data Section */}
        <section id="available-models" className="py-7 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                {t("liquidRingCompressors.models.title")}
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto mb-6">
                {t("liquidRingCompressors.models.subtitle")}
              </p>
            </div>

            {/* Cards: one per row (model + frequency) */}
            {/* Cards slider */}
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={16}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-10"
            >
              {modelRows.map((row, i) => (
                <SwiperSlide key={`${row.model}-${i}`}>
                  <div className="h-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
                    <h3 className="text-lg font-extrabold text-indigo-600 mb-2">
                      {row.model}
                    </h3>
                    <ul className="text-gray-800 text-sm space-y-1">
                      <li>
                        <span className="font-semibold">Capacity Range:</span>{" "}
                        {row.minFlow.toLocaleString()} –{" "}
                        {row.maxFlow.toLocaleString()} m³/h
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Benefits & Advantages - Carousel */}
        <section className="py-7 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("liquidRingCompressors.benefits.title")}
            </h2>

            {/* equal height helper */}
            <style jsx>{`
              .equal-cards .swiper-slide > div {
                height: 220px; /* same height for all cards */
              }
              @media (min-width: 640px) {
                .equal-cards .swiper-slide > div {
                  height: 240px;
                }
              }
            `}</style>

            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 2500 }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="benefits-swiper equal-cards"
            >
              {[
                {
                  emoji: "🧪",
                  title: t("liquidRingCompressors.benefits.toughGases.title"),
                  desc: t(
                    "liquidRingCompressors.benefits.toughGases.description"
                  ),
                },
                {
                  emoji: "⚙️",
                  title: t("liquidRingCompressors.benefits.nonContact.title"),
                  desc: t(
                    "liquidRingCompressors.benefits.nonContact.description"
                  ),
                },
                {
                  emoji: "❄️",
                  title: t(
                    "liquidRingCompressors.benefits.continuousCooling.title"
                  ),
                  desc: t(
                    "liquidRingCompressors.benefits.continuousCooling.description"
                  ),
                },
                {
                  emoji: "🌡️",
                  title: t(
                    "liquidRingCompressors.benefits.nearIsothermal.title"
                  ),
                  desc: t(
                    "liquidRingCompressors.benefits.nearIsothermal.description"
                  ),
                },
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 w-full flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-3">
                      {item.emoji}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Applications Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-5">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("liquidRingCompressors.applications.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("liquidRingCompressors.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`bg-slate-50 rounded-xl p-4 flex items-center gap-3 cursor-pointer border-2 transition-all ${
                    selectedApplication === index
                      ? "bg-white border-blue-600 transform translate-x-1 shadow-md"
                      : "border-transparent hover:bg-white hover:border-blue-600 hover:transform hover:translate-x-1 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="w-12 h-12 bg-white text-2xl rounded-lg flex items-center justify-center shadow">
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
                    className={`text-slate-400 transition-all ${
                      selectedApplication === index
                        ? "text-blue-600 transform translate-x-1"
                        : ""
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/65 sm:from-transparent sm:via-black/20 sm:to-black/65" />

              {/* Small title badge (top-left) */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl drop-shadow">
                  {applications[selectedApplication].image}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-black/60 text-white font-semibold text-sm sm:text-base">
                  {applications[selectedApplication].title}
                </span>
              </div>

              {/* Optional short description (kept subtle & narrow) */}
              {applications[selectedApplication].description && (
                <div className="absolute top-14 sm:top-16 left-3 right-3 sm:left-4 sm:right-4">
                  <p className="px-3 py-2 rounded-lg bg-black/45 text-white/95 text-xs sm:text-sm leading-relaxed ring-1 ring-white/10 whitespace-normal break-words">
                    {applications[selectedApplication].description}
                  </p>
                </div>
              )}

              {/* Compact benefit pills (bottom-left, not full width) */}
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
        </div>

        {/* CTA Section */}
        <section className="py-8 md:py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">
                {t("liquidRingCompressors.cta.title")}
              </h2>
              <p className="text-lg mb-5 opacity-90">
                {t("liquidRingCompressors.cta.subtitle")}
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
          </div>
        </section>

        {/* Image Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8 animate-fadeIn"
            onClick={closeModal}
          >
            <div
              className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-lg border-0 rounded-full text-white text-2xl cursor-pointer z-10 flex items-center justify-center hover:bg-black/70 hover:scale-110 transition-all"
                onClick={closeModal}
              >
                ×
              </button>
              <div className="flex flex-col max-h-[90vh]">
                <div className="flex-1 flex flex-col overflow-hidden">
                  <img
                    src={modalImage}
                    alt="Dry Screw Vacuum Pump - Combined Variable Pitch Technology - Expanded View"
                    className="w-full h-auto max-h-[70vh] object-contain bg-slate-50 select-none"
                    draggable="false"
                  />
                  <div className="p-8 bg-white border-t border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {t("liquidRingCompressors.modal.title")}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {t("liquidRingCompressors.modal.subtitle")}
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                        {t("liquidRingCompressors.modal.capacity")}
                      </span>
                      <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                        {t("liquidRingCompressors.modal.vacuum")}
                      </span>
                      <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                        {t("liquidRingCompressors.modal.operation")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </MainTemplate>
    </>
  );
};

export default LiquidRingCompressors;
