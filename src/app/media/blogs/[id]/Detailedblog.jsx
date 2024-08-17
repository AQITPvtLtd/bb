"use client";
import { useEffect, useState } from "react";
import React from "react";
import { getBlog } from "@/services/getBlog";
import Image from "next/image";

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

      <Image
        src={`/Blog/${obj?.img}`}
        alt={obj?.heading}
        className="w-full h-48 object-cover"
        width={1000}
        height={100}
      />

      <p className="text-gray-500 text-sm mb-4">{obj?.date}</p>

      <p
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: obj?.content }}
      ></p>
    </div>
  );
};

export default DetailedBlog;
