import React from "react";
import Image from "next/image";
import "animate.css";
// import AppointmentForm from "@/app/components/homepage/AppoitmentForm";
const Minimally = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-[80px]">
      <div className="space-y-8 px-6">
        <h1 className="text-center text-4xl font-semibold animate__animated animate__fadeInUp bg-[#07a496] p-10 text-white">
          Minimally Invasive Spine Surgery
        </h1>

        <p className="text-lg leading-relaxed text-gray-700">
          Minimally Invasive Spine Surgery, also known as MISS, implies a
          minimal surgical invasion.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          MISS techniques target surgery and utilize more modern technology,
          advanced imaging techniques, and special medical equipment to reduce
          tissue trauma, bleeding, radiation exposure, infection risk, and
          decreased hospital stays by minimizing the size of the incision and
          early rehabilitation.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          It also makes possible surgery previously considered too high risk for
          traditional surgery due to medical history or complexity of the
          condition.
        </p>

        <p className="font-semibold text-2xl text-gray-900">
          Procedures done with a microscope require skin openings of
          approximately one inch or more:
        </p>
        <div className="lg:flex lg:gap-72">
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Discectomy, Laminectomy, and spinal canal decompression</li>
            <li>Interbody fusion surgery for degenerative and slipped disc</li>
            <li>Fracture fixation/stabilization</li>
            <li>Infection in spine</li>
            <li>Anterior cervical discectomy and fusion</li>
            <li>
              Artificial disc replacement or total disc replacement (cervical
              /Lumbar)
            </li>
            <li>Oblique and Anterior lumbar interbody fusion</li>
            <li>Percutaneous vertebroplasty, a.k.a. Kyphoplasty</li>
            <li>Decompression and fixation of spine tumor</li>
            <li>Endoscopic Discectomy and interbody fusion surgery</li>
          </ul>

          <Image src="/Minimally/MISS6.jpg" height={350} width={350} />
        </div>
        <p className="text-lg text-gray-700">
          Exclusion – high grade deformity and complex tumor.
        </p>

        <p className="font-semibold text-2xl text-gray-900">
          FAQ about Minimally Invasive Spine Surgery (MISS)
        </p>

        <div className="space-y-6">
          <div>
            <p className="font-semibold text-xl text-gray-800">
              Q. Is Minimally Invasive Spine Surgery Safe?
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Ans:</span> In the era of modern
              spinal surgery where technique and technology have advanced to the
              accuracy of &lt; 1 mm precision, spine surgery has become very
              safe. Neuromicroscopes, Multimodal neuromonitoring, navigation,
              ultrasonic bone cutter, special drill burr, and robotics make it
              safe.
            </p>
          </div>

          <div>
            <p className="font-semibold text-xl text-gray-800">
              Q. How long will I be in the hospital?
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Ans:</span> It depends on the
              surgery. After discectomy/decompression, the patient can go home
              the same day. For various stabilization and fusion surgeries, the
              hospital stay will be 2-3 days compared to 5-6 days after
              traditional open surgery.
            </p>
          </div>

          <div>
            <p className="font-semibold text-xl text-gray-800">
              Q. What is the recovery time, and when can I return to work?
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Ans:</span> This is individualized
              to the specific needs of the patient, type of surgery, patient
              occupation, and need for work.
            </p>
          </div>

          <div>
            <p className="font-semibold text-xl text-gray-800">
              Q. Does Minimally Invasive Spine Surgery need physical therapy?
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Ans:</span> Minimally Invasive
              Spine Surgery will need physical therapy, but rehabilitation will
              be early, so recovery time will be reduced and one can resume work
              earlier.
            </p>
          </div>
        </div>

        <h1 className="text-[#273c76] font-bold text-3xl mt-10">
          Minimally Invasive Spinal Fusion Case Study
        </h1>

        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">History:</span> 42-year-old lady
            presented with low back pain with radicular pain in both lower
            limbs, which used to increase after standing and walking.
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Investigations:</span> MRI L.S.
            spine and dynamic x-rays L.S. spine were done - Anterolisthesis L4-5
            grade II Lytic type.
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Procedure Done:</span> MIS TLIF
            (Transforaminal lumbar interbody fusion) was done.
          </p>
        </div>

        <h1 className="text-[#273c76] font-bold text-3xl mt-10">Preop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/Minimally/MISS2.jpg"
            height={350}
            width={350}
            alt="Preop Image 1"
          />
          <Image
            src="/Minimally/MISS3.jpg"
            height={350}
            width={350}
            alt="Preop Image 2"
          />
        </div>

        <h1 className="text-[#273c76] font-bold text-3xl mt-10">Postop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/Minimally/MIS4.jpg"
            height={350}
            width={350}
            alt="Postop Image 1"
          />
          <Image
            src="/Minimally/MISS5.jpg"
            height={350}
            width={350}
            alt="Postop Image 2"
          />
        </div>
      </div>

      {/* <AppointmentForm /> */}
    </div>
  );
};

export default Minimally;
