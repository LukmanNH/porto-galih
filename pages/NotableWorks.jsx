import React, { useState } from "react";
import NavBar from "../components/NavBar";
const NotableWorks = () => {
  const [dropDownCategories, setDropdownCategories] = useState(false);
  const [dropStyleCategories, setDropStyleCategories] = useState(false);
  const onClickDropDownCategories = () => {
    setDropdownCategories(!dropDownCategories);
    setDropStyleCategories(!dropStyleCategories);
  };
  const [valueDropDownCategories, setValueDropDownCategories] =
    useState("All Categories");
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-60 sm:h-72 md:h-84 lg:h-96">
        <div className="h-60 sm:h-72 md:h-84 lg:h-96 w-full justify-items-center grid content-between">
          <NavBar isNavItem={true} />
          <div className="flex w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
            <div className="w-full md:w-8/12 lg:w-8/12 self-end pb-9 lg:mr-3">
              <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
                🗃 Notable Works
              </h1>
              <p className="mt-4 lg:mt-8 text-white font-light text-sm sm:text-sm md:text-base lg:text-lg tracking-wider">
                Some project need password, contact{" "}
                <span className="font-medium underline">
                  windawan26@gmail.com
                </span>{" "}
                to gain access to the project, — Only selected cases granted.
              </p>
            </div>
            <div className="hidden md:flex md:w-4/12 lg:w-4/12">
              <img
                src="../notableWork-img.png"
                className="md:translate-y-6 lg:translate-y-5 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-w-full mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 container pt-6 text-sm text-[#282828] flex mb-14">
        <div className="w-[10rem] relative mr-5 cursor-pointer">
          <div
            className={`border-2 border-[#01549F] p-3 ${
              dropStyleCategories
                ? " icon-up rounded-lg border-b-0 rounded-b-none"
                : " icon-down rounded-lg "
            }`}
          >
            <ul onClick={() => onClickDropDownCategories()}>
              <li>{valueDropDownCategories}</li>
            </ul>
          </div>
          {dropDownCategories && (
            <ul className="absolute border-2 border-[#01549F] border-t-0 rounded-lg rounded-t-none w-[10rem] bg-white">
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownCategories("Mobile")}>
                  Mobile
                </p>
              </li>
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownCategories("Website")}>
                  Website
                </p>
              </li>
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownCategories("B2B Service")}>
                  B2B Service
                </p>
              </li>
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownCategories("Mobile Banking")}>
                  Mobile Banking
                </p>
              </li>
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownCategories("Design System")}>
                  Design System
                </p>
              </li>
              <li>
                <p
                  onClick={() => setValueDropDownCategories("Service App")}
                  className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white"
                >
                  Service App
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto mb-28">
        {/* <-- START Telkomsel B2B Platform SECTION --> */}
        <div className="bg-card h-[19.375rem] rounded-md px-12 py-[2.375rem] flex hover:shadow-custom-card transition duration-0 hover:duration-500 mb-[38px]">
          <div className="lg:w-6/12 order-last">
            <img src="../b2b-img.png" className="blur-[1px]" alt="" />
          </div>
          <div className="lg:w-6/12">
            <h1 className="text-[1.75rem] font-bold">
              Revamp the Telkomsel B2B Platform Client Dashboard
            </h1>
            <div className="flex text-sm font-light text-[#808080] my-2">
              <p>Website</p>
              <span className="h-[5px] w-[5px] bg-[#808080] rounded-full inline-block mx-3 self-center"></span>
              <p>B2B Service</p>
            </div>
            <p className="text-sm font-normal text-[#282828] mb-[1.438rem]">
              Merge multiple adivpplication dashboards into one with seamless
              user experiences.
            </p>
            <div className="cursor-pointer flex justify-center bg-white hover:bg-[#282828] hover:text-white shadow-custom-button py-[0.625rem] w-[9.125rem] rounded-[5px] font-medium text-sm text-[#01549F]">
              <p className="mr-[10px]">View Project</p>
              <img width={18} height={18} src="../lock-icon.png" alt="" />
            </div>
          </div>
        </div>
        {/* <-- END Telkomsel B2B Platform SECTION --> */}

        {/* <-- START Jenius App Re—design SECTION --> */}
        <div className="bg-card h-[19.375rem] rounded-md px-12 py-[2.375rem] flex hover:shadow-custom-card mb-[38px]">
          <div className="lg:w-6/12 order-last">
            <img src="../jenius-img.png" className="" alt="" />
          </div>
          <div className="lg:w-6/12">
            <h1 className="text-[1.75rem] font-bold">
              Jenius App Re—design Concept for Competition
            </h1>
            <div className="flex text-sm font-light text-[#808080] my-2">
              <p>Mobile</p>
              <span className="h-[5px] w-[5px] bg-[#808080] rounded-full inline-block mx-3 self-center"></span>
              <p>Mobile Banking</p>
            </div>
            <p className="text-sm font-normal text-[#282828] mb-[1.438rem]">
              Improve the User interface and user flow of using the Jenius
              mobile banking application
            </p>
            <div className="cursor-pointer flex justify-center bg-white hover:bg-[#282828] hover:text-white shadow-custom-button py-[0.625rem] w-[9.125rem] rounded-[5px] font-medium text-sm text-[#01549F]">
              <p className="mr-[10px]">View Project</p>
              {/* <img width={18} height={18} src="../lock-icon.png" alt="" /> */}
            </div>
          </div>
        </div>
        {/* <-- END Jenius App Re—design SECTION --> */}

        <div className="grid gap-[38px] grid-cols-2 h-[599px] mb-[38px]">
          {/* <-- START B2B Platform Design System SECTION --> */}
          <div className="container rounded-md bg-[#EEF2F5] px-11 py-[2.375rem] hover:shadow-custom-card mb-[38px]">
            <div className="w-full mb-10">
              <img src="../desys-img.png" className="blur-[1px]" alt="" />
            </div>
            <div className="w-full">
              <h1 className="text-[1.75rem] font-bold">
                Telkomsel B2B Platform Design System
              </h1>
              <div className="flex text-sm font-light text-[#808080] my-2">
                <p>Website</p>
                <span className="h-[5px] w-[5px] bg-[#808080] rounded-full inline-block mx-3 self-center"></span>
                <p>Design Systems</p>
              </div>
              <p className="text-sm font-normal text-[#282828] mb-[1.438rem]">
                To make it easier for developers to use the available components
              </p>
              <div className="cursor-pointer flex justify-center bg-white hover:bg-[#282828] hover:text-white shadow-custom-button py-[0.625rem] w-[9.125rem] rounded-[5px] font-medium text-sm text-[#01549F]">
                <p className="mr-[10px]">View Project</p>
                <img width={18} height={18} src="../lock-icon.png" alt="" />
              </div>
            </div>
          </div>
          {/* <-- END B2B Platform Design System SECTION --> */}

          {/* <-- START DigiHub API Marketplace SECTION --> */}
          <div className="container rounded-md bg-[#EEF2F5] px-11 py-[2.375rem] hover:shadow-custom-card mb-[38px]">
            <div className="w-full mb-10">
              <img src="../digihub-img.png" className="blur-[1px]" alt="" />
            </div>
            <div className="w-full">
              <h1 className="text-[1.75rem] font-bold">
                Telkomsel DigiHub API Marketplace Revamp
              </h1>
              <div className="flex text-sm font-light text-[#808080] my-2">
                <p>Website</p>
                <span className="h-[5px] w-[5px] bg-[#808080] rounded-full inline-block mx-3 self-center"></span>
                <p>Marketplace</p>
              </div>
              <p className="text-sm font-normal text-[#282828] mb-[1.438rem]">
                Build and develop an e-commerce platform that sells Telkomsel's
                Application Programming Interface (API)
              </p>
              <div className="cursor-pointer flex justify-center bg-white hover:bg-[#282828] hover:text-white shadow-custom-button py-[0.625rem] w-[9.125rem] rounded-[5px] font-medium text-sm text-[#01549F]">
                <p className="mr-[10px]">View Project</p>
                <img width={18} height={18} src="../lock-icon.png" alt="" />
              </div>
            </div>
          </div>
          {/* <-- END DigiHub API Marketplace SECTION --> */}
        </div>

        {/* <-- START Barbershop Booking SECTION --> */}
        <div className="bg-card h-[19.375rem] rounded-md px-12 py-[2.375rem] flex hover:shadow-custom-card mb-[38px]">
          <div className="lg:w-6/12 order-last">
            <img src="../barber-img.png" className="" alt="" />
          </div>
          <div className="lg:w-6/12">
            <h1 className="text-[1.75rem] font-bold">
              UX Case Study — Barbershop Booking
            </h1>
            <div className="flex text-sm font-light text-[#808080] my-2">
              <p>Mobile</p>
              <span className="h-[5px] w-[5px] bg-[#808080] rounded-full inline-block mx-3 self-center"></span>
              <p>Service App</p>
            </div>
            <p className="text-sm font-normal text-[#282828] mb-[1.438rem]">
              Create an app that can be used to find, order, and pay for
              barbershop services
            </p>
            <div className="cursor-pointer flex justify-center bg-white hover:bg-[#282828] hover:text-white shadow-custom-button py-[0.625rem] w-[9.125rem] rounded-[5px] font-medium text-sm text-[#01549F]">
              <p className="mr-[10px]">View Project</p>
              {/* <img width={18} height={18} src="../lock-icon.png" alt="" /> */}
            </div>
          </div>
        </div>
        {/* <-- END Barbershop Booking SECTION --> */}

        {/* <-- START Barbershop Booking SECTION --> */}
        <div className="bg-card h-[19.375rem] rounded-md px-12 py-[2.375rem] flex hover:shadow-custom-card mb-[38px]">
          <div className="lg:w-6/12 order-last">
            <img src="../barber-img.png" className="" alt="" />
          </div>
          <div className="lg:w-6/12">
            <h1 className="text-[1.75rem] font-bold">
              My Visual Design Gallery Exploration
            </h1>
            <div className="flex text-sm font-light text-[#808080] my-2">
              <p>Website</p>
              <span className="h-[5px] w-[5px] bg-[#808080] rounded-full inline-block mx-3 self-center"></span>
              <p>Mobile</p>
            </div>
            <p className="text-sm font-normal text-[#282828] mb-[1.438rem]">
              A collection of visual design explorations that I do, usually
              uploaded on dribbble.com
            </p>
            <div className="cursor-pointer flex justify-center bg-white hover:bg-[#282828] hover:text-white shadow-custom-button py-[0.625rem] w-[9.125rem] rounded-[5px] font-medium text-sm text-[#01549F]">
              <p className="mr-[10px]">View Project</p>
              {/* <img width={18} height={18} src="../lock-icon.png" alt="" /> */}
            </div>
          </div>
        </div>
        {/* <-- END Barbershop Booking SECTION --> */}
      </div>
    </>
  );
};

export default NotableWorks;
