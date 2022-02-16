import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = ({ isNavItem }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between pt-[2.375rem] mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 container">
      <Link href={"/"}>
        <p className="text-white cursor-pointer text-sm lg:text-lg hover:border-b-[3px] border-[#2B9EDE] float-left">
          👈 Back to homepage
        </p>
      </Link>
      {isNavItem ? (
        <>
          <ul className="hidden text-opacity-50 text-white text-sm md:space-x-[2rem] md:flex lg:space-x-[2.5rem] lg:text-base xl:space-x-[3.75rem] xl:text-lg ">
            <li className={router.pathname == "/" ? "activeNav" : ""}>
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={router.pathname == "/NotableWorks" ? "activeNav" : ""}
            >
              <Link href={"/NotableWorks"}>Project</Link>
            </li>
            <li
              className={
                router.pathname == "/WritingJourney" ? "activeNav" : ""
              }
            >
              <Link href={"/WritingJourney"}>Blog</Link>
            </li>
            <li className={router.pathname == "/AboutMe" ? "activeNav" : ""}>
              <Link href={"/AboutMe"}>About</Link>
            </li>
          </ul>
          <div className="md:hidden flex items-center justify-end">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default NavBar;
