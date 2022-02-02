import React from "react";
import { Menu } from '@headlessui/react'

const Blog = () => {
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-[388px]">
        <div className="self-center mx-auto w-8/12 container ">
          <div className="flex justify-between pt-6">
            <p className="text-white">👈 Back to homepage</p>
            <ul className="flex text-white space-x-[3.75rem]">
              <li>Home</li>
              <li>Project</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </div>
          <div className="w-full mt-40">
            <div className="flex items-start">
              <div className="w-auto">
                <h1 className="text-white text-5xl font-bold">
                  ✏️ Writing Journey
                </h1>
                <p className="mt-10 text-white font-light text-lg tracking-wider">
                  Something new I'm starting for 2021 — every week or two I write
                  about what I've been working on, problems I've solved.
                </p>
              </div>
              <div className="w-7/12">
                <img
                  src="blog-img.png"
                  className="translate-y-2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-w-full mx-auto px-56 pt-6 text-sm text-[#282828]">
        <select className="w-2/12 border-2 mr-6 p-3 border-[#01549F] rounded-lg">
          <option>All Categories</option>
          <option>All Categories</option>
          <option>All Categories</option>
        </select>
        <select className="w-2/12 border-2 mr-6 p-3 border-[#01549F] rounded-lg">
          <option>By Newest</option>
          <option>All Categories</option>
          <option>All Categories</option>
        </select>
      </div>
    </>
  );
};

export default Blog;
