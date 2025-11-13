"use client";

import React, { useEffect, useState } from "react";
import { getVideos } from "@/services/getData";
import { motion } from "framer-motion";

const Videogallery = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await getVideos();
        if (response?.results) {
          setVideos(response.results.reverse());
        } else {
          throw new Error(response?.message || "Invalid response structure");
        }
      } catch (error) {
        setError(error.message || "Error fetching videos");
      }
    }
    fetchVideos();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-12"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Video Gallery
        </h1>

        {error ? (
          <p className="text-red-500 text-lg mt-6">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((v) => (
              <motion.div
                key={v.id}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
                whileHover={{ scale: 1.03 }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    className="w-full h-full rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    src={v.src}
                    title={v.title || "Video"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Optional Video Title */}
                {v.title && (
                  <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm text-white text-center py-3 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {v.title}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Videogallery;
