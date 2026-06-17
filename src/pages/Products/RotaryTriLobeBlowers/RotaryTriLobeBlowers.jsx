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
  FaFlask,
  FaUsers,
  FaCertificate,
  FaTimes,
  FaSeedling,
} from "react-icons/fa";

const RotaryTriLobeBlowers = () => {
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
    link.href = "/images/Catalogues/Bro-Rotary-Tri-Lobe-Blower.pdf"; // Replace with your PDF path
    link.download = "Bro-Rotary-Tri-Lobe-Blower.pdf";
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
  const workingPrinciple = {
    title: "Working Principle – Tri Lobe Blower",
    description:
      "As the rotation proceeds, the trapped gas moves along until it reaches the discharge port,raising its pressure against the system resistance. The precise clearances within the blower make possible the rise in pressure with least internal slip loss.",
    steps: [
      {
        step: "1",
        title: "Non-pulsating",
        // description: "Most efficient rotor profile – 4 lobe / 6 flute.",
      },

      {
        step: "2",
        title: "Lower sound emission",
        // description: "Delivers pulsation-free compressed air with lower noise.",
      },
      {
        step: "3",
        title: "Smooth",
        // description: "Delivers pulsation-free compressed air with lower noise.",
      },
    ],
  };

  const keyFeatures = [
    {
      icon: <FaCogs className="text-2xl text-white" />,
      title: "Advanced Rotor Design",
      // description:
      //   "Computer-generated rotor profiles for optimal performance and efficiency",
      // details:
      //   "Precision-engineered rotors with uniform clearances and higher volumetric efficiencies",
      // benefit: "Up to 15% higher efficiency",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: "Heavy Duty Construction",
      // description:
      //   "Ruggedly built with appropriate rotor shaft design for low deflection",
      // details:
      //   "Anti-friction oil lubricated bearings for continuous operation and reliability",
      // benefit: "99.5% uptime reliability",
    },
    {
      icon: <FaTools className="text-2xl text-white" />,
      title: "CNC Precision Manufacturing",
      // description:
      //   "Manufactured on CNC machines for high accuracy and consistency",
      // details:
      //   "State-of-the-art manufacturing ensures dimensional precision and quality",
      // benefit: "±0.01mm precision",
    },
    {
      icon: <FaLeaf className="text-2xl text-white" />,
      title: "Oil-Free Operation",
      // description:
      //   "Ideal for oil-free conveying of industrial gases and materials",
      // details:
      //   "Clean operation suitable for sensitive applications and food-grade processes",
      // benefit: "100% oil-free guarantee",
    },
  ];

  const applications = [
    {
      titleKey: "rotaryTriLobe.applications.wastewater.title",
      icon: <FaRecycle />,
      image: "💧",
      bg: "/images/Application_Images/Wastewater-Treatment.png",
      benefits: [
        "rotaryTriLobe.applications.wastewater.benefit1",
        "rotaryTriLobe.applications.wastewater.benefit2",
        "rotaryTriLobe.applications.wastewater.benefit3",
      ],
    },
    {
      titleKey: "rotaryTriLobe.applications.chemical.title",
      icon: <FaFlask />,
      image: "🧪",
      bg: "/images/Application_Images/Chemical-&-Petrochemical.png",
      benefits: [
        "rotaryTriLobe.applications.chemical.benefit1",
        "rotaryTriLobe.applications.chemical.benefit2",
        "rotaryTriLobe.applications.chemical.benefit3",
      ],
    },
    {
      titleKey: "rotaryTriLobe.applications.power.title",
      icon: <FaRocket />,
      image: "⚡",
      bg: "/images/Application_Images/Power-Plants.png",
      benefits: [
        "rotaryTriLobe.applications.power.benefit1",
        "rotaryTriLobe.applications.power.benefit2",
        "rotaryTriLobe.applications.power.benefit3",
      ],
    },
    {
      titleKey: "rotaryTriLobe.applications.cement.title",
      icon: <FaIndustry />,
      image: "🏭",
      bg: "/images/Application_Images/Cement-Plants.png",
      benefits: [
        "rotaryTriLobe.applications.cement.benefit1",
        "rotaryTriLobe.applications.cement.benefit2",
        "rotaryTriLobe.applications.cement.benefit3",
      ],
    },
    {
      titleKey: "rotaryTriLobe.applications.aquaculture.title",
      icon: <FaSeedling />,
      image: "🐟",
      bg: "/images/Application_Images/Aquaculture-Systems.png",
      benefits: [
        "rotaryTriLobe.applications.aquaculture.benefit1",
        "rotaryTriLobe.applications.aquaculture.benefit2",
        "rotaryTriLobe.applications.aquaculture.benefit3",
      ],
    },
    {
      titleKey: "rotaryTriLobe.applications.sugar.title",
      icon: <FaLeaf />,
      image: "🌱",
      bg: "/images/Application_Images/sugar.jpg",
      benefits: [
        "rotaryTriLobe.applications.sugar.benefit1",
        "rotaryTriLobe.applications.sugar.benefit2",
        "rotaryTriLobe.applications.sugar.benefit3",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 85,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure",
      value: "Max 1.1 bar 'g'",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Vacuum",
      value: "0.5 bar",
      icon: <FaVolumeDown />,
      color: "#f59e0b",
    },
    {
      parameter: "Operation",
      value: "Continuous Duty",
      icon: <FaTools />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "40+ Years Experience",
      description: "Four decades of innovation in rotary blower technology",
      icon: <FaAward />,
      stat: "40+",
      unit: "Years",
    },
    {
      title: "99.5% Reliability",
      description: "Proven track record of continuous operation",
      icon: <FaShieldAlt />,
      stat: "99.5%",
      unit: "Uptime",
    },
    {
      title: "1000+ Installations",
      description: "Trusted by industries worldwide",
      icon: <FaUsers />,
      stat: "1000+",
      unit: "Clients",
    },
    {
      title: "ISO Certified",
      description: "Quality management system certified",
      icon: <FaCertificate />,
      stat: "ISO",
      unit: "9001:2015",
    },
  ];

  const productImageUrl = "/images/Tri-Lobe.jpg";
  const systemComponentsImageUrl = "/images/tri-lobe-extra.png";

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
      <section className="min-h-[82svh] md:min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden pt-24 md:pt-20">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' strokeWidth='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-5 md:mt-5 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 md:mb-8 animate__animated animate__fadeInUp">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                classname="text-blue-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
              <span>{t("rotaryTriLobe.hero.badge")}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              {t("rotaryTriLobe.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("rotaryTriLobe.hero.subtitle")}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 mb-6 md:mb-10">
              {t("rotaryTriLobe.hero.description")}
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:flex md:flex-wrap md:gap-8 mb-6 md:mb-10">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 leading-none">
                  Up To 85,000
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t("rotaryTriLobe.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 leading-none">
                  Max 1.1
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("rotaryTriLobe.hero.pressure")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 leading-none">
                  100%
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("rotaryTriLobe.hero.oilFree")}
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-3 md:gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>{t("rotaryTriLobe.hero.downloadBrochure")}</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative max-w-md sm:max-w-lg w-full overflow-visible z-10">
              {/* Animated background */}
              <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-blue-500/20 to-transparent rounded-full animate-pulse" />

              <img
                src={productImageUrl || "/placeholder.svg"}
                alt={t("rotaryTriLobe.hero.imageAlt")}
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 relative z-20 cursor-pointer"
                onClick={() => openModal(productImageUrl)}
              />

              {/* Floating specs */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
                <div className="absolute top-[15%] right-[5%] bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce z-30">
                  <FaLeaf className="text-blue-600" />
                  <span>{t("rotaryTriLobe.hero.floatingOilFree")}</span>
                </div>
                <div
                  className="absolute bottom-[25%] left-[5%] bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce z-30"
                  style={{ animationDelay: "1s" }}
                >
                  <FaCogs className="text-blue-600" />
                  <span>{t("rotaryTriLobe.hero.floatingCNC")}</span>
                </div>
                <div
                  className="absolute top-1/2 right-[10%] bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce z-30"
                  style={{ animationDelay: "2s" }}
                >
                  <FaShieldAlt className="text-blue-600" />
                  <span>{t("rotaryTriLobe.hero.floatingHeavyDuty")}</span>
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
                  {t("rotaryTriLobe.form.title")}
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
                    placeholder={t("rotaryTriLobe.form.firstName")}
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
                    placeholder={t("rotaryTriLobe.form.lastName")}
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
                    placeholder={t("rotaryTriLobe.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("rotaryTriLobe.form.phone")}
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
                  placeholder={t("rotaryTriLobe.form.company")}
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
                    {t("rotaryTriLobe.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("rotaryTriLobe.form.sendEnquiry")}</span>
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
      <section className="py-10 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Heading */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <FaCogs className="animate-spin" />
              <span>{t("rotaryTriLobe.features.badge")}</span>
            </div>
            <h2 className="text-5xl font-bold mb-3 p-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("rotaryTriLobe.features.title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t("rotaryTriLobe.features.subtitle")}
            </p>
          </div>

          {/* (kept as-is) Feature blocks row */}
        </div>

        {/* Six feature cards (replaced content) */}
        <div className="max-w-6xl mx-auto px-6 mt-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Tri-Lobe Rotor Design */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaCogs className="text-gray-700 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t("rotaryTriLobe.features.triLobeRotor.title")}
              </h3>
              <p className="text-slate-600">
                {t("rotaryTriLobe.features.triLobeRotor.desc")}
              </p>
            </div>

            {/* 2. Heavy-Duty Bearings & Sealing */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaShieldAlt className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t("rotaryTriLobe.features.bearingsSealing.title")}
              </h3>
              <p className="text-slate-600">
                {t("rotaryTriLobe.features.bearingsSealing.desc")}
              </p>
            </div>

            {/* 3. Energy-Efficient Profile */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaLeaf className="text-green-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t("rotaryTriLobe.features.energyEfficient.title")}
              </h3>
              <p className="text-slate-600">
                {t("rotaryTriLobe.features.energyEfficient.desc")}
              </p>
            </div>

            {/* 4. Wide Pressure & Flow Range (inline gauge icon) */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 mb-4 text-indigo-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 21a9 9 0 1 1 9-9" />
                <path d="M12 12l6-3" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                {t("rotaryTriLobe.features.pressureFlow.title")}
              </h3>
              <p className="text-slate-600">
                {t("rotaryTriLobe.features.pressureFlow.desc")}
              </p>
            </div>

            {/* 5. Temperature Control (inline thermometer icon) */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 mb-4 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0Z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                {t("rotaryTriLobe.features.temperature.title")}
              </h3>
              <p className="text-slate-600">
                {t("rotaryTriLobe.features.temperature.desc")}
              </p>
            </div>

            {/* 6. Versatile Mounting */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaTools className="text-red-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t("rotaryTriLobe.features.mounting.title")}
              </h3>
              <p className="text-slate-600">
                {t("rotaryTriLobe.features.mounting.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Working */}
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-4">
            <h2 className="text-4xl py-1 font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              {t("rotaryTriLobe.working.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="p-2">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <FaCogs />
                <span>{t("rotaryTriLobe.working.badge")}</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                {t("rotaryTriLobe.working.subtitle")}
              </h3>
              <div className="text-slate-600 max-w-3xl mx-auto leading-relaxed space-y-4">
                <p className="text-base sm:text-lg">
                  {t("rotaryTriLobe.working.description1")}
                </p>
                <p className="text-base sm:text-lg">
                  {t("rotaryTriLobe.working.description2")}
                </p>
              </div>
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      {t("rotaryTriLobe.working.step1.title")}
                    </h4>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      {t("rotaryTriLobe.working.step2.title")}
                    </h4>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      {t("rotaryTriLobe.working.step3.title")}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <img
                src={systemComponentsImageUrl}
                alt="Tri-Lobe Blower Working Principle"
                className="w-full sm:w-3/4 lg:w-2/3 max-w-lg h-auto filter transition-transform cursor-pointer"
                onClick={() => openModal(systemComponentsImageUrl)}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Construction Section */}
      <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {t("rotaryTriLobe.construction.title")}
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
            {t("rotaryTriLobe.construction.subtitle")}
          </p>
          <img
            src="/images/1.png" // ✅ place 1.png inside public/images
            alt="Rotary Twin Lobe Blower Construction"
            className="mx-auto rounded-2xl max-w-4xl w-full transition-transform duration-500 "
          />
        </div>
      </section>
      <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Standard Execution */}
            <div className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">
                {t("rotaryTriLobe.construction.standard.title")}
              </h2>
              <ul className="list-disc list-inside text-slate-700 space-y-3 flex-1">
                <li>{t("rotaryTriLobe.construction.standard.item1")}</li>
                <li>{t("rotaryTriLobe.construction.standard.item2")}</li>
                <li>{t("rotaryTriLobe.construction.standard.item3")}</li>
                <li>{t("rotaryTriLobe.construction.standard.item4")}</li>
              </ul>
            </div>

            {/* Optional Accessories */}
            <div className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">
                {t("rotaryTriLobe.construction.optional.title")}
              </h2>
              <ul className="list-disc list-inside text-slate-700 space-y-3 flex-1">
                <li>{t("rotaryTriLobe.construction.optional.item1")}</li>
                <li>{t("rotaryTriLobe.construction.optional.item2")}</li>
                <li>{t("rotaryTriLobe.construction.optional.item3")}</li>
                <li>{t("rotaryTriLobe.construction.optional.item4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Technical Specifications Section */}
      {/* <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-600">
            Technical Specifications
          </h2>
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <tbody>
              <tr>
                <td className="p-3 border">Process air blower capacity</td>
                <td className="p-3 border">Up to 85,000 cmh</td>
              </tr>
              <tr>
                <td className="p-3 border">Pressure</td>
                <td className="p-3 border">Up to Max 1.1 bar 'g'</td>
              </tr>
              <tr>
                <td className="p-3 border">Driven by Motor</td>
                <td className="p-3 border">900 KW</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section> */}
      {/* Benefits Section (paste this after Technical Specs, before Applications) */}
      {/* <section className="py-7 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">
      Key Benefits
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <FaLeaf className="text-green-600 text-3xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Oil-Free Gas Path</h3>
        <p className="text-slate-600">
          Compression chamber remains oil-free (timing gears oil-lubricated) for clean process air/gas.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <FaShieldAlt className="text-blue-600 text-3xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Heavy-Duty Reliability</h3>
        <p className="text-slate-600">
          Robust construction with antifriction bearings designed for continuous duty operation.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <FaCogs className="text-gray-700 text-3xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Low Pulsation & Noise</h3>
        <p className="text-slate-600">
          Tri-lobe rotor profile with discharge silencing reduces pressure pulsations and sound levels.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <FaTools className="text-red-600 text-3xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Easy Maintenance</h3>
        <p className="text-slate-600">
          Skid-mounted layout and accessible service points reduce service time and lifecycle cost.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <FaAward className="text-yellow-600 text-3xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Proven in Industry</h3>
        <p className="text-slate-600">
          Long track record across steel, cement, ETP/aeration, and gas boosting applications.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <FaRecycle className="text-emerald-600 text-3xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Efficient by Design</h3>
        <p className="text-slate-600">
          Precision-machined rotors and close clearances support lower specific power consumption.
        </p>
      </div>
    </div>
  </div>
</section> */}
      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("rotaryTriLobe.applications.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("rotaryTriLobe.applications.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`bg-slate-50 rounded-xl p-4 sm:p-5 flex items-center gap-3 cursor-pointer border-2 transition-all ${
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
      {/* Enhanced Why Choose SWAM Section */}
      {/* Background Elements */}
      {/* <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-emerald-500/3 rounded-full blur-3xl"></div>
        </div> */}
      {/* Enhanced Header */}
      {/* <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-8">
              <FaAward className="animate-bounce" />
              <span>Industry Leadership Since 1984</span>
            </div> */}
      {/* <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Why Choose SWAM
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Four decades of excellence in rotary blower technology. Our
              commitment to innovation, quality, and customer satisfaction has
              made us the trusted choice for industrial leaders worldwide.
            </p> */}
      {/* Trust Indicators */}
      {/* <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-slate-600">
                <FaGlobe className="text-blue-500" />
                <span className="font-medium">Global Presence</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <FaCertificate className="text-emerald-500" />
                <span className="font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <FaUsers className="text-purple-500" />
                <span className="font-medium">Expert Team</span>
              </div>
            </div> */}
      {/* Main Advantages Grid */}
      {/* Icon with enhanced styling
                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  {advantage.icon}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div> */}
      {/* Enhanced stats display */}
      {/* <div className="mb-6 relative z-10">
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent leading-none mb-2">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-600 font-semibold uppercase tracking-wider">
                    {advantage.unit}
                  </div>

                  {/* Progress bar */}
      {/* <div className="w-full bg-slate-200 h-2 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 group-hover:w-full w-0"></div>
                  </div> */}
      {/* Content */}
      {/* <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {advantage.description}
                </p> */}
      {/* Additional metrics */}
      {/* <div className="bg-slate-100 p-4 rounded-xl relative z-10">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Performance Rating
                  </div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div> */}
      {/* Customer Success Stories */}
      {/* <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                Customer Success Stories
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Real results from real customers who chose SWAM for their
                critical applications
              </p>
            </div> */}
      {/* Success Story 1 */}
      {/* <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaIndustry className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">
                      Steel Manufacturing
                    </div>
                    <div className="text-slate-600 text-sm">
                      Fortune 500 Company
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  98.7%
                </div>
                <div className="text-slate-600 mb-4">
                  Uptime achieved with SWAM blowers in their blast furnace
                  operations
                </div>
                <div className="text-sm text-slate-500">
                  "Exceptional reliability and performance"
                </div>
              </div> */}
      {/* Success Story 2 */}
      {/* <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <FaLeaf className="text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Cement Plant</div>
                    <div className="text-slate-600 text-sm">
                      Leading Manufacturer
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
                <div className="text-slate-600 mb-4">
                  Energy savings achieved after upgrading to SWAM technology
                </div>
                <div className="text-sm text-slate-500">
                  "Significant cost reduction and efficiency gains"
                </div>
              </div> */}
      {/* Success Story 3 */}
      {/* <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FaRecycle className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">
                      Waste Treatment
                    </div>
                    <div className="text-slate-600 text-sm">
                      Municipal Facility
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  5 Years
                </div>
                <div className="text-slate-600 mb-4">
                  Continuous operation without major maintenance required
                </div>
                <div className="text-sm text-slate-500">
                  "Outstanding durability and low maintenance"
                </div>
              </div> */}
      {/* Competitive Advantages */}
      {/* <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCogs className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      Advanced Manufacturing
                    </h4>
                    <p className="text-slate-600">
                      State-of-the-art CNC machines and precision engineering
                      ensure every component meets exacting standards.
                    </p>
                  </div>
                </div> */}
      {/* <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <FaShieldAlt className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      Proven Reliability
                    </h4>
                    <p className="text-slate-600">
                      Over 1000 successful installations worldwide with
                      industry-leading uptime performance.
                    </p>
                  </div>
                </div> */}
      {/* <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <FaUsers className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      Expert Support
                    </h4>
                    <p className="text-slate-600">
                      Dedicated technical team provides comprehensive support
                      from design to maintenance.
                    </p>
                  </div>
                </div> */}
      {/* Performance Chart Visualization */}
      {/* <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">
                      Efficiency
                    </span>
                    <span className="text-blue-600 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-[95%]"></div>
                  </div>
                </div> */}
      {/* <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">
                      Reliability
                    </span>
                    <span className="text-emerald-600 font-bold">99.5%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full w-[99.5%]"></div>
                  </div>
                </div> */}
      {/* <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">
                      Customer Satisfaction
                    </span>
                    <span className="text-purple-600 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-[98%]"></div>
                  </div>
                </div> */}
      {/* <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">
                      Innovation Index
                    </span>
                    <span className="text-yellow-600 font-bold">92%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full w-[92%]"></div>
                  </div>
                </div> */}
      {/* Call to Action */}
      {/* <div className="text-center bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">
              Experience the SWAM Difference
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the thousands of satisfied customers who have transformed
              their operations with SWAM technology
            </p>
            <div className="flex justify-center md:justify-start gap-3 md:gap-4 justify-center flex-wrap">
              <button className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <FaPhone />
                <span>Schedule Consultation</span>
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/10 text-white border-2 border-white/30 rounded-2xl font-semibold backdrop-blur-xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <FaDownload />
                <span>Download Case Studies</span>
              </button>
            </div>
          </div> */}
      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              {t("rotaryTriLobe.cta.title")}
            </h2>
            <p className="text-lg mb-5 opacity-90">
              {t("rotaryTriLobe.cta.subtitle")}
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
          className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[9999] animate-in fade-in duration-300 p-8 box-border"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black/80 backdrop-blur-xl border-0 rounded-full w-11 h-11 flex items-center justify-center text-white cursor-pointer z-10 transition-all duration-300 text-2xl font-bold hover:bg-black/95 hover:scale-110"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="relative h-full overflow-hidden flex flex-col">
              <div className="flex-1 overflow-auto flex items-center justify-center p-4 relative">
                <img
                  src={modalImage}
                  alt="Rotary Twin & Tri-Lobe Blower - Expanded View"
                  className="min-w-full min-h-full w-auto h-auto object-contain block cursor-grab transition-transform duration-300"
                  style={{ cursor: "grab" }}
                  onMouseDown={(e) => (e.target.style.cursor = "grabbing")}
                  onMouseUp={(e) => (e.target.style.cursor = "grab")}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white text-center z-[15] backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                  {t("rotaryTriLobe.modal.title")}
                </h3>
                <p className="text-slate-200 mb-6 text-lg drop-shadow-sm">
                  {t("rotaryTriLobe.modal.subtitle")}
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-sm">
                    {t("rotaryTriLobe.modal.capacity")}
                  </span>
                  <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-sm">
                    {t("rotaryTriLobe.modal.pressure")}
                  </span>
                  <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-sm">
                    {t("rotaryTriLobe.modal.operation")}
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

export default RotaryTriLobeBlowers;
