import React from "react";
import NavBar from "../../components/NavBar";
const PostDetails = () => {
  return (
    <>
      <div className="container-w-full bg-no-repeat bg-center bg-cover bg-hero h-60 sm:h-72 md:h-84 lg:h-96 flex items-stretch">
        <div className="w-11/12 self-center mx-auto container pt-20 md:pt-24 lg:pt-28 md:w-10/12 lg:w-9/12 xl:w-8/12">
          <NavBar />
          <div className="flex w-11/12 mx-auto md:w-8/12 lg:w-8/12 bg-gray-400">
            <div className="w-full self-start pb-9 lg:mr-3">
              <h1 className="text-white font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
                The Element of Surprise on UX Design throught Mobile App
              </h1>
              <p className="mt-3 lg:mt-7 text-white font-light text-sm sm:text-sm md:text-base lg:text-lg tracking-wider">
                📅 Dec 07, 2021 — by Galih Putra
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
