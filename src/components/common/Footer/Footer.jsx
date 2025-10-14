import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import {
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-10">
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
            Quick Links
          </h2>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/know-your-doctor", label: "Know Your Doctor" },
              { href: "/media/photo-gallery", label: "Photo Gallery" },
              { href: "/media/video-gallery", label: "Video Gallery" },
              // { href: "/", label: "FAQs" },
              { href: "/contact-us", label: "Contact Us" },
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
          <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
            Specialty Services
          </h2>
          <ul className="space-y-3">
            {[
              {
                href: "/specialty-services/minimally-invasive-spine-surgery",
                label: "Minimally Invasive Spine Surgery",
              },
              {
                href: "/specialty-services/artificial-disc-replacement",
                label: "Artificial Disc Replacement",
              },
              {
                href: "/specialty-services/spine-deformity-correction",
                label: "Spine Deformity Correction",
              },
              { href: "/specialty-services/spine-tumors", label: "Spinal Tumors" },
              {
                href: "/specialty-services/traumatic-conditions-of-spine",
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
          <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
            Conditions Treated
          </h2>
          <ul className="space-y-3">
            {[
              {
                href: "/conditions-treated/degenerative-spine-conditions",
                label: "Degenerative Spine Conditions",
              },
              {
                href: "/conditions-treated/spinal-canal-stenosis-decompression",
                label: "Spinal Canal Stenosis Decompression",
              },
              {
                href: "/conditions-treated/spondylolisthesis",
                label: "Spondylolisthesis",
              },
              {
                href: "/conditions-treated/adult-degenerative-deformities",
                label: "Adult Degenerative Deformities",
              },
              {
                href: "/conditions-treated/spinal-fusion-surgery",
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
          <h2 className="text-xl font-bold mb-6 border-b-2 border-white pb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
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

            <p className="flex gap-2">
              <FaClock className="text-xl mt-1" /> Mon/Tues/Thurs/Sat: 10am - 2pm , Wed: 10am - 12pm
            </p>
          </div>
          <div className="mt-4 space-y-3">
            <Link
              href="tel:+91-9205138507"
              className="flex gap-2 hover:text-gray-300 transition duration-300"
            >
              <IoMdCall className="text-xl mt-1" /> For Appointment: +91-92051 38507
            </Link>

            <Link
              href="mailto:drbhupendrabharti@gmail.com"
              className="flex gap-2 hover:text-gray-300 transition duration-300"
            >
              <MdEmail className="text-xl mt-1" /> Email: drbhupendrabharti@gmail.com
            </Link>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 pt-7">
        {[
          { icon: <FaInstagram color="#E4405F" />, href: "https://www.instagram.com/drbhupendrabharti/?hl=en", target: "__blank" },
          { icon: <FaFacebookF color="#1877F2" />, href: "https://www.facebook.com/profile.php?id=100066588493905", target: "__blank" },
          { icon: <FaLinkedinIn color="#0A66C2" />, href: "https://www.linkedin.com/company/dr-bhupendra-bharti/", target: "__blank" },
          { icon: <FaYoutube color="#FF0000" />, href: "https://www.youtube.com/@shreshtha.spine_1", target: "__blank" },
          { icon: <FcGoogle />, href: "https://maps.app.goo.gl/o6Dg6vGi4Rghjjay7", target: "__blank" },
        ].map((social, index) => (
          <Link
            key={index}
            href={social.href}
            className="p-3 bg-white rounded-full hover:scale-125 transition duration-300"
            target="__blank"
          >
            {social.icon}
          </Link>
        ))}
      </div>

      <h1 className="text-center mt-6">
        <Link href="https://tekbooster.com/" target="__blank">Design & Develop by Tek Booster (Digital Marketing Company)</Link>
      </h1>
    </footer>
  );
};

export default Footer;
