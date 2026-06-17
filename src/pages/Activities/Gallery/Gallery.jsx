import React from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";

const images = [
  { src: "/new_images/Image1.jpg", },
  { src: "/new_images/Image2.jpg", },
  { src: "/new_images/Image3.jpg", },
  { src: "/new_images/Image4.jpg", },
  { src: "/new_images/Image6.png", },
  { src: "/new_images/Image7.png", },
  { src: "/new_images/Image8.jpg", },
  { src: "/new_images/Image9.png", },
  { src: "/new_images/Image10.png",},
  { src: "/images/extra/1.png",},
  { src: "/images/extra/2.png",},
  { src: "/images/extra/5.png",},
  { src: "/images/extra/6.png",},
  { src: "/images/extra/7.png",},
  { src: "/images/extra/8.png",},

];

const Gallery = () => {
  return (
    <MainTemplate>
      {/* Header Section */}
      <section className="pt-32 pb-20 px-8 bg-blue-600 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">Gallery</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          A glimpse into our journey — moments of pride, passion, and progress.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-white">
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
    </MainTemplate>
  );
};

export default Gallery;
