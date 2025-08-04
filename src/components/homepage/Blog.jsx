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
    <div className="bg-white py-10">
      <h1
        className="text-[#07a496] text-center text-4xl lg:text-5xl font-bold mb-10"
        style={{ fontFamily: "Roboto Slab, serif" }}
      >
        Our Blogs
      </h1>

      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <ul className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-7">
          {blogs.slice(0, 3).map((n) => (
            <li
              key={n.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={`/Blog/${n.img}`}
                alt={n.heading}
                className="w-full h-auto"
                height={100}
                width={1000}
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{n.heading}</h2>
                <div className="flex items-center text-sm text-gray-600 gap-2 mb-3">
                  <SlCalender className="text-[#07a496]" />
                  <Moment format="MMMM DD, YYYY">{n.date}</Moment>
                </div>
                <p
                  className="text-gray-700 text-sm line-clamp-3 mb-4"
                  dangerouslySetInnerHTML={{ __html: n.shortcontent }}
                ></p>
                <Link href={`/media/blogs/${n.url}`} className="inline-block">
                  <div className="bg-[#07a496] text-white px-4 py-2 rounded-lg hover:bg-[#059e89] transition-colors">
                    Read More
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-center mt-10">
        <Link href="/media/blogs">
          <div className="bg-[#07a496] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#059e89] transition-colors">
            Know More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
