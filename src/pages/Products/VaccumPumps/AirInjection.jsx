import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
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
  FaAtom,
  FaFlask,
  FaFire,
  FaWind,
  FaOilCan,
  FaTruck,
  FaSnowflake,
  FaFilter,
  FaTimes,
} from "react-icons/fa";

const AirInjection = () => {
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
    link.href = "/images/Catalogues/Bro. Dry Vacuum Pump (MHV Series).pdf"; // Replace with your PDF path
    link.download = "Bro. Dry Vacuum Pump (MHV Series).pdf";
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
      icon: <FaSnowflake className="text-2xl text-white" />,
      title: t("airInjection.features.completelyDry"),
      description: t("airInjection.features.completelyDryDesc"),
      details:
        "No oil or liquid contact with the air stream, making it ideal for applications requiring clean air or gas handling",
      benefit: t("airInjection.features.completelyDryBenefit"),
    },
    {
      icon: <FaFilter className="text-2xl text-white" />,
      title: t("airInjection.features.secondarySuction"),
      description: t("airInjection.features.secondarySuctionDesc"),
      details:
        "MHV series with secondary cooling develops vacuum up to 8000 mmwg with superior thermal management",
      benefit: t("airInjection.features.secondarySuctionBenefit"),
    },
    {
      icon: <FaTachometerAlt className="text-2xl text-white" />,
      title: t("airInjection.features.highVacuum"),
      description: t("airInjection.features.highVacuumDesc"),
      details:
        "Achieves vacuum levels up to 8000 mmwg (85%) ideal for degassing, exhausting and pneumatic conveying",
      benefit: t("airInjection.features.highVacuumBenefit"),
    },
    {
      icon: <FaTruck className="text-2xl text-white" />,
      title: t("airInjection.features.dualApplication"),
      description: t("airInjection.features.dualApplicationDesc"),
      details:
        "Can be configured for stationary vacuum applications or mobile truck-mounted blower systems",
      benefit: t("airInjection.features.dualApplicationBenefit"),
    },
  ];

  const models = [
    {
      model: "40 MHV",
      rows: [
        {
          speed: 2985,
          data: [
            { vacuum: 500, Q: 1806, BKW: 30.6 },
            { vacuum: 600, Q: 1788, BKW: 37.4 },
            { vacuum: 700, Q: 1763, BKW: 42.9 },
            { vacuum: 800, Q: 1745, BKW: 48.5 },
          ],
        },
        {
          speed: 2460,
          data: [
            { vacuum: 500, Q: 1170, BKW: 20.7 },
            { vacuum: 600, Q: 1158, BKW: 26.2 },
            { vacuum: 700, Q: 1134, BKW: 31.6 },
            { vacuum: 800, Q: 1120, BKW: 35.9 },
          ],
        },
        {
          speed: 1460,
          data: [
            { vacuum: 500, Q: 768, BKW: 14.4 },
            { vacuum: 600, Q: 750, BKW: 17.3 },
            { vacuum: 700, Q: 726, BKW: 20.1 },
            { vacuum: 800, Q: 708, BKW: 22.9 },
          ],
        },
      ],
    },

    {
      model: "75 MHV",
      rows: [
        {
          speed: 2250,
          data: [
            { vacuum: 500, Q: 2065, BKW: 35.8 },
            { vacuum: 600, Q: 2030, BKW: 43.0 },
            { vacuum: 700, Q: 2005, BKW: 50.0 },
            { vacuum: 800, Q: 1975, BKW: 58.2 },
          ],
        },
        {
          speed: 1850,
          data: [
            { vacuum: 500, Q: 1638, BKW: 28.9 },
            { vacuum: 600, Q: 1608, BKW: 34.5 },
            { vacuum: 700, Q: 1581, BKW: 40.2 },
            { vacuum: 800, Q: 1554, BKW: 45.7 },
          ],
        },
        {
          speed: 1450,
          data: [
            { vacuum: 500, Q: 1271, BKW: 21.6 },
            { vacuum: 600, Q: 1241, BKW: 26.1 },
            { vacuum: 700, Q: 1214, BKW: 30.0 },
            { vacuum: 800, Q: null, BKW: null }, // not in table
          ],
        },
      ],
    },

    {
      model: "116 MHV",
      rows: [
        {
          speed: 1800,
          data: [
            { vacuum: 500, Q: 3275, BKW: 56.4 },
            { vacuum: 600, Q: 3220, BKW: 67.6 },
            { vacuum: 700, Q: 3166, BKW: 77.9 },
            { vacuum: 800, Q: 3108, BKW: 88.2 },
          ],
        },
        {
          speed: 1450,
          data: [
            { vacuum: 500, Q: 2630, BKW: 45.5 },
            { vacuum: 600, Q: 2582, BKW: 54.1 },
            { vacuum: 700, Q: 2538, BKW: 62.8 },
            { vacuum: 800, Q: 2492, BKW: 71.1 },
          ],
        },
        {
          speed: 1200,
          data: [
            { vacuum: 500, Q: 2090, BKW: 36.2 },
            { vacuum: 600, Q: 2043, BKW: 44.0 },
            { vacuum: 700, Q: 1998, BKW: 51.0 },
            { vacuum: 800, Q: 1952, BKW: 58.0 },
          ],
        },
      ],
    },

    {
      model: "170 MHV",
      rows: [
        {
          speed: 1450,
          data: [
            { vacuum: 500, Q: 6653, BKW: 113.4 },
            { vacuum: 600, Q: 6538, BKW: 135.0 },
            { vacuum: 700, Q: 6423, BKW: 156.7 },
            { vacuum: 800, Q: 6308, BKW: 179.0 },
          ],
        },
        {
          speed: 1200,
          data: [
            { vacuum: 500, Q: 5174, BKW: 90.7 },
            { vacuum: 600, Q: 5089, BKW: 108.2 },
            { vacuum: 700, Q: 4959, BKW: 125.4 },
            { vacuum: 800, Q: 4869, BKW: 143.0 },
          ],
        },
        {
          speed: 985,
          data: [
            { vacuum: 500, Q: 4137, BKW: 75.0 },
            { vacuum: 600, Q: 4022, BKW: 89.0 },
            { vacuum: 700, Q: 3922, BKW: 103.0 },
            { vacuum: 800, Q: 3832, BKW: 117.0 },
          ],
        },
      ],
    },

    {
      model: "235 MHV",
      rows: [
        {
          speed: 1350,
          data: [
            { vacuum: 500, Q: 12000, BKW: 202.0 },
            { vacuum: 600, Q: 11795, BKW: 239.0 },
            { vacuum: 700, Q: 11665, BKW: 277.0 },
            { vacuum: 800, Q: 11565, BKW: 314.0 },
          ],
        },
        {
          speed: 1150,
          data: [
            { vacuum: 500, Q: 10210, BKW: 172.0 },
            { vacuum: 600, Q: 10040, BKW: 203.0 },
            { vacuum: 700, Q: 9930, BKW: 231.0 },
            { vacuum: 800, Q: 9850, BKW: 266.0 },
          ],
        },
        {
          speed: 985,
          data: [
            { vacuum: 500, Q: 8460, BKW: 143.0 },
            { vacuum: 600, Q: 8280, BKW: 170.0 },
            { vacuum: 700, Q: 8160, BKW: 198.0 },
            { vacuum: 800, Q: 8040, BKW: 225.0 },
          ],
        },
      ],
    },
  ];

  const applications = [
    {
      title: t("airInjection.applications.degassing"),
      icon: <FaFlask />,
      image: "🧪",
      bg: "/images/Application_Images/Degassing-Applications.png",
      benefits: [
        t("airInjection.applications.degassingBenefit1"),
        t("airInjection.applications.degassingBenefit2"),
        t("airInjection.applications.degassingBenefit3"),
      ],
    },
    {
      title: t("airInjection.applications.pneumatic"),
      icon: <FaWind />,
      image: "📦",
      bg: "/images/Application_Images/Pneumatic-Conveying.png",
      benefits: [
        t("airInjection.applications.pneumaticBenefit1"),
        t("airInjection.applications.pneumaticBenefit2"),
        t("airInjection.applications.pneumaticBenefit3"),
      ],
    },
    {
      title: t("airInjection.applications.exhausting"),
      icon: <FaIndustry />,
      image: "🏭",
      bg: "/images/Application_Images/Exhausting-Systems.png",
      benefits: [
        t("airInjection.applications.exhaustingBenefit1"),
        t("airInjection.applications.exhaustingBenefit2"),
        t("airInjection.applications.exhaustingBenefit3"),
      ],
    },
    {
      title: t("airInjection.applications.truckBlower"),
      icon: <FaTruck />,
      image: "🚛",
      bg: "/images/Application_Images/Truck-Blower-Systems.png",
      benefits: [
        t("airInjection.applications.truckBlowerBenefit1"),
        t("airInjection.applications.truckBlowerBenefit2"),
        t("airInjection.applications.truckBlowerBenefit3"),
      ],
    },
    {
      title: t("airInjection.applications.processVacuum"),
      icon: <FaCogs />,
      image: "⚙️",
      bg: "/images/Application_Images/Vacuum-Drying.png",
      benefits: [
        t("airInjection.applications.processVacuumBenefit1"),
        t("airInjection.applications.processVacuumBenefit2"),
        t("airInjection.applications.processVacuumBenefit3"),
      ],
    },
    {
      title: t("airInjection.applications.environmental"),
      icon: <FaLeaf />,
      image: "🌱",
      bg: "/images/Application_Images/Environmental-Systems.png",
      benefits: [
        t("airInjection.applications.environmentalBenefit1"),
        t("airInjection.applications.environmentalBenefit2"),
        t("airInjection.applications.environmentalBenefit3"),
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
      parameter: "Vacuum Level",
      value: "Up to 85% (8000 mmwg)",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Operation Type",
      value: "Completely Dry",
      icon: <FaSnowflake />,
      color: "#f59e0b",
    },
    {
      parameter: "Cooling System",
      value: "Secondary Suction",
      icon: <FaFilter />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Proven Technology",
      description: "Decades of experience in Dry Vacuum Pump manufacturing",
      icon: <FaAward />,
      stat: "40+",
      unit: "Years",
    },
    {
      title: "Dry Operation",
      description: "Completely oil-free and dry vacuum generation",
      icon: <FaSnowflake />,
      stat: "100%",
      unit: "Oil-Free",
    },
    {
      title: "High Vacuum",
      description:
        "Superior vacuum levels up to 85% for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "8000",
      unit: "mmwg",
    },
    {
      title: "Versatile Design",
      description: "Dual-purpose design for vacuum and blower applications",
      icon: <FaCogs />,
      stat: "2-in-1",
      unit: "Design",
    },
  ];

  // Using the specified image path
  const productImageUrl = "/images/VacuumPumpsWithSecondarySuction.png";

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  function ModelTable({ block }) {
    return (
      <div className="overflow-x-auto rounded-2xl shadow ring-1 ring-slate-200 bg-white">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-slate-900">
              <th className="bg-slate-100 px-4 py-3 text-left font-bold w-40">
                MODEL
              </th>
              <th className="bg-slate-100 px-4 py-3 text-left font-bold w-28">
                SPEED
              </th>
              <th colSpan={2} className="bg-blue-100 px-4 py-3 font-bold">
                500
              </th>
              <th colSpan={2} className="bg-emerald-100 px-4 py-3 font-bold">
                600
              </th>
              <th colSpan={2} className="bg-amber-100 px-4 py-3 font-bold">
                700
              </th>
              <th colSpan={2} className="bg-lime-100 px-4 py-3 font-bold">
                800
              </th>
            </tr>
            <tr className="text-slate-700">
              <th className="bg-slate-50 px-4 py-2 text-left">{block.model}</th>
              <th className="bg-slate-50 px-4 py-2 text-left">rpm</th>
              <th className="bg-blue-50 px-3 py-2">Q – m³/hr</th>
              <th className="bg-blue-50 px-3 py-2">BKW</th>
              <th className="bg-emerald-50 px-3 py-2">Q – m³/hr</th>
              <th className="bg-emerald-50 px-3 py-2">BKW</th>
              <th className="bg-amber-50 px-3 py-2">Q – m³/hr</th>
              <th className="bg-amber-50 px-3 py-2">BKW</th>
              <th className="bg-lime-50 px-3 py-2">Q – m³/hr</th>
              <th className="bg-lime-50 px-3 py-2">BKW</th>
            </tr>
          </thead>

          <tbody className="[&>tr:nth-child(even)]:bg-slate-50">
            {(block.rows || []).map((r, idx) => {
              // build a quick lookup like { v500: {Q,BKW}, v600: {...}, ... }
              const vac = (r.data || []).reduce((acc, d) => {
                if (d && d.vacuum) acc[`v${d.vacuum}`] = d;
                return acc;
              }, {});
              const fmt = (v) => (v ?? v === 0 ? v : "—"); // show "—" for null/undefined

              return (
                <tr key={idx} className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-400 italic">&nbsp;</td>
                  <td className="px-4 py-3">{r.speed}</td>

                  <td className="px-3 py-3 text-right">{fmt(vac.v500?.Q)}</td>
                  <td className="px-3 py-3 text-right">{fmt(vac.v500?.BKW)}</td>

                  <td className="px-3 py-3 text-right">{fmt(vac.v600?.Q)}</td>
                  <td className="px-3 py-3 text-right">{fmt(vac.v600?.BKW)}</td>

                  <td className="px-3 py-3 text-right">{fmt(vac.v700?.Q)}</td>
                  <td className="px-3 py-3 text-right">{fmt(vac.v700?.BKW)}</td>

                  <td className="px-3 py-3 text-right">{fmt(vac.v800?.Q)}</td>
                  <td className="px-3 py-3 text-right">{fmt(vac.v800?.BKW)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="p-3 text-xs text-slate-600 flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-2">
            <i className="w-3 h-3 bg-blue-200 rounded-sm" />
            500 mbar
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="w-3 h-3 bg-emerald-200 rounded-sm" />
            600 mbar
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="w-3 h-3 bg-amber-200 rounded-sm" />
            700 mbar
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="w-3 h-3 bg-lime-200 rounded-sm" />
            800 mbar
          </span>
        </div>
      </div>
    );
  }

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="min-h-[80vh] md:min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        />

        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          <div className="text-white">
            <br />

            <div className="inline-flex mt-20 md:mt-20 items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fadeInUp">
              <FaFilter className="text-blue-400" />
              <span>{t("airInjection.hero.badge")}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fadeInUp animation-delay-200">
              {t("airInjection.hero.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("airInjection.hero.subtitle")}
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300 mb-10 animate-fadeInUp animation-delay-400">
              {t("airInjection.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-10 animate-fadeInUp animation-delay-600">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 leading-none">
                  {t("airInjection.hero.capacityValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("airInjection.hero.capacity")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 leading-none">
                  {t("airInjection.hero.vacuumValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("airInjection.hero.vacuum")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 leading-none">
                  {t("airInjection.hero.dryValue")}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {t("airInjection.hero.dry")}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                <span>{t("airInjection.hero.downloadBrochure")}</span>
              </button>
            </div>
            <br />
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl transform scale-110"></div>
              <img
                src={productImageUrl}
                alt="Vacuum Pump with Secondary Suction"
                className="relative w-72 sm:w-96 md:w-full max-w-lg h-auto rounded-3xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[15%] -right-[10%] bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg animate-pulse">
                  <FaSnowflake />
                  <span>{t("airInjection.hero.dryOperation")}</span>
                </div>
                <div className="absolute top-[50%] -left-[15%] bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg animate-pulse animation-delay-500">
                  <FaFilter />
                  <span>{t("airInjection.hero.secondaryCooling")}</span>
                </div>
                <div className="absolute bottom-[25%] -right-[5%] bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg animate-pulse animation-delay-1000">
                  <FaTruck />
                  <span>{t("airInjection.hero.dualPurpose")}</span>
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
                  {t("airInjection.form.title")}
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
                    placeholder={t("airInjection.form.firstName")}
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
                    placeholder={t("airInjection.form.lastName")}
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
                    placeholder={t("airInjection.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("airInjection.form.phone")}
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
                  placeholder={t("airInjection.form.company")}
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
                    {t("airInjection.form.declaration")}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("airInjection.form.sendEnquiry")}</span>
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

      {/* Series Types Section */}
      <section id="models" className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 text-center mb-4 md:mb-6">
            {t("airInjection.models.title")}
          </h2>

          {/* widen on mobile so the scroll area goes edge-to-edge */}
          <div className="relative -mx-4 md:mx-0">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                1024: { slidesPerView: 1 }, // keep one table per slide
              }}
              className="pb-10"
            >
              {models.map((m) => (
                <SwiperSlide key={m.model}>
                  {/* scroll shell for the table */}
                  <div
                    className="overflow-x-auto rounded-2xl border border-slate-200 bg-white"
                    onTouchStart={(e) => e.stopPropagation()} // allow inner horizontal scroll
                    onTouchMove={(e) => e.stopPropagation()}
                  >
                    {/* force a horizontal min width; table will expand to it */}
                    <div className="min-w-[900px] md:min-w-0">
                      <ModelTable block={m} />
                    </div>
                  </div>

                  {/* subtle edge fade + hint on mobile */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent md:hidden" />
                  <p className="md:hidden text-center text-xs text-slate-500 mt-2">
                    {t("airInjection.models.swipeHint")}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl py-1 lg:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("airInjection.features.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("airInjection.features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center transition-all duration-300 border border-slate-200 relative overflow-hidden cursor-pointer ${
                  activeFeature === index
                    ? "transform -translate-y-2 shadow-2xl border-blue-600"
                    : "hover:transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 transition-opacity duration-300 ${
                    activeFeature === index ? "opacity-5" : "opacity-0"
                  }`}
                />

                <div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 ${
                    activeFeature === index
                      ? "transform scale-110 rotate-6"
                      : ""
                  }`}
                >
                  {feature.icon}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-green-600 font-semibold text-sm">
                    <FaCheckCircle />
                    <span>{feature.benefit}</span>
                  </div>
                  {activeFeature === index && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-sm text-gray-500">{feature.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}

      {/* Applications Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("airInjection.applications.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("airInjection.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-500 shadow-lg transform translate-x-4"
                      : "bg-gray-50 border-gray-200 hover:border-blue-300 hover:shadow-md hover:translate-x-4"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="w-16 h-16 bg-white text-3xl rounded-xl flex items-center justify-center shadow">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {app.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{app.description}</p>
                  </div>
                  <FaArrowRight
                    className={`text-blue-500 transition-transform duration-300 ${
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
      <section className="py-8 md:py-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("airInjection.cta.title")}
          </h2>
          <p className="text-lg leading-relaxed mb-5 opacity-90">
            {t("airInjection.cta.subtitle")}
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              <FaPhone />
              <span>Get Technical Consultation</span>
            </button>
            <button className="inline-flex items-center gap-2 bg-blue-700 border border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300">
              <FaDownload />
              <span>Download Vacuum Pump Brochure</span>
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
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-2xl font-bold text-white hover:bg-white/30 transition-colors duration-300 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <img
                  src={modalImage}
                  alt="Vacuum Pump with Secondary Suction - Expanded View"
                  className="w-full lg:w-1/2 h-auto rounded-2xl shadow-lg"
                />
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {t("airInjection.modal.title")}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t("airInjection.modal.subtitle")}
                  </p>
                  <div className="space-y-2">
                    <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium">
                      {t("airInjection.modal.capacity")}
                    </div>
                    <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                      {t("airInjection.modal.vacuum")}
                    </div>
                    <div className="bg-orange-50 text-orange-800 px-4 py-2 rounded-lg text-sm font-medium">
                      {t("airInjection.modal.operation")}
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

export default AirInjection;
