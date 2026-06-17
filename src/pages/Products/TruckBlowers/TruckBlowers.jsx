// add useRef here
import React, { useState, useRef } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import { FaGears } from "react-icons/fa6";

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
  FaTruck,
  FaGasPump,
  FaWarehouse,
  FaBoxes,
  FaArrowLeft, // needed by ModelsSlider
  FaTimes,
} from "react-icons/fa";

// data for the slider - will be created inside component to use translations

// slider component
const ModelsSlider = ({ items, t }) => {
  const trackRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".model-card");
    const width = card ? card.getBoundingClientRect().width : 320;
    el.scrollBy({ left: dir * width * 3, behavior: "smooth" });
  };

  // ⬇️ paste your <div className="relative">…</div> block here
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
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-1"
      >
        {(items ?? []).map((m) => (
          <div
            key={m.model}
            className="model-card snap-start min-w-[260px] sm:min-w-[300px] bg-white border border-slate-200 rounded-2xl shadow-sm p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                {m.model}
              </span>
              <span className="text-xs text-slate-500">
                {t("truckBlowers.models.series")} {m.series}
              </span>
            </div>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>
                <span className="font-semibold">
                  {t("truckBlowers.models.airFlow")}:
                </span>{" "}
                {m.airFlow}
              </li>
              {/* <li><span className="font-semibold">Pressure:</span> {m.pressure}</li> */}
              <li>
                <span className="font-semibold">
                  {t("truckBlowers.models.vacuum")}:
                </span>{" "}
                {m.vacuum}
              </li>
              {/* <li><span className="font-semibold">Warranty:</span> {m.warranty}</li> */}
            </ul>
            <div className="mt-4 text-xs text-slate-500">
              {t("truckBlowers.models.description")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TruckBlowers = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Create blowerModels array with translations
  const blowerModels = [
    // KHV SERIES
    {
      model: "KHV 01",
      series: "KHV",
      airFlow: "Up to 450 m³/h",
      vacuum: "85% Vacuum",
    },
    {
      model: "KHV 02",
      series: "KHV",
      airFlow: "Up to 1,200 m³/h",
      vacuum: "90% Vacuum",
    },
    {
      model: "KHV 03",
      series: "KHV",
      airFlow: "Up to 2,000 m³/h",
      vacuum: "90% Vacuum",
    },
    {
      model: "KHV 04",
      series: "KHV",
      airFlow: "Up to 3,500 m³/h",
      vacuum: "90% Vacuum",
    },
    {
      model: "KHV 05",
      series: "KHV",
      airFlow: "Up to 5,400 m³/h",
      vacuum: "90% Vacuum",
    },
    {
      model: "KHV 06",
      series: "KHV",
      airFlow: "Up to 9,600 m³/h",
      vacuum: "90% Vacuum",
    },

    // SHV SERIES
    {
      model: "SHV 30",
      series: "SHV",
      airFlow: "400–6,000 CFM",
      vacuum: `15" Hg cont.`,
    },
    {
      model: "SHV 32",
      series: "SHV",
      airFlow: "400–6,000 CFM",
      vacuum: `15" Hg cont.`,
    },
    {
      model: "SHV 35",
      series: "SHV",
      airFlow: "400–6,000 CFM",
      vacuum: `15" Hg cont.`,
    },
    {
      model: "SHV 40",
      series: "SHV",
      airFlow: "400–6,000 CFM",
      vacuum: `15" Hg cont.`,
    },
    {
      model: "SHV 45",
      series: "SHV",
      airFlow: "400–6,000 CFM",
      vacuum: `15" Hg cont.`,
    },
  ];

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
    link.href = "/images/Catalogues/Bro. Truck Blower (SHV & KHV Series).pdf"; // Replace with your PDF path
    link.download = "Bro. Truck Blower (SHV & KHV Series).pdf";
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
      icon: <FaTruck className="text-2xl text-white" />,
      title: "Bulk Vehicle Optimized",
      description:
        "Specially designed for bulk and silo vehicles pneumatic loading and unloading operations",
      details:
        "Purpose-built for transport vehicle requirements with robust construction for mobile applications",
      benefit: "Optimized for vehicles",
    },
    {
      icon: <FaGears className="text-2xl text-white" />,
      title: "Superior Design",
      description:
        "Superior in design and construction with highly energy efficient operation",
      details:
        "Advanced engineering with precision components for reliable performance in demanding conditions",
      benefit: "Energy efficient",
    },
    {
      icon: <FaWind className="text-2xl text-white" />,
      title: "Dual Operation",
      description:
        "Available for both positive pressure and vacuum conveying applications",
      details:
        "Versatile design handles both pressure generation and vacuum creation for complete loading/unloading solutions",
      benefit: "Positive & vacuum",
    },
    {
      icon: <FaWrench className="text-2xl text-white" />,
      title: "Easy Maintenance",
      description: "Easy to service and maintenance with accessible components",
      details:
        "Designed for field serviceability with minimal downtime and straightforward maintenance procedures",
      benefit: "Low maintenance",
    },
  ];

  const applications = [
    {
      title: t("truckBlowers.applications.bulkMaterial.title"),
      // description:
      //   "Pneumatic loading of bulk materials into transport vehicles",
      icon: <FaBoxes />,
      image: "📦",
      bg: "/images/Application_Images/Bulk-Material-Loading.png",

      benefits: [
        t("truckBlowers.applications.bulkMaterial.benefit1"),
        t("truckBlowers.applications.bulkMaterial.benefit2"),
        t("truckBlowers.applications.bulkMaterial.benefit3"),
      ],
    },
    {
      title: t("truckBlowers.applications.siloVehicle.title"),
      // description: "Specialized applications for silo truck operations",
      icon: <FaWarehouse />,
      image: "🏭",
      bg: "/images/Application_Images/Silo-Vehicle-Operations.png",

      benefits: [
        t("truckBlowers.applications.siloVehicle.benefit1"),
        t("truckBlowers.applications.siloVehicle.benefit2"),
        t("truckBlowers.applications.siloVehicle.benefit3"),
      ],
    },
    {
      title: t("truckBlowers.applications.vacuumUnloading.title"),
      // description: "Efficient vacuum-based unloading systems",
      icon: <FaRecycle />,
      image: "♻️",
      bg: "/images/Application_Images/Vacuum-Distillation.png",

      benefits: [
        t("truckBlowers.applications.vacuumUnloading.benefit1"),
        t("truckBlowers.applications.vacuumUnloading.benefit2"),
        t("truckBlowers.applications.vacuumUnloading.benefit3"),
      ],
    },
    {
      title: t("truckBlowers.applications.industrialTransport.title"),
      // description: "Heavy-duty transport vehicle applications",
      icon: <FaIndustry />,
      image: "🚛",
      bg: "/images/Application_Images/Industrial-Ventilation.png",

      benefits: [
        t("truckBlowers.applications.industrialTransport.benefit1"),
        t("truckBlowers.applications.industrialTransport.benefit2"),
        t("truckBlowers.applications.industrialTransport.benefit3"),
      ],
    },
    {
      title: t("truckBlowers.applications.lubricationSystems.title"),
      // description: "Pneumatic lubrication and timing gear applications",
      icon: <FaGasPump />,
      image: "⚙️",
      bg: "/images/Application_Images/Lubrication-Systems.png",

      benefits: [
        t("truckBlowers.applications.lubricationSystems.benefit1"),
        t("truckBlowers.applications.lubricationSystems.benefit2"),
        t("truckBlowers.applications.lubricationSystems.benefit3"),
      ],
    },
    {
      title: t("truckBlowers.applications.sealingApplications.title"),
      // description: "Specialized sealing and rotor applications",
      icon: <FaShieldAlt />,
      image: "🔒",
      bg: "/images/Application_Images/Sealing-Applications.png",

      benefits: [
        t("truckBlowers.applications.sealingApplications.benefit1"),
        t("truckBlowers.applications.sealingApplications.benefit2"),
        t("truckBlowers.applications.sealingApplications.benefit3"),
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 38,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Operation",
      value: "Positive & Vacuum",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Design",
      value: "Mobile Optimized",
      icon: <FaTruck />,
      color: "#f59e0b",
    },
    {
      parameter: "Maintenance",
      value: "Easy Service Access",
      icon: <FaTools />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Vehicle Integration",
      description:
        "Purpose-built for seamless integration with bulk transport vehicles",
      icon: <FaTruck />,
      stat: "100%",
      unit: "Vehicle Ready",
    },
    {
      title: "Energy Efficiency",
      description: "Highly energy efficient design reduces operational costs",
      icon: <FaLeaf />,
      stat: "25%",
      unit: "Energy Saved",
    },
    {
      title: "High Capacity",
      description: "Handles Up to 38,000 M³/Hr for large-scale operations",
      icon: <FaTachometerAlt />,
      stat: "38,000",
      unit: "M³/Hr",
    },
    {
      title: "Dual Purpose",
      description: "Versatile operation for both loading and unloading",
      icon: <FaGears />,
      stat: "2-in-1",
      unit: "Operation",
    },
  ];

  const productImageUrl = "/images/Truck-Blowers_below.jpg";
  const systemComponentsImageUrl = "/images/Truck-Blowers.png";

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
        <div
          className="absolute inset-0 opacity-50 bg-black"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="inline-flex mt-10 md:mt-20 items-center gap-2 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 md:mb-8">
              <FaStar className="text-blue-400" />
              <span>{t("truckBlowers.hero.badge")}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              {t("truckBlowers.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("truckBlowers.hero.subtitle")}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 md:mb-10">
              {t("truckBlowers.hero.description")}
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:flex md:gap-8 mb-6 md:mb-10">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 leading-none">
                  {t("truckBlowers.hero.capacityValue")}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t("truckBlowers.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 leading-none">
                  {t("truckBlowers.hero.operationValue")}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t("truckBlowers.hero.operation")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 leading-none">
                  {t("truckBlowers.hero.energyValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("truckBlowers.hero.energy")}
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-3 md:gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>{t("truckBlowers.hero.downloadBrochure")}</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative max-w-md sm:max-w-lg w-full overflow-visible z-10">
              <div
                className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                }}
              ></div>
              <img
                src={productImageUrl}
                alt="Truck Blowers - Bulk Vehicle Specialized"
                className="block w-full h-auto max-h-[48svh] sm:max-h-none object-contain rounded-2xl sm:rounded-3xl shadow-2xl relative z-10 cursor-pointer"
                onClick={() => openModal(productImageUrl)}
              />

              <div className="absolute inset-0 pointer-events-none overflow-visible">
                <div className="hidden sm:flex absolute top-[10%] -right-4 bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg z-20">
                  <FaTruck className="text-blue-600" />
                  <span>{t("truckBlowers.hero.vehicleReady")}</span>
                </div>
                <div className="hidden sm:flex absolute bottom-[20%] -left-4 bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg z-20">
                  <FaGears className="text-blue-600" />
                  <span>{t("truckBlowers.hero.dualOperation")}</span>
                </div>
                <div className="hidden sm:flex absolute top-1/2 -right-8 bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg z-20">
                  <FaLeaf className="text-blue-600" />
                  <span>{t("truckBlowers.hero.energyEfficient")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-6 text-center">
            {t("truckBlowers.models.title")}
          </h2>
          <ModelsSlider items={blowerModels} t={t} />
        </div>
      </section>
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90svh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("truckBlowers.form.title")}
                </h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={t("truckBlowers.form.firstName")}
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
                    placeholder={t("truckBlowers.form.lastName")}
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
                    placeholder={t("truckBlowers.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("truckBlowers.form.phone")}
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
                  placeholder={t("truckBlowers.form.company")}
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
                    {t("truckBlowers.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("truckBlowers.form.sendEnquiry")}</span>
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

      {/* Technology Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl py-2 font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("truckBlowers.technology.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("truckBlowers.technology.subtitle")}
            </p>
          </div>

          <div className="space-y-16">
            {/* Technology Overview */}
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <FaTruck />
                  <span>{t("truckBlowers.technology.badge")}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  {t("truckBlowers.technology.whyTitle")}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {t("truckBlowers.technology.whyDescription")}
                </p>
                <div className="grid grid-cols-3 gap-3 sm:flex sm:gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {t("truckBlowers.technology.stat1Value")}
                    </div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
                      {t("truckBlowers.technology.stat1Label")}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {t("truckBlowers.technology.stat2Value")}
                    </div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
                      {t("truckBlowers.technology.stat2Label")}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {t("truckBlowers.technology.stat3Value")}
                    </div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
                      {t("truckBlowers.technology.stat3Label")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={systemComponentsImageUrl}
                  alt="Truck Blower Technology"
                  className="w-full h-auto rounded-3xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(systemComponentsImageUrl)}
                />
                {/* <div className="absolute top-[15%] right-[-20%] text-xs text-slate-700 px-4 py-2 bg-white rounded-full shadow-lg border-2 border-slate-200 whitespace-nowrap hidden lg:block">
                  <div className="w-2 h-2 bg-blue-600 rounded-full absolute -left-1 top-1/2 transform -translate-y-1/2"></div>
                  Pressure Generation
                </div> */}
                {/* <div className="absolute top-[45%] left-[-25%] text-xs text-slate-700 px-4 py-2 bg-white rounded-full shadow-lg border-2 border-slate-200 whitespace-nowrap hidden lg:block">
                  <div className="w-2 h-2 bg-blue-600 rounded-full absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
                  Vacuum Creation
                </div> */}
                {/* <div className="absolute bottom-[30%] right-[-15%] text-xs text-slate-700 px-4 py-2 bg-white rounded-full shadow-lg border-2 border-slate-200 whitespace-nowrap hidden lg:block">
                  <div className="w-2 h-2 bg-blue-600 rounded-full absolute -left-1 top-1/2 transform -translate-y-1/2"></div>
                  Service Access Points
                </div> */}
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-blue-50 p-5 sm:p-6 rounded-3xl border-l-4 border-blue-600 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <FaTruck className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  {t("truckBlowers.technology.vehicleIntegration.title")}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {t("truckBlowers.technology.vehicleIntegration.description")}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      {t("truckBlowers.technology.vehicleIntegration.mounting")}
                      :
                    </span>
                    <span className="font-semibold text-slate-800">
                      {t(
                        "truckBlowers.technology.vehicleIntegration.mountingValue"
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      {t(
                        "truckBlowers.technology.vehicleIntegration.operation"
                      )}
                      :
                    </span>
                    <span className="font-semibold text-slate-800">
                      {t(
                        "truckBlowers.technology.vehicleIntegration.operationValue"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <FaWind className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  {t("truckBlowers.technology.dualMode.title")}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {t("truckBlowers.technology.dualMode.description")}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      {t("truckBlowers.technology.dualMode.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      {t("truckBlowers.technology.dualMode.benefit2")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <FaLeaf className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  {t("truckBlowers.technology.energyEfficiency.title")}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {t("truckBlowers.technology.energyEfficiency.description")}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      {t("truckBlowers.technology.energyEfficiency.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      {t("truckBlowers.technology.energyEfficiency.benefit2")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <FaWrench className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  {t("truckBlowers.technology.serviceability.title")}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {t("truckBlowers.technology.serviceability.description")}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      {t("truckBlowers.technology.serviceability.benefit1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      {t("truckBlowers.technology.serviceability.benefit2")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}

      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold  bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("truckBlowers.applications.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("truckBlowers.applications.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 mt-10 md:mt-16">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm transition-all duration-300 cursor-pointer border-2 border-transparent hover:translate-x-3 hover:shadow-lg hover:border-blue-600 ${
                    selectedApplication === index
                      ? "translate-x-3 shadow-lg border-blue-600"
                      : ""
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-xl sm:text-2xl rounded-lg flex items-center justify-center shadow">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
                      {app.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                  <FaArrowRight
                    className={`text-blue-600 transition-transform duration-300 ml-auto ${
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
                <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-black/60 text-white font-semibold text-base sm:text-lg">
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
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-black/45 text-white text-[11px] sm:text-sm ring-1 ring-white/10 shadow-md"
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
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            {t("truckBlowers.cta.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-blue-100 leading-relaxed mb-5">
            {t("truckBlowers.cta.subtitle")}
          </p>

          {/* <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <button className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/10 text-white border-2 border-white/30 rounded-full font-semibold backdrop-blur-xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
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
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-4 md:p-8 box-border"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[95vw] max-h-[90svh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black/80 backdrop-blur-xl border-none rounded-full w-11 h-11 flex items-center justify-center text-white cursor-pointer z-10 hover:bg-black/95 hover:scale-110 transition-all duration-300 text-xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="relative h-full overflow-hidden flex flex-col">
              <div
                className="flex-1 overflow-auto flex items-center justify-center p-4 relative"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <img
                  src={modalImage}
                  alt="Truck Blowers - Bulk Vehicle Specialized - Expanded View"
                  className="w-auto h-auto min-w-full min-h-full object-contain block cursor-grab transition-transform duration-300 active:cursor-grabbing"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white text-center z-10 backdrop-blur-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {t("truckBlowers.modal.title")}
                  </h3>
                  <p className="text-slate-200 mb-4 sm:mb-6 text-base sm:text-lg drop-shadow-lg">
                    {t("truckBlowers.modal.subtitle")}
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold drop-shadow-lg">
                      {t("truckBlowers.modal.capacity")}
                    </span>
                    <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold drop-shadow-lg">
                      {t("truckBlowers.modal.operation")}
                    </span>
                    <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold drop-shadow-lg">
                      {t("truckBlowers.modal.design")}
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

export default TruckBlowers;
