import React from "react";
import { Link } from "react-router-dom";
import MainTemplate from "../components/Templates/MainTemplates";
import { useTranslation } from "../contexts/TranslationContext";

const products = [
  {
    nameKey: "blowerDivision.rotaryTwinLobe",
    link: "/rotary-piston-blowers",
    image: "/images/rotary-twin.jpg",
  },
  {
    nameKey: "blowerDivision.rotaryTriLobe",
    link: "/rotarytrilobeblowers",
    image: "/images/Tri-Lobe.jpg",
  },
  {
    nameKey: "blowerDivision.processGas",
    link: "/process-gas-blowers",
    image: "/images/Process-Gas-BlowersGas-Boosters.jpg",
  },
  {
    nameKey: "blowerDivision.turbo",
    link: "/turbo-blowers",
    image: "/images/Turbo_Blowers.jpg",
  },
  {
    nameKey: "blowerDivision.superHelical",
    link: "/super-helical-hybrid-blower",
    image: "/images/SuperHelicalHybridBlower.jpg",
  },
  {
    nameKey: "blowerDivision.truck",
    link: "/truck-blowers",
    image: "/images/Truck-Blowers.png",
  },
  // { nameKey: "blowerDivision.bioGas", link: "/bio-gas-blowers-compressors", image: "/images/bio-Gas-Blowers-Compressors.jpg" },
  {
    nameKey: "blowerDivision.srSeries",
    link: "/sr-series-blowers",
    image: "/images/sR-Series-Blowers.jpg",
  },
  {
    nameKey: "blowerDivision.centrifugal",
    link: "/centrifugal-fans-blowers",
    image: "/images/swam-centrifugal-fans-and-blowers.jpg",
  },
  {
    nameKey: "blowerDivision.vacuumPumps",
    link: "/vacuum-systems-and-packages",
    image: "/images/VacuumPumpsWithSecondarySuction.png",
  },
  {
    nameKey: "blowerDivision.screw",
    link: "/screwblower",
    image: "/images/Screw Blower.png",
  },
  // { nameKey: "blowerDivision.rotarySlidingVane", link: "/rotary-sliding-vane-compressors", image: "/images/rotary-Sliding-Vane-Compressors.jpg" },
];

const BlowerDivision = () => {
  const { t } = useTranslation();

  return (
    <MainTemplate>
      {/* Page container: tighter on mobile, same feel on desktop */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 mt-16 md:mt-20 bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6 text-center">
          {t("blowerDivision.title")}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6 md:mb-8 text-center px-2">
          {t("blowerDivision.subtitle")}
        </p>

        {/* Product Grid: comfy gaps and heights on small screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              aria-label={t(product.nameKey)}
              className="group relative w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-md transition-transform duration-300 sm:hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {/* Background Image */}
              <img
                src={product.image}
                alt={t(product.nameKey)}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay with title (responsive text + padding) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                <h2 className="w-full text-white text-sm sm:text-base md:text-lg font-bold text-center px-2 py-2">
                  {t(product.nameKey)}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainTemplate>
  );
};

export default BlowerDivision;
