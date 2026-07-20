import React, { useState, useRef, useMemo } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";

// one FaGears import ONLY
import { FaGears } from "react-icons/fa6";

// arrows + the rest of your fa icons (keep only once)
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
  FaCircle,
  FaWater,
  FaCube,
  FaExpandArrowsAlt,
  FaTimes,
} from "react-icons/fa";

const boosterModels = [
  {
    model: "VBS-91",
    variants: [
      { capacity: 220, rpm: 1500 },
      { capacity: 370, rpm: 3000 },
    ],
  },
  {
    model: "VBS-101",
    variants: [
      { capacity: 280, rpm: 1500 },
      { capacity: 490, rpm: 3000 },
    ],
  },
  {
    model: "VBS-102",
    variants: [
      { capacity: 360, rpm: 1500 },
      { capacity: 650, rpm: 3000 },
    ],
  },
  {
    model: "VBS-135",
    variants: [
      { capacity: 590, rpm: 1500 },
      { capacity: 1070, rpm: 3000 },
    ],
  },
  {
    model: "VBS-141",
    variants: [
      { capacity: 770, rpm: 1500 },
      { capacity: 1360, rpm: 3000 },
    ],
  },
  {
    model: "VBS-142",
    variants: [
      { capacity: 890, rpm: 1500 },
      { capacity: 1560, rpm: 3000 },
    ],
  },

  {
    model: "VBS-171",
    variants: [
      { capacity: 1485, rpm: 1500 },
      { capacity: 3070, rpm: 3000 },
    ],
  },
  {
    model: "VBS-172",
    variants: [
      { capacity: 1970, rpm: 1500 },
      { capacity: 3890, rpm: 3000 },
    ],
  },
  {
    model: "VBS-211",
    variants: [
      { capacity: 3150, rpm: 1500 },
      { capacity: 6150, rpm: 3000 },
    ],
  },
  {
    model: "VBS-212",
    variants: [
      { capacity: 4400, rpm: 1500 },
      { capacity: 8300, rpm: 3000 },
    ],
  },
  {
    model: "VBS-271",
    variants: [
      { capacity: 7950, rpm: 1500 },
      { capacity: 6500, rpm: 1000 },
    ],
  },
  {
    model: "VBS-272",
    variants: [
      { capacity: 10800, rpm: 1500 },
      { capacity: 7600, rpm: 1000 },
    ],
  },

  {
    model: "VBS-311",
    variants: [
      { capacity: 10600, rpm: 1000 },
      { capacity: 15900, rpm: 1500 },
    ],
  },
  {
    model: "VBS-312",
    variants: [
      { capacity: 14600, rpm: 1000 },
      { capacity: 20850, rpm: 1500 },
    ],
  },
  {
    model: "VBS-421",
    variants: [
      { capacity: 16500, rpm: 1000 },
      { capacity: 23900, rpm: 1500 },
    ],
  },
  {
    model: "VBS-422",
    variants: [
      { capacity: 20700, rpm: 1000 },
      { capacity: 29600, rpm: 1500 },
    ],
  },
  {
    model: "VBS-501",
    variants: [
      { capacity: 19500, rpm: 750 },
      { capacity: 28900, rpm: 1000 },
    ],
  },
  {
    model: "VBS-502",
    variants: [
      { capacity: 29700, rpm: 750 },
      { capacity: 36500, rpm: 1000 },
    ],
  },
  { model: "VBS-611", variants: [{ capacity: 51600, rpm: 750 }] },
];

// Custom animations
const customStyles = {
  "@keyframes fadeInUp": {
    from: {
      opacity: 0,
      transform: "translateY(30px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes slideDown": {
    from: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes float": {
    "0%, 100%": {
      transform: "translateY(0px)",
    },
    "50%": {
      transform: "translateY(-10px)",
    },
  },
};

// Add styles to head
if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = Object.entries(customStyles)
    .map(([key, value]) => {
      if (typeof value === "object") {
        return `${key} { ${Object.entries(value)
          .map(([k, v]) => `${k}: ${v};`)
          .join(" ")} }`;
      }
      return `${key} { ${value} }`;
    })
    .join(" ");
  document.head.appendChild(styleSheet);
}

const ModelsSlider = ({ items, t }) => {
  const trackRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".model-card");
    const width = card ? card.getBoundingClientRect().width : 320;
    el.scrollBy({ left: dir * width * 3, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* arrows */}
      <button
        aria-label="Prev"
        onClick={() => scrollByCards(-1)}
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white shadow border hover:bg-slate-50"
      >
        <FaArrowLeft />
      </button>
      <button
        aria-label="Next"
        onClick={() => scrollByCards(1)}
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white shadow border hover:bg-slate-50"
      >
        <FaArrowRight />
      </button>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory overscroll-x-contain scrollbar-hide -mx-4 md:mx-0 px-4 md:px-1"
      >
        {items.map((m) => (
          <div
            key={m.model}
            className="model-card snap-start min-w-[260px] sm:min-w-[300px] bg-white border border-slate-200 rounded-2xl shadow-sm p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                {m.model}
              </span>
              <span className="text-xs text-slate-500">
                {t("mechanicalVacuumBoosters.models.unit")}
              </span>
            </div>

            <div className="space-y-3">
              {m.variants.map((v, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2"
                >
                  <div className="text-slate-800 font-semibold">
                    {v.capacity}
                  </div>
                  <div className="text-xs font-medium text-slate-600">
                    <span className="inline-block rounded-full bg-white border px-2 py-0.5">
                      {v.rpm} RPM
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs text-slate-500">
              {t("mechanicalVacuumBoosters.models.approxSpeeds")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MechanicalVaccumBoosters = () => {
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
    link.href = "/images/Catalogues/Bro. Mechanical Vacuum Booster.pdf"; // Replace with your PDF path
    link.download = "Bro. Mechanical Vacuum Booster.pdf";
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

    alert(t("mechanicalVacuumBoosters.form.successMessage"));
  };
  const keyFeatures = [
    {
      icon: <FaExpandArrowsAlt className="feature-icon" />,
      title: "High Vacuum Boosting",
      description:
        "Boosts high vacuum up to one micron in combination with conventional vacuum mechanical pumps",
      details:
        "Specifically designed to work with backing pumps to achieve ultra-high vacuum levels from 50 Torr to one micron",
      benefit: "Ultra-high vacuum capability",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Advanced Sealing System",
      description:
        "Highly reliable sealing system with piston ring type labyrinth seals and rotary seals",
      details:
        "Features piston ring type labyrinth seals with rotary seal between conveying and bearing chambers, plus neutral chamber design",
      benefit: "Complete vacuum tightness",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Wide Capacity Range",
      description:
        "Available in different models with capacity from 500 M³/Hr to 80,000 M³/Hr",
      details:
        "Comprehensive range of models to suit various industrial applications with flexible capacity options",
      benefit: "Scalable solutions",
    },
    {
      icon: <FaGears className="feature-icon" />,
      title: "Flexible Drive Options",
      description:
        "Drive arrangement options include direct coupled or V-belts depending on model and operating conditions",
      details:
        "Splash oil lubrication on both ends with choice of direct coupling or V-belt drive systems for optimal performance",
      benefit: "Versatile configuration",
    },
  ];

  const applications = useMemo(
    () => [
      {
        title: t("mechanicalVacuumBoosters.applications.chemical.title"),
        icon: <FaFlask />,
        image: "⚗️",
        bg: "/images/Application_Images/Chemical-&-Petrochemical.png",
        benefits: [
          t("mechanicalVacuumBoosters.applications.chemical.benefit1"),
          t("mechanicalVacuumBoosters.applications.chemical.benefit2"),
          t("mechanicalVacuumBoosters.applications.chemical.benefit3"),
        ],
      },
      {
        title: t("mechanicalVacuumBoosters.applications.pharmaceutical.title"),
        icon: <FaMicrochip />,
        image: "💊",
        bg: "/images/Application_Images/Pharmaceutical-Manufacturing.png",
        benefits: [
          t("mechanicalVacuumBoosters.applications.pharmaceutical.benefit1"),
          t("mechanicalVacuumBoosters.applications.pharmaceutical.benefit2"),
          t("mechanicalVacuumBoosters.applications.pharmaceutical.benefit3"),
        ],
      },
      {
        title: t("mechanicalVacuumBoosters.applications.semiconductor.title"),
        icon: <FaBolt />,
        image: "🔌",
        bg: "/images/Application_Images/Wastewater-Treatment.png",
        benefits: [
          t("mechanicalVacuumBoosters.applications.semiconductor.benefit1"),
          t("mechanicalVacuumBoosters.applications.semiconductor.benefit2"),
          t("mechanicalVacuumBoosters.applications.semiconductor.benefit3"),
        ],
      },
      {
        title: t("mechanicalVacuumBoosters.applications.research.title"),
        icon: <FaAtom />,
        image: "🔬",
        bg: "/images/Application_Images/Research-Laboratories.png",
        benefits: [
          t("mechanicalVacuumBoosters.applications.research.benefit1"),
          t("mechanicalVacuumBoosters.applications.research.benefit2"),
          t("mechanicalVacuumBoosters.applications.research.benefit3"),
        ],
      },
      {
        title: t("mechanicalVacuumBoosters.applications.metallurgy.title"),
        icon: <FaFire />,
        image: "🔥",
        bg: "/images/Application_Images/Metallurgy.png",
        benefits: [
          t("mechanicalVacuumBoosters.applications.metallurgy.benefit1"),
          t("mechanicalVacuumBoosters.applications.metallurgy.benefit2"),
          t("mechanicalVacuumBoosters.applications.metallurgy.benefit3"),
        ],
      },
      {
        title: t("mechanicalVacuumBoosters.applications.food.title"),
        icon: <FaBoxes />,
        image: "🥫",
        bg: "/images/Application_Images/Food-&-Pharmaceutical.png",
        benefits: [
          t("mechanicalVacuumBoosters.applications.food.benefit1"),
          t("mechanicalVacuumBoosters.applications.food.benefit2"),
          t("mechanicalVacuumBoosters.applications.food.benefit3"),
        ],
      },
    ],
    [t]
  );

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "80,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Vacuum Level",
      value: "Up to 10⁻³ Torr",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Minimum Capacity",
      value: "500 M³/Hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: "Operating Range",
      value: "50 Torr to 1 micron",
      icon: <FaExpandArrowsAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Ultra-High Vacuum",
      description:
        "Achieves vacuum levels up to 10⁻³ Torr in multi-stage configuration for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "10⁻³",
      unit: "Torr",
    },
    {
      title: "High Displacement",
      description:
        "Exceptional pumping capacity up to 80,000 M³/Hr for large-scale vacuum operations",
      icon: <FaChartLine />,
      stat: "80,000",
      unit: "M³/Hr",
    },
    {
      title: "Robust Construction",
      description:
        "Compact design with robust construction suitable for continuous duty operation",
      icon: <FaShieldAlt />,
      stat: "Continuous",
      unit: "Duty",
    },
    {
      title: "Universal Compatibility",
      description:
        "Can be used with all types of backing pumps for flexible system integration",
      icon: <FaTools />,
      stat: "All Types",
      unit: "Backing Pumps",
    },
  ];

  const productImageUrl = "/images/Mechanical-Vacuum.png";

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
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start md:items-center">
          <div className="text-white">
            <br />
            <div className="mt-12 md:mt-12 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-4 md:mb-6 animate-[fadeInUp_0.8s_ease-out]">
              <FaStar className="text-blue-400" />
              <span>{t("mechanicalVacuumBoosters.hero.badge")}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              {t("mechanicalVacuumBoosters.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("mechanicalVacuumBoosters.hero.subtitle")}
              </span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-300 mb-6 md:mb-8 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              {t("mechanicalVacuumBoosters.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
Up To 80,000                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("mechanicalVacuumBoosters.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
Max 10⁻⁴                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("mechanicalVacuumBoosters.hero.vacuum")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  {t("mechanicalVacuumBoosters.hero.performanceValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("mechanicalVacuumBoosters.hero.performance")}
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
                  <span>
                    {t("mechanicalVacuumBoosters.hero.downloadBrochure")}
                  </span>
                </button>
              </div>

              {/* Watch Demo Button */}
              <a
                href="#available-models"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
              >
                {t("mechanicalVacuumBoosters.hero.ourProducts")}
              </a>
            </div>
            <br />
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <img
                src={productImageUrl}
                alt="Mechanical Vacuum Booster - Ultra-High Vacuum Technology"
                className="relative z-10 max-w-full h-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="z-[100] absolute inset-0 pointer-events-none hidden lg:block">
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white backdrop-blur-lg px-4 py-2 rounded-full text-gray-800 text-sm animate-float">
                  <FaExpandArrowsAlt className="text-blue-400" />
                  <span>{t("mechanicalVacuumBoosters.hero.highVacuum")}</span>
                </div>
                <div
                  className="absolute top-1/2 -right-4 flex items-center gap-2 bg-white backdrop-blur-lg px-4 py-2 rounded-full text-gray-800 text-sm animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <FaShieldAlt className="text-green-400" />
                  <span>
                    {t("mechanicalVacuumBoosters.hero.advancedSealing")}
                  </span>
                </div>
                <div
                  className="absolute bottom-4 left transform -translate-x-1/2 flex items-center gap-2 bg-white backdrop-blur-lg px-4 py-2 rounded-full text-gray-800 text-sm animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <FaChartLine className="text-yellow-400" />
                  <span>{t("mechanicalVacuumBoosters.hero.highCapacity")}</span>
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
                  {t("mechanicalVacuumBoosters.form.title")}
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
                    placeholder={t("mechanicalVacuumBoosters.form.firstName")}
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
                    placeholder={t("mechanicalVacuumBoosters.form.lastName")}
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
                    placeholder={t("mechanicalVacuumBoosters.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("mechanicalVacuumBoosters.form.phone")}
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
                  placeholder={t("mechanicalVacuumBoosters.form.company")}
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
                    {t("mechanicalVacuumBoosters.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("mechanicalVacuumBoosters.form.sendEnquiry")}</span>
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
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
  <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Advanced Vacuum Booster Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the engineering excellence that makes our Mechanical
              Vacuum Boosters the preferred choice for ultra-high vacuum
              applications requiring exceptional performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border ${
                  activeFeature === index
                    ? "border-blue-500 shadow-xl transform -translate-y-2"
                    : "border-gray-200 shadow-md hover:shadow-lg hover:border-blue-300 hover:-translate-y-1"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-2xl transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                  <FaCheckCircle />
                  <span>{feature.benefit}</span>
                </div>
                {activeFeature === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-[slideDown_0.3s_ease-out]">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Salient Features */}
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("mechanicalVacuumBoosters.salientFeatures.title")}
            </h2>
            <p className="text-slate-600 mt-3">
              {t("mechanicalVacuumBoosters.salientFeatures.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaCube />,
                title: t(
                  "mechanicalVacuumBoosters.salientFeatures.compact.title"
                ),
                text: t(
                  "mechanicalVacuumBoosters.salientFeatures.compact.text"
                ),
              },
              {
                icon: <FaTools />,
                title: t(
                  "mechanicalVacuumBoosters.salientFeatures.anyBacking.title"
                ),
                text: t(
                  "mechanicalVacuumBoosters.salientFeatures.anyBacking.text"
                ),
              },
              {
                icon: <FaSync />,
                title: t(
                  "mechanicalVacuumBoosters.salientFeatures.flexibleFlow.title"
                ),
                text: t(
                  "mechanicalVacuumBoosters.salientFeatures.flexibleFlow.text"
                ),
              },
              {
                icon: <FaChartLine />,
                title: t(
                  "mechanicalVacuumBoosters.salientFeatures.wideCapacity.title"
                ),
                text: t(
                  "mechanicalVacuumBoosters.salientFeatures.wideCapacity.text"
                ),
              },
              {
                icon: <FaGears />,
                title: t(
                  "mechanicalVacuumBoosters.salientFeatures.driveCompatibility.title"
                ),
                text: t(
                  "mechanicalVacuumBoosters.salientFeatures.driveCompatibility.text"
                ),
              },
              {
                icon: <FaAward />,
                title: t(
                  "mechanicalVacuumBoosters.salientFeatures.quality.title"
                ),
                text: t(
                  "mechanicalVacuumBoosters.salientFeatures.quality.text"
                ),
              },
              {
                icon: <FaShieldAlt />,
                title: t(
                  "mechanicalVacuumBoosters.salientFeatures.advancedSealing.title"
                ),
                text: t(
                  "mechanicalVacuumBoosters.salientFeatures.advancedSealing.text"
                ),
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principle Section */}
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-5">
            <h2 className="text-4xl py-2 font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("mechanicalVacuumBoosters.workingPrinciple.sectionTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t(
                "mechanicalVacuumBoosters.workingPrinciple.sectionDescription"
              )}
            </p>
          </div>

          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-600 font-semibold mb-6">
                  <FaExpandArrowsAlt />
                  <span>
                    {t("mechanicalVacuumBoosters.workingPrinciple.badge")}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("mechanicalVacuumBoosters.workingPrinciple.title")}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {t("mechanicalVacuumBoosters.workingPrinciple.description")}
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {t(
                          "mechanicalVacuumBoosters.workingPrinciple.step1.title"
                        )}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {t(
                          "mechanicalVacuumBoosters.workingPrinciple.step1.description"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {t(
                          "mechanicalVacuumBoosters.workingPrinciple.step2.title"
                        )}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {t(
                          "mechanicalVacuumBoosters.workingPrinciple.step2.description"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {t(
                          "mechanicalVacuumBoosters.workingPrinciple.step3.title"
                        )}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {t(
                          "mechanicalVacuumBoosters.workingPrinciple.step3.description"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Mechanical Vacuum Booster Working Principle"
                  className="w-full h-auto rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                {/* <div className="absolute inset-0 pointer-events-none lg:block hidden">
                  <div className="absolute top-8 left-8 flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-700 shadow-md">
                      Piston Ring Seals
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-700 shadow-md">
                      Rotary Sealing System
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-700 shadow-md">
                      Drive Mechanism
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 text-xl">
                  <FaShieldAlt />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {t(
                    "mechanicalVacuumBoosters.technologyDetails.advancedSealing.title"
                  )}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t(
                    "mechanicalVacuumBoosters.technologyDetails.advancedSealing.description"
                  )}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {t(
                        "mechanicalVacuumBoosters.technologyDetails.advancedSealing.sealType"
                      )}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {t(
                        "mechanicalVacuumBoosters.technologyDetails.advancedSealing.sealTypeValue"
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {t(
                        "mechanicalVacuumBoosters.technologyDetails.advancedSealing.tightness"
                      )}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {t(
                        "mechanicalVacuumBoosters.technologyDetails.advancedSealing.tightnessValue"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center mb-4 text-xl">
                  <FaChartLine />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {t(
                    "mechanicalVacuumBoosters.technologyDetails.wideCapacity.title"
                  )}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t(
                    "mechanicalVacuumBoosters.technologyDetails.wideCapacity.description"
                  )}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      {t(
                        "mechanicalVacuumBoosters.technologyDetails.wideCapacity.benefit1"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      {t(
                        "mechanicalVacuumBoosters.technologyDetails.wideCapacity.benefit2"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center mb-4 text-xl">
                  <FaGears />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {t(
                    "mechanicalVacuumBoosters.technologyDetails.flexibleDrive.title"
                  )}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t(
                    "mechanicalVacuumBoosters.technologyDetails.flexibleDrive.description"
                  )}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      {t(
                        "mechanicalVacuumBoosters.technologyDetails.flexibleDrive.benefit1"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      {t(
                        "mechanicalVacuumBoosters.technologyDetails.flexibleDrive.benefit2"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center mb-4 text-xl">
                  <FaTools />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {t(
                    "mechanicalVacuumBoosters.technologyDetails.materialOptions.title"
                  )}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t(
                    "mechanicalVacuumBoosters.technologyDetails.materialOptions.description"
                  )}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      {t(
                        "mechanicalVacuumBoosters.technologyDetails.materialOptions.benefit1"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      {t(
                        "mechanicalVacuumBoosters.technologyDetails.materialOptions.benefit2"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Section */}
      <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {t("mechanicalVacuumBoosters.construction.title")}
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
            {t("mechanicalVacuumBoosters.construction.subtitle")}
          </p>
          <img
            src="/images/Mechanical-Vacuum_extra.png"
            alt="Mechanical Vacuum Booster Construction"
            className="block mx-auto rounded-2xl shadow-xl w-full sm:w-auto max-w-[680px] md:max-w-[760px] object-contain"
            loading="lazy"
          />
        </div>
      </section>

      {/* Specifications Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mechanical Vacuum Boosters deliver exceptional ultra-high vacuum
                performance with proven specifications designed for demanding
                applications requiring precise vacuum control and reliability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl" style={{ color: spec.color }}>
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
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

              <div className="bg-gray-100 rounded-2xl p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Standard Performance Range
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Vacuum Range:</span>
                    <span className="font-semibold text-gray-900">
                      50 Torr to 1 micron
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Multi-stage Vacuum:</span>
                    <span className="font-semibold text-gray-900">
                      Up to 10⁻³ Torr
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Construction:</span>
                    <span className="font-semibold text-gray-900">
                      Cast Iron, SS, Ductile Iron
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duty:</span>
                    <span className="font-semibold text-gray-900">
                      Continuous Operation
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <FaCertificate className="text-blue-600" />
                  <span className="text-blue-800 font-medium">
                    ISO 9001:2015
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <FaAward className="text-green-600" />
                  <span className="text-green-800 font-medium">
                    CE Certified
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                  <FaShieldAlt className="text-purple-600" />
                  <span className="text-purple-800 font-medium">
                    5 Year Warranty
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Mechanical Vacuum Booster Technical Specifications"
                  className="w-full h-auto rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                    Ultra-High Vacuum
                  </div>
                  <div className="absolute top-1/4 left-4 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                    Advanced Sealing
                  </div>
                  <div className="absolute bottom-1/4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                    Robust Construction
                  </div>
                  <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                    Flexible Drive Options
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Models & Operating Range */}
      {/* Models & Operating Range (slider version) */}
      <section id="available-models" className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">
            {t("mechanicalVacuumBoosters.models.title")}
          </h2>

          <ModelsSlider items={boosterModels} t={t} />
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("mechanicalVacuumBoosters.applications.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t("mechanicalVacuumBoosters.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-300 border ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-500 shadow-lg"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{app.image}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {app.title}
                      </h4>
                    </div>
                    <FaArrowRight
                      className={`transition-all duration-300 ${
                        selectedApplication === index
                          ? "text-blue-600 transform rotate-90"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
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
                  <p className="px-3 py-2 rounded-lg bg-black/45 text-white/95 text-xs sm:text-sm whitespace-normal break-words leading-relaxed ring-1 ring-white/10">
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
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/45 text-white text-xs sm:text-sm whitespace-normal break-words ring-1 ring-white/10 shadow-md"
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
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Mechanical Vacuum Boosters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Advanced vacuum booster technology for ultra-high vacuum
              performance and exceptional reliability in demanding applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {advantage.icon}
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-gray-900 leading-tight">
                    {advantage.stat}
                  </div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Salient Features Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Salient Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive features that make SWAM Mechanical Vacuum Boosters
              the preferred choice for ultra-high vacuum applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaCube />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Compact Design
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Robust construction suitable for continuous duty operation with
                space-efficient design
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaTools />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Universal Compatibility
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Can be used with all types of backing pumps for flexible system
                integration
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaSync />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Flexible Flow Arrangement
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Choice of horizontal and vertical flows to suit installation
                requirements
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaChartLine />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Wide Capacity Range
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Large number of models: 500 M³/hr to 80,000 M³/hr capacity
                options
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaGears />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Drive Flexibility
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Compatible with flanged motor, V-belt drive, or gear box drive
                options
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaAward />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                High Reliability
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Unique advanced technology sealing system ideally suited for
                high vacuum applications
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-8 md:py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              {t("mechanicalVacuumBoosters.cta.title")}
            </h2>
            <p className="text-xl mb-5 text-blue-100 leading-relaxed">
              {t("mechanicalVacuumBoosters.cta.subtitle")}
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                <FaPhone />
                <span>Get Expert Consultation</span>
              </button>
              <button className="inline-flex items-center gap-3 bg-blue-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-400 transition-colors duration-300 border-2 border-blue-400">
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
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl hover:bg-gray-700 transition-colors duration-300 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-6">
              <div className="relative">
                <img
                  src={modalImage}
                  alt="Mechanical Vacuum Booster - Ultra-High Vacuum Technology - Expanded View"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t("mechanicalVacuumBoosters.modal.title")}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {t("mechanicalVacuumBoosters.modal.subtitle")}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      {t("mechanicalVacuumBoosters.modal.capacity")}
                    </span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                      {t("mechanicalVacuumBoosters.modal.vacuum")}
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                      {t("mechanicalVacuumBoosters.modal.range")}
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

export default MechanicalVaccumBoosters;
