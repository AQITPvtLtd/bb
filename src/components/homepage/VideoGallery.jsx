import React from "react";

const VideoGallery = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center py-10 mt-5">
      <h1 className="text-center text-4xl font-bold text-[#07a496] mb-10" style={{ fontFamily: "Roboto Slab, serif" }}>
        Video Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-10">
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/97cH5u8vxO4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-lg lg:h-[315px] lg:w-[560px] h-[200px] w-[350px]"
          ></iframe>
        </div>

        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SdgTR_uw8uE?si=p20Ry9OqR3Mo4QVr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-lg shadow-lg lg:h-[315px] lg:w-[560px] h-[200px] w-[350px]"
            // referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* <p className="text-lg">
          Lalita Dubey talks about her Disc Replacement Surgery
        </p> */}
        {/* Add more video frames here */}
      </div>
    </div>
  );
};

export default VideoGallery;
