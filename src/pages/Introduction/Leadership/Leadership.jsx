import React, { useState, useMemo } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import { useTranslation } from "../../../contexts/TranslationContext";
import {
  FaUserTie,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaGlobeAmericas,
  FaIndustry,
  FaCogs,
  FaUsers,
  FaRocket,
  FaStar,
  FaTrophy,
  FaMedal,
  FaCertificate,
  FaBuilding,
  FaShieldAlt,
  FaHeart,
  FaEye,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineAcademicCap } from "react-icons/hi";
import { MdEngineering, MdBusinessCenter, MdLeaderboard } from "react-icons/md";

const Leadership = () => {
  const { t } = useTranslation();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleContactUs = () => {
    // Add your contact navigation logic
    window.location.href = "/contact-us";
  };

  const onSearchChange = (val) => {
    setSearchQuery(val);

    const q = val.trim().toLowerCase();
    if (!q) {
      setSearchResults([]);
      return;
    }

    // Simple, case-insensitive contains match (limit to 12)
    const results = products
      .filter((p) => p.name.toLowerCase().includes(q))
      .slice(0, 12);

    setSearchResults(results);
  };

  // Custom animations
  const customStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes float-delayed {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
      50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
    }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
    .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
    .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
  `;

  // Leadership team data
  const leadershipTeam = useMemo(
    () => [
      {
        name: t("leadership.team.skGambhir.name"),
        position: t("leadership.team.skGambhir.position"),
        image: "/new_images/S.K..jpg",
        experience: t("leadership.team.skGambhir.experience"),
        education: t("leadership.team.skGambhir.education"),
        achievements: [
          t("leadership.team.skGambhir.achievement1"),
          t("leadership.team.skGambhir.achievement2"),
          t("leadership.team.skGambhir.achievement3"),
          t("leadership.team.skGambhir.achievement4"),
          t("leadership.team.skGambhir.achievement5"),
        ],
        expertise: [
          t("leadership.team.skGambhir.expertise1"),
          t("leadership.team.skGambhir.expertise2"),
          t("leadership.team.skGambhir.expertise3"),
        ],
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: t("leadership.team.abhishekGambhir.name"),
        position: t("leadership.team.abhishekGambhir.position"),
        image: "/new_images/ABHISHEK.png",
        experience: t("leadership.team.abhishekGambhir.experience"),
        education: t("leadership.team.abhishekGambhir.education"),
        achievements: [
          t("leadership.team.abhishekGambhir.achievement1"),
          t("leadership.team.abhishekGambhir.achievement2"),
          t("leadership.team.abhishekGambhir.achievement3"),
          t("leadership.team.abhishekGambhir.achievement4"),
          t("leadership.team.abhishekGambhir.achievement5"),
        ],
        expertise: [
          t("leadership.team.abhishekGambhir.expertise1"),
          t("leadership.team.abhishekGambhir.expertise2"),
          t("leadership.team.abhishekGambhir.expertise3"),
        ],
        color: "from-green-500 to-emerald-500",
      },
    ],
    [t]
  );

  // Leadership values
  const leadershipValues = useMemo(
    () => [
      {
        icon: FaEye,
        title: t("leadership.values.visionaryLeadership.title"),
        description: t("leadership.values.visionaryLeadership.description"),
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: FaHeart,
        title: t("leadership.values.peopleCentric.title"),
        description: t("leadership.values.peopleCentric.description"),
        color: "from-pink-500 to-rose-500",
      },
      {
        icon: FaShieldAlt,
        title: t("leadership.values.integrityEthics.title"),
        description: t("leadership.values.integrityEthics.description"),
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: FaRocket,
        title: t("leadership.values.innovationDrive.title"),
        description: t("leadership.values.innovationDrive.description"),
        color: "from-purple-500 to-violet-500",
      },
    ],
    [t]
  );

  // Leadership milestones
  const milestones = useMemo(
    () => [
      {
        year: "1978",
        title: t("leadership.milestones.1978.title"),
        description: t("leadership.milestones.1978.description"),
        icon: FaBuilding,
        color: "from-blue-500 to-cyan-500",
      },
      {
        year: "1985",
        title: t("leadership.milestones.1985.title"),
        description: t("leadership.milestones.1985.description"),
        icon: FaGlobeAmericas,
        color: "from-green-500 to-emerald-500",
      },
      {
        year: "1995",
        title: t("leadership.milestones.1995.title"),
        description: t("leadership.milestones.1995.description"),
        icon: FaCogs,
        color: "from-purple-500 to-violet-500",
      },
      {
        year: "2005",
        title: t("leadership.milestones.2005.title"),
        description: t("leadership.milestones.2005.description"),
        icon: FaCertificate,
        color: "from-orange-500 to-red-500",
      },
      {
        year: "2015",
        title: t("leadership.milestones.2015.title"),
        description: t("leadership.milestones.2015.description"),
        icon: FaLightbulb,
        color: "from-pink-500 to-rose-500",
      },
      {
        year: "2023",
        title: t("leadership.milestones.2023.title"),
        description: t("leadership.milestones.2023.description"),
        icon: FaRocket,
        color: "from-indigo-500 to-blue-500",
      },
    ],
    [t]
  );
  const products = [
    { name: "Rotary Twin Lobe Blowers", link: "/rotary-piston-blowers" },
    { name: "Rotary Tri Lobe Blowers", link: "/rotarytrilobeblowers" },
    { name: "Process Gas Blowers", link: "/process-gas-blowers" },
    { name: "Turbo Blowers", link: "/turbo-blowers" },
    {
      name: "Super Helical Hybrid Blower",
      link: "/super-helical-hybrid-blower",
    },
    { name: "Truck Blowers", link: "/truck-blowers" },
    { name: "Bio Gas Compressors", link: "/bio-gas-blowers-compressors" },
    { name: "Dry Vacuum Pumps", link: "/air-injection" },
    {
      name: "Rotary Sliding Vane Compressors",
      link: "/rotary-sliding-vane-compressors",
    },
    { name: "Centrifugal Fans & Blowers", link: "/centrifugal-fans-blowers" },
    { name: "SR Series Blowers", link: "/sr-series-blowers" },
    { name: "Dry Screw Vacuum Pump", link: "/dry-screw-vacuum-pump" },
    { name: "Liquid Ring Vacuum Pumps", link: "/liquid-ring-vacuum-pumps" },
    { name: "Oil Vane Vacuum Pump", link: "/oil-vane-vacuum-pump-2" },
    { name: "Mechanical Vacuum Boosters", link: "/mechanical-vacuum-boosters" },
    { name: "MVR Blowers", link: "/mvr-blowers" },
    {
      name: "Vacuum Systems and Packages",
      link: "/vacuum-systems-and-packages",
    },
    { name: "Condenser Exhausters", link: "/condenser-exhausters" },
    { name: "Claw Vacuum", link: "/clawvacuum" },
    { name: "Liquid ring compressors", link: "/liquidringcompressors" },
    { name: "Screw blower", link: "/screwblower" },
  ];

  return (
    <MainTemplate>
      <style>{customStyles}</style>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-float-delayed"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-400 rounded-full opacity-20 animate-float-slow"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-10">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600 rounded-full mt-10 hover:bg-blue-500 hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer group animate-pulse-glow">
                  <FaUserTie className="text-4xl group-hover:text-yellow-300 transition-colors duration-300" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight hover:scale-105 transition-transform duration-300">
                {t("leadership.hero.title")}{" "}
                <span className="text-blue-300 hover:text-cyan-300 transition-colors duration-300">
                  {t("leadership.hero.titleHighlight")}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed hover:text-blue-100 transition-colors duration-300">
                {t("leadership.hero.description")}
              </p>
              <div className="flex justify-center space-x-4">
                <HiOutlineSparkles className="text-3xl text-blue-300 animate-pulse hover:text-yellow-300 hover:scale-125 transition-all duration-300 cursor-pointer" />
                <MdLeaderboard className="text-3xl text-purple-300 animate-pulse hover:text-yellow-300 hover:scale-125 transition-all duration-300 cursor-pointer" />
                <FaStar className="text-3xl text-cyan-300 animate-pulse hover:text-yellow-300 hover:scale-125 transition-all duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Values Section */}
        <div className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t("leadership.valuesSection.title")}{" "}
                <span className="text-blue-600">
                  {t("leadership.valuesSection.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("leadership.valuesSection.subtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 border border-gray-100 group hover:-translate-y-4 hover:scale-105 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`p-4 bg-gradient-to-r ${value.color} rounded-full group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-lg transition-all duration-500`}
                      >
                        <value.icon className="text-2xl text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {value.description}
                    </p>
                    <div
                      className={`mt-6 h-1 bg-gradient-to-r ${value.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="py-5 mb-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t("leadership.teamSection.title")}{" "}
                <span className="text-blue-600">
                  {t("leadership.teamSection.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("leadership.teamSection.subtitle")}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              {leadershipTeam.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                        <div className="relative">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-32 h-32 rounded-full object-cover shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                          />
                          <div
                            className={`absolute -bottom-2 -right-2 p-3 bg-gradient-to-r ${leader.color} rounded-full shadow-lg`}
                          >
                            <FaAward className="text-white text-lg" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {leader.name}
                          </h3>
                          <p className="text-lg text-blue-600 font-semibold mb-3">
                            {leader.position}
                          </p>
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <FaBriefcase className="text-gray-500" />
                              <span className="text-sm text-gray-600">
                                {leader.experience}{" "}
                                {t("leadership.team.experience")}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FaGraduationCap className="text-gray-500" />
                              <span className="text-sm text-gray-600">
                                {t("leadership.team.qualified")}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">
                            {leader.education}
                          </p>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <FaTrophy className="text-yellow-500 mr-2" />
                          {t("leadership.team.achievements")}
                        </h4>
                        <ul className="space-y-2">
                          {leader.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-sm text-gray-600"
                            >
                              <FaStar className="text-blue-500 mt-1 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expertise */}
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <MdEngineering className="text-green-500 mr-2" />
                          {t("leadership.team.expertise")}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((expertise, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 bg-gradient-to-r ${leader.color} text-white text-xs rounded-full font-medium`}
                            >
                              {expertise}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Journey Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-start mx-20">
          {milestones /* or milestones.slice(0,5) */
            .map((m, i) => (
              <div key={i} className="relative flex flex-col items-center">
                {/* Year label above rail */}
                <div className="absolute -top-10 text-sm md:text-base font-semibold text-slate-900">
                  {m.year}
                </div>

                {/* Dot on the rail */}
                <div className="absolute -top-[10px] w-5 h-5 rounded-full bg-blue-600 border-4 border-blue-300 shadow ring-4 ring-blue-900/25"></div>

                {/* Card */}
                <div className="w-full mt-10 mb-10 bg-white/95 text-slate-900 rounded-2xl shadow-lg p-6 min-h-[150px] md:min-h-[150px] lg:min-h-[220px] flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 grid place-items-center rounded-xl text-white bg-gradient-to-r ${m.color}`}
                    >
                      <m.icon className="text-xl" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">{m.title}</h3>
                  </div>

                  {/* pushes description to the bottom so every card feels balanced */}
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-auto">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Leadership Impact Stats */}
        {/* <div className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Leadership <span className="text-blue-600">Impact</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable outcomes of our leadership excellence
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group hover:transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:shadow-2xl group-hover:from-purple-500 group-hover:to-pink-600 transition-all duration-500 group-hover:rotate-12">
                    <FaUsers className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
                  500+
                </h3>
                <p className="text-gray-600 font-medium group-hover:text-gray-800 group-hover:font-semibold transition-all duration-300">
                  Team Members
                </p>
                <div className="mt-3 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <div className="text-center group hover:transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full group-hover:shadow-2xl group-hover:from-blue-500 group-hover:to-cyan-600 transition-all duration-500 group-hover:rotate-12">
                    <FaGlobeAmericas className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300">
                  25+
                </h3>
                <p className="text-gray-600 font-medium group-hover:text-gray-800 group-hover:font-semibold transition-all duration-300">
                  Countries Served
                </p>
                <div className="mt-3 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <div className="text-center group hover:transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full group-hover:shadow-2xl group-hover:from-pink-500 group-hover:to-rose-600 transition-all duration-500 group-hover:rotate-12">
                    <FaAward className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300">
                  25+
                </h3>
                <p className="text-gray-600 font-medium group-hover:text-gray-800 group-hover:font-semibold transition-all duration-300">
                  Industry Awards
                </p>
                <div className="mt-3 h-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <div className="text-center group hover:transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full group-hover:shadow-2xl group-hover:from-yellow-500 group-hover:to-orange-600 transition-all duration-500 group-hover:rotate-12">
                    <FaRocket className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300">
                  100+
                </h3>
                <p className="text-gray-600 font-medium group-hover:text-gray-800 group-hover:font-semibold transition-all duration-300">
                  Innovations
                </p>
                <div className="mt-3 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Call to Action Section */}
        {/* <div className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to <span className="text-blue-600">Connect</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Our leadership team is committed to building lasting
                partnerships and driving mutual success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-700 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <FaHandshake className="text-lg" />
                  <span>Schedule a Meeting</span>
                </button>
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <FaEnvelope className="text-lg" />
                  <span>Contact Leadership</span>
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="py-10 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t("leadership.cta.title")}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t("leadership.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={openSearch}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {t("leadership.cta.exploreProducts")}
              </button>
              <button
                onClick={handleContactUs}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {t("leadership.cta.contactUs")}
              </button>
            </div>
          </div>
        </div>

        {isSearchOpen && (
          <div
            className="fixed inset-0 z-[10001] bg-black/50 backdrop-blur-sm flex items-start md:items-center justify-center p-4"
            onClick={closeSearch}
          >
            <div
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <h3 className="text-lg font-bold text-gray-800">
                  {t("leadership.search.title")}
                </h3>
                <button
                  onClick={closeSearch}
                  className="p-2 rounded hover:bg-gray-100"
                  aria-label={t("leadership.search.close")}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") return closeSearch();
                      if (e.key === "Enter" && searchResults[0]) {
                        window.location.href = searchResults[0].link;
                        closeSearch();
                      }
                    }}
                    type="text"
                    placeholder={t("leadership.search.placeholder")}
                    className="w-full outline-none py-1"
                  />
                </div>

                <div className="mt-3 max-h-80 overflow-auto divide-y">
                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-4 text-sm text-gray-500">
                      {t("leadership.search.noResults")}
                    </div>
                  )}
                  {searchResults.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        window.location.href = item.link;
                        closeSearch();
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-semibold text-gray-800">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">{item.link}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
      </div>
    </MainTemplate>
  );
};

export default Leadership;
