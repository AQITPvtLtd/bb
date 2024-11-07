"use client";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { getBlog } from "@/services/getBlog";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlog();
        if (response?.results) {
          setBlogs(response.results.reverse());
        } else {
          throw new Error(response?.message || "Invalid response structure");
        }
      } catch (error) {
        setError(error.message || "Error fetching blogs");
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="">
      <div className="relative">
        <Image
          src="/Blog/background.png"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Blogs
        </h1>
      </div>

      {error ? (
        <p className="text-red-500 text-center mt-6">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4 sm:px-6 lg:px-8">
          {blogs.map((n) => (
            <li
              key={n.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={`/Blog/${n.img}`}
                alt={n.heading}
                className="w-full h-auto"
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
                  className="text-gray-700 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: n.shortcontent }}
                ></p>
                <Link href={`/media/blogs/${n.url}`} className="flex mb-3 py-4">
                  <div className="bg-[#07a496] p-3 text-white rounded-xl">
                    Read More
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;
