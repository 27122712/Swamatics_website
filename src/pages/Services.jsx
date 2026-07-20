import React from "react";
import MainTemplate from "../components/Templates/MainTemplates";
import { useTranslation } from "../contexts/TranslationContext";
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
} from "react-icons/fa";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdSupport,
  MdEngineering,
} from "react-icons/md";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      name: t("services.service.preCommissioning"),
      icon: <FaTools className="text-blue-500" />,
    },
    {
      name: t("services.service.postCommissioning"),
      icon: <FaCheckCircle className="text-green-500" />,
    },
    {
      name: t("services.service.troubleShooting"),
      icon: <HiLightningBolt className="text-yellow-500" />,
    },
    {
      name: t("services.service.technicalSupport"),
      icon: <MdEngineering className="text-purple-500" />,
    },
  ];
  return (
    <MainTemplate>
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-25 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            {t("services.hero.title")}
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            {t("services.hero.description")}
          </p>
        </div>

        {/* Decorative circles (optional like Contact) */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </section>

      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("services.section.title")} <br></br>{" "}
            {t("services.section.titleBreak")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-10">
            {t("services.section.description")}
          </p>

          {/* ✅ Portfolio Images (576 × 370) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-7">
            {[
              {
                src: "/images/on-site-services.png",
                title: t("services.images.onSite"),
              },
              {
                src: "/images/Install.png",
                title: t("services.images.installation"),
              },
              { src: "/images/repair.png", title: t("services.images.repair") },
              {
                src: "/images/Leak-testing-services.png",
                title: t("services.images.leakTesting"),
              },
              {
                src: "/images/Service-level-agreements.png",
                title: t("services.images.serviceAgreements"),
              },
            ].map((img, i) => (
              <figure
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200 group"
                style={{ aspectRatio: "576 / 370" }} // keeps 576×370 proportion
              >
                {/* image */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* centered overlay label */}
                <figcaption className="absolute inset-0 flex items-center justify-center">
                  <span className="px-4 py-4 rounded-2xl text-lg sm:text-base font-semibold text-white bg-black/40 backdrop-blur-sm ring-1 ring-white/25 shadow-md transition group-hover:bg-black/50">
                    {img.title}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* ✅ New "Service Portfolio" Block */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              {t("services.portfolio.title")}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t("services.portfolio.description")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10zz">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
              {t("services.vision.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-3">
              {t("services.vision.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Panel - Get in Touch */}
            {/* Services */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 hover:shadow-3xl transition-shadow duration-500">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <FaTools className="text-white text-sm" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("services.ourServices.title")}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t("services.ourServices.description")}
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

            {/* Right Panel - Send us a Message */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {t("services.form.title")}
                </h3>
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
                      {t("services.form.firstName")}
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
                      {t("services.form.lastName")}
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
                      {t("services.form.emailAddress")}
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
                      {t("services.form.phoneNumber")}
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
                    {t("services.form.companyName")}
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
                    {t("services.form.serviceInterested")}
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                    required
                  >
                    <option value="">{t("services.form.selectService")}</option>
                    <option value="INSTALLATION">
                      {t("services.form.service.installation")}
                    </option>
                    <option value="REPAIR">
                      {t("services.form.service.repair")}
                    </option>
                    <option value="maintenance">
                      {t("services.form.service.leakTesting")}
                    </option>
                    <option value="maintenance">
                      {t("services.form.service.onSite")}
                    </option>
                    <option value="maintenance">
                      {t("services.form.service.serviceAgreements")}
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("services.form.message")}
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
                    {t("services.form.declaration")}
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>{t("services.form.submit")}</span>
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};

export default Services;
