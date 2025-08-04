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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="bg-[#e0f7f5] px-4 sm:px-8 md:px-20 py-10 overflow-hidden">
      <h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-primary mb-8"
        style={{ fontFamily: "Roboto Slab, serif" }}
      >
        Our Services include
      </h1>

      <Slider {...settings}>
        {servicesdata.map((s) => (
          <div key={s.id} className="px-4 py-4">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
              <Image
                src={`/Services/${s.image}`}
                width={500}
                height={300}
                alt={s.name}
                className="w-full h-[260px] object-fill rounded-t-xl"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2
                  className="text-lg font-semibold text-[#055a53] mb-4"
                  style={{ fontFamily: "Roboto Slab, serif" }}
                >
                  {s.name}
                </h2>
                <div className="mt-auto">
                  <Link href={s.link}>
                    <button className="bg-[#07a496] hover:bg-[#06857c] text-white font-semibold px-5 py-2 rounded-lg shadow-md text-sm sm:text-base flex items-center transition-transform duration-300 hover:translate-x-1">
                      {s.button}
                      <FaArrowRight className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
