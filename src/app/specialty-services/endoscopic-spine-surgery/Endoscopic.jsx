// import AppointmentForm from "@/app/components/homepage/AppoitmentForm";
import React from "react";
import Image from "next/image";

const Endoscopic = () => {
  return (
    <div>
      <div className="space-y-8">
        <div className="relative">
          <Image
            src="/special_services/geriatric.jpg"
            width={10000}
            height={10000}
            className="w-full h-[250px] object-cover"
            alt="Service Image"
          />
          {/* <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div> */}
          <div className="w-1/2 text-white justify-center lg:text-5xl text-4xl lg:ml-0 ml-5 font-bold my-4 absolute inset-0 z-20 flex items-center">
            Endoscopic Spine Surgery
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 lg:p-8 p-3">
        <div className="max-w-5xl mx-auto bg-white lg:p-6 p-4 rounded-lg shadow-lg">
          {/* Content Section */}
          <div className="space-y-10 px-4 lg:px-0">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Endoscopy Spine – Unilateral Biportal Endoscopy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unilateral biportal endoscopic (UBE) decompression technique is
                a percutaneous, full-endoscopic approach. Performed through two
                small incisions on either side of the spinous process, UBE
                allows freedom from the restrictions of working tubes or
                channels. With continuous high-pressure saline irrigation and a
                high-definition arthroscope, the surgeon can achieve precise
                decompression with a clear and magnified surgical field.
              </p>
            </div>

            <div className="lg:flex gap-8 items-start">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Candidates
                </h2>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                  <li>Degenerative spinal canal stenosis</li>
                  <li>Acute/chronic disc herniation</li>
                  <li>Spondylolisthesis</li>
                  <li>Failed back surgery syndrome</li>
                </ul>

                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  UBE endoscopy is an excellent alternative to
                  microscopic-assisted minimally invasive surgery. Developed to
                  improve muscle preservation and maintain surrounding normal
                  anatomical structures, UBE has significant benefits over open
                  spinal surgery.
                </p>

                <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 mt-4">
                  <li>
                    UBE reduces muscle injury, provides excellent visualization
                    of the contralateral traversing root, and minimizes
                    infection risks.
                  </li>
                  <li>
                    Similar to microscopic spinal surgery in floating technique
                    use, UBE aligns closely with percutaneous endoscopic spinal
                    surgery.
                  </li>
                  <li>
                    It allows precise access to target lesions with a panoramic
                    and extended field of view.
                  </li>
                </ul>
              </div>

              <div className="flex-shrink-0">
                <Image
                  src="/Endoscopic/photo1.jpg"
                  height={300}
                  width={500}
                  alt="Endoscopic Spine Procedure Image"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Clinical Outcomes are Promising
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Image
                  src="/Endoscopic/one.jpg"
                  height={350}
                  width={350}
                  alt="Endoscopic Spine Surgery Image 1"
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/Endoscopic/two.jpg"
                  height={350}
                  width={350}
                  alt="Endoscopic Spine Surgery Image 2"
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/Endoscopic/three.jpg"
                  height={350}
                  width={350}
                  alt="Endoscopic Spine Surgery Image 3"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endoscopic;
