import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";

import {
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-10">
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">
            Quick Links
          </h2>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/knowDoctor", label: "Know Your Doctor" },
              { href: "/media/photoGallery", label: "Photo Gallery" },
              { href: "/media/videoGallery", label: "Video Gallery" },
              // { href: "/", label: "FAQs" },
              { href: "/contactus", label: "Contact Us" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 hover:text-gray-300 transition duration-300"
                >
                  <FaAngleRight className="text-xl text-gray-300" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialty Services */}
        <div>
          <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">
            Specialty Services
          </h2>
          <ul className="space-y-3">
            {[
              {
                href: "/special_service/minimally",
                label: "Minimally Invasive Spine Surgery",
              },
              {
                href: "/special_service/artificial",
                label: "Artificial Disc Replacement",
              },
              {
                href: "/special_service/spineDeformity",
                label: "Spine Deformity Correction",
              },
              { href: "/special_service/spinal", label: "Spinal Tumors" },
              {
                href: "/special_service/traumatic",
                label: "Traumatic Conditions of Spine",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 hover:text-gray-300 transition duration-300"
                >
                  <FaAngleRight className="text-xl text-gray-300" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Conditions Treated */}
        <div>
          <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">
            Conditions Treated
          </h2>
          <ul className="space-y-3">
            {[
              {
                href: "/conditions_treated/degenerative",
                label: "Degenerative Spine Conditions",
              },
              {
                href: "/conditions_treated/spinalCanal",
                label: "Spinal Canal Stenosis Decompression",
              },
              {
                href: "/conditions_treated/spondylolisthesis",
                label: "Spondylolisthesis",
              },
              {
                href: "/conditions_treated/adult",
                label: "Adult Degenerative Deformities",
              },
              {
                href: "/conditions_treated/spinal",
                label: "Spinal Fusion Surgery",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 hover:text-gray-300 transition duration-300"
                >
                  <FaAngleRight className="text-xl text-gray-300" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">
            Contact Us
          </h2>
          <h3 className="font-bold">Dr. Bhupendra Pratap Bharti</h3>
          <p className="mt-2">Associate Director</p>
          <p>
            {/* Institute for Bone, Joint Replacement, Orthopedics Spine & Sports
            Medicine */}
            Orthopaedic Spine surgery
          </p>
          <div className="mt-4">
            <h4 className="font-bold">OPD Schedule</h4>
            
            <p className="flex items-center gap-2">
              <FaClock className="text-xl" /> Mon/Tues/Thurs/Sat: 10am - 2pm , Wed: 10am - 12pm
            </p>
          </div>
          <div className="mt-4 space-y-3">
            <Link
              href="tel:+91-9205138507"
              className="flex items-center gap-2 hover:text-gray-300 transition duration-300"
            >
              <IoMdCall className="text-xl" /> For Appointment: +91-92051 38507
            </Link>

            <Link
              href="mailto:drbhupendrabharti@gmail.com"
              className="flex items-center gap-2 hover:text-gray-300 transition duration-300"
            >
              <MdEmail className="text-xl" /> Email: drbhupendrabharti@gmail.com
            </Link>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 pt-7">
        {[
          { icon: <FaInstagram />, href: "https://www.instagram.com/drbhupendrabharti/?hl=en", target: "__blank" },
          { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=100066588493905", target: "__blank"},
          { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/dr-bhupendra-bharti/", target:"__blank" },
          { icon: <FaYoutube />, href: "https://www.youtube.com/@shreshtha.spine_1", target:"__blank" },
        ].map((social, index) => (
          <Link
            key={index}
            href={social.href}
            className="p-3 bg-white rounded-full text-teal-600 hover:text-white hover:bg-teal-600 transition duration-300"
            target="__blank"
          >
            {social.icon}
          </Link>
        ))}
      </div>

      <h1 className="text-center mt-6">
        <Link href="https://tekbooster.com/" target="__blank">Design & Develop by TekBooster (Digital Marketing Company)</Link>
      </h1>
    </footer>
  );
};

export default Footer;
