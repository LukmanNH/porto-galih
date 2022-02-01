import React from "react";

const Blog = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center h-[388px] ">
      <div className="container-w-full mx-auto px-56 pt-6">
        <div className="flex justify-between">
          <p className="text-white">👈 Back to homepage</p>
          <ul className="flex text-white space-x-[3.75rem]">
            <li>Home</li>
            <li>Project</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex mt-40">
          <div className="w-7/12 mr-24">
            <h1 className="text-white text-5xl">✏️ Writing Journey</h1>
            <p className="mt-5 text-white font-light text-lg tracking-wider">
              Something new I'm starting for 2021 — every week or two I write
              about what I've been working on, problems I've solved.
            </p>
          </div>
          <img
            src="blog-img.png"
            className="-translate-y-8"
            width={219}
            height={242}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
