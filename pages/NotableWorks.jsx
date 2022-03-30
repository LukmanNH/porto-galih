import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import {
  getAllProjects,
  getPartOfProjects,
  getProjectCategories,
} from "../services";
const NotableWorks = ({ getFirst2Project, getProject }) => {
  const [dropDownCategories, setDropdownCategories] = useState(false);
  const [dropStyleCategories, setDropStyleCategories] = useState(false);
  const [buttonValue, setButtonValue] = useState(false);
  const [valueDropDownCategories, setValueDropDownCategories] =
    useState("All Categories");
  const dropdown = useRef(null);

  useEffect(() => {
    if (!dropDownCategories) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setDropStyleCategories(false);
        setDropdownCategories(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [dropDownCategories]);

  const onClickDropDownCategories = () => {
    setDropdownCategories((b) => !b);
    setDropStyleCategories((b) => !b);
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getProjectCategories().then((newCategories) =>
      setCategories(newCategories)
    );
  }, []);

  const goToDetailProject = (successRouter) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("prevUrl", successRouter);
    }
  };

  const renderContent = (value, index) => {
    return (
      <div
        className={`grid ${
          index != 2 && index != 3
            ? " col-span-2 md:col-span-1 lg:col-span-2"
            : "col-span-2 md:col-span-1"
        }`}
        key={index}
      >
        <div
          className={`rounded-md hover:shadow-custom-card bg-[#EEF2F5] ${
            index != 2 && index != 3 ? " lg:flex  " : " container "
          }`}
        >
          <div
            className={`h-[17.5rem] my-4 ${
              index != 2 && index != 3
                ? " order-last lg:w-6/12 mx-4 "
                : " mx-4 "
            }`}
          >
            <img
              src={value.node.thumbnail.url}
              className={
                value.node.isPremium
                  ? "w-full h-full rounded-md blur-[2px]"
                  : "w-full h-full rounded-md"
              }
              alt=""
            />
          </div>
          <div
            className={`mx-4 my-[38px] lg:mx-10 ${
              index != 2 && index != 3
                ? " lg:w-6/12 "
                : "  lg:mb-[2.375rem] mt-[1.063rem] "
            }`}
          >
            <h1 className="font-bold text-[1.3rem] sm:text-[1.5rem] lg:text-[1.625rem] xl:text-[1.75rem]">
              {value.node.title}
            </h1>
            <div className="flex font-light text-[#808080] my-2 text-xs sm:text-sm">
              <p>{value.node.platform}</p>
              <span className="h-[0.313rem] w-[0.313rem] bg-[#808080] rounded-full inline-block mx-3 self-center"></span>
              <p>{value.node.projectCategories[0].name}</p>
            </div>
            <p className="font-normal text-[#282828] mb-[1.438rem] leading-[20px] text-xs sm:text-sm">
              {value.node.excerpt}
            </p>
            <Link
              href={`/project/${
                value.node.isPremium ? "ProtectedContent" : value.node.slug
              }`}
            >
              <div
                className="cursor-pointer flex justify-center bg-white hover:bg-[#282828] hover:text-white shadow-custom-button py-[0.625rem] w-[9.125rem] rounded-[5px] font-medium text-sm text-[#01549F]"
                onClick={() => goToDetailProject(value.node.slug)}
              >
                <p className={value.node.isPremium ? "mr-[0.625rem]" : ""}>
                  View Project
                </p>
                {value.node.isPremium ? (
                  <img width={18} height={18} src="../🔒.svg" alt="" />
                ) : null}
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const filterProjectByCategories = getProject.filter((item) =>
    item.node.projectCategories.some(
      (items) => items.name === valueDropDownCategories
    )
  );

  const filterProjectByCategoriesLimit2 = getFirst2Project.filter((item) =>
    item.node.projectCategories.some(
      (items) => items.name === valueDropDownCategories
    )
  );

  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-[15.25rem] sm:h-[18.25rem] md:h-[20.25rem] lg:h-[22.25rem] xl:h-[24.25rem]">
        <div className="h-[15.25rem] sm:h-[18.25rem] md:h-[20.25rem] lg:h-[22.25rem] xl:h-[24.25rem] w-full justify-items-center grid content-between">
          <NavBar isNavItem={true} isHumberger={true} />
          <div className="flex w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 max-w-screen-lg">
            <div className="w-full md:w-8/12 lg:w-8/12 self-end pb-9 lg:mr-3">
              <div className="flex items-center text-white font-bold text-3xl sm:text-3xl md:text-5xl lg:text-5xl">
                <img
                  src="../🗃.svg"
                  alt=""
                  className="pr-1 md:pr-2 h-8 md:h-9 lg:h-12"
                />
                Notable Works
              </div>
              <p className="mt-4 lg:mt-8 text-white font-light text-xs leading-[20px] sm:text-sm md:text-base lg:text-lg tracking-wider lg:leading-8">
                Some project need password, contact{" "}
                <span className="font-medium underline">
                  windawan26@gmail.com
                </span>{" "}
                to gain access to the project, — Only selected cases granted.
              </p>
            </div>
            <div className="hidden md:flex md:w-4/12">
              <img
                src="notableWork-img.svg"
                className="md:translate-y-5 lg:translate-y-7 xl:translate-y-9 2xl:translate-y-9"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-w-full mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 container pt-6 text-sm text-[#282828] flex mb-14 max-w-screen-lg">
        <div className="absolute w-[10rem] mr-5 cursor-pointer" ref={dropdown}>
          <div
            onClick={() => onClickDropDownCategories()}
            className={`border-2 border-[#01549F] p-3 ${
              dropStyleCategories
                ? " icon-up rounded-md border-b-0 rounded-b-none"
                : " icon-down rounded-md "
            }`}
          >
            <ul>
              <li>{valueDropDownCategories}</li>
            </ul>
          </div>
          {dropDownCategories && (
            <ul className="absolute border-2 border-[#01549F] border-t-0 rounded-[0.313rem] rounded-t-none w-[10rem] bg-white">
              {valueDropDownCategories != "All Categories" ? (
                <li>
                  <p
                    onClick={function () {
                      setValueDropDownCategories("All Categories");
                      onClickDropDownCategories();
                    }}
                    className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white"
                  >
                    All Categories
                  </p>
                </li>
              ) : null}
              {categories.map((item) => (
                <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                  <p
                    onClick={function () {
                      setValueDropDownCategories(item.name);
                      onClickDropDownCategories();
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 pt-[3.625rem] mx-auto mb-28 container max-w-screen-lg">
        {/* <-- START Jenius App Re—design SECTION --> */}
        <div className="grid grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-[2.375rem]">
          {/* //buttonValue ? valueCategories === "All Categories" ? 'getAll' :
          'filter' : valueCategories === "All Categories ? 'getFirst2Project' :
          'filter' */}
          {buttonValue
            ? valueDropDownCategories === "All Categories"
              ? getProject.map((value, index) => renderContent(value, index))
              : filterProjectByCategories.map((value, index) =>
                  renderContent(value, index)
                )
            : valueDropDownCategories === "All Categories"
            ? getFirst2Project.map((value, index) =>
                renderContent(value, index)
              )
            : filterProjectByCategoriesLimit2.map((value, index) =>
                renderContent(value, index)
              )}
        </div>
        <div className="container mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 container mt-[5.5rem] mb-[6.25rem]">
          <div className="text-center">
            <div
              className="cursor-pointer text-base font-medium grid text-white bg-[#01549F] hover:bg-[#282828] transition duration-200 mx-auto hover:text-white shadow-custom-button py-[0.875rem] w-[11.25rem] rounded-[5px]"
              onClick={function () {
                setButtonValue(!buttonValue);
              }}
            >
              {buttonValue ? (
                <div className="flex items-center justify-self-center">
                  See less article
                  <img src="../👆.svg" alt="" className="pl-1 h-4" />
                </div>
              ) : (
                <div className="flex items-center justify-self-center">
                  See more article
                  <img src="../👇.svg" alt="" className="pl-1 h-4" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotableWorks;

export async function getStaticProps() {
  const getFirst2Project = (await getPartOfProjects()) || [];
  const getProject = (await getAllProjects()) || [];
  return {
    props: { getFirst2Project, getProject },
    revalidate: 30,
  };
}
