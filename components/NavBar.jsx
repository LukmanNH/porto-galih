import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = ({ isNavItem, isHumberger }) => {
  const router = useRouter();
  let [open, setOpen] = useState(false);
  const popUp = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(event) {
      if (popUp.current && !popUp.current.contains(event.target)) {
        setOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <div className="w-full top-0" ref={popUp}>
      <div className="md:flex items-stretch justify-between py-5 md:pt-[2.375rem] mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        <div className="relative w-full">
          <div className="text-white cursor-pointer text-base lg:text-lg 2xl:text-3xl flex items-center hover:border-b-[3px] border-[#2B9EDE] absolute">
            <img
              src="../👈.svg"
              alt=""
              className="mr-1 md:mr-2 h-4 lg:h-5 2xl:h-7"
            />
            <Link href={"/"}>Back to homepage</Link>
          </div>
        </div>
        <div
          onClick={() => setOpen((b) => !b)}
          className="absolute right-5 top-5 cursor-pointer md:hidden"
        >
          {isHumberger ? (
            open ? (
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3936 9.59473L9.60156 14.3867"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3996 14.3928L9.59961 9.59277"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.75 12C2.75 18.937 5.063 21.25 12 21.25C18.937 21.25 21.25 18.937 21.25 12C21.25 5.063 18.937 2.75 12 2.75C5.063 2.75 2.75 5.063 2.75 12Z"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
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
            )
          ) : null}
        </div>
        {isNavItem ? (
          <ul
            className={`absolute md:static bg-[#01549F] text-opacity-50 text-white text-sm md:space-x-[2rem] md:flex md:items-center lg:space-x-[2.5rem] lg:text-base xl:space-x-[3.75rem] xl:text-lg 2xl:text-2xl md:pl-0 pl-6 md:z-auto left-0 w-full md:w-auto ${
              open
                ? "top-16 opacity-100 transition duration-500 ease-in"
                : "top-16 opacity-0 md:opacity-100"
            } `}
          >
            <li
              className={` my-4 md:my-0
                  ${router.pathname == "/" ? "activeNav" : ""}`}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={` my-4 md:my-0
                  ${router.pathname == "/NotableWorks" ? "activeNav" : ""}`}
            >
              <Link href={"/NotableWorks"}>Project</Link>
            </li>
            <li
              className={` my-4 md:my-0
                ${router.pathname == "/WritingJourney" ? "activeNav" : ""}`}
            >
              <Link href={"/WritingJourney"}>Blog</Link>
            </li>
            <li
              className={` my-4 md:my-0
                  ${router.pathname == "/AboutMe" ? "activeNav" : ""}`}
            >
              <Link href={"/AboutMe"}>About</Link>
            </li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
