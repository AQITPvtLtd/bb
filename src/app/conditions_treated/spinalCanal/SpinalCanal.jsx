import React from "react";
import Image from "next/image";
// import AppointmentForm from "@/app/components/homepage/AppoitmentForm";

const SpinalCanal = () => {
  return (
    <div className="container mx-auto px-10 py-16 mt-[180px]">
      {/* Title Section */}
      <h1 className="text-center text-4xl font-semibold bg-[#07a496] p-8 text-white rounded-md shadow-lg mb-12">
        Spinal Canal Stenosis Decompression
      </h1>

      {/* Content Section */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Spinal canal stenosis
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            - Spinal canal stenosis is condition of spine where spinal canal
            become narrow. This put pressure over the spinal cord and nerves
            passing through it.
          </p>
        </div>

        <div className="lg:flex gap-9">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Usual presentation(complaints)
            </h2>

            <p className="text-lg text-gray-700 mt-4">
              It depend upon which part of spine is affected and how severe is
              stenosis.
            </p>

            <p className="text-lg text-gray-700 mt-4">
              Lumbar region( Lower back):In the lumber region, patients face the
              following complications:
            </p>

            <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
              <li>Back pain/radicular pain in lower limbs or combination</li>
              <li>
                Tingling/ Parasthesia /Burning sensation /cramps or combination
                in legs and feet
              </li>
              <li>
                Difficulty in walking- usually complain that stooping forward
                while walking and has to sit in between to take rest.
              </li>
              <li>Numbness in legs</li>

              <li>Weakness in limbs</li>
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              Cervical spine: In the cervical spine, patients face the
              above-mentioned complaints along with the following complaints:
            </p>

            <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
              <li>Clumsiness of hand</li>
              <li>
                Difficulty in performing fine movement eg- buttoning
                shirts/witting issues
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Diagnosis</h1>
          <p className="text-lg text-gray-700 mt-4">
            The diagnosis depends on complaints and a physical examination.
            Following are some examples:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
            <li>X rays</li>
            <li>MRI scan</li>
            <li>CT Myelogram</li>
            <li>CT scan</li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Treatment Options
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Treatment depend upon cause, location and severity. There are many
            treatment options available for spinal canal stenosis.
          </p>

          <p>
            {" "}
            <span className="font-semibold">
              {" "}
              1. Conservative treatment-{" "}
            </span>{" "}
            Medication and physical therapy
          </p>
          <p>
            {" "}
            <span className="font-semibold"> 2. Surgery </span>
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
            <li>Decompression surgery- laminectomy/Laminoplaty</li>
            <li>
              Decompression with instrumented fixation with or with out fusion
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Approach</h1>
          <p className="text-lg text-gray-700 mt-4">
            {" "}
            <span className="font-semibold">
              {" "}
              Tradition Mid line approach{" "}
            </span>{" "}
            In the modern era, this spine surgery has many advancements.
            Minimally Invasive Approach is one of the modern approaches in spine
            surgery.
          </p>
          <p className="font-semibold">Minimally invasive approach</p>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
            <li>Tubular assisted Microscopic surgery</li>
            <li>
              Endoscopic assisted ( Uni portal interlaminar approach/ UBE
              approach)
            </li>
          </ul>
        </div>

        <h1 className="text-[#273c76] font-bold text-3xl mt-10">
          Pre Operative
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/SpinalCanal/one.jpeg"
            height={350}
            width={350}
            alt="Preop Image 1"
          />
          <Image
            src="/SpinalCanal/two.jpeg"
            height={350}
            width={350}
            alt="Preop Image 2"
          />
        </div>

        {/* <div>
          <h1 className="text-[#273c76] font-bold text-3xl">
            
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Image
              src=""
              alt="Spinal Canal Image 1"
              className="rounded-lg shadow-md"
              height={200}
              width={200}
            />

            <Image
              src=""
              alt="Spinal Canal Image 2"
              className="rounded-lg shadow-md"
              height={200}
              width={200}
            />
          </div>
        </div> */}

        <h1 className="text-[#273c76] font-bold text-3xl mt-10">
        Post Operative
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/SpinalCanal/three.jpeg"
            height={350}
            width={350}
            alt="Preop Image 1"
          />
          <Image
            src="/SpinalCanal/four.jpeg"
            height={350}
            width={350}
            alt="Preop Image 2"
          />
        </div>

        {/* <div>
          <h1 className="text-[#273c76] font-bold text-3xl">Post Operative</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Image
              src="/SpinalCanal/three.jpeg"
              alt="Spinal Canal Image 3"
              className="rounded-lg shadow-md"
              height={200}
              width={200}
            />
            <Image
              src="/SpinalCanal/four.jpeg"
              alt="Spinal Canal Image 4"
              className="rounded-lg shadow-md"
              height={200}
              width={200}
            />
          </div>
        </div> */}
      </div>

      {/* Appointment Form */}
      {/* <div className="mt-16">
        <AppointmentForm />
      </div> */}
    </div>
  );
};

export default SpinalCanal;
