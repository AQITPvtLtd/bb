import React from "react";
import Image from "next/image";
import Link from "next/link";

const DrBhupendra = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 rounded-lg mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start">

        {/* Left Side - Image */}
        <div className="lg:col-span-5 flex justify-center">
          <Image
            src={"/drBhupendra/Dr_Bhupendra-Bharti.jpg"}
            width={400}
            height={400}
            alt="Dr. Bhupendra Pratap Bharti"
            className="rounded-lg shadow-md w-full max-w-sm"
          />
        </div>

        {/* Right Side - Text */}
        <div className="lg:col-span-6">
          <h1
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Dr. Bhupendra Pratap Bharti
          </h1>
          <h3
            className="text-xl sm:text-2xl font-semibold text-primary mb-4"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Consultant Orthopedic Spine Surgery
          </h3>

          {/* Qualification */}
          <div className="mb-4">
            <h4
              className="text-xl font-semibold text-gray-700"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Qualification
            </h4>
            <p className="text-gray-600 mt-2 leading-relaxed text-justify">
              MBBS, MS (Orthopaedic) Spine Fellowship - Indian Spinal Injuries
              Centre, India Fellowship Anterior Spine surgery - Hongkong AO
              Spine Inland Fellowship - Park clinic India Endoscopy UBE
              Fellowship Busan - South Korea
            </p>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <h4
              className="text-xl font-semibold text-gray-700"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Experience
            </h4>
            <p className="text-gray-600 mt-2 leading-relaxed text-justify">
              Associate director and unit head, Center for Orthopaedic Spine
              Surgery at MAX Super Speciality Hospital Patparganj, Delhi. Worked
              as a Consultant in Centre for Orthopedics Spine Surgery in
              Institute for Bone, Joint Replacement, Orthopedics Spine & Sports
              Medicine at BLK Super Speciality Hospital, New Delhi.
            </p>
          </div>

          {/* Specializes in */}
          <div>
            <h4
              className="text-xl font-semibold text-gray-700"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Specializes in:
            </h4>
            <p className="text-gray-600 mt-2 leading-relaxed text-justify">
              Surgical and non-surgical management of spinal disorders involving
              neck and back utilizing turn of the century minimally invasive
              techniques (UBE endoscopy/ Microscopic).
            </p>
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link
              href="/know-your-doctor"
              className="px-5 py-3 bg-[#07a496] text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrBhupendra;
