import React from "react";
import Image from "next/image";

const DrBhupendra = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-start-2 lg:col-span-4 flex justify-center sm:justify-start">
          <Image
            src={"/drBhupendra/Dr-Bhupendra-Bharti.jpg"}
            width={500}
            height={500}
            alt="Dr. Bhupendra Pratap Bharti"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="lg:col-span-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Dr. Bhupendra Pratap Bharti
          </h1>
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
            Consultant Orthopedic Spine Surgery
          </h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700">
              Qualification
            </h4>
            <p className="text-gray-600 mt-2 leading-relaxed">
              MBBS, MS (Orthopaedic) Spine Fellowship - Indian Spinal Injuries
              Centre, India Fellowship Anterior Spine surgery - Hongkong AO
              Spine Inland Fellowship - Park clinic India Endoscopy UBE
              Fellowship Busan - South Korea
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700">Experience</h4>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Associate director and unit head, Center for Orthopaedic Spine
              Surgery at MAX Super Speciality Hospital Patparganj, Delhi. Worked
              as a Consultant in Centre for Orthopedics Spine Surgery in
              Institute for Bone, Joint Replacement, Orthopedics Spine & Sports
              Medicine at BLK Super Speciality Hospital, New Delhi.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-700">
              Specializes in:
            </h4>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Surgical and non-surgical management of spinal disorders involving
              neck and back utilizing turn of the century minimally invasive
              techniques (UBE endoscopy/ Microscpic).
            </p>
          </div>

          <button className="px-6 py-2 bg-[#07a496] text-white mt-5 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrBhupendra;
