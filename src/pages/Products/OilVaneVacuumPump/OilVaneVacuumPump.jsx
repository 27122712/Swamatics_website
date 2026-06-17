import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
  FaTimes,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const OilVaneVacuumPump = () => {
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
    link.href = "/images/Catalogues/Bro. Oil Vane Vacuum Pump.pdf"; // Replace with your PDF path
    link.download = "Bro. Oil Vane Vacuum Pump.pdf";
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

    alert(t("oilVaneVacuumPump.form.successMessage"));
  };
  /* === SERIES DATA (from your screenshots) === */

  // Air Cooled — Single Stage (SP-OL)
  const spOL = [
    {
      model: "SP 20 OL",
      capacity: "20 m³/hr",
      vacuum: "0.5 mbar",
      motor: "1 HP",
    },
    {
      model: "SP 25 OL",
      capacity: "25 m³/hr",
      vacuum: "0.5 mbar",
      motor: "1 HP",
    },
    {
      model: "SP 30 OL",
      capacity: "30 m³/hr",
      vacuum: "0.5 mbar",
      motor: "1.5 HP",
    },
    {
      model: "SP 40 OL",
      capacity: "40 m³/hr",
      vacuum: "0.5 mbar",
      motor: "2 HP",
    },
    {
      model: "SP 65 OL",
      capacity: "65 m³/hr",
      vacuum: "0.5 mbar",
      motor: "2 HP",
    },
    {
      model: "SP 100 OL",
      capacity: "100 m³/hr",
      vacuum: "0.5 mbar",
      motor: "3 HP",
    },
    {
      model: "SP 150 OL",
      capacity: "150 m³/hr",
      vacuum: "0.5 mbar",
      motor: "5 HP",
    },
    {
      model: "SP 200 OL",
      capacity: "200 m³/hr",
      vacuum: "0.5 mbar",
      motor: "7.5 HP",
    },
    {
      model: "SP 300 OL",
      capacity: "300 m³/hr",
      vacuum: "0.5 mbar",
      motor: "10 HP",
    },
  ];

  // Air Cooled — Double Stage (SP-DD)
  const spDD = [
    { model: "SP 200 DD", pumping: "200 LPM", oil: "1 L", motor: "0.75 HP" },
    { model: "SP 350 DD", pumping: "350 LPM", oil: "2.5 L", motor: "1 HP" },
    { model: "SP 600 DD", pumping: "600 LPM", oil: "2.5 L", motor: "1.5 HP" },
    { model: "SP 1000 DD", pumping: "1000 LPM", oil: "3.5 L", motor: "2 HP" },
  ];

  // Air Cooled — Single/Double Stage (SP-S / SP-D)
  const spSD = [
    { model: "SP 200 S", pumping: "200 LPM", oil: "3 L", motor: "0.5 HP" },
    { model: "SP 200 D", pumping: "200 LPM", oil: "3.5 L", motor: "1 HP" },
    { model: "SP 21 S", pumping: "350 LPM", oil: "3.5 L", motor: "1 HP" },
    { model: "SP 21 D", pumping: "350 LPM", oil: "3.5 L", motor: "1 HP" },
    { model: "SP 600 D", pumping: "600 LPM", oil: "5 L", motor: "1.5 HP" },
    { model: "SP 1000 D", pumping: "1000 LPM", oil: "6 L", motor: "2 HP" },
  ];

  // Water Cooled — Double Stage (SP-D)
  const spWaterD = [
    { model: "SP 1500 D", pumping: "1500 LPM", oil: "8 L", motor: "3 HP" },
    { model: "SP 2500 D", pumping: "2500 LPM", oil: "16 L", motor: "5 HP" },
    { model: "SP 3500 D", pumping: "3500 LPM", oil: "20 L", motor: "7.5 HP" },
    { model: "SP 5000 D", pumping: "5000 LPM", oil: "26 L", motor: "10 HP" },
    { model: "SP 7500 D", pumping: "7500 LPM", oil: "31 L", motor: "12.5 HP" },
  ];

  /* Generic series slider (no nav arrows) */
  const SeriesSlider = ({ title, subtitle, items, fields }) => (
    <div className="mb-12">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        {subtitle && <p className="text-slate-300">{subtitle}</p>}
      </div>

      {/* Hide Swiper default arrows just in case */}
      <style>{`
      .series-swiper .swiper-button-prev,
      .series-swiper .swiper-button-next { display: none !important; }
    `}</style>

      <Swiper
        modules={[Pagination, Autoplay]}
        className="series-swiper"
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {items.map((it) => (
          <SwiperSlide key={it.model} className="h-full">
            <div className="min-h-[180px] h-full bg-white rounded-2xl p-6 shadow-md flex flex-col">
              <div className="text-lg font-bold text-indigo-600 mb-3">
                {it.model}
              </div>
              <ul className="text-slate-700 text-sm grid grid-cols-1 gap-2">
                {fields.map(([key, label]) => (
                  <li key={key} className="flex justify-between gap-3">
                    <span className="text-slate-500">{label}</span>
                    <span className="font-semibold">{it[key]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  const keyFeatures = [
    {
      icon: <FaGears className="w-6 h-6 text-blue-500" />,
      title: "Positive Displacement Technology",
      description:
        "Advanced rotary vane design with sliding vanes in a rotor rotating within a cavity for reliable vacuum performance",
      details:
        "Eccentrically mounted rotor with slots rotates in cylindrical housing with precisely fitting sliding vanes that move in slots and separate individual working chambers",
      benefit: "Reliable positive displacement",
    },
    {
      icon: <FaOilCan className="w-6 h-6 text-blue-500" />,
      title: "Oil-Lubricated Operation",
      description:
        "Oil lubrication ensures smooth operation and sealing for consistent vacuum performance and extended equipment life",
      details:
        "Chemical series design handles higher amounts of condensable vapor while maintaining optimal lubrication for superior performance",
      benefit: "Enhanced sealing & longevity",
    },
    {
      icon: <FaTachometerAlt className="w-6 h-6 text-blue-500" />,
      title: "High Vacuum Achievement",
      description:
        "Achieves high vacuum up to 0.01 Torr at suction port for demanding vacuum applications",
      details:
        "Consistent vacuum performance with capability to handle varying process conditions and condensable vapors effectively",
      benefit: "Deep vacuum capability",
    },
    {
      icon: <FaTools className="w-6 h-6 text-blue-500" />,
      title: "Chemical Series Design",
      description:
        "Specially designed to handle higher amounts of condensable vapor in challenging chemical processing environments",
      details:
        "Enhanced design prevents oil contamination and maintains vacuum levels even when processing condensable vapors",
      benefit: "Chemical process ready",
    },
  ];

  const applications = [
    {
      title: t("oilVaneVacuumPump.applications.vacuumDistillation.title"),
      icon: <FaFlask />,
      image: "⚗️",
      bg: "/images/Application_Images/Vacuum-Distillation.png",
      benefits: [
        t("oilVaneVacuumPump.applications.vacuumDistillation.benefit1"),
        t("oilVaneVacuumPump.applications.vacuumDistillation.benefit2"),
        t("oilVaneVacuumPump.applications.vacuumDistillation.benefit3"),
      ],
    },
    {
      title: t("oilVaneVacuumPump.applications.filtration.title"),
      icon: <FaLayerGroup />,
      image: "🔍",
      bg: "/images/Application_Images/Filtration.png",
      benefits: [
        t("oilVaneVacuumPump.applications.filtration.benefit1"),
        t("oilVaneVacuumPump.applications.filtration.benefit2"),
        t("oilVaneVacuumPump.applications.filtration.benefit3"),
      ],
    },
    {
      title: t("oilVaneVacuumPump.applications.jewelryCasting.title"),
      icon: <FaGem />,
      image: "💎",
      bg: "/images/Application_Images/Jewelry-Casting.png",
      benefits: [
        t("oilVaneVacuumPump.applications.jewelryCasting.benefit1"),
        t("oilVaneVacuumPump.applications.jewelryCasting.benefit2"),
        t("oilVaneVacuumPump.applications.jewelryCasting.benefit3"),
      ],
    },
    {
      title: t("oilVaneVacuumPump.applications.vacuumDrying.title"),
      icon: <FaThermometerHalf />,
      image: "🌡️",
      bg: "/images/Application_Images/Vacuum-Drying.png",
      benefits: [
        t("oilVaneVacuumPump.applications.vacuumDrying.benefit1"),
        t("oilVaneVacuumPump.applications.vacuumDrying.benefit2"),
        t("oilVaneVacuumPump.applications.vacuumDrying.benefit3"),
      ],
    },
    {
      title: t("oilVaneVacuumPump.applications.degassing.title"),
      icon: <FaWind />,
      image: "💨",
      bg: "/images/Application_Images/Degassing-Services.png",
      benefits: [
        t("oilVaneVacuumPump.applications.degassing.benefit1"),
        t("oilVaneVacuumPump.applications.degassing.benefit2"),
        t("oilVaneVacuumPump.applications.degassing.benefit3"),
      ],
    },
    {
      title: t("oilVaneVacuumPump.applications.foodProcessing.title"),
      icon: <FaUtensils />,
      image: "🍕",
      bg: "/images/Application_Images/Food-&-Pharmaceutical.png",
      benefits: [
        t("oilVaneVacuumPump.applications.foodProcessing.benefit1"),
        t("oilVaneVacuumPump.applications.foodProcessing.benefit2"),
        t("oilVaneVacuumPump.applications.foodProcessing.benefit3"),
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Flow Capacity",
      value: "Up to 600 M³/hr",
      icon: <FaWind />,
      color: "#3b82f6",
    },
    {
      parameter: "Maximum Vacuum",
      value: "0.01 Torr",
      icon: <FaTachometerAlt />,
      color: "#3b82f6",
    },
    {
      parameter: "Operation Type",
      value: "Oil-Lubricated",
      icon: <FaOilCan />,
      color: "#10b981",
    },
    {
      parameter: "Design Type",
      value: "Rotary Vane",
      icon: <FaGears />,
      color: "#f59e0b",
    },
    {
      parameter: "Application",
      value: "Chemical Series",
      icon: <FaFlask />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Flow Capacity",
      description:
        "Readily available for flows up to 600 M³/hr with consistent performance across the entire operating range",
      icon: <FaWind />,
      stat: "Up To 600",
      unit: "M³/hr Flow",
    },
    {
      title: "High Vacuum Performance",
      description:
        "Achieves up to 0.01 Torr vacuum with consistent performance for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "0.01",
      unit: "Torr Vacuum",
    },
    {
      title: "Condensable Vapor Handling",
      description:
        "Chemical series design effectively handles higher amounts of condensable vapor without performance degradation",
      icon: <FaFlask />,
      stat: "High",
      unit: "Vapor Capacity",
    },
    {
      title: "Reliable Operation",
      description:
        "Oil-lubricated rotary vane technology provides reliable and consistent vacuum performance",
      icon: <FaShieldAlt />,
      stat: "Proven",
      unit: "Reliability",
    },
    {
      title: "Versatile Applications",
      description:
        "Suitable for diverse applications from vacuum distillation to food processing and jewelry casting",
      icon: <FaTools />,
      stat: "Multi",
      unit: "Application",
    },
  ];

  const workingPrinciple = {
    title: t("oilVaneVacuumPump.workingPrinciple.title"),
    description: t("oilVaneVacuumPump.workingPrinciple.description"),
    steps: [
      {
        step: "1",
        title: t("oilVaneVacuumPump.workingPrinciple.step1.title"),
        description: t("oilVaneVacuumPump.workingPrinciple.step1.description"),
      },
      {
        step: "2",
        title: t("oilVaneVacuumPump.workingPrinciple.step2.title"),
        description: t("oilVaneVacuumPump.workingPrinciple.step2.description"),
      },
      {
        step: "3",
        title: t("oilVaneVacuumPump.workingPrinciple.step3.title"),
        description: t("oilVaneVacuumPump.workingPrinciple.step3.description"),
      },
    ],
  };

  const productImageUrl = "/images/oil-Vane-Vacuum-Pump.jpg";

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
      <section className="min-h-[80vh] md:min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-[fadeInUp_0.8s_ease-out]">
              <FaStar className="text-blue-400" />
              <span>{t("oilVaneVacuumPump.hero.badge")}</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              {t("oilVaneVacuumPump.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("oilVaneVacuumPump.hero.subtitle")}
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300 mb-10 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              {t("oilVaneVacuumPump.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-10 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  Up To 600
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("oilVaneVacuumPump.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
Max 0.01                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("oilVaneVacuumPump.hero.vacuum")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  {t("oilVaneVacuumPump.hero.operationValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("oilVaneVacuumPump.hero.operation")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  {t("oilVaneVacuumPump.hero.seriesValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("oilVaneVacuumPump.hero.series")}
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
                  <span>{t("oilVaneVacuumPump.hero.downloadBrochure")}</span>
                </button>
              </div>

              {/* Watch Demo Button */}
              <a
                href="#available-models"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
              >
                {t("oilVaneVacuumPump.hero.ourProducts")}
              </a>
            </div>
            <br />
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <img
                src={productImageUrl}
                alt="Oil Vane Vacuum Pump - Rotary Vane Technology"
                className="relative w-full h-auto rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium animate-pulse">
                  <FaGears className="text-blue-400" />
                  <span>{t("oilVaneVacuumPump.hero.rotaryVane")}</span>
                </div>
                <div
                  className="absolute top-20 right-6 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <FaOilCan className="text-green-400" />
                  <span>{t("oilVaneVacuumPump.hero.oilLubricated")}</span>
                </div>
                <div
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <FaFlask className="text-red-400" />
                  <span>{t("oilVaneVacuumPump.hero.chemicalSeries")}</span>
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
                  {t("oilVaneVacuumPump.form.title")}
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
                    placeholder={t("oilVaneVacuumPump.form.firstName")}
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
                    placeholder={t("oilVaneVacuumPump.form.lastName")}
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
                    placeholder={t("oilVaneVacuumPump.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("oilVaneVacuumPump.form.phone")}
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
                  placeholder={t("oilVaneVacuumPump.form.company")}
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
                    {t("oilVaneVacuumPump.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("oilVaneVacuumPump.form.sendEnquiry")}</span>
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
      <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
            {t("oilVaneVacuumPump.features.title")}
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: t("oilVaneVacuumPump.features.highVacuum.title"),
                desc: t("oilVaneVacuumPump.features.highVacuum.desc"),
                icon: "🌪️",
              },
              {
                title: t("oilVaneVacuumPump.features.heatDissipation.title"),
                desc: t("oilVaneVacuumPump.features.heatDissipation.desc"),
                icon: "❄️",
              },
              {
                title: t("oilVaneVacuumPump.features.lowNoise.title"),
                desc: t("oilVaneVacuumPump.features.lowNoise.desc"),
                icon: "🔇",
              },
              {
                title: t("oilVaneVacuumPump.features.compact.title"),
                desc: t("oilVaneVacuumPump.features.compact.desc"),
                icon: "⚡",
              },
              {
                title: t("oilVaneVacuumPump.features.wearResistant.title"),
                desc: t("oilVaneVacuumPump.features.wearResistant.desc"),
                icon: "🛡️",
              },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                  {f.icon}
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {f.title}
                  </h3>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Advanced Rotary Vane Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover the proven engineering features that make our Oil Vane
              Vacuum Pumps the reliable choice for condensable vapor handling
              and high vacuum applications across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 shadow-md border border-slate-200 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  activeFeature === index
                    ? "ring-2 ring-blue-500 shadow-xl scale-105"
                    : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-blue-500 text-white"
                        : "bg-blue-50 text-blue-500"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>{feature.benefit}</span>
                  </div>
                  {activeFeature === index && (
                    <div className="mt-4 p-4 bg-slate-50 rounded-lg animate-[slideDown_0.3s_ease-out]">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {feature.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Working Principle Section */}
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-4xl py-2 lg:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("oilVaneVacuumPump.workingPrinciple.sectionTitle")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("oilVaneVacuumPump.workingPrinciple.sectionDescription")}
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-semibold mb-6">
                  <FaGears />
                  <span>{t("oilVaneVacuumPump.workingPrinciple.badge")}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  {workingPrinciple.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {workingPrinciple.description}
                </p>

                <div className="space-y-6">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-800 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Oil Vane Vacuum Pump Working Principle"
                  className="w-full h-auto rounded-2xl shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none">
                  {/* <div className="absolute top-6 left-6">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-6 left-0 whitespace-nowrap bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                      Sliding Vanes
                    </div>
                  </div> */}
                  {/* <div className="absolute top-1/2 right-6">
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div className="absolute top-6 right-0 whitespace-nowrap bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                      Oil Lubrication
                    </div>
                  </div> */}
                  {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                    <div
                      className="w-3 h-3 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                      Eccentric Rotor
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <FaOilCan className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  {t(
                    "oilVaneVacuumPump.technologyDetails.oilLubrication.title"
                  )}
                </h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {t(
                    "oilVaneVacuumPump.technologyDetails.oilLubrication.description"
                  )}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">
                      {t(
                        "oilVaneVacuumPump.technologyDetails.oilLubrication.lubrication"
                      )}
                      :
                    </span>
                    <span className="text-slate-700 font-semibold">
                      {t(
                        "oilVaneVacuumPump.technologyDetails.oilLubrication.lubricationValue"
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">
                      {t(
                        "oilVaneVacuumPump.technologyDetails.oilLubrication.operation"
                      )}
                      :
                    </span>
                    <span className="text-slate-700 font-semibold">
                      {t(
                        "oilVaneVacuumPump.technologyDetails.oilLubrication.operationValue"
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
                  {t(
                    "oilVaneVacuumPump.technologyDetails.highFlowCapacity.title"
                  )}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t(
                    "oilVaneVacuumPump.technologyDetails.highFlowCapacity.description"
                  )}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>
                      {t(
                        "oilVaneVacuumPump.technologyDetails.highFlowCapacity.benefit1"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>
                      {t(
                        "oilVaneVacuumPump.technologyDetails.highFlowCapacity.benefit2"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-slate-100 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <FaTachometerAlt className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  {t(
                    "oilVaneVacuumPump.technologyDetails.highVacuumPerformance.title"
                  )}
                </h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                    Achieves vacuum Max 0.01 Torr at suction port with consistent performance for demanding applications

                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>
                      {t(
                        "oilVaneVacuumPump.technologyDetails.highVacuumPerformance.benefit1"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>
                      {t(
                        "oilVaneVacuumPump.technologyDetails.highVacuumPerformance.benefit2"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-slate-100 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <FaFlask className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  {t(
                    "oilVaneVacuumPump.technologyDetails.chemicalSeries.title"
                  )}
                </h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {t(
                    "oilVaneVacuumPump.technologyDetails.chemicalSeries.description"
                  )}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>
                      {t(
                        "oilVaneVacuumPump.technologyDetails.chemicalSeries.benefit1"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>
                      {t(
                        "oilVaneVacuumPump.technologyDetails.chemicalSeries.benefit2"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-slate-100 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <FaShieldAlt className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  {t(
                    "oilVaneVacuumPump.technologyDetails.reliableOperation.title"
                  )}
                </h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {t(
                    "oilVaneVacuumPump.technologyDetails.reliableOperation.description"
                  )}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>
                      {t(
                        "oilVaneVacuumPump.technologyDetails.reliableOperation.benefit1"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>
                      {t(
                        "oilVaneVacuumPump.technologyDetails.reliableOperation.benefit2"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Available Models (by Series) */}
      <section id="available-models" className="py-7 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-4">
            <h2 className="text-3xl py-1 md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">
              {t("oilVaneVacuumPump.models.title")}
            </h2>
            <p className="text-slate-300 mt-2">
              {t("oilVaneVacuumPump.models.subtitle")}
            </p>
          </div>

          <SeriesSlider
            title={t("oilVaneVacuumPump.models.airCooledSingle.title")}
            items={spOL}
            fields={[
              ["capacity", t("oilVaneVacuumPump.models.capacity")],
              ["vacuum", t("oilVaneVacuumPump.models.vacuum")],
              ["motor", t("oilVaneVacuumPump.models.motor")],
            ]}
          />

          <SeriesSlider
            title={t("oilVaneVacuumPump.models.airCooledDouble.title")}
            items={spDD}
            fields={[
              ["pumping", t("oilVaneVacuumPump.models.pumpingCapacity")],
              ["oil", t("oilVaneVacuumPump.models.oilCapacity")],
              ["motor", t("oilVaneVacuumPump.models.motor")],
            ]}
          />

          <SeriesSlider
            title={t("oilVaneVacuumPump.models.airCooledSingleDouble.title")}
            items={spSD}
            fields={[
              ["pumping", t("oilVaneVacuumPump.models.pumpingCapacity")],
              ["oil", t("oilVaneVacuumPump.models.oilCapacity")],
              ["motor", t("oilVaneVacuumPump.models.motor")],
            ]}
          />

          <SeriesSlider
            title={t("oilVaneVacuumPump.models.waterCooledDouble.title")}
            items={spWaterD}
            fields={[
              ["pumping", t("oilVaneVacuumPump.models.pumpingCapacity")],
              ["oil", t("oilVaneVacuumPump.models.oilCapacity")],
              ["motor", t("oilVaneVacuumPump.models.motor")],
            ]}
          />
        </div>
      </section>

      {/* Specifications Section */}
      {/* <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Technical Specifications
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Oil Vane Vacuum Pumps deliver exceptional vacuum performance
                with proven specifications designed for reliability, condensable
                vapor handling, and consistent operation in demanding industrial
                applications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: `${spec.color}20`,
                          color: spec.color,
                        }}
                      >
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">
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

              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Key Performance Features
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                    <span>High vacuum up to 0.01 Torr at suction port</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                    <span>
                      Chemical series design for condensable vapor handling
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                    <span>
                      Oil lubrication for smooth operation and sealing
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                    <span>
                      Combination with Roots Pump for higher vacuum if required
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-600 font-medium">
                  <FaAward />
                  <span>CE Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full text-purple-600 font-medium">
                  <FaShieldAlt />
                  <span>5 Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <img
                  src={productImageUrl}
                  alt="Oil Vane Vacuum Pump Technical Specifications"
                  className="w-full h-auto rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Rotary Vane Technology
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Oil Lubricated Operation
                  </div>
                  <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Chemical Series Design
                  </div>
                  <div className="absolute bottom-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    High Vacuum Capability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("oilVaneVacuumPump.applications.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("oilVaneVacuumPump.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-200 shadow-lg"
                      : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-2xl">{app.image}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">
                      {app.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{app.description}</p>
                  </div>
                  <FaArrowRight
                    className={`transition-colors duration-300 ${
                      selectedApplication === index
                        ? "text-blue-500"
                        : "text-slate-400"
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
      </section>

      {/* Advantages Section */}
      {/* <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Oil Vane Vacuum Pumps
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Proven oil-lubricated rotary vane technology for reliable vacuum
              performance and condensable vapor handling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-blue-500">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-8 md:py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t("oilVaneVacuumPump.cta.title")}
          </h2>
          <p className="text-xl text-blue-100 mb-5 leading-relaxed">
            {t("oilVaneVacuumPump.cta.subtitle")}
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
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
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-opacity-70 transition-all duration-200 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-4">
                <img
                  src={modalImage}
                  alt="Oil Vane Vacuum Pump - Rotary Vane Technology - Expanded View"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="lg:w-80 p-6 bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {t("oilVaneVacuumPump.modal.title")}
                </h3>
                <p className="text-slate-600 mb-4">
                  {t("oilVaneVacuumPump.modal.subtitle")}
                </p>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {t("oilVaneVacuumPump.modal.vacuum")}
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    {t("oilVaneVacuumPump.modal.type")}
                  </span>
                  <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {t("oilVaneVacuumPump.modal.series")}
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

export default OilVaneVacuumPump;
