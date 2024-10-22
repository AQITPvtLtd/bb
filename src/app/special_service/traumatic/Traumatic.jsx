import React from "react";
import Image from "next/image";
const Traumatic = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src="/Services/trumatic.png"
          width={1000}
          height={750}
          className="w-full h-[250px] object-cover hidden lg:block"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-4xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Traumatic Conditions of Spine
        </h1>
      </div>

      <div className="space-y-2 p-8 bg-white rounded-lg">
        <p className="text-lg">
          <strong>Spine fracture:</strong> Spine fracture is a serious issue and
          is defined as a break in the vertebrae, which can affect life like any
          other fracture.
        </p>

        <p className="text-lg">
          <strong> Symptoms: </strong>Patient with spine fracture usually
          presented with:
        </p>
        <ul className="list-decimal pl-8 space-y-1">
          <li>Back pain – the most common complaint</li>
          <li>Difficulty to sit/stand/walk</li>
          <li>
            Sciatica-like pain in limbs – radicular pain, tingling, numbness
          </li>
          <li>Weakness in limbs</li>
          <li>Bladder/Bowel involvement – incontinence</li>
          <li>
            Spinal deformity and posture changes – usually in untreated cases
          </li>
        </ul>

        <p className="text-xl font-semibold">Spine Fracture Causes:</p>
        <ul className="list-decimal pl-8 space-y-1">
          <li>
            In young patients – usually due to high-impact injury like a road
            traffic accident, fall from height, or sports injury.
          </li>
          <li>
            In older patients – Osteoporosis is the leading cause. Because of
            low bone density, even trivial trauma, like leaning forward or
            sneezing, can cause a spine fracture.
          </li>
          <li>
            Fractures associated with:
            <ul className="list-disc pl-8 space-y-1">
              <li>Tumors – usually metastatic</li>
              <li>Drug-induced – e.g., long-standing steroid consumption</li>
            </ul>
          </li>
        </ul>

        <p className="text-lg">
          <strong> Diagnosis:</strong> Based on clinical examination and
          investigations:
        </p>
        <ul className="list-decimal pl-8 space-y-1">
          <li>MRI – the investigation of choice</li>
          <li>X-rays and CT scan</li>
          <li>
            Bone density tests:
            <ul className="list-disc pl-8 space-y-2">
              <li>Also called BMD or DEXA scan</li>
              <li>Used to quantify osteoporosis</li>
              <li>To determine type of fixation during surgery</li>
              <li>For medical management of osteoporosis</li>
            </ul>
          </li>
        </ul>

        <p className="text-lg">
          <strong>Management:</strong> Depends on:
        </p>

        <ul className="list-decimal pl-8 space-y-1">
          <li>Cause of fracture</li>
          <li>Type of fracture </li>
          <li>Site of fracture</li>
        </ul>

        <p className="text-lg leading-relaxed">
          Most spine fractures do not need surgery and can be managed
          conservatively.
        </p>
        <ul className="list-decimal pl-8 space-y-1">
          <li>Pain management with medication</li>
          <li>
            Bracing – supports the back, improves strength, and prevents
            collapse.
          </li>
          <li>
            Physical therapy – helps maintain joint mobility and prevent chest
            issues while bedridden.
          </li>
          <li>Treatment of associated factors, e.g., osteoporosis</li>
        </ul>

        <p className="text-xl font-semibold">Surgery: Usually required when:</p>
        <ul className="list-decimal pl-8 space-y-1">
          <li>Conservative treatment fails</li>
          <li>Pain and disability increase despite non-surgical treatments</li>
          <li>
            Nerve compression – causing weakness, bladder, or bowel incontinence
          </li>
          <li>Spine deformity</li>
        </ul>

        <p className="text-lg font-semibold">Types of Surgery:</p>
        <ul className="list-decimal pl-8 space-y-1">
          <li>
            In young patients – spinal fixation with or without neural
            decompression
          </li>
          <li>
            In older patients – Balloon kyphoplasty or vertebroplasty, a
            minimally invasive procedure using special cement to fill the void
            created after a fracture. Maximum benefit with minimal intervention.
          </li>
        </ul>

        <p className="text-lg font-semibold">
          In some cases, fixation along with cementing is needed.
        </p>
      </div>
    </div>
  );
};

export default Traumatic;
