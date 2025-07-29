"use client";
import { useEffect, useState } from "react";
import { getBlog } from "@/services/getBlog";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import Sidebar from "../Sidebar";
import { FaUser } from "react-icons/fa";
import Moment from "react-moment";
import Head from "next/head";

const DetailedBlog = ({ id }) => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const obj = blogs.find((item) => item.url === id);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const result = await getBlog();
        if (result.success) {
          setBlogs(result.results);
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError("Failed to fetch blogs");
      }
    }
    fetchBlogs();
  }, [id]);

  if (!obj && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center mt-6">{error}</p>;
  }

  return (
    <div>
      {obj && (
        <Head>
          <title>{obj.meta_title || obj.heading}</title>
          <meta name="description" content={obj.meta_desc || obj.heading} />
          <meta name="keywords" content={obj.meta_keyword || "cancer, blog"} />
        </Head>
      )}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="lg:grid grid-cols-12 gap-10 justify-between">
          <div className="col-start-1 col-span-9">

            <div className="flex justify-center mt-8">
              <Image
                src={`/Blog/${obj?.img}`}
                alt={obj?.heading}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                width={1000}
                height={500}
              />
            </div>
            <div className="flex my-3  text-lg text-gray-500 justify-evenly">
              <div className="flex justify-evenly w-full">
                <p className="mb-4 flex gap-2 items-center">
                  <SlCalender />
                  <Moment format="MMMM DD, YYYY">{obj?.date}</Moment>
                </p>
                <div className="flex gap-2">
                  <FaUser className="mt-1" />
                  Dr Bhupendra Bharti
                </div>
              </div>
            </div>

            <div className="prose prose-lg lg:mx-16 bg-gray-100 p-3 lg:p-10 rounded-lg">
              <p
                className="text-gray-700 lg:text-justify"
                dangerouslySetInnerHTML={{ __html: obj?.content }}
              ></p>
            </div>
          </div>
          <div className="col-span-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedBlog;
