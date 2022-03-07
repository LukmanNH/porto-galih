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
      <div className="pt-6 mx-auto lg:ml-[14.375rem] w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 z-10 relative">
        <div className="text-[#282828] cursor-pointer text-base lg:text-lg font-medium flex items-center hover:border-b-[3px] border-[#2B9EDE] absolute">
          <img src="../👈.svg" alt="" className="mr-1 md:mr-2 h-4 lg:h-5" />
          <Link href={"/"}>Back to homepage</Link>
        </div>
        <div className="pt-[6rem] w-full z-0">
          <div className="grid">
            <div className="mb-10 text-4xl lg:text-[2.25rem] font-bold">
              Hay, I'm Galih Putra Windawan
            </div>
            <p className="font-normal text-justify text-sm md:text-base lg:text-[1.25rem] text-[#282828] mb-8 lg:leading-10">
              Currently I work as <b className="font-semibold">UX Designer</b>{" "}
              at Digital Product Agency SALT Indonesia and as a{" "}
              <b className="font-semibold">Software Engineering Student</b> at{" "}
              <b className="font-semibold text-[#01549F]">BINUS University</b> —
              Day-to-day, I'm contributing on Digital Product Interface, Design
              System, UI Kit and Product Quality Check. My skills include
              digital product design, interactive design, prototyping, mobile
              design, and web design.
            </p>
            <div className="mx-auto h-[500px] bg-[#C4C4C4] w-80 sm:w-[20rem] md:w-[20.875rem] lg:w-[24.875rem] mb-8"></div>
            <p className="font-normal text-justify text-sm md:text-base lg:text-[1.25rem] text-[#282828] mb-[1.875rem] lg:leading-10">
              Beyond the office hours I’d love to playing online game such as
              Dota2, I'm quite confident in support role, and play various kinds
              of heroes like Eart Spirit, Crystal Maiden, and also I can play
              Luna but for support role haha.
            </p>
            <p className="font-normal text-justify text-sm md:text-base lg:text-[1.25rem] text-[#282828] lg:leading-10">
              I also spend my time on writing, I like to write about my personal
              development progress, and also what I'm working on — all my
              writing journey can be read{" "}
              <b className="font-semibold text-[#01549F]">Here</b> 👈, I also
              write all my career journey so far{" "}
              <b className="font-semibold text-[#01549F]">Here</b> 👈.
            </p>
          </div>
        </div>
      </div>
      <img src="../Gelombang 2.svg" alt="" className="w-full -mt-11" />
      <Footer />
    </div>
  );
};

export default AboutMe;
