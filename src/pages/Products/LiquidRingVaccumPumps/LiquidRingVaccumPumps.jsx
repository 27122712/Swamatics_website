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
  FaCircle,
  FaWater,
  FaTimes
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const LiquidRingVaccumPumps = () => {
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
    })
  
    const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      // Create download link for PDF
      const link = document.createElement("a")
      link.href = "/images/Catalogues/Bro. Liquid Ring Vacuum Pump.pdf" // Replace with your PDF path
      link.download = "Bro. Liquid Ring Vacuum Pump.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
  
      // Close modal and reset form
      setIsFormOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
  
      alert(t("liquidRingVacuumPump.form.successMessage"));
    }
  

  const brochureBenefits = [
  t("liquidRingVacuumPump.benefits.higherReliability"),
  t("liquidRingVacuumPump.benefits.higherEfficiency"),
  t("liquidRingVacuumPump.benefits.savingOfWater"),
  t("liquidRingVacuumPump.benefits.handleSlugs"),
  t("liquidRingVacuumPump.benefits.flexibility"),
  t("liquidRingVacuumPump.benefits.troubleFree"),
  t("liquidRingVacuumPump.benefits.performanceAndValue"),
];

// ===== 1) put these right above your `return (` line =====

// Data from your tables
const dataDoubleStageSVLD = [
  { model: "SVLD 1",  motorHP: "10",      rpm: "1450",      capacity: "200",  waterLPM: "25" },
  { model: "SVLD 2",  motorHP: "20",      rpm: "1450",      capacity: "420",  waterLPM: "35" },
  { model: "SVLD 3",  motorHP: "25",      rpm: "1450",      capacity: "475",  waterLPM: "45" },
  { model: "SVLD 5",  motorHP: "25–40",   rpm: "980/1450",  capacity: "550",  waterLPM: "50" },
  { model: "SVLD 7",  motorHP: "40–60",   rpm: "890/1150",  capacity: "1100", waterLPM: "65" },
  { model: "SVLD 11", motorHP: "120–180", rpm: "450/590",   capacity: "3500", waterLPM: "140" },
];

// NOTE: If you want to fill exact capacities/water for every SVLP row, plug them here.
// I've included the complete model list from your "CHEMICAL SERIES SINGLE STAGE" table.
// Put the precise numbers when you have them handy.
const dataChemicalSingleSVLP = [
  { model: "SVLP–30",  motorHP: "3",      rpm: "2880", capacity: "31",   waterLPM: "4"  },
  { model: "SVLP–40",  motorHP: "5",      rpm: "2880", capacity: "50",   waterLPM: "6"  },
  { model: "SVLP–50",  motorHP: "5",      rpm: "2880", capacity: "81",   waterLPM: "9"  },
  { model: "SVLP–70",  motorHP: "7.5",    rpm: "2880", capacity: "121",  waterLPM: "13" },
  { model: "SVLP–75",  motorHP: "7.5",    rpm: "1440", capacity: "175",  waterLPM: "16" },
  { model: "SVLP–100", motorHP: "10",     rpm: "1440", capacity: "200",  waterLPM: "20" },
  { model: "SVLP–150", motorHP: "15",     rpm: "1440", capacity: "440",  waterLPM: "24" },
  { model: "SVLP–200", motorHP: "20",     rpm: "1440", capacity: "600",  waterLPM: "30" },
  { model: "SVLP–250", motorHP: "25/30",  rpm: "1440", capacity: "725",  waterLPM: "40" },
  { model: "SVLP–300", motorHP: "30",     rpm: "980",  capacity: "980",  waterLPM: "50" },
  { model: "SVLP–350", motorHP: "40",     rpm: "980",  capacity: "1350", waterLPM: "70" },
  { model: "SVLP–400", motorHP: "60/50",  rpm: "980",  capacity: "1700", waterLPM: "95" },
  { model: "SVLP–450", motorHP: "60/50",  rpm: "725",  capacity: "1850", waterLPM: "120" },
  { model: "SVLP–650", motorHP: "60/75",  rpm: "725",  capacity: "1700", waterLPM: "120" },
  { model: "SVLP–900", motorHP: "100",    rpm: "725",  capacity: "2150", waterLPM: "150" },
];

// From "CHEMICAL SERIES DOUBLE STAGE" table
const dataChemicalDoubleSVLD = [
  { model: "SVLD–50",  motorHP: "5",     rpm: "1440", capacity: "85",  waterLPM: "6–8"  },
  { model: "SVLD–75",  motorHP: "7.5",   rpm: "1440", capacity: "175", waterLPM: "8–14" },
  { model: "SVLD–100", motorHP: "10",    rpm: "1440", capacity: "220", waterLPM: "14–20" },
  { model: "SVLD–150", motorHP: "15",    rpm: "1440", capacity: "305", waterLPM: "20–25" },
  { model: "SVLD–200", motorHP: "20",    rpm: "1440", capacity: "400", waterLPM: "25–30" },
  { model: "SVLD–250", motorHP: "25/30", rpm: "1440", capacity: "525", waterLPM: "30–40" },
  { model: "SVLD–300", motorHP: "30/40", rpm: "1440", capacity: "725", waterLPM: "50–60" },
];

// From "SVL – CLOSED COUPLED SERIES" table
const dataClosedCoupledSVLC = [
  { model: "SVLC–25",  motorHP: "1.5", rpm: "2880", capacity: "25",  waterLPM: "2" },
  { model: "SVLC–45",  motorHP: "3",   rpm: "2880", capacity: "45",  waterLPM: "4" },
  { model: "SVLC–80",  motorHP: "3",   rpm: "1440", capacity: "75",  waterLPM: "4" },
  { model: "SVLC–100", motorHP: "5",   rpm: "1440", capacity: "110", waterLPM: "6" },
  { model: "SVLC–200", motorHP: "7.5", rpm: "1440", capacity: "200", waterLPM: "9" },
];

// Reusable slider
const SeriesSlider = ({ title, data }) => (
  <div className="mb-10">
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      autoplay={{ delay: 3500 }}
      pagination={{ clickable: true }}
      
      breakpoints={{
        0:    { slidesPerView: 1 },
        640:  { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {data.map((row, idx) => (
        <SwiperSlide key={idx}>
          <div className="bg-white rounded-2xl shadow-md p-5 h-full flex flex-col">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {row.model}
              </span>
            </div>
            <ul className="text-sm text-slate-700 leading-6">
              <li><span className="font-semibold">Motor (HP):</span> {row.motorHP || "—"}</li>
              <li><span className="font-semibold">Speed (RPM):</span> {row.rpm || "—"}</li>
              <li><span className="font-semibold">Capacity (m³/hr):</span> {row.capacity || "—"}</li>
              <li><span className="font-semibold">Seal Water (LPM):</span> {row.waterLPM || "—"}</li>
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);


  // Custom CSS animations
  const customStyles = `
    .animate-spin-slow {
      animation: spin 3s linear infinite;
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .animation-delay-200 {
      animation-delay: 0.2s;
    }
    .animation-delay-400 {
      animation-delay: 0.4s;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  `;

  const keyFeatures = [
    {
      icon: <FaWater className="text-blue-500 text-2xl" />,
      title: t("liquidRingVacuumPump.keyFeatures.liquidRing.title"),
      technicalSpecs: {},
      advantages: [
        t("liquidRingVacuumPump.keyFeatures.liquidRing.advantages.noMetalContact"),
        t("liquidRingVacuumPump.keyFeatures.liquidRing.advantages.handlesVapors"),
        t("liquidRingVacuumPump.keyFeatures.liquidRing.advantages.selfPriming"),
        t("liquidRingVacuumPump.keyFeatures.liquidRing.advantages.minimalVibration"),
      ],
      applications: [],
    },
    {
      icon: <FaCircle className="text-blue-500 text-2xl" />,
      title: t("liquidRingVacuumPump.keyFeatures.eccentricRotor.title"),
      technicalSpecs: {
        eccentricity: t("liquidRingVacuumPump.keyFeatures.eccentricRotor.specs.eccentricity"),
        bladeCount: t("liquidRingVacuumPump.keyFeatures.eccentricRotor.specs.bladeCount"),
        rotorMaterial: t("liquidRingVacuumPump.keyFeatures.eccentricRotor.specs.rotorMaterial"),
        balancing: t("liquidRingVacuumPump.keyFeatures.eccentricRotor.specs.balancing"),
      },
      advantages: [
        t("liquidRingVacuumPump.keyFeatures.eccentricRotor.advantages.uniformCompression"),
        t("liquidRingVacuumPump.keyFeatures.eccentricRotor.advantages.reducedPower"),
        t("liquidRingVacuumPump.keyFeatures.eccentricRotor.advantages.extendedLife"),
        t("liquidRingVacuumPump.keyFeatures.eccentricRotor.advantages.minimalMaintenance"),
      ],
      applications: [
        t("liquidRingVacuumPump.keyFeatures.eccentricRotor.applications.vacuumPackaging"),
        t("liquidRingVacuumPump.keyFeatures.eccentricRotor.applications.steamEjector"),
        t("liquidRingVacuumPump.keyFeatures.eccentricRotor.applications.condenserSystems"),
      ],
    },
    {
      icon: <FaChartLine className="text-blue-500 text-2xl" />,
      title: t("liquidRingVacuumPump.keyFeatures.highCapacity.title"),
      technicalSpecs: {
        maxCapacity: "Up To 30,000 M³/Hr",
        vacuumLevel: "Up to 90%",
        powerRange: "3.7 - 22 kW",
        pressureRange: "53 - 67 mbar(a)",
      },
      advantages: [
        t("liquidRingVacuumPump.keyFeatures.highCapacity.advantages.highVolume"),
        t("liquidRingVacuumPump.keyFeatures.highCapacity.advantages.consistentPerformance"),
        t("liquidRingVacuumPump.keyFeatures.highCapacity.advantages.energyEfficient"),
        t("liquidRingVacuumPump.keyFeatures.highCapacity.advantages.scalableSolutions"),
      ],
      applications: [
        t("liquidRingVacuumPump.keyFeatures.highCapacity.applications.largeScale"),
        t("liquidRingVacuumPump.keyFeatures.highCapacity.applications.processIndustries"),
        t("liquidRingVacuumPump.keyFeatures.highCapacity.applications.wasteTreatment"),
      ],
    },
    {
      icon: <FaGears className="text-blue-500 text-2xl" />,
      title: t("liquidRingVacuumPump.keyFeatures.versatileConfig.title"),
      technicalSpecs: {
        materials: "CI, SS304, SS316, SS316L",
        configuration: "Vertical/Horizontal",
        connections: "Flanged/Threaded",
        sealing: "Mechanical/Packing",
      },
      advantages: [
        t("liquidRingVacuumPump.keyFeatures.versatileConfig.advantages.corrosionResistance"),
        t("liquidRingVacuumPump.keyFeatures.versatileConfig.advantages.flexibleInstallation"),
        t("liquidRingVacuumPump.keyFeatures.versatileConfig.advantages.customConfigs"),
        t("liquidRingVacuumPump.keyFeatures.versatileConfig.advantages.industryCompliance"),
      ],
      applications: [
        t("liquidRingVacuumPump.keyFeatures.versatileConfig.applications.marine"),
        t("liquidRingVacuumPump.keyFeatures.versatileConfig.applications.pharmaceutical"),
        t("liquidRingVacuumPump.keyFeatures.versatileConfig.applications.petrochemical"),
      ],
    },
  ];

  const applications = [
    {
      title: t("liquidRingVacuumPump.applications.oilAndGas.title"),
      icon: <FaOilCan />,
      image: "🛢️",
      bg: "/images/Application_Images/Oil-and-Gas-Plants.png",
      benefits: [
        t("liquidRingVacuumPump.applications.oilAndGas.benefit1"),
        t("liquidRingVacuumPump.applications.oilAndGas.benefit2"),
        t("liquidRingVacuumPump.applications.oilAndGas.benefit3"),
      ],
    },
    {
      title: t("liquidRingVacuumPump.applications.pulpAndPaper.title"),
      icon: <FaBoxes />,
      image: "📄",
      bg: "/images/Application_Images/Pulp-&-Paper-Industries.png",
      benefits: [
        t("liquidRingVacuumPump.applications.pulpAndPaper.benefit1"),
        t("liquidRingVacuumPump.applications.pulpAndPaper.benefit2"),
        t("liquidRingVacuumPump.applications.pulpAndPaper.benefit3"),
        t("liquidRingVacuumPump.applications.pulpAndPaper.benefit4"),
      ],
    },
    {
      title: t("liquidRingVacuumPump.applications.powerPlants.title"),
      icon: <FaBolt />,
      image: "⚡",
      bg: "/images/Application_Images/Power-Plants.png",
      benefits: [
        t("liquidRingVacuumPump.applications.powerPlants.benefit1"),
        t("liquidRingVacuumPump.applications.powerPlants.benefit2"),
        t("liquidRingVacuumPump.applications.powerPlants.benefit3"),
      ],
    },
    {
      title: t("liquidRingVacuumPump.applications.chemicalPlants.title"),
      icon: <FaFlask />,
      image: "⚗️",
      bg: "/images/Application_Images/Chemical-&-Petrochemical.png",
      benefits: [
        t("liquidRingVacuumPump.applications.chemicalPlants.benefit1"),
        t("liquidRingVacuumPump.applications.chemicalPlants.benefit2"),
        t("liquidRingVacuumPump.applications.chemicalPlants.benefit3"),
      ],
    },
    {
      title: t("liquidRingVacuumPump.applications.textileIndustries.title"),
      icon: <FaLayerGroup />,
      image: "🧵",
      bg: "/images/Application_Images/Textile-Industries.png",
      benefits: [
        t("liquidRingVacuumPump.applications.textileIndustries.benefit1"),
        t("liquidRingVacuumPump.applications.textileIndustries.benefit2"),
        t("liquidRingVacuumPump.applications.textileIndustries.benefit3"),
      ],
    },
    {
      title: t("liquidRingVacuumPump.applications.jetAndSurface.title"),
      icon: <FaSnowflake />,
      image: "❄️",
      bg: "/images/Application_Images/Jet-and-Surface-Condensers.png",
      benefits: [
        t("liquidRingVacuumPump.applications.jetAndSurface.benefit1"),
        t("liquidRingVacuumPump.applications.jetAndSurface.benefit2"),
        t("liquidRingVacuumPump.applications.jetAndSurface.benefit3"),
      ],
    },
  ];

  const specifications = [
    {
      parameter: t("liquidRingVacuumPump.specifications.maxCapacity.param"),
      value: "Up To 30,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: t("liquidRingVacuumPump.specifications.vacuumLevel.param"),
      value: "Up to 90%",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: t("liquidRingVacuumPump.specifications.flowRate.param"),
      value: "75 – 725 m³/hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: t("liquidRingVacuumPump.specifications.motorSize.param"),
      value: "3.7 – 22 Kw",
      icon: <FaBolt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: t("liquidRingVacuumPump.advantages.highVacuum.title"),
      description: t("liquidRingVacuumPump.advantages.highVacuum.description"),
      icon: <FaTachometerAlt />,
      stat: "90%",
      unit: t("liquidRingVacuumPump.advantages.highVacuum.unit"),
    },
    {
      title: t("liquidRingVacuumPump.advantages.largeCapacity.title"),
      description: t("liquidRingVacuumPump.advantages.largeCapacity.description"),
      icon: <FaChartLine />,
      stat: "Up To 30,000",
      unit: "M³/Hr",
    },
    {
      title: t("liquidRingVacuumPump.advantages.reliableOperation.title"),
      description: t("liquidRingVacuumPump.advantages.reliableOperation.description"),
      icon: <FaShieldAlt />,
      stat: t("liquidRingVacuumPump.advantages.reliableOperation.stat"),
      unit: t("liquidRingVacuumPump.advantages.reliableOperation.unit"),
    },
    {
      title: t("liquidRingVacuumPump.advantages.versatileMaterials.title"),
      description: t("liquidRingVacuumPump.advantages.versatileMaterials.description"),
      icon: <FaTools />,
      stat: t("liquidRingVacuumPump.advantages.versatileMaterials.stat"),
      unit: t("liquidRingVacuumPump.advantages.versatileMaterials.unit"),
    },
  ];

  const workingPrinciple = {
    title: t("liquidRingVacuumPump.workingPrinciple.title"),
    description: t("liquidRingVacuumPump.workingPrinciple.description"),
    steps: [
      {
        step: "1",
        title: t("liquidRingVacuumPump.workingPrinciple.step1.title"),
        description: t("liquidRingVacuumPump.workingPrinciple.step1.description"),
      },
      {
        step: "2",
        title: t("liquidRingVacuumPump.workingPrinciple.step2.title"),
        description: t("liquidRingVacuumPump.workingPrinciple.step2.description"),
      },
      {
        step: "3",
        title: t("liquidRingVacuumPump.workingPrinciple.step3.title"),
        description: t("liquidRingVacuumPump.workingPrinciple.step3.description"),
      },
    ],
  };

  const productImageUrl = "/images/liquid-Ring-Vacuum-Pump.jpg";
  const systemComponentsImageUrl = "/images/liquid-Ring-Vacuum-Pump.png";

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
      <style>{customStyles}</style>
      {/* Hero Section */}
      <section className="min-h-[80vh] md:min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 md:mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in-up">
              <FaStar className="text-blue-400" />
              <span>{t("liquidRingVacuumPump.hero.badge")}</span>
            </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up animation-delay-200">
                {t("liquidRingVacuumPump.hero.title")}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  {t("liquidRingVacuumPump.hero.subtitle")}
                </span>
              </h1>

            <p className="text-xl leading-relaxed text-slate-300 mb-10 animate-fade-in-up animation-delay-400">
              {t("liquidRingVacuumPump.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-10 animate-fade-in-up animation-delay-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  Up To 30,000
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("liquidRingVacuumPump.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  {t("liquidRingVacuumPump.hero.vacuumValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">{t("liquidRingVacuumPump.hero.vacuum")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  {t("liquidRingVacuumPump.hero.technologyValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">{t("liquidRingVacuumPump.hero.technology")}</div>
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
                              <span>{t("liquidRingVacuumPump.hero.downloadBrochure")}</span>
                            </button>
                          </div>

              {/* Watch Demo Button */}
              <a
  href="#available-models"
  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
>
  {t("liquidRingVacuumPump.hero.ourProducts")}
</a>
            </div>
            <br />
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl"></div>
              <img
                src={productImageUrl}
                alt="Liquid Ring Vacuum Pump - Water Ring Technology"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute top-4 left-4 z-20 space-y-4 hidden lg:block">
                <div className="bg-white backdrop-blur-md rounded-full px-4 py-2 text-gray-600 text-sm font-medium border border-white/20 animate-float">
                  <FaWater className="inline mr-2" />
                  <span>{t("liquidRingVacuumPump.hero.liquidRing")}</span>
                </div>
                <div className="bg-white backdrop-blur-md rounded-full px-4 py-2 text-gray-600 text-sm font-medium border border-white/20 animate-float animation-delay-200">
                  <FaCircle className="inline mr-2" />
                  <span>{t("liquidRingVacuumPump.hero.eccentricDesign")}</span>
                </div>
                <div className="bg-white backdrop-blur-md rounded-full px-4 py-2 text-gray-600 text-sm font-medium border border-white/20 animate-float animation-delay-400">
                  <FaChartLine className="inline mr-2" />
                  <span>{t("liquidRingVacuumPump.hero.highCapacity")}</span>
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
                      <h3 className="text-2xl font-bold text-gray-800">{t("liquidRingVacuumPump.form.title")}</h3>
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
                          placeholder={t("liquidRingVacuumPump.form.firstName")}
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                          required
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^A-Za-z]/g, "")
                          }}
                        />
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder={t("liquidRingVacuumPump.form.lastName")}
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                          required
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^A-Za-z]/g, "")
                          }}
                        />
                      </div>
      
                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="email"
                          name="email"
                          placeholder={t("liquidRingVacuumPump.form.email")}
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                          required
                        />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder={t("liquidRingVacuumPump.form.phone")}
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                          required
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, "")
                          }}
                          minLength={7}
                          maxLength={15}
                        />
                      </div>
      
                      {/* Company Name */}
                      <input
                        type="text"
                        name="company"
                        placeholder={t("liquidRingVacuumPump.form.company")}
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
                        <label htmlFor="declaration" className="text-sm text-gray-600">
                          {t("liquidRingVacuumPump.form.declaration")}
                        </label>
                      </div>
      
                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <span>{t("liquidRingVacuumPump.form.sendEnquiry")}</span>
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
    <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
      {t("liquidRingVacuumPump.features.title")}
    </h2>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {[
        { 
          title: t("liquidRingVacuumPump.features.isothermal.title"), 
          desc: t("liquidRingVacuumPump.features.isothermal.desc"), 
          icon: "🌡️" 
        },
        { 
          title: t("liquidRingVacuumPump.features.quiet.title"), 
          desc: t("liquidRingVacuumPump.features.quiet.desc"), 
          icon: "🔇" 
        },
        { 
          title: t("liquidRingVacuumPump.features.corrosion.title"), 
          desc: t("liquidRingVacuumPump.features.corrosion.desc"), 
          icon: "🛡️" 
        },
        { 
          title: t("liquidRingVacuumPump.features.oilFree.title"), 
          desc: t("liquidRingVacuumPump.features.oilFree.desc"), 
          icon: "🌍" 
        },
        { 
          title: t("liquidRingVacuumPump.features.selfPriming.title"), 
          desc: t("liquidRingVacuumPump.features.selfPriming.desc"), 
          icon: "💧" 
        },
      ].map((f, i) => (
        <div key={i} className="flex items-start gap-4">
          {/* Icon Circle */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
            {f.icon}
          </div>
          {/* Text */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Benefits */}
<section className="py-7 bg-white" id="benefits">
<div className="max-w-7xl mx-auto px-4 md:px-8">
    <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-600 mb-4">
      {t("liquidRingVacuumPump.benefits.title")}
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {brochureBenefits.map((b, i) => (
        <div
          key={i}
          className="flex items-start gap-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm"
        >
          <FaCheckCircle className="text-emerald-500 mt-1 shrink-0" />
          <p className="text-slate-700 font-medium">{b}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Enhanced Features Section */}
      

      {/* Working Principle Section */}
      <section className="py-5 bg-white">
<div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("liquidRingVacuumPump.workingPrinciple.sectionTitle")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("liquidRingVacuumPump.workingPrinciple.sectionDescription")}
            </p>
          </div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm font-semibold text-blue-600 mb-8">
                <FaWater />
                <span>{t("liquidRingVacuumPump.workingPrinciple.badge")}</span>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                {workingPrinciple.title}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {workingPrinciple.description}
              </p>

              <div className="space-y-6">
                {workingPrinciple.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">
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
                alt="Liquid Ring Vacuum Pump Working Principle"
                className="w-full h-auto rounded-2xl shadow-xl cursor-pointer"
                onClick={() => openModal(systemComponentsImageUrl)}
              />
              {/* <div className="absolute top-4 right-4 space-y-2 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 text-xs font-medium text-slate-700 shadow-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full inline-block mr-2"></div>
                  Eccentric Rotor
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 text-xs font-medium text-slate-700 shadow-lg">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full inline-block mr-2"></div>
                  Liquid Ring Chamber
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 text-xs font-medium text-slate-700 shadow-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full inline-block mr-2"></div>
                  Fixed Radial Blades
                </div>
              </div> */}
            </div>
          </div>

          {/* Technology Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                <FaWater />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {t("liquidRingVacuumPump.techDetails.waterRing.title")}
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("liquidRingVacuumPump.techDetails.waterRing.description")}
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">{t("liquidRingVacuumPump.techDetails.waterRing.sealMedium")}</span>
                  <span className="font-medium text-slate-900">{t("liquidRingVacuumPump.techDetails.waterRing.sealMediumValue")}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">{t("liquidRingVacuumPump.techDetails.waterRing.operation")}</span>
                  <span className="font-medium text-slate-900">{t("liquidRingVacuumPump.techDetails.waterRing.operationValue")}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-blue-500 text-2xl mb-6">
                <FaChartLine />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {t("liquidRingVacuumPump.techDetails.highCapacity.title")}
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("liquidRingVacuumPump.techDetails.highCapacity.description")}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">
                    {t("liquidRingVacuumPump.techDetails.highCapacity.benefit1")}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">{t("liquidRingVacuumPump.techDetails.highCapacity.benefit2")}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-blue-500 text-2xl mb-6">
                <FaGears />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {t("liquidRingVacuumPump.techDetails.versatileConfig.title")}
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("liquidRingVacuumPump.techDetails.versatileConfig.description")}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">{t("liquidRingVacuumPump.techDetails.versatileConfig.benefit1")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">
                    {t("liquidRingVacuumPump.techDetails.versatileConfig.benefit2")}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-blue-500 text-2xl mb-6">
                <FaShieldAlt />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {t("liquidRingVacuumPump.techDetails.reliableOperation.title")}
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("liquidRingVacuumPump.techDetails.reliableOperation.description")}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">{t("liquidRingVacuumPump.techDetails.reliableOperation.benefit1")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">{t("liquidRingVacuumPump.techDetails.reliableOperation.benefit2")}</span>
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
            {t("liquidRingVacuumPump.construction.title")}
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
            {t("liquidRingVacuumPump.construction.description")}
          </p>
          <img
  src="/images/liquid-Ring-Vacuum-Pump_extra.png"
  alt="Rotary Twin Lobe Blower Construction"
  className="block mx-auto rounded-2xl shadow-xl w-full sm:w-auto max-w-[680px] md:max-w-[760px] object-contain"
  loading="lazy"
/>

        </div>
      </section>

      {/* Specifications Section */}

      {/* 🔹 Models & Technical Data Section */}
<section id="available-models" className="py-7 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="mx-auto max-w-2xl text-center mb-4">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">
        {t("liquidRingVacuumPump.models.title")}
      </h2>
      <p className="mt-2 text-gray-300">
        {t("liquidRingVacuumPump.models.subtitle")}
      </p>
    </div>

    <SeriesSlider
      title={t("liquidRingVacuumPump.models.doubleStage.title")}
      data={dataDoubleStageSVLD}
    />

    <SeriesSlider
      title={t("liquidRingVacuumPump.models.chemicalSingle.title")}
      data={dataChemicalSingleSVLP}
    />

    <SeriesSlider
      title={t("liquidRingVacuumPump.models.chemicalDouble.title")}
      data={dataChemicalDoubleSVLD}
    />

    <SeriesSlider
      title={t("liquidRingVacuumPump.models.closedCoupled.title")}
      data={dataClosedCoupledSVLC}
    />
  </div>
</section>


      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
  <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("liquidRingVacuumPump.applications.sectionTitle")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("liquidRingVacuumPump.applications.sectionSubtitle")}
            </p>
          </div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "border-blue-500 bg-blue-50 shadow-lg"
                      : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-2xl">{app.image}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {app.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                  <FaArrowRight
                    className={`text-xl transition-all duration-300 ${
                      selectedApplication === index
                        ? "text-blue-500 translate-x-1"
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
    src={applications[selectedApplication].bg || "/images/apps/applications-bg.jpg"}
    alt={applications[selectedApplication].title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gentle bottom gradient for contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/65 sm:from-transparent sm:via-black/20 sm:to-black/65" />

  {/* Small title badge (top-left) */}
 <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center gap-2">
  <span className="text-xl sm:text-2xl drop-shadow">{applications[selectedApplication].image}</span>
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
    {applications[selectedApplication].benefits.map((benefit, i) => (
      <div
        key={i}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/45 text-white ring-1 ring-white/10 shadow-md text-xs sm:text-sm whitespace-normal break-words"
      >
        <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
        <span className="font-medium">{benefit}</span>
      </div>
    ))}
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Advantages Section */}

      {/* CTA Section */}
      <section className="py-8 md:py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
  <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("liquidRingVacuumPump.cta.title")}
          </h2>
          <p className="text-xl text-slate-300 mb-5 leading-relaxed">
            {t("liquidRingVacuumPump.cta.description")}
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-md transition-all duration-300">
              <FaDownload />
              <span>Download Technical Brochure</span>
            </button>
          </div> */}

          <div className="flex justify-center gap-8 flex-wrap text-white">
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-2xl transition-colors duration-300"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-6">
              <div className="relative">
                <img
                  src={modalImage}
                  alt="Liquid Ring Vacuum Pump - Water Ring Technology - Expanded View"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {t("liquidRingVacuumPump.modal.title")}
                  </h3>
                  <p className="text-slate-600 mb-4">{t("liquidRingVacuumPump.modal.subtitle")}</p>
                  <div className="flex justify-center gap-6 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {t("liquidRingVacuumPump.modal.capacity")}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
                      {t("liquidRingVacuumPump.modal.vacuum")}
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                      {t("liquidRingVacuumPump.modal.operation")}
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

export default LiquidRingVaccumPumps;
