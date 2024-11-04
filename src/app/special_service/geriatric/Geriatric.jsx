import React from "react";
import "animate.css";
import Image from "next/image";
// import AppointmentForm from "@/app/components/homepage/AppoitmentForm";

const Geriatric = () => {
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
            Geriatric Spine Surgery
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 lg:p-8 p-3">
        <div className="max-w-5xl mx-auto bg-white lg:p-6 p-4 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-primary mb-6">
            Causes of Spine Conditions in Geriatric Patients
          </h1>

          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Degeneration due to aging</span> –
              Wear and tear of the spine's joints, discs, and bones lead to
              conditions like spinal stenosis, degenerative disc disease, and
              osteoarthritis.
            </li>
            <li>
              <span className="font-semibold">Osteoporosis</span> – Reduced bone
              density makes the vertebrae more susceptible to fractures and
              deformities.
            </li>
            <li>
              <span className="font-semibold">Previous trauma</span> – Injuries
              from earlier in life may worsen with age and contribute to spinal
              instability.
            </li>
            <li>
              <span className="font-semibold">Tumours</span> – Elderly patients
              with metastatic cancers may develop spinal metastases, which
              compromise the structural integrity of the spine.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Diagnosis</h2>
          <p className="mb-4">
            Diagnosis of spine issues in geriatric patients is typically made
            using a combination of clinical examination and advanced imaging
            techniques, including:
          </p>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">MRI</span> – The investigation of
              choice for soft tissue evaluation and nerve compression
              assessment.
            </li>
            <li>
              <span className="font-semibold">CT scan</span> – Useful for
              detailed bone anatomy and evaluating complex fractures.
            </li>
            <li>
              <span className="font-semibold">X-rays</span> – Provide a basic
              overview of bone structure and alignment.
            </li>
            <li>
              <span className="font-semibold">
                Bone density testing (DEXA scan)
              </span>{" "}
              – Crucial in assessing the extent of osteoporosis and determining
              the risk of fractures.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Management of Spine Conditions in Geriatric Patients
          </h2>

          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Conservative Treatment
          </h3>
          <p className="mb-4">
            In many cases, surgery may be avoided or delayed with non-surgical
            treatments:
          </p>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Pain management</span> –
              Anti-inflammatory medications, muscle relaxants, and analgesics
              are often prescribed to manage chronic pain.
            </li>
            <li>
              <span className="font-semibold">Physical therapy</span> – Helps
              improve strength, flexibility, and mobility, and reduces the need
              for surgical intervention.
            </li>
            <li>
              <span className="font-semibold">Bracing</span> – Supports the
              spine, prevents further deformity, and aids in healing fractures.
            </li>
            <li>
              <span className="font-semibold">Osteoporosis management</span> –
              Medications to increase bone density and reduce the risk of future
              fractures.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Surgical Management
          </h3>
          <p className="mb-4">
            Surgery is considered for geriatric patients when conservative
            treatments fail, or there is significant nerve compression,
            instability, or deformity.
          </p>

          <h4 className="text-lg font-semibold text-blue-400 mb-2">
            Common Surgeries for Geriatric Spine Conditions
          </h4>
          <ol className="list-decimal list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Decompression Surgeries</span>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold">Laminectomy</span> – Removal
                  of part of the vertebra (lamina) to relieve pressure on the
                  spinal cord or nerves, often used in spinal stenosis.
                </li>
                <li>
                  <span className="font-semibold">Foraminotomy</span> –
                  Enlargement of the space through which the spinal nerve exits,
                  often combined with laminectomy.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Fusion Surgery</span>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold">Spinal fusion</span> – Joining
                  two or more vertebrae together using bone grafts and hardware
                  to stabilize the spine and prevent painful motion.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">
                Minimally Invasive Surgeries
              </span>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold">
                    Balloon kyphoplasty/vertebroplasty
                  </span>{" "}
                  – Injection of bone cement into fractured vertebrae to
                  stabilize compression fractures caused by osteoporosis.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Tumour-related Surgeries</span>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold">
                    Tumour resection and spinal stabilization
                  </span>{" "}
                  – Surgery may be required to remove the tumour and stabilize
                  the spine with hardware and bone grafts.
                </li>
              </ul>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Factors Affecting Surgical Decisions
          </h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Overall health</span> – Comorbid
              conditions (diabetes, hypertension, cardiovascular issues) can
              complicate surgery and recovery.
            </li>
            <li>
              <span className="font-semibold">Bone quality</span> – Poor bone
              quality due to osteoporosis may affect the type of surgery,
              particularly the choice of fixation techniques.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Postoperative Care
          </h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Rehabilitation</span> – Physical
              therapy is critical after surgery to help restore mobility and
              function.
            </li>
            <li>
              <span className="font-semibold">Pain management</span> –
              Postoperative pain control using medication and physical therapy.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Prognosis</h2>
          <p>
            Geriatric spine surgery can significantly improve the quality of
            life for elderly patients by relieving pain, restoring mobility, and
            preventing further spinal deterioration. However, the outcomes
            depend on the patient’s overall health, the type of surgery, and the
            severity of the spinal condition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Geriatric;
