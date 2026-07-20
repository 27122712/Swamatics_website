import React, { useState, useMemo } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

const ClawVacuum = () => {
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
    link.href = "/images/Catalogues/Dry Claw Vacuum Pumps.pdf"; // Replace with your PDF path
    link.download = "Dry Claw Vacuum Pumps.pdf";
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

    alert(t("clawVacuum.form.successMessage"));
  };

  const modelRows = [
    {
      model: "SCVP-150",
      frequency: 50,
      capacity: 155,
      ultimatePressure: 50,
      ultimateVacuum: 100,
      motorRating: "3.7 / 5",
    },
    {
      model: "SCVP-150",
      frequency: 60,
      capacity: 180,
      ultimatePressure: 50,
      ultimateVacuum: 100,
      motorRating: "5.5 / 7.5",
    },

    {
      model: "SCVP-300",
      frequency: 50,
      capacity: 250,
      ultimatePressure: 100,
      ultimateVacuum: 200,
      motorRating: "5.5 / 7.5",
    },
    {
      model: "SCVP-300",
      frequency: 60,
      capacity: 300,
      ultimatePressure: 100,
      ultimateVacuum: 200,
      motorRating: "7.5 / 10",
    },

    {
      model: "SCVP-500",
      frequency: 50,
      capacity: 500,
      ultimatePressure: 200,
      ultimateVacuum: 250,
      motorRating: "11 / 15",
    },
    {
      model: "SCVP-500",
      frequency: 60,
      capacity: 600,
      ultimatePressure: 200,
      ultimateVacuum: 250,
      motorRating: "15 / 20",
    },
  ];

  const keyFeatures = [
    {
      icon: <FaGears className="feature-icon" />,
      title: "Combined Variable Pitch Technology",
      description:
        "Advanced dry screw technology with variable pitch design for superior vacuum performance and reliability",
      details:
        "Developed by highly skilled engineers with advanced design principles for superior performance and high reliability in demanding vacuum applications",
      benefit: "Superior vacuum performance",
    },
    {
      icon: <FaLeaf className="feature-icon" />,
      title: "Oil-Free Operation",
      description:
        "Complete oil-free design eliminates contamination and reduces environmental impact with zero effluent",
      details:
        "No contamination of process stream, no effluent, no pollution, and no waste disposal costs, making it environmentally friendly",
      benefit: "Zero contamination",
    },
    {
      icon: <FaSnowflake className="feature-icon" />,
      title: "Deep Vacuum Capability",
      description:
        "Achieves ultimate vacuum up to 0.01 Torr with consistent performance across varying conditions",
      details:
        "Deeper vacuum and more flexible operation with no variation in vacuum resulting from changing seasons and utility conditions",
      benefit: "Consistent deep vacuum",
    },
    {
      icon: <FaRecycle className="feature-icon" />,
      title: "Immediate Solvent Recovery",
      description:
        "Direct solvent recovery at pump exhaust for immediate reuse and cost savings",
      details:
        "Immediate solvent recovery capability at pump exhaust reduces operational costs and improves process efficiency",
      benefit: "Cost-effective recovery",
    },
  ];

  const applications = useMemo(
    () => [
      {
        title: t("clawVacuum.applications.wastewater.title"),
        icon: <FaRecycle />,
        image: "💧",
        bg: "/images/Application_Images/Wastewater-Treatment.png",
        benefits: [
          t("clawVacuum.applications.wastewater.benefit1"),
          t("clawVacuum.applications.wastewater.benefit2"),
          t("clawVacuum.applications.wastewater.benefit3"),
        ],
      },
      {
        title: t("clawVacuum.applications.pharmaceutical.title"),
        icon: <FaSpa />,
        image: "💊",
        bg: "/images/Application_Images/Pharmaceutical-Manufacturing.png",
        benefits: [
          t("clawVacuum.applications.pharmaceutical.benefit1"),
          t("clawVacuum.applications.pharmaceutical.benefit2"),
          t("clawVacuum.applications.pharmaceutical.benefit3"),
        ],
      },
      {
        title: t("clawVacuum.applications.food.title"),
        icon: <FaBoxes />,
        image: "🍕",
        bg: "/images/Application_Images/Food-&-Pharmaceutical.png",
        benefits: [
          t("clawVacuum.applications.food.benefit1"),
          t("clawVacuum.applications.food.benefit2"),
          t("clawVacuum.applications.food.benefit3"),
        ],
      },
      {
        title: t("clawVacuum.applications.biogas.title"),
        icon: <FaLeaf />,
        image: "🌱",
        bg: "/images/Application_Images/Agricultural-Biogas.png",
        benefits: [
          t("clawVacuum.applications.biogas.benefit1"),
          t("clawVacuum.applications.biogas.benefit2"),
          t("clawVacuum.applications.biogas.benefit3"),
        ],
      },
      {
        title: t("clawVacuum.applications.plastic.title"),
        icon: <FaLayerGroup />,
        image: "🔧",
        bg: "/images/Application_Images/Plastics-&-Polymers.png",
        benefits: [
          t("clawVacuum.applications.plastic.benefit1"),
          t("clawVacuum.applications.plastic.benefit2"),
          t("clawVacuum.applications.plastic.benefit3"),
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
      title: t("clawVacuum.workingPrinciple.title"),
      description: t("clawVacuum.workingPrinciple.description"),
      steps: [
        {
          step: "1",
          description: t("clawVacuum.workingPrinciple.step1.description"),
        },
        {
          step: "2",
          description: t("clawVacuum.workingPrinciple.step2.description"),
        },
      ],
    }),
    [t]
  );

  const productImageUrl = "/images/Claw_vacuum.png";
  const systemComponentsImageUrl = "/images/Claw_vacuum.png";

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
                <span>{t("clawVacuum.hero.badge")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 animate__animated animate__fadeInUp animate__delay-1s">
                {t("clawVacuum.hero.title")}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  {t("clawVacuum.hero.subtitle")}
                </span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-slate-300 mb-6 md:mb-8 animate__animated animate__fadeInUp animate__delay-2s">
                {t("clawVacuum.hero.description")}
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8 animate__animated animate__fadeInUp animate__delay-3s">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
Up To 600                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {t("clawVacuum.hero.capacity")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
Max 50                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {t("clawVacuum.hero.pressure")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {t("clawVacuum.hero.rpmValue")}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {t("clawVacuum.hero.rpm")}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <FaDownload />
                  <span>{t("clawVacuum.hero.downloadBrochure")}</span>
                </button>

                <a
                  href="#available-models"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  {t("clawVacuum.hero.ourProducts")}
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

              {/* floating badges stay hidden on mobile (existing lg:block) */}
              <div className="z-100 absolute w-full h-full hidden lg:block">
                <div className="absolute top-[15%] left-[-10%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg animate-float min-w-[120px] max-w-[180px] h-10 justify-center">
                  <FaGears className="text-blue-600" />
                  <span>{t("clawVacuum.hero.nonContactRotors")}</span>
                </div>
                <div
                  className="absolute top-[50%] right-[-15%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg animate-float min-w-[120px] max-w-[180px] h-10 justify-center"
                  style={{ animationDelay: "2s" }}
                >
                  <FaLeaf className="text-blue-600" />
                  <span>{t("clawVacuum.hero.oilFree")}</span>
                </div>
                <div
                  className="absolute top-[50%] left-[-5%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg animate-float min-w-[120px] max-w-[180px] h-10 justify-center"
                  style={{ animationDelay: "4s" }}
                >
                  <FaRecycle className="text-blue-600" />
                  <span>{t("clawVacuum.hero.lowMaintenance")}</span>
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
                    {t("clawVacuum.form.title")}
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
                      placeholder={t("clawVacuum.form.firstName")}
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
                      placeholder={t("clawVacuum.form.lastName")}
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
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder={t("clawVacuum.form.email")}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder={t("clawVacuum.form.phone")}
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
                    placeholder={t("clawVacuum.form.company")}
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
                      {t("clawVacuum.form.declaration")}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span>{t("clawVacuum.form.sendEnquiry")}</span>
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
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">
              {t("clawVacuum.keyFeatures.title")}
            </h2>

            {/* centered features only, no react-icons */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  // your existing core points
                  {
                    title: t("clawVacuum.keyFeatures.feature1"),
                    icon: "⚙️",
                  },
                  {
                    title: t("clawVacuum.keyFeatures.feature2"),
                    icon: "〰️",
                  },
                  {
                    title: t("clawVacuum.keyFeatures.feature3"),
                    icon: "❄️",
                  },
                  { title: t("clawVacuum.keyFeatures.feature4"), icon: "⏱️" },
                  { title: t("clawVacuum.keyFeatures.feature5"), icon: "🚫💧" },

                  // ↘︎ 4 main features taken from the brochure page
                  {
                    title: t("clawVacuum.keyFeatures.feature6"),
                    icon: "4️⃣",
                  },
                  {
                    title: t("clawVacuum.keyFeatures.feature7"),
                    icon: "↕️",
                  },
                  {
                    title: t("clawVacuum.keyFeatures.feature8"),
                    icon: "🌀",
                  },
                  {
                    title: t("clawVacuum.keyFeatures.feature9"),
                    icon: "🔇",
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl border border-blue-100 bg-blue-50/40"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
                      <span aria-hidden="true">{f.icon}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                Advanced Dry Screw Technology
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Discover the revolutionary engineering features that make our
                Dry Screw Vacuum Pumps the most reliable and efficient choice
                for contamination-free vacuum applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 text-center relative overflow-hidden border border-slate-200 cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "transform -translate-y-2 shadow-2xl border-blue-600"
                      : "hover:transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
                  } ${
                    activeFeature === index
                      ? "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-600/5 before:to-blue-400/5 before:opacity-100"
                      : ""
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div
                    className={`relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform ${
                      activeFeature === index
                        ? "scale-110 rotate-3"
                        : "hover:scale-110 hover:rotate-3"
                    }`}
                  >
                    <span className="text-white text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="relative z-10 text-xl font-semibold text-slate-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="relative z-10 text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="relative z-10 flex items-center justify-center gap-2 text-green-600 font-semibold text-sm">
                    <FaCheckCircle />
                    <span>{feature.benefit}</span>
                  </div>
                  {activeFeature === index && (
                    <div className="relative z-10 mt-4 pt-4 border-t border-slate-200">
                      <p className="text-sm text-slate-500">
                        {feature.details}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Working Principle Section */}
        <section className="py-7 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-4">
              <h2 className="text-4xl py-2 font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                {t("clawVacuum.workingPrinciple.sectionTitle")}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {t("clawVacuum.workingPrinciple.sectionDescription")}
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                    <FaGears />
                    <span>{t("clawVacuum.workingPrinciple.badge")}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">
                    {t("clawVacuum.workingPrinciple.title")}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {t("clawVacuum.workingPrinciple.description")}
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
                  <div className="absolute w-full h-full pointer-events-none hidden lg:block">
                    {/* <div className="absolute top-[20%] left-[-20%] flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                        <div className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"></div>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-2xl text-xs font-semibold text-slate-800 shadow-lg whitespace-nowrap">
                        Variable Pitch Screws
                      </div>
                    </div> */}
                    {/* <div className="absolute top-[50%] right-[-25%] flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                        <div
                          className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"
                          style={{ animationDelay: "1s" }}
                        ></div>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-2xl text-xs font-semibold text-slate-800 shadow-lg whitespace-nowrap">
                        Oil-Free Chamber
                      </div>
                    </div> */}
                    {/* <div className="absolute bottom-[25%] left-[-15%] flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                        <div
                          className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"
                          style={{ animationDelay: "2s" }}
                        ></div>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-2xl text-xs font-semibold text-slate-800 shadow-lg whitespace-nowrap">
                        Precise Clearances
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Technology Details Grid */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <FaLeaf className="text-xl" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">
                    Oil-Free Operation
                  </h4>
                  <p className="opacity-90 leading-relaxed mb-6">
                    Complete oil-free design ensures no contamination of process
                    stream with zero effluent and no pollution
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-sm opacity-80">Contamination:</span>
                      <span className="font-semibold">Zero</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-sm opacity-80">Effluent:</span>
                      <span className="font-semibold">None</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <FaTachometerAlt className="text-xl text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">
                    Deep Vacuum Performance
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Achieves ultimate vacuum up to 0.01 Torr with consistent
                    performance regardless of seasonal variations
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">
                        0.01 Torr ultimate vacuum
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">
                        Season-independent operation
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <FaRecycle className="text-xl text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">
                    Immediate Solvent Recovery
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Direct solvent recovery at pump exhaust for immediate reuse,
                    reducing operational costs and improving efficiency
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">Immediate recovery</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">Cost reduction</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <FaTools className="text-xl text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">
                    Lower Maintenance Costs
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Advanced design with fewer moving parts and oil-free
                    operation significantly reduces maintenance requirements and
                    costs
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">
                        Reduced maintenance
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">
                        Lower operating costs
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* 🔹 Models & Technical Data Section */}
        <section id="available-models" className="py-7 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                {t("clawVacuum.models.title")}
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto mb-6">
                {t("clawVacuum.models.subtitle")}
              </p>
            </div>

            {/* --- Nice description card (from your image) --- */}
            <div className="max-w-5xl mx-auto mb-10">
              <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                <p className="text-slate-200 leading-relaxed">
                  <span className="font-semibold text-white">
                    {t("clawVacuum.models.seriesName")}
                  </span>{" "}
                  {t("clawVacuum.models.description")}
                </p>

                {/* quick bullet highlights */}
                <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-200">
                  <li className="flex items-start gap-2">
                    <span>🧩</span>
                    <span>{t("clawVacuum.models.highlight1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🛢️</span>
                    <span>{t("clawVacuum.models.highlight2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🌬️</span>
                    <span>{t("clawVacuum.models.highlight3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>💸</span>
                    <span>{t("clawVacuum.models.highlight4")}</span>
                  </li>
                </ul>

                {/* compact stats */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                    <div className="text-xs uppercase text-slate-400">
                      {t("clawVacuum.models.capacitiesLabel")}
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {t("clawVacuum.models.capacitiesValue")}
                    </div>
                  </div>
                  <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                    <div className="text-xs uppercase text-slate-400">
                      {t("clawVacuum.models.ultimateVacuumLabel")}
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {t("clawVacuum.models.ultimateVacuumValue")}
                    </div>
                  </div>
                  <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                    <div className="text-xs uppercase text-slate-400">
                      {t("clawVacuum.models.compressionLabel")}
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {t("clawVacuum.models.compressionValue")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* --- /description card --- */}

            {/* Cards: one per row (model + frequency) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {modelRows.map((row, i) => (
                <div
                  key={`${row.model}-${row.frequency}-${i}`}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform duration-300"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-lg font-extrabold text-indigo-600">
                      {row.model}
                    </h3>
                    <span className="text-sm font-semibold text-slate-600">
                      {row.frequency} Hz
                    </span>
                  </div>
                  <ul className="text-gray-800 text-sm space-y-1">
                    <li>
                      <span className="font-semibold">
                        {t("clawVacuum.models.capacityLabel")}:
                      </span>{" "}
                      {row.capacity} {t("clawVacuum.models.capacityUnit")}
                    </li>
                    <li>
                      <span className="font-semibold">
                        {t("clawVacuum.models.ultimatePressureLabel")}:
                      </span>{" "}
                      {row.ultimatePressure}{" "}
                      {t("clawVacuum.models.ultimatePressureUnit")}
                    </li>
                    <li>
                      <span className="font-semibold">
                        {t("clawVacuum.models.ultimateVacuumLabel")}:
                      </span>{" "}
                      {row.ultimateVacuum}{" "}
                      {t("clawVacuum.models.ultimateVacuumUnit")}
                    </li>
                    <li>
                      <span className="font-semibold">
                        {t("clawVacuum.models.motorRatingLabel")}:
                      </span>{" "}
                      {row.motorRating}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Advantages - Carousel */}
        <section className="py-7 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl py-2 font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("clawVacuum.benefits.title")}
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
                  emoji: "🛠️",
                  title: t("clawVacuum.benefits.benefit1"),
                  desc: "",
                },
                {
                  emoji: "⚡",
                  title: t("clawVacuum.benefits.benefit2"),
                  desc: "",
                },
                {
                  emoji: "🧹",
                  title: t("clawVacuum.benefits.benefit3"),
                  desc: "",
                },
                {
                  emoji: "💧☁️",
                  title: t("clawVacuum.benefits.benefit4"),
                  desc: "",
                },
                {
                  emoji: "☀️",
                  title: t("clawVacuum.benefits.benefit5"),
                  desc: "",
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
                    {item.desc ? (
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    ) : null}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Specifications Section
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                  Technical Specifications
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Dry Screw Vacuum Pumps deliver exceptional vacuum performance
                  with industry-leading specifications designed for reliability,
                  efficiency, and contamination-free operation in demanding
                  applications.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border-l-4 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all"
                      style={{ borderLeftColor: spec.color }}
                    >
                      <div
                        className="text-2xl mb-4"
                        style={{ color: spec.color }}
                      >
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-slate-800 mb-2">
                          {spec.parameter}
                        </h4>
                        <div
                          className="text-xl font-bold"
                          style={{ color: spec.color }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">
                    Key Benefits & Advantages
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        No contamination of process stream
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        Deeper vacuum and more flexible operation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        No effluent, no pollution, no waste disposal costs
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        Lower total cost of ownership
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full text-sm font-semibold text-slate-800 border border-slate-200">
                    <FaCertificate className="text-blue-600" />
                    <span>ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full text-sm font-semibold text-slate-800 border border-slate-200">
                    <FaAward className="text-blue-600" />
                    <span>CE Certified</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full text-sm font-semibold text-slate-800 border border-slate-200">
                    <FaShieldAlt className="text-blue-600" />
                    <span>5 Year Warranty</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative max-w-md bg-white rounded-3xl p-8 shadow-2xl overflow-visible">
                  <img
                    src={productImageUrl}
                    alt="Dry Screw Vacuum Pump Technical Specifications"
                    className="w-full h-auto rounded-2xl hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => openModal(productImageUrl)}
                  />
                  <div className="absolute inset-0 pointer-events-none overflow-visible hidden lg:block">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-lg animate-float shadow-lg border border-white/20 min-w-[140px] max-w-[230px] h-6 flex items-center justify-center text-center">
                      Variable Pitch Technology
                    </div>
                    <div
                      className="absolute top-1/4 -right-16 bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-lg animate-float shadow-lg border border-white/20 min-w-[140px] max-w-[230px] h-6 flex items-center justify-center text-center"
                      style={{ animationDelay: "1.5s" }}
                    >
                      Oil-Free Operation
                    </div>
                    <div
                      className="absolute bottom-1/4 -left-16 bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-lg animate-float shadow-lg border border-white/20 min-w-[140px] max-w-[230px] h-6 flex items-center justify-center text-center"
                      style={{ animationDelay: "3s" }}
                    >
                      Deep Vacuum Capability
                    </div>
                    <div
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-lg animate-float shadow-lg border border-white/20 min-w-[140px] max-w-[230px] h-6 flex items-center justify-center text-center"
                      style={{ animationDelay: "4.5s" }}
                    >
                      Solvent Recovery
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Applications Section */}
        <div className="max-w-7xl mx-auto px-8 mb-5">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("clawVacuum.applications.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("clawVacuum.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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

        {/* Advantages Section
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                Why Choose SWAM Dry Screw Vacuum Pumps
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Advanced oil-free technology for superior vacuum performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-10 text-center border border-slate-200 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-600 transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                    {advantage.icon}
                  </div>
                  <div className="mb-6">
                    <div className="text-4xl font-extrabold text-blue-600 leading-none">
                      {advantage.stat}
                    </div>
                    <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider mt-1">
                      {advantage.unit}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
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

        {/* CTA Section */}
        <section className="py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">
                {t("clawVacuum.cta.title")}
              </h2>
              <p className="text-lg mb-5 opacity-90">
                {t("clawVacuum.cta.subtitle")}
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
                      {t("clawVacuum.modal.title")}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {t("clawVacuum.modal.subtitle")}
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                        {t("clawVacuum.modal.capacity")}
                      </span>
                      <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                        {t("clawVacuum.modal.vacuum")}
                      </span>
                      <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                        {t("clawVacuum.modal.operation")}
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

export default ClawVacuum;
