import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
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
} from "react-icons/fa";

const Certificates = () => {
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "CE Certificate (For Europe)",
      description:
        "International inspection and testing certification ensuring product safety and compliance",
      category: "Safety & Inspection",
      icon: (
        <img
          src="/images/certificates/CE-Certificate.png"
          alt="FEMKO Icon"
          className="object-contain w-full h-full"
        />
      ),
      image: "/images/certificates/femko-certificate.jpg",
      year: "2023",
      validity: "Valid",
      validUntil: "2026",
      pdfUrl: "/images/certificates/femko-certificate.pdf",
    },

    {
      id: 2,
      title: "ATEX Certificate",
      description:
        "German technical inspection association certification for quality management systems",
      category: "Quality Management",
      icon: (
        <img
          src="/images/certificates/atex.png"
          alt="FEMKO Icon"
          className="object-contain w-full h-full"
        />
      ),
      year: "2023",
      validity: "Valid",
      image: "/images/certificates/ATEX Certificate.jpg", // ✅ updated image
      pdfUrl: "/images/certificates/ATEX Certificate.pdf",
      issuer: "TUV Nord Group",
      validUntil: "2026",
    },
    {
      id: 3,
      title: "ISO 14001:2015 Certificate",
      description:
        "Environmental Management System certification demonstrating our commitment to sustainability",
      category: "Environmental",
      icon: (
        <img
          src="/images/certificates/ISO_14001.png"
          alt="FEMKO Icon"
          className="object-contain w-full h-full"
        />
      ),
      year: "2023",
      validity: "Valid",
      image: "/images/certificates/iso-14001-certificate.jpg", // ← ✅ updated here
      pdfUrl: "/images/certificates/ISO 14001-2015.pdf",
      issuer: "ISO Certification Body",
      validUntil: "2026",
    },

    {
      id: 4,
      title: "ISO 9001 - 2015",
      description:
        "Official registration certificate validating our business operations and compliance",
      category: "Business Registration",
      icon: (
        <img
          src="/images/certificates/ISO_9001.png"
          alt="FEMKO Icon"
          className="object-contain w-full h-full"
        />
      ),
      year: "2023",
      validity: "Valid",
      image: "/images/certificates/ISO 9001 -2015.jpg", // ✅ NEW image path (watch spacing!)
      pdfUrl: "/images/certificates/ISO 9001 -2015.pdf", // ⚠️ update this if you have a new PDF
      issuer: "Government Authority",
      validUntil: "Permanent",
    },

    // {
    //   id: 5,
    //   title: "Appendix To Certificate",
    //   description:
    //     "Additional certification documentation supporting our quality management system",
    //   category: "Quality Management",
    //   icon: <FaCheckCircle />,
    //   year: "2023",
    //   validity: "Valid",
    //   image: "/images/certificates/appendix-certificate.jpg",
    //   pdfUrl: "/images/certificates/appendix-certificate.pdf",
    //   issuer: "Certification Authority",
    //   validUntil: "2026",
    // },
    {
      id: 6,
      title: "ISO 45001:2018",
      description:
        "Occupational Health and Safety Management System certification ensuring workplace safety",
      category: "Health & Safety",
      icon: <FaHardHat />,
      year: "2023",
      validity: "Valid",
      image: "/images/certificates/health-safety-certificate.jpg",
      pdfUrl: "/images/certificates/health-safety-certificate.pdf",
      issuer: "ISO Certification Body",
      validUntil: "2026",
    },
  ];

  const certificationStandards = [
    {
      standard: "ISO 9001:2015",
      title: "Quality Management System",
      description:
        "Demonstrates our ability to consistently provide products that meet customer and regulatory requirements",
      icon: <FaAward />,
    },
    {
      standard: "ISO 14001:2015",
      title: "Environmental Management",
      description:
        "Shows our commitment to environmental responsibility and sustainable business practices",
      icon: <FaLeaf />,
    },
    {
      standard: "ISO 45001:2018",
      title: "Occupational Health & Safety",
      description:
        "Ensures the highest standards of workplace safety and employee well-being",
      icon: <FaHardHat />,
    },
    {
      standard: "CE Marking",
      title: "European Conformity",
      description:
        "Confirms compliance with European Union safety, health, and environmental requirements",
      icon: <FaGlobe />,
    },
    {
      standard: "API Standards",
      title: "American Petroleum Institute",
      description:
        "Meets the rigorous standards for equipment used in petroleum and natural gas industries",
      icon: <FaIndustry />,
    },
    {
      standard: "ASME BPVC",
      title: "Boiler & Pressure Vessel Code",
      description:
        "Compliance with international standards for pressure equipment design and manufacturing",
      icon: <FaShieldAlt />,
    },
  ];

  const companyValues = [
    {
      value: "Integrity",
      description:
        "Maintaining the highest ethical standards in all our business practices",
      icon: <FaHandshake />,
    },
    {
      value: "High Quality",
      description:
        "Delivering products that exceed customer expectations and industry standards",
      icon: <FaStar />,
    },
    {
      value: "Reliability",
      description:
        "Consistent performance and dependable solutions for our customers",
      icon: <FaCheckCircle />,
    },
    {
      value: "Innovation",
      description:
        "Continuously improving and developing cutting-edge technologies",
      icon: <FaIndustry />,
    },
  ];

  const certificationStats = [
    { value: "45+", label: "Years of Excellence" },
    { value: "6", label: "Major Certifications" },
    { value: "100%", label: "Compliance Rate" },
    { value: "Global", label: "Recognition" },
  ];

  // Handler functions
  const handleViewCertificate = (certificate, event) => {
    event.stopPropagation(); // Prevent card click
    setSelectedCertificate(certificate);
    setViewModalOpen(true);
  };

  const handleDownloadCertificate = (certificate, event) => {
    event.stopPropagation(); // Prevent card click
    // Create a temporary link to download the certificate
    const link = document.createElement("a");
    link.href = certificate.pdfUrl || certificate.image;
    link.download = `${certificate.title.replace(/\s+/g, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeModal = () => {
    setViewModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 pt-16 pb-12">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center mt-15 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-8 ">
              <span className="text-sm font-medium">Certified Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our Certificates & Accreditations
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              At SWAM, we continue to grow year after year with a focus on
              integrity, quality, reliability, and innovation. Our
              certifications validate our commitment to excellence and
              compliance with the highest international standards.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <div className="flex items-center gap-2 text-blue-200">
                <FaCertificate className="text-xl" />
                <span className="font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <FaGlobe className="text-xl" />
                <span className="font-medium">International Standards</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <FaAward className="text-xl" />
                <span className="font-medium">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each certificate represents our unwavering commitment to quality,
              safety, and environmental responsibility in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border ${
                  activeCertificate === index
                    ? "ring-2 ring-blue-500 border-blue-200"
                    : "border-gray-200"
                }`}
                onClick={() => setActiveCertificate(index)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white text-blue-600 text-xl overflow-hidden">
                      {certificate.icon ? (
                        <span className="text-2xl">{certificate.icon}</span>
                      ) : (
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className={`object-contain ${
                            certificate.id === 3
                              ? "w-[120%] h-[120%]"
                              : "w-[80%] h-[80%]"
                          }`}
                        />
                      )}
                    </div>

                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        {certificate.validity}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {certificate.year}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">
                      {certificate.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {certificate.description}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex-1 justify-center"
                      onClick={(e) => handleViewCertificate(certificate, e)}
                    >
                      <FaEye />
                      <span>View</span>
                    </button>
                    {/* <button
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium flex-1 justify-center"
                      onClick={(e) => handleDownloadCertificate(certificate, e)}
                    >
                      <FaDownload />
                      <span>Download</span>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Standards Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              International Standards Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our adherence to international standards ensures that our products
              meet the highest quality and safety requirements across global
              markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                  {standard.icon}
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2">
                  {standard.standard}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {standard.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="container mx-auto px-4 lg:col-span-2">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                  Our Quality Commitment
                </h2>
                <div className="space-y-6">
                  <p className="text-2xl text-gray-700 italic text-center leading-relaxed border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                    "Quality is not an act, it is a habit. At SWAM, we have made
                    excellence a way of life, ensuring every product meets the
                    highest international standards."
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our certifications are not just documents on the wall – they
                    represent our daily commitment to delivering products that
                    exceed expectations. From raw material inspection to final
                    testing, every step is governed by these rigorous standards.
                  </p>
                  <div className="flex flex-wrap justify-center gap-8 mt-8">
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaUserTie className="text-2xl text-blue-600" />
                      <span className="font-medium">Expert Quality Team</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaClipboardCheck className="text-2xl text-blue-600" />
                      <span className="font-medium">Rigorous Testing</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaGlobe className="text-2xl text-blue-600" />
                      <span className="font-medium">Global Standards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg h-fit">
              <div className="text-center mb-8">
                <FaCertificate className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Certification Excellence
                </h3>
                <p className="text-gray-600">
                  Our commitment to quality is reflected in our achievements
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {certificationStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      {/* <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Quality Commitment
            </h2>
            <div className="space-y-6">
              <p className="text-2xl text-gray-700 italic text-center leading-relaxed border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                "Quality is not an act, it is a habit. At Swamatics, we have
                made excellence a way of life, ensuring every product meets the
                highest international standards."
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our certifications are not just documents on the wall – they
                represent our daily commitment to delivering products that
                exceed expectations. From raw material inspection to final
                testing, every step is governed by these rigorous standards.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaUserTie className="text-2xl text-blue-600" />
                  <span className="font-medium">Expert Quality Team</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaClipboardCheck className="text-2xl text-blue-600" />
                  <span className="font-medium">Rigorous Testing</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaGlobe className="text-2xl text-blue-600" />
                  <span className="font-medium">Global Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trust in Our Certified Excellence
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Partner with a company that doesn't just meet standards – we
              exceed them. Our certifications are your assurance of quality,
              reliability, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg">
                <span>Download All Certificates</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button> */}
              {/* <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium text-lg">
                <span>Contact Quality Team</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate View Modal */}
      {viewModalOpen && selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">
                  {selectedCertificate.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {selectedCertificate.category}
                  </p>
                </div>
              </div>
              <button
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                {selectedCertificate.image ? (
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-auto rounded-lg"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  className={`flex flex-col items-center justify-center text-center py-12 ${
                    selectedCertificate.image ? "hidden" : "flex"
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center border border-blue-200 bg-white">
                    {selectedCertificate.icon ? (
                      selectedCertificate.icon
                    ) : selectedCertificate.image ? (
                      <img
                        src={selectedCertificate.image}
                        alt={selectedCertificate.title}
                        className="object-contain w-full h-full"
                      />
                    ) : null}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedCertificate.title}
                  </h4>
                  <p className="text-gray-600 mb-4">Certificate Preview</p>
                  <span className="text-sm text-gray-500">
                    Original certificate available for download
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">
                    Description:
                  </span>
                  <span className="text-gray-900 text-right max-w-xs">
                    {selectedCertificate.description}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Issued By:</span>
                  <span className="text-gray-900">
                    {selectedCertificate.issuer}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Issue Year:</span>
                  <span className="text-gray-900">
                    {selectedCertificate.year}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">
                    Valid Until:
                  </span>
                  <span className="text-gray-900">
                    {selectedCertificate.validUntil}
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium text-gray-700">Status:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedCertificate.validity.toLowerCase() === "valid"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {selectedCertificate.validity}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-6 border-t border-gray-200">
              {/* <button
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                onClick={(e) =>
                  handleDownloadCertificate(selectedCertificate, e)
                }
              >
                <FaDownload />
                <span>Download PDF</span>
              </button> */}
              <button
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                onClick={closeModal}
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default Certificates;
