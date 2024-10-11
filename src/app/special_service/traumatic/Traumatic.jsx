import React from "react";
import Image from "next/image";
const Traumatic = () => {
  return (
    <div className="mt-[100px]">
      <div className="relative">
        <Image
          src="/Services/trumatic.png"
          width={1000}
          height={750}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-4xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Traumatic Conditions of Spine
        </h1>
      </div>

      <div className="space-y-3 p-6 bg-white rounded-lg shadow-md">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Spine fracture:</strong> Spine fracture is a serious issue and
          is defined as a break in the vertebrae, which can affect life like any
          other fracture.
        </p>

        <p className="text-lg text-gray-700">
          <strong> Symptoms: </strong>Patient with spine fracture usually
          presented with
        </p>
        <ul className="list-decimal pl-7 space-y-1 text-gray-700">
          <li>Back pain – the most common complaint</li>
          <li>Difficulty to sit/stand/walk</li>
          <li>
            Sciatica like pain in limbs- radicular pain, tingling, numbness
          </li>
          <li>Weakness in limbs</li>
          <li>Bladder/Bowel involvement usually- incontinence</li>
          <li>
            Spinal deformity and Change in posture – usually in case of
            untreated fracture
          </li>
        </ul>

        <p className="text-lg font-semibold text-gray-800">
          Spine Fracture Causes:
        </p>
        <ul className="list-decimal pl-7 space-y-2 text-gray-700">
          <li>
            In young patient – usually high impact injury i.e.- road traffic
            accident, Fall from height/sports injury
          </li>
          <li>
            In Old patients- Osteoporosis is leading cause. Because of low bone
            density over the time bone become vulnerable for fracture. Many time
            even leaning forward /sneezing trivial trauma may cause spine
            fracture.
          </li>
          <li>
            Fracture associate with:
            <ul className="list-disc pl-7 space-y-2">
              <li>Tumors – which usually metastatic</li>
              <li>Drug-induced – e.g., long-standing steroid consumption</li>
            </ul>
          </li>
        </ul>

        <p className="text-lg text-gray-700">
          <strong> Diagnosis:</strong>on basis of clinical examination and
          investigations
        </p>
        <ul className="list-decimal pl-7 space-y-2 text-gray-700">
          <li>MRI – the investigation of choice</li>
          <li>X-rays and CT scan</li>
          <li>
            Bone density tests:
            <ul className="list-disc pl-7 space-y-2">
              <li> also called as BMD or DEXA scan </li>
              <li> to quantity osteoporosis</li>
              <li>Kind of fixation during fracture fixation surgery</li>
              <li>Kind of medical management for osteoporosis</li>
            </ul>
          </li>
        </ul>

        <p className="text-lg text-gray-700">
          <strong>Management:</strong> depends upon:
        </p>

        <ul className="list-decimal pl-7 space-y-2 text-gray-700">
          <li>Cause of fracture</li>
          <li>Type of fracture </li>
          <li>Site of fracture</li>
        </ul>

        <p className="text-lg leading-relaxed text-gray-700">
          Most of the time, spine fractures do not need surgery and can be
          managed conservatively (non-surgical).
        </p>
        <ul className="list-decimal pl-7 space-y-2 text-gray-700">
          <li>Pain management with medicine</li>
          <li>
            Bracing of spine – it support back, improve overall strength and
            prevention of collapse of fracture
          </li>
          <li>
            Physical therapy- limbs and chest therapy to maintained joint
            suppleness and chest related issues when patient is in bed
          </li>
          <li>Treatment of associate factors- e.g.- osteoporosis</li>
        </ul>

        <p className="text-lg text-gray-800">
          {" "}
          <strong>Surgery:</strong> Usually depend upon
        </p>
        <ul className="list-decimal pl-7 space-y-2 text-gray-700">
          <li>Failed conservative treatment</li>
          <li>
            Pain and disability increase despite of conservative treatment{" "}
          </li>
          <li>
            Nerve compression at the time of presentation – weakness in limbs,
            bladder and bowel incontinence
          </li>
          <li>Deformity of spine</li>
        </ul>

        <p className="text-lg font-semibold text-gray-800">Types of Surgery:</p>
        <ul className="list-decimal pl-7 space-y-2 text-gray-700">
          <li>
            In young patient – mainly spinal fixation +/- decompression of
            neural elements
          </li>
          <li>
            In old age- cementing of affected vertebrae- Balloon kyphoplasty
            /vertebroplasty – This is minimally invasive procedure. In this
            procedure special kind of cement to fill the void created after
            fracture. this procedure is with MAXIMUM BENEFIT WITH MINIMAL
            INTERVENTION.
          </li>
        </ul>

        <p className="text-lg leading-relaxed text-gray-700">
          In some case need fixation need along with cementing.
        </p>
      </div>
    </div>
  );
};

export default Traumatic;
