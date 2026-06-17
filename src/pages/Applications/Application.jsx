"use client"

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import MainTemplate from "../../components/Templates/MainTemplates";

export default function Application() {
  const [showSplash, setShowSplash] = useState(true);       // show every time
  const splashImg = "/images/Application_Images/application_main.jpg";

  const applications = [
    {
      // title: "Power Generation",
      // image: "⚡",
      // benefits: ["Energy efficiency", "Reliable gas supply", "Low maintenance"],
      // // link: "/powergeneration",
      // bgColor: "from-blue-600 to-blue-800",
      bgImage: "/images/Application_Images/1.png",
    },
    {
      // title: "HVAC Systems",
      // image: "❄️",
      // benefits: ["Climate control", "Air circulation", "Quiet operation"],
      // // link: "/hvac",
      // bgColor: "from-red-500 to-red-700",
      bgImage: "/images/Application_Images/2.png",
    },
    {
      // title: "Wastewater Treatment",
      // image: "💧",
      // benefits: ["Efficient aeration", "Energy savings", "Precise control"],
      // // link: "/wastewater",
      // bgColor: "from-blue-500 to-blue-700",
      bgImage: "/images/Application_Images/3.png",
    },
    {
      // title: "Landfill Gas Recovery",
      // image: "♻️",
      // benefits: ["Methane capture", "Environmental protection", "Energy generation"],
      // // link: "/landfill",
      // bgColor: "from-green-600 to-green-800",
      bgImage: "/images/Application_Images/4.png",
    },
    {
      // title: "Landfill Gas Recovery",
      // image: "♻️",
      // benefits: ["Methane capture", "Environmental protection", "Energy generation"],
      // // link: "/landfill",
      // bgColor: "from-green-600 to-green-800",
      bgImage: "/images/Application_Images/5.png",
    },
    {
      // title: "Landfill Gas Recovery",
      // image: "♻️",
      // benefits: ["Methane capture", "Environmental protection", "Energy generation"],
      // // link: "/landfill",
      // bgColor: "from-green-600 to-green-800",
      bgImage: "/images/Application_Images/6.png",
    },
    {
      // title: "Landfill Gas Recovery",
      // image: "♻️",
      // benefits: ["Methane capture", "Environmental protection", "Energy generation"],
      // // link: "/landfill",
      // bgColor: "from-green-600 to-green-800",
      bgImage: "/images/Application_Images/7.png",
    },
    {
      // title: "Landfill Gas Recovery",
      // image: "♻️",
      // benefits: ["Methane capture", "Environmental protection", "Energy generation"],
      // // link: "/landfill",
      // bgColor: "from-green-600 to-green-800",
      bgImage: "/images/Application_Images/8.png",
    },
    {
      // title: "Landfill Gas Recovery",
      // image: "♻️",
      // benefits: ["Methane capture", "Environmental protection", "Energy generation"],
      // link: "/landfill",
      // bgColor: "from-green-600 to-green-800",
      bgImage: "/images/Application_Images/9.png",
    },
  ];

  return (
    <MainTemplate>
      <AnimatePresence mode="wait">
        {showSplash ? (
          /* -------- Full-width splash section under navbar -------- */
          <motion.section
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative mt-20 bg-black" /* keep same offset as your pages */
          >
            <button
  type="button"
  onClick={() => setShowSplash(false)}
  className="relative block w-full active:scale-[.995]"
  aria-label="Open Industrial Applications"
>

              {/* Takes the full viewport height minus navbar (mt-20 = 5rem) */}
              <img
  src={splashImg}
  alt="Major Applications"
  className="w-full h-[calc(100svh-5rem)] sm:h-[calc(100vh-5rem)] object-contain md:object-contain bg-black"
/>

<span className="absolute bottom-[max(1rem,env(safe-area-inset-bottom,0)+0.5rem)] left-1/2 -translate-x-1/2 text-white/90 text-xs sm:text-sm md:text-base bg-black/40 px-3 py-1.5 rounded-full">
  Tap to continue
</span>

            </button>
          </motion.section>
        ) : (
          /* -------- Your existing content -------- */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {/* Banner */}
            <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12 md:py-20 mt-20 py-20 mt-20">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">Industrial Applications</h1>
<p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-90">

                  Explore our wide range of industrial applications where our reliable
                  solutions drive efficiency, sustainability, and performance.
                </p>
                <div className="mt-6 inline-block bg-white/20 px-6 py-2 rounded-full text-sm font-medium">
                  🌍 Powering diverse industries with reliable, efficient solutions
                </div>
              </div>
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </section>

            {/* Grid */}
            <section className="py-10 pb-24 md:pb-10 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {applications.map((app, i) => (
                    <a
                      key={i}
                      href={app.link}
className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 hover:md:-translate-y-2 active:scale-[.99]"
                    >
                      <div
  className="absolute inset-0 bg-contain md:bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${app.bgImage})` }}
/>

{app.bgColor ? (
  <div className={`absolute inset-0 bg-gradient-to-br ${app.bgColor} opacity-40 group-hover:opacity-30 transition-opacity duration-300`} />
) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
  <div className="mb-2 sm:mb-3 md:mb-4">
    <div className="text-2xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-2 md:mb-3">{app.image}</div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{app.title}</h3>
  </div>

                        {/* <div className="flex items-center justify-between">
                          <span className="text-sm opacity-90">See Products</span>
                          <FaArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                        </div> */}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </MainTemplate>
  );
}
