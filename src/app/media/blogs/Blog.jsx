"use client";
import { useEffect, useState } from "react";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { getBlog } from "@/services/getBlog";
import Link from "next/link";
import Image from "next/image";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlog();
        setBlogs(response.results);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
    
  }, []);

  return (
    <div className="mt-[100px] px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Blogs</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((n) => (
          <li
            key={n.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={`/Blog/${n.img}`}
              alt={n.heading}
              className="w-full h-64 object-cover"
              height={100}
              width={1000}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{n.heading}</h2>
              <div className="flex gap-3">
                <SlCalender />
                <p className="text-gray-800 text-sm mb-4">{n.date}</p>
              </div>
              <p
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: n.shortcontent }}
              ></p>

              <Link href={`/media/blogs/${n.id}`} className="flex mb-3 py-4">
                <div className="bg-[#07a496] p-3 text-white rounded-xl">
                  Read More
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Blog;
