"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";

const Knowdoctor = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="">
      <div className="relative">
        <Image
          src="/knowdoctor/about.jpg"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center" style={{ fontFamily: "Roboto Slab, serif" }}>
          About Us
        </h1>
      </div>

      {/* Add an overlay for better readability */}
      <div className="container mx-auto px-4 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl mb-5">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 p-8 rounded-lg">

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold underline underline-offset-4 decoration-[#07a496] text-gray-800" style={{ fontFamily: "Roboto Slab, serif" }}>
              <span className="bg-gradient-to-r from-[#07a496] to-[#00c3c3] bg-clip-text text-transparent">Dr. Bhupendra Pratap Bharti</span>
            </h1>
            <p className="text-xl font-semibold text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>Associate Director</p>
            <p className="text-xl font-semibold text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>Orthopedic Spine Surgery</p>
            <p className="text-xl font-semibold text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>
              MAX Super Speciality Hospital, Patparganj, New Delhi.
            </p>
            <p className="text-xl font-semibold text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>
              H 38, near Diamond Crown Banquet Hall, Sector 51, Noida, Uttar Pradesh 201307
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-gray-800" style={{ fontFamily: "Roboto Slab, serif" }}>Qualification</h2>
            <ul className="list-disc pl-6 text-lg mt-2 space-y-2 text-gray-700">
              <li className="font-medium">MBBS</li>
              <li className="font-medium">MS (Orthopaedic)</li>
              <li className="font-medium">Spine Fellowship - Indian Spinal Injuries Centre, India</li>
              <li className="font-medium">Fellowship Anterior Spine Surgery - Hongkong</li>
              <li className="font-medium">AO Spine Inland Fellowship - Park Clinic, India</li>
              <li className="font-medium">Endoscopy UBE Fellowship - Busan, South Korea</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative bg-[#07a496] rounded-3xl shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
              <Image
                src="/drBhupendra/newimg.png"
                width={500}
                height={500}
                alt="Dr. Bhupendra Pratap Bharti"
                className="rounded-2xl object-cover"
              />
            
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-12 justify-evenly gap-6 bg-cyan-500 py-10 px-10">
        {/* Mission Section */}
        <div className="col-span-5 flex flex-col items-center text-center">
          <Image
            src="/About/mission.png"
            width={200}
            height={200}
            alt="Our Mission"
            className="object-cover mb-4 border-2 border-white rounded-full p-6 shadow-2xl bg-cyan-400"
          />
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: "Roboto Slab, serif" }}>Our Mission</h2>
          <p className="text-gray-100 max-w-lg">
            Our mission is to provide world-class orthopedic and spine care by
            utilizing the latest advancements in minimally invasive techniques and
            evidence-based treatments. We are committed to enhancing the quality of
            life for our patients through compassionate care, personalized treatment
            plans, and innovative surgical solutions.
          </p>
        </div>

        {/* White Divider Line */}
        <div className="col-span-2 flex justify-center">
          <div className="h-full w-[2px] bg-white"></div>
        </div>

        {/* Vision Section */}
        <div className="col-span-5 flex flex-col items-center text-center mt-10">
          <Image
            src="/About/vision.png"
            width={200}
            height={200}
            alt="Our Vision"
            className="object-cover mb-4 border-2 border-white rounded-full p-6 shadow-2xl bg-cyan-400"
          />
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: "Roboto Slab, serif" }}>Our Vision</h2>
          <p className="text-gray-100 max-w-lg">
            Our vision is to be a leading center for excellence in orthopedic and
            spine surgery, recognized for our expertise, innovation, and
            patient-centered approach. We strive to set new benchmarks in healthcare
            by continuously advancing our knowledge, adopting state-of-the-art
            technologies, and maintaining the highest standards of ethical and
            professional practice.
          </p>
        </div>
      </div>

      <h1 className="lg:text-5xl font-semibold md:text-3xl text-3xl px-20 lg:py-10 py-5 text-center" style={{ fontFamily: "Roboto Slab, serif" }}>
        Frequently Asked Questions
      </h1>
      <div id="accordion-collapse" className="lg:px-20 md:px-14 px-6 gap-20">
        {/* First Accordion Item */}
        <div className="border border-black mb-4 rounded-2xl">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right border-b border-black rounded-2xl border-t-0 gap-3"
              onClick={() => toggleAccordion(1)}
              aria-expanded={activeIndex === 1}
              aria-controls="accordion-collapse-body-1"
            >
              <span className="font-semibold lg:text-xl">Experience</span>
              <IoMdAdd className="w-10 h-10 text-black" />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`${activeIndex === 1 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border-x-1 border-black">
              <p className="mb-2">
                11 years experience in Orthopedics and Spine Surgery. Presently
                working as a Consultant in Centre for Orthopedics Spine Surgery
                in Institute for Bone, Joint Replacement, Orthopedics Spine &
                Sports Medicine at BLK Super Speciality Hospital, New Delhi
              </p>
            </div>
          </div>
        </div>

        {/* Second Accordion Item */}
        <div className="border border-black mb-4 rounded-2xl">
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right border-b border-black rounded-2xl border-t-0 gap-3"
              onClick={() => toggleAccordion(2)}
              aria-expanded={activeIndex === 2}
              aria-controls="accordion-collapse-body-2"
            >
              <span className="font-semibold lg:text-xl">Specializes In</span>
              <IoMdAdd className="w-10 h-10 text-black" />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className={`${activeIndex === 2 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 border-x-1 border-black">
              <p className="mb-2">
                Surgical and non-surgical management of spinal disorders
                involving neck and back utilizing turn of the century minimally
                invasive techniques (UBE endoscopy/ Microscpic) He is also well
                versed with non–surgical pain relieving techniques such as - RF
                ablation Nerve root blocks, Facetal injections and Epidural
                infiltrations. Spinal cord stimulator/ Intrathecal beclofen
                pump.
              </p>
            </div>
          </div>
        </div>

        {/* Third Accordion Item */}
        <div className="border border-black mb-4 rounded-2xl">
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right border-b border-black rounded-2xl border-t-0 gap-3"
              onClick={() => toggleAccordion(3)}
              aria-expanded={activeIndex === 3}
              aria-controls="accordion-collapse-body-3"
            >
              <span className="font-semibold lg:text-xl">
                Speciality Interest
              </span>
              <IoMdAdd className="w-10 h-10 text-black" />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className={`${activeIndex === 3 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="p-5 border-x-1 border-black">
              <p className="mb-2">
                SPINE: Minimally invasive (Anterior/ Posterior Decompression and
                Instrumentation), Minimal invasive (Endoscopic UBE/ microscopic)
                discectomy/spinal decompression/spinal fusions), Artificial disc
                replacements cervical and lumbar spine and deformity correction
                in Cervical, thoracic and lumbar spine in a wide array of
                Congenital, Degenerative, Post traumatic/post Infective), Spinal
                tumors Traumatic conditions of spine.
              </p>
            </div>
          </div>
        </div>

        {/* Forth Accordion Item */}
        <div className="border border-black mb-4 rounded-2xl">
          <h2 id="accordion-collapse-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right border-b border-black rounded-2xl border-t-0 gap-3"
              onClick={() => toggleAccordion(4)}
              aria-expanded={activeIndex === 4}
              aria-controls="accordion-collapse-body-4"
            >
              <span className="font-semibold lg:text-xl">Membership</span>
              <IoMdAdd className="w-10 h-10 text-black" />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className={`${activeIndex === 4 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-4"
          >
            <div className="p-5 border-x-1 border-black">
              <p className="mb-2">
                <ul className="list-disc list-outside px-5">
                  <li>Assocition of Spine Surgery of India</li>
                  <li>Indain Orthopaedic Association</li>
                  <li>AO spine</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* Fifth Accordion Item */}
        <div className="border border-black mb-4 rounded-2xl">
          <h2 id="accordion-collapse-heading-5">
            <button
              type="button"
              className="flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right border-b border-black rounded-2xl border-t-0 gap-3"
              onClick={() => toggleAccordion(5)}
              aria-expanded={activeIndex === 5}
              aria-controls="accordion-collapse-body-5"
            >
              <span className="font-semibold lg:text-xl">Publications</span>
              <IoMdAdd className="w-10 h-10 text-black" />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-5"
            className={`${activeIndex === 5 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-5"
          >
            <div className="p-5 border-x-1 border-black">
              <p className="mb-2">
                <ul className="list-disc list-outside px-5">
                  <li>Short term results of cementless total hip arthroplasty in sicklers (IJO July 2015 Vol. 49 issue 4)</li>
                  <li>Numerous publication and presentations</li>
                  <li>Faculty for Spine Super Specialty Program FNB– Spine Surgery & DNB - Ortho</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* sexth Accordion Item*/}
        {/* <div className="border border-black mb-4">
          <h2 id="accordion-collapse-heading-6">
            <button
              type="button"
              className="flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right border-b border-black border-t-0 gap-3"
              onClick={() => toggleAccordion(6)}
              aria-expanded={activeIndex === 6}
              aria-controls="accordion-collapse-body-6"
            >
              <span className="font-semibold lg:text-xl">Presentations</span>
              <IoMdAdd className="w-10 h-10 text-black" />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-6"
            className={`${activeIndex === 6 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-6"
          >
            <div className="p-5 border-x-1 border-black">
              <p className="mb-2">
               
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Knowdoctor;
