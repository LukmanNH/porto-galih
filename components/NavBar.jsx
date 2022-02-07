import React from "react";
import Link from "next/link";

const NavBar = ({ isNavItem }) => {
  return (
    <div className="flex justify-between pt-6 mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 container">
      <Link href={"/"}>
        <p className="text-white cursor-pointer text-sm lg:text-lg hover:border-b-[3px] border-[#2B9EDE] float-left">
          👈 Back to homepage
        </p>
      </Link>
      {isNavItem ? (
        <>
          <ul className="hidden text-opacity-50 text-white text-sm md:space-x-[2rem] md:flex lg:space-x-[2.5rem] lg:text-base xl:space-x-[3.75rem] xl:text-lg ">
            <li className="cursor-pointer active:text-opacity-100">
              <a>Home</a>
            </li>
            <li>Project</li>
            <li>Blog</li>
            <li>About</li>
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
