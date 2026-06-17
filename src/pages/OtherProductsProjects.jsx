import React from "react";
import { Link } from "react-router-dom";
import MainTemplate from "../components/Templates/MainTemplates";

const products = [
  { name: "Bio Gas Blowers", link: "/bio-gas-blowers-compressors", image: "/images/bio-Gas-Blowers-Compressors.jpg" },
  { name: "Rotary Sliding Vane", link: "/rotary-sliding-vane-compressors", image: "/images/rotary-Sliding-Vane-Compressors.jpg" },
  { name: "Liquid Compressors", link: "/Liquidringcompressors", image: "/images/liquid_ring.png" },
];

const OtherProductsProjects = () => {
  return (
    <MainTemplate>
      <div className="min-h-[80vh] max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col mt-16 md:mt-20 bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6 text-center">Compressor Division</h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6 md:mb-8 text-center px-2">
          Explore our complete range of Compressor Division.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 flex-grow">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              aria-label={product.name}
              className="group relative w-full h-[160px] sm:h-[200px] md:h-[240px] rounded-xl overflow-hidden shadow-md transition-transform duration-300 sm:hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                <h2 className="w-full text-white text-sm sm:text-base md:text-lg font-bold text-center px-2 py-2">
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

export default OtherProductsProjects;
