"use client";

import React, { useEffect, useState } from "react";
import { getVideos } from "@/services/getData";
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
    <div className="bg-gray-100 flex flex-col items-center">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10 lg:pt-10">
        Video Gallery
      </h1> 
      {error ? (
        <p className="text-red-500 text-center mt-6">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-10">
          {videos.map((v) => (
            <div className="flex justify-center" key={v.id}>
              <iframe
                width="560"
                height="315"
                src={v.src}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Videogallery;
