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
  FaTimes,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const BioGasBlowersCompressors = () => {
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
    link.href = "/images/Catalogues/Bro. Process Gas Booster & Compressor.pdf";
    link.download = "Bro. Process Gas Booster & Compressor.pdf";
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

    alert(t("bioGasBlowersCompressors.form.successMessage"));
  };

  const keyFeatures = useMemo(
    () => [
      {
        icon: <FaGears className="text-blue-500 text-2xl" />,
        title: t("bioGasBlowersCompressors.keyFeatures.dualDesign.title"),
        description: t(
          "bioGasBlowersCompressors.keyFeatures.dualDesign.description"
        ),
        details: t("bioGasBlowersCompressors.keyFeatures.dualDesign.details"),
        benefit: t("bioGasBlowersCompressors.keyFeatures.dualDesign.benefit"),
      },
      {
        icon: <FaAtom className="text-blue-500 text-2xl" />,
        title: t("bioGasBlowersCompressors.keyFeatures.mocOptions.title"),
        description: t(
          "bioGasBlowersCompressors.keyFeatures.mocOptions.description"
        ),
        details: t("bioGasBlowersCompressors.keyFeatures.mocOptions.details"),
        benefit: t("bioGasBlowersCompressors.keyFeatures.mocOptions.benefit"),
      },
      {
        icon: <FaChartLine className="text-blue-500 text-2xl" />,
        title: t("bioGasBlowersCompressors.keyFeatures.highCapacity.title"),
        description: t(
          "bioGasBlowersCompressors.keyFeatures.highCapacity.description"
        ),
        details: t("bioGasBlowersCompressors.keyFeatures.highCapacity.details"),
        benefit: t("bioGasBlowersCompressors.keyFeatures.highCapacity.benefit"),
      },
      {
        icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
        title: t(
          "bioGasBlowersCompressors.keyFeatures.pressureCapability.title"
        ),
        description: t(
          "bioGasBlowersCompressors.keyFeatures.pressureCapability.description"
        ),
        details: t(
          "bioGasBlowersCompressors.keyFeatures.pressureCapability.details"
        ),
        benefit: t(
          "bioGasBlowersCompressors.keyFeatures.pressureCapability.benefit"
        ),
      },
    ],
    [t]
  );

  const applications = useMemo(
    () => [
      {
        title: t("bioGasBlowersCompressors.applications.wasteTreatment.title"),
        icon: <FaRecycle />,
        image: "🏭",
        bg: "/images/Application_Images/Wastewater-Treatment.png",
        benefits: [
          t("bioGasBlowersCompressors.applications.wasteTreatment.benefit1"),
          t("bioGasBlowersCompressors.applications.wasteTreatment.benefit2"),
          t("bioGasBlowersCompressors.applications.wasteTreatment.benefit3"),
        ],
      },
      {
        title: t("bioGasBlowersCompressors.applications.landfillGas.title"),
        icon: <FaWarehouse />,
        image: "⛽",
        bg: "/images/Application_Images/Landfill-Gas-Recovery.png",
        benefits: [
          t("bioGasBlowersCompressors.applications.landfillGas.benefit1"),
          t("bioGasBlowersCompressors.applications.landfillGas.benefit2"),
          t("bioGasBlowersCompressors.applications.landfillGas.benefit3"),
        ],
      },
      {
        title: t(
          "bioGasBlowersCompressors.applications.agriculturalBiogas.title"
        ),
        icon: <FaSeedling />,
        image: "🌱",
        bg: "/images/Application_Images/Agricultural-Biogas.png",
        benefits: [
          t(
            "bioGasBlowersCompressors.applications.agriculturalBiogas.benefit1"
          ),
          t(
            "bioGasBlowersCompressors.applications.agriculturalBiogas.benefit2"
          ),
          t(
            "bioGasBlowersCompressors.applications.agriculturalBiogas.benefit3"
          ),
        ],
      },
      {
        title: t("bioGasBlowersCompressors.applications.industrial.title"),
        icon: <FaIndustry />,
        image: "🏗️",
        bg: "/images/Application_Images/Industrial-Gas-Boosting.png",
        benefits: [
          t("bioGasBlowersCompressors.applications.industrial.benefit1"),
          t("bioGasBlowersCompressors.applications.industrial.benefit2"),
          t("bioGasBlowersCompressors.applications.industrial.benefit3"),
        ],
      },
      {
        title: t("bioGasBlowersCompressors.applications.gasDistribution.title"),
        icon: <FaGasPump />,
        image: "🔄",
        bg: "/images/Application_Images/Gas-Distribution.png",
        benefits: [
          t("bioGasBlowersCompressors.applications.gasDistribution.benefit1"),
          t("bioGasBlowersCompressors.applications.gasDistribution.benefit2"),
          t("bioGasBlowersCompressors.applications.gasDistribution.benefit3"),
        ],
      },
      {
        title: t("bioGasBlowersCompressors.applications.energyRecovery.title"),
        icon: <FaBolt />,
        image: "⚡",
        bg: "/images/Application_Images/Energy-Recovery.png",
        benefits: [
          t("bioGasBlowersCompressors.applications.energyRecovery.benefit1"),
          t("bioGasBlowersCompressors.applications.energyRecovery.benefit2"),
          t("bioGasBlowersCompressors.applications.energyRecovery.benefit3"),
        ],
      },
    ],
    [t]
  );

  const specifications = [
    {
      parameter: "Rotary Capacity",
      value: "Up to 20,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Rotary Pressure",
      value: "Max 1.0 bar g",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Vane Capacity",
      value: "4,500 M³/Hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: "Vane Pressure",
      value: "Max 3.0 bar g",
      icon: <FaGasPump />,
      color: "#ef4444",
    },
  ];

  const advantages = useMemo(
    () => [
      {
        title: t("bioGasBlowersCompressors.advantages.dualTechnology.title"),
        description: t(
          "bioGasBlowersCompressors.advantages.dualTechnology.description"
        ),
        icon: <FaGears />,
        stat: t("bioGasBlowersCompressors.advantages.dualTechnology.stat"),
        unit: t("bioGasBlowersCompressors.advantages.dualTechnology.unit"),
      },
      {
        title: t("bioGasBlowersCompressors.advantages.highPressure.title"),
        description: t(
          "bioGasBlowersCompressors.advantages.highPressure.description"
        ),
        icon: <FaGasPump />,
        stat: t("bioGasBlowersCompressors.advantages.highPressure.stat"),
        unit: t("bioGasBlowersCompressors.advantages.highPressure.unit"),
      },
      {
        title: t("bioGasBlowersCompressors.advantages.largeCapacity.title"),
        description: t(
          "bioGasBlowersCompressors.advantages.largeCapacity.description"
        ),
        icon: <FaTachometerAlt />,
        stat: t("bioGasBlowersCompressors.advantages.largeCapacity.stat"),
        unit: t("bioGasBlowersCompressors.advantages.largeCapacity.unit"),
      },
      {
        title: t("bioGasBlowersCompressors.advantages.materialOptions.title"),
        description: t(
          "bioGasBlowersCompressors.advantages.materialOptions.description"
        ),
        icon: <FaShieldAlt />,
        stat: t("bioGasBlowersCompressors.advantages.materialOptions.stat"),
        unit: t("bioGasBlowersCompressors.advantages.materialOptions.unit"),
      },
    ],
    [t]
  );

  const productImageUrl = "/images/bio-Gas-Blowers-Compressors.jpg";

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
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start md:items-center">
          <div className="text-white">
            {/* removed leading <br /> */}
            <div className="inline-flex items-center gap-2 mt-24 md:mt-14 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-5 py-2.5 rounded-full text-sm font-semibold mb-4 md:mb-6 animate-pulse">
              <FaStar className="text-blue-400" />
              <span>{t("bioGasBlowersCompressors.hero.badge")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              {t("bioGasBlowersCompressors.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("bioGasBlowersCompressors.hero.subtitle")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 md:mb-8">
              {t("bioGasBlowersCompressors.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 leading-none">
Up To 20,000                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("bioGasBlowersCompressors.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 leading-none">
Max 3.0                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("bioGasBlowersCompressors.hero.pressure")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 leading-none">
                  {t("bioGasBlowersCompressors.hero.designTypesValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("bioGasBlowersCompressors.hero.designTypes")}
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
                  {t("bioGasBlowersCompressors.hero.downloadBrochure")}
                </span>
              </button>
            </div>
            {/* removed trailing <br /> */}
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[520px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl" />
              <img
                src={productImageUrl}
                alt="Bio Gas Blowers & Compressors - Renewable Energy Solutions"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => openModal(productImageUrl)}
              />
              {/* badges: hide on small to avoid crowding */}
              <div className="absolute z-10 -top-4 -left-4 bg-white/95 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full text-black text-xs sm:text-sm font-medium shadow-lg hidden md:block">
                <FaLeaf className="inline mr-2 text-green-500" />
                {t("bioGasBlowersCompressors.hero.ecoFriendly")}
              </div>
              <div className="absolute z-10 top-1/2 -right-6 bg-white/95 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full text-black text-xs sm:text-sm font-medium shadow-lg hidden md:block">
                <FaGears className="inline mr-2 text-blue-500" />
                {t("bioGasBlowersCompressors.hero.dualDesign")}
              </div>
              <div className="absolute z-10 -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full text-black text-xs sm:text-sm font-medium shadow-lg hidden md:block">
                <FaShieldAlt className="inline mr-2 text-purple-500" />
                {t("bioGasBlowersCompressors.hero.multipleMOCs")}
              </div>
            </div>
          </div>
        </div>
      </section>
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90svh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("bioGasBlowersCompressors.form.title")}
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
                    placeholder={t("bioGasBlowersCompressors.form.firstName")}
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
                    placeholder={t("bioGasBlowersCompressors.form.lastName")}
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
                    placeholder={t("bioGasBlowersCompressors.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("bioGasBlowersCompressors.form.phone")}
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
                  placeholder={t("bioGasBlowersCompressors.form.company")}
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
                    {t("bioGasBlowersCompressors.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("bioGasBlowersCompressors.form.sendEnquiry")}</span>
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

      {/* Technology Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl py-1 font-bold text-blue-500 mb-4 bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text">
              {t("bioGasBlowersCompressors.technology.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t("bioGasBlowersCompressors.technology.subtitle")}
            </p>
          </div>

          <div className="space-y-16">
            {/* Technology Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <FaLeaf />
                  <span>{t("bioGasBlowersCompressors.technology.badge")}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {t("bioGasBlowersCompressors.technology.whyExcel")}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {t("bioGasBlowersCompressors.technology.description")}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">
                      {t("bioGasBlowersCompressors.technology.rotary")}
                    </span>
                    <span className="text-sm text-gray-500">
                      {t("bioGasBlowersCompressors.technology.rotaryLabel")}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">
                      {t("bioGasBlowersCompressors.technology.sliding")}
                    </span>
                    <span className="text-sm text-gray-500">
                      {t("bioGasBlowersCompressors.technology.slidingLabel")}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">
                      {t("bioGasBlowersCompressors.technology.multiple")}
                    </span>
                    <span className="text-sm text-gray-500">
                      {t("bioGasBlowersCompressors.technology.mocLabel")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Bio Gas Blower & Compressor Technology"
                  className="w-full rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(productImageUrl)}
                />
                {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  Rotary Lobe Design
                </div> */}
                {/* <div className="absolute top-1/2 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  Sliding Vane Option
                </div> */}
                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  Corrosion Resistant MOC
                </div> */}
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <FaGears className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {t("bioGasBlowersCompressors.technology.rotaryLobe.title")}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  High-pressure sliding vane compressors for demanding bio gas applications, delivering Max 3.0 bar pressure
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      {t(
                        "bioGasBlowersCompressors.technology.rotaryLobe.capacityLabel"
                      )}
                      :
                    </span>
                    <span className="font-semibold text-gray-700">
                      {t(
                        "bioGasBlowersCompressors.technology.rotaryLobe.capacity"
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      {t(
                        "bioGasBlowersCompressors.technology.rotaryLobe.pressureLabel"
                      )}
                      :
                    </span>
                    <span className="font-semibold text-gray-700">
                      Max 1.0 bar g
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <FaWind className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {t("bioGasBlowersCompressors.technology.slidingVane.title")}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    High-pressure sliding vane compressors for demanding bio gas applications, delivering Max 3.0 bar pressure

                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      Up to 4,500 M³/Hr capacity
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      Max 3.0 bar pressure
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {t(
                    "bioGasBlowersCompressors.technology.materialOptions.title"
                  )}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {t(
                    "bioGasBlowersCompressors.technology.materialOptions.description"
                  )}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      {t(
                        "bioGasBlowersCompressors.technology.materialOptions.ci"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      {t(
                        "bioGasBlowersCompressors.technology.materialOptions.ss"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <FaLeaf className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {t("bioGasBlowersCompressors.technology.ecoFriendly.title")}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {t(
                    "bioGasBlowersCompressors.technology.ecoFriendly.description"
                  )}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      {t(
                        "bioGasBlowersCompressors.technology.ecoFriendly.benefit1"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      {t(
                        "bioGasBlowersCompressors.technology.ecoFriendly.benefit2"
                      )}
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
      <section className="py-5 mb-5 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("bioGasBlowersCompressors.applications.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t("bioGasBlowersCompressors.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-500 shadow-lg"
                      : "bg-gray-50 border-gray-200 hover:border-blue-300 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{app.image}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {app.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{app.description}</p>
                    </div>
                    <FaArrowRight className="text-gray-400" />
                  </div>
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
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t("bioGasBlowersCompressors.cta.title")}
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-5">
            {t("bioGasBlowersCompressors.cta.subtitle")}
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border-none text-base">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-2 bg-blue-500/20 text-white px-8 py-4 rounded-full border border-blue-400/30 backdrop-blur-sm font-semibold hover:bg-blue-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-base">
              <FaDownload />
              <span>Download Technical Brochure</span>
            </button>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm opacity-80">
            <div className="flex items-center gap-2">
              <FaPhone />
              <span>+91-99103-02163</span>
            </div>
            <a
              href="mailto:sales@swamatics.com"
              className="flex items-center gap-2 text-sm opacity-90 hover:underline"
            >
              <FaEnvelope />
              <span>sales@swamatics.com</span>
            </a>
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center text-xl font-bold transition-colors duration-200 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-6">
              <div className="relative">
                <img
                  src={modalImage}
                  alt="Bio Gas Blowers & Compressors - Renewable Energy Solutions - Expanded View"
                  className="w-full h-auto rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {t("bioGasBlowersCompressors.modal.title")}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t("bioGasBlowersCompressors.modal.subtitle")}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {t("bioGasBlowersCompressors.modal.rotarySpec")}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {t("bioGasBlowersCompressors.modal.vaneSpec")}
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {t("bioGasBlowersCompressors.modal.materialsSpec")}
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

export default BioGasBlowersCompressors;
