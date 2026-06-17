import React, { useState, useEffect } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCrown,
  FaStar,
  FaGem,
  FaRocket,
  FaFire,
  FaLightbulb,
  FaShieldAlt,
  FaMagic,
  FaBolt,
} from "react-icons/fa";

const images = [
  { src: "/new_images/Image1.jpg", },
  { src: "/new_images/Image2.jpg", },
  { src: "/new_images/Image3.jpg", },
  { src: "/new_images/Image4.jpg", },
  // { src: "/new_images/Image5.webp", },
  { src: "/new_images/Image6.png", },
  { src: "/new_images/Image7.png", },
  { src: "/new_images/Image8.jpg", },
  { src: "/new_images/Image9.png", },
  { src: "/new_images/Image10.png",},
  // { src: "/images/extra/1.png",},
  // { src: "/images/extra/2.png",},
  { src: "/images/extra/5.png",},
  { src: "/images/extra/6.png",},
  { src: "/images/extra/7.png",},
  // { src: "/images/extra/8.png",},

];
// Custom styles for complex animations not available in TailwindCSS
const customStyles = `
  .particle-0 { width: 4px; height: 4px; top: 20%; left: 10%; animation-delay: 0s; }
  .particle-1 { width: 6px; height: 6px; top: 60%; left: 20%; animation-delay: 0.5s; }
  .particle-2 { width: 3px; height: 3px; top: 40%; left: 80%; animation-delay: 1s; }
  .particle-3 { width: 5px; height: 5px; top: 80%; left: 70%; animation-delay: 1.5s; }
  .particle-4 { width: 4px; height: 4px; top: 30%; left: 60%; animation-delay: 2s; }
  .particle-5 { width: 7px; height: 7px; top: 70%; left: 40%; animation-delay: 2.5s; }
  .particle-6 { width: 3px; height: 3px; top: 15%; left: 85%; animation-delay: 3s; }
  .particle-7 { width: 5px; height: 5px; top: 85%; left: 15%; animation-delay: 3.5s; }
  .particle-8 { width: 4px; height: 4px; top: 50%; left: 5%; animation-delay: 4s; }
  .particle-9 { width: 6px; height: 6px; top: 25%; left: 95%; animation-delay: 4.5s; }
  .particle-10 { width: 3px; height: 3px; top: 75%; left: 25%; animation-delay: 5s; }
  .particle-11 { width: 5px; height: 5px; top: 35%; left: 75%; animation-delay: 5.5s; }
  .particle-12 { width: 4px; height: 4px; top: 65%; left: 55%; animation-delay: 0.2s; }
  .particle-13 { width: 6px; height: 6px; top: 45%; left: 35%; animation-delay: 0.7s; }
  .particle-14 { width: 3px; height: 3px; top: 55%; left: 85%; animation-delay: 1.2s; }

  .cta-particle-0 { width: 3px; height: 3px; top: 20%; left: 20%; animation-delay: 0s; }
  .cta-particle-1 { width: 4px; height: 4px; top: 40%; left: 80%; animation-delay: 1s; }
  .cta-particle-2 { width: 2px; height: 2px; top: 60%; left: 10%; animation-delay: 2s; }
  .cta-particle-3 { width: 5px; height: 5px; top: 80%; left: 70%; animation-delay: 3s; }
  .cta-particle-4 { width: 3px; height: 3px; top: 30%; left: 50%; animation-delay: 4s; }
  .cta-particle-5 { width: 4px; height: 4px; top: 70%; left: 30%; animation-delay: 5s; }
  .cta-particle-6 { width: 2px; height: 2px; top: 10%; left: 90%; animation-delay: 6s; }
  .cta-particle-7 { width: 3px; height: 3px; top: 90%; left: 60%; animation-delay: 7s; }
  .cta-particle-8 { width: 4px; height: 4px; top: 50%; left: 15%; animation-delay: 0.5s; }
  .cta-particle-9 { width: 2px; height: 2px; top: 25%; left: 85%; animation-delay: 1.5s; }

  .card-pattern-innovation {
    background-image: radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px);
    background-size: 20px 20px;
  }

  .card-pattern-leadership {
    background-image: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%);
    background-size: 30px 30px;
  }

  .card-pattern-environment {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" fill="rgba(255,255,255,0.1)"/></svg>');
  }

  .card-pattern-technology {
    background-image: linear-gradient(90deg, rgba(255,255,255,0.1) 50%, transparent 50%);
    background-size: 40px 40px;
  }

  .card-pattern-service {
    background-image: radial-gradient(ellipse, rgba(255,255,255,0.1) 30%, transparent 30%);
    background-size: 50px 30px;
  }

  .button-glow {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
  }

  .cta-button:hover .button-glow {
    left: 100%;
  }
`;

const Awards = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };
  
  const handleContactUs = () => {
    // Add your contact navigation logic
    window.location.href = '/contact-us';
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
    .filter(p => p.name.toLowerCase().includes(q))
    .slice(0, 12);

  setSearchResults(results);
};
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Enhanced awards data with creative elements
  const awards = [
   {
    id: 1,
    title: "Indo Global Entrepreneurship Conclave 2023",
    year: "2023",
    organization: "Industry Excellence Council",
    category: "Innovation",
    image: "/images/INDO.png",
    bgColor: "slate-400",
    bgPattern: "innovation",
  },
    {
      id: 2,
      title: "MSME CHAMBER OF COMMERCE AND INDUSTRY OF INDIA",
      year: "2024",
      organization: "Workplace Excellence Institute",
      category: "Leadership",
      image:
        "/images/Award.png",
      // description:
      //   "Awarded for creating an exceptional workplace environment and fostering innovation through collaborative culture.",
      // impact: "98% Employee Satisfaction",
          bgColor: "slate-400",
      icon: <FaCrown />,
      bgPattern: "leadership",
    },
    // {
    //   id: 3,
    //   title: "Sustainability Champion",
    //   year: "2023",
    //   organization: "Green Business Alliance",
    //   category: "Environment",
    //   image:
    //     "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop&crop=center",
    //   description:
    //     "Honored for outstanding commitment to environmental sustainability and pioneering eco-friendly industrial solutions.",
    //   impact: "50% Carbon Reduction",
    //   gradientFrom: "#ffecd2",
    //   gradientTo: "#fcb69f",
    //   icon: <FaGem />,
    //   bgPattern: "environment",
    // },
    // {
    //   id: 4,
    //   title: "Digital Transformation Leader",
    //   year: "2022",
    //   organization: "Tech Innovation Awards",
    //   category: "Technology",
    //   image:
    //     "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&crop=center",
    //   description:
    //     "Recognized for exceptional digital transformation initiatives that revolutionize traditional manufacturing processes.",
    //   impact: "300% Process Speed",
    //   gradientFrom: "#a8edea",
    //   gradientTo: "#fed6e3",
    //   icon: <FaRocket />,
    //   bgPattern: "technology",
    // },
    // {
    //   id: 5,
    //   title: "Customer Excellence Award",
    //   year: "2022",
    //   organization: "Customer Service Institute",
    //   category: "Service",
    //   image:
    //     "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
    //   description:
    //     "Awarded for delivering outstanding customer service and maintaining the highest standards of client satisfaction.",
    //   impact: "100% Client Retention",
    //   gradientFrom: "#ff9a9e",
    //   gradientTo: "#fecfef",
    //   icon: <FaShieldAlt />,
    //   bgPattern: "service",
    // },
    // {
    //   id: 6,
    //   title: "Industry Pioneer Award",
    //   year: "2021",
    //   organization: "Business Leadership Forum",
    //   category: "Leadership",
    //   image:
    //     "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop&crop=center",
    //   description:
    //     "Honored for pioneering industry practices and thought leadership that shapes the future of pneumatic systems.",
    //   impact: "Industry Standard Set",
    //   gradientFrom: "#fa709a",
    //   gradientTo: "#fee140",
    //   icon: <FaTrophy />,
    //   bgPattern: "leadership",
    // },
  ];

  const categories = [
    "all",
    "Innovation",
    "Leadership",
    // "Environment",
    // "Technology",
    // "Service",
  ];

  const getFilteredAwards = () => {
    if (selectedCategory === "all") return awards;
    return awards.filter((award) => award.category === selectedCategory);
  };
  const products = [
  { name: "Rotary Twin Lobe Blowers", link: "/rotary-piston-blowers" },
  { name: "Rotary Tri Lobe Blowers", link: "/rotarytrilobeblowers" },
  { name: "Process Gas Blowers", link: "/process-gas-blowers" },
  { name: "Turbo Blowers", link: "/turbo-blowers" },
  { name: "Super Helical Hybrid Blower", link: "/super-helical-hybrid-blower" },
  { name: "Truck Blowers", link: "/truck-blowers" },
      { name: "Bio Gas Compressors", link: "/bio-gas-blowers-compressors" },
  { name: "Dry Vacuum Pumps", link: "/air-injection" },
  { name: "Rotary Sliding Vane Compressors", link: "/rotary-sliding-vane-compressors" },
  { name: "Centrifugal Fans & Blowers", link: "/centrifugal-fans-blowers" },
  { name: "SR Series Blowers", link: "/sr-series-blowers" },
  { name: "Dry Screw Vacuum Pump", link: "/dry-screw-vacuum-pump" },
  { name: "Liquid Ring Vacuum Pumps", link: "/liquid-ring-vacuum-pumps" },
  { name: "Oil Vane Vacuum Pump", link: "/oil-vane-vacuum-pump-2" },
  { name: "Mechanical Vacuum Boosters", link: "/mechanical-vacuum-boosters" },
  { name: "MVR Blowers", link: "/mvr-blowers" },
  { name: "Vacuum Systems and Packages", link: "/vacuum-systems-and-packages" },
  { name: "Condenser Exhausters", link: "/condenser-exhausters" },
    { name: "Claw Vacuum", link: "/clawvacuum" },
    { name: "Liquid ring compressors", link: "/liquidringcompressors" },
    { name: "Screw blower", link: "/screwblower" },

];

  return (
    <MainTemplate>
      <style>{customStyles}</style>
       <div className="pt-24">
      <div className="min-h-screen bg-black relative overflow-x-hidden">
        {/* Cinematic Hero Section */}
        <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute w-full h-full">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full bg-gradient-radial from-white/80 to-transparent animate-float-complex particle-${i}`}
                />
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute w-[300px] h-[300px] -mt-[150px] -ml-[150px] border border-white/10 rounded-full animate-rotate"></div>
              <div className="absolute w-[500px] h-[500px] -mt-[250px] -ml-[250px] border border-white/10 rounded-full animate-rotate-reverse"></div>
              <div className="absolute w-[700px] h-[700px] -mt-[350px] -ml-[350px] border border-white/10 rounded-full animate-rotate-slow"></div>
            </div>
          </div>

          <div className="relative z-10 text-center text-white max-w-4xl px-5">
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-full mb-8 text-sm font-semibold shadow-lg animate-glow">
              <FaMagic className="text-base animate-sparkle" />
              <span>Excellence Recognized</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
              Where{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-shimmer">
                Excellence
              </span>{" "}
              Meets
              <br />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-shift">
                Recognition
              </span>
            </h1>

            <p className="text-xl lg:text-2xl leading-relaxed mb-12 opacity-90 max-w-3xl mx-auto">
              Every award tells a story of innovation, dedication, and the
              relentless pursuit of excellence. Discover the achievements that
              define our journey.
            </p>

            <div className="flex justify-center gap-16 flex-wrap">
              <div className="text-center relative">
                <div className="ml-10 text-3xl text-yellow-400 mb-4 animate-pulse">
                  <FaTrophy />
                </div>
                <div className="block text-5xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                  25+
                </div>
                <div className="text-base opacity-80 font-medium uppercase tracking-wider">
                  Awards Won
                </div>
              </div>
              <div className="text-center relative">
                <div className="ml-20 text-3xl text-yellow-400 mb-4 animate-pulse">
                  <FaMedal />
                </div>
                <div className="block text-5xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                  45+
                </div>
                <div className="text-base opacity-80 font-medium uppercase tracking-wider">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center relative">
                <div className="ml-10 text-3xl text-yellow-400 mb-4 animate-pulse">
                  <FaAward />
                </div>
                <div className="block text-5xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                  100%
                </div>
                <div className="text-base opacity-80 font-medium uppercase tracking-wider">
                  Client Trust
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Category Filter Section */}
        <section className="py-10 bg-gradient-to-br from-slate-800 to-slate-700 text-center">
          <div className="max-w-6xl mx-auto px-5">
            <h3 className="text-white text-3xl mb-10 font-bold">
              Explore by Category
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 border-indigo-500 shadow-lg shadow-indigo-500/40"
                      : "bg-white/10 border-transparent hover:bg-white/20 hover:-translate-y-0.5"
                  } text-white border-2 px-6 py-3 rounded-full font-semibold cursor-pointer transition-all duration-300 backdrop-blur-md`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "All Awards" : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Grid */}
        <section className="py-8 md:py-10 bg-white">
  <div className="max-w-7xl mx-auto px-4 md:px-5">
    <div className="text-center mb-8 md:mb-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4 md:mb-5 tracking-tight">
        Recognition & Achievements
      </h2>
      <p className="text-sm sm:text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">

                Our awards reflect our dedication to pushing boundaries and
                setting new standards in industrial excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              {getFilteredAwards().map((award, index) => (
  <div
    key={award.id}
    className="group relative rounded-3xl overflow-hidden bg-slate-500 text-black shadow-lg ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-2xl"
    style={{
      animationDelay: `${index * 0.1}s`,
      animationFillMode: "forwards",
    }}
  >
    {/* subtle patterned wash (no pointer events) */}
    <div
      className={`pointer-events-none absolute inset-0 opacity-10 bg-cover card-pattern-${award.bgPattern}`}
    />

    {/* Top row */}
    <div className="relative flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-4 md:p-6 pb-0">
  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-semibold self-start md:self-auto">
    {award.icon}
    <span>{award.category}</span>
  </div>
  <div className="bg-slate-100 px-3 py-1.5 md:px-4 md:py-2 rounded-2xl font-bold text-xs md:text-sm self-start md:self-auto">
    {award.year}
  </div>
</div>


    {/* Image */}
    <div className="relative h-56 sm:h-64 md:h-80 mx-4 md:mx-6 mt-2 mb-2 rounded-2xl overflow-hidden bg-white">
  <img
    src={award.image}
    alt={award.title}
    className="w-full h-full object-contain md:object-cover transition-transform duration-500 transform-gpu md:group-hover:scale-105"
  />

      {/* non-blocking gradient + star */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent to-black/30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="bg-white/90 p-4 rounded-full text-gray-800 shadow">
          <FaStar className="text-2xl" />
        </div>
      </div>
    </div>

    {/* Text */}
    <div className="relative p-4 md:p-6 pt-0 pb-5 md:pb-6">
  <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 leading-tight break-words">{award.title}</h3>
  <p className="text-sm sm:text-base font-semibold mb-2.5 md:mb-3 text-slate-700 break-words">
        {award.organization}
      </p>
        <p className="text-xs sm:text-sm leading-relaxed mb-3.5 md:mb-4 text-slate-600 break-words">
        {award.description}
      </p>
    </div>
  </div>
))}

            </div>
          </div>
        </section>

        <section className="pt-5 pb-5 px-8 bg-blue-600 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">Gallery</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          A glimpse into our journey — moments of pride, passion, and progress.
        </p>
      </section>

        <section className="py-7 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.03] border-2 border-transparent hover:border-blue-500"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-white text-lg font-semibold">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* Call to Action */}
        {/* <section className="py-10 bg-black relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto text-center z-10">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] transform -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-indigo-500/30 to-transparent animate-pulse-custom"></div>
            <div className="absolute w-full h-full top-0 left-0">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full bg-gradient-radial from-white/60 to-transparent animate-float-8s cta-particle-${i}`}
                />
              ))}
            </div>
            <div className="relative z-20 text-white">
              <FaFire className="text-5xl text-yellow-400 mb-8 mx-auto animate-bounce-custom" />
              <h2 className="text-5xl font-black mb-5 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Ready to Experience Award-Winning Excellence?
              </h2>
              <p className="text-xl mb-10 opacity-90 leading-relaxed">
                Join the ranks of industry leaders who trust us to deliver
                exceptional results that earn recognition.
              </p>
              <button className="cta-button relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 px-10 py-5 rounded-full text-xl font-bold cursor-pointer transition-all duration-300 overflow-hidden uppercase tracking-wider hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/40">
                <span>Start Your Journey</span>
                <div className="button-glow"></div>
              </button>
            </div>
          </div>
        </section> */}

        <div className="py-7 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Partner with Global Excellence</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in our journey towards global leadership. Whether you're looking for new requirements or partnership
            opportunities, we're here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={openSearch}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Explore Products
            </button>
            <button
              onClick={handleContactUs}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Contact Us
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
              <h3 className="text-lg font-bold text-gray-800">Search Products</h3>
              <button onClick={closeSearch} className="p-2 rounded hover:bg-gray-100" aria-label="Close search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  placeholder="Type a product name…"
                  className="w-full outline-none py-1"
                />
              </div>

              <div className="mt-3 max-h-80 overflow-auto divide-y">
                {searchQuery && searchResults.length === 0 && (
                  <div className="p-4 text-sm text-gray-500">No matching products.</div>
                )}
                {searchResults.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      window.location.href = item.link
                      closeSearch()
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-800">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.link}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
      </div>
    </MainTemplate>
  );
};

export default Awards;
