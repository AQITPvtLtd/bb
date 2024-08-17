"use client";

import React from "react";
import { servicesdata } from "../data/serviceData";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="bg-skyblue overflow-x-clip sm:p-16 lg:p-24">
      <div className="bg-skyblue">
        <h1 className="font-extrabold text-2xl sm:text-3xl pt-8 lg:pt-16 text-primary text-center">
          Our Services include
        </h1>
        <div className="mt-8 sm:mt-10">
          <Slider {...settings}>
            {servicesdata.map((s) => (
              <div key={s.id} className="px-4 sm:px-8 py-8 bg-[#07a496]">
                <div className="bg-white h-[400px] sm:h-[430px] rounded-lg border shadow-lg">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
                    src={`/Services/${s.image}`}
                    alt={s.name}
                  />
                  <div className="p-6 sm:p-10">
                    <h2 className="text-base sm:text-lg text-primary font-bold">
                      {s.name}
                    </h2>
                    <Link href={s.link}>
                      <button className="mt-4 text-white text-sm sm:text-lg font-bold bg-[#07a496] py-2 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 flex items-center">
                        {s.button}{" "}
                        <FaArrowRight className="ml-2 transition-transform duration-300 transform hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;
