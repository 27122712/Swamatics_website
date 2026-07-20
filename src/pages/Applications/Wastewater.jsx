import React from "react";
import { Link } from "react-router-dom";
import MainTemplate from "../../components/Templates/MainTemplates";

const benefits = [
  "Efficient aeration",
  "Energy savings",
  "Precise control",
];

const products = [
  { name: "Turbo Blowers", link: "/turbo-blowers", image: "/images/Turbo_Blowers.webp" },
  { name: "Super Helical Hybrid Blower", link: "/super-helical-hybrid-blower", image: "/images/SuperHelicalHybridBlower.webp" },
  { name: "Bio Gas Blowers", link: "/bio-gas-blowers-compressors", image: "/images/bio-Gas-Blowers-Compressors.webp" },
  { name: "SR Series Blowers", link: "/sr-series-blowers", image: "/images/sR-Series-Blowers.webp" },
];

// ✅ Component function
const Wastewater = () => {
  return (
    <MainTemplate>
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-25 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Wastewater Treatment</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Delivering reliable and efficient solutions for wastewater aeration and processing.
          </p>
        </div>

        {/* Decorative circles (optional like Contact) */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-12">


        {/* ✅ Benefits Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Key Benefits
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700 text-lg text-center">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-blue-400 transition"
              >
                ✅ {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Products Section */}
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Products</h2>
        <p className="text-gray-600 mb-10 text-center">
          Explore our complete range of products.
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
    </MainTemplate>
  );
};

export default Wastewater;
