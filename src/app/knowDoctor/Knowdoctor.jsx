"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AccordionItem = ({ headingId, bodyId, title, content, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2 id={headingId}>
        <button
          type="button"
          className={`flex items-center justify-between w-full py-5 font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 ${
            isOpen
              ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={bodyId}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 ${isOpen ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={bodyId}
        className={`${isOpen ? "block" : "hidden"}`}
        aria-labelledby={headingId}
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          {content.map((paragraph, idx) => (
            <p key={idx} className="mb-2 text-gray-500 dark:text-gray-400">
              {paragraph}
            </p>
          ))}
          {links && (
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              {links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} passHref>
                    <span className="text-blue-600 dark:text-blue-500 hover:underline">
                      {link.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const Knowdoctor = () => {
  const accordionItems = [
    {
      headingId: "accordion-flush-heading-1",
      bodyId: "accordion-flush-body-1",
      title: "Experience",
      content: [
        "11 years experience in Orthopedics and Spine Surgery. Presently working as a Consultant in Centre for Orthopedics Spine Surgery in Institute for Bone, Joint Replacement, Orthopedics Spine & Sports Medicine at BLK Super Speciality Hospital, New Delhi",
      ],
    },
    {
      headingId: "accordion-flush-heading-2",
      bodyId: "accordion-flush-body-2",
      title: "Specializes In",
      content: [
        "Surgical and non-surgical management of spinal disorders involving neck and back utilizing turn of the century minimally invasive techniques (UBE endoscopy/ Microscpic)",
        "He is also well versed with non–surgical pain relieving techniques such as - RF ablation Nerve root blocks, Facetal injections and Epidural infiltrations.",
        "Spinal cord stimulator/ Intrathecal beclofen pump",
      ],
    },
    {
      headingId: "accordion-flush-heading-3",
      bodyId: "accordion-flush-body-3",
      title: "Speciality Interest",
      content: [
        "SPINE: Minimally invasive (Anterior/ Posterior Decompression and Instrumentation), Minimal invasive (Endoscopic UBE/ microscopic) discectomy/spinal decompression/spinal fusions), Artificial disc replacements cervical and lumbar spine and deformity correction in Cervical, thoracic and lumbar spine in a wide array of Congenital, Degenerative, Post traumatic/post Infective), Spinal tumors Traumatic conditions of spine.",
      ],
    },

    {
      headingId: "accordion-flush-heading-3",
      bodyId: "accordion-flush-body-3",
      title: "Membership",
      content: [
        "Assocition of Spine Surgery of India",
        "Indain Orthopaedic Association",
        "AO spine",
      ],
    },

    {
      headingId: "accordion-flush-heading-3",
      bodyId: "accordion-flush-body-3",
      title: "Publications",
      content: [""],
    },
    {
      headingId: "accordion-flush-heading-3",
      bodyId: "accordion-flush-body-3",
      title: "Presentations",
      content: [""],
    },
  ];

  return (
    <div className="mt-[200px]">
      <div className="container mx-auto mt-16 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 p-8 rounded-lg shadow-lg">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold">Dr. Bhupendra Pratap Bharti</h1>
            <p className="text-xl mt-2">Consultant</p>
            <p className="text-xl">Orthopedic Spine Surgery</p>
            <p className="text-xl">BLK Superspeciality Hospital, New Delhi</p>

            <h2 className="mt-8 text-2xl font-semibold">
              Qualification
            </h2>
            <ul className="list-disc pl-6 text-lg mt-4 space-y-2">
              <li>MBBS</li>
              <li>MS (Orthopaedic)</li>
              <li>Spine Fellowship - Indian Spinal Injuries Centre, India</li>
              <li>Fellowship Anterior Spine Surgery - Hongkong</li>
              <li>AO Spine Inland Fellowship - Park Clinic, India</li>
              <li>Endoscopy UBE Fellowship - Busan, South Korea</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/drBhupendra/Dr_Bhupendra.jpg"
              width={500}
              height={500}
              alt="Dr. Bhupendra Pratap Bharti"
              className="rounded-lg object-cover border-4 border-cyan-400"
            />
          </div>
        </div>
      </div>

      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-black"
        data-inactive-classes=""
        className="p-10 text-black"
      >
        {accordionItems.map((item, idx) => (
          <AccordionItem
            key={idx}
            headingId={item.headingId}
            bodyId={item.bodyId}
            title={item.title}
            content={item.content}
            links={item.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Knowdoctor;
