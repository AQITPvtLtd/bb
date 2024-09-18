import React from "react";
import "animate.css";
import Image from "next/image";

const photos = [
  { src: "/PrintMedia/one.jpeg", alt: "Gallery Image 1" },
  { src: "/PrintMedia/two.jpeg", alt: "Gallery Image 2" },
  { src: "/PrintMedia/three.jpeg", alt: "Gallery Image 3" },
  { src: "/PrintMedia/four.jpeg", alt: "Gallery Image 4" },
  // { src: "/PhotoGallery/newspaper.jpeg", alt: "Gallery Image 5" },
  // Add more photos as needed
];

const Printmedia = () => {

  return (
    <div className="mt-[100px] px-4">
      <h2 className="text-center text-4xl font-bold mb-8">Print Media</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
