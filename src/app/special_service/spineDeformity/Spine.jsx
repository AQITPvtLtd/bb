import React from "react";
import Image from "next/image";
const Spine = () => {
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
          <div className="w-1/2 text-white justify-center lg:text-5xl text-4xl ml-5 font-bold my-4 absolute inset-0 z-20 flex items-center">
            Spine Deformity Correction
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 lg:p-8 p-3">
        <div className="max-w-5xl mx-auto bg-white lg:p-6 p-4 rounded-lg shadow-lg">
          <div className="lg:px-7">
            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              The primary goal of deformity surgery is to achieve balanced
              spinal alignment through stable fusion, preventing further
              deformity and relieving neurological symptoms.
            </p>

            <div className="space-y-4">
              {/* Spinal Deformities */}
              <div className="bg-white rounded-md p-4">
                <p className="font-semibold text-xl text-gray-800 mb-2">
                  Q. What are spinal deformities?
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Ans:</span> Spinal deformities
                  are deviations or rotations in the spine’s natural curve.
                </p>
              </div>

              <div className="">
                <div className="space-y-4">
                  <div className="bg-white rounded-md p-4">
                    <p className="font-semibold text-xl text-gray-800 mb-2">
                      Types of Spinal Deformities
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>Kyphosis:</strong> A hump-like curvature in the
                      upper back.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>Lordosis:</strong> An inward curvature of the
                      lower back.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>Scoliosis:</strong> A sideways deviation, where
                      the spine curves left or right when viewed from the front
                      or back.
                    </p>
                  </div>
                  <Image
                    src="/Spine/spinal-deformities.jpg"
                    height={10000}
                    width={10000}
                    className=""
                  />
                  {/* Risk Factors */}
                  <div className="bg-white rounded-md p-4">
                    <h2 className="text-[#273c76] font-semibold text-xl mb-2">
                      What are the risk factors for spinal deformities?
                    </h2>
                    <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                      <li>
                        Idiopathic scoliosis, often occurring without a known
                        cause.
                      </li>
                      <li>
                        Genetic and congenital conditions, e.g., cerebral palsy,
                        muscular dystrophy, achondroplasia.
                      </li>
                      <li>
                        Kyphosis risk factors: poor posture, osteoporosis,
                        infections, injuries.
                      </li>
                      <li>
                        Lordosis risk factors: osteoporosis, vertebral slippage,
                        obesity.
                      </li>
                      <li>
                        Ankylosing spondylitis causing a bamboo spine
                        appearance.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Symptoms */}
              <div className="bg-white rounded-md p-4">
                <h2 className="text-[#273c76] font-semibold text-xl mb-2">
                  What are the symptoms of spinal deformity?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">
                  Symptoms vary by deformity type and can include:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                  <li>
                    <strong>Pain:</strong> Often felt in the upper spine or ribs
                    for scoliosis.
                  </li>
                  <li>
                    <strong>Imbalance or difficulty standing:</strong>{" "}
                    Misalignment can lead to posture issues.
                  </li>
                  <li>
                    <strong>Visible curvature:</strong> Noticeable hump in
                    kyphosis or uneven shoulders in scoliosis.
                  </li>
                  <li>
                    <strong>No symptoms:</strong> Some mild deformities are
                    asymptomatic.
                  </li>
                </ul>
              </div>

              {/* Diagnosis */}
              <div className="bg-white rounded-md p-4">
                <h2 className="text-[#273c76] font-semibold text-xl mb-2">
                  How are spinal deformities diagnosed?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">
                  Diagnosis involves a specialist's evaluation through:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                  <li>Physical examination</li>
                  <li>
                    Full-spine X-rays including shoulders and proximal thighs
                  </li>
                  <li>MRI to rule out spinal cord issues</li>
                  <li>
                    CT scans for detailed bone structure analysis, aiding
                    surgical planning
                  </li>
                </ul>
              </div>

              {/* Treatment */}
              <div className="bg-white rounded-md p-4">
                <h2 className="text-[#273c76] font-semibold text-xl mb-2">
                  What are treatments for spinal deformities?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">
                  Treatment goals include:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                  <li>Pain relief</li>
                  <li>Minimizing spinal strain</li>
                  <li>Preserving spine structures like disks and vertebrae</li>
                  <li>Facilitating breathing if lungs are impacted</li>
                  <li>Improving deformity appearance</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  If the deformity is stable and symptoms are minimal, regular
                  monitoring may suffice. Physical therapies can also help
                  correct spine orientation and slow curve progression.
                </p>
              </div>

              {/* Spinal Surgery */}
              <div className="bg-white rounded-md p-4">
                <h2 className="text-[#273c76] font-semibold text-xl mb-2">
                  When is spinal surgery necessary?
                </h2>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                  <li>Compression of organs by the spinal curve</li>
                  <li>Progressive curvature</li>
                  <li>Severe, unresponsive pain</li>
                  <li>Radicular pain or neurological decline</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Surgery involves realigning the spine with instrumentation and
                  spinal fusion, holding it in the corrected position to prevent
                  further curvature.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Surgeons use rods, screws, and bone grafts to encourage stable
                  bone growth. Recovery generally takes about 3 months.
                </p>
              </div>

              {/* Treatment Differences */}
              <div className="bg-white rounded-md p-4">
                <h2 className="text-[#273c76] font-semibold text-xl mb-2">
                  Are spinal deformities treated differently in children,
                  adults, and the elderly?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Treatment differs by age: Children’s bones are still growing,
                  so nonsurgical treatments like braces can help guide spinal
                  growth. For adults, braces may ease pain without changing
                  spine alignment.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For older adults with osteoporosis, treatment may include
                  calcium, hormone therapy, and exercises to enhance bone
                  density. Braces and orthotics help reduce discomfort without
                  altering the spine’s position.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spine;
