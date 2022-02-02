import React from "react";

const WritingJourney = () => {
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
          <div className="w-full mt-36">
            <div className="flex items-start">
              <div className="w-auto">
                <h1 className="text-white text-5xl font-bold">
                  ✏️ Writing Journey
                </h1>
                <p className="mt-10 text-white font-light text-lg tracking-wider">
                  Something new I'm starting for 2021 — every week or two I
                  write about what I've been working on, problems I've solved.
                </p>
              </div>
              <div className="w-7/12">
                <img src="blog-img.png" className="translate-y-2" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-w-full mx-auto px-56 pt-6 text-sm text-[#282828]">
        <select className="w-2/12 border-2 mr-6 p-3 border-[#01549F] rounded-md appearance-none icon-down">
          <option>All Categories</option>
          <option>All Categories</option>
          <option>All Categories</option>
        </select>
        <select className="w-2/12 border-2 mr-6 p-3 border-[#01549F] rounded-md appearance-none icon-down">
          <option>By Newest</option>
          <option>All Categories</option>
          <option>All Categories</option>
        </select>
      </div>
      <div className="container-w-full mx-auto px-56 pt-14">
        <p className="text-lg font-light text-[#282828] mb-6">Januari 2022</p>
        <div>
          <table className="text-lg font-semibold text-[#282828]">
            <tr>
              <div className="bg-gray-100 cursor-pointer hover:border-b-2 border-[#2B9EDE] mb-3">
                <td>Senin 24</td>
                <td>:</td>
                <td>The Element of Surprise on UX Design</td>
              </div>
            </tr>
            <tr className="cursor-pointer hover:border-b-2 border-[#2B9EDE]">
              <div>
                <td>Minggu 23</td>
                <td>:</td>
                <td>UX Design bukan hanya untuk product digital?</td>
              </div>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default WritingJourney;
