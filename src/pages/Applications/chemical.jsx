import React from "react";
import { Link } from "react-router-dom";

const products = [
//   { name: "Rotary Twin & Tri Lobe Blowers", link: "/rotary-piston-blowers", image: "/images/rotary-twin.jpg" },
  { name: "Process Gas Blowers", link: "/process-gas-blowers", image: "/images/Process-Gas-BlowersGas-Boosters.webp" },
  { name: "Turbo Blowers", link: "/turbo-blowers", image: "/images/Turbo_Blowers.webp" },
  { name: "Super Helical Hybrid Blower", link: "/super-helical-hybrid-blower", image: "/images/SuperHelicalHybridBlower.webp" },
//   { name: "Truck Blowers", link: "/truck-blowers", image: "/images/Truck-Blowers.png" },
//   { name: "Bio Gas Blowers", link: "/bio-gas-blowers-compressors", image: "/images/bio-Gas-Blowers-Compressors.webp" },
  { name: "SR Series Blowers", link: "/sr-series-blowers", image: "/images/sR-Series-Blowers.webp" },
//   { name: "Centrifugal Fans & Blowers", link: "/centrifugal-fans-blowers", image: "/images/swam-centrifugal-fans-and-blowers.webp" },
//   { name: "Vaccum Pumps", link: "/vacuum-systems-and-packages", image: "/images/VacuumPumpsWithSecondarySuction.png" },
//   { name: "Rotary Sliding Vane", link: "/rotary-sliding-vane-compressors", image: "/images/rotary-Sliding-Vane-Compressors.webp" },
  { name: "Dry Screw Vacuum Pump", link: "/dry-screw-vacuum-pump", image: "/images/dry-Screw-Vacuum-Pump.png" },
  { name: "Liquid Ring Vacuum Pumps", link: "/liquid-ring-vacuum-pumps", image: "/images/liquid-Ring-Vacuum-Pump.png" },
  { name: "Mechanical Vacuum Boosters", link: "/mechanical-vacuum-boosters", image: "/images/Mechanical-Vacuum.webp" },
  { name: "Vacuum Systems & Packages", link: "/vacuum-systems-and-packages", image: "/images/Vacuum-Systems-Packages.png" },

  { 
    name: "Shell and Tube Type Heat Exchangers", 
    link: "/shell-and-tube-type-heat-exchangers", 
    image: "/images/shell-and-tube-type-heat-exchanger.webp" 
  },
];

// ✅ Component function
const chemical = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>
      <p className="text-gray-600 mb-10 text-center">
        Explore our complete range of products.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
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

            {/* Static Text Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-lg font-bold text-center px-2">
                {product.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
    
  );
};

export default chemical;
