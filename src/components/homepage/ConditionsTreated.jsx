"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Conditions } from "../data/conditions";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ConditionsTreated = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative p-6 rounded-lg shadow-md mt-10">
      <div className="absolute inset-0">
        <Image
          src="/Services/backgorundImg.jpg"
          alt="Background"
          height={500}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl text-[#07a496] font-bold text-center mb-6" style={{ fontFamily: "Roboto Slab, serif" }}>
          Conditions Treated
        </h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Conditions.map((s) => (
            <motion.div
              key={s.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
              variants={item}
            >
              <div className="text-4xl font-extrabold text-[#07a496] mb-2">
                {s.number}
              </div>
              <div className="text-lg font-semibold text-gray-700">
                {s.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ConditionsTreated;
