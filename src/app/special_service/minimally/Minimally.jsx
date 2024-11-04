import React from "react";
import Image from "next/image";
import "animate.css";
// import AppointmentForm from "@/app/components/homepage/AppoitmentForm";
const Minimally = () => {
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <Image
            src="/special_services/geriatric.jpg"
            width={10000}
            height={10000}
            className="w-full h-[250px] object-cover"
            alt="Service Image"
          />
          {/* <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div> */}
          <div className="w-1/2 text-white justify-center lg:text-5xl text-4xl ml-5 font-bold my-4 absolute inset-0 z-20 flex items-center">
            Minimally Invasive Spine Surgery
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 lg:p-8 p-3">
        <div className="max-w-5xl mx-auto bg-white lg:p-6 p-4 rounded-lg shadow-lg">
          <div className="lg:px-7 space-y-6">
            {/* Introduction Section */}
            <p className="text-lg leading-relaxed text-gray-700">
              Minimally Invasive Spine Surgery (MISS) refers to surgical
              techniques that reduce tissue trauma, bleeding, infection risk,
              and radiation exposure. By using advanced imaging and medical
              equipment, these techniques allow for smaller incisions and faster
              recovery.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              MISS enables procedures previously considered high-risk for
              traditional surgery, especially in cases involving complex
              conditions or significant medical history.
            </p>

            {/* Procedures Section */}
            <h2 className="font-semibold text-2xl text-[#273c76] py-2">
              Procedures Requiring Minimal Incisions (Approximately 1 Inch or
              More)
            </h2>
            <div className="lg:flex lg:gap-10">
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li>Discectomy, Laminectomy, and Spinal Canal Decompression</li>
                <li>
                  Interbody Fusion Surgery for Degenerative or Slipped Discs
                </li>
                <li>Fracture Fixation/Stabilization</li>
                <li>Spinal Infection Treatment</li>
                <li>Anterior Cervical Discectomy and Fusion</li>
                <li>Artificial Disc Replacement (Cervical/Lumbar)</li>
                <li>Oblique and Anterior Lumbar Interbody Fusion</li>
                <li>Percutaneous Vertebroplasty (Kyphoplasty)</li>
                <li>Spinal Tumor Decompression and Fixation</li>
                <li>Endoscopic Discectomy and Interbody Fusion Surgery</li>
              </ul>
              <Image
                src="/Minimally/MISS6.jpg"
                height={350}
                width={350}
                className="mt-4 lg:mt-0"
                alt="Minimally Invasive Spine Surgery Illustration"
              />
            </div>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Note:</span> MISS is not
              recommended for high-grade deformities or complex tumors.
            </p>

            {/* FAQ Section */}
            <h2 className="font-semibold text-2xl text-[#273c76] py-3">
              FAQs About Minimally Invasive Spine Surgery (MISS)
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-xl text-gray-800">
                  Q. Is Minimally Invasive Spine Surgery Safe?
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Ans:</span> MISS is highly
                  safe due to advancements in precision technology, such as
                  neuromicroscopes, neuromonitoring, navigation, and robotics,
                  providing accuracy within 1 mm.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xl text-gray-800">
                  Q. How long will I stay in the hospital?
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Ans:</span> Recovery time
                  varies. Patients undergoing discectomy or decompression can
                  often return home the same day. Fusion surgeries typically
                  require a 2-3 day stay.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xl text-gray-800">
                  Q. What is the recovery time, and when can I return to work?
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Ans:</span> Recovery time
                  depends on the procedure and the patient's occupation and
                  individual needs.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xl text-gray-800">
                  Q. Is physical therapy required after MISS?
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Ans:</span> Yes, early
                  physical therapy aids recovery and enables a faster return to
                  regular activities.
                </p>
              </div>
            </div>

            {/* Case Study Section */}
            <h2 className="font-bold text-3xl text-[#273c76] mt-10">
              Minimally Invasive Spinal Fusion Case Study
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <span className="font-semibold">Patient History:</span> A
                42-year-old woman presented with chronic low back pain and
                radicular pain in both lower limbs, aggravated by standing and
                walking.
              </p>
              <p>
                <span className="font-semibold">Investigations:</span> MRI and
                dynamic X-rays of the lumbar spine revealed Grade II Lytic
                Anterolisthesis at L4-5.
              </p>
              <p>
                <span className="font-semibold">Procedure:</span> The patient
                underwent Transforaminal Lumbar Interbody Fusion (MIS TLIF).
              </p>
            </div>

            {/* Image Sections */}
            <h2 className="font-bold text-3xl text-[#273c76] mt-10">
              Preoperative Images
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/Minimally/MISS2.jpg"
                height={350}
                width={350}
                alt="Preoperative Image 1"
              />
              <Image
                src="/Minimally/MISS3.jpg"
                height={350}
                width={350}
                alt="Preoperative Image 2"
              />
            </div>

            <h2 className="font-bold text-3xl text-[#273c76] mt-10">
              Postoperative Images
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/Minimally/MIS4.jpg"
                height={350}
                width={350}
                alt="Postoperative Image 1"
              />
              <Image
                src="/Minimally/MISS5.jpg"
                height={350}
                width={350}
                alt="Postoperative Image 2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minimally;
