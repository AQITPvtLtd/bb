"use client";

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddHomeWork } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Form from "./Form";
const Contact = () => {

  return (
    <div className="overflow-hidden">
      {/* <h1 className="text-center font-semibold text-4xl">Get In Touch</h1> */}
      <div className="relative">
        <Image
          src="/Contact/contact.avif"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Get In Touch
        </h1>
      </div>

      <div className="lg:grid grid-cols-12 gap-10 md:p-5 overflow-hidden">
        {/* <!-- First Card --> */}
        <div className="col-start-2 col-span-5 bg-white shadow-lg rounded-lg p-8 space-y-6 overflow-hidden">
          <h1 className="text-2xl font-semibold text-gray-800"
            style={{ fontFamily: "Roboto Slab, serif" }}>
            Dr. Bhupendra Pratap Bharti
          </h1>
          <p className="font-semibold text-gray-600">
            Consultant Institute for Bone, Joint Replacement, Orthopedics Spine
            & Sports Medicine
          </p>
          {/* <p className="text-gray-800">
            BLK Superspeciality Hospital, New Delhi
          </p> */}

          <div className="flex items-start space-x-2 text-gray-700">
            <FaLocationDot className="mt-1 text-xl" />
            <p className="text-base">
              Max Super Speciality Hospital, 108A, IP Ext, I.P.Extension,
              Patparganj, Delhi, 110092
            </p>
          </div>

          <div className="flex items-start space-x-2 text-gray-700">
            <MdAddHomeWork className="mt-1 text-xl" />
            <p className="text-base">Room No.: OPD 1</p>
          </div>

          <div className="flex items-start space-x-2 text-gray-700">
            <IoTimerSharp className="mt-1 text-xl" />
            <p className="text-base">
              OPD Schedule: Mon/Wed/Fri: 2:00 pm to 4:00 pm
            </p>
          </div>

          <div className="flex items-start space-x-2 text-gray-700">
            <IoIosCall className="mt-1 text-xl" />
            <Link href="tel:+91-9205138507">
              <p className="text-base">For Appointment: +91-92051 38507</p>
            </Link>
          </div>

          <div className="flex items-start space-x-2 text-gray-700">
            <MdEmail className="mt-1 text-xl" />
            <Link href="mailto:drbhupendrabharti@gmail.com">
              <p className="text-base" target="__blank">
                Email: drbhupendrabharti@gmail.com
              </p>
            </Link>
          </div>
        </div>

        {/* <!-- Second Card --> */}
        <div className="col-span-5 bg-white shadow-lg rounded-lg p-8 flex flex-col items-start overflow-hidden">
          <h1 className="text-2xl font-semibold text-gray-800"
            style={{ fontFamily: "Roboto Slab, serif" }}>
            Noida Clinic
          </h1>
          <h1 className="text-2xl font-semibold text-gray-800"
            style={{ fontFamily: "Roboto Slab, serif" }}>
            Dr. Bhupendra Pratap Bharti
          </h1>

          <div className="flex items-start space-x-2 text-gray-700 mt-6">
            <FaLocationDot className="mt-1 text-xl" />
            <p className="text-base ">
              H 38, near Diamond Crown Banquet Hall, Sector 51, Noida, Uttar
              Pradesh 201307
            </p>
          </div>

          <div className="flex items-start space-x-2 text-gray-700 mt-4">
            <div className="mt-1 lg:text-xl text-2xl">
              <IoTimerSharp />
            </div>
            <p className="text-base ">
              OPD Schedule: Mon/Thu: 6:00pm to 8:00pm <br />
              Tue/Wed/Fri/Sat: 8:00pm to 9:00pm
            </p>
          </div>

          <div className="flex items-center space-x-2 text-gray-700 mt-4">
            <div className="mt-1 lg:text-xl text-2xl">
              <IoIosCall className="" />
            </div>
            <Link href="tel:+91-9891258507">
              <p className="text-base ">For Appointment: +91-98912 58507</p>
            </Link>
          </div>

          <div className="flex items-center space-x-2 text-gray-700 mt-4">
            <div className="mt-1 lg:text-xl text-2xl">
              <MdEmail className="" />
            </div>
            <Link href="mailto:drbhupendrabharti@gmail.com" target="__blank">
              <p className="text-lg ">Email: drbhupendrabharti@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-12 mt-5 items-center overflow-hidden">
        <div className="col-start-2 col-span-4 p-4 md:p-6 lg:p-8 overflow-hidden">
          <h1 className="text-3xl font-semibold text-gray-800 py-3"
            style={{ fontFamily: "Roboto Slab, serif" }}>
            Location Map
          </h1>

          <div className="lg:col-span-3 col-span-12 lg:col-start-10 mt-8 lg:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.88259577845!2d77.30471724732683!3d28.633280613108198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfba32e6d9de1%3A0xc08f969098a283ba!2sDr.%20Bhupendra%20Pratap%20Bharti!5e0!3m2!1sen!2sin!4v1728040420595!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              className="rounded-md"
              loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="col-span-7 flex justify-center items-center py-10 overflow-hidden">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
