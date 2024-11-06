"use client";

import React from "react";
import { getBlog } from "@/services/getBlog";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Sidebar = () => {
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
    <div>
      <div className="sm:mt-[75px] lg:mt-[100px] mt-[75px] px-4 sm:px-6 lg:px-8 p-6 border-2 rounded-2xl h-screen">
        <ul className="h-screen">
          <div className="">
            <p className="text-[#07a496] font-semibold text-2xl py-2 ">
              More Blogs
            </p>
          </div>

          <table>
            <tbody>
              {blogs.map((n) => (
                <tr
                  key={n.id}
                  className="hover:translate-x-2 transition duration-300 ease-in-out"
                >
                  <td>
                    <div className="flex gap-1 items-center hover:text-[#07a496]">
                      <AiOutlineDoubleRight />
                    </div>
                  </td>
                  <td>
                    <Link href={`/media/blogs/${n.id}`}>
                      <div className="flex gap-1 items-center hover:text-[#07a496]">
                        <h2 className="text-xl font-medium">{n.heading}</h2>
                      </div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
