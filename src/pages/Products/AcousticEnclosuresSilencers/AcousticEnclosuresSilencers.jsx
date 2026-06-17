import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
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
  FaVolumeUp,
  FaBuilding,
  FaHardHat,
  FaCar,
  FaPlane,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const AcousticEnclosuresSilencers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaLayerGroup className="feature-icon" />,
      title: "Modular Structural Design",
      description:
        "Modular structural frames made out of steel plates & sheets with pre-fabricated sections for high performance acoustic panels",
      details:
        "Advanced modular construction allows for flexible installation and maintenance while ensuring optimal acoustic performance",
      benefit: "Flexible installation",
    },
    {
      icon: <FaVolumeDown className="feature-icon" />,
      title: "Custom Noise Level Design",
      description:
        "Enclosures designed acoustically and mechanically to achieve desired noise level specified by customer requirements",
      details:
        "Precision engineering ensures optimal noise reduction tailored to specific industrial applications and environments",
      benefit: "Targeted noise control",
    },
    {
      icon: <FaTools className="feature-icon" />,
      title: "Variable Panel Thickness",
      description:
        "Panel thickness engineered based on specific design requirements and noise reduction specifications",
      details:
        "Customizable panel thickness optimization ensures cost-effective solutions while meeting performance criteria",
      benefit: "Optimized performance",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "High Performance Materials",
      description:
        "Premium steel construction with specialized acoustic materials for maximum durability and noise reduction",
      details:
        "Industrial-grade materials ensure long-lasting performance in demanding environments with minimal maintenance",
      benefit: "Durable construction",
    },
  ];

  const applications = [
    {
      title: "Industrial Equipment",
      // description:
      //   "Noise control solutions for compressors, blowers, generators, and heavy industrial machinery",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Compressor enclosures",
        "Blower silencing",
        "Generator noise control",
      ],
    },
    {
      title: "Power Generation",
      // description:
      //   "Acoustic enclosures for power plants, turbines, and electrical equipment noise reduction",
      icon: <FaBolt />,
      image: "⚡",
      benefits: [
        "Turbine enclosures",
        "Transformer silencing",
        "Power plant noise control",
      ],
    },
    {
      title: "HVAC Systems",
      // description:
      //   "Noise reduction solutions for air handling units, cooling towers, and ventilation systems",
      icon: <FaWind />,
      image: "🌬️",
      benefits: ["AHU enclosures", "Cooling tower silencers", "Duct silencing"],
    },
    {
      title: "Manufacturing Plants",
      // description:
      //   "Comprehensive noise control for production facilities and manufacturing equipment",
      icon: <FaBuilding />,
      image: "🏢",
      benefits: [
        "Production line enclosures",
        "Equipment silencing",
        "Workplace noise control",
      ],
    },
    {
      title: "Automotive Industry",
      // description:
      //   "Specialized acoustic solutions for automotive manufacturing and testing facilities",
      icon: <FaCar />,
      image: "🚗",
      benefits: [
        "Engine test cells",
        "Manufacturing noise control",
        "Quality testing enclosures",
      ],
    },
    {
      title: "Aerospace Applications",
      // description:
      //   "Advanced noise control solutions for aerospace testing and manufacturing facilities",
      icon: <FaPlane />,
      image: "✈️",
      benefits: [
        "Engine testing enclosures",
        "Wind tunnel silencing",
        "Manufacturing noise control",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Noise Reduction",
      value: "Up to 40 dB",
      icon: <FaVolumeDown />,
      color: "#3b82f6",
    },
    {
      parameter: "Panel Thickness",
      value: "50-200 mm",
      icon: <FaLayerGroup />,
      color: "#10b981",
    },
    {
      parameter: "Material Grade",
      value: "Steel Plates & Sheets",
      icon: <FaShieldAlt />,
      color: "#f59e0b",
    },
    {
      parameter: "Design Type",
      value: "Modular Construction",
      icon: <FaCogs />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Effective Noise Reduction",
      description:
        "Achieves significant noise level reduction up to 40 dB with optimized acoustic panel design",
      icon: <FaVolumeDown />,
      stat: "40",
      unit: "dB Reduction",
    },
    {
      title: "Custom Engineering",
      description:
        "Tailored solutions designed to meet specific customer noise level requirements and specifications",
      icon: <FaTools />,
      stat: "Custom",
      unit: "Design",
    },
    {
      title: "Modular Construction",
      description:
        "Flexible modular design allows for easy installation, maintenance, and future modifications",
      icon: <FaLayerGroup />,
      stat: "Modular",
      unit: "System",
    },
    {
      title: "Industrial Grade",
      description:
        "Premium steel construction ensures durability and long-term performance in harsh environments",
      icon: <FaShieldAlt />,
      stat: "Industrial",
      unit: "Grade",
    },
  ];

  const systemComponents = [
    {
      component: "Structural Frame",
      description:
        "Modular steel frame providing structural support and stability",
      icon: <FaBuilding />,
    },
    {
      component: "Acoustic Panels",
      description:
        "High-performance acoustic panels with variable thickness design",
      icon: <FaLayerGroup />,
    },
    {
      component: "Steel Plates",
      description:
        "Premium grade steel plates for external enclosure construction",
      icon: <FaShieldAlt />,
    },
    {
      component: "Sound Absorbing Material",
      description:
        "Specialized acoustic materials for maximum noise absorption",
      icon: <FaVolumeDown />,
    },
    {
      component: "Ventilation System",
      description:
        "Integrated ventilation for equipment cooling and air circulation",
      icon: <FaWind />,
    },
    {
      component: "Access Panels",
      description:
        "Removable access panels for equipment maintenance and inspection",
      icon: <FaTools />,
    },
  ];

  const workingPrinciple = {
    title: "Acoustic Enclosure Technology",
    description:
      "Advanced acoustic enclosures utilizing modular structural frames with high-performance acoustic panels to achieve specified noise reduction levels through precision engineering and material selection.",
    steps: [
      {
        step: "1",
        title: "Sound Wave Interception",
        description:
          "Steel frame structure intercepts and contains sound waves generated by industrial equipment",
      },
      {
        step: "2",
        title: "Acoustic Panel Absorption",
        description:
          "High-performance acoustic panels absorb and dissipate sound energy through specialized materials",
      },
      {
        step: "3",
        title: "Noise Level Reduction",
        description:
          "Engineered design achieves specified noise reduction levels while maintaining equipment functionality",
      },
    ],
  };

  const productImageUrl = "/images/Enclosures-Silencers.webp";

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
        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <FaStar className="text-blue-400" />
              <span>Custom Acoustic Solutions</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Acoustic Enclosures
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                & Silencers
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              SWAM's Acoustic Enclosures comprise modular structural frames made
              of steel plates & sheets with pre-fabricated sections for high
              performance acoustic panels. Designed acoustically and
              mechanically to achieve desired noise levels specified by
              customers with variable panel thickness based on design
              requirements.
            </p>

            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  40 dB
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  Noise Reduction
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  Custom
                </div>
                <div className="text-sm text-slate-400 mt-1">Design</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  Modular
                </div>
                <div className="text-sm text-slate-400 mt-1">Construction</div>
              </div>
            </div>

            <div className="flex gap-4">
              {/* Download Brochure Button */}
              <a
                href="Insert Your File Path"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>Download Brochure</span>
              </a>

              {/* Watch Demo Button */}
              {/* <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold border border-white/20 rounded-full backdrop-blur-lg hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300">
                <FaPlay />
                <span>Watch Demo</span>
              </button> */}
            </div>

            <br />
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <img
                src={productImageUrl}
                alt="Acoustic Enclosures & Silencers - Custom Noise Control Solutions"
                className="relative w-full h-auto rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-white text-sm font-medium animate-bounce">
                  <FaVolumeDown className="text-blue-400" />
                  <span>Noise Control</span>
                </div>
                <div
                  className="absolute top-1/2 right-4 flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-white text-sm font-medium animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  <FaLayerGroup className="text-green-400" />
                  <span>Modular Design</span>
                </div>
                <div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-white text-sm font-medium animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <FaShieldAlt className="text-yellow-400" />
                  <span>Steel Construction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Advanced Acoustic Engineering Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive acoustic enclosures and silencers that
              deliver effective noise control through modular construction,
              custom design engineering, and high-performance acoustic materials
              for industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  activeFeature === index
                    ? "ring-2 ring-blue-500 shadow-2xl scale-105"
                    : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-blue-500 text-white"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="flex items-center gap-2 text-green-600">
                  <FaCheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{feature.benefit}</span>
                </div>
                {activeFeature === index && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 animate-fade-in">
                    <p className="text-gray-700 text-sm">{feature.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* System Components Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Acoustic Enclosure Components & Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding the comprehensive acoustic enclosure system
              components that work together to deliver effective noise reduction
              and industrial noise control solutions
            </p>
          </div>

          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <FaVolumeDown />
                  <span>Advanced Noise Control</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {workingPrinciple.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {workingPrinciple.description}
                </p>

                <div className="space-y-6">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Acoustic Enclosures Components and Technology"
                  className="w-full h-auto rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-500"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg border shadow-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mb-2"></div>
                    <div className="text-xs font-medium text-gray-700">
                      Acoustic Panels
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg border shadow-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mb-2"></div>
                    <div className="text-xs font-medium text-gray-700">
                      Steel Frame
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg border shadow-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mb-2"></div>
                    <div className="text-xs font-medium text-gray-700">
                      Ventilation System
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {systemComponents.map((component, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    {component.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {component.component}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Acoustic Enclosures & Silencers deliver exceptional noise
                reduction performance with proven specifications designed for
                demanding industrial applications requiring effective noise
                control and custom engineering solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                        style={{ backgroundColor: spec.color }}
                      >
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
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

              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Standard Enclosure Configuration
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Noise Reduction:</span>
                    <span className="font-semibold text-gray-900">
                      Up to 40 dB
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Panel Thickness:</span>
                    <span className="font-semibold text-gray-900">
                      50-200 mm (customizable)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Construction:</span>
                    <span className="font-semibold text-gray-900">
                      Steel Plates & Sheets
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Design Type:</span>
                    <span className="font-semibold text-gray-900">
                      Modular & Custom
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <FaCertificate className="text-blue-600" />
                  <span className="font-medium text-gray-700">
                    ISO 9001:2015
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <FaAward className="text-green-600" />
                  <span className="font-medium text-gray-700">
                    Custom Engineering
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <FaShieldAlt className="text-yellow-600" />
                  <span className="font-medium text-gray-700">
                    Industrial Grade
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <img
                  src={productImageUrl}
                  alt="Acoustic Enclosures & Silencers Technical Specifications"
                  className="w-full h-auto rounded-xl cursor-pointer hover:scale-105 transition-transform duration-500"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute top-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Noise Control
                    </div>
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Modular Design
                    </div>
                    <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Custom Engineering
                    </div>
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Steel Construction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industrial Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive acoustic enclosure solutions for diverse industrial
              applications requiring effective noise control and sound
              management across multiple sectors and environments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-1 space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-500 shadow-lg"
                      : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{app.image}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {app.title}
                      </h4>
                      <p className="text-sm text-gray-600">{app.description}</p>
                    </div>
                    <FaArrowRight
                      className={`transition-transform duration-300 ${
                        selectedApplication === index
                          ? "text-blue-500 transform rotate-90"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {applications[selectedApplication].title}
                </h3>
                <p className="text-gray-600">
                  {applications[selectedApplication].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="text-center">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <span>Learn More</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Additional Applications Grid */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              More Applications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <FaGasPump className="text-3xl text-blue-600 mb-3" />
                <span className="text-sm font-medium text-gray-700">
                  Pump Stations
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <FaBuilding className="text-3xl text-green-600 mb-3" />
                <span className="text-sm font-medium text-gray-700">
                  Commercial Buildings
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <FaHardHat className="text-3xl text-yellow-600 mb-3" />
                <span className="text-sm font-medium text-gray-700">
                  Construction Sites
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <FaWarehouse className="text-3xl text-purple-600 mb-3" />
                <span className="text-sm font-medium text-gray-700">
                  Industrial Facilities
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <FaRecycle className="text-3xl text-teal-600 mb-3" />
                <span className="text-sm font-medium text-gray-700">
                  Waste Management
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <FaGlobe className="text-3xl text-indigo-600 mb-3" />
                <span className="text-sm font-medium text-gray-700">
                  And Many More
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Acoustic Enclosures & Silencers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced acoustic engineering solutions delivering effective noise
              control through custom design, modular construction, and
              industrial-grade materials for optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  {advantage.icon}
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Salient Features Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Salient Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive features that make SWAM Acoustic Enclosures &
              Silencers the preferred choice for effective industrial noise
              control solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <FaLayerGroup />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Modular Structural Frame
              </h4>
              <p className="text-gray-600 text-sm">
                Advanced modular construction with steel plates & sheets for
                flexible installation and maintenance
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                <FaVolumeDown />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                High Performance Acoustic Panels
              </h4>
              <p className="text-gray-600 text-sm">
                Pre-fabricated acoustic panels designed for maximum noise
                reduction and sound absorption
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-4">
                <FaTools />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Custom Engineering Design
              </h4>
              <p className="text-gray-600 text-sm">
                Acoustically and mechanically designed to achieve desired noise
                levels specified by customers
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                <FaShieldAlt />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Variable Panel Thickness
              </h4>
              <p className="text-gray-600 text-sm">
                Panel thickness optimized based on specific design requirements
                and performance criteria
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <FaWind />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Integrated Ventilation
              </h4>
              <p className="text-gray-600 text-sm">
                Built-in ventilation systems for equipment cooling while
                maintaining acoustic performance
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                <FaWrench />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Easy Maintenance Access
              </h4>
              <p className="text-gray-600 text-sm">
                Removable access panels allow for convenient equipment
                maintenance and inspection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready for Effective Noise Control Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Connect with our acoustic engineering experts to discover how our
              custom Acoustic Enclosures & Silencers can enhance your facility
              with effective noise reduction, modular design, and
              industrial-grade construction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <FaPhone />
                <span>Get Expert Consultation</span>
              </button>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-semibold border-2 border-blue-400 rounded-lg hover:bg-blue-400 transform hover:-translate-y-1 transition-all duration-300">
                <FaDownload />
                <span>Download Product Brochure</span>
              </button>
            </div>

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
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-opacity-70 transition-colors duration-300"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-4">
              <div className="relative">
                <img
                  src={modalImage}
                  alt="Acoustic Enclosures & Silencers - Custom Noise Control Solutions - Expanded View"
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Acoustic Enclosures & Silencers
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Custom Noise Control Solutions
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Noise Reduction: Up to 40 dB
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Construction: Steel Modular
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      Design: Custom Engineering
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

export default AcousticEnclosuresSilencers;
