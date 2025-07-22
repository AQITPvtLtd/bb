import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Deformity = () => {
  return (
    <div>
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
              Deformity Correction
            </div>
          </div>
        </div>

        <div className="bg-gray-100 text-gray-800 lg:p-8 p-3">
          <div className="max-w-5xl mx-auto bg-white lg:p-6 p-4 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-primary mb-6">
              Deformity Correction: A Case of Congenital Scoliosis with Hemivertebra at L4
            </h1>

            <p className="mb-4">
              Scoliosis, an abnormal curvature of the spine, can significantly impact a person’s posture, balance, and quality of life, especially when present from birth. One such condition, congenital scoliosis, arises due to malformations in the spine during fetal development. A hemivertebra is a common cause of this, where a part of the vertebra fails to develop completely, leading to an asymmetric spinal curve that worsens over time.
            </p>

            <p>
              This is the story of a 17-year-old girl who battled congenital scoliosis caused by a hemivertebra at the L4 level, and how timely surgical intervention helped transform her life.
            </p>

            <div className='mt-10 text-center'>
              <h2 className="text-2xl font-bold text-primary">
                Patient Presentation
              </h2>

              <p className="mb-4">
                The young girl came to our clinic with complaints of:
              </p>
            </div>


            <div className="px-4 py-4">
              <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-6 items-center">
                <div className="col-span-6">
                  <Image
                    src="/Deformity/img5.jpeg"
                    width={500}
                    height={500}
                    alt="Dr. Bhupendra Pratap Bharti"
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>

                <div className="col-span-6">
                  <Image
                    src="/Deformity/img1.jpeg"
                    width={500}
                    height={500}
                    alt="Dr. Bhupendra Pratap Bharti"
                    className="rounded-lg h-96 object-contain w-full"
                  />
                </div>
              </div>
            </div>


            <div className="md:grid md:grid-cols-12 gap-6 items-center px-4 py-8 flex flex-col-reverse">
              <div className='col-span-4'>
                <Image
                  src="/Deformity/img2.jpeg"
                  width={500}
                  height={500}
                  alt="Dr. Bhupendra Pratap Bharti"
                  className="rounded-lg shadow-md w-full h-96 object-contain"
                />
              </div>
              <div className='col-span-8'>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Understanding Hemivertebra and Its Impact
                </h2>
                <p className="mb-4 text-justify">
                  A hemivertebra is a wedge-shaped vertebra that disrupts the normal alignment of the spine, often resulting in progressive scoliosis. When left untreated, especially in growing children and adolescents, the curvature tends to worsen with age, leading to severe spinal imbalance, chronic pain, restricted lung function, and psychosocial challenges.
                </p>
                <p className="text-justify">
                  In this patient’s case, the hemivertebra at L4 created a significant lumbosacral curve that affected the natural biomechanics of the spine, causing pain, a tilted posture, and aesthetic concerns.
                </p>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 gap-6 items-center px-4 py-8">

              <div className='col-span-8'>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Surgical Plan: Hemivertebra Resection with Short-Segment Fixation
                </h2>

                <p className="mb-4">
                  After thorough evaluation and counseling, <span className='font-semibold'> Dr. Bhupendra Pratap Bharti </span>, a leading spine deformity correction specialist, recommended surgical correction to prevent further progression of the curve and relieve her symptoms.
                </p>

                <p className="mb-4">
                  The chosen surgical approach was:
                </p>

                <ul className="list-disc list-inside space-y-4 mb-8">
                  <li>
                    <span className="font-semibold"> Hemivertebra Resection: </span> The malformed L4 hemivertebra was completely removed to eliminate the source of the deformity.
                  </li>
                  <li>
                    <span className="font-semibold"> Short-Segment Spinal Fixation:  </span> This technique was used to stabilize the adjacent vertebrae and correct the curve without sacrificing too many motion segments. Titanium screws and rods were used for precise alignment and long-term support.
                  </li>
                </ul>
                <p className="mb-4">
                  This approach was chosen for its effectiveness in correcting deformity while preserving spinal mobility, especially important in a young and active patient.
                </p>
              </div>

              <div className='col-span-4'>
                <Image
                  src="/Deformity/img3.jpeg"
                  width={500}
                  height={500}
                  alt="Dr. Bhupendra Pratap Bharti"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>

            <div className="md:grid grid-cols-12 gap-6 items-center px-4 py-8 flex flex-col-reverse">
              <div className='col-span-4'>
                <Image
                  src="/Deformity/img4.jpeg"
                  width={500}
                  height={500}
                  alt="Dr. Bhupendra Pratap Bharti"
                  className="rounded-lg shadow-md w-full h-96"
                />
              </div>
              <div className='col-span-8'>
                <h2 className="text-2xl font-bold text-primary mb-4">Surgical Outcome</h2>
                <p className="mb-4">
                  The surgery was performed with high precision under intraoperative neuromonitoring to ensure spinal cord safety. Post-operatively, the patient:
                </p>

                <ul className="list-disc list-inside space-y-4 mb-8">
                  <li>
                    Showed immediate improvement in posture, with visible correction of the spinal curvature.
                  </li>
                  <li>
                    Experienced significant relief from back pain within the first few weeks.
                  </li>

                  <li>
                    Gained a balanced shoulder level and improved spinal alignment, leading to better aesthetics and confidence.
                  </li>
                </ul>
                <p className="mb-4">
                  Post-surgical rehabilitation included physiotherapy and core-strengthening exercises to enhance flexibility and prevent recurrence. Regular follow-ups ensured her spine healed well, and her quality of life improved substantially.
                </p>
              </div>
            </div>

            <div className="gap-6 items-center px-4 py-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Why Early Intervention Matters
                </h2>
                <p className="mb-4">
                  Congenital scoliosis, especially with a hemivertebra, demands early detection and appropriate treatment. Surgery at the right time can:
                </p>
                <ol className="list-decimal list-inside space-y-4 mb-8">
                  <li>
                    <span className="font-semibold"> Prevent curve progression </span>
                  </li>
                  <li>
                    <span className="font-semibold"> Reduce long-term complications </span>
                  </li>
                  <li>
                    <span className="font-semibold">Improve posture and body image </span>
                  </li>
                  <li>
                    <span className="font-semibold">
                      Enhance overall quality of life
                    </span>
                  </li>
                </ol>
                <p className="mb-4">
                  Delaying surgery in such cases can lead to rigid deformities, nerve compression, and increased difficulty in surgical correction later.
                </p>
              </div>
            </div>


            <h2 className="text-2xl font-bold text-primary mb-4">
              Expert Care Matters
            </h2>
            <p>
              <span className='font-semibold'>  Dr. Bhupendra Pratap Bharti </span>, <span className='font-semibold'> <Link href="/contactus"> Best Spine Surgeon in Delhi </Link> </span>, is renowned for his expertise in managing complex spinal deformities with minimally invasive and precise surgical techniques. His patient-centric approach ensures every child or adolescent receives care tailored to their physical and emotional needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deformity