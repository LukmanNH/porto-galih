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
      <div className="md:flex items-stretch justify-between py-5 md:pt-[2.375rem] mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 max-w-screen-lg">
        <div className="relative w-full">
          <div className="text-white cursor-pointer text-base lg:text-lg flex items-center hover:border-b-[3px] border-[#2B9EDE] absolute">
            <img src="../👈.svg" alt="" className="mr-1 md:mr-2 h-4 lg:h-5" />
            <Link href={"/"}>Back to homepage</Link>
          </div>
        </div>
        <div
          onClick={() => setOpen((b) => !b)}
          className="absolute right-5 top-6 cursor-pointer md:hidden"
        >
          {isHumberger ? (
            open ? (
              <svg
                width="16.5"
                height="16.5"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="2.06066"
                  y1="1.93934"
                  x2="20.4454"
                  y2="20.3241"
                  stroke="white"
                  stroke-width="3"
                />
                <line
                  x1="2.06066"
                  y1="1.93934"
                  x2="11.9602"
                  y2="11.8388"
                  stroke="white"
                  stroke-width="3"
                />
                <line
                  x1="1.93934"
                  y1="20.3241"
                  x2="20.3241"
                  y2="1.93933"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
            ) : (
              <svg
                width="16.5"
                height="13.5"
                viewBox="0 0 26 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="1.5"
                  x2="26"
                  y2="1.5"
                  stroke="white"
                  stroke-width="3"
                />
                <line
                  y1="11.5"
                  x2="14"
                  y2="11.5"
                  stroke="white"
                  stroke-width="3"
                />
                <line
                  y1="21.5"
                  x2="26"
                  y2="21.5"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
            )
          ) : null}
        </div>
        {isNavItem ? (
          <ul
            className={`absolute md:static bg-[#01549F] text-opacity-50 text-white text-sm md:space-x-[2rem] md:flex md:items-center lg:space-x-[2.5rem] lg:text-base xl:space-x-[3.75rem] xl:text-lg md:pl-0 pl-6 md:z-auto left-0 w-full md:w-auto ${
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
