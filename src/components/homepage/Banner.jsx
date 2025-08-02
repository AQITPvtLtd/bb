"use client";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import Form from "@/app/contact-us/Form";
function Banner() {
  const data = [
    {
      name: `We Can Help You Get Better Regain Your Health`,
      img: "/Banner/family.jpg",
      url: "/know-your-doctor",
    },
  ];

  return (
    <div>
      <div className="overflow-x-hidden relative">
        {data.map((d) => (
          <div key={d.name} className="relative w-full">
            <Image
              width={1920}
              height={800}
              src={d.img}
              alt="banner-image"
              className="w-full h-[80vh] md:h-[95vh] object-cover"
            />
            <div className="grid md:grid-cols-12 lg:gap-20 absolute top-5 left-4 md:left-5 w-[90%] md:w-auto items-center">
              <div className="col-start-1 col-span-6 gap-6 w-full max-w-6xl bg-black bg-opacity-40 lg:h-[44%] sm:h-[60%] mt-32 lg:mt-0 p-6 md:p-10 text-white rounded-lg">
                {/* Left Content */}
                <div className="flex flex-col items-start">
                  <h1
                    className="text-2xl md:text-xl lg:text-5xl font-bold mb-2 animate__animated animate__fadeInDown"
                    dangerouslySetInnerHTML={{ __html: d.name }}
                    style={{ fontFamily: "Roboto Slab, serif" }}
                  ></h1>
                  <div className="flex space-x-2 md:space-x-4 animate__animated animate__fadeInUp mt-5">
                    <Link href={d.url}>
                      <button className="px-4 py-2 text-xl bg-[#07a496] text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Learn More
                      </button>
                    </Link>
                    <Link href="/contact-us">
                      <button className="px-4 py-2 text-xl bg-[#07a496] text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-start-7 col-span-5 md:block hidden">
                <Form />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden flex pb-5 px-5 mt-4">
        <Form />
      </div>
    </div>
  );
}

export default Banner;