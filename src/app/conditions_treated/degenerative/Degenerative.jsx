import React from "react";
import "animate.css";
import Image from "next/image";
// import AppointmentForm from "@/app/components/homepage/AppoitmentForm";
const Degenerative = () => {
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
          <div className="w-1/2 text-white pl-16 justify-center lg:text-5xl text-4xl lg:ml-0 ml-5 font-bold my-4 absolute inset-0 z-20 flex items-center">
            Degenerative Spine Conditions
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-800 lg:p-8 p-3">
        <div className="max-w-5xl mx-auto bg-white lg:p-6 p-4 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-primary mb-6">
            Degenerative Spine Conditions
          </h1>

          <p className="mb-4">
            Degenerative spine conditions refer to a group of disorders that
            occur due to the natural wear and tear of the spinal components,
            often associated with aging. These conditions can lead to chronic
            pain, stiffness, and reduced mobility, significantly impacting a
            person's quality of life. Early diagnosis and appropriate treatment
            can help manage symptoms and prevent further deterioration.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Common Types of Degenerative Spine Conditions
          </h2>
          <ol className="list-decimal list-inside space-y-4 mb-8">
            <div>
              <li className="text-blue-500 font-semibold text-lg">
                Degenerative Disc Disease (DDD)
              </li>
              <ul className="list-disc list-inside space-y-2 mb-8 pl-4 mt-2">
                <li>
                  Occurs when the intervertebral discs lose hydration and
                  elasticity, reducing their ability to cushion the spine.
                </li>
                <li>
                  Symptoms: Chronic back or neck pain, weakness, and numbness in
                  the extremities.
                </li>
              </ul>
            </div>

            <div>
              <li className="text-blue-500 font-semibold text-lg">
                Osteoarthritis of the Spine
              </li>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                <li>
                  Caused by the breakdown of cartilage in the spinal joints,
                  leading to inflammation and pain.
                </li>
                <li>
                  Symptoms: Stiffness in the spine, pain that worsens with
                  activity, and swelling in the affected area.
                </li>
              </ul>
            </div>

            <div>
              <li className="text-blue-500 font-semibold text-lg">
                Spinal Stenosis
              </li>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                <li>
                  A narrowing of the spinal canal that puts pressure on the
                  spinal cord and nerves.
                </li>
                <li>
                  Symptoms: Pain, numbness, and weakness in the back and legs,
                  often worsening while walking or standing.
                </li>
              </ul>
            </div>

            <div>
              <li className="text-blue-500 font-semibold text-lg">
                Spondylosis
              </li>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                <li>
                  General term for age-related changes in the spine, including
                  bone spurs and degenerative changes in the intervertebral
                  discs.
                </li>
                <li>
                  Symptoms: Neck or back pain, reduced range of motion, and
                  occasional nerve compression.
                </li>
              </ul>
            </div>

            <div>
              <li className="text-blue-500 font-semibold text-lg">
                Spondylolisthesis{" "}
              </li>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                <li>
                  Occurs when one vertebra slips forward over the one below it
                  due to weakened or damaged joints.
                </li>
                <li>
                  Symptoms: Lower back pain, leg pain, and difficulty walking or
                  standing for long periods.
                </li>
              </ul>
            </div>
          </ol>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Causes and Risk Factors
          </h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold"> Aging: </span> The most common
              cause of degenerative spine conditions.
            </li>
            <li>
              <span className="font-semibold"> Genetics: </span> Family history
              of spinal conditions increases susceptibility.
            </li>

            <li>
              <span className="font-semibold">Lifestyle Factors: </span>
              Poor posture, lack of exercise, obesity, and smoking can
              accelerate spinal degeneration.
            </li>

            <li>
              <span className="font-semibold">Injury or Trauma: </span>
              Previous spinal injuries can lead to early degeneration.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Diagnosis</h2>
          <p className="mb-4">
            Diagnosing degenerative spine conditions typically involves:
          </p>

          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold"> Physical Examination: </span>
              Assessing mobility, reflexes, and areas of pain.
            </li>
            <li>
              <span className="font-semibold">Imaging Studies: </span> X-rays,
              MRI, or CT scans to visualize the spine's structure and identify
              abnormalities.
            </li>

            <li>
              <span className="font-semibold"> Electrodiagnostic Tests:</span>
              Nerve conduction studies to evaluate the impact on nerve function.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Treatment Options
          </h2>
          <ol className="list-decimal list-inside space-y-4 mb-8">
            <div>
              <li className="text-blue-500 font-semibold text-lg">
                Non-Surgical Treatments
              </li>
              <ul className="list-disc list-inside space-y-2 mb-8 pl-4 mt-2">
                <li>
                  <span className="font-semibold"> Physical Therapy: </span>
                  Strengthens muscles around the spine and improves flexibility.
                </li>
                <li>
                  <span className="font-semibold"> Medications: </span>
                  Pain relievers, anti-inflammatory drugs, and muscle relaxants
                  to manage symptoms.
                </li>

                <li>
                  <span className="font-semibold">Injections: </span>
                  Corticosteroid injections to reduce inflammation and pain.
                </li>

                <li>
                  <span className="font-semibold">
                    Lifestyle Modifications:
                  </span>
                  Weight management, ergonomic adjustments, and regular
                  exercise.
                </li>
              </ul>
            </div>

            <div>
              <li className="text-blue-500 font-semibold text-lg">
                Surgical Treatments
              </li>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                <li>
                  <span className="font-semibold"> Discectomy: </span>
                  Removal of damaged disc material to relieve nerve pressure.
                </li>

                <li>
                  <span className="font-semibold"> Spinal Fusion: </span>
                  Joining two or more vertebrae to stabilize the spine.
                </li>

                <li>
                  <span className="font-semibold"> Laminectomy: </span>
                  Removing part of the vertebra to create more space for the
                  spinal cord and nerves.
                </li>
              </ul>
            </div>
          </ol>

          <h2 className="text-2xl font-bold text-primary mb-4">Prevention</h2>

          <ul className="list-disc list-inside space-y-4 mb-8">
            <li> Maintain a healthy weight to reduce stress on the spine.</li>
            <li> Exercise regularly to strengthen back and core muscles.</li>

            <li>Practice good posture while sitting, standing, and lifting.</li>
            <li> Avoid smoking, which can impair spinal health.</li>
            <li> Use ergonomic furniture to support spinal alignment.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Overall Summary
          </h2>
          <p>
            Degenerative spine conditions are common but manageable with the
            right approach. Understanding the symptoms and seeking timely
            medical attention are key to preserving spinal health and
            maintaining an active lifestyle. If you or a loved one is
            experiencing persistent back or neck pain, consult a specialist to
            explore the most effective treatment options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Degenerative;
