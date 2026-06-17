import React, { useState, useEffect } from "react";
import QuickActions from "../../components/QuickActions";
import introVideo from "/images/intro-video.mp4";
import MainTemplate from "../../components/Templates/MainTemplates";
import Select from "react-select";
import { FaTruckLoading, FaChartBar } from "react-icons/fa";
import { TbTopologyStar3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import BackgroundSlider from "../../components/BackgroundSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "animate.css";

import { FaFileAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import {
  FaCertificate,
  FaAward,
  FaShieldAlt,
  FaCheckCircle,
  FaIndustry,
  FaGlobe,
  FaUserTie,
  FaClipboardCheck,
  FaDownload,
  FaEye,
  FaStar,
  FaHandshake,
  FaLeaf,
  FaHardHat,
  FaTimes,
  FaRocket,
} from "react-icons/fa";

const HomeV2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const clients = [
    { src: "/images/Client_Logo/1.png", alt: "NTPC" },
    { src: "/images/Client_Logo/2.png", alt: "Reliance" },
    { src: "/images/Client_Logo/3.png", alt: "Polyplex" },
    { src: "/images/Client_Logo/4.png", alt: "Qualical" },
    { src: "/images/Client_Logo/5.png", alt: "Samsung" },
    { src: "/images/Client_Logo/6.png", alt: "Thermax" },
    { src: "/images/Client_Logo/7.png", alt: "Reliance" },
    { src: "/images/Client_Logo/8.png", alt: "Polyplex" },
    { src: "/images/Client_Logo/9.png", alt: "Qualical" },
    { src: "/images/Client_Logo/10.png", alt: "Samsung" },
    { src: "/images/Client_Logo/11.png", alt: "Thermax" },
    { src: "/images/Client_Logo/15.png", alt: "Samsung" },
    { src: "/images/Client_Logo/16.png", alt: "Thermax" },
    { src: "/images/Client_Logo/17.png", alt: "Reliance" },
    { src: "/images/Client_Logo/18.png", alt: "Polyplex" },
    { src: "/images/Client_Logo/19.jpg", alt: "Qualical" },
    { src: "/images/Client_Logo/20.png", alt: "Samsung" },
    { src: "/images/Client_Logo/21.png", alt: "Thermax" },
    { src: "/images/Client_Logo/22.png", alt: "Reliance" },
    { src: "/images/Client_Logo/23.png", alt: "Polyplex" },
    { src: "/images/Client_Logo/24.png", alt: "Qualical" },
    { src: "/images/Client_Logo/25.png", alt: "Samsung" },
    { src: "/images/Client_Logo/26.png", alt: "Thermax" },
    { src: "/images/Client_Logo/27.png", alt: "Reliance" },
    { src: "/images/Client_Logo/28.png", alt: "Polyplex" },
    { src: "/images/Client_Logo/29.png", alt: "Qualical" },
    { src: "/images/Client_Logo/30.png", alt: "Samsung" },
    { src: "/images/Client_Logo/31.png", alt: "Thermax" },
    { src: "/images/Client_Logo/32.png", alt: "Reliance" },
    { src: "/images/Client_Logo/33.png", alt: "Polyplex" },
    { src: "/images/Client_Logo/34.png", alt: "Qualical" },

    // Add the rest logos here...
  ];

  const clientReviews = [
    {
      id: 1,
      name: "Aarti Drugs Limited",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMJafyPOl-lwlrKGOkoGFOfzY9yaa1ChphA&s",
      testimonial:
        "We have procured Dry Screw Vacuum Pump Model SVP 310-l from SWAM PNEUMATICS PVT. LTD.",
      reviewDate: "06/08/2020",
    },
    {
      id: 2,
      name: "Heavy Water Plant",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrD8DFINnpLd-lmQ28HhFbVCRoIFReYxSBqQ&s",
      testimonial:
        "We have procured Liquid Ring Vacuum Pump Model SVLD 250-02 from SWAM PNEUMATICS PVT. LTD.",
      reviewDate: "21/07/2020",
    },
    {
      id: 3,
      name: "HENI DRUGS PVT LTD",
      image:
        "https://cdn3.vectorstock.com/i/1000x1000/81/82/customer-review-star-icon-vector-20968182.jpg",
      testimonial:
        "We have procured Liquid Ring Vacuum Pump/Dry Screw Vacuum Pump/Mechanical Vacuum Model VBS 141 and SVP 160 from SWAM PNEUMATICS PVT. LTD.",
      reviewDate: "13/03/2019",
    },
  ];

  // Merge all product arrays
  const allProducts = [
    { name: "Rotary Twin & Tri Lobe Blowers", link: "/rotary-piston-blowers" },
    { name: "Process Gas Blowers", link: "/process-gas-blowers" },
    { name: "Turbo Blowers", link: "/turbo-blowers" },
    {
      name: "Super Helical Hybrid Blower",
      link: "/super-helical-hybrid-blower",
    },
    { name: "Truck Blowers", link: "/truck-blowers" },
    { name: "Bio Gas Blowers", link: "/bio-gas-blowers-compressors" },
    { name: "Air Injection (Vacuum Pumps)", link: "/air-injection" },
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
    {
      name: "Shell & Tube Heat Exchangers",
      link: "/shell-and-tube-type-heat-exchangers",
    },
    {
      name: "Acoustic Enclosures & Silencers",
      link: "/acoustic-enclosures-and-silencers",
    },
  ];

  // ✅ Single function for searching
  const handleSearch = (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    const results = allProducts.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const [showBlowerModal, setShowBlowerModal] = useState(false);
  const productCards = [
    {
      title: "Blower Division",
      description: "High performance blowers...",
      link: "#",
    },
    {
      title: "Vacuum Division",
      description: "Reliable vacuum technology...",
      link: "/vacuum",
    },
    {
      title: "Compressor Division",
      description: "Efficient compressors...",
      link: "/other-products-projects",
    },
  ];

  const blowerProducts = [
    { name: "Rotary Twin & Tri Lobe Blowers", link: "/rotary-piston-blowers" },
    { name: "Process Gas Blowers", link: "/process-gas-blowers" },
    { name: "Turbo Blowers", link: "/turbo-blowers" },
    {
      name: "Super Helical Hybrid Blower",
      link: "/super-helical-hybrid-blower",
    },
    { name: "Truck Blowers", link: "/truck-blowers" },
    { name: "Bio Gas Blowers", link: "/bio-gas-blowers-compressors" },
    { name: "Vacuum Pumps", link: "/air-injection" },
  ];

  const blowerImages = [
    "/images/rotary-twin.jpg",
    "/images/Process-Gas-BlowersGas-Boosters.jpg",
    "/images/Turbo_Blowers.jpg",
    "/images/SuperHelicalHybridBlower.jpg",
    "/images/Truck-Blowers.png",
    "/images/sR-Series-Blowers.jpg",
    "/images/swam-centrifugal-fans-and-blowers.jpg",
    "/images/VacuumPumpsWithSecondarySuction.png",
  ];
  const vaccumImages = [
    "/images/dry-Screw-Vacuum-Pump.png",
    "/images/liquid-Ring-Vacuum-Pump.jpg",
    "/images/oil-Vane-Vacuum-Pump.jpg",
    "/images/Mechanical-Vacuum.jpg",
    "/images/Vacuum-Systems-Packages.png",
    "/images/MVR-Blowers.jpg",
    "/images/Condenser-Exhausters.jpg",
  ];
  const otherImages = [
    "/images/bio-Gas-Blowers-Compressors.jpg",
    "/images/rotary-Sliding-Vane-Compressors.jpg",
  ];

  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [activeStep, setActiveStep] = useState(1);
  const [manufacturingSteps, setManufacturingSteps] = useState([]);
  const [AboutUs, setAboutUs] = useState([]);
  const [aboutSection, setAboutSection] = useState([]);
  const [productLaunchedSection, setProductLaunchedSection] = useState();
  const [projectsAndCompanyGrowthSection, setProjectsAndCompanyGrowthSection] =
    useState();
  const [performanceMetricsSection, setPerformanceMetricsSection] = useState();
  const [ourClientsSection, setOurClientsSection] = useState();
  const [contactUsSection, setContactUsSection] = useState();
  const [filterCategory, setFilterCategory] = useState(null);
  const [showBlowerMenu, setShowBlowerMenu] = useState(false);

  const openModal = (imageSrc, title) => {
    setModalImage(imageSrc);
    setModalTitle(title);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle("");
  };

  useEffect(() => {
    fetch("/data/home.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data loaded successfully:", data);
        setManufacturingSteps(data.manufacturingSteps);
        setAboutUs(data.AboutUs);
        setAboutSection(data.aboutSection);
        setProductLaunchedSection(data.productLaunchedSection);
        setProjectsAndCompanyGrowthSection(
          data.projectsAndCompanyGrowthSection
        );
        setPerformanceMetricsSection(data.performanceMetricsSection);
        setOurClientsSection(data.ourClientsSection);
        setContactUsSection(data.contactUsSection);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <MainTemplate>
      {/* Hero Section with Professional Video Overlay */}
      <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Professional Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Engineering
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Excellence
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-gray-200 mt-2">
                  Since 1978
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
                Leading manufacturer of industrial blowers, vacuum pumps, and
                compressors with over four decades of proven expertise and
                innovation.
              </p>
            </div>

            <div className="flex flex-col  sm:flex-row gap-4 justify-center items-center">
              <div className="p-7">&nbsp;</div>
              {/* <button
                onClick={() => setShowForm(true)}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-3"
              >
                <span>Get Quote</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button> */}

              {/* <Link
                to="/about"
                className="group border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/10 flex items-center gap-3"
              >
                <span>Learn More</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link> */}
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">45+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Professional Floating Action Bar */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl border border-gray-200/50 flex flex-col space-y-2 p-3">
          {/* Open Form Modal */}
          <button
            onClick={() => setShowForm(true)}
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            title="Get Quote"
          >
            <FaFileAlt className="text-xl" />
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Get Quote
            </div>
          </button>

          {/* Phone Call */}
          <a
            href="tel:+919910302163"
            className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            title="Call Us"
          >
            <FaPhoneAlt className="text-xl" />
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Call Us
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@swamatics.com"
            className="group relative bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            title="Email Us"
          >
            <FaEnvelope className="text-xl" />
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Email Us
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919910302163"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            title="WhatsApp"
          >
            <FaWhatsapp className="text-xl" />
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              WhatsApp
            </div>
          </a>

          {/* New version V2 */}
          {/* <a
            href="/new"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            title="New Version"
          >
            <FaRocket className="text-xl" />
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              New Version
            </div>
          </a> */}

          
          <Link
                      className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      to="/"
                      title="New Version"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="text-xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
                      </svg>
                      {/* New Version */}
                    </Link>
        </div>
      </div>

      {/* Professional Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-4xl relative shadow-2xl overflow-y-auto max-h-[90vh] border border-gray-200">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200"
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

            {/* Heading */}
            <div className="mb-8 pr-12">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Quick Enquiry
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Get Your Quote Today
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tell us about your project and we'll get back to you with a
                tailored solution within 24 hours.
              </p>
            </div>

            {/* ✅ Full Contact Form with Validation */}
            <form
              className="space-y-6"
              onSubmit={(e) => {
                if (!document.getElementById("declaration").checked) {
                  e.preventDefault();
                  alert("Please accept the declaration before submitting.");
                }
              }}
            >
              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
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
                  placeholder="Doe"
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
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="9876543210"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
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
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              {/* Service Select */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                  required
                >
                  <option value="">Select a Product</option>
                  <option value="Rotary Twin & Tri Lobe Blowers">
                    Rotary Twin & Tri Lobe Blowers
                  </option>
                  <option value="Mobile Applications">
                    Mobile Applications
                  </option>
                  <option value="Super Helical Hybrid Blowers">
                    Super Helical Hybrid Blower
                  </option>
                  <option value="Truck Blowers">Truck Blowers</option>
                  <option value="Bio Gas Blowers">Bio Gas Blowers</option>
                  <option value="Air Injection">Air Injection</option>
                  <option value="Rotary Sliding Vane Compressors">
                    Rotary Sliding Vane Compressors
                  </option>
                  <option value="Centrifugal Fans & Blowers">
                    Centrifugal Fans & Blowers
                  </option>
                  <option value="SR Series Blowers">SR Series Blowers</option>
                  <option value="Dry Screw Vacuum Pump">
                    Dry Screw Vacuum Pump
                  </option>
                  <option value="Liquid Ring Vacuum Pumps">
                    Liquid Ring Vacuum Pumps
                  </option>
                  <option value="Oil Vane Vacuum Pump">
                    Oil Vane Vacuum Pump
                  </option>
                  <option value="Mechanical Vacuum Boosters">
                    Mechanical Vacuum Boosters
                  </option>
                  <option value="MVR Blowers">MVR Blowers</option>
                  <option value="Vacuum Systems and Packages">
                    Vacuum Systems and Packages
                  </option>
                  <option value="Condenser Exhausters">
                    Condenser Exhausters
                  </option>
                  <option value="Shell & Tube Heat Exchangers">
                    Shell & Tube Heat Exchangers
                  </option>
                  <option value="Acoustic Enclosures & Silencers">
                    Acoustic Enclosures & Silencers
                  </option>
                </select>
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>

              {/* Declaration Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="declaration"
                  className="mr-2"
                  required
                />
                <label htmlFor="declaration" className="text-sm text-gray-600">
                  I hereby declare that the information provided is true and
                  correct.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Send Enquiry</span>
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
      )}

      {/* 🔍 Search Bar */}

      {/* Vision Section - Professional Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                {AboutUs[0]?.image ? (
                  <img
                    src={AboutUs[0]?.image}
                    alt="Swam Vision"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      console.error(
                        "Failed to load vision image:",
                        AboutUs[0]?.image
                      );
                      e.target.src = "/images/our-vision.png";
                    }}
                    onLoad={() => {
                      console.log(
                        "Vision image loaded successfully:",
                        AboutUs[0]?.image
                      );
                    }}
                  />
                ) : (
                  <div className="w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-gray-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-medium">
                        Loading image...
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Our Vision
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {AboutUs[0]?.title || "Pioneering Industrial Excellence"}
                </h2>

                <div className="space-y-4">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {AboutUs[0]?.description1 ||
                      "We envision a future where industrial efficiency meets environmental responsibility, creating sustainable solutions that power progress across global industries."}
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {AboutUs[0]?.description2 ||
                      "Our commitment to innovation and quality drives us to deliver cutting-edge technology that transforms how industries operate, ensuring reliability and performance in every solution."}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/about"
                  className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300"
                >
                  <span>Discover Our Story</span>
                  <svg
                    className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    45+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Years of Excellence
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Global Markets
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Projects Delivered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-2 px-8 bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 tracking-tight relative inline-block">
              {aboutSection?.title}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {aboutSection?.description}
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Journey
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                {aboutSection?.ourStory?.description}
              </p>
            </div>

            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {aboutSection?.ourMission?.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Our mission is to excel globally by delivering the right product
                for every application, emphasizing environmental responsibility,
                workplace safety, and cutting-edge manufacturing. We prioritize
                customer feedback, ensuring continuous development and superior
                engineering. We aim to be recognized worldwide for
                manufacturing robust, high-quality products that meet customer
                needs while maintaining competitiveness. Swam’s strength lies in
                customer collaboration, flexibility, innovation, and adherence
                to stringent international standards, with rigorous quality
                control and the use of approved components.
              </p>
            </div>
          </div> */}

          <div className="text-center">
            <div className="mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Our Core Values
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {aboutSection?.ourCoreValues?.title || "What Drives Us Forward"}
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These fundamental principles guide every decision we make and
                every solution we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Innovation Card */}
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:border-blue-200">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Innovation
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    "Innovation is more than an idea—it's a mindset. A
                    relentless drive to think differently, to break boundaries,
                    and to create what's next."
                  </p>
                </div>
              </div>

              {/* Technology Card */}
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:border-green-200">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Technology
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    "Technology is the bridge between imagination and reality.
                    It powers progress, connects the world, and transforms how
                    we live and work."
                  </p>
                </div>
              </div>

              {/* Excellence Card */}
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:border-purple-200">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Excellence
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    "Excellence isn't a destination. It's a commitment—reflected
                    in every detail, every decision, every outcome."
                  </p>
                </div>
              </div>

              {/* Sustainability Card */}
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:border-emerald-200">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Sustainability
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    "Sustainability is our promise to the future. To innovate
                    responsibly. To grow with purpose. To leave a world better
                    than we found it."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Professional Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
              Our Product Portfolio
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Engineering Solutions
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                That Drive Industry
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From precision blowers to advanced vacuum systems, our
              comprehensive product range delivers reliable performance across
              diverse industrial applications.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {productCards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-2"
              >
                {/* Card Header */}
                <div className="p-8 pb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Product Showcase */}
                <div className="relative h-[280px] overflow-hidden">
                  {card.title === "Blower Division" ? (
                    <BackgroundSlider images={blowerImages} interval={3000} />
                  ) : card.title === "Vacuum Division" ? (
                    <BackgroundSlider images={vaccumImages} interval={3000} />
                  ) : card.title === "Compressor Division" ? (
                    <BackgroundSlider images={otherImages} interval={3000} />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-8 h-8 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-500 font-medium">
                          Product Gallery
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Overlay with CTA */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <div className="w-full">
                      {card.title === "Blower Division" ? (
                        <Link
                          to="/blower-division"
                          className="group/btn inline-flex items-center bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          <span>Explore Blowers</span>
                          <svg
                            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      ) : card.title === "Vacuum Division" ? (
                        <Link
                          to="/vacuum-systems"
                          className="group/btn inline-flex items-center bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          <span>Explore Vacuum</span>
                          <svg
                            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      ) : card.title === "Compressor Division" ? (
                        <Link
                          to="/other-products-projects"
                          className="group/btn inline-flex items-center bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          <span>Explore Compressors</span>
                          <svg
                            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      ) : (
                        <a
                          href={card.link}
                          className="group/btn inline-flex items-center bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          <span>Learn More</span>
                          <svg
                            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Industrial Solutions</span>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>Premium Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showBlowerMenu && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-8 bg-white shadow-lg rounded-lg w-[800px] z-50 p-6">
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h2 className="text-lg font-semibold">Blower Division</h2>
                <button
                  onClick={() => setShowBlowerMenu(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-blue-600 hover:underline">
                  Rotary Twin & Tri Lobe Blowers
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Process Gas Blowers
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Turbo Blowers
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Super Helical Hybrid Blower
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Truck Blowers
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Bio Gas Blowers
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Vacuum Pumps
                </a>
              </div>
            </div>
          )}

          {/* Featured Product */}

          {/* Product Grid */}

          {/* CTA Section */}
          {/* <div className="mt-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Transform Your Operations?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Discover how our energy-efficient solutions can reduce
                operational costs and improve performance for your industrial
                applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:transform hover:-translate-y-1 flex items-center justify-center gap-3">
                  <span>Request Quote</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:transform hover:-translate-y-1">
                  Download Brochure
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Why SWAM Section - Professional Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Our Advantage
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Why Choose
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SWAM?
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four decades of engineering excellence, innovation, and unwavering
              commitment to quality.
            </p>
          </div>

          {/* Image + Content Row */}
          <div className="flex flex-col lg:flex-row lg:gap-16 gap-8 items-start max-w-7xl mx-auto px-6">
            {/* Left Side - Image */}
            <div className="lg:w-2/5 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <img
                  src="/images/Main-image.png"
                  alt={manufacturingSteps[activeStep - 1]?.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {manufacturingSteps[activeStep - 1]?.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="lg:w-3/5 w-full">
              {/* Always-visible intro - Only 2 cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Four Decades of Excellence
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Since 1978, SWAM has been at the forefront of engineering
                    excellence, delivering high-performance vacuum pumps,
                    blowers, and compressors to industries worldwide. With over
                    four decades of proven expertise, we stand for reliability,
                    innovation, and trust.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Quality & Innovation
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We follow the motto "do it once and do it right." Our focus
                    on high-quality, reliable, and durable products that meet or
                    exceed international standards. All products undergo
                    in-house "Hot run" testing, with performance test
                    certificates as part of our standard practice.
                  </p>
                </div>
              </div>

              {/* Collapsible content */}
              <div
                className={`relative transition-all duration-500 ease-in-out overflow-hidden ${
                  showMore ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-6 space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Advanced Manufacturing
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      SWAM uses modern engineering processes with multiple
                      manufacturing plants equipped with CNC machines. We
                      develop energy-efficient products, such as Screw Blowers,
                      which can save over 25% in power compared to traditional
                      blowers.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Test Standards & Certifications
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      All products are designed and tested to international
                      standards like BS-1571, Pneurop, HEI, API-681, API-619
                      etc. SWAM is an ISO-9001 Certified organization with major
                      product portfolio certified with hazardous certifications
                      like CE, ATEX, etc.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Engineering Excellence
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Advanced CNC manufacturing, in-house hot run testing up to
                      1000KW, and certified performance validation.
                      Next-generation designs, including screw blowers that
                      reduce energy use by 25% or more.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Global Presence & Partnership
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Serving 15+ countries with global offices in Australia,
                      Dubai, and the U.S. Tailored solutions and turnkey systems
                      designed to meet the toughest industry challenges. At
                      SWAM, our motto "Do it once, and do it right" defines
                      every solution we deliver — making us a trusted global
                      partner for industries from chemical and petrochemical to
                      power and water treatment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Toggle button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowMore((v) => !v)}
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                  aria-expanded={showMore}
                  aria-controls="why-swam-more"
                >
                  <span>{showMore ? "Show Less" : "Discover More"}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      showMore ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Key Features Tags */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Key Strengths
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover what sets SWAM apart in the industrial equipment
                industry
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {/* Primary Feature - Blue */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Innovative Product Development
              </div>

              {/* Secondary Features - Gray */}
              <div className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1">
                Cutting-edge Testing Facilities
              </div>

              <div className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1">
                Energy-Efficient Solutions
              </div>

              <div className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1">
                Low Emission Technology
              </div>

              <div className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1">
                Sustainable Manufacturing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section - Professional Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Global Certifications
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Certified
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our certifications reflect an unwavering commitment to global
              standards, ensuring trust, quality, and reliability in every
              solution we deliver.
            </p>
          </div>

          {/* Certificate Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CE Certificate */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <img
                    src="/images/certificates/CE-Certificate.png"
                    alt="CE"
                    className="object-contain w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  CE Certificate
                </h3>
                <div className="text-sm font-semibold text-blue-300 mb-4">
                  European Conformity
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  International inspection and testing certification ensuring
                  product safety and compliance with European standards.
                </p>
              </div>
            </div>

            {/* ATEX Certificate */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <img
                    src="/images/certificates/atex.png"
                    alt="ATEX"
                    className="object-contain w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  ATEX Certificate
                </h3>
                <div className="text-sm font-semibold text-green-300 mb-4">
                  Explosive Atmospheres
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Certification for equipment intended for use in potentially
                  explosive atmospheres, ensuring safety in hazardous
                  environments.
                </p>
              </div>
            </div>

            {/* ISO 14001 */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <img
                    src="/images/certificates/ISO_14001.png"
                    alt="ISO 14001"
                    className="object-contain w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  ISO 14001:2015
                </h3>
                <div className="text-sm font-semibold text-purple-300 mb-4">
                  Environmental Management
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Environmental Management System certification demonstrating
                  our commitment to sustainability and environmental
                  responsibility.
                </p>
              </div>
            </div>

            {/* ISO 9001 */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <img
                    src="/images/certificates/ISO_9001.png"
                    alt="ISO 9001"
                    className="object-contain w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  ISO 9001:2015
                </h3>
                <div className="text-sm font-semibold text-pink-300 mb-4">
                  Quality Management
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Quality Management System certification ensuring consistent
                  quality in our products and services across all operations.
                </p>
              </div>
            </div>

            {/* Appendix Certificate */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FaCheckCircle className="text-yellow-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Appendix Certificate
                </h3>
                <div className="text-sm font-semibold text-yellow-300 mb-4">
                  Quality Documentation
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Additional certification documentation supporting our
                  comprehensive quality management system and compliance
                  standards.
                </p>
              </div>
            </div>

            {/* ISO 45001 */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FaHardHat className="text-red-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  ISO 45001:2018
                </h3>
                <div className="text-sm font-semibold text-red-300 mb-4">
                  Occupational Health & Safety
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Occupational Health and Safety Management System certification
                  ensuring workplace safety and employee well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <svg
                className="w-5 h-5 text-green-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white font-semibold">
                All Certifications Valid & Up-to-Date
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section - Professional Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Trusted Partners
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Our
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Global Clients
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partnering with leading organizations worldwide, we deliver
              reliable solutions that drive long-term success and industry
              growth.
            </p>
          </div>

          {/* Client Logos Carousel */}
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={6}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 20 },
                640: { slidesPerView: 3, spaceBetween: 25 },
                768: { slidesPerView: 4, spaceBetween: 25 },
                1024: { slidesPerView: 6, spaceBetween: 30 },
              }}
              className="py-8"
            >
              {clients.map((client, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-32 flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-2 hover:border-blue-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <img
                        src={client.src}
                        alt={client.alt}
                        className="h-16 md:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.target.src = "/images/Client_Logo/1.png"; // Fallback image
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trusted Quality
              </h3>
              <p className="text-gray-600">
                Industry leaders trust our solutions for their critical
                operations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Proven Performance
              </h3>
              <p className="text-gray-600">
                Decades of successful project delivery across diverse industries
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Serving clients across 15+ countries with local support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Newsletter */}

      {/* Contact Section - Professional Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Your Vision,
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A partnership for success. Innovating today for a stronger
              tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Panel - Get in Touch */}
            <div className="bg-gray-800 bg-opacity-50 rounded-3xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We're here to help you succeed. Reach out to us through any of
                  the channels below, and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Email Us
                    </h4>
                    <p className="text-green-400 font-medium mb-1">
                      info@swamatics.com
                    </p>
                    <span className="text-gray-400 text-sm">
                      We'll respond within 24 hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49998 10.2412 2.44825 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.21649 3.36162C2.3051 3.09849 2.44748 2.85669 2.63519 2.65162C2.8229 2.44655 3.05028 2.28271 3.30495 2.17052C3.55962 2.05833 3.83444 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.11 3.72C9.23662 4.68007 9.47144 5.62273 9.81 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Call Us
                    </h4>
                    <p className="text-green-400 font-medium mb-1">
                      +919910302163
                    </p>
                    <span className="text-gray-400 text-sm">
                      We're available from 9 AM to 6 PM, Monday to Friday
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Visit Us
                    </h4>
                    {/* 👇 Address is now clickable */}
                    <a
                      href="https://maps.app.goo.gl/jvzyTjVB3bNsBqoz9?g_st=aw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 font-medium mb-1 block hover:underline"
                    >
                      C-2, SECTOR-3, NOIDA-201301, (U.P.) INDIA
                    </a>
                    <span className="text-gray-400 text-sm">
                      We're located in the heart of the city, easily accessible
                      from major highways
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/SwamPneumaticss/"
                    className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://x.com/swam_pneumatics"
                    className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/swam-pneumatics/?viewAsMember=true"
                    className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    <img
                      src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.png"
                      alt="LinkedIn"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Panel - Contact Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tell us about your project and we'll get back to you with a
                  tailored solution within 24 hours.
                </p>
              </div>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  if (!document.getElementById("declaration").checked) {
                    e.preventDefault();
                    alert("Please accept the declaration before submitting.");
                  }
                }}
              >
                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      // placeholder="John"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z]/g,
                          ""
                        );
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      // placeholder="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z]/g,
                          ""
                        );
                      }}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      // placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Country Code + Phone */}
                  {/* Country Code + Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="flex">
                      {/* Country Code - smaller width */}
                      <select
                        id="countryCode"
                        name="countryCode"
                        className="w-1/3 md:w-1/4 px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                        required
                      >
                        <option value="+91">🇮🇳 +91 (India)</option>
                        <option value="+1">🇺🇸 +1 (USA)</option>
                        <option value="+44">🇬🇧 +44 (UK)</option>
                        <option value="+61">🇦🇺 +61 (Australia)</option>
                        <option value="+971">🇦🇪 +971 (UAE)</option>
                        <option value="+81">🇯🇵 +81 (Japan)</option>
                        <option value="+49">🇩🇪 +49 (Germany)</option>
                        <option value="+33">🇫🇷 +33 (France)</option>
                        <option value="+86">🇨🇳 +86 (China)</option>
                        <option value="+92">🇵🇰 +92 (Pakistan)</option>
                        <option value="+880">🇧🇩 +880 (Bangladesh)</option>
                        <option value="+94">🇱🇰 +94 (Sri Lanka)</option>
                        <option value="+39">🇮🇹 +39 (Italy)</option>
                        <option value="+34">🇪🇸 +34 (Spain)</option>
                        <option value="+7">🇷🇺 +7 (Russia)</option>
                        <option value="+55">🇧🇷 +55 (Brazil)</option>
                        <option value="+27">🇿🇦 +27 (South Africa)</option>
                        <option value="+82">🇰🇷 +82 (South Korea)</option>
                        <option value="+60">🇲🇾 +60 (Malaysia)</option>
                        <option value="+65">🇸🇬 +65 (Singapore)</option>
                        <option value="+62">🇮🇩 +62 (Indonesia)</option>
                        <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
                        <option value="+20">🇪🇬 +20 (Egypt)</option>
                        <option value="+254">🇰🇪 +254 (Kenya)</option>
                      </select>

                      {/* Phone Input - larger width */}
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        // placeholder="9876543210"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                        required
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                        }}
                        minLength={7}
                        maxLength={15}
                      />
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    // placeholder="Your Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>

                {/* Product */}
                {/* <div>
      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
        Product You Are Interested In
      </label>
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Product Name"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
      />
    </div> */}

                {/* Service Select */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Product Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                    required
                  >
                    <option value="">Select a Product</option>
                    <option value="Rotary Twin & Tri Lobe Blowers">
                      Rotary Twin & Tri Lobe Blowers
                    </option>
                    <option value="Mobile Applications">
                      Mobile Applications
                    </option>
                    <option value="Super Helical Hybrid Blowers">
                      Super Helical Hybrid Blower
                    </option>
                    <option value="Truck Blowers">Truck Blowers</option>
                    <option value="Bio Gas Blowers">Bio Gas Blowers</option>
                    <option value="Air Injection">Air Injection</option>
                    <option value="Rotary Sliding Vane Compressors">
                      Rotary Sliding Vane Compressors
                    </option>
                    <option value="Centrifugal Fans & Blowers">
                      Centrifugal Fans & Blowers
                    </option>
                    <option value="SR Series Blowers">SR Series Blowers</option>
                    <option value="Dry Screw Vacuum Pump">
                      Dry Screw Vacuum Pump
                    </option>
                    <option value="Liquid Ring Vacuum Pumps">
                      Liquid Ring Vacuum Pumps
                    </option>
                    <option value="Oil Vane Vacuum Pump">
                      Oil Vane Vacuum Pump
                    </option>
                    <option value="Mechanical Vacuum Boosters">
                      Mechanical Vacuum Boosters
                    </option>
                    <option value="MVR Blowers">MVR Blowers</option>
                    <option value="Vacuum Systems and Packages">
                      Vacuum Systems and Packages
                    </option>
                    <option value="Condenser Exhausters">
                      Condenser Exhausters
                    </option>
                    <option value="Shell & Tube Heat Exchangers">
                      Shell & Tube Heat Exchangers
                    </option>
                    <option value="Acoustic Enclosures & Silencers">
                      Acoustic Enclosures & Silencers
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    // placeholder="Tell us about your project..."
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                    required
                  ></textarea>
                </div>

                {/* ✅ Declaration Checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="declaration"
                    className="mt-1"
                    required
                  />
                  <label
                    htmlFor="declaration"
                    className="text-sm text-gray-700"
                  >
                    I hereby declare that the information provided above is true
                    and correct to the best of my knowledge.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Send Enquiry</span>
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
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl max-h-screen overflow-hidden shadow-2xl transform transition-all duration-300 animate-in fade-in zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
              onClick={closeModal}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="relative">
              <img
                src={modalImage}
                alt={modalTitle}
                className="w-full h-auto max-h-96 object-contain"
              />
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 text-center">
                {modalTitle}
              </h3>
            </div>
          </div>
        </div>
      )}
      {/* Professional Popup Modal for Gastech Flyer */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-[100]">
          {/* Flyer Image Container */}
          <div className="relative">
            {/* Close Button inside image */}
            <button
              className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80"
              onClick={() => setShowPopup(false)}
            >
              ✖
            </button>

            {/* Flyer Image */}
            <img
              src="/images/gastech.jpg"
              alt="Gastech 2025"
              className="w-[90%] max-w-3xl max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default HomeV2;
