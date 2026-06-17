import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import Select from "react-select";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaIndustry,
  FaArrowRight,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaFileUpload,
  FaCheckCircle,
  FaStar,
  FaHeart,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import {
  MdWork,
  MdLocationOn,
  MdAccessTime,
  MdSchool,
  MdGroup,
  MdEngineering,
  MdBusinessCenter,
  MdDescription,
  MdAttachFile,
  MdSend,
} from "react-icons/md";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [applicationForm, setApplicationForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    experience: "",
    education: "",
    coverLetter: "",
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [savedJobs, setSavedJobs] = useState([]);
  const handleSaveJob = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };
  const handleShare = (job) => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `${job.title} at Swamatics\nApply now!`,
        url: window.location.href,
      });
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Sales & Marketing Engineers",
      subtitle: "Domestic – Vacuum Division",
      department: "Sales",
      location: "Noida/Delhi",
      type: "Full-time",
      salary: "—",
      postedDate: "Recently",
      experience: "Not specified",
      education: "Not specified",
      description:
        "Sales & Marketing Engineer position for Domestic – Vacuum Division.",
    },
    {
      id: 2,
      title: "Business Development Manager (BDM)",
      subtitle: "Vacuum Division",
      department: "Buisness",
      location: "Noida/Delhi",
      type: "Full-time",
      salary: "—",
      postedDate: "Recently",
      experience: "Not specified",
      education: "Not specified",
      description: "BDM role for Vacuum Division.",
    },
    {
      id: 3,
      title: "Business Development Manager (BDM)",
      subtitle: "International – Pressure & Vacuum Division",
      department: "Buisness",
      location: "Noida/Delhi",
      type: "Full-time",
      salary: "—",
      postedDate: "Recently",
      experience: "Not specified",
      education: "Not specified",
      description: "BDM International role for Pressure & Vacuum Division.",
    },
    {
      id: 4,
      title: "After-Sales & Service Incharge",
      subtitle: "Pressure & Vacuum Division",
      department: "Service",
      location: "Noida",
      type: "Full-time",
      salary: "—",
      postedDate: "Recently",
      experience: "Not specified",
      education: "Not specified",
      description:
        "After-Sales & Service Incharge for Pressure & Vacuum Division.",
    },
    {
      id: 5,
      title: "Service Engineer",
      subtitle: "Pressure & Vacuum Division",
      department: "Engineering",
      location: "Noida",
      type: "Full-time",
      salary: "—",
      postedDate: "Recently",
      experience: "Not specified",
      education: "Not specified",
      description: "Service Engineer position for Pressure & Vacuum Division.",
    },
    {
      id: 6,
      title: "Application Engineer",
      subtitle: "Vacuum Division",
      department: "Engineering",
      location: "Noida/Delhi",
      type: "Full-time",
      salary: "—",
      postedDate: "Recently",
      experience: "Not specified",
      education: "Not specified",
      description: "Application Engineer for Vacuum Division.",
    },
    {
      id: 7,
      title: "Project Engineers",
      subtitle: "",
      department: "Engineering",
      location: "Noida",
      type: "Full-time",
      salary: "—",
      postedDate: "Recently",
      experience: "Not specified",
      education: "Not specified",
      description: "Project Engineers for multiple engineering functions.",
    },
  ];

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "Engineering", label: "Engineering" },
    { value: "Buisness", label: "Buisness" },
    { value: "Sales", label: "Sales" },
    { value: "Service", label: "Service" },
    // { value: "R&D", label: "Research & Development" },
  ];

  const predictiveOptions = jobs.filter(
    (job) =>
      searchTerm &&
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSuggestionSelect = (option) => {
    setSearchTerm(option.title);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || predictiveOptions.length === 0) return;
    if (e.key === "ArrowDown") {
      setHighlightedIndex((idx) => (idx + 1) % predictiveOptions.length);
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex(
        (idx) => (idx - 1 + predictiveOptions.length) % predictiveOptions.length
      );
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      handleSuggestionSelect(predictiveOptions[highlightedIndex]);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Validate file size (5MB max)
      if (
        applicationForm.resume &&
        applicationForm.resume.size > 5 * 1024 * 1024
      ) {
        setSubmitStatus({
          type: "error",
          message: "File size exceeds 5MB limit. Please upload a smaller file.",
        });
        setIsSubmitting(false);
        return;
      }

      // Create FormData object
      const formData = new FormData();

      // Combine firstName and lastName for name field
      const fullName =
        `${applicationForm.firstName} ${applicationForm.lastName}`.trim();
      formData.append("name", fullName);
      formData.append("email", applicationForm.email);
      formData.append("mobile", applicationForm.phone);
      formData.append("message", applicationForm.coverLetter);

      // Append the resume file if it exists
      if (applicationForm.resume) {
        formData.append("attachment", applicationForm.resume);
      }

      // Log form data for debugging (without file content)
      console.log("Submitting form data:", {
        name: fullName,
        email: applicationForm.email,
        mobile: applicationForm.phone,
        message: applicationForm.coverLetter,
        hasAttachment: !!applicationForm.resume,
        attachmentName: applicationForm.resume?.name,
        attachmentSize: applicationForm.resume?.size,
      });

      // Send POST request to the API endpoint
      const response = await fetch(
        "https://swamatics.softedgeappstore.in/careers-mail.php",
        {
          method: "POST",
          body: formData,
          // Don't set Content-Type header - let browser set it with boundary for multipart/form-data
        }
      );

      // Log response details for debugging
      console.log("Response status:", response.status);
      console.log(
        "Response headers:",
        Object.fromEntries(response.headers.entries())
      );

      // Try to parse response as text first
      const responseText = await response.text();
      console.log("Response body:", responseText);

      // Try to parse as JSON if possible
      let responseData;
      try {
        responseData = JSON.parse(responseText);
        console.log("Parsed JSON response:", responseData);
      } catch (e) {
        // Not JSON, use text response
        responseData = responseText;
      }

      if (response.ok) {
        // Check if response indicates success (some APIs return 200 with error messages)
        if (
          typeof responseData === "string" &&
          (responseData.toLowerCase().includes("error") ||
            responseData.toLowerCase().includes("fail"))
        ) {
          throw new Error(responseData || "Server returned an error message");
        }

        setSubmitStatus({
          type: "success",
          message: "Application submitted successfully!",
        });
        // Reset form after successful submission
        setTimeout(() => {
          setShowApplicationForm(false);
          setApplicationForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            linkedin: "",
            experience: "",
            education: "",
            coverLetter: "",
            resume: null,
          });
          setSubmitStatus(null);
        }, 2000);
      } else {
        // Server returned an error status
        const errorMessage =
          typeof responseData === "object" && responseData.message
            ? responseData.message
            : typeof responseData === "string"
            ? responseData
            : `Server error: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error submitting application:", error);

      // Provide more specific error messages
      let errorMessage = "Failed to submit application. Please try again.";

      if (error.name === "TypeError" && error.message.includes("fetch")) {
        errorMessage =
          "Network error. Please check your internet connection and try again.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setApplicationForm((prev) => ({ ...prev, resume: file }));
  };

  return (
    <MainTemplate>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative pt-28 md:pt-32 pb-14 md:pb-20 px-4 md:px-8 bg-blue-600">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto pb-0 md:pb-0 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
              Join Our Team
            </h1>
            <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Build your career with Swamatics and be part of a team that's
              shaping the future of industrial solutions
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm mb-2 md:mb-4">
              <div className="flex items-center gap-2 bg-white bg-opacity-80 px-6 py-3 rounded-full text-blue-900 font-semibold shadow">
                <FaUsers className="text-blue-700 text-lg" />
                <span>50+ Open Positions</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-80 px-6 py-3 rounded-full text-blue-900 font-semibold shadow">
                <FaIndustry className="text-blue-700 text-lg" />
                <span>Global Opportunities</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-80 px-6 py-3 rounded-full text-blue-900 font-semibold shadow">
                <FaStar className="text-blue-700 text-lg" />
                <span>Best Workplace</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 md:py-14 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto pb-0 md:pb-0">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 mt-[-28px] md:mt-[-40px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                {/* Predictive Search Input */}
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() =>
                      setTimeout(() => setShowSuggestions(false), 150)
                    }
                    onKeyDown={handleKeyDown}
                    className="w-full pl-10 pr-10 py-3.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      aria-label="Clear search"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 focus:outline-none"
                      onClick={() => setSearchTerm("")}
                      tabIndex={0}
                    >
                      <FaTimes className="text-lg" />
                    </button>
                  )}
                  {/* Predictive Dropdown */}
                  {searchTerm &&
                    showSuggestions &&
                    predictiveOptions.length > 0 && (
                      <ul className="absolute z-10 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-56 overflow-y-auto">
                        {predictiveOptions.map((option, idx) => (
                          <li
                            key={option.id}
                            className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${
                              highlightedIndex === idx ? "bg-blue-100" : ""
                            }`}
                            onMouseDown={() => handleSuggestionSelect(option)}
                            onMouseEnter={() => setHighlightedIndex(idx)}
                          >
                            <span className="font-semibold text-blue-700">
                              {option.title}
                            </span>
                            <span className="ml-2 text-gray-500 text-xs">
                              {option.location}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
                {/* Department Dropdown with react-select */}
                <div className="relative flex items-center">
                  {/* Place icon inline, not absolutely positioned */}
                  <span className="pl-2 pr-2 text-gray-400">
                    <FaFilter className="text-lg" />
                  </span>
                  <div className="flex-1">
                    <Select
                      options={departments}
                      value={departments.find(
                        (d) => d.value === selectedDepartment
                      )}
                      onChange={(opt) => setSelectedDepartment(opt.value)}
                      classNamePrefix="react-select"
                      isSearchable={false}
                      styles={{
                        control: (base) => ({
                          ...base,
                          minHeight: "48px",
                          borderRadius: "0.75rem",
                          borderColor: "#e5e7eb",
                          boxShadow: "none",
                          paddingLeft: 0,
                        }),
                        valueContainer: (base) => ({ ...base, paddingLeft: 0 }),
                        menu: (base) => ({ ...base, zIndex: 20 }),
                      }}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 12,
                        colors: {
                          ...theme.colors,
                          primary25: "#e0e7ff",
                          primary: "#2563eb",
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="text-left md:md:text-right flex items-center justify-start md:justify-end">
                  <span className="text-gray-600">
                    {filteredJobs.length} position
                    {filteredJobs.length !== 1 ? "s" : ""} found
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-1 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto pb-0 md:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  {/* Job Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-0 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          {job.urgent && (
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                              Urgent
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <MdBusinessCenter className="text-blue-500" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MdLocationOn className="text-green-500" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MdAccessTime className="text-purple-500" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:text-right">
                        <div className="text-lg font-bold text-blue-600">
                          {job.salary}
                        </div>
                        <div className="text-xs text-gray-500">
                          Posted {job.postedDate}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 line-clamp-2 mb-4">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-2">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MdWork className="text-blue-500" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MdSchool className="text-green-500" />
                        <span>{job.education}</span>
                      </div>
                    </div>
                  </div>

                  {/* Job Footer */}
                  <div className="p-6 bg-gray-50">
                    <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 items-stretch md:items-center">
                      <div className="flex items-center gap-4 text-lg text-gray-600">
                        {/* Save Job */}
                        {/* <button
    className="flex items-center gap-1"
    onClick={() => handleSaveJob(job.id)}
  >
    <FaHeart
      className={savedJobs.includes(job.id) ? "text-red-600" : "text-red-300"}
    />
    <span>{savedJobs.includes(job.id) ? "Saved" : "Save Job"}</span>
  </button> */}

                        {/* Share */}
                        <button
                          className="flex items-center gap-1"
                          onClick={() => handleShare(job)}
                        >
                          <FaEnvelope className="text-blue-400" />
                          <span>Share</span>
                        </button>
                      </div>

                      <button
                        onClick={() => handleApply(job)}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group w-full md:w-auto"
                      >
                        <span>Apply Now</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBriefcase className="text-4xl text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No jobs found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search criteria
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-10 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto pb-0 md:pb-0">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                Why Join Swamatics?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job - we offer a career path with
                opportunities for growth, learning, and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaGraduationCap className="text-4xl" />,
                  title: "Learning & Development",
                  description:
                    "Continuous learning opportunities and professional development programs.Every day brings new challenges... and new opportunities.",
                },
                {
                  icon: <FaUsers className="text-4xl" />,
                  title: "Great Team",
                  description:
                    "Together, we shape a future driven by innovation, powered by technology, defined by excellence—and sustained by care.",
                },
                {
                  icon: <FaIndustry className="text-4xl" />,
                  title: "Innovation",
                  description: "Innovating Today. Sustaining Tomorrow.",
                },
                {
                  icon: <FaHeart className="text-4xl" />,
                  title: "Work-Life Balance",
                  description:
                    "Flexible work arrangements and employee wellness programs",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90svh] overflow-y-auto">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 items-stretch md:items-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    Apply for {selectedJob?.title}
                  </h2>
                  <button
                    onClick={() => {
                      setShowApplicationForm(false);
                      setSubmitStatus(null);
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
                <p className="text-gray-600 mt-2">
                  Please fill out the form below to submit your application
                </p>
              </div>

              <form
                onSubmit={handleFormSubmit}
                className="p-4 sm:p-6 space-y-5 sm:space-y-6"
              >
                {/* Status Message */}
                {submitStatus && (
                  <div
                    className={`p-4 rounded-xl ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {submitStatus.type === "success" ? (
                        <FaCheckCircle className="text-green-600" />
                      ) : (
                        <FaTimes className="text-red-600" />
                      )}
                      <span className="font-semibold">
                        {submitStatus.message}
                      </span>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationForm.firstName}
                      onChange={(e) =>
                        setApplicationForm((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationForm.lastName}
                      onChange={(e) =>
                        setApplicationForm((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicationForm.email}
                      onChange={(e) =>
                        setApplicationForm((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicationForm.phone}
                      onChange={(e) =>
                        setApplicationForm((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    value={applicationForm.linkedin}
                    onChange={(e) =>
                      setApplicationForm((prev) => ({
                        ...prev,
                        linkedin: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationForm.experience}
                      onChange={(e) =>
                        setApplicationForm((prev) => ({
                          ...prev,
                          experience: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 5 years"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Education *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationForm.education}
                      onChange={(e) =>
                        setApplicationForm((prev) => ({
                          ...prev,
                          education: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., B.Tech Mechanical Engineering"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={applicationForm.coverLetter}
                    onChange={(e) =>
                      setApplicationForm((prev) => ({
                        ...prev,
                        coverLetter: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <FaFileUpload className="text-3xl text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-1">
                        {applicationForm.resume
                          ? applicationForm.resume.name
                          : "Click to upload or drag and drop"}
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF, DOC, or DOCX (Max 5MB)
                      </p>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setShowApplicationForm(false);
                      setSubmitStatus(null);
                    }}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <MdSend className="text-lg" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </MainTemplate>
  );
};

export default Career;
