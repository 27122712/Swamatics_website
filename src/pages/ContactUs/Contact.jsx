import React, { useState, useEffect } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
  FaHeadset,
  FaCheckCircle,
  FaUsers,
  FaTools,
  FaAward,
  FaRocket,
  FaStar,
  FaRedo,
} from "react-icons/fa";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdSupport,
  MdEngineering,
} from "react-icons/md";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import sendEmail from "../../components/sendmail/sendmail";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
    country: "",
    productType: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");

  // Generate a random math CAPTCHA
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

  // Generate CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate CAPTCHA
    const userAnswer = parseInt(captchaInput.trim());
    if (isNaN(userAnswer) || userAnswer !== captchaAnswer) {
      toast.error("Please solve the CAPTCHA correctly.");
      generateCaptcha(); // Generate new CAPTCHA on wrong answer
      return;
    }

    setIsSubmitting(true);

    try {
      // Map form data to the format expected by sendEmail
      const emailData = {
        name: formData.name || "",
        firstName: formData.name?.split(" ")[0] || "",
        lastName: formData.name?.split(" ").slice(1).join(" ") || "",
        email: formData.email || "",
        phone: formData.mobile || "",
        company: formData.companyName || "",
        companyName: formData.companyName || "",
        productInterested: formData.productType || "",
        service: formData.productType || "",
        message: formData.additionalInfo || "",
        additionalInfo: formData.additionalInfo || "",
      };

      await sendEmail(emailData);
      toast.success("Thank you! Your message has been sent successfully.");

      // Reset form
      setFormData({
        name: "",
        companyName: "",
        email: "",
        mobile: "",
        country: "",
        productType: "",
        additionalInfo: "",
      });

      // Reset CAPTCHA
      setCaptchaInput("");
      generateCaptcha();

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MdPhone className="text-2xl" />,
      title: "Phone Number",
      content: "+91-9910302163",
      href: "tel:+919910302163",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <MdEmail className="text-2xl" />,
      title: "Sales Email",
      content: "sales@swamatics.com",
      href: "mailto:sales@swamatics.com",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Service Support",
      content: "service@swamatics.com",
      href: "mailto:service@swamatics.com",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <MdLocationOn className="text-2xl" />,
      title: "Office Address",
      content: "C-2, SECTOR-3, NOIDA-201301, (U.P.) INDIA",
      href: "https://maps.google.com/maps?q=C-2,+SECTOR-3,+NOIDA-201301,+UP,+INDIA",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const services = [
    {
      name: "Blower Division",
      icon: <FaCheckCircle className="text-green-500" />,
    },
    {
      name: "Vacuum Division",
      icon: <FaCheckCircle className="text-green-500" />,
    },
    {
      name: "Compressor Division",
      icon: <FaCheckCircle className="text-green-500" />,
    },
  ];

  const stats = [
    {
      number: "45+",
      label: "Years Experience",
      icon: <FaAward className="text-yellow-500" />,
    },
    {
      number: "200+",
      label: "Happy Clients",
      icon: <FaUsers className="text-blue-500" />,
    },
    {
      number: "10000+",
      label: "Projects Completed",
      icon: <FaRocket className="text-green-500" />,
    },
    {
      number: "99%",
      label: "Customer Satisfaction",
      icon: <FaStar className="text-orange-500" />,
    },
  ];

  const productTypes = [
    "Rotary Twin Lobe Blowers",
    "Rotary Tri Lobe Blowers",
    "Process Gas Blowers/ Gas Boosters",
    "Turbo Blowers- Integrally Geared Type",
    "Super Hybrid Helical Blowers",
    "Truck Blowers",
    "Bio Gas Compressors",
    "Dry Vacuum Pump",
    "Rotary Sliding Vane Compressors",
    "Centrifugal Blowers",
    "SR Series Blowers",
    "Dry Screw Vacuum Pump-Combined Variable Pitch",
    "Liquid Ring Vacuum Pump",
    "Oil Vane Vacuum Pump",
    "Mechanical Vacuum Boosters",
    "MVR Blowers",
    "Vacuum Systems & Packages",
    "Condenser Exhausters",
    "Claw Vacuum",
    "Liquid ring compressors",
    "Screw blower",
  ];

  return (
    <MainTemplate>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
          {/* Hero Background Pattern */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-20 left-32 w-40 h-40 bg-white/5 rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-32 right-10 w-28 h-28 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          </div>

          <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="flex justify-center items-center mb-6">
                {/* <HiSparkles className="text-yellow-400 text-3xl mr-4 animate-bounce" /> */}
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Contact Us
                </h1>
                {/* <HiSparkles className="text-yellow-400 text-3xl ml-4 animate-bounce delay-300" /> */}
              </div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Get in touch with our team of experienced engineers for all your
                industrial equipment needs
              </p>
              <div className="mt-8 flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <span className="text-blue-200 font-medium">
                    🏆 Trusted by 500+ Companies Worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          {/* Stats Section */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/50 group"
              >
                <div
                  className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${info.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {info.title}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium block"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600 font-medium">{info.content}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 hover:shadow-3xl transition-shadow duration-500">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <FaPaperPlane className="text-white text-sm" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                </div>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center">
                  <FaCheckCircle className="text-green-500 text-xl mr-3" />
                  <span className="text-green-800 font-medium">
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-300"
                      // placeholder="Your full name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-300"
                      // placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-300"
                      // placeholder="your@email.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                      Mobile *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-300"
                      // placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                    Product Type
                  </label>
                  <select
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-300"
                  >
                    <option value="">Select Product Type</option>
                    {productTypes.map((product, index) => (
                      <option key={index} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-300 resize-none"
                    // placeholder="Tell us more about your requirements..."
                  />
                </div>

                {/* CAPTCHA Section */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                    Security Verification *
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 flex items-center gap-3 bg-gray-50 px-4 py-4 border-2 border-gray-200 rounded-xl">
                      <span className="text-lg font-bold text-gray-800 min-w-[80px] text-center">
                        {captchaQuestion} = ?
                      </span>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                        title="Refresh CAPTCHA"
                      >
                        <FaRedo className="text-gray-600 hover:text-blue-600 transition-colors" />
                      </button>
                    </div>
                    <input
                      type="number"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      required
                      placeholder="Answer"
                      className="w-40 px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-300"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Please solve the math problem above to verify you're human
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white py-4 px-8 rounded-xl font-bold hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-3xl hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed transform"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg" />
                      <span>Send Message</span>
                      <HiSparkles className="text-lg animate-pulse" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Services & Map Section */}
            <div className="space-y-8">
              {/* Services */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 hover:shadow-3xl transition-shadow duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <FaTools className="text-white text-sm" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Products
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  SWAM has a strong team of highly experienced and qualified
                  engineers deployed to render all kinds products to all our
                  esteemed customers.
                </p>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-3xl transition-shadow duration-500">
                <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                      <MdLocationOn className="text-white text-sm" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Find Us
                    </h3>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Visit our office in Noida, Uttar Pradesh
                  </p>
                </div>
                <div className="h-64 bg-gray-100 relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.373073919392!2d77.32892831455068!3d28.593298582431804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55f3e7c4e8b%3A0x8e8b8e8b8e8b8e8b!2sSector%203%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1625736493123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SWAM Office Location"
                    className="hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 hover:shadow-3xl transition-shadow duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <FaGlobe className="text-white text-sm" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Follow Us
                  </h3>
                </div>
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
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gray-900 rounded-3xl p-8 text-center text-white shadow-2xl hover:shadow-3xl transition-shadow duration-500 relative overflow-hidden">
            {/* CTA Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-4 left-8 w-24 h-24 bg-white rounded-full animate-pulse delay-700"></div>
              <div className="absolute bottom-8 right-4 w-18 h-18 bg-white rounded-full animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center items-center mb-4">
                <h3 className="text-3xl font-bold">Ready to Get Started?</h3>
              </div>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Our team is ready to help you with all your industrial equipment
                needs. Contact us today for expert consultation and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+919910302163"
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                >
                  <FaPhone className="text-lg" />
                  <span>Call Now</span>
                </a>
                <a
                  href="mailto:sales@swamatics.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-3 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                >
                  <FaEnvelope className="text-lg" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Contact;
