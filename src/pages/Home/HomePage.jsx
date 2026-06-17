import React, { useState, useEffect, useRef } from "react";
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
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "animate.css";
import "swiper/css/pagination";
import { useTranslation } from "../../contexts/TranslationContext";
import LanguageChangeIcon from "../../components/LanguageChangeIcon";
import {
  getTranslatedContent,
  getTextDirection,
  getTextAlignment,
} from "../../utils/translationUtils";
import sendEmail from "../../components/sendmail/sendmail";
import toast from "react-hot-toast";

// import "../../styles/cursor.css";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
// Dynamic import for WOW.js to avoid build issues
import "wowjs/css/libs/animate.css";

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
  FaHistory,
  FaRedo,
} from "react-icons/fa";

const HomePagev2 = () => {
  const { t, currentLanguage } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showCustomCursor, setShowCustomCursor] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittingFooter, setIsSubmittingFooter] = useState(false);

  // CAPTCHA state for modal form
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");

  // CAPTCHA state for footer form
  const [captchaQuestionFooter, setCaptchaQuestionFooter] = useState("");
  const [captchaAnswerFooter, setCaptchaAnswerFooter] = useState(0);
  const [captchaInputFooter, setCaptchaInputFooter] = useState("");

  // Generate a random math CAPTCHA for modal form
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1; // 1-10
    const num2 = Math.floor(Math.random() * 10) + 1; // 1-10
    const operators = ["+", "-", "×"];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let answer;
    let question;

    switch (operator) {
      case "+":
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
        break;
      case "-":
        // Ensure positive result
        const larger = Math.max(num1, num2);
        const smaller = Math.min(num1, num2);
        answer = larger - smaller;
        question = `${larger} - ${smaller}`;
        break;
      case "×":
        answer = num1 * num2;
        question = `${num1} × ${num2}`;
        break;
      default:
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
    }

    setCaptchaQuestion(question);
    setCaptchaAnswer(answer);
    setCaptchaInput(""); // Reset input when generating new CAPTCHA
  };

  // Generate a random math CAPTCHA for footer form
  const generateCaptchaFooter = () => {
    const num1 = Math.floor(Math.random() * 10) + 1; // 1-10
    const num2 = Math.floor(Math.random() * 10) + 1; // 1-10
    const operators = ["+", "-", "×"];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let answer;
    let question;

    switch (operator) {
      case "+":
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
        break;
      case "-":
        // Ensure positive result
        const larger = Math.max(num1, num2);
        const smaller = Math.min(num1, num2);
        answer = larger - smaller;
        question = `${larger} - ${smaller}`;
        break;
      case "×":
        answer = num1 * num2;
        question = `${num1} × ${num2}`;
        break;
      default:
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
    }

    setCaptchaQuestionFooter(question);
    setCaptchaAnswerFooter(answer);
    setCaptchaInputFooter(""); // Reset input when generating new CAPTCHA
  };

  // Generate CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
    generateCaptchaFooter();
  }, []);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const whySwamRef = useRef(null);
  const certificationsRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

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
    { name: "Claw Vacuum", link: "/clawvacuum" },
    { name: "Liquid ring compressors", link: "/liquidringcompressors" },
    { name: "Screw blower", link: "/screwblower" },

    {
      name: "Rotary Sliding Vane Compressors",
      link: "/rotary-sliding-vane-compressors",
    },
    { name: "Centrifugal Fans & Blowers", link: "/centrifugal-fans-blowers" },
    { name: "SR Series Blowers", link: "/sr-series-blowers" },
    { name: "Dry Screw Vacuum Pump", link: "/dry-screw-vacuum-pump" },
    { name: "Liquid Ring Vacuum Pumps", link: "/liquid-ring-vacuum-pumps" },
    { name: "Liquid Ring Compressors", link: "/liquidringcompressors" },
    { name: "Claw Vacuum", link: "/clawvacuum" },
    { name: "Screw Blowers", link: "/screwblower" },
    { name: "Oil Vane Vacuum Pump", link: "/oil-vane-vacuum-pump-2" },
    { name: "Mechanical Vacuum Boosters", link: "/mechanical-vacuum-boosters" },
    { name: "MVR Blowers", link: "/mvr-blowers" },
    {
      name: "Vacuum Systems and Packages",
      link: "/vacuum-systems-and-packages",
    },
    { name: "Condenser Exhausters", link: "/condenser-exhausters" },
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
    "/images/dry-Screw-Vacuum-Pump.jpg",
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

  // Handle form submission for modal form
  const handleModalFormSubmit = async (e) => {
    e.preventDefault();

    const declarationCheckbox = document.getElementById("declaration");
    if (!declarationCheckbox?.checked) {
      toast.error("Please accept the declaration before submitting.");
      return;
    }

    // Validate CAPTCHA
    const userAnswer = parseInt(captchaInput.trim());
    if (isNaN(userAnswer) || userAnswer !== captchaAnswer) {
      toast.error("Please solve the CAPTCHA correctly.");
      generateCaptcha(); // Generate new CAPTCHA on wrong answer
      return;
    }

    setIsSubmitting(true);

    try {
      const form = e.target;
      const formData = new FormData(form);

      const emailData = {
        firstName: formData.get("firstName") || "",
        lastName: formData.get("lastName") || "",
        email: formData.get("email") || "",
        phone: formData.get("phone") || "",
        company: formData.get("company") || "",
        companyName: formData.get("company") || "",
        service: formData.get("service") || "",
        productInterested: formData.get("service") || "",
        subject: formData.get("subject") || "",
        message: formData.get("message") || "",
      };

      await sendEmail(emailData);
      toast.success("Thank you! Your message has been sent successfully.");

      // Reset form
      form.reset();
      setCaptchaInput("");
      generateCaptcha();
      setShowForm(false);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form submission for footer form
  const handleFooterFormSubmit = async (e) => {
    e.preventDefault();

    const declarationCheckbox = document.getElementById("declarationContact");
    if (!declarationCheckbox?.checked) {
      toast.error("Please accept the declaration before submitting.");
      return;
    }

    // Validate CAPTCHA
    const userAnswer = parseInt(captchaInputFooter.trim());
    if (isNaN(userAnswer) || userAnswer !== captchaAnswerFooter) {
      toast.error("Please solve the CAPTCHA correctly.");
      generateCaptchaFooter(); // Generate new CAPTCHA on wrong answer
      return;
    }

    setIsSubmittingFooter(true);

    try {
      const form = e.target;
      const formData = {
        firstName: form.querySelector('input[name="firstName"]')?.value || "",
        lastName: form.querySelector('input[name="lastName"]')?.value || "",
        email: form.querySelector('input[name="email"]')?.value || "",
        countryCode:
          form.querySelector('select[name="countryCode"]')?.value || "",
        phone: form.querySelector('input[name="phone"]')?.value || "",
        company: form.querySelector('input[name="company"]')?.value || "",
        companyName: form.querySelector('input[name="company"]')?.value || "",
        service: form.querySelector('select[name="service"]')?.value || "",
        productInterested:
          form.querySelector('select[name="service"]')?.value || "",
        message: form.querySelector('textarea[name="message"]')?.value || "",
      };

      await sendEmail(formData);
      toast.success("Thank you! Your message has been sent successfully.");

      // Reset form
      form.reset();
      setCaptchaInputFooter("");
      generateCaptchaFooter();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmittingFooter(false);
    }
  };

  // Throttle function for performance optimization
  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
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
    // Initialize AOS with enhanced settings
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
      delay: 100,
    });

    // Initialize WOW.js for additional animations
    const initWOW = async () => {
      try {
        if (typeof window !== "undefined") {
          const { WOW } = await import("wowjs");
          const wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
          });
          wow.init();
        }
      } catch (error) {
        console.warn("WOW.js initialization failed:", error);
      }
    };

    initWOW();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <MainTemplate>
      {/* Hero Section with Professional Video Overlay */}
      {/* Updated Hero Section with Responsive Video */}
      {/* Updated Hero Section with Responsive Video */}
      <section className="relative w-full h-screen min-h-[600px] sm:h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Fallback background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30 sm:opacity-50 md:opacity-60"
          style={{
            backgroundImage: "url(/images/banner-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Video Container - Fully Responsive */}
        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute w-auto h-auto min-w-full min-h-full sm:w-full sm:h-full sm:object-cover opacity-30 sm:opacity-50 md:opacity-60"
            onError={(e) => {
              e.target.style.display = "none";
            }}
            onLoadStart={() => {
              console.log("Video loading started");
            }}
          >
            <source src={introVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Professional Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-5xl mx-auto w-full">
            {/* Language Change Icon */}
            <div className="absolute top-4 right-4 z-20">
              <LanguageChangeIcon />
            </div>

            <div className="mb-6 sm:mb-8">
              <h1
                className={`text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight px-2 ${
                  currentLanguage === "arabic" ? "text-center" : "text-center"
                }`}
                dir={currentLanguage === "arabic" ? "rtl" : "ltr"}
              >
                {t("hero.title.main")}
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {t("hero.title.sub")}
                </span>
                <span className="block text-lg sm:text-2xl md:text-4xl lg:text-5xl font-light text-gray-200 mt-2">
                  {t("hero.title.since")}
                </span>
              </h1>

              <p
                className={`text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 ${
                  currentLanguage === "arabic" ? "text-right" : "text-center"
                }`}
                dir={currentLanguage === "arabic" ? "rtl" : "ltr"}
              >
                {/* {t("hero.description")} */}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="p-7">&nbsp;</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on small screens */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
      <div className="hidden md:block fixed top-1/2 right-4 -translate-y-1/2 z-50">
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl border border-gray-200/50 flex flex-col space-y-2 p-3">
          {/* Open Form Modal */}
          <button
            onClick={() => setShowForm(true)}
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            title={t("floatingBar.getQuote")}
          >
            <FaFileAlt className="text-xl" />
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {t("floatingBar.getQuote")}
            </div>
          </button>

          {/* Phone Call */}
          <a
            href="tel:+919910302163"
            className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            title={t("floatingBar.callUs")}
          >
            <FaPhoneAlt className="text-xl" />
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {t("floatingBar.callUs")}
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@swamatics.com"
            className="group relative bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            title={t("floatingBar.emailUs")}
          >
            <FaEnvelope className="text-xl" />
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {t("floatingBar.emailUs")}
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919910302163"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            title={t("floatingBar.whatsapp")}
          >
            <FaWhatsapp className="text-xl" />
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {t("floatingBar.whatsapp")}
            </div>
          </a>
          {/* Old Version */}
          {/* <Link
            className="group relative bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            to="/new"
            title="Old Version"
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
              <path d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"></path>
            </svg>
          </Link> */}
        </div>
      </div>
      {/* Mobile quick bar */}
      <div className="md:hidden fixed inset-x-3 bottom-[env(safe-area-inset-bottom,0)] z-50">
        <div className="mx-auto grid grid-cols-4 gap-3 rounded-2xl bg-white/95 backdrop-blur-sm border border-gray-200 p-3 shadow-2xl">
          <button
            onClick={() => setShowForm(true)}
            className="flex flex-col items-center text-xs"
          >
            <FaFileAlt className="text-lg mb-1" />
            <span>{t("floatingBar.quote")}</span>
          </button>
          <a
            href="tel:+919910302163"
            className="flex flex-col items-center text-xs"
          >
            <FaPhoneAlt className="text-lg mb-1" />
            <span>{t("floatingBar.call")}</span>
          </a>
          <a
            href="mailto:info@swamatics.com"
            className="flex flex-col items-center text-xs"
          >
            <FaEnvelope className="text-lg mb-1" />
            <span>{t("floatingBar.email")}</span>
          </a>
          <a
            href="https://wa.me/919910302163"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-xs"
          >
            <FaWhatsapp className="text-lg mb-1" />
            <span>{t("floatingBar.whatsapp")}</span>
          </a>
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
                {t("form.quickEnquiry")}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {t("form.getQuoteTitle")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("form.getQuoteDescription")}
              </p>
            </div>

            {/* ✅ Full Contact Form with Validation */}
            <form className="space-y-6" onSubmit={handleModalFormSubmit}>
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
                  name="email"
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
                name="company"
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              {/* Service Select */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("form.productInterested")}
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                  required
                >
                  <option value="">{t("form.selectProduct")}</option>
                  <option value="Rotary Twin & Tri Lobe Blowers">
                    {t("form.rotaryTwinLobeBlowers")}
                  </option>
                  <option value="Rotary Twin & Tri Lobe Blowers">
                    {t("form.rotaryTriLobeBlowers")}
                  </option>

                  <option value="Super Helical Hybrid Blowers">
                    {t("form.superHelicalHybridBlower")}
                  </option>
                  <option value="Truck Blowers">Truck Blowers</option>
                  <option value="Bio Gas Compressors">
                    Bio Gas Compressors
                  </option>
                  <option value="Dry Vacuum Pumps">Dry Vacuum Pumps</option>
                  <option value="Liquid Ring Compressors">
                    {t("form.liquidRingCompressors")}
                  </option>
                  <option value="Claw Vacuum">Claw Vacuum</option>
                  <option value="Screw Blowers">Screw Blowers</option>
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
                </select>
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              {/* Message */}
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>

              {/* Declaration Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="declaration"
                  name="declaration"
                  className="mr-2"
                  required
                />
                <label htmlFor="declaration" className="text-sm text-gray-600">
                  I hereby declare that the information provided is true and
                  correct.
                </label>
              </div>

              {/* CAPTCHA Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Security Verification *
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex-1 flex items-center gap-3 bg-gray-50 px-4 py-3 border border-gray-300 rounded-lg">
                    <span className="text-lg font-bold text-gray-800 min-w-[80px] text-center">
                      {captchaQuestion} = ?
                    </span>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                      title="Refresh CAPTCHA"
                    >
                      <FaRedo className="text-gray-600 hover:text-blue-600 transition-colors text-sm" />
                    </button>
                  </div>
                  <input
                    type="number"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                    placeholder="Answer"
                    className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Please solve the math problem above to verify you're human
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                {!isSubmitting && (
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
                )}
                {isSubmitting && (
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      {/* 🔍 Search Bar */}
      {/* Vision Section - Enhanced with Animations */}
      <motion.section
        ref={visionRef}
        className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Animation Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Section with Enhanced Animations */}
            <motion.div
              className="relative group"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative bg-white rounded-3xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="w-full h-64 sm:h-80 md:h-[500px] rounded-3xl"
                >
                  <SwiperSlide>
                    <motion.img
                      src="/images/vision1.jpg"
                      alt="Vision 1"
                      className="w-full h-64 sm:h-80 md:h-[500px] object-cover"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                      onError={(e) => (e.target.src = "/images/about_us1.jpg")}
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <motion.img
                      src="/images/vision2.jpg"
                      alt="Vision 2"
                      className="w-full h-64 sm:h-80 md:h-[500px] object-cover"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                      onError={(e) => (e.target.src = "/images/Aboutus2.jpg")}
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <motion.img
                      src="/images/vision3.jpg"
                      alt="Vision 3"
                      className="w-full h-64 sm:h-80 md:h-[500px] object-cover"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                      onError={(e) => (e.target.src = "/images/Aboutus3.jpg")}
                    />
                  </SwiperSlide>
                </Swiper>
              </motion.div>
            </motion.div>

            {/* Content Section with Staggered Animations */}
            <motion.div
              className="space-y-5"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="space-y-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight ${
                    currentLanguage === "arabic" ? "text-right" : "text-left"
                  }`}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  dir={getTextDirection(currentLanguage)}
                >
                  {t("about.title") || AboutUs[0]?.title || "About Us"}
                </motion.h2>

                <motion.div
                  className="space-y-4"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className={`text-xl text-gray-600 leading-relaxed ${
                      currentLanguage === "arabic" ? "text-right" : "text-left"
                    }`}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                    dir={getTextDirection(currentLanguage)}
                  >
                    {t("about.description1") ||
                      AboutUs[0]?.description1 ||
                      "Founded in 1978 by the visionary and innovation-driven Chairman and Managing Director, Mr. S.K. Gambhir, SWAM Group has established itself at the forefront in the engineering and manufacturing domain."}
                  </motion.p>
                  <motion.p
                    className={`text-xl text-gray-600 leading-relaxed ${
                      currentLanguage === "arabic" ? "text-right" : "text-left"
                    }`}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    viewport={{ once: true }}
                    dir={getTextDirection(currentLanguage)}
                  >
                    {t("about.description2") ||
                      AboutUs[0]?.description2 ||
                      "SWAM was built with Mr. Gambhir's bold vision: to engineer solutions that power industries across the world. SWAM is a brand that is well rooted in its values and origin which breathes- passion, excellence, and customer-first ideology."}
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* CTA Button with Enhanced Animation */}
              <motion.div
                className="pt-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/about"
                    className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <span>{t("stats.discoverStory")}</span>
                    <motion.svg
                      className="w-5 h-5 ml-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Key Stats with Counter Animation */}
              <motion.div
                className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                viewport={{ once: true }}
              >
                {[
                  { number: "45+", label: "Years of Excellence" },
                  { number: "15+", label: "Global Markets" },
                  { number: "1000+", label: "Projects Delivered" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.0 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-blue-600 mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* About Section - Enhanced with Animations */}
      {/* Products Section - Enhanced with Animations */}
      <motion.section
        ref={productsRef}
        className="py-7 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-100 to-transparent rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header with Enhanced Animations */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("products.sectionTitle.main")}{" "}
              <motion.span
                className=" bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {t("products.sectionTitle.sub")}
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {t("products.sectionDescription")}
            </motion.p>
          </motion.div>

          {/* Product Cards Grid with Enhanced Animations */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            {productCards.map((card, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-2"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Card Header with Animation */}
                <motion.div
                  className="p-4 pb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {card.title === "Blower Division"
                      ? t("divisions.blower.title")
                      : card.title === "Vacuum Division"
                      ? t("divisions.vacuum.title")
                      : card.title === "Compressor Division"
                      ? t("divisions.compressor.title")
                      : card.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {card.description === "Blower Division"
                      ? t("divisions.blower.description")
                      : card.description === "Vacuum Division"
                      ? t("divisions.vacuum.description")
                      : card.description === "Compressor Division"
                      ? t("divisions.compressor.description")
                      : card.description}
                  </motion.p>
                </motion.div>

                {/* Product Showcase with Enhanced Animation */}
                <motion.div
                  className="relative h-48 md:h-[250px] overflow-hidden"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {card.title === "Blower Division" ? (
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BackgroundSlider images={blowerImages} interval={3000} />
                    </motion.div>
                  ) : card.title === "Vacuum Division" ? (
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BackgroundSlider images={vaccumImages} interval={3000} />
                    </motion.div>
                  ) : card.title === "Compressor Division" ? (
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BackgroundSlider images={otherImages} interval={3000} />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="text-center"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <motion.div
                          className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
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
                        </motion.div>
                        <span className="text-gray-500 font-medium">
                          {t("divisions.productGallery")}
                        </span>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Overlay with Enhanced CTA */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2.0 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full">
                      {card.title === "Blower Division" ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to="/blower-division"
                            className="group/btn inline-flex items-center bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                          >
                            <span>{t("divisions.exploreBlowers")}</span>
                            <motion.svg
                              className="w-4 h-4 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </motion.svg>
                          </Link>
                        </motion.div>
                      ) : card.title === "Vacuum Division" ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to="/vacuum-systems"
                            className="group/btn inline-flex items-center bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                          >
                            <span>{t("divisions.exploreVacuum")}</span>
                            <motion.svg
                              className="w-4 h-4 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </motion.svg>
                          </Link>
                        </motion.div>
                      ) : card.title === "Compressor Division" ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to="/other-products-projects"
                            className="group/btn inline-flex items-center bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                          >
                            <span>{t("divisions.exploreCompressors")}</span>
                            <motion.svg
                              className="w-4 h-4 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </motion.svg>
                          </Link>
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <a
                            href={card.link}
                            className="group/btn inline-flex items-center bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                          >
                            <span>{t("common.learnMore")}</span>
                            <motion.svg
                              className="w-4 h-4 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </motion.svg>
                          </a>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Card Footer with Animation */}
                <motion.div
                  className="p-2 pt-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 2.2 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* <div className="flex items-center justify-between text-sm text-gray-500">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Industrial Solutions
                    </motion.span>
                    <motion.div
                      className="flex items-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                      <span>Premium Quality</span>
                    </motion.div>
                  </div> */}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {showBlowerMenu && (
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 mt-8 bg-white shadow-lg rounded-lg w-[800px] z-50 p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h2 className="text-lg font-semibold">Blower Division</h2>
                <motion.button
                  onClick={() => setShowBlowerMenu(false)}
                  className="text-gray-500 hover:text-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Rotary Twin & Tri Lobe Blowers",
                  "Process Gas Blowers",
                  "Turbo Blowers",
                  "Super Helical Hybrid Blower",
                  "Truck Blowers",
                  "Bio Gas Blowers",
                  "Vacuum Pumps",
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-blue-600 hover:underline"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
      {/* SWAM: Transforming Industrial Challenges into Solutions */}
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SWAM
            </span>
            :<span className="block sm:inline"> {t("challenges.title")}</span>
            <span className="block sm:inline"> {t("challenges.subtitle")}</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[
              {
                title: t("challenges.carbonCapture.title"),
                desc: t("challenges.carbonCapture.desc"),
                bgImage: "/images/Carbon Capture.png",
              },
              {
                title: t("challenges.cryogenics.title"),
                desc: t("challenges.cryogenics.desc"),
                bgImage: "/images/Cryogenics.png",
              },
              {
                title: t("challenges.solar.title"),
                desc: t("challenges.solar.desc"),
                bgImage: "/images/Solar.png",
              },
              {
                title: t("challenges.semiconductor.title"),
                desc: t("challenges.semiconductor.desc"),
                bgImage: "/images/Semiconductor.png",
              },
              {
                title: t("challenges.steelDegassing.title"),
                desc: t("challenges.steelDegassing.desc"),
                bgImage: "/images/Steel Degassing.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-cover bg-center min-h-[220px] md:min-h-[280px] ring-1 ring-slate-200/60
                     transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundImage: `url('${item.bgImage}')` }}
              >
                {/* darken the image */}
                <div className="absolute inset-0 bg-black/45"></div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>

                {/* TITLE CHIP (top-left) */}
                <div className="absolute top-4 left-4">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                            bg-white/15 text-white backdrop-blur-md ring-1 ring-white/25 shadow-sm"
                  >
                    {/* optional icon span here */}
                    <span className="font-semibold">{item.title}</span>
                  </div>
                </div>

                {/* TRANSLUCENT STRIP(S) BEHIND TEXT (bottom-left) */}
                <div className="absolute left-4 right-4 bottom-4 space-y-2">
                  {/* If you want bullets instead, map an array here. For now we show the desc. */}
                  <div className="px-4 py-3 rounded-xl bg-white/12 text-white backdrop-blur-md ring-1 ring-white/20">
                    <p className="text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why SWAM Section - Professional Design */}
      <section className="py-7 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {t("whySwam.title")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("whySwam.swam")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("whySwam.subtitle")}
            </p>
          </div>

          {/* Image + Content Row */}
          <div className="flex flex-col lg:flex-row lg:gap-16 gap-8 items-start max-w-7xl mx-auto px-6">
            {/* Left Side - Image */}
            <div className="lg:w-2/5 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-[500px]">
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
                    {t("whySwam.excellence.title")}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t("whySwam.excellence.description")}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t("whySwam.quality.title")}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t("whySwam.quality.description")}
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
                      {t("whySwam.manufacturing.title")}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t("whySwam.manufacturing.description")}
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t("whySwam.standards.title")}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t("whySwam.standards.description")}
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t("whySwam.engineering.title")}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t("whySwam.engineering.description")}
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t("whySwam.global.title")}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t("whySwam.global.description")}
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
                  <span>
                    {showMore
                      ? t("whySwam.showLess")
                      : t("whySwam.discoverMore")}
                  </span>
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
        </div>
      </section>
      <motion.section
        ref={aboutRef}
        className="relative py-7 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-30 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t("aboutSection.ourCoreValues.title") || t("coreValues.title")}
              </motion.h3>

              <motion.p
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {t("coreValues.subtitle")}
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: t("coreValues.innovation.title"),
                  description: t("coreValues.innovation.description"),
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                  gradient: "from-blue-500 to-blue-600",
                  hoverGradient: "from-blue-50 to-transparent",
                  borderColor: "hover:border-blue-200",
                },
                {
                  title: t("coreValues.technology.title"),
                  description: t("coreValues.technology.description"),
                  icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  gradient: "from-green-500 to-green-600",
                  hoverGradient: "from-green-50 to-transparent",
                  borderColor: "hover:border-green-200",
                },
                {
                  title: t("coreValues.excellence.title"),
                  description: t("coreValues.excellence.description"),
                  icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                  gradient: "from-purple-500 to-purple-600",
                  hoverGradient: "from-purple-50 to-transparent",
                  borderColor: "hover:border-purple-200",
                },
                {
                  title: t("coreValues.sustainability.title"),
                  description: t("coreValues.sustainability.description"),
                  icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  gradient: "from-emerald-500 to-emerald-600",
                  hoverGradient: "from-emerald-50 to-transparent",
                  borderColor: "hover:border-emerald-200",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className={`group relative bg-white p-4 rounded-2xl shadow-lg border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-3 ${value.borderColor}`}
                  initial={{ y: 50, opacity: 0, scale: 0.8 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.hoverGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className={`w-10 h-10 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 },
                      }}
                    >
                      <motion.svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={value.icon}
                        />
                      </motion.svg>
                    </motion.div>

                    <motion.h4
                      className="text-xl font-bold text-gray-900 mb-1"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {value.title}
                    </motion.h4>

                    <motion.p
                      className="text-gray-600 leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      "{value.description}"
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* Certifications Section - Professional Design */}
      <section className="py-7 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              {t("certifications.title")}{" "}
              <span className=" bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t("certifications.excellence")}
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t("certifications.subtitle")}
            </p>
          </div>

          {/* Certificate Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CE Certificate */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-1 shadow-lg">
                  <img
                    src="/images/certificates/CE-Certificate.png"
                    alt="CE"
                    className="object-contain w-8 h-8"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t("certifications.ce.title")}
                </h3>
                <div className="text-xs font-semibold text-blue-300 mb-2">
                  {t("certifications.ce.badge")}
                </div>
                <p className="text-xs text-gray-300 leading-tight mb-2">
                  {t("certifications.ce.description")}
                </p>
              </div>
            </div>

            {/* ATEX Certificate */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-1 shadow-lg">
                  <img
                    src="/images/certificates/atex.png"
                    alt="ATEX"
                    className="object-contain w-8 h-8"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t("certifications.atex.title")}
                </h3>
                <div className="text-xs font-semibold text-green-300 mb-2">
                  {t("certifications.atex.badge")}
                </div>
                <p className="text-xs text-gray-300 leading-tight mb-2">
                  {t("certifications.atex.description")}
                </p>
              </div>
            </div>

            {/* ISO 14001 */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto mb-1 shadow-lg">
                  <img
                    src="/images/certificates/ISO_14001.png"
                    alt="ISO 14001"
                    className="object-contain w-8 h-8"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t("certifications.iso14001.title")}
                </h3>
                <div className="text-xs font-semibold text-purple-300 mb-2">
                  {t("certifications.iso14001.badge")}
                </div>
                <p className="text-xs text-gray-300 leading-tight mb-2">
                  {t("certifications.iso14001.description")}
                </p>
              </div>
            </div>

            {/* ISO 9001 */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-1 shadow-lg">
                  <img
                    src="/images/certificates/ISO_9001.png"
                    alt="ISO 9001"
                    className="object-contain w-8 h-8"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t("certifications.iso9001.title")}
                </h3>
                <div className="text-xs font-semibold text-pink-300 mb-2">
                  {t("certifications.iso9001.badge")}
                </div>
                <p className="text-xs text-gray-300 leading-tight mb-2">
                  {t("certifications.iso9001.description")}
                </p>
              </div>
            </div>

            {/* ISO 45001 */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-1 shadow-lg">
                  <FaHardHat className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t("certifications.iso45001.title")}
                </h3>
                <div className="text-xs font-semibold text-red-300 mb-2">
                  {t("certifications.iso45001.badge")}
                </div>
                <p className="text-xs text-gray-300 leading-tight mb-2">
                  {t("certifications.iso45001.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Learn more */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/certificates"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
               bg-gradient-to-r from-blue-600 to-cyan-500 text-white
               font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400
               transition"
            >
              {t("certifications.learnMore")}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

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
                {t("certifications.allValid")}
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section - Professional Design */}
      <section className="py-7 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {t("clients.title.our")}{" "}
              <span className=" bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("clients.title.globalClients")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("clients.subtitle")}
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
          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                {t("clients.trustedQuality.title")}
              </h3>
              <p className="text-gray-600">
                {t("clients.trustedQuality.description")}
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
                {t("clients.provenPerformance.title")}
              </h3>
              <p className="text-gray-600">
                {t("clients.provenPerformance.description")}
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
                {t("clients.globalReach.title")}
              </h3>
              <p className="text-gray-600">
                {t("clients.globalReach.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Subscribe Newsletter */}
      {/* Contact Section - Professional Design */}
      <section className="py-7 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-700 via-blue-700 to-gray-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              {t("contact.title.yourVision")}{" "}
              <span className=" bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t("contact.title.ourExpertise")}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Panel - Get in Touch */}
            <div className="bg-slate-700 bg-opacity-90 rounded-3xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t("contact.getInTouch")}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("contact.getInTouchDescription")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-transparent rounded-xl flex items-center justify-center text-yellow-500 flex-shrink-0">
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
                      {t("contact.emailUs")}
                    </h4>
                    <p className="text-blue-500 font-medium mb-1">
                      sales@swamatics.com
                    </p>
                    <span className="text-gray-400 text-sm">
                      {t("contact.emailResponse")}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-transparent rounded-xl flex items-center justify-center text-green-500 flex-shrink-0">
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
                      {t("contact.callUs")}
                    </h4>
                    <p className="text-blue-500 font-medium mb-1">
                      +919910302163
                    </p>
                    <span className="text-gray-400 text-sm">
                      {t("contact.callAvailability")}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-transparent rounded-xl flex items-center justify-center text-red-500 flex-shrink-0">
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
                      {t("contact.visitUs")}
                    </h4>
                    {/* 👇 Address is now clickable */}
                    <a
                      href="https://maps.app.goo.gl/jvzyTjVB3bNsBqoz9?g_st=aw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-medium mb-1 block hover:underline"
                    >
                      C-2, SECTOR-3, NOIDA-201301, (U.P.) INDIA
                    </a>
                    <span className="text-gray-400 text-sm">
                      {t("contact.visitDescription")}
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
                      src="\images\facebook.jpeg"
                      alt="Facebook"
                      className="w-8 h-8 rounded-full"
                    />
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://x.com/swam_pneumatics"
                    className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    <img
                      src="\images\twitter.png"
                      alt="Twitter"
                      className="w-8 h-8 rounded-full"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/swam-pneumatics/?viewAsMember=true"
                    className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    <img
                      src="\images\linkedin.png"
                      alt="LinkedIn"
                      className="w-8 h-8 rounded-full"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Panel - Contact Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {t("contact.sendMessage")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("contact.sendMessageDescription")}
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleFooterFormSubmit}>
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
                    <option value="">{t("form.selectProduct")}</option>
                    <option value="Rotary Twin & Tri Lobe Blowers">
                      {t("form.rotaryTwinLobeBlowers")}
                    </option>
                    <option value="Rotary Twin & Tri Lobe Blowers">
                      {t("form.rotaryTriLobeBlowers")}
                    </option>

                    <option value="Super Helical Hybrid Blowers">
                      {t("form.superHelicalHybridBlower")}
                    </option>
                    <option value="Truck Blowers">
                      {t("form.truckBlowers")}
                    </option>
                    <option value="Bio Gas Compressors">
                      {t("form.bioGasBlowers")}
                    </option>
                    <option value="Dry Vacuum Pumps">
                      {t("form.dryVacuumPumps")}
                    </option>
                    <option value="Liquid Ring Compressors">
                      {t("form.liquidRingCompressors")}
                    </option>
                    <option value="Claw Vacuum">{t("form.clawVacuum")}</option>
                    <option value="Screw Blowers">
                      {t("form.screwBlowers")}
                    </option>
                    <option value="Rotary Sliding Vane Compressors">
                      {t("form.rotarySlidingVaneCompressors")}
                    </option>
                    <option value="Centrifugal Fans & Blowers">
                      {t("form.centrifugalFansBlowers")}
                    </option>
                    <option value="SR Series Blowers">
                      {t("form.srSeriesBlowers")}
                    </option>
                    <option value="Dry Screw Vacuum Pump">
                      {t("form.dryScrewVacuumPump")}
                    </option>
                    <option value="Liquid Ring Vacuum Pumps">
                      {t("form.liquidRingVacuumPumps")}
                    </option>
                    <option value="Oil Vane Vacuum Pump">
                      {t("form.oilVaneVacuumPump")}
                    </option>
                    <option value="Mechanical Vacuum Boosters">
                      {t("form.mechanicalVacuumBoosters")}
                    </option>
                    <option value="MVR Blowers">{t("form.mvrBlowers")}</option>
                    <option value="Vacuum Systems and Packages">
                      {t("form.vacuumSystemsAndPackages")}
                    </option>
                    <option value="Condenser Exhausters">
                      {t("form.condenserExhausters")}
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("form.message")}
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
                    id="declarationContact"
                    className="mt-1"
                    required
                  />
                  <label
                    htmlFor="declarationContact"
                    className="text-sm text-gray-700"
                  >
                    {t("form.declaration")}
                  </label>
                </div>

                {/* CAPTCHA Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Security Verification *
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex items-center gap-3 bg-gray-50 px-4 py-3 border border-gray-300 rounded-lg">
                      <span className="text-lg font-bold text-gray-800 min-w-[80px] text-center">
                        {captchaQuestionFooter} = ?
                      </span>
                      <button
                        type="button"
                        onClick={generateCaptchaFooter}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                        title="Refresh CAPTCHA"
                      >
                        <FaRedo className="text-gray-600 hover:text-blue-600 transition-colors text-sm" />
                      </button>
                    </div>
                    <input
                      type="number"
                      value={captchaInputFooter}
                      onChange={(e) => setCaptchaInputFooter(e.target.value)}
                      required
                      placeholder="Answer"
                      className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Please solve the math problem above to verify you're human
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmittingFooter}
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span>
                    {isSubmittingFooter ? "Sending..." : t("form.sendEnquiry")}
                  </span>
                  {!isSubmittingFooter && (
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
                  )}
                  {isSubmittingFooter && (
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
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
      {/* Popup Disabled */}
      {!showPopup && (
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
              className="w-[92vw] sm:w-[90%] max-w-3xl max-h-[70svh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default HomePagev2;
