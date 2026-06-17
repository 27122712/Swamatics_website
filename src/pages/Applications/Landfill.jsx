import React from "react";
import { Link } from "react-router-dom";
import MainTemplate from "../../components/Templates/MainTemplates";

const benefits = [
  "Methane capture",
  "Environmental protection",
  "Energy generation",
];

const products = [
  { name: "Bio Gas Blowers", link: "/bio-gas-blowers-compressors", image: "/images/bio-Gas-Blowers-Compressors.webp" },
  { name: "Rotary Sliding Vane", link: "/rotary-sliding-vane-compressors", image: "/images/rotary-Sliding-Vane-Compressors.webp" },
];

const Landfill = () => {
  return (
    <MainTemplate>
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-25 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Landfill Gas Recovery</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Sustainable solutions for capturing methane and generating energy from landfill gas.
          </p>
        </div>

        {/* Decorative circles (optional like Contact) */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-12">


        {/* ✅ Benefits Section */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Key Benefits
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700 text-lg text-center">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-green-400 transition"
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

        {/* ✅ Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="relative w-full rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 bg-gray-100"
            >
              {/* Background Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain"
              />

              {/* ✅ Centered Text Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-lg font-bold text-center px-3">
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

export default Landfill;
