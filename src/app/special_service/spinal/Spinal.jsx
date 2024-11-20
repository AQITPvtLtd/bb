// import AppointmentForm from "@/app/components/homepage/AppoitmentForm";
import React from "react";
import "animate.css";
import Image from "next/image";
const Spinal = () => {
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
            Spine Tumors
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 lg:p-8 p-3">
        <div className="max-w-5xl mx-auto bg-white lg:p-6 p-4 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-primary mb-6">
            Causes of Spine Tumors
          </h1>
          <p>
            Spine tumors may originate within the spine or spread from other
            parts of the body (metastasis). <br />
            <br />
            Common causes include:
          </p>
          <ol className="list-decimal list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Primary Tumors</span>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold">Genetic Mutations:</span> –
                  Abnormal changes in DNA can lead to the uncontrolled growth of
                  cells within the spine.
                </li>
                <li>
                  <span className="font-semibold">Inherited Conditions:</span> –
                  Disorders like neurofibromatosis or Von Hippel-Lindau syndrome
                  are associated with spine tumor development.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">
                Secondary Tumors (Metastatic):
              </span>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold">Cancer Metastasis:</span> –
                  Tumors from other body regions, such as breast, lung, or
                  prostate cancer, can spread to the spine.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Other Factors:</span>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold">Radiation Exposure:</span> –
                  History of radiation treatment may increase the risk of spine
                  tumors.
                </li>
                <li>
                  <span className="font-semibold">Immune Suppression:</span> –
                  Conditions or medications that suppress the immune system may
                  contribute to tumor development.
                </li>
              </ul>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-primary mb-4">Diagnosis</h2>
          <p className="mb-4">
            Diagnosis of spine tumors requires a comprehensive evaluation
            involving clinical history, physical examination, and advanced
            imaging:
          </p>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">MRI</span> – Provides detailed
              images of soft tissues, including the tumor and its relationship
              to the spinal cord and nerves.
            </li>
            <li>
              <span className="font-semibold">CT scan</span> – Offers a clear
              view of bone involvement and tumor effects on the vertebrae.
            </li>
            <li>
              <span className="font-semibold">X-rays</span> – Helps identify
              bone abnormalities, fractures, or changes caused by the tumor.
            </li>
            <li>
              <span className="font-semibold">Biopsy</span> – Involves
              extracting a sample of tumor tissue to confirm its nature (benign
              or malignant) and guide treatment.
            </li>
            <li>
              <span className="font-semibold">Blood Tests</span> – May help
              detect tumor markers or assess general health.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Management of Spine Tumors
          </h2>

          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Conservative Treatment
          </h3>
          <p className="mb-4">
            For benign or small tumors with minimal symptoms, non-surgical
            management may be considered:
          </p>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Observation</span> – Regular
              imaging and monitoring for slow-growing or asymptomatic tumors.
            </li>
            <li>
              <span className="font-semibold">Pain Management</span> – Use of
              analgesics, anti-inflammatory medications, or nerve blockers to
              control pain.
            </li>
            <li>
              <span className="font-semibold">Steroids</span> – To reduce
              swelling around the tumor and alleviate nerve compression
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Surgical Treatment
          </h3>
          <p className="mb-4">
            Surgery may be required for symptomatic or malignant tumors, or when
            the tumor threatens spinal stability:
          </p>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Tumor Resection</span> – Complete
              or partial removal of the tumor to alleviate symptoms and prevent
              further damage.
            </li>
            <li>
              <span className="font-semibold">Spinal Stabilization</span> – Use
              of rods, screws, or bone grafts to reinforce spinal stability
              after tumor removal.
            </li>
            <li>
              <span className="font-semibold">Minimally Invasive Surgery</span>–
              Reduces recovery time and risk by using smaller incisions and
              specialized instruments.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Non-Surgical Interventions
          </h3>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Radiation Therapy</span> – Targets
              malignant tumors or residual tumor tissue post-surgery using
              high-energy rays.
            </li>
            <li>
              <span className="font-semibold">Chemotherapy</span> – Used for
              systemic malignancies that affect the spine, often in combination
              with other treatments.
            </li>
            <li>
              <span className="font-semibold">Stereotactic Radiosurgery</span> –
              A precise, non-invasive method to deliver high-dose radiation to
              the tumor.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Common Types of Spine Tumors
          </h3>
          <ol className="list-decimal list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Benign Tumors</span>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold">Osteoid Osteoma</span>
                </li>
                <li>
                  <span className="font-semibold">Hemangioma</span>
                </li>
                <li>
                  <span className="font-semibold">Schwannoma</span>
                </li>
                <li>
                  <span className="font-semibold">Meningioma</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Malignant Tumors</span>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold">Ewing Sarcoma</span>
                </li>
                <li>
                  <span className="font-semibold">Osteosarcoma</span>
                </li>
                <li>
                  <span className="font-semibold">Chordoma</span>
                </li>
                <li>
                  <span className="font-semibold">
                    Metastatic Tumors (e.g., from lung, breast, or prostate
                    cancers)
                  </span>
                </li>
              </ul>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Factors Affecting Surgical Decisions
          </h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Tumor Type</span> – Benign tumors
              may require less aggressive treatment compared to malignant ones.
            </li>
            <li>
              <span className="font-semibold">Tumor Location</span> – Tumors in
              certain areas, such as near the spinal cord, may need more precise
              techniques.
            </li>
            <li>
              <span className="font-semibold">Spinal Stability</span> – Unstable
              spines often require stabilization along with tumor removal.
            </li>
            <li>
              <span className="font-semibold">Patient’s Overall Health</span>–
              Chronic conditions or low immunity may affect treatment choices
              and recovery.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Postoperative Care
          </h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Rehabilitation</span> – Physical
              therapy to regain mobility, strengthen muscles, and improve
              posture.
            </li>
            <li>
              <span className="font-semibold">Pain management</span> –
              Controlled with medications and physiotherapy
            </li>
            <li>
              <span className="font-semibold">Follow-Up Imaging</span> – Regular
              MRI or CT scans to monitor for recurrence or complications.
            </li>
            <li>
              <span className="font-semibold">Lifestyle Modifications</span> –
              Focus on maintaining a healthy weight, proper posture, and
              avoiding activities that strain the spine.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Prognosis</h2>
          <p>
            The prognosis for spine tumors varies based on factors like the
            tumor's type, location, and treatment. Early detection and treatment
            can lead to better outcomes. Benign tumors often have an excellent
            prognosis, while malignant tumors may require ongoing management.
            Many patients experience improved quality of life after appropriate
            treatment, especially when adhering to postoperative care and
            rehabilitation protocols.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spinal;
