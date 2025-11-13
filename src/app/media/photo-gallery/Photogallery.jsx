"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Image from "next/image";

export const galleryData = [
  { id: 1, path: "one.jpeg", alt: "Gallery Image 1" },
  { id: 2, path: "two.jpg", alt: "Gallery Image 2" },
  { id: 3, path: "pic.png", alt: "Gallery Image 3" },
  { id: 4, path: "pic1.png", alt: "Gallery Image 4" },
  { id: 5, path: "newspaper.jpeg", alt: "Gallery Image 5" },
  { id: 6, path: "pic10.png", alt: "Gallery Image 6" },
  { id: 7, path: "pic2.png", alt: "Gallery Image 7" },
  { id: 8, path: "pic3.png", alt: "Gallery Image 8" },
  { id: 9, path: "pic4.png", alt: "Gallery Image 9" },
  { id: 10, path: "pic5.png", alt: "Gallery Image 10" },
  { id: 11, path: "pic6.png", alt: "Gallery Image 11" },
  { id: 12, path: "pic7.png", alt: "Gallery Image 12" },
  { id: 13, path: "pic8.png", alt: "Gallery Image 13" },
  { id: 14, path: "pic9.png", alt: "Gallery Image 14" },
  { id: 15, path: "pic11.png", alt: "Gallery Image 15" },
  { id: 16, path: "pic12.png", alt: "Gallery Image 16" },
  { id: 17, path: "pic13.png", alt: "Gallery Image 17" },
];

const Photogallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prev) => {
      const nextIndex = (prev + 1) % galleryData.length;
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => {
      const prevIndex = (prev - 1 + galleryData.length) % galleryData.length;
      return prevIndex;
    });
  };

  const closeModal = () => setSelectedIndex(null);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Banner */}
        <h1
          className="text-3xl sm:text-5xl font-bold text-gray-800 mb-5 text-center"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Photo Gallery
        </h1>

        {/* Gallery */}
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryData.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={`/PhotoGallery/${photo.path}`}
                alt={`Certificate ${photo.id}`}
                width={500}
                height={500}
                className="w-full h-80 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold text-center px-2">
                {photo.alt}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center px-4">
            {/* Close Button - Top Right */}
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={closeModal}
                className="text-white cursor-pointer text-3xl bg-black/60 hover:bg-black px-4 py-2 rounded-full"
                aria-label="Close Modal"
              >
                <FaTimes />
              </button>
            </div>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 cursor-pointer text-white bg-black/50 hover:bg-black p-2 rounded-full text-xl z-50"
            >
              <FaChevronLeft />
            </button>

            {/* Image Preview */}
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 max-w-[90vw] max-h-[85vh] overflow-hidden">
              <img
                src={`/PhotoGallery/${galleryData[selectedIndex].path}`}
                alt="Selected"
                className="object-contain max-w-full max-h-[85vh]"
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 cursor-pointer text-white bg-black/50 hover:bg-black p-2 rounded-full text-xl z-50"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Photogallery;
