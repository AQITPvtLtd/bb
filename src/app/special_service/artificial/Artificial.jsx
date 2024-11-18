// import AppointmentForm from "@/app/components/homepage/AppoitmentForm";
import React from "react";
import Image from "next/image";
import "animate.css";

const Artificial = () => {
  return (
    <div className="">
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
            Artificial Disc Replacement
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 lg:p-8 p-3">
        <div className="max-w-5xl mx-auto bg-white lg:p-6 p-4 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-primary mb-6">
            Causes of Spinal Disc Degeneration Requiring Artificial Disc
            Replacement
          </h1>

          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">
                Degenerative Disc Disease (DDD)
              </span>{" "}
              Age-related wear and tear of the intervertebral discs, leading to
              pain and loss of disc function.
            </li>
            <li>
              <span className="font-semibold">Injury or Trauma </span> –
              Previous spine injuries may accelerate disc degeneration or
              herniation, making disc replacement necessary.
            </li>
            <li>
              <span className="font-semibold">Genetic Factors</span> – Some
              individuals may be predisposed to disc degeneration due to genetic
              factors, impacting disc integrity and elasticity.
            </li>
            <li>
              <span className="font-semibold">Lifestyle Factors</span> –
              Sedentary lifestyle, poor posture, and repetitive strain can
              contribute to disc deterioration over time.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Diagnosis</h2>
          <p className="mb-4">
            Diagnosis of conditions that may require ADR typically involves a
            combination of clinical evaluation and imaging techniques:
          </p>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">MRI</span> – Essential for
              evaluating disc integrity, nerve compression, and soft tissue
              around the spine.
            </li>
            <li>
              <span className="font-semibold">CT scan</span> – Offers a detailed
              view of the bone structure, useful for assessing disc spaces and
              facet joints.
            </li>
            <li>
              <span className="font-semibold">X-rays</span> – Provides insights
              into spinal alignment and detects bone spurs or abnormal disc
              height.
            </li>
            <li>
              <span className="font-semibold">Discography</span>– – A
              specialized test involving contrast injection into discs to
              pinpoint pain sources and assess disc condition.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Management of Spinal Disc Degeneration
          </h2>

          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Conservative Treatment
          </h3>
          <p className="mb-4">
            Before considering ADR, conservative management may include:
          </p>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Pain management</span> – Use of
              anti-inflammatory medications, analgesics, and occasionally
              corticosteroid injections to manage pain.
            </li>
            <li>
              <span className="font-semibold">Physical therapy</span> – Focuses
              on strengthening supporting muscles, improving flexibility, and
              reducing the strain on affected discs.
            </li>
            <li>
              <span className="font-semibold">Lifestyle Modifications</span> –
              Encourages weight management, proper ergonomics, and postural
              adjustments to alleviate disc stress.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Surgical Treatment
          </h3>
          <p className="mb-4">
            When conservative treatments fail to provide relief, Artificial Disc
            Replacement may be considered.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Common Artificial Disc Replacement Procedures
          </h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Cervical Disc Replacement </span>–
              Replaces damaged cervical discs in the neck, restoring mobility
              while maintaining disc height.
            </li>
            <li>
              <span className="font-semibold">Lumbar Disc Replacement </span> –
              Targets the lower back discs, helping to preserve natural motion
              and reducing stress on adjacent discs.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Factors Affecting ADR Surgical Decisions
          </h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">
                Patient’s Age and Activity Level
              </span>
              – Younger, active patients with isolated disc disease may benefit
              more from ADR.
            </li>
            <li>
              <span className="font-semibold">Disc Location</span> – ADR is more
              commonly performed on the cervical spine; lumbar ADR is generally
              more complex and patient-specific.
            </li>
            <li>
              <span className="font-semibold">Overall Health </span> – Comorbid
              conditions like osteoporosis or autoimmune diseases can influence
              eligibility for ADR.
            </li>
            <li>
              <span className="font-semibold">Previous Surgeries </span> –
              Previous spine surgeries may affect the suitability of ADR due to
              potential complications in spinal structure.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Postoperative Care
          </h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Rehabilitation</span> – Physical
              therapy to regain strength, flexibility, and improve spinal
              alignment.
            </li>
            <li>
              <span className="font-semibold">Pain management</span> –
              Postoperative pain control with medication and physical therapy is
              essential for a smooth recovery.
            </li>
            <li>
              <span className="font-semibold">Follow-up Imaging </span> –
              Periodic X-rays or MRI scans to assess the placement and function
              of the artificial disc.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Prognosis</h2>
          <p>
            Artificial Disc Replacement can provide significant pain relief and
            improved mobility for patients with disc degeneration. By preserving
            natural disc movement, ADR may help prevent adjacent segment
            disease, a common issue after spinal fusion surgery. Outcomes vary
            based on factors such as the patient’s age, overall spine health,
            and adherence to postoperative care, but many patients experience
            improved quality of life post-surgery.
          </p>
        </div>
      </div>
      {/* <AppointmentForm /> */}
    </div>
  );
};

export default Artificial;
