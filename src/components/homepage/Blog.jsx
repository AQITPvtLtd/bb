"use client";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { getBlog } from "@/services/getBlog";
import Link from "next/link";
import Image from "next/image";
import Moment from "react-moment";
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
    <div>
      <div className="mt-10">
        <h1 className="text-[#07a496] text-center lg:text-5xl md:text-2xl pt-7 font-bold">
          Our Blogs
        </h1>
        {error ? (
          <p className="text-red-500 text-center mt-6">{error}</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 px-4 sm:px-6 lg:px-8">
            {blogs.slice(0, 3).map((n) => (
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
                <div className="px-4 py-4">
                  <h2 className="text-xl font-semibold mb-2">{n.heading}</h2>
                  <div className="flex gap-3">
                    <SlCalender />
                    <p className="text-gray-800 text-sm mb-4">
                      <Moment format="MMMM DD, YYYY">{n?.date}</Moment>
                    </p>
                  </div>
                  <p
                    className="text-gray-700 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: n.shortcontent }}
                  ></p>
                  <Link
                    href={`/media/blogs/${n.url}`}
                    className="flex mb-3 py-4"
                  >
                    <div className="bg-[#07a496] p-3 text-white rounded-xl">
                      Read More
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Link href={"/media/blogs"} className="flex justify-center">
          <div className="bg-[#07a496] py-4 p-6 text-white rounded-xl mt-6 font-semibold">
            Know More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
