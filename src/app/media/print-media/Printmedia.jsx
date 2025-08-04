import React from "react";
import "animate.css";
import Image from "next/image";

const photos = [
  { src: "/PrintMedia/one.jpeg", alt: "Gallery Image 1" },
  { src: "/PrintMedia/two.jpeg", alt: "Gallery Image 2" },
  { src: "/PrintMedia/three.jpeg", alt: "Gallery Image 3" },
  { src: "/PrintMedia/four.jpeg", alt: "Gallery Image 4" },
  // Add more photos as needed
];

const Printmedia = () => {
  return (
    <div className="px-4 pb-10">
      
      <h1 className="text-center text-4xl font-bold text-gray-800 pb-10 pt-10" style={{ fontFamily: "Roboto Slab, serif" }}>
        Print Media
      </h1>

      {/* <h2 className="text-center text-4xl font-bold mb-8">Print Media</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12">
        {photos.map((photo, index) => (
          <div key={index} className="relative group overflow-hidden">
            <div className="flex items-center justify-center">
              <Image
                src={photo.src}
                height={500}
                width={500}
                className="transition-transform duration-500 transform group-hover:scale-105 object-cover"
                alt={photo.alt}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Printmedia;
