import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";

// Custom styles for animations not available in default TailwindCSS
const customStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in-out;
  }
  
  .bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-stops));
  }
`;
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
  FaShip,
  FaBuilding,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const ShellTubeHeatExchangers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaCertificate className="feature-icon" />,
      title: "TEMA & ASME Compliance",
      description:
        "Heat Exchangers fabricated as per TEMA / ASME unfired pressure vessels codes & ASHRAE standard",
      details:
        "Comprehensive compliance with international standards ensuring reliability, safety, and performance in demanding industrial applications",
      benefit: "Industry Standard Compliance",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Wide Variety of Sizes",
      description:
        "Built in a wide variety of sizes and capacities to meet diverse industrial requirements",
      details:
        "Flexible sizing options from small laboratory units to large industrial heat exchangers with capacity as per requirement",
      benefit: "Customizable Capacity",
    },
    {
      icon: <FaShip className="feature-icon" />,
      title: "Marine Applications",
      description:
        "Heat Exchangers for sea water marine application with specialized steel shells and corrosion resistance",
      details:
        "Specialized design for marine environments with enhanced corrosion resistance and durability for sea water applications",
      benefit: "Marine Grade Construction",
    },
    {
      icon: <FaTools className="feature-icon" />,
      title: "Custom Engineering",
      description:
        "Designed as per customer specific requirement with tailored engineering solutions",
      details:
        "Custom engineering and design services to meet unique process requirements and operating conditions",
      benefit: "Tailored Solutions",
    },
  ];

  const applications = [
    {
      title: "Petrochemical & Chemical Industries",
      // description:
      //   "Heat transfer in chemical reactions, distillation, and process heating/cooling applications and refineries within power plants",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: [
        "Chemical reactions heating/cooling",
        "Distillation processes",
        "Process fluid conditioning",
      ],
    },
    {
      title: "Power Generation",
      // description:
      //   "Steam generation, condensing, and thermal power plant heat recovery systems",
      icon: <FaBolt />,
      image: "⚡",
      benefits: ["Steam generation", "Condenser systems", "Heat recovery"],
    },
    {
      title: "Marine & Defense",
      // description:
      //   "Sea water cooling systems, ship engine cooling, and offshore platform applications",
      icon: <FaShip />,
      image: "🚢",
      benefits: [
        "Sea water cooling",
        "Engine cooling systems",
        "Offshore platforms",
      ],
    },
    {
      title: "HVAC Systems",
      // description:
      //   "Commercial and industrial HVAC heat exchange for heating and cooling applications",
      icon: <FaBuilding />,
      image: "🏢",
      benefits: [
        "Commercial HVAC",
        "Industrial cooling",
        "Heat recovery systems",
      ],
    },
    {
      title: "Food & Beverage",
      // description:
      //   "Food processing, pasteurization, and beverage production heat transfer",
      icon: <FaSeedling />,
      image: "🍃",
      benefits: ["Food processing", "Pasteurization", "Beverage production"],
    },
  ];

  const specifications = [
    {
      parameter: "Design Standards",
      value: "TEMA / ASME / ASHRAE",
      icon: <FaCertificate />,
      color: "#3b82f6",
    },
    {
      parameter: "Capacity Range",
      value: "As Per Requirement",
      icon: <FaChartLine />,
      color: "#10b981",
    },
    {
      parameter: "Material Options",
      value: "Carbon Steel / Stainless Steel",
      icon: <FaWrench />,
      color: "#f59e0b",
    },
    {
      parameter: "Applications",
      value: "Marine & Industrial",
      icon: <FaShip />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Industry Compliance",
      description:
        "Fabricated as per TEMA / ASME unfired pressure vessels codes ensuring safety and reliability",
      icon: <FaCertificate />,
      stat: "100%",
      unit: "Compliant",
    },
    {
      title: "Custom Design",
      description:
        "Designed as per customer specific requirements with tailored engineering solutions",
      icon: <FaTools />,
      stat: "Custom",
      unit: "Engineering",
    },
    {
      title: "Marine Grade",
      description:
        "Specialized construction for sea water marine applications with enhanced corrosion resistance",
      icon: <FaShip />,
      stat: "Marine",
      unit: "Certified",
    },
    {
      title: "Wide Range",
      description:
        "Built in wide variety of sizes and capacities to meet diverse industrial requirements",
      icon: <FaChartLine />,
      stat: "Variable",
      unit: "Capacity",
    },
  ];

  const systemComponents = [
    {
      component: "Shell Assembly",
      description: "Outer shell housing containing tube bundle and fluid flow",
      icon: <FaCube />,
    },
    {
      component: "Tube Bundle",
      description:
        "Heat transfer tubes arranged for optimal thermal performance",
      icon: <FaLayerGroup />,
    },
    {
      component: "Tube Sheets",
      description:
        "Tube support and sealing plates ensuring proper tube positioning",
      icon: <FaTable />,
    },
    {
      component: "Baffles",
      description:
        "Flow direction plates for enhanced heat transfer efficiency",
      icon: <FaWind />,
    },
    {
      component: "Nozzles & Connections",
      description:
        "Inlet and outlet connections for shell and tube side fluids",
      icon: <FaPlug />,
    },
    {
      component: "Support Structure",
      description: "Mounting and support systems for proper installation",
      icon: <FaWarehouse />,
    },
  ];

  const workingPrinciple = {
    title: "Shell & Tube Heat Exchanger Technology",
    description:
      "Shell & tube heat exchangers transfer heat between two fluids using a bundle of tubes inside a cylindrical shell. One fluid flows through the tubes while the other flows around the tubes within the shell, enabling efficient heat transfer.",
    steps: [
      {
        step: "1",
        title: "Fluid Separation",
        description:
          "Two fluids are kept separate with one flowing through tubes and other in shell space",
      },
      {
        step: "2",
        title: "Heat Transfer",
        description:
          "Heat transfers through tube walls from hot fluid to cold fluid efficiently",
      },
      {
        step: "3",
        title: "Flow Optimization",
        description:
          "Baffles direct shell-side flow for maximum heat transfer efficiency and performance",
      },
    ],
  };

  const productImageUrl = "/images/shell-and-tube-type-heat-exchanger.webp";

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
      <section className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <FaStar className="text-blue-400" />
              <span>TEMA & ASME Compliant</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Shell & Tube
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Heat Exchangers
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300 mb-10">
              SWAM manufactures Shell & tube type Heat Exchangers in a wide
              variety of sizes and capacities. Fabricated as per TEMA / ASME
              unfired pressure vessels codes & ASHRAE standard, with specialized
              designs for marine applications and custom engineering as per
              customer requirements.
            </p>

            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  TEMA
                </div>
                <div className="text-sm text-slate-400 mt-1">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  ASME
                </div>
                <div className="text-sm text-slate-400 mt-1">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  Custom
                </div>
                <div className="text-sm text-slate-400 mt-1">Design</div>
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
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold border border-white/20 rounded-full backdrop-blur-lg hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent rounded-full animate-pulse"></div>
              <img
                src={productImageUrl}
                alt="Shell & Tube Heat Exchangers - TEMA & ASME Compliant"
                className="max-w-80 max-h-80 lg:max-w-96 lg:max-h-96 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300 z-10 cursor-pointer"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute top-16 left-8 lg:top-20 lg:left-12 bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                  <FaCertificate className="inline mr-2" />
                  <span>TEMA Compliant</span>
                </div>
                <div
                  className="absolute top-32 right-8 lg:top-40 lg:right-12 bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <FaShip className="inline mr-2" />
                  <span>Marine Grade</span>
                </div>
                <div
                  className="absolute bottom-16 left-16 lg:bottom-20 lg:left-20 bg-orange-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <FaTools className="inline mr-2" />
                  <span>Custom Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industry-Leading Heat Exchange Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive Shell & Tube Heat Exchangers that
              deliver superior thermal performance with TEMA/ASME compliance,
              custom engineering, and specialized designs for marine and
              industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  activeFeature === index
                    ? "border-blue-500 shadow-blue-100"
                    : "border-transparent hover:border-blue-200"
                } group`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-500"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                  <FaCheckCircle className="text-green-500" />
                  <span>{feature.benefit}</span>
                </div>
                {activeFeature === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {feature.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* System Components Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Heat Exchanger Components & Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Understanding the key components of Shell & Tube Heat Exchangers
              that work together to deliver efficient heat transfer performance
              for diverse industrial applications
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <FaThermometerHalf />
                  <span>Heat Transfer Technology</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {workingPrinciple.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {workingPrinciple.description}
                </p>

                <div className="space-y-6">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full flex items-center justify-center">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Shell & Tube Heat Exchanger Components and Technology"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-8 left-8 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full absolute -left-1 top-1/2 transform -translate-y-1/2"></div>
                    <span className="ml-2">Tube Bundle</span>
                  </div>
                  <div className="absolute top-1/2 right-8 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
                    <span className="mr-2">Shell Housing</span>
                  </div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                    <span>Flow Connections</span>
                  </div>
                </div>
              </div>
            </div>

            {/* System Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemComponents.map((component, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 hover:bg-white"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    {component.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {component.component}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
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
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Shell & Tube Heat Exchangers deliver exceptional thermal
                performance with proven specifications designed for demanding
                applications requiring TEMA/ASME compliance and custom
                engineering solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4"
                    style={{ borderLeftColor: spec.color }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl" style={{ color: spec.color }}>
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-700">
                          {spec.parameter}
                        </h4>
                        <div className="text-lg font-bold text-slate-800">
                          {spec.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Standard Design Features
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-slate-600 font-medium">
                      Design Standards:
                    </span>
                    <span className="text-slate-800 font-semibold">
                      TEMA / ASME / ASHRAE
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-slate-600 font-medium">
                      Capacity:
                    </span>
                    <span className="text-slate-800 font-semibold">
                      As Per Requirement
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-slate-600 font-medium">
                      Construction:
                    </span>
                    <span className="text-slate-800 font-semibold">
                      Wide Variety of Sizes
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 font-medium">
                      Applications:
                    </span>
                    <span className="text-slate-800 font-semibold">
                      Marine & Industrial
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <FaCertificate />
                  <span>TEMA Compliant</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <FaAward />
                  <span>ASME Certified</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <FaShieldAlt />
                  <span>ASHRAE Standard</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-xl p-6 shadow-lg">
                <img
                  src={productImageUrl}
                  alt="Shell & Tube Heat Exchangers Technical Specifications"
                  className="w-full rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-blue-50 text-blue-700 text-center py-2 rounded-lg font-semibold text-sm">
                    TEMA Compliant
                  </div>
                  <div className="bg-green-50 text-green-700 text-center py-2 rounded-lg font-semibold text-sm">
                    ASME Certified
                  </div>
                  <div className="bg-orange-50 text-orange-700 text-center py-2 rounded-lg font-semibold text-sm">
                    Custom Design
                  </div>
                  <div className="bg-purple-50 text-purple-700 text-center py-2 rounded-lg font-semibold text-sm">
                    Marine Grade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industrial Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive heat exchange solutions for diverse industrial
              applications requiring efficient thermal performance and reliable
              operation across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "border-blue-500 bg-blue-50 shadow-lg"
                      : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{app.image}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-1">
                        {app.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                    <FaArrowRight
                      className={`text-gray-400 transition-colors duration-300 ${
                        selectedApplication === index ? "text-blue-500" : ""
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: clean, readable image card */}
<div className="relative rounded-3xl overflow-hidden shadow-xl h-[340px] md:h-[420px]">
  {/* Big full-bleed image */}
  <img
    src={applications[selectedApplication].bg || "/images/apps/applications-bg.jpg"}
    alt={applications[selectedApplication].title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gentle bottom gradient for contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/65" />

  {/* Small title badge (top-left) */}
  <div className="absolute top-4 left-4 flex items-center gap-2">
    <span className="text-2xl drop-shadow">{applications[selectedApplication].image}</span>
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
    {applications[selectedApplication].benefits.map((benefit, i) => (
      <div
        key={i}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/45 text-white ring-1 ring-white/10 shadow-md"
      >
        <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
        <span className="font-medium">{benefit}</span>
      </div>
    ))}
  </div>
</div>

          </div>

          {/* Additional Applications Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              More Applications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300">
                <FaFire className="text-2xl text-red-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-slate-700">
                  Process Heating
                </span>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300">
                <FaSnowflake className="text-2xl text-blue-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-slate-700">
                  Process Cooling
                </span>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300">
                <FaWater className="text-2xl text-cyan-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-slate-700">
                  Sea Water Systems
                </span>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300">
                <FaIndustry className="text-2xl text-gray-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-slate-700">
                  Industrial Processing
                </span>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300">
                <FaRecycle className="text-2xl text-green-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-slate-700">
                  Heat Recovery
                </span>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300">
                <FaGlobe className="text-2xl text-purple-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-slate-700">
                  And Many More
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Shell & Tube Heat Exchangers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Industry-leading heat exchange solutions delivering superior
              thermal performance with TEMA/ASME compliance and custom
              engineering capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  {advantage.icon}
                </div>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
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

      {/* Salient Features Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Salient Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive features that make SWAM Shell & Tube Heat Exchangers
              the preferred choice for industrial heat transfer applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-4">
                <FaCertificate />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">
                TEMA & ASME Compliance
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fabricated as per TEMA / ASME unfired pressure vessels codes &
                ASHRAE standard ensuring safety and reliability
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mb-4">
                <FaChartLine />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">
                Wide Variety of Sizes
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Built in wide variety of sizes and capacities to meet diverse
                industrial heat transfer requirements
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-cyan-500 text-white rounded-lg flex items-center justify-center mb-4">
                <FaShip />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">
                Marine Applications
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Specialized heat exchangers for sea water marine applications
                with enhanced corrosion resistance
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center mb-4">
                <FaTools />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">
                Custom Engineering
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Designed as per customer specific requirements with tailored
                engineering solutions
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center mb-4">
                <FaThermometerHalf />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">
                Efficient Heat Transfer
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Optimized tube bundle and baffle design for maximum thermal
                efficiency and performance
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center mb-4">
                <FaShieldAlt />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">
                Robust Construction
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Durable construction with quality materials ensuring long
                service life and minimal maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Superior Heat Transfer Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Connect with our engineering experts to discover how our Shell &
            Tube Heat Exchangers can enhance your processes with TEMA/ASME
            compliance, custom design capabilities, and proven thermal
            performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-3 bg-blue-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-400 transition-colors duration-300 shadow-lg border border-blue-400">
              <FaDownload />
              <span>Download Heat Exchanger Brochure</span>
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
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <img
                  src={modalImage}
                  alt="Shell & Tube Heat Exchangers - TEMA & ASME Compliant - Expanded View"
                  className="max-w-lg mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800">
                    Shell & Tube Heat Exchangers
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold">
                    TEMA & ASME Compliant
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">
                        Standards: TEMA / ASME / ASHRAE
                      </span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">
                        Capacity: As Per Requirement
                      </span>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg sm:col-span-2">
                      <span className="text-sm font-medium text-slate-700">
                        Applications: Marine & Industrial
                      </span>
                    </div>
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

export default ShellTubeHeatExchangers;
