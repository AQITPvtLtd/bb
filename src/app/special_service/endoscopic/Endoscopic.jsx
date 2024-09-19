// import AppointmentForm from "@/app/components/homepage/AppoitmentForm";
import React from "react";
import Image from "next/image";

const Endoscopic = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-[80px]">
      {/* Title Section */}
      <h1 className="text-center text-4xl font-semibold bg-[#07a496] p-8 text-white rounded-md shadow-lg mb-12">
        Endoscopic Spine Surgery
      </h1>

      {/* Content Section */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Endoscopy Spine – Unilateral Biportal Endoscopy
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Unilateral biportal endoscopic (UBE) decompression techniques is a
            percutaneous full endoscopic technique. It is performed through two
            separated small surgical wounds on either side of the spinous
            process. Unlike other endoscopic approaches, UBE is not confined by
            the working tube or the working channel. With continuous
            high-pressure normal saline irrigation and high-definition
            arthroscope, the surgeon can do very precise decompression in a
            clear and magnified surgical field.
          </p>
        </div>
        <div className="lg:flex gap-9">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Candidates</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
              <li>Degenerative spinal canal stenosis</li>
              <li>Acute/chronic disc herniation</li>
              <li>Spondylolisthesis</li>
              <li>Failed back surgery syndrome</li>

              <p className="text-lg text-gray-700 mt-4">
                UBE endoscopy in excellent alternative to microscopic assisted
                minimally invasive surgery. It developed to improve muscle
                preservation and other surrounding normal anatomical structures.
                Compared with open spinal surgery
              </p>

              <li>
                UBE technique can reduce muscle injury and allow excellent
                visualization of the contralateral traversing root and reduce
                infection along with benefit and minimal resection of bone to
                prevent destabilization.
              </li>
              <li>
                It basically similar to microscopic spinal surgery in terms of
                the use of floating technique and technically similar to
                conventional percutaneous endoscopic spinal surgery.
              </li>
              <li>
                It allows closer access to the target lesion through a panoramic
                view and wider range of view.
              </li>
            </ul>
          </div>

          <Image src="/Endoscopic/photo1.jpg" height={300} width={500} />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Clinical outcomes are promising
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Image
              src="/Endoscopic/one.jpg"
              height={350}
              width={350}
              alt="Endoscopic Spine Surgery Image 1"
              className="rounded-lg shadow-md"
            />
            <Image
              src="/Endoscopic/two.jpg"
              height={350}
              width={350}
              alt="Endoscopic Spine Surgery Image 3"
              className="rounded-lg shadow-md"
            />
            <Image
              src="/Endoscopic/three.jpg"
              height={350}
              width={350}
              alt="Endoscopic Spine Surgery Image 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Appointment Form */}
      {/* <div className="mt-16">
        <AppointmentForm />
      </div> */}
    </div>
  );
};

export default Endoscopic;
