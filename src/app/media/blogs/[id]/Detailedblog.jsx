"use client";
import { useEffect, useState } from "react";
import { getBlog } from "@/services/getBlog";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import Sidebar from "../Sidebar";

const DetailedBlog = ({ id }) => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const obj = blogs.find((item) => item.id == id);

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
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="lg:grid grid-cols-12 gap-10 justify-between">
        <div className="col-start-1 col-span-9">
          <h1 className="text-4xl font-bold text-center mb-[60px]">
            {obj?.heading}
          </h1>

          <div className="flex justify-center mb-8">
            <Image
              src={`/Blog/${obj?.img}`}
              alt={obj?.heading}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              width={1000}
              height={500}
            />
          </div>

          <p className="text-gray-500 text-sm mb-4 flex gap-2 items-center">
            {" "}
            <SlCalender />
            {obj?.date}
          </p>

          <div className="prose prose-lg mx-auto">
            <p
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: obj?.content }}
            ></p>
          </div>
        </div>
        <div className="col-span-3 mb-6">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default DetailedBlog;
