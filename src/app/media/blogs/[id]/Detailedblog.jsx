"use client";
import { useEffect, useState } from "react";
import React from "react";
import { getBlog } from "@/services/getBlog";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";


const DetailedBlog = ({ id }) => {
  const [blogs, setBlogs] = useState([]);
  const obj = blogs.find((item) => item.id == id);

  useEffect(() => {
    async function fetchBlogs() {
      const result = await getBlog();
      if (result.success) {
        setBlogs(result.results);
      } else {
        console.log(result.message);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="mt-[200px] px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">{obj?.heading}</h1>

      <div className="flex justify-center mb-8">
        <Image
          src={`/Blog/${obj?.img}`}
          alt={obj?.heading}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          width={1000}
          height={1000}
        />
      </div>

      <p className="text-gray-500 text-sm mb-4 flex gap-2 items-center"> <SlCalender />
      {obj?.date}</p>

      <div className="prose prose-lg mx-auto">
        <p
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: obj?.content }}
        ></p>
      </div>
    </div>
  );
};

export default DetailedBlog;
