import React from "react";
import { Conditions } from "../data/conditions";

const ConditionsTreated = () => {
  return (
    <div className="bg-gray-500 p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-4xl font-bold text-center text-white mb-6 animate__animated animate__heartBeat">
        Conditions Treated
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Conditions.map((s) => (
          <div
            key={s.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-4xl font-extrabold text-[#07a496] mb-2">
              {s.number}
            </div>
            <div className="text-lg font-semibold text-gray-700">
              {s.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConditionsTreated;
