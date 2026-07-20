import React from "react";
import { Link } from "react-router-dom";

const products = [
  { name: "Rotary Twin & Tri Lobe Blowers", link: "/rotary-piston-blowers", image: "/images/rotary-twin.jpg" },
  
];

// ✅ Component function
const LimeCalcination = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>
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
    
  );
};

export default LimeCalcination;
