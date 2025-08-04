"use client";
import Image from "next/image";
import { Conditions } from "../data/conditions";
import Link from "next/link";

const ConditionsTreated = () => {
  return (
    <div className="relative px-4 py-12 sm:px-8 md:px-16 lg:px-20 xl:px-28 mt-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Services/backgorundImg.jpg"
          alt="Background"
          fill
          className="w-full h-full object-cover"
        />
        {/* Black Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          className="text-4xl text-center font-bold text-[#07a496] mb-10"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Conditions Treated
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Conditions.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 px-6 py-5 flex flex-col gap-2"
            >
              <Link href={s.link}>
                <div className="text-3xl font-bold text-[#07a496]">
                  {s.number}
                </div>
                <div className="text-lg text-gray-800 font-medium leading-snug">
                  {s.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConditionsTreated;
