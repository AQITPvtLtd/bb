import React from "react";
import Image from "next/image";
const Traumatic = () => {
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
            Traumatic Conditions of Spine
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 lg:p-8 p-3">
        <div className="max-w-5xl mx-auto bg-white lg:p-6 p-4 rounded-lg shadow-lg">
          <p className="text-lg leading-relaxed">
            <strong className="text-blue-600">Spine Fracture:</strong> A spine
            fracture is a serious condition defined as a break in the vertebrae,
            which can impact life similarly to other fractures.
          </p>

          <p className="text-lg leading-relaxed">
            <strong className="text-blue-600">Symptoms:</strong> Patients with
            spine fractures often present with:
          </p>
          <ul className="list-decimal pl-8 space-y-2 text-gray-700">
            <li>
              <strong>Back pain</strong> – the most common complaint
            </li>
            <li>Difficulty sitting, standing, or walking</li>
            <li>Radicular pain, tingling, or numbness in the limbs</li>
            <li>Weakness in limbs</li>
            <li>Bladder/bowel incontinence</li>
            <li>
              Spinal deformity and posture changes, especially in untreated
              cases
            </li>
          </ul>

          <p className="text-xl font-semibold text-blue-600 mt-6">
            Spine Fracture Causes:
          </p>
          <ul className="list-decimal pl-8 space-y-2 text-gray-700">
            <li>
              In younger patients, high-impact injuries like road accidents,
              falls, or sports injuries are common causes.
            </li>
            <li>
              In older patients, osteoporosis is a leading factor; low bone
              density can make minor trauma, like sneezing, cause fractures.
            </li>
            <li>
              Fractures may also be associated with:
              <ul className="list-disc pl-8 space-y-2">
                <li>Metastatic tumors</li>
                <li>Long-term steroid use or other drug-induced conditions</li>
              </ul>
            </li>
          </ul>

          <p className="text-lg leading-relaxed">
            <strong className="text-blue-600">Diagnosis:</strong> Diagnosis is
            based on clinical examination and imaging studies:
          </p>
          <ul className="list-decimal pl-8 space-y-2 text-gray-700">
            <li>MRI – the preferred method for detailed assessment</li>
            <li>X-rays and CT scans</li>
            <li>
              Bone density tests:
              <ul className="list-disc pl-8 space-y-2">
                <li>Also known as BMD or DEXA scans</li>
                <li>
                  Evaluate osteoporosis severity and guide fixation choice
                  during surgery
                </li>
                <li>Assist in medical management of osteoporosis</li>
              </ul>
            </li>
          </ul>

          <p className="text-lg leading-relaxed">
            <strong className="text-blue-600">Management:</strong> Treatment
            depends on factors like:
          </p>
          <ul className="list-decimal pl-8 space-y-2 text-gray-700">
            <li>The underlying cause of the fracture</li>
            <li>Type and location of the fracture</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Most spine fractures can be managed conservatively without surgery.
          </p>
          <ul className="list-decimal pl-8 space-y-2 text-gray-700">
            <li>Pain management through medication</li>
            <li>
              Bracing for back support, strength improvement, and fracture
              prevention
            </li>
            <li>
              Physical therapy to maintain joint mobility and prevent
              complications while bedridden
            </li>
            <li>Treatment of associated factors, such as osteoporosis</li>
          </ul>

          <p className="text-xl font-semibold text-blue-600 mt-6">
            Surgery: Typically Required When:
          </p>
          <ul className="list-decimal pl-8 space-y-2 text-gray-700">
            <li>Non-surgical treatments fail</li>
            <li>Pain and disability increase despite conservative treatment</li>
            <li>
              Nerve compression occurs, causing limb weakness or incontinence
            </li>
            <li>Significant spinal deformity</li>
          </ul>

          <p className="text-lg font-semibold text-blue-600 mt-6">
            Types of Surgery:
          </p>
          <ul className="list-decimal pl-8 space-y-2 text-gray-700">
            <li>
              In younger patients: Spinal fixation, with or without neural
              decompression, depending on injury severity.
            </li>
            <li>
              In older patients: Balloon kyphoplasty or vertebroplasty, which
              are minimally invasive procedures using special cement to
              stabilize fractures with minimal intervention.
            </li>
          </ul>

          <p className="text-lg font-semibold text-gray-700">
            In some cases, a combination of fixation and cementing may be
            needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Traumatic;
