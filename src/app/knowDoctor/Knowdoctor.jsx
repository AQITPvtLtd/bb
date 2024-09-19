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
    <div className="mt-[125px]">
      <div className="relative">
        <Image
          src="/knowdoctor/about.jpg"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          About Us
        </h1>
      </div>

      {/* Add an overlay for better readability */}
      <div className="container mx-auto mt-16 px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 p-8 rounded-lg">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold underline underline-offset-4 decoration-[#07a496] ">
              Dr. Bhupendra Pratap Bharti
            </h1>
            <p className="text-xl mt-2 font-semibold">Associate Director</p>
            <p className="text-xl font-semibold">Orthopedic Spine Surgery</p>
            <p className="text-xl font-semibold">
              MAX Super Speciality Hospital, Patparganj, New Delhi.
            </p>

            <p className="text-xl font-semibold">H 38, near Diamond Crown Banquet Hall, Sector 51, Noida, Uttar Pradesh 201307</p>

            <h2 className="mt-8 text-2xl font-semibold underline underline-offset-4 decoration-[#07a496]">
              Qualification
            </h2>

            <ul className="list-disc pl-6 text-lg mt-4 space-y-2">
              <li className="font-semibold">MBBS</li>
              <li className="font-semibold">MS (Orthopaedic)</li>
              <li className="font-semibold">Spine Fellowship - Indian Spinal Injuries Centre, India</li>
              <li className="font-semibold">Fellowship Anterior Spine Surgery - Hongkong</li>
              <li className="font-semibold">AO Spine Inland Fellowship - Park Clinic, India</li>
              <li className="font-semibold">Endoscopy UBE Fellowship - Busan, South Korea</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="bg-[#07a496] rounded-3xl shadow-2xl">
              <Image
                src="/drBhupendra/newimg.png"
                width={500}
                height={500}
                alt="Dr. Bhupendra Pratap Bharti"
                className="rounded-lg object-cover -translate-x-5"
              />
            </div>
          </div>
        </div>
      </div>

     
      <h1 className="lg:text-5xl font-semibold md:text-5xl sm:text-3xl text-3xl px-20 lg:py-10 py-5">
        Frequently <br /> asked questions

      </h1>
      <div id="accordion-collapse" className="lg:px-20 px-14 gap-20">
        {/* First Accordion Item */}
        <div className="border border-black mb-4">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right border-b border-black border-t-0 gap-3"
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
        <div className="border border-black mb-4">
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right border-b border-black border-t-0 gap-3"
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
        <div className="border border-black mb-4">
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right border-b border-black border-t-0 gap-3"
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
        <div className="border border-black mb-4">
          <h2 id="accordion-collapse-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right border-b border-black border-t-0 gap-3"
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
              <p className="mb-2">Assocition of Spine Surgery of India</p>
              <p className="mb-2">Indain Orthopaedic Association</p>
              <p className="mb-2"> AO spine</p>
            </div>
          </div>
        </div>

        {/* Fifth Accordion Item */}
        <div className="border border-black mb-4">
          <h2 id="accordion-collapse-heading-5">
            <button
              type="button"
              className="flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right border-b border-black border-t-0 gap-3"
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
                {/* Dr. Santosh Ghai has an overall experience of 11 years. */}
              </p>
            </div>
          </div>
        </div>

        {/* sexth Accordion Item*/}
        <div className="border border-black mb-4">
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
                {/* Dr. Santosh Ghai has an overall experience of 11 years. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowdoctor;
