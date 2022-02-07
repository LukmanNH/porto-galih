import React from "react";
import NavBar from "./NavBar";

const Hero = ({ title, subTitle, imageUrl, isNavbarItemFromHero }) => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center h-60 sm:h-72 md:h-84 lg:h-96">
      <div className="h-60 sm:h-72 md:h-84 lg:h-96 w-full justify-items-center grid content-between">
        <NavBar isNavItem={isNavbarItemFromHero} />
        <div className="flex w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
          <div className="w-full md:w-8/12 lg:w-8/12 self-end pb-9 lg:mr-3">
            <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl ">
              {title}
            </h1>
            <p className="mt-4 lg:mt-8 text-white font-light text-sm sm:text-sm md:text-base lg:text-lg tracking-wider">
              {subTitle}
            </p>
          </div>
          <div className="hidden md:flex md:w-4/12 lg:w-4/12">
            <img
              src={imageUrl}
              className="md:translate-y-6 lg:translate-y-5 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
