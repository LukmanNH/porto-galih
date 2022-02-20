import React from "react";
import { useReducer, useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div>
      <img
        src="../Gelombang 1.svg"
        alt=""
        className="top-0 absolute w-full z-0"
      />
      <div className="pt-6 mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 z-10 relative">
        <div className="text-[#282828] cursor-pointer text-base lg:text-lg font-medium flex items-center hover:border-b-[3px] border-[#2B9EDE] absolute">
          <img src="../👈.svg" alt="" className="mr-1 md:mr-2 h-4 lg:h-5" />
          <Link href={"/"}>Back to homepage</Link>
        </div>
        <div className="pt-36 w-full z-0">
          <div className="grid">
            <div className="mb-10 text-4xl lg:text-[2.25rem] font-bold">
              Hay, I'm Galih Putra Windawan
            </div>
            <p className="font-light text-sm md:text-base lg:text-lg text-[#282828] mb-8">
              Currently I work as UX Designer at Digital Product Agency SALT
              Indonesia and as a Software Engineering Student at BINUS
              University — Day-to-day, I'm contributing on Digital Product
              Interface, Design System, UI Kit and Product Quality Check. My
              skills include digital product design, interactive design,
              prototyping, mobile design, and web design.
            </p>
            <div className="mx-auto h-[500px] bg-[#C4C4C4] w-[24.875rem] mb-8"></div>
            <p className="font-light text-sm md:text-base lg:text-lg text-[#282828] mb-[1.875rem]">
              Beyond the office hours I’d love to playing online game such as
              Dota2, I'm quite confident in support role, and play various kinds
              of heroes like Eart Spirit, Crystal Maiden, and also I can play
              Luna but for support role haha.
            </p>
            <p className="font-light text-sm md:text-base lg:text-lg text-[#282828] mb-[8.5rem]">
              I also spend my time on writing, I like to write about my personal
              development progress, and also what I'm working on — all my
              writing journey can be read Here 👈, I also write all my career
              journey so far Here 👈.
            </p>
          </div>
        </div>
      </div>
      <img
        src="../Gelombang 2.svg"
        alt=""
        className="-bottom-2/3 absolute w-full z-[-1]"
      />
      <Footer />
    </div>
  );
};

export default AboutMe;
