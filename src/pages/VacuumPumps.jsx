import React from "react";
import { Link } from "react-router-dom";
import MainTemplate from "../components/Templates/MainTemplates";
import { useTranslation } from "../contexts/TranslationContext";

const VacuumPumps = () => {
  const { t } = useTranslation();

  const products = [
    {
      name: t("vacuumPumps.products.dryScrewVacuumPump"),
      link: "/dry-screw-vacuum-pump",
      image: "/images/dry-screw.png",
    },
    {
      name: t("vacuumPumps.products.liquidRingVacuumPumps"),
      link: "/liquid-ring-vacuum-pumps",
      image: "/images/liquid-ring.png",
    },
    {
      name: t("vacuumPumps.products.oilVaneVacuumPump"),
      link: "/oil-vane-vacuum-pump-2",
      image: "/images/oil-vane.png",
    },
    {
      name: t("vacuumPumps.products.mechanicalVacuumBoosters"),
      link: "/mechanical-vacuum-boosters",
      image: "/images/mechanical-boosters.png",
    },
    {
      name: t("vacuumPumps.products.vacuumSystemsPackages"),
      link: "/vacuum-systems-and-packages",
      image: "/images/vacuum-systems.png",
    },
    {
      name: t("vacuumPumps.products.condenserExhausters"),
      link: "/condenser-exhausters",
      image: "/images/condenser.png",
    },
  ];

  return (
    <MainTemplate>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {t("vacuumPumps.title")}
        </h1>
        <p className="text-gray-600 mb-10 text-center">
          {t("vacuumPumps.description")}
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              {/* Background Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Title Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <h2 className="text-white text-lg font-bold text-center px-2">
                  {product.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainTemplate>
  );
};

export default VacuumPumps;
