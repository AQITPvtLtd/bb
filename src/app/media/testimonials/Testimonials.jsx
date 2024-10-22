import React from "react";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src="/Testimonials/bgImg.jpg"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-4xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Testimonials
        </h1>
      </div>
      <h1 className="font-semibold text-5xl mt-8 text-center">coming soon</h1>
    </div>
  );
};

export default Testimonials;
