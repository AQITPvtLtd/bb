import React from "react";
import Image from "next/image";
const Spine = () => {
  return (
    <div className="mx-auto">
      <div className="space-y-12">
        {/* Title Section */}
        <div className="relative">
          <Image
            src="/Spine/spineImg.avif"
            width={1000}
            height={750}
            className="w-full h-[250px] object-cover"
            alt="Contact Image"
          />
          <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
          <h1 className="text-white font-serif text-center text-4xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
            Spine Deformity Correction
          </h1>
        </div>

        <div className="px-10">
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            The primary goal of deformity surgery is to achieve a balanced
            spinal alignment through rigid fusion, prevent further deformity and
            alleviate neurological symptoms.
          </p>
          {/* Content Section */}
          <div className="space-y-4">
            {/* Spinal Deformities */}
            <div className="bg-white rounded-md">
              <p className="font-semibold text-xl text-gray-800 mb-2">
                Q. What are spinal deformities?
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Ans:</span> All spinal
                deformities involve deviation of the curve or rotation of the
                spine.
              </p>
            </div>

            <div className="lg:flex">
              <div>
                <div className="bg-white rounded-md space-y-1">
                  <p className="font-semibold text-xl text-gray-800 mb-1">
                    Type of Spinal Deformities
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">Kyphosis:</span> Involves
                    upper back curving back and forming a hump.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">Lordosis:</span> Involves
                    lower back curving inward.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">Scoliosis:</span> Frontal
                    deformity in which the spine deviates right or left when
                    observed from the front or back.
                  </p>
                </div>

                {/* Risk Factors */}
                <div className="bg-white rounded-md pt-5">
                  <h2 className="text-[#273c76] font-semibold text-xl">
                    What are the risk factors for spinal deformities?
                  </h2>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                    <li>
                      Many cases of scoliosis have no identifiable cause.
                      (Adolescent Idiopathic Scoliosis)
                    </li>
                    <li>
                      There are a few known genetic/Congenital conditions that
                      may put someone at risk of developing scoliosis, including
                      cerebral palsy, muscular dystrophy, and achondroplasia,
                      which is a condition affecting cartilage.
                    </li>
                    <li>
                      For Kyphosis, risk factors include poor posture, fractures
                      from osteoporosis, post-infection, or post-injury.
                    </li>
                    <li>
                      Osteoporosis is also a risk factor for Lordosis. Slipped
                      vertebrae and obesity may also cause the condition.
                    </li>
                    <li>
                      Ankylosing Spondylitis where spine fuse like bamboo spine
                    </li>
                  </ul>
                </div>
              </div>
              <Image
                src="/Spine/spinal-deformities.jpg"
                height={250}
                width={550}
              />
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-md">
              <h2 className="text-[#273c76] font-semibold text-xl">
                What are the symptoms of spinal deformity?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Symptoms differ, depending on the type of deformity. They may
                take the form of:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li>
                  <span className="font-semibold">Pain:</span> For scoliosis,
                  this pain may occur in the upper spine and the ribs.
                </li>
                <li>
                  <span className="font-semibold">
                    Feeling of being off balance or difficulty walking or
                    standing:
                  </span>{" "}
                  When the spine isn’t in correct alignment, the body and head
                  aren’t either.
                </li>
                <li>
                  <span className="font-semibold">
                    Visible curve (hunched over):
                  </span>{" "}
                  In kyphosis, in particular, the outer curve in the upper back
                  may be noticeable. In scoliosis, one shoulder blade, or hip,
                  may appear higher than the other.
                </li>
                <li>
                  <span className="font-semibold">No symptoms:</span> For some
                  patients with mild deformities, the curves may not cause any
                  symptoms.
                </li>
              </ul>
            </div>

            {/* Diagnosis */}
            <div className="bg-white rounded-md">
              <h2 className="text-[#273c76] font-semibold text-xl">
                How are spinal deformities diagnosed?
              </h2>
              <div className="space-y-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To diagnose a spinal deformity, a specialist will perform:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700">
                  <li>A physical examination</li>
                  <li>
                    X-rays of the spine- which will be x rays whole spine
                    include both shoulder and and proximal thighs
                  </li>
                  <li>
                    Magnetic resonance imaging (MRI) – usually to rule out any
                    underlying spinal cord pathology and if any then has to
                    address before deformity correction
                  </li>
                  <li>
                    Computerized tomography (CT) scans, in order to analyze the
                    internal bony structure of the spine and for surgical
                    planning
                  </li>
                </ul>
              </div>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-md">
              <h2 className="text-[#273c76] font-semibold text-xl">
                What are treatments for spinal deformities?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To treat spinal deformities, aim:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                <li>Relieve pain</li>
                <li>Lighten the strains on the spine</li>
                <li>
                  prevent deterioration of spinal structures such as disks and
                  vertebrae{" "}
                </li>
                <li>ease breathing if the lungs are affected</li>
                <li>reduce the appearance of the deformity.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Intervention may not be needed if the deformity is not
                progressing and the symptoms aren’t a problem for the patient.
                In these cases, specialists will monitor the curve and treat
                when necessary. There are also several methods of physical
                therapies to treat spinal deformities by helping to reorient the
                spine and slow down the advancement of the curve
              </p>
            </div>

            {/* Spinal Surgery */}
            <div className="bg-white rounded-md">
              <h2 className="text-[#273c76] font-semibold text-xl">
                When is spinal surgery necessary?
              </h2>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                <li>When curve is symptomatically compressing your organs</li>
                <li>if the curve continues to progress</li>
                <li>
                  if the pain become severe and is unresponsive to medical and
                  conservative care.
                </li>
                <li>Severe back pain with neurogenic radicular pain</li>
                <li>Neurological deterioration</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Spinal surgery involves mobilizing and straightening the spine,
                and then placement of instrumentation with a spinal fusion in
                order to hold the spine in the new position and prevent further
                progression of the curve.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Spine surgeon use a combination of screws and rods and bones
                (taken from another part of the body) to encourage growth of new
                bones in better positions.Patients can expect to recover from
                this surgery within 3 months.
              </p>
            </div>

            {/* Treatment Differences */}
            <div className="bg-white rounded-md">
              <h2 className="text-[#273c76] font-semibold text-xl">
                Are spinal deformities treated differently in children, adults,
                and the elderly?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Children and adults are treated differently. When treating
                children with spinal deformities, nonsurgical treatments are
                often chosen since children's bones are still developing. A
                brace, for example, can direct a child’s growing spine into the
                right alignment. In adults, the same treatment would be less
                effective because the spine is already rigid in its position.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                In older adults, if osteoporosis is the underlying cause of the
                deformity, we may treat it with calcium, hormone replacement
                therapy, or weight-bearing exercises. Bracing is another
                nonsurgical option for adults. It will not change the position
                of the spine, but it may ease pressure and pain. Orthotics (shoe
                inserts) can also help reduce back pain if the legs have been
                affected by the spine’s changing shape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spine;
