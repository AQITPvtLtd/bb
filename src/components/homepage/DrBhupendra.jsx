import React from "react";
import Image from "next/image";
import Link from "next/link";

const DrBhupendra = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
        <div className=" lg:col-span-4 flex justify-center sm:justify-start">
          <Image
            src={"/drBhupendra/Dr_Bhupendra-Bharti.jpg"}
            width={500}
            height={500}
            alt="Dr. Bhupendra Pratap Bharti"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="lg:col-span-8">
          <h1 className="text-4xl sm:text-3xl font-bold text-gray-800" style={{ fontFamily: "Roboto Slab, serif" }}>
            Dr. Bhupendra Pratap Bharti
          </h1>
          <h3 className="text-2xl sm:text-xl font-semibold text-primary mb-1" style={{ fontFamily: "Roboto Slab, serif" }}>
            Consultant Orthopedic Spine Surgery
          </h3>
          <div className="mb-1">
            <h4 className="text-2xl font-semibold text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>
              Qualification
            </h4>
            <p className="text-gray-600 mt-2 leading-relaxed lg:text-justify">
              MBBS, MS (Orthopaedic) Spine Fellowship - Indian Spinal Injuries
              Centre, India Fellowship Anterior Spine surgery - Hongkong AO
              Spine Inland Fellowship - Park clinic India Endoscopy UBE
              Fellowship Busan - South Korea
            </p>
          </div>
          <div className="mb-1">
            <h4 className="text-2xl font-semibold text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>Experience</h4>
            <p className="text-gray-600 mt-2 leading-relaxed lg:text-justify">
              Associate director and unit head, Center for Orthopaedic Spine
              Surgery at MAX Super Speciality Hospital Patparganj, Delhi. Worked
              as a Consultant in Centre for Orthopedics Spine Surgery in
              Institute for Bone, Joint Replacement, Orthopedics Spine & Sports
              Medicine at BLK Super Speciality Hospital, New Delhi.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>
              Specializes in:
            </h4>
            <p className="text-gray-600 mt-2 leading-relaxed lg:text-justify">
              Surgical and non-surgical management of spinal disorders involving
              neck and back utilizing turn of the century minimally invasive
              techniques (UBE endoscopy/ Microscpic).
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/knowDoctor"
              className="px-4 py-3 bg-[#07a496] text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
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
