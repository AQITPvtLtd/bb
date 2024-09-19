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
    <div className="mt-[125px] px-4">
      <div className="relative">
        <Image
          src="/PrintMedia/printmedia.jpg"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Print Media
        </h1>
      </div>

      {/* <h2 className="text-center text-4xl font-bold mb-8">Print Media</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
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
