"use client";

import { useState } from "react";
import React from "react";
import Swal from "sweetalert2";
import { form } from "@/services/user";
import { useRouter } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddHomeWork } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    name: "",
    Email: "",
    Phone: "",
    Query: "",
  }); 

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await form(formData);

    if (response.success) {
      Swal.fire({
        title: "Form Submitted Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      router.push("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="mt-[200px] overflow-hidden">
      <h1 className="text-center font-semibold text-4xl">Get In Touch</h1>

      <div className="lg:grid grid-cols-12 mt-10 gap-10 md:p-5 overflow-hidden">
        {/* <!-- First Card --> */}
        <div className="col-start-2 col-span-5 bg-white shadow-lg rounded-lg p-8 space-y-6 overflow-hidden">
          <h1 className="text-2xl font-semibold text-gray-800">
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
            Max Super Speciality Hospital, 108A, IP Ext, I.P.Extension, Patparganj, Delhi, 110092
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
          <h1 className="text-2xl font-semibold text-gray-800 ">
            Noida Clinic
          </h1>
          <h1 className="text-2xl font-semibold text-gray-800 ">
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
            <IoTimerSharp className="mt-1 text-xl" />
            <p className="text-base ">
              OPD Schedule: Mon/Thu: 6:00pm to 8:00pm <br />
              Tue/Wed/Fri/Sat: 8:00pm to 9:00pm
            </p>
          </div>

          <div className="flex items-start space-x-2 text-gray-700 mt-4">
            <IoIosCall className="mt-1 text-xl" />
            <Link href="tel:+91-9891258507">
              <p className="text-base ">For Appointment: +91-98912 58507</p>
            </Link>
          </div>

          <div className="flex items-start space-x-2 text-gray-700 mt-4">
            <MdEmail className="mt-1 text-xl" />
            <Link href="mailto:drbhupendrabharti@gmail.com" target="__blank">
              <p className="text-base ">Email: drbhupendrabharti@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-12 mt-5 items-center overflow-hidden">
        <div className="col-start-2 col-span-4 p-4 md:p-6 lg:p-8 overflow-hidden">
          <h1 className="text-3xl font-semibold text-gray-800 py-3">
            Location Map
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3501.5559450879423!2d77.179242!3d28.643068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029633b6af21%3A0x9a67323b63bcc188!2sBLK-Max%20Super%20Speciality%20Hospital%20Delhi!5e0!3m2!1sen!2sin!4v1723625605448!5m2!1sen!2sin"
            width="350"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
        </div>

        <div className="col-span-7 flex justify-center items-center py-10 overflow-hidden">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 py-3">
              Complete the fields below and we will follow up with you
            </h1>

            <form
              className="bg-white text-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg overflow-hidden"
              onSubmit={handleSubmit}
            >
              <div className="mb-6">
                <label
                  htmlFor="Name"
                  className="block text-md font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="Phone"
                  className="block text-md font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="Phone"
                  name="Phone"
                  placeholder="Enter Your Phone Number"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.Phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="Email"
                  className="block text-md font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Enter Your Email Address"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="Query"
                  className="block text-md font-medium mb-2"
                >
                  Query
                </label>
                <textarea
                  name="Query"
                  id="Query"
                  placeholder="Write Your Query Here.."
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.Query}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#07a496] py-3 rounded-lg hover:bg-[#07a496] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
